import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "./useLanguage";
import type { ProjectCopy } from "./useProjectCopy";
export default function useSEO() {
  const { pathname } = useLocation();
  const { content, language } = useLanguage();
  useEffect(() => {
    const entries: Record<string, ProjectCopy> = content.projects.entries;
    const project = pathname.startsWith("/projekte/")
      ? entries[pathname.split("/")[2]]
      : null;
    const section =
      pathname === "/about"
        ? content.about.title
        : pathname === "/skills"
          ? content.skills.title
          : pathname === "/kontakt"
            ? content.contact.title
            : pathname === "/projekte"
              ? content.projects.title
              : "";
    const title = `${project?.title ?? (section || content.meta.role)} | Willian Santos Fonseca`;
    const description = project?.summary ?? content.hero.description;
    document.title = title;
    const setMeta = (selector: string, value: string) =>
      document.querySelector(selector)?.setAttribute("content", value);
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta(
      'meta[property="og:locale"]',
      language === "de" ? "de_DE" : language === "pt" ? "pt_BR" : "en_US",
    );
    const url = `https://willianfonseca7.github.io/willianfonseca-portfolio${pathname === "/" ? "/" : pathname}`;
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", url);
    setMeta('meta[property="og:url"]', url);
  }, [content, pathname, language]);
}
