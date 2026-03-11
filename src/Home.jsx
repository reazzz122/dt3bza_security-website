import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">

        <NavLink to="/" className="brand">
          <img src="/logo.png" className="brand-logo"/>
          <div className="brand-text">
            <strong>Dt3bza Security</strong>
            <span>Cybersecurity • Surveillance • Business Protection</span>
          </div>
        </NavLink>

        <nav className="main-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/cybersecurity">Cybersecurity</NavLink>
          <NavLink to="/cctv">CCTV</NavLink>
          <NavLink to="/schools">Schools</NavLink>
          <NavLink to="/contact" className="nav-cta">Contact</NavLink>
        </nav>

      </div>
    </header>
  );
}

function Footer(){
return(

<footer className="site-footer">

<div className="container footer-inner">

<div>
<strong>Dt3bza Security</strong>
<p>Cybersecurity, Surveillance & Business Protection</p>
</div>

<div className="footer-links">
<NavLink to="/cybersecurity">Cybersecurity</NavLink>
<NavLink to="/cctv">CCTV</NavLink>
<NavLink to="/schools">Schools</NavLink>
<NavLink to="/contact">Contact</NavLink>
</div>

</div>

</footer>

)
}

export default function Home(){

return(

<div className="page-shell">

<Header/>

<main>

<section className="hero-section">

<div className="container hero-grid">

<div>

<div className="eyebrow">
Enterprise Security Solutions
</div>

<h1 className="hero-title">
Professional Cybersecurity and Surveillance Protection
</h1>

<p className="hero-copy">
Dt3bza Security provides cybersecurity protection, CCTV installation, 
system maintenance and security consulting for companies, schools 
and operational environments.
</p>

<div className="hero-actions">

<a
className="btn btn-primary"
href="https://wa.me/27646993670"
target="_blank"
>
Request Consultation
</a>

<NavLink to="/cybersecurity" className="btn btn-secondary">
Explore Services
</NavLink>

</div>

<div className="hero-badges">
<span>Cybersecurity</span>
<span>CCTV Installation</span>
<span>Business Protection</span>
<span>School Security</span>
</div>

</div>

<div className="hero-card">

<div className="card-label">
Why Businesses Choose Us
</div>

<ul>

<li>Cybersecurity risk reviews</li>

<li>CCTV installation and maintenance</li>

<li>Security solutions for schools and offices</li>

<li>Professional security consulting</li>

</ul>

</div>

</div>

</section>


<section className="section">

<div className="container">

<div className="section-head">

<div className="eyebrow">
Surveillance Brands
</div>

<h2>Professional CCTV systems we support</h2>

<p>
We work with reliable security brands trusted worldwide.
</p>

</div>

<div className="brands-row">

<div className="brand-tile">
<img src="/hikvision.png"/>
</div>

<div className="brand-tile">
<img src="/dahua.png"/>
</div>

<div className="brand-tile">
<img src="/provision.png"/>
</div>

</div>

</div>

</section>


<section className="section section-alt">

<div className="container">

<div className="section-head">

<div className="eyebrow">
Our Services
</div>

<h2>Complete security solutions</h2>

</div>

<div className="cards-grid">

<div className="info-card">

<h3>Cybersecurity</h3>

<p>
Protect systems, networks and sensitive data.
</p>

</div>

<div className="info-card">

<h3>CCTV Installation</h3>

<p>
Professional surveillance camera installations.
</p>

</div>

<div className="info-card">

<h3>CCTV Maintenance</h3>

<p>
Repair, upgrades and system monitoring.
</p>

</div>

</div>

</div>

</section>


<section className="section">

<div className="container">

<div className="section-head">

<div className="eyebrow">
Industries
</div>

<h2>Security for serious organizations</h2>

</div>

<div className="cards-grid">

<div className="info-card">
<h3>Law Firms</h3>
</div>

<div className="info-card">
<h3>Accounting Firms</h3>
</div>

<div className="info-card">
<h3>Schools</h3>
</div>

<div className="info-card">
<h3>Warehouses</h3>
</div>

<div className="info-card">
<h3>Construction Sites</h3>
</div>

<div className="info-card">
<h3>Corporate Offices</h3>
</div>

</div>

</div>

</section>


<section className="section section-alt">

<div className="container">

<div className="section-head">

<div className="eyebrow">
Send Inquiry
</div>

<h2>Request a security consultation</h2>

</div>

<form className="inquiry-form">

<input placeholder="Your Name"/>

<input placeholder="Email"/>

<input placeholder="Company"/>

<select>

<option>Cybersecurity</option>

<option>CCTV Installation</option>

<option>CCTV Maintenance</option>

<option>School Security</option>

<option>Security Consultation</option>

</select>

<textarea placeholder="Describe your security needs"/>

<button className="btn btn-primary">
Send Inquiry
</button>

</form>

</div>

</section>


</main>

<Footer/>

</div>

)

}
