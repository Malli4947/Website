import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner.jsx'
import Counters from '../components/Counters.jsx'
import CTABand from '../components/CTABand.jsx'
import Clients from '../components/Clients.jsx'
import { SectionHead } from '../components/Section.jsx'
import Reveal, { Stagger, itemVar } from '../components/Reveal.jsx'
import { DivisionIcon, UIIcon } from '../components/Art.jsx'
import { company, divisions, whyAerovexa, certifications, globalReach } from '../data/content.js'
import '../styles/about.css'

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

      {/* Who we are — story with photos */}
      <section className="block">
        <div className="container about2__story">
          <Reveal className="about2__copy">
            <span className="eyebrow">Who We Are</span>
            <h2 className="section-title" style={{ marginTop: 14 }}>
              One brand, four areas of <span className="text-gold">specialised expertise</span>.
            </h2>
            <p className="about2__lead">
              {company.legalName} is a multi-sector import &amp; export company, built to be a single,
              accountable partner across four distinct business lines. Each division runs with its own
              specialist team, yet shares one standard of quality, transparency and reliability.
            </p>
            <p style={{ color: 'var(--muted)', marginTop: 14 }}>
              From imported electronics and farm-fresh agricultural produce to fine gold &amp; diamond
              jewellery and full air-and-sea cargo handling, we source globally, process to spec and
              deliver worldwide — on time, every time.
            </p>
            <ul className="about2__points">
              <li><UIIcon name="arrow" size={16} /> Established {company.established} · import &amp; export across four sectors</li>
              <li><UIIcon name="arrow" size={16} /> Dedicated specialist teams under one accountable brand</li>
              <li><UIIcon name="arrow" size={16} /> In-house logistics from origin to your door</li>
            </ul>
            <div className="about2__actions">
              <Link to="/contact" className="btn btn-primary">Work With Us <UIIcon name="arrow" size={18} /></Link>
              <Link to="/#divisions" className="btn btn-ghost">Our Divisions</Link>
            </div>
          </Reveal>

          <Reveal className="about2__photos" delay={0.12}>
            <figure className="about2__photo about2__photo--tall">
              <img src="/images/about/about-team.jpg" alt="Aerovexa team at work in a modern office" loading="lazy" />
            </figure>
            <figure className="about2__photo">
              <img src="/images/about/about-global.jpg" alt="Global trade — the world Aerovexa ships to" loading="lazy" />
            </figure>
            <figure className="about2__photo">
              <img src="/images/about/about-warehouse.jpg" alt="Container vessel at port, handled end to end" loading="lazy" />
            </figure>
            <div className="about2__chip">
              <span className="about2__chip-n">4</span>
              <div>
                <strong>Specialised divisions</strong>
                <span>Electronics · Agriculture · Jewellery · Logistics</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats / counters */}
      <section className="block reach">
        <div className="container">
          <SectionHead eyebrow="By the numbers" title="A track record you can trust" light />
          <Counters items={globalReach.metrics} />
        </div>
      </section>

      {/* The four divisions */}
      <section className="block block--cream">
        <div className="container">
          <SectionHead eyebrow="Our Divisions" title="Specialised teams across four sectors" sub="One accountable brand, four distinct business lines — each with its own expertise." />
          <Stagger className="about2__divs">
            {divisions.map((d) => (
              <motion.div key={d.id} variants={itemVar}>
                <Link
                  to={`/${d.id}`}
                  className="about2__div"
                  style={{ '--c': d.color, '--cs': d.colorSoft }}
                >
                  <div className="about2__div-top">
                    <span className="about2__div-ic" style={{ background: d.color }}><DivisionIcon id={d.id} size={30} /></span>
                    <span className="about2__div-idx">{d.index}</span>
                  </div>
                  <h3>{d.name}</h3>
                  <p>{d.reference}</p>
                  <span className="about2__div-link">Explore {d.name} <UIIcon name="arrow" size={16} /></span>
                </Link>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Why Aerovexa */}
      <section className="block">
        <div className="container">
          <SectionHead eyebrow="Why Aerovexa" title="Built to be your trusted trade partner" />
          <Stagger className="about2__why">
            {whyAerovexa.map((w, i) => (
              <motion.div className="about2__why-card" key={w.t} variants={itemVar}>
                <span className="about2__why-n">{String(i + 1).padStart(2, '0')}</span>
                <h4>{w.t}</h4>
                <p>{w.d}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Certifications */}
      <section className="block block--cream">
        <div className="container">
          <SectionHead eyebrow="Certifications" title="Recognised standards & accreditations" sub="Our sourcing, processing and trade are backed by globally recognised quality marks." />
          <Reveal className="about2__certs" delay={0.1}>
            {certifications.map((c) => <span className="about2__cert" key={c}>{c}</span>)}
          </Reveal>
        </div>
      </section>

      <Clients />

      <CTABand title="Want to know more about what we do?" text="Talk to our team about sourcing, export or logistics across any division." />
    </>
  )
}
