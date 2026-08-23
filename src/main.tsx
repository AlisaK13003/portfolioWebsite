import { createRoot } from "react-dom/client";
import App from "./App";
import { StartupGate } from "./components/StartupGate";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StartupGate>
    <App />
  </StartupGate>,
);
