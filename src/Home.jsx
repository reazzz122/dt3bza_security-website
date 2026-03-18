import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <p className="tag">Enterprise Security Solutions</p>

          <h1>
            Professional Cybersecurity <br />
            and Surveillance Protection
          </h1>

          <p className="subtitle">
            Dt3bza Security provides cybersecurity protection, CCTV installation,
            and business security consulting for companies, schools, and organizations.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn primary">Request Consultation</a>
            <a href="#services" className="btn outline">Explore Services</a>
          </div>

          <div className="hero-tags">
            <span>Cybersecurity</span>
            <span>CCTV Installation</span>
            <span>Business Protection</span>
            <span>School Security</span>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="trust">
        <h3>Trusted by Businesses & Institutions</h3>
        <p>Professional, confidential, and results-driven security solutions.</p>
      </section>

      {/* SERVICES */}
      <section id="services" className="services">
        <h2>Our Security Services</h2>

        <div className="cards">
          <div className="card">
            <h3>Cybersecurity</h3>
            <p>Protect systems, networks, and sensitive business data.</p>
          </div>

          <div className="card">
            <h3>CCTV & Surveillance</h3>
            <p>Professional camera systems for businesses and facilities.</p>
          </div>

          <div className="card">
            <h3>School Security</h3>
            <p>Improve safety and visibility across school environments.</p>
          </div>
        </div>
      </section>

      {/* CCTV IMAGE SECTION */}
      <section className="image-section">
        <img src="/brands/cctv.jpg" alt="Security cameras" />
      </section>

      {/* CYBER INSIGHT (IBM STYLE) */}
      <section className="cyber">
        <h2>Is Your Backup Actually Ransomware-Proof?</h2>

        <p>
          Many organizations assume their backup is secure — until a cyberattack proves otherwise.
        </p>

        <p>
          Any backup system connected to your network is potentially accessible.
          It can be targeted, encrypted, or deleted during an attack.
        </p>

        <p className="highlight">
          In today’s threat landscape, “online” and “secure” are not the same thing.
        </p>
      </section>

      {/* PRICING */}
      <section className="pricing">
        <h2>Security Packages</h2>

        <div className="pricing-cards">

          <div className="price-card">
            <h3>Security Assessment</h3>
            <p className="price">R450+</p>
            <ul>
              <li>System scan</li>
              <li>Basic vulnerability check</li>
              <li>Report</li>
            </ul>
          </div>

          <div className="price-card featured">
            <span className="badge">Recommended</span>
            <h3>Business Protection</h3>
            <p className="price">R850+</p>
            <ul>
              <li>Full system review</li>
              <li>Network security check</li>
              <li>Improvement plan</li>
              <li>Consultation</li>
            </ul>
          </div>

          <div className="price-card">
            <h3>Enterprise Security</h3>
            <p className="price">Custom</p>
            <ul>
              <li>Full audit</li>
              <li>Advanced protection</li>
              <li>Long-term support</li>
            </ul>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <h2>Request a Consultation</h2>

        <form className="form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Company / School" />
          <textarea placeholder="Describe your security needs"></textarea>

          <button type="submit">Send Inquiry</button>
        </form>

        <p className="response">Response within 24 hours</p>
      </section>

      {/* LEGAL */}
      <section className="legal">
        <h3>Confidentiality & Trust</h3>
        <p>
          All client information and discussions are strictly confidential.
          Dt3bza Security and FORTYXIS SECURITY do not disclose or share any client data.
        </p>
      </section>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/27600000000"
        className="whatsapp"
        target="_blank"
      >
        WhatsApp
      </a>

    </div>
  );
}

export default Home;
