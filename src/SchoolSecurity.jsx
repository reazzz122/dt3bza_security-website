import { Header, Footer } from "./Layout.jsx";

export default function SchoolSecurity() {
  return (
    <div className="page-shell">
      <Header />
      <section className="hero-cinematic" style={{minHeight:'70vh'}}>
        <div className="hero-bg"/>
        <div className="hero-grid-lines"/>
        <div className="container hero-content fade-up">
          <div className="hero-eyebrow">Service 03</div>
          <h1 className="hero-title-cinematic">School<br /><em>Security.</em></h1>
          <p className="hero-subtitle">Safer educational environments through better visibility, monitoring and perimeter control.</p>
          <div className="hero-actions-cine">
            <a className="btn-cine-primary" href="https://wa.me/27646993670?text=Hello%20I%20need%20a%20school%20security%20quote" target="_blank" rel="noreferrer">Request School Quote</a>
          </div>
        </div>
      </section>

      <section className="section-cine">
        <div className="container">
          <div className="section-cine-header">
            <div className="section-eyebrow">Solutions</div>
            <h2 className="section-title-cine">Protection built<br /><em>for education.</em></h2>
          </div>
          <div className="feature-list">
            {[
              {n:"01",name:"Perimeter Coverage",desc:"Improve visibility around boundaries and external areas to detect threats before they reach students."},
              {n:"02",name:"Entrance Monitoring",desc:"Better oversight for gates, entrances and access points with camera coverage and access control."},
              {n:"03",name:"Custom Site Quotes",desc:"School security is quoted based on layout and specific system requirements after a free assessment."},
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
          <h2 className="cta-cine-title">Safer schools<br /><em>start here.</em></h2>
          <a className="btn-cine-primary" href="https://wa.me/27646993670?text=Hello%20I%20need%20a%20school%20security%20quote" target="_blank" rel="noreferrer">Request School Quote</a>
        </div>
      </section>

      <a className="floating-whatsapp" href="https://wa.me/27646993670" target="_blank" rel="noreferrer">WhatsApp Us</a>
      <Footer />
    </div>
  );
}
