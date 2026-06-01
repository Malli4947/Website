import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LogoMark, UIIcon } from './Art.jsx'
import { divisions } from '../data/content.js'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Us' },
  ...divisions.map((d) => ({ to: `/${d.id}`, label: d.name, color: d.color })),
  { to: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : 'nav--top'}`}>
      <div className="container nav__inner">
        <Link to="/" className="logo" aria-label="Aerovexa Exim home" onClick={() => setOpen(false)}>
          <span className="logo__mark"><LogoMark size={44} /></span>
          <span className="logo__text">
            <span className="logo__name">Aero<span className="ex">vexa</span></span>
            <span className="logo__sub">Exim Private Limited</span>
          </span>
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => `nav__link ${isActive ? 'active' : ''}`}
            >
              {l.color && <span className="dot" style={{ background: l.color }} />}
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-gold nav__cta">
            Get a Quote <UIIcon name="arrow" size={18} />
          </Link>
        </nav>

        <button className="nav__burger" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          <span /><span /><span />
        </button>
      </div>

      <div className={`nav__scrim ${open ? 'show' : ''}`} onClick={() => setOpen(false)} />
      <aside className={`nav__mobile ${open ? 'open' : ''}`} aria-hidden={!open}>
        {navLinks.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.end} onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>
            {l.color && <span className="dot" style={{ background: l.color, display: 'inline-block', width: 8, height: 8, borderRadius: '50%', marginRight: 10 }} />}
            {l.label}
          </NavLink>
        ))}
        <Link to="/contact" onClick={() => setOpen(false)} className="btn btn-gold" style={{ marginTop: 18, width: '100%', justifyContent: 'center' }}>
          Get a Quote <UIIcon name="arrow" size={18} />
        </Link>
      </aside>
    </header>
  )
}
