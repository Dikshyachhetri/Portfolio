import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './AboutPage.css'

const BASE = import.meta.env.BASE_URL || '/'

const story = [
  'I grew up drawn to color, paper, and the feeling of bringing something out of my own head and into the world. I spent hours experimenting with colors and sketches, the usual childhood thing, except it never really left me.',
  'Then I did the predictable “good student” move and chose Computer Science and IT. Somewhere underneath the logic and syntax, I still craved something more creative. I just didn’t have a name for it yet.',
  'During COVID, I picked painting and sketching back up. I started sharing the work online. It reminded me how much I love making things from scratch, not just following a spec, but actually building something that didn’t exist before.',
  <>
    For a while, I was doing both at once:{' '}
    <strong className="em">frontend developer internship, and exploring design.</strong>{' '}
    In my final year, that showed up formally too: I built frontend solutions for agriculture and e-commerce as my major project, and through internships that sharpened the technical instincts I still lean on today.
  </>,
  <>
    Somewhere in that overlap, I stopped thinking of it as switching careers and started thinking of it as getting serious about the thing I was already doing. So I gave it more time, more focus, and{' '}
    <strong className="em">eventually landed my first role as a UI/UX designer.</strong>
  </>,
  <>
    Since then, I&rsquo;ve worked across different worlds, including{' '}
    <strong className="em">healthcare, fintech, AI, maritime, cybersecurity, and ERP</strong>. I&rsquo;m always chasing the same underlying question: how do complex systems, accessibility, and real human need fit together without losing any of the craft.
  </>,
  'I’m still the same person who loves figuring things out and making things look and feel better. Just with more purpose now, a few more scars from real-world constraints, and slightly better tools.',
]

const experience = [
  { role: 'Senior UI/UX Designer', company: 'Invicta Pte Ltd', period: 'Sep 2025 - Present' },
  { role: 'UI/UX Designer', company: 'Life Management Science Labs', period: 'Mar 2024 - Sep 2025' },
  { role: 'Freelance UI/UX Designer', company: 'Skyleap, Inductiv and Incube Tech', period: 'Dec 2023 - Feb 2024' },
  { role: 'UI/UX Designer', company: 'Rara Digital Lab Pvt. Ltd.', period: 'May 2022 - Dec 2023' },
  { role: 'Designer & Marketing Analyst', company: 'Smart Acre Media Solutions', period: 'Sep 2021 - Apr 2022' },
  { role: 'Frontend Developer (Internship)', company: 'Featherwebs', period: 'Apr 2021 - Sep 2021' },
]

export default function AboutPage() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <main id="main" className="about-page lined-surface">
      {/* ========== HERO ========== */}
      <header className="about-hero">
        <figure className="about-portrait reveal">
          <div className="about-portrait-frame">
            <img
              src={BASE + 'profile-photo.png'}
              alt="Dikshya BC, UI/UX designer"
              draggable="false"
            />
          </div>
          <figcaption>Dikshya BC</figcaption>
        </figure>

        <div className="about-intro reveal">
          <p className="eyebrow">About</p>
          <h1 className="display about-title">Dikshya <em>BC</em>.</h1>
          <p className="about-lede">
            I&rsquo;m a UI/UX designer with 5+ years of experience turning complex,
            high-stakes workflows into products people can use with confidence.
            Currently Senior UI/UX Designer at Invicta, working across healthcare,
            fintech, ERP, aviation, and edtech.
          </p>

          <div className="about-actions">
            <Link className="btn btn-primary" to="/contact">Get in touch</Link>
            <a
              className="btn btn-outline"
              href={BASE + 'resume.pdf'}
              target="_blank"
              rel="noopener noreferrer"
            >
              Résumé
            </a>
          </div>

          <dl className="about-facts">
            <div><dt>Experience</dt><dd>5+ years</dd></div>
            <div><dt>Focus</dt><dd>Complex products &amp; systems</dd></div>
          </dl>
        </div>
      </header>

      {/* ========== STORY ========== */}
      <section className="about-section" aria-labelledby="story-title">
        <div className="about-section-head">
          <p className="eyebrow">Background</p>
          <h2 id="story-title" className="display">How I got here.</h2>
        </div>

        <div className="story-column">
          {story.slice(0, 3).map((p, i) => (
            <p className="reveal" key={i}>{p}</p>
          ))}

          <details className="story-more">
            <summary>Read the rest</summary>
            {story.slice(3).map((p, i) => (
              <p key={i + 3}>{p}</p>
            ))}
          </details>
        </div>
      </section>

      {/* ========== EXPERIENCE ========== */}
      <section className="about-section" aria-labelledby="exp-title">
        <div className="about-section-head">
          <p className="eyebrow">Experience</p>
          <h2 id="exp-title" className="display">Where I&rsquo;ve worked.</h2>
        </div>

        <div className="exp-list">
          {experience.map(e => (
            <div className="exp-row reveal" key={e.company}>
              <span className="exp-period">{e.period}</span>
              <div className="exp-info">
                <span className="exp-role">{e.role}</span>
                <span className="exp-company">{e.company}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========== BEYOND ========== */}
      <section className="about-section about-beyond" aria-labelledby="beyond-title">
        <div className="about-section-head">
          <p className="eyebrow">Beyond the screen</p>
          <h2 id="beyond-title" className="display">Away from the canvas.</h2>
        </div>

        <div className="beyond-content">
          <p className="beyond-copy reveal">
            Outside of work you&rsquo;ll find me trekking, at the gym or in a yoga
            class, chasing good food, and losing board games to
            anyone who&rsquo;ll play. I also paint and sketch, the habit that led me
            to design in the first place.
          </p>
          <ul className="beyond-list reveal">
            <li>Trekking &amp; hiking</li>
            <li>Yoga &amp; gym</li>
            <li>Food &amp; board games</li>
            <li>Painting &amp; illustration</li>
          </ul>

          <div className="about-cta reveal">
            <p>Want the full story, or just a chat about a project?</p>
            <Link className="text-link" to="/contact">
              Get in touch <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
