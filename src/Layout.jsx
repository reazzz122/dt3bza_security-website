import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink to="/" className="brand">
          <img src="/logo.png" alt="DT3BZA Security" className="brand-logo" />
          <div className="brand-text">
            <strong>DT3BZA SECURITY</strong>
            <span>Cybersecurity · Surveillance · Intelligence</span>
          </div>
        </NavLink>
        <nav className="main-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/cybersecurity">Cybersecurity</NavLink>
          <NavLink to="/cctv">CCTV</NavLink>
          <NavLink to="/schools">Schools</NavLink>
          <NavLink to="/dt3app">DT3 App</NavLink>
          <NavLink to="/contact" className="nav-cta">Contact</NavLink>
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
            <strong>DT3BZA SECURITY</strong>
            <p>Cybersecurity · CCTV Surveillance · Tactical Intelligence · Western Cape</p>
            <p style={{marginTop:6,fontSize:"0.78rem"}}>
              Also trading as: <strong style={{color:"#c0c8d8"}}>FORTYXIS SECURITY</strong> (Government & Tender Identity)
            </p>
            <p style={{marginTop:6,fontSize:"0.72rem",color:"var(--dim)"}}>
              CIPC Registered · CSD Registered · POPIA Compliant
            </p>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:"20px",alignItems:"flex-end"}}>
            <nav className="footer-links">
              <NavLink to="/cybersecurity">Cybersecurity</NavLink>
              <NavLink to="/cctv">CCTV</NavLink>
              <NavLink to="/schools">Schools</NavLink>
              <NavLink to="/dt3app">DT3 App</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </nav>
            <nav className="footer-links">
              <NavLink to="/privacy" style={{fontSize:"0.75rem"}}>Privacy Policy</NavLink>
              <NavLink to="/terms" style={{fontSize:"0.75rem"}}>Terms of Service</NavLink>
              <a href="mailto:info@dt3bza-security.com" style={{fontSize:"0.75rem"}}>info@dt3bza-security.com</a>
              <a href="https://wa.me/27646993670" target="_blank" rel="noreferrer" style={{fontSize:"0.75rem"}}>+27 64 699 3670</a>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <p style={{fontSize:"0.78rem",color:"var(--dim)"}}>
            © {year} DT3BZA Security (Pty) Ltd. All rights reserved. DT3, DT3BZA Security and the scorpion logo are proprietary trademarks of DT3BZA Security. Unauthorised use is prohibited.
          </p>
          <p style={{fontSize:"0.72rem",color:"var(--dim)"}}>
            POPIA Compliant · ECT Act Compliant · Western Cape, South Africa
          </p>
        </div>
      </div>
    </footer>
  );
}
