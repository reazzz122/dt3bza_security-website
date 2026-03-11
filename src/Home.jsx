import { NavLink } from "react-router-dom";

function Header() {
  return (
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
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <strong>Dt3bza Security</strong>
          <p>
            Professional cyber and physical security solutions for serious
            clients.
          </p>
        </div>

        <div className="footer-links">
          <NavLink to="/cybersecurity">Cybersecurity</NavLink>
          <NavLink to="/cctv">CCTV</NavLink>
          <NavLink to="/schools">School Security</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="page-shell">
      <Header />

      <main>
        <section className="hero-section">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">Premium Security Infrastructure</div>
              <h1 className="hero-title">
                Serious protection for businesses that refuse to look vulnerable.
              </h1>
              <p className="hero-copy">
                Dt3bza Security helps businesses strengthen digital systems,
                protect sensitive data, and improve physical security through
                cybersecurity, CCTV, surveillance support, and structured
                security consulting.
              </p>

              <div className="hero-actions">
                <a
                  className="btn btn-primary"
                  href="https://wa.me/27646993670?text=Hello%20I%20am%20interested%20in%20your%20security%20services"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book Consultation
                </a>

                <NavLink to="/cybersecurity" className="btn btn-secondary">
                  Our Services
                </NavLink>
              </div>

              <div className="hero-badges">
                <span>Business Protection</span>
                <span>CCTV & Surveillance</span>
                <span>Cybersecurity</span>
                <span>Western Cape + Global</span>
              </div>
            </div>

            <div className="hero-card">
              <div className="card-label">Why Dt3bza Security</div>
              <h3>Built to attract serious clients.</h3>
              <ul>
                <li>Cybersecurity reviews for real business risks</li>
                <li>CCTV installation, upgrades, and support</li>
                <li>Protection for schools, offices, and growing companies</li>
                <li>Professional positioning that builds trust fast</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Trusted CCTV Platforms</div>
              <h2>Professional surveillance brands we support</h2>
              <p>
                We work with recognized CCTV platforms trusted by businesses,
                schools, offices, and operational environments.
              </p>
            </div>

            <div className="brands-row">
              <div className="brand-tile">
                <img src="/hikvision.png" alt="Hikvision" />
              </div>
              <div className="brand-tile">
                <img src="/dahua.png" alt="Dahua" />
              </div>
              <div className="brand-tile">
                <img src="/provision.png" alt="Provision ISR" />
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Core Services</div>
              <h2>Digital and physical protection under one brand</h2>
              <p>
                Our offer combines cybersecurity consulting, surveillance
                support, school security, and business protection.
              </p>
            </div>

            <div className="cards-grid">
              <article className="info-card">
                <h3>Cybersecurity</h3>
                <p>
                  Protect systems, networks, users, and sensitive business data
                  through structured security reviews and protection planning.
                </p>
                <NavLink to="/cybersecurity" className="text-link">
                  View cybersecurity services
                </NavLink>
              </article>

              <article className="info-card">
                <h3>CCTV & Surveillance</h3>
                <p>
                  Professional camera system consultation, installation,
                  maintenance, upgrades, and support for existing environments.
                </p>
                <NavLink to="/cctv" className="text-link">
                  View CCTV services
                </NavLink>
              </article>

              <article className="info-card">
                <h3>School Security</h3>
                <p>
                  Better visibility, safer entrances, perimeter monitoring, and
                  stronger school security support.
                </p>
                <NavLink to="/schools" className="text-link">
                  View school security
                </NavLink>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Industries</div>
              <h2>We support organizations that need stronger protection</h2>
              <p>
                Dt3bza Security is positioned for businesses and institutions
                that care about risk reduction, operational protection, and a
                more serious security presence.
              </p>
            </div>

            <div className="cards-grid">
              <article className="info-card">
                <h3>Law Firms</h3>
                <p>
                  Protect confidential client data, internal systems, and office
                  environments.
                </p>
              </article>

              <article className="info-card">
                <h3>Accounting Firms</h3>
                <p>
                  Improve protection around financial data, systems, and access
                  control.
                </p>
              </article>

              <article className="info-card">
                <h3>Schools</h3>
                <p>
                  Improve visibility, monitoring, and safety across educational
                  environments.
                </p>
              </article>

              <article className="info-card">
                <h3>Construction Companies</h3>
                <p>
                  Strengthen site visibility and reduce avoidable security
                  exposure.
                </p>
              </article>

              <article className="info-card">
                <h3>Warehouses</h3>
                <p>
                  Support surveillance, monitoring, and physical security across
                  operational sites.
                </p>
              </article>

              <article className="info-card">
                <h3>Corporate Offices</h3>
                <p>
                  Combine digital security with stronger physical protection and
                  oversight.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container cta-panel">
            <div>
              <div className="eyebrow">Free Strategy Review</div>
              <h2>Start with a short security conversation.</h2>
              <p>
                We review visible risks, discuss your environment, and recommend
                the most suitable protection path for your business or facility.
              </p>
            </div>

            <div className="cta-actions">
              <a
                className="btn btn-primary"
                href="https://wa.me/27646993670?text=Hello%20I%20am%20interested%20in%20your%20security%20services"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Us
              </a>

              <NavLink to="/contact" className="btn btn-secondary">
                Contact Page
              </NavLink>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
