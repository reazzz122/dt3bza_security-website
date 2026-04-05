import { Header, Footer } from "./Layout.jsx";

export default function Contact() {
  return (
    <div className="page-shell">
      <Header />
      <main className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Contact</div>
            <h2>Request a consultation or quote</h2>
            <p>For the fastest response, contact us directly on WhatsApp or by email.</p>
          </div>
          <div className="cards-grid">
            <article className="info-card">
              <h3>WhatsApp</h3>
              <p>Best for quick consultations, CCTV quotes and urgent enquiries.</p>
              <a className="btn btn-primary" href="https://wa.me/27646993670?text=Hello%20I%20am%20interested%20in%20your%20security%20services" target="_blank" rel="noreferrer" style={{marginTop:16,display:'inline-flex'}}>Message on WhatsApp</a>
            </article>
            <article className="info-card">
              <h3>Email</h3>
              <p>Best for written project requests and formal discussions.</p>
              <a className="btn btn-secondary" href="mailto:info@dt3bza-security.com?subject=Security%20Inquiry" style={{marginTop:16,display:'inline-flex'}}>info@dt3bza-security.com</a>
            </article>
            <article className="info-card">
              <h3>Assessment Radius</h3>
              <p>Free on-site assessment within a 50km radius. Beyond 50km, call-out fees may apply.</p>
            </article>
          </div>
        </div>
      </main>
      <a className="floating-whatsapp" href="https://wa.me/27646993670" target="_blank" rel="noreferrer">WhatsApp Us</a>
      <Footer />
    </div>
  );
}
