import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App";
import { LanguageProvider } from "./context/LanguageContext";
import { projects } from "./data/projects";

export const prerenderRoutes = [
  "/",
  "/about",
  "/skills",
  "/projekte",
  "/kontakt",
  ...projects.filter((project) => !project.hidden).map((project) => `/projekte/${project.id}`),
];

export function render(pathname: string) {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, "");
  return renderToString(
    <React.StrictMode>
      <StaticRouter basename={basename} location={`${basename}${pathname}`}>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </StaticRouter>
    </React.StrictMode>,
  );
}
