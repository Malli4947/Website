import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import DivisionShell from '../components/DivisionShell.jsx'
import Counters from '../components/Counters.jsx'
import CTABand from '../components/CTABand.jsx'
import { SectionHead } from '../components/Section.jsx'
import Reveal, { Stagger, itemVar } from '../components/Reveal.jsx'
import { GalleryArt, ProduceArt, ShipmentArt, BannerScene, ProcessIcon, UIIcon } from '../components/Art.jsx'
import { agriPage, certifications } from '../data/content.js'

/**
 * Agriculture — rebuilt to mirror the marutiagroproducts.in layout:
 *   1. Rotating photo HERO banner ("Manufacturers & Exporters …")
 *   2. Stats band
 *   3. "Welcome" intro with a real photo
 *   4. "Nature's best · Farm to Export" PROCESS band (image steps)
 *   5. Top-quality product cards (rice + spices) with real photos
 *   6. Shipment types (image cards)
 *   7. Global reach, certifications, sustainability, gallery, CTA
 *
 * Every photo falls back to the original SVG art if its URL fails to load,
 * so the page never shows a broken image. Swap the `img` URLs in
 * data/content.js for your own product photography in production.
 */

/* ---- Photo that gracefully degrades to SVG art on error ------------- */
function Photo({ src, alt, fallback, className }) {
  const [failed, setFailed] = useState(false)
  if (src && !failed) {
    return (
      <img
        className={className}
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    )
  }
  return fallback
}

/* ---- Image-led product / shipment card ------------------------------ */
function ImgCard({ item, Art, showView }) {
  return (
    <motion.article className="imgcard" variants={itemVar}>
      <div className="imgcard__img">
        {item.tag && <span className="imgcard__tag">{item.tag}</span>}
        <Photo src={item.img} alt={item.name} fallback={<Art kind={item.kind} />} />
      </div>
      <div className="imgcard__body">
        <h4>{item.name}</h4>
        <p>{item.desc}</p>
        {showView && (
          <a className="imgcard__view" href="#products">
            View <UIIcon name="arrow" size={16} />
          </a>
        )}
      </div>
    </motion.article>
  )
}

/* ---- Auto-advancing card carousel (6s + arrow controls) ------------- */
function CardCarousel({ items, Art, showView = false, interval = 6000 }) {
  const trackRef = useRef(null)
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)

  // bring the active card to the start of the track
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const card = track.children[idx]
    if (card) track.scrollTo({ left: card.offsetLeft, behavior: 'smooth' })
  }, [idx])

  // auto-advance every `interval`; the timer RESETS whenever idx changes
  // (so an arrow click also waits the full 6s before the next auto-advance)
  useEffect(() => {
    if (paused || items.length <= 1) return
    const t = setTimeout(() => setIdx((p) => (p + 1) % items.length), interval)
    return () => clearTimeout(t)
  }, [idx, paused, items.length, interval])

  const go = (dir) => setIdx((p) => (p + dir + items.length) % items.length)

  return (
    <div className="carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <button className="carousel__nav prev" onClick={() => go(-1)} aria-label="Previous">
        <UIIcon name="arrow" size={20} />
      </button>
      <motion.div
        className="carousel__track"
        ref={trackRef}
        initial="hide"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        variants={{ show: { transition: { staggerChildren: 0.06 } } }}
      >
        {items.map((it) => (
          <ImgCard key={it.name} item={it} Art={Art} showView={showView} />
        ))}
      </motion.div>
      <button className="carousel__nav next" onClick={() => go(1)} aria-label="Next">
        <UIIcon name="arrow" size={20} />
      </button>
      <div className="carousel__dots">
        {items.map((_, k) => (
          <button key={k} className={`carousel__dot ${k === idx ? 'active' : ''}`} onClick={() => setIdx(k)} aria-label={`Go to slide ${k + 1}`} />
        ))}
      </div>
    </div>
  )
}

