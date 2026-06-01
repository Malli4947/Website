/**
 * ───────────────────────────────────────────────────────────────────────────
 *  AEROVEXA EXIM — CONTENT / CMS LAYER
 * ───────────────────────────────────────────────────────────────────────────
 *  This file is the single source of truth for ALL editable site content.
 *  A non-technical editor (or a future headless CMS) only ever touches this
 *  file — banners, copy, gallery items, stats, contact details and the four
 *  division definitions all live here. Components read from it, so the layout
 *  never has to be edited to change words or images.
 * ───────────────────────────────────────────────────────────────────────────
 */

export const company = {
  name: 'Aerovexa Exim',
  legalName: 'Aerovexa Exim Private Limited',
  tagline: 'Exim Private Limited',
  pitch:
    'A comprehensive import & export powerhouse delivering specialised expertise across Electronics, Agriculture, Jewellery and Logistics.',
  established: '2024',
}

export const contact = {
  email: 'info@aerovexaexim.com',
  emailAlt: 'sales@aerovexaexim.com',
  phones: ['+91 73821 14448', '+91 77994 58878'],
  whatsapp: '917382114448',
  address: 'Aerovexa Exim Private Limited, India',
  hours: 'Mon – Sat · 9:30 AM – 7:00 PM IST',
}

export const clients = [
  { name: 'Gunapatis', note: 'Trusted trade partner' },
  { name: 'August', note: 'Strategic client' },
]

/* Brand palette — sampled from the company logo (navy + gold) */
export const brand = {
  navy: '#16294d',
  navyDeep: '#0f1d39',
  gold: '#d8aa4e',
  goldDeep: '#c8902a',
  cream: '#f6f1e7',
}

/* ───────────────────────────────────────────────────────────────────────────
 *  THE FOUR DIVISIONS
 *  Order is intentional: Electronics → Agriculture → Jewellery → Logistics.
 *  Each has its OWN colour code so the business lines stay visually distinct
 *  while the navy/gold brand frame keeps everything unified.
 * ─────────────────────────────────────────────────────────────────────────── */
