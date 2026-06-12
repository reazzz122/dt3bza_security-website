import { NavLink } from "react-router-dom";
import { Header, Footer } from "./Layout.jsx";

export default function Home() {
  return (
    <div className="page-shell">
      <Header />

      {/* HERO */}
      <section className="hero-cinematic">
        <div className="hero-bg" />
        <div className="hero-grid-lines" />
        <div className="container hero-content fade-up">
          <div className="hero-eyebrow">Western Cape · Est. 2024</div>
          <h1 className="hero-title-cinematic">
            Protect what<br /><em>matters most.</em>
          </h1>
          <p className="hero-subtitle">
            DT3BZA Security delivers cybersecurity, CCTV surveillance, school security
            and the DT3 Tactical Intelligence Platform — built for serious organisations.
          </p>
          <div className="hero-actions-cine">
            <a className="btn-cine-primary" href="https://wa.me/27646993670?text=Hello%20I%20am%20interested%20in%20your%20security%20services" target="_blank" rel="noreferrer">
              Request Consultation
            </a>
            <NavLink to="/dt3app" className="btn-cine-ghost">
              Explore DT3 App <span className="hero-arrow">→</span>
            </NavLink>
          </div>
        </div>
      </section>

      {/* LOGO STRIP */}
      <div className="logo-strip">
        <div className="container logo-strip-inner">
          <span className="logo-strip-label">Trusted by</span>
          <div className="logo-strip-divider" />
          <div className="logo-strip-items">
            <span className="logo-strip-item">DT3BZA Security</span>
            <span className="logo-strip-item">FHTE Solutions</span>
            <span className="logo-strip-item">FKN Solutions</span>
            <span className="logo-strip-item">Fortyxis Security</span>
          </div>
        </div>
      </div>

      {/* STATS */}
      <section className="stats-cine">
        <div className="container">
          <div className="stats-cine-grid">
            {[
              {num:"50km+", label:"Free on-site assessment radius across the Western Cape"},
              {num:"4", label:"Active security companies running on the DT3 platform"},
              {num:"24/7", label:"Live tactical intelligence and panic alert monitoring"},
            ].map((s,i) => (
              <div className="stat-cine" key={i} style={{paddingLeft: i>0?'40px':'0'}}>
                <div className="stat-cine-num">{s.num}</div>
                <div className="stat-cine-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PRODUCT GRID */}
      <section className="section-cine" style={{padding:'0 0 2px'}}>
        <div className="product-grid">
          {/* Cybersecurity */}
          <div className="product-cell" style={{background:'linear-gradient(160deg,#0a0a14 0%,#050508 100%)'}}>
            <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 60% 50% at 80% 20%,rgba(100,120,220,0.08) 0%,transparent 70%)'}} />
            <div className="product-cell-content">
              <div className="product-cell-label">Service 01</div>
              <div className="product-cell-title">Cybersecurity</div>
              <div className="product-cell-desc">Vulnerability reviews, network hardening and protection planning for businesses that cannot afford to be compromised.</div>
              <NavLink to="/cybersecurity" style={{display:'inline-block',marginTop:16,fontSize:'0.8rem',color:'rgba(255,255,255,0.5)',borderBottom:'1px solid rgba(255,255,255,0.2)',paddingBottom:2}}>Learn more →</NavLink>
            </div>
          </div>

          {/* CCTV */}
          <div className="product-cell" style={{background:'linear-gradient(160deg,#0a0f0a 0%,#050808 100%)'}}>
            <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 60% 50% at 20% 80%,rgba(75,232,160,0.06) 0%,transparent 70%)'}} />
            <div className="product-cell-content">
              <div className="product-cell-label">Service 02</div>
              <div className="product-cell-title">CCTV & Surveillance</div>
              <div className="product-cell-desc">Professional camera installation, maintenance and upgrades for businesses, schools and facilities across the Western Cape.</div>
              <NavLink to="/cctv" style={{display:'inline-block',marginTop:16,fontSize:'0.8rem',color:'rgba(255,255,255,0.5)',borderBottom:'1px solid rgba(255,255,255,0.2)',paddingBottom:2}}>Learn more →</NavLink>
            </div>
          </div>

          {/* School Security */}
          <div className="product-cell" style={{background:'linear-gradient(160deg,#0f0a0a 0%,#080505 100%)'}}>
            <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 60% 50% at 80% 80%,rgba(232,92,75,0.06) 0%,transparent 70%)'}} />
            <div className="product-cell-content">
              <div className="product-cell-label">Service 03</div>
              <div className="product-cell-title">School Security</div>
              <div className="product-cell-desc">Perimeter monitoring, entrance visibility and security planning designed for educational environments.</div>
              <NavLink to="/schools" style={{display:'inline-block',marginTop:16,fontSize:'0.8rem',color:'rgba(255,255,255,0.5)',borderBottom:'1px solid rgba(255,255,255,0.2)',paddingBottom:2}}>Learn more →</NavLink>
            </div>
          </div>

          {/* DT3 App — wide */}
          <div className="product-cell" style={{background:'linear-gradient(160deg,#080a14 0%,#050508 100%)',minHeight:480}}>
            <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 70% 60% at 50% 50%,rgba(192,200,216,0.05) 0%,transparent 70%)'}} />
            <div className="product-cell-content">
              <div className="product-cell-label">Platform</div>
              <div className="product-cell-title" style={{fontSize:'1.8rem'}}>DT3 Tactical Intelligence App</div>
              <div className="product-cell-desc" style={{maxWidth:420}}>Real-time crime intelligence, live dispatch, panic alerts, guard tours and community neighbourhood watch — built for private security companies in the Western Cape.</div>
              <NavLink to="/dt3app" style={{display:'inline-block',marginTop:20,fontSize:'0.85rem',color:'rgba(255,255,255,0.6)',borderBottom:'1px solid rgba(255,255,255,0.25)',paddingBottom:2}}>Explore the platform →</NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* DT3 APP FEATURE LIST */}
      <section className="section-cine">
        <div className="container">
          <div className="section-cine-header">
            <div className="section-eyebrow">DT3 Platform</div>
            <h2 className="section-title-cine">Everything a security<br /><em>company needs.</em></h2>
            <p className="section-body">One platform replaces WhatsApp groups, paper registers and separate dispatch systems.</p>
          </div>
          <div className="feature-list">
            {[
              {n:"01", name:"Live Incident Map", desc:"Real-time crime pins, heatmaps and unit tracking across Western Cape. Filter by incident type, severity and time."},
              {n:"02", name:"Panic Button", desc:"Officers send GPS emergency alerts to all dispatchers in one tap. Nearest unit automatically flagged."},
              {n:"03", name:"Shift Management", desc:"Officers clock in and out. Dispatchers see all active shifts. Weekly summary reports generated automatically."},
              {n:"04", name:"Guard Tour QR", desc:"Officers scan QR codes at checkpoints. Time-stamped verification logs prove patrols happened."},
              {n:"05", name:"Crime Intelligence", desc:"Pattern detection, zone risk scores, 24h frequency charts and AI-powered hotspot predictions."},
              {n:"06", name:"Community Watch", desc:"Neighbourhood watch intelligence feeds. Public users report incidents and share alerts with their area."},
            ].map((f,i) => (
              <div className="feature-row" key={i}>
                <div className="feature-num">{f.n}</div>
                <div className="feature-name">{f.name}</div>
                <div className="feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section-cine" style={{borderTop:'1px solid rgba(255,255,255,0.08)',paddingTop:120}}>
        <div className="container">
          <div className="section-cine-header">
            <div className="section-eyebrow">Industries</div>
            <h2 className="section-title-cine">Built for organisations<br /><em>that need protection.</em></h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1px',background:'rgba(255,255,255,0.06)'}}>
            {[
              {t:"Law Firms", d:"Protect confidential client data and systems."},
              {t:"Accounting Firms", d:"Secure financial data and business infrastructure."},
              {t:"Schools", d:"Improve visibility, monitoring and campus safety."},
              {t:"Construction", d:"Strengthen site visibility and reduce exposure."},
              {t:"Warehouses", d:"Surveillance and physical security across operations."},
              {t:"Security Companies", d:"Live intelligence, dispatch and officer management via DT3."},
            ].map((ind,i) => (
              <div key={i} style={{background:'#000',padding:'36px 28px'}}>
                <div style={{fontSize:'1rem',fontWeight:700,color:'#fff',marginBottom:8,letterSpacing:'-0.01em'}}>{ind.t}</div>
                <div style={{fontSize:'0.85rem',color:'rgba(255,255,255,0.4)',lineHeight:1.6}}>{ind.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-cine">
        <div className="container">
          <h2 className="cta-cine-title">
            Start with a free<br /><em>security conversation.</em>
          </h2>
          <div style={{display:'flex',gap:16,flexWrap:'wrap'}}>
            <a className="btn-cine-primary" href="https://wa.me/27646993670?text=Hello%20I%20am%20interested%20in%20a%20security%20consultation" target="_blank" rel="noreferrer">
              WhatsApp Us
            </a>
            <NavLink to="/contact" className="btn-cine-ghost">
              Contact Page <span className="hero-arrow">→</span>
            </NavLink>
          </div>
        </div>
      </section>

      <a className="floating-whatsapp" href="https://wa.me/27646993670" target="_blank" rel="noreferrer">WhatsApp Us</a>
      <Footer />
    </div>
  );
}
