import { useState } from "./hooks/useState";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  const [enabled, setEnabled] = useState(true);
  const toggle = () => setEnabled(!enabled);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={toggle}>{enabled ? "Disable" : "Enable"}</button>
        <button disabled={!enabled} onClick={increment}>
          {count}
        </button>
      </div>
    </>
  );
}

export default App;
