import React from 'react'
import { Link } from 'react-router-dom'
import { company, contact } from '../data/content.js'
import '../styles/portfolio.css'

/* ──────────────────────────────────────────────────────────────────────────
 *  PORTFOLIO / LEADERSHIP PAGE — Aerovexa Exim
 *  ───────────────────────────────────────────────────────────────────────
 *  Edit the TEAM array below to change names, roles, photos and bios.
 *  Photos live in /public/team/  →  swap the files, keep the same names.
 *  Each photo is a full branded executive office scene (the Aerovexa wordmark
 *  and gold nameplate are baked into the picture). Both portraits are shown
 *  whole, in equal-sized cards. The person's own name and designation appear
 *  in the card body, beneath the photo.
 * ────────────────────────────────────────────────────────────────────── */

const WA_LINK = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
  "Hi Aerovexa Exim, I'd like to discuss a trade requirement.",
)}`
const CALL_LINK = `tel:${contact.phones[0].replace(/\s/g, '')}`

const TEAM = [
  {
    img: '/team/Vishnu.png',
    name: 'Vishnu Vardhan Reddy',
    role: 'Founder & Managing Director',
    bio:
      'Vishnu leads Aerovexa Exim with a single conviction — that Indian quality belongs in every global market. He sets the sourcing strategy, builds international partnerships and steers all four trade divisions, so every shipment leaves with documentation, compliance and trust built in.',
    focus: ['Global Sourcing', 'Trade Strategy', 'Partner Network'],
  },
  {
    img: '/team/Meera.png',
    name: 'Meera Mohiddin',
    role: 'Founder & Managing Director',
    bio:
      'Meera oversees operations, compliance and client experience across the Electronics, Agriculture, Jewellery and Logistics verticals. From export paperwork to on-time delivery, she makes sure every commitment we make to a buyer is met, end to end.',
    focus: ['Operations', 'Compliance & Docs', 'Client Success'],
  },
]

const STATS = [
  { num: '4',    label: 'Trade Divisions' },
  { num: '2024', label: 'Established'      },
  { num: '100%', label: 'Verified Docs'    },
  { num: '24/7', label: 'Buyer Support'    },
]

const VALUES = [
  { icon: '🌍', title: 'Global Reach',        desc: 'Sourcing and delivering across borders with reliable freight, customs and last-mile partners.' },
  { icon: '📋', title: 'Full Compliance',     desc: 'GSTIN, IEC and export documentation handled correctly on every single consignment.' },
  { icon: '🤝', title: 'Trust First',         desc: 'Transparent pricing, honest timelines and a single point of contact from enquiry to handover.' },
  { icon: '⚡', title: 'Speed & Reliability', desc: 'Tight coordination across divisions so your orders move fast and arrive on schedule.' },
]

const VISION  = 'To become a globally trusted import & export house — carrying Indian quality across Electronics, Agriculture, Jewellery and Logistics to buyers in every market, with integrity at every step.'
const MISSION = 'To deliver dependable, compliant and competitively-priced trade solutions — building long-term relationships through transparency, on-time delivery and uncompromising quality.'

export default function Portfolio() {
  return (
    <div className="pf-page">

      {/* ── 1 · HERO ───────────────────────────────────── */}
      <section className="pf-hero">
        <div className="container">
          <span className="pf-kicker pf-kicker--light">Leadership</span>
          <h1 className="pf-hero__title">
            Meet the founders of <span className="gold">{company.name}</span>.
          </h1>
          <p className="pf-hero__lead">{company.pitch}</p>
          <div className="pf-hero__pills">
            <span>🏆 Est. {company.established}</span>
            <span>✓ GSTIN Registered</span>
            <span>✓ 4 Trade Divisions</span>
            <span>✓ Export Documentation</span>
          </div>
          <div className="pf-hero__ctas">
            <a href={CALL_LINK} className="pf-btn pf-btn--gold">📞 Call Us</a>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="pf-btn pf-btn--wa">💬 WhatsApp</a>
            <Link to="/contact" className="pf-btn pf-btn--ghost">Get in Touch →</Link>
          </div>
        </div>
      </section>

      {/* ── 2 · STATS ──────────────────────────────────── */}
      <section className="pf-stats container">
        {STATS.map((s) => (
          <div key={s.label} className="pf-stat">
            <div className="pf-stat__num">{s.num}</div>
            <div className="pf-stat__label">{s.label}</div>
          </div>
        ))}
      </section>

      {/* ── 3 · COMPANY INTRO ──────────────────────────── */}
      <section className="pf-intro container">
        <span className="pf-kicker">About {company.name}</span>
        <p className="pf-intro__text">
          <strong>{company.legalName}</strong> is a multi-sector import &amp; export house founded in {company.established},
          delivering specialised expertise across <strong>Electronics, Agriculture, Jewellery and Logistics</strong>.
          Guided by a hands-on leadership team, we connect Indian suppliers with global buyers — handling sourcing,
          compliance, documentation and delivery end-to-end, so every consignment moves with confidence.
        </p>
      </section>

      {/* ── 4 · LEADERSHIP ─────────────────────────────── */}
      <section className="pf-team container">
        <div className="pf-head">
          <span className="pf-kicker">Our Leadership</span>
          <h2 className="pf-head__title">Driven by experience, <span className="hi">built on trust</span>.</h2>
          <p className="pf-head__sub">The founders steering Aerovexa Exim across every market we serve.</p>
        </div>

        <div className="pf-team__grid">
          {TEAM.map((m) => (
            <article key={m.name} className="pf-card">
              <div className="pf-scene">
                <img className="pf-scene__img" src={m.img} alt={`${m.name} — ${company.legalName}`} loading="lazy" />
              </div>
              <div className="pf-card__body">
                <h3 className="pf-card__name">{m.name}</h3>
                <div className="pf-card__role">{m.role}</div>
                <p className="pf-card__bio">{m.bio}</p>
                <div className="pf-card__tags">
                  {m.focus.map((f) => <span key={f} className="pf-tag">{f}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── 5 · VISION & MISSION ───────────────────────── */}
      <section className="pf-vm">
        <div className="container">
          <div className="pf-head pf-head--light">
            <span className="pf-kicker pf-kicker--light">What We Stand For</span>
            <h2 className="pf-head__title">The vision behind every <span className="gold">shipment</span>.</h2>
          </div>
          <div className="pf-vm__grid">
            <article className="pf-vm__card">
              <div className="pf-vm__num">01</div>
              <div className="pf-vm__label">Our Vision</div>
              <p>{VISION}</p>
            </article>
            <article className="pf-vm__card">
              <div className="pf-vm__num">02</div>
              <div className="pf-vm__label">Our Mission</div>
              <p>{MISSION}</p>
            </article>
          </div>
        </div>
      </section>

      {/* ── 6 · WHY PARTNER ────────────────────────────── */}
      <section className="pf-values container">
        <div className="pf-head">
          <span className="pf-kicker">Why Partner With Us</span>
          <h2 className="pf-head__title">Four reasons buyers choose <span className="hi">{company.name}</span>.</h2>
        </div>
        <div className="pf-values__grid">
          {VALUES.map((v) => (
            <div key={v.title} className="pf-value">
              <div className="pf-value__icon">{v.icon}</div>
              <h3 className="pf-value__title">{v.title}</h3>
              <p className="pf-value__desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 7 · FINAL CTA ──────────────────────────────── */}
      <section className="pf-cta">
        <div className="container pf-cta__inner">
          <span className="pf-kicker pf-kicker--light">Ready when you are</span>
          <h2 className="pf-cta__title">Let's move your next consignment — <span className="gold">together</span>.</h2>
          <p className="pf-cta__sub">Talk to our leadership team directly for sourcing, pricing and export support across all four divisions.</p>
          <div className="pf-hero__ctas">
            <a href={CALL_LINK} className="pf-btn pf-btn--gold">📞 {contact.phones[0]}</a>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="pf-btn pf-btn--wa">💬 WhatsApp Us</a>
            <Link to="/contact" className="pf-btn pf-btn--ghost">Contact Us →</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
