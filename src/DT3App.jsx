import { NavLink } from "react-router-dom";
import { Header, Footer } from "./Layout.jsx";

export default function DT3App() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <section className="hero-section">
          <div className="container">
            <div className="eyebrow">Mobile Intelligence Platform</div>
            <h1 className="hero-title" style={{maxWidth:700}}>
              DT3 Tactical<br /><span>Intelligence App</span>
            </h1>
            <p className="hero-copy">
              Built by DT3BZA Security for private security companies in the Western Cape.
              Real-time crime intelligence, live dispatch, panic alerts and community
              neighbourhood watch — all in one professional platform.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="https://wa.me/27646993670?text=Hello%20I%20want%20to%20register%20my%20company%20on%20DT3" target="_blank" rel="noreferrer">
                Register Your Company
              </a>
              <a className="btn btn-secondary" href="https://wa.me/27646993670?text=Hello%20I%20want%20to%20download%20the%20DT3%20app" target="_blank" rel="noreferrer">
                Download the App
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Core Features</div>
              <h2>Everything a security company needs</h2>
              <p>DT3 replaces WhatsApp groups, paper registers and separate dispatch systems with one live platform.</p>
            </div>
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
