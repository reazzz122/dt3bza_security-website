import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink to="/" className="brand">
          <img src="/logo.png" alt="DT3BZA Security" className="brand-logo" />
        </NavLink>
        <nav className="main-nav">
          <NavLink to="/cybersecurity">Cybersecurity</NavLink>
          <NavLink to="/cctv">CCTV</NavLink>
          <NavLink to="/schools">Schools</NavLink>
          <NavLink to="/dt3app">UNITI App</NavLink>
          <a className="nav-cta" href="https://wa.me/27646993670?text=Hello%20I%20am%20interested%20in%20your%20security%20services" target="_blank" rel="noreferrer">Get a Quote</a>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <strong>DT3BZA Security (Pty) Ltd</strong>
            <p>Cybersecurity · CCTV Surveillance · School Security · Western Cape</p>
            <p style={{marginTop:6}}>Also trading as <strong style={{color:"rgba(255,255,255,0.55)"}}>FORTYXIS SECURITY</strong> (Government & Tender Identity)</p>
            <p style={{marginTop:6,fontSize:"0.72rem",color:"rgba(255,255,255,0.2)"}}>CIPC Registered · PSIRA Registered · CSD Registered · Level 1 B-BBEE EME · POPIA Compliant</p>
            <p style={{marginTop:4,fontSize:"0.72rem",color:"rgba(232,184,75,0.5)"}}>UNITI App — Coming December 2026</p>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:"20px",alignItems:"flex-end"}}>
            <nav className="footer-links">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/cybersecurity">Cybersecurity</NavLink>
              <NavLink to="/cctv">CCTV</NavLink>
              <NavLink to="/schools">Schools</NavLink>
              <NavLink to="/dt3app">UNITI App</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </nav>
            <nav className="footer-links">
              <NavLink to="/privacy">Privacy Policy</NavLink>
              <NavLink to="/terms">Terms</NavLink>
              <a href="mailto:info@dt3bza-security.com">info@dt3bza-security.com</a>
              <a href="https://wa.me/27646993670" target="_blank" rel="noreferrer">+27 64 699 3670</a>
            </nav>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {year} DT3BZA Security (Pty) Ltd. All rights reserved. Scorpion logo and DT3BZA are proprietary trademarks. UNITI is a registered concept in development.</p>
          <p>POPIA Compliant · ECT Act Compliant · Western Cape, South Africa</p>
        </div>
      </div>
    </footer>
  );
}
