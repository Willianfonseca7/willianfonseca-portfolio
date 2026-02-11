import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false,
    message: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validations
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(formData.email);

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  const isPasswordValid = passwordRegex.test(formData.password);

  const isMessageValid = formData.message.trim().length >= 20;

  const isFormValid = isEmailValid && isPasswordValid && isMessageValid;

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setIsSubmitted(false);
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!isFormValid) {
      setTouched({ email: true, password: true, message: true });
      return;
    }

    setIsSubmitted(true);

    setFormData({
      email: "",
      password: "",
      message: "",
    });

    setTouched({ email: false, password: false, message: false });
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-20 space-y-10">

      {/* HEADER CORRETO — ÚNICO QUE FICA */}
      <header className="space-y-4 mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary">
          Kontakt
        </h2>

        <p className="text-sm text-muted max-w-2xl mx-auto leading-relaxed">
          Wenn du Fragen hast oder mit mir zusammenarbeiten möchtest, kannst du mich 
          jederzeit über das Formular oder über meine Links erreichen. Ich freue mich 
          über Feedback, Projektideen oder einfach eine kurze Nachricht.
        </p>
      </header>

      {/* GRID COM LINKS + FORM */}
      <div className="grid gap-8 md:grid-cols-2">
        
        {/* CARD COM BOTÕES */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-sm shadow-xl space-y-6">

          <h3 className="text-xl font-semibold text-primary mb-3">
            Kontakt Links
          </h3>

          {/* Email */}
          <a
            href="mailto:willianfonseca7@gmail.com"
            className="block w-full text-center rounded-xl bg-sky-500/20 border border-sky-500/40 text-sky-300 py-2 font-medium hover:bg-sky-500/40 hover-text-primary transition-all shadow-md hover:shadow-sky-500/40"
          >
            📧 E-Mail kontaktieren
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Willianfonseca7"
            target="_blank"
            rel="noreferrer"
            className="block w-full text-center rounded-xl bg-purple-500/20 border border-purple-500/40 text-purple-300 py-2 font-medium hover:bg-purple-500/40 hover-text-primary transition-all shadow-md hover:shadow-purple-500/40"
          >
            🐱‍💻 GitHub Profil
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/willian-fonseca-b146b7240/"
            target="_blank"
            rel="noreferrer"
            className="block w-full text-center rounded-xl bg-blue-500/20 border border-blue-500/40 text-blue-300 py-2 font-medium hover:bg-blue-500/40 hover-text-primary transition-all shadow-md hover:shadow-blue-500/40"
          >
            🔗 LinkedIn Profil
          </a>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className={`rounded-2xl border p-6 backdrop-blur-sm shadow-xl space-y-5 bg-slate-900/70 transition-all duration-300 ${
            isFormValid
              ? "border-emerald-500 shadow-emerald-500/40"
              : "border-slate-800"
          } ${isSubmitted ? "animate-pulse" : ""}`}
        >
          <h3 className="text-xl font-semibold text-primary">
            Schreib mir eine Nachricht
          </h3>

          {/* EMAIL */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-primary">
              E-Mail
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="du@example.com"
              className={`w-full rounded-xl bg-slate-900/80 border px-3 py-2 text-sm text-primary transition-all 
                ${
                  touched.email && !isEmailValid
                    ? "border-red-500 focus:ring-2 focus:ring-red-500"
                    : "border-slate-700 focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                }`}
            />
            {touched.email && !isEmailValid && (
              <p className="text-xs text-red-400">
                Bitte gib eine gültige E-Mail-Adresse ein.
              </p>
            )}
          </div>

          {/* PASSWORD */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-primary">
              Passwort
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Mindestens 6 Zeichen + Zahlen"
              className={`w-full rounded-xl bg-slate-900/80 border px-3 py-2 text-sm text-primary transition-all 
                ${
                  touched.password && !isPasswordValid
                    ? "border-red-500 focus:ring-2 focus:ring-red-500"
                    : "border-slate-700 focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                }`}
            />
            {touched.password && !isPasswordValid && (
              <p className="text-xs text-red-400">
                Mindestens 6 Zeichen, Buchstaben und Zahlen.
              </p>
            )}
          </div>

          {/* MESSAGE */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-primary">
              Nachricht
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Bitte schreibe mindestens 20 Zeichen..."
              className={`w-full rounded-xl bg-slate-900/80 border px-3 py-2 text-sm text-primary resize-none transition-all 
                ${
                  touched.message && !isMessageValid
                    ? "border-red-500 focus:ring-2 focus:ring-red-500"
                    : "border-slate-700 focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                }`}
            />

            {touched.message && !isMessageValid && (
              <p className="text-xs text-red-400">
                Die Nachricht sollte mindestens 20 Zeichen lang sein.
              </p>
            )}
          </div>

          {/* BOTÃO */}
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full rounded-xl px-4 py-2 font-semibold text-primary shadow-md transition-all 
              ${
                isFormValid
                  ? "bg-emerald-400 hover:bg-emerald-300 hover:shadow-emerald-500/40"
                  : "bg-slate-700 text-muted"
              }`}
          >
            Nachricht senden
          </button>

          {/* SUCESSO */}
          {isSubmitted && (
            <p className="text-sm text-emerald-400 text-center">
              Danke für deine Nachricht! 🙌
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
