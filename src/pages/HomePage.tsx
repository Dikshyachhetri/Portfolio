import React from 'react'
import { useEffect } from 'react'
import './HomePage.css'

export default function HomePage() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const chips = ['UI/UX', 'Vibe Coding', 'Product', 'Branding', 'Graphic', 'Illustration', 'Frontend']

  const steps = [
    { num: '01', title: 'Strategy & plan', desc: 'Mapping the path so design decisions have a reason behind them.' },
    { num: '02', title: 'Listen & define', desc: 'Understanding the real problem before touching a single pixel.' },
    { num: '03', title: 'Design & refine', desc: 'Shaping the experience, then sharpening it until it feels obvious.' },
    { num: '04', title: 'Build & test', desc: 'Shipping, and see how it holds up with real users.' },
  ]

  return (
    <main id="main" className="home">
      {/* ========== HERO ========== */}
      <section className="hero" aria-label="Introduction">
        <div className="hero-chips" aria-hidden="true">
          {chips.map(c => <span className="chip" key={c}>{c}</span>)}
        </div>

        <span className="open-for-work">
          <span className="ofw-dot" aria-hidden="true"></span>
          Open for work
        </span>

        <div className="hero-center">
          <h1 className="hero-title">
            <span className="hero-title-muted">I&rsquo;m a</span> Product Designer
          </h1>
          <p className="hero-quote">
            I care about how clearly things communicate, how well they handle edge cases, and
            whether they build trust. I&rsquo;m always curious, learning and exploring, whether
            that&rsquo;s a new tool, a new industry, or a problem I&rsquo;ve never touched before.
          </p>
        </div>
      </section>

      {/* ========== STATEMENT ========== */}
      <section className="statement" aria-labelledby="statement-title">
        <h2 className="statement-title reveal" id="statement-title">
          Designing, building, and refining as
          <span className="statement-accent"> one continuous process</span>
        </h2>
      </section>

      {/* ========== PROCESS ========== */}
      <section className="process" aria-label="How I work">
        <div className="process-grid">
          {steps.map((s, i) => (
            <React.Fragment key={s.num}>
              <article className="process-card reveal">
                <span className="pc-num">{s.num}</span>
                <h3 className="pc-title">{s.title}</h3>
                <p className="pc-desc">{s.desc}</p>
              </article>
              {i % 2 === 0 && (
                <div className="process-arrow" aria-hidden="true">
                  <svg width="30" height="14" viewBox="0 0 30 14" fill="none">
                    <path d="M0 7h24M20 1l5 6-5 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>
    </main>
  )
}
