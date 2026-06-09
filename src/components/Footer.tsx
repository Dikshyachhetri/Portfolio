import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{
        padding: '24px 48px',
        borderTop: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'var(--bg)'
      }}
    >
      <Link to="/home" className="footer-logo" style={{
        fontFamily: "'Bebas Neue',sans-serif",
        fontSize: '15px',
        letterSpacing: '3px',
        color: 'var(--gray2)',
        textDecoration: 'none',
        transition: 'color var(--dur-fast)'
      }}>DIKSHYA</Link>
      <p style={{ fontSize: '12px', color: 'var(--gray2)' }}>
        &copy; 2026 &middot; UI/UX Designer &middot; Kathmandu, Nepal
      </p>
      <Link to="/home" className="back-link" style={{
        fontSize: '11px',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        color: 'var(--gray)',
        textDecoration: 'none',
        transition: 'color var(--dur-fast)'
      }}>&larr; Back Home</Link>
    </footer>
  )
}
