import { Header, Footer } from "./Layout.jsx";

export default function Cybersecurity() {
  return (
    <div className="page-shell">
      <Header />
      <section className="hero-cinematic" style={{minHeight:'70vh'}}>
        <div className="hero-bg"/>
        <div className="hero-grid-lines"/>
        <div className="container hero-content fade-up">
          <div className="hero-eyebrow">Service 01</div>
          <h1 className="hero-title-cinematic">Cybersecurity<br /><em>Protection.</em></h1>
          <p className="hero-subtitle">Digital security services delivered remotely. Every engagement scoped individually after a free consultation.</p>
          <div className="hero-actions-cine">
            <a className="btn-cine-primary" href="https://wa.me/27646993670?text=Hello%20I%20would%20like%20to%20request%20a%20cybersecurity%20quote" target="_blank" rel="noreferrer">Request a Quote</a>
          </div>
        </div>
      </section>

      <section className="section-cine">
        <div className="container">
          <div className="section-cine-header">
            <div className="section-eyebrow">What We Do</div>
            <h2 className="section-title-cine">Professional protection<br /><em>for real environments.</em></h2>
          </div>
          <div className="feature-list">
            {[
              {n:"01",name:"Security Assessment",desc:"Vulnerability review and security report tailored to your systems, networks and business environment."},
              {n:"02",name:"Network Security Review",desc:"Internal security posture, exposure areas and access control across your network infrastructure."},
              {n:"03",name:"Business Protection",desc:"Hardening, scanning and ongoing protection planning for businesses that need stronger security."},
              {n:"04",name:"Enterprise Security Audit",desc:"Full audit, consulting and long-term protection planning for complex or high-risk environments."},
              {n:"05",name:"Risk Reviews",desc:"Identify weaknesses across systems, devices and workflows before they can be exploited."},
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
          <h2 className="cta-cine-title">Every quote is<br /><em>tailored to you.</em></h2>
          <div style={{display:'flex',gap:16,flexWrap:'wrap'}}>
            <a className="btn-cine-primary" href="https://wa.me/27646993670?text=Hello%20I%20would%20like%20to%20request%20a%20cybersecurity%20quote" target="_blank" rel="noreferrer">Request a Quote</a>
            <a className="btn-cine-ghost" href="mailto:info@dt3bza-security.com?subject=Cybersecurity%20Quote%20Request">Email Us <span className="hero-arrow">→</span></a>
          </div>
        </div>
      </section>

      <a className="floating-whatsapp" href="https://wa.me/27646993670" target="_blank" rel="noreferrer">WhatsApp Us</a>
      <Footer />
    </div>
  );
}
