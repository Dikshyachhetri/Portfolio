import React from 'react'

export function showToast(e: React.MouseEvent) {
  e.preventDefault()
  // Open Gmail compose with pre-filled email
  const gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=dikshyabc01@gmail.com'
  const win = window.open(gmailUrl, '_blank')
  // Fallback: if popup blocked, open mailto
  if (!win || win.closed || typeof win.closed === 'undefined') {
    window.location.href = 'mailto:dikshyabc01@gmail.com'
  }
}

export default function Toast() {
  return null // The toast element is in index.html
}
