import { Header, Footer } from "./Layout.jsx";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Who We Are",
      content: `DT3BZA Security (Pty) Ltd, also trading as FORTYXIS SECURITY for government and tender purposes, is a registered South African security technology company based in the Western Cape. We operate the DT3 Tactical Intelligence Platform and provide cybersecurity, CCTV surveillance and business protection services. This Privacy Policy applies to our website (dt3bza-security.com), the DT3 mobile application, and all related services.`
    },
    {
      title: "2. Information We Collect",
      content: `We collect the following personal information:\n\n• Identity information: Full name, email address, phone number\n• Account information: Role, company affiliation, access level\n• Location data: GPS coordinates collected during active app sessions when you have enabled location sharing\n• Incident data: Reports you submit including descriptions, locations and timestamps\n• Device information: Device type, operating system, app version for technical support\n• Usage data: Screens accessed, features used, session duration for app improvement\n\nWe do not collect financial information, ID numbers, or any sensitive personal information beyond what is listed above.`
    },
    {
      title: "3. How We Use Your Information",
      content: `Your personal information is used exclusively for the following purposes:\n\n• Operating and providing the DT3 platform and security services\n• Assigning incidents to security officers and dispatchers\n• Verifying your identity and role within your company\n• Sending security alerts and notifications relevant to your area\n• Improving app performance and user experience\n• Complying with legal obligations under South African law\n• Responding to your queries and support requests\n\nWe will never use your information for advertising, profiling or any purpose beyond what is stated here.`
    },
    {
      title: "4. POPIA Compliance",
      content: `DT3BZA Security is fully committed to compliance with the Protection of Personal Information Act (POPIA), Act 4 of 2013. We process your personal information lawfully, with your consent, and only to the extent necessary for the purposes stated in this policy.\n\nYour rights under POPIA include:\n\n• Right to access: You may request a copy of all personal information we hold about you\n• Right to correction: You may request correction of inaccurate or incomplete information\n• Right to deletion: You may request deletion of your personal information\n• Right to object: You may object to the processing of your information\n• Right to complain: You may lodge a complaint with the Information Regulator of South Africa\n\nTo exercise any of these rights, contact our Information Officer at info@dt3bza-security.com with the subject line "POPIA Request".`
    },
    {
      title: "5. Data Storage and Security",
      content: `Your data is stored securely on Supabase servers with industry-standard encryption in transit (TLS) and at rest (AES-256). We implement the following security measures:\n\n• Role-based access control ensuring users only access data relevant to their role\n• Encrypted authentication tokens with automatic expiry\n• No storage of passwords in plain text — all passwords are hashed\n• Regular security reviews of our infrastructure\n• Automatic session timeouts for inactive accounts\n\nIn the event of a data breach that may affect your personal information, we will notify affected users within 72 hours as required by POPIA.`
    },
    {
      title: "6. Location Data",
      content: `Location data is only collected when you have the DT3 app open and have enabled location sharing in your settings. We do not track your location in the background when the app is closed. Location data is used to:\n\n• Show incident pins relevant to your area on the live map\n• Log your GPS coordinates when you clock in for a shift\n• Record your location when you submit an incident report or activate the panic button\n\nYou may disable location sharing at any time in the app Settings. Disabling location will limit certain features but will not affect your account.`
    },
    {
      title: "7. Sharing of Information",
      content: `We do not sell, rent or trade your personal information to any third party. Your information may be shared only in the following limited circumstances:\n\n• With your employer company on the DT3 platform, who can see incident reports and shift data submitted by their officers\n• With dispatchers within your company who need your location to assign incidents\n• With law enforcement or emergency services if required by law or to protect life\n• With our technology service providers (Supabase, Google Maps) solely for the purpose of operating the platform — these providers are bound by their own privacy policies\n\nAll third-party service providers are carefully selected and contractually required to protect your information.`
    },
    {
      title: "8. Data Retention",
      content: `We retain your personal information for as long as your account is active. If you delete your account, your personal information will be permanently removed within 30 days, except where we are legally required to retain certain records. Incident reports are retained for 24 months for operational and legal purposes, after which they are anonymised or deleted.`
    },
    {
      title: "9. Children's Privacy",
      content: `The DT3 platform is intended for professional use by adults aged 18 and over. We do not knowingly collect personal information from persons under 18. If you believe a minor has registered on our platform, please contact us immediately at info@dt3bza-security.com.`
    },
    {
      title: "10. Changes to This Policy",
      content: `We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify registered users of material changes via the app or email at least 14 days before the changes take effect. Continued use of the platform after that date constitutes acceptance of the updated policy.`
    },
    {
      title: "11. Contact and Complaints",
      content: `For any privacy-related queries, requests or complaints:\n\nInformation Officer: DT3BZA Security\nEmail: info@dt3bza-security.com\nWhatsApp: +27 64 699 3670\nAddress: Western Cape, South Africa\n\nIf you are not satisfied with our response, you may lodge a complaint with the Information Regulator of South Africa:\nWebsite: www.inforegulator.org.za\nEmail: inforeg@justice.gov.za`
    },
  ];

  return (
    <div className="page-shell">
      <Header />
      <main className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Legal</div>
            <h2>Privacy Policy</h2>
            <p>Last updated: May 2025 · Effective date: May 2025 · Applies to: DT3BZA Security website and DT3 mobile application</p>
          </div>

          <div style={{display:"flex",flexDirection:"column",gap:"0"}}>
            {sections.map((s, i) => (
              <div key={i} style={{borderBottom:"1px solid var(--border)",paddingBottom:"28px",marginBottom:"28px"}}>
                <h3 style={{fontFamily:"'Rajdhani',sans-serif",fontSize:"1.1rem",fontWeight:700,letterSpacing:"0.06em",color:"var(--text)",marginBottom:"12px"}}>{s.title}</h3>
                {s.content.split("\n").map((line, j) => (
                  <p key={j} style={{color:"var(--muted)",fontSize:"0.95rem",lineHeight:"1.75",marginBottom: line === "" ? "8px" : "4px"}}>
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div style={{marginTop:"20px"}}>
            <div className="cta-panel">
              <div>
                <div className="eyebrow">Questions?</div>
                <h2>We are committed to protecting your privacy.</h2>
                <p>If you have any questions about this policy or how we handle your data, contact our Information Officer directly.</p>
              </div>
              <div className="cta-actions">
                <a className="btn btn-primary" href="mailto:info@dt3bza-security.com?subject=POPIA%20Request">Email Information Officer</a>
                <a className="btn btn-secondary" href="https://wa.me/27646993670" target="_blank" rel="noreferrer">WhatsApp Us</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
