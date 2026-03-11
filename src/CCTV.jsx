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
              <span>Cybersecurity, Surveillance & Business Protection</span>
            </div>
          </NavLink>

          <nav className="main-nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/cybersecurity">Cybersecurity</NavLink>
            <NavLink to="/cctv">CCTV</NavLink>
            <NavLink to="/schools">School Security</NavLink>
            <NavLink to="/contact" className="nav-cta">Contact</NavLink>
          </nav>
        </div>
      </header>

      <main className="inner-page">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">CCTV & Surveillance</div>
            <h1 className="page-title">Professional camera systems for serious environments.</h1>
            <p>
              We provide CCTV consultation, installation, upgrades, maintenance,
              and support for both new and existing surveillance systems.
            </p>
          </div>

          <div className="cards-grid">
            <article className="info-card"><h3>CCTV Sales & Consultation</h3><p>Guidance on choosing the right surveillance solution for your environment.</p></article>
            <article className="info-card"><h3>Professional Installation</h3><p>Structured system installation for business, school, and facility environments.</p></article>
            <article className="info-card"><h3>Maintenance & Repairs</h3><p>Keep your existing system reliable and operational.</p></article>
            <article className="info-card"><h3>System Upgrades</h3><p>Expand, modernize, or improve current surveillance coverage.</p></article>
            <article className="info-card"><h3>Existing System Support</h3><p>We support businesses that already have surveillance installed.</p></article>
            <article className="info-card"><h3>Western Cape Coverage</h3><p>Physical installation services are available in the Western Cape.</p></article>
          </div>
        </div>
      </main>
    </div>
  );
}
