import React, { useEffect, useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { UIIcon } from './Art.jsx'
import { heroSlides } from '../data/content.js'

/* Real photo background per slide (keyed by slide id). All files are bundled
   under /public/images — home/* are home-specific, the rest reuse division art. */
const slideBg = {
  brand: '/images/home/home-trade.jpg',
  electronics: '/images/electronics/el-assembly.jpg',
  agriculture: '/images/agri/field-green.jpg',
  jewellery: '/images/jewellery/jw-necklace.jpg',
  logistics: '/images/home/home-cargo.jpg',
}

/** BannerSlider — the rotating full-width hero on the Home page. */
export default function BannerSlider() {
  const [i, setI] = useState(0)
  const n = heroSlides.length
  const next = useCallback(() => setI((p) => (p + 1) % n), [n])
  const prev = () => setI((p) => (p - 1 + n) % n)

  useEffect(() => {
    const t = setInterval(next, 6000)
    return () => clearInterval(t)
  }, [next])

  const s = heroSlides[i]

  return (
    <section className="slider" style={{ '--accent': s.accent }}>
      {/* Cross-fading real photo background + legibility overlay */}
      <AnimatePresence mode="sync">
        <motion.div
          key={s.id + '-bg'}
          className="slider__bg"
          style={{ backgroundImage: `url(${slideBg[s.id] || slideBg.brand})` }}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        />
      </AnimatePresence>
      <div className="slider__overlay" />

      <div className="slider__glow" style={{ background: s.accent }} />
      <div className="slider__glow slider__glow--2" />

      <div className="container slider__inner">
        <AnimatePresence mode="wait">
          <motion.div
            key={s.id}
            className="slider__content"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="slider__eyebrow" style={{ color: s.accent }}>{s.eyebrow}</span>
            <h1>{s.title.split('\n').map((line, k) => <span key={k}>{line}<br /></span>)}</h1>
            <p>{s.text}</p>
            <div className="slider__cta">
              <Link to={s.primary.to} className="btn btn-gold">{s.primary.label} <UIIcon name="arrow" size={18} /></Link>
              <Link to={s.secondary.to} className="btn btn-light">{s.secondary.label}</Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button className="slider__nav prev" onClick={prev} aria-label="Previous slide">‹</button>
      <button className="slider__nav next" onClick={next} aria-label="Next slide">›</button>

      <div className="slider__dots">
        {heroSlides.map((sl, k) => (
          <button
            key={sl.id}
            className={`slider__dot ${k === i ? 'active' : ''}`}
            style={k === i ? { background: sl.accent } : undefined}
            onClick={() => setI(k)}
            aria-label={`Go to slide ${k + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
