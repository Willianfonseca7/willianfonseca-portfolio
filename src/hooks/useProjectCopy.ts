import { useLanguage } from "./useLanguage";
import type { Locale } from "../context/LanguageContext";
export type ProjectCopy = Omit<Locale["projects"]["entries"]["waiturn"], "catalogSummary" | "catalogContribution" | "catalogEngineering"> & {
  imageAlt?: string;
  catalogSummary?: string;
  catalogContribution?: string;
  catalogEngineering?: string;
  websiteLabel?: string;
  statusLabel?: string;
};
export function useProjectCopy(id: string): ProjectCopy {
  const { content } = useLanguage();
  const entries: Record<string, ProjectCopy> = content.projects.entries;
  return entries[id] ?? content.projects.entries.waiturn;
}
