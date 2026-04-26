export default function AnimalSVG({ type, progress: p, color, size = 110 }) {
  const filled = p > 0 ? color : "none";
  const op = 0.25 + p * 0.75;
  const tr = { transition: "fill 0.5s ease, opacity 0.5s ease" };

  const eyes = p > 0.2
    ? <><circle cx="44" cy="54" r="6" fill="#1e1b4b"/><circle cx="72" cy="54" r="6" fill="#1e1b4b"/><circle cx="46" cy="52" r="2" fill="white"/><circle cx="74" cy="52" r="2" fill="white"/></>
    : <><circle cx="44" cy="54" r="5" fill="none" stroke={color} strokeWidth="2"/><circle cx="72" cy="54" r="5" fill="none" stroke={color} strokeWidth="2"/></>;

  const stars = p === 1 && (
    <><text x="6" y="18" fontSize="13">⭐</text><text x="91" y="18" fontSize="13">⭐</text><text x="48" y="10" fontSize="15">✨</text></>
  );

  if (type === "cat") return (
    <svg viewBox="0 0 116 116" width={size} height={size}>
      <circle cx="58" cy="62" r="40" fill={filled} stroke={color} strokeWidth="3" opacity={op} style={tr}/>
      <polygon points="26,34 18,10 42,26" fill={filled} stroke={color} strokeWidth="2.5" strokeLinejoin="round" style={tr}/>
      <polygon points="90,34 98,10 74,26" fill={filled} stroke={color} strokeWidth="2.5" strokeLinejoin="round" style={tr}/>
      {eyes}
      {p > 0.4 && <><ellipse cx="58" cy="66" rx="4" ry="3" fill={color}/><path d="M58 69 Q50 75 46 72 M58 69 Q66 75 70 72" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round"/></>}
      {p > 0.6 && <><line x1="18" y1="65" x2="46" y2="66" stroke={color} strokeWidth="1.5" opacity="0.7"/><line x1="70" y1="66" x2="98" y2="65" stroke={color} strokeWidth="1.5" opacity="0.7"/></>}
      {p > 0.8 && <><ellipse cx="38" cy="70" rx="8" ry="5" fill={color} opacity="0.4"/><ellipse cx="78" cy="70" rx="8" ry="5" fill={color} opacity="0.4"/></>}
      {stars}
    </svg>
  );

  if (type === "bear") return (
    <svg viewBox="0 0 116 116" width={size} height={size}>
      <circle cx="26" cy="28" r="15" fill={filled} stroke={color} strokeWidth="3" opacity={op} style={tr}/>
      <circle cx="90" cy="28" r="15" fill={filled} stroke={color} strokeWidth="3" opacity={op} style={tr}/>
      <circle cx="26" cy="28" r="9" fill={p > 0.3 ? color : "none"} opacity="0.5" style={tr}/>
      <circle cx="90" cy="28" r="9" fill={p > 0.3 ? color : "none"} opacity="0.5" style={tr}/>
      <circle cx="58" cy="62" r="37" fill={filled} stroke={color} strokeWidth="3" opacity={op} style={tr}/>
      <ellipse cx="58" cy="74" rx="15" ry="10" fill={p > 0.2 ? color : "none"} stroke={color} strokeWidth="2" opacity="0.55" style={tr}/>
      {eyes}
      {p > 0.4 && <><ellipse cx="58" cy="70" rx="5" ry="4" fill="#1e1b4b"/><path d="M58 74 Q53 79 50 77 M58 74 Q63 79 66 77" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round"/></>}
      {p > 0.8 && <><ellipse cx="38" cy="68" rx="9" ry="6" fill={color} opacity="0.35"/><ellipse cx="78" cy="68" rx="9" ry="6" fill={color} opacity="0.35"/></>}
      {stars}
    </svg>
  );

  if (type === "bunny") return (
    <svg viewBox="0 0 116 130" width={size} height={size * 1.1}>
      <ellipse cx="36" cy="20" rx="11" ry="26" fill={filled} stroke={color} strokeWidth="3" opacity={op} style={tr}/>
      <ellipse cx="80" cy="20" rx="11" ry="26" fill={filled} stroke={color} strokeWidth="3" opacity={op} style={tr}/>
      <ellipse cx="36" cy="20" rx="6" ry="20" fill={p > 0.3 ? color : "none"} opacity="0.5" style={tr}/>
      <ellipse cx="80" cy="20" rx="6" ry="20" fill={p > 0.3 ? color : "none"} opacity="0.5" style={tr}/>
      <circle cx="58" cy="72" r="35" fill={filled} stroke={color} strokeWidth="3" opacity={op} style={tr}/>
      {eyes}
      {p > 0.4 && <><ellipse cx="58" cy="76" rx="4" ry="3" fill={color}/><line x1="28" y1="75" x2="52" y2="76" stroke={color} strokeWidth="1.5" opacity="0.6"/><line x1="64" y1="76" x2="88" y2="75" stroke={color} strokeWidth="1.5" opacity="0.6"/><path d="M54 79 Q58 83 62 79" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round"/></>}
      {p > 0.8 && <><ellipse cx="38" cy="78" rx="9" ry="6" fill={color} opacity="0.35"/><ellipse cx="78" cy="78" rx="9" ry="6" fill={color} opacity="0.35"/></>}
      {stars}
    </svg>
  );

  if (type === "fox") return (
    <svg viewBox="0 0 116 116" width={size} height={size}>
      <polygon points="20,38 4,8 38,28" fill={filled} stroke={color} strokeWidth="2.5" strokeLinejoin="round" style={tr}/>
      <polygon points="96,38 112,8 78,28" fill={filled} stroke={color} strokeWidth="2.5" strokeLinejoin="round" style={tr}/>
      <polygon points="20,36 10,14 34,26" fill={p > 0.3 ? "white" : "none"} opacity="0.6" style={tr}/>
      <polygon points="96,36 106,14 82,26" fill={p > 0.3 ? "white" : "none"} opacity="0.6" style={tr}/>
      <circle cx="58" cy="62" r="38" fill={filled} stroke={color} strokeWidth="3" opacity={op} style={tr}/>
      <ellipse cx="58" cy="74" rx="18" ry="12" fill={p > 0.2 ? "white" : "none"} opacity="0.5" style={tr}/>
      {eyes}
      {p > 0.4 && <><ellipse cx="58" cy="70" rx="5" ry="4" fill="#1e1b4b"/><path d="M58 74 Q52 80 48 77 M58 74 Q64 80 68 77" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round"/></>}
      {p > 0.8 && <><ellipse cx="36" cy="68" rx="9" ry="6" fill={color} opacity="0.35"/><ellipse cx="80" cy="68" rx="9" ry="6" fill={color} opacity="0.35"/></>}
      {stars}
    </svg>
  );

  if (type === "penguin") return (
    <svg viewBox="0 0 116 116" width={size} height={size}>
      <ellipse cx="58" cy="66" rx="36" ry="42" fill={filled} stroke={color} strokeWidth="3" opacity={op} style={tr}/>
      <ellipse cx="58" cy="68" rx="22" ry="32" fill={p > 0.2 ? "white" : "none"} opacity="0.55" style={tr}/>
      <ellipse cx="44" cy="52" rx="7" ry="8" fill={p > 0.2 ? "#1e1b4b" : "none"} stroke={color} strokeWidth="2" style={tr}/>
      <ellipse cx="72" cy="52" rx="7" ry="8" fill={p > 0.2 ? "#1e1b4b" : "none"} stroke={color} strokeWidth="2" style={tr}/>
      {p > 0.2 && <><circle cx="46" cy="50" r="2" fill="white"/><circle cx="74" cy="50" r="2" fill="white"/></>}
      {p > 0.4 && <ellipse cx="58" cy="64" rx="7" ry="5" fill="#f59e0b" opacity="0.9"/>}
      {p > 0.6 && <><ellipse cx="20" cy="70" rx="10" ry="18" fill={filled} stroke={color} strokeWidth="2" opacity="0.6" style={tr}/><ellipse cx="96" cy="70" rx="10" ry="18" fill={filled} stroke={color} strokeWidth="2" opacity="0.6" style={tr}/></>}
      {p > 0.8 && <><ellipse cx="42" cy="102" rx="14" ry="6" fill="#f59e0b" opacity="0.8"/><ellipse cx="74" cy="102" rx="14" ry="6" fill="#f59e0b" opacity="0.8"/></>}
      {stars}
    </svg>
  );

  if (type === "owl") return (
    <svg viewBox="0 0 116 116" width={size} height={size}>
      <ellipse cx="58" cy="66" rx="36" ry="40" fill={filled} stroke={color} strokeWidth="3" opacity={op} style={tr}/>
      <polygon points="38,28 22,6 52,22" fill={filled} stroke={color} strokeWidth="2.5" strokeLinejoin="round" style={tr}/>
      <polygon points="78,28 94,6 64,22" fill={filled} stroke={color} strokeWidth="2.5" strokeLinejoin="round" style={tr}/>
      <circle cx="44" cy="54" r="12" fill={p > 0.2 ? "white" : "none"} stroke={color} strokeWidth="2" style={tr}/>
      <circle cx="72" cy="54" r="12" fill={p > 0.2 ? "white" : "none"} stroke={color} strokeWidth="2" style={tr}/>
      <circle cx="44" cy="54" r="7" fill={p > 0.2 ? "#1e1b4b" : "none"} style={tr}/>
      <circle cx="72" cy="54" r="7" fill={p > 0.2 ? "#1e1b4b" : "none"} style={tr}/>
      {p > 0.2 && <><circle cx="46" cy="52" r="2.5" fill="white"/><circle cx="74" cy="52" r="2.5" fill="white"/></>}
      {p > 0.4 && <polygon points="58,64 52,72 64,72" fill="#f59e0b" opacity="0.9"/>}
      {p > 0.6 && <><ellipse cx="30" cy="78" rx="8" ry="14" fill={filled} stroke={color} strokeWidth="2" opacity="0.6" style={tr}/><ellipse cx="86" cy="78" rx="8" ry="14" fill={filled} stroke={color} strokeWidth="2" opacity="0.6" style={tr}/></>}
      {p > 0.8 && <><ellipse cx="38" cy="72" rx="9" ry="6" fill={color} opacity="0.35"/><ellipse cx="78" cy="72" rx="9" ry="6" fill={color} opacity="0.35"/></>}
      {stars}
    </svg>
  );

  if (type === "lion") return (
    <svg viewBox="0 0 116 116" width={size} height={size}>
      {[0, 40, 80, 120, 160, 200, 240, 300].map((a, i) => {
        const rad = a * Math.PI / 180, r = 46;
        return (
          <ellipse key={i}
            cx={58 + r * Math.cos(rad)} cy={62 + r * Math.sin(rad)}
            rx="9" ry="12"
            fill={p > 0.1 ? color : "none"} stroke={color} strokeWidth="1.5"
            opacity={op * 0.7}
            style={{ ...tr, transformOrigin:`${58 + r * Math.cos(rad)}px ${62 + r * Math.sin(rad)}px`, transform:`rotate(${a}deg)` }}
          />
        );
      })}
      <circle cx="58" cy="62" r="34" fill={filled} stroke={color} strokeWidth="3" opacity={op} style={tr}/>
      {eyes}
      {p > 0.4 && <><ellipse cx="58" cy="70" rx="9" ry="7" fill={p > 0.4 ? color : "none"} opacity="0.5" style={tr}/><ellipse cx="58" cy="68" rx="5" ry="4" fill="#1e1b4b"/><path d="M58 72 Q52 78 48 75 M58 72 Q64 78 68 75" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round"/></>}
      {p > 0.8 && <><ellipse cx="38" cy="68" rx="9" ry="6" fill={color} opacity="0.4"/><ellipse cx="78" cy="68" rx="9" ry="6" fill={color} opacity="0.4"/></>}
      {stars}
    </svg>
  );

  if (type === "dog") return (
    <svg viewBox="0 0 116 116" width={size} height={size}>
      <ellipse cx="22" cy="44" rx="14" ry="22" fill={filled} stroke={color} strokeWidth="3" opacity={op} style={tr}/>
      <ellipse cx="94" cy="44" rx="14" ry="22" fill={filled} stroke={color} strokeWidth="3" opacity={op} style={tr}/>
      <circle cx="58" cy="60" r="36" fill={filled} stroke={color} strokeWidth="3" opacity={op} style={tr}/>
      <ellipse cx="58" cy="74" rx="18" ry="13" fill={p > 0.2 ? color : "none"} stroke={color} strokeWidth="2" opacity="0.6" style={tr}/>
      {p > 0.2
        ? <><circle cx="44" cy="54" r="6" fill="#1e1b4b"/><circle cx="72" cy="54" r="6" fill="#1e1b4b"/><circle cx="46" cy="52" r="2" fill="white"/><circle cx="74" cy="52" r="2" fill="white"/></>
        : <><circle cx="44" cy="54" r="5" fill="none" stroke={color} strokeWidth="2"/><circle cx="72" cy="54" r="5" fill="none" stroke={color} strokeWidth="2"/></>}
      {p > 0.4 && <><ellipse cx="58" cy="72" rx="6" ry="4" fill="#1e1b4b"/><path d="M50 77 Q58 82 66 77" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round"/></>}
      {p > 0.6 && <><line x1="30" y1="71" x2="52" y2="72" stroke={color} strokeWidth="1.5" opacity="0.6"/><line x1="64" y1="72" x2="86" y2="71" stroke={color} strokeWidth="1.5" opacity="0.6"/></>}
      {p > 0.8 && <><ellipse cx="38" cy="68" rx="9" ry="6" fill={color} opacity="0.4"/><ellipse cx="78" cy="68" rx="9" ry="6" fill={color} opacity="0.4"/></>}
      {stars}
    </svg>
  );

  if (type === "frog") return (
    <svg viewBox="0 0 116 116" width={size} height={size}>
      <circle cx="36" cy="30" r="16" fill={filled} stroke={color} strokeWidth="3" opacity={op} style={tr}/>
      <circle cx="80" cy="30" r="16" fill={filled} stroke={color} strokeWidth="3" opacity={op} style={tr}/>
      <ellipse cx="58" cy="68" rx="40" ry="32" fill={filled} stroke={color} strokeWidth="3" opacity={op} style={tr}/>
      {p > 0.2
        ? <><circle cx="36" cy="28" r="8" fill="#1e1b4b"/><circle cx="80" cy="28" r="8" fill="#1e1b4b"/><circle cx="38" cy="25" r="2.5" fill="white"/><circle cx="82" cy="25" r="2.5" fill="white"/></>
        : <><circle cx="36" cy="28" r="7" fill="none" stroke={color} strokeWidth="2"/><circle cx="80" cy="28" r="7" fill="none" stroke={color} strokeWidth="2"/></>}
      {p > 0.4 && <path d="M28 72 Q58 88 88 72" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round"/>}
      {p > 0.4 && <><circle cx="50" cy="62" r="3" fill="#1e1b4b"/><circle cx="66" cy="62" r="3" fill="#1e1b4b"/></>}
      {p > 0.8 && <><ellipse cx="32" cy="74" rx="9" ry="6" fill={color} opacity="0.35"/><ellipse cx="84" cy="74" rx="9" ry="6" fill={color} opacity="0.35"/></>}
      {stars}
    </svg>
  );

  // elephant (default)
  return (
    <svg viewBox="0 0 116 130" width={size} height={size * 1.1}>
      <circle cx="14" cy="56" r="22" fill={filled} stroke={color} strokeWidth="3" opacity={op} style={tr}/>
      <circle cx="102" cy="56" r="22" fill={filled} stroke={color} strokeWidth="3" opacity={op} style={tr}/>
      <circle cx="14" cy="56" r="14" fill={p > 0.3 ? color : "none"} opacity="0.4" style={tr}/>
      <circle cx="102" cy="56" r="14" fill={p > 0.3 ? color : "none"} opacity="0.4" style={tr}/>
      <circle cx="58" cy="58" r="36" fill={filled} stroke={color} strokeWidth="3" opacity={op} style={tr}/>
      {p > 0.2
        ? <><circle cx="44" cy="50" r="6" fill="#1e1b4b"/><circle cx="72" cy="50" r="6" fill="#1e1b4b"/><circle cx="46" cy="48" r="2" fill="white"/><circle cx="74" cy="48" r="2" fill="white"/></>
        : <><circle cx="44" cy="50" r="5" fill="none" stroke={color} strokeWidth="2"/><circle cx="72" cy="50" r="5" fill="none" stroke={color} strokeWidth="2"/></>}
      <path d={`M46 72 Q38 80 40 92 Q42 104 54 108`} stroke={color} strokeWidth={p > 0.4 ? 10 : 6} fill="none" strokeLinecap="round" opacity={op} style={tr}/>
      {p > 0.4 && <ellipse cx="54" cy="108" rx="7" ry="5" fill={color} opacity={op}/>}
      {p > 0.6 && <path d="M50 66 Q58 72 66 66" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round"/>}
      {p > 0.8 && <><ellipse cx="36" cy="64" rx="9" ry="6" fill={color} opacity="0.4"/><ellipse cx="76" cy="64" rx="9" ry="6" fill={color} opacity="0.4"/></>}
      {stars}
    </svg>
  );
}
