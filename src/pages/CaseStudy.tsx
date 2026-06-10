import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const BASE = import.meta.env.BASE_URL || '/'

export default function CaseStudy({ htmlFile }: { htmlFile: string }) {
  const location = useLocation()
  const src = BASE + htmlFile + '?embed=1'

  // Disable custom cursor on case study pages — iframe blocks mousemove events
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
      }}
    />
  )
}
