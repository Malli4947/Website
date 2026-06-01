# Aerovexa Exim Private Limited — Website

A professional, fully responsive, animated **multi-page** React.js website for
**Aerovexa Exim Private Limited**, an import & export company spanning four
sectors:

> **Electronics → Agriculture → Jewellery → Logistics**

Each division has its **own dedicated page**, styled after its reference site,
and unified by the company's navy + gold brand frame (sampled from the logo).

## 🧭 Pages (React Router)

| Route | Page | Styled after |
|-------|------|--------------|
| `/` | **Home** — rotating banner slider + division cards + about teaser + reach + clients | — |
| `/about` | **About Us** — story, divisions, why-Aerovexa, counters | — |
| `/contact` | **Contact Us** — contact cards + enquiry form | — |
| `/electronics` | **Electronics** — categories + process + gallery | reference layout |
| `/agriculture` | **Agriculture** — products + "Farm to Export" process + gallery | marutiagroproducts.in |
| `/jewellery` | **Jewellery** — gold-rate strip + category tiles + process + gallery | aksharametals.co.in |
| `/logistics` | **Logistics** — "What We Do" services + animated counters + gallery | seashellgroup.in |

**Logistics services** are exactly the six requested lines (with descriptions):
Air Charter · Air Freight · Warehouse · Agri Cargo · Vessel Operating · Chartering Services.

---

## ✨ Features

- **Four colour-coded divisions** in the requested order — Electronics (blue),
  Agriculture (green), Jewellery (gold), Logistics (teal).
- **CMS-style content layer** — every banner, headline, stat, gallery item and
  contact detail lives in one file: [`src/data/content.js`](src/data/content.js).
  Edit content without touching layout.
- **Gallery for every division** with the exact requested visuals:
  - Electronics — circuit diagrams, components, electronic symbols, breadboards, microcontrollers, CC cameras
  - Agriculture — grains, spices, sugar, pulses, harvest, export packs
  - Jewellery — rings, chains, diamonds, necklaces, silver, finished pieces
  - Logistics — shipyards, cargo handling, air freight, warehousing, vessels, agri cargo
- **CMS banners** per division + animated hero, process band ("Our Process"),
  global reach, and key clients (**Gunapatis**, **August**).
- **Full responsiveness** — desktop, tablet and mobile with a slide-in mobile menu.
- **Animations everywhere** — scroll-reveal, staggered grids, floating cards,
  marquee strip, scroll-progress bar, hover micro-interactions (Framer Motion).
- **Contact** — enquiry form + Email and phones **+91 73821 14448 / +91 77994 58878**,
  plus a floating WhatsApp button.
- **Self-contained artwork** — all gallery/icon visuals are inline SVG, so the
  site renders offline. Swap in real photography via `content.js` anytime.

## 🎨 Brand colours (from the logo)

| Token | Value | Use |
|-------|-------|-----|
| Navy | `#16294d` | Primary brand / headers |
| Gold | `#d8aa4e` | Accents / CTAs |
| Electronics | `#1f6fe0` | Division 01 |
| Agriculture | `#2e9e4f` | Division 02 |
| Jewellery | `#b88a2e` | Division 03 |
| Logistics | `#0e8a8f` | Division 04 |

## 🚀 Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server → http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

> Requires Node 18+. Built with **Vite + React 18 + Framer Motion**.

## 🗂 Structure

```
src/
  data/content.js        ← single source of truth (the "CMS")
  styles/index.css       ← brand system + responsive + animations
  components/
    Art.jsx              ← inline SVG logo, icons & gallery artwork
    Reveal.jsx Section.jsx ScrollToTop.jsx
    Navbar.jsx Footer.jsx Strip.jsx
    BannerSlider.jsx     ← home rotating banner
    PageBanner.jsx       ← inner-page top banner + breadcrumb
    ServiceCards.jsx WhyChoose.jsx Counters.jsx
    GalleryBlock.jsx DivisionProcess.jsx CTABand.jsx
    DivisionShell.jsx    ← injects each sector's accent colour
    Clients.jsx
  pages/
    Home.jsx About.jsx Contact.jsx
    DivisionPage.jsx     ← one configurable page for all four sectors
  App.jsx                ← router + layout
```

## 🔧 Editing content

Open [`src/data/content.js`](src/data/content.js):

- **Banners / copy** — `divisions[].banner`, `.headline`, `.blurb`
- **Offerings & stats** — `divisions[].offerings`, `.stats`
- **Galleries** — `divisions[].gallery` (set `kind` to pick the SVG, or replace
  the `<GalleryArt>` call in `Division.jsx` with an `<img>` for real photos)
- **Contact / clients** — `contact`, `clients`

---

Design references honoured: seashellgroup.in (logistics), aksharametals.co.in
(jewellery), sreebell.com & marutiagroproducts.in (agriculture) — reinterpreted
into one cohesive multi-sector experience.
