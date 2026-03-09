export default function SecurityServicesWebsite() {
  const coreServices = [
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
      text: "Professional surveillance system sales, setup, upgrades, maintenance, and support for both new and existing environments.",
    },
    {
      title: "Access Control & Physical Security",
      text: "Support entry-point protection, scanner systems, and layered on-site security for businesses, schools, and facilities.",
    },
  ];

  const schoolServices = [
    "School CCTV installation and upgrades",
    "Classroom, corridor, gate, and perimeter camera coverage",
    "Access-control support for entrances and restricted areas",
    "Existing school surveillance system maintenance",
    "Security reviews for educational facilities",
    "Monitoring and infrastructure recommendations",
  ];

  const industries = [
    "Law Firms",
    "Accounting Firms",
    "Construction Companies",
    "Retail Businesses",
    "Warehousing & Logistics",
    "Corporate Offices",
    "Schools & Educational Institutions",
    "Hospitality & Hotels",
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
    "Maintenance and repairs",
    "Support for existing surveillance systems",
    "System upgrades and expansions",
    "Network configuration for camera systems",
  ];

  const trustPoints = [
    "Premium business-facing security positioning",
    "Digital and physical protection under one brand",
    "Support for both new projects and existing systems",
    "Structured service delivery that builds trust early",
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
            <span>Cybersecurity, Surveillance &amp; Business Protection</span>
          </div>
        </a>

        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#industries">Industries</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
          <a
            href="https://wa.me/27646993670"
            target="_blank"
            rel="noreferrer"
            className="nav-cta"
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
              Dt3bza Security helps organizations protect digital systems,
              sensitive data, operational infrastructure, and physical
              environments through premium cybersecurity, surveillance, and
              layered business protection.
            </p>

            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href="https://wa.me/27646993670"
                target="_blank"
                rel="noreferrer"
              >
                Book a Free Security Strategy Call
              </a>

              <a className="btn btn-secondary" href="#pricing">
                View Security Packages
              </a>

              <a className="btn btn-ghost" href="mailto:info@dt3bza-security.com">
                Email Dt3bza Security
              </a>
            </div>

            <div className="hero-tags">
              <span>24/7 Security mindset</span>
              <span>AI Enhanced visibility</span>
              <span>Global remote support</span>
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-label">Security Confidence</div>
            <h3>Built to look credible before the first call.</h3>
            <p>
              Premium positioning, real business protection language, and
              services structured to attract serious clients.
            </p>

            <ul className="signal-list">
              <li>Protection against ransomware, cyber extortion, and system compromise</li>
              <li>Backup and recovery strategies that reduce data loss and downtime</li>
              <li>Security reviews focused on real operational and technical weaknesses</li>
              <li>Integrated support across cybersecurity, surveillance, and access protection</li>
            </ul>
          </div>
        </section>

        <section className="section-tight stats">
          <div className="stat-card">
            <strong>Executive-style positioning</strong>
            <span>Premium business presentation for stronger trust.</span>
          </div>
          <div className="stat-card">
            <strong>Cyber + surveillance offering</strong>
            <span>One brand covering digital and physical protection.</span>
          </div>
          <div className="stat-card">
            <strong>Built for higher-trust lead conversion</strong>
            <span>Clearer offers for more serious clients.</span>
          </div>
        </section>

        <section id="services" className="section">
          <div className="section-head">
            <div className="eyebrow">Services</div>
            <h2>Security services designed for serious clients and real environments.</h2>
            <p>
              Dt3bza Security combines digital protection, surveillance support,
              and operational security into one stronger business-facing offer.
            </p>
          </div>

          <div className="service-grid">
            {coreServices.map((service) => (
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
              CCTV and physical security work is quoted per project because
              every property, infrastructure setup, camera count, and
              installation requirement is different.
            </p>

            <ul className="bullet-list">
              {physicalServices.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="note-box">
              <strong>Important:</strong> Visible pricing applies to digital
              security services only. CCTV and physical security installations
              are quoted individually based on customer requirements.
            </div>
          </div>

          <div className="split-card soft-glow">
            <div className="eyebrow">Trusted CCTV Technology</div>
            <h2>Professional surveillance platforms we support</h2>
            <p>
              We install and support recognized surveillance systems trusted by
              businesses, schools, offices, and operational facilities.
            </p>

            <div className="brands-grid">
              <img src="/brands/hikvision.png" alt="Hikvision CCTV" />
              <img src="/brands/dahua.png" alt="Dahua CCTV" />
              <img src="/brands/provision.png" alt="Provision ISR CCTV" />
            </div>
          </div>
        </section>

        <section className="section school-section">
          <div className="section-head">
            <div className="eyebrow">School Security</div>
            <h2>Security support for schools, colleges, and educational institutions.</h2>
            <p>
              Educational environments need stronger visibility, safer access
              control, and better protection for staff, learners, and property.
              Dt3bza Security supports school security with surveillance,
              infrastructure guidance, and ongoing system support.
            </p>
          </div>

          <div className="school-grid">
            <div className="split-card">
              <h3>School Security Services</h3>
              <ul className="bullet-list">
                {schoolServices.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="split-card">
              <h3>Why Schools Need Stronger Protection</h3>
              <ul className="bullet-list">
                <li>Improve monitoring of gates, walkways, and key buildings</li>
                <li>Reduce blind spots across school property</li>
                <li>Support incident review and operational oversight</li>
                <li>Strengthen access control for staff and visitors</li>
                <li>Create safer environments for learners and personnel</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="industries" className="section">
          <div className="section-head">
            <div className="eyebrow">Industries We Protect</div>
            <h2>Built for organizations that need stronger protection and clearer structure.</h2>
            <p>
              We position Dt3bza Security to appeal to clients who need both
              strong protection and confidence in the provider they choose.
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
            <div className="eyebrow">Why Businesses Choose Dt3bza</div>
            <h2>Security positioning that feels premium, stable, and trustworthy.</h2>
            <ul className="bullet-list">
              {trustPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="split-card">
            <div className="eyebrow">Coverage</div>
            <h2>Physical security in the Western Cape. Digital security worldwide.</h2>
            <ul className="bullet-list">
              <li>CCTV installation, upgrades, and maintenance in the Western Cape</li>
              <li>Support for existing surveillance systems</li>
              <li>Remote cybersecurity consulting available internationally</li>
              <li>Business protection support for both local and global clients</li>
            </ul>
          </div>
        </section>

        <section id="pricing" className="section">
          <div className="section-head">
            <div className="eyebrow">Digital Security Packages</div>
            <h2>Visible pricing for digital work. Custom quotes for physical security.</h2>
            <p>
              These packages apply to cybersecurity, digital protection, and
              related consulting. CCTV and installation work is quoted
              separately based on site requirements.
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

        <section id="contact" className="section contact-section">
          <div className="contact-box">
            <div>
              <div className="eyebrow">Free Strategy Review</div>
              <h2>Move serious prospects toward a short security conversation.</h2>
              <p>
                Review visible cyber and operational risks, discuss
                surveillance requirements, and recommend the most suitable
                protection path.
              </p>
            </div>

            <div className="contact-actions">
              <a
                className="btn btn-primary"
                href="https://wa.me/27646993670"
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
