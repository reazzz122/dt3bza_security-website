import { NavLink } from "react-router-dom";

export default function CCTV() {
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
            <div className="eyebrow">CCTV & Surveillance</div>
            <h2>Custom quotes for installations and site-based work</h2>
            <p>
              CCTV installations, surveillance maintenance, upgrades and physical
              security work are quoted individually based on site requirements.
            </p>
          </div>

          <div className="cards-grid">
            <article className="info-card">
              <h3>CCTV Installation</h3>
              <p>
                Camera installations, recorder setup and surveillance expansion
                for business and school environments.
              </p>
            </article>

            <article className="info-card">
              <h3>Maintenance & Repairs</h3>
              <p>
                Ongoing support, troubleshooting, repairs and upgrades for
                existing surveillance systems.
              </p>
            </article>

            <article className="info-card">
              <h3>Assessment Radius</h3>
              <p>
                Free on-site assessment applies within a 50km radius only.
                Beyond 50km, assessment or call-out fees may apply.
              </p>
            </article>
          </div>

          <div style={{ marginTop: "28px" }}>
            <a
              className="btn btn-primary"
              href="https://wa.me/27646993670?text=Hello%20I%20need%20a%20quote%20for%20CCTV%20or%20physical%20security%20installation"
              target="_blank"
              rel="noreferrer"
            >
              Message for Quote
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
