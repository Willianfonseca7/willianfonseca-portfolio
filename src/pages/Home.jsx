import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import ProjectsSection from "../components/ProjectsSection.jsx";
import ContactSection from "../components/ContactSection.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar />

      <main className="mx-auto max-w-5xl px-4 py-12 space-y-24">
        <HeroSection />  
      </main>

      <Footer />
    </div>
  );
}

