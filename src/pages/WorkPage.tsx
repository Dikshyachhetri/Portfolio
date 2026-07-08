import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './WorkPage.css'

const BASE = import.meta.env.BASE_URL || '/'

const projects = [
  { id: 'raraspace', title: 'RaraSpace EMS', tag: 'ERP · Web App · PWA', path: '/case/raraspace', logo: BASE + 'rara-logo.png', accent: '#e8521a', thumb: BASE + 'rara-hero.png' },
  { id: 'intellix', title: 'Intellix Diagnostics', tag: 'Healthcare · KPI Dashboard', path: '/case/intellix', logo: BASE + 'intellix-logo.png', accent: '#7879F9', thumb: BASE + 'intellix-final-1.png' },
  { id: 'loksewa', title: 'Loksewa Pro', tag: 'EdTech · Mobile App', path: '/case/loksewa', logo: BASE + 'loksewa-logo.png', accent: '#E48700', thumb: BASE + 'loksewa-hero.png' },
  { id: 'myra', title: 'Myra Cooperative', tag: 'Fintech · ERP · Web App', path: '/case/myra', logo: BASE + 'myra-logo.png', accent: '#22a85a', thumb: BASE + 'myra-hero.png' },
  { id: 'nac', title: 'NAC GSE System', tag: 'Aviation · Inventory', path: '/case/nac', logo: BASE + 'nac-logo.png', accent: '#6366f1', thumb: BASE + 'nac-final-1.png' },
  { id: 'xuno', title: 'XUNO Payments', tag: 'Fintech · Payments', path: '/case/xuno', logo: BASE + 'xuno-logo.png', accent: '#10b981', thumb: BASE + 'xuno-hero-2.png' },
  { id: 'heliski', title: 'Heliski International', tag: 'Travel · Marketplace', path: '/case/heliski', logo: BASE + 'heliski-logo.png', accent: '#3b82f6', thumb: BASE + 'heliski/Hero Imagae 1.png' },
  { id: 'passion', title: 'Passion Projects', tag: 'UI Exploration · Concept', path: '/case/passion', logo: BASE + 'passion-logo.png', accent: '#ec4899', thumb: BASE + 'passion-project/Column 1 - first-image.png' },
]

export default function WorkPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main id="main">
      <header className="page-header">
        <div className="breadcrumb">
          <Link to="/home">Home</Link><span className="sep">&rarr;</span><span>Work</span>
        </div>
        <h1>Selected<br/>Projects</h1>
        <p className="sub">A collection of products I've designed end to end.</p>
      </header>

      <div className="figma-window">
        <div className="figma-topbar">
          <div className="figma-topbar-left">
            <span className="figma-logo">
              <svg width="18" height="18" viewBox="0 0 48 48" fill="none">
                <rect x="9" y="7" width="10" height="10" rx="2.5" fill="rgba(232,82,26,.6)"/>
                <rect x="19" y="7" width="10" height="10" rx="2.5" fill="rgba(120,80,230,.5)"/>
                <rect x="9" y="17" width="10" height="10" rx="2.5" fill="rgba(50,170,80,.5)"/>
                <rect x="19" y="17" width="10" height="10" rx="2.5" fill="rgba(232,82,26,.5)"/>
                <rect x="9" y="27" width="10" height="10" rx="2.5" fill="rgba(50,170,80,.5)"/>
              </svg>
            </span>
            <span className="figma-breadcrumb">&rsaquo;</span>
            <span className="figma-pagename">Portfolio <span className="figma-pagename-sub">/ Projects</span></span>
          </div>
          <div className="figma-topbar-right">
            <div className="figma-user-avatar">D</div>
          </div>
        </div>

        <div className="figma-body">
          <div className="figma-content-works">
            <div className="figma-projects-header">
              <h2 className="figma-projects-title">All projects</h2>
              <span className="figma-projects-meta">{projects.length} projects</span>
            </div>
            <div className="figma-projects-grid-works">
              {projects.map(p => (
                <Link to={p.path} className="figma-project-card-work" key={p.id} style={{'--card-accent': p.accent} as React.CSSProperties}>
                  <div className="figma-card-logo-area">
                    <img src={p.logo} alt="" className="figma-card-logo" />
                  </div>
                  <div className="figma-thumb-work">
                    <div className="figma-thumb-img" style={{ minHeight: 160 }}>
                      <img src={p.thumb} alt={p.title} className="figma-thumb-actual" loading="lazy" />
                      <div className="figma-thumb-bg" style={{ background: `linear-gradient(135deg, ${p.accent}22, ${p.accent}44)` }}></div>
                    </div>
                    <div className="figma-thumb-overlay">
                      <span className="figma-thumb-view">View Project</span>
                    </div>
                  </div>
                  <div className="figma-card-footer">
                    <div className="figma-card-info">
                      <span className="figma-project-name">{p.title}</span>
                      <span className="figma-project-tag">{p.tag}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
