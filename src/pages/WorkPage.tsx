import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './WorkPage.css'

const BASE = import.meta.env.BASE_URL || '/'

const projects = [
  {
    id: 'raraspace',
    title: 'EMPLOYEE MANAGEMENT SYSTEM',
    subtitle: 'ERP · Web App · PWA',
    url: 'raraspace.html',
    logo: BASE + 'rara-logo.png',
    watermark: BASE + 'rara-logo-card-bg.png',
  },
  {
    id: 'intellix',
    title: 'Improving patient diagnostics and treatment',
    subtitle: 'Healthcare · Data Dashboard · KPI Module',
    url: 'intellix.html',
    logo: BASE + 'intellix-logo.png',
  },
  {
    id: 'loksewa',
    title: 'LOKSEWA PRO',
    subtitle: 'EdTech · Mobile App · iOS & Android',
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
            {/* Watermark / background decoration */}
            {p.id === 'raraspace' && (
              <div className="card-watermark" aria-hidden="true">
                <img src={p.watermark} alt="" className="watermark-img" />
              </div>
            )}
            {p.id === 'intellix' && (
              <div className="intellix-icon-bg" aria-hidden="true">
                <img src={p.logo} alt="" className="intellix-icon-img" />
              </div>
            )}
            {p.id === 'loksewa' && (
              <div className="loksewa-check-bg" aria-hidden="true">
                <svg className="check-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
              </div>
            )}

            {/* Top-left logo */}
            <div className="card-logo-top">
              <img src={p.logo} alt={`${p.title} logo`} className="card-logo" />
            </div>

            {/* Bottom-left info */}
            <div className="card-info-bottom">
              <h2 className="card-title">{p.title}</h2>
              <p className="card-subtitle">{p.subtitle}</p>
              <span className="card-cta">
                View Case Study
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
