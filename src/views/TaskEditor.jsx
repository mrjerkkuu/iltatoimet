import { useState } from "react";
import { TASK_EMOJIS, DEFAULT_TASKS } from "../constants";
import { S } from "../styles";

export default function TaskEditor({ initial, onDone, onBack }) {
  const [tasks, setTasks] = useState(initial || DEFAULT_TASKS);
  const [newLabel, setNewLabel] = useState("");
  const [newEmoji, setNewEmoji] = useState("⭐");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  function addTask() {
    if (!newLabel.trim()) return;
    setTasks(prev => [...prev, { id: "task_" + Date.now(), label: newLabel.trim(), emoji: newEmoji }]);
    setNewLabel(""); setNewEmoji("⭐");
  }

  function remove(id)   { setTasks(prev => prev.filter(t => t.id !== id)); }
  function moveUp(i)    { if (i === 0) return; setTasks(prev => { const a = [...prev]; [a[i-1], a[i]] = [a[i], a[i-1]]; return a; }); }
  function moveDown(i)  { setTasks(prev => { if (i >= prev.length - 1) return prev; const a = [...prev]; [a[i], a[i+1]] = [a[i+1], a[i]]; return a; }); }

  return (
    <div style={S.screen}>
      <div style={{ ...S.card, maxWidth:440, zIndex:1, position:"relative", maxHeight:"90vh", overflowY:"auto" }}>
        <div style={{ textAlign:"center", marginBottom:20 }}>
          <div style={{ fontSize:36 }}>📋</div>
          <h2 style={{ ...S.title, fontSize:22, margin:"6px 0 4px" }}>Iltatoimet</h2>
          <p style={{ color:"rgba(255,255,255,0.45)", fontSize:13, margin:0 }}>Muokkaa tehtäviä ja järjestystä</p>
        </div>

        <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:20 }}>
          {tasks.map((t, i) => (
            <div key={t.id} style={{ display:"flex", alignItems:"center", gap:10, background:"rgba(255,255,255,0.07)", borderRadius:14, padding:"10px 12px" }}>
              <span style={{ fontSize:22, flexShrink:0 }}>{t.emoji}</span>
              <span style={{ flex:1, color:"white", fontFamily:"'Nunito',sans-serif", fontWeight:700, fontSize:15 }}>{t.label}</span>
              <div style={{ display:"flex", gap:4 }}>
                <button onClick={() => moveUp(i)}   disabled={i === 0}              style={{ ...S.iconBtn, opacity: i === 0 ? 0.2 : 0.7 }}>↑</button>
                <button onClick={() => moveDown(i)} disabled={i === tasks.length-1} style={{ ...S.iconBtn, opacity: i === tasks.length-1 ? 0.2 : 0.7 }}>↓</button>
                <button onClick={() => remove(t.id)} style={{ ...S.iconBtn, color:"#f9a8d4" }}>✕</button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ background:"rgba(255,255,255,0.05)", borderRadius:16, padding:14, border:"1px solid rgba(255,255,255,0.1)" }}>
          <p style={{ color:"rgba(255,255,255,0.5)", fontSize:12, fontWeight:700, margin:"0 0 10px", fontFamily:"'Nunito',sans-serif" }}>LISÄÄ TEHTÄVÄ</p>
          <div style={{ display:"flex", gap:8, alignItems:"center", marginBottom:10 }}>
            <button onClick={() => setShowEmojiPicker(v => !v)} style={{ fontSize:24, background:"rgba(255,255,255,0.1)", border:"2px solid rgba(255,255,255,0.15)", borderRadius:10, padding:"6px 10px", cursor:"pointer", flexShrink:0 }}>
              {newEmoji}
            </button>
            <input
              value={newLabel}
              onChange={e => setNewLabel(e.target.value)}
              onKeyDown={e => e.key === "Enter" && addTask()}
              placeholder="Tehtävän nimi..."
              style={{ ...S.input, flex:1, padding:"10px 14px", fontSize:15 }}
            />
          </div>
          {showEmojiPicker && (
            <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:10 }}>
              {TASK_EMOJIS.map(em => (
                <button key={em} onClick={() => { setNewEmoji(em); setShowEmojiPicker(false); }} style={{
                  fontSize:22,
                  background: newEmoji === em ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)", borderRadius:8, padding:"4px 6px", cursor:"pointer",
                }}>{em}</button>
              ))}
            </div>
          )}
          <button onClick={addTask} disabled={!newLabel.trim()} style={{
            ...S.bigBtn, padding:"12px", fontSize:15,
            background: newLabel.trim() ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.05)",
            opacity: newLabel.trim() ? 1 : 0.4,
          }}>+ Lisää tehtävä</button>
        </div>

        <button onClick={() => onDone(tasks)} disabled={tasks.length === 0} style={{
          ...S.bigBtn, marginTop:20,
          background: tasks.length > 0 ? "linear-gradient(135deg,#86efac,#22c55e)" : "rgba(255,255,255,0.1)",
          opacity: tasks.length > 0 ? 1 : 0.4,
        }}>🌙 Valmis!</button>

        {onBack && (
          <button onClick={onBack} style={{
            background:"transparent", border:"none", color:"rgba(255,255,255,0.3)",
            cursor:"pointer", fontSize:13, width:"100%", marginTop:10, fontFamily:"'Nunito',sans-serif",
          }}>← Takaisin</button>
        )}
      </div>
    </div>
  );
}
