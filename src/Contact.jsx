import { Header, Footer } from "./Layout.jsx";

export default function Contact() {
  return (
    <div className="page-shell">
      <Header />
      <section className="hero-cinematic" style={{minHeight:'60vh'}}>
        <div className="hero-bg"/>
        <div className="hero-grid-lines"/>
        <div className="container hero-content fade-up">
          <div className="hero-eyebrow">Get in Touch</div>
          <h1 className="hero-title-cinematic">Request a<br /><em>consultation.</em></h1>
          <p className="hero-subtitle">For the fastest response, contact us directly on WhatsApp. Free consultation, no obligation.</p>
        </div>
      </section>

      <section className="section-cine">
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1px',background:'rgba(255,255,255,0.06)'}}>
            {[
              {label:"WhatsApp",title:"Fastest response",desc:"Best for quick consultations, CCTV quotes and urgent enquiries.",action:{text:"Message on WhatsApp",href:"https://wa.me/27646993670?text=Hello%20I%20am%20interested%20in%20your%20security%20services"}},
              {label:"Email",title:"Written requests",desc:"Best for formal project requests, proposals and written discussions.",action:{text:"info@dt3bza-security.com",href:"mailto:info@dt3bza-security.com?subject=Security%20Inquiry"}},
            ].map((c,i)=>(
              <div key={i} style={{background:'#000',padding:'48px'}}>
                <div style={{fontFamily:"'Share Tech Mono',monospace",fontSize:'0.62rem',letterSpacing:'0.25em',textTransform:'uppercase',color:'rgba(255,255,255,0.3)',marginBottom:12}}>{c.label}</div>
                <div style={{fontSize:'1.4rem',fontWeight:700,color:'#fff',marginBottom:10}}>{c.title}</div>
                <div style={{fontSize:'0.88rem',color:'rgba(255,255,255,0.45)',lineHeight:1.65,marginBottom:24}}>{c.desc}</div>
                <a className="btn-cine-primary" href={c.action.href} target="_blank" rel="noreferrer">{c.action.text}</a>
              </div>
            ))}
          </div>
          <div style={{marginTop:'1px',background:'rgba(255,255,255,0.06)'}}>
            <div style={{background:'#000',padding:'48px'}}>
              <div style={{fontFamily:"'Share Tech Mono',monospace",fontSize:'0.62rem',letterSpacing:'0.25em',textTransform:'uppercase',color:'rgba(255,255,255,0.3)',marginBottom:12}}>Assessment Radius</div>
              <div style={{fontSize:'1.4rem',fontWeight:700,color:'#fff',marginBottom:10}}>Free within 50km</div>
              <div style={{fontSize:'0.88rem',color:'rgba(255,255,255,0.45)',lineHeight:1.65}}>Free on-site assessment within a 50km radius. Beyond 50km, call-out fees may apply. Remote cybersecurity services available nationally.</div>
            </div>
          </div>
        </div>
      </section>

      <a className="floating-whatsapp" href="https://wa.me/27646993670" target="_blank" rel="noreferrer">WhatsApp Us</a>
      <Footer />
    </div>
  );
}
