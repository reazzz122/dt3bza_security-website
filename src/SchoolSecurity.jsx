import { Header, Footer } from "./Layout.jsx";

export default function SchoolSecurity() {
  return (
    <div className="page-shell">
      <Header />
      <main className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">School Security</div>
            <h2>Safer educational environments through better visibility</h2>
            <p>We support schools with surveillance coverage, perimeter monitoring, entrance visibility and improved security planning.</p>
          </div>
          <div className="cards-grid">
            <article className="info-card"><h3>Perimeter Coverage</h3><p>Improve visibility around boundaries and external areas.</p></article>
            <article className="info-card"><h3>Entrance Monitoring</h3><p>Better oversight for gates, entrances and access points.</p></article>
            <article className="info-card"><h3>Custom Quotes</h3><p>School security work is quoted based on site layout and system requirements.</p></article>
          </div>
          <div style={{marginTop:28}}>
            <a className="btn btn-primary" href="https://wa.me/27646993670?text=Hello%20I%20need%20a%20school%20security%20quote" target="_blank" rel="noreferrer">Request School Security Quote</a>
          </div>
        </div>
      </main>
      <a className="floating-whatsapp" href="https://wa.me/27646993670" target="_blank" rel="noreferrer">WhatsApp Us</a>
      <Footer />
    </div>
  );
}
