import React, { useEffect, useState } from 'react'
import PageBanner from '../components/PageBanner.jsx'
import Reveal from '../components/Reveal.jsx'
import { UIIcon } from '../components/Art.jsx'
import { contact, divisions } from '../data/content.js'

export default function Contact() {
  useEffect(() => { document.title = 'Contact Us · Aerovexa Exim Private Limited' }, [])
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', division: divisions[0].name, message: '' })
  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Enquiry · ${form.division} · ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}`)
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const cards = [
    { ic: 'mail', label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { ic: 'phone', label: 'Phone', value: contact.phones[0], href: `tel:${contact.phones[0].replace(/\s/g, '')}` },
    { ic: 'phone', label: 'Phone', value: contact.phones[1], href: `tel:${contact.phones[1].replace(/\s/g, '')}` },
    { ic: 'wa', label: 'WhatsApp', value: contact.phones[0], href: `https://wa.me/${contact.whatsapp}` },
    { ic: 'pin', label: 'Address', value: contact.address },
    { ic: 'clock', label: 'Working Hours', value: contact.hours },
  ]

  return (
    <>
      <PageBanner
        title="Contact Us"
        lead="Reach our team for sourcing, export quotes, logistics bookings or partnership enquiries across any division."
        breadcrumb="Contact Us"
        accent="#16294d"
        accentDeep="#0f1d39"
      />

      <section className="block">
        <div className="container contactpage">
          <Reveal className="contactpage__info">
            <span className="eyebrow">Get in touch</span>
            <h2 className="section-title" style={{ marginTop: 12 }}>We’d love to hear from you</h2>
            <p style={{ color: 'var(--muted)', margin: '14px 0 26px' }}>
              Pick the channel that suits you best — we typically reply within one business day.
            </p>
            <div className="contactpage__cards">
              {cards.map((c, i) => (
                <a key={i} className="ccard ccard--light" href={c.href || undefined} target={c.ic === 'wa' ? '_blank' : undefined} rel="noreferrer">
                  <span className="ic"><UIIcon name={c.ic} size={22} /></span>
                  <div>
                    <small>{c.label}</small>
                    <b>{c.value}</b>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <form className="form" onSubmit={submit}>
              <h3>Send an enquiry</h3>
              <p className="sub">Tell us what you need and the right division will get back to you.</p>
              {sent && <div className="form__ok">Thank you! Your mail draft is ready — hit send to reach us.</div>}
              <div className="form__row">
                <div className="field">
                  <label htmlFor="name">Full name</label>
                  <input id="name" name="name" value={form.name} onChange={onChange} required placeholder="Your name" />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={onChange} required placeholder="you@company.com" />
                </div>
              </div>
              <div className="form__row">
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" value={form.phone} onChange={onChange} placeholder="+91…" />
                </div>
                <div className="field">
                  <label htmlFor="division">Division</label>
                  <select id="division" name="division" value={form.division} onChange={onChange}>
                    {divisions.map((d) => <option key={d.id}>{d.name}</option>)}
                    <option>General / Multiple</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={form.message} onChange={onChange} required placeholder="Tell us about your requirement…" />
              </div>
              <button type="submit" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                Send Enquiry <UIIcon name="arrow" size={18} />
              </button>
              <p className="form__note">Or call us at {contact.phones[0]} / {contact.phones[1]}</p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
