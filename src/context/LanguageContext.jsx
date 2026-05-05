/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useMemo, useState } from "react";
import de from "../locales/de.json";
import pt from "../locales/pt.json";
import en from "../locales/en.json";

export const LanguageContext = createContext(null);

const STORAGE_KEY = "lang";
const locales = { de, pt, en };

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored && locales[stored] ? stored : "de";
  });

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const value = useMemo(() => {
    const content = locales[language] || locales.de;
    return { language, setLanguage, content };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
