// src/components/Navbar.jsx
// Navegação principal do site (comentário em português)
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-indigo-300 font-semibold"
      : "text-slate-300 hover:text-white";

  return (
    <header className="border-b border-slate-800 bg-slate-950/80">
      <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <span className="text-sm font-semibold tracking-wide text-indigo-300">
          WILLIAN FONSECA
        </span>

        <nav className="flex gap-4 text-xs">
          <NavLink to="/" className={linkClass} end>
            Startseite
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
        </nav>
      </div>
    </header>
  );
}
