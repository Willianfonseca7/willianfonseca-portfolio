import Navbar from "../components/ui/Navbar";
import Footer from "../components/sections/Footer";
import HeroSection from "../components/sections/HeroSection";
import ProjectsPreviewSection from "../components/sections/ProjectsPreviewSection";
import AboutPreviewSection from "../components/sections/AboutPreviewSection";

export default function Home() {
  return (
    <div className="min-h-screen text-primary">
      <Navbar />
      <main>
        <HeroSection />
        <AboutPreviewSection />
        <ProjectsPreviewSection />
      </main>
      <Footer />
    </div>
  );
}
