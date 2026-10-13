import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "./useLanguage";
export default function useSEO() {
  const { pathname } = useLocation();
  const { content } = useLanguage();
  useEffect(() => {
    const title = `${content.meta.role} | Willian Santos Fonseca`;
    const description = content.meta.description;
    document.title = title;
    const setMeta = (selector: string, value: string) =>
      document.querySelector(selector)?.setAttribute("content", value);
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', `Willian Santos Fonseca — ${content.meta.role}`);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:locale"]', "de_DE");
    const url = `https://willianfonseca7.github.io/willianfonseca-portfolio${pathname === "/" ? "/" : pathname}`;
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", url);
    setMeta('meta[property="og:url"]', url);
  }, [content, pathname]);
}
