import { Routes, Route } from "react-router-dom";
import useScrollToHash from "./hooks/useScrollToHash";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/Contact";
import AboutMePage from "./pages/Aboutme";

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
