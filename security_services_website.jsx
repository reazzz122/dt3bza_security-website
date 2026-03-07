export default function SecurityServicesWebsite() {
  const services = [
    {
      title: "Cyber Attack & Ransomware Protection",
      text: "Protect your company from ransomware, phishing, unauthorized access, and business disruption with proactive cyber defense measures.",
    },
    {
      title: "Backup, Recovery & Data Protection",
      text: "Keep critical business data safe and recover fast after cyber incidents, accidental deletion, device failure, or operational disruption.",
    },
    {
      title: "Network, Endpoint & System Security",
      text: "Strengthen business systems, devices, Wi-Fi, and cloud environments with practical hardening and security reviews.",
    },
    {
      title: "AI-Enhanced Threat Monitoring",
      text: "Use modern monitoring workflows to identify suspicious activity faster and reduce response time before damage spreads.",
    },
    {
      title: "Camera & Surveillance Security Support",
      text: "Support stronger site security with professionally installed camera systems designed to improve visibility, deterrence, and incident review.",
    },
    {
      title: "Access Control & Scanner Solutions",
      text: "Improve physical security with controlled entry solutions, scanners, and layered protection for offices, facilities, and business sites.",
    },
  ];

  const industries = [
    "Law Firms",
    "Construction Companies",
    "Accounting Firms",
    "Medical Practices",
    "Warehouses",
    "Retail Businesses",
    "Offices",
    "Growing Enterprises",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* NAV / HEADER */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <img src="/mnt/data/IMG_4568.png" alt="Dt3bza Security Logo" className="h-10 w-10 object-contain" />
            <div>
              <div className="font-semibold">Dt3bza Security</div>
              <div className="text-xs text-slate-400">Security & Cyber Protection</div>
            </div>
          </div>

          <div className="flex gap-3">
            <a
              href="mailto:info@dt3bza-security.com"
              className="rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-white"
            >
              Email
            </a>
            <a
              href="https://wa.me/27646993670"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950"
            >
              WhatsApp
            </a>
          </div>
            href="#contact"
            className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950"
          >
            Contact Us
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-emerald-500/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>
              <div className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200">
                Cybersecurity • Physical Security • Business Continuity
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Protect your business from cyber threats, data loss, and security breaches.
              </h1>

              <p className="mt-6 max-w-2xl text-lg text-slate-300">
                We help businesses protect digital systems, sensitive data, and physical premises through modern cybersecurity solutions, AI-enhanced monitoring, and trusted security support.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg"
                >
                  Book a Free Security Risk Review
                </a>

                <a
                  href="#services"
                  className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white"
                >
                  View Services
                </a>
              </div>

              {/* TRUST INDICATORS */}
              <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 text-sm text-slate-300">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div>Threat awareness</div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-2xl font-bold text-white">AI</div>
                  <div>Enhanced detection</div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-2xl font-bold text-white">Secure</div>
                  <div>Business systems</div>
                </div>
              </div>

            </div>

            {/* TRUST PANEL */}
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">

              <div className="rounded-[1.5rem] border border-cyan-400/20 bg-slate-900 p-6">

                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                  Why businesses trust Dt3bza Security
                </p>

                <div className="mt-6 space-y-4">

                  {[
                    "Protection against ransomware and cyber extortion",
                    "Secure backup systems to prevent permanent data loss",
                    "Security assessments that identify real vulnerabilities",
                    "Practical protection strategies for growing businesses",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                      <p className="text-slate-200">{item}</p>
                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Integrated Security Services
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Cyber and physical protection built for real business risks
          </h2>

          <p className="mt-4 text-slate-300">
            Businesses today face ransomware, data breaches, unauthorized access, theft, and operational disruption. Our services focus on protecting both digital infrastructure and real-world business environments.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-slate-300">{service.text}</p>
            </div>
          ))}
        </div>

      </section>


      {/* INDUSTRIES */}
      <section className="border-y border-white/10 bg-white/5">

        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Who We Protect
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Businesses that cannot afford security failures
              </h2>

              <p className="mt-4 text-slate-300">
                Our services are designed for organizations that manage sensitive information, valuable assets, customer sites, facilities, or operational infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {industries.map((industry) => (
                <div
                  key={industry}
                  className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-center text-sm font-medium text-slate-200"
                >
                  {industry}
                </div>
              ))}
            </div>

          </div>

        </div>

      </section>

      {/* ABOUT / POSITIONING */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              About Dt3bza Security
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Modern protection for digital and physical business risk
            </h2>
            <p className="mt-4 text-slate-300">
              Dt3bza Security helps businesses reduce risk across both cyber and on-site environments. We combine cybersecurity protection with trusted physical security support to help clients protect systems, data, facilities, and operations.
            </p>
            <p className="mt-4 text-slate-300">
              Our approach is practical, professional, and focused on real-world business protection — from ransomware defense and data recovery to camera systems and controlled access solutions.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Why this matters
            </p>
            <div className="mt-6 space-y-4 text-slate-300">
              <p>• Cyber attacks can shut down operations and expose sensitive information.</p>
              <p>• Weak physical security can lead to theft, unauthorized access, and safety risks.</p>
              <p>• Businesses need layered protection across devices, networks, offices, and sites.</p>
              <p className="font-semibold text-white">Dt3bza Security is built to help close those gaps.</p>
            </div>
          </div>
        </div>
      </section>


      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 p-8 lg:p-12">

          <div className="grid gap-8 lg:grid-cols-2">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Contact Us
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Book a free cybersecurity risk review
              </h2>

              <p className="mt-4 text-slate-300">
                Speak with us to identify the biggest security risks affecting your business and learn how to strengthen your protection.
              </p>

              <div className="mt-6 space-y-3 text-slate-200">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  Email: info@dt3bza-security.com
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  WhatsApp Business: 0646993670
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  Founder Contact: 0684861332
                </div>
              </div>

            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-6">
              <h3 className="text-xl font-semibold">Why businesses act now</h3>

              <div className="mt-4 space-y-4 text-slate-300">
                <p>• Data breaches and ransomware can damage trust and stop operations.</p>
                <p>• Weak on-site security can expose assets, staff, and facilities.</p>
                <p>• Clients trust companies that take protection seriously.</p>

                <p className="font-semibold text-white">
                  Our goal is simple: help keep your business secure, operational, and protected.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Dt3bza Security • Security & Cyber Protection
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/27646993670"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 rounded-full bg-green-500 px-5 py-4 font-semibold text-white shadow-lg hover:scale-105"
      >
        WhatsApp Us
      </a>


    </div>
  );
}
