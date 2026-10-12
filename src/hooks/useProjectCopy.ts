import { useLanguage } from "./useLanguage";
import type { Locale } from "../context/LanguageContext";
export type ProjectCopy = Locale["projects"]["entries"]["waiturn"];
export function useProjectCopy(id: string): ProjectCopy {
  const { content } = useLanguage();
  const entries: Record<string, ProjectCopy> = content.projects.entries;
  return entries[id] ?? content.projects.entries.waiturn;
}
