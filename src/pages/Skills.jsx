import Navbar from "../components/ui/Navbar.jsx";
import Footer from "../components/sections/Footer.jsx";
import SkillsSection from "../components/sections/SkillsSection.jsx";

export default function Skills() {
  return (
    <div className="min-h-screen text-slate-100">
      <Navbar />
      <main>
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
}
