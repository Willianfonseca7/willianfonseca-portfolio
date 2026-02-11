import Navbar from "../components/ui/Navbar.jsx";
import Footer from "../components/sections/Footer.jsx";
import HeroSection from "../components/sections/HeroSection.jsx";
import ProjectsPreviewSection from "../components/sections/ProjectsPreviewSection.jsx";
import AboutPreviewSection from "../components/sections/AboutPreviewSection.jsx";

export default function Home() {
  return (
    <div className="min-h-screen text-primary">
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsPreviewSection />
        <AboutPreviewSection />
      </main>
      <Footer />
    </div>
  );
}
