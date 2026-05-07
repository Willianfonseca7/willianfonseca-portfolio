import Navbar from "../components/ui/Navbar";
import Footer from "../components/sections/Footer";
import ProjectsSection from "../components/sections/ProjectsSection";

export default function Projekte() {
  return (
    <div className="min-h-screen text-primary">
      <Navbar />
      <main>
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
