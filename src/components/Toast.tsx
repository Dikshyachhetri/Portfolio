import React from 'react'

export function showToast(e: React.MouseEvent) {
  e.preventDefault()
  // Copy email to clipboard
  navigator.clipboard.writeText('dikshyabc01@gmail.com').catch(() => {})
  // Show toast notification (the toast element is in index.html)
  const toast = document.getElementById('toast')
  if (toast) {
    toast.classList.add('show')
    setTimeout(() => toast.classList.remove('show'), 3000)
  }
}

export default function Toast() {
  return null // The toast element lives in index.html
}
