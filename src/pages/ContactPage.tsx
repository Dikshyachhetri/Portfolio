import React from 'react'
import { showToast } from '../components/Toast'
import { EMAIL, GMAIL_COMPOSE_URL, LINKEDIN_URL, WHATSAPP_URL } from '../lib/links'
import './ContactPage.css'

export default function ContactPage() {
  return (
    <main id="main" className="contact-page">
      <div className="contact-inner">
        <div className="contact-head">
          <p className="eyebrow contact-eyebrow">Contact</p>
          <h1 className="display contact-title">
            Let&rsquo;s work <em>together.</em>
          </h1>
          <p className="contact-lede">
            I&rsquo;m looking for full-time product design roles and open to select
            freelance projects. Tell me what you&rsquo;re building and I&rsquo;ll reply
            within two working days.
          </p>
        </div>

        <div className="contact-email-row">
          <a className="contact-email" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          <button className="contact-copy" type="button" onClick={showToast}>
            Copy email
          </button>
        </div>

        <dl className="contact-meta">
          <div>
            <dt>Open to</dt>
            <dd>Full-time · Freelance · Remote</dd>
          </div>
          <div>
            <dt>Response time</dt>
            <dd>Within two working days</dd>
          </div>
        </dl>

        <div className="contact-socials">
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            WhatsApp <span aria-hidden="true">↗</span>
          </a>
          <a href={GMAIL_COMPOSE_URL} target="_blank" rel="noopener noreferrer">
            Mail <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </main>
  )
}
