import { useRef } from "react";
import { CUSTOM_CELEBRATION_SOUND_URL } from "../constants";

export function useSounds() {
  const ctx = useRef(null);

  function getCtx() {
    if (!ctx.current)
      ctx.current = new (window.AudioContext || window.webkitAudioContext)();
    return ctx.current;
  }

  function tick() {
    try {
      const c = getCtx(), o = c.createOscillator(), g = c.createGain();
      o.connect(g); g.connect(c.destination);
      o.frequency.setValueAtTime(500, c.currentTime);
      o.frequency.exponentialRampToValueAtTime(860, c.currentTime + 0.1);
      g.gain.setValueAtTime(0.15, c.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.15);
      o.start(); o.stop(c.currentTime + 0.18);
    } catch {}
  }

  function celebrate() {
    if (CUSTOM_CELEBRATION_SOUND_URL) {
      try {
        const audio = new Audio(CUSTOM_CELEBRATION_SOUND_URL);
        audio.play().catch(() => synthFanfare());
        return;
      } catch {}
    }
    synthFanfare();
  }

  function synthFanfare() {
    try {
      const c = getCtx();
      [523, 659, 784, 1047, 1319, 1568].forEach((freq, i) => {
        const o = c.createOscillator(), g = c.createGain();
        o.connect(g); g.connect(c.destination);
        o.type = "sine"; o.frequency.value = freq;
        const t = c.currentTime + i * 0.13;
        g.gain.setValueAtTime(0, t);
        g.gain.linearRampToValueAtTime(0.2, t + 0.05);
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.4);
        o.start(t); o.stop(t + 0.45);
      });
    } catch {}
  }

  return { tick, celebrate };
}
