import React from 'react'
import { motion } from 'framer-motion'
import { Stagger, itemVar } from './Reveal.jsx'

/**
 * ImageCards — image-led product / shipment cards (maruti-style).
 * Each card shows a real photograph header, a tag pill and a name +
 * description below. Images live in public/images/agri/ — swap any file
 * (same name) to change the picture without touching code.
 */
export default function ImageCards({ items, gridClass = 'prod-grid' }) {
  return (
    <Stagger className={gridClass} gap={0.06}>
      {items.map((it) => (
        <motion.article className="imgcard" key={it.name} variants={itemVar}>
          <div className="imgcard__img">
            <img src={it.img} alt={it.name} loading="lazy" />
            {it.tag && <span className="imgcard__tag">{it.tag}</span>}
          </div>
          <div className="imgcard__body">
            <h4>{it.name}</h4>
            {it.desc && <p>{it.desc}</p>}
          </div>
        </motion.article>
      ))}
    </Stagger>
  )
}
