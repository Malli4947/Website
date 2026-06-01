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
  // emailAlt: 'sales@aerovexaexim.com',
  phones: ['+91 73821 14448', '+91 77994 58878'],
  whatsapp: '917382114448',
  gstin: '36ABFCA5440F1ZW',
  address:
    'Flat No. 7016, 8-2-644/1/205, F.No. 205, Hiline Complex, Road No. 12, Khairatabad, Banjara Hills, Hyderabad, Telangana – 500034',
  hours: 'Mon – Sat · 9:30 AM – 7:00 PM IST',
}

/* Social media — swap these for your official profile URLs.
   Clicking a footer/contact icon opens the matching platform in a new tab. */
export const social = [
  { label: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/', color: '#1877F2' },
  { label: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/', color: '#E4405F' },
  { label: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/', color: '#0A66C2' },
  { label: 'X', icon: 'x', url: 'https://x.com/', color: '#000000' },
  { label: 'YouTube', icon: 'youtube', url: 'https://www.youtube.com/', color: '#FF0000' },
]

/* Brand colours for the non-social contact icons (WhatsApp / mail / phone). */
export const channelColors = {
  whatsapp: '#25D366',
  mail: '#EA4335',
  phone: '#16294d',
}

export const clients = [
  { name: 'Gunapati’s', note: 'Let’s grow together', logo: '/images/clients/gunapatis.jpg' },
  { name: 'Survlens', note: 'Technology & surveillance partner', logo: '/images/clients/survlens.jpg' },
  // { name: 'August Devices Inc', note: 'Strategic client' },
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
    secondary: { label: 'Contact Us', to: '/contact' },
  },
  {
    id: 'agriculture',
    accent: '#2e9e4f',
    eyebrow: 'Division 02 · Agriculture',
    title: 'Nature’s best,\nfrom farm to the world.',
    text: 'Premium rice, hand-selected spices and refined sugar — exported with farm-fresh integrity.',
    primary: { label: 'Explore Agriculture', to: '/agriculture' },
    secondary: { label: 'Contact Us', to: '/contact' },
  },
  {
    id: 'jewellery',
    accent: '#b88a2e',
    eyebrow: 'Division 03 · Jewellery',
    title: 'Gold & diamond craft,\nrefined to brilliance.',
    text: 'Gold and diamond processing — chains, silver and finished pieces with export-grade precision.',
    primary: { label: 'Explore Jewellery', to: '/jewellery' },
    secondary: { label: 'Contact Us', to: '/contact' },
  },
  {
    id: 'logistics',
    accent: '#0e8a8f',
    eyebrow: 'Division 04 · Logistics',
    title: 'Your global\ngrowth partner.',
    text: 'Air charter, air freight, warehousing, agri cargo, vessel operating & chartering — origin to destination.',
    primary: { label: 'Explore Logistics', to: '/logistics' },
    secondary: { label: 'Contact Us', to: '/contact' },
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

export const agriPage = {
  /* All photos are bundled in public/images/agri/ — swap any file (keeping
     the same name) to change a picture without touching code. */

  /* Rotating photo hero banners — auto-advance + arrow controls */
  banners: [
    {
      eyebrow: 'From Indian Farms · To 25+ Countries',
      title: 'From Indian soil,\nto the world’s table.',
      text: 'Premium rice, hand-selected spices and refined sugar — grown by trusted farmers and shipped end to end.',
      img: '/images/agri/field-green.jpg',
    },
    {
      eyebrow: 'Rooted in 2000+ Farm Partnerships',
      title: 'Grown by farmers\nwe know by name.',
      text: 'We source directly from 2000+ farmer partners — fair, traceable and committed to quality right from the root.',
      img: '/images/agri/bn-farmer.jpg',
    },
    {
      eyebrow: 'Cultivated with Care',
      title: 'Nurtured by hand,\nseason after season.',
      text: 'From transplanting to crop care, every paddy is tended for the best taste, aroma and nutrition.',
      img: '/images/agri/bn-harvest.jpg',
    },
    {
      eyebrow: 'Harvested at Peak Maturity',
      title: 'The right grain,\nat the right time.',
      text: 'Harvested at peak maturity and rushed to our mills to lock in freshness, flavour and quality.',
      img: '/images/agri/harvest.jpg',
    },
    {
      eyebrow: 'Processed to Export Grade',
      title: 'Milled, graded\n& stored with care.',
      text: 'Automated milling, optical colour-sorting and climate-controlled storage — backed by an in-house quality lab.',
      img: '/images/agri/bn-warehouse.jpg',
    },
    {
      eyebrow: 'Beyond Rice',
      title: 'Spices, sugar\n& pulses too.',
      text: 'High-curcumin turmeric, vibrant red chilli, refined sugar and wholesome pulses — a full agri-basket for the world.',
      img: '/images/agri/turmeric.jpg',
    },
    {
      eyebrow: 'Delivered End to End',
      title: 'Shipped to the world,\non time, every time.',
      text: 'FCL, LCL and bulk exports with full documentation and on-time delivery to ports in 25+ countries.',
      img: '/images/agri/bn-port.jpg',
    },
  ],

  /* Top "shop by category" image strip (maruti-style) */
  productCats: [
    { name: 'Rice', img: '/images/agri/cat-rice.jpg', to: '#products' },
    { name: 'Spices', img: '/images/agri/cat-spices.jpg', to: '#beyond-rice' },
    { name: 'Sugar', img: '/images/agri/cat-sugar.jpg', to: '#beyond-rice' },
    { name: 'Pulses', img: '/images/agri/cat-pulses.jpg', to: '#beyond-rice' },
  ],

  /* End-to-end "Seed to Shipment" journey — real photos, start → finish */
  journey: [
    { title: 'Sowing & Planting',     desc: 'Quality seed transplanted into prepared paddies by our 2000+ farmer partners.', img: '/images/agri/field-paddy.jpg' },
    { title: 'Cultivation',           desc: 'Months of careful irrigation, nutrition and crop care across 40+ acres.',         img: '/images/agri/field-green.jpg' },
    { title: 'Harvesting',            desc: 'Grain harvested at peak maturity for the best taste, aroma and nutrition.',        img: '/images/agri/harvest.jpg' },
    { title: 'Milling & Processing',  desc: 'De-stoning, milling and optical colour-sorting to clean, export-grade grain.',    img: '/images/agri/mill.jpg' },
    { title: 'Packaging',             desc: 'Food-grade, export-ready packing in custom weights, bags and private brands.',     img: '/images/agri/ship-breakbulk.jpg' },
    { title: 'Export & Delivery',     desc: 'FCL, LCL and bulk shipments delivered on time to ports in 25+ countries.',        img: '/images/agri/ship-fcl.jpg' },
  ],

  /* Large photo beside the "Welcome to Aerovexa Agriculture" intro */
  welcomeImg: '/images/agri/intro.jpg',

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

  /* "Nature's best · Farm to Export" — six icon steps (maruti-style) */
  process: [
    { title: 'Harvesting',           desc: 'Hand-picked paddy and produce from 2000+ trusted farmer partners.',     kind: 'harvest' },
    { title: 'Processing & Milling', desc: 'Automated milling and de-stoning that lock in quality and shelf life.',  kind: 'mill' },
    { title: 'Sorting & Grading',    desc: 'Optical colour-sorting for clean, uniform, export-grade grain.',         kind: 'sort' },
    { title: 'Quality Check',        desc: 'In-house lab testing for moisture, purity and export compliance.',       kind: 'inspect' },
    { title: 'Packaging',            desc: 'Food-grade, export-ready packing in custom weights and brands.',         kind: 'pack' },
    { title: 'Storage & Export',     desc: 'Climate-controlled storage, documentation and on-time global delivery.', kind: 'ship' },
  ],

  varieties: [
    { name: 'Sona Masoori',        desc: 'Lightweight, aromatic rice balancing taste, nutrition and consistency.', kind: 'sonamasoori', tag: 'Premium Rice',  img: '/images/agri/rice-sona.jpg' },
    { name: 'Kaima (Jeerakasala)', desc: 'Short-grain, naturally fragrant rice — light and fluffy when cooked.',   kind: 'kaima',       tag: 'Aromatic',      img: '/images/agri/rice-kaima.jpg' },
    { name: 'Ponni Rice',          desc: 'Wholesome, delicately flavoured rice, a South-Indian staple.',           kind: 'ponni',       tag: 'Staple',        img: '/images/agri/rice-ponni.jpg' },
    { name: 'Basmati',             desc: 'Long-grain aromatic rice, export grade for global cuisine.',             kind: 'basmati',     tag: 'Export Grade',  img: '/images/agri/rice-basmati.jpg' },
  ],

  alsoExport: [
    { name: 'Turmeric',         desc: 'High-curcumin whole & ground turmeric.', kind: 'turmeric', tag: 'Spice',     img: '/images/agri/turmeric.jpg' },
    { name: 'Red Chilli',       desc: 'Vibrant, pungent chilli — whole & powder.', kind: 'chilli', tag: 'Spice',     img: '/images/agri/chilli.jpg' },
    { name: 'Refined Sugar',    desc: 'Refined & raw sugar for bulk export.',    kind: 'sugar',    tag: 'Sweetener', img: '/images/agri/sugar.jpg' },
    { name: 'Pulses & Grains',  desc: 'Lentils, dal and assorted grains.',       kind: 'pulses',   tag: 'Protein',   img: '/images/agri/pulses.jpg' },
  ],

  /* Import & export shipment types — real cargo photos */
  shipmentTypes: [
    { name: 'FCL — Full Container Load', desc: 'Dedicated 20ft & 40ft containers for high-volume rice, sugar and grain consignments.', kind: 'fcl',       tag: 'Container',    img: '/images/agri/ship-fcl.jpg' },
    { name: 'LCL — Groupage',            desc: 'Consolidated less-than-container loads for mixed and smaller export orders.',          kind: 'lcl',       tag: 'Consolidated', img: '/images/agri/ship-lcl.jpg' },
    { name: 'Reefer — Cold Chain',       desc: 'Temperature-controlled reefer units for perishables and moisture-sensitive produce.', kind: 'reefer',    tag: 'Refrigerated', img: '/images/agri/ship-reefer.jpg' },
    { name: 'Bulk Vessel',               desc: 'Dry-bulk vessel shipments for large-scale grain and sugar cargo across trade routes.', kind: 'bulkship',  tag: 'Sea Freight',  img: '/images/agri/ship-bulk.jpg' },
    { name: 'Air Cargo',                 desc: 'Time-critical air freight for premium spices, samples and urgent consignments.',       kind: 'aircargo',  tag: 'Air Freight',  img: '/images/agri/ship-air.jpg' },
    { name: 'Break-Bulk',                desc: 'Palletised and bagged cargo handling for flexible, port-to-port movement.',            kind: 'breakbulk', tag: 'Palletised',   img: '/images/agri/ship-breakbulk.jpg' },
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

/* ───────────────────────────────────────────────────────────────────────────
 *  DIVISION SHOWCASE PAGES — Electronics, Jewellery, Logistics
 *  Same data-driven layout as the Agriculture page (rendered by
 *  components/DivisionShowcase.jsx). All images are bundled under
 *  public/images/<division>/ (logistics reuses the agri cargo photos).
 * ─────────────────────────────────────────────────────────────────────────── */
export const divisionPages = {
  electronics: {
    banners: [
      { eyebrow: 'Imported · Modified · Market-Ready', title: 'Electronics,\nengineered to spec.', text: 'CC cameras, televisions, components, microcontrollers and gadgets — sourced globally and tuned for your market.', img: '/images/electronics/el-assembly.jpg' },
      { eyebrow: 'Surveillance & Security', title: 'See everything,\nmiss nothing.', text: 'CCTV, IP and PTZ camera systems for homes, enterprises and smart cities.', img: '/images/electronics/el-camera.jpg' },
      { eyebrow: 'Displays & Televisions', title: 'Brilliant screens,\nfor every space.', text: 'Smart TVs, panels and large-format displays — imported and configured to order.', img: '/images/electronics/el-tv.jpg' },
      { eyebrow: 'Components & Boards', title: 'From bare boards\nto finished builds.', text: 'ICs, resistors, capacitors, microcontrollers and dev boards for makers and OEMs.', img: '/images/electronics/el-components.jpg' },
      { eyebrow: 'Sourced Globally · Shipped Worldwide', title: 'Delivered to your\ndoor, end to end.', text: 'QC-tested, custom-modified and export-packed — with full logistics support.', img: '/images/agri/ship-fcl.jpg' },
    ],
    catsEyebrow: 'Our Range', catsTitle: 'Shop by Category', catsSub: 'From surveillance to silicon — a full spectrum of imported and modified electronics.',
    productCats: [
      { name: 'CC Cameras', img: '/images/electronics/el-camera.jpg', to: '#products' },
      { name: 'Televisions', img: '/images/electronics/el-tv.jpg', to: '#products' },
      { name: 'Components', img: '/images/electronics/el-components.jpg', to: '#products' },
      { name: 'Gadgets', img: '/images/electronics/el-gadgets.jpg', to: '#products' },
    ],
    stats: [{ value: '500+', label: 'Component SKUs' }, { value: '24/7', label: 'Sourcing desk' }, { value: '100%', label: 'QC tested' }, { value: '40+', label: 'Countries served' }],
    intro: { eyebrow: 'Imported & Modified Electronics', title: 'Welcome to Aerovexa Electronics', text: ['We import and modify electronic components, gadgets, CC cameras, televisions and the full spectrum of devices — sourced from trusted global manufacturers.', 'Every unit is inspected, tuned to your specification and export-packed, so what arrives is genuinely market-ready.'], img: '/images/electronics/el-components.jpg', cta: { label: 'Talk to Sourcing', to: '/contact' } },
    processEyebrow: 'Our Process', processTitle: 'Sourced · Tuned · Shipped', processSub: 'A disciplined workflow from global sourcing to your door.',
    process: [
      { title: 'Global Sourcing', desc: 'Direct from trusted manufacturers worldwide.', kind: 'source' },
      { title: 'Inspection', desc: 'Incoming QC on every batch.', kind: 'inspect' },
      { title: 'Modification', desc: 'Hardware tuned to your requirement.', kind: 'process' },
      { title: 'Testing', desc: '100% functional testing before dispatch.', kind: 'sort' },
      { title: 'Packing', desc: 'Anti-static, export-grade packaging.', kind: 'pack' },
      { title: 'Shipping', desc: 'Tracked delivery to global ports and doors.', kind: 'ship' },
    ],
    productsEyebrow: 'Top Quality Products', productsTitle: 'What We Deal In', productsSub: 'From bare components to finished, market-ready gadgets.',
    products: [
      { name: 'CC Cameras', desc: 'CCTV, IP & PTZ surveillance systems for home and enterprise.', tag: 'Surveillance', kind: 'camera', img: '/images/electronics/el-camera.jpg' },
      { name: 'Televisions', desc: 'Smart TVs, panels and large-format displays.', tag: 'Displays', kind: 'mcu', img: '/images/electronics/el-tv.jpg' },
      { name: 'Components', desc: 'ICs, resistors, capacitors and electronic building blocks.', tag: 'Parts', kind: 'chip', img: '/images/electronics/el-components.jpg' },
      { name: 'Microcontrollers', desc: 'MCUs, dev boards and embedded modules for makers & OEMs.', tag: 'Boards', kind: 'circuit', img: '/images/electronics/el-mcu.jpg' },
      { name: 'Gadgets & Devices', desc: 'Consumer electronics and the latest imported gadgets.', tag: 'Consumer', kind: 'symbol', img: '/images/electronics/el-gadgets.jpg' },
      { name: 'Modification', desc: 'Custom hardware tuning, soldering and repair to your spec.', tag: 'Custom', kind: 'breadboard', img: '/images/electronics/el-solder.jpg' },
    ],
    why: [
      { t: 'Genuine Sourcing', d: 'Direct from trusted global manufacturers.', kind: 'globe' },
      { t: '100% QC Tested', d: 'Every unit inspected before dispatch.', kind: 'inspect' },
      { t: 'Custom Modification', d: 'Hardware tuned to your requirement.', kind: 'process' },
      { t: 'Fast Turnaround', d: 'A 24/7 sourcing desk at your service.', kind: 'deliver' },
    ],
    reach: { title: 'Trusted across global markets', text: 'Aerovexa sources and ships electronics across 40+ countries.', regions: ['Middle East', 'Southeast Asia', 'Europe', 'Africa', 'Americas', 'Oceania'] },
    shipEyebrow: 'Import & Export', shipTitle: 'How We Ship', shipSub: 'From a single carton to full containers — by the mode that fits your order.',
    shipments: [
      { name: 'FCL — Full Container', desc: 'Dedicated 20ft & 40ft containers for high-volume electronics consignments.', tag: 'Container', kind: 'cargo', img: '/images/agri/ship-fcl.jpg' },
      { name: 'LCL — Groupage', desc: 'Consolidated less-than-container loads for mixed and smaller device orders.', tag: 'Consolidated', kind: 'cargo', img: '/images/agri/ship-lcl.jpg' },
      { name: 'Air Freight', desc: 'Time-critical air freight for urgent, high-value devices and samples.', tag: 'Air', kind: 'air', img: '/images/agri/ship-air.jpg' },
      { name: 'Sea Freight', desc: 'Cost-effective dry-bulk and container sea freight across global trade routes.', tag: 'Sea', kind: 'vessel', img: '/images/agri/ship-bulk.jpg' },
      { name: 'Bonded Warehouse', desc: 'Secure, monitored bonded storage with anti-static handling and inventory control.', tag: 'Storage', kind: 'warehouse', img: '/images/agri/ship-reefer.jpg' },
      { name: 'Door-to-Door', desc: 'Palletised, insured door-to-door delivery with full tracking and documentation.', tag: 'Delivery', kind: 'agricargo', img: '/images/agri/ship-breakbulk.jpg' },
    ],
    journeyEyebrow: 'Source to Shipment', journeyTitle: 'From Factory Floor to Your Door', journeySub: 'How an order moves through Aerovexa Electronics, end to end.',
    journey: [
      { title: 'Sourcing', desc: 'Components and devices sourced from global makers.', img: '/images/electronics/el-assembly.jpg' },
      { title: 'Inspection', desc: 'Incoming quality control on every batch.', img: '/images/electronics/el-test.jpg' },
      { title: 'Modification', desc: 'Soldering, tuning and custom hardware work.', img: '/images/electronics/el-solder.jpg' },
      { title: 'Assembly & Test', desc: 'Functional testing before sign-off.', img: '/images/electronics/el-components.jpg' },
      { title: 'Packing', desc: 'Anti-static, export-ready packaging.', img: '/images/agri/ship-breakbulk.jpg' },
      { title: 'Shipping', desc: 'Tracked delivery to ports and doors worldwide.', img: '/images/agri/ship-fcl.jpg' },
    ],
    certsTitle: 'Certified & compliant', certsSub: 'Sourcing and trade backed by recognised quality standards.',
    ctaTitle: 'Need electronics sourced or modified?', ctaText: 'Talk to our electronics desk for components, gadgets, CCTV, TVs and custom builds.',
  },

  jewellery: {
    banners: [
      { eyebrow: 'Gold · Diamond · Silver', title: 'Crafted to\nperfection.', text: 'Gold and diamond processing with chains, silver and finished pieces — export-grade precision.', img: '/images/jewellery/jw-diamondring.jpg' },
      { eyebrow: 'Heritage Craftsmanship', title: 'Where artistry\nmeets gold.', text: 'Master artisans turn fine gold and certified stones into timeless pieces.', img: '/images/jewellery/jw-chains.jpg' },
      { eyebrow: 'Certified Diamonds', title: 'Brilliance you\ncan trust.', text: 'Ethically sourced, certified loose and set diamonds for every design.', img: '/images/jewellery/jw-diamonds.jpg' },
      { eyebrow: 'Necklaces & Bridal Sets', title: 'Statement pieces,\nfinely finished.', text: 'Necklaces, chains and bridal sets, hand-finished to brilliance.', img: '/images/jewellery/jw-necklace.jpg' },
      { eyebrow: 'Refined Gold · Worldwide', title: 'From bullion\nto the boutique.', text: 'Gold processing and refining backed by hallmarking and global export.', img: '/images/jewellery/jw-gold.jpg' },
    ],
    catsEyebrow: 'Shop by Category', catsTitle: 'Our Collections', catsSub: 'Where heritage craft meets export-grade precision.',
    productCats: [
      { name: 'Rings', img: '/images/jewellery/jw-rings.jpg', to: '#products' },
      { name: 'Chains', img: '/images/jewellery/jw-chains.jpg', to: '#products' },
      { name: 'Diamonds', img: '/images/jewellery/jw-diamonds.jpg', to: '#products' },
      { name: 'Silver', img: '/images/jewellery/jw-silver.jpg', to: '#products' },
    ],
    stats: [{ value: '22K', label: 'Gold purity' }, { value: 'GIA', label: 'Certified stones' }, { value: '100%', label: 'Hallmarked' }, { value: '40+', label: 'Countries served' }],
    intro: { eyebrow: 'Gold & Diamond Craft', title: 'Welcome to Aerovexa Jewellery', text: ['Gold and diamond processing with a curated display of chains, silver jewellery and finished pieces — where heritage craft meets export-grade precision.', 'From hallmarked gold to GIA-certified stones, every piece is crafted, certified and finished to brilliance.'], img: '/images/jewellery/jw-necklace.jpg', cta: { label: 'Enquire Now', to: '/contact' } },
    processEyebrow: 'Our Craft', processTitle: 'From Bullion to Brilliance', processSub: 'Six disciplined steps from raw gold to a finished, certified piece.',
    process: [
      { title: 'Sourcing', desc: 'Hallmarked gold and certified stones.', kind: 'source' },
      { title: 'Refining', desc: 'Melting, alloying and casting.', kind: 'mill' },
      { title: 'Design', desc: 'CAD and hand design to your brief.', kind: 'process' },
      { title: 'Stone Setting', desc: 'Precision setting of diamonds and gems.', kind: 'sort' },
      { title: 'Polishing', desc: 'Hand-polished to a flawless finish.', kind: 'inspect' },
      { title: 'Hallmark & Deliver', desc: 'Certified, hallmarked and securely shipped.', kind: 'deliver' },
    ],
    productsEyebrow: 'Our Collections', productsTitle: 'Shop by Category', productsSub: 'Rings, chains, diamonds, necklaces, silver and finished pieces.',
    products: [
      { name: 'Rings', desc: 'Solitaire, band and statement rings.', tag: 'Gold & Stone', kind: 'ring', img: '/images/jewellery/jw-rings.jpg' },
      { name: 'Gold Chains', desc: 'Gold and rope chains in every weight.', tag: 'Gold', kind: 'chain', img: '/images/jewellery/jw-chains.jpg' },
      { name: 'Diamonds', desc: 'Loose and set, certified stones.', tag: 'Certified', kind: 'diamond', img: '/images/jewellery/jw-diamonds.jpg' },
      { name: 'Necklaces', desc: 'Finished necklace and bridal collections.', tag: 'Finished', kind: 'necklace', img: '/images/jewellery/jw-necklace.jpg' },
      { name: 'Silver', desc: 'Sterling silver jewellery and ornaments.', tag: 'Sterling', kind: 'silver', img: '/images/jewellery/jw-silver.jpg' },
      { name: 'Solitaire & Bridal', desc: 'Engagement solitaires and bespoke bridal pieces.', tag: 'Bespoke', kind: 'piece', img: '/images/jewellery/jw-diamondring.jpg' },
    ],
    why: [
      { t: '22K Purity', d: 'Hallmarked, certified gold.', kind: 'inspect' },
      { t: 'GIA Diamonds', d: 'Ethically sourced, certified stones.', kind: 'globe' },
      { t: 'Master Craft', d: 'Heritage artisans, modern finish.', kind: 'process' },
      { t: 'Bespoke Orders', d: 'Custom designs made to order.', kind: 'deliver' },
    ],
    reach: { title: 'Exported across the world', text: 'Gold, diamond and silver pieces delivered to clients worldwide.', regions: ['Middle East', 'GCC', 'Europe', 'Far East', 'Americas', 'Southeast Asia'] },
    shipEyebrow: 'Secure Logistics', shipTitle: 'Insured, Secure Global Delivery', shipSub: 'High-value consignments shipped with insured, tracked, secure handling.',
    shipments: [
      { name: 'Secure Air Freight', desc: 'Insured, tracked air courier for high-value gold and diamond pieces.', tag: 'Air', kind: 'air', img: '/images/agri/ship-air.jpg' },
      { name: 'Vaulted Storage', desc: 'Bonded, monitored vault storage and secure custody for consignments.', tag: 'Secure', kind: 'warehouse', img: '/images/agri/bn-warehouse.jpg' },
      { name: 'Door-to-Door', desc: 'Sealed, insured door-to-door delivery to your destination worldwide.', tag: 'Delivery', kind: 'cargo', img: '/images/agri/ship-fcl.jpg' },
      { name: 'Armoured Courier', desc: 'Guarded, insured armoured courier movement for premium high-value orders.', tag: 'Guarded', kind: 'cargo', img: '/images/agri/ship-lcl.jpg' },
      { name: 'Customs & Compliance', desc: 'Full hallmarking, valuation, customs clearance and export documentation.', tag: 'Compliance', kind: 'warehouse', img: '/images/agri/ship-reefer.jpg' },
      { name: 'Sea Freight', desc: 'Insured container sea freight for bulk bullion and trade consignments.', tag: 'Sea', kind: 'vessel', img: '/images/agri/ship-bulk.jpg' },
    ],
    certsTitle: 'Hallmarked & certified', certsSub: 'Every piece backed by recognised purity and quality certifications.',
    ctaTitle: 'Looking for gold, diamond or silver pieces?', ctaText: 'Talk to our jewellery team for processing, certified stones and bespoke orders.',
  },

  logistics: {
    productArt: 'shipment',
    banners: [
      { eyebrow: 'Air · Sea · Warehouse', title: 'Your global\ngrowth partner.', text: 'Air charter, air freight, warehousing, agri cargo, vessel operating and chartering — origin to destination.', img: '/images/agri/bn-port.jpg', cta: 'Our Services' },
      { eyebrow: 'Air Freight & Charter', title: 'Speed when\nit matters.', text: 'Dedicated charters and scheduled air freight for time-critical cargo.', img: '/images/agri/ship-air.jpg', cta: 'Our Services' },
      { eyebrow: 'Sea & Bulk', title: 'Scale across\nthe oceans.', text: 'Dry-bulk vessel operating and chartering across global trade routes.', img: '/images/agri/ship-bulk.jpg', cta: 'Our Services' },
      { eyebrow: 'Containers & Consolidation', title: 'Every box,\ntracked end to end.', text: 'FCL and LCL container movements with full documentation and visibility.', img: '/images/agri/ship-fcl.jpg', cta: 'Our Services' },
      { eyebrow: 'Warehousing & Distribution', title: 'Stored, picked,\ndistributed.', text: 'Secure, monitored warehousing with inventory and value-added services.', img: '/images/agri/bn-warehouse.jpg', cta: 'Our Services' },
    ],
    catsEyebrow: 'What We Do', catsTitle: 'Our Services', catsSub: 'Six specialised lines, end to end.',
    productCats: [
      { name: 'Air Freight', img: '/images/agri/ship-air.jpg', to: '#products' },
      { name: 'Sea Freight', img: '/images/agri/ship-bulk.jpg', to: '#products' },
      { name: 'Containers', img: '/images/agri/ship-fcl.jpg', to: '#products' },
      { name: 'Warehousing', img: '/images/agri/bn-warehouse.jpg', to: '#products' },
    ],
    stats: [{ value: '6', label: 'Service lines' }, { value: '40+', label: 'Ports reached' }, { value: '1000+', label: 'Shipments handled' }, { value: '99%', label: 'On-time delivery' }],
    intro: { eyebrow: 'Logistics & Supply Chain', title: 'Your Global Growth Partner', text: ['Comprehensive logistics and supply-chain solutions to streamline operations, enhance efficiency and drive your global business growth.', 'Air, sea, road and warehouse under one roof — from first enquiry to final delivery.'], img: '/images/agri/bn-port.jpg', cta: { label: 'Get in Touch', to: '/contact' } },
    processEyebrow: 'How We Work', processTitle: 'How We Move Your Cargo', processSub: 'A disciplined workflow from first enquiry to final delivery.',
    process: [
      { title: 'Enquiry', desc: 'We scope your cargo, route and timeline.', kind: 'source' },
      { title: 'Planning', desc: 'Mode, carrier and schedule optimised.', kind: 'process' },
      { title: 'Documentation', desc: 'Customs, compliance and paperwork.', kind: 'inspect' },
      { title: 'Handling', desc: 'Pickup, consolidation and loading.', kind: 'logistics' },
      { title: 'Transit', desc: 'Tracked movement across the globe.', kind: 'ship' },
      { title: 'Delivery', desc: 'On-time delivery to door or port.', kind: 'deliver' },
    ],
    productsEyebrow: 'What We Do', productsTitle: 'Our Services', productsSub: 'Six specialised services — select a card to see how we deliver, end to end.',
    products: [
      { name: 'Air Charter', desc: 'Dedicated aircraft for urgent, oversized and AOG cargo.', tag: 'Air', kind: 'air', img: '/images/agri/ship-air.jpg' },
      { name: 'Air Freight', desc: 'Scheduled and consolidated air freight with full visibility.', tag: 'Air', kind: 'air', img: '/images/agri/ship-air.jpg' },
      { name: 'Warehouse', desc: 'Secure storage, inventory management and distribution.', tag: 'Storage', kind: 'warehouse', img: '/images/agri/bn-warehouse.jpg' },
      { name: 'Agri Cargo', desc: 'Perishable and bulk agri handling, farm to port.', tag: 'Perishable', kind: 'agricargo', img: '/images/agri/ship-reefer.jpg' },
      { name: 'Vessel Operating', desc: 'Dry-bulk vessel operating across global trade routes.', tag: 'Sea', kind: 'vessel', img: '/images/agri/ship-bulk.jpg' },
      { name: 'Chartering', desc: 'Voyage and time charters matched to your cargo.', tag: 'Charter', kind: 'cargo', img: '/images/agri/ship-fcl.jpg' },
      { name: 'Customs Clearance', desc: 'Import and export customs brokerage, duties and compliance documentation.', tag: 'Customs', kind: 'warehouse', img: '/images/logistics/lg-warehouse.jpg' },
      { name: 'Project Cargo', desc: 'Heavy, oversized and out-of-gauge project cargo, engineered end to end.', tag: 'Heavy-Lift', kind: 'vessel', img: '/images/agri/ship-bulk.jpg' },
      { name: 'Road Freight', desc: 'FTL and LTL road haulage with first-mile pickup and last-mile delivery.', tag: 'Road', kind: 'cargo', img: '/images/agri/ship-lcl.jpg' },
      { name: 'Door-to-Door Express', desc: 'Fully managed door-to-door express movement with live end-to-end tracking.', tag: 'Express', kind: 'agricargo', img: '/images/agri/ship-breakbulk.jpg' },
    ],
    why: [
      { t: 'Global Network', d: 'Partners across 40+ ports worldwide.', kind: 'globe' },
      { t: 'Multi-Modal', d: 'Air, sea, road and warehouse under one roof.', kind: 'logistics' },
      { t: 'Live Tracking', d: 'Real-time visibility on every shipment.', kind: 'inspect' },
      { t: 'Agri Expertise', d: 'Perishable and bulk cargo specialists.', kind: 'store' },
    ],
    reach: { title: 'Moving cargo across the globe', text: 'From the Middle East to the Americas — Aerovexa moves cargo across the world’s trade routes.', regions: ['Middle East', 'Southeast Asia', 'Europe', 'Africa', 'Americas', 'Oceania'] },
    journeyEyebrow: 'End to End', journeyTitle: 'From Enquiry to Delivery', journeySub: 'Every shipment, handled start to finish.',
    journey: [
      { title: 'Enquiry & Quote', desc: 'Cargo, route and timeline scoped.', img: '/images/agri/bn-port.jpg' },
      { title: 'Booking & Docs', desc: 'Carrier booked, customs documented.', img: '/images/agri/ship-fcl.jpg' },
      { title: 'Handling', desc: 'Pickup, consolidation and loading.', img: '/images/logistics/lg-warehouse.jpg' },
      { title: 'Air & Sea Transit', desc: 'Tracked movement worldwide.', img: '/images/agri/ship-air.jpg' },
      { title: 'Vessel & Bulk', desc: 'Bulk and break-bulk across the oceans.', img: '/images/agri/ship-bulk.jpg' },
      { title: 'Final Delivery', desc: 'On-time delivery to door or port.', img: '/images/agri/ship-breakbulk.jpg' },
    ],
    certsTitle: 'Trusted & compliant', certsSub: 'Accredited for safe, compliant global movement.',
    ctaTitle: 'Have a shipment in mind?', ctaText: 'Talk to our logistics team for air, sea and warehouse solutions — quoted end to end.',
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

/* ───────────────────────────────────────────────────────────────────────────
 *  GALLERY PAGE — real photos per division (rendered by pages/Gallery.jsx).
 *  Each category has a background header image + a grid of captioned photos.
 * ─────────────────────────────────────────────────────────────────────────── */
export const galleries = [
  {
    id: 'electronics', name: 'Electronics', accent: '#1f6fe0', accentDeep: '#1450ab',
    bg: '/images/electronics/el-assembly.jpg',
    blurb: 'Circuits, components, microcontrollers, breadboards, CC cameras, displays & gadgets.',
    items: [
      { src: '/images/electronics/el-circuit.jpg', label: 'Circuit Boards' },
      { src: '/images/electronics/el-components.jpg', label: 'Components' },
      { src: '/images/electronics/el-mcu.jpg', label: 'Microcontrollers' },
      { src: '/images/electronics/el-breadboard.jpg', label: 'Breadboards' },
      { src: '/images/electronics/el-motherboard.jpg', label: 'Motherboards' },
      { src: '/images/electronics/el-ic.jpg', label: 'Integrated Circuits' },
      { src: '/images/electronics/el-transistor.jpg', label: 'Transistors' },
      { src: '/images/electronics/el-resistors.jpg', label: 'Resistors' },
      { src: '/images/electronics/el-capacitors.jpg', label: 'Capacitors' },
      { src: '/images/electronics/el-sensor.jpg', label: 'Sensors & Modules' },
      { src: '/images/electronics/el-cable.jpg', label: 'Cables & Connectors' },
      { src: '/images/electronics/el-camera.jpg', label: 'CC Cameras' },
      { src: '/images/electronics/el-tv.jpg', label: 'Televisions' },
      { src: '/images/electronics/el-gadgets.jpg', label: 'Gadgets & Devices' },
      { src: '/images/electronics/el-smartphone.jpg', label: 'Smart Devices' },
      { src: '/images/electronics/el-drone.jpg', label: 'Drones & UAVs' },
      { src: '/images/electronics/el-scope.jpg', label: 'Test Instruments' },
      { src: '/images/electronics/el-server.jpg', label: 'Servers & Racks' },
      { src: '/images/electronics/el-solder.jpg', label: 'Modification' },
      { src: '/images/electronics/el-assembly.jpg', label: 'Manufacturing' },
      { src: '/images/electronics/el-test.jpg', label: 'Testing & QC' },
    ],
  },
  {
    id: 'agriculture', name: 'Agriculture', accent: '#2e9e4f', accentDeep: '#1f7a3a',
    bg: '/images/agri/field-green.jpg',
    blurb: 'Premium rice varieties, hand-selected spices, refined sugar and wholesome pulses.',
    items: [
      { src: '/images/agri/cat-rice.jpg', label: 'Rice Grains' },
      { src: '/images/agri/rice-sona.jpg', label: 'Sona Masoori' },
      { src: '/images/agri/rice-kaima.jpg', label: 'Kaima Rice' },
      { src: '/images/agri/rice-ponni.jpg', label: 'Ponni Rice' },
      { src: '/images/agri/rice-basmati.jpg', label: 'Basmati' },
      { src: '/images/agri/ag-wheat.jpg', label: 'Wheat & Cereals' },
      { src: '/images/agri/turmeric.jpg', label: 'Turmeric' },
      { src: '/images/agri/chilli.jpg', label: 'Red Chilli' },
      { src: '/images/agri/ag-pepper.jpg', label: 'Black Pepper' },
      { src: '/images/agri/ag-cumin.jpg', label: 'Cumin' },
      { src: '/images/agri/ag-cardamom.jpg', label: 'Cardamom' },
      { src: '/images/agri/cat-spices.jpg', label: 'Mixed Spices' },
      { src: '/images/agri/sugar.jpg', label: 'Refined Sugar' },
      { src: '/images/agri/cat-sugar.jpg', label: 'Sugar Crystals' },
      { src: '/images/agri/ag-jaggery.jpg', label: 'Jaggery' },
      { src: '/images/agri/pulses.jpg', label: 'Pulses & Dal' },
      { src: '/images/agri/field-green.jpg', label: 'Paddy Fields' },
      { src: '/images/agri/ag-tractor.jpg', label: 'Farm Mechanisation' },
      { src: '/images/agri/harvest.jpg', label: 'Harvest' },
      { src: '/images/agri/mill.jpg', label: 'Milling & Processing' },
    ],
  },
  {
    id: 'jewellery', name: 'Jewellery', accent: '#b88a2e', accentDeep: '#8f6a1e',
    bg: '/images/jewellery/jw-diamondring.jpg',
    blurb: 'Rings, gold chains, diamonds, necklaces, pendants, earrings, silver & bullion.',
    items: [
      { src: '/images/jewellery/jw-rings.jpg', label: 'Rings' },
      { src: '/images/jewellery/jw-diamondring.jpg', label: 'Solitaire Rings' },
      { src: '/images/jewellery/jw-chains.jpg', label: 'Gold Chains' },
      { src: '/images/jewellery/jw-necklace.jpg', label: 'Necklaces' },
      { src: '/images/jewellery/jw-goldset.jpg', label: 'Gold Necklace Sets' },
      { src: '/images/jewellery/jw-goldbeads.jpg', label: 'Gold & Bead Pieces' },
      { src: '/images/jewellery/jw-pendant.jpg', label: 'Pendants' },
      { src: '/images/jewellery/jw-earrings.jpg', label: 'Earrings' },
      { src: '/images/jewellery/jw-bangles.jpg', label: 'Gold Bangles' },
      { src: '/images/jewellery/jw-bracelet.jpg', label: 'Bracelets' },
      { src: '/images/jewellery/jw-anklet.jpg', label: 'Anklets' },
      { src: '/images/jewellery/jw-brooch.jpg', label: 'Brooches' },
      { src: '/images/jewellery/jw-silver.jpg', label: 'Silver' },
      { src: '/images/jewellery/jw-pearl.jpg', label: 'Pearls' },
      { src: '/images/jewellery/jw-diamonds.jpg', label: 'Diamonds' },
      { src: '/images/jewellery/jw-ruby.jpg', label: 'Ruby & Coral' },
      { src: '/images/jewellery/jw-sapphire.jpg', label: 'Sapphire' },
      { src: '/images/jewellery/jw-watch.jpg', label: 'Timepieces' },
      { src: '/images/jewellery/jw-gold.jpg', label: 'Gold Bullion' },
      { src: '/images/jewellery/jw-coins.jpg', label: 'Gold Bars' },
    ],
  },
  {
    id: 'logistics', name: 'Logistics', accent: '#0e8a8f', accentDeep: '#0a6669',
    bg: '/images/agri/bn-port.jpg',
    blurb: 'Air charter & freight, warehousing, agri cargo, vessel operating and chartering.',
    items: [
      { src: '/images/agri/ship-air.jpg', label: 'Air Charter & Freight' },
      { src: '/images/logistics/lo-cargoplane.jpg', label: 'Air Cargo Loading' },
      { src: '/images/agri/ship-fcl.jpg', label: 'FCL Containers' },
      { src: '/images/agri/ship-lcl.jpg', label: 'LCL Groupage' },
      { src: '/images/agri/ship-bulk.jpg', label: 'Vessel Operating' },
      { src: '/images/logistics/lo-shipsea.jpg', label: 'Container Vessels' },
      { src: '/images/agri/ship-reefer.jpg', label: 'Agri / Reefer Cargo' },
      { src: '/images/agri/ship-breakbulk.jpg', label: 'Break-Bulk' },
      { src: '/images/agri/bn-port.jpg', label: 'Port Operations' },
      { src: '/images/logistics/lo-terminal.jpg', label: 'Container Terminal' },
      { src: '/images/logistics/lo-dock.jpg', label: 'Dock Handling' },
      { src: '/images/logistics/lo-crane.jpg', label: 'Gantry Cranes' },
      { src: '/images/logistics/lo-yard.jpg', label: 'Container Yard' },
      { src: '/images/logistics/lo-forklift.jpg', label: 'Warehousing' },
      { src: '/images/logistics/lo-pallet.jpg', label: 'Palletised Goods' },
      { src: '/images/agri/bn-warehouse.jpg', label: 'Bonded Storage' },
      { src: '/images/logistics/lg-warehouse.jpg', label: 'Distribution' },
      { src: '/images/logistics/lo-truck.jpg', label: 'Road Freight' },
      { src: '/images/logistics/lo-van.jpg', label: 'Last-Mile Delivery' },
      { src: '/images/logistics/lo-train.jpg', label: 'Rail Freight' },
    ],
  },
]
