import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import DivisionShell from './DivisionShell.jsx'
import Counters from './Counters.jsx'
import CTABand from './CTABand.jsx'
import { SectionHead } from './Section.jsx'
import Reveal, { Stagger, itemVar } from './Reveal.jsx'
import { GalleryArt, ShipmentArt, BannerScene, ProcessIcon, UIIcon } from './Art.jsx'
import { getDivision, divisionPages, certifications } from '../data/content.js'

/**
 * DivisionShowcase — one reusable, data-driven page for every division,
 * styled after the Agriculture page (animated photo banner, category strip,
 * stats, intro, icon process, product carousels, why-choose, journey,
 * certifications, CTA). Content + images come from `divisionPages[id]`.
 * Every photo gracefully falls back to inline SVG art if it fails to load.
 */

/* ---- Photo that gracefully degrades to SVG art on error ------------- */
function Photo({ src, alt, fallback, className }) {
  const [failed, setFailed] = useState(false)
  if (src && !failed) {
    return <img className={className} src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
  }
  return fallback
}

/* ---- Image-led product / shipment card ------------------------------ */
function ImgCard({ item, Art }) {
  return (
    <motion.article className="imgcard" variants={itemVar}>
      <div className="imgcard__img">
        {item.tag && <span className="imgcard__tag">{item.tag}</span>}
        <Photo src={item.img} alt={item.name} fallback={<Art kind={item.kind} />} />
      </div>
      <div className="imgcard__body">
        <h4>{item.name}</h4>
        <p>{item.desc}</p>
      </div>
    </motion.article>
  )
}

/* ---- Auto-advancing card carousel (6s + arrow controls) ------------- */
function CardCarousel({ items, Art, interval = 6000 }) {
  const trackRef = useRef(null)
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const card = track.children[idx]
    if (card) track.scrollTo({ left: card.offsetLeft, behavior: 'smooth' })
  }, [idx])

  useEffect(() => {
    if (paused || items.length <= 1) return
    const t = setTimeout(() => setIdx((p) => (p + 1) % items.length), interval)
    return () => clearTimeout(t)
  }, [idx, paused, items.length, interval])

  const go = (dir) => setIdx((p) => (p + dir + items.length) % items.length)

  return (
    <div className="carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <button className="carousel__nav prev" onClick={() => go(-1)} aria-label="Previous"><UIIcon name="arrow" size={20} /></button>
      <motion.div
        className="carousel__track"
        ref={trackRef}
        initial="hide"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        variants={{ show: { transition: { staggerChildren: 0.06 } } }}
      >
        {items.map((it) => <ImgCard key={it.name} item={it} Art={Art} />)}
      </motion.div>
      <button className="carousel__nav next" onClick={() => go(1)} aria-label="Next"><UIIcon name="arrow" size={20} /></button>
      <div className="carousel__dots">
        {items.map((_, k) => (
          <button key={k} className={`carousel__dot ${k === idx ? 'active' : ''}`} onClick={() => setIdx(k)} aria-label={`Go to slide ${k + 1}`} />
        ))}
      </div>
    </div>
  )
}

