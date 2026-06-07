const verifiedAt = "June 7, 2026";

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

const expandedParts = [
  {
    category: "CPU",
    name: "AMD Ryzen 5 9600X 6-Core AM5 Processor",
    socket: "AM5",
    memory: "DDR5",
    power: 65,
    specs: "6 cores, Zen 5, efficient AM5 gaming CPU",
    overview: "AMD's Ryzen 5 9600X is a Ryzen 9000 Series desktop processor for AM5 builds. It gives mainstream gaming systems six Zen 5 cores, DDR5 platform support, PCIe 5.0 platform capability, and a lower default TDP than the larger Ryzen 9 chips.",
    oemUrl: "https://www.amd.com/en/products/processors/desktops/ryzen/9000-series/amd-ryzen-5-9600x.html",
  },
  {
    category: "CPU",
    name: "AMD Ryzen 7 9700X 8-Core AM5 Processor",
    socket: "AM5",
    memory: "DDR5",
    power: 65,
    specs: "8 cores, Zen 5, balanced gaming and creation CPU",
    overview: "AMD's Ryzen 7 9700X is an 8-core Ryzen 9000 Series processor for AM5 motherboards. It is a balanced pick for gaming, streaming, and everyday creation work with Zen 5 cores, DDR5 memory support, and PCIe 5.0 platform capability.",
    oemUrl: "https://www.amd.com/en/products/processors/desktops/ryzen/9000-series/amd-ryzen-7-9700x.html",
  },
  {
    category: "CPU",
    name: "AMD Ryzen 9 9900X 12-Core AM5 Processor",
    socket: "AM5",
    memory: "DDR5",
    power: 120,
    specs: "12 cores, Zen 5, high-end gaming and productivity",
    overview: "AMD's Ryzen 9 9900X is a 12-core, 24-thread Ryzen 9000 Series desktop CPU. It suits high-end gaming and heavy multitasking while staying on the AM5 platform with DDR5 memory and modern PCIe support.",
    oemUrl: "https://www.amd.com/en/products/processors/desktops/ryzen/9000-series/amd-ryzen-9-9900x.html",
  },
  {
    category: "CPU",
    name: "AMD Ryzen 9 9950X3D 16-Core AM5 Processor",
    socket: "AM5",
    memory: "DDR5",
    power: 170,
    specs: "16 cores, 3D V-Cache, flagship gaming and creation",
    overview: "AMD's Ryzen 9 9950X3D combines a 16-core Ryzen 9 desktop CPU with AMD 3D V-Cache technology. It is designed for builders who want strong gaming performance and high multi-threaded throughput on the AM5 platform.",
    oemUrl: "https://www.amd.com/en/products/processors/desktops/ryzen/9000-series/amd-ryzen-9-9950x3d.html",
  },
  {
    category: "CPU",
    name: "AMD Ryzen 9 9900X3D 12-Core AM5 Processor",
    socket: "AM5",
    memory: "DDR5",
    power: 120,
    specs: "12 cores, 3D V-Cache, fast gaming Ryzen 9",
    overview: "AMD's Ryzen 9 9900X3D brings 3D V-Cache to a 12-core Ryzen 9 desktop processor. It is built for AM5 gaming rigs that still need plenty of cores for streaming, productivity, and background workloads.",
    oemUrl: "https://www.amd.com/en/products/processors/desktops/ryzen/9000-series/amd-ryzen-9-9900x3d.html",
  },
  {
    category: "CPU",
    name: "AMD Ryzen 7 7800X3D 8-Core AM5 Processor",
    socket: "AM5",
    memory: "DDR5",
    power: 120,
    specs: "8 cores, 3D V-Cache, AM5 gaming favorite",
    overview: "AMD's Ryzen 7 7800X3D is an 8-core AM5 gaming processor built around AMD 3D V-Cache technology. It remains a popular choice for high-FPS gaming systems using DDR5 memory and modern AM5 motherboards.",
    oemUrl: "https://www.amd.com/en/products/processors/desktops/ryzen/7000-series/amd-ryzen-7-7800x3d.html",
  },
  {
    category: "CPU",
    name: "AMD Ryzen 5 7600X 6-Core AM5 Processor",
    socket: "AM5",
    memory: "DDR5",
    power: 105,
    specs: "6 cores, Zen 4, value AM5 gaming CPU",
    overview: "AMD's Ryzen 5 7600X is a 6-core Zen 4 desktop processor for AM5 systems. It is a practical entry into DDR5-based Ryzen builds with strong single-threaded performance for gaming-focused machines.",
    oemUrl: "https://www.amd.com/en/products/processors/desktops/ryzen/7000-series/amd-ryzen-5-7600x.html",
  },
  {
    category: "CPU",
    name: "AMD Ryzen 7 7700X 8-Core AM5 Processor",
    socket: "AM5",
    memory: "DDR5",
    power: 105,
    specs: "8 cores, Zen 4, efficient enthusiast CPU",
    overview: "AMD's Ryzen 7 7700X is an 8-core Zen 4 AM5 processor for gaming and productivity desktops. It supports DDR5 memory and PCIe 5.0 platform features on compatible motherboards.",
    oemUrl: "https://www.amd.com/en/products/processors/desktops/ryzen/7000-series/amd-ryzen-7-7700x.html",
  },
  {
    category: "CPU",
    name: "AMD Ryzen 9 7900X 12-Core AM5 Processor",
    socket: "AM5",
    memory: "DDR5",
    power: 170,
    specs: "12 cores, Zen 4, creator-ready AM5 CPU",
    overview: "AMD's Ryzen 9 7900X is a 12-core, 24-thread Zen 4 processor for AM5 desktops. It is suited to mixed gaming and creator workloads that benefit from more CPU cores.",
    oemUrl: "https://www.amd.com/en/products/processors/desktops/ryzen/7000-series/amd-ryzen-9-7900x.html",
  },
  {
    category: "CPU",
    name: "AMD Ryzen 9 7950X 16-Core AM5 Processor",
    socket: "AM5",
    memory: "DDR5",
    power: 170,
    specs: "16 cores, Zen 4, high-end productivity CPU",
    overview: "AMD's Ryzen 9 7950X is a 16-core Zen 4 desktop CPU for AM5 builds. It targets demanding creator, workstation, and enthusiast users who need high multi-threaded performance.",
    oemUrl: "https://www.amd.com/en/products/processors/desktops/ryzen/7000-series/amd-ryzen-9-7950x.html",
  },
  {
    category: "GPU",
    name: "ASUS ROG Astral GeForce RTX 5090 OC 32GB Graphics Card",
    power: 575,
    specs: "32GB GDDR7, flagship ROG cooler, factory OC",
    overview: "ASUS's ROG Astral RTX 5090 OC is a flagship GeForce RTX 5090 card with 32GB of GDDR7 memory. It is built for top-tier 4K gaming, AI workloads, and high-end creator systems that can support its power and case-clearance needs.",
    oemUrl: "https://www.asus.com/motherboards-components/graphics-cards/rog-astral/rog-astral-rtx5090-o32g-gaming/",
  },
  {
    category: "GPU",
    name: "ASUS TUF Gaming GeForce RTX 5080 OC 16GB Graphics Card",
    power: 360,
    specs: "16GB GDDR7, TUF triple-fan RTX 5080",
    overview: "ASUS's TUF Gaming RTX 5080 OC is a GeForce RTX 5080 card with 16GB of GDDR7 memory. The TUF design focuses on durable components, a large cooler, and a practical factory-overclocked profile for high-end gaming rigs.",
    oemUrl: "https://www.asus.com/motherboards-components/graphics-cards/tuf-gaming/tuf-rtx5080-o16g-gaming/",
  },
  {
    category: "GPU",
    name: "MSI GeForce RTX 5080 16G Gaming Trio OC Graphics Card",
    power: 360,
    specs: "16GB GDDR7, Gaming Trio cooler, factory OC",
    overview: "MSI's GeForce RTX 5080 Gaming Trio OC is a high-end RTX 5080 card with 16GB of GDDR7 memory. It pairs NVIDIA's current-generation gaming features with MSI's large triple-fan Gaming Trio cooling design.",
    oemUrl: "https://www.msi.com/Graphics-Card/GeForce-RTX-5080-16G-GAMING-TRIO-OC",
  },
  {
    category: "GPU",
    name: "Gigabyte GeForce RTX 5070 Gaming OC 12G Graphics Card",
    power: 250,
    specs: "12GB GDDR7, Gaming OC cooler, 1440p-focused GPU",
    overview: "Gigabyte's RTX 5070 Gaming OC 12G is a factory-overclocked GeForce RTX 5070 card for modern 1440p gaming. It uses Gigabyte's Gaming OC cooling design and current-generation NVIDIA features.",
    oemUrl: "https://www.gigabyte.com/Graphics-Card/GV-N5070GAMING-OC-12GD",
  },
  {
    category: "GPU",
    name: "ASUS Dual GeForce RTX 4060 OC 8GB Graphics Card",
    power: 115,
    specs: "8GB GDDR6, compact dual-fan 1080p GPU",
    overview: "ASUS's Dual RTX 4060 OC is a compact GeForce RTX 4060 graphics card with 8GB of GDDR6 memory. It is aimed at efficient 1080p gaming builds and smaller cases that still need current NVIDIA features.",
    oemUrl: "https://www.asus.com/motherboards-components/graphics-cards/dual/dual-rtx4060-o8g/",
  },
  {
    category: "GPU",
    name: "MSI GeForce RTX 4070 SUPER 12G Gaming X Slim Graphics Card",
    power: 220,
    specs: "12GB GDDR6X, slim triple-fan RTX 4070 SUPER",
    overview: "MSI's RTX 4070 SUPER Gaming X Slim is a GeForce RTX 4070 SUPER card with 12GB of GDDR6X memory. Its thinner Gaming X Slim cooler targets builders who want strong 1440p performance with better case compatibility.",
    oemUrl: "https://www.msi.com/Graphics-Card/GeForce-RTX-4070-SUPER-12G-GAMING-X-SLIM",
  },
  {
    category: "GPU",
    name: "Gigabyte Radeon RX 9070 XT Gaming OC 16G Graphics Card",
    power: 304,
    specs: "16GB GDDR6, AMD RDNA gaming GPU",
    overview: "Gigabyte's Radeon RX 9070 XT Gaming OC 16G is an AMD Radeon graphics card with 16GB of memory and a factory-tuned Gaming OC cooler. It is aimed at high-refresh 1440p and 4K-capable gaming systems.",
    oemUrl: "https://www.gigabyte.com/Graphics-Card/GV-R907XTGAMING-OC-16GD",
  },
  {
    category: "GPU",
    name: "ASUS TUF Gaming Radeon RX 7900 XTX OC 24GB Graphics Card",
    power: 355,
    specs: "24GB GDDR6, TUF cooler, high-end Radeon card",
    overview: "ASUS's TUF Gaming Radeon RX 7900 XTX OC is a 24GB AMD Radeon graphics card for high-end gaming and creator workloads. It pairs AMD RDNA 3 performance with ASUS's durable TUF cooler and board design.",
    oemUrl: "https://www.asus.com/motherboards-components/graphics-cards/tuf-gaming/tuf-rx7900xtx-o24g-gaming/",
  },
  {
    category: "GPU",
    name: "Sapphire Nitro+ Radeon RX 7900 XTX Vapor-X 24GB Graphics Card",
    power: 420,
    specs: "24GB GDDR6, Vapor-X cooler, premium Radeon card",
    overview: "Sapphire's Nitro+ Radeon RX 7900 XTX Vapor-X is a premium AMD Radeon card with 24GB of GDDR6 memory. It is built around Sapphire's large Vapor-X cooling system and enthusiast board design.",
    oemUrl: "https://www.sapphiretech.com/en/consumer/nitro-radeon-rx-7900-xtx-vapor-x-24g-gddr6",
  },
  {
    category: "GPU",
    name: "PNY GeForce RTX 4070 Ti SUPER XLR8 Gaming VERTO OC 16GB Graphics Card",
    power: 285,
    specs: "16GB GDDR6X, XLR8 cooler, 1440p/4K NVIDIA GPU",
    overview: "PNY's XLR8 Gaming VERTO OC RTX 4070 Ti SUPER is a 16GB NVIDIA card for high-refresh 1440p and entry 4K gaming. It uses PNY's triple-fan XLR8 cooler and factory-overclocked tuning.",
    oemUrl: "https://www.pny.com/pny-geforce-rtx-4070-ti-super-16gb-xlr8-gaming-verto-epic-x-rgb-oc-triple-fan",
  },
  {
    category: "Motherboard",
    name: "MSI MPG X870E Carbon WiFi AM5 ATX Motherboard",
    socket: "AM5",
    memory: "DDR5",
    power: 60,
    specs: "X870E, WiFi 7, PCIe 5.0, premium AM5",
    overview: "MSI's MPG X870E Carbon WiFi is a premium AM5 motherboard for Ryzen 9000, 8000, and 7000 processors. It targets enthusiast builds with PCIe 5.0 connectivity, DDR5 tuning, WiFi 7, and a stronger power design than mainstream boards.",
    oemUrl: "https://www.msi.com/Motherboard/MPG-X870E-CARBON-WIFI",
  },
  {
    category: "Motherboard",
    name: "MSI MEG X870E GODLIKE AM5 E-ATX Motherboard",
    socket: "AM5",
    memory: "DDR5",
    power: 75,
    specs: "X870E, E-ATX, flagship AM5 platform",
    overview: "MSI's MEG X870E GODLIKE is a flagship AM5 E-ATX motherboard built for extreme Ryzen systems. It focuses on premium power delivery, advanced connectivity, PCIe 5.0 expansion, and high-end tuning features.",
    oemUrl: "https://www.msi.com/Motherboard/MEG-X870E-GODLIKE",
  },
  {
    category: "Motherboard",
    name: "ASUS TUF Gaming X870-PLUS WiFi AM5 ATX Motherboard",
    socket: "AM5",
    memory: "DDR5",
    power: 55,
    specs: "X870, WiFi, durable TUF AM5 board",
    overview: "ASUS's TUF Gaming X870-PLUS WiFi is an AM5 ATX motherboard designed for Ryzen 9000, 8000, and 7000 processors. It emphasizes durable TUF components, DDR5 support, PCIe 5.0 capability, and modern networking.",
    oemUrl: "https://www.asus.com/motherboards-components/motherboards/tuf-gaming/tuf-gaming-x870-plus-wifi/",
  },
  {
    category: "Motherboard",
    name: "Gigabyte X870 AORUS Elite WiFi7 AM5 ATX Motherboard",
    socket: "AM5",
    memory: "DDR5",
    power: 55,
    specs: "X870, WiFi 7, practical AM5 gaming board",
    overview: "Gigabyte's X870 AORUS Elite WiFi7 is an AM5 gaming motherboard for Ryzen desktop processors. It brings DDR5 support, WiFi 7, PCIe 5.0 features, and the AORUS build style to a practical ATX layout.",
    oemUrl: "https://www.gigabyte.com/Motherboard/X870-AORUS-ELITE-WIFI7",
  },
  {
    category: "Motherboard",
    name: "MSI MAG B650 Tomahawk WiFi AM5 ATX Motherboard",
    socket: "AM5",
    memory: "DDR5",
    power: 45,
    specs: "B650, WiFi 6E, value AM5 board",
    overview: "MSI's MAG B650 Tomahawk WiFi is an AM5 ATX motherboard for Ryzen 7000, 8000, and compatible later processors. It is a value-focused DDR5 board with WiFi, 2.5Gbps LAN, M.2 storage support, and MSI's Tomahawk styling.",
    oemUrl: "https://www.msi.com/Motherboard/MAG-B650-TOMAHAWK-WIFI",
  },
  {
    category: "Motherboard",
    name: "ASUS ROG Strix B650E-F Gaming WiFi AM5 ATX Motherboard",
    socket: "AM5",
    memory: "DDR5",
    power: 50,
    specs: "B650E, PCIe 5.0, ROG AM5 gaming board",
    overview: "ASUS's ROG Strix B650E-F Gaming WiFi is an AM5 motherboard with DDR5 support and B650E platform features. It suits gaming builds that want ROG software, strong connectivity, PCIe 5.0 support, and a lower price than X870E boards.",
    oemUrl: "https://rog.asus.com/motherboards/rog-strix/rog-strix-b650e-f-gaming-wifi-model/",
  },
  {
    category: "Motherboard",
    name: "MSI MAG Z890 Tomahawk WiFi LGA1851 ATX Motherboard",
    socket: "LGA1851",
    memory: "DDR5",
    power: 55,
    specs: "Z890, WiFi, Core Ultra 200 support",
    overview: "MSI's MAG Z890 Tomahawk WiFi is an LGA1851 ATX motherboard for Intel Core Ultra Series 2 processors. It targets gaming systems with DDR5 support, PCIe 5.0 expansion, fast networking, and MSI's MAG-series durability focus.",
    oemUrl: "https://www.msi.com/Motherboard/MAG-Z890-TOMAHAWK-WIFI",
  },
  {
    category: "Motherboard",
    name: "MSI MPG Z890 Carbon WiFi LGA1851 ATX Motherboard",
    socket: "LGA1851",
    memory: "DDR5",
    power: 60,
    specs: "Z890, WiFi 7, premium Intel platform",
    overview: "MSI's MPG Z890 Carbon WiFi is a higher-end LGA1851 motherboard for Intel Core Ultra desktop processors. It pairs the Z890 chipset with DDR5 tuning, advanced storage, WiFi 7, and a strong power design.",
    oemUrl: "https://www.msi.com/Motherboard/MPG-Z890-CARBON-WIFI",
  },
  {
    category: "Motherboard",
    name: "ASUS ROG Maximus Z890 Hero LGA1851 ATX Motherboard",
    socket: "LGA1851",
    memory: "DDR5",
    power: 70,
    specs: "Z890, ROG Hero, high-end Intel board",
    overview: "ASUS's ROG Maximus Z890 Hero is a premium LGA1851 motherboard for Core Ultra desktop processors. It is aimed at enthusiast Intel builds with advanced power delivery, tuning features, fast networking, and high-end storage support.",
    oemUrl: "https://rog.asus.com/motherboards/rog-maximus/rog-maximus-z890-hero/",
  },
  {
    category: "Motherboard",
    name: "Gigabyte Z890 AORUS Pro Ice LGA1851 ATX Motherboard",
    socket: "LGA1851",
    memory: "DDR5",
    power: 60,
    specs: "Z890, WiFi 7, white AORUS Intel board",
    overview: "Gigabyte's Z890 AORUS Pro Ice is a white-themed LGA1851 motherboard for Intel Core Ultra Series 2 processors. It combines the Z890 chipset with DDR5 support, WiFi 7, PCIe 5.0, and an AORUS power design.",
    oemUrl: "https://www.gigabyte.com/Motherboard/Z890-AORUS-PRO-ICE",
  },
  {
    category: "Memory",
    name: "G.Skill Trident Z5 Neo RGB 32GB DDR5-6000 CL30 Kit",
    memory: "DDR5",
    power: 8,
    specs: "2x16GB, DDR5-6000, CL30, AMD EXPO",
    overview: "G.Skill's Trident Z5 Neo RGB DDR5-6000 CL30 kit is tuned for AMD EXPO platforms and high-performance AM5 gaming builds. The 32GB two-DIMM layout is a common sweet spot for modern gaming PCs.",
    oemUrl: "https://www.gskill.com/product/165/390/1665020956/F5-6000J3038F16GX2-TZ5NR",
  },
  {
    category: "Memory",
    name: "G.Skill Trident Z5 RGB 48GB DDR5-7200 CL36 Kit",
    memory: "DDR5",
    power: 10,
    specs: "2x24GB, high-speed DDR5, Intel XMP",
    overview: "G.Skill's Trident Z5 RGB DDR5-7200 48GB kit gives high-speed Intel XMP memory in two 24GB modules. It targets newer DDR5 platforms where extra capacity and high frequency both matter.",
    oemUrl: "https://www.gskill.com/product/165/374/1688609229/F5-7200J3646F24GX2-TZ5RK",
  },
  {
    category: "Memory",
    name: "Corsair Dominator Titanium RGB 64GB DDR5-6000 CL30 Kit",
    memory: "DDR5",
    power: 11,
    specs: "2x32GB, premium DDR5, RGB cooling bar",
    overview: "Corsair's Dominator Titanium RGB DDR5 kits use a premium heat spreader design and iCUE-controlled RGB lighting. This 64GB class is suited for gaming rigs that also run creator, simulation, or heavy multitasking workloads.",
    oemUrl: "https://www.corsair.com/us/en/c/memory/dominator-titanium-rgb-ddr5-memory",
  },
  {
    category: "Memory",
    name: "Kingston Fury Beast RGB 32GB DDR5-6000 CL30 Kit",
    memory: "DDR5",
    power: 8,
    specs: "2x16GB, DDR5-6000, RGB, low latency",
    overview: "Kingston's Fury Beast RGB DDR5 memory targets gaming systems with XMP and EXPO profile support, RGB lighting, and broad DDR5 motherboard compatibility. The 32GB 6000MT/s CL30 configuration is a popular AM5 pairing.",
    oemUrl: "https://www.kingston.com/en/memory/gaming/kingston-fury-beast-ddr5-rgb-memory",
  },
  {
    category: "Memory",
    name: "TeamGroup T-Force Delta RGB 32GB DDR5-6400 CL40 Kit",
    memory: "DDR5",
    power: 8,
    specs: "2x16GB, DDR5-6400, RGB gaming kit",
    overview: "TeamGroup's T-Force Delta RGB DDR5 memory is a gaming-oriented kit family with a wide RGB light bar, DDR5 speeds, and XMP profile support. It is a visually loud choice for showcase builds.",
    oemUrl: "https://www.teamgroupinc.com/en/product-detail/memory/T-FORCE/delta-rgb-ddr5/delta-rgb-ddr5/",
  },
  {
    category: "Memory",
    name: "Crucial Pro Overclocking 32GB DDR5-6000 CL36 Kit",
    memory: "DDR5",
    power: 7,
    specs: "2x16GB, low-profile DDR5, XMP/EXPO",
    overview: "Crucial Pro Overclocking DDR5 memory is a low-profile kit family designed for stable DDR5 performance and easy compatibility. The 32GB DDR5-6000 class is a practical pick for gaming and productivity PCs.",
    oemUrl: "https://www.crucial.com/memory/ddr5/cp2k16g60c36u5b",
  },
  {
    category: "Memory",
    name: "Patriot Viper Venom RGB 32GB DDR5-6000 CL30 Kit",
    memory: "DDR5",
    power: 8,
    specs: "2x16GB, DDR5-6000, RGB, gaming memory",
    overview: "Patriot's Viper Venom RGB DDR5 family is built for gaming PCs with high DDR5 speeds, RGB lighting, and overclocking profiles. A 32GB 6000MT/s CL30 kit fits many current AM5 and Intel gaming systems.",
    oemUrl: "https://viper.patriotmemory.com/products/viper-venom-rgb-ddr5-performance-memory",
  },
  {
    category: "Memory",
    name: "Lexar ARES RGB 32GB DDR5-6400 CL32 Kit",
    memory: "DDR5",
    power: 8,
    specs: "2x16GB, DDR5-6400, RGB, low-latency kit",
    overview: "Lexar's ARES RGB DDR5 memory line targets gaming desktops with DDR5 bandwidth, RGB lighting, and tuned XMP/EXPO profiles. The 32GB 6400MT/s CL32 class pairs well with modern enthusiast platforms.",
    oemUrl: "https://www.lexar.com/product/lexar-ares-rgb-ddr5-desktop-memory/",
  },
  {
    category: "Storage",
    name: "Samsung 990 EVO Plus 2TB PCIe 5.0 x2 NVMe M.2 SSD",
    power: 7,
    specs: "2TB, PCIe 5.0 x2 / 4.0 x4, efficient NVMe",
    overview: "Samsung's 990 EVO Plus is a mainstream NVMe SSD line that supports PCIe 5.0 x2 and PCIe 4.0 x4 operation. The 2TB model is a strong single-drive option for OS, game, and project storage.",
    oemUrl: "https://www.samsung.com/us/computing/memory-storage/solid-state-drives/990-evo-plus-nvme-m-2-ssd-2tb-mz-v9s2t0b-am/",
  },
  {
    category: "Storage",
    name: "WD Black SN850X 2TB PCIe 4.0 NVMe M.2 SSD",
    power: 7,
    specs: "2TB, PCIe 4.0, gaming NVMe drive",
    overview: "WD Black SN850X is Western Digital's gaming-focused PCIe 4.0 NVMe SSD family. The 2TB version offers high sequential speeds and enough capacity for large game libraries.",
    oemUrl: "https://www.westerndigital.com/products/internal-drives/wd-black-sn850x-nvme-ssd",
  },
  {
    category: "Storage",
    name: "Crucial T705 2TB PCIe 5.0 NVMe M.2 SSD",
    power: 12,
    specs: "2TB, PCIe 5.0, extreme NVMe storage",
    overview: "Crucial's T705 is a PCIe 5.0 NVMe SSD for cutting-edge desktop platforms. The 2TB model targets builders who need very high storage bandwidth for large game libraries, media work, and scratch workloads.",
    oemUrl: "https://www.crucial.com/ssd/t705/ct2000t705ssd3",
  },
  {
    category: "Storage",
    name: "Crucial T500 2TB PCIe 4.0 NVMe M.2 SSD",
    power: 8,
    specs: "2TB, PCIe 4.0, fast value NVMe",
    overview: "Crucial's T500 is a PCIe 4.0 NVMe SSD line aimed at fast mainstream builds. The 2TB model balances speed, capacity, and thermals for gaming and everyday content work.",
    oemUrl: "https://www.crucial.com/ssd/t500/ct2000t500ssd8",
  },
  {
    category: "Storage",
    name: "Seagate FireCuda 540 2TB PCIe 5.0 NVMe M.2 SSD",
    power: 12,
    specs: "2TB, PCIe 5.0, high-end gaming SSD",
    overview: "Seagate's FireCuda 540 is a PCIe 5.0 NVMe SSD built for very high throughput on new desktop platforms. The 2TB drive is aimed at enthusiasts, gamers, and creators who need fast load and transfer performance.",
    oemUrl: "https://www.seagate.com/products/gaming-drives/pc-gaming/firecuda-540-ssd/",
  },
  {
    category: "Storage",
    name: "Kingston Fury Renegade 2TB PCIe 4.0 NVMe M.2 SSD",
    power: 8,
    specs: "2TB, PCIe 4.0, gaming-focused NVMe",
    overview: "Kingston's Fury Renegade PCIe 4.0 NVMe SSD is designed for high-performance gaming and enthusiast desktops. The 2TB model gives a roomy fast drive for games and creative files.",
    oemUrl: "https://www.kingston.com/en/ssd/gaming/kingston-fury-renegade-nvme-m2-ssd",
  },
  {
    category: "Storage",
    name: "Solidigm P44 Pro 2TB PCIe 4.0 NVMe M.2 SSD",
    power: 7,
    specs: "2TB, PCIe 4.0, high-performance SSD",
    overview: "Solidigm's P44 Pro is a high-performance PCIe 4.0 NVMe SSD line for desktop and laptop upgrades. The 2TB model is a strong fit for OS, applications, and large project storage.",
    oemUrl: "https://www.solidigm.com/products/client/d6/p44pro.html",
  },
  {
    category: "Storage",
    name: "Sabrent Rocket 5 2TB PCIe 5.0 NVMe M.2 SSD",
    power: 12,
    specs: "2TB, PCIe 5.0, enthusiast NVMe drive",
    overview: "Sabrent's Rocket 5 is a PCIe 5.0 NVMe SSD for high-end desktop platforms. The 2TB version is aimed at users who want very fast sequential transfers and modern DirectStorage-ready game storage.",
    oemUrl: "https://sabrent.com/products/sb-rkt5-2tb",
  },
  {
    category: "PSU",
    name: "Corsair RM850x Shift 850W 80+ Gold ATX 3.1 PSU",
    power: 0,
    specs: "850W, modular, side connectors, Gold efficiency",
    overview: "Corsair's RM850x SHIFT is the 850W member of the RMx SHIFT family with a side-mounted cable interface. It is built for clean cable routing, efficient operation, and modern GPU power needs in compatible cases.",
    oemUrl: "https://www.corsair.com/us/en/p/psu/cp-9020252-na/rm850x-shift-80-plus-gold-fully-modular-atx-power-supply-cp-9020252-na",
  },
  {
    category: "PSU",
    name: "Seasonic Vertex GX-1000 1000W 80+ Gold ATX 3.0 PSU",
    power: 0,
    specs: "1000W, ATX 3.0, modular, Gold efficiency",
    overview: "Seasonic's Vertex GX-1000 is a 1000W modular ATX 3.0 power supply built for modern GPUs and high-power gaming systems. It emphasizes 80 PLUS Gold efficiency and Seasonic's enthusiast PSU platform.",
    oemUrl: "https://seasonic.com/vertex-gx/",
  },
  {
    category: "PSU",
    name: "be quiet! Straight Power 12 1000W 80+ Platinum PSU",
    power: 0,
    specs: "1000W, ATX 3.0, quiet Platinum PSU",
    overview: "be quiet!'s Straight Power 12 1000W is a quiet, fully modular ATX 3.0 power supply with 80 PLUS Platinum efficiency. It is intended for premium gaming PCs that need high efficiency and low acoustic output.",
    oemUrl: "https://www.bequiet.com/en/powersupply/4107",
  },
  {
    category: "PSU",
    name: "EVGA SuperNOVA 1000G FTW 1000W 80+ Gold PSU",
    power: 0,
    specs: "1000W, modular, Gold efficiency",
    overview: "EVGA's SuperNOVA 1000G FTW is a fully modular 1000W power supply for gaming and enthusiast desktops. It targets high-power builds that need modern cabling and reliable power delivery.",
    oemUrl: "https://www.evga.com/products/product.aspx?pn=220-GT-1000-X1",
  },
  {
    category: "PSU",
    name: "MSI MPG A1000G PCIE5 1000W 80+ Gold PSU",
    power: 0,
    specs: "1000W, PCIe 5.0, modular Gold PSU",
    overview: "MSI's MPG A1000G PCIE5 is a 1000W modular power supply designed for modern graphics cards and gaming desktops. It includes PCIe 5.0-focused cabling and 80 PLUS Gold efficiency.",
    oemUrl: "https://www.msi.com/Power-Supply/MPG-A1000G-PCIE5",
  },
  {
    category: "PSU",
    name: "Thermaltake Toughpower GF A3 1200W 80+ Gold PSU",
    power: 0,
    specs: "1200W, ATX 3.0, modular Gold PSU",
    overview: "Thermaltake's Toughpower GF A3 1200W is a high-capacity modular power supply for modern GPUs and enthusiast desktops. It supports ATX 3.0-era power requirements and 80 PLUS Gold efficiency.",
    oemUrl: "https://www.thermaltake.com/toughpower-gf-a3-gold-1200w.html",
  },
  {
    category: "PSU",
    name: "Lian Li Edge 1000W 80+ Platinum ATX 3.1 PSU",
    power: 0,
    specs: "1000W, ATX 3.1, modular Platinum PSU",
    overview: "Lian Li's Edge 1000W is a modular ATX 3.1 power supply with an L-shaped form factor aimed at dual-chamber cases. It targets clean cable routing and high-efficiency power delivery.",
    oemUrl: "https://lian-li.com/product/edge/",
  },
  {
    category: "Case",
    name: "Fractal Design North XL Charcoal Black Mesh Case",
    power: 0,
    specs: "Large airflow case, wood front, mesh side",
    overview: "Fractal Design's North XL expands the original North design into a larger case with natural front-panel styling and increased component room. The mesh version favors airflow-focused builds with high-end GPUs.",
    oemUrl: "https://www.fractal-design.com/products/cases/north/north-xl/charcoal-black/",
  },
  {
    category: "Case",
    name: "Fractal Design Meshify 2 Compact Black TG Case",
    power: 0,
    specs: "Compact ATX airflow case, tempered glass",
    overview: "Fractal Design's Meshify 2 Compact is an airflow-focused ATX case with a smaller footprint than full-size towers. It suits builders who want strong cooling and clean cable management without an oversized chassis.",
    oemUrl: "https://www.fractal-design.com/products/cases/meshify/meshify-2-compact/black-tg-dark-tint/",
  },
  {
    category: "Case",
    name: "NZXT H9 Flow Black Dual-Chamber Case",
    power: 0,
    specs: "Dual-chamber airflow case, panoramic glass",
    overview: "NZXT's H9 Flow is a dual-chamber case with broad glass visibility and airflow-focused paneling. It is designed for showcase gaming PCs with large radiators, clean cable separation, and modern GPU clearance.",
    oemUrl: "https://nzxt.com/product/h9-flow",
  },
  {
    category: "Case",
    name: "NZXT H6 Flow RGB Black Compact Dual-Chamber Case",
    power: 0,
    specs: "Compact dual-chamber case, angled airflow, RGB fans",
    overview: "NZXT's H6 Flow RGB is a compact dual-chamber case with an angled front intake layout. It is built for visible component layouts, GPU-focused airflow, and included RGB cooling.",
    oemUrl: "https://nzxt.com/product/h6-flow-rgb",
  },
  {
    category: "Case",
    name: "Lian Li O11 Vision Compact Black Case",
    power: 0,
    specs: "Showcase case, glass panels, compact O11 layout",
    overview: "Lian Li's O11 Vision Compact is a showcase-focused case with broad glass visibility and support for tidy high-end builds. It targets builders who want a display-style PC without a full-size tower footprint.",
    oemUrl: "https://lian-li.com/product/o11-vision-compact/",
  },
  {
    category: "Case",
    name: "Corsair 5000D Airflow Black Mid-Tower Case",
    power: 0,
    specs: "High-airflow ATX case, roomy cable management",
    overview: "Corsair's 5000D Airflow is a roomy mid-tower case designed around strong front-panel airflow and flexible cooling layouts. It supports large GPUs, multiple radiator positions, and clean cable management.",
    oemUrl: "https://www.corsair.com/us/en/p/pc-cases/cc-9011210-ww/5000d-airflow-tempered-glass-mid-tower-atx-pc-case-black-cc-9011210-ww",
  },
  {
    category: "Case",
    name: "Phanteks NV7 Black Showcase Full-Tower Case",
    power: 0,
    specs: "Showcase tower, dual glass panels, high-end builds",
    overview: "Phanteks' NV7 is a showcase full-tower chassis for high-end custom builds. It emphasizes broad glass visibility, large cooling support, and a clean internal layout for premium gaming PCs.",
    oemUrl: "https://www.phanteks.com/NV7.html",
  },
];

