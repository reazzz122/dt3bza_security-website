import { Header, Footer } from "./Layout.jsx";

export default function CCTV() {
  return (
    <div className="page-shell">
      <Header />
      <section className="hero-cinematic" style={{minHeight:'70vh'}}>
        <div className="hero-bg"/>
        <div className="hero-grid-lines"/>
        <div className="container hero-content fade-up">
          <div className="hero-eyebrow">Service 02</div>
          <h1 className="hero-title-cinematic">CCTV &amp;<br /><em>Surveillance.</em></h1>
          <p className="hero-subtitle">Professional camera installations, maintenance and upgrades. Free on-site assessment within 50km.</p>
          <div className="hero-actions-cine">
            <a className="btn-cine-primary" href="https://wa.me/27646993670?text=Hello%20I%20need%20a%20quote%20for%20CCTV%20or%20physical%20security%20installation" target="_blank" rel="noreferrer">Message for Quote</a>
          </div>
        </div>
      </section>

      <section className="section-cine">
        <div className="container">
          <div className="section-cine-header">
            <div className="section-eyebrow">What We Install</div>
            <h2 className="section-title-cine">Full-spectrum<br /><em>surveillance solutions.</em></h2>
          </div>
          <div className="feature-list">
            {[
              {n:"01",name:"CCTV Installation",desc:"Camera installations, recorder setup and surveillance expansion for business and school environments."},
              {n:"02",name:"Maintenance & Repairs",desc:"Ongoing support, troubleshooting, repairs and upgrades for existing surveillance systems."},
              {n:"03",name:"System Upgrades",desc:"Replace outdated equipment with modern HD or IP camera systems and NVR/DVR infrastructure."},
              {n:"04",name:"Assessment Radius",desc:"Free on-site assessment within 50km. Beyond 50km, call-out fees may apply."},
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

      <section className="cta-cine" style={{paddingTop:80}}>
        <div className="container">
          <h2 className="cta-cine-title">Quoted per<br /><em>site requirements.</em></h2>
          <a className="btn-cine-primary" href="https://wa.me/27646993670?text=Hello%20I%20need%20a%20quote%20for%20CCTV%20or%20physical%20security%20installation" target="_blank" rel="noreferrer">Message for Quote</a>
        </div>
      </section>

      <a className="floating-whatsapp" href="https://wa.me/27646993670" target="_blank" rel="noreferrer">WhatsApp Us</a>
      <Footer />
    </div>
  );
}
