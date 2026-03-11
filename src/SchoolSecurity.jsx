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
            <div className="eyebrow">School Security</div>
            <h1 className="page-title">Safer environments for learners, staff, and school property.</h1>
            <p>
              Dt3bza Security supports educational institutions with stronger
              visibility, better entrance monitoring, and practical surveillance solutions.
            </p>
          </div>

          <div className="cards-grid">
            <article className="info-card">
              <h3>Gate Monitoring</h3>
              <p>Improve control and visibility at main access points.</p>
            </article>
            <article className="info-card">
              <h3>Perimeter Coverage</h3>
              <p>Reduce blind spots across school grounds and important boundaries.</p>
            </article>
            <article className="info-card">
              <h3>Corridor & Building Surveillance</h3>
              <p>Support safer monitoring in school buildings and movement areas.</p>
            </article>
            <article className="info-card">
              <h3>Existing System Upgrades</h3>
              <p>Improve older installations with better coverage and support.</p>
            </article>
            <article className="info-card">
              <h3>Maintenance Support</h3>
              <p>Keep surveillance systems operational and reliable.</p>
            </article>
            <article className="info-card">
              <h3>Security Reviews</h3>
              <p>Assess visible risks and recommend suitable improvements.</p>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}
