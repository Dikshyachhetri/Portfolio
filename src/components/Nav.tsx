import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

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
        <Link className="nav-logo" to="/home" aria-label="Dikshya — Home">
          <span className="nav-logo-dot" aria-hidden="true"></span>DIKSHYA
        </Link>
        <ul className="nav-links" role="list">
          <li><Link to="/home" className={isActive('/home') ? 'active' : ''}>Home</Link></li>
          <li><Link to="/work" className={isActive('/work') ? 'active' : ''}>Work</Link></li>
          <li><Link to="/about" className={isActive('/about') ? 'active' : ''}>About</Link></li>
        </ul>
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
      </nav>
      <nav
        className={`nav-drawer${drawerOpen ? ' open' : ''}`}
        id="navDrawer"
        aria-label="Mobile navigation"
      >
        <Link to="/home" onClick={closeDrawer}>Home</Link>
        <Link to="/work" onClick={closeDrawer}>Work</Link>
        <Link to="/about" onClick={closeDrawer}>About</Link>
        <Link to="/home" onClick={(e) => { e.preventDefault(); closeDrawer(); openGmail() }}>Hire Me →</Link>
      </nav>
    </>
  )
}
