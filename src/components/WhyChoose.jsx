import React from 'react'
import { motion } from 'framer-motion'
import { Stagger, itemVar } from './Reveal.jsx'
import { SectionHead } from './Section.jsx'

/** WhyChoose — feature grid (icon-less, numbered) shown on division pages. */
export default function WhyChoose({ items, title = 'Why choose us', sub }) {
  return (
    <div className="block">
      <div className="container">
        <SectionHead eyebrow="Our Strengths" title={title} sub={sub} />
        <Stagger className="why-grid">
          {items.map((w, i) => (
            <motion.div className="why-card" key={w.t} variants={itemVar}>
              <span className="why-card__n">{String(i + 1).padStart(2, '0')}</span>
              <h4>{w.t}</h4>
              <p>{w.d}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </div>
  )
}
