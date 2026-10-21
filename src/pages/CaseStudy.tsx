import React from 'react'

const BASE = import.meta.env.BASE_URL || '/'

export default function CaseStudy({ htmlFile }: { htmlFile: string }) {
  const src = BASE + htmlFile + '?embed=1'

  return (
    <iframe
      src={src}
      title="Case study"
      style={{
        width: '100%',
        height: 'calc(100vh - var(--nav-h))',
        border: 'none',
        display: 'block',
        position: 'fixed',
        top: 'var(--nav-h)',
        left: 0,
        zIndex: 1,
        background: 'var(--bg)',
      }}
    />
  )
}