export const divisions = [
  {
    id: 'electronics',
    index: '01',
    name: 'Electronics',
    color: '#1f6fe0', // electric blue
    colorDeep: '#1450ab',
    colorSoft: '#eaf2fd',
    icon: 'electronics',
    headline: 'Imported & modified electronics, engineered to spec',
    blurb:
      'Import and modification of electronic components, gadgets, CC cameras, televisions and the full spectrum of electronic devices — sourced globally, tuned for the market we serve.',
    banner: 'Sourcing the world’s best electronics — components to finished gadgets.',
    offerings: [
      'CC Cameras & Surveillance Systems',
      'Televisions & Display Panels',
      'Electronic Components & ICs',
      'Microcontrollers & Dev Boards',
      'Consumer Gadgets & Devices',
      'Custom Hardware Modification',
    ],
    stats: [
      { value: '500+', label: 'Component SKUs' },
      { value: '24/7', label: 'Sourcing desk' },
      { value: '100%', label: 'QC tested' },
    ],
    gallery: [
      { label: 'Circuit Diagrams', tag: 'Schematics', kind: 'circuit' },
      { label: 'Components', tag: 'Resistors · ICs', kind: 'chip' },
      { label: 'Electronic Symbols', tag: 'Reference', kind: 'symbol' },
      { label: 'Breadboards', tag: 'Prototyping', kind: 'breadboard' },
      { label: 'Microcontrollers', tag: 'MCU · Dev Boards', kind: 'mcu' },
      { label: 'CC Cameras', tag: 'Surveillance', kind: 'camera' },
    ],
    reference: 'CC cams, Televisions & all gadgets',
  },
  {
    id: 'agriculture',
    index: '02',
    name: 'Agriculture',
    color: '#2e9e4f', // farm green
    colorDeep: '#1f7a3a',
    colorSoft: '#e9f6ed',
    icon: 'agriculture',
    headline: 'Nature’s best — from farm to the world',
    blurb:
      'Showcase and export of premium rice varieties, hand-selected spices and refined sugar. Sourced from trusted farms, processed to international quality standards.',
    banner: 'Premium grains, spices and sugar — exported with farm-fresh integrity.',
    offerings: [
      'Basmati & Non-Basmati Rice',
      'Whole & Ground Spices',
      'Refined & Raw Sugar',
      'Pulses & Grains',
      'Custom Private Labelling',
      'Bulk & Container Export',
    ],
    stats: [
      { value: '15+', label: 'Rice varieties' },
      { value: '30+', label: 'Spice lines' },
      { value: 'ISO', label: 'Grade quality' },
    ],
    gallery: [
      { label: 'Rice & Grains', tag: 'Basmati · Sona', kind: 'grain' },
      { label: 'Spices', tag: 'Turmeric · Chilli', kind: 'spice' },
      { label: 'Sugar', tag: 'Refined · Raw', kind: 'sugar' },
      { label: 'Pulses', tag: 'Lentils · Dal', kind: 'pulse' },
      { label: 'Harvest', tag: 'Farm fresh', kind: 'harvest' },
      { label: 'Export Packs', tag: 'Bulk ready', kind: 'pack' },
    ],
    reference: 'Grains, spices & sugar',
  },
  {
    id: 'jewellery',
    index: '03',
    name: 'Jewellery',
    color: '#b88a2e', // rich gold
    colorDeep: '#8f6a1e',
    colorSoft: '#f7efdd',
    icon: 'jewellery',
    headline: 'Gold & diamond craftsmanship, refined to perfection',
    blurb:
      'Gold and diamond processing with a curated display of chains, silver jewellery and finished pieces — where heritage craft meets export-grade precision.',
    banner: 'Gold, diamonds & silver — processed and finished to brilliance.',
    offerings: [
      'Gold Processing & Refining',
      'Diamond Sourcing & Setting',
      'Chains & Necklaces',
      'Silver Jewellery',
      'Rings & Finished Pieces',
      'Custom & Bespoke Orders',
    ],
    stats: [
      { value: '22K', label: 'Gold purity' },
      { value: 'GIA', label: 'Certified stones' },
      { value: '∞', label: 'Bespoke designs' },
    ],
    gallery: [
      { label: 'Rings', tag: 'Solitaire · Band', kind: 'ring' },
      { label: 'Chains', tag: 'Gold · Rope', kind: 'chain' },
      { label: 'Diamonds', tag: 'Loose · Set', kind: 'diamond' },
      { label: 'Necklaces', tag: 'Finished', kind: 'necklace' },
      { label: 'Silver', tag: 'Sterling', kind: 'silver' },
      { label: 'Finished Pieces', tag: 'Collection', kind: 'piece' },
    ],
    reference: 'Gold & diamond processing · chains · silver · finished pieces',
  },
  {
    id: 'logistics',
    index: '04',
    name: 'Logistics',
    color: '#0e8a8f', // teal
    colorDeep: '#0a6669',
    colorSoft: '#e4f4f4',
    icon: 'logistics',
    headline: 'Air, sea & warehouse — moving cargo across the globe',
    blurb:
      'End-to-end logistics: air charter, air freight, warehousing, agri cargo, vessel operating and chartering services — one partner from origin to destination.',
    banner: 'Air charter to vessel operating — your cargo, handled end to end.',
    offerings: [
      'Air Charter',
      'Air Freight',
      'Warehouse Services',
      'Agri Cargo',
      'Vessel Operating',
      'Chartering Services',
    ],
    stats: [
      { value: '6', label: 'Service lines' },
      { value: '40+', label: 'Ports reached' },
      { value: 'Live', label: 'Cargo tracking' },
    ],
    gallery: [
      { label: 'Shipyards', tag: 'Port ops', kind: 'shipyard' },
      { label: 'Cargo Handling', tag: 'Container', kind: 'cargo' },
      { label: 'Air Freight', tag: 'Charter', kind: 'air' },
      { label: 'Warehousing', tag: 'Storage', kind: 'warehouse' },
      { label: 'Vessels', tag: 'Operating', kind: 'vessel' },
      { label: 'Agri Cargo', tag: 'Bulk', kind: 'agricargo' },
    ],
    reference: 'Air charter · air freight · warehouse · agri cargo · vessel operating · chartering',
  },
]

/* The "Farm to freezer"–style process band, generalised across all divisions */
export const process = [
  { label: 'Source', kind: 'source' },
  { label: 'Inspect', kind: 'inspect' },
  { label: 'Process', kind: 'process' },
  { label: 'Pack', kind: 'pack' },
  { label: 'Logistics', kind: 'logistics' },
  { label: 'Deliver', kind: 'deliver' },
]

