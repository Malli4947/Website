/**
 * Art.jsx — self-contained inline SVG artwork.
 * Every gallery tile, division icon and process step renders from these so the
 * site is fully offline-capable. To use real photography instead, swap the
 * <GalleryArt> call inside Division.jsx for an <img src=...> from the CMS.
 */
import React from 'react'

const s = { width: '100%', height: '100%', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }

/* ── Brand logo mark (the chevron-topped “A” with gold bar) ──────────── */
export function LogoMark({ size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <rect width="100" height="100" rx="20" fill="#16294d" />
      <path d="M30 80 L50 28 L70 80" fill="none" stroke="#ffffff" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M34 22 L50 11 L66 22" fill="none" stroke="#d8aa4e" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="37" y="58" width="26" height="8" rx="4" fill="#c8902a" />
    </svg>
  )
}

/* ── Division icons ─────────────────────────────────────────────────── */
export function DivisionIcon({ id, size = 64 }) {
  const map = {
    electronics: (
      <g style={s}>
        <rect x="14" y="20" width="36" height="28" rx="3" />
        <path d="M20 48v6M44 48v6M22 14v6M36 14v6" />
        <circle cx="32" cy="34" r="6" />
        <path d="M8 28h6M8 40h6M50 28h6M50 40h6" />
      </g>
    ),
    agriculture: (
      <g style={s}>
        <path d="M32 54V30" />
        <path d="M32 30c-8 0-14-6-14-14 8 0 14 6 14 14z" />
        <path d="M32 38c8 0 14-5 14-13-8 0-14 5-14 13z" />
        <path d="M18 54h28" />
      </g>
    ),
    jewellery: (
      <g style={s}>
        <path d="M20 22h24l8 10-20 22-20-22z" />
        <path d="M12 32h40M28 22l-4 10 8 22M36 22l4 10-8 22" />
      </g>
    ),
    logistics: (
      <g style={s}>
        <path d="M8 40h30V22H8z" />
        <path d="M38 30h10l8 8v2H38z" />
        <circle cx="20" cy="46" r="4" />
        <circle cx="46" cy="46" r="4" />
        <path d="M8 46h6M28 46h10" />
      </g>
    ),
  }
  return <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">{map[id]}</svg>
}

/* ── Process icons ──────────────────────────────────────────────────── */
export function ProcessIcon({ kind, size = 38 }) {
  const map = {
    source: <g style={s}><circle cx="26" cy="26" r="12" /><path d="M35 35l6 6" /><path d="M26 20v12M20 26h12" /></g>,
    inspect: <g style={s}><path d="M12 32l8 8 20-22" /><circle cx="32" cy="32" r="22" /></g>,
    process: <g style={s}><circle cx="32" cy="32" r="8" /><path d="M32 14v8M32 42v8M14 32h8M42 32h8M20 20l6 6M44 44l-6-6M44 20l-6 6M20 44l6-6" /></g>,
    pack: <g style={s}><path d="M32 12l18 10v20L32 52 14 42V22z" /><path d="M14 22l18 10 18-10M32 32v20" /></g>,
    logistics: <g style={s}><path d="M10 40h28V22H10z" /><path d="M38 30h10l6 6v4H38z" /><circle cx="20" cy="44" r="3.5" /><circle cx="46" cy="44" r="3.5" /></g>,
    deliver: <g style={s}><path d="M14 32l12 12 24-26" /></g>,
    /* agriculture-specific process steps (Farm → Export) */
    harvest: <g style={s}><path d="M32 54V24" /><path d="M32 30c-7 0-11-5-11-12 7 0 11 5 11 12zM32 30c7 0 11-5 11-12-7 0-11 5-11 12zM32 42c-7 0-11-5-11-12 7 0 11 5 11 12zM32 42c7 0 11-5 11-12-7 0-11 5-11 12z" /></g>,
    mill: <g style={s}><path d="M16 14h32l-9 14H25z" /><path d="M25 28v8h14v-8" /><path d="M27 36l-2 16h14l-2-16" /><circle cx="23" cy="19" r="1.4" /><circle cx="32" cy="21" r="1.4" /><circle cx="41" cy="19" r="1.4" /></g>,
    sort: <g style={s}><ellipse cx="32" cy="24" rx="18" ry="7" /><path d="M14 24v7c0 4 8 7 18 7s18-3 18-7v-7" /><path d="M21 24h.01M27 24h.01M33 24h.01M39 24h.01M45 24h.01" strokeWidth="3" /><path d="M26 44v6M32 46v6M38 44v6" /></g>,
    store: <g style={s}><path d="M14 52V28a6 6 0 0112 0v24" /><path d="M34 52V30a6 6 0 0112 0v22" /><path d="M12 52h40M14 36h12M34 38h12" /></g>,
    ship: <g style={s}><path d="M10 40h44l-5 12H15z" /><path d="M18 40V28h16l6 6v6" /><path d="M26 28v-8M26 20h10" /></g>,
    globe: <g style={s}><circle cx="32" cy="32" r="20" /><path d="M12 32h40M32 12v40M32 12c-8 8-8 32 0 40M32 12c8 8 8 32 0 40" /></g>,
  }
  return <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">{map[kind] || map.process}</svg>
}

