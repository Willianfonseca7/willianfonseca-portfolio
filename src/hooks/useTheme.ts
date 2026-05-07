import { useEffect, useState } from "react";

type Theme = "dark" | "light";
const STORAGE_KEY = "theme";

export default function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const nextTheme: Theme = stored === "light" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem(STORAGE_KEY, nextTheme);
  };

  return { theme, toggleTheme };
}
