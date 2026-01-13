// src/App.jsx
// Configuração das rotas principais
import { Routes, Route } from "react-router-dom";
import useScrollToHash from "./hooks/useScrollToHash.js";

import Home from "./pages/Home.jsx";
import Skills from "./pages/Skills.jsx";
import ProjectsPage from "./pages/Projects.jsx";
import ContactPage from "./pages/Contact.jsx";
import AboutMePage from "./pages/Aboutme.jsx";

export default function App() {
  useScrollToHash();

  return (
    <Routes>
      {/* Startseite / Übersicht */}
      <Route path="/" element={<Home />} />

      {/* Seite über mich */}
      <Route path="/about" element={<AboutMePage />} />

      {/* Seite nur für Skills */}
      <Route path="/skills" element={<Skills />} />

      {/* Seite nur für Projekte */}
      <Route path="/projekte" element={<ProjectsPage />} />

      {/* Seite nur für Kontakt */}
      <Route path="/kontakt" element={<ContactPage />} />
    </Routes>
  );
}
