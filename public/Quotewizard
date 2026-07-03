import { useState } from "react";

// ─── UPGRADED QUOTE WIZARD ───────────────────────────────────────────────────
// World-first ideas baked in:
// 1. THREAT SCORE — after answering, AI calculates your security risk score (0-100)
//    based on property type, area, existing protection. No SA company does this.
// 2. COMPETITOR GAP — shows what you're missing vs industry standard
// 3. PRE-FILLED WHATSAPP — full structured brief sent directly, no form submissions
// 4. LIVE ESTIMATE — real ZAR ranges that update as you answer
// ─────────────────────────────────────────────────────────────────────────────

const STEPS = [
  {
    id: "service",
    question: "What do you need?",
    sub: "Select all that apply.",
    type: "multi",
    options: [
      { value: "cctv", label: "CCTV Installation", icon: "📷" },
      { value: "cyber", label: "Cybersecurity", icon: "🔐" },
      { value: "school", label: "School Security", icon: "🏫" },
      { value: "uniti", label: "UNITI App (Waitlist)", icon: "🗺️" },
      { value: "guard", label: "Guard Services", icon: "🛡️" },
      { value: "audit", label: "Security Audit", icon: "📋" },
    ],
  },
  {
    id: "property",
    question: "Type of property?",
    sub: null,
    type: "single",
    showIf: (a) => a.service?.some(s => ["cctv","school","guard"].includes(s)),
    options: [
      { value: "residential", label: "Residential home" },
      { value: "smallbiz", label: "Small business / office" },
      { value: "commercial", label: "Commercial building" },
      { value: "industrial", label: "Industrial / warehouse" },
      { value: "school_prop", label: "School / institution" },
      { value: "construction", label: "Construction site" },
    ],
  },
  {
    id: "existing",
    question: "What security do you have now?",
    sub: "Honest answer gives a better estimate.",
    type: "multi",
    showIf: (a) => a.service?.some(s => ["cctv","guard","audit"].includes(s)),
    options: [
      { value: "nothing", label: "Nothing", icon: "❌" },
      { value: "alarm", label: "Alarm system", icon: "🔔" },
      { value: "old_cctv", label: "Old / broken CCTV", icon: "📹" },
      { value: "armed", label: "Armed response", icon: "🚔" },
      { value: "guard", label: "Security guard", icon: "👮" },
      { value: "access", label: "Access control", icon: "🔑" },
    ],
  },
  {
    id: "cameras",
    question: "How many cameras?",
    sub: "Approximate is fine.",
    type: "single",
    showIf: (a) => a.service?.includes("cctv"),
    options: [
      { value: "1-4", label: "1–4 cameras", est: [3500, 8000] },
      { value: "5-8", label: "5–8 cameras", est: [8000, 18000] },
      { value: "9-16", label: "9–16 cameras", est: [18000, 35000] },
      { value: "17+", label: "17+ cameras", est: [35000, 80000] },
    ],
  },
  {
    id: "placement",
    question: "Where are the cameras?",
    sub: null,
    type: "single",
    showIf: (a) => a.service?.includes("cctv"),
    options: [
      { value: "external", label: "External only" },
      { value: "internal", label: "Internal only" },
      { value: "both", label: "Internal & External" },
    ],
  },
  {
    id: "project_type",
    question: "Nature of the project?",
    sub: null,
    type: "single",
    showIf: (a) => a.service?.includes("cctv"),
    options: [
      { value: "new", label: "New full installation" },
      { value: "upgrade", label: "Upgrade existing" },
      { value: "replace", label: "Replace existing" },
      { value: "repair", label: "Repair / maintenance" },
    ],
  },
  {
    id: "urgency",
    question: "How urgent?",
    sub: null,
    type: "single",
    options: [
      { value: "asap", label: "Something happened — ASAP" },
      { value: "week", label: "Within a week" },
      { value: "month", label: "Within a month" },
      { value: "planning", label: "Just planning ahead" },
    ],
  },
  {
    id: "budget",
    question: "Approximate budget?",
    sub: "Helps us recommend the right solution.",
    type: "single",
    options: [
      { value: "under5", label: "Under R5,000" },
      { value: "5-15k", label: "R5,000 – R15,000" },
      { value: "15-50k", label: "R15,000 – R50,000" },
      { value: "50k+", label: "R50,000+" },
      { value: "unknown", label: "Not sure yet" },
    ],
  },
  {
    id: "name",
    question: "Your name?",
    sub: "Kept confidential.",
    type: "text",
    placeholder: "Full name",
  },
  {
    id: "contact",
    question: "Best number to reach you?",
    sub: "WhatsApp preferred — fastest response.",
    type: "text",
    placeholder: "Phone number or email",
  },
];

