import { useState, useRef } from "react";
import ChildForm from "../components/ChildForm";
import { ANIMAL_OPTIONS, PALETTE } from "../constants";
import { S } from "../styles";

export default function StepNaming({ count, onNext }) {
  const [editIdx, setEditIdx] = useState(0);
  const [children, setChildren] = useState(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      name: "",
      animal: ANIMAL_OPTIONS[i % ANIMAL_OPTIONS.length].type,
      color:  PALETTE[i % PALETTE.length].color,
      accent: PALETTE[i % PALETTE.length].accent,
    }))
  );
  const inputRef = useRef(null);
  const child = children[editIdx];
  const isLast = editIdx === children.length - 1;

  function update(field, val) {
    setChildren(prev => prev.map((c, i) => i === editIdx ? { ...c, [field]: val } : c));
  }

  function next() {
    if (!child.name.trim()) { inputRef.current?.focus(); return; }
    if (isLast) {
      onNext(children.map(c => ({ ...c, name: c.name.trim() })));
    } else {
      setEditIdx(i => i + 1);
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }

  return (
    <div style={S.screen}>
      <div style={{ ...S.card, maxWidth:420, zIndex:1, position:"relative", maxHeight:"90vh", overflowY:"auto" }}>
        <div style={{ display:"flex", gap:6, justifyContent:"center", marginBottom:20, flexWrap:"wrap" }}>
          {children.map((_, i) => (
            <div key={i} style={{
              width: i === editIdx ? 22 : 7, height:7, borderRadius:4,
              background: i < editIdx ? child.color : i === editIdx ? "white" : "rgba(255,255,255,0.18)",
              transition: "all 0.3s ease",
            }} />
          ))}
        </div>
        <p style={{ color:"rgba(255,255,255,0.45)", fontSize:12, textAlign:"center", marginBottom:4 }}>
          Lapsi {editIdx + 1} / {children.length}
        </p>
        <ChildForm child={child} update={update} inputRef={inputRef} autoFocus />
        <button onClick={next} style={{
          ...S.bigBtn, marginTop:24,
          background: child.name.trim() ? `linear-gradient(135deg,${child.color},${child.accent})` : "rgba(255,255,255,0.1)",
          opacity: child.name.trim() ? 1 : 0.5,
        }}>Seuraava →</button>
        {editIdx > 0 && (
          <button onClick={() => setEditIdx(i => i - 1)} style={{
            background:"transparent", border:"none", color:"rgba(255,255,255,0.3)",
            cursor:"pointer", fontSize:13, width:"100%", marginTop:10, fontFamily:"'Nunito',sans-serif",
          }}>← Takaisin</button>
        )}
      </div>
    </div>
  );
}
