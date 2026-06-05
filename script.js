const sellers = [
  { name: "Amazon", url: (q) => `https://www.amazon.com/s?k=${encodeURIComponent(q)}` },
  { name: "Newegg", url: (q) => `https://www.newegg.com/p/pl?d=${encodeURIComponent(q)}` },
  { name: "Best Buy", url: (q) => `https://www.bestbuy.com/site/searchpage.jsp?st=${encodeURIComponent(q)}` },
  { name: "Micro Center", url: (q) => `https://www.microcenter.com/search/search_results.aspx?Ntt=${encodeURIComponent(q)}` },
  { name: "B&H", url: (q) => `https://www.bhphotovideo.com/c/search?q=${encodeURIComponent(q)}` },
];

const parts = [
  { category: "CPU", name: "AMD Ryzen 7 9800X3D 8-Core AM5 Processor", price: 479, was: 529, socket: "AM5", memory: "DDR5", power: 120, specs: "8 cores, 3D V-Cache, AM5 gaming flagship" },
  { category: "CPU", name: "AMD Ryzen 9 9950X 16-Core AM5 Processor", price: 599, was: 649, socket: "AM5", memory: "DDR5", power: 170, specs: "16 cores, Zen 5, workstation and creator builds" },
  { category: "CPU", name: "Intel Core Ultra 9 285K LGA1851 Processor", price: 549, was: 589, socket: "LGA1851", memory: "DDR5", power: 125, specs: "Arrow Lake desktop CPU, unlocked, high-end Intel builds" },
  { category: "CPU", name: "Intel Core i7-14700K LGA1700 Processor", price: 369, was: 419, socket: "LGA1700", memory: "DDR5", power: 125, specs: "20 cores, unlocked, strong gaming and productivity value" },
  { category: "GPU", name: "Gigabyte GeForce RTX 5080 WINDFORCE OC 16G Graphics Card", price: 1199, was: 1299, power: 360, specs: "16GB GDDR7, WINDFORCE cooler, factory OC" },
  { category: "GPU", name: "ASUS TUF Gaming GeForce RTX 5070 Ti OC 16GB Graphics Card", price: 899, was: 949, power: 300, specs: "16GB GDDR7, triple-fan TUF cooler, quiet 1440p/4K pick" },
  { category: "GPU", name: "Sapphire Nitro+ AMD Radeon RX 7900 XTX Vapor-X 24GB", price: 899, was: 999, power: 355, specs: "24GB GDDR6, Vapor-X cooler, high VRAM raster monster" },
  { category: "GPU", name: "PowerColor Hellhound AMD Radeon RX 7800 XT 16GB", price: 499, was: 549, power: 263, specs: "16GB GDDR6, great 1440p value, quiet dual BIOS" },
  { category: "Motherboard", name: "ASUS ROG Strix X870E-E Gaming WiFi AM5 ATX Motherboard", price: 479, was: 529, socket: "AM5", memory: "DDR5", power: 55, specs: "X870E, PCIe 5.0, WiFi 7, premium AM5" },
  { category: "Motherboard", name: "MSI MAG X870 Tomahawk WiFi AM5 ATX Motherboard", price: 299, was: 329, socket: "AM5", memory: "DDR5", power: 50, specs: "X870, WiFi 7, strong VRM, practical AM5 board" },
  { category: "Motherboard", name: "Gigabyte Z890 AORUS Elite WiFi7 LGA1851 ATX Motherboard", price: 289, was: 319, socket: "LGA1851", memory: "DDR5", power: 52, specs: "Z890, WiFi 7, DDR5, Core Ultra 200 support" },
  { category: "Motherboard", name: "MSI MAG Z790 Tomahawk WiFi LGA1700 DDR5 Motherboard", price: 239, was: 279, socket: "LGA1700", memory: "DDR5", power: 50, specs: "Z790, DDR5, reliable 14th-gen Intel platform" },
  { category: "Memory", name: "G.Skill Trident Z5 Neo RGB 32GB DDR5-6000 CL30 Kit", price: 114, was: 134, memory: "DDR5", power: 8, specs: "2x16GB, EXPO, sweet-spot AM5 gaming memory" },
  { category: "Memory", name: "Corsair Vengeance RGB 64GB DDR5-6400 CL32 Kit", price: 219, was: 249, memory: "DDR5", power: 10, specs: "2x32GB, high capacity, RGB heat spreaders" },
  { category: "Memory", name: "TeamGroup T-Create Expert 32GB DDR5-7200 CL34 Kit", price: 139, was: 159, memory: "DDR5", power: 9, specs: "Fast 2x16GB kit for Intel DDR5 tuning" },
  { category: "Memory", name: "Kingston FURY Beast 32GB DDR5-5600 CL36 Kit", price: 89, was: 109, memory: "DDR5", power: 7, specs: "Stable 2x16GB DDR5 value kit" },
  { category: "Storage", name: "Samsung 990 PRO 2TB PCIe 4.0 NVMe M.2 SSD", price: 159, was: 199, power: 8, specs: "Up to 7450 MB/s, premium OS and game drive" },
  { category: "Storage", name: "WD Black SN850X 4TB PCIe 4.0 NVMe M.2 SSD", price: 279, was: 329, power: 9, specs: "4TB high-speed game library drive" },
  { category: "Storage", name: "Crucial T705 2TB PCIe 5.0 NVMe M.2 SSD", price: 249, was: 299, power: 12, specs: "PCIe 5.0, extreme sequential throughput" },
  { category: "Storage", name: "Solidigm P44 Pro 2TB PCIe 4.0 NVMe M.2 SSD", price: 139, was: 169, power: 8, specs: "Fast, efficient, excellent gaming value" },
  { category: "Cooling", name: "Arctic Liquid Freezer III 360 A-RGB Black AIO Cooler", price: 129, was: 159, power: 12, specs: "360mm radiator, strong thermals, integrated VRM fan" },
  { category: "Cooling", name: "Corsair iCUE LINK H150i RGB 360mm AIO Cooler", price: 229, was: 259, power: 16, specs: "Clean cabling, 360mm radiator, iCUE ecosystem" },
  { category: "Cooling", name: "Noctua NH-D15 chromax.black Dual-Tower CPU Cooler", price: 119, was: 129, power: 4, specs: "Premium quiet air cooling, dual NF-A15 fans" },
  { category: "Cooling", name: "Thermalright Phantom Spirit 120 SE ARGB CPU Air Cooler", price: 39, was: 49, power: 5, specs: "Budget dual-tower cooler, excellent value" },
  { category: "PSU", name: "Corsair RM1000x Shift 1000W 80+ Gold ATX 3.0 PSU", price: 179, was: 209, power: 0, specs: "1000W, side connectors, ATX 3.0, modular" },
  { category: "PSU", name: "Seasonic Vertex GX-850 850W 80+ Gold ATX 3.0 PSU", price: 159, was: 179, power: 0, specs: "850W, native 12VHPWR, premium platform" },
  { category: "PSU", name: "be quiet! Pure Power 12 M 750W 80+ Gold ATX 3.0 PSU", price: 109, was: 129, power: 0, specs: "750W, quiet fan curve, modern GPU connector" },
  { category: "PSU", name: "MSI MPG A1000G PCIE5 1000W 80+ Gold PSU", price: 169, was: 199, power: 0, specs: "1000W, PCIe 5 ready, fully modular" },
  { category: "Case", name: "Lian Li O11 Vision Compact Tempered Glass ATX Case", price: 129, was: 149, power: 0, specs: "Showcase glass layout, compact O11 footprint" },
  { category: "Case", name: "Fractal Design North XL Charcoal Black TG Dark Case", price: 179, was: 199, power: 0, specs: "Wood front, high airflow, large GPU support" },
  { category: "Case", name: "NZXT H7 Flow RGB 2024 Black Mid-Tower Case", price: 149, was: 169, power: 0, specs: "Mesh airflow, included RGB fans, clean cable room" },
  { category: "Case", name: "Hyte Y70 Touch Infinite Black Dual-Chamber Case", price: 379, was: 399, power: 0, specs: "Panoramic glass, integrated display, showcase builds" },
  { category: "Monitor", name: "Alienware AW3225QF 32-inch 4K QD-OLED 240Hz Monitor", price: 999, was: 1199, power: 0, specs: "4K, 240Hz, QD-OLED, premium HDR gaming" },
  { category: "Monitor", name: "LG UltraGear 27GR95QE-B 27-inch OLED 240Hz Monitor", price: 699, was: 899, power: 0, specs: "1440p OLED, 240Hz, fast competitive panel" },
  { category: "Monitor", name: "Gigabyte M27Q X 27-inch 1440p 240Hz IPS Monitor", price: 349, was: 429, power: 0, specs: "1440p, 240Hz, IPS, strong esports value" },
  { category: "Monitor", name: "Samsung Odyssey Neo G8 32-inch 4K 240Hz Mini LED Monitor", price: 899, was: 1199, power: 0, specs: "4K, 240Hz, Mini LED HDR, curved VA panel" },
  { category: "Accessory", name: "Logitech G Pro X Superlight 2 Wireless Gaming Mouse", price: 129, was: 159, power: 0, specs: "Lightweight wireless mouse, HERO 2 sensor" },
  { category: "Accessory", name: "Wooting 60HE+ Analog Mechanical Gaming Keyboard", price: 174, was: 199, power: 0, specs: "Hall effect switches, rapid trigger, compact layout" },
  { category: "Accessory", name: "SteelSeries Arctis Nova Pro Wireless Gaming Headset", price: 299, was: 349, power: 0, specs: "Wireless DAC, hot-swap batteries, ANC" },
  { category: "Accessory", name: "Elgato Stream Deck MK.2 Studio Controller", price: 139, was: 149, power: 0, specs: "15 customizable LCD keys for streaming and macros" },
  { category: "Fans", name: "Lian Li UNI FAN SL-INF 120 RGB Triple Pack Black", price: 94, was: 109, power: 9, specs: "Daisy-chain RGB fans, infinity mirror lighting" },
  { category: "Fans", name: "Noctua NF-A12x25 PWM chromax.black.swap 120mm Fan", price: 34, was: 39, power: 2, specs: "Premium quiet 120mm case or radiator fan" },
  { category: "Fans", name: "Phanteks D30-120 DRGB Reversed Airflow Triple Pack", price: 89, was: 99, power: 9, specs: "Reverse-flow RGB fans for glass-side intakes" },
  { category: "Fans", name: "Corsair iCUE LINK QX120 RGB 120mm Triple Fan Kit", price: 139, was: 159, power: 10, specs: "Single-cable RGB fans with iCUE LINK hub" },
  { category: "Networking", name: "TP-Link Archer TXE75E AXE5400 WiFi 6E PCIe Adapter", price: 59, was: 79, power: 3, specs: "WiFi 6E and Bluetooth PCIe upgrade card" },
  { category: "Networking", name: "ASUS PCE-BE92BT WiFi 7 PCIe Adapter", price: 89, was: 109, power: 4, specs: "WiFi 7 PCIe card with Bluetooth 5.4" },
  { category: "Networking", name: "TP-Link TL-SX105 5-Port 10G Desktop Switch", price: 299, was: 349, power: 0, specs: "Five 10GbE ports for high-speed home labs" },
  { category: "Networking", name: "Cable Matters 10Gbps USB-C to 2.5G Ethernet Adapter", price: 24, was: 34, power: 0, specs: "Compact 2.5GbE adapter for laptops and desktops" },
];

