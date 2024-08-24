import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  hookIndex,
  INITIALIZATION,
  Phase,
  resetState,
  setPhase,
} from "./hooks/useState/index.ts";
import { flushSync } from "react-dom";
import { effects } from "./hooks/useEffect/index.ts";
const rootEl = document.createElement("root");
document.body.append(rootEl);
const appRoot = createRoot(rootEl);

export function render(newPhase: Phase) {
  resetState();
  setPhase(newPhase);

  flushSync(() => {
    appRoot.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  });

  for (const effect of effects) {
    if (!effect) continue;

    effect.callback();
  }
}

render(INITIALIZATION);
