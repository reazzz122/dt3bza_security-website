import { NavLink } from "react-router-dom";

export default function Contact() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="container header-inner">
          <NavLink to="/" className="brand">
            <img src="/logo.png" alt="Dt3bza Security" className="brand-logo" />
            <div className="brand-text">
              <strong>Dt3bza Security</strong>
              <span>Cybersecurity • Surveillance • Business Protection</span>
            </div>
          </NavLink>

          <nav className="main-nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/cybersecurity">Cybersecurity</NavLink>
            <NavLink to="/cctv">CCTV</NavLink>
            <NavLink to="/schools">Schools</NavLink>
            <NavLink to="/contact" className="nav-cta">
              Contact
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Contact</div>
            <h2>Request a consultation or quote</h2>
            <p>
              For the fastest response, contact us directly on WhatsApp or by
              email.
            </p>
          </div>

          <div className="cards-grid">
            <article className="info-card">
              <h3>WhatsApp</h3>
              <p>Best for quick consultations, CCTV quotes and urgent enquiries.</p>
              <a
                className="btn btn-primary"
                href="https://wa.me/27646993670?text=Hello%20I%20am%20interested%20in%20your%20security%20services"
                target="_blank"
                rel="noreferrer"
              >
                Message on WhatsApp
              </a>
            </article>

            <article className="info-card">
              <h3>Email</h3>
              <p>Best for written project requests and formal discussions.</p>
              <a
                className="btn btn-secondary"
                href="mailto:info@dt3bza-security.com?subject=Security%20Inquiry"
              >
                info@dt3bza-security.com
              </a>
            </article>

            <article className="info-card">
              <h3>Assessment Radius</h3>
              <p>
                Free on-site assessment applies within a 50km radius only.
                Beyond 50km, assessment or call-out fees may apply.
              </p>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}
