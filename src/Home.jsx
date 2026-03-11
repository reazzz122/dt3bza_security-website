export default function Home() {
  return (
    <div className="page">
      <header className="nav">
        <img src="/logo.png" className="logo"/>
        <nav>
          <a href="/">Home</a>
          <a href="/cybersecurity">Cybersecurity</a>
          <a href="/cctv">CCTV</a>
          <a href="/schools">School Security</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h1>Serious protection for businesses that refuse to look vulnerable.</h1>
        <p>
          Dt3bza Security provides cybersecurity protection, surveillance
          solutions, and security consulting for businesses and schools.
        </p>

        <div className="hero-buttons">
          <a className="btn" href="/contact">Book Consultation</a>
          <a className="btn-outline" href="/cybersecurity">Our Services</a>
        </div>
      </section>

      <section className="brands">
        <h2>Trusted CCTV Platforms</h2>
        <div className="brand-grid">
          <img src="/hikvision.png"/>
          <img src="/dahua.png"/>
          <img src="/provision.png"/>
        </div>
      </section>

      <section className="services">
        <h2>Our Security Services</h2>

        <div className="grid">
          <div className="card">
            <h3>Cybersecurity</h3>
            <p>Protect systems, networks and sensitive business data.</p>
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
    </div>
  );
}
