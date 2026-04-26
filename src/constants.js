export const DEFAULT_TASKS = [
  { id: "toys",    label: "Korjaa lelut",    emoji: "🧸" },
  { id: "eat",     label: "Syö iltapala",    emoji: "🍽️" },
  { id: "toilet",  label: "Käynyt vessassa", emoji: "🚽" },
  { id: "teeth",   label: "Pese hampaat",    emoji: "🦷" },
  { id: "pajamas", label: "Pue pyjama",      emoji: "👕" },
];

export const ANIMAL_OPTIONS = [
  { type: "cat",      emoji: "🐱", label: "Kissa"     },
  { type: "bear",     emoji: "🐻", label: "Karhu"     },
  { type: "bunny",    emoji: "🐰", label: "Pupu"      },
  { type: "fox",      emoji: "🦊", label: "Kettu"     },
  { type: "penguin",  emoji: "🐧", label: "Pingviini" },
  { type: "owl",      emoji: "🦉", label: "Pöllö"     },
  { type: "lion",     emoji: "🦁", label: "Leijona"   },
  { type: "dog",      emoji: "🐶", label: "Koira"     },
  { type: "frog",     emoji: "🐸", label: "Sammakko"  },
  { type: "elephant", emoji: "🐘", label: "Norsu"     },
];

export const PALETTE = [
  { color: "#f9a8d4", accent: "#ec4899" },
  { color: "#93c5fd", accent: "#3b82f6" },
  { color: "#86efac", accent: "#22c55e" },
  { color: "#fde68a", accent: "#f59e0b" },
  { color: "#c4b5fd", accent: "#8b5cf6" },
  { color: "#fb923c", accent: "#ea580c" },
];

export const TASK_EMOJIS = [
  "🧸","🍽️","🚽","🦷","👕","🛁","📚","💤","🌙",
  "🧴","🧹","🥛","🎒","🧦","💊","🪥","🐾","⭐","🎵","🫧",
];

// Bump version suffix to reset all saved data
export const STORAGE_KEY  = "iltatoimet_cfg_v5";
export const PROGRESS_KEY = "iltatoimet_prog_v5";
export const TASKS_KEY    = "iltatoimet_tasks_v5";

// Paste a URL or data:audio/mp3;base64,... here for a custom celebration sound.
// Leave empty to use the built-in synthesized fanfare.
export const CUSTOM_CELEBRATION_SOUND_URL = "";
