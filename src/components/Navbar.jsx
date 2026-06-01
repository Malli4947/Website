import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LogoMark } from './Art.jsx'
import { divisions } from '../data/content.js'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  ...divisions.map((d) => ({ to: `/${d.id}`, label: d.name })),
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About Us' },
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
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button className="nav__burger" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          <span /><span /><span />
        </button>
      </div>

      <div className={`nav__scrim ${open ? 'show' : ''}`} onClick={() => setOpen(false)} />
      <aside className={`nav__mobile ${open ? 'open' : ''}`} aria-hidden={!open}>
        {navLinks.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.end} onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>
            {l.label}
          </NavLink>
        ))}
      </aside>
    </header>
  )
}
