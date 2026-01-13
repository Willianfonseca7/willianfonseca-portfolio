import Navbar from "../components/ui/Navbar.jsx";
import Footer from "../components/sections/Footer.jsx";
import AboutSection from "../components/sections/AboutSection.jsx";

export default function AboutMePage() {
  return (
    <div className="min-h-screen text-slate-100">
      <Navbar />
      <main>
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
