import React from 'react'
import { motion } from 'framer-motion'
import Reveal, { Stagger, itemVar } from './Reveal.jsx'
import { clients } from '../data/content.js'

export default function Clients() {
  return (
    <section className="block">
      <div className="container">
        <Reveal className="block__head">
          <span className="eyebrow">Key Clients</span>
          <h2 className="section-title">Partners who trust Aerovexa</h2>
          <p className="section-sub">Long-standing relationships built on reliability, quality and on-time delivery.</p>
        </Reveal>
        <Stagger className="clients__grid">
          {clients.map((c) => (
            <motion.div className="client" key={c.name} variants={itemVar}>
              {c.logo ? (
                <span className="client__logo"><img src={c.logo} alt={`${c.name} logo`} loading="lazy" /></span>
              ) : (
                <span className="client__mark">{c.name.charAt(0)}</span>
              )}
              <div>
                <h4>{c.name}</h4>
                <p>{c.note}</p>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
