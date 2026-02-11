import Navbar from "../components/ui/Navbar.jsx";
import Footer from "../components/sections/Footer.jsx";
import ProjectsSection from "../components/sections/ProjectsSection.jsx";

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
