import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Header, Footer } from "./Layout.jsx";
import QuoteWizard from "./QuoteWizard.jsx";

export default function Home() {
  const [showWizard, setShowWizard] = useState(false);

  return (
    <div className="page-shell">
      <Header />
      {showWizard && <QuoteWizard onClose={() => setShowWizard(false)} />}

      {/* HERO */}
      <section className="hero-cinematic">
        <div className="hero-bg" />
        <div className="hero-grid-lines" />
        <div className="container hero-content fade-up">
          <div className="hero-eyebrow">Western Cape · PSIRA Registered · Est. 2024</div>
          <h1 className="hero-title-cinematic">
            Protect what<br /><em>matters most.</em>
          </h1>
          <p className="hero-subtitle">
            DT3BZA Security delivers professional cybersecurity, CCTV surveillance
            and school security for businesses across the Western Cape.
            UNITI — our community safety platform — launches December 2026.
          </p>
          <div className="hero-actions-cine">
            <button className="btn-cine-primary" onClick={() => setShowWizard(true)}>
              Get a Quote →
            </button>
            <NavLink to="/dt3app" className="btn-cine-ghost">
              UNITI App — Coming Dec 2026 <span className="hero-arrow">→</span>
            </NavLink>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="logo-strip">
        <div className="container logo-strip-inner">
          <span className="logo-strip-label">Registered</span>
          <div className="logo-strip-divider" />
          <div className="logo-strip-items">
            <span className="logo-strip-item">CIPC</span>
            <span className="logo-strip-item">CSD</span>
            <span className="logo-strip-item">PSIRA</span>
            <span className="logo-strip-item">Level 1 B-BBEE EME</span>
            <span className="logo-strip-item">POPIA Compliant</span>
          </div>
        </div>
      </div>

      {/* STATS — only real ones */}
      <section className="stats-cine">
        <div className="container">
          <div className="stats-cine-grid">
            {[
              {num:"50km", label:"Free on-site assessment radius — no call-out fee within Western Cape"},
              {num:"3", label:"Service lines actively delivered: Cybersecurity, CCTV, School Security"},
              {num:"Dec '26", label:"UNITI community safety app launching on Google Play — join the waitlist"},
            ].map((s,i) => (
              <div className="stat-cine" key={i} style={{paddingLeft: i>0?'40px':'0'}}>
                <div className="stat-cine-num">{s.num}</div>
                <div className="stat-cine-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-cine" style={{padding:'0 0 2px'}}>
        <div className="product-grid">
          <div className="product-cell" style={{background:'linear-gradient(160deg,#0a0a14 0%,#050508 100%)'}}>
            <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 60% 50% at 80% 20%,rgba(100,120,220,0.08) 0%,transparent 70%)'}} />
            <div className="product-cell-content">
              <div className="product-cell-label">Service 01 · Available Now</div>
              <div className="product-cell-title">Cybersecurity</div>
              <div className="product-cell-desc">Vulnerability reviews, network hardening and protection planning. Delivered remotely. Quoted per engagement.</div>
              <NavLink to="/cybersecurity" style={{display:'inline-block',marginTop:16,fontSize:'0.8rem',color:'rgba(255,255,255,0.5)',borderBottom:'1px solid rgba(255,255,255,0.2)',paddingBottom:2}}>Learn more →</NavLink>
            </div>
          </div>

          <div className="product-cell" style={{background:'linear-gradient(160deg,#0a0f0a 0%,#050808 100%)'}}>
            <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 60% 50% at 20% 80%,rgba(75,232,160,0.06) 0%,transparent 70%)'}} />
            <div className="product-cell-content">
              <div className="product-cell-label">Service 02 · Available Now</div>
              <div className="product-cell-title">CCTV & Surveillance</div>
              <div className="product-cell-desc">Professional camera installation, maintenance and upgrades. Free assessment within 50km of Cape Town.</div>
              <NavLink to="/cctv" style={{display:'inline-block',marginTop:16,fontSize:'0.8rem',color:'rgba(255,255,255,0.5)',borderBottom:'1px solid rgba(255,255,255,0.2)',paddingBottom:2}}>Learn more →</NavLink>
            </div>
          </div>

          <div className="product-cell" style={{background:'linear-gradient(160deg,#0f0a0a 0%,#080505 100%)'}}>
            <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 60% 50% at 80% 80%,rgba(232,92,75,0.06) 0%,transparent 70%)'}} />
            <div className="product-cell-content">
              <div className="product-cell-label">Service 03 · Available Now</div>
              <div className="product-cell-title">School Security</div>
              <div className="product-cell-desc">Perimeter monitoring, entrance visibility and security planning for schools and educational facilities.</div>
              <NavLink to="/schools" style={{display:'inline-block',marginTop:16,fontSize:'0.8rem',color:'rgba(255,255,255,0.5)',borderBottom:'1px solid rgba(255,255,255,0.2)',paddingBottom:2}}>Learn more →</NavLink>
            </div>
          </div>

          <div className="product-cell" style={{background:'linear-gradient(160deg,#080a14 0%,#050508 100%)',minHeight:400}}>
            <div style={{position:'absolute',top:0,left:0,right:0,padding:'16px 24px',display:'flex',alignItems:'center',gap:10}}>
              <span style={{fontFamily:"'Share Tech Mono',monospace",fontSize:'0.55rem',letterSpacing:'0.2em',color:'#e8b84b',border:'1px solid rgba(232,184,75,0.3)',padding:'3px 8px'}}>IN DEVELOPMENT</span>
              <span style={{fontFamily:"'Share Tech Mono',monospace",fontSize:'0.55rem',color:'rgba(255,255,255,0.2)',letterSpacing:'0.1em'}}>LAUNCHING DEC 2026</span>
            </div>
            <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 70% 60% at 50% 50%,rgba(232,184,75,0.04) 0%,transparent 70%)'}} />
            <div className="product-cell-content">
              <div className="product-cell-label">Coming Soon · Android First</div>
              <div className="product-cell-title" style={{fontSize:'1.8rem'}}>UNITI — Community Safety Intelligence</div>
              <div className="product-cell-desc" style={{maxWidth:420}}>Africa's first real-time community safety platform. Live crime map, panic alerts, neighbourhood watch and private security integration. Western Cape launch December 2026.</div>
              <NavLink to="/dt3app" style={{display:'inline-block',marginTop:20,fontSize:'0.85rem',color:'rgba(232,184,75,0.7)',borderBottom:'1px solid rgba(232,184,75,0.3)',paddingBottom:2}}>Join the waitlist →</NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="section-cine">
        <div className="container">
          <div className="section-cine-header">
            <div className="section-eyebrow">Why DT3BZA</div>
            <h2 className="section-title-cine">Security that's actually<br /><em>structured.</em></h2>
            <p className="section-body">No generic packages. Every service is scoped after a free consultation. You pay for what you actually need.</p>
          </div>
          <div className="feature-list">
            {[
              {n:"01",name:"No Retainer Contracts",desc:"CCTV and physical security are quoted per job. Cybersecurity is scoped per engagement. No lock-in."},
              {n:"02",name:"Free On-Site Assessment",desc:"We assess your environment first — within 50km at no cost. You get a real quote, not a price list."},
              {n:"03",name:"Client Confidentiality",desc:"Security conversations stay private. Infrastructure details, findings and risks are never disclosed outside the client relationship."},
              {n:"04",name:"PSIRA Registered",desc:"Fully registered with PSIRA, CIPC and CSD. Tender-ready under FORTYXIS SECURITY trading identity."},
              {n:"05",name:"UNITI Platform — Coming",desc:"Building Africa's first community safety intelligence platform. Early partners get free access at launch."},
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
      <section className="section-cine" style={{borderTop:'1px solid rgba(255,255,255,0.08)'}}>
        <div className="container">
          <div className="section-cine-header">
            <div className="section-eyebrow">Industries</div>
            <h2 className="section-title-cine">Organisations we<br /><em>protect.</em></h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1px',background:'rgba(255,255,255,0.06)'}}>
            {[
              {t:"Law Firms", d:"Protect confidential client data and office environments."},
              {t:"Accounting Firms", d:"Secure financial data, systems and business access."},
              {t:"Schools", d:"Improve visibility, perimeter monitoring and campus safety."},
              {t:"Construction Sites", d:"Surveillance and monitoring to reduce theft and exposure."},
              {t:"Warehouses", d:"CCTV coverage and physical security across operations."},
              {t:"Security Companies", d:"Early access to UNITI platform for intelligence and dispatch."},
            ].map((ind,i) => (
              <div key={i} style={{background:'#000',padding:'36px 28px'}}>
                <div style={{fontSize:'1rem',fontWeight:700,color:'#fff',marginBottom:8}}>{ind.t}</div>
                <div style={{fontSize:'0.85rem',color:'rgba(255,255,255,0.4)',lineHeight:1.6}}>{ind.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-cine">
        <div className="container">
          <h2 className="cta-cine-title">
            Get a quote in<br /><em>under 2 minutes.</em>
          </h2>
          <p style={{fontSize:'1rem',color:'rgba(255,255,255,0.45)',marginBottom:36,maxWidth:480,lineHeight:1.7}}>
            Answer 5 questions. We'll call you back with a tailored proposal — no generic pricing, no pressure.
          </p>
          <div style={{display:'flex',gap:16,flexWrap:'wrap'}}>
            <button className="btn-cine-primary" onClick={() => setShowWizard(true)}>
              Start Quote Wizard →
            </button>
            <a className="btn-cine-ghost" href="https://wa.me/27769414251" target="_blank" rel="noreferrer">
              WhatsApp directly <span className="hero-arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      <a className="floating-whatsapp" href="https://wa.me/27769414251" target="_blank" rel="noreferrer">WhatsApp Us</a>
      <Footer />
    </div>
  );
}
