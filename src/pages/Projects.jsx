// src/pages/Projekte.jsx
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ProjectsSection from "../components/ProjectsSection.jsx";

export default function Projekte() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      <Navbar />

      <main className="flex-1 mx-auto w-full max-w-5xl px-4 py-16">
        <ProjectsSection />
      </main>

      <Footer />
    </div>
  );
}
