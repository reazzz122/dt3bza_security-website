import { useState } from "react";
import { Header, Footer } from "./Layout.jsx";

const SURVEY_STEPS = [
  {
    id: "need",
    q: "What's driving this?",
    type: "single",
    options: [
      { v: "incident", label: "Something already happened", icon: "🚨" },
      { v: "new", label: "Setting up a new property", icon: "🏗️" },
      { v: "upgrade", label: "Old system needs replacing", icon: "🔄" },
      { v: "insurance", label: "Insurance requirement", icon: "📋" },
      { v: "proactive", label: "Just being proactive", icon: "🛡️" },
    ],
  },
  {
    id: "property",
    q: "Type of property?",
    type: "single",
    options: [
      { v: "home", label: "Residential home" },
      { v: "smalloffice", label: "Small business / office" },
      { v: "warehouse", label: "Warehouse / industrial" },
      { v: "school", label: "School / institution" },
      { v: "construction", label: "Construction site" },
      { v: "complex", label: "Complex / estate" },
    ],
  },
  {
    id: "placement",
    q: "Where do you need cameras?",
    type: "multi",
    options: [
      { v: "entrance", label: "Entrances & gates" },
      { v: "perimeter", label: "Perimeter / boundary" },
      { v: "parking", label: "Parking area" },
      { v: "internal", label: "Inside the building" },
      { v: "roof", label: "Roofline / high angles" },
      { v: "storage", label: "Storage / server room" },
    ],
  },
  {
    id: "cameras",
    q: "How many cameras?",
    type: "single",
    options: [
      { v: "1-4", label: "1–4 cameras", hint: "Single entrance / small home" },
      { v: "5-8", label: "5–8 cameras", hint: "Medium property, full perimeter" },
      { v: "9-16", label: "9–16 cameras", hint: "Large site or multi-area" },
      { v: "17+", label: "17+ cameras", hint: "Enterprise / campus scale" },
    ],
  },
  {
    id: "existing",
    q: "What do you currently have?",
    type: "single",
    options: [
      { v: "nothing", label: "Nothing at all" },
      { v: "broken", label: "Cameras that don't work" },
      { v: "old_analog", label: "Old analog system" },
      { v: "partial", label: "Some cameras, needs more" },
      { v: "full_upgrade", label: "Full system, needs upgrade" },
    ],
  },
  {
    id: "features",
    q: "What matters most?",
    type: "multi",
    options: [
      { v: "night", label: "Night vision / IR" },
      { v: "remote", label: "Remote viewing on phone" },
      { v: "ai", label: "Motion detection / alerts" },
      { v: "storage", label: "Long recording storage" },
      { v: "lpr", label: "Number plate recognition" },
      { v: "audio", label: "Audio recording" },
    ],
  },
  {
    id: "urgency",
    q: "How urgent?",
    type: "single",
    options: [
      { v: "now", label: "Immediately — something happened" },
      { v: "week", label: "This week" },
      { v: "month", label: "Within a month" },
      { v: "flexible", label: "Flexible — planning ahead" },
    ],
  },
  {
    id: "contact",
    q: "Your WhatsApp number?",
    type: "text",
    placeholder: "e.g. 082 000 0000",
    hint: "Tebogo responds within 2 hours",
  },
];

function getEstimate(answers) {
  const camMap = { "1-4":[3500,8000], "5-8":[8000,18000], "9-16":[18000,38000], "17+":[38000,90000] };
  const range = camMap[answers.cameras];
  if (!range) return null;
  let [low, high] = range;
  if (answers.placement?.includes("roof")) { low *= 1.1; high *= 1.15; }
  if (answers.features?.includes("lpr")) { low += 2000; high += 6000; }
  if (answers.features?.includes("ai")) { low += 1000; high += 3000; }
  return `R${Math.round(low/100)*100} – R${Math.round(high/100)*100}`;
}

