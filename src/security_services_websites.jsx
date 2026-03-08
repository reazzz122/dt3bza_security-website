export default function SecurityServicesWebsite() {
  const services = [
    {
      title: "Managed Cybersecurity Protection",
      text: "Ongoing protection for business systems, endpoints, user access, cloud environments, and operational security risk.",
    },
    {
      title: "Ransomware & Breach Defense",
      text: "Reduce exposure to ransomware, phishing, data breaches, and business email compromise with layered cyber defense strategies.",
    },
    {
      title: "Backup, Recovery & Business Continuity",
      text: "Protect critical data, plan for fast recovery, and strengthen operational resilience against incidents and downtime.",
    },
    {
      title: "AI-Enhanced Monitoring",
      text: "Use modern threat visibility and security workflows to identify suspicious behaviour earlier across your environment.",
    },
    {
      title: "CCTV & Surveillance Solutions",
      text: "Support physical site protection with camera systems designed for visibility, deterrence, monitoring, and review.",
    },
    {
      title: "Access Control & Scanner Security",
      text: "Strengthen business premises with controlled access, scanner systems, and layered entry-point protection.",
    },
  ];

  const industries = [
    "Law Firms",
    "Accounting Firms",
    "Construction",
    "Healthcare",
    "Warehousing",
    "Retail",
    "Corporate Offices",
    "High-Growth Businesses",
  ];

  const packages = [
    {
      title: "Foundation Security",
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
      title: "Business Protection",
      price: "$650+",
      description:
        "Advanced protection for organizations managing sensitive data, multiple users, and operational systems.",
      features: [
        "Network security assessment",
        "Monitoring setup",
        "Data protection strategy",
        "Business continuity guidance",
      ],
      featured: true,
    },
    {
      title: "Executive Security",
      price: "Custom",
      description:
        "Strategic security support for larger organizations requiring a more advanced protection approach.",
      features: [
        "Security infrastructure planning",
        "AI-enhanced threat visibility",
        "Compliance and review support",
        "Incident response planning",
      ],
    },
  ];

  const metrics = [
    { value: "24/7", label: "Security mindset" },
    { value: "AI", label: "Enhanced visibility" },
    { value: "$250+", label: "Packages start here" },
    { value: "Global", label: "Remote support ready" },
  ];

  const trustPoints = [
    "Protection against ransomware, cyber extortion, and system compromise",
    "Backup and recovery strategies that reduce data loss and downtime",
    "Security reviews focused on real operational and technical weaknesses",
    "Integrated support across cybersecurity, surveillance, and access protection",
  ];

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand">
            <div className="brand-logo-wrap">
              <img src="/logo.png" alt="Dt3bza Security logo" className="brand-logo" />
            </div>
            <div>
              <div className="brand-name">Dt3bza Security</div>
              <div className="brand-tag">
                Cybersecurity, Surveillance &amp; Business Protection
              </div>
            </div>
          </div>

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
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Enterprise-Level Positioning • Premium Business Security</div>
            <h1 className="hero-title">
              Serious protection for businesses that refuse to look vulnerable.
            </h1>
            <p className="hero-text">
              Dt3bza Security helps businesses protect digital systems, sensitive data,
              high-value operations, and physical environments through premium
              cybersecurity, surveillance, AI-enhanced monitoring, and layered business
              protection.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn btn-light">
                Book a Free Security Strategy Call
              </a>
              <a href="#pricing" className="btn btn-outline">
                View Security Packages
              </a>
              <a href="mailto:info@dt3bza-security.com" className="btn btn-dark">
                Email Dt3bza Security
              </a>
            </div>

            <div className="metrics">
              {metrics.map((metric) => (
                <div key={metric.label} className="metric-card">
                  <div className="metric-value">{metric.value}</div>
                  <div className="metric-label">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-panel-inner">
              <div className="hero-panel-head">
                <div className="hero-panel-logo">
                  <img src="/logo.png" alt="Dt3bza brand mark" className="panel-logo-image" />
                </div>
                <div>
                  <div className="panel-kicker">Security Confidence</div>
                  <h3>Built to look credible before the first call.</h3>
                  <p>
                    Premium positioning, real business protection language, and services
                    structured to attract serious clients.
                  </p>
                </div>
              </div>

              <div className="trust-list">
                {trustPoints.map((item) => (
                  <div key={item} className="trust-item">
                    <span className="dot" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="strip">
        <div className="container strip-grid">
          {[
            "Executive-style positioning",
            "Cyber + surveillance offering",
            "Premium business presentation",
            "Built for high-trust lead conversion",
          ].map((item) => (
            <div key={item} className="strip-card">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <div className="section-intro">
            <div className="section-kicker">Integrated Security Services</div>
            <h2>High-value protection across digital and physical environments</h2>
            <p>
              Our service structure is designed to position Dt3bza Security like a
              serious security partner — not a small generic provider.
            </p>
          </div>

          <div className="card-grid">
            {services.map((service) => (
              <div key={service.title} className="service-card">
                <div className="service-icon">■</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="section alt-section">
        <div className="container two-col">
          <div>
            <div className="section-kicker green">Industries We Protect</div>
            <h2>Built for organizations that cannot afford security mistakes</h2>
            <p>
              Dt3bza Security is positioned to serve businesses responsible for
              sensitive information, valuable operations, staff safety, client trust,
              and asset protection.
            </p>
          </div>

          <div className="industry-grid">
            {industries.map((industry) => (
              <div key={industry} className="industry-card">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div className="info-card">
            <div className="section-kicker">About Dt3bza Security</div>
            <h2>A serious security brand for modern businesses</h2>
            <p>
              Dt3bza Security is positioned as a premium business protection company
              focused on cybersecurity, surveillance, access control, continuity, and
              strategic risk reduction.
            </p>
            <p>
              This brand is built to appeal to businesses that want stronger
              protection, clearer security structure, and a provider that presents like
              a high-value partner.
            </p>
          </div>

          <div className="info-card dark-card">
            <div className="section-kicker green">Executive Value</div>
            <ul className="bullet-list">
              <li>Stronger positioning for larger or more serious clients.</li>
              <li>A business image that feels premium, stable, and security-focused.</li>
              <li>Messaging built to improve trust before the first sales conversation.</li>
              <li>
                The goal is to make Dt3bza Security look like a brand clients can
                confidently spend money with.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="pricing" className="section">
        <div className="container">
          <div className="section-intro">
            <div className="section-kicker">Security Packages</div>
            <h2>Premium packages with serious-client positioning</h2>
            <p>
              Packages start from $250+ and scale based on infrastructure,
              operational complexity, surveillance requirements, and security scope.
            </p>
          </div>

          <div className="pricing-grid">
            {packages.map((pkg) => (
              <div
                key={pkg.title}
                className={`pricing-card ${pkg.featured ? "pricing-featured" : ""}`}
              >
                {pkg.featured && <div className="pricing-badge">Recommended</div>}
                <h3>{pkg.title}</h3>
                <div className="pricing-price">{pkg.price}</div>
                <p>{pkg.description}</p>
                <ul className="bullet-list">
                  {pkg.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <a href="#contact" className="btn btn-pricing">
                  Request Pricing
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container two-col">
          <div>
            <div className="section-kicker">Free Strategy Review</div>
            <h2>Offer a conversation that feels premium, not desperate</h2>
            <p>
              The website should move serious prospects toward a short strategy
              conversation. This lets you position yourself as a consultant-grade
              security provider rather than a low-end service seller.
            </p>
          </div>

          <div className="info-card dark-card">
            <ul className="bullet-list">
              <li>Review visible cyber and operational security risks</li>
              <li>Discuss surveillance or access-control requirements</li>
              <li>Recommend the most suitable protection path</li>
            </ul>
            <div className="hero-actions">
              <a
                href="https://wa.me/27646993670"
                target="_blank"
                rel="noreferrer"
                className="btn btn-light"
              >
                Book on WhatsApp
              </a>
              <a
                href="mailto:info@dt3bza-security.com?subject=Security%20Strategy%20Review"
                className="btn btn-dark"
              >
                Book by Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container contact-panel">
          <div>
            <div className="section-kicker">Contact Dt3bza Security</div>
            <h2>Speak with a serious security brand</h2>
            <p>
              Contact us to discuss cybersecurity services, surveillance, access
              control, risk reduction, and premium protection strategies for your
              business.
            </p>

            <div className="contact-list">
              <div className="contact-box">Email: info@dt3bza-security.com</div>
              <div className="contact-box">WhatsApp Business: 0646993670</div>
              <div className="contact-box">Founder Contact: 0684861332</div>
              <div className="contact-box">
                Service Area: South Africa • Remote & International Support
              </div>
            </div>

            <div className="hero-actions">
              <a href="mailto:info@dt3bza-security.com" className="btn btn-light">
                Send an Email
              </a>
              <a
                href="https://wa.me/27646993670"
                target="_blank"
                rel="noreferrer"
                className="btn btn-green"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>

          <div className="form-card">
            <h3>Executive-style enquiry form</h3>
            <p>Designed to feel premium and serious for higher-trust client enquiries.</p>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" />
              <input type="text" placeholder="Company Name" />
              <input type="email" placeholder="Work Email" />
              <input type="text" placeholder="Phone / WhatsApp" />
              <textarea placeholder="Tell us about your security needs" rows="5" />
              <button type="button">Request Security Consultation</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>
            © {new Date().getFullYear()} Dt3bza Security • Cybersecurity, Surveillance
            &amp; Business Protection
          </p>
          <p className="footer-sub">
            Positioned to protect modern businesses with stronger resilience, premium
            presentation, and serious security support.
          </p>
        </div>
      </footer>

      <a
        href="https://wa.me/27646993670"
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp"
      >
        WhatsApp Us
      </a>
    </div>
  );
}
