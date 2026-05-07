import Navbar from "../components/ui/Navbar";
import Footer from "../components/sections/Footer";
import ContactSection from "../components/sections/ContactSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen text-primary">
      <Navbar />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
