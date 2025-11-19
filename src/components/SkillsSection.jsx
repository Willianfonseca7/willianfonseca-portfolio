// src/components/SkillsSection.jsx

// Ícones das tecnologias (react-icons já instalados)
import {
  SiJavascript,
  SiReact,
  SiVite,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiNodedotjs,
  SiPostman,
  SiFigma,
} from "react-icons/si";

// Componente principal da seção de Skills
export default function SkillsSection() {
  return (
    <section className="space-y-12">
      {/* Texto de introdução / Über mich */}
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-50">
          Über mich & Arbeitsweise
        </h2>
        <p className="max-w-3xl text-sm md:text-base text-slate-300">
          Ich bin ein angehender Frontend-Entwickler mit starkem Fokus auf
          Problemlösung, Funktionalität und klar strukturierter Software. Ich
          arbeite gerne an Projekten, die echten Nutzen bringen und lege großen
          Wert darauf, sauberen, wartbaren und gut durchdachten Code zu
          schreiben. Mein Verständnis für UI/UX hilft mir dabei,
          benutzerfreundliche und moderne Interfaces zu entwickeln – auch wenn
          mein Schwerpunkt klar in der Logik, Struktur und Funktionalität der
          Anwendung liegt.
        </p>
      </div>

      {/* Persönliche Stärken */}
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-4 text-xl font-semibold text-indigo-300">
            Persönliche Stärken
          </h3>
          <ul className="space-y-3 text-sm md:text-base text-slate-100">
            <li>⚡ Stark ausgeprägtes Problemlösungs-Denken</li>
            <li>⚡ Fokus auf Benutzerfreundlichkeit &amp; klare Prozesse</li>
            <li>
              ⚡ Hohe Lernbereitschaft &amp; schnelles Verständnis neuer Tools
            </li>
            <li>⚡ Sauberer, strukturierter und funktionaler Code</li>
            <li>⚡ Selbstständige, zuverlässige Arbeitsweise</li>
            <li>⚡ Gute Kommunikation &amp; Teamfähigkeit</li>
          </ul>
        </div>

        {/* Espaço em branco para respirar / equilibrar layout */}
        <div className="flex items-end">
          <p className="text-sm text-slate-400">
            Mein aktueller Schwerpunkt liegt auf dem Aufbau solider
            Frontend-Skills mit React, Vite und Tailwind CSS – kombiniert mit
            einem pragmatischen Verständnis von Tools wie Git, GitHub und
            Postman, um im Team effizient arbeiten zu können.
          </p>
        </div>
      </div>

      {/* ===== TOOLS & TECHNOLOGIEN (cards com animação) ===== */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-indigo-300">
          Tools &amp; Technologien
        </h3>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Card FRONTEND */}
          <SkillCard title="Frontend" icon={SiReact}>
            <div className="grid gap-4">
              <Tech
                icon={SiJavascript}
                label="JavaScript (ES6+)"
                colorClass="text-[#F7DF1E]"
                level={4}
              />
              <Tech
                icon={SiReact}
                label="React"
                colorClass="text-[#61DAFB]"
                level={4}
              />
              <Tech
                icon={SiVite}
                label="Vite"
                colorClass="text-[#646CFF]"
                level={4}
              />
              <Tech
                icon={SiTailwindcss}
                label="Tailwind CSS"
                colorClass="text-[#38BDF8]"
                level={3}
              />
              <Tech
                icon={SiHtml5}
                label="HTML5"
                colorClass="text-[#E34F26]"
                level={4}
              />
              <Tech
                icon={SiCss3}
                label="CSS3"
                colorClass="text-[#1572B6]"
                level={3}
              />
            </div>
          </SkillCard>

          {/* Card WORKFLOW & TOOLS */}
          <SkillCard title="Workflow & Tools" icon={SiGit}>
            <div className="grid gap-4">
              <Tech
                icon={SiGit}
                label="Git"
                colorClass="text-[#F05033]"
                level={5}
              />
              <Tech
                icon={SiGithub}
                label="GitHub"
                colorClass="text-[#F9FAFB]"
                level={5}
              />
              <Tech
                icon={SiNodedotjs}
                label="Node.js (Basics)"
                colorClass="text-[#339933]"
                level={2}
              />
              <Tech
                icon={SiPostman}
                label="Postman"
                colorClass="text-[#FF6C37]"
                level={3}
              />
              <Tech
                icon={SiFigma}
                label="Figma (Grundlagen)"
                colorClass="text-[#F24E1E]"
                level={3}
              />
            </div>
          </SkillCard>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   Card genérico com glow + animação no hover
   ========================================================= */
function SkillCard({ title, icon: Icon, children }) {
  return (
    <div className="group relative">
      {/* Glow de fundo no hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br
                   from-indigo-500/40 via-sky-500/20 to-emerald-400/30
                   opacity-0 blur-xl transition-opacity duration-500
                   group-hover:opacity-100"
      />

      {/* Card principal */}
      <div
        className="relative rounded-3xl border border-slate-800/80 bg-slate-900/70
                   px-6 py-5 sm:px-8 sm:py-6
                   shadow-lg shadow-black/40
                   transition-transform transition-shadow transition-colors duration-300
                   group-hover:-translate-y-1.5 group-hover:shadow-2xl group-hover:shadow-sky-500/20"
      >
        <div className="mb-4 flex items-center gap-3">
          {Icon && (
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-800/80 text-sky-400">
              <Icon className="text-xl" />
            </span>
          )}
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            {title}
          </h4>
        </div>

        {children}
      </div>
    </div>
  );
}

/* =========================================================
   Item de tecnologia com ícone + barra de nível
   level: 1–5  → barra proporcional
   ========================================================= */
function Tech({ icon: Icon, label, colorClass = "text-indigo-300", level = 4 }) {
  const levelPercent = (level / 5) * 100; // nível 1–5 → % da barra

  return (
    <div className="group/tech space-y-1">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className={`text-lg ${colorClass}`}>
            <Icon />
          </span>
          <span className="text-sm text-slate-100">{label}</span>
        </div>
        <span className="text-[10px] font-medium text-slate-500">
          {level}/5
        </span>
      </div>

      <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800/80">
        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400
                     transition-all duration-500 origin-left group-hover/tech:scale-x-[1.03]"
          style={{ width: `${levelPercent}%` }}
        />
      </div>
    </div>
  );
}
