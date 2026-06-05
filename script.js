const verifiedAt = "June 5, 2026";

const parts = [
  {
    category: "CPU",
    name: "AMD Ryzen 7 9800X3D 8-Core AM5 Processor",
    socket: "AM5",
    memory: "DDR5",
    power: 120,
    specs: "8 cores, 3D V-Cache, AM5 gaming flagship",
    overview: "AMD's Ryzen 7 9800X3D is an AM5 Ryzen 9000 Series desktop CPU built around Zen 5 cores and second-generation AMD 3D V-Cache. It targets high-end gaming with 8 cores, 16 threads, a large 104MB cache pool, DDR5 platform support, and a 120W default TDP.",
    oemUrl: "https://www.amd.com/en/products/processors/desktops/ryzen/9000-series/amd-ryzen-7-9800x3d.html",
    image: "https://m.media-amazon.com/images/I/71NMFO0iUhL._AC_SL1500_.jpg",
    offers: [
      { seller: "Amazon", price: 439, status: "Amazon product page", url: "https://www.amazon.com/dp/B0DKFMSMYK" },
      { seller: "B&H", price: 433, was: 453, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1859346-REG/amd_100_100001084wof_ryzen_7_9800x3d_am5.html" },
      { seller: "Best Buy", price: 479, status: "In stock", url: "https://www.bestbuy.com/product/amd-ryzen-7-9800x3d-8-core-16-thread-4-7-ghz-5-2-ghz-max-boost-socket-am5-pci-express-5-0-unlocked-desktop-processor-silver/JXKQHH5XSR" },
      { seller: "Newegg", price: 550, status: "Marketplace", url: "https://www.newegg.com/p/1WK-0184-000R2" },
    ],
  },
  {
    category: "CPU",
    name: "AMD Ryzen 9 9950X 16-Core AM5 Processor",
    socket: "AM5",
    memory: "DDR5",
    power: 170,
    specs: "16 cores, Zen 5, workstation and creator builds",
    overview: "AMD's Ryzen 9 9950X is a 16-core, 32-thread Ryzen 9000 Series processor for AM5 systems. It is aimed at heavy multitasking, creation, and high-end desktop builds with Zen 5 cores, DDR5 support, PCIe 5.0 platform capability, and boost clocks up to 5.7 GHz.",
    oemUrl: "https://www.amd.com/en/products/processors/desktops/ryzen/9000-series/amd-ryzen-9-9950x.html",
    image: "https://m.media-amazon.com/images/I/61dukbEGziL._AC_SL1500_.jpg",
    offers: [
      { seller: "Amazon", price: 498, status: "Amazon product page", url: "https://www.amazon.com/dp/B0D6NNRBGP" },
      { seller: "B&H", price: 531.63, was: 631.63, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1834127-REG/amd_100_100001277wof_ryzen_9_9950x.html" },
      { seller: "Best Buy", price: 549, status: "Product page", url: "https://www.bestbuy.com/product/amd-ryzen-9-9950x-16-core-32-thread-4-3-ghz-5-7-ghz-max-boost-socket-am5-pci-express-5-0-unlocked-desktop-processor-silver/JXKQHH5XP5" },
    ],
  },
  {
    category: "CPU",
    name: "Intel Core Ultra 9 285K LGA1851 Processor",
    socket: "LGA1851",
    memory: "DDR5",
    power: 250,
    specs: "24 cores, LGA1851, unlocked Arrow Lake desktop CPU",
    overview: "Intel's Core Ultra 9 285K is an unlocked LGA1851 desktop processor in the Core Ultra 200S family. It combines 8 performance cores and 16 efficient cores for 24 total cores and 24 threads, with up to 5.7 GHz turbo frequency, 36MB Intel Smart Cache, and integrated Intel graphics.",
    oemUrl: "https://www.intel.com/content/www/us/en/products/sku/241060/intel-core-ultra-9-processor-285k-36m-cache-up-to-5-70-ghz/specifications.html",
    image: "https://m.media-amazon.com/images/I/51xxm7JkJ6L._AC_SL1000_.jpg",
    offers: [
      { seller: "Amazon", price: 429.99, status: "Amazon product page", url: "https://www.amazon.com/dp/B0DFKC99VL" },
      { seller: "B&H", price: 559.77, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1852498-REG/intel_bx80768285k_core_ultra_9_285k.html" },
    ],
  },
  {
    category: "CPU",
    name: "Intel Core i7-14700K LGA1700 Processor",
    socket: "LGA1700",
    memory: "DDR5",
    power: 253,
    specs: "20 cores, unlocked, strong gaming and productivity value",
    overview: "Intel's Core i7-14700K is an unlocked 14th Gen LGA1700 desktop processor with 20 cores, arranged as 8 performance cores and 12 efficient cores, plus 28 total threads. Intel lists a maximum turbo frequency up to 5.6 GHz and 33MB cache, making it a strong gaming and productivity CPU for Z790-class builds.",
    oemUrl: "https://www.intel.com/content/www/us/en/products/sku/236783/intel-core-i7-processor-14700k-33m-cache-up-to-5-60-ghz/specifications.html",
    image: "https://m.media-amazon.com/images/I/61aAAg73uLL._AC_SL1500_.jpg",
    offers: [
      { seller: "Amazon", price: 399.99, status: "Amazon product page", url: "https://www.amazon.com/dp/B0CGJ41C9W" },
      { seller: "B&H", price: 389, status: "Temp. out", url: "https://www.bhphotovideo.com/c/product/1781467-REG/intel_bx8071514700k_core_i7_14700k_20_core_lga.html" },
      { seller: "Best Buy", price: 399.99, status: "Product page", url: "https://www.bestbuy.com/product/intel-core-i7-14700k-14th-gen-20-core-28-thread-4-3ghz-5-6ghz-turbo-socket-lga-1700-unlocked-desktop-processor-multi/JXZRJ557C2" },
    ],
  },
  {
    category: "GPU",
    name: "Gigabyte GeForce RTX 5080 WINDFORCE OC SFF 16G Graphics Card",
    power: 360,
    specs: "16GB GDDR7, WINDFORCE cooler, factory OC",
    overview: "Gigabyte's RTX 5080 WINDFORCE OC SFF 16G is a factory-overclocked GeForce RTX 5080 card with 16GB of GDDR7 memory. The OEM page highlights the WINDFORCE cooling system, SFF-ready sizing, NVIDIA DLSS support, and the GV-N5080WF3OC-16GD model identifier.",
    oemUrl: "https://www.gigabyte.com/Graphics-Card/GV-N5080WF3OC-16GD",
    image: "https://m.media-amazon.com/images/I/71VzCOwW80L._AC_SL1500_.jpg",
    offers: [
      { seller: "Amazon", price: 1355.99, status: "Amazon product page", url: "https://www.amazon.com/dp/B0DS2R7N4F" },
      { seller: "B&H", price: 1399.95, status: "Waiting list", url: "https://www.bhphotovideo.com/c/product/1875716-REG/gigabyte_gv_n5080wf3oc_16gd_geforce_rtx_5080_windforce.html" },
      { seller: "Newegg", price: 1399.99, status: "Product page", url: "https://www.newegg.com/gigabyte-windforce-gv-n5080wf3oc-16gd-geforce-rtx-5080-16gb-graphics-card-triple-fans/p/N82E16814932754" },
    ],
  },
  {
    category: "GPU",
    name: "ASUS TUF Gaming GeForce RTX 5070 Ti OC 16GB Graphics Card",
    power: 300,
    specs: "16GB GDDR7, triple-fan TUF cooler, quiet 1440p/4K pick",
    overview: "ASUS positions this TUF Gaming RTX 5070 Ti OC as a durable GeForce RTX 5070 Ti card with 16GB of GDDR7 memory. The product page emphasizes military-grade components, a protective PCB coating, a 3.125-slot cooler, and modern HDMI/DisplayPort outputs for high-refresh gaming builds.",
    oemUrl: "https://www.asus.com/ph/motherboards-components/graphics-cards/tuf-gaming/tuf-rtx5070ti-o16g-gaming/",
    image: "https://m.media-amazon.com/images/I/81POeoI3lSL._AC_SL1500_.jpg",
    offers: [
      { seller: "Amazon", price: 849.99, status: "Amazon product page", url: "https://www.amazon.com/dp/B0DS6WTXGP" },
      { seller: "B&H", price: 1069.99, status: "Temp. out", url: "https://www.bhphotovideo.com/c/product/1875901-REG/asus_tuf_rtx5070ti_o16g_gaming_geforce_rtx_5070_ti.html" },
    ],
  },
  {
    category: "Motherboard",
    name: "ASUS ROG Strix X870E-E Gaming WiFi AM5 ATX Motherboard",
    socket: "AM5",
    memory: "DDR5",
    power: 55,
    specs: "X870E, PCIe 5.0, WiFi 7, premium AM5",
    overview: "The ROG Strix X870E-E Gaming WiFi is an ATX AM5 motherboard for Ryzen 7000, 8000, and 9000-series processors. ASUS highlights its 18+2+2 power stages, DDR5 tuning features, WiFi 7, USB4, PCIe 5.0 support, five M.2 slots, and AI overclocking/networking tools.",
    oemUrl: "https://rog.asus.com/motherboards/rog-strix/rog-strix-x870e-e-gaming-wifi/",
    image: "https://m.media-amazon.com/images/I/81MDzB7gqwL._AC_SL1500_.jpg",
    offers: [
      { seller: "Amazon", price: 356, status: "Amazon product page", url: "https://www.amazon.com/dp/B0DDZNZF76" },
      { seller: "Best Buy", price: 434.99, was: 476.99, status: "Newegg Official", url: "https://www.bestbuy.com/product/asus-rog-strix-x870e-e-gaming-wifi-socket-am5-amd-x870-atx-ddr5-wi-fi-7-motherboard-black/JJGGLQHLHT" },
      { seller: "B&H", price: 449.99, status: "Temp. out", url: "https://www.bhphotovideo.com/c/product/1855752-REG/asus_rog_strix_x870e_e_gaming_wifi_republic_of_gamers_strix.html" },
    ],
  },
  {
    category: "Motherboard",
    name: "MSI MAG X870 Tomahawk WiFi AM5 ATX Motherboard",
    socket: "AM5",
    memory: "DDR5",
    power: 50,
    specs: "X870, WiFi 7, strong VRM, practical AM5 board",
    overview: "MSI's MAG X870 Tomahawk WiFi is an AM5 ATX motherboard for Ryzen 9000, 8000, and 7000 processors. MSI calls out DDR5 Memory Boost tuning, PCIe 5.0 and M.2 Gen5 support, USB 40Gbps, WiFi 7, Bluetooth 5.4, 5Gbps LAN, and a gaming-focused power design.",
    oemUrl: "https://www.msi.com/Motherboard/MAG-X870-TOMAHAWK-WIFI",
    image: "https://m.media-amazon.com/images/I/81nfqnOn8JL._AC_SL1500_.jpg",
    offers: [
      { seller: "Amazon", price: 209.99, status: "Amazon product page", url: "https://www.amazon.com/dp/B0DG3HK897" },
      { seller: "B&H", price: 223.23, was: 253.23, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1852608-REG/msi_x870tmahawkwifi_mag_x870_tomahawk_wifi.html" },
    ],
  },
  {
    category: "Motherboard",
    name: "Gigabyte Z890 AORUS Elite WiFi7 LGA1851 ATX Motherboard",
    socket: "LGA1851",
    memory: "DDR5",
    power: 52,
    specs: "Z890, WiFi 7, DDR5, Core Ultra 200 support",
    overview: "Gigabyte's Z890 AORUS ELITE WIFI7 is an LGA1851 ATX motherboard for Intel Core Ultra Series 2 processors. The board is built around the Z890 chipset with DDR5 support, a 16+1+2 phase VRM design, PCIe 5.0 graphics support, WiFi 7, 2.5GbE LAN, and Thunderbolt 4 connectivity.",
    oemUrl: "https://www.gigabyte.com/us/Motherboard/Z890-AORUS-ELITE-WIFI7",
    image: "https://static.bhphoto.com/images/images500x500/gigabyte_z890_a_elite_wifi7_z890_aorus_elite_wifi7_1728557213_1857566.jpg",
    offers: [
      { seller: "Amazon", price: null, status: "Amazon product page", url: "https://www.amazon.com/dp/B0DK7M5X2R" },
      { seller: "B&H", price: 259.99, was: 289.99, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1857566-REG/gigabyte_z890_a_elite_wifi7_z890_aorus_elite_wifi7.html" },
    ],
  },
  {
    category: "Motherboard",
    name: "MSI MAG Z790 Tomahawk WiFi LGA1700 DDR5 Motherboard",
    socket: "LGA1700",
    memory: "DDR5",
    power: 50,
    specs: "Z790, DDR5, reliable 14th-gen Intel platform",
    overview: "MSI's MAG Z790 Tomahawk WiFi is an ATX LGA1700 motherboard for 12th, 13th, and 14th Gen Intel Core processors. The OEM page emphasizes DDR5 Memory Boost signaling, PCIe 5.0, multiple M.2 slots, 2.5Gbps LAN, WiFi 6E, Bluetooth, HDMI/DisplayPort, and a durable MAG-series layout.",
    oemUrl: "https://www.msi.com/Motherboard/MAG-Z790-TOMAHAWK-WIFI",
    image: "https://m.media-amazon.com/images/I/81aRnPKw8TL._AC_SL1500_.jpg",
    offers: [
      { seller: "Amazon", price: null, status: "Amazon product page", url: "https://www.amazon.com/dp/B0BL8K1YH1" },
      { seller: "B&H", price: 209.99, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1731165-REG/msi_mag_z790_tomahawk_wifi.html" },
    ],
  },
  {
    category: "Memory",
    name: "Corsair Vengeance RGB 64GB DDR5-6400 CL32 Kit",
    memory: "DDR5",
    power: 10,
    specs: "2x32GB, high capacity, RGB heat spreaders",
    overview: "Corsair's Vengeance RGB DDR5 kit provides 64GB across two 32GB modules at 6400MT/s CL32. Corsair highlights dynamic RGB lighting, iCUE control, DDR5 bandwidth, onboard voltage regulation, and Intel XMP profiles for easier performance tuning.",
    oemUrl: "https://www.corsair.com/us/en/p/memory/cmh64gx5m2b6400c32w/vengeance-rgb-64gb-2x32gb-ddr5-dram-6400mts-cl32-memory-kit-white-cmh64gx5m2b6400c32w",
    image: "https://m.media-amazon.com/images/I/61XsKRKsGoL._AC_SL1500_.jpg",
    offers: [
      { seller: "Amazon", price: null, status: "Amazon product page", url: "https://www.amazon.com/dp/B0C1RGLVZ8" },
      { seller: "B&H", price: 1228.99, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1830482-REG/corsair_cmh64gx5m2b6400c32_vengeance_rgb_64g_2.html" },
    ],
  },
  {
    category: "Memory",
    name: "Silicon Power Zenith RGB 32GB DDR5-6000 CL30 Kit",
    memory: "DDR5",
    power: 8,
    specs: "2x16GB, CL30, AMD EXPO and Intel XMP support",
    overview: "Silicon Power's XPOWER Zenith DDR5 RGB Gaming UDIMM family includes the black SU032GXLWU60AFDFBH 32GB kit at 6000MT/s CL30-38-38-96 and 1.35V. It is a two-DIMM desktop DDR5 kit with RGB lighting and tuning profiles aimed at gaming systems.",
    oemUrl: "https://jp-eshop.silicon-power.com/products/%E3%82%B7%E3%83%AA%E3%82%B3%E3%83%B3%E3%83%91%E3%83%AF%E3%83%BC-ddr5-32gb-2x16gb-zenith-rgb-6000mhz-pc5-48000-288-pin-cl30-1-35v-udimm-%E3%83%87%E3%82%B9%E3%82%AF%E3%83%88%E3%83%83%E3%83%97pc%E7%94%A8%E3%83%A1%E3%83%A2%E3%83%AA-dram",
    image: "https://static.bhphoto.com/images/images500x500/silicone_power_su032gxlwu60afdfbh_32gb_2x16gb_zenith_ddr5_6000_1703852739_1801359.jpg",
    offers: [
      { seller: "Amazon", price: null, status: "Amazon product page", url: "https://www.amazon.com/dp/B0G42VGWYN" },
      { seller: "B&H", price: 489.99, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1801359-REG/silicone_power_su032gxlwu60afdfbh_32gb_2x16gb_zenith_ddr5_6000.html" },
    ],
  },
  {
    category: "Storage",
    name: "Samsung 990 PRO 2TB PCIe 4.0 NVMe M.2 SSD",
    power: 8,
    specs: "Up to 7450 MB/s, premium OS and game drive",
    overview: "Samsung's 990 PRO 2TB is a PCIe 4.0 NVMe M.2 SSD for high-end gaming, workstation, and creator storage. Samsung lists the 2TB model as a 990 PRO drive with V-NAND TLC, up to 7,450MB/s sequential reads, up to 6,900MB/s sequential writes, and Samsung Magician software support.",
    oemUrl: "https://www.samsung.com/us/computing/memory-storage/solid-state-drives/990-pro-pcie-4-0-nvme-ssd-2tb-mz-v9p2t0b-am.html",
    image: "https://m.media-amazon.com/images/I/71OWtcxKgvL._AC_SL1500_.jpg",
    offers: [
      { seller: "Amazon", price: 399.99, status: "Amazon product page", url: "https://www.amazon.com/dp/B0BHJJ9Y77" },
      { seller: "B&H", price: 429.99, was: 639.99, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1726548-REG/samsung_mz_v9p2t0b_am_2tb_990_pro_pcie.html" },
      { seller: "Best Buy", price: 389.99, status: "Buying options", url: "https://www.bestbuy.com/product/samsung-990-pro-2tb-internal-ssd-pcle-gen-4x4-nvme/J3ZYG28J3S" },
    ],
  },
  {
    category: "PSU",
    name: "Corsair RM1000x Shift 1000W 80+ Gold ATX 3.1 PSU",
    power: 0,
    specs: "1000W, side connectors, ATX 3.1, modular",
    overview: "Corsair's RM1000x SHIFT is a 1000W fully modular RMx SHIFT power supply with a side-mounted cable interface. Corsair highlights 80 PLUS Gold efficiency, Type 5 micro-fit connectors, quiet cooling behavior, ATX compatibility, and the CP-9020253-NA SKU.",
    oemUrl: "https://www.corsair.com/us/en/p/psu/cp-9020253-na/rm1000x-shift-80-plus-gold-fully-modular-atx-power-supply-cp-9020253-na",
    image: "https://m.media-amazon.com/images/I/81dwGXVwpgL._AC_SL1500_.jpg",
    offers: [
      { seller: "Amazon", price: null, status: "Amazon product page", url: "https://www.amazon.com/dp/B0BP8B6M7Y" },
      { seller: "B&H", price: 187.99, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1808741-REG/corsair_cp_9020253_na_rm1000x_shift_1000w_80.html" },
    ],
  },
  {
    category: "Case",
    name: "Fractal Design North XL RC Charcoal Black TG Case",
    power: 0,
    specs: "Wood front, dark tempered glass, high-airflow full tower",
    overview: "Fractal Design's North XL RC Charcoal Black TG Dark is the reverse-connector variant of the larger North chassis. The product sheet lists SKU FD-C-NOR1X-05 and positions North XL around a larger format, natural front-panel styling, broad component support, included fans, and tempered-glass or mesh variant options.",
    oemUrl: "https://www.fractal-design.com/app/uploads/2025/03/North-XL_Product-Sheet_EN.pdf",
    image: "https://m.media-amazon.com/images/I/71Np5MTwMbL._AC_SL1500_.jpg",
    offers: [
      { seller: "Amazon", price: null, status: "Amazon product page", url: "https://www.amazon.com/dp/B0DG33HWNM" },
      { seller: "B&H", price: 194.99, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1885775-REG/fractal_design_fd_c_nor1x_05_north_xl_rc_full.html" },
    ],
  },
  {
    category: "Case",
    name: "NZXT H7 Flow RGB 2024 Black Mid-Tower Case",
    power: 0,
    specs: "Mesh airflow, included RGB fans, clean cable room",
    overview: "NZXT's H7 Flow RGB is a mid-tower ATX airflow case with RGB fans, strong GPU cooling clearance, and broad motherboard support. NZXT lists the black RGB model as CM-H72FB-R1 and highlights the updated H7 Flow layout for cleaner airflow-focused builds.",
    oemUrl: "https://nzxt.com/en-US/product/h7-flow-rgb",
    image: "https://m.media-amazon.com/images/I/81Gg4s1YBEL._AC_SL1500_.jpg",
    offers: [
      { seller: "Amazon", price: 99.99, status: "Amazon product page", url: "https://www.amazon.com/dp/B0CV4RRBNJ" },
      { seller: "B&H", price: 159.99, status: "Temp. out", url: "https://www.bhphotovideo.com/c/product/1832872-REG/nzxt_cm_h72fb_r1_h7_flow_rgb_mid_tower.html" },
    ],
  },
];

const categoryDescriptions = {
  CPU: "Verified processor product pages with socket metadata for the builder.",
  GPU: "Exact-model graphics cards with direct retailer product pages.",
  Motherboard: "AM5, LGA1851, and LGA1700 boards with verified offer pricing.",
  Memory: "DDR5 kits with product-page pricing and compatibility metadata.",
  Storage: "NVMe drives with direct product-page offers.",
  PSU: "Modern ATX power supplies sized for current GPUs.",
  Case: "Airflow and showcase chassis for full-size builds.",
};

const builderCategories = ["CPU", "GPU", "Motherboard", "Memory", "Storage", "PSU", "Case"];

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function productUrl(part) {
  return `product.html?id=${slugify(part.name)}`;
}

function productImage(part) {
  return part.image || "assets/pc-parts-hero.png";
}

function bestOffer(part) {
  return [...part.offers].filter((offer) => typeof offer.price === "number").sort((a, b) => a.price - b.price)[0] || part.offers[0];
}

function compareAt(part) {
  const offerWas = part.offers.map((offer) => offer.was).filter(Boolean).sort((a, b) => b - a)[0];
  return offerWas || Math.round(bestOffer(part).price * 1.12);
}

function formatMoney(value) {
  if (typeof value !== "number") return "Check price";
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: value % 1 ? 2 : 0 }).format(value);
}

function offerLinks(part, compact = false) {
  return part.offers
    .map(
      (offer) => `<a class="seller-link" href="${offer.url}" target="_blank" rel="noopener noreferrer" title="${offer.status} at ${offer.seller}">
        <span>${offer.seller}</span>
        <strong>${formatMoney(offer.price)}</strong>
      </a>`,
    )
    .join("");
}

function lowestOfferBadge(part) {
  const offer = bestOffer(part);
  return `<div class="lowest-price">Lowest price: <strong>${formatMoney(offer.price)}</strong> at ${offer.seller}</div>`;
}

function renderCategories() {
  const categories = [...new Set(parts.map((part) => part.category))];
  document.getElementById("categoryGrid").innerHTML = categories
    .map((category) => {
      const count = parts.filter((part) => part.category === category).length;
      return `<a class="category-card" href="#catalog" data-filter-link="${category}">
        <span class="category-icon">${category.slice(0, 2).toUpperCase()}</span>
        <h3>${category}</h3>
        <p>${categoryDescriptions[category]}</p>
        <strong>${count} verified models</strong>
      </a>`;
    })
    .join("");

  document.querySelectorAll("[data-filter-link]").forEach((link) => {
    link.addEventListener("click", () => {
      document.getElementById("categoryFilter").value = link.dataset.filterLink;
      renderProducts(link.dataset.filterLink);
    });
  });
}

function renderDeals() {
  const deals = [...parts].sort((a, b) => compareAt(b) - bestOffer(b).price - (compareAt(a) - bestOffer(a).price)).slice(0, 6);
  document.getElementById("dealGrid").innerHTML = deals
    .map((part) => {
      const offer = bestOffer(part);
      const was = compareAt(part);
      return `<article class="deal-card">
        <span class="deal-tag">Best verified: ${offer.seller}</span>
        <h3><a href="${productUrl(part)}">${part.name}</a></h3>
        <p>${part.specs}</p>
        <div class="price-row">
          <span class="price">${formatMoney(offer.price)}</span>
          <span class="was">${formatMoney(was)}</span>
        </div>
        ${lowestOfferBadge(part)}
        <div class="seller-row">${offerLinks(part, true)}<a class="seller-link details-link" href="${productUrl(part)}"><span>Details</span><strong>View</strong></a></div>
      </article>`;
    })
    .join("");
}

function renderFilter() {
  const categories = ["All", ...new Set(parts.map((part) => part.category))];
  const filter = document.getElementById("categoryFilter");
  filter.innerHTML = categories.map((category) => `<option value="${category}">${category}</option>`).join("");
  filter.addEventListener("change", () => renderProducts(filter.value));
}

function renderProducts(category = "All") {
  const visible = category === "All" ? parts : parts.filter((part) => part.category === category);
  document.getElementById("productGrid").innerHTML = visible
    .map((part) => {
      const offer = bestOffer(part);
      const was = compareAt(part);
      return `<article class="product-card">
        <div class="product-top">
          <span class="category-pill">${part.category}</span>
          <span class="discount">Verified ${verifiedAt}</span>
        </div>
        <h3><a href="${productUrl(part)}">${part.name}</a></h3>
        <p>${part.specs}</p>
        <div class="specs">${[part.socket, part.memory, part.power ? `${part.power}W draw` : "", `${part.offers.length} product-page offer${part.offers.length === 1 ? "" : "s"}`].filter(Boolean).join(" | ")}</div>
        <div class="price-row">
          <span class="price">${formatMoney(offer.price)}</span>
          <span class="was">${formatMoney(was)}</span>
        </div>
        ${lowestOfferBadge(part)}
        <div class="seller-row">${offerLinks(part, true)}<a class="seller-link details-link" href="${productUrl(part)}"><span>Details</span><strong>View</strong></a></div>
      </article>`;
    })
    .join("");
}

function renderBuilder() {
  const slots = document.getElementById("builderSlots");
  slots.innerHTML = builderCategories
    .map((category) => {
      const options = parts
        .filter((part) => part.category === category)
        .map((part) => `<option value="${part.name}">${part.name}</option>`)
        .join("");
      return `<div class="slot">
        <label for="slot-${category}">${category}</label>
        <select id="slot-${category}" data-builder-category="${category}">
          <option value="">Choose ${category}</option>
          ${options}
        </select>
        <p class="slot-meta" id="meta-${category}">No ${category.toLowerCase()} selected.</p>
      </div>`;
    })
    .join("");

  document.querySelectorAll("[data-builder-category]").forEach((select) => {
    select.addEventListener("change", updateBuilder);
  });
}

function getSelectedParts() {
  return [...document.querySelectorAll("[data-builder-category]")]
    .map((select) => parts.find((part) => part.name === select.value))
    .filter(Boolean);
}

function updateBuilder() {
  const selected = getSelectedParts();
  const total = selected.reduce((sum, part) => sum + bestOffer(part).price, 0);
  const power = selected.reduce((sum, part) => sum + (part.power || 0), 0);
  document.getElementById("buildTotal").textContent = formatMoney(total);
  document.getElementById("buildPower").textContent = `${power}W estimated component draw`;

  builderCategories.forEach((category) => {
    const select = document.getElementById(`slot-${category}`);
    const part = parts.find((item) => item.name === select.value);
    document.getElementById(`meta-${category}`).textContent = part
      ? `${formatMoney(bestOffer(part).price)} at ${bestOffer(part).seller} - ${part.specs}`
      : `No ${category.toLowerCase()} selected.`;
  });

  const cpu = selected.find((part) => part.category === "CPU");
  const board = selected.find((part) => part.category === "Motherboard");
  const memory = selected.find((part) => part.category === "Memory");
  const compatibility = document.getElementById("compatibility");
  const notes = [];

  if (cpu && board && cpu.socket !== board.socket) {
    notes.push(`CPU socket ${cpu.socket} does not match motherboard socket ${board.socket}.`);
  }

  if (board && memory && board.memory !== memory.memory) {
    notes.push(`Motherboard memory ${board.memory} does not match selected ${memory.memory} kit.`);
  }

  if (!notes.length && selected.length >= 3) {
    compatibility.className = "compatibility ok";
    compatibility.textContent = "Looks compatible on socket and memory generation. Check case clearance and PSU headroom before buying.";
  } else if (notes.length) {
    compatibility.className = "compatibility warn";
    compatibility.textContent = notes.join(" ");
  } else {
    compatibility.className = "compatibility";
    compatibility.textContent = "Select CPU, motherboard, and memory to run basic compatibility checks.";
  }

  document.getElementById("builderLinks").innerHTML = selected.slice(0, 3).map((part) => offerLinks(part, true)).join("");
}

function renderProductDetail() {
  const target = document.getElementById("productDetail");
  if (!target) return;

  const params = new URLSearchParams(window.location.search);
  const selected = parts.find((part) => slugify(part.name) === params.get("id")) || parts[0];
  const offer = bestOffer(selected);
  const was = compareAt(selected);
  document.title = `${selected.name} | EZPC`;

  target.innerHTML = `<a class="back-link" href="index.html#catalog">Back to catalog</a>
    <div class="product-detail-grid">
      <figure class="product-media">
        <img src="${productImage(selected)}" alt="${selected.name}" />
      </figure>
      <article class="product-info-panel">
        <p class="eyebrow">${selected.category} detail page</p>
        <h1>${selected.name}</h1>
        <p class="hero-copy">${selected.specs}</p>
        <div class="price-row">
          <span class="price">${formatMoney(offer.price)}</span>
          <span class="was">${formatMoney(was)}</span>
        </div>
        ${lowestOfferBadge(selected)}
        <div class="specs">${[selected.socket, selected.memory, selected.power ? `${selected.power}W draw` : "", `Verified ${verifiedAt}`].filter(Boolean).join(" | ")}</div>
        <section class="product-overview">
          <p class="eyebrow">General information</p>
          <p>${selected.overview}</p>
          <a class="seller-link source-link" href="${selected.oemUrl}" target="_blank" rel="noopener noreferrer">
            <span>OEM source</span>
            <strong>Open</strong>
          </a>
        </section>
      </article>
    </div>
    <section class="retailer-table-wrap">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Retailer prices</p>
          <h2>Direct product-page offers</h2>
        </div>
      </div>
      <div class="retailer-table">
        ${selected.offers
          .map(
            (item) => `<a href="${item.url}" target="_blank" rel="noopener noreferrer" class="retailer-row">
              <span>${item.seller}</span>
              <strong>${formatMoney(item.price)}</strong>
              <em>${item.status}</em>
            </a>`,
          )
          .join("")}
      </div>
    </section>`;
}

if (document.getElementById("productDetail")) {
  renderProductDetail();
} else {
  renderCategories();
  renderDeals();
  renderFilter();
  renderProducts();
  renderBuilder();
  updateBuilder();
}
