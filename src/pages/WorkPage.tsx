import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './WorkPage.css'

const BASE = import.meta.env.BASE_URL || '/'

const projects = [
  {
    id: 'raraspace',
    title: 'RARASPACE',
    info: 'Enterprise · Web App · Design System',
    url: 'raraspace.html',
    logo: BASE + 'rara-logo.png',
    bgColor: '#fef0e6',
    hoverBg: '#f5d6c2',
    accent: '#e8521a',
  },
  {
    id: 'intellix',
    title: 'INTELLIX',
    info: 'Healthcare · Data Dashboard · Web + Mobile',
    url: 'intellix.html',
    logo: BASE + 'intellix-logo.png',
    bgColor: '#e6f4f1',
    hoverBg: '#c2e8e0',
    accent: '#0d6b5e',
  },
  {
    id: 'loksewa',
    title: 'LOKSEWA PRO',
    info: 'EdTech · Mobile App · iOS & Android',
    url: 'loksewa.html',
    logo: BASE + 'loksewa-logo.png',
    bgColor: '#fef7e6',
    hoverBg: '#f5e6c2',
    accent: '#f59e0b',
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
            style={{
              '--card-bg': p.bgColor,
              '--card-hover': p.hoverBg,
              '--card-accent': p.accent,
            } as React.CSSProperties}
          >
            <div className="proj-visual-area">
              {/* Abstract illustration */}
              <div className="proj-abstract" aria-hidden="true">
                {p.id === 'raraspace' && (
                  <>
                    <div className="abs-circle abs-c1"></div>
                    <div className="abs-diamond abs-d1"></div>
                    <div className="abs-dots">
                      <span></span><span></span><span></span><span></span>
                    </div>
                  </>
                )}
                {p.id === 'intellix' && (
                  <>
                    <div className="abs-wave">
                      <svg viewBox="0 0 200 60" preserveAspectRatio="none">
                        <path d="M0,30 C30,10 60,50 100,30 C140,10 170,50 200,30 L200,60 L0,60 Z" fill="rgba(13,107,94,.06)"/>
                      </svg>
                    </div>
                    <div className="abs-line abs-l1"></div>
                    <div className="abs-line abs-l2"></div>
                    <div className="abs-dots abs-dots-right">
                      <span></span><span></span><span></span>
                    </div>
                  </>
                )}
                {p.id === 'loksewa' && (
                  <>
                    <div className="abs-star abs-s1">&#9733;</div>
                    <div className="abs-circle abs-c2"></div>
                    <div className="abs-circle abs-c3"></div>
                    <div className="abs-dots">
                      <span></span><span></span><span></span>
                    </div>
                  </>
                )}
              </div>
              {/* Logo */}
              <div className="proj-logo-wrap">
                <img src={p.logo} alt={`${p.title} logo`} className="proj-logo" />
              </div>
            </div>
            <div className="proj-info-area">
              <h2 className="proj-name">{p.title}</h2>
              <p className="proj-info-text">{p.info}</p>
              <div className="proj-view-link">
                <span>View Case Study</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </article>
        ))}
      </div>

    </main>
  )
}
