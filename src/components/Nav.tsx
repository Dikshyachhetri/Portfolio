import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function openGmail() {
  window.open('https://mail.google.com/mail/?view=cm&fs=1&to=dikshyabc01@gmail.com', '_blank')
}

const links = [
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
        <Link className="nav-logo" to="/home" aria-label="Dikshya — Home">
          Dikshya
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
        <Link to="/home" onClick={(e) => { e.preventDefault(); closeDrawer(); openGmail() }}>Email me →</Link>
      </nav>
    </>
  )
}
