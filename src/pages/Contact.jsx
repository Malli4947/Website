import React, { useEffect } from 'react'
import '../styles/contact.css'
import PageBanner from '../components/PageBanner.jsx'
import { SectionHead } from '../components/Section.jsx'
import Reveal, { Stagger, itemVar } from '../components/Reveal.jsx'
import { motion } from 'framer-motion'
import { UIIcon } from '../components/Art.jsx'
import { contact, company, social } from '../data/content.js'

/* Brand-glyph SVG paths for the social row, keyed by icon name. */
const ICON_PATHS = {
  facebook: 'M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z',
  instagram: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 4.38a5.3 5.3 0 1 0 0 10.6 5.3 5.3 0 0 0 0-10.6Zm0 1.62a3.68 3.68 0 1 1 0 7.36 3.68 3.68 0 0 1 0-7.36Zm5.5-2.94a1.24 1.24 0 1 1 0 2.48 1.24 1.24 0 0 1 0-2.48Z',
  linkedin: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.83v1.64h.05c.53-1 1.83-2.06 3.77-2.06C20.6 8.58 22 10.2 22 13.5V21h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V21H9V9Z',
  x: 'M17.53 3H20.5l-6.48 7.4L21.75 21h-5.96l-4.67-6.1L5.76 21H2.79l6.93-7.92L2.5 3h6.11l4.22 5.58L17.53 3Zm-1.04 16.2h1.65L7.6 4.71H5.83L16.49 19.2Z',
  youtube: 'M23.5 6.5a3 3 0 0 0-2.12-2.12C19.5 3.86 12 3.86 12 3.86s-7.5 0-9.38.52A3 3 0 0 0 .5 6.5C0 8.38 0 12 0 12s0 3.62.5 5.5a3 3 0 0 0 2.12 2.12c1.88.52 9.38.52 9.38.52s7.5 0 9.38-.52A3 3 0 0 0 23.5 17.5C24 15.62 24 12 24 12s0-3.62-.5-5.5ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z',
}

export default function Contact() {
  useEffect(() => { document.title = 'Contact Us · Aerovexa Exim Private Limited' }, [])

  const telHref = (p) => `tel:${p.replace(/[^\d+]/g, '')}`
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`

  const cards = [
    { ic: 'mail', label: 'Email Us', lines: [
      { text: contact.email, href: `mailto:${contact.email}` },
      { text: contact.emailAlt, href: `mailto:${contact.emailAlt}` },
    ] },
    { ic: 'phone', label: 'Call Us', lines: contact.phones.map((p) => ({ text: p, href: telHref(p) })) },
    { ic: 'wa', label: 'WhatsApp', lines: [{ text: 'Chat with our team', href: `https://wa.me/${contact.whatsapp}`, external: true }] },
    { ic: 'clock', label: 'Working Hours', lines: [{ text: contact.hours }] },
  ]

  return (
    <>
      <PageBanner
        title="Contact Us"
        lead="Reach our team for sourcing, export quotes, logistics bookings or partnership enquiries across any of our four divisions — we typically reply within one business day."
        breadcrumb="Contact Us"
        accent="#16294d"
        accentDeep="#0f1d39"
      />

      <section className="block">
        <div className="container">
          <SectionHead
            eyebrow="Get in touch"
            title="We’d love to hear from you"
            sub="Call, email or message us on WhatsApp — our specialists will route your request to the right division and get back to you promptly."
          />

          <div className="contact-layout">
            {/* Company details panel */}
            <Reveal className="ccompany">
              <h3 className="ccompany__name">{company.legalName}</h3>
              <p className="ccompany__gst"><span>GSTIN</span>{contact.gstin}</p>
              <p className="ccompany__addr">
                <UIIcon name="pin" size={18} />
                <span>{contact.address}</span>
              </p>
              <a className="btn btn-gold ccompany__map" href={mapsHref} target="_blank" rel="noopener noreferrer">
                View on Google Maps <UIIcon name="arrow" size={18} />
              </a>
              <div className="ccompany__social" aria-label="Social media">
                {social.map((s) => (
                  <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label} title={s.label} style={{ '--soc': s.color }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={ICON_PATHS[s.icon]} /></svg>
                  </a>
                ))}
              </div>
            </Reveal>

            {/* Contact channel cards */}
            <Stagger className="cinfo-cards">
              {cards.map((c) => (
                <motion.div key={c.label} variants={itemVar} className="cinfo-card">
                  <span className="cinfo-card__ic"><UIIcon name={c.ic} size={24} /></span>
                  <div className="cinfo-card__body">
                    <small>{c.label}</small>
                    {c.lines.map((l, i) =>
                      l.href ? (
                        <a key={i} href={l.href} target={l.external ? '_blank' : undefined} rel={l.external ? 'noopener noreferrer' : undefined}>{l.text}</a>
                      ) : (
                        <p key={i}>{l.text}</p>
                      )
                    )}
                  </div>
                </motion.div>
              ))}
            </Stagger>
          </div>
        </div>
      </section>
    </>
  )
}