export default function Agriculture() {
  useEffect(() => { document.title = 'Agriculture · Aerovexa Exim Private Limited' }, [])

  /* rotating hero banner — auto-advance every 5s + arrow controls */
  const [bi, setBi] = useState(0)
  const [paused, setPaused] = useState(false)
  const banners = agriPage.banners
  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setBi((p) => (p + 1) % banners.length), 5000)
    return () => clearInterval(t)
  }, [banners.length, paused])
  const go = (dir) => setBi((p) => (p + dir + banners.length) % banners.length)
  const b = banners[bi]

  return (
    <DivisionShell id="agriculture">
      {/* ── Rotating photo hero banner (auto + arrows) ───────────── */}
      <section
        className="ship-banner"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="ship-banner__scene">
          <AnimatePresence>
            <motion.div
              key={bi}
              className="ship-banner__slide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: 'easeInOut' }}
            >
              <Photo className="ship-banner__photo" src={b.img} alt="" fallback={<BannerScene />} />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="ship-banner__overlay" />
        <div className="ship-banner__pattern" />

        <button className="ship-banner__nav prev" onClick={() => go(-1)} aria-label="Previous slide">
          <UIIcon name="arrow" size={24} />
        </button>
        <button className="ship-banner__nav next" onClick={() => go(1)} aria-label="Next slide">
          <UIIcon name="arrow" size={24} />
        </button>

        <div className="container ship-banner__inner">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span>/</span><span className="here">Agriculture</span>
          </nav>
          <AnimatePresence mode="wait">
            <motion.div
              key={bi}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="ship-banner__eyebrow">{b.eyebrow}</span>
              <h1>{b.title.split('\n').map((l, k) => <span key={k}>{l}<br /></span>)}</h1>
              <p>{b.text}</p>
            </motion.div>
          </AnimatePresence>
          <div className="ship-banner__cta">
            <a href="#products" className="btn btn-gold">View Products <UIIcon name="arrow" size={18} /></a>
          </div>
          <div className="ship-banner__dots">
            {banners.map((_, k) => (
              <button key={k} className={`ship-banner__dot ${k === bi ? 'active' : ''}`} onClick={() => setBi(k)} aria-label={`Banner ${k + 1}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Shop-by-category image strip (maruti-style) ──────────── */}
      <section className="block agri-cats">
        <div className="container">
          <SectionHead eyebrow="Our Range" title="Shop by Category" sub="Premium rice, hand-selected spices, refined sugar and wholesome pulses — exported worldwide." />
          <Stagger className="catstrip">
            {agriPage.productCats.map((c) => (
              <motion.a key={c.name} href={c.to} className="catcard" variants={itemVar}>
                <div className="catcard__img"><img src={c.img} alt={c.name} loading="lazy" /></div>
                <span className="catcard__label">{c.name}</span>
              </motion.a>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Stats band ───────────────────────────────────────────── */}
      <section className="agri-statsband">
        <div className="container">
          <Stagger className="agri-stats">
            {agriPage.stats.map((s) => (
              <motion.div className="agri-stat" key={s.label} variants={itemVar}>
                <div className="n">{s.value}</div>
                <div className="l">{s.label}</div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Welcome / heritage (Maruti-style intro) ──────────────── */}
      <section className="block">
        <div className="container about__grid">
          <Reveal className="about__copy">
            <span className="eyebrow">Best Quality Products</span>
            <h2 className="section-title" style={{ marginTop: 14 }}>
              Welcome to Aerovexa Agriculture
            </h2>
            <p style={{ color: 'var(--muted)', marginTop: 18 }}>{agriPage.about}</p>
            <p style={{ color: 'var(--muted)', marginTop: 14 }}>{agriPage.hero.statement}</p>
            <div style={{ marginTop: 26 }}>
              <Link to="/about" className="btn btn-gold">Know More <UIIcon name="arrow" size={18} /></Link>
            </div>
          </Reveal>
          <Reveal className="about__visual" delay={0.12}>
            <Photo
              className="about__photo"
              src={agriPage.welcomeImg}
              alt="Premium Indian agriculture produce"
              fallback={
                <div style={{ textAlign: 'center', position: 'relative', zIndex: 2, color: '#fff' }}>
                  <GalleryArt kind="harvest" />
                  <div style={{ fontFamily: 'var(--font-head)', fontSize: '1.6rem', fontWeight: 800, marginTop: 14 }}>Farm Fresh</div>
                  <div style={{ letterSpacing: '0.28em', fontSize: '0.72rem', opacity: 0.85, marginTop: 6 }}>FROM SOIL TO WORLD</div>
                </div>
              }
            />
          </Reveal>
        </div>
      </section>

      {/* ── "Farm to Export" process band (image steps) ──────────── */}
      <section className="block block--cream agri-process">
        <div className="container">
          <SectionHead eyebrow="Our Process" title="Nature’s best · Farm to Export" sub="One disciplined workflow protects quality from harvest to global delivery." />
          <Stagger className="aproc-grid">
            {agriPage.process.map((p, i) => (
              <motion.div className="aproc" key={p.title} variants={itemVar}>
                <div className="aproc__ic">
                  <ProcessIcon kind={p.kind} size={34} />
                  <span className="aproc__step">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h5>{p.title}</h5>
                <p>{p.desc}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Top quality products — rice varieties ────────────────── */}
      <section className="block" id="products">
        <div className="container">
          <SectionHead eyebrow="Top Quality Products" title="Premium Rice Varieties" sub="Sorted, polished and graded to perfection — the heart of our agri-export." />
          <CardCarousel items={agriPage.varieties} Art={ProduceArt} />
        </div>
      </section>

      {/* ── Spices, sugar & pulses ───────────────────────────────── */}
      <section className="block block--cream" id="beyond-rice">
        <div className="container">
          <SectionHead eyebrow="Beyond Rice" title="Spices, Sugar &amp; Pulses" sub="A full agri-basket to complement our rice exports." />
          <CardCarousel items={agriPage.alsoExport} Art={ProduceArt} />
        </div>
      </section>

      {/* ── Why choose us + partners ─────────────────────────────── */}
      <section className="block">
        <div className="container">
          <SectionHead eyebrow="Why Choose Us" title="Trusted, certified, on time" />
          <Stagger className="why-grid">
            {agriPage.whyChoose.map((w) => (
              <motion.div className="why-card" key={w.t} variants={itemVar}>
                <span className="why-card__n"><ProcessIcon kind={w.kind} size={26} /></span>
                <h4>{w.t}</h4>
                <p>{w.d}</p>
              </motion.div>
            ))}
          </Stagger>
          <Reveal className="agri-partners" delay={0.1}>
            <span>Trusted by</span>
            {agriPage.partners.map((p) => <strong key={p}>{p}</strong>)}
          </Reveal>
        </div>
      </section>

      {/* ── Infrastructure ───────────────────────────────────────── */}
      <section className="block block--cream">
        <div className="container">
          <SectionHead eyebrow="Infrastructure" title="Built for scale &amp; precision" sub="Modern milling, drying, sorting and storage under one roof." />
          <Stagger className="infra-grid">
            {agriPage.infrastructure.map((it) => (
              <motion.div className="infra-card" key={it.spec} variants={itemVar}>
                <div className="infra-card__spec">{it.spec}</div>
                <div className="infra-card__note">{it.note}</div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Sustainability ───────────────────────────────────────── */}
      <section className="block sustain">
        <div className="container sustain__inner">
          <Reveal>
            <span className="eyebrow" style={{ color: 'var(--gold)' }}>Sustainability</span>
            <h2 className="section-title" style={{ color: '#fff', marginTop: 14 }}>{agriPage.sustainability.title}</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', margin: '16px 0 24px', maxWidth: 520 }}>{agriPage.sustainability.text}</p>
            <ul className="sustain__points">
              {agriPage.sustainability.points.map((p) => (
                <li key={p}><span className="tick">✓</span> {p}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.12} className="sustain__badge">
            <div className="n">5+ <small>MWH</small></div>
            <p>renewable power from rice-husk biomass</p>
          </Reveal>
        </div>
      </section>

      {/* ── Global reach ─────────────────────────────────────────── */}
      <section className="block reach">
        <div className="container">
          <SectionHead eyebrow="Global Reach" title={agriPage.export.title} light sub={agriPage.export.text} />
          {agriPage.export.mapImg && (
            <Reveal className="reach__map" delay={0.06}>
              <Photo src={agriPage.export.mapImg} alt="Aerovexa global export reach" fallback={null} />
            </Reveal>
          )}
          <Counters items={agriPage.stats} />
          <Reveal className="reach__regions" delay={0.1}>
            {agriPage.export.regions.map((r) => <span className="reach__region" key={r}>{r}</span>)}
          </Reveal>
        </div>
      </section>

      {/* ── Import & export shipment types (image cards) ─────────── */}
      <section className="block">
        <div className="container">
          <SectionHead
            eyebrow="Import &amp; Export"
            title="Shipment Types We Handle"
            sub="From a single container to full bulk vessels — we move your produce by the mode that fits the cargo, route and timeline."
          />
          <CardCarousel items={agriPage.shipmentTypes} Art={ShipmentArt} />
        </div>
      </section>

      {/* ── Certifications ───────────────────────────────────────── */}
      <section className="block block--cream">
        <div className="container">
          <SectionHead eyebrow="Quality &amp; Compliance" title="Certified for global trade" sub="Every consignment is backed by internationally recognised quality and export certifications." />
          <Reveal className="certs" delay={0.08}>
            {certifications.map((c) => <span className="cert" key={c}>{c}</span>)}
          </Reveal>
        </div>
      </section>

      {/* ── Seed-to-Shipment journey (real photos) ───────────────── */}
      <section className="block" id="journey">
        <div className="container">
          <SectionHead
            eyebrow="Farm to Export"
            title="Our Journey — Seed to Shipment"
            sub="Follow every grain from the paddy field to your port — one accountable partner, start to finish."
          />
          <Stagger className="journey-grid">
            {agriPage.journey.map((j, i) => (
              <motion.figure className="journey-card" key={j.title} variants={itemVar}>
                <div className="journey-card__img">
                  <img src={j.img} alt={j.title} loading="lazy" />
                  <span className="journey-card__step">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <figcaption>
                  <h4>{j.title}</h4>
                  <p>{j.desc}</p>
                </figcaption>
              </motion.figure>
            ))}
          </Stagger>
        </div>
      </section>

      <CTABand title="Looking to import quality Indian produce?" text="Talk to our agriculture team for samples, pricing and container-load exports." />
    </DivisionShell>
  )
}