export const globalReach = {
  regions: ['Middle East', 'Southeast Asia', 'Europe', 'Africa', 'Americas', 'Oceania'],
  metrics: [
    { value: '40+', label: 'Countries served' },
    { value: '4', label: 'Business sectors' },
    { value: '1000+', label: 'Shipments handled' },
    { value: '99%', label: 'On-time delivery' },
  ],
}

/* helper to fetch a division by id */
export const getDivision = (id) => divisions.find((d) => d.id === id)

/* ───────────────────────────────────────────────────────────────────────────
 *  HOME — rotating top banner slides (one per sector + a brand slide)
 * ─────────────────────────────────────────────────────────────────────────── */
export const heroSlides = [
  {
    id: 'brand',
    accent: '#d8aa4e',
    eyebrow: 'Import · Export · Worldwide',
    title: 'One company,\nfour sectors,\na world of trade.',
    text: 'Aerovexa Exim unites Electronics, Agriculture, Jewellery & Logistics under one accountable, export-grade brand.',
    primary: { label: 'Our Divisions', to: '/#divisions' },
    secondary: { label: 'Contact Us', to: '/contact' },
  },
  {
    id: 'electronics',
    accent: '#1f6fe0',
    eyebrow: 'Division 01 · Electronics',
    title: 'Imported electronics,\nengineered to spec.',
    text: 'CC cameras, televisions, components, microcontrollers & gadgets — sourced globally and tuned for your market.',
    primary: { label: 'Explore Electronics', to: '/electronics' },
    secondary: { label: 'Get a Quote', to: '/contact' },
  },
  {
    id: 'agriculture',
    accent: '#2e9e4f',
    eyebrow: 'Division 02 · Agriculture',
    title: 'Nature’s best,\nfrom farm to the world.',
    text: 'Premium rice, hand-selected spices and refined sugar — exported with farm-fresh integrity.',
    primary: { label: 'Explore Agriculture', to: '/agriculture' },
    secondary: { label: 'Get a Quote', to: '/contact' },
  },
  {
    id: 'jewellery',
    accent: '#b88a2e',
    eyebrow: 'Division 03 · Jewellery',
    title: 'Gold & diamond craft,\nrefined to brilliance.',
    text: 'Gold and diamond processing — chains, silver and finished pieces with export-grade precision.',
    primary: { label: 'Explore Jewellery', to: '/jewellery' },
    secondary: { label: 'Get a Quote', to: '/contact' },
  },
  {
    id: 'logistics',
    accent: '#0e8a8f',
    eyebrow: 'Division 04 · Logistics',
    title: 'Your global\ngrowth partner.',
    text: 'Air charter, air freight, warehousing, agri cargo, vessel operating & chartering — origin to destination.',
    primary: { label: 'Explore Logistics', to: '/logistics' },
    secondary: { label: 'Get a Quote', to: '/contact' },
  },
]

/* ───────────────────────────────────────────────────────────────────────────
 *  PER-DIVISION PAGE CONTENT
 *  Mirrors the layout of each reference site but with Aerovexa branding.
 *  - electronics / agriculture / jewellery → "categories" + process + gallery
 *  - logistics → detailed "services" (the 6 requested lines only)
 * ─────────────────────────────────────────────────────────────────────────── */