/* ── Gallery artwork — keyed by `kind` in content.js ────────────────── */
export function GalleryArt({ kind }) {
  const art = {
    /* electronics */
    circuit: <g style={s}><path d="M6 32h12M46 32h12M32 6v12M32 46v12" /><rect x="18" y="18" width="28" height="28" rx="3" /><circle cx="24" cy="24" r="2.5" /><circle cx="40" cy="40" r="2.5" /><path d="M24 24h16v16" /></g>,
    chip: <g style={s}><rect x="20" y="20" width="24" height="24" rx="2" /><path d="M26 14v6M38 14v6M26 44v6M38 44v6M14 26h6M14 38h6M44 26h6M44 38h6" /></g>,
    symbol: <g style={s}><path d="M10 32h12l4-10 8 20 4-10h16" /><circle cx="50" cy="32" r="3" /></g>,
    breadboard: <g style={s}><rect x="12" y="14" width="40" height="36" rx="3" /><path d="M18 22h0M24 22h0M30 22h0M36 22h0M42 22h0M18 30h0M24 30h0M30 30h0M36 30h0M42 30h0M18 42h0M24 42h0M30 42h0M36 42h0M42 42h0" strokeWidth="3" /></g>,
    mcu: <g style={s}><rect x="16" y="16" width="32" height="32" rx="3" /><rect x="26" y="26" width="12" height="12" rx="1" /><path d="M20 12v4M28 12v4M36 12v4M44 12v4M20 48v4M28 48v4M36 48v4M44 48v4" /></g>,
    camera: <g style={s}><path d="M14 24h22l4 6v8H14z" /><circle cx="25" cy="32" r="5" /><path d="M40 30l10-4v14l-10-4M14 38v6M22 44h-8" /></g>,
    /* agriculture */
    grain: <g style={s}><path d="M32 12v40" /><path d="M32 22c-6 0-9-4-9-9 5 0 9 4 9 9zM32 22c6 0 9-4 9-9-5 0-9 4-9 9zM32 34c-6 0-9-4-9-9 5 0 9 4 9 9zM32 34c6 0 9-4 9-9-5 0-9 4-9 9z" /></g>,
    spice: <g style={s}><path d="M22 26h20l-2 22a4 4 0 01-4 4h-8a4 4 0 01-4-4z" /><path d="M20 26h24M28 18l-2 8M36 18l2 8M32 16v10" /></g>,
    sugar: <g style={s}><rect x="16" y="22" width="14" height="14" rx="2" /><rect x="34" y="28" width="14" height="14" rx="2" /><path d="M16 22l4-6h14l-4 6M34 28l4-6h14l-4 6" /></g>,
    pulse: <g style={s}><ellipse cx="24" cy="28" rx="7" ry="5" transform="rotate(-25 24 28)" /><ellipse cx="40" cy="32" rx="7" ry="5" transform="rotate(20 40 32)" /><ellipse cx="30" cy="42" rx="7" ry="5" transform="rotate(-10 30 42)" /></g>,
    harvest: <g style={s}><path d="M14 50c0-12 8-20 18-20M50 50c0-12-8-20-18-20M32 30V14" /><path d="M26 18l6-4 6 4" /></g>,
    pack: <g style={s}><path d="M32 12l18 10v20L32 52 14 42V22z" /><path d="M14 22l18 10 18-10M32 32v20" /></g>,
    /* jewellery */
    ring: <g style={s}><circle cx="32" cy="38" r="14" /><path d="M24 26l8-12 8 12" /><path d="M28 26h8" /></g>,
    chain: <g style={s}><ellipse cx="22" cy="32" rx="6" ry="9" /><ellipse cx="34" cy="32" rx="6" ry="9" /><ellipse cx="46" cy="32" rx="6" ry="9" /></g>,
    diamond: <g style={s}><path d="M20 26h24l-12 26z" /><path d="M14 26l6-10h24l6 10M14 26h36M26 16l-6 10 12 26M38 16l6 10-12 26" /></g>,
    necklace: <g style={s}><path d="M14 16c0 16 8 24 18 24s18-8 18-24" /><path d="M32 40l-4 8h8z" /></g>,
    silver: <g style={s}><circle cx="32" cy="32" r="16" /><circle cx="32" cy="32" r="8" /><path d="M32 16v8M32 40v8M16 32h8M40 32h8" /></g>,
    piece: <g style={s}><path d="M32 12l6 12 13 2-9 9 2 13-12-6-12 6 2-13-9-9 13-2z" /></g>,
    /* logistics */
    shipyard: <g style={s}><path d="M10 44h44l-4 8H14z" /><path d="M16 44V28h16l8 8v8" /><path d="M40 36h8v8" /><path d="M24 28V14M24 14h12" /></g>,
    cargo: <g style={s}><rect x="12" y="26" width="40" height="22" rx="2" /><path d="M20 26v22M28 26v22M36 26v22M44 26v22M12 36h40" /></g>,
    air: <g style={s}><path d="M10 36l44-12-8 16-10-2-6 10-3-9z" /><path d="M30 30l8 4" /></g>,
    warehouse: <g style={s}><path d="M10 50V24l22-10 22 10v26z" /><path d="M22 50V34h20v16M22 42h20" /></g>,
    vessel: <g style={s}><path d="M10 38h44l-5 12H15z" /><path d="M18 38V26h14l6 6v6" /><path d="M26 26v-8M26 18h10" /></g>,
    agricargo: <g style={s}><rect x="14" y="28" width="36" height="20" rx="2" /><path d="M20 28c0-6 5-10 12-10s12 4 12 10M26 28v20M38 28v20" /></g>,
  }
  return <>{art[kind] || art.chip}</>
}

