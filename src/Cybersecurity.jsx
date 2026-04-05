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
            <p>Digital cybersecurity services available remotely and priced separately from physical security work.</p>
          </div>
          <div className="cards-grid">
            <article className="info-card pricing-card">
              <h3>Security Assessment</h3>
              <p>Basic vulnerability review and security report for businesses needing clearer risk visibility.</p>
              <strong className="price">From R6 500</strong>
            </article>
            <article className="info-card pricing-card featured-card">
              <div className="featured-label">Recommended</div>
              <h3>Business Protection</h3>
              <p>Network security review, vulnerability scanning and system hardening for stronger protection.</p>
              <strong className="price">From R15 700</strong>
            </article>
            <article className="info-card pricing-card">
              <h3>Enterprise Security</h3>
              <p>Full security audit, consulting and long-term protection planning for complex environments.</p>
              <strong className="price">Custom Pricing</strong>
            </article>
          </div>
          <div className="section-head" style={{marginTop:56}}>
            <h2>What's included</h2>
          </div>
          <div className="cards-grid">
            <article className="info-card"><h3>Risk Reviews</h3><p>Identify weaknesses across systems, devices and workflows.</p></article>
            <article className="info-card"><h3>Network Security</h3><p>Review internal security posture and exposure areas.</p></article>
            <article className="info-card"><h3>Protection Planning</h3><p>Clear recommendations for strengthening resilience.</p></article>
          </div>
        </div>
      </main>
      <a className="floating-whatsapp" href="https://wa.me/27646993670" target="_blank" rel="noreferrer">WhatsApp Us</a>
      <Footer />
    </div>
  );
}
