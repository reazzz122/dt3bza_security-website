import { Header, Footer } from "./Layout.jsx";

const BRANDS = [
  { name: "Hikvision", logo: "/brands/hikvision.png" },
  { name: "Dahua", logo: "/brands/dahua.png" },
  { name: "Provision", logo: "/brands/provision.png" },
];

export default function CCTV() {
  return (
    <div className="page-shell">
      <Header />
      <main className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">CCTV & Surveillance</div>
            <h2>Professional surveillance installation and support</h2>
            <p>CCTV installations, surveillance maintenance, upgrades and physical security work quoted individually based on site requirements.</p>
          </div>
          <div className="cards-grid">
            <article className="info-card"><h3>CCTV Installation</h3><p>Camera installations, recorder setup and surveillance expansion for business and school environments.</p></article>
            <article className="info-card"><h3>Maintenance & Repairs</h3><p>Ongoing support, troubleshooting, repairs and upgrades for existing surveillance systems.</p></article>
            <article className="info-card"><h3>Assessment Radius</h3><p>Free on-site assessment within 50km. Beyond 50km, call-out fees may apply.</p></article>
          </div>

          <div style={{marginTop:56}}>
            <div className="section-head" style={{marginBottom:28}}>
              <div className="eyebrow">Brands</div>
              <h2>Equipment we work with</h2>
              <p>We install and service industry-leading surveillance brands trusted by businesses worldwide.</p>
            </div>
            <div className="brands-grid">
              {BRANDS.map((b) => (
                <div key={b.name} className="brand-tile">
                  <img src={b.logo} alt={b.name} className="brand-tile-img" />
                  <span className="brand-tile-name">{b.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{marginTop:40}}>
            <a className="btn btn-primary" href="https://wa.me/27646993670?text=Hello%20I%20need%20a%20quote%20for%20CCTV%20or%20physical%20security%20installation" target="_blank" rel="noreferrer">Message for Quote</a>
          </div>
        </div>
      </main>
      <a className="floating-whatsapp" href="https://wa.me/27646993670" target="_blank" rel="noreferrer">WhatsApp Us</a>
      <Footer />
    </div>
  );
}