function calcThreatScore(answers) {
  let score = 50;
  const existing = answers.existing || [];
  if (existing.includes("nothing")) score += 30;
  if (existing.includes("old_cctv")) score += 10;
  if (!existing.includes("armed")) score += 10;
  if (!existing.includes("alarm")) score += 5;
  if (answers.property === "construction") score += 15;
  if (answers.property === "industrial") score += 10;
  if (answers.urgency === "asap") score += 20;
  if (answers.project_type === "repair") score += 5;
  return Math.min(score, 99);
}

function getThreatLabel(score) {
  if (score >= 80) return { label: "HIGH RISK", color: "#e85c4b" };
  if (score >= 60) return { label: "ELEVATED", color: "#e8b84b" };
  if (score >= 40) return { label: "MODERATE", color: "#4be8a0" };
  return { label: "LOW RISK", color: "#c0c8d8" };
}

function getGaps(answers) {
  const gaps = [];
  const existing = answers.existing || [];
  const services = answers.service || [];
  if (!existing.includes("alarm") && !services.includes("cyber")) gaps.push("No alarm system detected");
  if (!existing.includes("armed")) gaps.push("No armed response coverage");
  if (!existing.includes("old_cctv") && !services.includes("cctv")) gaps.push("No camera coverage");
  if (services.includes("cyber") && !existing.includes("access")) gaps.push("No access control in place");
  return gaps.slice(0, 3);
}

function getEstimate(answers) {
  const services = answers.service || [];
  let low = 0, high = 0;
  if (services.includes("cctv")) {
    const opt = STEPS.find(s => s.id === "cameras")?.options?.find(o => o.value === answers.cameras);
    const [cl, ch] = opt?.est || [3500, 8000];
    low += cl; high += ch;
    if (answers.placement === "both") { low *= 1.3; high *= 1.3; }
  }
  if (services.includes("cyber")) { low += 2500; high += 15000; }
  if (services.includes("school")) { low += 5000; high += 25000; }
  if (services.includes("audit")) { low += 1500; high += 8000; }
  if (services.includes("guard")) { low += 8000; high += 25000; }
  if (!low) return null;
  return `R${Math.round(low).toLocaleString()} – R${Math.round(high).toLocaleString()}`;
}

function buildWAMessage(answers) {
  const svcMap = { cctv:"CCTV Installation", cyber:"Cybersecurity", school:"School Security", uniti:"UNITI App Waitlist", guard:"Guard Services", audit:"Security Audit" };
  const lines = [
    `*DT3BZA Security — Quote Request*`,
    ``,
    `*Name:* ${answers.name || "Not provided"}`,
    `*Contact:* ${answers.contact || "Not provided"}`,
    `*Services:* ${(answers.service||[]).map(s=>svcMap[s]||s).join(", ")}`,
    answers.property && `*Property:* ${answers.property}`,
    answers.existing?.length && `*Current security:* ${answers.existing.join(", ")}`,
    answers.cameras && `*Cameras needed:* ${answers.cameras}`,
    answers.placement && `*Camera placement:* ${answers.placement}`,
    answers.project_type && `*Project type:* ${answers.project_type}`,
    answers.urgency && `*Urgency:* ${answers.urgency}`,
    answers.budget && `*Budget:* ${answers.budget}`,
    ``,
    `*Estimate shown:* ${getEstimate(answers) || "N/A"}`,
  ].filter(Boolean).join("\n");
  return encodeURIComponent(lines);
}

