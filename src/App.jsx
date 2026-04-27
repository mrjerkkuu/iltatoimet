import { useState, useEffect, useRef } from "react";
import { sGet, sSet } from "./storage";
import { DEFAULT_TASKS, STORAGE_KEY, PROGRESS_KEY, TASKS_KEY } from "./constants";
import { BASE } from "./styles";
import Stars from "./components/Stars";
import StepCount from "./views/StepCount";
import StepNaming from "./views/StepNaming";
import TaskEditor from "./views/TaskEditor";
import ChildEditor from "./views/ChildEditor";
import ChildPage from "./views/ChildPage";
import Home from "./views/Home";

export default function App() {
  const [phase, setPhase] = useState("loading");
  const [pendingCount, setPendingCount] = useState(null);
  const [pendingChildren, setPendingChildren] = useState(null);
  const [children, setChildren] = useState([]);
  const [tasks, setTasks] = useState(DEFAULT_TASKS);
  const [progress, setProgress] = useState({});
  const [activeChild, setActiveChild] = useState(null);
  const phaseRef = useRef(phase);
  phaseRef.current = phase;

  useEffect(() => {
    window.history.pushState(null, "");
    const handlePopState = () => {
      window.history.pushState(null, "");
      switch (phaseRef.current) {
        case "child":
          setActiveChild(null);
          setPhase("home");
          break;
        case "editChildren":
        case "editTasks":
          setPhase("home");
          break;
        case "naming":
          setPhase("count");
          break;
        case "tasks":
          setPhase("naming");
          break;
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    (async () => {
      const config     = await sGet(STORAGE_KEY);
      const prog       = await sGet(PROGRESS_KEY) || {};
      const savedTasks = await sGet(TASKS_KEY);
      if (config && config.length > 0) {
        setChildren(config);
        setProgress(prog);
        if (savedTasks && savedTasks.length > 0) setTasks(savedTasks);
        setPhase("home");
      } else {
        setPhase("count");
      }
    })();
  }, []);

  async function saveAll(kids, tks, prog) {
    await sSet(STORAGE_KEY, kids);
    await sSet(TASKS_KEY, tks);
    await sSet(PROGRESS_KEY, prog);
  }

  async function handleProgressChange(childId, newDone) {
    const p = { ...progress, [childId]: newDone };
    setProgress(p);
    await sSet(PROGRESS_KEY, p);
  }

  async function handleClearAll() {
    const empty = {};
    children.forEach(c => { empty[c.id] = {}; });
    setProgress(empty);
    await sSet(PROGRESS_KEY, empty);
  }

  async function handleEditChildrenDone(kids) {
    setChildren(kids);
    await sSet(STORAGE_KEY, kids);
    const keptIds = new Set(kids.map(c => c.id));
    const cleanedProgress = Object.fromEntries(
      Object.entries(progress).filter(([id]) => keptIds.has(Number(id)))
    );
    setProgress(cleanedProgress);
    await sSet(PROGRESS_KEY, cleanedProgress);
    setPhase("home");
  }

  async function handleEditTasksDone(tks) {
    setTasks(tks);
    await sSet(TASKS_KEY, tks);
    setPhase("home");
  }

  return (
    <div style={BASE}>
      <Stars />

      {phase === "loading" && (
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", minHeight:"100vh", color:"rgba(255,255,255,0.4)", fontSize:16, position:"relative", zIndex:1 }}>
          🌙 Ladataan...
        </div>
      )}

      {phase === "count" && (
        <StepCount onNext={n => { setPendingCount(n); setPhase("naming"); }} />
      )}

      {phase === "naming" && (
        <StepNaming
          count={pendingCount}
          onNext={kids => { setPendingChildren(kids); setPhase("tasks"); }}
        />
      )}

      {phase === "tasks" && (
        <TaskEditor
          initial={DEFAULT_TASKS}
          onDone={async tks => {
            const kids = pendingChildren;
            setChildren(kids); setTasks(tks); setProgress({});
            await saveAll(kids, tks, {});
            setPhase("home");
          }}
          onBack={() => setPhase("naming")}
        />
      )}

      {phase === "editChildren" && (
        <ChildEditor
          initialChildren={children}
          onDone={handleEditChildrenDone}
          onBack={() => setPhase("home")}
        />
      )}

      {phase === "editTasks" && (
        <TaskEditor
          initial={tasks}
          onDone={handleEditTasksDone}
          onBack={() => setPhase("home")}
        />
      )}

      {phase === "child" && activeChild && (
        <ChildPage
          child={activeChild}
          tasks={tasks}
          done={progress[activeChild.id] || {}}
          onChange={d => handleProgressChange(activeChild.id, d)}
          onBack={() => { setActiveChild(null); setPhase("home"); }}
        />
      )}

      {phase === "home" && (
        <Home
          children={children}
          tasks={tasks}
          progress={progress}
          onSelect={c => { setActiveChild(c); setPhase("child"); }}
          onEditChildren={() => setPhase("editChildren")}
          onEditTasks={() => setPhase("editTasks")}
          onClearAll={handleClearAll}
        />
      )}
    </div>
  );
}
