import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import { UIIcon } from './components/Art.jsx'
import { contact } from './data/content.js'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import DivisionPage from './pages/DivisionPage.jsx'
import Agriculture from './pages/Agriculture.jsx'
import Logistics from './pages/Logistics.jsx'

function ProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 })
  return <motion.div className="progress" style={{ scaleX, width: '100%' }} />
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ProgressBar />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/electronics" element={<DivisionPage id="electronics" />} />
          <Route path="/agriculture" element={<Agriculture />} />
          <Route path="/jewellery" element={<DivisionPage id="jewellery" />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />

      <a className="wa" href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <UIIcon name="wa" size={28} />
      </a>
    </BrowserRouter>
  )
}
