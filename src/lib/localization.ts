// Merge missing keys individually. Arrays are replaced to avoid resurrecting removed content.
export function mergeTranslations(
  fallback: unknown,
  translation: unknown,
): unknown {
  if (translation === undefined || translation === null) return fallback;
  if (
    typeof fallback !== "object" ||
    fallback === null ||
    Array.isArray(fallback)
  )
    return translation;
  if (typeof translation !== "object" || Array.isArray(translation))
    return fallback;
  const base = fallback as Record<string, unknown>;
  const translated = translation as Record<string, unknown>;
  return Object.fromEntries(
    Object.keys(base).map((key) => [
      key,
      mergeTranslations(base[key], translated[key]),
    ]),
  );
}
export function readPreference(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}
export function savePreference(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* Preferences are optional when storage is unavailable. */
  }
}
