import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/home', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
]

function openGmail() {
  window.open('https://mail.google.com/mail/?view=cm&fs=1&to=dikshyabc01@gmail.com', '_blank')
}

export default function Nav() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const location = useLocation()

  const closeDrawer = () => setDrawerOpen(false)

  useEffect(() => { setDrawerOpen(false) }, [location.pathname])

  const isActive = (path: string) => location.pathname === path

  return (
    <>
      <nav role="navigation" aria-label="Main navigation">
        {/* Logo (leftmost) */}
        <Link className="nav-logo" to="/home" aria-label="Dikshya Home">
          <span className="nav-logo-dot" aria-hidden="true"></span>DIKSHYA
        </Link>

        {/* Nav links (center) */}
        <ul className="nav-links" role="list">
          {NAV_LINKS.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={isActive(link.to) ? 'active' : ''}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hire Me button & hamburger (rightmost) */}
        <div className="nav-right">
          <button className="nav-cta" onClick={openGmail}>Hire Me</button>
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
      </nav>
      <nav
        className={`nav-drawer${drawerOpen ? ' open' : ''}`}
        id="navDrawer"
        aria-label="Mobile navigation"
      >
        {NAV_LINKS.map(link => (
          <Link key={link.to} to={link.to} onClick={closeDrawer}>{link.label}</Link>
        ))}
        <Link
          to="/home"
          onClick={(e) => { e.preventDefault(); closeDrawer(); openGmail() }}
        >
          Hire Me →
        </Link>
      </nav>
    </>
  )
}
