import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { EMAIL, GMAIL_COMPOSE_URL, WHATSAPP_URL } from '../lib/links'

const links = [
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const location = useLocation()
  const closeDrawer = () => setDrawerOpen(false)
  useEffect(() => { setDrawerOpen(false) }, [location.pathname])

  const isActive = (path: string) =>
    location.pathname === path ||
    (path === '/work' && location.pathname.startsWith('/case/'))

  return (
    <>
      <nav role="navigation" aria-label="Main navigation">
        <div className="nav-inner">
          <Link className="nav-logo" to="/home" aria-label="Dikshya BC home">
            <span className="nav-mark" aria-hidden="true" />
            <span className="nav-name">Dikshya BC</span>
            <span className="nav-role">UI/UX Designer</span>
          </Link>

          <ul className="nav-links" role="list">
            {links.map(l => (
              <li key={l.to}>
                <Link to={l.to} className={isActive(l.to) ? 'active' : ''}>{l.label}</Link>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            {/* Primary CTA goes straight to a WhatsApp chat. */}
            <a
              className="nav-cta"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Let&rsquo;s talk
            </a>
            <button
              className="nav-hamburger"
              id="hamburger"
              aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={drawerOpen}
              aria-controls="navDrawer"
              onClick={() => setDrawerOpen(!drawerOpen)}
            >
              <span style={drawerOpen ? { transform: 'translateY(6.5px) rotate(45deg)' } : {}}></span>
              <span style={drawerOpen ? { opacity: 0 } : {}}></span>
              <span style={drawerOpen ? { transform: 'translateY(-6.5px) rotate(-45deg)' } : {}}></span>
            </button>
          </div>
        </div>
      </nav>

      <nav
        className={`nav-drawer${drawerOpen ? ' open' : ''}`}
        id="navDrawer"
        aria-label="Mobile navigation"
      >
        <Link to="/home" onClick={closeDrawer}>Home</Link>
        {links.map(l => (
          <Link to={l.to} key={l.to} onClick={closeDrawer}>{l.label}</Link>
        ))}
        <span className="drawer-label">Get in touch</span>
        <a
          href={GMAIL_COMPOSE_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeDrawer}
        >
          {EMAIL}
        </a>
      </nav>
    </>
  )
}
