import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { showToast } from '../components/Toast'
import './HomePage.css'

export default function HomePage() {
  useEffect(() => {
    // Scroll reveal
    const revealObs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') })
    }, { threshold: 0.08 })
    document.querySelectorAll('.ai-card, .stat-item').forEach(el => revealObs.observe(el))

    // Scramble hero text, match original exactly
    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%?&'

    function runScramble(chars: NodeListOf<HTMLElement>) {
      chars.forEach((span, idx) => {
        const target = span.dataset.char!
        let iterations = 0
        const maxIter = 5 + idx * 1.2
        const iv = setInterval(() => {
          if (iterations >= maxIter) {
            span.textContent = target
            span.style.color = ''
            clearInterval(iv)
            return
          }
          span.textContent = CHARS[Math.floor(Math.random() * CHARS.length)]
          span.style.color = 'var(--orange)'
          iterations++
        }, 40)
      })
    }

    function scrambleLine(el: HTMLElement) {
      const em = el.querySelector('em')
      if (em) {
        const txt = em.textContent!
        em.innerHTML = [...txt].map(c =>
          c === ' ' ? ' ' : `<span class="char" data-char="${c}">${c}</span>`
        ).join('')
        runScramble(em.querySelectorAll('.char') as any)
        return
      }
      const txt = el.textContent!
      el.innerHTML = [...txt].map(c =>
        c === ' ' ? ' ' : `<span class="char" data-char="${c}">${c}</span>`
      ).join('')
      runScramble(el.querySelectorAll('.char') as any)
    }

    const lines = document.querySelectorAll('.hero-headline .line')
    setTimeout(() => scrambleLine(lines[0] as HTMLElement), 1100)
    setTimeout(() => scrambleLine(lines[1] as HTMLElement), 1320)
    setTimeout(() => scrambleLine(lines[2] as HTMLElement), 1540)

    // Nav border on scroll
    const nav = document.querySelector('nav')
    const onScroll = () => {
      if (!nav) return
      nav.style.borderBottom = window.scrollY > 20
        ? '1px solid rgba(255,255,255,.14)'
        : '1px solid rgba(255,255,255,.08)'
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      revealObs.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <main id="main">
      {/* ========== HERO ========== */}
      <section className="hero" aria-label="Introduction">
        <div className="hero-bg-word" aria-hidden="true">DESIGN</div>
        <div className="hero-status">
          <span className="status-dot"></span>
          <span>Available for hire</span>
        </div>
        <div className="hero-headline" aria-label="Research. Design. Experience.">
          <span className="line" aria-hidden="true">RESEARCH.</span>
          <span className="line" aria-hidden="true">DESIGN.</span>
          <span className="line"><em>EXPERIENCE.</em></span>
        </div>

        <div className="hero-bottom">
          <p className="hero-sub">
            <strong>UI/UX Designer &nbsp;&middot;&nbsp; 4+ years</strong> building products that are simple, inclusive, and impactful across enterprise, mobile, fintech, and beyond. Now AI augmented and shipping faster than ever.
          </p>
          <div className="hero-actions">
            <Link to="/work" className="btn-primary">View Work</Link>
            <Link to="/about" className="btn-ghost">
              About Me
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>

        <div className="scroll-cue" aria-hidden="true">
          <span>Scroll to explore</span>
          <div className="scroll-btn">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
          </div>
        </div>
      </section>

      {/* ========== MARQUEE ========== */}
      <div className="marquee-wrap" aria-hidden="true">
        <div className="marquee-track">
          <span>UI/UX DESIGN</span><span className="marquee-dot">&loz;</span>
          <span>INTERACTION DESIGN</span><span className="marquee-dot">&loz;</span>
          <span>DESIGN SYSTEMS</span><span className="marquee-dot">&loz;</span>
          <span>PRODUCT DESIGN</span><span className="marquee-dot">&loz;</span>
          <span>USER RESEARCH</span><span className="marquee-dot">&loz;</span>
          <span>UI/UX DESIGN</span><span className="marquee-dot">&loz;</span>
          <span>INTERACTION DESIGN</span><span className="marquee-dot">&loz;</span>
          <span>DESIGN SYSTEMS</span><span className="marquee-dot">&loz;</span>
          <span>PRODUCT DESIGN</span><span className="marquee-dot">&loz;</span>
          <span>USER RESEARCH</span>
        </div>
      </div>

      {/* ========== AI WORKFLOW ========== */}
      <section className="ai-section" aria-labelledby="ai-title">
        <div className="section-inner">
          <div className="ai-header">
            <div>
              <span className="section-kicker">How I work</span>
              <h2 className="section-title" id="ai-title">AI-ASSISTED<br/>WORKFLOW</h2>
            </div>
            <p className="ai-sub">
              I combine traditional UX process with AI tools to design faster, test smarter,
              and ship with confidence.
            </p>
          </div>
          <div className="ai-cards" role="list" aria-label="AI workflow steps">
            {[
              { num: '01', title: 'Research & synthesis', desc: 'AI mines app store reviews, support tickets, and user interviews to surface patterns. I frame the problem.', tools: ['Claude', 'ChatGPT'] },
              { num: '02', title: 'Rapid exploration', desc: 'Generate 20+ interface directions from prompts in minutes. I curate, combine, and refine.', tools: ['Lovable', 'Uizard'] },
              { num: '03', title: 'Smart prototyping', desc: 'AI generates variants, micro-copy, and states. I focus on flows, behaviour, and user goals.', tools: ['Figma AI', 'Claude'] },
              { num: '04', title: 'QA & handoff', desc: 'Accessibility checks, UX copy consistency, component naming. AI catches what human fatigue misses.', tools: ['Claude', 'Figma AI'] },
            ].map(card => (
              <article className="ai-card scroll-reveal" role="listitem" key={card.num}>
                <p className="ai-card-num" aria-hidden="true">{card.num}</p>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <div className="ai-tools" aria-label="AI tools used">
                  {card.tools.map(t => <span className="ai-tool-tag" key={t}>{t}</span>)}
                </div>
              </article>
            ))}
          </div>
          <div className="tools-master-row" aria-label="Full toolset">
            {['Claude','ChatGPT','Lovable','Uizard','Figma AI','Stitch'].map(t => (
              <div className="tool-pill" key={t}>
                <span className="tool-pip" aria-hidden="true"></span>{t}
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ========== CTA ========== */}
      <section className="cta-section" aria-labelledby="cta-title">
        <div className="cta-inner">
          <h2 className="cta-title" id="cta-title">
            LET&rsquo;S BUILD<br/>
            SOMETHING<br/>
            <em style={{fontStyle:'normal',color:'var(--orange)'}}>MEANINGFUL</em>
          </h2>
          <p className="cta-sub">
            Currently open to full-time, contract, and freelance opportunities.
            Based in Kathmandu, working globally.
          </p>
          <div className="cta-actions">
            <button className="btn-primary" onClick={showToast}>Hire Me</button>
            <Link to="/about" className="btn-ghost">
              More about me
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