/* ---- Rotating hero banner (auto 5s + arrows + Ken Burns) ------------ */
function BannerSlider({ banners }) {
  const [bi, setBi] = useState(0)
  const [paused, setPaused] = useState(false)
  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setBi((p) => (p + 1) % banners.length), 5000)
    return () => clearInterval(t)
  }, [banners.length, paused])
  const go = (dir) => setBi((p) => (p + dir + banners.length) % banners.length)
  const b = banners[bi]

  return (
    <section className="ship-banner" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
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

      <button className="ship-banner__nav prev" onClick={() => go(-1)} aria-label="Previous slide"><UIIcon name="arrow" size={24} /></button>
      <button className="ship-banner__nav next" onClick={() => go(1)} aria-label="Next slide"><UIIcon name="arrow" size={24} /></button>

      <div className="container ship-banner__inner">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link><span>/</span><span className="here">{b.crumb}</span>
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
          <a href="#products" className="btn btn-gold">{b.cta || 'View Products'} <UIIcon name="arrow" size={18} /></a>
          <Link to="/contact" className="btn btn-light">Request a Quote</Link>
        </div>
        <div className="ship-banner__dots">
          {banners.map((_, k) => (
            <button key={k} className={`ship-banner__dot ${k === bi ? 'active' : ''}`} onClick={() => setBi(k)} aria-label={`Banner ${k + 1}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function DivisionShowcase({ id }) {
  const d = getDivision(id)
  const p = divisionPages[id]
  useEffect(() => { document.title = `${d.name} · Aerovexa Exim Private Limited` }, [d.name])
  const banners = p.banners.map((b) => ({ ...b, crumb: d.name }))
  const ProductArt = p.productArt === 'shipment' ? ShipmentArt : GalleryArt

  return (
    <DivisionShell id={id}>
      <BannerSlider banners={banners} />

      {/* Shop-by-category image strip */}
      {p.productCats && (
        <section className="block agri-cats">
          <div className="container">
            <SectionHead eyebrow={p.catsEyebrow || 'Our Range'} title={p.catsTitle || 'Shop by Category'} sub={p.catsSub} />
            <Stagger className="catstrip">
              {p.productCats.map((c) => (
                <motion.a key={c.name} href={c.to} className="catcard" variants={itemVar}>
                  <div className="catcard__img"><img src={c.img} alt={c.name} loading="lazy" /></div>
                  <span className="catcard__label">{c.name}</span>
                </motion.a>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {/* Stats band */}
      {p.stats && (
        <section className="agri-statsband">
          <div className="container">
            <Stagger className="agri-stats">
              {p.stats.map((s) => (
                <motion.div className="agri-stat" key={s.label} variants={itemVar}>
                  <div className="n">{s.value}</div>
                  <div className="l">{s.label}</div>
                </motion.div>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {/* Welcome / intro with photo */}
      {p.intro && (
        <section className="block">
          <div className="container about__grid">
            <Reveal className="about__copy">
              <span className="eyebrow">{p.intro.eyebrow}</span>
              <h2 className="section-title" style={{ marginTop: 14 }}>{p.intro.title}</h2>
              {p.intro.text.map((t, i) => <p key={i} style={{ color: 'var(--muted)', marginTop: i ? 14 : 18 }}>{t}</p>)}
              <div style={{ marginTop: 26 }}>
                <Link to={p.intro.cta?.to || '/about'} className="btn btn-gold">{p.intro.cta?.label || 'Know More'} <UIIcon name="arrow" size={18} /></Link>
              </div>
            </Reveal>
            <Reveal className="about__visual" delay={0.12}>
              <Photo className="about__photo" src={p.intro.img} alt={p.intro.title} fallback={<div style={{ color: '#fff' }}>{d.name}</div>} />
            </Reveal>
          </div>
        </section>
      )}

      {/* Icon process band */}
      {p.process && (
        <section className="block block--cream agri-process">
          <div className="container">
            <SectionHead eyebrow={p.processEyebrow || 'Our Process'} title={p.processTitle || 'How We Work'} sub={p.processSub} />
            <Stagger className="aproc-grid">
              {p.process.map((s, i) => (
                <motion.div className="aproc" key={s.title} variants={itemVar}>
                  <div className="aproc__ic">
                    <ProcessIcon kind={s.kind} size={34} />
                    <span className="aproc__step">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h5>{s.title}</h5>
                  <p>{s.desc}</p>
                </motion.div>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {/* Primary products carousel */}
      <section className="block" id="products">
        <div className="container">
          <SectionHead eyebrow={p.productsEyebrow} title={p.productsTitle} sub={p.productsSub} />
          <CardCarousel items={p.products} Art={ProductArt} />
        </div>
      </section>

      {/* Optional second carousel */}
      {p.second && (
        <section className="block block--cream" id="beyond">
          <div className="container">
            <SectionHead eyebrow={p.secondEyebrow} title={p.secondTitle} sub={p.secondSub} />
            <CardCarousel items={p.second} Art={ProductArt} />
          </div>
        </section>
      )}

      {/* Why choose */}
      {p.why && (
        <section className="block">
          <div className="container">
            <SectionHead eyebrow="Why Choose Us" title={p.whyTitle || `Why our ${d.name} division`} sub={p.whySub} />
            <Stagger className="why-grid">
              {p.why.map((w) => (
                <motion.div className="why-card" key={w.t} variants={itemVar}>
                  <span className="why-card__n"><ProcessIcon kind={w.kind || 'process'} size={26} /></span>
                  <h4>{w.t}</h4>
                  <p>{w.d}</p>
                </motion.div>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {/* Global reach */}
      {p.reach && (
        <section className="block reach">
          <div className="container">
            <SectionHead eyebrow="Global Reach" title={p.reach.title} light sub={p.reach.text} />
            {p.stats && <Counters items={p.stats} />}
            <Reveal className="reach__regions" delay={0.1}>
              {p.reach.regions.map((r) => <span className="reach__region" key={r}>{r}</span>)}
            </Reveal>
          </div>
        </section>
      )}

      {/* Optional shipment / logistics carousel */}
      {p.shipments && (
        <section className="block block--cream">
          <div className="container">
            <SectionHead eyebrow={p.shipEyebrow || 'Import & Export'} title={p.shipTitle || 'Shipment Types We Handle'} sub={p.shipSub} />
            <CardCarousel items={p.shipments} Art={ShipmentArt} />
          </div>
        </section>
      )}

      {/* Certifications */}
      <section className="block">
        <div className="container">
          <SectionHead eyebrow="Quality &amp; Compliance" title={p.certsTitle || 'Certified & compliant'} sub={p.certsSub} />
          <Reveal className="certs" delay={0.08}>
            {certifications.map((c) => <span className="cert" key={c}>{c}</span>)}
          </Reveal>
        </div>
      </section>

      {/* Journey */}
      {p.journey && (
        <section className="block block--cream" id="journey">
          <div className="container">
            <SectionHead eyebrow={p.journeyEyebrow || 'End to End'} title={p.journeyTitle || 'Our Journey'} sub={p.journeySub} />
            <Stagger className="journey-grid">
              {p.journey.map((j, i) => (
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
      )}

      <CTABand title={p.ctaTitle} text={p.ctaText} />
    </DivisionShell>
  )
}
