import { NavLink } from "react-router-dom";

export default function Cybersecurity() {
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
            <div className="eyebrow">Cybersecurity Services</div>
            <h1 className="page-title">Protect systems, networks, and business data.</h1>
            <p>
              Dt3bza Security helps businesses reduce cyber risk, improve system
              resilience, and strengthen their security posture.
            </p>
          </div>

          <div className="cards-grid">
            <article className="info-card">
              <h3>Security Risk Assessments</h3>
              <p>Identify vulnerabilities across users, devices, systems, and workflows.</p>
            </article>
            <article className="info-card">
              <h3>Network Security Hardening</h3>
              <p>Improve protection across routers, internal systems, permissions, and access points.</p>
            </article>
            <article className="info-card">
              <h3>Endpoint Protection</h3>
              <p>Strengthen device-level security to reduce avoidable compromise risk.</p>
            </article>
            <article className="info-card">
              <h3>Backup & Recovery Planning</h3>
              <p>Reduce downtime and data loss with structured resilience planning.</p>
            </article>
            <article className="info-card">
              <h3>Business Security Strategy</h3>
              <p>Support organizations that need stronger operational protection and clearer security direction.</p>
            </article>
            <article className="info-card">
              <h3>Remote Support</h3>
              <p>Digital security consulting can be delivered remotely for clients worldwide.</p>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}
