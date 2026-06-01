import React from 'react'
import Reveal from './Reveal.jsx'

/** Section — standard centered section header (eyebrow + title + sub). */
export function SectionHead({ eyebrow, title, sub, light, align = 'center' }) {
  return (
    <Reveal className="block__head" style={{ textAlign: align, alignItems: align === 'left' ? 'flex-start' : 'center' }}>
      {eyebrow && <span className="eyebrow" style={light ? { color: 'var(--gold)' } : undefined}>{eyebrow}</span>}
      <h2 className="section-title" style={light ? { color: '#fff' } : undefined}>{title}</h2>
      {sub && <p className="section-sub" style={light ? { color: 'rgba(255,255,255,0.75)' } : undefined}>{sub}</p>}
    </Reveal>
  )
}