export const divisionExtras = {
  electronics: {
    pageTitle: 'Electronics Division',
    pageLead: 'Import & modification of electronic components, gadgets, CC cameras, televisions and all electronic devices.',
    categoriesTitle: 'What we deal in',
    categoriesSub: 'A full spectrum of imported and modified electronics — from bare components to finished, market-ready gadgets.',
    categories: [
      { name: 'CC Cameras', desc: 'CCTV, IP & surveillance systems for home and enterprise security.', kind: 'camera' },
      { name: 'Televisions', desc: 'Smart TVs, display panels and large-format screens.', kind: 'mcu' },
      { name: 'Components', desc: 'ICs, resistors, capacitors and electronic building blocks.', kind: 'chip' },
      { name: 'Microcontrollers', desc: 'MCUs, dev boards and embedded modules for makers & OEMs.', kind: 'circuit' },
      { name: 'Gadgets & Devices', desc: 'Consumer electronics and the latest imported gadgets.', kind: 'symbol' },
      { name: 'Modification', desc: 'Custom hardware tuning and modification to your spec.', kind: 'breadboard' },
    ],
    why: [
      { t: 'Genuine Sourcing', d: 'Direct from trusted global manufacturers.' },
      { t: '100% QC Tested', d: 'Every unit inspected before dispatch.' },
      { t: 'Custom Modification', d: 'Hardware tuned to your requirement.' },
      { t: 'Fast Turnaround', d: 'A 24/7 sourcing desk at your service.' },
    ],
    process: [
      { label: 'Source', kind: 'source' },
      { label: 'Inspect', kind: 'inspect' },
      { label: 'Modify', kind: 'process' },
      { label: 'Test', kind: 'inspect' },
      { label: 'Pack', kind: 'pack' },
      { label: 'Ship', kind: 'deliver' },
    ],
  },
  agriculture: {
    pageTitle: 'Agriculture Division',
    pageLead: 'Showcase & export of premium rice varieties, hand-selected spices and refined sugar — farm to the world.',
    categoriesTitle: 'Our Products',
    categoriesSub: 'Sourced from trusted farms and processed to international quality standards.',
    categories: [
      { name: 'Rice', desc: 'Basmati & non-basmati varieties, export grade.', kind: 'grain' },
      { name: 'Spices', desc: 'Whole & ground spices — turmeric, chilli, cumin & more.', kind: 'spice' },
      { name: 'Sugar', desc: 'Refined and raw sugar for bulk export.', kind: 'sugar' },
      { name: 'Pulses & Grains', desc: 'Lentils, dal and assorted grains.', kind: 'pulse' },
    ],
    why: [
      { t: 'Farm Fresh', d: 'Sourced directly from trusted growers.' },
      { t: 'Quality Graded', d: 'ISO-grade sorting and quality control.' },
      { t: 'Custom Labelling', d: 'Private-label & bulk packaging options.' },
      { t: 'Container Export', d: 'Bulk and container loads worldwide.' },
    ],
    process: [
      { label: 'Harvesting', kind: 'harvest' },
      { label: 'Processing & Milling', kind: 'mill' },
      { label: 'Sorting & Grading', kind: 'sort' },
      { label: 'Packaging', kind: 'pack' },
      { label: 'Storage', kind: 'store' },
      { label: 'Export & Logistics', kind: 'ship' },
    ],
  },
  jewellery: {
    pageTitle: 'Jewellery Division',
    pageLead: 'Gold & diamond processing with a curated display of chains, silver jewellery and finished pieces.',
    categoriesTitle: 'Shop by Category',
    categoriesSub: 'Where heritage craft meets export-grade precision.',
    goldRates: [
      { karat: '24K', rate: '₹ 7,420 /g' },
      { karat: '22K', rate: '₹ 6,800 /g' },
      { karat: '18K', rate: '₹ 5,565 /g' },
      { karat: 'Silver', rate: '₹ 92 /g' },
    ],
    categories: [
      { name: 'Rings', desc: 'Solitaire, band & statement rings.', kind: 'ring' },
      { name: 'Chains', desc: 'Gold and rope chains in every weight.', kind: 'chain' },
      { name: 'Diamonds', desc: 'Loose and set, certified stones.', kind: 'diamond' },
      { name: 'Necklaces', desc: 'Finished necklace collections.', kind: 'necklace' },
      { name: 'Silver', desc: 'Sterling silver jewellery.', kind: 'silver' },
      { name: 'Finished Pieces', desc: 'Bespoke and ready collections.', kind: 'piece' },
    ],
    why: [
      { t: '22K Purity', d: 'Hallmarked, certified gold.' },
      { t: 'GIA Diamonds', d: 'Ethically sourced, certified stones.' },
      { t: 'Master Craft', d: 'Heritage artisans, modern finish.' },
      { t: 'Bespoke Orders', d: 'Custom designs made to order.' },
    ],
    process: [
      { label: 'Sourcing', kind: 'source' },
      { label: 'Refining', kind: 'process' },
      { label: 'Design', kind: 'process' },
      { label: 'Setting', kind: 'inspect' },
      { label: 'Polishing', kind: 'inspect' },
      { label: 'Finishing', kind: 'deliver' },
    ],
  },
  logistics: {
    pageTitle: 'Logistics Division',
    pageLead: 'Your global growth partner — comprehensive air, sea and warehouse logistics from origin to destination.',
    /* Seashell-style hero (background video + tagline) */
    hero: {
      eyebrow: 'Logistics & Supply Chain',
      title: 'Your Global\nGrowth Partner',
      text: 'Providing comprehensive logistics and supply chain solutions to streamline operations, enhance efficiency, and drive your global business growth forward.',
      /* Drop your own clip at public/videos/logistics-bg.mp4 to use a real video.
         An animated gradient + cargo scene shows as a graceful fallback. */
      video: '/videos/logistics-bg.mp4',
    },
    categoriesTitle: 'Our Services',
    categoriesSub: 'Select a service to explore what we deliver — six specialised lines, end to end.',
    /* ONLY the six requested service sections, with descriptions + features */
    services: [
      {
        name: 'Air Charter', kind: 'air',
        desc: 'Dedicated aircraft charters for urgent, oversized and time-critical consignments — anywhere in the world.',
        features: ['Full & part charter aircraft', 'Time-critical & AOG movements', 'Oversized / out-of-gauge cargo', 'Door-to-airport coordination'],
      },
      {
        name: 'Air Freight', kind: 'air',
        desc: 'Scheduled and consolidated air freight with competitive rates and full end-to-end visibility.',
        features: ['Consolidated & direct uplift', 'Competitive carrier rates', 'Real-time shipment tracking', 'Customs & documentation'],
      },
      {
        name: 'Warehouse', kind: 'warehouse',
        desc: 'Secure warehousing and distribution with inventory management and value-added services.',
        features: ['Secure, monitored storage', 'Inventory management', 'Pick, pack & distribution', 'Value-added services'],
      },
      {
        name: 'Agri Cargo', kind: 'agricargo',
        desc: 'Specialised handling of agricultural commodities and perishables — farm to port to market.',
        features: ['Perishable & bulk handling', 'Cold-chain coordination', 'Phytosanitary compliance', 'Farm-to-port logistics'],
      },
      {
        name: 'Vessel Operating', kind: 'vessel',
        desc: 'Dry-bulk vessel operating for large-scale sea freight across global trade routes.',
        features: ['Dry-bulk vessel operating', 'Port & stevedore management', 'Laytime & demurrage handling', 'Global trade-route coverage'],
      },
      {
        name: 'Chartering Services', kind: 'cargo',
        desc: 'Flexible chartering solutions tailored to your cargo type, route and timeline.',
        features: ['Voyage & time charters', 'Cargo-matched tonnage', 'Route & schedule planning', 'Commercial negotiation'],
      },
    ],
    why: [
      { t: 'Global Network', d: 'Partners across 40+ ports worldwide.' },
      { t: 'Multi-Modal', d: 'Air, sea, road and warehouse under one roof.' },
      { t: 'Live Tracking', d: 'Real-time visibility on every shipment.' },
      { t: 'Agri Expertise', d: 'Perishable & bulk cargo specialists.' },
    ],
    process: [
      { label: 'Enquiry', kind: 'source' },
      { label: 'Planning', kind: 'process' },
      { label: 'Documentation', kind: 'inspect' },
      { label: 'Handling', kind: 'logistics' },
      { label: 'Transit', kind: 'logistics' },
      { label: 'Delivery', kind: 'deliver' },
    ],
  },
}

