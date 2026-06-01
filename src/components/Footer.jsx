import React from 'react'
import { Link } from 'react-router-dom'
import { LogoMark, UIIcon } from './Art.jsx'
import { company, contact, divisions } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__about">
            <Link to="/" className="logo">
              <span className="logo__mark"><LogoMark size={42} /></span>
              <span className="logo__text">
                <span className="logo__name" style={{ color: '#fff' }}>Aero<span style={{ color: 'var(--gold)' }}>vexa</span></span>
                <span className="logo__sub" style={{ color: 'rgba(255,255,255,0.6)' }}>Exim Private Limited</span>
              </span>
            </Link>
            <p>{company.pitch}</p>
            <div className="footer__social">
              <a href={`mailto:${contact.email}`} aria-label="Email"><UIIcon name="mail" size={18} /></a>
              <a href={`tel:${contact.phones[0].replace(/\s/g, '')}`} aria-label="Phone"><UIIcon name="phone" size={18} /></a>
              <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp"><UIIcon name="wa" size={18} /></a>
            </div>
          </div>

          <div>
            <h5>Divisions</h5>
            {divisions.map((d) => (
              <Link key={d.id} to={`/${d.id}`}>{d.name}</Link>
            ))}
          </div>

          <div>
            <h5>Company</h5>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/#divisions">Our Divisions</Link>
            <Link to="/">Home</Link>
          </div>

          <div>
            <h5>Contact</h5>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={`tel:${contact.phones[0].replace(/\s/g, '')}`}>{contact.phones[0]}</a>
            <a href={`tel:${contact.phones[1].replace(/\s/g, '')}`}>{contact.phones[1]}</a>
            <span style={{ display: 'block', fontSize: '0.9rem', padding: '5px 0' }}>{contact.hours}</span>
          </div>
        </div>

        <div className="footer__bar">
          <span>© 2026 {company.legalName}. All rights reserved.</span>
          <span>Electronics · Agriculture · Jewellery · Logistics</span>
        </div>
      </div>
    </footer>
  )
}
