const COLORS = ["#f9a8d4","#93c5fd","#86efac","#fde68a","#c4b5fd","#fb923c","#fff"];

export default function Confetti({ active }) {
  if (!active) return null;
  return (
    <div style={{ position:"fixed", inset:0, pointerEvents:"none", zIndex:200 }}>
      {Array.from({ length: 36 }, (_, i) => (
        <div key={i} style={{
          position: "absolute",
          left:   `${5 + Math.random() * 90}%`,
          top:    "-20px",
          width:  `${7  + Math.random() * 11}px`,
          height: `${7  + Math.random() * 11}px`,
          borderRadius: Math.random() > 0.5 ? "50%" : "2px",
          background: COLORS[i % COLORS.length],
          animation: `fall ${1.4 + Math.random() * 2}s ease-in forwards`,
          animationDelay: `${Math.random() * 0.7}s`,
          transform: `rotate(${Math.random() * 360}deg)`,
        }} />
      ))}
    </div>
  );
}
