import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

const BASE = import.meta.env.BASE_URL || '/'

// Lobed maple/sycamore silhouette, soft enough to read as a leaf
// even at heavy blur.
const LEAF_PATH =
  'M50 4 C56 20 62 24 74 20 C68 32 72 38 86 40 C74 48 74 54 82 64 C68 62 62 66 62 78 C56 68 50 68 44 78 C44 66 38 62 24 66 C32 56 32 50 20 42 C34 40 38 34 32 22 C44 24 48 20 50 4 Z'

type Skill = {
  name: string
  icon: string
  badge?: 'ai' | 'make'
}

// Exactly the software/tools list from the CV - no other stack items.
const skills: Skill[] = [
  { name: 'Figma', icon: 'figma.svg' },
  { name: 'Figma Make', icon: 'figma.svg', badge: 'make' },
  { name: 'Figma AI', icon: 'figma.svg', badge: 'ai' },
  { name: 'Claude', icon: 'claude.svg' },
  { name: 'Lovable', icon: 'lovable.svg' },
  { name: 'v0', icon: 'v0.svg' },
  { name: 'Cursor AI', icon: 'cursor.svg' },
  { name: 'Uizard', icon: 'uizard.svg' },
  { name: 'Stitch', icon: 'stitch.png' },
  { name: 'Adobe Illustrator', icon: 'illustrator.svg' },
  { name: 'Adobe XD', icon: 'xd.svg' },
  { name: 'Adobe Photoshop', icon: 'photoshop.svg' },
  { name: 'Sketch', icon: 'sketch.svg' },
  { name: 'DaVinci Resolve', icon: 'davinci-resolve.svg' },
  { name: 'Procreate', icon: 'procreate.png' },
  { name: 'FigJam', icon: 'figjam.svg' },
  { name: 'Miro', icon: 'miro.svg' },
  { name: 'Google Analytics', icon: 'google-analytics.svg' },
  { name: 'Hotjar', icon: 'hotjar.svg' },
  { name: 'Elementor', icon: 'elementor.svg' },
  { name: 'DeepSeek', icon: 'deepseek.svg' },
  { name: 'HTML', icon: 'html5.svg' },
  { name: 'CSS', icon: 'css3.svg' },
  { name: 'SCSS', icon: 'sass.svg' },
  { name: 'JavaScript', icon: 'javascript.svg' },
  { name: 'Bootstrap', icon: 'bootstrap.svg' },
  { name: 'Git', icon: 'git.svg' },
]

// Optical fit, measured from each file's alpha bounds rather than eyeballed:
// `scale` enlarges the artwork until its longest side reaches the tile edge,
// `x`/`y` (in % of the tile) nudge it so the artwork's own centre lands dead
// centre in the square. Only icons that need a nudge are listed.
type IconFit = { scale: number; x?: number; y?: number }

const ICON_FIT: Record<string, IconFit> = {
  'google-analytics.svg': { scale: 1.369, y: -4.28 },
  'cursor.svg': { scale: 1.231 },
  'figjam.svg': { scale: 1.202 },
  'uizard.svg': { scale: 1.185, x: -4.86, y: -4.86 },
  'claude.svg': { scale: 1.049 },
  'html5.svg': { scale: 1.024 },
  'css3.svg': { scale: 1.02 },
  'javascript.svg': { scale: 1.02 },
  'bootstrap.svg': { scale: 1.016, y: -0.6 },
  'git.svg': { scale: 1.012 },
  'figma.svg': { scale: 1, x: -2.34 },
}
const DEFAULT_ICON_FIT: IconFit = { scale: 1 }

/* ------------------------------------------------------------------
   Floating skill pop-ups
   Five slots, each icon living exactly 2.5s and opening half a second
   apart: never more than five on screen, and one arrives as another
   leaves. Placement runs on a zone map so the icons stay spread out.
   ------------------------------------------------------------------ */

type Cell = { x: number; y: number; zx: number; zy: number }
type Zone = { zx: number; zy: number; cells: Cell[] }
type Rect = { left: number; right: number; top: number; bottom: number }
type Layout = { zones: Zone[]; exclusions: Rect[]; width: number; height: number }
type Tile = { id: number; skill: Skill; x: number; y: number; zx: number; zy: number }

