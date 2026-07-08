import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

const BASE = import.meta.env.BASE_URL || '/'

export default function HomePage() {
  // Logo sources — all real SVGs from CDNs, brand files, or official favicons
  const logoMap = [
    // Development tools only
    { slug:'html5', url:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { slug:'css3', url:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { slug:'sass', url:BASE + 'sass-logo.svg' },
    { slug:'javascript', url:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { slug:'react', url:'https://cdn.simpleicons.org/react' },
    { slug:'tailwindcss', url:'https://cdn.simpleicons.org/tailwindcss' },
    { slug:'bootstrap', url:'https://cdn.simpleicons.org/bootstrap' },
    { slug:'git', url:'https://cdn.simpleicons.org/git' },
    { slug:'json', url:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg' },
  ]
  const toolLogos = logoMap.map(l => l.url)

  useEffect(() => {
    // Bubble pop animation with real brand logos from simpleicons CDN
    const container = document.getElementById('heroBubbles')
    let bubbleInterval, groupIndex = 0

    const popGroup = () => {
      if (!container) return
      container.innerHTML = ''
      const count = 2 + Math.floor(Math.random() * 2)
      for (let i = 0; i < count; i++) {
        const idx = (groupIndex + i) % toolLogos.length
        const url = toolLogos[idx]
        const el = document.createElement('span')
        el.className = 'bubble-pop'
        const isSimpleIcon = url.includes('simpleicons')
        const imgSrc = isSimpleIcon ? url + '/rgba(255,255,255,.6)' : url
        el.innerHTML = '<img src="' + imgSrc + '" alt="" style="width:34px;height:34px;display:block" />'

        // Scatter across hero — avoid center content zone
        let l, t
        while (true) {
          l = Math.random() * 88 + 2
          t = Math.random() * 88 + 2
          if (l > 14 && l < 76 && t > 8 && t < 82) continue
          break
        }
        el.style.left = l + '%'
        el.style.top = t + '%'
        el.style.animationDelay = (i * 0.35) + 's'
        const size = 62 + Math.floor(Math.random() * 24)
        el.style.width = size + 'px'
        el.style.height = size + 'px'
        container.appendChild(el)
        setTimeout(() => el.remove(), 5400)
      }
      groupIndex = (groupIndex + count) % toolLogos.length
    }

    popGroup()
    bubbleInterval = setInterval(popGroup, 5600)

    const revealObs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.scroll-reveal').forEach(el => revealObs.observe(el))

    // Claude conversation sequential reveal + auto-scroll
    const chatObs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('play')
          chatObs.unobserve(e.target)

        }
      }),
      { threshold: 0.15 }
    )
    const conv = document.querySelector('.claude-conversation')
    if (conv) chatObs.observe(conv)

    const nav = document.querySelector('nav')
    const onScroll = () => {
      if (!nav) return
      nav.style.borderBottom = window.scrollY > 20
        ? '1px solid rgba(255,255,255,.14)'
        : '1px solid rgba(255,255,255,.08)'
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      clearInterval(bubbleInterval)
      revealObs.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const steps = [
    { num:'01', title:'Understand the problem', desc:'I start by understanding the product goal, the business objective, and the user problem before thinking about solutions. I look at what exists today, what is not working, who the users are, and what success should look like.', color:'#f59e0b' },
    { num:'02', title:'Define the scope', desc:'Once I understand the problem, I break it into a clear design scope. I map the user journey, identify key flows, note constraints, and separate must-haves from nice-to-haves.', color:'#3b82f6' },
    { num:'03', title:'Research and discovery', desc:'I move into discovery through user interviews, feedback review, product data, stakeholder conversations, and competitive or pattern analysis when useful.', color:'#10b981' },
    { num:'04', title:'Structure the experience', desc:'I start shaping the product logic. I create user flows, task paths, information hierarchy, and scenario mapping to make sure the experience is coherent from start to finish.', color:'#ef4444' },
    { num:'05', title:'Explore solutions', desc:'I sketch, wireframe, and prototype early ideas quickly so I can test direction before committing to visual polish. I like to compare multiple approaches where needed.', color:'#8b5cf6' },
    { num:'06', title:'Refine with feedback', desc:'I share early concepts with product managers, engineers, and other stakeholders to get input on feasibility, edge cases, and clarity. I treat feedback as a way to strengthen the solution.', color:'#ec4899' },
    { num:'07', title:'Final design and handoff', desc:'Once the direction is clear, I move into high-fidelity design, interaction details, states, and documentation, making sure everything is implementation-ready for engineers.', color:'#06b6d4' },
    { num:'08', title:'Stay through delivery', desc:'I stay involved during implementation because design quality can easily get lost at handoff. I review builds, check for inconsistencies, and support the team until the design is properly shipped.', color:'#14b8a6' },
    { num:'09', title:'Learn and improve', desc:'After launch, I look at what worked, what didn\'t, and what should evolve next. I pay attention to feedback, behavior, and opportunities to improve the experience over time.', color:'#a855f7' },
  ]

  return (
    <main id="main">
      {/* ========== HERO ========== */}
      <section className="hero" aria-label="Introduction">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Product Designer · 5+ years
          </div>

          <h1 className="hero-headline">
            Designing complex products into<br/>clear, usable experiences.
          </h1>

          <p className="hero-sub">
            I design end-to-end product experiences across SaaS, dashboards, ERP, and
            workflow-heavy systems, from research and structure to UI and design
            systems.
          </p>



          <div className="hero-actions">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dikshyabc01@gmail.com" target="_blank" rel="noopener noreferrer" className="btn-primary">Let’s build something better</a>
            <Link to="/work" className="btn-ghost">
              See my work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          <div className="hero-bg-illus" aria-hidden="true">
            <img src={BASE + 'illustrations/problem-framing.svg'} alt="" className="hi hi-problem-framing" />
            <img src={BASE + 'illustrations/framing-research.svg'} alt="" className="hi hi-research" />
            <img src={BASE + 'illustrations/structure.svg'} alt="" className="hi hi-structure" />
            <img src={BASE + 'illustrations/framing-design.svg'} alt="" className="hi hi-design" />
            <img src={BASE + 'illustrations/prototyping.svg'} alt="" className="hi hi-prototyping" />
            <img src={BASE + 'illustrations/ai-iteration.svg'} alt="" className="hi hi-ai-iteration" />
          </div>

        </div>
        {/* ===== BUBBLE POP CONTAINER (outside hero-content, inside hero) ===== */}
        <div className="hero-bubbles" aria-hidden="true" id="heroBubbles"></div>
      </section>

      {/* ========== HORIZONTAL TIMELINE ========== */}
      <section className="process-section" aria-labelledby="process-title">
        <div className="process-inner">
          <div className="process-header">
            <span className="section-kicker">How I work</span>
            <h2 className="section-title" id="process-title">From Problem<br/>to Product</h2>
          </div>
          <div className="timeline-track">
            {steps.map((s, i) => (
              <React.Fragment key={s.num}>
                <div className="timeline-item">
                  <div className="tl-card" style={{'--step-color': s.color} as React.CSSProperties}>
                    <div className="tl-content">
                      <span className="tl-num">{s.num}</span>
                      <h3 className="tl-title">{s.title}</h3>
                      <p className="tl-desc">{s.desc}</p>
                    </div>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="tl-connector" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="1">
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ========== AI AS MY DESIGN PARTNER ========== */}
      <section className="ai-section" aria-labelledby="ai-title">
        <div className="ai-inner">
          <div className="ai-header">
            <span className="section-kicker">My practice</span>
            <h2 className="section-title" id="ai-title">AI as my design partner</h2>
          </div>

          <div className="claude-window">
            <div className="claude-topbar">
              <div className="claude-topbar-left">
                <span className="claude-logo">
                  <div className="claude-logo-ring">
                    <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
                      <circle cx="16" cy="13" r="5" fill="var(--orange)"/>
                      <path d="M11 22 Q16 27 21 22" stroke="var(--orange)" strokeWidth="2" fill="none" strokeLinecap="round" opacity=".6"/>
                    </svg>
                  </div>
                </span>
                <span className="claude-title">AI</span>

              </div>
              <div className="claude-topbar-right">
                <div className="claude-wifi">
                  <span className="wifi-bar" style={{'--i':0} as React.CSSProperties}></span>
                  <span className="wifi-bar" style={{'--i':1} as React.CSSProperties}></span>
                  <span className="wifi-bar" style={{'--i':2} as React.CSSProperties}></span>
                  <span className="wifi-bar" style={{'--i':3} as React.CSSProperties}></span>
                </div>
              </div>
            </div>

            <div className="claude-body">
              <div className="claude-ambient"></div>
              <div className="claude-conversation">

                {/* --- Q1 --- */}
                <div className="cm cm-ai">
                  <div className="cm-avatar cm-avatar-ai">
                    <svg width="12" height="12" viewBox="0 0 32 32" fill="none">
                      <circle cx="16" cy="13" r="5" fill="currentColor"/>
                      <path d="M11 22 Q16 27 21 22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="cm-bubble">
                    <div className="cm-label">
                      <span className="cm-label-dot"></span>
                      AI
                      <span className="cm-time">12:04</span>
                    </div>
                    <p>Where do you use AI in your workflow?</p>
                  </div>
                </div>

                <div className="typing-indicator">
                  <span className="tdot" style={{'--i':0} as React.CSSProperties}></span>
                  <span className="tdot" style={{'--i':1} as React.CSSProperties}></span>
                  <span className="tdot" style={{'--i':2} as React.CSSProperties}></span>
                </div>

                <div className="cm cm-me">
                  <div className="cm-bubble cm-bubble-me">
                    <div className="cm-label cm-label-me">
                      <span className="cm-time">12:05</span>
                    </div>
                    <p>I use AI in the early and middle parts of my workflow when speed and breadth matter. It helps me explore ideas faster, draft initial content, summarize long notes, compare directions, and reduce repetitive work.</p>
                  </div>
                  <div className="cm-avatar cm-avatar-me">D</div>
                </div>

                <div className="cm-divider">
                  <span className="cm-divider-line"></span>
                  <span className="cm-divider-icon">&#9670;</span>
                  <span className="cm-divider-line"></span>
                </div>

                {/* --- Q2 --- */}
                <div className="cm cm-ai">
                  <div className="cm-avatar cm-avatar-ai">
                    <svg width="12" height="12" viewBox="0 0 32 32" fill="none">
                      <circle cx="16" cy="13" r="5" fill="currentColor"/>
                      <path d="M11 22 Q16 27 21 22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="cm-bubble">
                    <div className="cm-label">
                      <span className="cm-label-dot"></span>
                      AI
                      <span className="cm-time">12:05</span>
                    </div>
                    <p>Why use AI if you&apos;re a designer?</p>
                  </div>
                </div>

                <div className="typing-indicator">
                  <span className="tdot" style={{'--i':0} as React.CSSProperties}></span>
                  <span className="tdot" style={{'--i':1} as React.CSSProperties}></span>
                  <span className="tdot" style={{'--i':2} as React.CSSProperties}></span>
                </div>

                <div className="cm cm-me">
                  <div className="cm-bubble cm-bubble-me">
                    <div className="cm-label cm-label-me">
                      <span className="cm-time">12:06</span>
                    </div>
                    <p>I use AI to move faster without sacrificing quality. It helps me spend less time on mechanical tasks and more time on design judgment, research interpretation, problem framing, and craft. The thinking is still mine.</p>
                  </div>
                  <div className="cm-avatar cm-avatar-me">D</div>
                </div>

                <div className="cm-divider">
                  <span className="cm-divider-line"></span>
                  <span className="cm-divider-icon">&#9670;</span>
                  <span className="cm-divider-line"></span>
                </div>

                {/* --- Q3 --- */}
                <div className="cm cm-ai">
                  <div className="cm-avatar cm-avatar-ai">
                    <svg width="12" height="12" viewBox="0 0 32 32" fill="none">
                      <circle cx="16" cy="13" r="5" fill="currentColor"/>
                      <path d="M11 22 Q16 27 21 22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="cm-bubble">
                    <div className="cm-label">
                      <span className="cm-label-dot"></span>
                      AI
                      <span className="cm-time">12:06</span>
                    </div>
                    <p>Doesn&apos;t AI replace the designer?</p>
                  </div>
                </div>

                <div className="typing-indicator">
                  <span className="tdot" style={{'--i':0} as React.CSSProperties}></span>
                  <span className="tdot" style={{'--i':1} as React.CSSProperties}></span>
                  <span className="tdot" style={{'--i':2} as React.CSSProperties}></span>
                </div>

                <div className="cm cm-me">
                  <div className="cm-bubble cm-bubble-me">
                    <div className="cm-label cm-label-me">
                      <span className="cm-time">12:07</span>
                    </div>
                    <p>I never treat AI as a substitute for user insight, product context, or design taste. I use it to support exploration, not to make final decisions. I review everything critically and make sure the final output reflects real user needs.</p>
                  </div>
                  <div className="cm-avatar cm-avatar-me">D</div>
                </div>

                <div className="cm-divider">
                  <span className="cm-divider-line"></span>
                  <span className="cm-divider-icon">&#9670;</span>
                  <span className="cm-divider-line"></span>
                </div>

                {/* --- Q4 --- */}
                <div className="cm cm-ai">
                  <div className="cm-avatar cm-avatar-ai">
                    <svg width="12" height="12" viewBox="0 0 32 32" fill="none">
                      <circle cx="16" cy="13" r="5" fill="currentColor"/>
                      <path d="M11 22 Q16 27 21 22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="cm-bubble">
                    <div className="cm-label">
                      <span className="cm-label-dot"></span>
                      AI
                      <span className="cm-time">12:07</span>
                    </div>
                    <p>What does AI actually unlock for you?</p>
                  </div>
                </div>

                <div className="typing-indicator">
                  <span className="tdot" style={{'--i':0} as React.CSSProperties}></span>
                  <span className="tdot" style={{'--i':1} as React.CSSProperties}></span>
                  <span className="tdot" style={{'--i':2} as React.CSSProperties}></span>
                </div>

                <div className="cm cm-me">
                  <div className="cm-bubble cm-bubble-me">
                    <div className="cm-label cm-label-me">
                      <span className="cm-time">12:08</span>
                    </div>
                    <p>Used well, AI lets me be faster in discovery, stronger in iteration, and more efficient in production. It helps me test ideas sooner, communicate more clearly, and keep momentum, but the quality still comes from understanding the problem.</p>
                  </div>
                  <div className="cm-avatar cm-avatar-me">D</div>
                </div>


              </div>

              <div className="claude-input-bar">
                <div className="claude-input-field">
                  <span className="claude-input-text">Ask a follow-up question...</span>
                  <span className="claude-input-cursor"></span>
                </div>
                <div className="claude-send">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.15)" strokeWidth="1.5">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MARQUEE ========== */}
      <div className="marquee-wrap" aria-hidden="true">
        <div className="marquee-track">
          <span>UI/UX Design</span><span className="marquee-dot">&loz;</span>
          <span>Interaction Design</span><span className="marquee-dot">&loz;</span>
          <span>Design Systems</span><span className="marquee-dot">&loz;</span>
          <span>Product Design</span><span className="marquee-dot">&loz;</span>
          <span>User Research</span><span className="marquee-dot">&loz;</span>
          <span>UI/UX Design</span><span className="marquee-dot">&loz;</span>
          <span>Interaction Design</span><span className="marquee-dot">&loz;</span>
          <span>Design Systems</span><span className="marquee-dot">&loz;</span>
          <span>Product Design</span><span className="marquee-dot">&loz;</span>
          <span>User Research</span><span className="marquee-dot">&loz;</span>
        </div>
      </div>
    </main>
  )
}
