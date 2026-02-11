// src/components/Navbar.jsx
// Navegação principal do site
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState("dark");

  // ler tema salvo / aplicar classe na <html>
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const initialTheme = stored === "light" ? "light" : "dark";
    setTheme(initialTheme);

    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);

    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", nextTheme);
  }

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-indigo-300 font-semibold"
      : "text-muted hover-text-primary";

  return (
    <header className="border-b border-slate-200/20 bg-slate-950/80 dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between gap-4">
        <span className="text-sm font-semibold tracking-wide text-indigo-500 dark:text-indigo-300">
          WILLIAN FONSECA
        </span>

        <nav className="flex items-center gap-4 text-xs">
          <NavLink to="/" className={linkClass} end>
            Startseite
          </NavLink>

          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>

          <NavLink to="/skills" className={linkClass}>
            Skills
          </NavLink>

          <NavLink to="/projekte" className={linkClass}>
            Projekte
          </NavLink>

          <NavLink to="/kontakt" className={linkClass}>
            Kontakt
          </NavLink>

          {/* TOGGLE LIGHT / DARK */}
          <button
            type="button"
            onClick={toggleTheme}
            className="ml-3 inline-flex items-center gap-1 rounded-full border border-slate-600/60 bg-slate-900/80 px-3 py-1 text-[11px] font-medium text-primary hover:border-sky-400 hover:text-sky-100 transition-all"
          >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
        </nav>
      </div>
    </header>
  );
}
