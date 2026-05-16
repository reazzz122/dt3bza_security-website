import { Header, Footer } from "./Layout.jsx";

export default function Terms() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: `By accessing the DT3BZA Security website (dt3bza-security.com), downloading or using the DT3 mobile application, or engaging any of our services, you agree to be bound by these Terms of Service and all applicable South African laws and regulations. If you do not agree to these terms, please do not use our platform or services.\n\nThese terms constitute a legally binding agreement between you and DT3BZA Security (Pty) Ltd ("DT3BZA Security", "we", "us", "our").`
    },
    {
      title: "2. Description of Services",
      content: `DT3BZA Security provides the following services:\n\n• DT3 Tactical Intelligence Platform — a mobile application for security companies providing live incident mapping, dispatch management, panic alerts, guard tour verification and community intelligence\n• Cybersecurity assessments and network security reviews\n• CCTV installation, maintenance and surveillance support\n• School security consulting and installation\n• Business security consulting and protection planning\n\nServices are provided subject to availability and may be modified, suspended or discontinued at any time with reasonable notice to registered users.`
    },
    {
      title: "3. User Accounts and Registration",
      content: `To use the DT3 app you must create an account with accurate and complete information. You are responsible for:\n\n• Providing truthful and accurate registration information\n• Maintaining the confidentiality of your login credentials\n• All activity that occurs under your account\n• Notifying us immediately if you suspect unauthorised access to your account\n\nWe reserve the right to suspend or terminate accounts where false information has been provided or where these terms are violated. Accounts may not be shared, transferred or sold to another person.`
    },
    {
      title: "4. Permitted Use",
      content: `The DT3 platform is provided exclusively for legitimate security operations. You agree to use the platform only for lawful purposes and in accordance with these terms. You must not:\n\n• Submit false, misleading or fabricated incident reports\n• Use the platform to harass, stalk or harm any person\n• Attempt to gain unauthorised access to other users' accounts or data\n• Reverse engineer, decompile or attempt to extract the source code of the DT3 application\n• Use automated scripts or bots to interact with the platform\n• Share your account credentials with any other person\n• Use the platform in any way that could damage the reputation of DT3BZA Security\n\nViolation of these terms may result in immediate account termination and, where appropriate, referral to law enforcement.`
    },
    {
      title: "5. Incident Reports",
      content: `You are solely responsible for the accuracy and truthfulness of any incident reports you submit through the DT3 platform. Submitting false or malicious reports is a serious violation of these terms and may constitute a criminal offence under South African law.\n\nDT3BZA Security does not verify the accuracy of user-submitted reports and accepts no liability for actions taken by security officers or dispatchers based on reports submitted by users. Reports are provided as intelligence information and all response decisions remain the responsibility of the relevant security company.`
    },
    {
      title: "6. Intellectual Property",
      content: `All content on the DT3BZA Security website and within the DT3 application, including but not limited to the DT3BZA name, scorpion logo, application code, design, graphics, text, features and functionality, is the exclusive intellectual property of DT3BZA Security (Pty) Ltd and is protected by South African copyright law and applicable intellectual property regulations.\n\nYou may not copy, reproduce, distribute, modify, create derivative works from, publicly display, or commercially exploit any part of our platform or content without our express written permission. Unauthorised use of our intellectual property will result in legal action.\n\nThe DT3BZA brand, logo and DT3 Tactical Intelligence Platform name are proprietary to DT3BZA Security. FORTYXIS SECURITY is a registered trading name used for government tender purposes.`
    },
    {
      title: "7. Privacy and Data",
      content: `Your use of the DT3 platform is also governed by our Privacy Policy, which is incorporated into these terms by reference. By agreeing to these terms you also agree to our Privacy Policy and our processing of your personal information as described therein, in compliance with the Protection of Personal Information Act (POPIA).`
    },
    {
      title: "8. Limitation of Liability",
      content: `To the maximum extent permitted by South African law, DT3BZA Security shall not be liable for any indirect, incidental, special, consequential or punitive damages arising from your use of, or inability to use, the DT3 platform or our services.\n\nDT3BZA Security provides the DT3 platform as a tool to assist security operations. We do not guarantee response times, incident resolution or the accuracy of third-party data displayed on the platform. All operational decisions remain the responsibility of the relevant security company and their personnel.\n\nOur total liability to you for any claim arising from these terms or your use of our services shall not exceed the amount you paid to us in the 12 months preceding the claim.`
    },
    {
      title: "9. Service Availability",
      content: `We make reasonable efforts to ensure the DT3 platform is available 24 hours a day, 7 days a week. However, we do not guarantee uninterrupted service and accept no liability for downtime caused by maintenance, technical issues, third-party service providers (including Supabase or Google Maps) or circumstances beyond our reasonable control.\n\nWe will provide reasonable advance notice of planned maintenance that may affect service availability.`
    },
    {
      title: "10. Governing Law",
      content: `These Terms of Service are governed by the laws of the Republic of South Africa. Any disputes arising from these terms or your use of our services shall be subject to the exclusive jurisdiction of the South African courts.\n\nIf any provision of these terms is found to be unenforceable, the remaining provisions will continue in full force and effect.`
    },
    {
      title: "11. Changes to These Terms",
      content: `We reserve the right to modify these Terms of Service at any time. Material changes will be communicated to registered users via the app or email at least 14 days before taking effect. Continued use of the platform after the effective date constitutes your acceptance of the updated terms.\n\nWe recommend reviewing these terms periodically to stay informed of any updates.`
    },
    {
      title: "12. Contact",
      content: `For questions about these Terms of Service:\n\nDT3BZA Security (Pty) Ltd\nEmail: info@dt3bza-security.com\nWhatsApp: +27 64 699 3670\nWestern Cape, South Africa\n\nRegistered with CIPC · CSD Registered · FORTYXIS SECURITY (Tender Identity)`
    },
  ];

  return (
    <div className="page-shell">
      <Header />
      <main className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Legal</div>
            <h2>Terms of Service</h2>
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
        </div>
      </main>
      <Footer />
    </div>
  );
}
