import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Tab } from "./Tab";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Tab />
  </StrictMode>
);
