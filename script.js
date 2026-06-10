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

const retailerVerifiedParts = [
  {
    category: "CPU",
    name: "AMD Ryzen 7 5700X 8-Core AM4 Processor",
    socket: "AM4",
    memory: "DDR4",
    power: 65,
    specs: "8 cores, Zen 3, value AM4 upgrade CPU",
    overview: "AMD's Ryzen 7 5700X is an 8-core AM4 processor for builders upgrading mature DDR4 systems. It offers a 65W TDP, PCIe 4.0 platform support on compatible boards, and strong multitasking value for gaming and productivity desktops.",
    oemUrl: "https://www.amd.com/en/products/processors/desktops/ryzen/5000-series/amd-ryzen-7-5700x.html",
    offers: [{ seller: "B&H", price: 219.99, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1695216-REG/amd_100_100000926wof_ryzen_7_5700x_3_4.html" }],
  },
  {
    category: "CPU",
    name: "AMD Ryzen 7 9850X3D 8-Core AM5 Processor",
    socket: "AM5",
    memory: "DDR5",
    power: 120,
    specs: "8 cores, 3D V-Cache, high-clock AM5 gaming CPU",
    overview: "AMD's Ryzen 7 9850X3D is a gaming-focused AM5 desktop processor with 8 cores and AMD 3D V-Cache. It is aimed at high-FPS gaming systems that want newer Ryzen gaming performance on DDR5 platforms.",
    oemUrl: "https://www.amd.com/en/products/processors/desktops.html",
    offers: [{ seller: "B&H", price: 489, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1944461-REG/amd_100_100001973wof_ryzen_7_9850x3d_4_7.html" }],
  },
  {
    category: "CPU",
    name: "Intel Core Ultra 7 270K Plus 24-Core LGA1851 Processor",
    socket: "LGA1851",
    memory: "DDR5",
    power: 250,
    specs: "24 cores, Core Ultra Series 2, unlocked Intel CPU",
    overview: "Intel's Core Ultra 7 270K Plus is an LGA1851 desktop processor for Core Ultra Series 2 platforms. It targets high-performance Intel builds with DDR5 memory, current Z890-class boards, and a 24-core hybrid layout.",
    oemUrl: "https://www.intel.com/content/www/us/en/products/details/processors/core-ultra.html",
    offers: [{ seller: "B&H", price: 319.99, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1952531-REG/intel_bx80768270k_core_ultra_7_270k.html" }],
  },
  {
    category: "CPU",
    name: "Intel Core i5-14600K 14-Core LGA1700 Processor",
    socket: "LGA1700",
    memory: "DDR5",
    power: 181,
    specs: "14 cores, unlocked, strong midrange gaming CPU",
    overview: "Intel's Core i5-14600K is an unlocked 14th Gen LGA1700 processor with 14 cores and 20 threads. It remains a practical gaming and content-creation CPU for builders using Z790 and other compatible Intel boards.",
    oemUrl: "https://www.intel.com/content/www/us/en/products/sku/236799/intel-core-i5-processor-14600k-24m-cache-up-to-5-30-ghz/specifications.html",
    offers: [{ seller: "B&H", price: 247.99, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1781465-REG/intel_bx8071514600k_core_i5_14600k_14_core_lga.html" }],
  },
  {
    category: "CPU",
    name: "AMD Ryzen 5 5500 6-Core AM4 Processor",
    socket: "AM4",
    memory: "DDR4",
    power: 65,
    specs: "6 cores, Zen 3, budget AM4 gaming CPU",
    overview: "AMD's Ryzen 5 5500 is a 6-core AM4 desktop processor with a bundled Wraith Stealth cooler. It is a low-cost path for DDR4 gaming builds and upgrades that do not need integrated graphics.",
    oemUrl: "https://www.amd.com/en/products/processors/desktops/ryzen/5000-series/amd-ryzen-5-5500.html",
    offers: [{ seller: "B&H", price: 86, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1695218-REG/amd_100_100000457box_ryzen_5_5500_3_6.html" }],
  },
  {
    category: "CPU",
    name: "Intel Core i7-12700K 12-Core LGA1700 Processor",
    socket: "LGA1700",
    memory: "DDR5",
    power: 190,
    specs: "12 cores, unlocked Alder Lake enthusiast CPU",
    overview: "Intel's Core i7-12700K is an unlocked LGA1700 processor with a hybrid 12-core design. It fits gaming and productivity desktops that want strong performance on widely available Intel 600- and 700-series platforms.",
    oemUrl: "https://www.intel.com/content/www/us/en/products/sku/134594/intel-core-i712700k-processor-25m-cache-up-to-5-00-ghz/specifications.html",
    offers: [{ seller: "B&H", price: 342.47, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1663646-REG/intel_bx8071512700k_core_i7_12700k_8_core_lga.html" }],
  },
  {
    category: "CPU",
    name: "AMD Ryzen 9 5900XT 16-Core AM4 Processor",
    socket: "AM4",
    memory: "DDR4",
    power: 105,
    specs: "16 cores, AM4, creator-friendly DDR4 upgrade",
    overview: "AMD's Ryzen 9 5900XT brings 16 cores to the AM4 platform for users extending existing DDR4 systems. It is a strong upgrade target for heavier multitasking and production workloads on compatible boards.",
    oemUrl: "https://www.amd.com/en/products/processors/desktops/ryzen/5000-series.html",
    offers: [{ seller: "B&H", price: 284.99, was: 322.99, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1834131-REG/amd_100_100001581wof_ryzen_9_5900xt_3_3.html" }],
  },
  {
    category: "CPU",
    name: "Intel Core Ultra 5 250K Plus 18-Core LGA1851 Processor",
    socket: "LGA1851",
    memory: "DDR5",
    power: 159,
    specs: "18 cores, Core Ultra Series 2, midrange Intel CPU",
    overview: "Intel's Core Ultra 5 250K Plus is an LGA1851 processor for newer Intel desktop platforms. It targets midrange gaming and productivity systems that want current Core Ultra platform features.",
    oemUrl: "https://www.intel.com/content/www/us/en/products/details/processors/core-ultra.html",
    offers: [{ seller: "B&H", price: 219.99, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1952529-REG/intel_bx80768250k_core_ultra_5_250k.html" }],
  },
  {
    category: "CPU",
    name: "AMD Ryzen 7 5700 8-Core AM4 Processor",
    socket: "AM4",
    memory: "DDR4",
    power: 65,
    specs: "8 cores, AM4, efficient DDR4 upgrade CPU",
    overview: "AMD's Ryzen 7 5700 is an 8-core AM4 processor for value-oriented DDR4 systems. It suits gaming and everyday productivity builds where platform cost matters.",
    oemUrl: "https://www.amd.com/en/products/processors/desktops/ryzen/5000-series.html",
    offers: [{ seller: "B&H", price: 168.99, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1964984-REG/amd_100_100000743sbx_ryzen_7_5700_processor.html" }],
  },
  {
    category: "CPU",
    name: "Intel Core i9-14900K 24-Core LGA1700 Processor",
    socket: "LGA1700",
    memory: "DDR5",
    power: 253,
    specs: "24 cores, unlocked, high-end LGA1700 CPU",
    overview: "Intel's Core i9-14900K is an unlocked 14th Gen LGA1700 desktop processor with a 24-core hybrid layout. It targets high-end gaming, streaming, and creator machines on mature Intel platforms.",
    oemUrl: "https://www.intel.com/content/www/us/en/products/sku/236773/intel-core-i9-processor-14900k-36m-cache-up-to-6-00-ghz/specifications.html",
    offers: [{ seller: "B&H", price: 519.99, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1781469-REG/intel_bx8071514900k_core_i9_14900k_24_core_lga.html" }],
  },
  {
    category: "CPU",
    name: "Intel Core Ultra 7 265KF 20-Core LGA1851 Processor",
    socket: "LGA1851",
    memory: "DDR5",
    power: 250,
    specs: "20 cores, unlocked, discrete graphics required",
    overview: "Intel's Core Ultra 7 265KF is an unlocked LGA1851 desktop processor for builders using a discrete graphics card. It fits high-performance Core Ultra Series 2 systems with DDR5 memory.",
    oemUrl: "https://www.intel.com/content/www/us/en/products/sku/241061/intel-core-ultra-7-processor-265kf-30m-cache-up-to-5-50-ghz/specifications.html",
    offers: [{ seller: "B&H", price: 278.99, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1852497-REG/intel_bx80768265kf_core_ultra_7_265kf.html" }],
  },
  {
    category: "CPU",
    name: "Intel Core i7-14700F 20-Core LGA1700 Processor",
    socket: "LGA1700",
    memory: "DDR5",
    power: 219,
    specs: "20 cores, no integrated graphics, LGA1700 value CPU",
    overview: "Intel's Core i7-14700F is a 20-core LGA1700 processor for systems with discrete graphics. It brings strong 14th Gen productivity and gaming performance without paying for integrated graphics.",
    oemUrl: "https://www.intel.com/content/www/us/en/products/sku/236782/intel-core-i7-processor-14700f-33m-cache-up-to-5-40-ghz/specifications.html",
    offers: [{ seller: "B&H", price: 329.99, status: "Special order", url: "https://www.bhphotovideo.com/c/product/1802189-REG/intel_bx8071514700f_ic_i7_14700f_desktop_processor20.html" }],
  },
  {
    category: "CPU",
    name: "Intel Core i9-12900K 16-Core LGA1700 Processor",
    socket: "LGA1700",
    memory: "DDR5",
    power: 241,
    specs: "16 cores, unlocked Alder Lake flagship CPU",
    overview: "Intel's Core i9-12900K is an unlocked LGA1700 processor with 16 hybrid cores. It remains useful for discounted high-performance DDR4 or DDR5 builds on compatible Intel motherboards.",
    oemUrl: "https://www.intel.com/content/www/us/en/products/sku/134599/intel-core-i912900k-processor-30m-cache-up-to-5-20-ghz/specifications.html",
    offers: [{ seller: "B&H", price: 438.95, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1663644-REG/intel_bx8071512900k_core_i9_12900k_8_core_lga.html" }],
  },
  {
    category: "CPU",
    name: "AMD Ryzen 5 8600G 6-Core AM5 Processor",
    socket: "AM5",
    memory: "DDR5",
    power: 65,
    specs: "6 cores, Radeon 760M graphics, AM5 APU",
    overview: "AMD's Ryzen 5 8600G is an AM5 processor with integrated Radeon graphics. It is useful for compact and budget builds that can start without a discrete GPU while retaining DDR5 platform support.",
    oemUrl: "https://www.amd.com/en/products/processors/desktops/ryzen/8000-series/amd-ryzen-5-8600g.html",
    offers: [{ seller: "B&H", price: 191, was: 229, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1804827-REG/amd_100_100001237box_ryzen_5_8600g_wraith.html" }],
  },
  {
    category: "Motherboard",
    name: "Gigabyte Z890 AORUS ELITE WIFI7 ICE LGA1851 ATX Motherboard",
    socket: "LGA1851",
    memory: "DDR5",
    power: 60,
    specs: "Z890, WiFi 7, white ATX Intel board",
    overview: "Gigabyte's Z890 AORUS ELITE WIFI7 ICE is a white ATX motherboard for Intel Core Ultra Series 2 processors. It combines Z890 connectivity, DDR5 support, WiFi 7, PCIe 5.0 expansion, and a 16+1+2 VRM design.",
    oemUrl: "https://www.gigabyte.com/Motherboard/Z890-AORUS-ELITE-WIFI7-ICE",
    offers: [{ seller: "B&H", price: 259.99, was: 289.99, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1857565-REG/gigabyte_z890_a_elite_wf7_ice_z890_aorus_elite_wifi7.html" }],
  },
  {
    category: "Motherboard",
    name: "Gigabyte B650M AORUS ELITE AX ICE AM5 Micro-ATX Motherboard",
    socket: "AM5",
    memory: "DDR5",
    power: 45,
    specs: "B650, micro-ATX, white AM5 motherboard",
    overview: "Gigabyte's B650M AORUS ELITE AX ICE is a micro-ATX AM5 motherboard with DDR5 support, wireless networking, and a bright white board style for compact Ryzen builds.",
    oemUrl: "https://www.gigabyte.com/Motherboard/B650M-AORUS-ELITE-AX-ICE",
    offers: [{ seller: "B&H", price: 159.99, was: 219.99, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1839647-REG/gigabyte_b650m_aorus_elite_ax.html" }],
  },
  {
    category: "Motherboard",
    name: "Gigabyte B650 AORUS ELITE AX AM5 ATX Motherboard",
    socket: "AM5",
    memory: "DDR5",
    power: 45,
    specs: "B650, ATX, WiFi, value AM5 platform",
    overview: "Gigabyte's B650 AORUS ELITE AX is an AM5 ATX motherboard for Ryzen DDR5 builds. It is a cost-conscious option with AORUS styling, wireless networking, and mainstream expansion.",
    oemUrl: "https://www.gigabyte.com/Motherboard/B650-AORUS-ELITE-AX",
    offers: [{ seller: "B&H", price: 159.99, was: 219.99, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1736690-REG/gigabyte_b650_aorus_elite_ax.html" }],
  },
  {
    category: "Motherboard",
    name: "Gigabyte B850M GAMING X WIFI6E AM5 Micro-ATX Motherboard",
    socket: "AM5",
    memory: "DDR5",
    power: 45,
    specs: "B850, micro-ATX, WiFi 6E AM5 board",
    overview: "Gigabyte's B850M GAMING X WIFI6E is a compact AM5 motherboard for Ryzen DDR5 systems. It gives budget and midrange builds a newer B850 chipset option with wireless connectivity.",
    oemUrl: "https://www.gigabyte.com/Motherboard/B850M-GAMING-X-WIFI6E",
    offers: [{ seller: "B&H", price: 169.99, was: 179.99, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1870414-REG/gigabyte_b850m_gaming_x_wf6e_b850m_gaming_x_wifi6e.html" }],
  },
  {
    category: "Motherboard",
    name: "Gigabyte X870E AORUS PRO AM5 ATX Motherboard",
    socket: "AM5",
    memory: "DDR5",
    power: 60,
    specs: "X870E, ATX, premium AM5 board",
    overview: "Gigabyte's X870E AORUS PRO is a premium AM5 motherboard for Ryzen DDR5 systems. It targets high-end gaming and creator builds with X870E connectivity and broad expansion.",
    oemUrl: "https://www.gigabyte.com/Motherboard/X870E-AORUS-PRO",
    offers: [{ seller: "B&H", price: 359.99, was: 394.99, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1852685-REG/gigabyte_x870e_aorus_pro_motherboard.html" }],
  },
  {
    category: "Motherboard",
    name: "Gigabyte A620I AX AM5 Mini-ITX Motherboard",
    socket: "AM5",
    memory: "DDR5",
    power: 35,
    specs: "A620, mini-ITX, compact AM5 board",
    overview: "Gigabyte's A620I AX is a Mini-ITX AM5 motherboard for compact Ryzen builds. It keeps the platform small and affordable while retaining DDR5 support and wireless networking.",
    oemUrl: "https://www.gigabyte.com/Motherboard/A620I-AX",
    offers: [{ seller: "B&H", price: 129.99, was: 149.99, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1781438-REG/gigabyte_a620i_ax_g10_motherboard.html" }],
  },
  {
    category: "Motherboard",
    name: "Gigabyte X870 AORUS ELITE WIFI7 ICE AM5 ATX Motherboard",
    socket: "AM5",
    memory: "DDR5",
    power: 55,
    specs: "X870, WiFi 7, white AM5 ATX board",
    overview: "Gigabyte's X870 AORUS ELITE WIFI7 ICE is a white AM5 ATX motherboard with DDR5, WiFi 7, and current Ryzen platform features. It suits showcase builds that want a lighter board aesthetic.",
    oemUrl: "https://www.gigabyte.com/Motherboard/X870-AORUS-ELITE-WIFI7-ICE",
    offers: [{ seller: "B&H", price: 259.99, was: 319.99, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1852678-REG/gigabyte_x870_aorus_elite_wifi7.html" }],
  },
  {
    category: "Motherboard",
    name: "Gigabyte B850M DS3H AM5 Micro-ATX Motherboard",
    socket: "AM5",
    memory: "DDR5",
    power: 35,
    specs: "B850, micro-ATX, entry AM5 motherboard",
    overview: "Gigabyte's B850M DS3H is a micro-ATX AM5 motherboard for budget Ryzen DDR5 builds. It focuses on practical expansion and low platform cost.",
    oemUrl: "https://www.gigabyte.com/Motherboard/B850M-DS3H",
    offers: [{ seller: "B&H", price: 139.99, was: 154.99, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1870413-REG/gigabyte_b850m_ds3h_am5_micro_atx.html" }],
  },
  {
    category: "Storage",
    name: "Samsung 1TB 9100 PRO PCIe 5.0 NVMe M.2 SSD",
    power: 8,
    specs: "1TB, PCIe 5.0, flagship Samsung NVMe",
    overview: "Samsung's 9100 PRO is a PCIe 5.0 NVMe SSD built for high-end desktops and workstations. The 1TB version delivers very high sequential throughput for heavy games, media, and AI workloads.",
    oemUrl: "https://www.samsung.com/us/computing/memory-storage/solid-state-drives/9100-pro-pcie-5-0-nvme-ssd/",
    offers: [{ seller: "B&H", price: 249.99, was: 339.99, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1878198-REG/samsung_mz_vap1t0b_am_1tb_9100_pro_pcie.html" }],
  },
  {
    category: "Storage",
    name: "Samsung 1TB 990 PRO PCIe 4.0 NVMe M.2 SSD",
    power: 7,
    specs: "1TB, PCIe 4.0, fast Samsung gaming SSD",
    overview: "Samsung's 990 PRO 1TB is a PCIe 4.0 NVMe SSD for fast boot, game, and application storage. It is a smaller-capacity counterpart to the existing 2TB catalog entry.",
    oemUrl: "https://www.samsung.com/us/computing/memory-storage/solid-state-drives/990-pro-pcie-4-0-nvme-ssd/",
    offers: [{ seller: "B&H", price: 249.99, was: 319.99, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1726547-REG/samsung_mz_v9p1t0b_am_1tb_990_pro_pcie.html" }],
  },
  {
    category: "Storage",
    name: "Samsung 2TB 9100 PRO PCIe 5.0 NVMe M.2 SSD",
    power: 8,
    specs: "2TB, PCIe 5.0, high-end Samsung NVMe",
    overview: "Samsung's 2TB 9100 PRO offers PCIe 5.0 bandwidth and larger capacity for premium gaming and creator systems. It is aimed at users who need very high sequential reads and writes.",
    oemUrl: "https://www.samsung.com/us/computing/memory-storage/solid-state-drives/9100-pro-pcie-5-0-nvme-ssd/",
    offers: [{ seller: "B&H", price: 429.99, was: 679.99, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1878199-REG/samsung_mz_vap2t0b_am_2tb_9100_pro_pcie.html" }],
  },
  {
    category: "Storage",
    name: "Lexar 1TB NM620 PCIe 3.0 NVMe M.2 SSD",
    power: 5,
    specs: "1TB, PCIe 3.0, budget NVMe storage",
    overview: "Lexar's NM620 1TB is a PCIe 3.0 NVMe SSD for mainstream storage upgrades. It is a budget-friendly option for OS, app, and everyday game storage.",
    oemUrl: "https://www.lexar.com/product/lexar-nm620-m-2-2280-nvme-ssd/",
    offers: [{ seller: "B&H", price: 169.99, was: 199.99, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1622320-REG/lexar_lnm620x001t_rnnnu_1tb_nm620_internal_ssd.html" }],
  },
  {
    category: "Storage",
    name: "WD Blue SN5100 1TB PCIe 4.0 NVMe M.2 SSD",
    power: 6,
    specs: "1TB, PCIe 4.0, mainstream WD NVMe",
    overview: "WD Blue SN5100 is a mainstream PCIe 4.0 NVMe SSD for everyday desktop and laptop upgrades. The 1TB version balances speed, efficiency, and capacity.",
    oemUrl: "https://www.westerndigital.com/products/internal-drives/wd-blue-sn5100-nvme-ssd",
    offers: [{ seller: "B&H", price: 189.99, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1917028-REG/wd_wds100t5b0e_00cpe0_1tb_blue_sn5100_nvme.html" }],
  },
  {
    category: "Storage",
    name: "Crucial P310 1TB Gen4 M.2 2230 NVMe SSD",
    power: 6,
    specs: "1TB, M.2 2230, compact PCIe 4.0 SSD",
    overview: "Crucial's P310 1TB 2230 SSD is a compact PCIe 4.0 NVMe drive for handhelds, small systems, and compact M.2 slots. It gives short-form-factor devices fast storage without a full 2280 module.",
    oemUrl: "https://www.crucial.com/ssd/p310/ct1000p310ssd2",
    offers: [{ seller: "B&H", price: 209.99, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1835938-REG/crucial_ct1000p310ssd2_p310_1tb_pcie_gen4.html" }],
  },
  {
    category: "Storage",
    name: "Samsung 4TB 990 PRO PCIe 4.0 NVMe M.2 SSD",
    power: 8,
    specs: "4TB, PCIe 4.0, large high-speed Samsung SSD",
    overview: "Samsung's 4TB 990 PRO expands the 990 PRO family to a large single-drive capacity for big game libraries, media projects, and scratch storage on PCIe 4.0 systems.",
    oemUrl: "https://www.samsung.com/us/computing/memory-storage/solid-state-drives/990-pro-pcie-4-0-nvme-ssd/",
    offers: [{ seller: "B&H", price: 949, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1787633-REG/samsung_mz_v9p4t0b_am_4tb_non_hs_990.html" }],
  },
  {
    category: "Storage",
    name: "Crucial BX500 2TB SATA III 2.5-Inch SSD",
    power: 4,
    specs: "2TB, SATA III, value 2.5-inch SSD",
    overview: "Crucial's BX500 2TB is a SATA III 2.5-inch SSD for budget storage upgrades and older systems. It is useful where an M.2 slot is unavailable or already occupied.",
    oemUrl: "https://www.crucial.com/ssd/bx500/ct2000bx500ssd1",
    offers: [{ seller: "B&H", price: 289.99, was: 399.99, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1512571-REG/crucial_ct2000bx500ssd1_2tb_bx500_sata_iii.html" }],
  },
  {
    category: "Storage",
    name: "Crucial P310 2TB PCIe 4.0 NVMe M.2 SSD with Heatsink",
    power: 7,
    specs: "2TB, PCIe 4.0, NVMe SSD with heatsink",
    overview: "Crucial's P310 2TB with heatsink is a PCIe 4.0 NVMe SSD for gaming and desktop builds that benefit from extra thermal mass. It offers a fast 2TB drive with a ready-mounted cooler.",
    oemUrl: "https://www.crucial.com/ssd/p310/ct2000p310ssd5",
    offers: [{ seller: "B&H", price: 299.99, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1868862-REG/crucial_ct2000p310ssd5_p310_2tb_pcie_gen4.html" }],
  },
  {
    category: "Storage",
    name: "Crucial P310 2TB PCIe 4.0 NVMe M.2 SSD",
    power: 7,
    specs: "2TB, PCIe 4.0, mainstream NVMe SSD",
    overview: "Crucial's P310 2TB PCIe 4.0 SSD is a mainstream NVMe drive for gaming and everyday desktop builds. It provides a practical 2TB capacity with modern PCIe 4.0 throughput.",
    oemUrl: "https://www.crucial.com/ssd/p310/ct2000p310ssd8",
    offers: [{ seller: "B&H", price: 309, status: "In stock", url: "https://www.bhphotovideo.com/c/product/1849925-REG/crucial_ct2000p310ssd8_2tb_p310_pcie_4_0.html" }],
  },
];

const moreRetailerVerifiedParts = [
  {
    category: "Case",
    name: "Corsair Frame 4000D Black Mid-Tower Case",
    power: 0,
    specs: "Mid-tower ATX case, modular Frame design, black",
    oemUrl: "https://www.corsair.com/us/en/p/pc-cases/cc-9011295-ww/frame-4000d-rs-argb-mid-tower-pc-case-black-cc-9011295-ww",
    seller: "Best Buy",
    price: 99.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/corsair-frame-4000d-black-mid-tower-case-black/6610911",
  },
  {
    category: "Case",
    name: "Corsair Frame 4000D RS ARGB Black Mid-Tower Case",
    power: 0,
    specs: "Mid-tower ATX case, RS ARGB fans, black",
    oemUrl: "https://www.corsair.com/us/en/p/pc-cases/cc-9011295-ww/frame-4000d-rs-argb-mid-tower-pc-case-black-cc-9011295-ww",
    seller: "Best Buy",
    price: 109.99,
    was: 119.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/corsair-frame-4000d-rs-argb-mid-tower-pc-case-black/6610912",
  },
  {
    category: "Case",
    name: "Corsair 3500X ARGB Black Mid-Tower Case",
    power: 0,
    specs: "Mid-tower ATX case, panoramic glass, ARGB fans",
    oemUrl: "https://www.corsair.com/us/en/p/pc-cases/cc-9011278-ww/3500x-argb-mid-tower-pc-case-black-cc-9011278-ww",
    seller: "Best Buy",
    price: 109.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/corsair-3500x-argb-mid-tower-pc-case-black/6587318",
  },
  {
    category: "Case",
    name: "Corsair Frame 5000D RS ARGB Black Mid-Tower Case",
    power: 0,
    specs: "Large mid-tower ATX case, RS ARGB cooling, black",
    oemUrl: "https://www.corsair.com/us/en/p/pc-cases/cc-9011303-ww/frame-5000d-rs-argb-mid-tower-pc-case-black-cc-9011303-ww",
    seller: "Best Buy",
    price: 174.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/corsair-frame-5000d-rs-argb-black-mid-tower-case-black/6610918",
  },
  {
    category: "Case",
    name: "Fractal Design Meshify 3 Black TG Dark ATX Case",
    power: 0,
    specs: "Airflow ATX case, tempered glass dark tint, black",
    oemUrl: "https://www.fractal-design.com/products/cases/meshify/meshify-3/",
    seller: "Best Buy",
    price: 159.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/fractal-design-meshify-3-black-tg-dark-atx-case-black/6627473",
  },
  {
    category: "Case",
    name: "Thermaltake View 270 Plus TG ARGB Black Mid-Tower Case",
    power: 0,
    specs: "Mid-tower ATX case, tempered glass, ARGB fans",
    oemUrl: "https://www.thermaltake.com/view-270-plus-tg-argb-mid-tower-chassis.html",
    seller: "Best Buy",
    price: 99.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/thermaltake-view-270-plus-tg-argb-mid-tower-case-black/6635649",
  },
  {
    category: "Case",
    name: "NZXT H3 Flow Black Micro-ATX Case",
    power: 0,
    specs: "Micro-ATX airflow case, compact black chassis",
    oemUrl: "https://nzxt.com/product/h3-flow",
    seller: "Best Buy",
    price: 89.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/nzxt-h3-flow-micro-atx-case-black/6629545",
  },
  {
    category: "Case",
    name: "Antec C8 ARGB Black Full-Tower Case",
    power: 0,
    specs: "Full-tower ATX case, ARGB lighting, black",
    oemUrl: "https://www.antec.com/product/case/c8-argb",
    seller: "Best Buy",
    price: 149.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/antec-c8-argb-full-tower-case-black/6600083",
  },
  {
    category: "Case",
    name: "Thermaltake Ceres 500 TG ARGB Hydrangea Blue Mid-Tower Case",
    power: 0,
    specs: "Mid-tower ATX case, mesh airflow, ARGB, blue",
    oemUrl: "https://www.thermaltake.com/ceres-500-tg-argb-mid-tower-chassis.html",
    seller: "Best Buy",
    price: 219.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/thermaltake-ceres-500-tg-argb-hydrangea-blue-mid-tower-case-blue/6600962",
  },
  {
    category: "Case",
    name: "Fractal Design North XL Charcoal Black EATX Mesh Mid-Tower Case",
    power: 0,
    specs: "EATX mid-tower case, wood front, mesh side, black",
    oemUrl: "https://www.fractal-design.com/products/cases/north/north-xl/charcoal-black/",
    seller: "Best Buy",
    price: 199.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/fractal-design-north-xl-charcoal-black-eatx-mesh-mid-tower-case-charcoal-black/6582847",
  },
  {
    category: "Case",
    name: "NZXT H6 Flow Black ATX Dual-Chamber Mid-Tower Case",
    power: 0,
    specs: "ATX dual-chamber airflow case, black",
    oemUrl: "https://nzxt.com/product/h6-flow",
    seller: "Best Buy",
    price: 109.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/nzxt-h6-flow-atx-mid-tower-pc-case-with-dual-chamber-black/6560915",
  },
  {
    category: "Case",
    name: "Corsair 4000D Airflow Black Mid-Tower Case",
    power: 0,
    specs: "Mid-tower ATX airflow case, black",
    oemUrl: "https://www.corsair.com/us/en/p/pc-cases/cc-9011200-ww/4000d-airflow-tempered-glass-mid-tower-atx-case-black-cc-9011200-ww",
    seller: "Best Buy",
    price: 94.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/corsair-4000d-airflow-atx-mid-tower-case-black/6424213",
  },
  {
    category: "Case",
    name: "Fractal Design North Chalk White EATX Mesh Mid-Tower Case",
    power: 0,
    specs: "EATX mid-tower case, wood front, mesh side, white",
    oemUrl: "https://www.fractal-design.com/products/cases/north/north/chalk-white/",
    seller: "Best Buy",
    price: 154.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/fractal-design-north-chalk-white-eatx-mesh-mid-tower-case-chalk-white/6522053",
  },
  {
    category: "Case",
    name: "Hyte Y70 Black Modern Aesthetic Dual-Chamber Mid-Tower Case",
    power: 0,
    specs: "Dual-chamber mid-tower showcase case, black",
    oemUrl: "https://hyte.com/store/y70/cs-hyte-y70-b",
    seller: "Best Buy",
    price: 229.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/hyte-y70-modern-aesthetic-dual-chamber-mid-tower-atx-computer-gaming-case-panoramic-glass-black/6562267",
  },
  {
    category: "PSU",
    name: "Corsair RM850e 850W 80+ Gold ATX 3.1 Fully Modular PSU",
    power: 0,
    specs: "850W, ATX 3.1, fully modular, Gold efficiency",
    oemUrl: "https://www.corsair.com/us/en/p/psu/cp-9020296-na/rme-series-rm850e-fully-modular-low-noise-atx-power-supply-cp-9020296-na",
    seller: "Best Buy",
    price: 129.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/corsair-rm850e-850w-80-plus-gold-fully-modular-low-noise-atx-3-1-pcie-5-1-power-supply-black/6584248",
  },
  {
    category: "PSU",
    name: "Corsair RM1000e 1000W 80+ Gold ATX 3.1 Fully Modular PSU",
    power: 0,
    specs: "1000W, ATX 3.1, fully modular, Gold efficiency",
    oemUrl: "https://www.corsair.com/us/en/p/psu/cp-9020298-na/rme-series-rm1000e-fully-modular-low-noise-atx-power-supply-cp-9020298-na",
    seller: "Best Buy",
    price: 179.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/corsair-rm1000e-1000w-80-plus-gold-fully-modular-low-noise-atx-3-1-pcie-5-1-power-supply-black/6584250",
  },
  {
    category: "PSU",
    name: "MSI MAG A850GL PCIE5 850W 80+ Gold Modular PSU",
    power: 0,
    specs: "850W, PCIe 5.0, modular, Gold efficiency",
    oemUrl: "https://www.msi.com/Power-Supply/MAG-A850GL-PCIE5",
    seller: "Best Buy",
    price: 109.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/msi-mag-a850gl-pcie-5-850w-80-plus-gold-modular-power-supply-black/6567936",
  },
  {
    category: "PSU",
    name: "Corsair RM850x 850W 80+ Gold ATX Fully Modular PSU",
    power: 0,
    specs: "850W, fully modular, Gold efficiency, black",
    oemUrl: "https://www.corsair.com/us/en/p/psu/cp-9020270-na/rmx-series-rm850x-fully-modular-power-supply-cp-9020270-na",
    seller: "Best Buy",
    price: 149.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/corsair-rm850x-850w-atx-80-plus-gold-fully-modular-power-supply-black/6459245",
  },
  {
    category: "PSU",
    name: "MSI MAG A850GL PCIE5 White 850W 80+ Gold Modular PSU",
    power: 0,
    specs: "850W, PCIe 5.0, modular, Gold efficiency, white",
    oemUrl: "https://www.msi.com/Power-Supply/MAG-A850GL-PCIE5-WHITE",
    seller: "Best Buy",
    price: 119.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/msi-mag-a850gl-pcie-5-white-850w-80-plus-gold-modular-power-supply-white/6572289",
  },
  {
    category: "PSU",
    name: "MSI MAG A1000GLS PCIE5 1000W 80+ Gold Modular PSU",
    power: 0,
    specs: "1000W, PCIe 5.0, modular, Gold efficiency",
    oemUrl: "https://www.msi.com/Power-Supply/MAG-A1000GLS-PCIE5",
    seller: "Best Buy",
    price: 159.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/msi-mag-a1000gls-pcie-5-1000w-80-plus-gold-modular-power-supply-black/6611097",
  },
  {
    category: "PSU",
    name: "Corsair HX1000i 1000W 80+ Platinum Fully Modular PSU",
    power: 0,
    specs: "1000W, fully modular, Platinum efficiency",
    oemUrl: "https://www.corsair.com/us/en/p/psu/cp-9020259-na/hxi-series-hx1000i-fully-modular-ultra-low-noise-platinum-atx-1000-watt-pc-power-supply-cp-9020259-na",
    seller: "Best Buy",
    price: 284.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/corsair-hx1000i-1000w-80-plus-platinum-fully-modular-ultra-low-noise-atx-power-supply-black/6510384",
  },
  {
    category: "PSU",
    name: "ASUS TUF Gaming 850W 80+ Gold Fully Modular PSU",
    power: 0,
    specs: "850W, fully modular, Gold efficiency",
    oemUrl: "https://www.asus.com/motherboards-components/power-supply-units/tuf-gaming/tuf-gaming-850g/",
    seller: "Best Buy",
    price: 129.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/asus-tuf-gaming-850w-80-plus-gold-fully-modular-power-supply-black/6626791",
  },
  {
    category: "PSU",
    name: "Thermaltake Toughpower GF3 850W 80+ Gold Modular PSU",
    power: 0,
    specs: "850W, ATX 3.0, modular, Gold efficiency",
    oemUrl: "https://www.thermaltake.com/toughpower-gf3-850w-gold-tt-premium-edition.html",
    seller: "Best Buy",
    price: 99.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/thermaltake-toughpower-gf3-850w-80-plus-gold-pcie-gen-5-atx-3-0-ready-fully-modular-power-supply-black/6528730",
  },
  {
    category: "PSU",
    name: "Corsair RM1000x 1000W 80+ Gold Fully Modular PSU",
    power: 0,
    specs: "1000W, fully modular, Gold efficiency",
    oemUrl: "https://www.corsair.com/us/en/p/psu/cp-9020271-na/rmx-series-rm1000x-fully-modular-power-supply-cp-9020271-na",
    seller: "Best Buy",
    price: 224.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/corsair-rm1000x-1000w-80-plus-gold-fully-modular-atx-power-supply-black/6459246",
  },
  {
    category: "Memory",
    name: "Corsair Vengeance RGB 64GB DDR5-6000 CL30 Black Kit",
    memory: "DDR5",
    power: 11,
    specs: "2x32GB, DDR5-6000, CL30, RGB, black",
    oemUrl: "https://www.corsair.com/us/en/p/memory/cmh64gx5m2b6000z30/vengeance-rgb-64gb-2x32gb-ddr5-dram-6000mt-s-cl30-memory-kit-black-cmh64gx5m2b6000z30",
    seller: "Best Buy",
    price: 219.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/corsair-vengeance-rgb-64gb-2x32gb-ddr5-6000mhz-c30-udimm-desktop-memory-black/6609236",
  },
  {
    category: "Memory",
    name: "Corsair Vengeance 64GB DDR5-6000 CL30 Black Kit",
    memory: "DDR5",
    power: 10,
    specs: "2x32GB, DDR5-6000, CL30, black",
    oemUrl: "https://www.corsair.com/us/en/p/memory/cmk64gx5m2b6000z30/vengeance-64gb-2x32gb-ddr5-dram-6000mt-s-cl30-memory-kit-black-cmk64gx5m2b6000z30",
    seller: "Best Buy",
    price: 204.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/corsair-vengeance-64gb-2x32gb-ddr5-6000mhz-c30-udimm-desktop-memory-black/6609232",
  },
  {
    category: "Memory",
    name: "Corsair Vengeance RGB 64GB DDR5-6000 CL30 White Kit",
    memory: "DDR5",
    power: 11,
    specs: "2x32GB, DDR5-6000, CL30, RGB, white",
    oemUrl: "https://www.corsair.com/us/en/p/memory/cmh64gx5m2b6000z30w/vengeance-rgb-64gb-2x32gb-ddr5-dram-6000mt-s-cl30-memory-kit-white-cmh64gx5m2b6000z30w",
    seller: "Best Buy",
    price: 224.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/corsair-vengeance-rgb-64gb-2x32gb-ddr5-6000mhz-c30-udimm-desktop-memory-white/6609237",
  },
  {
    category: "Memory",
    name: "Corsair Vengeance 64GB DDR5-6000 CL30 White Kit",
    memory: "DDR5",
    power: 10,
    specs: "2x32GB, DDR5-6000, CL30, white",
    oemUrl: "https://www.corsair.com/us/en/p/memory/cmk64gx5m2b6000z30w/vengeance-64gb-2x32gb-ddr5-dram-6000mt-s-cl30-memory-kit-white-cmk64gx5m2b6000z30w",
    seller: "Best Buy",
    price: 209.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/corsair-vengeance-64gb-2x32gb-ddr5-6000mhz-c30-udimm-desktop-memory-white/6609233",
  },
  {
    category: "Memory",
    name: "G.Skill Trident Z5 RGB 64GB DDR5-6400 CL32 Black Kit",
    memory: "DDR5",
    power: 11,
    specs: "2x32GB, DDR5-6400, CL32, RGB, black",
    oemUrl: "https://www.gskill.com/product/165/374/1688609229/F5-6400J3239G32GX2-TZ5RK",
    seller: "Best Buy",
    price: 262.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/g-skill-trident-z5-rgb-64gb-2x32gb-ddr5-6400mhz-c32-udimm-desktop-memory-black/6600765",
  },
  {
    category: "Memory",
    name: "Corsair Vengeance RGB 64GB DDR5-6400 CL32 Black Kit",
    memory: "DDR5",
    power: 11,
    specs: "2x32GB, DDR5-6400, CL32, RGB, black",
    oemUrl: "https://www.corsair.com/us/en/p/memory/cmh64gx5m2b6400c32/vengeance-rgb-64gb-2x32gb-ddr5-dram-6400mt-s-cl32-memory-kit-black-cmh64gx5m2b6400c32",
    seller: "Best Buy",
    price: 244.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/corsair-vengeance-rgb-64gb-2x32gb-ddr5-6400mhz-c32-udimm-desktop-memory-black/6609239",
  },
  {
    category: "Memory",
    name: "Corsair Vengeance RGB 64GB DDR5-6400 CL32 White Kit",
    memory: "DDR5",
    power: 11,
    specs: "2x32GB, DDR5-6400, CL32, RGB, white",
    oemUrl: "https://www.corsair.com/us/en/p/memory/cmh64gx5m2b6400c32w/vengeance-rgb-64gb-2x32gb-ddr5-dram-6400mt-s-cl32-memory-kit-white-cmh64gx5m2b6400c32w",
    seller: "Best Buy",
    price: 249.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/corsair-vengeance-rgb-64gb-2x32gb-ddr5-6400mhz-c32-udimm-desktop-memory-white/6609240",
  },
  {
    category: "Memory",
    name: "Crucial Pro 64GB DDR5-5600 Kit",
    memory: "DDR5",
    power: 9,
    specs: "2x32GB, DDR5-5600, low-profile kit",
    oemUrl: "https://www.crucial.com/memory/ddr5/cp2k32g56c46u5",
    seller: "Best Buy",
    price: 170.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/crucial-pro-64gb-kit-2x32gb-ddr5-5600mhz-c46-udimm-desktop-memory-black/6543928",
  },
  {
    category: "Memory",
    name: "Corsair Vengeance RGB 64GB DDR5-6600 CL32 Black Kit",
    memory: "DDR5",
    power: 11,
    specs: "2x32GB, DDR5-6600, CL32, RGB, black",
    oemUrl: "https://www.corsair.com/us/en/p/memory/cmh64gx5m2b6600c32/vengeance-rgb-64gb-2x32gb-ddr5-dram-6600mt-s-cl32-memory-kit-black-cmh64gx5m2b6600c32",
    seller: "Best Buy",
    price: 269.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/corsair-vengeance-rgb-64gb-2x32gb-ddr5-6600mhz-c32-udimm-desktop-memory-black/6609241",
  },
  {
    category: "Memory",
    name: "Corsair Vengeance RGB 64GB DDR5-6600 CL32 White Kit",
    memory: "DDR5",
    power: 11,
    specs: "2x32GB, DDR5-6600, CL32, RGB, white",
    oemUrl: "https://www.corsair.com/us/en/p/memory/cmh64gx5m2b6600c32w/vengeance-rgb-64gb-2x32gb-ddr5-dram-6600mt-s-cl32-memory-kit-white-cmh64gx5m2b6600c32w",
    seller: "Best Buy",
    price: 269.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/corsair-vengeance-rgb-64gb-2x32gb-ddr5-6600mhz-c32-udimm-desktop-memory-white/6609242",
  },
  {
    category: "GPU",
    name: "ASUS Prime GeForce RTX 5060 8GB GDDR7 OC Graphics Card",
    power: 145,
    specs: "8GB GDDR7, triple-fan ASUS Prime RTX 5060",
    oemUrl: "https://www.asus.com/motherboards-components/graphics-cards/prime/prime-rtx5060-o8g/",
    seller: "B&H",
    price: 299.99,
    status: "In stock",
    url: "https://www.bhphotovideo.com/c/product/1889808-REG/asus_prime_rtx5060_o8g_prime_geforce_rtx_5060.html",
  },
  {
    category: "GPU",
    name: "ASUS Dual GeForce RTX 5060 8GB GDDR7 OC Graphics Card",
    power: 145,
    specs: "8GB GDDR7, compact dual-fan ASUS RTX 5060",
    oemUrl: "https://www.asus.com/motherboards-components/graphics-cards/dual/dual-rtx5060-o8g/",
    seller: "B&H",
    price: 329.99,
    status: "In stock",
    url: "https://www.bhphotovideo.com/c/product/1889799-REG/asus_dual_rtx5060_o8g_dual_geforce_rtx_5060.html",
  },
  {
    category: "GPU",
    name: "ASUS Dual GeForce RTX 5060 8GB GDDR7 Graphics Card",
    power: 145,
    specs: "8GB GDDR7, dual-fan ASUS RTX 5060",
    oemUrl: "https://www.asus.com/motherboards-components/graphics-cards/dual/dual-rtx5060-8g/",
    seller: "B&H",
    price: 299.99,
    status: "In stock",
    url: "https://www.bhphotovideo.com/c/product/1889798-REG/asus_dual_rtx5060_8g_dual_geforce_rtx_5060.html",
  },
  {
    category: "GPU",
    name: "Gigabyte GeForce RTX 5060 WINDFORCE OC 8G Graphics Card",
    power: 145,
    specs: "8GB GDDR7, WINDFORCE cooler, factory OC",
    oemUrl: "https://www.gigabyte.com/Graphics-Card/GV-N5060WF2OC-8GD",
    seller: "B&H",
    price: 319.99,
    status: "In stock",
    url: "https://www.bhphotovideo.com/c/product/1889751-REG/gigabyte_gv_n5060wf2oc_8gd_geforce_rtx_5060_windforce.html",
  },
  {
    category: "GPU",
    name: "MSI GeForce RTX 5060 8G Ventus 2X OC Graphics Card",
    power: 145,
    specs: "8GB GDDR7, dual-fan MSI Ventus OC",
    oemUrl: "https://www.msi.com/Graphics-Card/GeForce-RTX-5060-8G-VENTUS-2X-OC",
    seller: "B&H",
    price: 329.99,
    status: "In stock",
    url: "https://www.bhphotovideo.com/c/product/1888445-REG/msi_g5060_8v2c_geforce_rtx_5060_8g.html",
  },
  {
    category: "GPU",
    name: "Gigabyte GeForce RTX 5060 Eagle OC 8G Graphics Card",
    power: 145,
    specs: "8GB GDDR7, Eagle cooler, factory OC",
    oemUrl: "https://www.gigabyte.com/Graphics-Card/GV-N5060EAGLE-OC-8GD",
    seller: "B&H",
    price: 329.99,
    status: "In stock",
    url: "https://www.bhphotovideo.com/c/product/1889748-REG/gigabyte_gv_n5060eagle_oc_8gd_geforce_rtx_5060_eagle.html",
  },
  {
    category: "GPU",
    name: "MSI GeForce RTX 5060 8G Gaming OC Graphics Card",
    power: 145,
    specs: "8GB GDDR7, MSI Gaming cooler, factory OC",
    oemUrl: "https://www.msi.com/Graphics-Card/GeForce-RTX-5060-8G-GAMING-OC",
    seller: "B&H",
    price: 349.99,
    status: "In stock",
    url: "https://www.bhphotovideo.com/c/product/1888442-REG/msi_g5060_8gc_geforce_rtx_5060_8g.html",
  },
  {
    category: "GPU",
    name: "ASUS TUF Gaming GeForce RTX 5060 8GB GDDR7 OC Graphics Card",
    power: 145,
    specs: "8GB GDDR7, TUF triple-fan RTX 5060 OC",
    oemUrl: "https://www.asus.com/motherboards-components/graphics-cards/tuf-gaming/tuf-rtx5060-o8g-gaming/",
    seller: "B&H",
    price: 379.99,
    status: "In stock",
    url: "https://www.bhphotovideo.com/c/product/1889806-REG/asus_tuf_rtx5060_o8g_gaming_tuf_gaming_geforce_rtx.html",
  },
  {
    category: "GPU",
    name: "ASUS Prime GeForce RTX 5060 Ti 8GB GDDR7 OC Graphics Card",
    power: 180,
    specs: "8GB GDDR7, ASUS Prime RTX 5060 Ti OC",
    oemUrl: "https://www.asus.com/motherboards-components/graphics-cards/prime/prime-rtx5060ti-o8g/",
    seller: "B&H",
    price: 399.99,
    status: "In stock",
    url: "https://www.bhphotovideo.com/c/product/1883937-REG/asus_prime_rtx5060ti_o8g_prime_geforce_rtx_5060.html",
  },
  {
    category: "GPU",
    name: "MSI GeForce RTX 5060 Ti 16G Ventus 2X OC Plus Graphics Card",
    power: 180,
    specs: "16GB GDDR7, dual-fan MSI RTX 5060 Ti OC",
    oemUrl: "https://www.msi.com/Graphics-Card/GeForce-RTX-5060-Ti-16G-VENTUS-2X-OC-PLUS",
    seller: "B&H",
    price: 479.99,
    status: "In stock",
    url: "https://www.bhphotovideo.com/c/product/1881038-REG/msi_g506t_16v2c_geforce_rtx_5060_ti.html",
  },
  {
    category: "GPU",
    name: "Gigabyte GeForce RTX 5060 Ti Gaming OC 16G Graphics Card",
    power: 180,
    specs: "16GB GDDR7, Gaming OC cooler, RTX 5060 Ti",
    oemUrl: "https://www.gigabyte.com/Graphics-Card/GV-N506TGAMING-OC-16GD",
    seller: "B&H",
    price: 579.99,
    status: "Temporarily out of stock",
    url: "https://www.bhphotovideo.com/c/product/1880652-REG/gigabyte_gv_n506tgaming_oc_16gd_geforce_rtx_5060_ti.html",
  },
  {
    category: "GPU",
    name: "PNY GeForce RTX 5060 Ti 16GB OC Dual Fan Graphics Card",
    power: 180,
    specs: "16GB GDDR7, dual-fan PNY RTX 5060 Ti OC",
    oemUrl: "https://www.pny.com/pny-geforce-rtx-5060-ti-16gb-oc-dual-fan",
    seller: "B&H",
    price: 519.99,
    status: "In stock",
    url: "https://www.bhphotovideo.com/c/product/1880766-REG/pny_graphics_card_geforce_rtx_5060.html",
  },
].map(({ seller, price, was, status, url, ...part }) => ({
  ...part,
  overview:
    part.overview ||
    `${part.name} is a ${part.specs.toLowerCase()} entry in the EZPC catalog. Its listed price is taken from the direct ${seller} product page linked here.`,
  offers: [{ seller, price, ...(Number.isFinite(was) ? { was } : {}), status, url }],
}));

const continuingExpansionParts = [
  {
    category: "Case",
    name: "Thermaltake View 380 TG ARGB Black Mid-Tower Case",
    power: 0,
    specs: "Mid-tower ATX case, tempered glass, ARGB fans, black",
    oemUrl: "https://www.thermaltake.com/view-380-tg-argb-mid-tower-chassis.html",
    seller: "Best Buy",
    price: 69.99,
    was: 79.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/thermaltake-view-380-tg-argb-mid-tower-atx-pc-case-black/J39ZPC6C97/sku/6603504",
  },
  {
    category: "Case",
    name: "Thermaltake View 380 XL TG ARGB Black Dual-Chamber Case",
    power: 0,
    specs: "Mid-tower ATX dual-chamber case, hidden-connector support, black",
    oemUrl: "https://www.thermaltake.com/view-380-xl-tg-argb-mid-tower-chassis.html",
    seller: "Best Buy",
    price: 109.99,
    was: 119.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/site/thermaltake-view-380-xl-tg-argb-dual-chamber-chassis-with-hidden-connector-motherboard-support-atx-mid-tower-pc-case-black/6626451.p",
  },
  {
    category: "Case",
    name: "Thermaltake View 380 XL TG ARGB Snow Dual-Chamber Case",
    power: 0,
    specs: "Mid-tower ATX dual-chamber case, hidden-connector support, white",
    oemUrl: "https://www.thermaltake.com/view-380-xl-tg-argb-mid-tower-chassis.html",
    seller: "Best Buy",
    price: 79.99,
    was: 119.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/thermaltake-view-380-xl-tg-argb-dual-chamber-chassis-with-hidden-connector-motherboard-support-atx-mid-tower-pc-case-snow/J39ZPC6Y9F",
  },
  {
    category: "Case",
    name: "Corsair 3500X RS-R ARGB Black ATX Mid-Tower Case",
    power: 0,
    specs: "Mid-tower ATX case, reverse-rotor ARGB fans, black",
    oemUrl: "https://www.corsair.com/us/en/p/pc-cases/cc-9011322-ww/3500x-rs-r-argb-mid-tower-pc-case-black-cc-9011322-ww",
    seller: "Best Buy",
    price: 79.99,
    was: 119.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/corsair-3500x-rs-r-argb-atx-mid-tower-pc-case-black/J39TSCSJL4",
  },
  {
    category: "Case",
    name: "Corsair Frame 4500X RS-R ARGB White Panoramic Mid-Tower Case",
    power: 0,
    specs: "Panoramic mid-tower case, wraparound glass, white",
    oemUrl: "https://www.corsair.com/us/en/p/pc-cases/cc-9011315-ww/frame-4500x-rs-r-argb-mid-tower-pc-case-white-cc-9011315-ww",
    seller: "Best Buy",
    price: 119.99,
    was: 189.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/corsair-frame-4500x-rs-r-argb-panoramic-glass-mid-tower-pc-case-white/J39TSCPKS9",
  },
  {
    category: "Case",
    name: "HYTE Y40 Snow White ATX Mid-Tower Case",
    power: 0,
    specs: "ATX mid-tower showcase case, panoramic glass, snow white",
    oemUrl: "https://hyte.com/store/y40/cs-hyte-y40-ww",
    seller: "Best Buy",
    price: 159.49,
    status: "Best Buy marketplace product page",
    url: "https://www.bestbuy.com/product/hyte-y40-atx-mid-tower-pc-case-snow-white/J3R75JL54P/sku/10115861",
  },
  {
    category: "Case",
    name: "NZXT H5 Flow 2024 White Compact ATX Mid-Tower Case",
    power: 0,
    specs: "Compact ATX airflow case, tempered glass, white",
    oemUrl: "https://nzxt.com/product/h5-flow",
    seller: "Best Buy",
    price: 89.99,
    was: 119.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/site/nzxt-h5-flow-2024-compact-atx-mid-tower-airflow-case-white/6590129.p",
  },
  {
    category: "Case",
    name: "NZXT H6 Flow White ATX Dual-Chamber Mid-Tower Case",
    power: 0,
    specs: "ATX dual-chamber airflow case, panoramic glass, white",
    oemUrl: "https://nzxt.com/product/h6-flow",
    seller: "Best Buy",
    price: 79.99,
    was: 109.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/nzxt-h6-flow-rgb-atx-mid-tower-pc-case-with-dual-chamber-white/J3GWJHQ7HX",
  },
  {
    category: "Case",
    name: "Fractal Design Focus G Black Acrylic Window Mid-Tower Case",
    power: 0,
    specs: "ATX mid-tower case, acrylic window, black",
    oemUrl: "https://www.fractal-design.com/products/cases/focus/focus-g/black/",
    seller: "Best Buy",
    price: 59.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/fractal-design-focus-g-atx-microatx-mini-itx-black-chassis-with-acrylic-window-mid-tower-pc-case-black/J3L5HQRF4L",
  },
  {
    category: "PSU",
    name: "ASUS TUF Gaming 1000W Gold ATX 3.0 Modular PSU",
    power: 0,
    specs: "1000W, ATX 3.0, modular, Gold efficiency",
    oemUrl: "https://www.asus.com/motherboards-components/power-supply-units/tuf-gaming/tuf-gaming-1000g/",
    seller: "Best Buy marketplace",
    price: 230.53,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/asus-tuf-gaming-1000w-gold-atx-3-0-80-gold-modular-psu/JJG7VTTLYP/sku/11519290",
  },
  {
    category: "PSU",
    name: "Thermaltake Toughpower GF3 850W 80+ Gold ATX 3.0 Modular PSU",
    power: 0,
    specs: "850W, ATX 3.0, PCIe 5, fully modular, Gold efficiency",
    oemUrl: "https://www.thermaltake.com/toughpower-gf3-850w-gold-tt-premium-edition.html",
    seller: "Best Buy marketplace",
    price: 132.99,
    was: 159.88,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/site/thermaltake-toughpower-gf3-850w-80-plus-gold-pcie-gen-5-atx-3-0-ready-fully-modular-power-supply-black/6535777.p",
  },
  {
    category: "PSU",
    name: "Corsair RMx Series RM1000x Cybenetics Gold Fully Modular PSU",
    power: 0,
    specs: "1000W, ATX, fully modular, Cybenetics Gold efficiency",
    oemUrl: "https://www.corsair.com/us/en/p/psu/cp-9020271-na/rmx-series-rm1000x-fully-modular-power-supply-cp-9020271-na",
    seller: "Best Buy",
    price: 179.99,
    was: 209.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/site/corsair-rmx-series-rm1000x-cybenetics-gold-fully-modular-atx-power-supply-black/6587607.p",
  },
  {
    category: "PSU",
    name: "Corsair CX-M Series CX750M 750W Semi-Modular ATX PSU",
    power: 0,
    specs: "750W, semi-modular, ATX power supply, black",
    oemUrl: "https://www.corsair.com/us/en/p/psu/cp-9020311-na/cx-m-series-cx750m-atx-3-1-cybenetics-bronze-semi-modular-psu-cp-9020311-na",
    seller: "Best Buy",
    price: 64.99,
    was: 86.49,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/site/corsair-cx-m-series-cx750m-semi-modular-low-noise-atx-power-supply-black/6459241.p",
  },
  {
    category: "Memory",
    name: "Corsair Vengeance 32GB DDR5-6400 CL32 Gray Kit",
    memory: "DDR5",
    power: 8,
    specs: "2x16GB, DDR5-6400, CL32, AMD EXPO and Intel XMP, gray",
    oemUrl: "https://www.corsair.com/us/en/p/memory/cmk32gx5m2b6400z32/vengeance-32gb-2x16gb-ddr5-dram-6400mt-s-cl32-memory-kit-gray-cmk32gx5m2b6400z32",
    seller: "Best Buy",
    price: 449.99,
    was: 596.99,
    status: "Best Buy product page",
    url: "https://www.bestbuy.com/product/corsair-vengeance-32gb-2x16gb-ddr5-6400mhz-c32-amd-expo-intel-xmp-udimm-desktop-memory-gray/J39TSCHPQK",
  },
  {
    category: "GPU",
    name: "ASUS GeForce RTX 5060 Ti Dual OC 16GB Graphics Card",
    power: 180,
    specs: "16GB GDDR7, dual-fan ASUS RTX 5060 Ti OC",
    oemUrl: "https://www.asus.com/motherboards-components/graphics-cards/dual/dual-rtx5060ti-o16g/",
    seller: "B&H",
    price: 579.99,
    status: "B&H product page",
    url: "https://www.bhphotovideo.com/c/product/1952297-REG/asus_dual_rtx5060ti_o16g_dual_geforce_rtx_5060.html/specs",
  },
  {
    category: "GPU",
    name: "MSI GeForce RTX 5060 Ti 16GB Ventus 2X Plus Graphics Card",
    power: 180,
    specs: "16GB GDDR7, MSI Ventus dual-fan RTX 5060 Ti",
    oemUrl: "https://www.msi.com/Graphics-Card/GeForce-RTX-5060-Ti-16G-VENTUS-2X-PLUS",
    seller: "B&H",
    price: 474.99,
    status: "B&H product page",
    url: "https://www.bhphotovideo.com/c/product/1895466-REG/msi_geforce_rtx_5060_ti.html/ask-question",
  },
].map(({ seller, price, was, status, url, ...part }) => ({
  ...part,
  overview:
    part.overview ||
    `${part.name} is a ${part.specs.toLowerCase()} entry in the EZPC catalog. Its listed price is taken from the direct ${seller} product page linked here.`,
  offers: [{ seller, price, ...(Number.isFinite(was) ? { was } : {}), status, url }],
}));

const bhExpansionParts = [
  {
    category: "Case",
    name: "ASUS ProArt PA602 Wood Edition Modern Black Mid-Tower Case",
    power: 0,
    specs: "E-ATX/ATX creator mid-tower case, walnut wood accents, tempered glass",
    oemUrl: "https://www.asus.com/motherboards-components/cases/proart/proart-pa602/",
    seller: "B&H",
    price: 299.99,
    status: "B&H product page",
    url: "https://www.bhphotovideo.com/c/product/1948548-REG/asus_proart_pa602_walnut_wood_tg_pwm_modern_b_proart_pa602_wood_edition.html",
  },
  {
    category: "Case",
    name: "ASUS ProArt PA401 Wood Edition Beige Mesh Mid-Tower Case",
    power: 0,
    specs: "ATX mid-tower case, wood front, mesh airflow panel, beige",
    oemUrl: "https://www.asus.com/motherboards-components/cases/proart/proart-pa401/",
    seller: "B&H",
    price: 119.99,
    status: "B&H product page",
    url: "https://www.bhphotovideo.com/c/product/1934277-REG/asus_proart_pa401_wood_mesh_pwm_beige_proart_pa401_wood_edition.html",
  },
  {
    category: "Case",
    name: "ASUS A31 Black ATX Mid-Tower Case",
    power: 0,
    specs: "ATX mid-tower case, tempered glass, black",
    oemUrl: "https://www.asus.com/motherboards-components/cases/asus/asus-a31/",
    seller: "B&H",
    price: 79.99,
    status: "B&H product page",
    url: "https://www.bhphotovideo.com/c/product/1911060-REG/asus_a31_tg_black_asus_a31_atx_mid_tower.html",
  },
  {
    category: "Case",
    name: "ASUS ProArt PA401 Wood Edition Beige Tempered Glass Mid-Tower Case",
    power: 0,
    specs: "ATX mid-tower case, wood trim, tempered glass side panel, beige",
    oemUrl: "https://www.asus.com/motherboards-components/cases/proart/proart-pa401/",
    seller: "B&H",
    price: 129.99,
    status: "B&H product page",
    url: "https://www.bhphotovideo.com/c/product/1962187-REG/asus_proart_pa401_wood_tg_pwm_beige_proart_pa401_wood_edition.html",
  },
  {
    category: "Case",
    name: "ASUS ProArt PA401 Wood Edition Black Tempered Glass Mid-Tower Case",
    power: 0,
    specs: "ATX mid-tower case, wood trim, tempered glass side panel, black",
    oemUrl: "https://www.asus.com/motherboards-components/cases/proart/proart-pa401/",
    seller: "B&H",
    price: 119.99,
    status: "B&H product page",
    url: "https://www.bhphotovideo.com/c/product/1938954-REG/asus_pa401_bk_wood_tg_proart_pa401_wood_edition.html",
  },
  {
    category: "Case",
    name: "ASUS TUF Gaming GT301 Black ARGB Mid-Tower Case",
    power: 0,
    specs: "ATX mid-tower case, ARGB fans, windowed side panel, black",
    oemUrl: "https://www.asus.com/motherboards-components/cases/tuf-gaming/tuf-gaming-gt301/",
    seller: "B&H",
    price: 109.99,
    status: "B&H product page",
    url: "https://www.bhphotovideo.com/c/product/1569823-REG/asus_gt301_blk_argb_fan_tuf_gaming_gt301_computer.html",
  },
  {
    category: "Case",
    name: "ASUS TUF Gaming GT302 ARGB White Mid-Tower Case",
    power: 0,
    specs: "E-ATX/ATX mid-tower case, ARGB fans, white",
    oemUrl: "https://www.asus.com/motherboards-components/cases/tuf-gaming/tuf-gaming-gt302-argb/",
    seller: "B&H",
    price: 164.99,
    status: "B&H product page",
    url: "https://www.bhphotovideo.com/c/product/1825320-REG/asus_gt302_argb_fans_wht_tuf_gaming_gt302_argb.html",
  },
  {
    category: "Case",
    name: "ASUS TUF Gaming GT302 ARGB Black Mid-Tower Case",
    power: 0,
    specs: "E-ATX/ATX mid-tower case, ARGB fans, black",
    oemUrl: "https://www.asus.com/motherboards-components/cases/tuf-gaming/tuf-gaming-gt302-argb/",
    seller: "B&H",
    price: 164.99,
    status: "B&H product page",
    url: "https://www.bhphotovideo.com/c/product/1825319-REG/asus_gt302_argb_fans_blk_tuf_gaming_gt302_argb.html",
  },
  {
    category: "PSU",
    name: "SeaSonic FOCUS GX ATX 3.1 1000W Gold White Modular PSU",
    power: 0,
    specs: "1000W, ATX 3.1, PCIe 5.1, fully modular, white",
    oemUrl: "https://seasonic.com/focus-gx-atx-3/",
    seller: "B&H",
    price: 129.99,
    status: "B&H product page",
    url: "https://www.bhphotovideo.com/c/product/1914430-REG/seasonic_electronics_focus_gx_1000_white_atx3_focus_gx_atx_3_1.html",
  },
  {
    category: "PSU",
    name: "ASUS ROG Strix 1200W Platinum Modular PSU",
    power: 0,
    specs: "1200W, 80 PLUS Platinum, ATX 3.1, modular",
    oemUrl: "https://rog.asus.com/power-supply-units/rog-strix/rog-strix-1200p-gaming/",
    seller: "B&H",
    price: 264.99,
    status: "B&H product page",
    url: "https://www.bhphotovideo.com/c/product/1893946-REG/asus_rog_strix_1200p_gaming_rog_strix_1200w_platinum.html",
  },
  {
    category: "PSU",
    name: "Corsair SF750 750W Platinum Fully Modular SFX PSU",
    power: 0,
    specs: "750W, SFX, 80 PLUS Platinum, fully modular",
    oemUrl: "https://www.corsair.com/us/en/p/psu/cp-9020284-na/sf-series-sf750-fully-modular-80-plus-platinum-sfx-power-supply-cp-9020284-na",
    seller: "B&H",
    price: 159.99,
    status: "B&H product page",
    url: "https://www.bhphotovideo.com/c/product/1829165-REG/corsair_cp_9020284_na_sf750_2024_platinum.html",
  },
  {
    category: "PSU",
    name: "Corsair SF1000 1000W Platinum Fully Modular SFX PSU",
    power: 0,
    specs: "1000W, SFX, 80 PLUS Platinum, fully modular",
    oemUrl: "https://www.corsair.com/us/en/p/psu/cp-9020257-na/sf-series-sf1000-fully-modular-80-plus-platinum-sfx-power-supply-cp-9020257-na",
    seller: "B&H",
    price: 239.99,
    status: "B&H product page",
    url: "https://www.bhphotovideo.com/c/product/1829164-REG/corsair_cp_9020257_na_sf1000_platinum.html",
  },
  {
    category: "PSU",
    name: "Corsair RM750e Cybenetics Gold 750W Modular PSU",
    power: 0,
    specs: "750W, ATX 3.1, PCIe 5.1, Cybenetics Gold, modular",
    oemUrl: "https://www.corsair.com/us/en/p/psu/cp-9020295-na/rme-series-rm750e-fully-modular-low-noise-atx-power-supply-cp-9020295-na",
    seller: "B&H",
    price: 89.99,
    was: 114.99,
    status: "B&H product page",
    url: "https://www.bhphotovideo.com/c/product/1876188-REG/corsair_cp_9020295_na_rme_series_rm750e_750w.html",
  },
  {
    category: "PSU",
    name: "be quiet! Power Zone 2 1000W Platinum Fully Modular ATX PSU",
    power: 0,
    specs: "1000W, ATX 3.1, 80 PLUS Platinum, fully modular",
    oemUrl: "https://www.bequiet.com/en/powersupply/5369",
    seller: "B&H",
    price: 159.5,
    status: "B&H product page",
    url: "https://www.bhphotovideo.com/c/product/1938158-REG/be_quiet_bp008us_power_zone_2_1000w.html",
  },
  {
    category: "GPU",
    name: "PNY NVIDIA GeForce RTX 5060 8GB OC Dual Fan Graphics Card",
    power: 145,
    specs: "8GB GDDR7, dual-fan PNY RTX 5060 OC",
    oemUrl: "https://www.pny.com/geforce-rtx-5060-8gb-oc-dual-fan",
    seller: "B&H",
    price: 339.99,
    was: 359.99,
    status: "B&H product page",
    url: "https://www.bhphotovideo.com/c/product/1892221-REG/pny_vcg50608dfxpb1_o_nvidia_geforce_rtx_5060.html",
  },
  {
    category: "GPU",
    name: "MSI GeForce RTX 5060 Shadow 2X OC 8GB Graphics Card",
    power: 145,
    specs: "8GB GDDR7, dual-fan MSI Shadow RTX 5060 OC",
    oemUrl: "https://www.msi.com/Graphics-Card/GeForce-RTX-5060-8G-SHADOW-2X-OC",
    seller: "B&H",
    price: 359.95,
    status: "B&H product page",
    url: "https://www.bhphotovideo.com/c/product/1895544-REG/msi_g5060_8s2c_rtx_5060_shadow_2x.html",
  },
  {
    category: "GPU",
    name: "ASUS Dual GeForce RTX 5060 White OC 8GB Graphics Card",
    power: 145,
    specs: "8GB GDDR7, ASUS Dual white RTX 5060 OC",
    oemUrl: "https://www.asus.com/motherboards-components/graphics-cards/dual/dual-rtx5060-o8g-white/",
    seller: "B&H",
    price: 369.99,
    status: "B&H product page",
    url: "https://www.bhphotovideo.com/c/product/1952296-REG/asus_dual_rtx5060_o8g_white_dual_geforce_rtx_5060.html",
  },
  {
    category: "GPU",
    name: "Gigabyte GeForce RTX 5060 AERO OC 8GB Graphics Card",
    power: 145,
    specs: "8GB GDDR7, white Gigabyte AERO RTX 5060 OC",
    oemUrl: "https://www.gigabyte.com/Graphics-Card/GV-N5060AERO-OC-8GD",
    seller: "B&H",
    price: 359.95,
    status: "B&H product page",
    url: "https://www.bhphotovideo.com/c/product/1895209-REG/gigabyte_gv_n5060aero_oc_8gd_geforce_rtx_5060_aero.html",
  },
  {
    category: "GPU",
    name: "MSI GeForce RTX 5060 Ventus 3X OC 8GB Graphics Card",
    power: 145,
    specs: "8GB GDDR7, triple-fan MSI Ventus RTX 5060 OC",
    oemUrl: "https://www.msi.com/Graphics-Card/GeForce-RTX-5060-8G-VENTUS-3X-OC",
    seller: "B&H",
    price: 364.99,
    was: 379.99,
    status: "B&H product page",
    url: "https://www.bhphotovideo.com/c/product/1895547-REG/msi_g5060_8v3c_geforce_rtx_5060_ventus.html",
  },
  {
    category: "GPU",
    name: "MSI GeForce RTX 5060 Ventus 2X OC White 8GB Graphics Card",
    power: 145,
    specs: "8GB GDDR7, white dual-fan MSI Ventus RTX 5060 OC",
    oemUrl: "https://www.msi.com/Graphics-Card/GeForce-RTX-5060-8G-VENTUS-2X-OC-WHITE",
    seller: "B&H",
    price: 369.95,
    status: "B&H product page",
    url: "https://www.bhphotovideo.com/c/product/1895546-REG/msi_g5060_8v2cw_geforce_rtx_5060_ventus.html",
  },
  {
    category: "GPU",
    name: "PNY NVIDIA GeForce RTX 5060 8GB ARGB EPIC-X RGB OC Graphics Card",
    power: 145,
    specs: "8GB GDDR7, triple-fan PNY EPIC-X RGB RTX 5060 OC",
    oemUrl: "https://www.pny.com/geforce-rtx-5060-8gb-argb-epic-x-rgb-oc-triple-fan",
    seller: "B&H",
    price: 379.99,
    status: "B&H product page",
    url: "https://www.bhphotovideo.com/c/product/1897372-REG/pny_vcg50608tfxxpb1_o_geforce_rtx_5060_8gb.html",
  },
  {
    category: "GPU",
    name: "Gigabyte GeForce RTX 5060 Ti WINDFORCE OC 8GB Graphics Card",
    power: 180,
    specs: "8GB GDDR7, dual-fan Gigabyte RTX 5060 Ti Windforce OC",
    oemUrl: "https://www.gigabyte.com/Graphics-Card/GV-N506TWF2OC-8GD",
    seller: "B&H",
    price: 394.99,
    was: 419.99,
    status: "B&H product page",
    url: "https://www.bhphotovideo.com/c/product/1895219-REG/gigabyte_gv_n506twf2oc_8gd_geforce_rtx_5060_ti.html",
  },
  {
    category: "GPU",
    name: "ASUS Prime GeForce RTX 5060 Ti 16GB Graphics Card",
    power: 180,
    specs: "16GB GDDR7, ASUS Prime RTX 5060 Ti",
    oemUrl: "https://www.asus.com/motherboards-components/graphics-cards/prime/prime-rtx5060ti-16g/",
    seller: "B&H",
    price: 589.99,
    status: "B&H product page",
    url: "https://www.bhphotovideo.com/c/product/1897378-REG/asus_prime_rtx5060ti_16g_geforce_rtx_5060_ti.html",
  },
  {
    category: "GPU",
    name: "PNY NVIDIA GeForce RTX 5060 Ti 8GB OC Dual Fan Graphics Card",
    power: 180,
    specs: "8GB GDDR7, dual-fan PNY RTX 5060 Ti OC",
    oemUrl: "https://www.pny.com/geforce-rtx-5060-ti-8gb-oc-dual-fan",
    seller: "B&H",
    price: 369.99,
    was: 429.99,
    status: "B&H product page",
    url: "https://www.bhphotovideo.com/c/product/1892220-REG/pny_vcg5060t8dfxpb1_o_nvidia_geforce_rtx_5060.html",
  },
  {
    category: "GPU",
    name: "MSI GeForce RTX 5060 Ti Shadow 2X OC 8GB Graphics Card",
    power: 180,
    specs: "8GB GDDR7, dual-fan MSI Shadow RTX 5060 Ti OC",
    oemUrl: "https://www.msi.com/Graphics-Card/GeForce-RTX-5060-Ti-8G-SHADOW-2X-OC-PLUS",
    seller: "B&H",
    price: 409.95,
    status: "B&H product page",
    url: "https://www.bhphotovideo.com/c/product/1895469-REG/msi_rtx_5060_ti_8g.html",
  },
  {
    category: "GPU",
    name: "MSI GeForce RTX 5060 Ti Ventus 2X OC Plus 8GB Graphics Card",
    power: 180,
    specs: "8GB GDDR7, dual-fan MSI Ventus RTX 5060 Ti OC Plus",
    oemUrl: "https://www.msi.com/Graphics-Card/GeForce-RTX-5060-Ti-8G-VENTUS-2X-OC-PLUS",
    seller: "B&H",
    price: 419.95,
    status: "B&H product page",
    url: "https://www.bhphotovideo.com/c/product/1895470-REG/msi_g506t_8v2cp_geforce_rtx_5060.html",
  },
  {
    category: "GPU",
    name: "Gigabyte GeForce RTX 5060 Ti Eagle OC 8GB Graphics Card",
    power: 180,
    specs: "8GB GDDR7, Gigabyte Eagle RTX 5060 Ti OC",
    oemUrl: "https://www.gigabyte.com/Graphics-Card/GV-N506TEAGLE-OC-8GD",
    seller: "B&H",
    price: 429.95,
    status: "B&H product page",
    url: "https://www.bhphotovideo.com/c/product/1895220-REG/gigabyte_gv_n506teagle_oc_8gd_geforce_rtx_5060_ti.html",
  },
  {
    category: "GPU",
    name: "Gigabyte GeForce RTX 5060 Ti Gaming OC 8GB Graphics Card",
    power: 180,
    specs: "8GB GDDR7, triple-fan Gigabyte Gaming RTX 5060 Ti OC",
    oemUrl: "https://www.gigabyte.com/Graphics-Card/GV-N506TGAMING-OC-8GD",
    seller: "B&H",
    price: 439.95,
    status: "B&H product page",
    url: "https://www.bhphotovideo.com/c/product/1895221-REG/gigabyte_gv_n506tgaming_oc_8gd_geforce_rtx_5060_ti.html",
  },
  {
    category: "GPU",
    name: "MSI GeForce RTX 5060 Ti Gaming Trio OC 8GB Graphics Card",
    power: 180,
    specs: "8GB GDDR7, triple-fan MSI Gaming Trio RTX 5060 Ti OC",
    oemUrl: "https://www.msi.com/Graphics-Card/GeForce-RTX-5060-Ti-8G-GAMING-TRIO-OC",
    seller: "B&H",
    price: 439.99,
    was: 449.99,
    status: "B&H product page",
    url: "https://www.bhphotovideo.com/c/product/1895471-REG/msi_g506t_8gtc_geforce_rtx_5060.html",
  },
  {
    category: "GPU",
    name: "Gigabyte GeForce RTX 5060 Ti Aero OC 8GB Graphics Card",
    power: 180,
    specs: "8GB GDDR7, white Gigabyte Aero RTX 5060 Ti OC",
    oemUrl: "https://www.gigabyte.com/Graphics-Card/GV-N506TAERO-OC-8GD",
    seller: "B&H",
    price: 449.95,
    status: "B&H product page",
    url: "https://www.bhphotovideo.com/c/product/1895222-REG/gigabyte_gv_n506taero_oc_8gd_geforce_rtx_5060_ti.html",
  },
  {
    category: "GPU",
    name: "MSI GeForce RTX 5060 Ti Gaming OC 8GB Graphics Card",
    power: 180,
    specs: "8GB GDDR7, MSI Gaming RTX 5060 Ti OC",
    oemUrl: "https://www.msi.com/Graphics-Card/GeForce-RTX-5060-Ti-8G-GAMING-OC",
    seller: "B&H",
    price: 439.99,
    status: "B&H product page",
    url: "https://www.bhphotovideo.com/c/product/1895472-REG/msi_g506t_8gc_geforce_rtx_5060.html",
  },
  {
    category: "GPU",
    name: "MSI GeForce RTX 5060 Ti Gaming Trio OC White 8GB Graphics Card",
    power: 180,
    specs: "8GB GDDR7, white MSI Gaming Trio RTX 5060 Ti OC",
    oemUrl: "https://www.msi.com/Graphics-Card/GeForce-RTX-5060-Ti-8G-GAMING-TRIO-OC-WHITE",
    seller: "B&H",
    price: 449.99,
    status: "B&H product page",
    url: "https://www.bhphotovideo.com/c/product/1895473-REG/msi_g506t_8gtcw_geforce_rtx_5060.html",
  },
  {
    category: "GPU",
    name: "ASUS Dual GeForce RTX 5060 Ti OC 8GB Graphics Card",
    power: 180,
    specs: "8GB GDDR7, dual-fan ASUS RTX 5060 Ti OC",
    oemUrl: "https://www.asus.com/motherboards-components/graphics-cards/dual/dual-rtx5060ti-o8g/",
    seller: "B&H",
    price: 469.99,
    status: "B&H product page",
    url: "https://www.bhphotovideo.com/c/product/1897377-REG/asus_dual_rtx5060ti_o8g_geforce_rtx_5060_ti.html",
  },
].map(({ seller, price, was, status, url, ...part }) => ({
  ...part,
  overview:
    part.overview ||
    `${part.name} is a ${part.specs.toLowerCase()} entry in the EZPC catalog. Its listed price is taken from the direct ${seller} product page linked here.`,
  offers: [{ seller, price, ...(Number.isFinite(was) ? { was } : {}), status, url }],
}));

const goalCompletionParts = [
  ["Case", "ASUS TUF Gaming GT502 Black Dual-Chamber Mid-Tower Case", 0, "ATX dual-chamber case, tempered glass front and side panels, black", "https://www.asus.com/motherboards-components/cases/tuf-gaming/tuf-gaming-gt502/", "B&H", 166.99, null, "https://www.bhphotovideo.com/c/product/1743293-REG/asus_gt502_blk_tg_tuf_gaming_gt502_atx.html"],
  ["Case", "ASUS TUF Gaming GT501 White Mid-Tower Case", 0, "E-ATX/ATX mid-tower case, steel frame, tempered glass, white", "https://www.asus.com/motherboards-components/cases/tuf-gaming/tuf-gaming-gt501-white-edition/", "B&H", 179.99, null, "https://www.bhphotovideo.com/c/product/1569303-REG/asus_90dc0013_b40000_tuf_gaming_gt501_mid_tower.html"],
  ["Case", "ASUS ProArt PA602 Wood Edition Black Mid-Tower Case", 0, "E-ATX/ATX creator mid-tower case, wood accents, black", "https://www.asus.com/motherboards-components/cases/proart/proart-pa602/", "B&H", 289.99, null, "https://www.bhphotovideo.com/c/product/1861408-REG/asus_pa602_wood_blk_tg_proart_pa602_wood_edition.html"],
  ["Case", "ASUS ROG Strix Helios II GX601S White Mid-Tower Case", 0, "E-ATX/ATX premium mid-tower case, aluminum and tempered glass, white", "https://rog.asus.com/cases/rog-strix-helios-ii/", "B&H", 329.99, null, "https://www.bhphotovideo.com/c/product/1939140-REG/asus_rog_strix_helios_ii_gx601s_white_rog_strix_helios_ii.html"],
  ["Case", "ASUS ROG Hyperion GR701 Black Full-Tower Case", 0, "E-ATX full-tower case, large airflow chassis, black", "https://rog.asus.com/cases/rog-hyperion-gr701-model/", "B&H", 519.99, 549.99, "https://www.bhphotovideo.com/c/product/1756300-REG/asus_gr701_bk_pwm_fan_rog_hyperion_gr701_e_atx.html"],
  ["Case", "ASUS A21 White Micro-ATX Mid-Tower Case", 0, "Micro-ATX and Mini-ITX case, windowed side panel, white", "https://www.asus.com/motherboards-components/cases/asus/asus-a21/", "B&H", 49.99, 59.99, "https://www.bhphotovideo.com/c/product/1802842-REG/asus_a21_wht_a21_micro_atx_case_white.html"],
  ["Case", "ASUS A31 White ATX Mid-Tower Case", 0, "ATX mid-tower case, tempered glass, white", "https://www.asus.com/motherboards-components/cases/asus/asus-a31/", "B&H", 79.99, null, "https://www.bhphotovideo.com/c/product/1911061-REG/asus_a31_tg_white_asus_a31_atx_mid_tower.html"],
  ["Case", "ASUS A21 Black Micro-ATX Mid-Tower Case", 0, "Micro-ATX and Mini-ITX case, windowed side panel, black", "https://www.asus.com/motherboards-components/cases/asus/asus-a21/", "B&H", 69.99, null, "https://www.bhphotovideo.com/c/product/1802841-REG/asus_a21_blk_a21_micro_atx_case_black.html"],
  ["PSU", "Corsair HX1200i 1200W Platinum Modular ATX 3.1 PSU", 0, "1200W, ATX 3.1, 80 PLUS Platinum, fully modular", "https://www.corsair.com/us/en/p/psu/cp-9020307-na/hxi-series-hx1200i-fully-modular-ultra-low-noise-platinum-atx-power-supply-cp-9020307-na", "B&H", 299.99, 344.99, "https://www.bhphotovideo.com/c/product/1889269-REG/corsair_cp_9020307_hxi_series_hx1200i_1200w.html"],
  ["PSU", "Corsair RM750e White 750W Gold Modular PSU", 0, "750W, ATX 3.1, PCIe 5.1, Gold, modular, white", "https://www.corsair.com/us/en/p/psu/cp-9020292-na/rme-series-rm750e-fully-modular-low-noise-atx-power-supply-white-cp-9020292-na", "B&H", 109.99, null, "https://www.bhphotovideo.com/c/product/1887434-REG/corsair_cp_9020292_na_rme_series_rm750e_750w.html"],
  ["PSU", "Corsair HX1200i Ultra-Low Noise 1200W Platinum PSU", 0, "1200W, 80 PLUS Platinum, fully modular, low-noise ATX PSU", "https://www.corsair.com/us/en/p/psu/cp-9020307-na/hxi-series-hx1200i-fully-modular-ultra-low-noise-platinum-atx-power-supply-cp-9020307-na", "B&H", 344.99, null, "https://www.bhphotovideo.com/c/product/1923448-REG/corsair_cp_9020307_na_hx1200i_1200w_80_plus.html"],
  ["PSU", "Corsair HX1500i Ultra-Low Noise 1500W Platinum PSU", 0, "1500W, 80 PLUS Platinum, fully modular, low-noise ATX PSU", "https://www.corsair.com/us/en/p/psu/cp-9020309-na/hxi-series-hx1500i-fully-modular-ultra-low-noise-platinum-atx-power-supply-cp-9020309-na", "B&H", 349.99, null, "https://www.bhphotovideo.com/c/product/1923449-REG/corsair_cp_9020309_na_hx1500i_1500w_80_plus.html"],
  ["PSU", "Thermaltake Toughpower GF A3 Snow 850W Gold PSU", 0, "850W, ATX 3.0, PCIe 5.0, 80 PLUS Gold, white", "https://www.thermaltake.com/toughpower-gf-a3-snow-850w-gold-tt-premium-edition.html", "B&H", 129.99, null, "https://www.bhphotovideo.com/c/product/1880278-REG/thermaltake_ps_tpd_0850fnfagu_n_toughpower_gf_a3_850w.html"],
  ["PSU", "Cooler Master V850 SFX Gold 850W Modular PSU", 0, "850W, SFX, ATX 3.0, 80 PLUS Gold, fully modular", "https://www.coolermaster.com/en-global/products/v850-sfx-gold-atx-3/", "B&H", 169.99, null, "https://www.bhphotovideo.com/c/product/1860466-REG/cooler_master_mpy_8501_sfhagv_3u1_v850_sfx_gold_atx.html"],
  ["PSU", "Lian Li Edge Series 1000W Platinum Black Modular PSU", 0, "1000W, ATX 3.1, 80 PLUS Platinum, modular, black", "https://lian-li.com/product/edge/", "B&H", 169.99, null, "https://www.bhphotovideo.com/c/product/1841489-REG/lian_li_eg1000be_us_edge_series_1000w_80.html"],
  ["GPU", "ASUS TUF Gaming GeForce RTX 5070 OC 12GB Graphics Card", 250, "12GB GDDR7, triple-fan ASUS TUF RTX 5070 OC", "https://www.asus.com/motherboards-components/graphics-cards/tuf-gaming/tuf-rtx5070-o12g-gaming/", "B&H", 799.0, null, "https://www.bhphotovideo.com/c/product/1875955-REG/asus_tuf_rtx5070_o12g_gaming_geforce_rtx_5070_tuf.html"],
  ["GPU", "Gigabyte GeForce RTX 5070 AERO OC 12GB Graphics Card", 250, "12GB GDDR7, white Gigabyte AERO RTX 5070 OC", "https://www.gigabyte.com/Graphics-Card/GV-N5070AERO-OC-12GD", "B&H", 689.99, null, "https://www.bhphotovideo.com/c/product/1882287-REG/gigabyte_gv_n5070aero_oc_12gd_geforce_rtx_5070_aero.html"],
  ["GPU", "ASUS Prime GeForce RTX 5070 12GB Graphics Card", 250, "12GB GDDR7, ASUS Prime RTX 5070", "https://www.asus.com/motherboards-components/graphics-cards/prime/prime-rtx5070-12g/", "B&H", 642.05, null, "https://www.bhphotovideo.com/c/product/1875953-REG/asus_prime_rtx5070_12g_geforce_rtx_5070_prime.html"],
  ["GPU", "PNY GeForce RTX 5070 ARGB EPIC-X RGB OC Triple Fan Graphics Card", 250, "12GB GDDR7, triple-fan PNY EPIC-X RGB RTX 5070 OC", "https://www.pny.com/geforce-rtx-5070-12gb-argb-epic-x-rgb-oc-triple-fan", "B&H", 649.99, 764.99, "https://www.bhphotovideo.com/c/product/1874642-REG/pny_vcg507012tfxxpb1_o_geforce_rtx_5070_argb.html"],
  ["GPU", "ASUS Prime GeForce RTX 5070 OC 12GB Graphics Card", 250, "12GB GDDR7, ASUS Prime RTX 5070 OC", "https://www.asus.com/motherboards-components/graphics-cards/prime/prime-rtx5070-o12g/", "B&H", 729.99, null, "https://www.bhphotovideo.com/c/product/1875954-REG/asus_prime_rtx5070_o12g_geforce_rtx_5070_prime.html"],
  ["GPU", "ASUS Prime GeForce RTX 5070 OC White 12GB Graphics Card", 250, "12GB GDDR7, white ASUS Prime RTX 5070 OC", "https://www.asus.com/motherboards-components/graphics-cards/prime/prime-rtx5070-o12g-white/", "B&H", 769.99, null, "https://www.bhphotovideo.com/c/product/1906261-REG/asus_prime_rtx5070_o12g_white_prime_geforce_rtx_5070.html"],
  ["GPU", "Gigabyte GeForce RTX 5070 WINDFORCE SFF 12GB Graphics Card", 250, "12GB GDDR7, Gigabyte Windforce SFF RTX 5070", "https://www.gigabyte.com/Graphics-Card/GV-N5070WF3-12GD", "B&H", 539.99, null, "https://www.bhphotovideo.com/c/product/1882364-REG/gigabyte_gv_n5070wf3_16gd_geforce_rtx_5070_windforce.html"],
  ["GPU", "MSI GeForce RTX 5070 Shadow 2X OC 12GB Graphics Card", 250, "12GB GDDR7, dual-fan MSI Shadow RTX 5070 OC", "https://www.msi.com/Graphics-Card/GeForce-RTX-5070-12G-SHADOW-2X-OC", "B&H", 629.95, null, "https://www.bhphotovideo.com/c/product/1882427-REG/msi_g5070_12s2c_geforce_rtx_5070_shadow.html"],
  ["GPU", "MSI GeForce RTX 5070 Shadow 3X OC 12GB Graphics Card", 250, "12GB GDDR7, triple-fan MSI Shadow RTX 5070 OC", "https://www.msi.com/Graphics-Card/GeForce-RTX-5070-12G-SHADOW-3X-OC", "B&H", 609.99, 639.99, "https://www.bhphotovideo.com/c/product/1882428-REG/msi_g5070_12s3c_geforce_rtx_5070_shadow.html"],
  ["GPU", "PNY GeForce RTX 5070 OC Triple Fan 12GB Graphics Card", 250, "12GB GDDR7, triple-fan PNY RTX 5070 OC", "https://www.pny.com/geforce-rtx-5070-12gb-oc-triple-fan", "B&H", 629.99, null, "https://www.bhphotovideo.com/c/product/1874641-REG/pny_vcg507012tfxpb1_o_nvidia_geforce_rtx_5070.html"],
  ["GPU", "MSI GeForce RTX 5070 Ventus 2X OC White 12GB Graphics Card", 250, "12GB GDDR7, white dual-fan MSI Ventus RTX 5070 OC", "https://www.msi.com/Graphics-Card/GeForce-RTX-5070-12G-VENTUS-2X-OC-WHITE", "B&H", 639.95, null, "https://www.bhphotovideo.com/c/product/1882430-REG/msi_g5070_12v2cw_geforce_rtx_5070_ventus.html"],
  ["GPU", "MSI GeForce RTX 5070 Ventus 2X OC 12GB Graphics Card", 250, "12GB GDDR7, dual-fan MSI Ventus RTX 5070 OC", "https://www.msi.com/Graphics-Card/GeForce-RTX-5070-12G-VENTUS-2X-OC", "B&H", 639.95, null, "https://www.bhphotovideo.com/c/product/1882429-REG/msi_g5070_12v2c_geforce_rtx_5070_ventus.html"],
  ["GPU", "Gigabyte GeForce RTX 5070 WINDFORCE OC SFF 12GB Graphics Card", 250, "12GB GDDR7, Gigabyte Windforce RTX 5070 OC SFF", "https://www.gigabyte.com/Graphics-Card/GV-N5070WF3OC-12GD", "B&H", 649.95, null, "https://www.bhphotovideo.com/c/product/1882292-REG/gigabyte_gv_n5070wf3oc_12gd_geforce_rtx_5070_windforce.html"],
  ["GPU", "PNY GeForce RTX 5070 Slim OC Dual Fan 12GB Graphics Card", 250, "12GB GDDR7, dual-fan PNY slim RTX 5070 OC", "https://www.pny.com/geforce-rtx-5070-12gb-slim-oc-dual-fan", "B&H", 649.99, 699.99, "https://www.bhphotovideo.com/c/product/1959780-REG/pny_vcg507012dfsxpb1_o_geforce_rtx_5070_12gb.html"],
  ["GPU", "Gigabyte GeForce RTX 5070 Eagle OC ICE SFF 12GB Graphics Card", 250, "12GB GDDR7, white Gigabyte Eagle RTX 5070 OC SFF", "https://www.gigabyte.com/Graphics-Card/GV-N5070EAGLEOC-ICE-12GD", "B&H", 659.95, null, "https://www.bhphotovideo.com/c/product/1882290-REG/gigabyte_gv_n5070eagleoc_ice_12gd_geforce_rtx_5070_eagle.html"],
  ["GPU", "Gigabyte GeForce RTX 5070 Eagle OC SFF 12GB Graphics Card", 250, "12GB GDDR7, Gigabyte Eagle RTX 5070 OC SFF", "https://www.gigabyte.com/Graphics-Card/GV-N5070EAGLE-OC-12GD", "B&H", 659.95, null, "https://www.bhphotovideo.com/c/product/1882289-REG/gigabyte_gv_n5070eagle_oc_12gd_geforce_rtx_5070_eagle.html"],
  ["Motherboard", "Gigabyte B550I AORUS PRO AX Wi-Fi AM4 Mini-ITX Motherboard", 0, "Mini-ITX AM4 motherboard, B550 chipset, Wi-Fi 6, DDR4", "https://www.gigabyte.com/Motherboard/B550I-AORUS-PRO-AX-rev-10", "B&H", 209.99, null, "https://www.bhphotovideo.com/c/product/1569445-REG/gigabyte_b550_i_aorus_pro.html"],
  ["Motherboard", "Gigabyte Z890 EAGLE WIFI7 LGA1851 ATX Motherboard", 0, "ATX LGA1851 motherboard, Z890 chipset, DDR5, WiFi 7", "https://www.gigabyte.com/Motherboard/Z890-EAGLE-WIFI7", "B&H", 199.99, null, "https://www.bhphotovideo.com/c/product/1857571-REG/gigabyte_z890_eagle_wifi7_lga.html"],
  ["Motherboard", "Gigabyte Z890M GAMING X LGA1851 Micro-ATX Motherboard", 0, "Micro-ATX LGA1851 motherboard, Z890 chipset, DDR5", "https://www.gigabyte.com/Motherboard/Z890M-GAMING-X", "B&H", 179.99, null, "https://www.bhphotovideo.com/c/product/1857576-REG/gigabyte_z890m_gaming_x_lga.html"],
  ["Motherboard", "Gigabyte X870E AERO X3D Wood AM5 ATX Motherboard", 0, "ATX AM5 motherboard, X870E chipset, DDR5, wood accent design", "https://www.gigabyte.com/Motherboard/X870E-AERO-X3D-WOOD", "B&H", 478.99, null, "https://www.bhphotovideo.com/c/product/1950535-REG/gigabyte_x870e_aero_x3d_wood.html"],
  ["Motherboard", "Gigabyte B860M D3HP LGA1851 Micro-ATX Motherboard", 0, "Micro-ATX LGA1851 motherboard, B860 chipset, DDR5", "https://www.gigabyte.com/Motherboard/B860M-D3HP", "B&H", 129.99, null, "https://www.bhphotovideo.com/c/product/1872773-REG/gigabyte_b860m_d3hp_lga_1851.html"],
  ["Motherboard", "Gigabyte B860M DS3H WIFI6E LGA1851 Micro-ATX Motherboard", 0, "Micro-ATX LGA1851 motherboard, B860 chipset, DDR5, Wi-Fi 6E", "https://www.gigabyte.com/Motherboard/B860M-DS3H-WIFI6E", "B&H", 149.99, null, "https://www.bhphotovideo.com/c/product/1872774-REG/gigabyte_b860m_ds3h_wifi6e_lga.html"],
  ["Motherboard", "Gigabyte B860M AORUS ELITE WIFI6E LGA1851 Micro-ATX Motherboard", 0, "Micro-ATX LGA1851 motherboard, B860 chipset, DDR5, Wi-Fi 6E", "https://www.gigabyte.com/Motherboard/B860M-AORUS-ELITE-WIFI6E", "B&H", 169.99, 189.99, "https://www.bhphotovideo.com/c/product/1872771-REG/gigabyte_b860m_aorus_elite_wifi6e.html"],
  ["Storage", "SanDisk 2TB Extreme M.2 NVMe PCIe 4.0 SSD", 0, "2TB M.2 2280 PCIe 4.0 NVMe SSD, up to 5150MB/s reads", "https://www.westerndigital.com/products/internal-drives/sandisk-extreme-m2-nvme-ssd", "B&H", 449.99, 936.99, "https://www.bhphotovideo.com/c/product/1792928-REG/sandisk_sdssdx3n_2t00_g26_2tb_extreme_m_2_nvme.html"],
  ["Storage", "Silicon Power 2TB Endura ED90 NVMe PCIe 4.0 M.2 SSD", 0, "2TB M.2 2280 PCIe 4.0 NVMe SSD, TLC NAND", "https://www.silicon-power.com/web/product-ED90", "B&H", 249.99, null, "https://www.bhphotovideo.com/c/product/1900958-REG/silicon_power_su02kgbp44ed9005bh_2tb_ed90_endura_tlc.html"],
  ["Storage", "WD Black SN770M 2TB NVMe PCIe 4.0 M.2 2230 SSD", 0, "2TB M.2 2230 PCIe 4.0 NVMe SSD, compact form factor", "https://www.westerndigital.com/products/internal-drives/wd-black-sn770m-nvme-ssd", "B&H", 489.99, 490.99, "https://www.bhphotovideo.com/c/product/1802215-REG/wd_wdbdnh0020bbk_wrsn_wd_black_2tb_sn770m.html"],
  ["Storage", "PNY CS2241 2TB PCIe 4.0 M.2 NVMe SSD", 0, "2TB M.2 2280 PCIe 4.0 NVMe SSD, up to 5000MB/s reads", "https://www.pny.com/cs2241-m2-nvme-ssd", "B&H", 164.99, null, "https://www.bhphotovideo.com/c/product/1770751-REG/pny_m280cs2241_2tb_rb_2tb_cs2241_m_2_nvme.html"],
  ["Storage", "PNY CS2342 2TB M.2 2230 NVMe SSD", 0, "2TB M.2 2230 PCIe 4.0 NVMe SSD, up to 7300MB/s reads", "https://www.pny.com/cs2342-m2-nvme-ssd", "B&H", 249.99, null, "https://www.bhphotovideo.com/c/product/1886263-REG/pny_m230cs2342_2tb_tb_2tb_m_2_2230_nvme.html"],
  ["Storage", "Silicon Power 2TB Endura ED90 NVMe PCIe 4.0 NAS M.2 SSD", 0, "2TB M.2 2280 PCIe 4.0 NVMe NAS SSD, endurance-focused", "https://www.silicon-power.com/web/product-ED90", "B&H", 269.99, null, "https://www.bhphotovideo.com/c/product/1920441-REG/silicon_power_su02kgbp44ed90n5bh_ed90_endura_2tb_tlc.html"],
].map(([category, name, power, specs, oemUrl, seller, price, was, url]) => ({
  category,
  name,
  power,
  specs,
  oemUrl,
  overview: `${name} is a ${specs.toLowerCase()} entry in the EZPC catalog. Its listed price is taken from the direct ${seller} product page linked here.`,
  offers: [{ seller, price, ...(Number.isFinite(was) ? { was } : {}), status: `${seller} product page`, url }],
}));

const finalSevenStorageParts = [
  ["Samsung T7 Shield 2TB Portable SSD Blue", "2TB USB 3.2 Gen 2 portable SSD, rugged IP65 enclosure, blue", "https://semiconductor.samsung.com/consumer-storage/portable-ssd/t7-shield/", 574.99, null, "https://www.bhphotovideo.com/c/product/1691593-REG/samsung_mu_pe2t0r_am_2tb_t7_shield_portable.html"],
  ["SanDisk Extreme 2TB USB 3.2 Gen 2 Portable SSD for PlayStation 5", "2TB USB 3.2 Gen 2 portable SSD, PS5/PC compatible, up to 1000MB/s reads", "https://www.sandisk.com/products/ssd/portable-ssd/sandisk-extreme-portable-ssd-ps5", 439.99, 549.99, "https://www.bhphotovideo.com/c/product/1868817-REG/sandisk_sdssde62p_2t00_g25_2tb_extreme_usb_3_2.html"],
  ["SanDisk Extreme Portable SSD V2 2TB Monterey", "2TB USB-C portable SSD, up to 1050MB/s reads, Monterey color", "https://www.sandisk.com/products/ssd/portable-ssd/sandisk-extreme-usb-3-2", 349.99, 494.99, "https://www.bhphotovideo.com/c/product/1769363-REG/sandisk_sdssde61_2t00_g25m_2tb_extreme_portable_ssd.html"],
  ["Lexar Professional Go 2TB USB 3.2 Gen 2 Portable SSD with Hub", "2TB USB 3.2 Gen 2 portable SSD with 4-port USB-C hub", "https://www.lexar.com/product/lexar-professional-go-portable-ssd-with-hub/", 499.99, null, "https://www.bhphotovideo.com/c/product/1855879-REG/lexar_lsl400s002t_rnbnu_2tb_professional_go_usb.html"],
  ["OWC Envoy Ultra 2TB Thunderbolt 5 Portable SSD", "2TB Thunderbolt 5 portable SSD, up to 6000MB/s transfers", "https://www.owc.com/solutions/envoy-ultra", 699.99, null, "https://www.bhphotovideo.com/c/product/1854115-REG/owc_owctb5envu02_envoy_ultra_thunderbolt_5.html"],
  ["OWC Express 1M2 2TB USB4 External SSD", "2TB USB4 external SSD with internal PCIe 4.0 x4 storage", "https://www.owc.com/solutions/express-1m2", 599.99, null, "https://www.bhphotovideo.com/c/product/1801762-REG/owc_owcus4exp1mt02_2tb_express_1m2_portable.html"],
  ["SanDisk Creator Pro 2TB USB 3.2 Gen 2x2 Portable SSD", "2TB USB 3.2 Gen 2x2 portable SSD, up to 2000MB/s reads and writes", "https://www.sandisk.com/products/ssd/portable-ssd/sandisk-creator-pro-portable-ssd", 409.99, 664.99, "https://www.bhphotovideo.com/c/product/1877023-REG/sandisk_sdssde81c_2t00_g25_2tb_creator_series_pro.html"],
].map(([name, specs, oemUrl, price, was, url]) => ({
  category: "Storage",
  name,
  power: 0,
  specs,
  oemUrl,
  overview: `${name} is a ${specs.toLowerCase()} entry in the EZPC catalog. Its listed price is taken from the direct B&H product page linked here.`,
  offers: [{ seller: "B&H", price, ...(Number.isFinite(was) ? { was } : {}), status: "B&H product page", url }],
}));

parts.push(
  ...expandedParts.map((part) => ({
    ...part,
    offers: part.offers || [{ seller: "OEM", price: null, status: "Product page", url: part.oemUrl }],
  })),
  ...retailerVerifiedParts,
  ...moreRetailerVerifiedParts,
  ...continuingExpansionParts,
  ...bhExpansionParts,
  ...goalCompletionParts,
  ...finalSevenStorageParts,
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
  "G.Skill Trident Z5 RGB 48GB DDR5-7200 CL36 Kit": {
    seller: "Newegg",
    price: 599.99,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/g-skill-trident-z5-rgb-series-48gb-ddr5-7200-cas-latency-cl36-desktop-memory-black/p/N82E16820374458"
  },
  "Corsair Dominator Titanium RGB 64GB DDR5-6000 CL30 Kit": {
    seller: "Best Buy",
    price: 1199.99,
    status: "Lowest verified retailer",
    url: "https://www.bestbuy.com/product/corsair-dominator-titanium-64gb-2-x-32gb-ddr5-6000-cl30-36-36-76-1-40v-intel-xmp-amd-expo-gray/J39QHTCXCW/sku/6645750"
  },
  "TeamGroup T-Force Delta RGB 32GB DDR5-6400 CL40 Kit": {
    seller: "Newegg",
    price: 429.99,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/team-group-t-force-delta-eco-32gb-2-x-16gb-ddr5-6000-pc5-48000-cas-latency-cl38-desktop-memory-silver/p/N82E16820985328"
  },
  "Crucial Pro Overclocking 32GB DDR5-6000 CL36 Kit": {
    seller: "Newegg",
    price: 414.99,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/p/N82E16820156406"
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
    url: "https://www.newegg.com/solidigm-2tb-p44-pro/p/N82E16820318013?Item=9SIA12KJBU7994"
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
  "be quiet! Straight Power 12 1000W 80+ Platinum PSU": {
    seller: "Newegg",
    price: 159.9,
    status: "Lowest verified retailer",
    url: "https://www.newegg.com/be-quiet-straight-power-atx-3-0-compatible-1000-w-80-plus-platinum-certified-power-supplies-black/p/1HU-004H-000T2?item=1HU-004H-000T2"
  },
  "EVGA SuperNOVA 1000G FTW 1000W 80+ Gold PSU": {
    seller: "EVGA",
    price: 189.99,
    status: "Lowest verified retailer",
    url: "https://www.evga.com/products/product.aspx?pn=220-GT-1000-X1"
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
    url: "https://www.bestbuy.com/product/phanteks-nv7-full-tower-chassis-high-airflow-rgb-lighting-tempered-glass-12-fan-positions-black-black/J3Z8XVHYS3/sku/11401248"
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
  const existingOffers = part.offers || [];
  part.offers = lowestOffer
    ? [
        { ...lowestOffer },
        ...existingOffers.filter((offer) => offer.url !== lowestOffer.url && offer.seller !== lowestOffer.seller),
      ]
    : existingOffers;
});

const israeliRetailerOffers = {
  "AMD Ryzen 7 9800X3D 8-Core AM5 Processor": [
    { seller: "Ivory", price: 631.06, status: "Ivory product page, converted to USD", url: "https://www.ivory.co.il/catalog.php?id=119039" },
  ],
  "AMD Ryzen 9 9950X 16-Core AM5 Processor": [
    { seller: "TMS", price: 602.73, status: "TMS product page, converted to USD", url: "https://tms.co.il/amd-ryzen-9-9950x-am5-tray?eilat=1" },
    { seller: "Ivory", price: 818.09, status: "Ivory product page, converted to USD", url: "https://www.ivory.co.il/catalog.php?id=105808" },
  ],
  "Intel Core Ultra 9 285K LGA1851 Processor": [
    { seller: "TMS", price: 717.06, status: "TMS product page, converted to USD", url: "https://tms.co.il/processor/intel-core-ultra-9-285k-1851-tray?eilat=1" },
  ],
  "AMD Ryzen 9 9950X3D 16-Core AM5 Processor": [
    { seller: "KSP", price: null, status: "KSP product page", url: "https://ksp.co.il/web/item/371313" },
  ],
  "MSI GeForce RTX 5080 16G Gaming Trio OC Graphics Card": [
    { seller: "Ivory", price: 2337.88, status: "Ivory product page, converted to USD", url: "https://www.ivory.co.il/catalog.php?id=126756" },
  ],
  "WD Black SN850X 2TB PCIe 4.0 NVMe M.2 SSD": [
    { seller: "Dominator", price: null, status: "Dominator product page, currently unavailable", url: "https://www.dominator.co.il/product/%D7%9B%D7%95%D7%A0%D7%9F-wd-black-sn850x-2tb-nvme-with-heatsink-ssd" },
  ],
  "Apple MacBook Pro 14 M4 Pro Laptop": [
    { seller: "Bug", price: 3378.5, status: "Bug product page, converted to USD", url: "https://www.bug.co.il/brand/apple/macbook/pro/14/m4/2024/z1fb000z2/silver" },
  ],
  "Samsung Odyssey OLED G80SD 32-inch 4K 240Hz Monitor": [
    { seller: "Bug", price: 1532.42, status: "Bug product page, converted to USD", url: "https://www.bug.co.il/brand/samsung/32/odyssey/smart/g8/s32dg802sm" },
  ],
};

// TMS (Israeli) product pages mapped from sitemap. Prices left null
// so the front-end shows "Check price" until the nightly refresh fills
// them in.
const tmsCatalogOffers = {
  "AMD Ryzen 5 5500 6-Core AM4 Processor": [
    { seller: "TMS", price: null, status: "TMS product page", url: "https://tms.co.il/amd-ryzen-5-5500-am4-tray" },
  ],
  "AMD Ryzen 7 5700X 8-Core AM4 Processor": [
    { seller: "TMS", price: null, status: "TMS product page", url: "https://tms.co.il/amd-ryzen-7-5700x-am4-tray" },
  ],
  "AMD Ryzen 5 7600X 6-Core AM5 Processor": [
    { seller: "TMS", price: null, status: "TMS product page", url: "https://tms.co.il/amd-ryzen-5-7600x-am5-tray" },
  ],
  "AMD Ryzen 7 7700X 8-Core AM5 Processor": [
    { seller: "TMS", price: null, status: "TMS product page", url: "https://tms.co.il/amd-ryzen-7-7700x-am5-tray" },
  ],
  "AMD Ryzen 7 7800X3D 8-Core AM5 Processor": [
    { seller: "TMS", price: null, status: "TMS product page", url: "https://tms.co.il/amd-ryzen-7-7800x3d-am5-tray" },
  ],
  "AMD Ryzen 9 7900X 12-Core AM5 Processor": [
    { seller: "TMS", price: null, status: "TMS product page", url: "https://tms.co.il/amd-ryzen-9-7900x-am5-box" },
  ],
  "AMD Ryzen 9 7950X 16-Core AM5 Processor": [
    { seller: "TMS", price: null, status: "TMS product page", url: "https://tms.co.il/amd-ryzen-9-7950x-am5-tray" },
  ],
  "AMD Ryzen 5 9600X 6-Core AM5 Processor": [
    { seller: "TMS", price: null, status: "TMS product page", url: "https://tms.co.il/amd-ryzen-5-9600x-am5-tray" },
  ],
  "AMD Ryzen 7 9700X 8-Core AM5 Processor": [
    { seller: "TMS", price: null, status: "TMS product page", url: "https://tms.co.il/amd-ryzen-7-9700x-am5-tray" },
  ],
  "AMD Ryzen 9 9900X 12-Core AM5 Processor": [
    { seller: "TMS", price: null, status: "TMS product page", url: "https://tms.co.il/amd-ryzen-9-9900x-am5-tray" },
  ],
  "AMD Ryzen 9 9950X 16-Core AM5 Processor": [
    { seller: "TMS", price: null, status: "TMS product page", url: "https://tms.co.il/amd-ryzen-9-9950x-am5-tray" },
  ],
  "AMD Ryzen 7 9800X3D 8-Core AM5 Processor": [
    { seller: "TMS", price: null, status: "TMS product page", url: "https://tms.co.il/amd-ryzen-7-9800x3d-am5-tray" },
  ],
  "AMD Ryzen 9 9950X3D 16-Core AM5 Processor": [
    { seller: "TMS", price: null, status: "TMS product page", url: "https://tms.co.il/amd-ryzen-9-9950x3d-am5-tray" },
  ],
  "AMD Ryzen 9 9900X3D 12-Core AM5 Processor": [
    { seller: "TMS", price: null, status: "TMS product page", url: "https://tms.co.il/amd-ryzen-9-9900x3d-am5-tray" },
  ],
  "AMD Ryzen 7 9850X3D 8-Core AM5 Processor": [
    { seller: "TMS", price: null, status: "TMS product page", url: "https://tms.co.il/amd-ryzen-7-9850x3d-am5-tray" },
  ],
  "Gigabyte X870E AORUS PRO AM5 ATX Motherboard": [
    { seller: "TMS", price: null, status: "TMS product page", url: "https://tms.co.il/gigabyte-x870e-aorus-pro" },
  ],
  "Gigabyte B850M DS3H AM5 Micro-ATX Motherboard": [
    { seller: "TMS", price: null, status: "TMS product page", url: "https://tms.co.il/gigabyte-b850m-ds3h" },
  ],
  "Gigabyte GeForce RTX 5080 WINDFORCE OC SFF 16G Graphics Card": [
    { seller: "TMS", price: null, status: "TMS product page", url: "https://tms.co.il/gigabyte-rtx-5080-gv-n5080wf3-16gd" },
  ],
  "Gigabyte GeForce RTX 5060 Eagle OC 8G Graphics Card": [
    { seller: "TMS", price: null, status: "TMS product page", url: "https://tms.co.il/gigabyte-rtx-5060-gv-n5060oc-8gl" },
  ],
  "Corsair 4000D Airflow Black Mid-Tower Case": [
    { seller: "TMS", price: null, status: "TMS product page, 4000D RGB Airflow variant", url: "https://tms.co.il/corsair-4000d-rgb-airflow-case-black" },
  ],
  "Cooler Master V850 SFX Gold 850W Modular PSU": [
    { seller: "TMS", price: null, status: "TMS product page", url: "https://tms.co.il/coolermaster-850w-v850-gold-fully-modular" },
  ],
  "Corsair RM750e White 750W Gold Modular PSU": [
    { seller: "TMS", price: null, status: "TMS product page", url: "https://tms.co.il/corsair-psu-750w-rm750e-low-noise-atx-31-gold-fully-modular" },
  ],
  "Corsair RM850e 850W 80+ Gold ATX 3.1 PSU": [
    { seller: "TMS", price: null, status: "TMS product page", url: "https://tms.co.il/corsair-psu-850w-rm850e-low-noise-atx-31-gold-fully-modular" },
  ],
  "Corsair RM850x Shift 850W 80+ Gold ATX 3.1 PSU": [
    { seller: "TMS", price: null, status: "TMS product page", url: "https://tms.co.il/corsair-psu-850w-rm850x-atx-31-gold-fully-modular" },
  ],
  "Corsair RM1000x Shift 1000W 80+ Gold ATX 3.1 PSU": [
    { seller: "TMS", price: null, status: "TMS product page", url: "https://tms.co.il/corsair-psu-1000w-rm1000x-atx-31-gold-fully-modular" },
  ],
  "Corsair HX1200i 1200W Platinum Modular ATX 3.1 PSU": [
    { seller: "TMS", price: null, status: "TMS product page", url: "https://tms.co.il/corsair-psu-1200w-hx1200i-shift-fully-modular-80-platinum" },
  ],
  "Corsair HX1500i Ultra-Low Noise 1500W Platinum PSU": [
    { seller: "TMS", price: null, status: "TMS product page", url: "https://tms.co.il/corsair-psu-1500w-hx1500i-shift-fully-modular-80-platinum" },
  ],
  "Corsair SF1000 1000W Platinum Fully Modular SFX PSU": [
    { seller: "TMS", price: null, status: "TMS product page", url: "https://tms.co.il/corsair-psu-1000w-sf1000-fully-modular-80-platinum-sfx" },
  ],
  "Corsair Vengeance RGB 64GB DDR5-6400 CL32 Kit": [
    { seller: "TMS", price: null, status: "TMS product page", url: "https://tms.co.il/corsair-ddr5-64gb-4x16gb-6400-cl32-vengeance-xmp-30" },
  ],
  "Samsung 1TB 9100 PRO PCIe 5.0 NVMe M.2 SSD": [
    { seller: "TMS", price: null, status: "TMS product page", url: "https://tms.co.il/samsung-ssd-1tb-9100-pro-pcie-50-nvme-m2" },
  ],
  "Crucial P310 2TB PCIe 4.0 NVMe M.2 SSD": [
    { seller: "TMS", price: null, status: "TMS product page", url: "https://tms.co.il/crucial-p310-2tb-pcie-gen4-nvme-2280-m2-ssd" },
  ],
};

Object.entries(tmsCatalogOffers).forEach(([name, offers]) => {
  const part = parts.find((item) => item.name === name);
  if (!part) return;
  const seen = new Set((part.offers || []).map((offer) => `${offer.seller}|${offer.url}`));
  offers.forEach((offer) => {
    const key = `${offer.seller}|${offer.url}`;
    if (seen.has(key)) return;
    seen.add(key);
    (part.offers ||= []).push(offer);
  });
});

const categoryDescriptions = {
  CPU: "Verified processor product pages with socket metadata for the builder.",
  GPU: "Exact-model graphics cards with direct retailer product pages.",
  Motherboard: "AM5, LGA1851, and LGA1700 boards with verified offer pricing.",
  Memory: "DDR5 kits with product-page pricing and compatibility metadata.",
  Storage: "NVMe drives with direct product-page offers.",
  PSU: "Modern ATX power supplies sized for current GPUs.",
  Case: "Airflow and showcase chassis for full-size builds.",
  Prebuilt: "Ready-to-ship gaming desktops with current-gen CPUs and GPUs.",
  Laptop: "Gaming, creator, and productivity laptops with Israel-shippable retailer offers.",
  Monitor: "4K, ultrawide, OLED, and high-refresh gaming displays.",
};

const newSegmentParts = [
  {
    category: "Prebuilt",
    name: "NZXT Player: Three Gaming Desktop",
    specs: "Ryzen 7 9800X3D, RTX 5080, 32GB DDR5, 2TB NVMe",
    power: 850,
    overview: "NZXT Player: Three is a prebuilt gaming desktop assembled in an H7 Flow chassis with current-gen NZXT cooling, Ryzen 9000 Series 3D V-Cache, GeForce RTX 50 Series graphics, DDR5 memory, and PCIe Gen4 storage.",
    oemUrl: "https://nzxt.com/product/player-three",
    image: "https://nzxt.com/cdn/shop/files/PlayerThreeBase_hero_black_badge.png?v=1779902936&width=2048",
    offers: [
      { seller: "NZXT", price: 2299, status: "NZXT product page", url: "https://nzxt.com/product/player-three" },
    ],
  },
  {
    category: "Prebuilt",
    name: "Skytech Shadow 3.0 Gaming PC",
    specs: "Ryzen 7 7700, RTX 5070, 32GB DDR5, 1TB NVMe",
    power: 750,
    overview: "Skytech Shadow 3.0 is a mid-tower prebuilt with Ryzen 7000 Series, GeForce RTX 50 Series graphics, DDR5 memory, and an RGB airflow chassis for high-FPS 1440p gaming.",
    oemUrl: "https://www.skytechgaming.com/products/skytech-shadow-gaming-computer-desktop-pc",
    image: "https://m.media-amazon.com/images/I/61aoMnRRwhL._AC_SL1500_.jpg",
    offers: [
      { seller: "Amazon", price: 1799, status: "Amazon product page", url: "https://www.amazon.com/dp/B0F1XCTMBC" },
      { seller: "Skytech", price: null, status: "Skytech product page", url: "https://www.skytechgaming.com/products/skytech-shadow-gaming-computer-desktop-pc" },
    ],
  },
  {
    category: "Prebuilt",
    name: "CyberPowerPC Gamer Xtreme VR GXiVR8060A11",
    specs: "Core i5-13400F, RTX 4060, 16GB DDR4, 1TB NVMe",
    power: 600,
    overview: "CyberPowerPC's Gamer Xtreme VR is a value gaming prebuilt with Intel 13th Gen, GeForce RTX 4060, DDR4 memory, and a tempered-glass mid-tower chassis aimed at 1080p high-FPS gaming.",
    oemUrl: "https://www.cyberpowerpc.com/system/Gamer_Xtreme_Gaming_PC/",
    image: "https://m.media-amazon.com/images/I/71pUMJOI+1L._AC_SL1500_.jpg",
    offers: [
      { seller: "Amazon", price: 999, status: "Amazon product page", url: "https://www.amazon.com/dp/B0CG9PSXTV" },
    ],
  },
  {
    category: "Prebuilt",
    name: "iBUYPOWER TraceMesh II Gaming Desktop",
    specs: "Ryzen 7 7700, RTX 4070 SUPER, 16GB DDR5, 1TB NVMe",
    power: 750,
    overview: "iBUYPOWER's TraceMesh II is a mid-tower gaming prebuilt with Ryzen 7000 Series, GeForce RTX 40 SUPER Series graphics, DDR5 memory, and a mesh-front chassis for high-end 1440p builds.",
    oemUrl: "https://www.ibuypower.com/configurator/computer-gaming-pc/Trace-Mesh-II",
    image: "https://m.media-amazon.com/images/I/71t4yQB0RJL._AC_SL1500_.jpg",
    offers: [
      { seller: "Amazon", price: 1599, status: "Amazon product page", url: "https://www.amazon.com/dp/B0DGHZGMS6" },
    ],
  },
  {
    category: "Prebuilt",
    name: "Lenovo Legion Tower 7i Gen 8 Gaming Desktop",
    specs: "Core i9-14900KF, RTX 4080 SUPER, 32GB DDR5, 1TB NVMe",
    power: 1200,
    overview: "Lenovo's Legion Tower 7i Gen 8 is a high-end gaming desktop with Intel 14th Gen unlocked processors, GeForce RTX 40 SUPER Series graphics, DDR5 memory, and Legion Coldfront cooling in a tooled-glass chassis.",
    oemUrl: "https://www.lenovo.com/us/en/p/desktops/legion-desktops/legion-t-series-towers/legion-tower-7-gen-8-intel/90ud002jus",
    image: "https://p2-ofp.static.pub//fes/cms/2024/04/29/uxn6kt15g2g16gc2lf9ge6vpr7lo7y063060.png",
    offers: [
      { seller: "Lenovo", price: 2799, status: "Lenovo product page", url: "https://www.lenovo.com/us/en/p/desktops/legion-desktops/legion-t-series-towers/legion-tower-7-gen-8-intel/90ud002jus" },
    ],
  },

  {
    category: "Laptop",
    name: "ASUS ROG Strix G16 G614 Gaming Laptop",
    specs: "16-inch QHD 240Hz, Core i9-14900HX, RTX 4070, 16GB DDR5",
    power: 240,
    overview: "ASUS ROG Strix G16 is a 16-inch gaming laptop with Intel 14th Gen Core HX processors, GeForce RTX 40 Series graphics, a fast QHD display, and a ROG-tuned cooling system aimed at high-FPS gaming.",
    oemUrl: "https://rog.asus.com/laptops/rog-strix/rog-strix-g16-2024/",
    image: "https://dlcdnwebimgs.asus.com/gain/C0280928-8FA3-4166-8F3F-FDEB3FBF0CDF",
    offers: [
      { seller: "ASUS", price: 1799, status: "ASUS product page", url: "https://rog.asus.com/laptops/rog-strix/rog-strix-g16-2024/" },
      { seller: "Amazon", price: 1699, status: "Amazon product page", url: "https://www.amazon.com/dp/B0CRDD79FX" },
    ],
  },
  {
    category: "Laptop",
    name: "Lenovo Legion Pro 7i Gen 9 Gaming Laptop",
    specs: "16-inch 240Hz Mini-LED, Core i9-14900HX, RTX 4080, 32GB DDR5",
    power: 330,
    overview: "Lenovo Legion Pro 7i Gen 9 is a 16-inch enthusiast gaming laptop with Intel 14th Gen HX, GeForce RTX 4080, a Mini-LED display, and Legion Coldfront cooling for sustained creator and gaming workloads.",
    oemUrl: "https://www.lenovo.com/us/en/p/laptops/legion-laptops/legion-pro-series/legion-pro-7i-gen-9-16-inch-intel/83de",
    image: "https://p2-ofp.static.pub//fes/cms/2024/03/19/m13gtj4r2c93smbq4ux8vmsv4zlpro502064.png",
    offers: [
      { seller: "Lenovo", price: 2999, status: "Lenovo product page", url: "https://www.lenovo.com/us/en/p/laptops/legion-laptops/legion-pro-series/legion-pro-7i-gen-9-16-inch-intel/83de" },
    ],
  },
  {
    category: "Laptop",
    name: "MSI Raider GE78 HX 14V Gaming Laptop",
    specs: "17-inch QHD+ 240Hz, Core i9-14900HX, RTX 4090, 32GB DDR5",
    power: 330,
    overview: "MSI's Raider GE78 HX 14V is a 17-inch flagship gaming laptop with Intel 14th Gen Core HX, GeForce RTX 4090, a QHD+ high-refresh display, and Cooler Boost 5 thermals for desktop-class performance.",
    oemUrl: "https://www.msi.com/Laptop/Raider-GE78HX-14V",
    image: "https://m.media-amazon.com/images/I/71MThIA-MqL._AC_SL1500_.jpg",
    offers: [
      { seller: "Amazon", price: 3299, status: "Amazon product page", url: "https://www.amazon.com/dp/B0CTHXJ29Y" },
      { seller: "MSI", price: null, status: "MSI product page", url: "https://www.msi.com/Laptop/Raider-GE78HX-14V" },
    ],
  },
  {
    category: "Laptop",
    name: "Razer Blade 16 Gaming Laptop",
    specs: "16-inch QHD+ 240Hz OLED, Core Ultra 9 275HX, RTX 5090, 32GB DDR5",
    power: 280,
    overview: "Razer Blade 16 is Razer's flagship 16-inch gaming laptop with an Intel Core Ultra HX processor, GeForce RTX 50 Series graphics, an OLED high-refresh display, and Razer's CNC aluminum chassis.",
    oemUrl: "https://www.razer.com/gaming-laptops/razer-blade-16",
    image: "https://assets2.razerzone.com/images/pnx.assets/973938ee11010f3e39f228283bae5a91/blade16-2026-og-1200x630.webp",
    offers: [
      { seller: "Razer", price: 3499, status: "Razer product page", url: "https://www.razer.com/gaming-laptops/razer-blade-16" },
    ],
  },
  {
    category: "Laptop",
    name: "Alienware m16 R2 Gaming Laptop",
    specs: "16-inch QHD+ 240Hz, Core Ultra 7 155H, RTX 4070, 16GB LPDDR5X",
    power: 240,
    overview: "Alienware m16 R2 is Dell's redesigned 16-inch gaming laptop with Intel Core Ultra H-series CPUs, GeForce RTX 40 Series graphics, a QHD+ high-refresh display, and Alienware Cryo-Tech thermals.",
    oemUrl: "https://www.dell.com/en-us/shop/dell-laptops/alienware-m16-r2-gaming-laptop/spd/alienware-m16-r2-laptop/usexcham16r2zrh",
    image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/alienware-notebooks/alienware-m16-r2-intel/media-gallery/laptop-aw-m16r2-nt-bk-gallery-3.psd?fmt=png-alpha&wid=570",
    offers: [
      { seller: "Dell", price: 1799, status: "Dell product page", url: "https://www.dell.com/en-us/shop/dell-laptops/alienware-m16-r2-gaming-laptop/spd/alienware-m16-r2-laptop/usexcham16r2zrh" },
    ],
  },
  {
    category: "Laptop",
    name: "Apple MacBook Pro 14 M4 Pro Laptop",
    specs: "14-inch Liquid Retina XDR 120Hz, Apple M4 Pro, 24GB Unified, 1TB SSD",
    power: 96,
    overview: "Apple's MacBook Pro 14 with M4 Pro is a creator and productivity laptop with the Apple M4 Pro chip, a Liquid Retina XDR display with 120Hz ProMotion, and all-day battery life.",
    oemUrl: "https://www.apple.com/shop/buy-mac/macbook-pro",
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-macbook-pro-size-unselect-202601-gallery-1?wid=1200&hei=630&fmt=jpeg",
    offers: [
      { seller: "Apple", price: 1999, status: "Apple product page", url: "https://www.apple.com/shop/buy-mac/macbook-pro" },
      { seller: "Amazon", price: 1899, status: "Amazon product page", url: "https://www.amazon.com/dp/B0DLHRZL59" },
    ],
  },
  {
    category: "Laptop",
    name: "Apple MacBook Air 15 M3 Laptop",
    specs: "15-inch Liquid Retina, Apple M3, 16GB Unified, 512GB SSD",
    power: 35,
    overview: "Apple's 15-inch MacBook Air with M3 is a thin and fanless productivity laptop with a Liquid Retina display, all-day battery, and Apple Silicon performance suited to everyday and light creative workloads.",
    oemUrl: "https://www.apple.com/shop/buy-mac/macbook-air",
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/macbook-air-size-unselect-202601-gallery-1?wid=1200&hei=630&fmt=jpeg",
    offers: [
      { seller: "Apple", price: 1299, status: "Apple product page", url: "https://www.apple.com/shop/buy-mac/macbook-air" },
      { seller: "Amazon", price: 1249, status: "Amazon product page", url: "https://www.amazon.com/dp/B0CX23V2ZK" },
    ],
  },
  {
    category: "Laptop",
    name: "Dell XPS 15 9530 Productivity Laptop",
    specs: "15.6-inch OLED 3.5K, Core i7-13700H, RTX 4060, 32GB DDR5",
    power: 130,
    overview: "Dell's XPS 15 9530 is a premium 15.6-inch productivity laptop with Intel 13th Gen Core H processors, optional GeForce RTX 40 Series graphics, an OLED high-resolution display, and a CNC aluminum chassis.",
    oemUrl: "https://www.dell.com/en-us/shop/dell-laptops/xps-15-laptop/spd/xps-15-9530-laptop",
    image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9530/pdp/pdp-images/notebook-xps-15-9530-pdp-mod-hero-image.psd?qlt=95&fit=constrain,1&hei=400&wid=570&fmt=jpg",
    offers: [
      { seller: "Dell", price: 1899, status: "Dell product page", url: "https://www.dell.com/en-us/shop/dell-laptops/xps-15-laptop/spd/xps-15-9530-laptop" },
    ],
  },
  {
    category: "Laptop",
    name: "ASUS Zenbook Pro 14 OLED UX6404 Laptop",
    specs: "14.5-inch 3K OLED 120Hz, Core i9-13900H, RTX 4060, 32GB DDR5",
    power: 200,
    overview: "ASUS Zenbook Pro 14 OLED UX6404 is a 14.5-inch creator laptop with Intel 13th Gen Core H, GeForce RTX 40 Series graphics, a 3K OLED display, and the ASUS Dial controller for creative apps.",
    oemUrl: "https://www.asus.com/laptops/for-creators/zenbook/zenbook-pro-14-oled-ux6404/",
    image: "https://dlcdnwebimgs.asus.com/gain/0b2de1e8-7673-4945-91bc-055ab7f11f08/",
    offers: [
      { seller: "ASUS", price: 1899, status: "ASUS product page", url: "https://www.asus.com/laptops/for-creators/zenbook/zenbook-pro-14-oled-ux6404/" },
    ],
  },
  {
    category: "Laptop",
    name: "HP Omen Transcend 14 Gaming Laptop",
    specs: "14-inch 2.8K OLED 120Hz, Core Ultra 7 155H, RTX 4060, 16GB LPDDR5X",
    power: 140,
    overview: "HP Omen Transcend 14 is a 14-inch thin-and-light gaming laptop with Intel Core Ultra processors, GeForce RTX 40 Series graphics, an OLED high-refresh display, and a magnesium-aluminum chassis.",
    oemUrl: "https://www.hp.com/us-en/shop/pdp/omen-transcend-14-laptop-pc-14-fb0097nr",
    image: "https://www.hp.com/content/dam/sites/worldwide/personal-computers/consumer/omen/omen-transcend/2024/omen-transcend-14-meta-2400x1260.png",
    offers: [
      { seller: "HP", price: 1599, status: "HP product page", url: "https://www.hp.com/us-en/shop/pdp/omen-transcend-14-laptop-pc-14-fb0097nr" },
    ],
  },
  {
    category: "Laptop",
    name: "Lenovo ThinkPad X1 Carbon Gen 12 Business Laptop",
    specs: "14-inch 2.8K OLED, Core Ultra 7 165U, 32GB LPDDR5X, 1TB SSD",
    power: 65,
    overview: "Lenovo ThinkPad X1 Carbon Gen 12 is a premium 14-inch business ultrabook with Intel Core Ultra processors, optional 2.8K OLED display, vPro security, and a carbon-fiber chassis built to MIL-STD durability.",
    oemUrl: "https://www.lenovo.com/us/en/p/laptops/thinkpad/thinkpadx1/thinkpad-x1-carbon-gen-12-(14-inch-intel)/21kc006bus",
    image: "https://p2-ofp.static.pub//fes/cms/2024/02/21/qd1kkkw8nnq2t0r9zr0nl3vb6y4lzm672420.png",
    offers: [
      { seller: "Lenovo", price: 2199, status: "Lenovo product page", url: "https://www.lenovo.com/us/en/p/laptops/thinkpad/thinkpadx1/thinkpad-x1-carbon-gen-12-(14-inch-intel)/21kc006bus" },
    ],
  },

  {
    category: "Monitor",
    name: "LG UltraGear 27GR93U-B 27-inch 4K 144Hz Monitor",
    specs: "27-inch 4K UHD, 144Hz, Nano IPS, HDMI 2.1, G-Sync compatible",
    power: 45,
    overview: "LG UltraGear 27GR93U-B is a 27-inch 4K UHD gaming monitor with a 144Hz Nano IPS panel, HDMI 2.1 for current-gen consoles, NVIDIA G-Sync compatibility, and DisplayHDR 400.",
    oemUrl: "https://www.lg.com/us/monitors/lg-27gr93u-b",
    image: "https://m.media-amazon.com/images/I/81lO4w5tnKL._AC_SL1500_.jpg",
    offers: [
      { seller: "Amazon", price: 599, status: "Amazon product page", url: "https://www.amazon.com/dp/B0BX1NHX2L" },
      { seller: "LG", price: 699, status: "LG product page", url: "https://www.lg.com/us/monitors/lg-27gr93u-b" },
    ],
  },
  {
    category: "Monitor",
    name: "Samsung Odyssey OLED G80SD 32-inch 4K 240Hz Monitor",
    specs: "32-inch 4K UHD QD-OLED, 240Hz, 0.03ms, HDMI 2.1, FreeSync Premium Pro",
    power: 70,
    overview: "Samsung Odyssey OLED G80SD is a 32-inch 4K QD-OLED gaming monitor with a 240Hz refresh rate, 0.03ms response, HDMI 2.1 connectivity, and Samsung Tizen-based smart features.",
    oemUrl: "https://www.samsung.com/us/computing/monitors/oled/odyssey-oled-g80sd-32-inch-4k-uhd-gaming-monitor-ls32dg800sxxz/",
    image: "https://m.media-amazon.com/images/I/71+UaqB3JoL._AC_SL1500_.jpg",
    offers: [
      { seller: "Amazon", price: 1299, status: "Amazon product page", url: "https://www.amazon.com/dp/B0CYR7TG6R" },
      { seller: "Samsung", price: 1499, status: "Samsung product page", url: "https://www.samsung.com/us/computing/monitors/oled/odyssey-oled-g80sd-32-inch-4k-uhd-gaming-monitor-ls32dg800sxxz/" },
    ],
  },
  {
    category: "Monitor",
    name: "ASUS ROG Swift OLED PG27AQDM 27-inch QHD 240Hz Monitor",
    specs: "26.5-inch QHD WOLED, 240Hz, 0.03ms, DisplayPort 1.4, G-Sync compatible",
    power: 50,
    overview: "ASUS ROG Swift OLED PG27AQDM is a 26.5-inch WOLED gaming monitor with QHD resolution, 240Hz refresh, 0.03ms response, NVIDIA G-Sync compatibility, and a custom heatsink for sustained brightness.",
    oemUrl: "https://rog.asus.com/monitors/27-to-31-5-inches/rog-swift-oled-pg27aqdm/",
    image: "https://dlcdnwebimgs.asus.com/gain/59F76A27-DF1B-4EB6-A47A-9604D403C261",
    offers: [
      { seller: "ASUS", price: 999, status: "ASUS product page", url: "https://rog.asus.com/monitors/27-to-31-5-inches/rog-swift-oled-pg27aqdm/" },
      { seller: "Amazon", price: 899, status: "Amazon product page", url: "https://www.amazon.com/dp/B0CFFD52L4" },
    ],
  },
  {
    category: "Monitor",
    name: "Alienware AW3423DWF 34-inch QD-OLED Ultrawide Monitor",
    specs: "34-inch UWQHD QD-OLED, 165Hz, 0.1ms, DisplayPort 1.4, FreeSync Premium Pro",
    power: 80,
    overview: "Alienware AW3423DWF is a 34-inch curved QD-OLED ultrawide gaming monitor with 3440x1440 resolution at 165Hz, 0.1ms response, AMD FreeSync Premium Pro, and Alienware Legend industrial design.",
    oemUrl: "https://www.dell.com/en-us/shop/alienware-34-curved-qd-oled-gaming-monitor-aw3423dwf/apd/210-blhk",
    image: "https://m.media-amazon.com/images/I/61EsPgINK6L._AC_SL1500_.jpg",
    offers: [
      { seller: "Amazon", price: 799, status: "Amazon product page", url: "https://www.amazon.com/dp/B0BJZ29ZRX" },
      { seller: "Dell", price: 899, status: "Dell product page", url: "https://www.dell.com/en-us/shop/alienware-34-curved-qd-oled-gaming-monitor-aw3423dwf/apd/210-blhk" },
    ],
  },
  {
    category: "Monitor",
    name: "LG UltraGear 27GP850-B 27-inch QHD 165Hz Monitor",
    specs: "27-inch QHD, 165Hz (180Hz OC), Nano IPS, 1ms, G-Sync compatible",
    power: 38,
    overview: "LG UltraGear 27GP850-B is a 27-inch QHD Nano IPS gaming monitor with 165Hz native refresh (180Hz overclocked), 1ms response, NVIDIA G-Sync compatibility, and HDR400 support.",
    oemUrl: "https://www.lg.com/us/monitors/lg-27gp850-b",
    image: "https://m.media-amazon.com/images/I/61PvFmNgveL._AC_SL1500_.jpg",
    offers: [
      { seller: "Amazon", price: 379, status: "Amazon product page", url: "https://www.amazon.com/dp/B0915TBQ6T" },
      { seller: "LG", price: 449, status: "LG product page", url: "https://www.lg.com/us/monitors/lg-27gp850-b" },
    ],
  },
  {
    category: "Monitor",
    name: "Dell UltraSharp U2723QE 27-inch 4K USB-C Hub Monitor",
    specs: "27-inch 4K UHD, 60Hz, IPS Black, USB-C 90W, KVM",
    power: 45,
    overview: "Dell UltraSharp U2723QE is a 27-inch 4K productivity monitor with an IPS Black panel for higher contrast, 90W USB-C charging, built-in KVM, and a comprehensive port hub for single-cable setups.",
    oemUrl: "https://www.dell.com/en-us/shop/dell-27-4k-usb-c-hub-monitor-u2723qe/apd/210-bdza",
    image: "https://m.media-amazon.com/images/I/61XvmwaEVUL._AC_SL1100_.jpg",
    offers: [
      { seller: "Amazon", price: 599, status: "Amazon product page", url: "https://www.amazon.com/dp/B09VG6WGB1" },
      { seller: "Dell", price: 749, status: "Dell product page", url: "https://www.dell.com/en-us/shop/dell-27-4k-usb-c-hub-monitor-u2723qe/apd/210-bdza" },
    ],
  },
  {
    category: "Monitor",
    name: "ASUS ProArt Display PA279CRV 27-inch 4K Creator Monitor",
    specs: "27-inch 4K UHD, 60Hz, IPS, 99% DCI-P3, Calman Verified, USB-C 96W",
    power: 50,
    overview: "ASUS ProArt PA279CRV is a 27-inch 4K creator monitor with 99% DCI-P3 coverage, factory Calman Verified color, 96W USB-C charging, and ProArt color profiles for photo, video, and design work.",
    oemUrl: "https://www.asus.com/displays-desktops/monitors/proart/proart-display-pa279crv/",
    image: "https://dlcdnwebimgs.asus.com/gain/fb93a041-490f-4686-ac17-0ee6234fd66f/",
    offers: [
      { seller: "ASUS", price: 469, status: "ASUS product page", url: "https://www.asus.com/displays-desktops/monitors/proart/proart-display-pa279crv/" },
      { seller: "Amazon", price: 429, status: "Amazon product page", url: "https://www.amazon.com/dp/B0BS2VVZNB" },
    ],
  },
  {
    category: "Monitor",
    name: "Gigabyte M27Q rev 2.0 27-inch QHD 170Hz Monitor",
    specs: "27-inch QHD, 170Hz, SS IPS, 1ms, KVM, FreeSync Premium",
    power: 40,
    overview: "Gigabyte M27Q rev 2.0 is a 27-inch QHD gaming monitor with a Super-Speed IPS panel at 170Hz, 1ms response, built-in KVM with USB-C, and AMD FreeSync Premium for tear-free play.",
    oemUrl: "https://www.gigabyte.com/Monitor/M27Q-rev-20",
    image: "https://m.media-amazon.com/images/I/71d5R1RaRBL._AC_SL1500_.jpg",
    offers: [
      { seller: "Amazon", price: 299, status: "Amazon product page", url: "https://www.amazon.com/dp/B0BWZQHFP3" },
    ],
  },
  {
    category: "Monitor",
    name: "Acer Predator X32 FP 32-inch 4K Mini-LED 160Hz Monitor",
    specs: "32-inch 4K UHD, 160Hz, Mini-LED, 1ms, G-Sync Ultimate, HDR 1000",
    power: 110,
    overview: "Acer Predator X32 FP is a 32-inch 4K Mini-LED gaming monitor with 160Hz refresh, 1ms response, NVIDIA G-Sync Ultimate certification, HDR 1000, and quantum-dot color for high-end gaming and creation.",
    oemUrl: "https://www.acer.com/us-en/predator/monitors/x32-fp",
    image: "https://m.media-amazon.com/images/I/71JpPDk9dJL._AC_SL1500_.jpg",
    offers: [
      { seller: "Amazon", price: 1299, status: "Amazon product page", url: "https://www.amazon.com/dp/B0BTC4LCYC" },
    ],
  },
  {
    category: "Monitor",
    name: "BenQ PD3220U 32-inch 4K Designer Monitor",
    specs: "32-inch 4K UHD, 60Hz, IPS, 95% DCI-P3, Thunderbolt 3, KVM",
    power: 55,
    overview: "BenQ PD3220U is a 32-inch 4K designer monitor with an IPS panel, 95% DCI-P3 and 100% sRGB coverage, Thunderbolt 3, built-in KVM, and DualView modes for design and color work.",
    oemUrl: "https://www.benq.com/en-us/monitor/designer/pd3220u.html",
    image: "https://m.media-amazon.com/images/I/71m0bDLZooL._AC_SL1500_.jpg",
    offers: [
      { seller: "Amazon", price: 1199, status: "Amazon product page", url: "https://www.amazon.com/dp/B07VTGW7H8" },
      { seller: "BenQ", price: 1299, status: "BenQ product page", url: "https://www.benq.com/en-us/monitor/designer/pd3220u.html" },
    ],
  },
];

parts.push(...newSegmentParts);

const SHIPS_TO_ISRAEL_RETAILERS = new Set([
  "Amazon",
  "B&H",
  "Bug",
  "Dominator",
  "eBay",
  "Ivory",
  "KSP",
  "Newegg",
  "TMS",
]);

Object.entries(israeliRetailerOffers).forEach(([name, offers]) => {
  const part = parts.find((item) => item.name === name);
  if (!part) return;

  const seen = new Set();
  part.offers = [...offers, ...(part.offers || [])].filter((offer) => {
    const key = `${offer.seller}|${offer.url}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
});

// Extra Amazon US and eBay offers that ship to Israel via Amazon Global
// or eBay Global Shipping. Each entry attaches to an existing part by
// exact name and adds the offer alongside whatever is already there.
const internationalShipsToIsraelOffers = {
  "AMD Ryzen 7 9800X3D 8-Core AM5 Processor": [
    { seller: "Amazon", price: 439, status: "Amazon Global to Israel", url: "https://www.amazon.com/dp/B0DKFMSMYK" },
    { seller: "eBay", price: 408.95, status: "eBay Global Shipping to Israel", url: "https://www.ebay.com/itm/226979575818" },
  ],
  "AMD Ryzen 9 9950X 16-Core AM5 Processor": [
    { seller: "Amazon", price: 498, status: "Amazon Global to Israel", url: "https://www.amazon.com/dp/B0D6NNRBGP" },
    { seller: "eBay", price: 469.99, status: "eBay Global Shipping to Israel", url: "https://www.ebay.com/itm/227350463994" },
  ],
  "Intel Core Ultra 9 285K LGA1851 Processor": [
    { seller: "Amazon", price: 539, status: "Amazon Global to Israel", url: "https://www.amazon.com/dp/B0DFKC99VL" },
  ],
  "Intel Core i7-14700K LGA1700 Processor": [
    { seller: "Amazon", price: 399.99, status: "Amazon Global to Israel", url: "https://www.amazon.com/dp/B0CGJ41C9W" },
  ],
  "Gigabyte GeForce RTX 5080 WINDFORCE OC SFF 16G Graphics Card": [
    { seller: "Amazon", price: 1355.99, status: "Amazon Global to Israel", url: "https://www.amazon.com/dp/B0DS2R7N4F" },
  ],
  "ASUS TUF Gaming GeForce RTX 5070 Ti OC 16GB Graphics Card": [
    { seller: "Amazon", price: 849.99, status: "Amazon Global to Israel", url: "https://www.amazon.com/dp/B0DS6WTXGP" },
  ],
  "ASUS ROG Strix X870E-E Gaming WiFi AM5 ATX Motherboard": [
    { seller: "Amazon", price: 356, status: "Amazon Global to Israel", url: "https://www.amazon.com/dp/B0DDZNZF76" },
  ],
  "MSI MAG X870 Tomahawk WiFi AM5 ATX Motherboard": [
    { seller: "Amazon", price: 209.99, status: "Amazon Global to Israel", url: "https://www.amazon.com/dp/B0DG3HK897" },
  ],
  "Samsung 990 PRO 2TB PCIe 4.0 NVMe M.2 SSD": [
    { seller: "Amazon", price: 399.99, status: "Amazon Global to Israel", url: "https://www.amazon.com/dp/B0BHJJ9Y77" },
    { seller: "eBay", price: 303.99, status: "eBay Global Shipping to Israel", url: "https://www.ebay.com/itm/146214736097" },
  ],
  "Fractal Design North XL RC Charcoal Black TG Case": [
    { seller: "Amazon", price: 219.99, status: "Amazon Global to Israel", url: "https://www.amazon.com/dp/B0DG33HWNM" },
  ],
  "NZXT H7 Flow RGB 2024 Black Mid-Tower Case": [
    { seller: "Amazon", price: 99.99, status: "Amazon Global to Israel", url: "https://www.amazon.com/dp/B0CV4RRBNJ" },
  ],
  "ASUS ROG Strix G16 G614 Gaming Laptop": [
    { seller: "Amazon", price: 1699, status: "Amazon Global to Israel", url: "https://www.amazon.com/dp/B0CRDD79FX" },
  ],
  "MSI Raider GE78 HX 14V Gaming Laptop": [
    { seller: "Amazon", price: 3299, status: "Amazon Global to Israel", url: "https://www.amazon.com/dp/B0CTHXJ29Y" },
  ],
  "Apple MacBook Pro 14 M4 Pro Laptop": [
    { seller: "Amazon", price: 1899, status: "Amazon Global to Israel", url: "https://www.amazon.com/dp/B0DLHRZL59" },
  ],
  "Apple MacBook Air 15 M3 Laptop": [
    { seller: "Amazon", price: 1249, status: "Amazon Global to Israel", url: "https://www.amazon.com/dp/B0CX23V2ZK" },
  ],
  "LG UltraGear 27GR93U-B 27-inch 4K 144Hz Monitor": [
    { seller: "Amazon", price: 599, status: "Amazon Global to Israel", url: "https://www.amazon.com/dp/B0BX1NHX2L" },
  ],
  "Samsung Odyssey OLED G80SD 32-inch 4K 240Hz Monitor": [
    { seller: "Amazon", price: 1299, status: "Amazon Global to Israel", url: "https://www.amazon.com/dp/B0CYR7TG6R" },
  ],
  "ASUS ROG Swift OLED PG27AQDM 27-inch QHD 240Hz Monitor": [
    { seller: "Amazon", price: 899, status: "Amazon Global to Israel", url: "https://www.amazon.com/dp/B0CFFD52L4" },
  ],
  "Alienware AW3423DWF 34-inch QD-OLED Ultrawide Monitor": [
    { seller: "Amazon", price: 799, status: "Amazon Global to Israel", url: "https://www.amazon.com/dp/B0BJZ29ZRX" },
  ],
  "LG UltraGear 27GP850-B 27-inch QHD 165Hz Monitor": [
    { seller: "Amazon", price: 379, status: "Amazon Global to Israel", url: "https://www.amazon.com/dp/B0915TBQ6T" },
  ],
  "Dell UltraSharp U2723QE 27-inch 4K USB-C Hub Monitor": [
    { seller: "Amazon", price: 599, status: "Amazon Global to Israel", url: "https://www.amazon.com/dp/B09VG6WGB1" },
  ],
  "ASUS ProArt Display PA279CRV 27-inch 4K Creator Monitor": [
    { seller: "Amazon", price: 429, status: "Amazon Global to Israel", url: "https://www.amazon.com/dp/B0BS2VVZNB" },
  ],
  "Gigabyte M27Q rev 2.0 27-inch QHD 170Hz Monitor": [
    { seller: "Amazon", price: 299, status: "Amazon Global to Israel", url: "https://www.amazon.com/dp/B0BWZQHFP3" },
  ],
  "Acer Predator X32 FP 32-inch 4K Mini-LED 160Hz Monitor": [
    { seller: "Amazon", price: 1299, status: "Amazon Global to Israel", url: "https://www.amazon.com/dp/B0BTC4LCYC" },
  ],
  "BenQ PD3220U 32-inch 4K Designer Monitor": [
    { seller: "Amazon", price: 1199, status: "Amazon Global to Israel", url: "https://www.amazon.com/dp/B07VTGW7H8" },
  ],
};

Object.entries(internationalShipsToIsraelOffers).forEach(([name, offers]) => {
  const part = parts.find((item) => item.name === name);
  if (!part) return;
  const seen = new Set((part.offers || []).map((offer) => `${offer.seller}|${offer.url}`));
  offers.forEach((offer) => {
    const key = `${offer.seller}|${offer.url}`;
    if (seen.has(key)) return;
    seen.add(key);
    part.offers.push(offer);
  });
});

// Additional Amazon US products that ship to Israel via Amazon Global,
// covering popular PC parts, laptops, and monitors that were not in
// the original curated catalog.
const amazonShipsToIsraelExtras = [
  {
    category: "CPU",
    name: "AMD Ryzen 5 7600 6-Core AM5 Processor",
    socket: "AM5",
    memory: "DDR5",
    power: 65,
    specs: "6 cores, Zen 4, included cooler, value AM5",
    overview: "AMD Ryzen 5 7600 is a 6-core, 12-thread Zen 4 desktop processor for AM5 motherboards. It pairs DDR5 memory support with an included Wraith Stealth cooler, making it a practical entry into AM5 builds.",
    oemUrl: "https://www.amd.com/en/products/processors/desktops/ryzen/7000-series/amd-ryzen-5-7600.html",
    image: "https://m.media-amazon.com/images/I/51hfER1cZVL._AC_SL1500_.jpg",
    offers: [
      { seller: "Amazon", price: 199, status: "Amazon Global to Israel", url: "https://www.amazon.com/dp/B0BBHHT8LY" },
    ],
  },
  {
    category: "CPU",
    name: "Intel Core i5-14600K LGA1700 Processor",
    socket: "LGA1700",
    memory: "DDR5",
    power: 181,
    specs: "14 cores, unlocked, value gaming CPU",
    overview: "Intel Core i5-14600K is an unlocked 14th Gen LGA1700 desktop processor with 14 cores (6P + 8E) and 20 threads, up to 5.3 GHz turbo, and broad DDR4/DDR5 platform support for mainstream gaming.",
    oemUrl: "https://www.intel.com/content/www/us/en/products/sku/236781/intel-core-i514600k-processor-24m-cache-up-to-5-30-ghz/specifications.html",
    image: "https://m.media-amazon.com/images/I/619ytLAytAL._AC_SL1500_.jpg",
    offers: [
      { seller: "Amazon", price: 289.99, status: "Amazon Global to Israel", url: "https://www.amazon.com/dp/B0CGJDKLB8" },
    ],
  },
  {
    category: "GPU",
    name: "MSI GeForce RTX 4070 SUPER 12G Ventus 2X OC Graphics Card",
    power: 220,
    specs: "12GB GDDR6X, dual-fan Ventus cooler, 1440p GPU",
    overview: "MSI GeForce RTX 4070 SUPER Ventus 2X OC is a compact dual-fan RTX 4070 SUPER card with 12GB of GDDR6X memory. It targets 1440p high-refresh gaming with NVIDIA DLSS 3 support.",
    oemUrl: "https://www.msi.com/Graphics-Card/GeForce-RTX-4070-SUPER-12G-VENTUS-2X-OC",
    image: "https://m.media-amazon.com/images/I/81WLA-AAYBL._AC_SL1500_.jpg",
    offers: [
      { seller: "Amazon", price: 599.99, status: "Amazon Global to Israel", url: "https://www.amazon.com/dp/B0CSL9JR74" },
    ],
  },
  {
    category: "GPU",
    name: "ASUS Dual GeForce RTX 4060 Ti OC 8GB Graphics Card",
    power: 165,
    specs: "8GB GDDR6, compact dual-fan 1080p/1440p GPU",
    overview: "ASUS Dual GeForce RTX 4060 Ti OC is a compact dual-fan RTX 4060 Ti card with 8GB of GDDR6 memory, factory overclock, and a 2.5-slot cooler for small and mid-tower 1080p/1440p builds.",
    oemUrl: "https://www.asus.com/motherboards-components/graphics-cards/dual/dual-rtx4060ti-o8g/",
    image: "https://m.media-amazon.com/images/I/81PgK+jHy2L._AC_SL1500_.jpg",
    offers: [
      { seller: "Amazon", price: 399.99, status: "Amazon Global to Israel", url: "https://www.amazon.com/dp/B0C39B85ZW" },
    ],
  },
  {
    category: "Memory",
    name: "G.Skill Trident Z5 Neo RGB 32GB DDR5-6000 CL30 Kit",
    memory: "DDR5",
    power: 8,
    specs: "2x16GB, AMD EXPO, RGB heat spreaders",
    overview: "G.Skill Trident Z5 Neo RGB DDR5-6000 CL30 is a 32GB two-DIMM kit tuned for AMD EXPO platforms with RGB lighting and a sweet-spot speed/latency profile for AM5 gaming builds.",
    oemUrl: "https://www.gskill.com/product/165/390/1665020956/F5-6000J3038F16GX2-TZ5NR",
    image: "https://m.media-amazon.com/images/I/71jvzlqDPHL._AC_SL1500_.jpg",
    offers: [
      { seller: "Amazon", price: 109.99, status: "Amazon Global to Israel", url: "https://www.amazon.com/dp/B0BZSZBRJG" },
    ],
  },
  {
    category: "Storage",
    name: "WD Black SN850X 2TB PCIe 4.0 NVMe M.2 SSD",
    power: 7,
    specs: "2TB, PCIe 4.0, gaming NVMe drive",
    overview: "WD Black SN850X is a PCIe 4.0 NVMe SSD line for high-end gaming and creator desktops. The 2TB model offers high sequential speeds, broad capacity, and optional integrated heatsink versions.",
    oemUrl: "https://www.westerndigital.com/products/internal-drives/wd-black-sn850x-nvme-ssd",
    image: "https://m.media-amazon.com/images/I/71QnG7CR-2L._AC_SL1500_.jpg",
    offers: [
      { seller: "Amazon", price: 169.99, status: "Amazon Global to Israel", url: "https://www.amazon.com/dp/B0B7CQ2CRX" },
    ],
  },
  {
    category: "PSU",
    name: "Corsair RM850e 850W 80+ Gold ATX 3.1 PSU",
    power: 0,
    specs: "850W, ATX 3.1, modular, Gold efficiency",
    overview: "Corsair RM850e is a fully modular 850W ATX 3.1 power supply with 80 PLUS Gold efficiency, native 12V-2x6 connector for modern GPUs, and low-noise fluid bearing fan for quiet operation.",
    oemUrl: "https://www.corsair.com/us/en/p/psu/cp-9020263-na/rm850e-fully-modular-low-noise-atx-power-supply-cp-9020263-na",
    image: "https://m.media-amazon.com/images/I/71nm1Tk-vbL._AC_SL1500_.jpg",
    offers: [
      { seller: "Amazon", price: 119.99, status: "Amazon Global to Israel", url: "https://www.amazon.com/dp/B0CC7K8MXP" },
    ],
  },
  {
    category: "Case",
    name: "Corsair 4000D Airflow Black Mid-Tower Case",
    power: 0,
    specs: "ATX mid-tower, mesh front, clean cable routing",
    overview: "Corsair 4000D Airflow is a mid-tower ATX case with a high-airflow mesh front, RapidRoute cable management, and tool-free side panels for tidy mainstream gaming builds.",
    oemUrl: "https://www.corsair.com/us/en/p/pc-cases/cc-9011200-ww/4000d-airflow-tempered-glass-mid-tower-atx-case-black-cc-9011200-ww",
    image: "https://m.media-amazon.com/images/I/81WqMcdvCnL._AC_SL1500_.jpg",
    offers: [
      { seller: "Amazon", price: 94.99, status: "Amazon Global to Israel", url: "https://www.amazon.com/dp/B08C7BGV3D" },
    ],
  },
  {
    category: "Laptop",
    name: "ASUS ROG Zephyrus G14 GA403 Gaming Laptop",
    specs: "14-inch 3K OLED 120Hz, Ryzen 9 8945HS, RTX 4070, 32GB LPDDR5X",
    power: 180,
    overview: "ASUS ROG Zephyrus G14 GA403 is a 14-inch thin-and-light gaming laptop with AMD Ryzen 8040 Series, GeForce RTX 40 Series graphics, a 3K OLED 120Hz display, and a CNC aluminum chassis.",
    oemUrl: "https://rog.asus.com/laptops/rog-zephyrus/rog-zephyrus-g14-2024/",
    image: "https://dlcdnwebimgs.asus.com/gain/E0275281-F18B-42C3-A025-3331C35A888F",
    offers: [
      { seller: "Amazon", price: 1999, status: "Amazon Global to Israel", url: "https://www.amazon.com/dp/B0CTBSY2KL" },
    ],
  },
  {
    category: "Laptop",
    name: "Lenovo Yoga 9i 14 2-in-1 Laptop",
    specs: "14-inch 4K OLED, Core Ultra 7 155H, 16GB LPDDR5X, 1TB SSD",
    power: 65,
    overview: "Lenovo Yoga 9i 14 is a 14-inch premium 2-in-1 convertible laptop with Intel Core Ultra processors, a 4K OLED touch display, rotating soundbar hinge, and an included pen for creator and productivity use.",
    oemUrl: "https://www.lenovo.com/us/en/p/laptops/yoga/yoga-9-series/yoga-9i-gen-9-14-inch-intel/83b1",
    image: "https://m.media-amazon.com/images/I/71eobUUaTLL._AC_SL1500_.jpg",
    offers: [
      { seller: "Amazon", price: 1499, status: "Amazon Global to Israel", url: "https://www.amazon.com/dp/B0CR4FMHX6" },
    ],
  },
  {
    category: "Monitor",
    name: "Dell G2724D 27-inch QHD 165Hz Gaming Monitor",
    specs: "27-inch QHD, 165Hz, IPS, 1ms, FreeSync Premium",
    power: 32,
    overview: "Dell G2724D is a 27-inch QHD IPS gaming monitor with a 165Hz refresh rate, 1ms response, AMD FreeSync Premium, and a tilt/swivel/height-adjustable stand.",
    oemUrl: "https://www.dell.com/en-us/shop/dell-27-gaming-monitor-g2724d/apd/210-bjcr",
    image: "https://m.media-amazon.com/images/I/61bxHexBkJL._AC_SL1500_.jpg",
    offers: [
      { seller: "Amazon", price: 249.99, status: "Amazon Global to Israel", url: "https://www.amazon.com/dp/B0CSDR6S8B" },
    ],
  },
  {
    category: "Monitor",
    name: "MSI MPG 321URX 32-inch QD-OLED 240Hz Monitor",
    specs: "32-inch 4K QD-OLED, 240Hz, 0.03ms, HDMI 2.1, USB-C",
    power: 100,
    overview: "MSI MPG 321URX is a 32-inch 4K QD-OLED gaming monitor with 240Hz refresh, 0.03ms response, HDMI 2.1 with VRR, USB-C, and MSI OLED Care features.",
    oemUrl: "https://www.msi.com/Monitor/MPG-321URX-QD-OLED",
    image: "https://m.media-amazon.com/images/I/71qq+IxYLrL._AC_SL1500_.jpg",
    offers: [
      { seller: "Amazon", price: 949.99, status: "Amazon Global to Israel", url: "https://www.amazon.com/dp/B0CTPWZTL2" },
    ],
  },
];

parts.push(...amazonShipsToIsraelExtras);

// Categories where Amazon Global and eBay Global Shipping commonly
// refuse delivery to Israel (oversized, heavy, high-value, regulated).
// Offers from those sellers are stripped for these categories so the
// catalog never advertises a retailer that will reject the order at
// checkout.
const INTL_RETAILER_BLOCKED_CATEGORIES = {
  Amazon: new Set(["GPU", "Prebuilt", "PSU", "Case"]),
  eBay: new Set(["GPU", "Prebuilt", "PSU", "Case", "Monitor", "Laptop"]),
};

for (let index = parts.length - 1; index >= 0; index -= 1) {
  const part = parts[index];
  part.offers = (part.offers || []).filter((offer) => {
    if (!SHIPS_TO_ISRAEL_RETAILERS.has(offer.seller)) return false;
    const blocked = INTL_RETAILER_BLOCKED_CATEGORIES[offer.seller];
    if (blocked && blocked.has(part.category)) return false;
    return true;
  });
  if (!part.offers.length) parts.splice(index, 1);
}

const builderCategories = ["CPU", "GPU", "Motherboard", "Memory", "Storage", "PSU", "Case"];

function storedTheme() {
  try {
    return localStorage.getItem("ezpc-theme");
  } catch (error) {
    return null;
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem("ezpc-theme", theme);
  } catch (error) {
    // The toggle still works for the current page if storage is unavailable.
  }
}

function applyTheme(theme) {
  const nextTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = nextTheme;
  if (document.body) {
    document.body.dataset.theme = nextTheme;
  }
  saveTheme(nextTheme);

  document.querySelectorAll("[data-theme-toggle]").forEach((toggle) => {
    const isDark = nextTheme === "dark";
    toggle.dataset.activeTheme = nextTheme;
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  });
}

function initThemeToggle() {
  applyTheme(storedTheme() || document.documentElement.dataset.theme || "light");

  document.querySelectorAll("[data-theme-toggle]").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const isDark = document.documentElement.dataset.theme === "dark";
      applyTheme(isDark ? "light" : "dark");
    });
  });
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function productUrl(part) {
  return `product.html?id=${slugify(part.name)}`;
}

function productImage(part) {
  return window.productImageMap?.[slugify(part.name)] || part.image || "";
}

function imageErrorHandler() {
  return "this.replaceWith(Object.assign(document.createElement('span'),{className:this.className+' image-fallback',textContent:'Image unavailable'}))";
}

function productThumb(part, className = "part-thumb") {
  const image = productImage(part);
  return image
    ? `<img class="${className}" src="${image}" alt="${part.name}" loading="lazy" onerror="${imageErrorHandler()}" />`
    : `<span class="${className} part-thumb-missing" aria-label="Image pending for ${part.name}">Image pending</span>`;
}

function offerCurrency(offer) {
  return offer?.currency || "USD";
}

function offerUsd(offer) {
  if (Number.isFinite(offer?.priceUsd)) return offer.priceUsd;
  if (!Number.isFinite(offer?.price)) return Number.NaN;
  return offer.price;
}

const ISRAEL_VAT_RATE = 0.18;
const ISRAELI_RETAILERS = new Set(["Bug", "Dominator", "Ivory", "KSP", "TMS"]);
const DOMESTIC_SHIPPING_USD = {
  Case: 20,
  Laptop: 15,
  Monitor: 20,
  Prebuilt: 35,
};
const INTERNATIONAL_SHIPPING_USD = {
  CPU: 25,
  GPU: 45,
  Motherboard: 45,
  Memory: 25,
  Storage: 25,
  PSU: 55,
  Case: 90,
  Prebuilt: 180,
  Laptop: 55,
  Monitor: 90,
};

function roundMoney(value) {
  return Math.round(value * 100) / 100;
}

function isIsraeliRetailer(offer) {
  return ISRAELI_RETAILERS.has(offer?.seller);
}

function shippingEstimateUsd(part, offer) {
  if (!Number.isFinite(offerUsd(offer))) return Number.NaN;
  const table = isIsraeliRetailer(offer) ? DOMESTIC_SHIPPING_USD : INTERNATIONAL_SHIPPING_USD;
  return table[part.category] ?? (isIsraeliRetailer(offer) ? 10 : 45);
}

function landedPriceUsd(part, offer, baseOverride) {
  const base = Number.isFinite(baseOverride) ? baseOverride : offerUsd(offer);
  if (!Number.isFinite(base)) return Number.NaN;
  const shipping = shippingEstimateUsd(part, offer);
  if (!Number.isFinite(shipping)) return Number.NaN;
  const taxable = isIsraeliRetailer(offer) ? 0 : (base + shipping) * ISRAEL_VAT_RATE;
  return roundMoney(base + shipping + taxable);
}

function pricedOffers(part) {
  return part.offers.filter((offer) => Number.isFinite(landedPriceUsd(part, offer)));
}

function bestOffer(part) {
  return [...pricedOffers(part)].sort((a, b) => landedPriceUsd(part, a) - landedPriceUsd(part, b))[0] || part.offers[0];
}

const CATALOG_ROWS = 3;
const catalogState = {
  category: "All",
  sort: "featured",
  filters: {},
  visibleCount: 9,
};

function catalogColumnCount() {
  const grid = document.getElementById("productGrid");
  if (!grid) return 3;
  const tracks = getComputedStyle(grid).gridTemplateColumns.split(" ").filter(Boolean);
  return Math.max(tracks.length, 1);
}

function catalogPageSize() {
  return catalogColumnCount() * CATALOG_ROWS;
}

function partPrice(part) {
  return landedPriceUsd(part, bestOffer(part));
}

function partText(part) {
  return `${part.name} ${part.specs || ""} ${part.overview || ""}`;
}

function manufacturerOf(part) {
  const name = part.name;
  const brandPatterns = [
    ["be quiet!", /^be quiet!/i],
    ["Cooler Master", /^Cooler Master/i],
    ["Fractal Design", /^Fractal Design/i],
    ["G.Skill", /^G\.Skill/i],
    ["Lian Li", /^Lian Li/i],
    ["Silicon Power", /^Silicon Power/i],
    ["TeamGroup", /^TeamGroup/i],
    ["Western Digital", /^(WD|Western Digital)\b/i],
    ["SeaSonic", /^SeaSonic|^Seasonic/i],
    ["SanDisk", /^SanDisk/i],
    ["HYTE", /^Hyte|^HYTE/i],
  ];
  const match = brandPatterns.find(([, pattern]) => pattern.test(name));
  return match ? match[0] : name.split(" ")[0];
}

function retailersOf(part) {
  return [...new Set((part.offers || []).map((offer) => offer.seller).filter(Boolean))];
}

function filterValues(part, definition) {
  const value = definition.value(part);
  return Array.isArray(value) ? value.filter(Boolean) : [value].filter(Boolean);
}

function matchValue(text, patterns) {
  const match = patterns.find(({ pattern }) => pattern.test(text));
  return match?.value || "";
}

function cpuSeries(part) {
  const text = partText(part);
  return matchValue(text, [
    { value: "AMD Ryzen 9000 Series", pattern: /Ryzen\s+[579]\s+9\d{3}X?3?D?/i },
    { value: "AMD Ryzen 8000 Series", pattern: /Ryzen\s+[579]\s+8\d{3}/i },
    { value: "AMD Ryzen 7000 Series", pattern: /Ryzen\s+[579]\s+7\d{3}/i },
    { value: "AMD Ryzen 5000 Series", pattern: /Ryzen\s+[579]\s+5\d{3}/i },
    { value: "Intel Core Ultra 200 Series", pattern: /Core Ultra\s+\d+\s+2\d{2}/i },
    { value: "Intel 14th Gen Core", pattern: /i[579]-14\d{3}/i },
    { value: "Intel 12th Gen Core", pattern: /i[579]-12\d{3}/i },
  ]);
}

function gpuSeries(part) {
  const text = partText(part);
  return matchValue(text, [
    { value: "NVIDIA RTX 5000 Series", pattern: /RTX\s+50\d{2}/i },
    { value: "NVIDIA RTX 4000 Series", pattern: /RTX\s+40\d{2}/i },
    { value: "AMD Radeon RX 9000 Series", pattern: /RX\s+9\d{3}/i },
    { value: "AMD Radeon RX 7000 Series", pattern: /RX\s+7\d{3}/i },
  ]);
}

function storageCapacity(part) {
  const text = partText(part);
  const tb = text.match(/(\d+(?:\.\d+)?)\s*TB/i);
  if (tb) return `${Number(tb[1])}TB`;
  const gb = text.match(/(\d{3,4})\s*GB/i);
  return gb ? `${gb[1]}GB` : "";
}

function memoryCapacity(part) {
  const match = partText(part).match(/(\d+)\s*GB/i);
  return match ? `${match[1]}GB` : "";
}

function memorySpeed(part) {
  const match = partText(part).match(/DDR[45][-\s]?(\d{4,5})/i);
  return match ? `${match[1]} MT/s` : "";
}

function casLatency(part) {
  const match = partText(part).match(/\bCL\s?(\d{2})\b/i);
  return match ? `CL${match[1]}` : "";
}

function gpuVram(part) {
  const match = partText(part).match(/(\d+)\s*GB\s+GDDR/i);
  return match ? `${match[1]}GB` : "";
}

function chipset(part) {
  return matchValue(partText(part), [
    { value: "X870E", pattern: /\bX870E\b/i },
    { value: "X870", pattern: /\bX870\b/i },
    { value: "B850", pattern: /\bB850\b/i },
    { value: "B650", pattern: /\bB650(E)?\b/i },
    { value: "A620", pattern: /\bA620\b/i },
    { value: "Z890", pattern: /\bZ890\b/i },
    { value: "Z790", pattern: /\bZ790\b/i },
    { value: "B760", pattern: /\bB760\b/i },
  ]);
}

function formFactor(part) {
  return matchValue(partText(part), [
    { value: "Mini-ITX", pattern: /Mini[-\s]?ITX/i },
    { value: "Micro-ATX", pattern: /Micro[-\s]?ATX|mATX/i },
    { value: "E-ATX", pattern: /\bE-ATX\b/i },
    { value: "ATX", pattern: /\bATX\b/i },
    { value: "SFX", pattern: /\bSFX\b/i },
  ]);
}

function storageInterface(part) {
  return matchValue(partText(part), [
    { value: "PCIe 5.0 NVMe", pattern: /PCIe\s*5\.0|Gen\s*5/i },
    { value: "PCIe 4.0 NVMe", pattern: /PCIe\s*4\.0|Gen\s*4/i },
    { value: "PCIe 3.0 NVMe", pattern: /PCIe\s*3\.0|Gen\s*3/i },
    { value: "SATA", pattern: /\bSATA\b/i },
    { value: "USB4 / Thunderbolt", pattern: /USB4|Thunderbolt/i },
    { value: "USB 3.x", pattern: /USB\s*3/i },
  ]);
}

function wattage(part) {
  const match = partText(part).match(/(\d{3,4})\s*W/i);
  return match ? `${match[1]}W` : "";
}

function psuEfficiency(part) {
  return matchValue(partText(part), [
    { value: "80+ Platinum", pattern: /Platinum/i },
    { value: "80+ Gold", pattern: /Gold/i },
    { value: "80+ Bronze", pattern: /Bronze/i },
  ]);
}

function caseStyle(part) {
  return matchValue(partText(part), [
    { value: "Full tower", pattern: /Full[-\s]?Tower|North XL/i },
    { value: "Mid tower", pattern: /Mid[-\s]?Tower|Compact/i },
    { value: "Small form factor", pattern: /Mini[-\s]?ITX|SFF|A4-H2O|Terra/i },
    { value: "Dual chamber", pattern: /Dual[-\s]?Chamber|O11|H9|NV/i },
    { value: "Open showcase", pattern: /showcase|curved glass|panoramic/i },
  ]);
}

function caseColor(part) {
  return matchValue(partText(part), [
    { value: "White", pattern: /\bWhite\b|Snow/i },
    { value: "Black", pattern: /\bBlack\b|Charcoal/i },
    { value: "Silver / Gray", pattern: /\bSilver\b|\bGrey\b|\bGray\b/i },
    { value: "Blue", pattern: /\bBlue\b/i },
    { value: "Beige", pattern: /\bBeige\b|Jade/i },
  ]);
}

function seriesOf(part) {
  if (part.category === "CPU") return cpuSeries(part);
  if (part.category === "GPU") return gpuSeries(part);
  if (part.category === "Motherboard") return chipset(part);
  if (part.category === "Memory") return part.memory || matchValue(partText(part), [{ value: "DDR5", pattern: /DDR5/i }, { value: "DDR4", pattern: /DDR4/i }]);
  if (part.category === "Storage") return storageInterface(part);
  if (part.category === "PSU") return psuEfficiency(part);
  if (part.category === "Case") return caseStyle(part);
  return "";
}

function filterDefinitions(category) {
  const definitions = [
    { key: "manufacturer", label: "Manufacturer", value: manufacturerOf },
    { key: "retailer", label: "Retailer", value: retailersOf },
    { key: "series", label: category === "All" ? "Series / type" : `${category} series`, value: seriesOf },
  ];
  const categoryDefinitions = {
    CPU: [
      { key: "socket", label: "Socket", value: (part) => part.socket || "" },
      { key: "memory", label: "Memory platform", value: (part) => part.memory || "" },
    ],
    GPU: [{ key: "vram", label: "VRAM", value: gpuVram }],
    Motherboard: [
      { key: "socket", label: "Socket", value: (part) => part.socket || "" },
      { key: "memory", label: "Memory", value: (part) => part.memory || "" },
      { key: "formFactor", label: "Form factor", value: formFactor },
    ],
    Memory: [
      { key: "memoryType", label: "DDR type", value: (part) => part.memory || "", always: true },
      { key: "capacity", label: "Capacity", value: memoryCapacity },
      { key: "speed", label: "Speed", value: memorySpeed },
      { key: "cas", label: "Latency", value: casLatency },
    ],
    Storage: [
      { key: "capacity", label: "Capacity", value: storageCapacity },
      { key: "interface", label: "Interface", value: storageInterface },
    ],
    PSU: [
      { key: "wattage", label: "Wattage", value: wattage },
      { key: "efficiency", label: "Efficiency", value: psuEfficiency },
      { key: "standard", label: "Standard", value: (part) => (/\bATX\s*3\.1\b/i.test(partText(part)) ? "ATX 3.1" : /\bATX\s*3\.0\b/i.test(partText(part)) ? "ATX 3.0" : formFactor(part)) },
    ],
    Case: [
      { key: "caseStyle", label: "Case style", value: caseStyle },
      { key: "color", label: "Color", value: caseColor },
    ],
  };
  return category === "All" ? definitions : [...definitions, ...(categoryDefinitions[category] || [])];
}

function optionSort(a, b) {
  const numberA = Number((a.match(/\d+(?:\.\d+)?/) || [Number.NaN])[0]);
  const numberB = Number((b.match(/\d+(?:\.\d+)?/) || [Number.NaN])[0]);
  if (Number.isFinite(numberA) && Number.isFinite(numberB) && numberA !== numberB) return numberA - numberB;
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
}

function categoryBaseParts() {
  return catalogState.category === "All" ? parts : parts.filter((part) => part.category === catalogState.category);
}

function selectedFilterDefs() {
  return filterDefinitions(catalogState.category).filter((definition) => {
    const options = [...new Set(categoryBaseParts().flatMap((part) => filterValues(part, definition)))];
    return definition.always ? options.length > 0 : options.length > 1;
  });
}

function partMatchesCatalogFilters(part, defs, ignoredKey = "") {
  const price = partPrice(part);
  const minPrice = Number(catalogState.filters.minPrice);
  const maxPrice = Number(catalogState.filters.maxPrice);

  if (ignoredKey !== "minPrice" && Number.isFinite(minPrice) && catalogState.filters.minPrice && (!Number.isFinite(price) || price < minPrice)) return false;
  if (ignoredKey !== "maxPrice" && Number.isFinite(maxPrice) && catalogState.filters.maxPrice && (!Number.isFinite(price) || price > maxPrice)) return false;

  return defs.every((definition) => {
    if (definition.key === ignoredKey) return true;
    const selected = catalogState.filters[definition.key];
    return !selected || filterValues(part, definition).includes(selected);
  });
}

function availableOptionsFor(definition, defs) {
  return [
    ...new Set(
      categoryBaseParts()
        .filter((part) => partMatchesCatalogFilters(part, defs, definition.key))
        .flatMap((part) => filterValues(part, definition)),
    ),
  ].sort(optionSort);
}

function compareAt(part) {
  const offer = bestOffer(part);
  if (!offer) return null;
  if (Number.isFinite(offer.was)) return { price: landedPriceUsd(part, offer, offer.was), currency: offerCurrency(offer) };
  const price = offer.price;
  return offerCurrency(offer) === "USD" && Number.isFinite(price) ? { price: landedPriceUsd(part, offer, Math.round(price * 1.12)), currency: "USD" } : null;
}

function compareAtUsd(part) {
  const was = compareAt(part);
  if (!was) return Number.NaN;
  return was.price;
}

function dealSavingsUsd(part) {
  const wasUsd = compareAtUsd(part);
  const priceUsd = partPrice(part);
  return Number.isFinite(wasUsd) && Number.isFinite(priceUsd) ? wasUsd - priceUsd : 0;
}

function formatCurrencyAmount(value, currency = "USD") {
  if (!Number.isFinite(value)) return "Check price";
  return new Intl.NumberFormat(currency === "ILS" ? "he-IL" : "en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: currency === "ILS" ? 0 : value % 1 ? 2 : 0,
  }).format(value);
}

function formatMoney(value) {
  return formatCurrencyAmount(value, "USD");
}

function formatOfferPrice(part, offer) {
  return offer ? formatCurrencyAmount(landedPriceUsd(part, offer), "USD") : "Check price";
}

function wasMarkup(value) {
  if (!value) return "";
  if (Number.isFinite(value)) return `<span class="was">${formatMoney(value)}</span>`;
  return Number.isFinite(value.price) ? `<span class="was">${formatCurrencyAmount(value.price, value.currency)}</span>` : "";
}

function offerLinks(part, compact = false) {
  return part.offers
    .map(
      (offer) => `<a class="seller-link" href="${offer.url}" target="_blank" rel="noopener noreferrer" title="${offer.status} at ${offer.seller}">
        <span>${offer.seller}</span>
        <strong>${formatOfferPrice(part, offer)}</strong>
      </a>`,
    )
    .join("");
}

function lowestOfferBadge(part) {
  const offer = bestOffer(part);
  return `<div class="lowest-price">Lowest landed price to Israel: <strong>${formatOfferPrice(part, offer)}</strong> at ${offer.seller}</div>`;
}

function cheapestOfferLink(part) {
  const offer = bestOffer(part);
  if (!offer) return "";
  const priceLabel = Number.isFinite(offer.price) ? formatOfferPrice(part, offer) : "Check";
  return `<a class="seller-link summary-seller-link" href="${offer.url}" target="_blank" rel="noopener noreferrer" title="${offer.status} at ${offer.seller}">
    <span class="seller-link-meta">
      <span class="seller-link-category">${part.category}</span>
      <span class="seller-link-name">${offer.seller}</span>
    </span>
    <strong>${priceLabel}</strong>
  </a>`;
}

let motionObserver;

function applyMotion(root = document) {
  const targets = root.querySelectorAll(".builder-section, .category-card, .deal-card, .product-card, .slot, .summary, .retailer-row");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    targets.forEach((target) => target.classList.add("in-view"));
    return;
  }

  motionObserver ||= new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in-view");
        motionObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px" },
  );

  targets.forEach((target, index) => {
    target.classList.add("reveal-item");
    target.style.setProperty("--reveal-delay", `${Math.min(index % 8, 7) * 42}ms`);
    motionObserver.observe(target);
  });
}

function initPressMotion() {
  document.addEventListener("pointerdown", (event) => {
    const target = event.target.closest(".button, .seller-link, .picker-trigger, .picker-option, .select-picker-trigger, .select-picker-option, .category-card, .deal-card, .product-card, .load-more");
    if (!target) return;
    target.classList.add("is-pressing");
    window.setTimeout(() => target.classList.remove("is-pressing"), 180);
  });
}

function selectPickerLabel(select) {
  const label = select.closest(".filter-field")?.querySelector("span")?.textContent?.trim();
  return label || select.getAttribute("aria-label") || "Menu";
}

function syncSelectPicker(select) {
  const picker = select.nextElementSibling?.classList.contains("select-picker") ? select.nextElementSibling : null;
  if (!picker) return;
  const selected = select.selectedOptions[0] || select.options[0];
  picker.querySelector(".select-picker-trigger strong").textContent = selected?.textContent || "Choose";
  picker.querySelector(".select-picker-trigger span").textContent = selectPickerLabel(select);
  picker.querySelectorAll(".select-picker-option").forEach((option) => {
    option.setAttribute("aria-selected", String(option.dataset.selectValue === select.value));
  });
}

function closeSelectPickers() {
  document.querySelectorAll(".select-picker.is-open").forEach((picker) => {
    picker.classList.remove("is-open");
    picker.querySelector(".select-picker-trigger").setAttribute("aria-expanded", "false");
  });
}

function enhanceSelectPickers(root = document) {
  root.querySelectorAll("select:not(.native-builder-select)").forEach((select) => {
    if (select.dataset.selectPickerReady === "true") {
      syncSelectPicker(select);
      return;
    }

    select.dataset.selectPickerReady = "true";
    select.classList.add("native-select-picker");
    const picker = document.createElement("div");
    picker.className = "select-picker";
    picker.innerHTML = `<button class="select-picker-trigger" type="button" aria-haspopup="listbox" aria-expanded="false">
      <span></span>
      <strong></strong>
      <i class="picker-caret" aria-hidden="true"></i>
    </button>
    <div class="select-picker-menu" role="listbox"></div>`;
    select.insertAdjacentElement("afterend", picker);

    const trigger = picker.querySelector(".select-picker-trigger");
    const menu = picker.querySelector(".select-picker-menu");
    menu.id = `${select.id || `select-${Math.random().toString(36).slice(2)}`}-picker-menu`;
    trigger.setAttribute("aria-controls", menu.id);

    const rebuild = () => {
      menu.innerHTML = [...select.options]
        .map((option) => `<button class="select-picker-option" type="button" role="option" data-select-value="${option.value}">
          <span>${option.textContent}</span>
        </button>`)
        .join("");
      menu.querySelectorAll(".select-picker-option").forEach((option) => {
        option.addEventListener("click", () => {
          select.value = option.dataset.selectValue;
          select.dispatchEvent(new Event("change", { bubbles: true }));
          closeSelectPickers();
          syncSelectPicker(select);
        });
      });
      syncSelectPicker(select);
    };

    trigger.addEventListener("click", () => {
      const willOpen = !picker.classList.contains("is-open");
      closeSelectPickers();
      closePickers();
      picker.classList.toggle("is-open", willOpen);
      trigger.setAttribute("aria-expanded", String(willOpen));
    });

    trigger.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeSelectPickers();
    });

    select.addEventListener("change", () => syncSelectPicker(select));
    rebuild();
  });
}

function renderCategories() {
  const categories = [...new Set(parts.map((part) => part.category))];
  const grid = document.getElementById("categoryGrid");
  grid.innerHTML = categories
    .map((category) => {
      const count = parts.filter((part) => part.category === category).length;
      return `<a class="category-card" href="#catalog" data-filter-link="${category}">
        <h3>${category}</h3>
        <p>${categoryDescriptions[category]}</p>
        <strong>${count} verified models</strong>
      </a>`;
    })
    .join("");

  document.querySelectorAll("[data-filter-link]").forEach((link) => {
    link.addEventListener("click", () => {
      catalogState.category = link.dataset.filterLink;
      catalogState.filters = {};
      document.getElementById("categoryFilter").value = catalogState.category;
      syncSelectPicker(document.getElementById("categoryFilter"));
      renderDynamicFilters();
      renderProducts();
    });
  });
  applyMotion(grid);
}

function renderHeroDeals() {
  const market = document.getElementById("heroMarket");
  if (!market) return;

  const candidates = parts
    .filter((part) => Number.isFinite(partPrice(part)))
    .map((part) => {
      const offer = bestOffer(part);
      const was = compareAt(part);
      return { part, offer, was, savings: dealSavingsUsd(part) };
    })
    .sort((a, b) => b.savings - a.savings)
    .slice(0, 6);

  market.innerHTML = candidates
    .map(({ part, offer, was }) => {
      const showWas = dealSavingsUsd(part) > 0;
      return `<a class="hero-part" href="${productUrl(part)}">
        <img src="${productImage(part)}" alt="${part.name}" />
        <span>${part.category}</span>
        <strong>${part.name}</strong>
        <em>${formatOfferPrice(part, offer)}${showWas ? ` <s>${formatCurrencyAmount(was.price, was.currency)}</s>` : ""}</em>
      </a>`;
    })
    .join("");
}

function renderDeals() {
  const deals = [...parts]
    .filter((part) => Number.isFinite(partPrice(part)))
    .sort((a, b) => dealSavingsUsd(b) - dealSavingsUsd(a))
    .slice(0, 6);
  const grid = document.getElementById("dealGrid");
  grid.innerHTML = deals
    .map((part) => {
      const offer = bestOffer(part);
      const was = compareAt(part);
      return `<article class="deal-card">
        <div class="deal-head">
          <a class="deal-image" href="${productUrl(part)}">${productThumb(part)}</a>
          <div>
            <span class="deal-tag">Best verified: ${offer.seller}</span>
            <h3><a href="${productUrl(part)}">${part.name}</a></h3>
          </div>
        </div>
        <p>${part.specs}</p>
        <div class="price-row">
          <span class="price">${formatOfferPrice(part, offer)}</span>
          ${wasMarkup(was)}
        </div>
        ${lowestOfferBadge(part)}
        <div class="seller-row">${offerLinks(part, true)}<a class="seller-link details-link" href="${productUrl(part)}"><span>Details</span><strong>View</strong></a></div>
      </article>`;
    })
    .join("");
  applyMotion(grid);
}

function renderFilter() {
  const categories = ["All", ...new Set(parts.map((part) => part.category))];
  const filter = document.getElementById("categoryFilter");
  const sort = document.getElementById("sortFilter");
  filter.innerHTML = categories.map((category) => `<option value="${category}">${category}</option>`).join("");
  filter.value = catalogState.category;
  sort.value = catalogState.sort;

  filter.addEventListener("change", () => {
    catalogState.category = filter.value;
    catalogState.filters = {};
    renderDynamicFilters();
    renderProducts();
  });

  sort.addEventListener("change", () => {
    catalogState.sort = sort.value;
    renderProducts();
  });

  document.getElementById("clearFilters").addEventListener("click", () => {
    catalogState.filters = {};
    renderDynamicFilters();
    renderProducts();
  });

  enhanceSelectPickers(document.querySelector(".catalog-heading"));
  renderDynamicFilters();
}

function renderDynamicFilters() {
  const panel = document.getElementById("filterPanel");
  if (!panel) return;

  const defs = selectedFilterDefs();
  const validKeys = new Set(["minPrice", "maxPrice", ...defs.map((definition) => definition.key)]);
  Object.keys(catalogState.filters).forEach((key) => {
    if (!validKeys.has(key)) delete catalogState.filters[key];
  });

  const base = categoryBaseParts();
  defs.forEach((definition) => {
    const options = availableOptionsFor(definition, defs);
    if (catalogState.filters[definition.key] && !options.includes(catalogState.filters[definition.key])) {
      delete catalogState.filters[definition.key];
    }
  });

  const priceBase = base.filter((part) => partMatchesCatalogFilters(part, defs, "minPrice"));
  const prices = priceBase.map(partPrice).filter(Number.isFinite);
  const min = prices.length ? Math.floor(Math.min(...prices)) : 0;
  const max = prices.length ? Math.ceil(Math.max(...prices)) : 0;

  panel.innerHTML = `<div class="filter-grid">
    <div class="filter-field price-filter">
      <span>Landed price to Israel</span>
      <div class="price-inputs">
        <input id="minPriceFilter" type="number" inputmode="numeric" min="${min}" max="${max}" placeholder="${formatMoney(min)}" value="${catalogState.filters.minPrice || ""}" aria-label="Minimum price" />
        <input id="maxPriceFilter" type="number" inputmode="numeric" min="${min}" max="${max}" placeholder="${formatMoney(max)}" value="${catalogState.filters.maxPrice || ""}" aria-label="Maximum price" />
      </div>
    </div>
    ${defs
      .map((definition) => {
        const options = availableOptionsFor(definition, defs);
        return `<label class="filter-field">
          <span>${definition.label}</span>
          <select data-catalog-filter="${definition.key}" aria-label="${definition.label}">
            <option value="">Any</option>
            ${options.map((option) => `<option value="${option}" ${catalogState.filters[definition.key] === option ? "selected" : ""}>${option}</option>`).join("")}
          </select>
        </label>`;
      })
      .join("")}
  </div>`;

  panel.querySelectorAll("[data-catalog-filter]").forEach((select) => {
    select.addEventListener("change", () => {
      if (select.value) catalogState.filters[select.dataset.catalogFilter] = select.value;
      else delete catalogState.filters[select.dataset.catalogFilter];
      renderDynamicFilters();
      renderProducts();
    });
  });

  ["minPrice", "maxPrice"].forEach((key) => {
    const input = document.getElementById(`${key}Filter`);
    input.addEventListener("input", () => {
      if (input.value) catalogState.filters[key] = input.value;
      else delete catalogState.filters[key];
      renderProducts();
    });
  });

  enhanceSelectPickers(panel);
}

function filteredProducts() {
  const defs = selectedFilterDefs();
  const visible = categoryBaseParts().filter((part) => partMatchesCatalogFilters(part, defs));

  return visible.sort((a, b) => {
    if (catalogState.sort === "price-asc") return (Number.isFinite(partPrice(a)) ? partPrice(a) : Infinity) - (Number.isFinite(partPrice(b)) ? partPrice(b) : Infinity);
    if (catalogState.sort === "price-desc") return (Number.isFinite(partPrice(b)) ? partPrice(b) : -Infinity) - (Number.isFinite(partPrice(a)) ? partPrice(a) : -Infinity);
    if (catalogState.sort === "name-asc") return a.name.localeCompare(b.name, undefined, { sensitivity: "base" });
    return parts.indexOf(a) - parts.indexOf(b);
  });
}

function renderProducts({ append = false } = {}) {
  const pageSize = catalogPageSize();
  if (!append) catalogState.visibleCount = pageSize;
  else if (catalogState.visibleCount < pageSize) catalogState.visibleCount = pageSize;
  const visible = filteredProducts();
  const grid = document.getElementById("productGrid");
  const loadMoreWrap = document.getElementById("loadMoreWrap");
  const baseCount = categoryBaseParts().length;
  const label = catalogState.category === "All" ? "parts" : `${catalogState.category.toLowerCase()} parts`;
  const shownCount = Math.min(catalogState.visibleCount, visible.length);
  document.getElementById("resultCount").textContent = `Showing ${shownCount} of ${baseCount} ${label}`;

  if (loadMoreWrap) loadMoreWrap.innerHTML = "";

  if (!visible.length) {
    grid.innerHTML = `<div class="empty-state">
      <strong>No exact matches</strong>
      <span>Try widening the price range or clearing one filter.</span>
    </div>`;
    applyMotion(grid);
    return;
  }

  const shown = visible.slice(0, catalogState.visibleCount);
  grid.innerHTML = shown
    .map((part) => {
      const offer = bestOffer(part);
      const was = compareAt(part);
      return `<article class="product-card">
        <div class="product-card-head">
          <a class="product-image" href="${productUrl(part)}">${productThumb(part)}</a>
          <div class="product-head-copy">
            <div class="product-top">
              <span class="category-pill">${part.category}</span>
              <span class="discount">Verified ${verifiedAt}</span>
            </div>
            <h3><a href="${productUrl(part)}">${part.name}</a></h3>
          </div>
        </div>
        <p>${part.specs}</p>
        <div class="specs">${[part.socket, part.memory, part.power ? `${part.power}W draw` : "", `${part.offers.length} product-page offer${part.offers.length === 1 ? "" : "s"}`].filter(Boolean).join(" | ")}</div>
        <div class="price-row">
          <span class="price">${formatOfferPrice(part, offer)}</span>
          ${wasMarkup(was)}
        </div>
        ${lowestOfferBadge(part)}
        <div class="seller-row">${offerLinks(part, true)}<a class="seller-link details-link" href="${productUrl(part)}"><span>Details</span><strong>View</strong></a></div>
      </article>`;
    })
    .join("");
  applyMotion(grid);

  const remaining = visible.length - shown.length;
  if (remaining > 0 && loadMoreWrap) {
    const nextBatch = Math.min(remaining, pageSize);
    loadMoreWrap.innerHTML = `<button class="load-more" type="button" id="loadMoreBtn" aria-label="Load ${nextBatch} more parts, ${remaining} remaining">
      <span class="load-more-label">Load ${nextBatch} more</span>
      <span class="load-more-meta" aria-live="polite">${remaining} part${remaining === 1 ? "" : "s"} remaining</span>
      <span class="load-more-glow" aria-hidden="true"></span>
    </button>`;
    document.getElementById("loadMoreBtn").addEventListener("click", () => {
      catalogState.visibleCount += catalogPageSize();
      renderProducts({ append: true });
      const focusTarget = document.querySelectorAll("#productGrid .product-card")[shown.length];
      focusTarget?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
}

function renderBuilder() {
  const slots = document.getElementById("builderSlots");
  slots.innerHTML = builderCategories
    .map((category) => {
      const categoryParts = parts.filter((part) => part.category === category);
      const options = categoryParts.map((part) => `<option value="${part.name}">${part.name}</option>`).join("");
      const menuOptions = [
        `<button class="picker-option" type="button" role="option" data-picker-value="">
          <span class="picker-empty-thumb">${category.slice(0, 2).toUpperCase()}</span>
          <span class="picker-option-copy">
            <strong>Choose ${category}</strong>
            <span>No ${category.toLowerCase()} selected</span>
          </span>
        </button>`,
        ...categoryParts.map(
          (part) => `<button class="picker-option" type="button" role="option" data-picker-value="${part.name}">
            ${productThumb(part, "picker-thumb")}
            <span class="picker-option-copy">
              <strong>${part.name}</strong>
              <span>${formatOfferPrice(part, bestOffer(part))} at ${bestOffer(part).seller}</span>
            </span>
          </button>`,
        ),
      ].join("");
      return `<div class="slot">
        <label for="slot-${category}">${category}</label>
        <div class="part-picker" data-picker-category="${category}">
          <select class="native-builder-select" id="slot-${category}" data-builder-category="${category}" tabindex="-1" aria-hidden="true">
          <option value="">Choose ${category}</option>
          ${options}
          </select>
          <button class="picker-trigger" type="button" aria-haspopup="listbox" aria-expanded="false" aria-controls="picker-menu-${category}">
            <span class="picker-trigger-media"><span class="picker-empty-thumb">${category.slice(0, 2).toUpperCase()}</span></span>
            <span class="picker-trigger-copy">
              <strong>Choose ${category}</strong>
              <span>Open product picker</span>
            </span>
            <span class="picker-caret" aria-hidden="true"></span>
          </button>
          <div class="picker-menu" id="picker-menu-${category}" role="listbox" aria-label="${category} picker">
            <div class="picker-search" role="presentation">
              <input type="search" placeholder="Search ${category}" aria-label="Search ${category} parts" data-picker-search="${category}" autocomplete="off" />
            </div>
            ${menuOptions}
          </div>
        </div>
        <p class="slot-meta" id="meta-${category}">No ${category.toLowerCase()} selected.</p>
      </div>`;
    })
    .join("");

  document.querySelectorAll("[data-builder-category]").forEach((select) => {
    select.addEventListener("change", updateBuilder);
  });
  document.querySelectorAll(".picker-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => togglePicker(trigger));
    trigger.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closePickers();
    });
  });
  document.querySelectorAll("[data-picker-search]").forEach((input) => {
    input.addEventListener("input", () => filterPickerOptions(input));
    input.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closePickers();
        return;
      }
      if (event.key !== "Enter") return;
      event.preventDefault();
      const firstVisible = input.closest(".picker-menu").querySelector('.picker-option:not([hidden]):not([data-picker-value=""])');
      firstVisible?.click();
    });
    input.addEventListener("click", (event) => event.stopPropagation());
  });
  document.querySelectorAll(".picker-option").forEach((option) => {
    option.addEventListener("click", () => {
      const picker = option.closest(".part-picker");
      const select = picker.querySelector("[data-builder-category]");
      select.value = option.dataset.pickerValue;
      select.dispatchEvent(new Event("change", { bubbles: true }));
      closePickers();
    });
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".part-picker")) closePickers();
    if (!event.target.closest(".select-picker")) closeSelectPickers();
  });
  applyMotion(document.getElementById("builder"));
}

function filterPickerOptions(input) {
  const query = input.value.trim().toLowerCase();
  const menu = input.closest(".picker-menu");
  const options = [...menu.querySelectorAll(".picker-option")];
  let visibleCount = 0;

  options.forEach((option) => {
    const isEmptyChoice = option.dataset.pickerValue === "";
    const matches = !query || isEmptyChoice || option.textContent.toLowerCase().includes(query);
    option.hidden = !matches;
    if (matches && !isEmptyChoice) visibleCount += 1;
  });

  menu.querySelector(".picker-empty-results")?.remove();
  if (!visibleCount && query) {
    const empty = document.createElement("div");
    empty.className = "picker-empty-results";
    empty.textContent = "No matching parts";
    menu.appendChild(empty);
  }
}

function closePickers() {
  document.querySelectorAll(".part-picker.is-open").forEach((picker) => {
    picker.classList.remove("is-open");
    picker.closest(".slot")?.classList.remove("picker-active");
    picker.querySelector(".picker-trigger").setAttribute("aria-expanded", "false");
    const search = picker.querySelector("[data-picker-search]");
    if (search) {
      search.value = "";
      filterPickerOptions(search);
    }
  });
}

function togglePicker(trigger) {
  const picker = trigger.closest(".part-picker");
  const isOpen = picker.classList.contains("is-open");
  closeSelectPickers();
  closePickers();
  picker.classList.toggle("is-open", !isOpen);
  picker.closest(".slot")?.classList.toggle("picker-active", !isOpen);
  trigger.setAttribute("aria-expanded", String(!isOpen));
  if (!isOpen) {
    window.requestAnimationFrame(() => {
      const search = picker.querySelector("[data-picker-search]");
      search?.focus({ preventScroll: true });
      picker.querySelector(".picker-menu")?.scrollIntoView({ block: "nearest", inline: "nearest" });
    });
  }
}

function syncPicker(category, part) {
  const picker = document.querySelector(`[data-picker-category="${category}"]`);
  if (!picker) return;
  const trigger = picker.querySelector(".picker-trigger");
  const media = trigger.querySelector(".picker-trigger-media");
  const copy = trigger.querySelector(".picker-trigger-copy");
  media.innerHTML = part ? productThumb(part, "picker-thumb") : `<span class="picker-empty-thumb">${category.slice(0, 2).toUpperCase()}</span>`;
  copy.innerHTML = part
    ? `<strong>${part.name}</strong><span>${formatOfferPrice(part, bestOffer(part))} at ${bestOffer(part).seller}</span>`
    : `<strong>Choose ${category}</strong><span>Open product picker</span>`;
  picker.querySelectorAll(".picker-option").forEach((option) => {
    option.setAttribute("aria-selected", String(option.dataset.pickerValue === (part?.name || "")));
  });
}

function getSelectedParts() {
  return [...document.querySelectorAll("[data-builder-category]")]
    .map((select) => parts.find((part) => part.name === select.value))
    .filter(Boolean);
}

function updateBuilder() {
  const selected = getSelectedParts();
  const total = selected.reduce((sum, part) => sum + (Number.isFinite(partPrice(part)) ? partPrice(part) : 0), 0);
  const power = selected.reduce((sum, part) => sum + (part.power || 0), 0);
  const totalNode = document.getElementById("buildTotal");
  totalNode.textContent = formatMoney(total);
  totalNode.classList.remove("value-pop");
  void totalNode.offsetWidth;
  totalNode.classList.add("value-pop");
  document.getElementById("buildPower").textContent = `${power}W estimated component draw`;

  builderCategories.forEach((category) => {
    const select = document.getElementById(`slot-${category}`);
    const part = parts.find((item) => item.name === select.value);
    syncPicker(category, part);
    document.getElementById(`meta-${category}`).textContent = part
      ? `${formatOfferPrice(part, bestOffer(part))} at ${bestOffer(part).seller} - ${part.specs}`
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

  document.getElementById("builderLinks").innerHTML = selected.map((part) => cheapestOfferLink(part)).join("");
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
          <span class="price">${formatOfferPrice(selected, offer)}</span>
          ${wasMarkup(was)}
        </div>
        ${lowestOfferBadge(selected)}
        <div class="specs">${[selected.socket, selected.memory, selected.power ? `${selected.power}W draw` : "", `Verified ${verifiedAt}`].filter(Boolean).join(" | ")}</div>
        <section class="product-overview">
          <p class="eyebrow">General information</p>
          <p>${selected.overview}</p>
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
              <strong>${formatOfferPrice(selected, item)}</strong>
              <em>${item.status}</em>
            </a>`,
          )
          .join("")}
      </div>
    </section>`;
}

function cleanUrl() {
  const cleaned = window.location.pathname.replace(/\/index\.html$/, "/");
  history.replaceState(null, "", cleaned + window.location.search);
}

function initCleanUrl() {
  const scrollToHash = (hash) => {
    if (!hash || hash === "#") return;
    const id = decodeURIComponent(hash.slice(1));
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (window.location.hash) {
    const initialHash = window.location.hash;
    window.requestAnimationFrame(() => {
      scrollToHash(initialHash);
      cleanUrl();
    });
  } else {
    cleanUrl();
  }

  document.addEventListener("click", (event) => {
    const link = event.target.closest('a[href*="#"]');
    if (!link) return;
    const url = new URL(link.href, window.location.href);
    if (url.origin !== window.location.origin) return;
    if (url.pathname !== window.location.pathname && url.pathname.replace(/\/index\.html$/, "/") !== window.location.pathname) return;
    if (!url.hash) return;
    event.preventDefault();
    scrollToHash(url.hash);
    cleanUrl();
  });
}

initThemeToggle();
initPressMotion();
initCleanUrl();

let catalogResizeRaf;
window.addEventListener("resize", () => {
  if (!document.getElementById("productGrid")) return;
  cancelAnimationFrame(catalogResizeRaf);
  catalogResizeRaf = requestAnimationFrame(() => renderProducts({ append: true }));
});

if (document.getElementById("productDetail")) {
  renderProductDetail();
  applyMotion(document);
} else {
  renderHeroDeals();
  renderCategories();
  renderDeals();
  renderFilter();
  renderProducts();
  renderBuilder();
  updateBuilder();
  applyMotion(document);
}

// Merge nightly price snapshot (prices.json) and re-render anything
// that displays a price. Silent on failure so a missing or malformed
// file never blocks the rest of the UI.
(async function applyNightlyPrices() {
  try {
    const res = await fetch("prices.json", { cache: "no-store" });
    if (!res.ok) return;
    const payload = await res.json();
    const map = payload && payload.prices;
    if (!map || typeof map !== "object") return;

    let touched = 0;
    parts.forEach((part) => {
      if (!Array.isArray(part.offers)) return;
      part.offers.forEach((offer) => {
        const key = `${part.name}|${offer.seller}`;
        const entry = map[key];
        if (!entry || typeof entry.price !== "number") return;
        if (offer.price !== entry.price) {
          offer.price = entry.price;
          touched++;
        }
      });
    });

    if (!touched) return;

    if (document.getElementById("productDetail")) {
      renderProductDetail();
    } else {
      if (typeof renderHeroDeals === "function") renderHeroDeals();
      if (typeof renderDeals === "function") renderDeals();
      if (typeof renderProducts === "function") renderProducts({ append: true });
      if (typeof updateBuilder === "function") updateBuilder();
    }
  } catch {
    // ignore
  }
})();
