import { NavLink } from "react-router-dom";

export default function SchoolSecurity() {
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
            <div className="eyebrow">School Security</div>
            <h2>Safer educational environments through better visibility</h2>
            <p>
              We support schools with surveillance coverage, perimeter
              monitoring, entrance visibility and improved security planning.
            </p>
          </div>

          <div className="cards-grid">
            <article className="info-card">
              <h3>Perimeter Coverage</h3>
              <p>Improve visibility around boundaries and external areas.</p>
            </article>

            <article className="info-card">
              <h3>Entrance Monitoring</h3>
              <p>Better oversight for gates, entrances and access points.</p>
            </article>

            <article className="info-card">
              <h3>Custom Quotes</h3>
              <p>
                School security work is quoted based on site layout,
                infrastructure and system requirements.
              </p>
            </article>
          </div>

          <div style={{ marginTop: "28px" }}>
            <a
              className="btn btn-primary"
              href="https://wa.me/27646993670?text=Hello%20I%20need%20a%20school%20security%20quote"
              target="_blank"
              rel="noreferrer"
            >
              Request School Security Quote
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
