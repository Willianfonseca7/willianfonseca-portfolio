// src/pages/Aboutme.jsx
import Navbar from "../components/Navbar.jsx";
import About from "../components/About.jsx";
import Footer from "../components/Footer.jsx";

export default function AboutMePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      <Navbar />

      <main className="flex-1">
        <About />
      </main>

      <Footer />
    </div>
  );
}
