import { S } from "../styles";

export default function StepCount({ onNext }) {
  return (
    <div style={S.screen}>
      <div style={{ ...S.card, maxWidth:400, textAlign:"center", zIndex:1, position:"relative" }}>
        <div style={{ fontSize:56, marginBottom:8, animation:"float 3s ease-in-out infinite", display:"inline-block" }}>🌙</div>
        <h1 style={S.title}>Iltatoimet</h1>
        <p style={{ color:"rgba(255,255,255,0.55)", marginBottom:28, fontSize:15, lineHeight:1.6 }}>
          Tervetuloa! Kaikki tiedot tallennetaan<br/>vain tähän laitteeseen. 🔒
        </p>
        <p style={{ color:"rgba(255,255,255,0.8)", fontWeight:700, fontSize:16, marginBottom:14 }}>
          Kuinka monta lasta?
        </p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:10 }}>
          {Array.from({ length: 15 }, (_, i) => i + 1).map(n => (
            <button key={n} onClick={() => onNext(n)} style={{
              padding: "14px 6px",
              background: "rgba(255,255,255,0.08)",
              border: "2px solid rgba(255,255,255,0.15)",
              borderRadius: 14, fontSize:18, fontWeight:800, color:"white",
              fontFamily: "'Nunito',sans-serif", cursor:"pointer", transition:"all 0.2s ease",
            }}>{n}</button>
          ))}
        </div>
        <p style={{ color:"rgba(255,255,255,0.25)", fontSize:11, marginTop:22 }}>
          🔒 Ei tiliä · Ei palvelinta · Vain tämä laite
        </p>
      </div>
    </div>
  );
}
