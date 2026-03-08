export default function SecurityServicesWebsite() {
  const services = [
    {
      title: "Managed Cybersecurity Protection",
      text: "Ongoing protection for business systems, endpoints, user access, cloud environments, and operational security risk.",
    },
    {
      title: "Ransomware & Breach Defense",
      text: "Reduce exposure to ransomware, phishing, data breaches, and business email compromise with layered cyber defense strategies.",
    },
    {
      title: "Backup, Recovery & Business Continuity",
      text: "Protect critical data, plan for fast recovery, and strengthen operational resilience against incidents and downtime.",
    },
    {
      title: "AI-Enhanced Monitoring",
      text: "Use modern threat visibility and security workflows to identify suspicious behaviour earlier across your environment.",
    },
    {
      title: "CCTV & Surveillance Solutions",
      text: "Support physical site protection with camera systems designed for visibility, deterrence, monitoring, and review.",
    },
    {
      title: "Access Control & Scanner Security",
      text: "Strengthen business premises with controlled access, scanner systems, and layered entry-point protection.",
    },
  ];

  const industries = [
    "Law Firms",
    "Accounting Firms",
    "Construction",
    "Healthcare",
    "Warehousing",
    "Retail",
    "Corporate Offices",
    "High-Growth Businesses",
  ];

  const packages = [
    {
      title: "Foundation Security",
      price: "$250+",
      description: "A strong entry point for businesses ready to improve cyber resilience and reduce avoidable risk.",
      features: [
        "Security posture review",
        "Endpoint protection setup",
        "Backup and recovery guidance",
        "Core hardening recommendations",
      ],
    },
    {
      title: "Business Protection",
      price: "$650+",
      description: "Advanced protection for organizations managing sensitive data, multiple users, and operational systems.",
      features: [
        "Network security assessment",
        "Monitoring setup",
        "Data protection strategy",
        "Business continuity guidance",
      ],
      featured: true,
    },
    {
      title: "Executive Security",
      price: "Custom",
      description: "Strategic security support for larger organizations requiring a more advanced protection approach.",
      features: [
        "Security infrastructure planning",
        "AI-enhanced threat visibility",
        "Compliance and review support",
        "Incident response planning",
      ],
    },
  ];

  const metrics = [
    { value: "24/7", label: "Security mindset" },
    { value: "AI", label: "Enhanced visibility" },
    { value: "$250+", label: "Packages start here" },
    { value: "Global", label: "Remote support ready" },
  ];

  const trustPoints = [
    "Protection against ransomware, cyber extortion, and system compromise",
    "Backup and recovery strategies that reduce data loss and downtime",
    "Security reviews focused on real operational and technical weaknesses",
    "Integrated support across cybersecurity, surveillance, and access protection",
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <div className="fixed inset-0 -z-20 bg-[#030712]" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(6,182,212,0.16),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.14),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.10),_transparent_28%)]" />
      <div className="fixed inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:44px_44px]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl border border-cyan-400/20 bg-white/5 p-2 shadow-[0_0_40px_rgba(34,211,238,0.12)]">
              <img src="/logo.png" alt="Dt3bza Security logo" className="h-12 w-12 object-contain" />
            </div>
            <div>
              <div className="text-lg font-black tracking-[0.04em]">Dt3bza Security</div>
              <div className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                Cybersecurity, Surveillance & Business Protection
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a href="#services" className="rounded-xl border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400/40 hover:bg-white/5">Services</a>
            <a href="#industries" className="rounded-xl border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400/40 hover:bg-white/5">Industries</a>
            <a href="#pricing" className="rounded-xl border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400/40 hover:bg-white/5">Pricing</a>
            <a href="#contact" className="rounded-xl border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/5">Contact</a>
            <a href="https://wa.me/27646993670" target="_blank" rel="noreferrer" className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg transition hover:scale-[1.02]">WhatsApp</a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.08)]">
              Enterprise-Level Positioning • Premium Business Security
            </div>

            <h1 className="max-w-5xl text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl lg:leading-[1.02]">
              Serious protection for businesses that refuse to look vulnerable.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Dt3bza Security helps businesses protect digital systems, sensitive data, high-value operations, and physical environments through premium cybersecurity, surveillance, AI-enhanced monitoring, and layered business protection.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-2xl transition hover:scale-[1.02]">Book a Free Security Strategy Call</a>
              <a href="#pricing" className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/15">View Security Packages</a>
              <a href="mailto:info@dt3bza-security.com" className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5">Email Dt3bza Security</a>
            </div>

            <div className="mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur-sm">
                  <div className="text-2xl font-black text-white">{metric.value}</div>
                  <div className="mt-1 text-sm text-slate-300">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cyan-500/15 via-transparent to-emerald-500/15 blur-3xl" />
            <div className="relative rounded-[2.25rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="rounded-[1.75rem] border border-cyan-400/20 bg-slate-950/90 p-7">
                <div className="flex items-center gap-5">
                  <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-4 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
                    <img src="/logo.png" alt="Dt3bza brand mark" className="h-20 w-20 object-contain" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-cyan-300">Security Confidence</p>
                    <h3 className="mt-2 text-2xl font-bold">Built to look credible before the first call.</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Premium positioning, real business protection language, and services structured to attract serious clients.
                    </p>
                  </div>
                </div>

                <div className="mt-7 space-y-4">
                  {trustPoints.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
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

      <section className="border-b border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="grid gap-4 text-center sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Executive-style positioning",
              "Cyber + surveillance offering",
              "Premium business presentation",
              "Built for high-trust lead conversion",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Integrated Security Services</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">High-value protection across digital and physical environments</h2>
          <p className="mt-4 text-slate-300">
            Our service structure is designed to position Dt3bza Security like a serious security partner — not a small generic provider. Every service speaks to real business risk, continuity, and executive-level trust.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="group rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.07]">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.12)]">■</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="industries" className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Industries We Protect</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">Built for organizations that cannot afford security mistakes</h2>
              <p className="mt-4 text-slate-300">
                Dt3bza Security is positioned to serve businesses responsible for sensitive information, valuable operations, staff safety, business continuity, client trust, and asset protection.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {industries.map((industry) => (
                <div key={industry} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-center text-sm font-medium text-slate-200 shadow-lg">
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">About Dt3bza Security</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">A serious security brand for modern businesses</h2>
            <p className="mt-4 text-slate-300">
              Dt3bza Security is positioned as a premium business protection company focused on cybersecurity, surveillance, access control, continuity, and strategic risk reduction. We help organizations strengthen trust, resilience, and operational protection.
            </p>
            <p className="mt-4 text-slate-300">
              This brand is built to appeal to businesses that want stronger protection, clearer security structure, and a provider that presents like a high-value partner.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Executive Value</p>
            <div className="mt-6 space-y-4 text-slate-300">
              <p>• Stronger positioning for larger or more serious clients.</p>
              <p>• A business image that feels premium, stable, and security-focused.</p>
              <p>• Messaging built to improve trust before the first sales conversation.</p>
              <p className="font-semibold text-white">The goal is to make Dt3bza Security look like a brand clients can confidently spend money with.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Security Packages</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Premium packages with serious-client positioning</h2>
          <p className="mt-4 text-slate-300">
            Pricing is structured to present Dt3bza Security as a premium protection partner. Packages start from $250+ and scale based on infrastructure, operational complexity, surveillance requirements, and security scope.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <div key={pkg.title} className={`rounded-[2rem] p-6 shadow-2xl ${pkg.featured ? "border border-cyan-400/35 bg-cyan-400/10" : "border border-white/10 bg-white/5"}`}>
              {pkg.featured && <div className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">Recommended</div>}
              <h3 className="text-xl font-semibold">{pkg.title}</h3>
              <p className="mt-3 text-4xl font-black">{pkg.price}</p>
              <p className="mt-3 text-slate-300">{pkg.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" /><span>{feature}</span></li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 inline-flex rounded-2xl px-5 py-3 text-sm font-semibold ${pkg.featured ? "bg-white text-slate-950" : "border border-white/15 text-white"}`}>Request Pricing</a>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Free Strategy Review</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">Offer a conversation that feels premium, not desperate</h2>
              <p className="mt-4 text-slate-300">
                The website should move serious prospects toward a short strategy conversation. This lets you position yourself as a consultant-grade security provider rather than a low-end service seller.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-xl">
              <div className="space-y-4 text-slate-300">
                <p>• Review visible cyber and operational security risks</p>
                <p>• Discuss surveillance or access-control requirements</p>
                <p>• Recommend the most suitable protection path</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="https://wa.me/27646993670" target="_blank" rel="noreferrer" className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950">Book on WhatsApp</a>
                <a href="mailto:info@dt3bza-security.com?subject=Security%20Strategy%20Review" className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white">Book by Email</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)] lg:p-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Contact Dt3bza Security</p>
              <h2 className="mt-3 text-3xl font-black">Speak with a serious security brand</h2>
              <p className="mt-4 text-slate-300">
                Contact us to discuss cybersecurity services, surveillance, access control, risk reduction, and premium protection strategies for your business.
              </p>

              <div className="mt-6 space-y-3 text-slate-200">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Email: info@dt3bza-security.com</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">WhatsApp Business: 0646993670</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Founder Contact: 0684861332</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Service Area: South Africa • Remote & International Support</div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="mailto:info@dt3bza-security.com" className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950">Send an Email</a>
                <a href="https://wa.me/27646993670" target="_blank" rel="noreferrer" className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 px-5 py-3 text-sm font-semibold text-emerald-200">Message on WhatsApp</a>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-6 shadow-xl">
              <h3 className="text-xl font-semibold">Executive-style enquiry form</h3>
              <p className="mt-2 text-sm text-slate-400">Designed to feel premium and serious for higher-trust client enquiries.</p>
              <form className="mt-6 space-y-4">
                <input type="text" placeholder="Your Name" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500" />
                <input type="text" placeholder="Company Name" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500" />
                <input type="email" placeholder="Work Email" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500" />
                <input type="text" placeholder="Phone / WhatsApp" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500" />
                <textarea placeholder="Tell us about your security needs" rows={5} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-500" />
                <button type="button" className="w-full rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950">Request Security Consultation</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950/80 py-8 text-center text-sm text-slate-400">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Dt3bza Security • Cybersecurity, Surveillance & Business Protection</p>
          <p className="mt-2">Positioned to protect modern businesses with stronger resilience, premium presentation, and serious security support.</p>
        </div>
      </footer>

      <a href="https://wa.me/27646993670" target="_blank" rel="noreferrer" aria-label="Chat with Dt3bza Security on WhatsApp" className="fixed bottom-6 right-6 z-50 rounded-full border border-emerald-300/30 bg-emerald-500 px-5 py-4 font-semibold text-white shadow-2xl shadow-emerald-500/20 transition hover:scale-105">WhatsApp Us</a>
    </div>
  );
}
