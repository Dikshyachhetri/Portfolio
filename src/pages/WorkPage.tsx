import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './WorkPage.css'

const BASE = import.meta.env.BASE_URL || '/'

const projects = [
  {
    id: 'raraspace',
    title: 'RaraSpace EMS',
    card: 'rara-card.png',
    path: '/case/raraspace',
  },
  {
    id: 'intellix',
    title: 'Intellix Diagnostics',
    card: 'intellix-card.png',
    path: '/case/intellix',
  },
  {
    id: 'loksewa',
    title: 'Loksewa Pro',
    card: 'loksewa-card.png',
    path: '/case/loksewa',
  },
  {
    id: 'myra',
    title: 'Myra Cooperative ERP',
    card: 'myra-card.png',
    path: '/case/myra',
  },
  {
    id: 'nac',
    title: 'NAC Ground Support',
    card: 'nac-card.png',
    path: '/case/nac',
  },
  {
    id: 'xuno',
    title: 'XUNO Payments',
    card: 'xuno-card.png',
    path: '/case/xuno',
  },
  {
    id: 'heliski',
    title: 'Heliski International',
    card: 'heliski-card.png',
    path: '/case/heliski',
  },
  {
    id: 'passion',
    title: 'Passion Projects',
    card: 'passion-card.png',
    path: '/case/passion',
  },
]

export default function WorkPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <main id="main" className="work-main lined-surface">
      <header className="work-header">
        <p className="eyebrow">Portfolio · 2022–2026</p>
        <h1 className="display work-title">Selected <em>work</em>.</h1>
        <div className="work-head-row">
          <p className="work-intro">
            Eight products across enterprise, fintech, healthcare, aviation,
            travel, and edtech. Each case study focuses on the decisions that
            changed the outcome, not the process theatre around them.
          </p>
          <dl className="work-stats">
            <div><dt>Projects</dt><dd>08</dd></div>
            <div><dt>Industries</dt><dd>06</dd></div>
            <div><dt>Experience</dt><dd>5+ yrs</dd></div>
          </dl>
        </div>
      </header>

      <section className="work-grid-wrap" aria-label="Projects">
        <div className="work-grid">
          {projects.map((p, i) => (
            <Link
              to={p.path}
              className="project-card reveal"
              key={p.id}
              style={{ transitionDelay: `${Math.min(i, 5) * 70}ms` }}
            >
              <div className="project-media">
                <img
                  src={BASE + 'project-cards/' + p.card}
                  alt={`${p.title} project cover`}
                  loading={i < 3 ? 'eager' : 'lazy'}
                />
                <span className="project-overlay" aria-hidden="true">
                  <span className="project-overlay-pill">View case study</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
