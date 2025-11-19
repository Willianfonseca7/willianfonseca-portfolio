// src/pages/Skills.jsx
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import SkillsSection from "../components/SkillsSection.jsx"; // <-- IMPORT ATIVO

export default function Skills() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar />

      <main className="mx-auto max-w-5xl px-4 py-16 space-y-24">
        {/* Agora usamos o componente real */}
        <SkillsSection />
      </main>

      <Footer />
    </div>
  );
}
