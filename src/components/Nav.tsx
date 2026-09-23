import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function openGmail() {
  window.open('https://mail.google.com/mail/?view=cm&fs=1&to=dikshyabc01@gmail.com', '_blank')
}

const links = [
  { to: '/home', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/work', label: 'Work' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const location = useLocation()
  const closeDrawer = () => setDrawerOpen(false)
  useEffect(() => { setDrawerOpen(false) }, [location.pathname])

  const isActive = (path: string) => location.pathname === path

  return (
    <>
      <nav role="navigation" aria-label="Main navigation">
        <div className="nav-inner">
          <Link className="nav-logo" to="/home" aria-label="Dikshya — Home">
            Dikshya
            {/* Logo accent — happy sun rising over Kathmandu hills */}
            <svg className="logo-mark" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M2.8 20.2 C5.2 16.8 8 16.8 10.4 20.2 M9.8 20.2 C12.6 15.6 16.4 15.6 19.4 20.2"
                stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
              />
              <circle cx="16.7" cy="8.6" r="3.9" fill="var(--logo-sun)" />
              <circle cx="15.5" cy="8.2" r="0.62" fill="var(--logo-sun-cutout)" />
              <circle cx="17.9" cy="8.2" r="0.62" fill="var(--logo-sun-cutout)" />
              <path
                d="M15.7 10 a1.5 1.5 0 0 0 2 0"
                stroke="var(--logo-sun-cutout)" strokeWidth="0.75" strokeLinecap="round"
              />
            </svg>
          </Link>
          <ul className="nav-links" role="list">
            {links.map(l => (
              <li key={l.to}>
                <Link to={l.to} className={isActive(l.to) ? 'active' : ''}>{l.label}</Link>
              </li>
            ))}
          </ul>
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
        {links.map(l => (
          <Link to={l.to} key={l.to} onClick={closeDrawer}>{l.label}</Link>
        ))}
        <Link to="/home" onClick={(e) => { e.preventDefault(); closeDrawer(); openGmail() }}>Email me →</Link>
      </nav>
    </>
  )
}
