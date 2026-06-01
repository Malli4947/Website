import React from 'react'
import { motion } from 'framer-motion'
import DivisionShell from '../components/DivisionShell.jsx'
import PageBanner from '../components/PageBanner.jsx'
import ServiceCards from '../components/ServiceCards.jsx'
import DivisionProcess from '../components/DivisionProcess.jsx'
import GalleryBlock from '../components/GalleryBlock.jsx'
import WhyChoose from '../components/WhyChoose.jsx'
import Counters from '../components/Counters.jsx'
import CTABand from '../components/CTABand.jsx'
import { SectionHead } from '../components/Section.jsx'
import Reveal from '../components/Reveal.jsx'
import { getDivision, divisionExtras, globalReach } from '../data/content.js'

/**
 * DivisionPage — one full, reference-styled page per sector.
 * Order of sections mirrors the inspiration sites:
 *   • Jewellery → gold-rate strip on top (aksharametals.co.in)
 *   • Logistics → services + animated counters (seashellgroup.in)
 *   • Agriculture → products + "Farm to Export" process (marutiagroproducts.in)
 *   • Electronics → categories + process, same treatment
 */
export default function DivisionPage({ id }) {
  const d = getDivision(id)
  const ex = divisionExtras[id]
  const items = ex.services || ex.categories
  const isLogistics = id === 'logistics'
  const isJewellery = id === 'jewellery'

  return (
    <DivisionShell id={id}>
      {/* Jewellery: live gold-rate strip, like the reference site */}
      {isJewellery && ex.goldRates && (
        <div className="goldrate">
          <div className="container goldrate__inner">
            <span className="goldrate__label">Today’s Rates</span>
            {ex.goldRates.map((g) => (
              <span className="goldrate__item" key={g.karat}>
                <b>{g.karat}</b> {g.rate}
              </span>
            ))}
            <span className="goldrate__note">Indicative · contact us for live quotes</span>
          </div>
        </div>
      )}

      <PageBanner
        title={ex.pageTitle}
        lead={ex.pageLead}
        breadcrumb={d.name}
        accent={d.color}
        accentDeep={d.colorDeep}
        icon={id}
      />

      {/* Services / product categories */}
      <section className="block">
        <div className="container">
          <SectionHead eyebrow={isLogistics ? 'What We Do' : 'Categories'} title={ex.categoriesTitle} sub={ex.categoriesSub} />
          <ServiceCards items={items} />
        </div>
      </section>

      {/* Logistics: seashell-style animated counters */}
      {isLogistics && (
        <section className="block reach">
          <div className="container">
            <SectionHead eyebrow="Our Numbers" title="Moving cargo across the globe" light />
            <Counters items={globalReach.metrics} />
          </div>
        </section>
      )}

      {/* Process band */}
      <DivisionProcess
        steps={ex.process}
        title={isLogistics ? 'How We Move Your Cargo' : id === 'agriculture' ? 'Farm to Export' : 'Our Process'}
        sub="A disciplined workflow that protects quality at every step."
        alt={!isLogistics}
      />

      {/* Gallery */}
      <GalleryBlock title={`${d.name} Gallery`} name={d.name} items={d.gallery} alt={isLogistics} />

      {/* Why choose this division */}
      <WhyChoose items={ex.why} title={`Why our ${d.name} division`} />

      <CTABand
        title={`Interested in ${d.name}?`}
        text={`Talk to our ${d.name.toLowerCase()} team for quotes, samples and partnership enquiries.`}
      />
    </DivisionShell>
  )
}
