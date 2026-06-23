import React from 'react'
import { Link } from 'react-router-dom'

const socials = [
  {
    label: 'Email',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=dikshyabc01@gmail.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M22 4L12 13L2 4"/>
      </svg>
    ),
  },
  {
    label: 'Phone',
    href: 'https://wa.me/9779869168977',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dikshya-chhetri/',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'Dribbble',
    href: 'https://dribbble.com/Dikshya_B',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"/>
        <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"/>
        <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{
        padding: '48px 48px 32px',
        borderTop: '1px solid var(--border)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '28px',
        background: 'var(--bg)'
      }}
    >
      {/* Social icons */}
      <div style={{ display: 'flex', gap: '20px' }}>
        {socials.map(s => (
          <a
            key={s.label}
            href={s.href}
            target={s.label === 'Email' || s.label === 'Phone' ? undefined : '_blank'}
            rel="noopener noreferrer"
            aria-label={s.label}
            title={s.label}
            style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              border: '1px solid var(--border)',
              color: 'var(--gray2)',
              textDecoration: 'none',
              transition: 'color var(--dur-fast), border-color var(--dur-fast), background var(--dur-fast)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = 'var(--orange)'
              ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(232,82,26,.3)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.color = 'var(--gray2)'
              ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
            }}
          >
            {s.icon}
          </a>
        ))}
      </div>



      <p style={{
        fontSize: '11px',
        color: 'var(--gray2)',
        letterSpacing: '1px'
      }}>
        &copy; {new Date().getFullYear()} &middot; UI/UX Designer &middot; Kathmandu, Nepal
      </p>
    </footer>
  )
}
