import React from 'react'

export function showToast(e: React.MouseEvent) {
  e.preventDefault()
  // Open Gmail compose with pre-filled email
  window.open('https://mail.google.com/mail/?view=cm&fs=1&to=dikshyabc01@gmail.com', '_blank')
}

export default function Toast() {
  return null // The toast element is in index.html
}
