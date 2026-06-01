import React from 'react'
import { Link } from 'react-router-dom'
import { LogoMark, UIIcon } from './Art.jsx'
import { company, contact, divisions, social, channelColors } from '../data/content.js'

/* Inline brand-glyph SVG paths keyed by icon name (sized 18px). */
const ICON_PATHS = {
  facebook: 'M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z',
  instagram: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.62c-3.15 0-3.5.01-4.74.07-1.14.05-1.76.24-2.17.4-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.16.41-.35 1.03-.4 2.17-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.05 1.14.24 1.76.4 2.17.21.55.47.94.88 1.35.41.41.8.67 1.35.88.41.16 1.03.35 2.17.4 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c1.14-.05 1.76-.24 2.17-.4.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.16-.41.35-1.03.4-2.17.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.05-1.14-.24-1.76-.4-2.17a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.17-.4-1.24-.06-1.59-.07-4.74-.07Zm0 2.76a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6Zm0 1.62a3.68 3.68 0 1 0 0 7.36 3.68 3.68 0 0 0 0-7.36Zm5.5-2.94a1.24 1.24 0 1 1 0 2.48 1.24 1.24 0 0 1 0-2.48Z',
  linkedin: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.83v1.64h.05c.53-1 1.83-2.06 3.77-2.06C20.6 8.58 22 10.2 22 13.5V21h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V21H9V9Z',
  x: 'M17.53 3H20.5l-6.48 7.4L21.75 21h-5.96l-4.67-6.1L5.76 21H2.79l6.93-7.92L2.5 3h6.11l4.22 5.58L17.53 3Zm-1.04 16.2h1.65L7.6 4.71H5.83L16.49 19.2Z',
  youtube: 'M23.5 6.5a3 3 0 0 0-2.12-2.12C19.5 3.86 12 3.86 12 3.86s-7.5 0-9.38.52A3 3 0 0 0 .5 6.5C0 8.38 0 12 0 12s0 3.62.5 5.5a3 3 0 0 0 2.12 2.12c1.88.52 9.38.52 9.38.52s7.5 0 9.38-.52A3 3 0 0 0 23.5 17.5C24 15.62 24 12 24 12s0-3.62-.5-5.5ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z',
}

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
            <div className="footer__social footer__social--brand">
              {social.map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label} title={s.label} style={{ '--soc': s.color }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={ICON_PATHS[s.icon]} />
                  </svg>
                </a>
              ))}
              <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp" style={{ '--soc': channelColors.whatsapp }}><UIIcon name="wa" size={18} /></a>
              {/* <a href={`mailto:${contact.email}`} aria-label="Email" title="Email" style={{ '--soc': channelColors.mail }}><UIIcon name="mail" size={18} /></a> */}
              {/* <a href={`tel:${contact.phones[0].replace(/\s/g, '')}`} aria-label="Phone" title="Phone" style={{ '--soc': channelColors.phone }}><UIIcon name="phone" size={18} /></a> */}
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
