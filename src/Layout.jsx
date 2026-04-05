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
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <strong>DT3BZA SECURITY</strong>
            <p>Cybersecurity · Surveillance · Tactical Intelligence</p>
            <p style={{marginTop:6,fontSize:'0.78rem'}}>
              Trading name for tenders: <strong style={{color:'#c0c8d8'}}>FORTYXIS SECURITY</strong>
            </p>
          </div>
          <nav className="footer-links">
            <NavLink to="/cybersecurity">Cybersecurity</NavLink>
            <NavLink to="/cctv">CCTV</NavLink>
            <NavLink to="/schools">Schools</NavLink>
            <NavLink to="/dt3app">DT3 App</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>© 2025 DT3BZA SECURITY · WESTERN CAPE, SOUTH AFRICA</p>
          <p>DT3 TACTICAL INTELLIGENCE PLATFORM v1.0</p>
        </div>
      </div>
    </footer>
  );
}
