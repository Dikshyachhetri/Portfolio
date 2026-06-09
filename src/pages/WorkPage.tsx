import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './WorkPage.css'

const BASE = import.meta.env.BASE_URL || '/'

const projects = [
  {
    id: 'raraspace',
    num: '01',
    title: 'Employee Management System',
    subtitle: 'ERP · Web App · PWA · Designed from scratch',
    url: 'raraspace.html',
    logo: BASE + 'rara-logo.png',
    accent: '#e8521a',
  },
  {
    id: 'intellix',
    num: '02',
    title: 'Improving patient diagnostics and treatment',
    subtitle: 'Healthcare · KPI Dashboard · Clinical UX',
    url: 'intellix.html',
    logo: BASE + 'intellix-logo.png',
    accent: '#7879F9',
  },
  {
    id: 'loksewa',
    num: '03',
    title: 'Loksewa Pro',
    subtitle: 'EdTech · Mobile App · iOS & Android',
    url: 'loksewa.html',
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
          Three case studies across enterprise, healthcare, and mobile,
          each with full process documentation from research to final iteration.
        </p>
      </header>

      <div className="projects-grid" role="list" aria-label="Project case studies">
        {projects.map(p => (
          <article
            className={`project-card-overview card-${p.id}`}
            id={p.id}
            role="listitem"
            key={p.id}
            onClick={() => window.open(p.url, '_self')}
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') window.open(p.url, '_self') }}
            style={{ '--card-accent': p.accent } as React.CSSProperties}
          >
            {/* Large gallery number watermark */}
            <span className="gallery-num" aria-hidden="true">{p.num}</span>

            {/* Gradient overlay that shifts on hover */}
            <div className="card-gradient-bg" aria-hidden="true"></div>

            {/* Logo area - centered */}
            <div className="card-logo-area">
              <div className="card-logo-frame">
                <img src={p.logo} alt="" className="card-logo-img" />
              </div>
            </div>

            {/* Divider */}
            <div className="card-divider" aria-hidden="true"></div>

            {/* Info area */}
            <div className="card-info-area">
              <h2 className="card-heading">{p.title}</h2>
              <p className="card-caption">{p.subtitle}</p>
              <span className="card-action">
                View Case Study
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </div>
          </article>
        ))}
      </div>

    </main>
  )
}
