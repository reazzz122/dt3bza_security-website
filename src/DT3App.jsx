import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Header, Footer } from "./Layout.jsx";

const FAQ_ITEMS = [
  {
    q: "Why UNITI instead of just WhatsApp groups?",
    a: "WhatsApp groups have no structure, no GPS, no incident tracking, and no escalation. UNITI maps every report, tracks response, dispatches to the nearest available unit, and keeps a permanent record. WhatsApp disappears. UNITI logs everything."
  },
  {
    q: "When is UNITI launching?",
    a: "Android launch is targeted for December 2026 on Google Play. iOS follows in Q1 2027. Security companies get early access 30 days before public launch with a free 3-month trial."
  },
  {
    q: "I already use a private armed response. Why do I need UNITI?",
    a: "Armed response protects your property. UNITI protects your whole neighbourhood — and gives your armed response company better intelligence to respond faster. It's the layer underneath, not a replacement."
  },
  {
    q: "Can security companies use UNITI for their operations?",
    a: "Yes — that's the B2B layer. Officers clock in, get dispatched, scan QR checkpoints and submit incident reports all through UNITI. Dispatchers see everything live. Register your company now to get early access."
  },
  {
    q: "Is my location data private?",
    a: "Your location is only shared when you activate a panic alert or opt into neighbourhood watch. It is never sold, never shared with third parties, and is governed by POPIA. Full privacy policy applies."
  },
  {
    q: "What areas will UNITI cover at launch?",
    a: "Western Cape first — Cape Town metro, surrounding suburbs and key N1/N2 corridors. We expand district by district based on community adoption. Your area gets coverage when enough residents join."
  },
  {
    q: "How much will UNITI cost?",
    a: "Free tier for basic community alerts. UNITI Plus at R89/month for full panic dispatch and priority response. UNITI Pro for security companies at R699/month per company. Pricing confirmed at launch."
  },
  {
    q: "What if SAPS doesn't respond?",
    a: "UNITI doesn't rely on SAPS. Panic alerts go to your registered emergency contacts AND the nearest UNITI-connected private security unit. Public services are notified in parallel, not as the primary response."
  },
];

function FAQItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        cursor: "pointer",
      }}
      onClick={() => setOpen(!open)}
    >
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "flex-start",
        padding: "28px 0", gap: 16,
      }}>
        <h3 style={{
          fontSize: "clamp(1rem,2.5vw,1.2rem)", fontWeight: 700,
          color: "#fff", lineHeight: 1.3, letterSpacing: "-0.01em",
        }}>{item.q}</h3>
        <span style={{
          fontSize: "1.4rem", color: "rgba(255,255,255,0.4)",
          flexShrink: 0, transition: "transform 0.2s",
          transform: open ? "rotate(45deg)" : "none",
          marginTop: 2,
        }}>+</span>
      </div>
      {open && (
        <div style={{
          paddingBottom: 28, marginTop: -8,
          fontSize: "0.95rem", color: "rgba(255,255,255,0.5)",
          lineHeight: 1.75, maxWidth: 640,
        }}>{item.a}</div>
      )}
    </div>
  );
}

