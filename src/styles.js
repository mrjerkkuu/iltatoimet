export const S = {
  screen:   { minHeight:"100vh", minWidth:"100vw", display:"flex", alignItems:"center", justifyContent:"center", padding:"16px", boxSizing:"border-box" },
  card:     { background:"rgba(255,255,255,0.06)", backdropFilter:"blur(16px)", border:"1px solid rgba(255,255,255,0.11)", borderRadius:26, padding:"24px 20px", width:"100%" },
  title:    { margin:"8px 0 6px", fontSize:"clamp(24px,6vw,36px)", fontWeight:900, color:"white", letterSpacing:"-0.5px", fontFamily:"'Nunito',sans-serif", textShadow:"0 2px 18px rgba(255,255,255,0.13)" },
  input:    { width:"100%", padding:"14px 16px", fontSize:18, fontFamily:"'Nunito',sans-serif", fontWeight:700, background:"rgba(255,255,255,0.08)", border:"2px solid rgba(255,255,255,0.16)", borderRadius:14, color:"white", outline:"none", boxSizing:"border-box", transition:"border 0.2s" },
  label:    { color:"rgba(255,255,255,0.5)", fontSize:11, fontWeight:700, display:"block", marginBottom:8, fontFamily:"'Nunito',sans-serif", letterSpacing:"0.05em" },
  bigBtn:   { width:"100%", padding:"16px", fontSize:17, fontFamily:"'Nunito',sans-serif", fontWeight:800, color:"white", border:"none", borderRadius:16, cursor:"pointer", transition:"all 0.3s ease" },
  backBtn:  { background:"rgba(255,255,255,0.1)", border:"none", color:"white", borderRadius:12, padding:"9px 14px", cursor:"pointer", fontSize:18, backdropFilter:"blur(8px)" },
  ghostBtn: { background:"transparent", border:"1px solid rgba(255,255,255,0.16)", color:"rgba(255,255,255,0.4)", borderRadius:12, padding:"10px 18px", cursor:"pointer", fontSize:13, fontFamily:"'Nunito',sans-serif" },
  iconBtn:  { background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.12)", color:"white", borderRadius:8, padding:"4px 8px", cursor:"pointer", fontSize:14, fontFamily:"'Nunito',sans-serif" },
};

export const BASE = {
  minHeight: "100vh",
  minWidth:  "100vw",
  background: "linear-gradient(160deg,#0f0c29 0%,#302b63 55%,#1a1a3e 100%)",
  fontFamily: "'Nunito',sans-serif",
  position:  "relative",
};
