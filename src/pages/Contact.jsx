import Navbar from "../components/ui/Navbar.jsx";
import Footer from "../components/sections/Footer.jsx";
import ContactSection from "../components/sections/ContactSection.jsx";

export default function ContactPage() {
  return (
    <div className="min-h-screen text-slate-100">
      <Navbar />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
