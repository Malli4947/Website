import React from 'react'
import { motion } from 'framer-motion'
import { Stagger, itemVar } from './Reveal.jsx'
import { GalleryArt, UIIcon } from './Art.jsx'
import { Link } from 'react-router-dom'

/**
 * ServiceCards — the service / product-category grid used on every division
 * page (logistics services, agri products, jewellery categories, electronics
 * categories). Each card shows an icon, name and description.
 *
 * Pass `cta={false}` to hide the per-card "Enquire" link (used on Agriculture).
 */
export default function ServiceCards({ items, ctaTo = '/contact', cta = true }) {
  return (
    <Stagger className="svc-grid">
      {items.map((it) => (
        <motion.div className="svc-card" key={it.name} variants={itemVar}>
          <div className="svc-card__ic"><svg viewBox="0 0 64 64" aria-hidden="true"><GalleryArt kind={it.kind} /></svg></div>
          <h4>{it.name}</h4>
          {it.desc && <p>{it.desc}</p>}
          {cta && (
            <Link to={ctaTo} className="svc-card__link">Enquire <UIIcon name="arrow" size={16} /></Link>
          )}
        </motion.div>
      ))}
    </Stagger>
  )
}
