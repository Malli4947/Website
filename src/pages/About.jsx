import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import PageBanner from '../components/PageBanner.jsx'
import Counters from '../components/Counters.jsx'
import CTABand from '../components/CTABand.jsx'
import { SectionHead } from '../components/Section.jsx'
import Reveal, { Stagger, itemVar } from '../components/Reveal.jsx'
import { DivisionIcon } from '../components/Art.jsx'
import { company, divisions, whyAerovexa, certifications, globalReach } from '../data/content.js'

export default function About() {
  useEffect(() => { document.title = 'About Us · Aerovexa Exim Private Limited' }, [])

  return (
    <>
      <PageBanner
        title="About Aerovexa Exim"
        lead={company.pitch}
        breadcrumb="About Us"
        accent="#16294d"
        accentDeep="#0f1d39"
      />

      {/* Mission / story */}
      <section className="block">
        <div className="container about__grid">
          <Reveal className="about__copy">
            <span className="eyebrow">Our Story</span>
            <h2 className="section-title" style={{ marginTop: 14 }}>
              One brand, four areas of <span className="text-gold">specialised expertise</span>.
            </h2>
            <p style={{ color: 'var(--muted)', marginTop: 18 }}>
              {company.legalName} is a multi-sector import &amp; export company built to be a single,
              accountable partner across four distinct business lines. Each division runs with its own
              specialist team, yet shares one standard of quality, transparency and reliability.
            </p>
            <p style={{ color: 'var(--muted)', marginTop: 14 }}>
              From imported electronics and farm-fresh agricultural produce to fine gold &amp; diamond
              jewellery and full air-and-sea cargo handling, we source globally, process to spec and
              deliver worldwide — on time, every time.
            </p>
          </Reveal>
          <Reveal className="about__visual" delay={0.12}>
            <div className="ring" style={{ width: 280, height: 280 }} />
            <div className="ring" style={{ width: 200, height: 200 }} />
            <div className="ring" style={{ width: 120, height: 120 }} />
            <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
              <div style={{ fontFamily: 'var(--font-head)', fontSize: '2.4rem', fontWeight: 800, color: 'var(--gold)' }}>Est. {company.established}</div>
              <div style={{ letterSpacing: '0.3em', fontSize: '0.75rem', opacity: 0.8, marginTop: 6 }}>IMPORT · EXPORT</div>
            </div>
            <div className="about__badge">
              <span className="y">4</span>
              <div>
                <strong style={{ display: 'block' }}>Specialised divisions</strong>
                <span style={{ fontSize: '0.84rem', opacity: 0.75 }}>Electronics · Agriculture · Jewellery · Logistics</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The four divisions at a glance */}
      <section className="block block--cream">
        <div className="container">
          <SectionHead eyebrow="Our Divisions" title="Specialised teams across four sectors" />
          <Stagger className="divcards">
            {divisions.map((d) => (
              <motion.div className="divcard divcard--static" key={d.id} variants={itemVar} style={{ '--c': d.color, '--cs': d.colorSoft }}>
                <div className="divcard__top">
                  <span className="divcard__ic" style={{ background: d.color }}><DivisionIcon id={d.id} size={30} /></span>
                  <span className="divcard__idx">{d.index}</span>
                </div>
                <h3>{d.name}</h3>
                <p>{d.blurb}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Why Aerovexa */}
      <section className="block">
        <div className="container">
          <SectionHead eyebrow="Why Aerovexa" title="Built to be your trusted trade partner" />
          <Stagger className="why-grid">
            {whyAerovexa.map((w, i) => (
              <motion.div className="why-card" key={w.t} variants={itemVar}>
                <span className="why-card__n" style={{ color: 'var(--gold-deep)', background: 'rgba(216,170,78,0.14)' }}>{String(i + 1).padStart(2, '0')}</span>
                <h4>{w.t}</h4>
                <p>{w.d}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Counters + certifications */}
      <section className="block reach">
        <div className="container">
          <SectionHead eyebrow="By the numbers" title="A track record you can trust" light />
          <Counters items={globalReach.metrics} />
          <Reveal className="reach__regions" delay={0.1}>
            {certifications.map((c) => <span className="reach__region" key={c}>{c}</span>)}
          </Reveal>
        </div>
      </section>

      <CTABand title="Want to know more about what we do?" text="Talk to our team about sourcing, export or logistics across any division." />
    </>
  )
}
