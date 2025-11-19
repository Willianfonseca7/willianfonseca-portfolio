// src/components/ContactSection.jsx

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl px-4 py-20 space-y-10"
    >
      {/* Header */}
      <header className="space-y-3">
        <h2 className="text-3xl font-bold tracking-tight text-slate-50">
          Kontakt
        </h2>
        <p className="text-sm text-slate-300 max-w-xl">
          Wenn du Fragen hast oder mit mir zusammenarbeiten möchtest, kannst du
          mich jederzeit über E-Mail oder GitHub erreichen.
        </p>
      </header>

      {/* Card de contato */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-sm shadow-xl space-y-6">
        <p className="text-slate-300">
          <span className="font-semibold text-slate-50">E-Mail: </span>
          <a
            href="mailto:willianfonseca7@gmail.com"
            className="text-sky-400 hover:text-sky-300"
          >
            willianfonseca7@gmail.com
          </a>
        </p>

        <p className="text-slate-300">
          <span className="font-semibold text-slate-50">GitHub: </span>
          <a
            href="https://github.com/Willianfonseca7"
            target="_blank"
            rel="noreferrer"
            className="text-sky-400 hover:text-sky-300"
          >
            github.com/Willianfonseca7
          </a>
        </p>

        <p className="text-slate-300">
          <span className="font-semibold text-slate-50">LinkedIn: </span>
          <a
            href="https://www.linkedin.com/in/willian-fonseca/"
            target="_blank"
            rel="noreferrer"
            className="text-sky-400 hover:text-sky-300"
          >
            linkedin.com/in/willian-fonseca
          </a>
        </p>
      </div>
    </section>
  );
}
