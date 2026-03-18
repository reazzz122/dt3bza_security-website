:root {
  --bg: #06101b;
  --bg-soft: #0c1728;
  --card: rgba(13, 22, 39, 0.94);
  --card-2: rgba(16, 28, 48, 0.96);
  --text: #f4f7fb;
  --muted: #aeb8c8;
  --line: rgba(255, 255, 255, 0.08);
  --accent: #91e7ff;
  --accent-2: #69e2a7;
  --shadow: 0 20px 60px rgba(0, 0, 0, 0.34);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  color: var(--text);
  font-family: Inter, Arial, Helvetica, sans-serif;
  background:
    radial-gradient(circle at top left, rgba(84, 147, 255, 0.14), transparent 24%),
    radial-gradient(circle at bottom right, rgba(105, 226, 167, 0.08), transparent 22%),
    linear-gradient(180deg, #06101b 0%, #081320 45%, #091524 100%);
}

a {
  color: inherit;
  text-decoration: none;
}

.page-shell {
  min-height: 100vh;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

/* HEADER */
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(7, 13, 24, 0.84);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--line);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 16px 0;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
}

.brand-logo {
  width: 48px;
  height: 48px;
  object-fit: contain;
  display: block;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.03);
  padding: 6px;
  border: 1px solid rgba(145, 231, 255, 0.14);
}

.brand-text {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.brand-text strong {
  font-size: 1.1rem;
  line-height: 1;
  letter-spacing: -0.03em;
}

.brand-text span {
  color: var(--muted);
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.main-nav a {
  color: #e7eef8;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 10px 0;
}

.nav-cta {
  background: #fff;
  color: #08111f !important;
  padding: 10px 16px !important;
  border-radius: 999px;
  font-weight: 800 !important;
}

/* HERO */
.hero-section {
  padding: 82px 0 56px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 30px;
  align-items: center;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 14px;
  color: var(--accent);
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 800;
}

.hero-title,
.section-head h2,
.hero-card h3,
.cta-panel h2 {
  margin: 0 0 18px;
  line-height: 0.97;
  letter-spacing: -0.05em;
}

.hero-title {
  font-size: clamp(3rem, 6vw, 5.3rem);
  max-width: 780px;
}

.section-head h2,
.cta-panel h2 {
  font-size: clamp(2.1rem, 4vw, 3.6rem);
}

.hero-copy,
.section-head p,
.info-card p,
.cta-panel p,
.footer-brand p {
  color: var(--muted);
  line-height: 1.74;
  font-size: 1.04rem;
}

.hero-actions,
.cta-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 26px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0 22px;
  border-radius: 999px;
  font-weight: 800;
  transition: 0.2s ease;
  border: 1px solid transparent;
  cursor: pointer;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: #fff;
  color: #07111f;
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(145, 231, 255, 0.24);
  color: var(--accent);
}

.hero-badges {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 24px;
}

.hero-badges span {
  padding: 10px 14px;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.03);
  color: #dfe7f5;
  font-size: 0.9rem;
}

/* CARD BLOCKS */
.hero-card,
.info-card,
.brand-tile,
.cta-panel,
.stat-card,
.inquiry-form {
  border: 1px solid var(--line);
  background: var(--card);
  box-shadow: var(--shadow);
}

.hero-card {
  border-radius: 26px;
  padding: 28px;
}

.hero-card h3 {
  font-size: 1.95rem;
}

.hero-card ul {
  margin: 18px 0 0;
  padding-left: 18px;
}

.hero-card li {
  margin-bottom: 12px;
  color: #e8eef9;
  line-height: 1.65;
}

.card-label {
  display: inline-block;
  margin-bottom: 10px;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.78rem;
  font-weight: 800;
}

/* STATS */
.stats-section {
  padding: 8px 0 30px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.stat-card {
  border-radius: 22px;
  padding: 22px;
}

.stat-card strong {
  display: block;
  margin-bottom: 8px;
  font-size: 1.02rem;
}

.stat-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.6;
}

