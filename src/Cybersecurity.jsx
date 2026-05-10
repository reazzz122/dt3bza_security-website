import { Header, Footer } from "./Layout.jsx";

export default function Cybersecurity() {
  return (
    <div className="page-shell">
      <Header />
      <main className="section">
        <div className="container">

          <div className="section-head">
            <div className="eyebrow">Cybersecurity Services</div>
            <h2>Professional cybersecurity protection</h2>
            <p>Digital cybersecurity services available remotely. All engagements are scoped individually and quoted after a free consultation — no generic packages.</p>
          </div>

          <div className="cards-grid">
            <article className="info-card">
              <h3>Security Assessment</h3>
              <p>Vulnerability review and security report tailored to your systems, networks and business environment. Delivered remotely.</p>
            </article>
            <article className="info-card">
              <h3>Business Protection</h3>
              <p>Network security review, vulnerability scanning and system hardening for businesses that need stronger ongoing protection.</p>
            </article>
            <article className="info-card">
              <h3>Enterprise Security</h3>
              <p>Full security audit, consulting and long-term protection planning for complex or high-risk environments.</p>
            </article>
          </div>

          <div className="section-head" style={{marginTop: "56px"}}>
            <h2>What is included</h2>
          </div>

          <div className="cards-grid">
            <article className="info-card">
              <h3>Risk Reviews</h3>
              <p>Identify weaknesses across systems, devices and workflows before they are exploited.</p>
            </article>
            <article className="info-card">
              <h3>Network Security</h3>
              <p>Review internal security posture, exposure areas and access control across your network.</p>
            </article>
            <article className="info-card">
              <h3>Protection Planning</h3>
              <p>Clear, actionable recommendations for strengthening your business resilience and reducing risk.</p>
            </article>
          </div>

          <div style={{marginTop: "40px"}}>
            <div className="cta-panel">
              <div>
                <div className="eyebrow">Pricing</div>
                <h2>Every quote is tailored to your business.</h2>
                <p>Contact us for a free consultation. We will assess your environment and provide a detailed proposal scoped to your specific needs and budget.</p>
              </div>
              <div className="cta-actions">
                <a className="btn btn-primary" href="https://wa.me/27646993670?text=Hello%20I%20would%20like%20to%20request%20a%20cybersecurity%20quote" target="_blank" rel="noreferrer">Request a Quote</a>
                <a className="btn btn-secondary" href="mailto:info@dt3bza-security.com?subject=Cybersecurity%20Quote%20Request">Email Us</a>
              </div>
            </div>
          </div>

        </div>
      </main>
      <a className="floating-whatsapp" href="https://wa.me/27646993670" target="_blank" rel="noreferrer">WhatsApp Us</a>
      <Footer />
    </div>
  );
}
