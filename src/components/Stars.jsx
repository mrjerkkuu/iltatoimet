export default function Stars() {
  return (
    <div style={{ position:"fixed", inset:0, overflow:"hidden", pointerEvents:"none", zIndex:0 }}>
      {Array.from({ length: 50 }, (_, i) => (
        <div key={i} style={{
          position: "absolute",
          left:  `${Math.random() * 100}%`,
          top:   `${Math.random() * 100}%`,
          width:  `${1 + Math.random() * 2.5}px`,
          height: `${1 + Math.random() * 2.5}px`,
          borderRadius: "50%",
          background: "white",
          animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 4}s`,
          opacity: 0.3 + Math.random() * 0.6,
        }} />
      ))}
    </div>
  );
}
