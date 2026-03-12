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
              <span>Cybersecurity, Surveillance & Business Protection</span>
            </div>
          </NavLink>

          <nav className="main-nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/cybersecurity">Cybersecurity</NavLink>
            <NavLink to="/cctv">CCTV</NavLink>
            <NavLink to="/schools">School Security</NavLink>
            <NavLink to="/contact" className="nav-cta">
              Contact
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="inner-page">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Contact</div>
            <h1 className="page-title">Book a security consultation</h1>
            <p>
              Contact Dt3bza Security to discuss cybersecurity, CCTV systems,
              school security or general business protection solutions.
            </p>
          </div>

          <div className="cards-grid">
            <article className="info-card">
              <h3>WhatsApp</h3>
              <p>The fastest way to reach us.</p>

              <a
                className="btn btn-primary"
                href="https://wa.me/27646993670"
                target="_blank"
                rel="noreferrer"
              >
                Message on WhatsApp
              </a>
            </article>

            <article className="info-card">
              <h3>Email</h3>
              <p>Send us a detailed enquiry.</p>

              <a
                className="btn btn-secondary"
                href="mailto:info@dt3bza-security.com"
              >
                info@dt3bza-security.com
              </a>
            </article>

            <article className="info-card">
              <h3>Phone</h3>
              <p>Call our team directly.</p>
              <p>068 486 1332</p>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}
