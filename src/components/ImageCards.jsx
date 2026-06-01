import React from 'react'
import { motion } from 'framer-motion'
import { Stagger, itemVar } from './Reveal.jsx'

/**
 * ImageCards — image-led product / shipment cards (maruti-style).
 * Each card shows a large full-colour illustration header, a tag pill and a
 * name + description below. Pass the artwork component via `Art` (e.g.
 * ProduceArt or ShipmentArt) and a grid class to control columns.
 */
export default function ImageCards({ items, Art, gridClass = 'prod-grid' }) {
  return (
    <Stagger className={gridClass} gap={0.06}>
      {items.map((it) => (
        <motion.article className="imgcard" key={it.name} variants={itemVar}>
          <div className="imgcard__img">
            <Art kind={it.kind} />
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
