/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useMemo, useState } from "react";
import de from "../locales/de.json";
import pt from "../locales/pt.json";
import en from "../locales/en.json";

export type Locale = typeof en;
export type Language = "de" | "pt" | "en";

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: Locale;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "lang";
const locales: Record<Language, Locale> = {
  de: de as Locale,
  pt: pt as Locale,
  en,
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored && stored in locales ? (stored as Language) : "de";
  });

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const value = useMemo<LanguageContextValue>(() => {
    const content = locales[language] ?? locales.de;
    return { language, setLanguage, content };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
