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

  const chips = [
    { label: 'UI/UX', filled: false },
    { label: 'Vibe Coding', filled: false },
    { label: 'Product', filled: true },
    { label: 'Branding', filled: false },
    { label: 'Graphic', filled: false },
    { label: 'Illustration', filled: false },
    { label: 'Frontend', filled: true },
  ]

  const steps = [
    { title: 'Strategy & plan', desc: 'Mapping the path so design decisions have a reason behind them.' },
    { title: 'Listen & define', desc: 'Understanding the real problem before touching a single pixel.' },
    { title: 'Design & refine', desc: 'Shaping the experience, then sharpening it until it feels obvious.' },
    { title: 'Build & test', desc: 'Shipping, and see how it holds up with real users.' },
  ]

  return (
    <main id="main" className="home">
      {/* ========== HERO ========== */}
      <section className="hero" aria-label="Introduction">
        <div className="blob blob-dark blob-a" aria-hidden="true"></div>
        <div className="blob blob-sage blob-b" aria-hidden="true"></div>

        <div className="hero-center">
          <h1 className="hero-title">Product Designer</h1>
          <p className="hero-am">I AM A(N)</p>
          <p className="hero-quote">
            ** I care about how clearly things communicate, how well they handle edge
            cases, and whether they build trust. I&rsquo;m always curious, learning and
            exploring, whether that&rsquo;s a new tool, a new industry, or a problem
            I&rsquo;ve never touched before <span className="quote-smile" aria-hidden="true">ツ</span>
          </p>
        </div>

        <div className="hero-chips" aria-label="Disciplines">
          {chips.map(c => (
            <span className={`chip${c.filled ? ' chip-filled' : ''}`} key={c.label}>{c.label}</span>
          ))}
        </div>

        <div className="open-for-work">
          <span className="ofw-ring" aria-hidden="true"></span>
          <span className="ofw-dot" aria-hidden="true"></span>
          Open for work
        </div>
      </section>

      {/* ========== STATEMENT ========== */}
      <section className="statement" aria-labelledby="statement-title">
        <div className="blob blob-sage blob-c" aria-hidden="true"></div>
        <div className="blob blob-dark blob-d" aria-hidden="true"></div>
        <h2 className="statement-title reveal" id="statement-title">
          Designing, building, and refining as<br /> one continuous process
        </h2>
      </section>

      {/* ========== PROCESS ========== */}
      <section className="process" aria-label="How I work">
        <div className="rect-cluster" aria-hidden="true">
          <span className="rc rc-1"></span>
          <span className="rc rc-2"></span>
          <span className="rc rc-3"></span>
          <span className="rc rc-4"></span>
        </div>
        <div className="doodle doodle-1" aria-hidden="true"></div>
        <div className="doodle doodle-2" aria-hidden="true"></div>
        <div className="doodle doodle-3" aria-hidden="true"></div>
        <div className="doodle doodle-4" aria-hidden="true"></div>

        <div className="process-grid">
          {steps.map((s, i) => (
            <article className={`process-card reveal${i % 2 ? ' right' : ''}`} key={s.title}>
              <h3 className="pc-title">{s.title}</h3>
              <p className="pc-desc">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