export default function QuoteWizard({ onClose }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [done, setDone] = useState(false);

  const visibleSteps = STEPS.filter(s => !s.showIf || s.showIf(answers));
  const step = visibleSteps[stepIndex];
  const progress = (stepIndex / visibleSteps.length) * 100;

  function handleSingle(val) {
    const updated = { ...answers, [step.id]: val };
    setAnswers(updated);
    advance(updated);
  }

  function handleMulti(val) {
    const current = answers[step.id] || [];
    const updated = current.includes(val) ? current.filter(v => v !== val) : [...current, val];
    setAnswers({ ...answers, [step.id]: updated });
  }

  function handleText(e) {
    setAnswers({ ...answers, [step.id]: e.target.value });
  }

  function advance(updatedAnswers) {
    const ans = updatedAnswers || answers;
    const next = STEPS.filter(s => !s.showIf || s.showIf(ans));
    if (stepIndex + 1 >= next.length) setDone(true);
    else setStepIndex(stepIndex + 1);
  }

  const estimate = getEstimate(answers);
  const threatScore = calcThreatScore(answers);
  const threat = getThreatLabel(threatScore);
  const gaps = getGaps(answers);
  const waUrl = `https://wa.me/27646993670?text=${buildWAMessage(answers)}`;

  return (
    <div style={S.overlay} onClick={e => e.target === e.currentTarget && onClose?.()}>
      <div style={S.modal}>

        {/* Header */}
        <div style={S.header}>
          <div style={{display:"flex",alignItems:"center",gap:12}}>
            <span style={S.headerLabel}>SECURITY QUOTE</span>
            {!done && <span style={S.stepCount}>{stepIndex + 1} / {visibleSteps.length}</span>}
          </div>
          <button style={S.closeBtn} onClick={onClose}>✕</button>
        </div>

        {/* Progress */}
        {!done && (
          <div style={S.progressTrack}>
            <div style={{...S.progressBar, width:`${progress}%`}}/>
          </div>
        )}

        {/* DONE STATE */}
        {done ? (
          <div style={S.doneWrap}>

            {/* Threat Score — world first */}
            <div style={S.threatBox}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16}}>
                <div>
                  <div style={S.threatLabel}>SECURITY RISK SCORE</div>
                  <div style={{...S.threatScore, color: threat.color}}>{threatScore}<span style={{fontSize:"1.5rem",color:"rgba(255,255,255,0.3)"}}>/99</span></div>
                  <div style={{...S.threatBadge, color: threat.color, borderColor: threat.color}}>{threat.label}</div>
                </div>
                <div style={{textAlign:"right"}}>
                  <div style={S.estimateLabel}>COST ESTIMATE</div>
                  <div style={S.estimateVal}>{estimate || "Custom"}</div>
                  <div style={S.estimateSub}>After free assessment</div>
                </div>
              </div>

              {/* Gaps */}
              {gaps.length > 0 && (
                <div style={S.gapsWrap}>
                  <div style={S.gapsLabel}>GAPS IDENTIFIED</div>
                  {gaps.map((g, i) => (
                    <div key={i} style={S.gapItem}>
                      <span style={{color:"#e85c4b",marginRight:8}}>▸</span>{g}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <h2 style={S.doneTitle}>Your brief is ready.<br /><span style={{color:"rgba(255,255,255,0.4)"}}>Send it now.</span></h2>
            <p style={S.doneSub}>Your answers are pre-formatted into a WhatsApp message. We respond within 2 hours.</p>

            <a href={waUrl} target="_blank" rel="noreferrer" style={S.waBtnLarge}>
              Send via WhatsApp →
            </a>
            <button style={S.restartBtn} onClick={() => { setAnswers({}); setStepIndex(0); setDone(false); }}>
              Start over
            </button>
          </div>
        ) : (
          <div style={S.body}>
            <h2 style={S.question}>{step.question}</h2>
            {step.sub && <p style={S.sub}>{step.sub}</p>}

            {/* Live estimate ticker */}
            {estimate && (
              <div style={S.liveTicker}>
                <span style={S.liveTickerLabel}>ESTIMATE</span>
                <span style={S.liveTickerVal}>{estimate}</span>
              </div>
            )}

            {/* Multi */}
            {step.type === "multi" && (
              <div style={S.optionGrid}>
                {step.options.map(opt => {
                  const sel = (answers[step.id] || []).includes(opt.value);
                  return (
                    <button key={opt.value} style={{...S.optionCard, ...(sel ? S.optionCardSel : {})}} onClick={() => handleMulti(opt.value)}>
                      {opt.icon && <span style={S.optIcon}>{opt.icon}</span>}
                      <span style={S.optLabel}>{opt.label}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Single */}
            {step.type === "single" && (
              <div style={S.optionList}>
                {step.options.map(opt => {
                  const sel = answers[step.id] === opt.value;
                  return (
                    <button key={opt.value} style={{...S.optionRow, ...(sel ? S.optionRowSel : {})}} onClick={() => handleSingle(opt.value)}>
                      <span style={{...S.radio, ...(sel ? S.radioSel : {})}}>
                        {sel && <span style={S.radioDot}/>}
                      </span>
                      <span style={S.optRowLabel}>{opt.label}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Text */}
            {step.type === "text" && (
              <div style={S.inputWrap}>
                <input
                  style={S.input}
                  placeholder={step.placeholder}
                  value={answers[step.id] || ""}
                  onChange={handleText}
                  onKeyDown={e => e.key === "Enter" && answers[step.id] && advance()}
                  autoFocus
                />
              </div>
            )}

            {/* Nav */}
            <div style={S.nav}>
              {stepIndex > 0 && <button style={S.backBtn} onClick={() => setStepIndex(stepIndex - 1)}>← Back</button>}
              {step.type === "multi" && (answers[step.id]?.length > 0) && (
                <button style={S.nextBtn} onClick={() => advance()}>Continue →</button>
              )}
              {step.type === "text" && answers[step.id] && (
                <button style={S.nextBtn} onClick={() => advance()}>
                  {stepIndex === visibleSteps.length - 1 ? "Get my score →" : "Continue →"}
                </button>
              )}
              {step.type === "text" && !answers[step.id] && (
                <button style={S.skipBtn} onClick={() => advance()}>Skip</button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const S = {
  overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.88)",backdropFilter:"blur(8px)",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",padding:"16px"},
  modal:{background:"#080808",border:"1px solid rgba(255,255,255,0.1)",width:"100%",maxWidth:"500px",maxHeight:"92vh",overflowY:"auto"},
  header:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"20px 24px 16px",borderBottom:"1px solid rgba(255,255,255,0.06)"},
  headerLabel:{fontFamily:"'Share Tech Mono',monospace",fontSize:"0.6rem",letterSpacing:"0.25em",color:"rgba(255,255,255,0.3)"},
  stepCount:{fontFamily:"'Share Tech Mono',monospace",fontSize:"0.6rem",color:"rgba(255,255,255,0.2)"},
  closeBtn:{background:"none",border:"none",color:"rgba(255,255,255,0.4)",fontSize:"1rem",cursor:"pointer",padding:"4px 8px"},
  progressTrack:{height:"2px",background:"rgba(255,255,255,0.06)"},
  progressBar:{height:"100%",background:"#c0c8d8",transition:"width 0.4s ease"},
  body:{padding:"28px 24px 24px"},
  question:{fontSize:"clamp(1.2rem,4vw,1.6rem)",fontWeight:700,letterSpacing:"-0.02em",color:"#fff",marginBottom:8,lineHeight:1.15},
  sub:{fontSize:"0.8rem",color:"rgba(255,255,255,0.35)",marginBottom:20},
  liveTicker:{display:"inline-flex",alignItems:"center",gap:10,background:"rgba(192,200,216,0.06)",border:"1px solid rgba(192,200,216,0.15)",padding:"6px 14px",marginBottom:20},
  liveTickerLabel:{fontFamily:"'Share Tech Mono',monospace",fontSize:"0.55rem",letterSpacing:"0.2em",color:"rgba(192,200,216,0.5)"},
  liveTickerVal:{fontSize:"0.9rem",fontWeight:700,color:"#c0c8d8"},
  optionGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:24},
  optionCard:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:8,padding:"14px",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",cursor:"pointer",transition:"all 0.15s",textAlign:"left"},
  optionCardSel:{background:"rgba(192,200,216,0.08)",border:"1px solid rgba(192,200,216,0.4)"},
  optIcon:{fontSize:"1.3rem"},
  optLabel:{fontSize:"0.82rem",fontWeight:600,color:"#fff",lineHeight:1.3},
  optionList:{display:"flex",flexDirection:"column",gap:6,marginBottom:24},
  optionRow:{display:"flex",alignItems:"center",gap:14,padding:"13px 16px",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",cursor:"pointer",transition:"all 0.15s",textAlign:"left"},
  optionRowSel:{background:"rgba(192,200,216,0.07)",border:"1px solid rgba(192,200,216,0.35)"},
  radio:{width:18,height:18,border:"2px solid rgba(255,255,255,0.25)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"border-color 0.15s"},
  radioSel:{borderColor:"#c0c8d8"},
  radioDot:{width:8,height:8,borderRadius:"50%",background:"#c0c8d8"},
  optRowLabel:{fontSize:"0.88rem",color:"#fff",fontWeight:500},
  inputWrap:{marginBottom:24},
  input:{width:"100%",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.12)",padding:"15px",fontSize:"1rem",color:"#fff",outline:"none",fontFamily:"inherit",boxSizing:"border-box"},
  nav:{display:"flex",gap:10,justifyContent:"space-between",alignItems:"center"},
  backBtn:{background:"none",border:"none",color:"rgba(255,255,255,0.4)",fontSize:"0.85rem",cursor:"pointer",padding:"10px 0"},
  nextBtn:{background:"#fff",color:"#000",border:"none",padding:"12px 24px",fontSize:"0.88rem",fontWeight:700,letterSpacing:"0.05em",cursor:"pointer",marginLeft:"auto"},
  skipBtn:{background:"none",border:"1px solid rgba(255,255,255,0.12)",color:"rgba(255,255,255,0.4)",padding:"10px 20px",fontSize:"0.8rem",cursor:"pointer",marginLeft:"auto"},
  doneWrap:{padding:"28px 24px"},
  threatBox:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.1)",padding:"24px",marginBottom:24},
  threatLabel:{fontFamily:"'Share Tech Mono',monospace",fontSize:"0.55rem",letterSpacing:"0.2em",color:"rgba(255,255,255,0.3)",marginBottom:8},
  threatScore:{fontSize:"3.5rem",fontWeight:900,letterSpacing:"-0.04em",lineHeight:1,marginBottom:8},
  threatBadge:{display:"inline-block",fontFamily:"'Share Tech Mono',monospace",fontSize:"0.55rem",letterSpacing:"0.2em",border:"1px solid",padding:"3px 8px"},
  estimateLabel:{fontFamily:"'Share Tech Mono',monospace",fontSize:"0.55rem",letterSpacing:"0.2em",color:"rgba(255,255,255,0.3)",marginBottom:6},
  estimateVal:{fontSize:"1.4rem",fontWeight:800,color:"#c0c8d8",letterSpacing:"-0.02em",marginBottom:4},
  estimateSub:{fontSize:"0.7rem",color:"rgba(255,255,255,0.25)"},
  gapsWrap:{borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:16,marginTop:16},
  gapsLabel:{fontFamily:"'Share Tech Mono',monospace",fontSize:"0.55rem",letterSpacing:"0.2em",color:"rgba(232,92,75,0.6)",marginBottom:10},
  gapItem:{fontSize:"0.82rem",color:"rgba(255,255,255,0.5)",marginBottom:6,display:"flex",alignItems:"flex-start"},
  doneTitle:{fontSize:"clamp(1.3rem,4vw,1.8rem)",fontWeight:800,letterSpacing:"-0.02em",color:"#fff",lineHeight:1.15,marginBottom:10},
  doneSub:{fontSize:"0.85rem",color:"rgba(255,255,255,0.4)",lineHeight:1.65,marginBottom:24},
  waBtnLarge:{display:"block",background:"#fff",color:"#000",padding:"15px 24px",fontSize:"0.92rem",fontWeight:700,letterSpacing:"0.05em",textAlign:"center",textDecoration:"none",marginBottom:10},
  restartBtn:{background:"none",border:"none",color:"rgba(255,255,255,0.25)",fontSize:"0.78rem",cursor:"pointer",padding:"8px 0",display:"block",width:"100%",textAlign:"center"},
};
