import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function useScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const behavior = reduceMotion ? "instant" : "smooth";
    if (!hash) {
      window.scrollTo({ top: 0, behavior });
      return;
    }
    const target = document.getElementById(decodeURIComponent(hash.slice(1)));
    target?.scrollIntoView({ behavior, block: "start" });
  }, [pathname, hash]);
}
