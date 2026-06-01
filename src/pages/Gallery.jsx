import React, { useEffect, useState } from 'react'
import '../styles/gallery.css'
import { AnimatePresence, motion } from 'framer-motion'
import PageBanner from '../components/PageBanner.jsx'
import { Stagger, itemVar } from '../components/Reveal.jsx'
import { galleries } from '../data/content.js'

export default function Gallery() {
  useEffect(() => { document.title = 'Gallery · Aerovexa Exim Private Limited' }, [])
  const [active, setActive] = useState(galleries[0].id) // default: Electronics
  const [lb, setLb] = useState(null) // lightbox: { src, label }

  const g = galleries.find((x) => x.id === active) || galleries[0]

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setLb(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <PageBanner
        title="Gallery"
        lead="A closer look at what we source, process and ship — from raw material right through to global delivery — across our four divisions."
        breadcrumb="Gallery"
        accent="#16294d"
        accentDeep="#0f1d39"
      />

      <section className="block gal-page" style={{ '--c': g.accent, '--cd': g.accentDeep }}>
        <div className="container">
          {/* Tabs */}
          <div className="gal-tabs" role="tablist" aria-label="Gallery categories">
            {galleries.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={cat.id === active}
                className={`gal-tab ${cat.id === active ? 'active' : ''}`}
                style={{ '--c': cat.accent }}
                onClick={() => setActive(cat.id)}
              >
                {cat.name}
                <span className="gal-tab__count">{cat.items.length}</span>
              </button>
            ))}
          </div>

          {/* Active category */}
          <AnimatePresence mode="wait">
            <motion.div
              key={g.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="gal-head" style={{ backgroundImage: `url(${g.bg})` }}>
                <div className="gal-head__overlay" />
                <div className="gal-head__txt">
                  <span className="gal-head__eyebrow">{g.items.length} visuals</span>
                  <h2>{g.name}</h2>
                  <p>{g.blurb}</p>
                </div>
              </div>

              <Stagger className="gal-grid" gap={0.04}>
                {g.items.map((it) => (
                  <motion.button
                    type="button"
                    className="gal-tile"
                    key={it.src + it.label}
                    variants={itemVar}
                    onClick={() => setLb(it)}
                    aria-label={`View ${it.label}`}
                  >
                    <img src={it.src} alt={it.label} loading="lazy" />
                    <span className="gal-tile__cap">{it.label}</span>
                  </motion.button>
                ))}
              </Stagger>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <AnimatePresence>
        {lb && (
          <motion.div
            className="gal-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLb(null)}
          >
            <button className="gal-lightbox__close" aria-label="Close" onClick={() => setLb(null)}>×</button>
            <motion.figure
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lb.src} alt={lb.label} />
              <figcaption>{lb.label}</figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
