import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

const BASE = import.meta.env.BASE_URL || '/'

const capabilities = [
  {
    title: 'Make complexity legible',
    desc: 'Information architecture, workflow mapping, and interface systems that hold up under real operational pressure, not just in a happy-path prototype.',
  },
  {
    title: 'Design for decisions',
    desc: 'Research, prototyping, and usability testing focused on the moments where users hesitate, compare, or lose trust.',
  },
  {
    title: 'Ship with engineering',
    desc: 'Component libraries, complete states, and close collaboration from first sketch to release, so the built product matches the design.',
  },
]

export default function HomePage() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <main id="main" className="home lined-surface">
      {/* ========== HERO ========== */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid">
          <p className="eyebrow">UI/UX Designer</p>
          <h1 id="hero-title" className="display hero-title">
            Designing <em>clarity</em> into complex products.
          </h1>

          {/* Lower band: lede left, actions right, shared top rule */}
          <div className="hero-body">
            <p className="hero-lede">
              I&rsquo;m Dikshya BC, a UI/UX designer with 5+ years turning dense,
              high-stakes workflows into products people can use with confidence.
              Experience spans healthcare, fintech, ERP, aviation, edtech,
              cybersecurity, maritime, AI and ecommerce, across B2B, B2C and
              DTC products.
            </p>

            <div className="hero-side">
              <div className="hero-actions">
                <Link className="btn btn-primary" to="/work">View selected work</Link>
                <a
                  className="btn btn-outline"
                  href={BASE + 'resume.pdf'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Résumé
                </a>
              </div>

              <p className="hero-note">
                <span className="status-dot" aria-hidden="true" />
                Currently designing at Invicta · Open to select projects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== APPROACH ========== */}
      <section className="section section-last" aria-labelledby="approach-title">
        <header className="section-head reveal">
          <div>
            <p className="eyebrow">How I work</p>
            <h2 id="approach-title" className="display">From ambiguity to a shipped product.</h2>
          </div>
        </header>

        <div className="approach-grid">
          {capabilities.map((c, i) => (
            <article className="approach-item reveal" key={c.title} style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="approach-num">0{i + 1}</span>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </article>
          ))}
        </div>
      </section>

    </main>
  )
}
