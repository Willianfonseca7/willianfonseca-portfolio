import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("Home -> projects preserves archived ContainerHub", async ({ page }) => {
  await page.goto("./");
  await page
    .getByRole("navigation", { name: "Hauptnavigation", exact: true })
    .getByRole("link", { name: "Projekte", exact: true })
    .click();
  await expect(
    page.getByRole("heading", { name: "ContainerHub", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Weitere Projekte", exact: true }),
  ).toBeVisible();
});

test("contact prepares an email and reports clipboard failure honestly", async ({
  page,
}) => {
  await page.addInitScript(() =>
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText: () => Promise.reject(new Error("denied")) },
    }),
  );
  await page.goto("kontakt");
  await page.getByLabel("Name", { exact: true }).fill("Recruiter");
  await page
    .getByLabel("E-Mail", { exact: true })
    .fill("recruiter@example.com");
  await page
    .getByLabel("Nachricht", { exact: true })
    .fill("Das ist eine gültige Nachricht mit mehr als 20 Zeichen.");
  const submit = page.getByRole("button", { name: "Nachricht vorbereiten" });
  await expect(submit).toBeEnabled();
  await submit.click();
  await expect(page.getByRole("status")).toContainText(
    "Das Kopieren war nicht möglich",
  );
  await expect(
    page.getByRole("link", { name: "E-Mail-Programm öffnen" }),
  ).toHaveAttribute("href", /mailto:willianfonseca7@gmail.com\?subject=/);
});

test("Waiturn uses the supplied product visual without exposing private code", async ({
  page,
}) => {
  await page.goto("./");
  await expect(page.locator("h1")).toContainText(
    "Junior Frontend- / Fullstack-Entwickler",
  );
  const featured = page.locator('[data-project="waiturn"]');
  await expect(featured).toBeVisible();
  await expect(
    featured.getByText("Produktvisualisierung · vom Autor bereitgestellt"),
  ).toBeVisible();
  await expect(featured.locator("img")).toHaveAttribute(
    "src",
    /waiturn-presentation.jpg/,
  );
  await expect(
    featured.getByRole("link", { name: "Code", exact: true }),
  ).toHaveCount(0);
  await featured.getByRole("link", { name: /Case ansehen/ }).click();
  await expect(page.locator("h1")).toHaveText("Waiturn");
  await expect(
    page.getByRole("heading", { name: "Architektur & Stack" }),
  ).toBeVisible();
});

test("ORLA distinguishes integrated PRs from unfinished migration", async ({
  page,
}) => {
  await page.goto("projekte/orla-plus");
  await expect(page.getByText(/API-Integration steht noch aus/)).toBeVisible();
  for (const number of [5, 6, 8])
    await expect(
      page.getByRole("link", { name: `PR #${number}`, exact: true }),
    ).toHaveAttribute(
      "href",
      `https://github.com/polifilho/orlamais-website/pull/${number}`,
    );
});

test("gallery retains thumbnails and keyboard navigation with focus returned", async ({
  page,
}) => {
  await page.goto("projekte");
  const card = page.locator('[data-project="invest-agent"]');
  const trigger = card.getByRole("button", {
    name: "Bild öffnen: InvestAgent",
    exact: true,
  });
  await trigger.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog.locator(".gallery-image img")).toHaveAttribute(
    "src",
    /investagent-overview/,
  );
  for (let index = 0; index < 8; index++) {
    await page.keyboard.press("Tab");
    expect(
      await dialog.evaluate((node) => node.contains(document.activeElement)),
    ).toBe(true);
  }
  await page.keyboard.press("ArrowRight");
  await expect(dialog.locator(".gallery-image img")).toHaveAttribute(
    "src",
    /investagent-charts/,
  );
  await page.keyboard.press("ArrowLeft");
  await expect(dialog.locator(".gallery-image img")).toHaveAttribute(
    "src",
    /investagent-overview/,
  );
  await dialog.getByRole("button", { name: "Charts", exact: true }).click();
  await expect(dialog.locator(".gallery-image img")).toHaveAttribute(
    "src",
    /investagent-charts/,
  );
  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
  await expect(trigger).toBeFocused();
  await page
    .locator('[data-project="containerhub"]')
    .getByRole("button", { name: /Bild öffnen/ })
    .click();
  await expect(page.getByRole("dialog")).toBeVisible();
});

test("certificates keep document tabs, modal close and focus restoration", async ({
  page,
}) => {
  await page.goto("skills");
  const trigger = page.getByRole("button", {
    name: "Dokument öffnen: IT-Fachkraft für Web Development IHK",
    exact: true,
  });
  await trigger.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog.locator("img")).toHaveAttribute(
    "src",
    /certificado-todos-cursos/,
  );
  await dialog.getByRole("button", { name: "Inhalte", exact: true }).click();
  await expect(dialog.locator("img")).toHaveAttribute(
    "src",
    /certificado-IT-fachkraft/,
  );
  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
  await expect(trigger).toBeFocused();
  await expect(page.getByText("Lebenslauf 2026")).toHaveCount(0);
});

test("language, theme and case refresh stay consistent", async ({ page }) => {
  await page.goto("projekte/growthbot-de");
  for (const [label, lang] of [
    ["Português", "pt"],
    ["English", "en"],
    ["Deutsch", "de"],
  ]) {
    await page.getByRole("button", { name: label, exact: true }).click();
    await expect(page.locator("html")).toHaveAttribute("lang", lang);
    await expect(page.locator("h1")).toHaveText("GrowthBot-DE");
  }
  await page.getByRole("button", { name: "Farbschema wechseln: Hell" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.reload();
  await expect(page.locator("h1")).toHaveText("GrowthBot-DE");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
});

for (const width of [320, 375, 768, 1024, 1440])
  test(`responsive layout at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("./");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    if (width < 1024) {
      await expect(page.locator("#mobile-menu")).toBeHidden();
      await page.getByRole("button", { name: "Menü", exact: true }).click();
      await expect(page.locator("#mobile-menu")).toBeVisible();
      await page.keyboard.press("Escape");
      await expect(page.locator("#mobile-menu")).toBeHidden();
    }
    await page.goto("projekte");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  });

for (const theme of ["dark", "light"])
  test(`WCAG AA on home and case in ${theme} mode`, async ({ page }) => {
    await page.addInitScript(
      (value) => localStorage.setItem("theme", value),
      theme,
    );
    for (const path of ["./", "projekte/waiturn", "kontakt", "skills"]) {
      await page.goto(path);
      await page.evaluate(() => document.fonts.ready);
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();
      expect(
        results.violations,
        JSON.stringify(
          results.violations.map((v) => ({
            id: v.id,
            nodes: v.nodes.map((n) => n.target),
          })),
        ),
      ).toEqual([]);
    }
  });

test("reduced motion and Pages redirect preserve nested route, query and hash", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  const redirected = "projekte/orla-plus?from=review&lang=de";
  await page.goto(`./?p=${encodeURIComponent("/" + redirected)}#evidence`);
  await expect(page.locator("h1")).toHaveText("ORLA+");
  expect(new URL(page.url()).searchParams.get("from")).toBe("review");
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  ).toBe("auto");
});
