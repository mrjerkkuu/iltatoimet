import AnimalSVG from "../components/AnimalSVG";
import { S } from "../styles";

export default function Home({ children, tasks, progress, onSelect, onEditChildren, onEditTasks, onClearAll }) {
  return (
    <div style={{ minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center", paddingBottom:40 }}>
      <div style={{ textAlign:"center", padding:"36px 20px 20px", position:"relative", zIndex:1 }}>
        <div style={{ fontSize:46, animation:"float 3s ease-in-out infinite", display:"inline-block" }}>🌙</div>
        <h1 style={S.title}>Iltatoimet</h1>
        <p style={{ color:"rgba(255,255,255,0.4)", fontSize:14, margin:0 }}>Kenen vuoro on tänään? ✨</p>
      </div>

      <div style={{ display:"flex", flexDirection:"column", gap:12, width:"100%", maxWidth:440, padding:"0 16px", position:"relative", zIndex:1 }}>
        {children.map(child => {
          const done  = progress[child.id] || {};
          const count = Object.values(done).filter(Boolean).length;
          const pct   = tasks.length > 0 ? count / tasks.length : 0;
          const all   = count === tasks.length && tasks.length > 0;
          return (
            <button key={child.id} onClick={() => onSelect(child)} style={{
              display:"flex", alignItems:"center", gap:14, padding:"14px 18px",
              background: `linear-gradient(135deg,${child.color}14,rgba(255,255,255,0.04))`,
              border: `2px solid ${all ? child.color : child.color + "30"}`,
              borderRadius:20, cursor:"pointer",
              transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
              boxShadow: all ? `0 0 24px ${child.color}28` : "none",
              textAlign:"left",
            }}>
              <AnimalSVG type={child.animal} progress={pct} color={child.color} size={72} />
              <div style={{ flex:1 }}>
                <div style={{ fontWeight:800, fontSize:20, color:"white", fontFamily:"'Nunito',sans-serif" }}>{child.name}</div>
                <div style={{ marginTop:6, height:6, background:"rgba(255,255,255,0.1)", borderRadius:100, overflow:"hidden" }}>
                  <div style={{
                    height:"100%", width:`${pct * 100}%`,
                    background: `linear-gradient(90deg,${child.color},${child.accent})`,
                    borderRadius:100, transition:"width 0.5s ease",
                    boxShadow: `0 0 8px ${child.color}`,
                  }} />
                </div>
                <div style={{ color:child.color, fontSize:11, fontWeight:700, marginTop:3, fontFamily:"'Nunito',sans-serif" }}>
                  {all ? "🎉 Kaikki tehty!" : `${count}/${tasks.length} tehty`}
                </div>
              </div>
              <div style={{ color:"rgba(255,255,255,0.22)", fontSize:18 }}>›</div>
            </button>
          );
        })}
      </div>

      <div style={{ display:"flex", flexDirection:"column", gap:8, marginTop:28, position:"relative", zIndex:1, width:"100%", maxWidth:440, padding:"0 16px" }}>
        <button onClick={onClearAll} style={{ ...S.bigBtn, background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.15)", fontSize:15, padding:"14px" }}>
          🌅 Tyhjennä kaikki — uusi päivä
        </button>
        <div style={{ display:"flex", gap:8 }}>
          <button onClick={onEditTasks}    style={{ ...S.ghostBtn, flex:1, textAlign:"center" }}>✏️ Muokkaa tehtäviä</button>
          <button onClick={onEditChildren} style={{ ...S.ghostBtn, flex:1, textAlign:"center" }}>👶 Muokkaa lapsia</button>
        </div>
      </div>

      <p style={{ color:"rgba(255,255,255,0.14)", fontSize:11, marginTop:16, position:"relative", zIndex:1 }}>
        🔒 Kaikki tiedot vain tällä laitteella
      </p>
    </div>
  );
}
