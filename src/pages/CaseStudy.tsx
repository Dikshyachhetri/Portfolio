import React from 'react'

const BASE = import.meta.env.BASE_URL || '/'

export default function CaseStudy({ htmlFile }: { htmlFile: string }) {
  const src = BASE + htmlFile + '?embed=1'

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
