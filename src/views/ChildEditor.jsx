import { useState, useRef } from "react";
import AnimalSVG from "../components/AnimalSVG";
import ChildForm from "../components/ChildForm";
import { ANIMAL_OPTIONS } from "../constants";
import { S } from "../styles";

export default function ChildEditor({ initialChildren, onDone, onBack }) {
  const [children, setChildren] = useState(initialChildren.map(c => ({ ...c })));
  const [editIdx, setEditIdx] = useState(null);
  const inputRef = useRef(null);

  if (editIdx === null) return (
    <div style={S.screen}>
      <div style={{ ...S.card, maxWidth:420, zIndex:1, position:"relative", maxHeight:"90vh", overflowY:"auto" }}>
        <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:20 }}>
          <button onClick={onBack} style={S.backBtn}>←</button>
          <div>
            <h2 style={{ ...S.title, fontSize:20, margin:0 }}>Muokkaa lapsia</h2>
            <p style={{ color:"rgba(255,255,255,0.4)", fontSize:12, margin:0 }}>Valitse kenen tietoja muokkaat</p>
          </div>
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
          {children.map((child, i) => (
            <button key={child.id} onClick={() => { setEditIdx(i); setTimeout(() => inputRef.current?.focus(), 80); }} style={{
              display:"flex", alignItems:"center", gap:14, padding:"12px 16px",
              background: `linear-gradient(135deg,${child.color}14,rgba(255,255,255,0.04))`,
              border: `2px solid ${child.color}35`, borderRadius:18, cursor:"pointer",
              transition:"all 0.25s ease", textAlign:"left",
            }}>
              <AnimalSVG type={child.animal} progress={0.55} color={child.color} size={60} />
              <div style={{ flex:1 }}>
                <div style={{ fontWeight:800, fontSize:18, color:"white", fontFamily:"'Nunito',sans-serif" }}>{child.name || "—"}</div>
                <div style={{ fontSize:11, color:"rgba(255,255,255,0.35)", marginTop:2, fontFamily:"'Nunito',sans-serif" }}>
                  {ANIMAL_OPTIONS.find(a => a.type === child.animal)?.label}
                </div>
              </div>
              <div style={{ fontSize:18, color:"rgba(255,255,255,0.3)" }}>›</div>
            </button>
          ))}
        </div>
        <button onClick={() => onDone(children)} style={{ ...S.bigBtn, marginTop:20, background:"linear-gradient(135deg,#86efac,#22c55e)" }}>
          ✓ Tallenna muutokset
        </button>
      </div>
    </div>
  );

  const child = children[editIdx];
  function update(field, val) {
    setChildren(prev => prev.map((c, i) => i === editIdx ? { ...c, [field]: val } : c));
  }
  function saveAndBack() {
    if (!child.name.trim()) { inputRef.current?.focus(); return; }
    setChildren(prev => prev.map((c, i) => i === editIdx ? { ...c, name: c.name.trim() } : c));
    setEditIdx(null);
  }
  function cancelEdit() {
    setChildren(prev => prev.map((c, i) => i === editIdx ? { ...initialChildren[editIdx] } : c));
    setEditIdx(null);
  }

  return (
    <div style={S.screen}>
      <div style={{ ...S.card, maxWidth:420, zIndex:1, position:"relative", maxHeight:"90vh", overflowY:"auto" }}>
        <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:16 }}>
          <button onClick={cancelEdit} style={S.backBtn}>←</button>
          <div>
            <h2 style={{ ...S.title, fontSize:20, margin:0 }}>Muokkaa lasta</h2>
            <p style={{ color:"rgba(255,255,255,0.4)", fontSize:12, margin:0 }}>{editIdx + 1} / {children.length}</p>
          </div>
        </div>
        <ChildForm child={child} update={update} inputRef={inputRef} autoFocus={false} />
        <button onClick={saveAndBack} style={{
          ...S.bigBtn, marginTop:24,
          background: child.name.trim() ? `linear-gradient(135deg,${child.color},${child.accent})` : "rgba(255,255,255,0.1)",
          opacity: child.name.trim() ? 1 : 0.5,
        }}>✓ Tallenna</button>
        <button onClick={cancelEdit} style={{
          background:"transparent", border:"none", color:"rgba(255,255,255,0.3)",
          cursor:"pointer", fontSize:13, width:"100%", marginTop:10, fontFamily:"'Nunito',sans-serif",
        }}>Peruuta muutokset</button>
      </div>
    </div>
  );
}
