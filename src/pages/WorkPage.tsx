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
          Three case studies across enterprise, healthcare, and mobile.
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
              {/* Preview image */}
              <div className="proj-preview" aria-hidden="true">
                <img src={p.logo} alt="" className="proj-logo-img" />
              </div>
              {/* Info */}
              <div className="proj-body">
                <h2 className="proj-title-text">{p.title}</h2>
                <p className="proj-meta-text">{p.info}</p>
              </div>
              {/* Action */}
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
