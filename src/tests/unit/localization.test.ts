import { mergeTranslations } from "../../lib/localization";
import de from "../../locales/de.json";
import en from "../../locales/en.json";
import pt from "../../locales/pt.json";
import { projects } from "../../data/projects";
const keys = (value: unknown, path = ""): string[] => {
  if (typeof value !== "object" || value === null || Array.isArray(value))
    return [path];
  return Object.entries(value).flatMap(([key, item]) =>
    keys(item, `${path}.${key}`),
  );
};
describe("Editorial consistency", () => {
  it("fills individual missing keys without restoring removed list entries", () => {
    expect(
      mergeTranslations(
        {
          hero: { title: "DE", description: "fallback" },
          items: ["one", "two"],
        },
        { hero: { title: "EN" }, items: ["only"] },
      ),
    ).toEqual({
      hero: { title: "EN", description: "fallback" },
      items: ["only"],
    });
  });
  it.each([
    ["en", en],
    ["pt", pt],
  ] as const)("keeps %s keys equivalent to German", (_language, locale) => {
    expect(keys(locale).sort()).toEqual(keys(de).sort());
  });
  it.each([de, en, pt])(
    "has translated narrative for every preserved project",
    (locale) => {
      const entries: Record<string, unknown> = locale.projects.entries;
      for (const project of projects) expect(entries[project.id]).toBeDefined();
    },
  );
});
