import { test, expect } from "@playwright/test";

const routes = [
  "./", "about", "skills", "projekte", "kontakt",
  "projekte/orla-plus", "projekte/waiturn", "projekte/growthbot-de", "projekte/invest-agent",
  "projekte/heilpratika", "projekte/lego-set-explore", "projekte/containerhub", "projekte/pokedex-web",
];

test("initial HTML contains the profile and all principal content without JavaScript", async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, baseURL });
  const page = await context.newPage();
  const response = await page.goto("./");
  expect(await response.text()).toContain("<noscript>Die Inhalte sind ohne JavaScript lesbar.");
  await expect(page.locator("h1")).toHaveText("Willian Santos Fonseca");
  await expect(page.getByText("Frontend- & Junior Fullstack-Entwickler | Next.js | Supabase | KI & Automatisierung", { exact: true })).toBeVisible();
  await expect(page.getByText(/Frontend- und Fullstack-Entwickler mit abgeschlossener IHK-Weiterbildung/)).toBeVisible();
  for (const name of ["ORLA+", "WAITURN", "GROWTHBOT-DE", "INVESTAGENT", "Frontend", "Backend & Daten", "Sicherheit", "KI & Qualität", "Sprachen"]) {
    await expect(page.getByRole("heading", { name, exact: true })).toBeVisible();
  }
  for (const text of ["Deutsch C2", "Junior Web Developer", "Präsenz in Bochum möglich"]) {
    await expect(page.getByText(text, { exact: true }).first()).toBeVisible();
  }
  await context.close();
});

for (const theme of ["dark", "light"]) {
  test(`all generated routes hydrate cleanly with saved ${theme} theme`, async ({ page, request }) => {
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    await page.addInitScript((value) => localStorage.setItem("theme", value), theme);
    for (const route of routes) {
      const response = await request.get(route);
      expect(response.ok()).toBe(true);
      expect(await response.text()).toContain('data-prerender-path=');
      await page.goto(route);
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator("html")).toHaveAttribute("lang", "de");
      await expect(page.locator("html")).toHaveAttribute("data-theme", theme);
      await expect(page.getByRole("button", { name: `Farbschema wechseln: ${theme === "dark" ? "Hell" : "Dunkel"}` })).toBeVisible();
      expect(await page.locator("img").evaluateAll((images) => images.every((image) => image.complete && image.naturalWidth > 0))).toBe(true);
    }
    expect(errors).toEqual([]);
  });
}

test("restored contact and renamed public project links remain correct", async ({ page }) => {
  await page.goto("kontakt");
  const linkedIn = page.getByRole("link", { name: "LinkedIn", exact: true });
  await expect(linkedIn).toHaveAttribute("href", "https://www.linkedin.com/in/willian-fonseca-b146b7240/");
  await expect(linkedIn).toHaveAttribute("target", "_blank");
  await expect(linkedIn).toHaveAttribute("rel", "noopener noreferrer");
  await expect(page.locator('a[href^="tel:"]')).toHaveCount(0);
  await page.goto("projekte");
  await expect(page.locator('[data-project="pokedex-web"]').getByRole("link", { name: "Code", exact: true })).toHaveAttribute("href", "https://github.com/Willianfonseca7/Pokedex-web");
  const waiturn = page.locator('[data-project="waiturn"]');
  await expect(waiturn.getByText("Unit- und E2E-Tests mit Vitest und Playwright implementiert (über 2.100 Unit-Tests).", { exact: true })).toBeVisible();
  await expect(waiturn.getByRole("link", { name: "Code", exact: true })).toHaveCount(0);
});
