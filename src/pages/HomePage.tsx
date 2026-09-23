import React from 'react'
import { useEffect, useLayoutEffect, useRef } from 'react'
import './HomePage.css'

export default function HomePage() {
  const homeRef = useRef<HTMLElement>(null)

  // measure the home page height so the leaves fall all the way from the
  // hero down to the "Work with me" band, then loop
  useLayoutEffect(() => {
    const el = homeRef.current
    if (!el) return
    const setDist = () => el.style.setProperty('--fall-dist', `${el.offsetHeight}px`)
    setDist()
    const ro = new ResizeObserver(setDist)
    ro.observe(el)
    window.addEventListener('resize', setDist)
    return () => { ro.disconnect(); window.removeEventListener('resize', setDist) }
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const chips = [
    { label: 'UI/UX', filled: true },
    { label: 'Vibe Coding', filled: false },
    { label: 'Product', filled: false },
    { label: 'Branding', filled: false },
    { label: 'Graphic', filled: false },
    { label: 'Illustration', filled: false },
    { label: 'Frontend', filled: true },
  ]

  const layers = [
    { title: 'Strategy & plan', desc: 'Mapping the path so design decisions have a reason behind them.' },
    { title: 'Listen & define', desc: 'Understanding the real problem before touching a single pixel.' },
    { title: 'Design & refine', desc: 'Shaping the experience, then sharpening it until it feels obvious.' },
    { title: 'Build & test', desc: 'Shipping, and see how it holds up with real users.' },
  ]

  // Puzzle piece geometry — four real interlocking pieces (480×480 canvas).
  // Each piece owns a rounded tab (bump) on one or two inner seams; the
  // neighbour traces the same arc as its matching dent, so the four fills
  // tile perfectly while the seam ink shows the interlock.
  const piecePos = ['tl', 'tr', 'bl', 'br']
  const piecePath = [
    // top-left: tab right (into TR) + tab down (into BL); square seam corner at the left edge
    'M44 24 H240 V104 a16 16 0 0 1 0 32 V240 H148 a16 16 0 0 1 -32 0 H24 V44 a20 20 0 0 1 20 -20 Z',
    // top-right: tab down (into BR) + dent left (for the TL tab)
    'M240 24 H436 a20 20 0 0 1 20 20 V240 H364 a16 16 0 0 1 -32 0 H240 V136 a16 16 0 0 0 0 -32 V24 Z',
    // bottom-left: tab right (into BR) + dent top (for the TL tab)
    'M24 240 H116 a16 16 0 0 0 32 0 H240 V344 a16 16 0 0 1 0 32 V456 H44 a20 20 0 0 1 -20 -20 V240 Z',
    // bottom-right: dent top (for the TR tab) + dent left (for the BL tab);
    // straight outer edges, rounded only at the canvas corner
    'M240 240 H332 a16 16 0 0 0 32 0 H456 V436 a20 20 0 0 1 -20 20 H240 V376 a16 16 0 0 0 0 -32 V240 Z',
  ]
  // Outer contour only — the wavy seams are drawn by each piece's own
  // cream stroke, so the four pieces stay visible as individuals.
  const contour = 'M44 24 H436 a20 20 0 0 1 20 20 V436 a20 20 0 0 1 -20 20 H44 a20 20 0 0 1 -20 -20 V44 a20 20 0 0 1 20 -20 Z'

  // the only leaf shape — a lobed maple/sycamore silhouette reads as autumn
  const LEAF_PATH =
    'M50 4 C56 20 62 24 74 20 C68 32 72 38 86 40 C74 48 74 54 82 64 C68 62 62 66 62 78 C56 68 50 68 44 78 C44 66 38 62 24 66 C32 56 32 50 20 42 C34 40 38 34 32 22 C44 24 48 20 50 4 Z'
  const LEAVES = ['lf-1', 'lf-2', 'lf-3', 'lf-4', 'lf-5']

  return (
    <main id="main" className="home" ref={homeRef}>
      {/* autumn maple leaves falling down the whole page */}
      <div className="leaf-field" aria-hidden="true">
        {LEAVES.map(cls => (
          <span className={`leaf ${cls}`} key={cls}>
            <svg viewBox="0 0 100 100"><path d={LEAF_PATH} /></svg>
          </span>
        ))}
      </div>

      {/* ========== HERO ========== */}
      <section className="hero" aria-label="Introduction">
        {/* blurred green leaves floating behind the hero copy */}
        <span className="hero-leaf hero-leaf-soft" aria-hidden="true">
          <svg viewBox="0 0 100 100"><path d={LEAF_PATH} /></svg>
        </span>
        <span className="hero-leaf hero-leaf-blur" aria-hidden="true">
          <svg viewBox="0 0 100 100"><path d={LEAF_PATH} /></svg>
        </span>

        <div className="hero-center">
          <h1 className="hero-title">
            <span className="hero-pre">I am a </span>
            Product Designer
          </h1>
          <p className="hero-quote">
            I care about how clearly things communicate, how well they handle edge
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
          <span className="ofw-light" aria-hidden="true">
            <span className="ofw-ring"></span>
            <span className="ofw-dot"></span>
          </span>
          Open for work
        </div>
      </section>

      {/* ========== STATEMENT — four layers as puzzle pieces coming together ========== */}
      <section className="statement" aria-labelledby="statement-title">
        <h2 className="statement-title reveal" id="statement-title">
          Designing, building, and refining as<br /> one continuous process
        </h2>

        <div className="puzzle-wrap reveal">
          <div className="puzzle">
            <svg className="pz-svg" viewBox="0 0 480 480" role="img" aria-label="Four working layers coming together like puzzle pieces">
              {piecePos.map((p, i) => (
                <g className={`pz pz-${p}`} key={p}>
                  <path className="pz-fill" d={piecePath[i]} fillRule="evenodd" />
                </g>
              ))}
              <g className="pz-ink" aria-hidden="true">
                <path d={contour} />
              </g>
            </svg>

            {layers.map((l, i) => (
              <div className={`pz-label pz-label-${piecePos[i]}`} key={l.title} aria-hidden="true">
                <span className="pz-num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="pz-title">{l.title}</h3>
                <p className="pz-desc">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
