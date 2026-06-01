import React from 'react'
import { motion } from 'framer-motion'

/** Reveal — fades + slides content in as it scrolls into view. */
export default function Reveal({ children, delay = 0, y = 28, as = 'div', className, ...rest }) {
  const M = motion[as] || motion.div
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </M>
  )
}

/** Stagger container for grids/lists. */
export function Stagger({ children, className, gap = 0.08 }) {
  return (
    <motion.div
      className={className}
      initial="hide"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ show: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </motion.div>
  )
}

export const itemVar = {
  hide: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}
