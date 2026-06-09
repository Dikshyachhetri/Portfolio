import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './WorkPage.css'

const BASE = import.meta.env.BASE_URL || '/'

const projects = [
  {
    id: 'raraspace',
    title: 'EMPLOYEE MANAGEMENT SYSTEM',
    subtitle: 'ERP · Web App · PWA · Designed from scratch',
    badge: 'Enterprise',
    url: 'raraspace.html',
    logo: BASE + 'rara-logo.png',
  },
  {
    id: 'intellix',
    title: 'Improving patient diagnostics and treatment',
    subtitle: 'Healthcare · KPI Dashboard · Web + Mobile',
    badge: 'Healthcare',
    url: 'intellix.html',
    logo: BASE + 'intellix-logo.png',
  },
  {
    id: 'loksewa',
    title: 'LOKSEWA PRO',
    subtitle: 'EdTech · Mobile App · iOS & Android',
    badge: 'Mobile',
    url: 'loksewa.html',
    logo: BASE + 'loksewa-logo.png',
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
          >
            {/* Spotlight gradient overlay */}
            <div className="card-spotlight" aria-hidden="true"></div>

            {/* Accent bar - bottom edge */}
            <div className="card-accent-bar" aria-hidden="true"></div>

            {/* Top: Logo + badge */}
            <div className="card-logo-top">
              <img src={p.logo} alt={`${p.title} logo`} className="card-logo" />
              <span className="card-badge">{p.badge}</span>
            </div>

            {/* Bottom: Title + subtitle + CTA */}
            <div className="card-info-bottom">
              <h2 className="card-title">{p.title}</h2>
              <p className="card-subtitle">{p.subtitle}</p>
              <span className="card-cta">
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