const CELL = 96 // coarse grid step used to find candidate spots
const TILE = 64 // px — must match --skill-tile in HomePage.css
const ZONE = 140 // px — one neighbourhood; zones keep icons from clumping
const EDGE = 10 // keeps tiles (and their badges) off the hero edges
const CONTENT_PAD = 20
const JITTER = (CELL - TILE) / 2 // nudge within a cell so icons never line up

// The icons only decorate the right side of the .hero-grid block: a column
// down its right edge and out into the hero's right margin. The top edge and
// everything below-left of that stays clear so the copy owns the space.
const RIGHT_BAND = 0.2 // share of the grid width that counts as "right side"

const LIFE_MS = 7000
const SKILLS_ON_SCREEN = 5
const TICK_MS = LIFE_MS / SKILLS_ON_SCREEN
const RECENT_SKILLS = 4
const RECENT_ZONES = 6

const zoneKey = (z: { zx: number; zy: number }) => z.zx * 1000 + z.zy
const hits = (x: number, y: number, r: Rect) =>
  x < r.right && x + TILE > r.left && y < r.bottom && y + TILE > r.top

/** Pick an empty neighbourhood, preferring one that is diagonal to every icon
 *  already on screen - no two logos share a row or a column of the grid - and
 *  then the roomiest spot inside it. */
function pickSpot(layout: Layout, active: Tile[], recentZones: number[]): Cell[] | null {
  if (!layout.zones.length) return null

  const isRecent = (zone: Zone) => recentZones.indexOf(zoneKey(zone)) !== -1
  const apart = (zone: Zone, by: number) =>
    active.every(t => Math.abs(t.zx - zone.zx) >= by && Math.abs(t.zy - zone.zy) >= by)
  const notSameZone = (zone: Zone) =>
    active.every(t => t.zx !== zone.zx || t.zy !== zone.zy)

  const tests: ((zone: Zone) => boolean)[] = [
    zone => apart(zone, 2) && !isRecent(zone),
    zone => apart(zone, 2),
    zone => apart(zone, 1) && !isRecent(zone),
    zone => apart(zone, 1),
    notSameZone,
    () => true,
  ]

  // Roomiest first: a full zone of breathing room, then a tile and a half,
  // then whatever is left so a slot never goes empty for long.
  const gaps = [ZONE, TILE * 1.5, 0]

  for (const test of tests) {
    const zones = layout.zones.filter(test)
    if (!zones.length) continue

    for (const gap of gaps) {
      const options = zones
        .map(zone => zone.cells.filter(c =>
          active.every(t => Math.hypot(t.x - c.x, t.y - c.y) >= gap)
        ))
        .filter(cells => cells.length)
      if (options.length) return options[Math.floor(Math.random() * options.length)]
    }
  }
  return null
}

/** Choose the next icon: never a logo already on screen (by name or by art),
 *  and not one of the last few that just left. */
function pickTile(
  layout: Layout,
  active: Tile[],
  id: number,
  recentZones: number[],
  recentSkills: string[]
): Tile | null {
  const onScreenNames = new Set(active.map(t => t.skill.name))
  const onScreenIcons = new Set(active.map(t => t.skill.icon))
  const available = (skill: Skill) =>
    !onScreenNames.has(skill.name) && !onScreenIcons.has(skill.icon)

  let pool = skills.filter(s => available(s) && recentSkills.indexOf(s.name) === -1)
  if (!pool.length) pool = skills.filter(available)
  if (!pool.length) return null

  const spot = pickSpot(layout, active, recentZones)
  if (!spot) return null

  const taken = new Set(active.map(t => `${Math.round(t.x)},${Math.round(t.y)}`))
  const cells = spot.filter(c => !taken.has(`${c.x},${c.y}`))
  if (!cells.length) return null

  // Nudge off the grid so logos never sit on a shared row or column, but only
  // when the nudge keeps the tile clear of copy and of the other icons.
  const cell = cells[Math.floor(Math.random() * cells.length)]
  const jx = Math.round(cell.x + (Math.random() - 0.5) * 2 * JITTER)
  const jy = Math.round(cell.y + (Math.random() - 0.5) * 2 * JITTER)
  const free =
    jx >= EDGE &&
    jy >= EDGE &&
    jx + TILE <= layout.width - EDGE &&
    jy + TILE <= layout.height - EDGE &&
    !layout.exclusions.some(e => hits(jx, jy, e)) &&
    active.every(t => Math.hypot(t.x - jx, t.y - jy) > TILE + 8)

  const x = free ? jx : cell.x
  const y = free ? jy : cell.y
  const skill = pool[Math.floor(Math.random() * pool.length)]
  return { id, skill, x, y, zx: cell.zx, zy: cell.zy }
}

