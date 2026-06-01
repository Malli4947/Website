import React from 'react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import { UIIcon } from './Art.jsx'
import { contact } from '../data/content.js'

/** CTABand — "Have a project in mind?" style call-to-action (seashell-style). */
export default function CTABand({ title = 'Have a requirement in mind?', text }) {
  return (
    <section className="ctaband">
      <div className="container ctaband__inner">
        <Reveal>
          <h3>{title}</h3>
          {text && <p>{text}</p>}
        </Reveal>
        <Reveal delay={0.1} className="ctaband__actions">
          <Link to="/contact" className="btn btn-gold">Let’s Talk <UIIcon name="arrow" size={18} /></Link>
          <a href={`tel:${contact.phones[0].replace(/\s/g, '')}`} className="btn btn-light">
            <UIIcon name="phone" size={18} /> {contact.phones[0]}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
