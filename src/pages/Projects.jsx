// src/pages/Projects.jsx

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ProjectsSection from "../components/ProjectsSection.jsx";


export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar />

      <main className="mx-auto max-w-5xl px-4 py-12 space-y-24">
      

        <ProjectsSection />
      </main>

      <Footer />
    </div>
  );
}



