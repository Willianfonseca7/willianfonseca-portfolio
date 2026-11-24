export function assetUrl(path: string): string {
  return /^https?:\/\//.test(path) || path.startsWith(import.meta.env.BASE_URL)
    ? path
    : `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}
