import { useState } from "react";
import { NavLink } from "react-router-dom";
import useTheme from "../../hooks/useTheme.js";
import { useLanguage } from "../../hooks/useLanguage.jsx";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, content } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "nav-link active"
      : "nav-link";

  return (
    <header className="nav-header">
      <div className="nav-inner">
        <div className="flex items-center gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300/80">
            {content.meta.name}
          </span>
        </div>

        <nav className="nav-links">
          {content.nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={linkClass}
              end
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="chip-button lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            Menü
          </button>
          <button
            type="button"
            onClick={() => setLanguage(language === "de" ? "pt" : "de")}
            className="chip-button"
          >
            {language === "de" ? "DE" : "PT"}
          </button>
          <button type="button" onClick={toggleTheme} className="chip-button">
            {theme === "dark" ? "Dark" : "Light"}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-panel ${isOpen ? "open" : ""}`}
      >
        <nav className="mobile-links">
          {content.nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={linkClass}
              end
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
