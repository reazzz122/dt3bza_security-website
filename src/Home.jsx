import { NavLink } from "react-router-dom";

function Header() {
  return (
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
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <strong>Dt3bza Security</strong>
          <p>
            Trading name for tenders and government contracts:{" "}
            <strong>FORTYXIS SECURITY</strong>
          </p>
        </div>

        <div className="footer-links">
          <NavLink to="/cybersecurity">Cybersecurity</NavLink>
          <NavLink to="/cctv">CCTV</NavLink>
          <NavLink to="/schools">Schools</NavLink>
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
              <div className="eyebrow">Enterprise Security Solutions</div>

              <h1 className="hero-title">
                Professional Cybersecurity and Surveillance Protection
              </h1>

              <p className="hero-copy">
                Dt3bza Security provides cybersecurity protection, CCTV
                installation, maintenance support, school security solutions and
                business security consulting for serious organizations.
              </p>

              <div className="hero-actions">
                <a
                  className="btn btn-primary"
                  href="https://wa.me/27646993670?text=Hello%20I%20am%20interested%20in%20your%20security%20services"
                  target="_blank"
                  rel="noreferrer"
                >
                  Request Consultation
                </a>

                <NavLink to="/cybersecurity" className="btn btn-secondary">
                  Explore Services
                </NavLink>
              </div>

              <div className="hero-badges">
                <span>Cybersecurity</span>
                <span>CCTV Installation</span>
                <span>Business Protection</span>
                <span>School Security</span>
              </div>
            </div>

            <div className="hero-card">
              <div className="card-label">Why Businesses Choose Us</div>
              <h3>Security support that feels structured and premium.</h3>
              <ul>
                <li>Cybersecurity risk reviews for real business environments</li>
                <li>CCTV installation, upgrades, maintenance and support</li>
                <li>Security solutions for schools, offices and facilities</li>
                <li>Professional security consulting and protection planning</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="container stats-grid">
            <div className="stat-card">
              <strong>Digital Protection</strong>
              <p>Cybersecurity support for systems, networks and sensitive data.</p>
            </div>

            <div className="stat-card">
              <strong>Physical Security</strong>
              <p>CCTV, surveillance support, upgrades and maintenance services.</p>
            </div>

            <div className="stat-card">
              <strong>Tender-Ready Positioning</strong>
              <p>
                FORTYXIS SECURITY trading identity for government and contract
                work.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Core Services</div>
              <h2>Complete security solutions under one brand</h2>
              <p>
                Our offer combines cybersecurity consulting, surveillance
                support, school security and business protection.
              </p>
            </div>

            <div className="cards-grid">
              <article className="info-card">
                <h3>Cybersecurity</h3>
                <p>
                  Protect systems, networks, users and sensitive business data
                  through structured security reviews and protection planning.
                </p>
                <NavLink to="/cybersecurity" className="text-link">
                  View cybersecurity services
                </NavLink>
              </article>

              <article className="info-card">
                <h3>CCTV Installation</h3>
                <p>
                  Professional camera system consultation, installation,
                  maintenance, upgrades and support for existing environments.
                </p>
                <NavLink to="/cctv" className="text-link">
                  View CCTV services
                </NavLink>
              </article>

              <article className="info-card">
                <h3>School Security</h3>
                <p>
                  Better visibility, safer entrances, perimeter monitoring and
                  stronger school security support.
                </p>
                <NavLink to="/schools" className="text-link">
                  View school security
                </NavLink>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="pricing-preview">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Cybersecurity Packages</div>
              <h2>Digital services with structured pricing</h2>
              <p>
                Cybersecurity packages are available remotely and priced in Rand.
                CCTV and physical site work are quoted individually.
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
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Industries</div>
              <h2>We support organizations that need stronger protection</h2>
              <p>
                Dt3bza Security is positioned for businesses and institutions
                that care about operational resilience, risk reduction and a
                more serious security presence.
              </p>
            </div>

            <div className="cards-grid">
              <article className="info-card">
                <h3>Law Firms</h3>
                <p>Protect confidential client data, systems and office environments.</p>
              </article>

              <article className="info-card">
                <h3>Accounting Firms</h3>
                <p>Improve protection around financial data, access and business systems.</p>
              </article>

              <article className="info-card">
                <h3>Schools</h3>
                <p>Improve visibility, monitoring and safety across educational environments.</p>
              </article>

              <article className="info-card">
                <h3>Construction</h3>
                <p>Strengthen site visibility and reduce avoidable security exposure.</p>
              </article>

              <article className="info-card">
                <h3>Warehouses</h3>
                <p>Support surveillance, monitoring and physical security across operational sites.</p>
              </article>

              <article className="info-card">
                <h3>Corporate Offices</h3>
                <p>Combine digital security with stronger physical protection and oversight.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section inquiry-section">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Send an Inquiry</div>
              <h2>Request a security consultation</h2>
              <p>
                For the fastest response, message us directly on WhatsApp or by
                email.
              </p>
            </div>

            <div className="cards-grid">
              <article className="info-card">
                <h3>WhatsApp</h3>
                <p>
                  Best for quick consultations, CCTV quotes and security
                  enquiries.
                </p>
                <a
                  className="btn btn-primary"
                  href="https://wa.me/27646993670?text=Hello%20I%20am%20interested%20in%20your%20security%20services"
                  target="_blank"
                  rel="noreferrer"
                >
                  Message on WhatsApp
                </a>
              </article>

              <article className="info-card">
                <h3>Email</h3>
                <p>
                  Best for formal business discussions and written project
                  requests.
                </p>
                <a
                  className="btn btn-secondary"
                  href="mailto:info@dt3bza-security.com?subject=Security%20Inquiry"
                >
                  Email Us
                </a>
              </article>

              <article className="info-card">
                <h3>Assessment Radius</h3>
                <p>
                  Free on-site assessment applies within a 50km radius only.
                  Beyond 50km, assessment or call-out fees may apply.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Client Confidentiality</div>
              <h2>Security conversations stay private</h2>
              <p>
                Dt3bza Security treats client discussions, infrastructure
                details, risk findings and protection recommendations as
                confidential. Information shared during consultations, audits,
                enquiries or assessments is handled professionally and is not
                disclosed outside the scope of the client relationship.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container cta-panel">
            <div>
              <div className="eyebrow">Free Strategy Review</div>
              <h2>Start with a short security conversation.</h2>
              <p>
                We review visible risks, discuss your environment and recommend
                the most suitable protection path for your business or facility.
              </p>
            </div>

            <div className="cta-actions">
              <a
                className="btn btn-primary"
                href="https://wa.me/27646993670?text=Hello%20I%20am%20interested%20in%20a%20security%20consultation"
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

      <a
        className="floating-whatsapp"
        href="https://wa.me/27646993670?text=Hello%20I%20am%20interested%20in%20your%20security%20services"
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp Us
      </a>

      <Footer />
    </div>
  );
}
