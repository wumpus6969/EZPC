// Image resolver.
// For every catalog part whose current image URL is missing or does not
// return a usable image (non-200, or not an image content-type), this
// script visits the product's OEM page and retailer offer pages, pulls
// a candidate image (og:image, twitter:image, JSON-LD image), verifies
// it actually loads, and records the first good URL.
//
// Output: images.json keyed by part slug -> image URL. The front-end
// loads this and lets it override the static map and inline images.
//
// Runs on a GitHub Actions runner, whose network reach is broader than
// a local sandbox, so it can resolve images that are blocked locally.

import fs from "node:fs/promises";

const SCRIPT_PATH = "script.js";
const IMAGES_PATH = "product-images.js";
const OUT_PATH = "images.json";
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36";
const PAGE_TIMEOUT = 22000;
const HEAD_TIMEOUT = 15000;
const CONCURRENCY = 6;

// --- Load the catalog by evaluating the data portion of script.js -----

const rawScript = await fs.readFile(SCRIPT_PATH, "utf8");
const rawImages = await fs.readFile(IMAGES_PATH, "utf8");

const sandbox = { window: { productImageMap: {} } };
function loadCatalog() {
  // Cut script.js at the first function definition so only data +
  // top-level transforms run. Convert const/let to var so repeated
  // evaluation in this scope does not collide.
  const cut = rawScript.indexOf("function storedTheme");
  const dataSrc = rawScript
    .slice(0, cut)
    .replace(/\bconst /g, "var ")
    .replace(/\blet /g, "var ");

  const fn = new Function(
    "window",
    `${rawImages}\n${dataSrc}\n;return { parts: typeof parts !== "undefined" ? parts : [], productImageMap: window.productImageMap };`,
  );
  return fn(sandbox.window);
}

const { parts, productImageMap } = loadCatalog();
console.log(`loaded ${parts.length} parts`);

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function currentImage(part) {
  return productImageMap[slugify(part.name)] || part.image || "";
}

// --- Helpers ----------------------------------------------------------

// Generic share images, site logos, and category banners that pages
// expose as og:image but are not the product photo. Reject these so the
// resolver keeps looking for a real product image.
const JUNK_IMAGE_PATTERNS = [
  /\/header\/ogimage/i,
  /logo-square-letter/i,
  /facebook-like/i,
  /share-default/i,
  /\/social\//i,
  /\/category-pages\//i,
  /clientlib-common\/resources\/images\/logo/i,
  /sprite|placeholder|default\.(png|jpg|svg)/i,
  /og[-_]?image\.(png|jpg)/i,
];

function isJunkImage(url) {
  return JUNK_IMAGE_PATTERNS.some((re) => re.test(url));
}

async function isLoadableImage(url) {
  if (!url || !/^https?:\/\//i.test(url)) return false;
  if (isJunkImage(url)) return false;
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: { "User-Agent": UA, Accept: "image/avif,image/webp,image/*,*/*" },
      redirect: "follow",
      signal: AbortSignal.timeout(HEAD_TIMEOUT),
    });
    if (!res.ok) return false;
    const type = res.headers.get("content-type") || "";
    if (!type.startsWith("image/")) return false;
    // Drain a little to confirm the body exists.
    const buf = await res.arrayBuffer();
    return buf.byteLength > 1024;
  } catch {
    return false;
  }
}

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&#x2F;/g, "/")
    .replace(/&#47;/g, "/")
    .replace(/&quot;/g, '"');
}

function extractCandidates(html) {
  const out = [];
  const push = (u) => {
    if (u) out.push(decodeEntities(u.trim()));
  };

  const metaRe =
    /<meta[^>]+(?:property|name)=["'](?:og:image(?::secure_url)?|twitter:image(?::src)?)["'][^>]+content=["']([^"']+)["']/gi;
  let m;
  while ((m = metaRe.exec(html))) push(m[1]);

  // content-before-property ordering
  const metaRe2 =
    /<meta[^>]+content=["']([^"']+)["'][^>]+(?:property|name)=["'](?:og:image|twitter:image)["']/gi;
  while ((m = metaRe2.exec(html))) push(m[1]);

  // JSON-LD image fields
  const ldRe =
    /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  while ((m = ldRe.exec(html))) {
    try {
      const data = JSON.parse(m[1].trim());
      collectLdImages(data, push);
    } catch {
      // ignore malformed JSON-LD
    }
  }

  // De-dup, keep order
  return [...new Set(out)];
}

function collectLdImages(node, push) {
  if (!node || typeof node !== "object") return;
  if (Array.isArray(node)) {
    node.forEach((n) => collectLdImages(n, push));
    return;
  }
  if (node.image) {
    if (typeof node.image === "string") push(node.image);
    else if (Array.isArray(node.image)) node.image.forEach((i) => push(typeof i === "string" ? i : i?.url));
    else if (node.image.url) push(node.image.url);
  }
  if (node["@graph"]) collectLdImages(node["@graph"], push);
}

async function fetchPageImages(pageUrl) {
  try {
    const res = await fetch(pageUrl, {
      headers: {
        "User-Agent": UA,
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.7",
      },
      redirect: "follow",
      signal: AbortSignal.timeout(PAGE_TIMEOUT),
    });
    if (!res.ok) return [];
    const html = await res.text();
    return extractCandidates(html);
  } catch {
    return [];
  }
}

function sourcePagesFor(part) {
  const pages = [];
  if (part.oemUrl) pages.push(part.oemUrl);
  // Prefer OEM, then any non-marketplace retailer offer page.
  (part.offers || []).forEach((offer) => {
    if (offer.url) pages.push(offer.url);
  });
  return [...new Set(pages)];
}

async function resolvePart(part) {
  // Keep a working current image.
  const current = currentImage(part);
  if (await isLoadableImage(current)) return null;

  for (const page of sourcePagesFor(part)) {
    const candidates = await fetchPageImages(page);
    for (const candidate of candidates) {
      if (await isLoadableImage(candidate)) {
        return { slug: slugify(part.name), name: part.name, url: candidate, source: page };
      }
    }
  }
  return null;
}

// --- Run with a small worker pool -------------------------------------

const images = {};
const queue = [...parts];
let done = 0;
let fixed = 0;

async function worker() {
  while (queue.length) {
    const part = queue.shift();
    if (!part) continue;
    const result = await resolvePart(part);
    done++;
    if (result) {
      images[result.slug] = result.url;
      fixed++;
      console.log(`fixed ${result.name}\n   -> ${result.url}\n   (from ${result.source})`);
    }
    if (done % 25 === 0) console.log(`progress ${done}/${parts.length}, fixed ${fixed}`);
  }
}

await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));

// Merge with any existing images.json so previously resolved entries
// survive even if a source page is temporarily down.
let previous = {};
try {
  const prev = JSON.parse(await fs.readFile(OUT_PATH, "utf8"));
  if (prev && prev.images) previous = prev.images;
} catch {
  // first run
}

const merged = { ...previous, ...images };

const payload = {
  updatedAt: new Date().toISOString(),
  source: "scripts/resolve-images.mjs",
  images: merged,
};

await fs.writeFile(OUT_PATH, JSON.stringify(payload, null, 2) + "\n", "utf8");
console.log(`wrote ${Object.keys(merged).length} image overrides to ${OUT_PATH} (newly fixed ${fixed})`);