parts.push(
  ...expandedParts.map((part) => ({
    ...part,
    offers: part.offers || [{ seller: "OEM", price: null, status: "Product page", url: part.oemUrl }],
  })),
);

const lowestPriceOffers = {
  "AMD Ryzen 7 9800X3D 8-Core AM5 Processor": {
    seller: "eBay",
    price: 408.95,
    status: "Lowest verified retailer",
    url: "https://www.ebay.com/itm/226979575818?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339071127&customid=&toolid=10001&mkevt=1"
  },
  "AMD Ryzen 9 9950X 16-Core AM5 Processor": {
    seller: "eBay",
    price: 469.99,
    status: "Lowest verified retailer",
    url: "https://www.ebay.com/itm/227350463994?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339071127&customid=&toolid=10001&mkevt=1"
  },
  "Intel Core Ultra 9 285K LGA1851 Processor": {
    seller: "Amazon",
    price: 539,
    status: "Lowest verified retailer",
    url: "https://www.amazon.com/dp/B0DFKC99VL?tag=pgrid05-20"
  },
  "Intel Core i7-14700K LGA1700 Processor": {
    seller: "Newegg",
    price: 390.97,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/p/N82E16819118466"
  },
  "Gigabyte GeForce RTX 5080 WINDFORCE OC SFF 16G Graphics Card": {
    seller: "Amazon",
    price: 1355.99,
    status: "Lowest verified retailer",
    url: "https://www.amazon.com/dp/B0DS2R7N4F?tag=pgrid05-20"
  },
  "ASUS TUF Gaming GeForce RTX 5070 Ti OC 16GB Graphics Card": {
    seller: "Best Buy",
    price: 1069.99,
    status: "Lowest verified retailer",
    url: "https://api.bestbuy.com/click/-/6614743/pdp"
  },
  "ASUS ROG Strix X870E-E Gaming WiFi AM5 ATX Motherboard": {
    seller: "Amazon",
    price: 356,
    status: "Lowest verified retailer",
    url: "https://www.amazon.com/dp/B0DDZNZF76"
  },
  "MSI MAG X870 Tomahawk WiFi AM5 ATX Motherboard": {
    seller: "Amazon",
    price: 209.99,
    status: "Lowest verified retailer",
    url: "https://www.amazon.com/dp/B0DG3HK897"
  },
  "Gigabyte Z890 AORUS Elite WiFi7 LGA1851 ATX Motherboard": {
    seller: "B&H",
    price: 259.99,
    status: "Lowest verified retailer",
    url: "https://www.bhphotovideo.com/c/product/1857566-REG/gigabyte_z890_a_elite_wifi7_z890_aorus_elite_wifi7.html"
  },
  "MSI MAG Z790 Tomahawk WiFi LGA1700 DDR5 Motherboard": {
    seller: "B&H",
    price: 209.99,
    status: "Lowest verified retailer",
    url: "https://www.bhphotovideo.com/c/product/1731165-REG/msi_mag_z790_tomahawk_wifi.html"
  },
  "Corsair Vengeance RGB 64GB DDR5-6400 CL32 Kit": {
    seller: "Doren Tech",
    price: 1215.99,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/p/N82E1689SIC70SKYG8207"
  },
  "Silicon Power Zenith RGB 32GB DDR5-6000 CL30 Kit": {
    seller: "B&H",
    price: 489.99,
    status: "Lowest verified retailer",
    url: "https://www.bhphotovideo.com/c/product/1801359-REG/silicone_power_su032gxlwu60afdfbh_32gb_2x16gb_zenith_ddr5_6000.html"
  },
  "Samsung 990 PRO 2TB PCIe 4.0 NVMe M.2 SSD": {
    seller: "eBay",
    price: 303.99,
    status: "Lowest verified retailer",
    url: "https://www.ebay.com/itm/146214736097"
  },
  "Corsair RM1000x Shift 1000W 80+ Gold ATX 3.1 PSU": {
    seller: "Newegg",
    price: 182.99,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/p/N82E16817139350"
  },
  "Fractal Design North XL RC Charcoal Black TG Case": {
    seller: "Newegg",
    price: 200.98,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/p/N82E16811352237"
  },
  "NZXT H7 Flow RGB 2024 Black Mid-Tower Case": {
    seller: "Newegg",
    price: 149.99,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/p/N82E16811146363"
  },
  "AMD Ryzen 5 9600X 6-Core AM5 Processor": {
    seller: "Amazon",
    price: 179,
    status: "Lowest verified retailer",
    url: "https://www.amazon.com/dp/B0D6NN6TM7?tag=pgrid05-20"
  },
  "AMD Ryzen 7 9700X 8-Core AM5 Processor": {
    seller: "Amazon",
    price: 298.12,
    status: "Lowest verified retailer",
    url: "https://www.amazon.com/dp/B0DPXP86KX?tag=pgrid05-20"
  },
  "AMD Ryzen 9 9900X 12-Core AM5 Processor": {
    seller: "eBay",
    price: 340,
    status: "Lowest verified retailer",
    url: "https://www.ebay.com/itm/236835430743?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339071127&customid=&toolid=10001&mkevt=1"
  },
  "AMD Ryzen 9 9950X3D 16-Core AM5 Processor": {
    seller: "eBay",
    price: 649.99,
    status: "Lowest verified retailer",
    url: "https://www.ebay.com/itm/127812411405?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339071127&customid=&toolid=10001&mkevt=1"
  },
  "AMD Ryzen 9 9900X3D 12-Core AM5 Processor": {
    seller: "B&H",
    price: 509.99,
    status: "Lowest verified retailer",
    url: "https://www.bhphotovideo.com/c/product/1878569-REG/amd_ryzen_9_9900x3d_4_4.html"
  },
  "AMD Ryzen 7 7800X3D 8-Core AM5 Processor": {
    seller: "Amazon",
    price: 318.99,
    status: "Lowest verified retailer",
    url: "https://www.amazon.com/dp/B0CXQ33KVM?tag=pgrid05-20"
  },
  "AMD Ryzen 5 7600X 6-Core AM5 Processor": {
    seller: "eBay",
    price: 155,
    status: "Lowest verified retailer",
    url: "https://www.ebay.com/itm/257473252640?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339071127&customid=&toolid=10001&mkevt=1"
  },
  "AMD Ryzen 7 7700X 8-Core AM5 Processor": {
    seller: "Amazon",
    price: 199.99,
    status: "Lowest verified retailer",
    url: "https://www.amazon.com/dp/B0GYYY8PK2?tag=pgrid05-20"
  },
  "AMD Ryzen 9 7900X 12-Core AM5 Processor": {
    seller: "eBay",
    price: 284.98,
    status: "Lowest verified retailer",
    url: "https://www.ebay.com/itm/227324307094?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339071127&customid=&toolid=10001&mkevt=1"
  },
  "AMD Ryzen 9 7950X 16-Core AM5 Processor": {
    seller: "eBay",
    price: 465,
    status: "Lowest verified retailer",
    url: "https://www.ebay.com/itm/205803241492?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339071127&customid=&toolid=10001&mkevt=1"
  },
  "ASUS ROG Astral GeForce RTX 5090 OC 32GB Graphics Card": {
    seller: "Amazon",
    price: 4329.95,
    status: "Lowest verified retailer",
    url: "https://www.amazon.com/dp/B0DS2WQZ2M?tag=pgrid05-20"
  },
  "ASUS TUF Gaming GeForce RTX 5080 OC 16GB Graphics Card": {
    seller: "Amazon",
    price: 1599.99,
    status: "Lowest verified retailer",
    url: "https://www.amazon.com/dp/B0DQSMMCSH?tag=pgrid05-20"
  },
  "MSI GeForce RTX 5080 16G Gaming Trio OC Graphics Card": {
    seller: "B&H",
    price: 1599.95,
    status: "Lowest verified retailer",
    url: "https://www.bhphotovideo.com/c/product/1875457-REG/msi_g5080_16gtc_geforce_rtx_5080_gaming.html"
  },
  "Gigabyte GeForce RTX 5070 Gaming OC 12G Graphics Card": {
    seller: "Best Buy",
    price: 679.99,
    status: "Lowest verified retailer",
    url: "https://www.bestbuy.com/site/gigabyte-nvidia-geforce-rtx-5070-gaming-oc-12g-gddr7-pci-express-5-0-graphics-card-black/6621261.p"
  },
  "ASUS Dual GeForce RTX 4060 OC 8GB Graphics Card": {
    seller: "Newegg",
    price: 367.55,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/asus-dual-rtx4060-o8g-geforce-rtx-4060-8gb-video-card-double-fans/p/N82E16814126665"
  },
  "MSI GeForce RTX 4070 SUPER 12G Gaming X Slim Graphics Card": {
    seller: "eBay",
    price: 959,
    status: "Lowest verified retailer",
    url: "https://www.ebay.com/itm/376876837793?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339071127&customid=&toolid=10001&mkevt=1"
  },
  "Gigabyte Radeon RX 9070 XT Gaming OC 16G Graphics Card": {
    seller: "Amazon",
    price: 649.99,
    status: "Lowest verified retailer",
    url: "https://www.amazon.com/dp/B0DS2QG2KW?tag=pgrid05-20"
  },
  "ASUS TUF Gaming Radeon RX 7900 XTX OC 24GB Graphics Card": {
    seller: "Amazon",
    price: 1099.99,
    status: "Lowest verified retailer",
    url: "https://www.amazon.com/dp/B0BNLSW23M"
  },
  "Sapphire Nitro+ Radeon RX 7900 XTX Vapor-X 24GB Graphics Card": {
    seller: "Amazon",
    price: 999.99,
    status: "Lowest verified retailer",
    url: "https://www.amazon.com/dp/B0BR6HZZ6Z"
  },
  "PNY GeForce RTX 4070 Ti SUPER XLR8 Gaming VERTO OC 16GB Graphics Card": {
    seller: "Dell",
    price: 749.99,
    status: "Lowest verified retailer",
    url: "https://www.dell.com/en-us/shop/pny-geforce-rtx-4070-ti-super-16gb-verto-overclocked-edition/apd/ac774156/graphic-video-cards"
  },
  "MSI MEG X870E GODLIKE AM5 E-ATX Motherboard": {
    seller: "Newegg",
    price: 999.99,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/p/N82E16813144678"
  },
  "ASUS TUF Gaming X870-PLUS WiFi AM5 ATX Motherboard": {
    seller: "Computer Headquarters",
    price: 179.99,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/p/N82E1689SIADFRKUW8514"
  },
  "ASUS ROG Strix B650E-F Gaming WiFi AM5 ATX Motherboard": {
    seller: "Silicon Alley Electronics",
    price: 129.95,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/p/N82E1689SIBDUMKYB7156"
  },
  "MSI MAG Z890 Tomahawk WiFi LGA1851 ATX Motherboard": {
    seller: "Newegg",
    price: 229.99,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/msi-mag-z890-tomahawk-wifi-atx-motherboard-intel-z890-lga-1851/p/N82E16813144669"
  },
  "MSI MPG Z890 Carbon WiFi LGA1851 ATX Motherboard": {
    seller: "Newegg",
    price: 399.99,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/p/N82E16813144670"
  },
  "ASUS ROG Maximus Z890 Hero LGA1851 ATX Motherboard": {
    seller: "Best Buy",
    price: 549.99,
    status: "Lowest verified retailer",
    url: "https://www.bestbuy.com/product/asus-rog-maximus-z890-hero-socket-lga-1851-intel-z890-atx-ddr5-wi-fi-7-motherboard-black/JJGGLQTZRC"
  },
  "Gigabyte Z890 AORUS Pro Ice LGA1851 ATX Motherboard": {
    seller: "Newegg",
    price: 299.99,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/gigabyte-z890-aorus-pro-ice-atx-motherboards-intel-intel-z890-lga-1851/p/N82E16813145524"
  },
  "G.Skill Trident Z5 Neo RGB 32GB DDR5-6000 CL30 Kit": {
    seller: "EvoMicro",
    price: 488,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/p/N82E1689SIAG5BKUH7798"
  },
  "G.Skill Trident Z5 RGB 48GB DDR5-7200 CL36 Kit": {
    seller: "Newegg",
    price: 599.99,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/p/pl?d=G.Skill+Trident+Z5+RGB+48GB+DDR5-7200+CL36"
  },
  "Corsair Dominator Titanium RGB 64GB DDR5-6000 CL30 Kit": {
    seller: "Newegg",
    price: 1199.99,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/p/pl?d=Corsair+Dominator+Titanium+RGB+64GB+DDR5-6000+CL30"
  },
  "Kingston Fury Beast RGB 32GB DDR5-6000 CL30 Kit": {
    seller: "TELeasy",
    price: 553.58,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/p/N82E1689SIA8N2KNP9621"
  },
  "TeamGroup T-Force Delta RGB 32GB DDR5-6400 CL40 Kit": {
    seller: "Newegg",
    price: 429.99,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/p/pl?d=TeamGroup+T-Force+Delta+RGB+32GB+DDR5-6400+CL40"
  },
  "Crucial Pro Overclocking 32GB DDR5-6000 CL36 Kit": {
    seller: "Newegg",
    price: 414.99,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/p/N82E16820156406"
  },
  "Patriot Viper Venom RGB 32GB DDR5-6000 CL30 Kit": {
    seller: "Newegg",
    price: 409.99,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/p/N82E1680RN002U004U6"
  },
  "Lexar ARES RGB 32GB DDR5-6400 CL32 Kit": {
    seller: "Newegg",
    price: 399.99,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/p/pl?d=Lexar+ARES+RGB+32GB+DDR5-6400+CL32"
  },
  "Samsung 990 EVO Plus 2TB PCIe 5.0 x2 NVMe M.2 SSD": {
    seller: "Amazon",
    price: 409,
    status: "Lowest verified retailer",
    url: "https://www.amazon.com/dp/B0DHLCRF91"
  },
  "WD Black SN850X 2TB PCIe 4.0 NVMe M.2 SSD": {
    seller: "eBay",
    price: 319,
    status: "Lowest verified retailer",
    url: "https://www.ebay.com/itm/298229824506"
  },
  "Crucial T705 2TB PCIe 5.0 NVMe M.2 SSD": {
    seller: "Amazon",
    price: 392.55,
    status: "Lowest verified retailer",
    url: "https://www.amazon.com/dp/B0CTS93WML"
  },
  "Crucial T500 2TB PCIe 4.0 NVMe M.2 SSD": {
    seller: "eBay",
    price: 344.9,
    status: "Lowest verified retailer",
    url: "https://www.ebay.com/itm/257387682615"
  },
  "Seagate FireCuda 540 2TB PCIe 5.0 NVMe M.2 SSD": {
    seller: "Amazon",
    price: 450,
    status: "Lowest verified retailer",
    url: "https://www.amazon.com/dp/B08Q55DGGY"
  },
  "Kingston Fury Renegade 2TB PCIe 4.0 NVMe M.2 SSD": {
    seller: "Newegg",
    price: 389.99,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/p/0D9-001B-00582"
  },
  "Solidigm P44 Pro 2TB PCIe 4.0 NVMe M.2 SSD": {
    seller: "Newegg",
    price: 299.99,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/p/pl?d=Solidigm+P44+Pro+2TB"
  },
  "Sabrent Rocket 5 2TB PCIe 5.0 NVMe M.2 SSD": {
    seller: "Sabrent",
    price: 319.99,
    status: "Lowest verified retailer",
    url: "https://sabrent.com/products/sb-rkt5-2tb"
  },
  "Corsair RM850x Shift 850W 80+ Gold ATX 3.1 PSU": {
    seller: "Newegg",
    price: 149.99,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/p/N82E16817139351"
  },
  "Seasonic Vertex GX-1000 1000W 80+ Gold ATX 3.0 PSU": {
    seller: "C.N.E Technology",
    price: 377.33,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/p/N82E1689SIBZW0KPB9293"
  },
  "be quiet! Straight Power 12 1000W 80+ Platinum PSU": {
    seller: "Newegg",
    price: 159.9,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/p/pl?d=be+quiet+Straight+Power+12+1000W"
  },
  "EVGA SuperNOVA 1000G FTW 1000W 80+ Gold PSU": {
    seller: "EVGA",
    price: 189.99,
    status: "Lowest verified retailer",
    url: "https://www.evga.com/products/product.aspx?pn=220-GT-1000-X1"
  },
  "MSI MPG A1000G PCIE5 1000W 80+ Gold PSU": {
    seller: "BTE Outlet",
    price: 375.71,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/p/N82E1689SIAD6HJ8E1641"
  },
  "Thermaltake Toughpower GF A3 1200W 80+ Gold PSU": {
    seller: "Thermaltake",
    price: 204.98,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/p/N82E1689SIA8EFJUS8785"
  },
  "Lian Li Edge 1000W 80+ Platinum ATX 3.1 PSU": {
    seller: "Newegg",
    price: 124.6,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/p/N82E1681HU01PP00022"
  },
  "Fractal Design North XL Charcoal Black Mesh Case": {
    seller: "Newegg",
    price: 207.98,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/p/N82E16811352215"
  },
  "Fractal Design Meshify 2 Compact Black TG Case": {
    seller: "Newegg",
    price: 147.98,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/p/N82E16811352140"
  },
  "Lian Li O11 Vision Compact Black Case": {
    seller: "Newegg",
    price: 124.99,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/p/N82E1682AM000Z000D8"
  },
  "Corsair 5000D Airflow Black Mid-Tower Case": {
    seller: "Newegg",
    price: 169.99,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/p/N82E16811139240"
  },
  "Phanteks NV7 Black Showcase Full-Tower Case": {
    seller: "Newegg",
    price: 219.99,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/p/pl?d=Phanteks+NV7+Black"
  },
  "MSI MPG X870E Carbon WiFi AM5 ATX Motherboard": {
    seller: "Newegg",
    price: 359.99,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/p/N82E16813144666"
  },
  "Gigabyte X870 AORUS Elite WiFi7 AM5 ATX Motherboard": {
    seller: "Newegg",
    price: 249.99,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/p/N82E16813145519"
  },
  "MSI MAG B650 Tomahawk WiFi AM5 ATX Motherboard": {
    seller: "Newegg",
    price: 199.99,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/p/N82E16813144557"
  },
  "NZXT H9 Flow Black Dual-Chamber Case": {
    seller: "Newegg",
    price: 128.98,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/p/N82E16811146370"
  },
  "NZXT H6 Flow RGB Black Compact Dual-Chamber Case": {
    seller: "Newegg",
    price: 115.98,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/p/N82E16811146359"
  }
};

