import React, { useRef, useEffect, useState } from 'react'
import { showToast } from '../components/Toast'
import PeekingGirl from '../components/PeekingGirl'
import './ContactPage.css'

const GMAIL = 'https://mail.google.com/mail/?view=cm&fs=1&to=dikshyabc01@gmail.com'
const EMAIL = 'dikshyabc01@gmail.com'

export default function ContactPage() {
  const emailRef = useRef<HTMLAnchorElement>(null)
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([])
  // cursor-following ripple state (refs only — the rAF loop never re-renders)
  const ripple = useRef({ raf: 0, active: false, pointerX: 0, centers: [] as number[], amp: 0 })
  // girl slides up from the bottom edge while the email is hovered
  const [peeking, setPeeking] = useState(false)

  // cache each letter's center (relative to the link) and the wave amplitude
  const measure = () => {
    const anchor = emailRef.current
    if (!anchor) return
    const rect = anchor.getBoundingClientRect()
    ripple.current.centers = letterRefs.current.map(el => {
      if (!el) return 0
      const r = el.getBoundingClientRect()
      return r.left + r.width / 2 - rect.left
    })
    ripple.current.amp = parseFloat(getComputedStyle(anchor).fontSize) * 0.2
  }

  // one wave per frame, masked to a radius around the pointer:
  // letters under the cursor ripple, letters outside stay at rest
  const frame = (now: number) => {
    const s = ripple.current
    const anchor = emailRef.current
    if (!s.active || !anchor) return
    const spread = Math.max(anchor.clientWidth * 0.22, 110)
    const wavelength = Math.max(spread * 1.1, 160)
    letterRefs.current.forEach((el, i) => {
      if (!el) return
      const d = s.centers[i] - s.pointerX
      const fall = Math.max(0, 1 - Math.abs(d) / spread)
      if (fall === 0) { el.style.transform = ''; return }
      const mask = fall * fall * (3 - 2 * fall) // smoothstep edge
      const wave = 0.5 + 0.5 * Math.sin((d / wavelength) * Math.PI * 2 - now / 260)
      el.style.transform = `translateY(${(-s.amp * mask * wave).toFixed(2)}px)`
    })
    s.raf = requestAnimationFrame(frame)
  }

  const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const onPointerEnter = (e: React.PointerEvent<HTMLAnchorElement>) => {
    setPeeking(true)
    const anchor = emailRef.current
    if (!anchor || reducedMotion()) return
    measure()
    ripple.current.active = true
    ripple.current.pointerX = e.clientX - anchor.getBoundingClientRect().left
    cancelAnimationFrame(ripple.current.raf)
    ripple.current.raf = requestAnimationFrame(frame)
  }
  const onPointerMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    const anchor = emailRef.current
    if (!anchor || !ripple.current.active) return
    ripple.current.pointerX = e.clientX - anchor.getBoundingClientRect().left
  }
  const onPointerLeave = () => {
    setPeeking(false)
    ripple.current.active = false
    cancelAnimationFrame(ripple.current.raf)
    letterRefs.current.forEach(el => { if (el) el.style.transform = '' })
  }
  useEffect(() => () => cancelAnimationFrame(ripple.current.raf), [])

  return (
    <main id="main" className="contact-page">
      <div className="contact-inner">
        <h1 className="contact-title">Let&rsquo;s Connect</h1>
        <p className="contact-sub">
          Open to full-time, contract, and freelance opportunities. Based in Kathmandu, working globally.
        </p>

        <span className="contact-name">Dikshya BC</span>
      </div>

      {/* email breaks out of the 720px column and spans the full page body */}
      <a
        className="contact-email"
        ref={emailRef}
        href={`mailto:${EMAIL}`}
        onClick={showToast}
        aria-label={EMAIL}
        onPointerEnter={onPointerEnter}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
      >
        {EMAIL.split('').map((ch, i) => (
          <span
            className="contact-letter"
            key={i}
            ref={el => { letterRefs.current[i] = el }}
          >{ch}</span>
        ))}
      </a>

      <div className="contact-bottom">
        <div className="contact-socials">
          <a href={GMAIL} target="_blank" rel="noopener noreferrer">Email</a>
          <a href="https://www.linkedin.com/in/dikshya-chhetri/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://dribbble.com/Dikshya_B" target="_blank" rel="noopener noreferrer">Dribbble</a>
          <a href="https://wa.me/9779868168977" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>

        {/* line-art girl peeking over the bottom ledge — slides in on email hover */}
        <div className={`contact-peek${peeking ? ' peek-in' : ''}`}>
          <PeekingGirl />
        </div>
      </div>
    </main>
  )
}
