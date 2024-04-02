import React from "react";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import { ModalProvider } from "./components/custom-ui/contexts";

import "./assets/styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>
);
