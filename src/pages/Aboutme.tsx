import Navbar from "../components/ui/Navbar";
import Footer from "../components/sections/Footer";
import AboutSection from "../components/sections/AboutSection";

export default function AboutMePage() {
  return (
    <div className="min-h-screen text-primary">
      <Navbar />
      <main>
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
