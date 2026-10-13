import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { LanguageProvider } from "./context/LanguageContext";

const app = (
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);

const root = document.getElementById("root") as HTMLElement;
const base = import.meta.env.BASE_URL.replace(/\/$/, "");
const pathname = window.location.pathname.slice(base.length).replace(/\/$/, "") || "/";
if (root.dataset.prerenderPath === pathname && root.hasChildNodes()) {
  ReactDOM.hydrateRoot(root, app);
} else {
  ReactDOM.createRoot(root).render(app);
}
