export default function SecurityServicesWebsite() {
  const services = [
    {
      title: "Cybersecurity Risk Assessments",
      text: "Identify vulnerabilities across business systems, devices, users, and operational workflows before attackers exploit them.",
    },
    {
      title: "AI-Enhanced Threat Monitoring",
      text: "Use modern threat visibility and monitoring workflows to detect suspicious behaviour earlier across your environment.",
    },
    {
      title: "Network Security Hardening",
      text: "Strengthen routers, endpoints, access control, backups, and internal systems to reduce avoidable security exposure.",
    },
    {
      title: "Data Protection & Recovery Planning",
      text: "Reduce the impact of ransomware, downtime, and data loss with stronger controls and recovery planning.",
    },
    {
      title: "CCTV Sales, Installation & Support",
      text: "Professional surveillance system sales, setup, maintenance, upgrades, and support for both new and existing camera environments.",
    },
    {
      title: "Access Control & Physical Security",
      text: "Support entry-point protection, scanner systems, and layered on-site security for businesses, schools, and facilities.",
    },
  ];

  const industries = [
    "Law Firms",
    "Accounting Firms",
    "Construction Companies",
    "Retail",
    "Warehousing",
    "Corporate Offices",
    "Schools & Educational Institutions",
    "Hospitality",
    "Residential Estates",
  ];

  const digitalPackages = [
    {
      name: "Foundation Security",
      price: "$250+",
      description:
        "A strong entry point for businesses ready to improve cyber resilience and reduce avoidable risk.",
      features: [
        "Security posture review",
        "Endpoint protection setup",
        "Backup and recovery guidance",
        "Core hardening recommendations",
      ],
    },
    {
      name: "Business Protection",
      price: "$650+",
      badge: "Recommended",
      description:
        "Advanced digital protection for organizations managing sensitive data, multiple users, and operational systems.",
      features: [
        "Network security assessment",
        "Monitoring setup",
        "Data protection strategy",
        "Business continuity guidance",
      ],
    },
    {
      name: "Executive Security",
      price: "Custom",
      description:
        "Strategic digital security support for larger organizations requiring a more advanced protection approach.",
      features: [
        "Security infrastructure planning",
        "AI-enhanced threat visibility",
        "Compliance and review support",
        "Incident response planning",
      ],
    },
  ];

  const physicalServices = [
    "CCTV system sales and consultation",
    "Professional installation and setup",
    "Support for existing camera systems",
    "System upgrades and expansions",
    "Maintenance and repairs",
    "Network setup for surveillance systems",
  ];

  const process = [
    "Review visible cyber and operational security risks",
    "Discuss surveillance or access-control requirements",
    "Recommend the most suitable protection path",
    "Implement, upgrade, or support the required systems",
  ];

  const trustPoints = [
    "Structured digital security packages",
    "Custom CCTV quotes based on customer needs",
    "Support for existing surveillance systems",
    "Professional positioning for serious clients",
  ];

  return (
    <div className="page-shell">
      <header className="topbar">
        <a href="#hero" className="brand">
          <div className="brand-mark">
            <img src="/logo.png" alt="Dt3bza Security logo" />
          </div>
          <div className="brand-copy">
            <strong>Dt3bza Security</strong>
            <span>Cybersecurity, Surveillance & Business Protection</span>
          </div>
        </a>

        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#industries">Industries</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
          <a
            className="nav-cta"
            href="https://wa.me/27684861332"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </nav>
      </header>

      <main>
        <section id="hero" className="section hero">
          <div className="hero-copy">
            <div className="eyebrow">
              Enterprise-level positioning • premium business security
            </div>
            <h1>Serious protection for businesses that refuse to look vulnerable.</h1>
            <p className="hero-text">
              Dt3bza Security protects business systems, sensitive data, operational
              environments, and physical sites through premium cybersecurity,
              surveillance, and layered business protection.
            </p>

            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href="https://wa.me/27684861332"
                target="_blank"
                rel="noreferrer"
              >
                Book a Security Consultation
              </a>
              <a className="btn btn-secondary" href="#pricing">
                View Digital Packages
              </a>
              <a className="btn btn-ghost" href="mailto:info@dt3bza-security.com">
                Book by Email
              </a>
            </div>

            <div className="mini-proof">
              <span>Cybersecurity</span>
              <span>Surveillance</span>
              <span>Business Protection</span>
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-label">Security Confidence</div>
            <h3>Built to look credible before the first call.</h3>
            <p>
              Premium positioning, stronger protection language, and structured
              service delivery designed to attract serious clients.
            </p>

            <ul className="bullet-list compact">
              {trustPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-tight stats">
          <div className="stat-card">
            <strong>Digital Security</strong>
            <span>Structured cybersecurity services with visible entry pricing.</span>
          </div>
          <div className="stat-card">
            <strong>Physical Security</strong>
            <span>CCTV sales, installations, maintenance, and support.</span>
          </div>
          <div className="stat-card">
            <strong>Flexible Delivery</strong>
            <span>Remote digital support and custom on-site project quotes.</span>
          </div>
        </section>

        <section id="services" className="section">
          <div className="section-head">
            <div className="eyebrow">Services</div>
            <h2>Security services designed for serious clients and real environments.</h2>
            <p>
              Dt3bza Security combines digital protection, surveillance support,
              and operational risk reduction into one stronger business-facing brand.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-section">
          <div className="split-card">
            <div className="eyebrow">CCTV & Surveillance</div>
            <h2>Custom physical security packages built around each client’s needs.</h2>
            <p>
              CCTV work is quoted per project because every property, camera count,
              infrastructure setup, and installation requirement is different.
            </p>

            <ul className="bullet-list">
              {physicalServices.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="note-box">
              <strong>Important:</strong> Visible pricing applies to digital security
              services only. Physical security installations are quoted individually
              based on customer requirements.
            </div>
          </div>

          <div className="split-card soft-glow">
            <div className="eyebrow">Trusted Security Platforms</div>
            <h2>Supported surveillance systems and brands</h2>
            <p>
              We install, configure, upgrade, and support industry-recognized
              surveillance platforms trusted by businesses worldwide.
            </p>

            <div className="brand-logos">
              <img src="/brands/hikvision.png" alt="Hikvision logo" />
              <img src="/brands/dahua.png" alt="Dahua logo" />
              <img src="/brands/provision.png" alt="Provision ISR logo" />
            </div>
          </div>
        </section>

        <section id="industries" className="section">
          <div className="section-head">
            <div className="eyebrow">Industries We Protect</div>
            <h2>Built for organizations that need stronger protection and clearer structure.</h2>
            <p>
              We support clients that rely on secure operations, monitored
              environments, and stable infrastructure.
            </p>
          </div>

          <div className="industry-grid">
            {industries.map((industry) => (
              <div key={industry} className="industry-pill">
                {industry}
              </div>
            ))}
          </div>
        </section>

        <section className="section split-section">
          <div className="split-card">
            <div className="eyebrow">Our Security Approach</div>
            <h2>Offer a conversation that feels premium, not desperate.</h2>
            <p>
              The goal is to move serious prospects toward a short strategy review,
              position Dt3bza Security as a high-value provider, and recommend the
              most suitable protection path.
            </p>

            <ul className="bullet-list">
              {process.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="split-card">
            <div className="eyebrow">Executive Value</div>
            <h2>Why businesses choose Dt3bza Security</h2>
            <ul className="bullet-list">
              <li>Stronger positioning for larger or more serious clients</li>
              <li>One brand covering cybersecurity and physical security support</li>
              <li>Support for both new systems and existing installations</li>
              <li>Messaging built to improve trust before the first call</li>
              <li>A professional image clients can confidently spend money with</li>
            </ul>
          </div>
        </section>

        <section id="pricing" className="section">
          <div className="section-head">
            <div className="eyebrow">Digital Security Packages</div>
            <h2>Visible pricing for digital work. Custom quotes for physical security.</h2>
            <p>
              These packages apply to cybersecurity, digital protection, and
              related consulting. CCTV and installation work is quoted separately
              based on site requirements.
            </p>
          </div>

          <div className="pricing-grid">
            {digitalPackages.map((pkg) => (
              <article
                key={pkg.name}
                className={`pricing-card ${pkg.badge ? "pricing-card-featured" : ""}`}
              >
                {pkg.badge && <div className="pricing-badge">{pkg.badge}</div>}
                <h3>{pkg.name}</h3>
                <div className="price">{pkg.price}</div>
                <p className="price-desc">{pkg.description}</p>

                <ul>
                  {pkg.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <a
                  className="btn btn-card"
                  href="https://wa.me/27684861332"
                  target="_blank"
                  rel="noreferrer"
                >
                  Request Pricing
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-head">
            <div className="eyebrow">Service Coverage</div>
            <h2>Physical security in the Western Cape. Digital security worldwide.</h2>
          </div>

          <div className="coverage-grid">
            <div className="coverage-card">
              <h3>On-site Services</h3>
              <p>
                CCTV installation, surveillance upgrades, repairs, and maintenance
                are currently available in the Western Cape.
              </p>
            </div>
            <div className="coverage-card">
              <h3>Remote Digital Services</h3>
              <p>
                Cybersecurity consulting, digital protection planning, and security
                reviews can be delivered internationally.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-box">
            <div>
              <div className="eyebrow">Free Strategy Review</div>
              <h2>Move serious prospects toward a short security conversation.</h2>
              <p>
                Review visible cyber and operational security risks, discuss
                surveillance or access-control requirements, and recommend the most
                suitable protection path.
              </p>
            </div>

            <div className="contact-actions">
              <a
                className="btn btn-primary"
                href="https://wa.me/27684861332"
                target="_blank"
                rel="noreferrer"
              >
                Book on WhatsApp
              </a>
              <a className="btn btn-secondary" href="mailto:info@dt3bza-security.com">
                Book by Email
              </a>
            </div>
          </div>
        </section>
      </main>

      <a
        className="floating-whatsapp"
        href="https://wa.me/27684861332"
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp Us
      </a>
    </div>
  );
}
