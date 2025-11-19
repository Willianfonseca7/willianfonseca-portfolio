// Seção de apresentação / hero (comentário em português)
import ProfileImage from "./ProfileImage.jsx";

export default function HeroSection() {
  return (
    <section
      id="ueber-mich"
      className="grid gap-8 md:grid-cols-[2fr,1fr] items-center"
    >
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-indigo-400">
          FRONTEND • UMSCHULUNG • REACT
        </p>

        <h1 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
          Frontend-Entwickler in Umschulung für moderne{" "}
          <span className="text-indigo-400">Webentwicklung</span>.
        </h1>

        <p className="mt-4 text-sm text-slate-300 max-w-xl leading-relaxed">
          Ich mache eine Umschulung zum Web &amp; WebApp Developer am Syntax
          Institut (Berlin) und baue saubere, nutzerfreundliche Interfaces mit
          Fokus auf{" "}
          <span className="text-indigo-300">React</span>,{" "}
          <span className="text-indigo-300">UI/UX</span> und{" "}
          <span className="text-indigo-300">Barrierefreiheit</span>.
        </p>
      </div>

      <div className="flex md:justify-end">
        <ProfileImage />
      </div>
    </section>
  );
}

