import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { showToast } from '../components/Toast'
import './AboutPage.css'

export default function AboutPage() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') }),
      { threshold: 0.07 }
    )
    document.querySelectorAll('.exp-item, .skill-group, .edu-item, .about-quote').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <main id="main">
      {/* HEADER */}
      <header className="about-header">
        <div className="about-header-inner">
          <div className="about-left">
            <div className="breadcrumb">
              <Link to="/home">Home</Link><span>&rarr;</span><span>About</span>
            </div>
            <h1>HELLO, I'M<br/>DIKSHYA</h1>
            <p className="about-sub">
              I'm a UI/UX designer based in the vibrant city of Kathmandu, Nepal. 
              Since 2021, I've enjoyed turning complex problems into simple, beautiful,
              and intuitive designs. Let's create experiences that leave a lasting impression
              and make technology a more inclusive and equitable space for everyone.
            </p>
            <div className="about-actions">
              <button className="btn-primary" onClick={showToast}>Hire Me</button>
              <Link to="/work" className="btn-ghost">
                See my work
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
          <div className="about-right">
            <div className="photo-frame" style={{
              fontSize:0,
              background:'linear-gradient(135deg, var(--bg3), var(--bg2))',
              border:'1px solid var(--border)'
            }}>
              <div className="photo-placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{color:'var(--gray2)'}}>
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <span>Add photo</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* QUOTE */}
      <section className="about-quote" aria-label="Personal quote">
        <blockquote>
          &ldquo;I believe great design is invisible &mdash; it removes friction,
          respects the user&rsquo;s time, and makes complex systems feel simple.&rdquo;
        </blockquote>
      </section>

      {/* EXPERIENCE */}
      <section className="about-section" aria-labelledby="exp-title">
        <div className="section-inner">
          <span className="section-kicker">Career</span>
          <h2 className="section-title" id="exp-title">EXPERIENCE</h2>
          <div className="exp-list" role="list" aria-label="Work experience">
            {[
              { role:'Senior UI/UX Designer', company:'Invicta PTE LTD', period:'2025–Present', desc:'Maritime voyage intelligence platform. NDA — no public screenshots.', link:null, url:'https://invicta.global/' },
              { role:'UI/UX Designer', company:'Freelancing', period:'2024–2025', desc:'Multiple clients &mdash; AI fintech (AI-driven financial assistant), Zero Trust security (enterprise cybersecurity), and Loksewa Pro app (10,000+ downloads, 4.4★ on Play Store). No public screenshots.', link:null, url:null },
              { role:'UI/UX Designer', company:'Life Management Science Labs', period:'2024–2025', desc:'Wellness app and EdTech platform. No dedicated case study built.', link:null, url:'https://lifemanagementsciencelabs.com/' },
              { role:'UI/UX Designer', company:'Rara Digital Lab Pvt. Ltd.', period:'2022–2024', desc:'RaraSpace EMS + Intellix Healthcare KPI &mdash; both have full case studies.', link:'/work/raraspace', url:'https://raralabs.com/' },
              { role:'Designer & Marketing Analyst', company:'Smart Acre Media Solutions', period:'2021–2022', desc:'Email design and marketing analytics.', link:null, url:'https://smartacremediasolutions.com/' },
              { role:'Frontend Developer (Internship)', company:'Featherwebs', period:'2021', desc:'HRIS platform internship.', link:null, url:'https://featherwebs.com/' },
            ].map((exp, i) => (
              <article className={`exp-item${exp.link ? ' has-case' : ''}`} role="listitem" key={i}>
                <div className="exp-left">
                  <span className="exp-period">{exp.period}</span>
                </div>
                <div className="exp-right">
                  <h3 className="exp-role">{exp.role}</h3>
                  {exp.url ? (
                    <p className="exp-company">
                      <a href={exp.url} target="_blank" rel="noopener noreferrer" className="exp-company-link">
                        {exp.company} 
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{display:'inline',verticalAlign:'middle',marginLeft:2}}>
                          <path d="M7 17L17 7M7 7h10v10"/>
                        </svg>
                      </a>
                    </p>
                  ) : (
                    <p className="exp-company">{exp.company}</p>
                  )}
                  <p className="exp-desc" dangerouslySetInnerHTML={{__html: exp.desc}}></p>
                  {exp.link && (
                    <Link to={exp.link} className="exp-link">View Case Study &rarr;</Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="about-section about-section-alt" aria-labelledby="skills-title">
        <div className="section-inner">
          <span className="section-kicker">Expertise</span>
          <h2 className="section-title" id="skills-title">SKILLS</h2>
          <div className="skills-grid" role="list" aria-label="Skill categories">
            {[
              { group:'UX Design', skills:['User Research','Persona Creation','Journey Mapping','Information Architecture','Usability Testing','Accessibility Audits'] },
              { group:'UI Design', skills:['Visual Design','Design Systems','Component Libraries','Typography','Color Theory','Iconography'] },
              { group:'Tools', skills:['Figma','Sketch','Adobe XD','Framer','Principle','Maze'] },
              { group:'AI & Automation', skills:['Claude','ChatGPT','Lovable','Uizard','Figma AI','Stitch'] },
              { group:'Prototyping', skills:['Interactive Prototypes','Micro-Interactions','Motion Design','Responsive Design','Design Tokens','Handoff'] },
              { group:'Soft Skills', skills:['Stakeholder Mgmt','Design Critique','Cross-Functional','Mentoring','Presentations','User Advocacy'] },
            ].map((sg, i) => (
              <div className="skill-group" role="listitem" key={i}>
                <h3 className="skill-group-title">{sg.group}</h3>
                <div className="skill-items">
                  {sg.skills.map(s => <span className="skill-item" key={s}>{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="about-section" aria-labelledby="edu-title">
        <div className="section-inner">
          <span className="section-kicker">Background</span>
          <h2 className="section-title" id="edu-title">EDUCATION</h2>
          <div className="edu-list">
            <div className="edu-item">
              <span className="exp-period">2019 &ndash; 2023</span>
              <h3>Bachelor's in Computer Science</h3>
              <p className="edu-school">Tribhuvan University, Kathmandu</p>
              <p>Relevant coursework: Human-Computer Interaction, Design Thinking, Software Engineering, Database Management, AI Fundamentals</p>
            </div>
            <div className="edu-item">
              <span className="exp-period">2017 &ndash; 2019</span>
              <h3>Higher Secondary Education (Science)</h3>
              <p className="edu-school">National College, Kathmandu</p>
              <p>Major in Science with Computer Science focus</p>
            </div>
          </div>
        </div>
      </section>

      {/* ADDITIONAL & COURSES */}
      <section className="about-section about-section-alt" aria-labelledby="add-title">
        <div className="section-inner">
          <span className="section-kicker">Learning</span>
          <h2 className="section-title" id="add-title">ADDITIONAL &amp; COURSES</h2>
          <div className="edu-list">
            <div className="edu-item">
              <h3>Google UX Design Professional Certificate</h3>
              <p>Coursera &mdash; Completed 2023. Covered UX research, wireframing, prototyping, and usability testing across the full design lifecycle.</p>
            </div>
            <div className="edu-item">
              <h3>AI for Designers</h3>
              <p>Self-paced &mdash; Exploring AI tools integration in UX workflow, prompt engineering for design, and AI-assisted research methods.</p>
            </div>
            <div className="edu-item">
              <h3>Design Thinking &amp; Innovation</h3>
              <p>Workshop &mdash; Stanford d.school methodology applied to product design challenges.</p>
            </div>
          </div>
          <p className="about-extra" style={{marginTop:32}}>
            Available for full-time, contract, and freelance roles. Open to remote and
            hybrid arrangements. Based in Kathmandu, Nepal &mdash; working with clients globally.
          </p>
        </div>
      </section>
    </main>
  )
}
