import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { INITIALIZATION, Phase, setPhase } from "./hooks/useState/index.ts";
const rootEl = document.createElement("div");
document.body.append(rootEl);
const appRoot = createRoot(rootEl);

export function render(newPhase: Phase) {
  setPhase(newPhase);

  appRoot.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

render(INITIALIZATION);
