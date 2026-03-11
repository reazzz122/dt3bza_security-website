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
            <h1 className="page-title">Book a security consultation.</h1>
            <p>
              Use WhatsApp or email to discuss cybersecurity, CCTV, school security,
              upgrades, maintenance, or a general business security review.
            </p>
          </div>

          <div className="contact-panel">
            <div className="info-card">
              <h3>WhatsApp</h3>
              <p>Fastest way to reach Dt3bza Security.</p>
              <a
                className="btn btn-primary"
                href="https://wa.me/27646993670?text=Hello%20I%20am%20interested%20in%20your%20security%20services"
                target="_blank"
                rel="noreferrer"
              >
                Message on WhatsApp
              </a>
            </div>

            <div className="info-card">
              <h3>Email</h3>
              <p>Use email for formal business enquiries and quotes.</p>
              <a className="btn btn-secondary" href="mailto:info@dt3bza-security.com">
                info@dt3bza-security.com
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