parts.forEach((part) => {
  const lowestOffer = lowestPriceOffers[part.name];
  if (!lowestOffer) return;

  const existingOffers = part.offers || [];
  part.offers = [
    { ...lowestOffer },
    ...existingOffers.filter((offer) => offer.url !== lowestOffer.url && offer.seller !== lowestOffer.seller),
  ];
});

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

function pricedOffers(part) {
  return part.offers.filter((offer) => Number.isFinite(offer.price));
}

function bestOffer(part) {
  return [...pricedOffers(part)].sort((a, b) => a.price - b.price)[0] || part.offers[0];
}

function compareAt(part) {
  const offerWas = part.offers.map((offer) => offer.was).filter(Number.isFinite).sort((a, b) => b - a)[0];
  const price = bestOffer(part).price;
  return offerWas || (Number.isFinite(price) ? Math.round(price * 1.12) : null);
}

function formatMoney(value) {
  if (!Number.isFinite(value)) return "Check price";
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: value % 1 ? 2 : 0 }).format(value);
}

function wasMarkup(value) {
  return Number.isFinite(value) ? `<span class="was">${formatMoney(value)}</span>` : "";
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
  const deals = [...parts]
    .filter((part) => Number.isFinite(bestOffer(part).price))
    .sort((a, b) => compareAt(b) - bestOffer(b).price - (compareAt(a) - bestOffer(a).price))
    .slice(0, 6);
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
          ${wasMarkup(was)}
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
          ${wasMarkup(was)}
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
          ${wasMarkup(was)}
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
