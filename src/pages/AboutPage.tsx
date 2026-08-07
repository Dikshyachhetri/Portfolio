import React from 'react'
import { useEffect } from 'react'
import { showToast } from '../components/Toast'
import './AboutPage.css'

const BASE = import.meta.env.BASE_URL || '/'

export default function AboutPage() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const story = [
    'I grew up drawn to color, paper, and the feeling of bringing something out of my own head and into the world. I spent hours experimenting with colors and sketches, the usual childhood thing, except it never really left me.',
    'Then I did the predictable \u201cgood student\u201d move and chose Computer Science and IT. Somewhere underneath the logic and syntax, I still craved something more creative. I just didn\u2019t have a name for it yet.',
    'During COVID, I picked painting and sketching back up. I started sharing the work online. It reminded me how much I love making things from scratch, not just following a spec, but actually building something that didn\u2019t exist before.',
    'For a while, I was doing both at once: frontend developer internship, and exploring design. In my final year, that showed up formally too, I built frontend solutions for agriculture and e-commerce as my major project, and through internships that sharpened the technical instincts I still lean on today.',
    'Somewhere in that overlap, I stopped thinking of it as switching careers and started thinking of it as getting serious about the thing I was already doing. So I gave it more time, more focus, and eventually landed my first role as a UI/UX designer.',
    'Since then, I\u2019ve worked across different worlds, healthcare, fintech, AI, maritime, cybersecurity, ERP, always chasing the same underlying question: how do complex systems, accessibility, and real human need fit together without losing any of the craft.',
    'I\u2019m still the same person who loves figuring things out and making things look and feel better. Just with more purpose now, a few more scars from real-world constraints, and slightly better tools.',
  ]

  const experience = [
    { role: 'Senior UI/UX Designer', company: 'Stealth Startup', period: '2025\u2013Present' },
    { role: 'UI/UX Designer', company: 'Life Management Science Labs', period: '2024\u20132025' },
    { role: 'UI/UX Designer', company: 'Freelancing', period: '2024\u20132025' },
    { role: 'UI/UX Designer', company: 'Rara Digital Lab Pvt. Ltd.', period: '2022\u20132024' },
    { role: 'Designer & Marketing Analyst', company: 'Smart Acre Media Solutions', period: '2021\u20132022' },
    { role: 'Frontend Developer (Internship)', company: 'Featherwebs', period: '2021' },
  ]

  const hobbies = [
    'Trekking and hiking whenever I can get out',
    'Gym and yoga',
    'A genuine soft spot for animals <3',
    'Outdoor games, anything with a bit of competition',
    'Certified foodie',
    'Boardgames, good movies, and TV shows',
  ]

  return (
    <main id="main" className="about-page">
      {/* ========== STORY ========== */}
      <section className="story-section" aria-labelledby="story-title">
        <h1 className="about-title reveal" id="story-title">How I got here</h1>
        <div className="story-grid">
          <figure className="story-photo reveal">
            <div className="photo-wrap">
              <img src={BASE + 'profile-photo.png'} alt="Dikshya BC, Product Designer" loading="lazy" />
            </div>
            <figcaption>
              <span className="cap-name">Dikshya BC</span>
              <span className="cap-role">PRODUCT DESIGNER</span>
              <span className="cap-loc">KATHMANDU NEPAL</span>
            </figcaption>
          </figure>
          <div className="story-text">
            {story.map((p, i) => (
              <p className="reveal" key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ========== EXPERIENCE ========== */}
      <section className="exp-section" aria-labelledby="exp-title">
        <div className="section-inner">
          <h2 className="section-heading reveal" id="exp-title">Where I&rsquo;ve been</h2>
          <div className="exp-list">
            {experience.map(e => (
              <div className="exp-row reveal" key={e.company}>
                <div className="exp-info">
                  <span className="exp-role">{e.role}</span>
                  <span className="exp-company">{e.company}</span>
                </div>
                <span className="exp-period">{e.period}</span>
              </div>
            ))}
          </div>
          <div className="exp-actions reveal">
            <a
              className="btn-resume"
              href={BASE + 'resume.pdf'}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>

      {/* ========== BEYOND THE SCREEN ========== */}
      <section className="hobbies-section" aria-labelledby="hobbies-title">
        <div className="section-inner">
          <h2 className="section-heading reveal" id="hobbies-title">Beyond the screen</h2>
          <ul className="hobby-list">
            {hobbies.map(h => (
              <li className="reveal" key={h}>{h}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ========== STILL HERE ========== */}
      <div className="still-here">
        <a className="still-here-link" href="mailto:dikshyabc01@gmail.com" onClick={showToast}>
          still here?
        </a>
      </div>
    </main>
  )
}
