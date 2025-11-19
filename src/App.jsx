// src/App.jsx
// Configuração das rotas principais (comentário em português)
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Skills from "./pages/Skills.jsx";
import ProjectsPage from "./pages/Projects.jsx";
import ContactPage from "./pages/Contact.jsx";
import ContactSection from "./components/ContactSection.jsx";

export default function App() {
  return (
    <Routes>
      {/* Startseite / Übersicht */}
      <Route path="/" element={<Home />} />

      {/* Seite nur für Skills */}
      <Route path="/skills" element={<Skills />} />

      {/* Seite nur für Projekte */}
      <Route path="/projekte" element={<ProjectsPage />} />

      {/* Seite nur für Kontakt */}
      <Route path="/kontakt" element={<ContactPage />} />
    </Routes>
  );
}
