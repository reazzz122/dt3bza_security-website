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
            <h1 className="page-title">
              Safer environments for learners, staff, and school property.
            </h1>
            <p>
              Dt3bza Security supports educational institutions with stronger
              visibility, entrance monitoring, perimeter coverage and reliable
              surveillance systems.
            </p>
          </div>

          <div className="cards-grid">
            <article className="info-card">
              <h3>Gate Monitoring</h3>
              <p>Improve control and monitoring at main school entrances.</p>
            </article>

            <article className="info-card">
              <h3>Perimeter Coverage</h3>
              <p>Reduce blind spots across school grounds and boundaries.</p>
            </article>

            <article className="info-card">
              <h3>Corridor Monitoring</h3>
              <p>Improve supervision across internal school buildings.</p>
            </article>

            <article className="info-card">
              <h3>Camera Upgrades</h3>
              <p>Upgrade outdated surveillance systems to modern solutions.</p>
            </article>

            <article className="info-card">
              <h3>Maintenance</h3>
              <p>Ensure camera systems remain operational and reliable.</p>
            </article>

            <article className="info-card">
              <h3>Security Reviews</h3>
              <p>Assess school security and recommend improvements.</p>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}