/* SECTIONS */
.section {
  padding: 78px 0;
}

.section-alt {
  background: rgba(255, 255, 255, 0.02);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.section-head {
  max-width: 800px;
  margin-bottom: 30px;
}

.brands-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.brand-tile {
  min-height: 130px;
  border-radius: 22px;
  padding: 20px;
  display: grid;
  place-items: center;
  text-align: center;
}

.text-tile strong {
  font-size: 1.15rem;
  letter-spacing: -0.02em;
}

.text-tile span {
  display: block;
  margin-top: 8px;
  color: var(--muted);
  font-size: 0.88rem;
  line-height: 1.5;
}

.accent-tile {
  background:
    radial-gradient(circle at top right, rgba(145, 231, 255, 0.14), transparent 40%),
    radial-gradient(circle at bottom left, rgba(105, 226, 167, 0.12), transparent 36%),
    var(--card);
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.info-card {
  border-radius: 24px;
  padding: 24px;
  background: var(--card-2);
}

.info-card h3 {
  margin: 0 0 12px;
  font-size: 1.3rem;
  letter-spacing: -0.02em;
}

.text-link {
  display: inline-block;
  margin-top: 16px;
  color: var(--accent);
  font-weight: 700;
}

/* PRICING */
.pricing-card {
  position: relative;
}

.featured-card {
  border-color: rgba(145, 231, 255, 0.28);
  box-shadow: 0 24px 70px rgba(70, 128, 255, 0.14);
}

.featured-label {
  display: inline-block;
  margin-bottom: 12px;
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(145, 231, 255, 0.12);
  color: var(--accent);
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-weight: 800;
}

.price {
  display: block;
  margin-top: 18px;
  font-size: 1.28rem;
  font-weight: 800;
  color: var(--accent-2);
}

.physical-cta {
  margin-top: 26px;
}

/* FORM */
.inquiry-form {
  border-radius: 24px;
  padding: 24px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.inquiry-form input,
.inquiry-form select,
.inquiry-form textarea {
  width: 100%;
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid #22324e;
  background: #0a1323;
  color: #fff;
  font-size: 1rem;
  margin-bottom: 16px;
}

.inquiry-form input::placeholder,
.inquiry-form textarea::placeholder {
  color: #97a6bc;
}

.inquiry-form textarea {
  resize: vertical;
  min-height: 140px;
}

/* CTA */
.cta-panel {
  border-radius: 28px;
  padding: 32px;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 24px;
  align-items: center;
  background:
    radial-gradient(circle at right bottom, rgba(105, 226, 167, 0.12), transparent 28%),
    var(--card);
}

/* FOOTER */
.site-footer {
  border-top: 1px solid var(--line);
  margin-top: 40px;
  background: rgba(5, 10, 18, 0.88);
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  padding: 28px 0 36px;
}

.footer-brand p {
  margin: 8px 0 0;
}

.footer-links {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  align-items: center;
}

.footer-links a {
  color: #e4ecf8;
}

/* FLOATING WHATSAPP */
.floating-whatsapp {
  position: fixed;
  right: 18px;
  bottom: 18px;
  z-index: 999;
  background: #67e3a6;
  color: #08111f;
  padding: 14px 22px;
  border-radius: 999px;
  font-weight: 800;
  box-shadow: 0 16px 40px rgba(103, 227, 166, 0.28);
}

/* RESPONSIVE */
@media (max-width: 1080px) {
  .hero-grid,
  .stats-grid,
  .brands-row,
  .cards-grid,
  .cta-panel {
    grid-template-columns: 1fr;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 780px) {
  .header-inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .main-nav {
    width: 100%;
    gap: 14px;
  }

  .hero-section,
  .section {
    padding: 56px 0;
  }

  .hero-title {
    font-size: 2.7rem;
  }

  .section-head h2,
  .cta-panel h2 {
    font-size: 2rem;
  }

  .brand-text span {
    font-size: 0.68rem;
  }

  .floating-whatsapp {
    left: 14px;
    right: 14px;
    text-align: center;
  }
}
