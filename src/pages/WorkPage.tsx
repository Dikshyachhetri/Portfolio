import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './WorkPage.css'

const BASE = import.meta.env.BASE_URL || '/'

const projects = [
  { id: 'raraspace', title: 'RaraSpace EMS', tag: 'ERP · Web App · PWA', path: '/case/raraspace', card: 'rara-card.png' },
  { id: 'intellix', title: 'Intellix Diagnostics', tag: 'Healthcare · KPI Dashboard', path: '/case/intellix', card: 'intellix-card.png' },
  { id: 'loksewa', title: 'Loksewa Pro', tag: 'EdTech · Mobile App', path: '/case/loksewa', card: 'loksewa-card.png' },
  { id: 'myra', title: 'Myra Cooperative', tag: 'Fintech · ERP · Web App', path: '/case/myra', card: 'myra-card.png' },
  { id: 'nac', title: 'NAC GSE System', tag: 'Aviation · Inventory', path: '/case/nac', card: 'nac-card.png' },
  { id: 'xuno', title: 'XUNO Payments', tag: 'Fintech · Payments', path: '/case/xuno', card: 'xuno-card.png' },
  { id: 'heliski', title: 'Heliski International', tag: 'Travel · Marketplace', path: '/case/heliski', card: 'heliski-card.png' },
  { id: 'passion', title: 'Passion Projects', tag: 'UI Exploration · Concept', path: '/case/passion', card: 'passion-card.png' },
]

export default function WorkPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main id="main" className="work-main">
      {/* ========== HEADER ========== */}
      <header className="work-header">
        <h1 className="work-title">Selected Projects</h1>
        <p className="work-sub">
          I turn ambiguity into clear product design direction and ship with
          cross-functional teams at speed. I build with AI, prototyping ideas and
          exploring the edge of design and technology.
          <svg className="work-spark" width="17" height="17" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 1.4 C13.3 7.6 16.4 10.7 22.6 12 C16.4 13.3 13.3 16.4 12 22.6 C10.7 16.4 7.6 13.3 1.4 12 C7.6 10.7 10.7 7.6 12 1.4 Z" fill="currentColor" />
          </svg>
        </p>
      </header>

      {/* ========== PROJECT CARDS ========== */}
      <section className="work-cards-wrap" aria-label="Projects">
        <div className="work-cards">
          {projects.map((p, i) => (
            <Link
              to={p.path}
              className="work-card"
              key={p.id}
              style={{ animationDelay: `${100 + i * 60}ms` }}
            >
              <img src={BASE + 'project-cards/' + p.card} alt={p.title} loading="lazy" />
              <span className="work-card-overlay" aria-hidden="true">
                <span className="work-card-view">View project</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
