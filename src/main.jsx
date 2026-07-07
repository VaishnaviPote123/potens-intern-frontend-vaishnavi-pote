import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { registerSW } from "virtual:pwa-register";

import "./index.css";
import App from "./App";

import { LanguageProvider } from "./context/LanguageContext";
import { ReportProvider } from "./context/ReportContext";

registerSW({
  immediate: true,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LanguageProvider>
      <ReportProvider>
        <App />
      </ReportProvider>
    </LanguageProvider>
  </BrowserRouter>
);