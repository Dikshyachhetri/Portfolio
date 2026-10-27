import { useLocation } from 'react-router-dom'
import { EMAIL, GMAIL_COMPOSE_URL, INSTAGRAM_URL, LINKEDIN_URL, WHATSAPP_URL, YOUTUBE_URL } from '../lib/links'

function BandFooter() {
  return (
    <footer role="contentinfo" className="footer-band">
      <div className="fb-inner">
        <div className="fb-top">
          <span className="fb-status">
            <span className="status-dot" aria-hidden="true" />
            Open to work
          </span>
        </div>

        <div className="fb-main">
          <a className="fb-cta" href={GMAIL_COMPOSE_URL} target="_blank" rel="noopener noreferrer">
            Let&rsquo;s work<br /><em>together.</em>
          </a>

          <div className="fb-side">
            <p className="fb-sub">
              I&rsquo;m looking for full-time product design roles and open to
              select freelance projects. If you&rsquo;re building something complex,
              I&rsquo;d love to hear about it.
            </p>
            <a className="fb-email" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
            <div className="fb-socials">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer">YouTube</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a href={GMAIL_COMPOSE_URL} target="_blank" rel="noopener noreferrer">Mail</a>
            </div>
          </div>
        </div>

        <div className="fb-meta">
          <span>&copy; {new Date().getFullYear()} Dikshya BC</span>
          <span>UI/UX Designer</span>
        </div>
      </div>
    </footer>
  )
}

export default function Footer() {
  const { pathname } = useLocation()

  // Contact page is its own full-screen composition.
  if (pathname === '/contact') return null

  return <BandFooter />
}
