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
import '../styles/home.css'

/* Real photo header per division card (reuses on-disk division art). */
const divImg = {
  electronics: '/images/electronics/el-components.jpg',
  agriculture: '/images/agri/cat-rice.jpg',
  jewellery: '/images/jewellery/jw-diamondring.jpg',
  logistics: '/images/agri/bn-port.jpg',
}

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
                  <div className="divcard__media">
                    <img src={divImg[d.id]} alt={`${d.name} division`} loading="lazy" />
                    <span className="divcard__badge"><DivisionIcon id={d.id} size={24} /></span>
                    <span className="divcard__num">{d.index}</span>
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
          <Reveal className="home-about__photo" delay={0.12}>
            <img src="/images/about/about-warehouse.jpg" alt="Aerovexa global trade — container port operations" loading="lazy" />
            <div className="home-about__badge">
              <span className="y">4</span>
              <div>
                <strong>Specialised divisions</strong>
                <span>One cohesive, global brand</span>
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
