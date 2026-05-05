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
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutMePage />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projekte" element={<ProjectsPage />} />
      <Route path="/kontakt" element={<ContactPage />} />
    </Routes>
  );
}
