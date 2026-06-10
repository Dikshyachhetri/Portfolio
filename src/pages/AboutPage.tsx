import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { showToast } from '../components/Toast'
import './AboutPage.css'

const BASE = import.meta.env.BASE_URL || '/'

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
            <div className="photo-orbit">
              {/* Connection arcs */}
              <svg className="orb-connections" viewBox="0 0 440 440" width="440" height="440" aria-hidden="true">
                <path d="M220 220 Q 80 80 220 40" stroke="rgba(232,82,26,.06)" stroke-width="1" fill="none" stroke-dasharray="3 5"/>
                <path d="M220 220 Q 370 60 370 220" stroke="rgba(232,82,26,.06)" stroke-width="1" fill="none" stroke-dasharray="3 5"/>
                <path d="M220 220 Q 330 370 220 390" stroke="rgba(232,82,26,.06)" stroke-width="1" fill="none" stroke-dasharray="3 5"/>
                <path d="M220 220 Q 60 330 60 220" stroke="rgba(232,82,26,.06)" stroke-width="1" fill="none" stroke-dasharray="3 5"/>
                <path d="M220 220 Q 120 370 220 390" stroke="rgba(232,82,26,.04)" stroke-width="1" fill="none" stroke-dasharray="3 5"/>
                <path d="M220 220 Q 320 80 370 100" stroke="rgba(232,82,26,.04)" stroke-width="1" fill="none" stroke-dasharray="3 5"/>
                <path d="M220 220 Q 110 100 80 130" stroke="rgba(232,82,26,.04)" stroke-width="1" fill="none" stroke-dasharray="3 5"/>
                <path d="M220 220 Q 340 340 320 380" stroke="rgba(232,82,26,.04)" stroke-width="1" fill="none" stroke-dasharray="3 5"/>
              </svg>

              {/* 1. Figma logo — isometric 3D — top */}
              <div className="orb-art orb-art-figma" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none" width="44" height="44">
                  {/* Shadow */}
                  <rect x="9" y="17" width="10" height="10" rx="2.5" fill="rgba(0,0,0,.2)" transform="translate(1,1)"/>
                  <rect x="19" y="17" width="10" height="10" rx="2.5" fill="rgba(0,0,0,.2)" transform="translate(1,1)"/>
                  <rect x="9" y="27" width="10" height="10" rx="2.5" fill="rgba(0,0,0,.2)" transform="translate(1,1)"/>
                  {/* Figma squares */}
                  <rect x="9" y="7" width="10" height="10" rx="2.5" fill="rgba(232,82,26,.2)" stroke="rgba(232,82,26,.5)" stroke-width="1.2"/>
                  <rect x="19" y="7" width="10" height="10" rx="2.5" fill="rgba(120,80,230,.2)" stroke="rgba(120,80,230,.5)" stroke-width="1.2"/>
                  <rect x="9" y="17" width="10" height="10" rx="2.5" fill="rgba(50,170,80,.2)" stroke="rgba(50,170,80,.5)" stroke-width="1.2"/>
                  <rect x="19" y="17" width="10" height="10" rx="2.5" fill="rgba(232,82,26,.2)" stroke="rgba(232,82,26,.5)" stroke-width="1.2"/>
                  <rect x="9" y="27" width="10" height="10" rx="2.5" fill="rgba(50,170,80,.2)" stroke="rgba(50,170,80,.5)" stroke-width="1.2"/>
                </svg>
              </div>

              {/* 2. Wireframe frame — UI screen with grids — top-right */}
              <div className="orb-art orb-art-wireframe" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
                  {/* Device frame */}
                  <rect x="8" y="5" width="32" height="38" rx="3" stroke="rgba(200,180,255,.25)" stroke-width="1" fill="rgba(200,180,255,.04)"/>
                  {/* Top bar */}
                  <rect x="12" y="10" width="24" height="4" rx="1" fill="rgba(200,180,255,.1)"/>
                  {/* Content blocks */}
                  <rect x="12" y="18" width="10" height="8" rx="1.5" stroke="rgba(200,180,255,.12)" stroke-width=".7" fill="rgba(200,180,255,.04)"/>
                  <rect x="24" y="18" width="12" height="3" rx=".8" fill="rgba(200,180,255,.08)"/>
                  <rect x="24" y="23" width="8" height="3" rx=".8" fill="rgba(200,180,255,.06)"/>
                  {/* Grid rows */}
                  <rect x="12" y="30" width="24" height="2" rx=".5" fill="rgba(200,180,255,.06)"/>
                  <rect x="12" y="34" width="20" height="2" rx=".5" fill="rgba(200,180,255,.06)"/>
                  <rect x="12" y="38" width="16" height="2" rx=".5" fill="rgba(200,180,255,.04)"/>
                </svg>
              </div>

              {/* 3. Component grid — design system — right */}
              <div className="orb-art orb-art-components" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none" width="46" height="46">
                  {/* Grid box */}
                  <rect x="6" y="6" width="36" height="36" rx="3" stroke="rgba(100,200,255,.18)" stroke-width=".8" fill="rgba(100,200,255,.03)"/>
                  {/* Component blocks */}
                  <rect x="10" y="10" width="12" height="8" rx="1.5" stroke="rgba(100,200,255,.15)" stroke-width=".7" fill="rgba(100,200,255,.05)"/>
                  <rect x="26" y="10" width="12" height="8" rx="1.5" stroke="rgba(100,200,255,.12)" stroke-width=".7" fill="rgba(100,200,255,.04)"/>
                  <rect x="10" y="22" width="12" height="8" rx="1.5" stroke="rgba(100,200,255,.12)" stroke-width=".7" fill="rgba(100,200,255,.04)"/>
                  <rect x="26" y="22" width="12" height="8" rx="1.5" stroke="rgba(100,200,255,.15)" stroke-width=".7" fill="rgba(100,200,255,.05)"/>
                  {/* Bottom row - color swatches */}
                  <circle cx="12" cy="36" r="3" stroke="rgba(100,200,255,.12)" stroke-width=".6" fill="rgba(232,82,26,.12)"/>
                  <circle cx="20" cy="36" r="3" stroke="rgba(100,200,255,.12)" stroke-width=".6" fill="rgba(120,80,230,.12)"/>
                  <circle cx="28" cy="36" r="3" stroke="rgba(100,200,255,.12)" stroke-width=".6" fill="rgba(50,170,80,.12)"/>
                  <circle cx="36" cy="36" r="3" stroke="rgba(100,200,255,.12)" stroke-width=".6" fill="rgba(232,82,26,.12)"/>
                </svg>
              </div>

              {/* 4. Color swatches + design tokens — bottom-right */}
              <div className="orb-art orb-art-tokens" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none" width="44" height="44">
                  {/* Main palette */}
                  <rect x="8" y="8" width="32" height="32" rx="4" stroke="rgba(255,200,150,.15)" stroke-width=".8" fill="rgba(255,200,150,.03)"/>
                  {/* Color circles */}
                  <circle cx="16" cy="16" r="5" fill="rgba(232,82,26,.15)" stroke="rgba(232,82,26,.25)" stroke-width=".8"/>
                  <circle cx="28" cy="16" r="5" fill="rgba(120,80,230,.15)" stroke="rgba(120,80,230,.25)" stroke-width=".8"/>
                  <circle cx="16" cy="28" r="5" fill="rgba(50,170,80,.15)" stroke="rgba(50,170,80,.25)" stroke-width=".8"/>
                  <circle cx="28" cy="28" r="5" fill="rgba(230,180,30,.15)" stroke="rgba(230,180,30,.25)" stroke-width=".8"/>
                  {/* Small token pills */}
                  <rect x="11" y="22" width="4" height="2" rx="1" fill="rgba(255,255,255,.08)"/>
                  <rect x="23" y="22" width="4" height="2" rx="1" fill="rgba(255,255,255,.08)"/>
                </svg>
              </div>

              {/* 5. Mobile + desktop device frames — bottom */}
              <div className="orb-art orb-art-devices" aria-hidden="true">
                <svg viewBox="0 0 52 48" fill="none" width="48" height="44">
                  {/* Laptop */}
                  <rect x="6" y="6" width="24" height="16" rx="2" stroke="rgba(150,220,200,.2)" stroke-width=".8" fill="rgba(150,220,200,.03)"/>
                  <rect x="8" y="9" width="20" height="10" rx="1" fill="rgba(150,220,200,.04)"/>
                  <rect x="8" y="11" width="14" height="2" rx=".5" fill="rgba(150,220,200,.08)"/>
                  <rect x="8" y="15" width="10" height="2" rx=".5" fill="rgba(150,220,200,.06)"/>
                  <path d="M8 22 L10 26 L26 26 L28 22" stroke="rgba(150,220,200,.15)" stroke-width=".8" fill="rgba(150,220,200,.04)"/>
                  {/* Phone */}
                  <rect x="34" y="10" width="14" height="24" rx="2.5" stroke="rgba(150,220,200,.18)" stroke-width=".8" fill="rgba(150,220,200,.03)"/>
                  <rect x="37" y="14" width="8" height="12" rx="1" fill="rgba(150,220,200,.04)"/>
                  <rect x="37" y="16" width="6" height="1.5" rx=".3" fill="rgba(150,220,200,.08)"/>
                  <rect x="37" y="19" width="4" height="1.5" rx=".3" fill="rgba(150,220,200,.06)"/>
                  <rect x="39" y="28" width="4" height="1.5" rx=".75" fill="rgba(150,220,200,.1)"/>
                </svg>
              </div>

              {/* 6. Auto-layout brackets + cursor — bottom-left */}
              <div className="orb-art orb-art-layout" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none" width="46" height="46">
                  {/* Auto-layout brackets */}
                  <path d="M10 8 L10 40" stroke="rgba(180,230,200,.2)" stroke-width="1.2" stroke-linecap="round"/>
                  <path d="M10 8 L18 8" stroke="rgba(180,230,200,.2)" stroke-width="1.2" stroke-linecap="round"/>
                  <path d="M10 40 L18 40" stroke="rgba(180,230,200,.2)" stroke-width="1.2" stroke-linecap="round"/>
                  <path d="M38 8 L38 40" stroke="rgba(180,230,200,.18)" stroke-width="1.2" stroke-linecap="round"/>
                  <path d="M30 8 L38 8" stroke="rgba(180,230,200,.18)" stroke-width="1.2" stroke-linecap="round"/>
                  <path d="M30 40 L38 40" stroke="rgba(180,230,200,.18)" stroke-width="1.2" stroke-linecap="round"/>
                  {/* Arrow icon */}
                  <path d="M20 16 L28 24 L20 32" stroke="rgba(180,230,200,.2)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                  {/* Cursor arrow */}
                  <path d="M28 10 L34 16 L30 18" stroke="rgba(180,230,200,.15)" stroke-width=".8" fill="none"/>
                </svg>
              </div>

              {/* 7. Accessibility icons — left */}
              <div className="orb-art orb-art-a11y" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none" width="42" height="42">
                  {/* Universal access circle */}
                  <circle cx="24" cy="24" r="16" stroke="rgba(200,230,255,.18)" stroke-width=".8" fill="rgba(200,230,255,.03)"/>
                  {/* Person icon */}
                  <circle cx="24" cy="18" r="5" stroke="rgba(200,230,255,.15)" stroke-width=".8" fill="rgba(200,230,255,.06)"/>
                  <path d="M16 32c0-5 3.5-8 8-8s8 3 8 8" stroke="rgba(200,230,255,.15)" stroke-width=".8" fill="none"/>
                  {/* Accessibility indicators */}
                  <circle cx="24" cy="18" r="8" stroke="rgba(200,230,255,.08)" stroke-width=".5" fill="none" stroke-dasharray="2 2"/>
                  <path d="M20 24 L24 28 L28 24" stroke="rgba(200,230,255,.1)" stroke-width=".8" stroke-linecap="round" fill="none"/>
                  <path d="M24 28 L24 34" stroke="rgba(200,230,255,.1)" stroke-width=".8"/>
                </svg>
              </div>

              {/* 8. Prototype connection nodes — top-left */}
              <div className="orb-art orb-art-prototype" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none" width="44" height="44">
                  {/* Connection lines */}
                  <path d="M10 14 L22 14 L22 30 L34 30" stroke="rgba(255,180,200,.2)" stroke-width="1" stroke-dasharray="3 3" fill="none"/>
                  <path d="M14 20 L34 20" stroke="rgba(255,180,200,.1)" stroke-width=".6" stroke-dasharray="2 3" fill="none"/>
                  {/* Nodes */}
                  <circle cx="10" cy="14" r="4" stroke="rgba(255,180,200,.25)" stroke-width="1" fill="rgba(255,180,200,.06)"/>
                  <circle cx="10" cy="14" r="1.5" fill="rgba(255,180,200,.3)"/>
                  <circle cx="22" cy="30" r="4" stroke="rgba(255,180,200,.2)" stroke-width="1" fill="rgba(255,180,200,.05)"/>
                  <circle cx="22" cy="30" r="1.5" fill="rgba(255,180,200,.25)"/>
                  <circle cx="34" cy="30" r="4" stroke="rgba(255,180,200,.2)" stroke-width="1" fill="rgba(255,180,200,.05)"/>
                  <circle cx="34" cy="30" r="1.5" fill="rgba(255,180,200,.25)"/>
                  {/* Flow arrows */}
                  <path d="M12 10 L16 14 L12 18" stroke="rgba(255,180,200,.15)" stroke-width=".8" stroke-linecap="round" fill="none"/>
                  <path d="M24 26 L28 30 L24 34" stroke="rgba(255,180,200,.12)" stroke-width=".8" stroke-linecap="round" fill="none"/>
                </svg>
              </div>

              {/* Floating ambient particles */}
              <div className="orb-particle p1" aria-hidden="true"></div>
              <div className="orb-particle p2" aria-hidden="true"></div>
              <div className="orb-particle p3" aria-hidden="true"></div>
              <div className="orb-particle p4" aria-hidden="true"></div>
              <div className="orb-particle p5" aria-hidden="true"></div>
              <div className="orb-particle p6" aria-hidden="true"></div>
              <div className="orb-particle p7" aria-hidden="true"></div>
              <div className="orb-particle p8" aria-hidden="true"></div>
              <div className="orb-particle p9" aria-hidden="true"></div>
              <div className="orb-particle p10" aria-hidden="true"></div>
              <div className="orb-particle p11" aria-hidden="true"></div>
              <div className="orb-particle p12" aria-hidden="true"></div>

              <div className="photo-frame" style={{
                backgroundImage:'url(' + BASE + 'profile-photo.png)',
                backgroundSize:'cover',
                backgroundPosition:'center top',
                backgroundRepeat:'no-repeat'
              }}></div>
            </div>
          </div>
        </div>
      </header>

      {/* QUOTE */}
      <section className="about-quote" aria-label="Personal quote">
        <blockquote>
          &ldquo;I believe great design is invisible; it removes friction,
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
              { role:'Senior UI/UX Designer', company:'Invicta PTE LTD', period:'2025–Present', desc:'I design the end-to-end web application for one of the world&rsquo;s largest product tanker operators, working across voyage performance dashboards, financial estimate workflows, pool segmentation interfaces, and RBAC systems that serve complex operational user types at enterprise scale.', link:null, url:'https://invicta.global/' },
              { role:'UI/UX Designer', company:'Freelancing', period:'2024–2025', desc:'Independently served global clients across AI, Cybersecurity, and EdTech. Projects include an AI-powered financial intelligence platform, Sky Leap Cybersecurity (a Zero Trust browser security application), and Loksewa Pro, a Nepal PSC exam preparation mobile app that reached 10,000+ downloads.', link:null, url:null },
              { role:'UI/UX Designer', company:'Life Management Science Labs', period:'2024–2025', desc:'LMSL is a B2B and B2C product company operating across wellness, lifestyle, and education verticals. I designed across their full product ecosystem including a personal wellness mobile app, the LERERO EdTech platform, and the Aegenda fashion e-commerce experience while building and scaling their centralized Figma design system from the ground up.', link:null, url:'https://lifemanagementsciencelabs.com/' },
              { role:'UI/UX Designer', company:'Rara Digital Lab Pvt. Ltd.', period:'2022–2024', desc:'Rara Digital Labs is a software agency delivering custom digital products across enterprise, healthcare, fintech, and government sectors. I designed 9+ distinct products during my tenure including Myra ERP, Rara EMS, XUNO Fintech, NAC GSE inventory system, Heliski International booking marketplace, and a healthcare platform spanning web apps, mobile apps, PWAs, and admin panels across industries.', link:'/case/raraspace', url:'https://raralabs.com/' },
              { role:'Designer & Marketing Analyst', company:'Smart Acre Media Solutions', period:'2021–2022', desc:'Smart Acre is a digital marketing agency specializing in email campaigns and customer engagement solutions. I designed and developed conversion-focused email templates in HTML and CSS, managed brand-consistent visual assets across digital channels, and optimized campaign deliverability driving a 40% increase in open rates and 25% boost in click-through rates.', link:null, url:'https://smartacremediasolutions.com/' },
              { role:'Frontend Developer (Internship)', company:'Featherwebs', period:'2021', desc:'Featherwebs is a web development studio building custom software solutions for businesses. As a Frontend Developer intern, I contributed to HRIS development refining UI components and implementing interactive features that improved internal user engagement.', link:null, url:'https://featherwebs.com/' },
            ].map((exp, i) => (
              <article className="exp-item" role="listitem" key={i}>
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
              { group:'UX Design', skills:['UX Strategy','User Research','Persona Creation','Journey Mapping','Information Architecture','Usability Testing','Heuristic Evaluation','Accessibility Audits'] },
              { group:'UI Design', skills:['Visual Design','Design Systems','Component Libraries','Typography','Color Theory','Iconography'] },
              { group:'Tools', skills:['Figma','Sketch','Adobe XD','Framer','Principle','Maze'] },
              { group:'AI & Automation', skills:['Claude','ChatGPT','Lovable','Uizard','Figma AI','Stitch'] },
              { group:'Prototyping', skills:['Interactive Prototypes','Wireframing','Micro-Interactions','Motion Design','Responsive Design','Design Tokens','Handoff'] },
              { group:'Soft Skills', skills:['Stakeholder Mgmt','Design Critique','Cross-Functional','Mentoring','Presentations','Workshop Facilitation','User Advocacy'] },
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
              <h3>Bachelor's in Computer Science</h3>
              <p className="edu-school">Tribhuvan University, Kathmandu</p>
              <p>Relevant coursework: Human-Computer Interaction, Design Thinking, Software Engineering, Database Management, AI Fundamentals</p>
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
              <h3>Academic Project &middot; Major &middot; IVY EARTH</h3>
              <p>Plant Recommendation System, a smart system that recommends plants based on environmental conditions and user preferences.</p>
            </div>
            <div className="edu-item">
              <h3>Academic Project &middot; Minor &middot; HRIS</h3>
              <p>Human Resource Information System, a web-based HR management platform for employee data, attendance, and payroll tracking.</p>
            </div>
            <div className="edu-item">
              <h3>Google &middot; User Experience Course</h3>
              <p>Google UX Design Certificate covering UX research, wireframing, prototyping, and usability testing across the full design lifecycle.</p>
            </div>
            <div className="edu-item">
              <h3>Udemy &middot; Mobile and Web Design</h3>
              <p>User Interface + User Experience (UI/UX Design), HTML &amp; CSS. Comprehensive courses covering responsive design, visual hierarchy, and front-end development fundamentals.</p>
            </div>
          </div>
          <p className="about-extra" style={{marginTop:32}}>
            Available for full-time, contract, and freelance roles. Open to remote and
            hybrid arrangements. Based in Kathmandu, Nepal, working with clients globally.
          </p>
        </div>
      </section>
    </main>
  )
}