function SparkleBadge() {
  return (
    <svg viewBox="0 0 12 12" aria-hidden="true">
      <path d="M6 .8l1.1 3.1L10.2 5 7.1 6.1 6 9.2 4.9 6.1 1.8 5l3.1-1.1L6 .8z" fill="currentColor" />
    </svg>
  )
}

function PlusBadge() {
  return (
    <svg viewBox="0 0 12 12" aria-hidden="true">
      <path d="M5 1h2v4h4v2H7v4H5V7H1V5h4V1z" fill="currentColor" />
    </svg>
  )
}

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
  const heroRef = useRef<HTMLElement>(null)
  const heroGridRef = useRef<HTMLDivElement>(null)
  const [tiles, setTiles] = useState<Tile[]>([])
  const [heroVisible, setHeroVisible] = useState(true)

  const layoutRef = useRef<Layout>({ zones: [] })
  const tilesRef = useRef<Tile[]>([])
  const nextId = useRef(0)
  const recentZones = useRef<number[]>([])
  const recentSkills = useRef<string[]>([])
  const timers = useRef<Set<number>>(new Set())

  useLayoutEffect(() => {
    let cancelled = false

    const compute = () => {
      if (cancelled) return
      const hero = heroRef.current
      const grid = heroGridRef.current
      if (!hero || !grid || window.innerWidth <= 1060) {
        layoutRef.current = { zones: [], exclusions: [], width: 0, height: 0 }
        return
      }

      const heroRect = hero.getBoundingClientRect()
      const gridRect = grid.getBoundingClientRect()
      const viewportW = window.innerWidth
      const viewportH = heroRect.height
      const layerLeft = heroRect.left + heroRect.width / 2 - viewportW / 2
      const layerTop = heroRect.top

      // The column is measured off .hero-grid's right edge.
      const field = {
        right: gridRect.right - layerLeft,
        width: gridRect.width,
      }

      const exclusions = Array.from(
        grid.querySelectorAll<HTMLElement>('.eyebrow, .hero-title, .hero-lede, .hero-side')
      ).map(el => {
        const rect = el.getBoundingClientRect()
        return {
          left: rect.left - layerLeft - CONTENT_PAD,
          right: rect.right - layerLeft + CONTENT_PAD,
          top: rect.top - layerTop - CONTENT_PAD,
          bottom: rect.bottom - layerTop + CONTENT_PAD,
        }
      })

      // Keep the fixed nav clear.
      exclusions.push({
        left: -CONTENT_PAD,
        right: viewportW + CONTENT_PAD,
        top: -layerTop - CONTENT_PAD,
        bottom: 80 - layerTop,
      })

      // Group every usable spot into its zone, so placement can reason about
      // distance between icons instead of scattering at random.
      const zones = new Map<number, Zone>()
      for (let col = 0; col * CELL < viewportW; col++) {
        for (let row = 0; row * CELL < viewportH; row++) {
          const x = col * CELL + (CELL - TILE) / 2
          const y = row * CELL + (CELL - TILE) / 2
          if (x < EDGE || y < EDGE || x + TILE > viewportW - EDGE || y + TILE > viewportH - EDGE) continue

          // Right side only.
          const cx = x + TILE / 2
          if (cx < field.right - field.width * RIGHT_BAND) continue

          const blocked = exclusions.some(
            e => x < e.right && x + TILE > e.left && y < e.bottom && y + TILE > e.top
          )
          if (blocked) continue

          const zx = Math.floor(x / ZONE)
          const zy = Math.floor(y / ZONE)
          const key = zoneKey({ zx, zy })
          const zone = zones.get(key) ?? { zx, zy, cells: [] }
          zone.cells.push({ x, y, zx, zy })
          zones.set(key, zone)
        }
      }

      layoutRef.current = { zones: [...zones.values()], exclusions, width: viewportW, height: viewportH }
    }

    compute()
    document.fonts?.ready.then(compute)

    let resizeTimer = 0
    const onResize = () => {
      window.clearTimeout(resizeTimer)
      resizeTimer = window.setTimeout(compute, 150)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelled = true
      window.clearTimeout(resizeTimer)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  // Only run the pop-up stream while the hero is actually on screen.
  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    const io = new IntersectionObserver(
      entries => entries.forEach(e => setHeroVisible(e.isIntersecting)),
      { threshold: 0 }
    )
    io.observe(hero)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!heroVisible) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const spawn = () => {
      if (!layoutRef.current.zones.length) return

      const id = ++nextId.current
      const tile = pickTile(
        layoutRef.current,
        tilesRef.current,
        id,
        recentZones.current,
        recentSkills.current
      )
      if (!tile) return

      recentZones.current = [...recentZones.current, zoneKey(tile)].slice(-RECENT_ZONES)
      recentSkills.current = [...recentSkills.current, tile.skill.name].slice(-RECENT_SKILLS)

      tilesRef.current = [...tilesRef.current, tile].slice(-SKILLS_ON_SCREEN)
      setTiles(tilesRef.current)

      const timer = window.setTimeout(() => {
        timers.current.delete(timer)
        tilesRef.current = tilesRef.current.filter(t => t.id !== id)
        setTiles(tilesRef.current)
      }, LIFE_MS)
      timers.current.add(timer)
    }

    spawn()
    const interval = window.setInterval(spawn, TICK_MS)

    return () => {
      window.clearInterval(interval)
      timers.current.forEach(t => window.clearTimeout(t))
      timers.current.clear()
      tilesRef.current = []
      setTiles([])
    }
  }, [heroVisible])

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
      <section className="hero" aria-labelledby="hero-title" ref={heroRef}>
        {/* light blurred leaves drifting behind the hero copy */}
        <span className="hero-leaf hero-leaf--a" aria-hidden="true">
          <svg viewBox="0 0 100 100"><path d={LEAF_PATH} /></svg>
        </span>
        <span className="hero-leaf hero-leaf--b" aria-hidden="true">
          <svg viewBox="0 0 100 100"><path d={LEAF_PATH} /></svg>
        </span>
        <span className="hero-leaf hero-leaf--c" aria-hidden="true">
          <svg viewBox="0 0 100 100"><path d={LEAF_PATH} /></svg>
        </span>

        {/* skill logos fade in and out on random grid cells behind the hero copy */}
        <div className="hero-skills" aria-hidden="true">
          {tiles.map(tile => {
            const fit = ICON_FIT[tile.skill.icon] ?? DEFAULT_ICON_FIT
            return (
              <span
                key={tile.id}
                className="hero-skill"
                style={
                  {
                    left: tile.x,
                    top: tile.y,
                    '--skill-life': `${LIFE_MS}ms`,
                    '--skill-scale': fit.scale,
                    '--skill-x': `${fit.x ?? 0}%`,
                    '--skill-y': `${fit.y ?? 0}%`,
                  } as React.CSSProperties
                }
              >
                <img src={`${BASE}skill-icons/${tile.skill.icon}`} alt="" draggable="false" />
                {tile.skill.badge && (
                  <span className={`hero-skill-badge hero-skill-badge--${tile.skill.badge}`}>
                    {tile.skill.badge === 'ai' ? <SparkleBadge /> : <PlusBadge />}
                  </span>
                )}
              </span>
            )
          })}
        </div>

        <div className="hero-grid" ref={heroGridRef}>
          <p className="eyebrow">UI/UX Designer</p>
          <h1 id="hero-title" className="display hero-title">
            Designing <em>clarity</em> into complex products.
          </h1>

          {/* Lower band: lede left, actions right, shared top rule */}
          <div className="hero-body">
            <p className="hero-lede">
              I&rsquo;m Dikshya, a UI/UX designer with 5+ years of turning dense,
              high-stakes workflows into products people actually feel confident
              using. I&rsquo;ve worked across healthcare, fintech, ERP, aviation,
              edtech, cybersecurity, maritime, AI and ecommerce, on B2B, B2C and
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
                Currently designing at Invicta · Open to work
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
