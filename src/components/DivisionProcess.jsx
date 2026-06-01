import React from 'react'
import { motion } from 'framer-motion'
import { Stagger, itemVar } from './Reveal.jsx'
import { SectionHead } from './Section.jsx'
import { ProcessIcon } from './Art.jsx'

/** DivisionProcess — the per-division "Our Process" band (accent-coloured). */
export default function DivisionProcess({ steps, title = 'Our Process', sub, alt }) {
  return (
    <section className={`block ${alt ? 'block--cream' : ''}`}>
      <div className="container">
        <SectionHead eyebrow="How we work" title={title} sub={sub} />
        <Stagger className="process__grid">
          {steps.map((p, i) => (
            <motion.div className="process__card process__card--accent" key={p.label + i} variants={itemVar}>
              <div className="ic"><ProcessIcon kind={p.kind} /></div>
              <div className="step">STEP {String(i + 1).padStart(2, '0')}</div>
              <h5>{p.label}</h5>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
