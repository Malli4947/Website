import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import BannerSlider from '../components/BannerSlider.jsx'
import Strip from '../components/Strip.jsx'
import Counters from '../components/Counters.jsx'
import Clients from '../components/Clients.jsx'
import CTABand from '../components/CTABand.jsx'
import { SectionHead } from '../components/Section.jsx'
import Reveal, { Stagger, itemVar } from '../components/Reveal.jsx'
import { DivisionIcon, UIIcon } from '../components/Art.jsx'
import { divisions, company, globalReach } from '../data/content.js'

export default function Home() {
  return (
    <>
      <BannerSlider />
      <Strip />

      {/* ── Divisions / categories ─────────────────────────────── */}
      <section className="block" id="divisions">
        <div className="container">
          <SectionHead
            eyebrow="Our Divisions"
            title="Four sectors, one trusted partner"
            sub="Explore each specialised business line — every division has its own dedicated showcase, gallery and services."
          />
          <Stagger className="divcards">
            {divisions.map((d) => (
              <motion.div key={d.id} variants={itemVar}>
                <Link to={`/${d.id}`} className="divcard" style={{ '--c': d.color, '--cs': d.colorSoft }}>
                  <div className="divcard__top">
                    <span className="divcard__ic" style={{ background: d.color }}><DivisionIcon id={d.id} size={30} /></span>
                    <span className="divcard__idx">{d.index}</span>
                  </div>
                  <h3>{d.name}</h3>
                  <p>{d.reference}</p>
                  <span className="divcard__go">Explore <UIIcon name="arrow" size={16} /></span>
                </Link>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── About teaser ───────────────────────────────────────── */}
      <section className="block block--cream">
        <div className="container about__grid">
          <Reveal className="about__copy">
            <span className="eyebrow">Who we are</span>
            <h2 className="section-title" style={{ marginTop: 14 }}>
              A comprehensive <span className="text-gold">import &amp; export</span> powerhouse.
            </h2>
            <p style={{ color: 'var(--muted)', marginTop: 18 }}>
              {company.legalName} unites Electronics, Agriculture, Jewellery and Logistics under a
              single accountable brand. We source globally, process to spec and deliver worldwide —
              so every product consistently meets and exceeds international quality standards.
            </p>
            <Link to="/about" className="btn btn-primary" style={{ marginTop: 26 }}>
              About Us <UIIcon name="arrow" size={18} />
            </Link>
          </Reveal>
          <Reveal className="about__visual" delay={0.12}>
            <div className="ring" style={{ width: 280, height: 280 }} />
            <div className="ring" style={{ width: 200, height: 200 }} />
            <div className="ring" style={{ width: 120, height: 120 }} />
            <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
              <div style={{ fontFamily: 'var(--font-head)', fontSize: '2.4rem', fontWeight: 800, color: 'var(--gold)' }}>Aerovexa</div>
              <div style={{ letterSpacing: '0.3em', fontSize: '0.75rem', opacity: 0.8, marginTop: 6 }}>EXIM PRIVATE LIMITED</div>
            </div>
            <div className="about__badge">
              <span className="y">4</span>
              <div>
                <strong style={{ display: 'block' }}>Specialised divisions</strong>
                <span style={{ fontSize: '0.84rem', opacity: 0.75 }}>One cohesive, global brand</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Global reach counters ──────────────────────────────── */}
      <section className="block reach">
        <div className="container">
          <SectionHead eyebrow="Our Global Reach" title="Trusted across the world’s trade routes" light
            sub="From the Middle East to the Americas, Aerovexa moves products and value across borders every day." />
          <Counters items={globalReach.metrics} />
          <Reveal className="reach__regions" delay={0.1}>
            {globalReach.regions.map((r) => <span className="reach__region" key={r}>{r}</span>)}
          </Reveal>
        </div>
      </section>

      <Clients />
      <CTABand text="Whatever you need to import or export, our four divisions have you covered — end to end." />
    </>
  )
}
