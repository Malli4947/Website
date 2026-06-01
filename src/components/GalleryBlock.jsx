import React from 'react'
import { motion } from 'framer-motion'
import { Stagger, itemVar } from './Reveal.jsx'
import { SectionHead } from './Section.jsx'
import { GalleryArt } from './Art.jsx'

/** GalleryBlock — standalone gallery section for any division. */
export default function GalleryBlock({ title, name, items, alt }) {
  return (
    <section className={`block ${alt ? 'block--cream' : ''}`}>
      <div className="container">
        <SectionHead eyebrow="Gallery" title={title} sub={`${items.length} curated visuals from our ${name} division.`} />
        <Stagger className="gallery__grid" gap={0.06}>
          {items.map((g) => (
            <motion.figure className="tile" key={g.label} variants={itemVar}>
              <span className="tile__tag">{g.tag}</span>
              <div className="tile__art">
                <svg viewBox="0 0 64 64" aria-hidden="true"><GalleryArt kind={g.kind} /></svg>
              </div>
              <figcaption className="tile__cap">
                <b>{g.label}</b>
                <small>{name}</small>
              </figcaption>
            </motion.figure>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