/* ── Wide port / shipment banner scene (seashell-style backdrop) ────── */
export function BannerScene() {
  const w = { fill: 'none', stroke: '#ffffff', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }
  return (
    <svg viewBox="0 0 1200 520" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">
      {/* sun */}
      <circle cx="980" cy="150" r="54" fill="#d8aa4e" opacity="0.55" />
      {/* gantry crane */}
      <g style={w} opacity="0.55">
        <path d="M120 360V150M300 360V150M120 150h220M150 150l-30-40h260l-30 40M250 150v40" />
        <rect x="232" y="190" width="36" height="30" />
      </g>
      {/* cargo ship + containers */}
      <g style={w} opacity="0.7">
        <path d="M430 360h470l-40 70H470z" />
        <path d="M470 360v-40h360v40" />
        {/* container stacks */}
        <rect x="500" y="300" width="60" height="36" />
        <rect x="566" y="300" width="60" height="36" />
        <rect x="632" y="300" width="60" height="36" />
        <rect x="698" y="300" width="60" height="36" />
        <rect x="533" y="262" width="60" height="36" />
        <rect x="599" y="262" width="60" height="36" />
        <rect x="665" y="262" width="60" height="36" />
        {/* bridge tower */}
        <path d="M780 320v-70h50v70M790 250v-26h30v26" />
      </g>
      {/* waves */}
      <g style={w} opacity="0.4">
        <path d="M60 450c40-18 80-18 120 0s80 18 120 0 80-18 120 0 80 18 120 0 80-18 120 0 80 18 120 0 80-18 120 0 80 18 120 0" />
        <path d="M0 482c40-18 80-18 120 0s80 18 120 0 80-18 120 0 80 18 120 0 80-18 120 0 80 18 120 0 80-18 120 0 80 18 120 0 80-18 120 0" />
      </g>
      {/* wheat motif */}
      <g style={w} opacity="0.5">
        <path d="M1080 430V330" />
        <path d="M1080 360c-14 0-22-10-22-22 12 0 22 10 22 22zM1080 360c14 0 22-10 22-22-12 0-22 10-22 22zM1080 338c-14 0-22-10-22-22 12 0 22 10 22 22zM1080 338c14 0 22-10 22-22-12 0-22 10-22 22z" />
      </g>
      {/* birds */}
      <g style={w} opacity="0.5">
        <path d="M700 120c8-8 12-8 20 0M724 124c8-8 12-8 20 0M760 110c8-8 12-8 20 0" />
      </g>
    </svg>
  )
}

