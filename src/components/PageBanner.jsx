import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { DivisionIcon } from './Art.jsx'

/**
 * PageBanner — the top banner used on every inner page (About, Contact and the
 * four division pages). Accent-coloured, with breadcrumb + optional sector icon.
 */
export default function PageBanner({ title, lead, breadcrumb, accent = '#16294d', accentDeep = '#0f1d39', icon }) {
  return (
    <section
      className="pbanner"
      style={{ background: `linear-gradient(125deg, ${accentDeep}, ${accent})` }}
    >
      <div className="pbanner__pattern" />
      <div className="container pbanner__inner">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            {breadcrumb && <><span>/</span><span className="here">{breadcrumb}</span></>}
          </nav>
          <h1>{title}</h1>
          {lead && <p>{lead}</p>}
        </motion.div>
        {icon && (
          <motion.div
            className="pbanner__icon"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <DivisionIcon id={icon} size={96} />
          </motion.div>
        )}
      </div>
    </section>
  )
}
