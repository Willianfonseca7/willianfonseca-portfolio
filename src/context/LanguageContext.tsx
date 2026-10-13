/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useMemo } from "react";
import de from "../locales/de.json";
import { savePreference } from "../lib/localization";

export type Locale = typeof de;
export type Language = "de" | "pt" | "en";
interface LanguageContextValue {
  language: Language;
  content: Locale;
}
export const LanguageContext = createContext<LanguageContextValue | null>(null);
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language: Language = "de";
  useEffect(() => {
    document.documentElement.lang = language;
    savePreference("lang", language);
  }, [language]);
  const value = useMemo(
    () => ({ language, content: de }),
    [language],
  );
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
