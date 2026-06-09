export function showToast(e: React.MouseEvent) {
  e.preventDefault()
  navigator.clipboard.writeText('dikshya@email.com').catch(() => {})
  const t = document.getElementById('toast')
  if (t) {
    t.classList.add('show')
    setTimeout(() => t.classList.remove('show'), 3000)
  }
}

export default function Toast() {
  return null // The toast element is in index.html
}