const categoryDescriptions = {
  CPU: "Gaming and creator processors with socket metadata for the builder.",
  GPU: "Exact-model graphics cards for 1440p, 4K, ray tracing, and high-VRAM builds.",
  Motherboard: "AM5, LGA1851, and LGA1700 boards with WiFi and DDR5 support.",
  Memory: "DDR5 kits tuned for modern AMD and Intel systems.",
  Storage: "PCIe 4.0 and 5.0 NVMe drives for OS, games, and scratch disks.",
  Cooling: "AIO and air coolers for quiet daily use or high-power CPUs.",
  PSU: "ATX 3.0 power supplies sized for current GPUs.",
  Case: "Airflow and showcase chassis for full-size builds.",
  Monitor: "OLED, Mini LED, and fast IPS panels for the finished setup.",
  Accessory: "Key peripherals for gaming, streaming, and productivity.",
  Fans: "RGB, quiet, and reverse-flow fan packs.",
  Networking: "WiFi and high-speed Ethernet upgrades.",
};

const builderCategories = ["CPU", "GPU", "Motherboard", "Memory", "Storage", "Cooling", "PSU", "Case"];

function formatMoney(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}

function sellerLinks(part, compact = false) {
  const query = part.name;
  return sellers
    .map(
      (seller) =>
        `<a class="seller-link" href="${seller.url(query)}" target="_blank" rel="noopener noreferrer">${compact ? seller.name.replace("Micro Center", "Micro") : seller.name}</a>`,
    )
    .join("");
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
        <strong>${count} exact models</strong>
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
  const deals = [...parts].sort((a, b) => b.was - b.price - (a.was - a.price)).slice(0, 6);
  document.getElementById("dealGrid").innerHTML = deals
    .map(
      (part) => `<article class="deal-card">
        <span class="deal-tag">Save ${formatMoney(part.was - part.price)}</span>
        <h3>${part.name}</h3>
        <p>${part.specs}</p>
        <div class="price-row">
          <span class="price">${formatMoney(part.price)}</span>
          <span class="was">${formatMoney(part.was)}</span>
        </div>
        <div class="seller-row">${sellerLinks(part, true)}</div>
      </article>`,
    )
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
    .map(
      (part) => `<article class="product-card">
        <div class="product-top">
          <span class="category-pill">${part.category}</span>
          <span class="discount">-${Math.round(((part.was - part.price) / part.was) * 100)}%</span>
        </div>
        <h3>${part.name}</h3>
        <p>${part.specs}</p>
        <div class="specs">${[part.socket, part.memory, part.power ? `${part.power}W draw` : ""].filter(Boolean).join(" | ")}</div>
        <div class="price-row">
          <span class="price">${formatMoney(part.price)}</span>
          <span class="was">${formatMoney(part.was)}</span>
        </div>
        <div class="seller-row">${sellerLinks(part, true)}</div>
      </article>`,
    )
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
  const total = selected.reduce((sum, part) => sum + part.price, 0);
  const power = selected.reduce((sum, part) => sum + (part.power || 0), 0);
  document.getElementById("buildTotal").textContent = formatMoney(total);
  document.getElementById("buildPower").textContent = `${power}W estimated component draw`;

  builderCategories.forEach((category) => {
    const select = document.getElementById(`slot-${category}`);
    const part = parts.find((item) => item.name === select.value);
    document.getElementById(`meta-${category}`).textContent = part
      ? `${formatMoney(part.price)} - ${part.specs}`
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

  document.getElementById("builderLinks").innerHTML = selected.slice(0, 3).map((part) => sellerLinks(part, true)).join("");
}

renderCategories();
renderDeals();
renderFilter();
renderProducts();
renderBuilder();
updateBuilder();
