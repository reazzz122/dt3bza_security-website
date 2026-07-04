import { Header, Footer } from "./Layout.jsx";

export default function Contact() {
  return (
    <div className="page-shell">
      <Header />
      <section className="hero-cinematic" style={{minHeight:"60vh"}}>
        <div className="hero-bg"/>
        <div className="hero-grid-lines"/>
        <div className="container hero-content fade-up">
          <div className="hero-eyebrow">Get in Touch</div>
          <h1 className="hero-title-cinematic">Request a<br /><em>consultation.</em></h1>
          <p className="hero-subtitle">Free consultation, no obligation. Tebogo responds personally — usually within 2 hours on WhatsApp.</p>
        </div>
      </section>

      <section className="section-cine">
        <div className="container">
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1px",background:"rgba(255,255,255,0.06)"}}>
            <div style={{background:"#000",padding:"48px"}}>
              <div style={{fontFamily:"'Share Tech Mono',monospace",fontSize:"0.62rem",letterSpacing:"0.25em",textTransform:"uppercase",color:"rgba(255,255,255,0.3)",marginBottom:12}}>WhatsApp</div>
              <div style={{fontSize:"1.4rem",fontWeight:700,color:"#fff",marginBottom:10}}>Fastest response</div>
              <div style={{fontSize:"0.88rem",color:"rgba(255,255,255,0.45)",lineHeight:1.65,marginBottom:24}}>Best for CCTV quotes, urgent enquiries and quick consultations. Tebogo responds personally.</div>
              <a className="btn-cine-primary" href="https://wa.me/27684861332?text=Hello%20I%20am%20interested%20in%20your%20security%20services" target="_blank" rel="noreferrer">+27 68 486 1332</a>
            </div>
            <div style={{background:"#000",padding:"48px"}}>
              <div style={{fontFamily:"'Share Tech Mono',monospace",fontSize:"0.62rem",letterSpacing:"0.25em",textTransform:"uppercase",color:"rgba(255,255,255,0.3)",marginBottom:12}}>Email</div>
              <div style={{fontSize:"1.4rem",fontWeight:700,color:"#fff",marginBottom:10}}>Written requests</div>
              <div style={{fontSize:"0.88rem",color:"rgba(255,255,255,0.45)",lineHeight:1.65,marginBottom:24}}>For formal proposals, tenders and written project briefs.</div>
              <a className="btn-cine-primary" href="mailto:info@dt3bza-security.com?subject=Security%20Inquiry">info@dt3bza-security.com</a>
            </div>
          </div>
          <div style={{marginTop:"1px",background:"rgba(255,255,255,0.06)"}}>
            <div style={{background:"#000",padding:"48px"}}>
              <div style={{fontFamily:"'Share Tech Mono',monospace",fontSize:"0.62rem",letterSpacing:"0.25em",textTransform:"uppercase",color:"rgba(255,255,255,0.3)",marginBottom:12}}>On-Site Assessment</div>
              <div style={{fontSize:"1.4rem",fontWeight:700,color:"#fff",marginBottom:10}}>Free within 50km</div>
              <div style={{fontSize:"0.88rem",color:"rgba(255,255,255,0.45)",lineHeight:1.65}}>Free on-site security assessment within 50km of Cape Town. Tebogo van Rooyen assesses your environment personally and recommends the right solution — no salespeople, no pressure.</div>
            </div>
          </div>
        </div>
      </section>

      <a className="floating-whatsapp" href="https://wa.me/27684861332" target="_blank" rel="noreferrer">WhatsApp Tebogo</a>
      <Footer />
    </div>
  );
}
