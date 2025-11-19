// src/pages/Contact.jsx
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ContactSection from "../components/ContactSection.jsx";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar />

      <main className="mx-auto max-w-5xl px-4 py-16 space-y-12">
        <h1 className="text-3xl font-bold text-indigo-300 mb-2">Kontakt</h1>
        <p className="text-slate-400 mb-6 max-w-xl">
          Wenn Sie Fragen haben oder mit mir über eine mögliche Zusammenarbeit
          sprechen möchten, freue ich mich über eine Nachricht.
        </p>
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
