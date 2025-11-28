// src/components/About.jsx

export default function About() {
  const qualities = [
    {
      title: "Logik & Problemlösung",
      emoji: "🧠",
      text: "Ich zerlege komplexe Probleme in klare Schritte und baue Lösungen, die nicht nur funktionieren, sondern verständlich und wartbar sind.",
    },
    {
      title: "Teamplayer mit Ownership",
      emoji: "🤝",
      text: "Ich übernehme Verantwortung für meine Aufgaben, kommuniziere offen und arbeite gerne eng mit anderen zusammen – Remote oder vor Ort.",
    },
    {
      title: "Authentisch & neugierig",
      emoji: "⚡",
      text: "Ich lerne extrem schnell, stelle viele Fragen und bleibe dabei immer ehrlich und direkt. Für mich zählt echtes Verständnis statt Copy & Paste.",
    },
  ];

  const values = [
    "Sauberer, lesbarer Code",
    "User-zentrierte Interfaces",
    "Transparente Kommunikation",
    "Kontinuierliches Lernen",
  ];

  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl px-4 py-20"
    >
      {/* Glow de fundo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      {/* Header */}
            <header className="space-y-4 mb-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-slate-900/70 px-3 py-1 text-xs text-sky-300 shadow-sm shadow-sky-500/20 mx-auto">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Quereinsteiger · Web & WebApp Developer (in Ausbildung)
            </div>

            <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-50">
                Über mich
                </h2>

                <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
                Ich bin Willian Fonseca – Quereinsteiger in die IT, aktuell in einer
                Umschulung zum Web &amp; WebApp Developer am Syntax Institut. Ich
                kombiniere einen starken Sinn für Logik mit einem Auge für Design und ein
                echtes Interesse an Menschen.
                </p>
            </div>
            </header>


      {/* Grid principal */}
      <div className="grid gap-8 lg:grid-cols-[minmax(0,2.1fr)_minmax(0,1.4fr)] items-start">
        {/* Coluna esquerda */}
        <div className="space-y-6">
          {/* Card principal */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-900/90 p-6 md:p-7 shadow-2xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-sky-500/40">
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute -inset-20 bg-gradient-to-tr from-sky-500/20 via-transparent to-purple-500/20 blur-3xl" />
            </div>

            <div className="relative space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Wer ich bin
              </p>
              <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                Ich komme ursprünglich nicht aus der IT – und genau das ist meine
                Stärke. Ich weiß, wie es ist, bei null anzufangen, und habe mir 
                in kurzer Zeit einen soliden Tech-Stack aufgebaut:{" "}
                <span className="font-semibold text-sky-300">
                  React, JavaScript, Tailwind CSS, REST-APIs
                </span>{" "}
                und moderne Projektstrukturen mit Git &amp; GitHub.
              </p>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                Ich arbeite strukturiert, mag klare Kommunikation und fühle mich
                am wohlsten, wenn ich gemeinsam mit anderen etwas baue, das
                Menschen wirklich benutzen. Für mich ist Frontend nicht nur Code,
                sondern auch Storytelling, UX und Gefühl.
              </p>

              {/* Chips de “Stats” */}
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-sky-500/15 border border-sky-500/40 px-3 py-1 text-sky-100">
                  Fokus: Frontend &amp; UI/UX
                </span>
                <span className="rounded-full bg-emerald-500/15 border border-emerald-500/40 px-3 py-1 text-emerald-100">
                  Learning by Doing &amp; Projekte
                </span>
                <span className="rounded-full bg-purple-500/15 border border-purple-500/40 px-3 py-1 text-purple-100">
                  Düsseldorf · Remote offen
                </span>
              </div>
            </div>
          </div>

          {/* Valores */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 shadow-xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Was mir in Projekten wichtig ist
            </p>
            <div className="flex flex-wrap gap-2">
              {values.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-200 border border-slate-700 hover:border-sky-400 hover:text-sky-100 transition-all"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                  {item}
                </span>
              ))}
            </div>

            {/* Sprachen / Standort */}
            <div className="mt-3 grid gap-4 text-sm text-slate-200 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Sprachen
                </p>
                <p className="mt-1">
                  🇧🇷 Portugiesisch · 🇩🇪 Deutsch · 🇬🇧 Englisch
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Standort
                </p>
                <p className="mt-1">Düsseldorf, Deutschland</p>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna direita – cards de “Wie ich arbeite” */}
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Wie ich arbeite
          </p>

          <div className="space-y-4">
            {qualities.map((q, index) => (
              <article
                key={q.title}
                className={`group relative overflow-hidden rounded-2xl border bg-slate-900/80 p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-sky-500/40 ${
                  index === 1
                    ? "border-purple-500/40"
                    : "border-slate-800 hover:border-sky-500/60"
                }`}
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute -inset-16 bg-gradient-to-br from-sky-500/15 via-transparent to-purple-500/20 blur-2xl" />
                </div>

                <div className="relative flex gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800/90 text-xl">
                    {q.emoji}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-slate-50">
                      {q.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {q.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
