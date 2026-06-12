import { NavLink } from "react-router-dom";
import { Header, Footer } from "./Layout.jsx";

export default function DT3App() {
  return (
    <div className="page-shell">
      <Header />

      {/* HERO */}
      <section className="hero-cinematic">
        <div className="hero-bg" />
        <div className="hero-grid-lines" />
        <div className="container hero-content fade-up">
          <div className="hero-eyebrow">Mobile Intelligence Platform</div>
          <h1 className="hero-title-cinematic">
            DT3 Tactical<br /><em>Intelligence App.</em>
          </h1>
          <p className="hero-subtitle">
            Built by DT3BZA Security for private security companies in the Western Cape.
            Real-time crime intelligence, live dispatch, panic alerts and community watch.
          </p>
          <div className="hero-actions-cine">
            <a className="btn-cine-primary" href="https://wa.me/27646993670?text=Hello%20I%20want%20to%20register%20my%20company%20on%20DT3" target="_blank" rel="noreferrer">
              Register Your Company
            </a>
            <a className="btn-cine-ghost" href="https://wa.me/27646993670?text=Hello%20I%20want%20to%20download%20the%20DT3%20app" target="_blank" rel="noreferrer">
              Download the App <span className="hero-arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* LIVE SCREEN */}
      <section className="app-section-cine">
        <div className="container app-grid-cine">
          <div>
            <div className="section-eyebrow">Live Operations</div>
            <h2 className="section-title-cine">Real-time across<br /><em>Western Cape.</em></h2>
            <p className="section-body">Every incident pinned. Every officer tracked. Every dispatcher connected. All in one screen.</p>
            <div style={{marginTop:36,display:'flex',gap:12,flexWrap:'wrap'}}>
              <a className="btn-cine-primary" href="https://wa.me/27646993670?text=Hello%20I%20want%20to%20register%20my%20company%20on%20DT3" target="_blank" rel="noreferrer">Register Now</a>
            </div>
          </div>
          <div className="app-screen-cine">
            <div className="app-topbar-cine">
              <div>
                <div className="app-logo-cine">DT3</div>
                <div className="app-sub-cine">WESTERN CAPE</div>
              </div>
              <div className="live-pill"><span className="live-dot"/>LIVE</div>
            </div>
            <div className="app-stats-cine">
              {[{v:"4",l:"ACTIVE",c:"#e85c4b"},{v:"2",l:"CRITICAL",c:"#9b4be8"},{v:"4",l:"ON DUTY",c:"#4be8a0"},{v:"1",l:"CLOSED",c:"#e8b84b"}].map((s,i)=>(
                <div className="app-stat-cine" key={i}>
                  <div className="app-stat-val-cine" style={{color:s.c}}>{s.v}</div>
                  <div className="app-stat-lbl-cine">{s.l}</div>
                </div>
              ))}
            </div>
            {[
              {id:"INC-2847",title:"Robbery",area:"Cape Town CBD",sev:"CRITICAL",sevColor:"#e85c4b",ac:"#e85c4b"},
              {id:"INC-2846",title:"Hijacking",area:"N2 Highway",sev:"IN-PROGRESS",sevColor:"#e8b84b",ac:"#9b4be8"},
              {id:"INC-2845",title:"Assault",area:"Bellville",sev:"HIGH",sevColor:"#e8b84b",ac:"#e8b84b"},
            ].map((inc,i)=>(
              <div className="app-inc-cine" key={i}>
                <div className="inc-accent-cine" style={{background:inc.ac}}/>
                <div style={{flex:1}}>
                  <span className="inc-id-cine">{inc.id}</span>
                  <div className="inc-title-cine">{inc.title}</div>
                  <div className="inc-area-cine">{inc.area}</div>
                </div>
                <div className="inc-badge-cine" style={{color:inc.sevColor,borderColor:inc.sevColor}}>{inc.sev}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section-cine" style={{borderTop:'1px solid rgba(255,255,255,0.08)'}}>
        <div className="container">
          <div className="section-cine-header">
            <div className="section-eyebrow">Core Features</div>
            <h2 className="section-title-cine">Everything a security<br /><em>company needs.</em></h2>
          </div>
          <div className="feature-list">
            {[
              {n:"01",name:"Live Incident Map",desc:"Real-time crime pins, heatmaps and unit tracking. Filter by type, severity and time."},
              {n:"02",name:"Panic Button",desc:"Officers send GPS emergency alerts to all dispatchers in one tap. Nearest unit flagged instantly."},
              {n:"03",name:"Smart Incident Reporting",desc:"Auto-tagged by type and severity. Evidence uploads. Saved directly to your company database."},
              {n:"04",name:"Shift Management",desc:"Clock in/out. Dispatchers see all active shifts. Weekly reports auto-generated."},
              {n:"05",name:"Guard Tour QR",desc:"Scan QR codes at checkpoints. Time-stamped verification logs that prove patrols happened."},
              {n:"06",name:"Crime Intelligence",desc:"Pattern detection, zone risk scores, 24h charts and AI-powered hotspot predictions."},
              {n:"07",name:"Communities",desc:"Neighbourhood watch feeds. Public users report incidents and share alerts with their area."},
              {n:"08",name:"Role-Based Access",desc:"Public User, Security Officer, Dispatcher, Company Admin — each sees only what they need."},
            ].map((f,i)=>(
              <div className="feature-row" key={i}>
                <div className="feature-num">{f.n}</div>
                <div className="feature-name">{f.name}</div>
                <div className="feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTERED COMPANIES */}
      <section className="section-cine" style={{borderTop:'1px solid rgba(255,255,255,0.08)'}}>
        <div className="container">
          <div className="section-cine-header">
            <div className="section-eyebrow">On the Platform</div>
            <h2 className="section-title-cine">Companies running<br /><em>on DT3.</em></h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1px',background:'rgba(255,255,255,0.06)',maxWidth:600}}>
            {[
              {name:"DT3BZA Security",role:"Platform Owner"},
              {name:"FHTE Solutions",role:"Technology Partner"},
              {name:"FKN Solutions",role:"Field Operations"},
            ].map((c,i)=>(
              <div key={i} style={{background:'#000',padding:'28px'}}>
                <div style={{fontSize:'0.95rem',fontWeight:700,color:'#fff',marginBottom:6}}>{c.name}</div>
                <div style={{fontSize:'0.78rem',color:'rgba(255,255,255,0.35)'}}>{c.role}</div>
              </div>
            ))}
          </div>
          <div style={{marginTop:40}}>
            <a className="btn-cine-primary" href="https://wa.me/27646993670?text=Hello%20I%20want%20to%20register%20my%20company%20on%20DT3" target="_blank" rel="noreferrer">Register Your Company</a>
          </div>
        </div>
      </section>

      <a className="floating-whatsapp" href="https://wa.me/27646993670" target="_blank" rel="noreferrer">WhatsApp Us</a>
      <Footer />
    </div>
  );
}            </div>
            <div className="cards-grid">
              {[
                {icon:"🗺️",title:"Live Incident Map",desc:"Real-time crime pins, heatmaps and unit tracking across Western Cape. Filter by incident type, severity and time."},
                {icon:"🚨",title:"Panic Button",desc:"Officers send GPS emergency alerts to all dispatchers in one tap. Nearest unit automatically flagged."},
                {icon:"📋",title:"Smart Incident Reporting",desc:"Auto-tagged by type and severity. Duplicate detection. Evidence uploads. Saved directly to your company database."},
                {icon:"⏱",title:"Shift Management",desc:"Officers clock in and out. Dispatchers see all active shifts. Weekly summary reports generated automatically."},
                {icon:"✓", title:"Guard Tour QR",desc:"Officers scan QR codes at checkpoints. Time-stamped verification logs prove patrols happened."},
                {icon:"🏘️",title:"Communities",desc:"Neighbourhood watch intelligence feeds. Public users report incidents and share alerts with their area."},
                {icon:"📊",title:"Crime Intelligence",desc:"Pattern detection, zone risk scores, 24h frequency charts and AI-powered hotspot predictions."},
                {icon:"📷",title:"CCTV Integration",desc:"Connect your camera systems directly to DT3. Live feeds, motion alerts and clip retrieval. Coming soon."},
                {icon:"🔐",title:"Role-Based Access",desc:"Public User, Security Officer, Dispatcher and Company Admin — each role sees only what they need."},
              ].map((f,i) => (
                <article className="info-card" key={i}>
                  <div style={{fontSize:'1.8rem',marginBottom:10}}>{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Company Registration</div>
              <h2>Register your security company on DT3</h2>
              <p>Companies currently registered on DT3:</p>
            </div>
            <div className="cards-grid" style={{gridTemplateColumns:'repeat(3,1fr)',maxWidth:600}}>
              {[
                {name:"DT3BZA Security",role:"Platform Owner",color:"#c0c8d8"},
                {name:"FHTE Solutions", role:"Technology Partner",color:"#4b9fe8"},
                {name:"FKN Solutions",  role:"Field Operations",color:"#e8b84b"},
              ].map((c,i) => (
                <div key={i} className="info-card" style={{textAlign:'center',borderColor:c.color+'44'}}>
                  <div style={{width:44,height:44,borderRadius:8,background:c.color+'22',border:`1px solid ${c.color}`,display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 10px',fontFamily:"'Rajdhani',sans-serif",fontWeight:900,color:c.color,fontSize:'1rem'}}>
                    {c.name.substring(0,2)}
                  </div>
                  <h3 style={{fontSize:'0.85rem',color:c.color}}>{c.name}</h3>
                  <p style={{fontSize:'0.78rem'}}>{c.role}</p>
                </div>
              ))}
            </div>
            <div style={{marginTop:28}}>
              <a className="btn btn-primary" href="https://wa.me/27646993670?text=Hello%20I%20want%20to%20register%20my%20company%20on%20DT3" target="_blank" rel="noreferrer">
                Register Your Company
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="cta-panel">
              <div>
                <div className="eyebrow">Get Started</div>
                <h2>Ready to bring DT3 to your security operations?</h2>
                <p>Contact us on WhatsApp to register your company and get your team set up on the platform.</p>
              </div>
              <div className="cta-actions">
                <a className="btn btn-primary" href="https://wa.me/27646993670?text=Hello%20I%20want%20to%20get%20DT3%20for%20my%20security%20company" target="_blank" rel="noreferrer">
                  WhatsApp Us
                </a>
                <NavLink to="/contact" className="btn btn-secondary">Contact Page</NavLink>
              </div>
            </div>
          </div>
        </section>
      </main>
      <a className="floating-whatsapp" href="https://wa.me/27646993670" target="_blank" rel="noreferrer">WhatsApp Us</a>
      <Footer />
    </div>
  );
}
