import React from 'react'

const items = ['Electronics', 'Agriculture', 'Jewellery', 'Logistics', 'Global Sourcing', 'Export Excellence', 'Quality Assured']

export default function Strip() {
  const loop = [...items, ...items]
  return (
    <div className="strip" aria-hidden="true">
      <div className="strip__track">
        {loop.map((t, i) => (
          <span key={i}>
            <span className="sep">◆</span> {t}
          </span>
        ))}
      </div>
    </div>
  )
}
