import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

/** A single animated counter that counts up when scrolled into view. */
function Counter({ value, label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [n, setN] = useState(0)

  // split numeric part from suffix/prefix (e.g. "40+", "99%")
  const match = String(value).match(/^(\D*)(\d+)(.*)$/)
  const prefix = match ? match[1] : ''
  const target = match ? parseInt(match[2], 10) : 0
  const suffix = match ? match[3] : value

  useEffect(() => {
    if (!inView || !match) return
    let raf
    const start = performance.now ? null : 0 // perf may be unavailable in some envs
    const dur = 1400
    const t0 = Date.now()
    const tick = () => {
      const p = Math.min((Date.now() - t0) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(eased * target))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target, match])

  return (
    <div className="counter" ref={ref}>
      <div className="counter__n">{match ? `${prefix}${n}${suffix}` : value}</div>
      <div className="counter__l">{label}</div>
    </div>
  )
}

/** Counters — animated stat band (seashell-style counters). */
export default function Counters({ items, light = true }) {
  return (
    <motion.div className={`counters ${light ? 'counters--light' : ''}`}>
      {items.map((m) => <Counter key={m.label} value={m.value} label={m.label} />)}
    </motion.div>
  )
}
