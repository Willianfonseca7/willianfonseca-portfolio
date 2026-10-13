import { useEffect, useState } from "react";
import { readPreference, savePreference } from "../lib/localization";
type Theme = "dark" | "light";
export default function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setTheme(readPreference("theme") === "light" ? "light" : "dark");
    setReady(true);
  }, []);
  useEffect(() => {
    if (!ready) return;
    document.documentElement.dataset.theme = theme;
    savePreference("theme", theme);
  }, [theme, ready]);
  const toggleTheme = () =>
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  return { theme, toggleTheme };
}
