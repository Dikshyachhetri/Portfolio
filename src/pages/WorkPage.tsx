import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './WorkPage.css'

const BASE = import.meta.env.BASE_URL || '/'

const projects = [
  {
    id: 'raraspace',
    title: 'Employee Management System',
    info: 'ERP · Web App · PWA',
    path: '/case/raraspace',
    logo: BASE + 'rara-logo.png',
    accent: '#e8521a',
  },
  {
    id: 'intellix',
    title: 'Improving patient diagnostics and treatment',
    info: 'Healthcare · KPI Dashboard · Clinical UX',
    path: '/case/intellix',
    logo: BASE + 'intellix-logo.png',
    accent: '#7879F9',
  },
  {
    id: 'loksewa',
    title: 'Loksewa Pro',
    info: 'EdTech · Mobile App · iOS & Android',
    path: '/case/loksewa',
    logo: BASE + 'loksewa-logo.png',
    accent: '#E48700',
  },
  {
    id: 'myra',
    title: 'A digital platform connecting cooperatives all over the nation to technology.',
    info: 'Fintech · ERP · Web App',
    path: '/case/myra',
    logo: BASE + 'myra-logo.png',
    accent: '#22a85a',
  },
  {
    id: 'nac',
    title: 'Nepal Airlines GSE Inventory System',
    info: 'Aviation · Enterprise · Inventory Mgmt',
    path: '/case/nac',
    logo: BASE + 'nac-logo.png',
    accent: '#1d4ed8',
  },
  {
    id: 'xuno',
    title: 'XUNO R2PX Remittance Transfer',
    info: 'Fintech · Remittance · Web + Mobile',
    path: '/case/xuno',
    logo: BASE + 'xuno-logo.png',
    accent: '#059669',
  },
  {
    id: 'passion',
    title: 'Passion Projects',
    info: 'Digital Design, Video Editing, Graphic Design, Mockups, Social Media Content',
    path: '/case/passion',
    logo: BASE + 'passion-logo.png',
    accent: '#fbbf24',
  },
  {
    id: 'heliski',
    title: 'Heliski International',
    info: 'Travel · Global Marketplace · Admin Portal',
    path: '/case/heliski',
    logo: BASE + 'heliski/LOGO.png',
    accent: '#3b9eea',
  },
]

export default function WorkPage() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') }),
      { threshold: 0.06 }
    )
    document.querySelectorAll('.project-card-overview').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <main id="main">
      <header className="page-header">
        <div className="breadcrumb">
          <Link to="/home">Home</Link><span>&rarr;</span><span>Work</span>
        </div>
        <h1>SELECTED<br/>WORK</h1>
        <p className="sub">
          Seven case studies across enterprise, healthcare, edtech, fintech, travel, cybersecurity, and more.
        </p>
      </header>

      <div className="projects-grid" role="list" aria-label="Project case studies">
        {projects.map(p => (
          <Link
            to={p.path}
            className={`project-card-overview card-${p.id}`}
            id={p.id}
            role="listitem"
            key={p.id}
            style={{ '--accent': p.accent } as React.CSSProperties}
          >
            <div className="proj-frame">
              {/* Logo */}
              <div className="proj-logo-area" aria-hidden="true">
                <img src={p.logo} alt="" className="proj-logo-img" />
              </div>
              {/* Body */}
              <div className="proj-body">
                <h2 className="proj-title-text">{p.title}</h2>
                <p className="proj-meta-text">{p.info}</p>
              </div>
              {/* Tail */}
              <div className="proj-tail">
                <span className="proj-cta-link">
                  <span>View Case Study</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </main>
  )
}
