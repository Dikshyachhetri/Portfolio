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
    company: 'Rara Digital Lab Pvt. Ltd.',
    role: 'UI/UX Designer',
    period: '2022–2024',
    desc: 'Unified employee management, task tracking, payroll, and inventory into one seamless platform, eliminating fragmented tools across a 12-person team.',
    metrics: { primary: '100%', label: 'Efficiency gain' },
    tags: ['Enterprise', 'Web App', 'Design System', 'Accessibility'],
    url: 'raraspace.html',
    visual: 'enterprise',
    image: BASE + 'rara-hero.png',
    color: 'var(--orange)',
  },
  {
    id: 'intellix',
    num: '02',
    title: 'INTELLIX',
    subtitle: 'Healthcare KPI Dashboard',
    company: 'Rara Digital Lab Pvt. Ltd.',
    role: 'UI/UX Designer',
    period: '2022–2024',
    desc: 'Transformed fragmented clinical data into clear, actionable performance insights for doctors and nurses in live hospital settings.',
    metrics: { primary: '30%', label: 'Satisfaction lift' },
    tags: ['Healthcare', 'Data Dashboard', 'Web + Mobile', 'Clinical UX'],
    url: 'intellix.html',
    visual: 'healthcare',
    color: '#0d6b5e',
  },
  {
    id: 'loksewa',
    num: '03',
    title: 'LOKSEWA PRO',
    subtitle: 'Exam Prep Mobile App',
    company: 'Freelancing (Pisces Moon)',
    role: 'UI/UX Designer',
    period: '2024–2025',
    desc: 'Designed Nepal&rsquo;s top civil service exam prep app with 10,000+ downloads, 4.4★ rating, practice sets, quizzes, and offline access.',
    metrics: { primary: '10K+', label: 'Downloads' },
    tags: ['EdTech', 'Mobile App', 'iOS & Android', 'Consumer'],
    url: 'loksewa.html',
    visual: 'mobile',
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
      {/* ========== PAGE HEADER ========== */}
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

      {/* ========== PROJECT CARDS GRID ========== */}
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
              {p.image ? (
                <img src={p.image} alt={`${p.title} preview`} className="ov-real-image" />
              ) : p.visual === 'mobile' ? (
                <div className="ov-phone-mock">
                  <div className="ov-phone-notch"></div>
                  <div className="ov-phone-body">
                    <div className="ov-phone-bar ov-phone-bar-lg"></div>
                    <div className="ov-phone-bar ov-phone-bar-md"></div>
                    <div className="ov-phone-grid">
                      <div className="ov-phone-cell"></div>
                      <div className="ov-phone-cell"></div>
                      <div className="ov-phone-cell"></div>
                      <div className="ov-phone-cell"></div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="ov-screen-mock">
                  <div className="ov-chrome">
                    <div className="ov-dot"></div>
                    <div className="ov-dot"></div>
                    <div className="ov-dot"></div>
                  </div>
                  <div className="ov-screen-body">
                    <div className="ov-row ov-row-hi" style={{width:'80%'}}></div>
                    <div className="ov-row" style={{width:'55%'}}></div>
                    <div className="ov-grid-2">
                      <div className="ov-cell ov-cell-hi"></div>
                      <div className="ov-cell"></div>
                    </div>
                    <div className="ov-row" style={{width:'65%', marginTop:8}}></div>
                  </div>
                </div>
              )}
              <span className="ov-num" aria-hidden="true">{p.num}</span>
            </div>
            <div className="proj-overview-info">
              <div className="ov-header">
                <h2 className="ov-title">{p.title}</h2>
                <p className="ov-subtitle">{p.subtitle}</p>
              </div>
              <p className="ov-meta">{p.company} &nbsp;&middot;&nbsp; {p.role} &nbsp;&middot;&nbsp; {p.period}</p>
              <p className="ov-desc" dangerouslySetInnerHTML={{__html: p.desc}}></p>
              <div className="ov-tags" aria-label="Project categories">
                {p.tags.map(t => <span className="proj-tag" key={t}>{t}</span>)}
              </div>
              <div className="ov-bottom">
                <div className="ov-key-metric">
                  <span className="ov-metric-num">{p.metrics.primary}</span>
                  <span className="ov-metric-label">{p.metrics.label}</span>
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
