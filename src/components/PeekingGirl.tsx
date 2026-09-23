import React from 'react'

/**
 * Decorative line-art: a girl peeking over a ledge, fingertips gripping
 * the edge. All strokes use currentColor, so the parent sets the ink.
 */
export default function PeekingGirl() {
  // fingertips curling over the ledge — 4 per hand, mirrored around x=210
  const fingers = [88, 104, 120, 136, 272, 288, 304, 320]

  return (
    <svg
      className="peek-girl"
      viewBox="0 0 420 149"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* ledge */}
        <path d="M8 148 H412" />

        {/* hair silhouette */}
        <path d="M148 148 C138 92 154 30 210 28 C266 30 282 92 272 148" />
        {/* inner hair strands */}
        <path d="M157 98 C153 118 154 136 157 148" />
        <path d="M263 98 C267 118 266 136 263 148" />

        {/* face */}
        <path d="M168 148 C160 105 172 62 210 60 C248 62 260 105 252 148" />
        {/* middle-parted fringe */}
        <path d="M210 60 C200 72 188 78 176 80" />
        <path d="M210 60 C220 72 232 78 244 80" />

        {/* brows */}
        <path d="M184 87 Q192 82 200 87" />
        <path d="M220 87 Q228 82 236 87" />

        {/* closed happy eyes — upward arcs with a lash tick at each outer corner */}
        <path d="M185 106 Q193 89 201 106" />
        <path d="M219 106 Q227 89 235 106" />
        <path d="M185 106 l-4 3" />
        <path d="M235 106 l4 3" />

        {/* nose */}
        <path d="M208 110 C211 114 211 117 208 119" />
        {/* smile */}
        <path d="M201 127 Q210 134 219 127" />
        {/* blush */}
        <path d="M178 119 H188" />
        <path d="M232 119 H242" />

        {/* fingertips gripping the ledge */}
        {fingers.map(x => (
          <path key={x} d={`M${x} 148 a6 6 0 0 1 12 0`} />
        ))}
      </g>
    </svg>
  )
}
