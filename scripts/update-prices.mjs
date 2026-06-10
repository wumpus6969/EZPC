// Nightly price refresh.
// Walks every (part name, seller, url) tuple defined in script.js,
// fetches the retailer or OEM product page, and tries to pull a current
// price out of JSON-LD or og:price meta. Writes a flat key/value
// mapping to prices.json that the front-end merges in at page load.
//
// Many retailers (Amazon, Best Buy, eBay) block server-side scrapers
// outright. For those URLs the fetch silently fails and the prior
// curated price stays in effect.

import fs from "node:fs/promises";

const SCRIPT_PATH = "script.js";
const OUT_PATH = "prices.json";
const UA =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36";
const TIMEOUT_MS = 22000;
const CONCURRENCY = 8;

const src = await fs.readFile(SCRIPT_PATH, "utf8");

// Build a sorted index of every `name: "..."` position so each offer
// can attribute itself to the nearest enclosing part.
const nameIndex = [];
{
  const nameRe = /name:\s*"([^"]+)"/g;
  let m;
  while ((m = nameRe.exec(src))) nameIndex.push({ pos: m.index, name: m[1] });
}

function nameForPosition(pos) {
  let lo = 0;
  let hi = nameIndex.length - 1;
  let pick = "";
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (nameIndex[mid].pos <= pos) {
      pick = nameIndex[mid].name;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return pick;
}

// Pull every offer object out of the file. A naive but workable
// pattern: each curated offer object contains both `seller:` and
// `url:` fields. Matches both single-line and multi-line objects.
const offerRe =
  /\{\s*seller:\s*"([^"]+)"[^}]*?url:\s*"([^"]+)"[^}]*?\}/g;

const offers = [];
{
  let m;
  while ((m = offerRe.exec(src))) {
    offers.push({
      name: nameForPosition(m.index),
      seller: m[1],
      url: m[2],
    });
  }
}

console.log(`extracted ${offers.length} offer rows`);

const ABORT_REASON = "timeout";

async function fetchPrice(url) {
  let response;
  try {
    response = await fetch(url, {
      headers: {
        "User-Agent": UA,
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.7",
      },
      redirect: "follow",
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
  } catch {
    return null;
  }

  if (!response.ok) return null;

  let html;
  try {
    html = await response.text();
  } catch {
    return null;
  }

  // JSON-LD Product / Offer
  const ldMatches = [...html.matchAll(
    /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
  )];
  for (const ld of ldMatches) {
    try {
      const data = JSON.parse(ld[1].trim());
      const nodes = Array.isArray(data) ? data : [data];
      for (const node of nodes) {
        const hit = extractLdPrice(node);
        if (hit) return hit;
      }
    } catch {
      // ignore malformed JSON-LD
    }
  }

  // og:price:amount fallback (Open Graph product extension)
  const og = html.match(
    /<meta[^>]+property=["']product:price:amount["'][^>]+content=["']([^"']+)["']/i,
  );
  if (og) {
    const p = parseFloat(og[1]);
    if (Number.isFinite(p) && p > 0) {
      const cur = html.match(
        /<meta[^>]+property=["']product:price:currency["'][^>]+content=["']([^"']+)["']/i,
      );
      return { price: p, currency: cur ? cur[1].toUpperCase() : "" };
    }
  }

  return null;
}

// Israeli retailers list ILS prices. The catalog stores every offer
// price in USD, so convert when the source currency is ILS (or the host
// is a known Israeli store that omits the currency tag).
const ILS_PER_USD = 3.7;
const ILS_HOSTS = ["tms.co.il", "ksp.co.il", "ivory.co.il", "bug.co.il", "dominator.co.il"];

function toUsd(hit, pageUrl) {
  if (!hit) return null;
  let host = "";
  try {
    host = new URL(pageUrl).host.replace(/^www\./, "");
  } catch {
    // ignore
  }
  const isIls = hit.currency === "ILS" || (!hit.currency && ILS_HOSTS.some((h) => host.endsWith(h)));
  const usd = isIls ? hit.price / ILS_PER_USD : hit.price;
  return Math.round(usd * 100) / 100;
}

function extractLdPrice(node) {
  if (!node || typeof node !== "object") return null;
  const candidates = [];
  if (node.offers) {
    if (Array.isArray(node.offers)) candidates.push(...node.offers);
    else candidates.push(node.offers);
  }
  if (Array.isArray(node["@graph"])) {
    for (const g of node["@graph"]) {
      if (g.offers) {
        if (Array.isArray(g.offers)) candidates.push(...g.offers);
        else candidates.push(g.offers);
      }
    }
  }
  for (const c of candidates) {
    const raw = c.price ?? c.lowPrice ?? c.priceSpecification?.price;
    const num = typeof raw === "number" ? raw : parseFloat(raw);
    if (Number.isFinite(num) && num > 0) {
      const currency = c.priceCurrency || c.priceSpecification?.priceCurrency || "";
      return { price: num, currency: String(currency).toUpperCase() };
    }
  }
  return null;
}

const prices = {};
const queue = [...offers];
let inFlight = 0;
let completed = 0;

async function worker(id) {
  while (queue.length) {
    const offer = queue.shift();
    if (!offer || !offer.name) continue;
    const key = `${offer.name}|${offer.seller}`;
    if (prices[key]) continue;
    inFlight++;
    const hit = await fetchPrice(offer.url);
    const price = toUsd(hit, offer.url);
    inFlight--;
    completed++;
    if (price) {
      prices[key] = {
        price,
        fetchedAt: new Date().toISOString(),
      };
    }
    if (completed % 20 === 0) {
      console.log(
        `progress ${completed}/${offers.length} (resolved ${
          Object.keys(prices).length
        })`,
      );
    }
  }
}

await Promise.all(
  Array.from({ length: CONCURRENCY }, (_, i) => worker(i)),
);

const payload = {
  updatedAt: new Date().toISOString(),
  source: "scripts/update-prices.mjs",
  prices,
};

await fs.writeFile(OUT_PATH, JSON.stringify(payload, null, 2) + "\n", "utf8");

console.log(
  `wrote ${Object.keys(prices).length} prices to ${OUT_PATH} (of ${offers.length} attempted)`,
);
