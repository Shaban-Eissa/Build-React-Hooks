import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
const rootEl = document.createElement("div");
document.body.append(rootEl);
const appRoot = createRoot(rootEl);

export function render() {
  appRoot.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

render();
