import React from 'react'
import { showToast } from '../components/Toast'
import './ContactPage.css'

const GMAIL = 'https://mail.google.com/mail/?view=cm&fs=1&to=dikshyabc01@gmail.com'

export default function ContactPage() {
  return (
    <main id="main" className="contact-page">
      <div className="contact-inner">
        <h1 className="contact-title">Let&rsquo;s Connect</h1>
        <p className="contact-sub">
          Open to full-time, contract, and freelance opportunities. Based in Kathmandu, working globally.
        </p>

        <div className="contact-identity">
          <span className="contact-name">Dikshya BC</span>
          <a className="contact-email" href="mailto:dikshyabc01@gmail.com" onClick={showToast}>
            dikshyabc01@gmail.com
          </a>
        </div>

        <div className="contact-socials">
          <a href={GMAIL} target="_blank" rel="noopener noreferrer">Email</a>
          <a href="https://www.linkedin.com/in/dikshya-chhetri/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://dribbble.com/Dikshya_B" target="_blank" rel="noopener noreferrer">Dribbble</a>
          <a href="https://wa.me/9779868168977" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </div>
    </main>
  )
}
