import { useEffect } from 'react'

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    const ring = document.getElementById('cursor-ring')
    if (!cursor || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0
    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      cursor!.style.left = mx + 'px'
      cursor!.style.top = my + 'px'
    }
    const anim = () => {
      rx += (mx - rx) * 0.11
      ry += (my - ry) * 0.11
      ring!.style.left = rx + 'px'
      ring!.style.top = ry + 'px'
      requestAnimationFrame(anim)
    }
    document.addEventListener('mousemove', onMove)
    requestAnimationFrame(anim)
    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return null
}
