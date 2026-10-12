import { useEffect, useState } from "react";
import { readPreference, savePreference } from "../lib/localization";
type Theme = "dark" | "light";
export default function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    readPreference("theme") === "light" ? "light" : "dark",
  );
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    savePreference("theme", theme);
  }, [theme]);
  const toggleTheme = () =>
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  return { theme, toggleTheme };
}
