import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './WorkPage.css'

const BASE = import.meta.env.BASE_URL || '/'

const projects = [
  {
    id: 'raraspace',
    num: '01',
    title: 'RARASPACE',
    subtitle: 'Employee Management System',
    desc: 'Unified employee management, task tracking, payroll, and inventory into one seamless platform.',
    metric: { value: '100%', label: 'Efficiency gain' },
    url: 'raraspace.html',
    image: BASE + 'rara-hero.png',
    logo: BASE + 'rara-logo.png',
    color: 'var(--orange)',
  },
  {
    id: 'intellix',
    num: '02',
    title: 'INTELLIX',
    subtitle: 'Healthcare KPI Dashboard',
    desc: 'Transformed fragmented clinical data into clear, actionable performance insights for doctors and nurses.',
    metric: { value: '30%', label: 'Satisfaction lift' },
    url: 'intellix.html',
    image: BASE + 'intellix-hero.png',
    logo: BASE + 'intellix-logo.png',
    color: '#0d6b5e',
  },
  {
    id: 'loksewa',
    num: '03',
    title: 'LOKSEWA PRO',
    subtitle: 'Exam Prep Mobile App',
    desc: 'Top civil service exam prep app with 10,000+ downloads and 4.4★ rating.',
    metric: { value: '10K+', label: 'Downloads' },
    url: 'loksewa.html',
    image: BASE + 'loksewa-hero.png',
    logo: BASE + 'loksewa-logo.png',
    color: '#f59e0b',
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
            className="project-card-overview"
            id={p.id}
            role="listitem"
            key={p.id}
            onClick={() => window.open(p.url, '_self')}
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') window.open(p.url, '_self') }}
          >
            <div className="proj-overview-visual" style={{'--accent': p.color} as React.CSSProperties}>
              <div className="proj-overview-glow" style={{background: `radial-gradient(circle at 50% 30%, ${p.color}15 0%, transparent 70%)`}}></div>
              <div className="ov-logo-wrap">
                <img src={p.logo} alt={`${p.title} logo`} className="ov-logo" />
              </div>
              <img src={p.image} alt={`${p.title} preview`} className="ov-real-image" />
              <span className="ov-num" aria-hidden="true">{p.num}</span>
            </div>
            <div className="proj-overview-info">
              <h2 className="ov-title">{p.title}</h2>
              <p className="ov-subtitle">{p.subtitle}</p>
              <p className="ov-desc">{p.desc}</p>
              <div className="ov-bottom">
                <div className="ov-key-metric">
                  <span className="ov-metric-num">{p.metric.value}</span>
                  <span className="ov-metric-label">{p.metric.label}</span>
                </div>
                <span className="ov-link">
                  View Case Study
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

    </main>
  )
}
