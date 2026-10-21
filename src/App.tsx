import React from 'react'
import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import Toast from './components/Toast'
import HomePage from './pages/HomePage'
import WorkPage from './pages/WorkPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import CaseStudy from './pages/CaseStudy'

export default function App() {
  const location = useLocation()

  // Every route now uses the warm-paper palette. Case studies are
  // iframes with their own embedded palettes.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light')

    const p = location.pathname
    const titles: Record<string, string> = {
      '/home': 'Dikshya BC · UI/UX Designer',
      '/work': 'Selected work · Dikshya BC',
      '/about': 'About · Dikshya BC',
      '/contact': 'Contact · Dikshya BC',
    }
    document.title = titles[p] ?? (p.startsWith('/case/') ? 'Case study · Dikshya BC' : 'Dikshya BC · UI/UX Designer')
  }, [location.pathname])

  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/case/raraspace" element={<CaseStudy htmlFile="raraspace.html" />} />
        <Route path="/case/intellix" element={<CaseStudy htmlFile="intellix.html" />} />
        <Route path="/case/loksewa" element={<CaseStudy htmlFile="loksewa.html" />} />
        <Route path="/case/myra" element={<CaseStudy htmlFile="myra.html" />} />
        <Route path="/case/nac" element={<CaseStudy htmlFile="nac.html" />} />
        <Route path="/case/xuno" element={<CaseStudy htmlFile="xuno.html" />} />
        <Route path="/case/passion" element={<CaseStudy htmlFile="passion-projects.html" />} />
        <Route path="/case/heliski" element={<CaseStudy htmlFile="heliski.html" />} />
      </Routes>
      <Footer />
      <Toast />
    </>
  )
}
