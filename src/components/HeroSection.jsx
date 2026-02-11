import ProfileImageGlow from "./ProfileImageGlow.jsx";

export default function HeroSection() {
  return (
    <section className="mx-auto max-w-5xl px-4 pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-center">
        
        {/* TEXTO */}
        <div className="space-y-6">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-sky-400">
            FRONTEND · UMSCHULUNG · REACT
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            Frontend-Entwickler in Umschulung
            <span className="block text-sky-400">
              für moderne Webentwicklung.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-muted max-w-xl">
            Ich mache eine Umschulung zum Web & WebApp Developer am Syntax
            Institut (Berlin) und baue saubere, nutzerfreundliche Interfaces mit
            Fokus auf React, UI/UX, Performance und Barrierefreiheit.
          </p>

          <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-muted">
            <span className="rounded-full border border-slate-700 px-3 py-1">
              🔧 React · Vite · Tailwind
            </span>
            <span className="rounded-full border border-slate-700 px-3 py-1">
              🎨 UI/UX & Prototyping
            </span>
            <span className="rounded-full border border-slate-700 px-3 py-1">
              📍 Düsseldorf · remote
            </span>
          </div>

          {/* BOTÕES */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="/projekte"
              className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium bg-sky-500 text-primary hover:bg-sky-400 transition"
            >
              Projekte ansehen
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium border border-slate-700 text-primary hover:border-sky-400 hover:text-sky-200 transition"
            >
              Lass uns sprechen
            </a>
          </div>
        </div>

        {/* FOTO COM GLOW */}
        <div className="flex justify-center lg:justify-end">
          <ProfileImageGlow />
        </div>

      </div>
    </section>
  );
}
