// src/components/SkillsSection.jsx

export default function SkillsSection() {
  const skillGroups = [
    {
      title: "Frontend",
      icon: "💻",
      highlight:
        "Ich habe mehrere kleine Anwendungen mit React, Tailwind und REST-APIs umgesetzt – zum Beispiel mein Portfolio und eine Pokémon-Webapp.",
      skills: [
        "🧱 HTML5 & Semantik",
        "🎯 CSS3 / Flexbox / Grid",
        "🧩 JavaScript (ES6+)",
        "⚛️ React (Hooks, Props, State)",
        "🧭 React Router",
        "🌬️ Tailwind CSS",
      ],
    },
    {
      title: "Tools & Plattformen",
      icon: "🛠️",
      highlight:
        "Diese Tools nutze ich täglich in der Umschulung und in eigenen Projekten, um Projekte aufzusetzen, zu versionieren, zu testen und zu deployen.",
      skills: [
        "🌿 Git & GitHub (Branches, Pull Requests)",
        "⚡ Vite",
        "🟢 Node.js (Basics)",
        "📦 npm / pnpm",
        "📮 Postman (REST APIs testen)",
        "🖥️ VS Code / Cursor",
      ],
    },
    {
      title: "Design & UX",
      icon: "🎨",
      highlight:
        "Ich plane Screens in Figma, setze sie mit Tailwind im Code um und achte dabei auf responsive Layouts, Kontrast und Lesbarkeit.",
      skills: [
        "🖌️ Figma & FigJam",
        "📐 UI Komponenten & Layouts",
        "📱 Responsives Design",
        "♿ Grundlagen Accessibility",
        "📚 Design Systeme / Styleguide",
      ],
    },
    {
      title: "Soft Skills",
      icon: "🤝",
      highlight:
        "In Projekten bringe ich Erfahrung aus verschiedenen Bereichen mit: Zusammenarbeit, Kommunikation und internationale Perspektive.",
      skills: [
        "🤝 Teamarbeit & Feedbackkultur",
        "📅 Selbstorganisation & Ownership",
        "🧾 Dinge verständlich erklären",
        "🇧🇷 Portugiesisch (C2)",
        "🇩🇪 Deutsch (B2 in Progress)",
        "🇬🇧 Englisch (B2)",
      ],
    },
  ];

  const learningNow = [
    "Fortgeschrittene React Patterns",
    "State Management (Context, Prop Drilling vermeiden)",
    "REST APIs im Frontend konsumieren",
    "Testing Grundlagen",
  ];

  return (
    <section
      id="skills"
      className="mx-auto max-w-5xl px-4 py-20 space-y-10"
    >
      {/* Header */}
      <header className="space-y-3 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-50">
          Skills & Tech-Stack
        </h2>
        <p className="text-sm text-slate-300 max-w-2xl mx-auto">
          In meiner Umschulung zum Web & WebApp Developer arbeite ich täglich mit
          modernen Frontend-Technologien. Hier ist ein Überblick über die Tools und
          Skills, mit denen ich aktuell arbeite.
        </p>
      </header>


      {/* Grid de Skills */}
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-sky-500/40"
          >
            {/* Glow de fundo */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute -inset-24 bg-gradient-to-br from-sky-500/10 via-transparent to-purple-500/10 blur-3xl" />
            </div>

            <div className="relative space-y-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800/70 text-xl">
                    {group.icon}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-50">
                    {group.title}
                  </h3>
                </div>
              </div>

              {/* Comentário sobre o que você já fez com esse grupo */}
              <p className="text-xs text-slate-400">{group.highlight}</p>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/70 px-3 py-1 text-xs text-slate-100 transition-all duration-200 hover:border-sky-400 hover:text-sky-100 hover:-translate-y-0.5"
                  >
                    <span className="mr-1 h-1.5 w-1.5 rounded-full bg-sky-400 group-hover:bg-sky-300" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Aktuell am Lernen */}
      <div className="mt-6 rounded-2xl border border-emerald-500/40 bg-gradient-to-r from-emerald-500/10 via-slate-900/80 to-sky-500/10 p-6 shadow-lg">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-emerald-300">
              <span className="text-xl">📚</span>
              Aktuell am Lernen
            </h3>
            <p className="text-xs text-emerald-100/80 max-w-xl">
              Ich entwickle mich kontinuierlich weiter – besonders im Bereich
              React, moderne Frontend-Architektur und Zusammenarbeit im Team.
            </p>
          </div>

          <ul className="mt-3 flex flex-wrap gap-2 md:mt-0 md:max-w-md">
            {learningNow.map((item) => (
              <li
                key={item}
                className="rounded-full bg-slate-900/70 px-3 py-1 text-xs text-emerald-100 border border-emerald-400/40 shadow-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
