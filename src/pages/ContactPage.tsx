import React from 'react'
import './ContactPage.css'

export default function ContactPage() {
  return (
    <main id="main">
      <div className="contact-page">
        <div className="contact-content">
          <h1 className="contact-heading">Let’s connect</h1>
          <p className="contact-intro">
            I'm currently open to full-time, contract, and freelance opportunities.
            Based in Kathmandu, working globally.
          </p>
          <div className="contact-info">
            <span className="contact-name">Dikshya BC</span>
            <a href="mailto:dikshyabc01@gmail.com" className="contact-email">
              dikshyabc01@gmail.com
            </a>
          </div>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/dikshya-chhetri/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://dribbble.com/Dikshya_B" target="_blank" rel="noopener noreferrer">Dribbble</a>
            <a href="https://wa.me/9779868168977" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
        <div className="contact-footer">
          <p>&copy; {new Date().getFullYear()} Dikshya BC</p>
        </div>
      </div>
    </main>
  )
}
