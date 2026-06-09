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
            <div className="photo-frame" style={{
              backgroundImage:'url(' + BASE + 'profile-photo.png)',
              backgroundSize:'cover',
              backgroundPosition:'center top',
              backgroundRepeat:'no-repeat',
              border:'1px solid var(--border)'
            }}></div>
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
              { role:'UI/UX Designer', company:'Rara Digital Lab Pvt. Ltd.', period:'2022–2024', desc:'Rara Digital Labs is a software agency delivering custom digital products across enterprise, healthcare, fintech, and government sectors. I designed 9+ distinct products during my tenure including Myra ERP, Rara EMS, XUNO Fintech, NAC GSE inventory system, Heliski International booking marketplace, and a healthcare platform spanning web apps, mobile apps, PWAs, and admin panels across industries.', link:'/work/raraspace', url:'https://raralabs.com/' },
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
