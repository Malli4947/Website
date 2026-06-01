import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import DivisionShell from '../components/DivisionShell.jsx'
import DivisionProcess from '../components/DivisionProcess.jsx'
import GalleryBlock from '../components/GalleryBlock.jsx'
import WhyChoose from '../components/WhyChoose.jsx'
import Counters from '../components/Counters.jsx'
import CTABand from '../components/CTABand.jsx'
import { SectionHead } from '../components/Section.jsx'
import Reveal from '../components/Reveal.jsx'
import { GalleryArt, BannerScene, UIIcon } from '../components/Art.jsx'
import { getDivision, divisionExtras, globalReach, certifications } from '../data/content.js'

/**
 * Logistics — modelled on seashellgroup.in:
 *   • Hero with BACKGROUND VIDEO + "Your Global Growth Partner" tagline
 *   • TABBED services section (select a service → see its data)
 *   • counters → gallery → why-choose → process → certifications → CTA
 */
export default function Logistics() {
  useEffect(() => { document.title = 'Logistics · Aerovexa Exim Private Limited' }, [])
  const d = getDivision('logistics')
  const ex = divisionExtras.logistics
  const hero = ex.hero
  const [tab, setTab] = useState(0)
  const active = ex.services[tab]

  return (
    <DivisionShell id="logistics">
      {/* ── Hero with background video ───────────────────────────── */}
      <section className="vhero">
        <div className="vhero__media">
          <video
            className="vhero__video"
            autoPlay muted loop playsInline
            poster=""
          >
            <source src={hero.video} type="video/mp4" />
          </video>
          {/* animated fallback scene (also visible behind a transparent/missing video) */}
          <div className="vhero__fallback"><BannerScene /></div>
        </div>
        <div className="vhero__overlay" />
        <div className="container vhero__inner">
          <Reveal>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link><span>/</span><span className="here">Logistics</span>
            </nav>
            <span className="vhero__eyebrow">{hero.eyebrow}</span>
            <h1>{hero.title.split('\n').map((l, k) => <span key={k}>{l}<br /></span>)}</h1>
            <p>{hero.text}</p>
            <div className="vhero__cta">
              <Link to="/contact" className="btn btn-gold">Get in Touch <UIIcon name="arrow" size={18} /></Link>
              <a href="#services" className="btn btn-light">Our Services</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Tabbed services ──────────────────────────────────────── */}
      <section className="block" id="services">
        <div className="container">
          <SectionHead eyebrow="What We Do" title={ex.categoriesTitle} sub={ex.categoriesSub} />
          <div className="tabs">
            <div className="tabs__list" role="tablist" aria-label="Services">
              {ex.services.map((s, i) => (
                <button
                  key={s.name}
                  role="tab"
                  aria-selected={i === tab}
                  className={`tabs__tab ${i === tab ? 'active' : ''}`}
                  onClick={() => setTab(i)}
                >
                  <span className="tabs__tab-ic"><svg viewBox="0 0 64 64" aria-hidden="true"><GalleryArt kind={s.kind} /></svg></span>
                  {s.name}
                  <UIIcon name="arrow" size={16} />
                </button>
              ))}
            </div>

            <div className="tabs__panel" role="tabpanel">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.name}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="tabs__content"
                >
                  <div className="tabs__visual"><svg viewBox="0 0 64 64" aria-hidden="true"><GalleryArt kind={active.kind} /></svg></div>
                  <div>
                    <h3>{active.name}</h3>
                    <p>{active.desc}</p>
                    <ul className="tabs__features">
                      {active.features.map((f) => (
                        <li key={f}><span className="tick">✓</span> {f}</li>
                      ))}
                    </ul>
                    <Link to="/contact" className="btn btn-primary" style={{ marginTop: 22 }}>
                      Enquire about {active.name} <UIIcon name="arrow" size={18} />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── Counters ─────────────────────────────────────────────── */}
      <section className="block reach">
        <div className="container">
          <SectionHead eyebrow="Our Numbers" title="Moving cargo across the globe" light />
          <Counters items={globalReach.metrics} />
        </div>
      </section>

      {/* ── Gallery ──────────────────────────────────────────────── */}
      <GalleryBlock title="Logistics Gallery" name="Logistics" items={d.gallery} />

      {/* ── Why choose ───────────────────────────────────────────── */}
      <WhyChoose items={ex.why} title="Why our Logistics division" />

      {/* ── Process ──────────────────────────────────────────────── */}
      <DivisionProcess steps={ex.process} title="How We Move Your Cargo" sub="A disciplined workflow from first enquiry to final delivery." alt />

      {/* ── Certifications strip ─────────────────────────────────── */}
      <section className="block">
        <div className="container">
          <SectionHead eyebrow="Accreditations" title="Trusted &amp; compliant" />
          <Reveal className="certs">
            {certifications.map((c) => <span className="cert" key={c}>{c}</span>)}
          </Reveal>
        </div>
      </section>

      <CTABand title="Have a shipment in mind?" text="Talk to our logistics team for air, sea and warehouse solutions — quoted end to end." />
    </DivisionShell>
  )
}
