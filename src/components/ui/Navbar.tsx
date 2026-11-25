import { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import useTheme from "../../hooks/useTheme";
import { useLanguage } from "../../hooks/useLanguage";
export default function Navbar({ home = false }: { home?: boolean }) {
  const { theme, toggleTheme } = useTheme();
  const { content } = useLanguage();
  const labels = content.projects.ui;
  const [isOpen, setIsOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const navItems = [
    { to: "/", label: content.nav.home },
    { to: "/projekte", label: content.nav.projects },
    { to: "/about", label: content.nav.about },
    { to: "/skills", label: content.nav.skills },
    { to: "/kontakt", label: content.nav.contact },
  ];
  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (query.matches) setIsOpen(false);
    };
    query.addEventListener("change", closeOnDesktop);
    return () => query.removeEventListener("change", closeOnDesktop);
  }, []);
  const links = navItems.map((item) => (
    <NavLink
      key={item.to}
      to={item.to}
      end
      className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
      onClick={() => setIsOpen(false)}
    >
      {item.label}
    </NavLink>
  ));
  return (
    <header
      className={`nav-header ${home ? "nav-header--home" : ""}`}
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen) {
          setIsOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <a className="skip-link" href="#main-content">
        {labels.skip}
      </a>
      <div className="nav-inner">
        <Link to="/" className="brand" aria-label={content.meta.name}>
          <span className="brand-mark" aria-hidden="true">
            W<span>/</span>F
          </span>
          <span className="brand-name">Willian Fonseca{home && <small>Software development</small>}</span>
        </Link>
        <nav className="nav-links" aria-label={labels.navLabel}>
          {links}
        </nav>
        <div className="nav-controls">
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-button"
            aria-label={`${labels.themeToggle}: ${theme === "dark" ? content.nav.themeLight : content.nav.themeDark}`}
          >
            <span aria-hidden="true">{theme === "dark" ? "☀" : "◐"}</span>
          </button>
          <button
            ref={menuButton}
            type="button"
            className="chip-button menu-toggle"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {content.nav.menu}
          </button>
        </div>
      </div>
      <nav
        id="mobile-menu"
        hidden={!isOpen}
        className="mobile-links"
        aria-label={labels.mobileNav}
      >
        {links}
      </nav>
    </header>
  );
}
