import React from 'react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const BASE = import.meta.env.BASE_URL || '/'

const backBtnStyle: React.CSSProperties = {
  position: 'fixed',
  top: '72px',
  left: '24px',
  zIndex: 100,
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '8px 16px',
  background: 'rgba(30, 38, 5, 0.72)',
  backdropFilter: 'blur(12px)',
  border: '1px solid rgba(246, 244, 234, 0.28)',
  borderRadius: '999px',
  color: '#f4f2ea',
  fontSize: '12px',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  textDecoration: 'none',
  cursor: 'pointer',
  fontFamily: 'DM Sans, sans-serif',
  boxShadow: '0 6px 18px -8px rgba(20, 26, 4, 0.55)',
  transition: 'background .18s, color .18s, border-color .18s',
}

export default function CaseStudy({ htmlFile }: { htmlFile: string }) {
  const location = useLocation()
  const navigate = useNavigate()
  const src = BASE + htmlFile + '?embed=1'

  // Disable custom cursor on case study pages  iframe blocks mousemove events
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    const ring = document.getElementById('cursor-ring')
    if (cursor) cursor.style.display = 'none'
    if (ring) ring.style.display = 'none'
    document.body.style.cursor = 'auto'
    return () => {
      if (cursor) cursor.style.display = ''
      if (ring) ring.style.display = ''
      document.body.style.cursor = ''
    }
  }, [])

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        style={backBtnStyle}
        onMouseEnter={e => { e.currentTarget.style.color = '#2c2c2c'; e.currentTarget.style.background = 'rgba(246,244,234,.96)' }}
        onMouseLeave={e => { e.currentTarget.style.color = '#f4f2ea'; e.currentTarget.style.background = 'rgba(30,38,5,.72)' }}
        aria-label="Go back"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Back
      </button>
      <iframe
        src={src}
        title="Case Study"
        style={{
          width: '100%',
          height: '100vh',
          border: 'none',
          display: 'block',
          position: 'fixed',
          top: '60px',
          left: 0,
          zIndex: 1,
          background: 'var(--bg)',
          boxShadow: 'inset 0 1px 0 rgba(65,86,0,.06)'
        }}
      />
    </>
  )
}