export default function DT3App() {
  return (
    <div className="page-shell">
      <Header />

      {/* HERO */}
      <section className="hero-cinematic">
        <div className="hero-bg" />
        <div className="hero-grid-lines" />
        <div className="container hero-content fade-up">
          <div className="hero-eyebrow">Coming December 2026 · Android First · Western Cape</div>
          <h1 className="hero-title-cinematic">
            Community safety<br /><em>intelligence. Finally.</em>
          </h1>
          <p className="hero-subtitle">
            UNITI is Africa's first real-time community safety platform — live crime map,
            panic alerts, neighbourhood watch and private security dispatch in one app.
            Join the waitlist now.
          </p>
          <div className="hero-actions-cine">
            <a className="btn-cine-primary" href="https://wa.me/27684861332?text=Hello%20I%20want%20early%20access%20to%20UNITI" target="_blank" rel="noreferrer">
              Join the Waitlist →
            </a>
            <a className="btn-cine-ghost" href="https://wa.me/27684861332?text=Hello%20I%20want%20to%20register%20my%20security%20company%20for%20UNITI" target="_blank" rel="noreferrer">
              Register Your Company <span className="hero-arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* IN DEVELOPMENT BANNER */}
      <div style={{background:"rgba(232,184,75,0.07)",borderTop:"1px solid rgba(232,184,75,0.2)",borderBottom:"1px solid rgba(232,184,75,0.2)",padding:"14px 0"}}>
        <div className="container" style={{display:"flex",alignItems:"center",gap:12,flexWrap:"wrap"}}>
          <span style={{fontFamily:"'Share Tech Mono',monospace",fontSize:"0.6rem",letterSpacing:"0.2em",color:"#e8b84b",border:"1px solid rgba(232,184,75,0.3)",padding:"3px 8px"}}>IN DEVELOPMENT</span>
          <span style={{fontSize:"0.82rem",color:"rgba(255,255,255,0.4)"}}>UNITI is being built right now. App UI below is a concept preview — not a live system.</span>
        </div>
      </div>

      {/* STATS */}
      <section className="stats-cine">
        <div className="container">
          <div className="stats-cine-grid">
            {[
              {num:"Dec '26", label:"Android launch on Google Play. Western Cape first."},
              {num:"R89", label:"Per month for UNITI Plus — full panic dispatch and priority response."},
              {num:"3", label:"Partner security companies already registered for early access."},
            ].map((s,i) => (
              <div className="stat-cine" key={i} style={{paddingLeft:i>0?"40px":"0"}}>
                <div className="stat-cine-num">{s.num}</div>
                <div className="stat-cine-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APP PREVIEW */}
      <section className="app-section-cine">
        <div className="container app-grid-cine">
          <div>
            <div className="section-eyebrow">Platform Preview</div>
            <h2 className="section-title-cine">What UNITI will<br /><em>look like.</em></h2>
            <p className="section-body">Every incident pinned. Officers tracked. Panic alerts dispatched in seconds. Community watch built in from day one.</p>
            <p style={{fontSize:"0.75rem",color:"rgba(232,184,75,0.6)",marginTop:16,fontFamily:"'Share Tech Mono',monospace",letterSpacing:"0.1em"}}>↓ CONCEPT UI · LAUNCHING DEC 2026</p>
          </div>
          <div className="app-screen-cine" style={{opacity:0.72}}>
            <div className="app-topbar-cine">
              <div>
                <div className="app-logo-cine">UNITI</div>
                <div className="app-sub-cine">WESTERN CAPE</div>
              </div>
              <div style={{display:"inline-flex",alignItems:"center",gap:5,border:"1px solid rgba(232,184,75,0.3)",padding:"3px 10px",fontFamily:"'Share Tech Mono',monospace",fontSize:"0.55rem",color:"#e8b84b",letterSpacing:"0.1em"}}>PREVIEW</div>
            </div>
            <div className="app-stats-cine">
              {[{v:"—",l:"ACTIVE",c:"rgba(255,255,255,0.2)"},{v:"—",l:"ALERTS",c:"rgba(255,255,255,0.2)"},{v:"—",l:"ON DUTY",c:"rgba(255,255,255,0.2)"},{v:"—",l:"CLOSED",c:"rgba(255,255,255,0.2)"}].map((s,i)=>(
                <div className="app-stat-cine" key={i}>
                  <div className="app-stat-val-cine" style={{color:s.c}}>{s.v}</div>
                  <div className="app-stat-lbl-cine">{s.l}</div>
                </div>
              ))}
            </div>
            {[
              {id:"PREVIEW",title:"Live Incident Feed",area:"Cape Town — launching Dec 2026",sev:"COMING",sevColor:"#e8b84b",ac:"#e8b84b"},
              {id:"PREVIEW",title:"Panic Alert Dispatch",area:"Western Cape coverage",sev:"COMING",sevColor:"rgba(255,255,255,0.2)",ac:"rgba(255,255,255,0.08)"},
              {id:"PREVIEW",title:"Community Watch Feed",area:"Neighbourhood intelligence",sev:"COMING",sevColor:"rgba(255,255,255,0.2)",ac:"rgba(255,255,255,0.08)"},
            ].map((inc,i)=>(
              <div className="app-inc-cine" key={i}>
                <div className="inc-accent-cine" style={{background:inc.ac}}/>
                <div style={{flex:1}}>
                  <span className="inc-id-cine">{inc.id}</span>
                  <div className="inc-title-cine">{inc.title}</div>
                  <div className="inc-area-cine">{inc.area}</div>
                </div>
                <div className="inc-badge-cine" style={{color:inc.sevColor,borderColor:inc.sevColor}}>{inc.sev}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANNED FEATURES */}
      <section className="section-cine" style={{borderTop:"1px solid rgba(255,255,255,0.08)"}}>
        <div className="container">
          <div className="section-cine-header">
            <div className="section-eyebrow">What's Being Built</div>
            <h2 className="section-title-cine">Phase 1 features<br /><em>in development.</em></h2>
          </div>
          <div className="feature-list">
            {[
              {n:"01",name:"Live Crime Map",tag:"BUILDING",tagColor:"#4be8a0",desc:"Real-time incident pins and heatmaps across Western Cape. Report from your phone, see what's happening around you."},
              {n:"02",name:"Panic Button",tag:"BUILDING",tagColor:"#4be8a0",desc:"One tap sends your GPS to emergency contacts and the nearest security unit. No call required."},
              {n:"03",name:"Community Watch",tag:"BUILDING",tagColor:"#4be8a0",desc:"Neighbourhood feeds where residents report suspicious activity, share alerts and coordinate watch groups."},
              {n:"04",name:"UNITI News",tag:"BUILDING",tagColor:"#4be8a0",desc:"Localised crime and safety news for your area. Curated, relevant, updated in real time."},
              {n:"05",name:"Security Company Dashboard",tag:"PHASE 2",tagColor:"rgba(255,255,255,0.25)",desc:"Full B2B layer — officer dispatch, shift management, guard tours, incident reporting and crime intelligence."},
              {n:"06",name:"AI Crime Intelligence",tag:"PHASE 2",tagColor:"rgba(255,255,255,0.25)",desc:"Pattern detection, predictive hotspots and automated threat scoring powered by community data."},
            ].map((f,i)=>(
              <div className="feature-row" key={i}>
                <div className="feature-num">{f.n}</div>
                <div style={{display:"flex",flexDirection:"column",gap:6}}>
                  <div style={{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"}}>
                    <span className="feature-name" style={{marginBottom:0}}>{f.name}</span>
                    <span style={{fontFamily:"'Share Tech Mono',monospace",fontSize:"0.5rem",letterSpacing:"0.15em",padding:"3px 7px",border:`1px solid ${f.tagColor}`,color:f.tagColor}}>{f.tag}</span>
                  </div>
                </div>
                <div className="feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL — placeholder honest version */}
      <section style={{padding:"80px 0",background:"rgba(255,255,255,0.02)",borderTop:"1px solid rgba(255,255,255,0.08)"}}>
        <div className="container">
          <div style={{maxWidth:720}}>
            <div style={{fontSize:"4rem",color:"rgba(192,200,216,0.2)",lineHeight:1,marginBottom:24,fontFamily:"Georgia,serif"}}>"</div>
            <p style={{fontSize:"clamp(1.3rem,3vw,2rem)",fontWeight:700,color:"#fff",lineHeight:1.35,letterSpacing:"-0.02em",marginBottom:32}}>
              WhatsApp groups are chaos when something actually happens. You need a system, not a group chat.
            </p>
            <div style={{display:"flex",alignItems:"center",gap:14}}>
              <div style={{width:44,height:44,borderRadius:"50%",background:"rgba(192,200,216,0.1)",border:"1px solid rgba(192,200,216,0.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.8rem",fontWeight:700,color:"rgba(192,200,216,0.6)"}}>DT</div>
              <div>
                <div style={{fontSize:"0.9rem",fontWeight:700,color:"#fff"}}>Tebza — DT3BZA Security</div>
                <div style={{fontSize:"0.78rem",color:"rgba(255,255,255,0.35)"}}>Founder · Western Cape</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="section-cine" style={{borderTop:"1px solid rgba(255,255,255,0.08)"}}>
        <div className="container">
          <div className="section-cine-header">
            <div className="section-eyebrow">Roadmap</div>
            <h2 className="section-title-cine">When it's<br /><em>coming.</em></h2>
          </div>
          <div className="feature-list">
            {[
              {n:"Q4 2026",name:"Android Launch",desc:"UNITI on Google Play. Community map, panic button, neighbourhood watch. Western Cape only."},
              {n:"Q1 2027",name:"iOS Launch",desc:"iPhone version on App Store. Full feature parity. Same pricing."},
              {n:"Q2 2027",name:"B2B Security Dashboard",desc:"Security companies get dispatch, officer tracking, incident management and guard tours."},
              {n:"Q3 2027",name:"AI Intelligence Layer",desc:"Crime pattern detection, predictive hotspots and automated threat scoring."},
            ].map((f,i)=>(
              <div className="feature-row" key={i}>
                <div className="feature-num" style={{color:"rgba(232,184,75,0.7)"}}>{f.n}</div>
                <div className="feature-name">{f.name}</div>
                <div className="feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EARLY ACCESS PARTNERS */}
      <section className="section-cine" style={{borderTop:"1px solid rgba(255,255,255,0.08)"}}>
        <div className="container">
          <div className="section-cine-header">
            <div className="section-eyebrow">Early Access</div>
            <h2 className="section-title-cine">Building with us<br /><em>from day one.</em></h2>
            <p className="section-body">These companies are registered for early access and will be live on UNITI at launch.</p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1px",background:"rgba(255,255,255,0.06)",maxWidth:560}}>
            {[
              {name:"DT3BZA Security",role:"Platform Developer"},
              {name:"FHTE Solutions",role:"Early Access Partner"},
              {name:"FKN Solutions",role:"Early Access Partner"},
            ].map((c,i)=>(
              <div key={i} style={{background:"#000",padding:"28px"}}>
                <div style={{fontSize:"0.9rem",fontWeight:700,color:"#fff",marginBottom:6}}>{c.name}</div>
                <div style={{fontSize:"0.75rem",color:"rgba(255,255,255,0.35)"}}>{c.role}</div>
              </div>
            ))}
          </div>
          <div style={{marginTop:36,display:"flex",gap:12,flexWrap:"wrap"}}>
            <a className="btn-cine-primary" href="https://wa.me/27684861332?text=Hello%20I%20want%20to%20register%20my%20security%20company%20for%20UNITI%20early%20access" target="_blank" rel="noreferrer">Register Your Company</a>
            <a className="btn-cine-ghost" href="https://wa.me/27684861332?text=Hello%20I%20want%20early%20access%20to%20UNITI" target="_blank" rel="noreferrer">Join Waitlist <span className="hero-arrow">→</span></a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-cine" style={{borderTop:"1px solid rgba(255,255,255,0.08)"}}>
        <div className="container">
          <div className="section-cine-header">
            <div className="section-eyebrow">06 / FAQ</div>
            <h2 className="section-title-cine">Questions people<br /><em>actually ask.</em></h2>
          </div>
          <div style={{maxWidth:760}}>
            {FAQ_ITEMS.map((item, i) => (
              <FAQItem key={i} item={item} />
            ))}
            <div style={{borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:32,marginTop:8}}>
              <p style={{fontSize:"0.88rem",color:"rgba(255,255,255,0.35)",marginBottom:16}}>Still have questions?</p>
              <a className="btn-cine-ghost" href="https://wa.me/27684861332?text=Hello%20I%20have%20a%20question%20about%20UNITI" target="_blank" rel="noreferrer">Ask us on WhatsApp <span className="hero-arrow">→</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-cine">
        <div className="container">
          <h2 className="cta-cine-title">Be first in<br /><em>Western Cape.</em></h2>
          <p style={{fontSize:"1rem",color:"rgba(255,255,255,0.45)",marginBottom:36,maxWidth:480,lineHeight:1.7}}>
            Join the waitlist. We notify you the moment UNITI hits Google Play.
            Security companies get 30-day early access and a free 3-month trial.
          </p>
          <div style={{display:"flex",gap:16,flexWrap:"wrap"}}>
            <a className="btn-cine-primary" href="https://wa.me/27684861332?text=Hello%20I%20want%20early%20access%20to%20UNITI" target="_blank" rel="noreferrer">Join Waitlist →</a>
            <a className="btn-cine-ghost" href="https://wa.me/27684861332" target="_blank" rel="noreferrer">WhatsApp Us <span className="hero-arrow">→</span></a>
          </div>
        </div>
      </section>

      <a className="floating-whatsapp" href="https://wa.me/27684861332" target="_blank" rel="noreferrer">WhatsApp Us</a>
      <Footer />
    </div>
  );
}
