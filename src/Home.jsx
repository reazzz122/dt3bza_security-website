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
          <a href="#top">Home</a>
          <a href="#cyber">Cybersecurity</a>
          <a href="#physical">CCTV</a>
          <a href="#industries">Industries</a>
          <a href="#contact" className="nav-cta">
            Contact
          </a>
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
          <a href="#cyber">Cybersecurity</a>
          <a href="#physical">CCTV</a>
          <a href="#industries">Industries</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="page-shell" id="top">
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

                <a href="#services" className="btn btn-secondary">
                  Explore Services
                </a>
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

        <section className="section" id="services">
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
                <a href="#cyber" className="text-link">
                  View cybersecurity services
                </a>
              </article>

              <article className="info-card">
                <h3>CCTV Installation</h3>
                <p>
                  Professional camera system consultation, installation,
                  maintenance, upgrades and support for existing environments.
                </p>
                <a href="#physical" className="text-link">
                  View CCTV services
                </a>
              </article>

              <article className="info-card">
                <h3>School Security</h3>
                <p>
                  Better visibility, safer entrances, perimeter monitoring and
                  stronger school security support.
                </p>
                <a href="#physical" className="text-link">
                  View physical security services
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="cyber">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Cybersecurity Packages</div>
              <h2>Professional cybersecurity protection</h2>
              <p>
                Digital security services are priced separately from CCTV and
                physical installations. Physical security work is quoted
                individually based on site size, camera count, infrastructure
                and travel requirements.
              </p>
            </div>

            <div className="cards-grid">
              <article className="info-card pricing-card">
                <h3>Security Assessment</h3>
                <p>
                  Basic vulnerability review and security report for small
                  businesses that need clearer risk visibility.
                </p>
                <strong className="price">Starting from R6 500</strong>
              </article>

              <article className="info-card pricing-card featured-card">
                <div className="featured-label">Recommended</div>
                <h3>Business Protection</h3>
                <p>
                  Network security review, vulnerability scanning and system
                  hardening for businesses that need stronger protection.
                </p>
                <strong className="price">Starting from R15 700</strong>
              </article>

              <article className="info-card pricing-card">
                <h3>Enterprise Security</h3>
                <p>
                  Full security audit, consulting and long-term protection
                  planning for more complex operational environments.
                </p>
                <strong className="price">Custom Pricing</strong>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="physical">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">CCTV & Physical Security</div>
              <h2>Custom quotes for installations and site-based work</h2>
              <p>
                CCTV installations, surveillance maintenance, school security
                setups and physical security work are quoted individually.
                Message us for a site discussion and custom quotation.
              </p>
            </div>

            <div className="cards-grid">
              <article className="info-card">
                <h3>CCTV Installation</h3>
                <p>
                  Camera installations, recorder setup, upgrades and system
                  expansion for business and school environments.
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
                <h3>Important Travel Note</h3>
                <p>
                  Free on-site assessment applies within a 50km radius only.
                  Areas beyond 50km may include a call-out or assessment fee.
                </p>
              </article>
            </div>

            <div className="physical-cta">
              <a
                className="btn btn-primary"
                href="https://wa.me/27646993670?text=Hello%20I%20need%20a%20quote%20for%20CCTV%20or%20physical%20security%20installation"
                target="_blank"
                rel="noreferrer"
              >
                Message for Physical Security Quote
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="brands">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Trusted CCTV Platforms</div>
              <h2>Surveillance brands and security identities we support</h2>
              <p>
                We work with recognized surveillance platforms and maintain a
                stronger commercial identity for formal contracts and tenders.
              </p>
            </div>

            <div className="brands-row text-brands">
              <div className="brand-tile text-tile">
                <strong>Hikvision</strong>
              </div>

              <div className="brand-tile text-tile">
                <strong>Dahua</strong>
              </div>

              <div className="brand-tile text-tile">
                <strong>Provision ISR</strong>
              </div>

              <div className="brand-tile text-tile accent-tile">
                <strong>FORTYXIS SECURITY</strong>
                <span>Trading name for tenders & government contracts</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="industries">
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

        <section className="section inquiry-section" id="contact">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Send an Inquiry</div>
              <h2>Request a security consultation</h2>
              <p>
                Tell us what type of protection you need and our team will
                contact you.
              </p>
            </div>

            <form
              action="https://formspree.io/f/xqapavdz"
              method="POST"
              className="inquiry-form"
            >
              <div className="form-grid">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />

                <input
                  type="text"
                  name="company"
                  placeholder="Company / Organization"
                />

                <select name="service" defaultValue="Cybersecurity">
                  <option>Cybersecurity</option>
                  <option>CCTV Installation</option>
                  <option>CCTV Repair / Maintenance</option>
                  <option>School Security</option>
                  <option>Security Consultation</option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder="Describe what security help you need"
                rows="6"
              />

              <button type="submit" className="btn btn-primary">
                Send Inquiry
              </button>
            </form>
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
                enquiries or security assessments is handled professionally and
                is not disclosed outside the scope of the client relationship.
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
                Free on-site assessment applies within 50km. Outside that range,
                assessment or call-out fees may apply.
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

              <a href="#contact" className="btn btn-secondary">
                Send Inquiry
              </a>
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