function buildWA(answers) {
  const lines = [
    `*DT3BZA Security — CCTV Quote*`,
    ``,
    `*Contact:* ${answers.contact || "Not provided"}`,
    answers.need && `*Reason:* ${answers.need}`,
    answers.property && `*Property:* ${answers.property}`,
    answers.placement?.length && `*Camera areas:* ${answers.placement.join(", ")}`,
    answers.cameras && `*Cameras needed:* ${answers.cameras}`,
    answers.existing && `*Current setup:* ${answers.existing}`,
    answers.features?.length && `*Key features:* ${answers.features.join(", ")}`,
    answers.urgency && `*Urgency:* ${answers.urgency}`,
    ``,
    `*Estimate shown:* ${getEstimate(answers) || "To be assessed"}`,
  ].filter(Boolean).join("\n");
  return encodeURIComponent(lines);
}

export default function CCTV() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [done, setDone] = useState(false);

  function handleSingle(v) {
    const updated = { ...answers, [SURVEY_STEPS[step].id]: v };
    setAnswers(updated);
    if (step + 1 >= SURVEY_STEPS.length) setDone(true);
    else setStep(step + 1);
  }

  function handleMulti(v) {
    const cur = answers[SURVEY_STEPS[step].id] || [];
    setAnswers({ ...answers, [SURVEY_STEPS[step].id]: cur.includes(v) ? cur.filter(x => x !== v) : [...cur, v] });
  }

  function handleText(v) { setAnswers({ ...answers, [SURVEY_STEPS[step].id]: v }); }
  function handleNext() { if (step + 1 >= SURVEY_STEPS.length) setDone(true); else setStep(step + 1); }
  function handleBack() { if (step > 0) setStep(step - 1); }
  function handleRestart() { setAnswers({}); setStep(0); setDone(false); }

  const current = SURVEY_STEPS[step];
  const progress = (step / SURVEY_STEPS.length) * 100;
  const val = answers[current?.id];
  const estimate = getEstimate(answers);
  const urgent = answers.urgency === "now" || answers.need === "incident";

  return (
    <div className="page-shell">
      <Header />

      {/* HERO — full bleed camera image */}
      <section style={{position:"relative",minHeight:"100vh",display:"flex",alignItems:"flex-end",paddingBottom:100,overflow:"hidden"}}>
        {/* Camera image background — all 4 angles */}
        <div style={{position:"absolute",inset:0,backgroundImage:"url('/cctv-cameras.png')",backgroundSize:"cover",backgroundPosition:"center"}}/>
        {/* Dark overlay gradient */}
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.95) 100%)"}}/>
        <div className="container" style={{position:"relative",zIndex:2}}>
          <div className="hero-eyebrow">Service 02 · Available Now · 50km Free Assessment</div>
          <h1 className="hero-title-cinematic">CCTV &amp;<br /><em>Surveillance.</em></h1>
          <p className="hero-subtitle">Professional installation across the Western Cape. Answer 7 questions — get an instant ZAR estimate. No generic pricing, no waiting.</p>
          <div className="hero-actions-cine">
            <a className="btn-cine-primary" href="#assessment">Get Instant Estimate →</a>
            <a className="btn-cine-ghost" href="https://wa.me/27684861332?text=Hello%20I%20need%20a%20CCTV%20quote" target="_blank" rel="noreferrer">WhatsApp Tebogo <span className="hero-arrow">→</span></a>
          </div>
        </div>
      </section>

      {/* CAMERA IMAGE STRIP — 4 angles */}
      <section style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:2,background:"#000"}}>
        {[
          {label:"FRONT ANGLE",desc:"Wide coverage lens"},
          {label:"SIDE PROFILE",desc:"IP67 weatherproof"},
          {label:"LOW ANGLE",desc:"Ground-level mount"},
          {label:"REAR MOUNT",desc:"Wall bracket system"},
        ].map((item,i) => (
          <div key={i} style={{position:"relative",overflow:"hidden",height:280}}>
            <div style={{
              position:"absolute",inset:0,
              backgroundImage:"url('/cctv-cameras.png')",
              backgroundSize:"400% 200%",
              backgroundPosition: i === 0 ? "0% 0%" : i === 1 ? "100% 0%" : i === 2 ? "0% 100%" : "100% 100%",
              filter:"brightness(0.7)",
              transition:"filter 0.3s",
            }}/>
            <div style={{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)"}}/>
            <div style={{position:"absolute",bottom:16,left:16}}>
              <div style={{fontFamily:"'Share Tech Mono',monospace",fontSize:"0.55rem",letterSpacing:"0.2em",color:"#c0c8d8",marginBottom:4}}>{item.label}</div>
              <div style={{fontSize:"0.78rem",color:"rgba(255,255,255,0.45)"}}>{item.desc}</div>
            </div>
          </div>
        ))}
      </section>

      {/* SMART ASSESSMENT */}
      <section className="section-cine" id="assessment" style={{borderTop:"1px solid rgba(255,255,255,0.08)"}}>
        <div className="container" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:64,alignItems:"start"}}>
          <div>
            <div className="section-eyebrow">Smart Assessment</div>
            <h2 className="section-title-cine">7 questions.<br /><em>Instant estimate.</em></h2>
            <p className="section-body">Better than any quote form. Tell us what you need, get a live ZAR estimate, then your full brief goes straight to Tebogo's WhatsApp.</p>
            <div style={{marginTop:36,display:"flex",flexDirection:"column",gap:14}}>
              {[
                "Free on-site assessment within 50km of Cape Town",
                "Estimate confirmed after site visit with Tebogo",
                "No lock-in contracts — quoted per job",
                "PSIRA registered company",
              ].map((item,i) => (
                <div key={i} style={{display:"flex",alignItems:"center",gap:12}}>
                  <span style={{width:6,height:6,borderRadius:"50%",background:"#c0c8d8",flexShrink:0}}/>
                  <span style={{fontSize:"0.88rem",color:"rgba(255,255,255,0.5)"}}>{item}</span>
                </div>
              ))}
            </div>
            {estimate && (
              <div style={{marginTop:32,background:"rgba(192,200,216,0.06)",border:"1px solid rgba(192,200,216,0.2)",padding:"20px 24px"}}>
                <div style={{fontFamily:"'Share Tech Mono',monospace",fontSize:"0.55rem",letterSpacing:"0.2em",color:"rgba(192,200,216,0.5)",marginBottom:8}}>LIVE ESTIMATE</div>
                <div style={{fontSize:"2rem",fontWeight:800,color:"#c0c8d8",letterSpacing:"-0.03em"}}>{estimate}</div>
                <div style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.25)",marginTop:4}}>Updates as you answer</div>
              </div>
            )}
          </div>

          {/* Survey card */}
          <div style={{background:"#080a0f",border:"1px solid rgba(255,255,255,0.09)",overflow:"hidden"}}>
            {/* Progress */}
            <div style={{height:"2px",background:"rgba(255,255,255,0.05)"}}>
              <div style={{height:"100%",background:"#c0c8d8",width:`${done ? 100 : progress}%`,transition:"width 0.4s ease"}}/>
            </div>

            {done ? (
              <div style={{padding:"28px"}}>
                {urgent && (
                  <div style={{background:"rgba(232,92,75,0.1)",border:"1px solid rgba(232,92,75,0.2)",padding:"10px 16px",marginBottom:20,display:"flex",alignItems:"center",gap:8,fontFamily:"'Share Tech Mono',monospace",fontSize:"0.6rem",color:"#e85c4b",letterSpacing:"0.15em"}}>
                    <span style={{width:6,height:6,borderRadius:"50%",background:"#e85c4b",flexShrink:0}}/>
                    PRIORITY — TEBOGO WILL CALL WITHIN 1 HOUR
                  </div>
                )}
                {estimate && (
                  <div style={{background:"rgba(192,200,216,0.05)",borderBottom:"1px solid rgba(192,200,216,0.12)",padding:"20px",marginBottom:20}}>
                    <div style={{fontFamily:"'Share Tech Mono',monospace",fontSize:"0.55rem",letterSpacing:"0.2em",color:"rgba(192,200,216,0.4)",marginBottom:6}}>YOUR ESTIMATE</div>
                    <div style={{fontSize:"2rem",fontWeight:800,color:"#c0c8d8",letterSpacing:"-0.03em",marginBottom:4}}>{estimate}</div>
                    <div style={{fontSize:"0.7rem",color:"rgba(255,255,255,0.25)"}}>Confirmed after Tebogo's free site visit</div>
                  </div>
                )}
                <h3 style={{fontSize:"1.2rem",fontWeight:700,color:"#fff",marginBottom:10,lineHeight:1.2}}>Brief ready.<br /><span style={{color:"rgba(255,255,255,0.35)"}}>Send it now.</span></h3>
                <p style={{fontSize:"0.82rem",color:"rgba(255,255,255,0.4)",lineHeight:1.65,marginBottom:20}}>Your answers are pre-loaded into WhatsApp. Tebogo responds within 2 hours.</p>
                <a href={`https://wa.me/27684861332?text=${buildWA(answers)}`} target="_blank" rel="noreferrer"
                  style={{display:"block",background:"#fff",color:"#000",padding:"14px 20px",fontSize:"0.88rem",fontWeight:700,letterSpacing:"0.05em",textAlign:"center",textDecoration:"none",marginBottom:10}}>
                  Send to Tebogo on WhatsApp →
                </a>
                <button onClick={handleRestart}
                  style={{display:"block",background:"none",border:"none",color:"rgba(255,255,255,0.2)",fontSize:"0.75rem",cursor:"pointer",padding:"8px 0",width:"100%",textAlign:"center"}}>
                  Start over
                </button>
              </div>
            ) : (
              <div style={{padding:"20px"}}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:16}}>
                  <span style={{fontFamily:"'Share Tech Mono',monospace",fontSize:"0.58rem",color:"rgba(255,255,255,0.2)",letterSpacing:"0.15em"}}>{step + 1} / {SURVEY_STEPS.length}</span>
                  <span style={{fontFamily:"'Share Tech Mono',monospace",fontSize:"0.58rem",color:"rgba(255,255,255,0.2)",letterSpacing:"0.2em"}}>CCTV ASSESSMENT</span>
                </div>
                <h3 style={{fontSize:"1.15rem",fontWeight:700,color:"#fff",letterSpacing:"-0.02em",lineHeight:1.2,marginBottom:20}}>{current.q}</h3>

                {current.type === "single" && (
                  <div style={{display:"flex",flexDirection:"column",gap:5}}>
                    {current.options.map(opt => (
                      <button key={opt.v}
                        style={{display:"flex",alignItems:"center",gap:12,padding:"12px 14px",background:val===opt.v?"rgba(192,200,216,0.08)":"rgba(255,255,255,0.02)",border:val===opt.v?"1px solid rgba(192,200,216,0.3)":"1px solid rgba(255,255,255,0.06)",cursor:"pointer",textAlign:"left",width:"100%",transition:"all 0.15s"}}
                        onClick={() => handleSingle(opt.v)}>
                        <span style={{width:16,height:16,border:`1.5px solid ${val===opt.v?"#c0c8d8":"rgba(255,255,255,0.2)"}`,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                          {val===opt.v && <span style={{width:7,height:7,borderRadius:"50%",background:"#c0c8d8"}}/>}
                        </span>
                        <span style={{fontSize:"0.85rem",color:"#fff",fontWeight:500,flex:1}}>
                          {opt.icon && <span style={{marginRight:8}}>{opt.icon}</span>}{opt.label}
                        </span>
                        {opt.hint && <span style={{fontSize:"0.68rem",color:"rgba(255,255,255,0.25)"}}>{opt.hint}</span>}
                      </button>
                    ))}
                  </div>
                )}

                {current.type === "multi" && (
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
                    {current.options.map(opt => {
                      const sel = (val||[]).includes(opt.v);
                      return (
                        <button key={opt.v}
                          style={{padding:"10px 12px",background:sel?"rgba(192,200,216,0.08)":"rgba(255,255,255,0.02)",border:sel?"1px solid rgba(192,200,216,0.35)":"1px solid rgba(255,255,255,0.07)",cursor:"pointer",fontSize:"0.8rem",color:sel?"#fff":"rgba(255,255,255,0.7)",textAlign:"left",transition:"all 0.15s"}}
                          onClick={() => handleMulti(opt.v)}>
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                )}

                {current.type === "text" && (
                  <div>
                    <input style={{width:"100%",background:"rgba(255,255,255,0.03)",border:"none",borderBottom:"1px solid rgba(255,255,255,0.15)",padding:"14px 0",fontSize:"1rem",color:"#fff",outline:"none",fontFamily:"inherit",boxSizing:"border-box"}}
                      placeholder={current.placeholder} value={val||""} onChange={e => handleText(e.target.value)}
                      onKeyDown={e => e.key==="Enter" && handleNext()} autoFocus/>
                    {current.hint && <p style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.25)",marginTop:8}}>{current.hint}</p>}
                  </div>
                )}

                <div style={{display:"flex",gap:8,justifyContent:"space-between",marginTop:20,paddingTop:16,borderTop:"1px solid rgba(255,255,255,0.05)"}}>
                  {step > 0 && <button onClick={handleBack} style={{background:"none",border:"none",color:"rgba(255,255,255,0.3)",fontSize:"0.8rem",cursor:"pointer",padding:"8px 0"}}>← Back</button>}
                  {current.type === "multi" && (val?.length > 0) && (
                    <button onClick={handleNext} style={{background:"#fff",color:"#000",border:"none",padding:"10px 20px",fontSize:"0.82rem",fontWeight:700,letterSpacing:"0.05em",cursor:"pointer",marginLeft:"auto"}}>Continue →</button>
                  )}
                  {current.type === "text" && (
                    <button onClick={handleNext} style={{background:"#fff",color:"#000",border:"none",padding:"10px 20px",fontSize:"0.82rem",fontWeight:700,letterSpacing:"0.05em",cursor:"pointer",marginLeft:"auto"}}>{val ? "Get estimate →" : "Skip →"}</button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* WHAT WE INSTALL */}
      <section className="section-cine" style={{borderTop:"1px solid rgba(255,255,255,0.08)"}}>
        <div className="container">
          <div className="section-cine-header">
            <div className="section-eyebrow">What We Install</div>
            <h2 className="section-title-cine">Full-spectrum<br /><em>surveillance.</em></h2>
          </div>
          <div className="feature-list">
            {[
              {n:"01",name:"HD IP Camera Systems",desc:"4MP–8MP IP cameras with night vision, wide dynamic range and IP67 weatherproof housings. PoE or wireless options."},
              {n:"02",name:"NVR / DVR Setup",desc:"Network video recorders with 30–90 day local storage. Remote mobile access included on every installation."},
              {n:"03",name:"AI Motion Detection",desc:"Smart detection that separates people from cars from animals. Instant push alerts to your phone — no false alarms."},
              {n:"04",name:"Number Plate Recognition",desc:"LPR cameras for access control at gates and parking. Logs every vehicle with timestamp automatically."},
              {n:"05",name:"Maintenance & Repair",desc:"Ongoing support, lens cleaning, firmware updates and emergency call-outs for existing systems across the Western Cape."},
              {n:"06",name:"System Upgrades",desc:"Migrate outdated analog to modern IP. Reuse existing cable runs where possible to keep your costs down."},
            ].map((f,i) => (
              <div className="feature-row" key={i}>
                <div className="feature-num">{f.n}</div>
                <div className="feature-name">{f.name}</div>
                <div className="feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-cine" style={{paddingTop:80}}>
        <div className="container">
          <h2 className="cta-cine-title">Quoted per<br /><em>your site.</em></h2>
          <div style={{display:"flex",gap:16,flexWrap:"wrap"}}>
            <a className="btn-cine-primary" href="https://wa.me/27684861332?text=Hello%20I%20need%20a%20CCTV%20quote" target="_blank" rel="noreferrer">WhatsApp Tebogo →</a>
            <a className="btn-cine-ghost" href="#assessment">Get Instant Estimate <span className="hero-arrow">→</span></a>
          </div>
        </div>
      </section>

      <a className="floating-whatsapp" href="https://wa.me/27684861332" target="_blank" rel="noreferrer">WhatsApp Tebogo</a>
      <Footer />
    </div>
  );
}
