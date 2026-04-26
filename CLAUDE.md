# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Dev server at localhost:5173
npm run build        # Production build → dist/
npm run lint         # ESLint
npm run cap:sync     # Build + sync web assets to android/
npm run cap:android  # Open Android Studio
```

To build a debug APK after `cap:sync`:
```bash
cd android && ./gradlew assembleDebug
# APK → android/app/build/outputs/apk/debug/app-debug.apk
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

## Architecture

React 19 + Vite 8 SPA wrapped with **Capacitor 8** for Android. Plain JavaScript, no TypeScript.

### State machine (App.jsx)
The app is a single-state-machine. `phase` drives what's rendered:
`loading → count → naming → tasks → home ↔ child / editChildren / editTasks`

All persistent state flows through `src/storage.js` (Capacitor Preferences with automatic localStorage fallback for browser dev).

Storage keys are versioned constants in `src/constants.js` — bump the version suffix to wipe all user data.

### File structure
```
src/
  constants.js          — DEFAULT_TASKS, ANIMAL_OPTIONS, PALETTE, storage keys
  storage.js            — sGet / sSet / sDel via @capacitor/preferences
  styles.js             — S (shared inline style objects) + BASE (root div style)
  hooks/useSounds.js    — Web Audio API tick + fanfare
  components/
    AnimalSVG.jsx       — SVG animal that fills in as progress 0→1
    ChildForm.jsx       — Shared name/animal/colour picker form
    Confetti.jsx        — position:fixed celebration particles
    Stars.jsx           — position:fixed twinkling background (rendered once in App)
  views/
    StepCount.jsx       — Onboarding: pick number of children
    StepNaming.jsx      — Onboarding: name each child
    TaskEditor.jsx      — Add/reorder/remove evening tasks
    ChildEditor.jsx     — Edit existing children's name/animal/colour
    ChildPage.jsx       — Per-child task checklist with progress animal
    Home.jsx            — Child selector with progress bars
```

### Capacitor config
`capacitor.config.json` — app ID `fi.iltatoimet.app`, webDir `dist`, Android scheme `https`.
The `android/` directory is the full Gradle project. Run `npm run cap:sync` after any web change before rebuilding the APK.
