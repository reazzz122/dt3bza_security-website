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
            <div className="eyebrow">Cybersecurity Services</div>
            <h2>Professional cybersecurity protection</h2>
            <p>
              Digital cybersecurity services are available remotely and priced
              separately from physical security work.
            </p>
          </div>

          <div className="cards-grid">
            <article className="info-card pricing-card">
              <h3>Security Assessment</h3>
              <p>
                Basic vulnerability review and security report for businesses
                that need clearer visibility into risk.
              </p>
              <strong className="price">From R6 500</strong>
            </article>

            <article className="info-card pricing-card featured-card">
              <div className="featured-label">Recommended</div>
              <h3>Business Protection</h3>
              <p>
                Network security review, vulnerability scanning and system
                hardening for businesses that need stronger protection.
              </p>
              <strong className="price">From R15 700</strong>
            </article>

            <article className="info-card pricing-card">
              <h3>Enterprise Security</h3>
              <p>
                Full security audit, consulting and long-term protection
                planning for more complex environments.
              </p>
              <strong className="price">Custom Pricing</strong>
            </article>
          </div>

          <div className="section-head" style={{ marginTop: "48px" }}>
            <h2>What’s included</h2>
          </div>

          <div className="cards-grid">
            <article className="info-card">
              <h3>Risk Reviews</h3>
              <p>Identify weaknesses across systems, devices and workflows.</p>
            </article>

            <article className="info-card">
              <h3>Network Security</h3>
              <p>Review internal security posture and exposure areas.</p>
            </article>

            <article className="info-card">
              <h3>Protection Planning</h3>
              <p>Clear recommendations for strengthening resilience.</p>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}
