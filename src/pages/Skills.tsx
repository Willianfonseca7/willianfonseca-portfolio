import Navbar from "../components/ui/Navbar";
import Footer from "../components/sections/Footer";
import SkillsSection from "../components/sections/SkillsSection";

export default function Skills() {
  return (
    <div className="min-h-screen text-primary">
      <Navbar />
      <main>
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
}
