import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SectionHead } from './Section.jsx'
import { DivisionIcon, UIIcon } from './Art.jsx'
import { divisions } from '../data/content.js'

const EASE = [0.22, 1, 0.36, 1]

/**
 * HomeTabs — an interactive "What we do" explorer on the home page.
 * Each tab is one of the four divisions; selecting it reveals that sector's
 * headline, description, offerings and key stats (all from content.js).
 * Reuses the existing `.tabs` styling from the Logistics page.
 */
export default function HomeTabs() {
  const [tab, setTab] = useState(0)
  const d = divisions[tab]

  return (
    <section className="block" id="what-we-do">
      <div className="container">
        <SectionHead
          eyebrow="What We Do"
          title="One brand, four specialised divisions"
          sub="Tap a sector to explore what Aerovexa sources, processes and ships — each division has its own dedicated team and showcase."
        />

        <div
          className="tabs"
          style={{ '--accent': d.color, '--accent-soft': d.colorSoft, '--accent-deep': d.colorDeep }}
        >
          {/* Tab list */}
          <div className="tabs__list" role="tablist" aria-label="Divisions">
            {divisions.map((dv, i) => (
              <button
                key={dv.id}
                role="tab"
                aria-selected={i === tab}
                className={`tabs__tab ${i === tab ? 'active' : ''}`}
                onClick={() => setTab(i)}
                style={{ '--accent': dv.color, '--accent-soft': dv.colorSoft }}
              >
                <span className="tabs__tab-ic"><DivisionIcon id={dv.id} size={26} /></span>
                {dv.name}
                <UIIcon name="arrow" size={18} />
              </button>
            ))}
          </div>

          {/* Active panel */}
          <div className="tabs__panel" role="tabpanel">
            <AnimatePresence mode="wait">
              <motion.div
                key={d.id}
                className="tabs__content"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                <div className="tabs__visual"><DivisionIcon id={d.id} size={64} /></div>
                <div>
                  <span className="eyebrow">Division {d.index} · {d.name}</span>
                  <h3>{d.headline}</h3>
                  <p>{d.blurb}</p>

                  <ul className="tabs__features">
                    {d.offerings.map((o) => (
                      <li key={o}><span className="tick">✓</span> {o}</li>
                    ))}
                  </ul>

                  <div className="home-tabs__foot">
                    <div className="home-tabs__stats">
                      {d.stats.map((st) => (
                        <div className="home-tabs__stat" key={st.label}>
                          <b>{st.value}</b>
                          <span>{st.label}</span>
                        </div>
                      ))}
                    </div>
                    <Link to={`/${d.id}`} className="btn btn-primary">
                      Explore {d.name} <UIIcon name="arrow" size={18} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
