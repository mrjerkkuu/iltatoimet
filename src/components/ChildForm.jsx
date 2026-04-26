import AnimalSVG from "./AnimalSVG";
import { ANIMAL_OPTIONS, PALETTE } from "../constants";
import { S } from "../styles";

export default function ChildForm({ child, update, inputRef, autoFocus }) {
  return (
    <>
      <div style={{ display:"flex", justifyContent:"center", marginBottom:16 }}>
        <div style={{ background:`radial-gradient(circle, ${child.color}25, transparent 70%)`, padding:8, borderRadius:24 }}>
          <AnimalSVG type={child.animal} progress={0.55} color={child.color} size={100} />
        </div>
      </div>

      <label style={S.label}>LAPSEN NIMI</label>
      <input
        ref={inputRef}
        autoFocus={autoFocus}
        value={child.name}
        onChange={e => update("name", e.target.value)}
        placeholder="Lapsen nimi"
        style={S.input}
      />

      <label style={{ ...S.label, marginTop:18 }}>ELÄIN</label>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:8 }}>
        {ANIMAL_OPTIONS.map(opt => (
          <button key={opt.type} onClick={() => update("animal", opt.type)} style={{
            padding: "10px 4px",
            background: child.animal === opt.type ? `${child.color}30` : "rgba(255,255,255,0.05)",
            border:     child.animal === opt.type ? `2px solid ${child.color}` : "2px solid rgba(255,255,255,0.1)",
            borderRadius: 14, cursor:"pointer", transition:"all 0.2s",
            display:"flex", flexDirection:"column", alignItems:"center", gap:3,
          }}>
            <span style={{ fontSize:22 }}>{opt.emoji}</span>
            <span style={{ color: child.animal === opt.type ? "white" : "rgba(255,255,255,0.4)", fontSize:9, fontFamily:"'Nunito',sans-serif", fontWeight:700 }}>
              {opt.label}
            </span>
          </button>
        ))}
      </div>

      <label style={{ ...S.label, marginTop:18 }}>VÄRI</label>
      <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
        {PALETTE.map((pal, i) => (
          <button key={i} onClick={() => { update("color", pal.color); update("accent", pal.accent); }} style={{
            width:34, height:34, borderRadius:"50%", background:pal.color, cursor:"pointer", transition:"all 0.2s",
            border:     child.color === pal.color ? "3px solid white" : "3px solid transparent",
            boxShadow:  child.color === pal.color ? `0 0 12px ${pal.color}` : "none",
          }} />
        ))}
      </div>
    </>
  );
}
