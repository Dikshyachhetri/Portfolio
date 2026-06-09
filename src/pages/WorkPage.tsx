import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { showToast } from '../components/Toast'
import './WorkPage.css'

export default function WorkPage() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') }),
      { threshold: 0.06 }
    )
    document.querySelectorAll('.project-card, .project-row').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <main id="main">
      {/* ========== PAGE HEADER ========== */}
      <header className="page-header">
        <div className="breadcrumb">
          <Link to="/home">Home</Link><span>&rarr;</span><span>Work</span>
        </div>
        <h1>SELECTED<br/>WORK</h1>
        <p className="sub">
          Three case studies across enterprise, healthcare, and mobile &mdash;
          each with full process documentation from research to final iteration.
        </p>
      </header>

      {/* ========== PROJECT CARDS ========== */}
      <div className="projects-wrap" role="list" aria-label="Project case studies">

        {/* PROJECT 1 — RARASPACE */}
        <article className="project-card" id="raraspace" role="listitem">
          <div className="proj-visual">
            <div className="proj-glow" style={{background:'radial-gradient(circle at 40% 40%,var(--orange) 0%,transparent 65%)'}}></div>
            <div className="mock-screen">
              <div className="mock-chrome">
                <div className="mc-dot" style={{background:'#ff5f57'}}></div>
                <div className="mc-dot" style={{background:'#febc2e'}}></div>
                <div className="mc-dot" style={{background:'#28c840'}}></div>
                <span className="mc-label">RaraSpace EMS Dashboard</span>
              </div>
              <div className="mock-body">
                <div style={{display:'flex',gap:10}}>
                  <div className="mock-sidebar"></div>
                  <div style={{flex:1}}>
                    <div className="m-row hi w90"></div>
                    <div className="m-row w70"></div>
                    <div className="m-grid">
                      <div className="m-cell hi"></div><div className="m-cell"></div>
                      <div className="m-cell"></div><div className="m-cell hi"></div>
                    </div>
                    <div className="m-row w50" style={{marginTop:10}}></div>
                    <div className="m-row w90" style={{height:22,background:'rgba(232,82,26,.08)',borderRadius:4}}></div>
                  </div>
                </div>
              </div>
            </div>
            <span className="proj-vis-label" aria-hidden="true">Enterprise &middot; Web App</span>
          </div>
          <div className="proj-info">
            <p className="proj-num" aria-hidden="true">01 / 03</p>
            <h2 className="proj-title">RARASPACE — EMPLOYEE MANAGEMENT SYSTEM</h2>
            <p className="proj-company">Rara Digital Lab Pvt. Ltd. &nbsp;&middot;&nbsp; UI/UX Designer &nbsp;&middot;&nbsp; 2022–2024</p>
            <p className="proj-desc">A comprehensive web application unifying employee management, task tracking, payroll, project management, leave systems, and inventory into one seamless platform &mdash; eliminating fragmented tools across a 12-person team.</p>
            <div className="proj-case">
              <div className="case-row">
                <span className="case-key">Problem</span>
                <span className="case-val">No unified system &mdash; teams lost time switching between disconnected tools, causing errors and communication gaps.</span>
              </div>
              <div className="case-row">
                <span className="case-key">Process</span>
                <span className="case-val">Google surveys &rarr; Pain point analysis &rarr; Paper sketches for 8+ screens &rarr; Figma prototyping &rarr; 3 rounds of usability testing with real users.</span>
              </div>
              <div className="case-row">
                <span className="case-key">Impact</span>
                <span className="case-val"><strong>100% operational efficiency improvement.</strong> 10+ business functions unified. Full design system delivered.</span>
              </div>
            </div>
            <div className="proj-metrics" aria-label="Key outcomes">
              <div className="proj-metric"><strong>100<span>%</span></strong><em>Efficiency gain</em></div>
              <div className="proj-metric"><strong>10<span>+</span></strong><em>Modules built</em></div>
              <div className="proj-metric"><strong>3<span>&times;</span></strong><em>Testing rounds</em></div>
            </div>
            <div className="proj-tags" aria-label="Project categories">
              {['Enterprise','Web App','Design System','Accessibility','9 Months'].map(t => <span className="proj-tag" key={t}>{t}</span>)}
            </div>
            <a href="raraspace.html" className="proj-cta" aria-label="View RaraSpace case study">
              View Case Study
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </article>

        {/* PROJECT 2 — INTELLIX */}
        <article className="project-card flip" id="intellix" role="listitem">
          <div className="proj-visual" style={{background:'#111'}}>
            <div className="proj-glow" style={{background:'radial-gradient(circle at 60% 40%,#0d6b5e 0%,transparent 65%)'}}></div>
            <div className="mock-screen" style={{background:'#f8f9fb'}}>
              <div className="mock-chrome" style={{background:'#fff',borderBottom:'1px solid #e8eaed'}}>
                <div className="mc-dot" style={{background:'#ff5f57'}}></div>
                <div className="mc-dot" style={{background:'#febc2e'}}></div>
                <div className="mc-dot" style={{background:'#28c840'}}></div>
                <span className="mc-label" style={{color:'#80868b'}}>Intellix KPI Dashboard</span>
              </div>
              <div className="mock-body" style={{background:'#f8f9fb',padding:10}}>
                <div style={{display:'flex',alignItems:'center',gap:6,marginBottom:8,paddingBottom:6,borderBottom:'1px solid #e8eaed'}}>
                  <div style={{display:'flex',gap:2}}>
                    <div style={{width:8,height:8,borderRadius:2,background:'#4285f4'}}></div>
                    <div style={{width:8,height:8,borderRadius:2,background:'#ea4335'}}></div>
                    <div style={{width:8,height:8,borderRadius:2,background:'#fbbc04'}}></div>
                    <div style={{width:8,height:8,borderRadius:2,background:'#34a853'}}></div>
                  </div>
                  <span style={{fontSize:8,color:'#1967d2',borderBottom:'1.5px solid #1967d2',paddingBottom:2}}>Dashboard</span>
                  <span style={{fontSize:8,color:'#5f6368',marginLeft:4}}>Hospitals</span>
                </div>
                <div className="kpi-grid">
                  <div className="kpi-card">
                    <div style={{fontSize:7,color:'#3c4043',fontWeight:500,marginBottom:5}}>Length of Stay</div>
                    <svg width="100%" height="44" viewBox="0 0 120 44">
                      <path d="M0,35 C15,30 30,22 50,18 C70,14 85,24 100,20 C110,17 115,22 120,24" stroke="#1967d2" strokeWidth="1.5" fill="none"/>
                      <path d="M0,35 C15,30 30,22 50,18 C70,14 85,24 100,20 C110,17 115,22 120,24 L120,44 L0,44 Z" fill="rgba(25,103,210,.08)"/>
                      <circle cx="85" cy="24" r="2.5" fill="#1967d2"/>
                    </svg>
                    <div style={{fontSize:7,color:'#1967d2'}}>Avg stay: 4.6 days</div>
                  </div>
                  <div className="kpi-card">
                    <div style={{fontSize:7,color:'#3c4043',fontWeight:500,marginBottom:4}}>Checklist Overview</div>
                    <div style={{display:'flex',alignItems:'flex-end',gap:2,height:36}}>
                      {[4,5,3,6].map((h,i) => (
                        <div key={i} style={{flex:1,display:'flex',flexDirection:'column',gap:1,height:'100%'}}>
                          <div style={{flex:h,background:'#34a853',borderRadius:1}}></div>
                          <div style={{flex:1,background:'#fbbc04'}}></div>
                          <div style={{flex:1,background:'#ea4335'}}></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="patient-row">
                  <div className="patient-avatar">01</div>
                  <div>
                    <div style={{fontSize:9,color:'#202124',fontWeight:500}}>Bessie Cooper &middot; F23</div>
                    <div style={{fontSize:7,color:'#80868b'}}>Round 1 complete &middot; Round 2 pending</div>
                  </div>
                  <div style={{marginLeft:'auto',fontSize:7,background:'#e6f4ea',color:'#137333',padding:'2px 6px',borderRadius:3}}>Active</div>
                </div>
              </div>
            </div>
            <span className="proj-vis-label" aria-hidden="true">Healthcare &middot; Web + Mobile</span>
          </div>
          <div className="proj-info">
            <p className="proj-num" aria-hidden="true">02 / 03</p>
            <h2 className="proj-title">INTELLIX — HEALTHCARE KPI DASHBOARD</h2>
            <p className="proj-company">Rara Digital Lab Pvt. Ltd. &nbsp;&middot;&nbsp; UI/UX Designer &nbsp;&middot;&nbsp; 2022–2024</p>
            <p className="proj-desc">Designed the KPI module and Patient Dashboard for a healthcare intelligence platform used daily by doctors and nurses in live hospital settings &mdash; transforming fragmented clinical data into clear, actionable performance insights.</p>
            <div className="proj-case">
              <div className="case-row"><span className="case-key">Problem</span><span className="case-val">No centralized way to track KPIs &mdash; patient length of stay, checklist completion, and safety data were invisible to administrators.</span></div>
              <div className="case-row"><span className="case-key">Process</span><span className="case-val">Secondary research &rarr; Competition analysis &rarr; Direct feedback from doctors &amp; nurses &rarr; 14-screen prototype &rarr; Stakeholder review cycles &rarr; Live analytics monitoring.</span></div>
              <div className="case-row"><span className="case-key">Impact</span><span className="case-val"><strong>30% user satisfaction improvement.</strong> Reduced clinical cognitive load. KPI module adopted across hospital departments.</span></div>
            </div>
            <div className="proj-metrics" aria-label="Key outcomes">
              <div className="proj-metric"><strong>30<span>%</span></strong><em>Satisfaction lift</em></div>
              <div className="proj-metric"><strong>14<span>+</span></strong><em>Screens designed</em></div>
              <div className="proj-metric"><strong>2<span>mo</span></strong><em>Timeline</em></div>
            </div>
            <div className="proj-tags" aria-label="Project categories">
              {['Healthcare','Data Dashboard','Web + Mobile','Clinical UX','Team of 6'].map(t => <span className="proj-tag" key={t}>{t}</span>)}
            </div>
            <a href="intellix.html" className="proj-cta" aria-label="View Intellix case study">
              View Case Study
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </article>

        {/* PROJECT 3 — LOKSEWA */}
        <article className="project-card" id="loksewa" role="listitem">
          <div className="proj-visual" style={{background:'#111'}}>
            <div className="proj-glow" style={{background:'radial-gradient(circle at 40% 40%,#f59e0b 0%,transparent 65%)'}}></div>
            <div style={{display:'flex',gap:14,alignItems:'flex-end',position:'relative',zIndex:1}}>
              <div className="phone-mock">
                <div className="phone-notch"><div className="phone-notch-pill"></div></div>
                <div className="papp-header"><div className="papp-logo">Loksewa<span>Pro</span></div></div>
                <div className="papp-banner">
                  <div className="papp-banner-tag">DAILY QUIZ</div>
                  <div className="papp-banner-title">Challenge yourself today!</div>
                  <div className="papp-start">Start &rarr;</div>
                </div>
                <div className="papp-grid">
                  {[{icon:'⚡',label:'Quick'},{icon:'📝',label:'Exercise'},{icon:'🎯',label:'Practice'},{icon:'📚',label:'Course'}].map(({icon,label}) => (
                    <div className="papp-item" key={label}>
                      <div className="papp-icon">{icon}</div>
                      <div className="papp-label">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="phone-mock-dark">
                <div className="phone-notch-dark">
                  <div style={{width:36,height:3,background:'#374151',borderRadius:2}}></div>
                </div>
                <div style={{padding:'8px 10px'}}>
                  <div style={{fontSize:10,fontWeight:700,color:'#fff',marginBottom:6}}>Loksewa<span style={{color:'#f59e0b'}}>Pro</span></div>
                  <div className="papp-banner-dark">
                    <div style={{fontSize:6,color:'#f59e0b',marginBottom:2}}>DAILY QUIZ</div>
                    <div style={{fontSize:8,color:'#fff',fontWeight:600}}>Daily Challenge</div>
                  </div>
                  <div className="papp-grid-dark">
                    {['⚡','📝','🎯','📚'].map((icon,i) => <div key={i} style={{background:'rgba(255,255,255,.06)',borderRadius:5,padding:5,textAlign:'center',fontSize:10}}>{icon}</div>)}
                  </div>
                </div>
              </div>
            </div>
            <span className="proj-vis-label" aria-hidden="true">EdTech &middot; Mobile &middot; iOS &amp; Android</span>
          </div>
          <div className="proj-info">
            <p className="proj-num" aria-hidden="true">03 / 03</p>
            <h2 className="proj-title">LOKSEWA PRO — EXAM PREP APP</h2>
            <p className="proj-company">Pisces Moon &nbsp;&middot;&nbsp; UI/UX Designer &nbsp;&middot;&nbsp; 2024–2025</p>
            <p className="proj-desc">Designed a mobile app for Nepal&rsquo;s most competitive civil service exam &mdash; consolidating practice sets, quizzes, audio books, progress tracking, and offline access into one beautifully crafted experience.</p>
            <div className="proj-case">
              <div className="case-row"><span className="case-key">Problem</span><span className="case-val">Every existing Loksewa app failed users &mdash; outdated content, no progress tracking, poor navigation, and no reliable offline access.</span></div>
              <div className="case-row"><span className="case-key">Process</span><span className="case-val">App review analysis &rarr; Aspirant surveys &rarr; Competitor audit &rarr; Mid-fidelity wireframes &rarr; Dark &amp; light theme design &rarr; Stakeholder review &rarr; Play Store launch.</span></div>
              <div className="case-row"><span className="case-key">Impact</span><span className="case-val"><strong>10,000+ downloads</strong> and <strong>4.4-star rating</strong> on Play Store. Praised by users for clean UI, organized content, and dark mode.</span></div>
            </div>
            <div className="proj-metrics" aria-label="Key outcomes">
              <div className="proj-metric"><strong>10<span>K+</span></strong><em>Downloads</em></div>
              <div className="proj-metric"><strong>4.4<span>&#9733;</span></strong><em>Play Store</em></div>
              <div className="proj-metric"><strong>2<span>&times;</span></strong><em>Themes</em></div>
            </div>
            <div className="proj-tags" aria-label="Project categories">
              {['EdTech','Mobile App','iOS & Android','Consumer','Nepal'].map(t => <span className="proj-tag" key={t}>{t}</span>)}
            </div>
            <a href="loksewa.html" className="proj-cta" aria-label="View Loksewa Pro case study">
              View Case Study
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </article>
      </div>

      {/* ========== PROJECT ROWS (moved from homepage) ========== */}
      <section className="project-rows-section" aria-labelledby="quick-links-title">
        <div className="section-inner" style={{padding:'80px 48px 48px'}}>
          <div className="projects-header">
            <div>
              <span className="section-kicker">Quick Links</span>
              <h2 className="section-title" id="quick-links-title">ALL PROJECTS</h2>
            </div>
          </div>
          <nav aria-label="Project quick links">
            <a href="raraspace.html" className="project-row" aria-label="RaraSpace Employee Management System">
              <div className="proj-left">
                <span className="proj-num" aria-hidden="true">01</span>
                <span className="proj-name">RaraSpace — Employee Management System</span>
              </div>
              <div className="proj-right">
                <div className="proj-tags" aria-label="Categories">
                  <span className="proj-tag">Enterprise</span>
                  <span className="proj-tag">Web App</span>
                  <span className="proj-tag">100% Efficiency &uarr;</span>
                </div>
                <div className="proj-arrow" aria-hidden="true">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            </a>
            <a href="intellix.html" className="project-row" aria-label="Intellix Healthcare KPI Dashboard">
              <div className="proj-left">
                <span className="proj-num" aria-hidden="true">02</span>
                <span className="proj-name">Intellix — Healthcare KPI Dashboard</span>
              </div>
              <div className="proj-right">
                <div className="proj-tags" aria-label="Categories">
                  <span className="proj-tag">Healthcare</span>
                  <span className="proj-tag">Web + Mobile</span>
                  <span className="proj-tag">Clinical UX</span>
                </div>
                <div className="proj-arrow" aria-hidden="true">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            </a>
            <a href="loksewa.html" className="project-row" aria-label="Loksewa Pro Exam App">
              <div className="proj-left">
                <span className="proj-num" aria-hidden="true">03</span>
                <span className="proj-name">Loksewa Pro — Public Service Exam App</span>
              </div>
              <div className="proj-right">
                <div className="proj-tags" aria-label="Categories">
                  <span className="proj-tag">EdTech</span>
                  <span className="proj-tag">Mobile</span>
                  <span className="proj-tag">10K+ Downloads</span>
                </div>
                <div className="proj-arrow" aria-hidden="true">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            </a>
          </nav>
        </div>
      </section>

      {/* CTA */}
      <div className="more-cta">
        <h2>WANT TO SEE MORE?</h2>
        <p>Additional case studies and work samples available on request.</p>
        <button className="btn-primary" onClick={showToast}>Get In Touch</button>
      </div>
    </main>
  )
}
