import Navbar from "../components/ui/Navbar";
import Footer from "../components/sections/Footer";
import HeroSection from "../components/sections/HeroSection";
import ProjectsPreviewSection from "../components/sections/ProjectsPreviewSection";
import WorkSection from "../components/sections/WorkSection";
import FoundationsSection from "../components/sections/FoundationsSection";
import ContactSection from "../components/sections/ContactSection";
export default function Home() {
  return (
    <div className="home-page">
      <Navbar home />
      <main id="main-content">
        <HeroSection />
        <ProjectsPreviewSection />
        <WorkSection />
        <FoundationsSection />
        <ContactSection compact />
      </main>
      <Footer />
    </div>
  );
}
