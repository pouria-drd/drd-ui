import React from "react";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import { ModalProvider, ToastProvider } from "./components/custom-ui/contexts";

import "./assets/styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToastProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </ToastProvider>
  </React.StrictMode>
);