/* ───────────────────────────────────────────────────────────────────────────
 *  AGRICULTURE PAGE — heritage rice-mill layout, modelled on sreebell.com
 *  (Sree Murali Mohana Rice). Aerovexa branding, rice-first with spices & sugar.
 * ─────────────────────────────────────────────────────────────────────────── */
/* ════════════════════════════════════════════════════════════════════
   Replace the existing `agriPage` export inside src/data/content.js
   with this version.

   NOTE ON IMAGES:
   The `img` URLs below are royalty-free stock photos used as live
   placeholders so the page looks complete immediately. For production,
   swap each `img` for your own product photography — ideally local files
   you import or drop in /public, e.g.  img: '/images/agri/sona-masoori.jpg'.
   Every image has an SVG-art fallback in Agriculture.jsx, so a missing or
   broken URL will never show a broken-image icon.
   ════════════════════════════════════════════════════════════════════ */

const U = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1100&q=80`

export const agriPage = {
  /* Rotating photo hero banners at the top of the page */
  banners: [
    {
      eyebrow: 'Agri Exports · Worldwide',
      title: 'Manufacturers & exporters of\npremium Indian agri produce.',
      text: 'Rice, spices and sugar from Indian farms to ports in 25+ countries — handled end to end.',
      img: U('photo-1536304929831-ee1ca9d44906'),
    },
    {
      eyebrow: 'Farm to Freight',
      title: 'From the farm,\nto the freight, to you.',
      text: 'Container-load exports with assured quality, full documentation and on-time delivery.',
      img: U('photo-1494412574643-ff11b0a5c1c3'),
    },
    {
      eyebrow: 'Your Global Agri Partner',
      title: 'Sourced with care,\ndelivered with precision.',
      text: 'A single trusted partner for sourcing, processing, packing and global logistics.',
      img: U('photo-1574323347407-f5e1ad6d020b'),
    },
  ],

  /* Large photo beside the "Welcome to Aerovexa Agriculture" intro */
  welcomeImg: U('photo-1625246333195-78d9c38ad449'),

  hero: {
    tagline: 'From the soil to the world — grain by grain.',
    statement:
      'Our mission is to provide customers worldwide with top-quality produce that captures the natural essence, flavour and nutrition of the finest Indian harvests — blending traditional farming wisdom with modern processing so every consignment meets and exceeds international standards.',
  },

  stats: [
    { value: '25+', label: 'Years of expertise' },
    { value: '2000+', label: 'Farmer partners' },
    { value: '1500', label: 'MT processed / day' },
    { value: '40', label: 'Acre facility' },
  ],

  about:
    'What began as one family’s dream has grown into a trusted name in agri-export. We combine traditional farming wisdom with modern milling, sorting and quality control — so every consignment meets and exceeds international standards.',

  /* "Nature's best · Farm to Export" — six illustrated/photographed steps */
  process: [
    { title: 'Sourcing',            desc: 'Hand-picked paddy and produce from 2000+ trusted farmer partners.',        kind: 'sonamasoori', img: U('photo-1500382017468-9049fed747ef') },
    { title: 'Cleaning & Drying',   desc: 'Mechanical drying and de-stoning to lock in quality and shelf life.',       kind: 'kaima',       img: U('photo-1574943320219-553eb213f72d') },
    { title: 'Milling & Grading',   desc: 'Automated milling with optical colour-sorting for uniform grain.',          kind: 'ponni',       img: U('photo-1586201375761-83865001e31c') },
    { title: 'Quality Lab',         desc: 'In-house lab testing for moisture, purity and export compliance.',          kind: 'basmati',     img: U('photo-1581093458791-9d42e3c7e117') },
    { title: 'Packaging',           desc: 'Food-grade, export-ready packing in custom weights and brands.',            kind: 'sugar',       img: U('photo-1607301406259-dfb186e15de8') },
    { title: 'Logistics & Export',  desc: 'Documentation, FCL/LCL booking and on-time delivery to global ports.',      kind: 'pulses',      img: U('photo-1601584115197-04ecc0da31d7') },
  ],

  varieties: [
    { name: 'Sona Masoori',        desc: 'Lightweight, aromatic rice balancing taste, nutrition and consistency.', kind: 'sonamasoori', tag: 'Premium Rice',  img: U('photo-1586201375761-83865001e31c') },
    { name: 'Kaima (Jeerakasala)', desc: 'Short-grain, naturally fragrant rice — light and fluffy when cooked.',   kind: 'kaima',       tag: 'Aromatic',      img: U('photo-1536304993881-ff6e9eefa2a6') },
    { name: 'Ponni Rice',          desc: 'Wholesome, delicately flavoured rice, a South-Indian staple.',           kind: 'ponni',       tag: 'Staple',        img: U('photo-1626016570496-9b10c86fa1d5') },
    { name: 'Basmati',             desc: 'Long-grain aromatic rice, export grade for global cuisine.',             kind: 'basmati',     tag: 'Export Grade',  img: U('photo-1516684732162-798a0062be99') },
  ],

  alsoExport: [
    { name: 'Turmeric',         desc: 'High-curcumin whole & ground turmeric.', kind: 'turmeric', tag: 'Spice',     img: U('photo-1615485290382-441e4d049cb5') },
    { name: 'Red Chilli',       desc: 'Vibrant, pungent chilli — whole & powder.', kind: 'chilli', tag: 'Spice',     img: U('photo-1583524505974-6facd53f4597') },
    { name: 'Refined Sugar',    desc: 'Refined & raw sugar for bulk export.',    kind: 'sugar',    tag: 'Sweetener', img: U('photo-1581281863883-2469417a1668') },
    { name: 'Pulses & Grains',  desc: 'Lentils, dal and assorted grains.',       kind: 'pulses',   tag: 'Protein',   img: U('photo-1515942400420-2b98fed1f515') },
  ],

  /* Import & export shipment types — illustrated cargo cards */
  shipmentTypes: [
    { name: 'FCL — Full Container Load', desc: 'Dedicated 20ft & 40ft containers for high-volume rice, sugar and grain consignments.', kind: 'fcl',       tag: 'Container',    img: U('photo-1605281317010-fe5ffe798166') },
    { name: 'LCL — Groupage',            desc: 'Consolidated less-than-container loads for mixed and smaller export orders.',          kind: 'lcl',       tag: 'Consolidated', img: U('photo-1601584115197-04ecc0da31d7') },
    { name: 'Reefer — Cold Chain',       desc: 'Temperature-controlled reefer units for perishables and moisture-sensitive produce.', kind: 'reefer',    tag: 'Refrigerated', img: U('photo-1601598851547-4302969d0614') },
    { name: 'Bulk Vessel',               desc: 'Dry-bulk vessel shipments for large-scale grain and sugar cargo across trade routes.', kind: 'bulkship',  tag: 'Sea Freight',  img: U('photo-1578575437130-527eed3abbec') },
    { name: 'Air Cargo',                 desc: 'Time-critical air freight for premium spices, samples and urgent consignments.',       kind: 'aircargo',  tag: 'Air Freight',  img: U('photo-1542296332-2e4473faf563') },
    { name: 'Break-Bulk',                desc: 'Palletised and bagged cargo handling for flexible, port-to-port movement.',            kind: 'breakbulk', tag: 'Palletised',   img: U('photo-1553413077-190dd305871c') },
  ],

  whyChoose: [
    { t: 'On-Time Delivery',   d: 'Reliable schedules from mill to port, every shipment.', kind: 'inspect' },
    { t: 'Assured Quality',    d: 'Colour-sorted, lab-tested, ISO-grade produce.',         kind: 'process' },
    { t: 'Global Recognition', d: 'Trusted by exporters and buyers across continents.',     kind: 'deliver' },
  ],

  partners: ['Gunapatis', 'August', 'Global Buyers', 'GCC Importers'],

  infrastructure: [
    { spec: '14 Silos',      note: '45,000 MT storage capacity' },
    { spec: '20 Dryers',     note: 'Mechanical paddy drying' },
    { spec: 'Colour Sorters', note: 'Optical grain sorting' },
    { spec: '1,000 MT/day',  note: 'Parboiling capacity' },
    { spec: 'Modern Milling', note: 'Automated milling lines' },
    { spec: 'In-house Lab',  note: 'Quality assurance testing' },
  ],

  sustainability: {
    title: 'Powered by the husk we mill',
    text: 'Captive green-energy plants turn rice husk into 5+ MWH of renewable power — clean processing that gives back to the planet.',
    points: ['Rice-husk biomass power', '5+ MWH captive generation', 'Lower carbon footprint', 'Zero-waste milling'],
  },

  export: {
    title: 'Exported to 25+ countries',
    text: 'Across Africa, the GCC, the Far East and South America — Aerovexa moves quality produce worldwide.',
    /* Optional world-map image. Drop your own map here, e.g. '/images/agri/global-reach.png'.
       Left null by default so no broken image appears. */
    mapImg: null,
    regions: ['Africa', 'GCC', 'Far East', 'South America', 'Europe', 'Southeast Asia'],
  },
}

/* Why Aerovexa — shown on the About page */
export const whyAerovexa = [
  { t: 'Four Specialised Divisions', d: 'Electronics, Agriculture, Jewellery and Logistics — one accountable partner.' },
  { t: 'Global Sourcing Network', d: 'Trusted suppliers and partners across continents.' },
  { t: 'International Quality', d: 'Every product meets and exceeds global standards.' },
  { t: 'End-to-End Logistics', d: 'In-house cargo capability from origin to door.' },
  { t: 'Dedicated Account Teams', d: 'Specialist support for every sector and order.' },
  { t: 'On-Time, Every Time', d: '99% on-time delivery across 40+ countries.' },
]

/* Certifications / trust badges (text-based, like the reference sites) */
export const certifications = ['ISO 9001', 'APEDA', 'FIEO', 'HACCP', 'Hallmarked', 'AEO']
