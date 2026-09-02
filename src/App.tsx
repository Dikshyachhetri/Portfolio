import React from 'react'
import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import CustomCursor from './components/CustomCursor'
import Nav from './components/Nav'

import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import Toast from './components/Toast'
import HomePage from './pages/HomePage'
import WorkPage from './pages/WorkPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import CaseStudy from './pages/CaseStudy'

const LIGHT_ROUTES = ['/home', '/about', '/contact', '/work']

export default function App() {
  const location = useLocation()

  // New cream/olive design covers Home, About, Contact, Work and the
  // case-study shells. The embedded case docs carry their own palette.
  useEffect(() => {
    const p = location.pathname
    const light =
      p === '/' || p === '/home' || p === '/about' || p === '/contact' || p === '/work' || p.startsWith('/case/')
    document.documentElement.setAttribute('data-theme', light ? 'light' : 'dark')
  }, [location.pathname])

  return (
    <>
      <CustomCursor />
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
