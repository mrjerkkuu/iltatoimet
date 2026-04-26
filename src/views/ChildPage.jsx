import { useState } from "react";
import AnimalSVG from "../components/AnimalSVG";
import Confetti from "../components/Confetti";
import { useSounds } from "../hooks/useSounds";
import { S } from "../styles";

export default function ChildPage({ child, tasks, done, onChange, onBack }) {
  const [celebrating, setCelebrating] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const sounds = useSounds();

  const completedCount = Object.values(done).filter(Boolean).length;
  const progress = tasks.length > 0 ? completedCount / tasks.length : 0;
  const allDone  = completedCount === tasks.length && tasks.length > 0;
  const sortedTasks = [
    ...tasks.filter(t => !done[t.id]),
    ...tasks.filter(t =>  done[t.id]),
  ];

  function toggle(id) {
    const wasDone = done[id];
    const newDone = { ...done, [id]: !wasDone };
    onChange(newDone);
    if (!wasDone) {
      sounds.tick();
      if (Object.values(newDone).filter(Boolean).length === tasks.length) {
        setTimeout(() => {
          sounds.celebrate();
          setCelebrating(true); setShowBanner(true);
          setTimeout(() => setCelebrating(false), 3500);
          setTimeout(() => setShowBanner(false), 4500);
        }, 300);
      }
    }
  }

  return (
    <div style={{ height:"100vh", display:"flex", flexDirection:"column", overflow:"hidden", position:"relative" }}>
      <Confetti active={celebrating} />

      {/* Header */}
      <div style={{ flexShrink:0, zIndex:10 }}>
        <div style={{ padding:"14px 14px 0", display:"flex", alignItems:"center", gap:10 }}>
          <button onClick={onBack} style={S.backBtn}>←</button>
          <h2 style={{ margin:0, fontSize:21, fontFamily:"'Nunito',sans-serif", fontWeight:800, color:"white" }}>
            {child.name} 🌙
          </h2>
        </div>

        <div style={{ display:"flex", justifyContent:"center", padding:"12px 0 6px" }}>
          <div style={{
            background: "rgba(255,255,255,0.07)", borderRadius:24, padding:"12px 24px",
            border: `2px solid ${child.color}40`, boxShadow:`0 0 36px ${child.color}22`,
            transform: allDone ? "scale(1.07)" : "scale(1)",
            transition: "transform 0.5s cubic-bezier(0.34,1.56,0.64,1)",
            backdropFilter: "blur(10px)",
          }}>
            <AnimalSVG type={child.animal} progress={progress} color={child.color} size={100} />
            <div style={{ textAlign:"center", marginTop:2 }}>
              <span style={{ color:child.color, fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:14 }}>
                {completedCount}/{tasks.length} tehty
              </span>
            </div>
          </div>
        </div>

        {showBanner && (
          <div style={{
            margin:"0 14px 8px", borderRadius:20, padding:"12px 18px", textAlign:"center",
            background: `linear-gradient(135deg,${child.color}22,${child.accent}18)`,
            border: `2px solid ${child.color}`,
            animation: "popIn 0.4s cubic-bezier(0.34,1.56,0.64,1)",
          }}>
            <div style={{ fontSize:30 }}>🎉</div>
            <div style={{ fontFamily:"'Nunito',sans-serif", fontWeight:800, color:"white", fontSize:18 }}>
              Hienoa, {child.name}!
            </div>
            <div style={{ color:child.color, fontSize:13, marginTop:2, fontFamily:"'Nunito',sans-serif" }}>
              Kaikki iltatoimet tehty! Hyvää yötä 🌟
            </div>
          </div>
        )}
      </div>

      {/* Task list */}
      <div style={{ flex:1, overflowY:"auto", padding:"0 14px 24px" }}>
        <div style={{ display:"flex", flexDirection:"column", gap:11 }}>
          {sortedTasks.map(task => {
            const isDone = !!done[task.id];
            return (
              <button key={task.id} onClick={() => toggle(task.id)} style={{
                display:"flex", alignItems:"center", gap:14, padding:"20px 18px", minHeight:80,
                background: isDone ? "rgba(255,255,255,0.03)" : `linear-gradient(135deg,${child.color}18,rgba(255,255,255,0.07))`,
                border: isDone ? "2px solid rgba(255,255,255,0.06)" : `3px solid ${child.color}65`,
                borderRadius:20, cursor:"pointer",
                transform: isDone ? "scale(0.96)" : "scale(1)",
                opacity: isDone ? 0.38 : 1,
                transition: "all 0.45s cubic-bezier(0.34,1.56,0.64,1)",
                textAlign:"left",
                boxShadow: isDone ? "none" : `0 4px 16px ${child.color}1a`,
                flexShrink:0,
              }}>
                <div style={{
                  width:40, height:40, borderRadius:"50%", flexShrink:0,
                  background: isDone ? child.color : "transparent",
                  border: `3px solid ${isDone ? child.color : "rgba(255,255,255,0.28)"}`,
                  display:"flex", alignItems:"center", justifyContent:"center", transition:"all 0.3s",
                  boxShadow: isDone ? `0 0 12px ${child.color}70` : "none",
                }}>
                  {isDone && <span style={{ fontSize:18, fontWeight:900 }}>✓</span>}
                </div>
                <span style={{ fontSize:34, filter: isDone ? "grayscale(0.8)" : "none", transition:"filter 0.3s", flexShrink:0 }}>
                  {task.emoji}
                </span>
                <span style={{
                  fontFamily:"'Nunito',sans-serif", fontWeight:800, fontSize:19,
                  color: isDone ? "rgba(255,255,255,0.45)" : "white",
                  textDecoration: isDone ? "line-through" : "none",
                  textDecorationThickness: "2px", flex:1, transition:"color 0.3s",
                }}>{task.label}</span>
              </button>
            );
          })}
        </div>
        <div style={{ textAlign:"center", marginTop:20 }}>
          <button onClick={() => onChange({})} style={S.ghostBtn}>🔄 Aloita alusta</button>
        </div>
      </div>
    </div>
  );
}
