import type { ReactNode } from 'react'

/**
 * Cute little hobby illustrations for the About page.
 * Olive line art on a 56×56 canvas — stroke/fill palette matches the
 * cream + olive "Beyond the screen" section.
 */
function Frame({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 56 56"
      width="100%"
      height="100%"
      fill="none"
      stroke="#4a5c14"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  )
}

/* 1 — Trekking & hiking: sunny mountain with a little flag */
export function HikingIcon() {
  return (
    <Frame>
      <path d="M8 44.5h40" opacity={0.4} />
      <circle cx="42.5" cy="14.5" r="5.3" fill="#f3df9d" />
      <g opacity={0.6} strokeWidth={1.8}>
        <path d="M42.5 5.2v3M42.5 20.8v3M33.2 14.5h3M48.8 14.5h3" />
        <path d="M36 8l2.1 2.1M49 21l2.1 2.1M49 8l-2.1 2.1M36 21l-2.1 2.1" />
      </g>
      <path d="M8 44.5 22 17.5l12 18.5 5.5-7.5L48 44.5Z" fill="#fdfcf7" />
      <path
        d="M18.2 26 22 17.5l3.8 8.5Q23.9 24.5 22 25.3 20.1 26.1 18.2 26Z"
        fill="#eef0e2"
        strokeWidth={1.9}
      />
      <path d="M39.5 28.5v-6" strokeWidth={1.9} />
      <path d="M39.5 22.5l5 1.7-5 1.8Z" fill="#b44e14" strokeWidth={1.7} />
    </Frame>
  )
}

/* 2 — Gym & yoga: heart-lifted dumbbell */
export function GymYogaIcon() {
  return (
    <Frame>
      <path
        d="M28 22.6c-2.5-1.9-4.1-3.4-4.1-5.2a2.3 2.3 0 0 1 4.1-1.4 2.3 2.3 0 0 1 4.1 1.4c0 1.8-1.6 3.3-4.1 5.2Z"
        fill="#b44e14"
        strokeWidth={1.8}
      />
      <rect x="8.5" y="19.5" width="6.6" height="17.5" rx="3.3" fill="#d9dfc4" />
      <rect x="40.9" y="19.5" width="6.6" height="17.5" rx="3.3" fill="#d9dfc4" />
      <rect x="15.6" y="22.5" width="4.6" height="11.5" rx="2.3" fill="#fdfcf7" />
      <rect x="35.8" y="22.5" width="4.6" height="11.5" rx="2.3" fill="#fdfcf7" />
      <path d="M17 28.2h22" />
    </Frame>
  )
}

/* 3 — Animals: happy cat with a floating heart */
export function AnimalsIcon() {
  return (
    <Frame>
      <path d="M16 26 14 14l12 5.5Z" fill="#fdfcf7" />
      <path d="M40 26 42 14l-12 5.5Z" fill="#fdfcf7" />
      <path d="M17.6 23.2 16.4 16.6l5.9 3.2Z" fill="#e8b7a4" stroke="none" />
      <path d="M38.4 23.2l1.2-6.6-5.9 3.2Z" fill="#e8b7a4" stroke="none" />
      <circle cx="28" cy="33.5" r="14" fill="#fdfcf7" />
      <path d="M20.5 33q3-4.4 6 0M29.5 33q3-4.4 6 0" strokeWidth={2} />
      <path d="M26.6 35.2h2.8L28 37.3Z" fill="#b44e14" stroke="none" />
      <path d="M28 37.3v1.3M28 38.6q-1.9 1.7-3.3.3M28 38.6q1.9 1.7 3.3.3" strokeWidth={1.8} />
      <path
        d="M12.2 30.4 17 31.4M12.6 35.2 17 34.3M43.8 30.4 39 31.4M43.4 35.2 39 34.3"
        strokeWidth={1.7}
        opacity={0.75}
      />
      <path
        d="M45.5 23.4c-2.7-2.1-4.4-3.7-4.4-5.7a2.45 2.45 0 0 1 4.4-1.5 2.45 2.45 0 0 1 4.4 1.5c0 2-1.7 3.6-4.4 5.7Z"
        fill="#b44e14"
        strokeWidth={1.8}
      />
    </Frame>
  )
}

/* 4 — Outdoor games: kite with a bowed tail (Dashain style) */
export function OutdoorGamesIcon() {
  const kite = 'M28 7.5 45 27 28 46.5 11 27Z'
  return (
    <Frame>
      <path d="M28 46.5q-2.8 3.6 0 7.5" strokeWidth={1.8} opacity={0.85} />
      <path d="M27.4 48.6l-4-1.4.7 4Z" fill="#b44e14" stroke="none" />
      <path d="M28.6 51.8l4-1.4-.7 4Z" fill="#b44e14" stroke="none" />
      <path d={kite} fill="#fdfcf7" />
      <path d="M28 7.5 45 27H11Z" fill="#eef0e2" stroke="none" />
      <path d={kite} />
      <path d="M28 7.5v39M11 27h34" strokeWidth={1.8} opacity={0.7} />
      <path
        d="M9.5 10l1.4 3.4 3.4 1.4-3.4 1.4L9.5 19.5l-1.4-3.3-3.4-1.4 3.4-1.4Z"
        fill="#e5c65c"
        strokeWidth={1.6}
      />
    </Frame>
  )
}

/* 5 — Certified foodie: smiling ramen bowl with chopsticks */
export function FoodieIcon() {
  return (
    <Frame>
      <path d="M19.5 22.5q-3-2.7 0-5.4 3-2.7 0-5.4-3-2.7 0-5.4" strokeWidth={2} opacity={0.55} />
      <path d="M28.5 21.5q-2.6-2.3 0-4.6 2.6-2.3 0-4.6-2.6-2.3 0-4.6" strokeWidth={2} opacity={0.4} />
      <path d="M37.5 10 28.8 26.8M43.5 11.5 34.8 27.9" strokeWidth={2.1} />
      <path d="M10.5 26h33a16.5 16.5 0 0 1-33 0Z" fill="#fdfcf7" />
      <circle cx="21.5" cy="31.5" r="1.05" fill="#4a5c14" stroke="none" />
      <circle cx="32.5" cy="31.5" r="1.05" fill="#4a5c14" stroke="none" />
      <path d="M22.8 34.3q4.2 3 8.4 0" strokeWidth={1.9} />
    </Frame>
  )
}

/* 6 — Boardgames, movies & TV: striped popcorn box */
export function ScreenTimeIcon() {
  const box = 'M13.5 26.5h29l-2.6 19q-.2 1.8-2 1.8H18.1q-1.8 0-2-1.8Z'
  return (
    <Frame>
      <defs>
        <clipPath id="hobby-popcorn">
          <path d={box} />
        </clipPath>
      </defs>
      <circle cx="17.5" cy="24" r="5.6" fill="#fdfcf7" />
      <circle cx="25" cy="20" r="6.6" fill="#fdfcf7" />
      <circle cx="33" cy="21" r="6.2" fill="#fdfcf7" />
      <circle cx="40" cy="25" r="5.4" fill="#fdfcf7" />
      {/* cover the kernel bottoms, then lay classic theatre stripes over the box */}
      <path d={box} fill="#e9edd8" />
      <g clipPath="url(#hobby-popcorn)">
        <rect x="13.5" y="26.5" width="7.5" height="22" fill="#b44e14" />
        <rect x="28" y="26.5" width="7" height="22" fill="#b44e14" />
      </g>
      <path d={box} />
    </Frame>
  )
}
