/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useMemo, useState } from "react";
import de from "../locales/de.json";
import pt from "../locales/pt.json";
import en from "../locales/en.json";
import {
  mergeTranslations,
  readPreference,
  savePreference,
} from "../lib/localization";

export type Locale = typeof de;
export type Language = "de" | "pt" | "en";
interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: Locale;
}
export const LanguageContext = createContext<LanguageContextValue | null>(null);
const translations: Record<Language, Locale> = {
  de,
  pt: mergeTranslations(de, pt) as Locale,
  en: mergeTranslations(de, en) as Locale,
};
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = readPreference("lang");
    return stored === "pt" || stored === "en" ? stored : "de";
  });
  useEffect(() => {
    document.documentElement.lang = language;
    savePreference("lang", language);
  }, [language]);
  const value = useMemo(
    () => ({ language, setLanguage, content: translations[language] }),
    [language],
  );
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
