import { NavLink } from "react-router-dom";
import { Header, Footer } from "./Layout.jsx";

export default function Home() {
  return (
    <div className="page-shell">
      <Header />
      <main>

        {/* HERO */}
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="fade-up">
              <div className="eyebrow">Enterprise Security Solutions</div>
              <h1 className="hero-title">
                Professional<br />
                <span>Cybersecurity</span><br />
                &amp; Surveillance
              </h1>
              <p className="hero-copy">
                DT3BZA Security delivers cybersecurity protection, CCTV surveillance,
                school security solutions and the DT3 Tactical Intelligence Platform —
                built for serious organisations in the Western Cape and beyond.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="https://wa.me/27646993670?text=Hello%20I%20am%20interested%20in%20your%20security%20services" target="_blank" rel="noreferrer">
                  Request Consultation
                </a>
                <NavLink to="/cybersecurity" className="btn btn-secondary">Explore Services</NavLink>
              </div>
              <div className="hero-badges">
                <span>Cybersecurity</span>
                <span>CCTV Installation</span>
                <span>Business Protection</span>
                <span>School Security</span>
                <span>DT3 Intelligence App</span>
              </div>
            </div>
            <div className="hero-card fade-up-2">
              <div className="card-label">Why Businesses Choose Us</div>
              <h3>Security that feels structured, premium and reliable.</h3>
              <ul>
                <li>Cybersecurity risk reviews for real business environments</li>
                <li>CCTV installation, upgrades, maintenance and support</li>
                <li>Security solutions for schools, offices and facilities</li>
                <li>DT3 live intelligence app for security companies</li>
                <li>Professional consulting and protection planning</li>
              </ul>
            </div>
          </div>
        </section>

        {/* DT3 APP PROMO */}
        <section className="app-section">
          <div className="container app-section-inner">
            <div>
              <div className="eyebrow">Now Available</div>
              <h2 style={{fontFamily:"'Rajdhani',sans-serif",fontSize:"clamp(2rem,4vw,3rem)",fontWeight:700,letterSpacing:"-0.01em",lineHeight:1,marginBottom:14}}>
                DT3 Tactical<br />Intelligence App
              </h2>
              <p style={{color:"var(--muted)",lineHeight:1.7,marginBottom:24,fontSize:"1rem"}}>
                A live crime intelligence platform built for private security companies
                in the Western Cape. Real-time incident reporting, live maps,
                panic alerts, guard tours and community intelligence — all in one app.
              </p>
              <div className="app-features">
                {[
                  {icon:"🗺️", title:"Live Incident Map", desc:"Real-time crime pins, heatmaps and unit tracking across Western Cape"},
                  {icon:"🚨", title:"Panic Button", desc:"Officers send GPS emergency alerts to all dispatchers in one tap"},
                  {icon:"⏱", title:"Shift Management", desc:"Clock in/out, live shift tracking and weekly reports"},
                  {icon:"🏘️", title:"Communities", desc:"Neighbourhood watch intelligence feeds for public and officers"},
                  {icon:"✓",  title:"Guard Tour QR",  desc:"Checkpoint scanning with time-stamped verification logs"},
                ].map((f,i) => (
                  <div className="app-feature-item" key={i}>
                    <div className="app-feature-icon">{f.icon}</div>
                    <div>
                      <div className="app-feature-title">{f.title}</div>
                      <div className="app-feature-desc">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{marginTop:28,display:"flex",gap:12,flexWrap:"wrap"}}>
                <NavLink to="/dt3app" className="btn btn-primary">Learn More About DT3</NavLink>
                <a className="btn btn-secondary" href="https://wa.me/27646993670?text=Hello%20I%20want%20to%20register%20my%20company%20on%20DT3" target="_blank" rel="noreferrer">Register Your Company</a>
              </div>
            </div>
            <div className="app-mockup">
              <div className="app-mockup-label">
                <span className="live-dot"></span>
                LIVE OPERATIONS · WESTERN CAPE
              </div>
              <div className="app-screen">
                <div className="app-topbar">
                  <div>
                    <div className="app-logo-text">DT3</div>
                    <div className="app-sub">WESTERN CAPE</div>
                  </div>
                  <div className="live-pill"><span className="live-dot" />LIVE</div>
                </div>
                <div className="app-stats">
                  {[{v:"4",l:"ACTIVE",c:"var(--red)"},{v:"2",l:"CRITICAL",c:"#9b4be8"},{v:"4",l:"ON DUTY",c:"var(--green)"},{v:"1",l:"CLOSED",c:"var(--gold)"}].map((s,i)=>(
                    <div className="app-stat" key={i}>
                      <div className="app-stat-val" style={{color:s.c}}>{s.v}</div>
                      <div className="app-stat-lbl">{s.l}</div>
                    </div>
                  ))}
                </div>
                {[
                  {id:"INC-2847",title:"Robbery",area:"Cape Town CBD",sev:"CRITICAL",sevColor:"var(--red)",accentColor:"var(--red)"},
                  {id:"INC-2846",title:"Hijacking",area:"N2 Highway",sev:"IN-PROGRESS",sevColor:"var(--gold)",accentColor:"#9b4be8"},
                  {id:"INC-2845",title:"Assault",area:"Bellville",sev:"HIGH",sevColor:"var(--gold)",accentColor:"var(--gold)"},
                ].map((inc,i)=>(
                  <div className="app-incident" key={i}>
                    <div className="inc-accent" style={{background:inc.accentColor}} />
                    <div style={{flex:1}}>
                      <span className="inc-id">{inc.id}</span>
                      <div className="inc-title">{inc.title}</div>
                      <div className="inc-area">{inc.area}</div>
                    </div>
                    <div className="inc-badge" style={{color:inc.sevColor,borderColor:inc.sevColor}}>{inc.sev}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="stats-section">
          <div className="container stats-grid">
            <div className="stat-card">
              <strong>Digital Protection</strong>
              <p>Cybersecurity support for systems, networks and sensitive data.</p>
            </div>
            <div className="stat-card">
              <strong>Physical Security</strong>
              <p>CCTV, surveillance support, upgrades and maintenance services.</p>
            </div>
            <div className="stat-card">
              <strong>Tender-Ready</strong>
              <p>FORTYXIS SECURITY trading identity for government and contract work.</p>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Core Services</div>
              <h2>Complete security under one brand</h2>
              <p>Cybersecurity, surveillance, school security, tactical intelligence — all delivered by DT3BZA Security.</p>
            </div>
            <div className="cards-grid">
              {[
                {title:"Cybersecurity",desc:"Protect systems, networks and sensitive business data through structured security reviews.",link:"/cybersecurity",linkText:"View cybersecurity services"},
                {title:"CCTV Installation",desc:"Professional camera consultation, installation, maintenance and support.",link:"/cctv",linkText:"View CCTV services"},
                {title:"School Security",desc:"Better visibility, safer entrances, perimeter monitoring and security planning.",link:"/schools",linkText:"View school security"},
                {title:"DT3 App",desc:"Live crime intelligence platform for security companies. Real-time incidents, maps, panic alerts.",link:"/dt3app",linkText:"View DT3 platform"},
                {title:"Business Protection",desc:"Security consulting, risk reviews and protection planning for serious organisations.",link:"/contact",linkText:"Request consultation"},
                {title:"Guard Services",desc:"Trained security personnel, patrol management and site protection services.",link:"/contact",linkText:"Request a quote"},
              ].map((s,i)=>(
                <article className="info-card" key={i}>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <NavLink to={s.link} className="text-link">{s.linkText}</NavLink>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="section section-alt">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Industries</div>
              <h2>Organisations that need stronger protection</h2>
            </div>
            <div className="cards-grid">
              {[
                {t:"Law Firms",d:"Protect confidential client data, systems and office environments."},
                {t:"Accounting Firms",d:"Improve protection around financial data, access and business systems."},
                {t:"Schools",d:"Improve visibility, monitoring and safety across educational environments."},
                {t:"Construction",d:"Strengthen site visibility and reduce avoidable security exposure."},
                {t:"Warehouses",d:"Surveillance, monitoring and physical security across operational sites."},
                {t:"Security Companies",d:"Use the DT3 app for live intelligence, dispatch and officer management."},
              ].map((ind,i)=>(
                <article className="info-card" key={i}>
                  <h3>{ind.t}</h3>
                  <p>{ind.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* QUOTE CTA */}
        <section className="section">
          <div className="container">
            <div className="cta-panel">
              <div>
                <div className="eyebrow">Pricing</div>
                <h2>Every quote is tailored to your business.</h2>
                <p>We assess your specific environment, risks and requirements before recommending a solution. Contact us for a free consultation.</p>
              </div>
              <div className="cta-actions">
                <a className="btn btn-primary" href="https://wa.me/27646993670?text=Hello%20I%20would%20like%20to%20request%20a%20quote" target="_blank" rel="noreferrer">Request a Quote</a>
                <NavLink to="/contact" className="btn btn-secondary">Contact Us</NavLink>
              </div>
            </div>
          </div>
        </section>

        {/* CONFIDENTIALITY */}
        <section className="section section-alt">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Client Confidentiality</div>
              <h2>Security conversations stay private</h2>
              <p>DT3BZA Security treats client discussions, infrastructure details, risk findings and recommendations as confidential. Information shared during consultations, audits or assessments is handled professionally and never disclosed outside the client relationship.</p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section">
          <div className="container">
            <div className="cta-panel">
              <div>
                <div className="eyebrow">Free Strategy Review</div>
                <h2>Start with a short security conversation.</h2>
                <p>We review visible risks, discuss your environment and recommend the most suitable protection path for your business or facility.</p>
              </div>
              <div className="cta-actions">
                <a className="btn btn-primary" href="https://wa.me/27646993670?text=Hello%20I%20am%20interested%20in%20a%20security%20consultation" target="_blank" rel="noreferrer">WhatsApp Us</a>
                <NavLink to="/contact" className="btn btn-secondary">Contact Page</NavLink>
              </div>
            </div>
          </div>
        </section>

      </main>

      <a className="floating-whatsapp" href="https://wa.me/27646993670?text=Hello%20I%20am%20interested%20in%20your%20security%20services" target="_blank" rel="noreferrer">
        WhatsApp Us
      </a>

      <Footer />
    </div>
  );
}
