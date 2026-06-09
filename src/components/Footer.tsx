import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{
        padding: '40px 48px 32px',
        borderTop: '1px solid var(--border)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        background: 'var(--bg)'
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '1200px'
      }}>
        <Link to="/home" style={{
          fontFamily: "'Bebas Neue',sans-serif",
          fontSize: '18px',
          letterSpacing: '3px',
          color: 'var(--gray2)',
          textDecoration: 'none',
          transition: 'color var(--dur-fast)'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--orange)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--gray2)')}
        >DIKSHYA</Link>

        <nav aria-label="Footer navigation" style={{ display: 'flex', gap: '28px' }}>
          {['Home', 'Work', 'About'].map(link => (
            <Link
              key={link}
              to={`/${link.toLowerCase()}`}
              style={{
                fontSize: '12px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: 'var(--gray)',
                textDecoration: 'none',
                transition: 'color var(--dur-fast)'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--gray)')}
            >{link}</Link>
          ))}
        </nav>

        <Link to="/home" style={{
          fontSize: '12px',
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          color: 'var(--gray)',
          textDecoration: 'none',
          transition: 'color var(--dur-fast)'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--orange)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--gray)')}
        >&larr; Back to top</Link>
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