/* ════════════════════════════════════════════════════════════════════
   RICH, FULL-COLOUR "PHOTO-STYLE" ILLUSTRATIONS
   Used for the Agriculture product showcase + shipment-type cards so the
   page reads like the image-led reference (marutiagroproducts.in) while
   staying 100% offline. Each scene is a self-contained 400×280 SVG.
   ════════════════════════════════════════════════════════════════════ */

/* deterministic grain scatter — avoids Math.random so renders are stable */
const RICE_GRAINS = [
  [70, 196, -18], [92, 200, 14], [114, 195, -8], [136, 199, 22], [86, 188, 8],
  [110, 186, -20], [132, 190, 10], [78, 206, 18], [100, 208, -12], [124, 205, 6],
  [148, 200, -16], [62, 204, 12], [146, 188, -6], [120, 196, 16],
]

export function ProduceArt({ kind = 'rice' }) {
  const P = {
    sonamasoori: { scene: 'rice', g: '#f3ecd9', bg1: '#e9f6ed', bg2: '#bfe6c6', sack: '#cdb589', band: '#2e9e4f' },
    kaima: { scene: 'rice', g: '#efe6cf', bg1: '#fbf3df', bg2: '#f3dca6', sack: '#caa86c', band: '#c8902a' },
    ponni: { scene: 'rice', g: '#f5efe0', bg1: '#eaf2fb', bg2: '#c6dcf3', sack: '#c4b48c', band: '#1f6fe0' },
    basmati: { scene: 'rice', g: '#faf4e6', bg1: '#f4eee0', bg2: '#e0cda4', sack: '#bb9c63', band: '#8f6a1e' },
    turmeric: { scene: 'turmeric', bg1: '#fff6da', bg2: '#ffce72' },
    chilli: { scene: 'chilli', bg1: '#fde7e0', bg2: '#f4a08c' },
    sugar: { scene: 'sugar', bg1: '#eef4fb', bg2: '#d4e3f4' },
    pulses: { scene: 'pulses', bg1: '#fbf1df', bg2: '#eccf9c' },
  }
  P.grain = P.sonamasoori; P.spice = P.turmeric; P.pulse = P.pulses
  const c = P[kind] || P.sonamasoori
  const id = `pa-${kind}`

  const scenes = {
    rice: (
      <>
        {/* burlap sack */}
        <path d="M236 96q60-26 118 0l16 152q-74 22-150 0z" fill={`url(#${id}-sk)`} stroke="rgba(0,0,0,0.12)" strokeWidth="2" />
        <path d="M236 96q60 26 118 0q-16-36-59-36t-59 36z" fill="#fff" opacity="0.9" />
        {/* rice spilling at the open top */}
        <g fill={c.g} stroke="rgba(0,0,0,0.08)" strokeWidth="0.6">
          <ellipse cx="278" cy="92" rx="5" ry="2.2" transform="rotate(-15 278 92)" />
          <ellipse cx="296" cy="96" rx="5" ry="2.2" transform="rotate(12 296 96)" />
          <ellipse cx="312" cy="92" rx="5" ry="2.2" transform="rotate(-8 312 92)" />
          <ellipse cx="288" cy="100" rx="5" ry="2.2" transform="rotate(20 288 100)" />
        </g>
        {/* label patch */}
        <rect x="262" y="150" width="66" height="56" rx="8" fill="#fff" opacity="0.95" />
        <rect x="262" y="150" width="66" height="16" rx="8" fill={c.band} />
        <circle cx="295" cy="182" r="13" fill="none" stroke={c.band} strokeWidth="2.4" />
        <path d="M289 182l4 4 8-9" fill="none" stroke={c.band} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        {/* wooden bowl heaped with rice */}
        <ellipse cx="110" cy="244" rx="92" ry="16" fill="rgba(0,0,0,0.08)" />
        <path d="M34 205a76 30 0 00152 0z" fill="#a9743f" />
        <path d="M34 205a76 30 0 00152 0z" fill="#000" opacity="0.12" />
        <ellipse cx="110" cy="205" rx="76" ry="24" fill="#c08b52" />
        <path d="M48 200q62-46 124 0a72 22 0 01-124 0z" fill={c.g} />
        <g fill="#fff" opacity="0.5" stroke="rgba(0,0,0,0.06)" strokeWidth="0.5">
          {RICE_GRAINS.map(([x, y, r], i) => (
            <ellipse key={i} cx={x} cy={y} rx="4.6" ry="1.9" transform={`rotate(${r} ${x} ${y})`} />
          ))}
        </g>
      </>
    ),
    turmeric: (
      <>
        {/* turmeric fingers */}
        <g fill="#e8881e" stroke="#b9620c" strokeWidth="1.6">
          <path d="M60 196q-22-8-14-30t34-10q16 6 8 26t-28 14z" />
          <path d="M96 210q-26-4-24-28t36-16q18 4 14 26t-26 18z" transform="rotate(8 100 200)" />
          <path d="M150 198q-24-2-26-26t34-20q20 2 18 24t-26 22z" />
        </g>
        {/* powder mound */}
        <path d="M236 222q44-86 88 0z" fill="#f0a91f" />
        <path d="M236 222q44-86 88 0z" fill="#fff" opacity="0.12" />
        <ellipse cx="280" cy="222" rx="44" ry="9" fill="#d98e12" />
        {/* wooden spoon with powder */}
        <rect x="300" y="120" width="60" height="9" rx="4" transform="rotate(34 300 120)" fill="#9c6b34" />
        <ellipse cx="296" cy="150" rx="22" ry="14" fill="#9c6b34" />
        <ellipse cx="296" cy="148" rx="16" ry="9" fill="#e8a01c" />
      </>
    ),
    chilli: (
      <>
        {/* whole red chillies */}
        <g stroke="#a51b12" strokeWidth="1.6">
          <path d="M70 120q40 6 56 64q4 16-10 16q-18 0-30-30t-16-50z" fill="#d62b1f" />
          <path d="M118 130q34 14 40 70q2 14-12 12q-16-2-22-34t-6-48z" fill="#e23a23" />
        </g>
        <g fill="#2e9e4f" stroke="#1f7a3a" strokeWidth="1.4">
          <path d="M70 120l-12-14 14 4 4-14 6 16z" />
          <path d="M118 130l-10-16 14 6 6-12 4 16z" />
        </g>
        {/* bowl of chilli powder */}
        <ellipse cx="280" cy="250" rx="86" ry="14" fill="rgba(0,0,0,0.08)" />
        <path d="M206 206a74 28 0 00148 0z" fill="#7a2016" />
        <ellipse cx="280" cy="206" rx="74" ry="22" fill="#9c2a1c" />
        <path d="M216 202q64-40 128 0a70 20 0 01-128 0z" fill="#c63322" />
        <path d="M216 202q64-40 128 0a70 20 0 01-128 0z" fill="#fff" opacity="0.08" />
      </>
    ),
    sugar: (
      <>
        {/* glass jar of sugar */}
        <rect x="60" y="96" width="120" height="150" rx="16" fill="#eaf1f8" opacity="0.6" stroke="#cdd9e6" strokeWidth="2" />
        <rect x="58" y="84" width="124" height="22" rx="8" fill="#c9d6e4" />
        <rect x="72" y="150" width="96" height="86" rx="10" fill="#fbfdff" />
        <g fill="#dfe8f2">
          {[...Array(5)].map((_, r) => [...Array(6)].map((_, q) => (
            <circle key={`${r}-${q}`} cx={84 + q * 16} cy={166 + r * 14} r="3" />
          )))}
        </g>
        {/* stacked sugar cubes */}
        <g stroke="#cdd9e6" strokeWidth="1.4">
          <rect x="244" y="184" width="44" height="44" rx="5" fill="#fdfeff" />
          <rect x="292" y="184" width="44" height="44" rx="5" fill="#f3f7fc" />
          <rect x="268" y="138" width="44" height="44" rx="5" fill="#fdfeff" />
        </g>
        {/* scattered crystals */}
        <g fill="#cdd9e6"><circle cx="232" cy="238" r="3" /><circle cx="346" cy="232" r="3" /><circle cx="290" cy="246" r="3" /></g>
      </>
    ),
    pulses: (
      <>
        {/* wooden bowl */}
        <ellipse cx="200" cy="250" rx="120" ry="18" fill="rgba(0,0,0,0.08)" />
        <path d="M96 198a104 32 0 00208 0z" fill="#9c6b34" />
        <ellipse cx="200" cy="198" rx="104" ry="30" fill="#b9854a" />
        {/* mixed lentils in concentric wedges */}
        <path d="M110 195q90-46 180 0a98 24 0 01-180 0z" fill="#e0b352" />
        <g stroke="rgba(0,0,0,0.07)" strokeWidth="0.5">
          {/* toor dal (yellow) */}
          <g fill="#e8b93f">{[[140, 188], [158, 182], [176, 186], [150, 196], [170, 194]].map(([x, y], i) => <ellipse key={`y${i}`} cx={x} cy={y} rx="5.5" ry="4" />)}</g>
          {/* masoor (orange) */}
          <g fill="#d8702f">{[[200, 180], [218, 186], [196, 192], [214, 196], [232, 190]].map(([x, y], i) => <ellipse key={`o${i}`} cx={x} cy={y} rx="5.5" ry="4" />)}</g>
          {/* moong (green) */}
          <g fill="#5a8f3c">{[[250, 184], [266, 190], [244, 194], [262, 198], [278, 188]].map(([x, y], i) => <ellipse key={`g${i}`} cx={x} cy={y} rx="5" ry="3.6" />)}</g>
          {/* chana (brown) */}
          <g fill="#9c6b3a">{[[126, 192], [288, 196], [200, 202]].map(([x, y], i) => <circle key={`b${i}`} cx={x} cy={y} r="4.6" />)}</g>
        </g>
      </>
    ),
  }

  return (
    <svg viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={c.bg1} /><stop offset="1" stopColor={c.bg2} />
        </linearGradient>
        {c.sack && (
          <linearGradient id={`${id}-sk`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={c.sack} /><stop offset="1" stopColor="#6f5429" />
          </linearGradient>
        )}
      </defs>
      <rect width="400" height="280" fill={`url(#${id}-bg)`} />
      {scenes[c.scene]}
    </svg>
  )
}

/* ── Import / export shipment-type illustrations ────────────────────── */
export function ShipmentArt({ kind = 'fcl' }) {
  const id = `sa-${kind}`
  const sky = (a, b) => (
    <>
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={a} /><stop offset="1" stopColor={b} />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill={`url(#${id}-sky)`} />
    </>
  )
  const scenes = {
    fcl: (
      <>
        {sky('#dff0ff', '#bcdcf4')}
        <rect y="186" width="400" height="54" fill="#cdd6df" />
        <ellipse cx="200" cy="200" rx="150" ry="14" fill="rgba(0,0,0,0.10)" />
        {/* 40ft container */}
        <rect x="70" y="108" width="260" height="86" rx="6" fill="#c0392b" stroke="#8c281d" strokeWidth="2" />
        <g stroke="#9c2f22" strokeWidth="2">{[...Array(15)].map((_, i) => <line key={i} x1={84 + i * 16} y1="110" x2={84 + i * 16} y2="192" />)}</g>
        {/* doors */}
        <rect x="296" y="108" width="34" height="86" rx="3" fill="#a83224" />
        <line x1="307" y1="112" x2="307" y2="190" stroke="#7a2218" strokeWidth="3" />
        <line x1="319" y1="112" x2="319" y2="190" stroke="#7a2218" strokeWidth="3" />
        <text x="180" y="160" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="22" fontWeight="700" fill="#fff" opacity="0.92">AERO</text>
      </>
    ),
    lcl: (
      <>
        {sky('#e3f1ff', '#c2def2')}
        <rect y="186" width="400" height="54" fill="#cdd6df" />
        {/* open container shell */}
        <rect x="48" y="96" width="304" height="104" rx="6" fill="#e8edf2" stroke="#b7c2cd" strokeWidth="2" />
        <rect x="48" y="96" width="22" height="104" fill="#cfd8e0" />
        {/* mixed cargo inside */}
        <rect x="84" y="150" width="56" height="48" rx="3" fill="#d98e3a" stroke="#b06e22" strokeWidth="1.5" />
        <rect x="148" y="132" width="64" height="66" rx="3" fill="#e0b352" stroke="#b8862c" strokeWidth="1.5" />
        <rect x="220" y="146" width="52" height="52" rx="3" fill="#5a8f6a" stroke="#3f6e4c" strokeWidth="1.5" />
        <rect x="280" y="126" width="58" height="72" rx="3" fill="#5b7fa6" stroke="#3f6080" strokeWidth="1.5" />
        <g stroke="rgba(255,255,255,0.5)" strokeWidth="2">
          <line x1="112" y1="150" x2="112" y2="198" /><line x1="180" y1="132" x2="180" y2="198" />
          <line x1="246" y1="146" x2="246" y2="198" /><line x1="309" y1="126" x2="309" y2="198" />
        </g>
      </>
    ),
    reefer: (
      <>
        {sky('#e6f6ff', '#bfe4f2')}
        <rect y="186" width="400" height="54" fill="#cdd6df" />
        <ellipse cx="200" cy="200" rx="150" ry="14" fill="rgba(0,0,0,0.10)" />
        {/* white reefer container */}
        <rect x="60" y="104" width="280" height="92" rx="6" fill="#f4f8fb" stroke="#b9c6d2" strokeWidth="2" />
        <g stroke="#dde6ee" strokeWidth="2">{[...Array(13)].map((_, i) => <line key={i} x1={78 + i * 18} y1="106" x2={78 + i * 18} y2="194" />)}</g>
        {/* refrigeration unit panel */}
        <rect x="60" y="104" width="74" height="92" rx="6" fill="#dfe9f1" stroke="#b9c6d2" strokeWidth="2" />
        <g stroke="#9fb2c2" strokeWidth="2">{[...Array(5)].map((_, i) => <line key={i} x1="70" y1={120 + i * 11} x2="124" y2={120 + i * 11} />)}</g>
        <rect x="80" y="166" width="34" height="18" rx="3" fill="#16294d" />
        <text x="97" y="180" textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="700" fill="#5cf2b0">-18°</text>
        {/* snowflake */}
        <g stroke="#2f9bd6" strokeWidth="3" strokeLinecap="round">
          <line x1="245" y1="128" x2="245" y2="172" /><line x1="223" y1="150" x2="267" y2="150" />
          <line x1="229" y1="134" x2="261" y2="166" /><line x1="261" y1="134" x2="229" y2="166" />
        </g>
      </>
    ),
    bulkship: (
      <>
        {sky('#dcefff', '#bfe6f4')}
        <rect y="170" width="400" height="70" fill="#3f8fc4" />
        <path d="M0 178q50-12 100 0t100 0 100 0 100 0v62H0z" fill="#357fb0" opacity="0.6" />
        {/* bulk carrier hull */}
        <path d="M52 150h300l-30 56H82z" fill="#16294d" />
        <rect x="52" y="138" width="252" height="14" fill="#c0392b" />
        {/* cargo holds with grain */}
        <g>
          <rect x="86" y="120" width="58" height="20" fill="#e0b352" /><rect x="86" y="120" width="58" height="20" fill="none" stroke="#16294d" strokeWidth="2" />
          <rect x="152" y="120" width="58" height="20" fill="#e0b352" /><rect x="152" y="120" width="58" height="20" fill="none" stroke="#16294d" strokeWidth="2" />
          <rect x="218" y="120" width="58" height="20" fill="#e0b352" /><rect x="218" y="120" width="58" height="20" fill="none" stroke="#16294d" strokeWidth="2" />
        </g>
        {/* bridge + funnel */}
        <rect x="296" y="96" width="44" height="44" fill="#eef2f6" stroke="#16294d" strokeWidth="2" />
        <g fill="#16294d"><rect x="304" y="104" width="8" height="8" /><rect x="318" y="104" width="8" height="8" /><rect x="304" y="118" width="8" height="8" /><rect x="318" y="118" width="8" height="8" /></g>
        <rect x="312" y="72" width="16" height="26" rx="3" fill="#c0392b" />
      </>
    ),
    aircargo: (
      <>
        {sky('#dbeeff', '#b6d8f0')}
        <path d="M40 70q60-14 120 0" stroke="#fff" strokeWidth="2" strokeDasharray="6 8" fill="none" opacity="0.7" />
        {/* cargo plane */}
        <g>
          <path d="M120 96q120-26 220-6q16 4 16 14t-16 12q-110 16-220-6z" fill="#eef3f8" stroke="#b9c6d2" strokeWidth="2" />
          <path d="M300 104l46-44 10 6-28 44z" fill="#c0392b" />
          <path d="M210 100l-30-46 14-2 44 44z" fill="#cdd9e6" />
          <path d="M210 110l-26 40 14 2 40-40z" fill="#cdd9e6" />
          <g fill="#9fb2c2">{[...Array(7)].map((_, i) => <circle key={i} cx={170 + i * 22} cy="98" r="3.4" />)}</g>
          <path d="M336 104q14 0 18 6q-4 6-18 6z" fill="#16294d" />
        </g>
        {/* ground + ULD loader */}
        <rect y="190" width="400" height="50" fill="#cdd6df" />
        <rect x="150" y="158" width="90" height="34" rx="3" fill="#d98e3a" stroke="#b06e22" strokeWidth="2" />
        <path d="M150 158l14-12h74l16 12z" fill="#e0b352" stroke="#b06e22" strokeWidth="2" />
        <circle cx="172" cy="196" r="9" fill="#16294d" /><circle cx="222" cy="196" r="9" fill="#16294d" />
      </>
    ),
    breakbulk: (
      <>
        {sky('#e6eef6', '#c6d6e6')}
        <rect y="194" width="400" height="46" fill="#c4ccd5" />
        {/* crane hook + sling of bags */}
        <line x1="250" y1="0" x2="250" y2="58" stroke="#16294d" strokeWidth="4" />
        <path d="M250 58l-34 34h68z" fill="none" stroke="#16294d" strokeWidth="3" />
        <g fill="#d9b36a" stroke="#a9803c" strokeWidth="1.6">
          <ellipse cx="230" cy="104" rx="20" ry="14" /><ellipse cx="268" cy="104" rx="20" ry="14" /><ellipse cx="249" cy="118" rx="22" ry="15" />
        </g>
        {/* stacked pallets with bags on dock */}
        <g>
          <rect x="40" y="170" width="120" height="14" fill="#9c6b34" />
          <g fill="#e0b352" stroke="#b8862c" strokeWidth="1.6">
            <ellipse cx="70" cy="156" rx="22" ry="15" /><ellipse cx="110" cy="156" rx="22" ry="15" /><ellipse cx="148" cy="156" rx="20" ry="14" />
            <ellipse cx="90" cy="138" rx="22" ry="15" /><ellipse cx="130" cy="138" rx="22" ry="15" />
          </g>
          <rect x="40" y="184" width="120" height="10" fill="#7c531f" />
        </g>
        <g>
          <rect x="300" y="172" width="92" height="12" fill="#9c6b34" />
          <g fill="#d98e3a" stroke="#b06e22" strokeWidth="1.6">
            <rect x="312" y="138" width="32" height="34" rx="2" /><rect x="348" y="138" width="32" height="34" rx="2" /><rect x="330" y="110" width="32" height="28" rx="2" />
          </g>
        </g>
      </>
    ),
  }
  return (
    <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {scenes[kind] || scenes.fcl}
    </svg>
  )
}

/* ── Small UI icons ─────────────────────────────────────────────────── */
export function UIIcon({ name, size = 22 }) {
  const map = {
    arrow: <path d="M5 12h14M13 6l6 6-6 6" style={s} />,
    mail: <g style={s}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></g>,
    phone: <path d="M5 4h4l2 5-3 2a11 11 0 005 5l2-3 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" style={s} />,
    pin: <g style={s}><path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" /><circle cx="12" cy="9" r="2.5" /></g>,
    clock: <g style={s}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></g>,
    wa: <path d="M12 2a10 10 0 00-8.5 15.2L2 22l4.9-1.4A10 10 0 1012 2zm5 13.5c-.2.6-1.2 1.2-1.7 1.2-.4 0-1 .1-3-1a11 11 0 01-4.2-4.2c-.4-.7-.6-1.2-.6-1.7s.5-1.3.7-1.5c.2-.2.4-.2.6-.2h.4c.2 0 .4 0 .6.5l.8 1.9c0 .2 0 .3-.1.5l-.4.5c-.2.2-.3.4-.1.7a8 8 0 003.6 3.1c.3.1.5.1.7-.1l.6-.7c.2-.2.3-.2.6-.1l1.8.9c.3.1.3.5.2.8z" fill="currentColor" stroke="none" />,
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">{map[name]}</svg>
}
