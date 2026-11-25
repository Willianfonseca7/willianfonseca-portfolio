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
  ).toHaveAttribute("href", /mailto:wfonseca7@hotmail.com\?subject=/);
});

test("Waiturn uses the supplied product visual without exposing private code", async ({
  page,
}) => {
  await page.goto("./");
  await expect(page.locator("h1")).toContainText(
    "Von der Idee",
  );
  const featured = page.locator('[data-project="waiturn"]');
  await expect(featured).toBeVisible();
  await expect(featured.locator(".catalog-facts").getByText(/Socket.IO/)).toBeVisible();
  await expect(
    page.locator(".hero-showcase").getByText("Produktvisualisierung · vom Autor bereitgestellt"),
  ).toBeVisible();
  await expect(featured.locator("img")).toHaveAttribute(
    "src",
    /waiturn-presentation.jpg/,
  );
  await expect(
    featured.getByRole("link", { name: "Code", exact: true }),
  ).toHaveCount(0);
  await featured.getByRole("link", { name: /Case ansehen/ }).click();
  await expect(page.locator("h1")).toHaveText("WAITURN");
  await expect(page.getByText("Socket.IO", { exact: true })).toBeVisible();
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
    name: "Bild öffnen: INVESTAGENT",
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
  await dialog.getByRole("button", { name: "Diagramme", exact: true }).click();
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

test("German content overrides old language preference and preserves theme", async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem("lang", "en"));
  await page.goto("projekte/growthbot-de");
  await expect(page.locator("html")).toHaveAttribute("lang", "de");
  await expect(page.getByRole("button", { name: "English", exact: true })).toHaveCount(0);
  await expect(page.locator("h1")).toHaveText("GROWTHBOT-DE");
  await page.getByRole("button", { name: "Farbschema wechseln: Hell" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.reload();
  await expect(page.locator("h1")).toHaveText("GROWTHBOT-DE");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
});

for (const width of [375, 768, 1280])
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
    for (const path of ["./", "projekte", "projekte/waiturn", "projekte/argosapp", "kontakt", "skills"]) {
      await page.goto(path);
      await page.evaluate(() => document.fonts.ready);
      await page.evaluate(() => Promise.all(document.getAnimations()
        .filter(animation => Number.isFinite(animation.effect?.getComputedTiming().endTime))
        .map(animation => animation.finished.catch(() => undefined))));
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

for (const theme of ["dark", "light"]) {
  for (const width of [375, 768, 1280]) {
    test(`catalog cards share dimensions and bottom actions at ${width}px in ${theme}`, async ({ page }) => {
      await page.addInitScript((value) => localStorage.setItem("theme", value), theme);
      await page.setViewportSize({ width, height: 1000 });
      await page.goto("projekte");
      await page.evaluate(() => document.fonts.ready);
      const cards = page.locator(".project-list--catalog > article");
      await expect(cards).toHaveCount(5);
      const measurements = await cards.evaluateAll((nodes) => nodes.map((card) => {
        const box = card.getBoundingClientRect();
        const media = card.querySelector(".project-media").getBoundingClientRect();
        const trigger = card.querySelector(".project-image-trigger").getBoundingClientRect();
        const lastMediaChild = card.querySelector(".project-media").lastElementChild.getBoundingClientRect();
        const actions = card.querySelector(".project-actions").getBoundingClientRect();
        const heading = card.querySelector("h2").getBoundingClientRect();
        return {
          id: card.dataset.project,
          height: box.height,
          imageWidth: trigger.width,
          imageHeight: trigger.height,
          mediaHeight: media.height,
          unusedMediaSpace: media.bottom - lastMediaChild.bottom,
          actionBottom: box.bottom - actions.bottom,
          primaryTop: card.querySelector(".project-actions a").getBoundingClientRect().top - box.top,
          headingTop: heading.top - box.top,
        };
      }));
      const spread = (key) => Math.max(...measurements.map((m) => m[key])) - Math.min(...measurements.map((m) => m[key]));
      expect(spread("height"), JSON.stringify(measurements)).toBeLessThanOrEqual(1);
      expect(spread("imageWidth"), JSON.stringify(measurements)).toBeLessThanOrEqual(1);
      expect(spread("actionBottom"), JSON.stringify(measurements)).toBeLessThanOrEqual(1);
      expect(spread("primaryTop"), JSON.stringify(measurements)).toBeLessThanOrEqual(1);
      expect(spread("mediaHeight"), JSON.stringify(measurements)).toBeLessThanOrEqual(1);
      expect(spread("headingTop"), JSON.stringify(measurements)).toBeLessThanOrEqual(1);
      expect(spread("imageHeight"), JSON.stringify(measurements)).toBeLessThanOrEqual(1);
      for (const measurement of measurements) expect(measurement.imageWidth / measurement.imageHeight).toBeCloseTo(1.6, 2);
      for (const measurement of measurements) expect(Math.abs(measurement.unusedMediaSpace), JSON.stringify(measurement)).toBeLessThanOrEqual(1);
      for (const card of await cards.all()) {
        const image = card.locator(".project-image-trigger img");
        await image.scrollIntoViewIfNeeded();
        await expect(image).toHaveCSS("object-fit", "contain");
        await expect.poll(() => image.evaluate((node) => node.complete && node.naturalWidth > 0)).toBe(true);
      }
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      await expect(cards.locator(".featured-facts, .project-media-caption, .project-thumbnails, .project-evidence, .private-note")).toHaveCount(0);
      for (const card of await cards.all()) {
        expect(await card.locator(".tag-chip").count()).toBeLessThanOrEqual(5);
        await expect(card.locator(".project-summary")).toBeVisible();
        await expect(card.getByText("Mein Beitrag", { exact: true })).toBeVisible();
        await expect(card.getByText("Umsetzung & Architektur", { exact: true })).toBeVisible();
        await expect(card.locator(".catalog-facts dd")).toHaveCount(2);
        for (const description of await card.locator(".catalog-facts dd").all()) {
          expect((await description.innerText()).length).toBeGreaterThan(80);
        }
      }
      await expect(cards.filter({ has: page.getByRole("heading", { name: "ORLA+", exact: true }) }).getByText(/01\/2026–10\/2026/)).toBeVisible();
      if (theme === "dark") {
        for (const id of ["orla-plus", "waiturn"]) {
          await page.locator(`[data-project="${id}"]`).screenshot({ path: `docs/visual/catalog-${id}-${width}.png` });
        }
      }
    });
  }
}

for (const width of [1920, 1440, 1280, 768, 390, 320]) {
  for (const theme of ["dark", "light"]) {
    test(`product showcase stays readable and contained at ${width}px in ${theme}`, async ({ page }) => {
      const errors = [];
      page.on("pageerror", error => errors.push(error.message));
      page.on("console", message => { if (message.type() === "error") errors.push(message.text()); });
      await page.setViewportSize({ width, height: 1000 });
      await page.emulateMedia({ reducedMotion: "reduce" });
      await page.addInitScript(value => localStorage.setItem("theme", value), theme);
      await page.goto("./");
      await page.evaluate(() => document.fonts.ready);
      const hero = page.locator(".product-hero");
      await expect(hero.getByRole("heading", { level: 1 })).toHaveText("Von der Ideezum digitalen Produkt.");
      for (const [id, name] of [["waiturn", "WAITURN"], ["argosapp", "Argosapp"], ["orla-plus", "ORLA+"]]) {
        const link = hero.getByRole("link", { name: `${name} – Zum Case`, exact: true });
        await expect(link).toHaveAttribute("href", `/willianfonseca-portfolio/projekte/${id}`);
        await expect(link.locator("img")).toHaveCSS("object-fit", "contain");
        await expect.poll(() => link.locator("img").evaluate(image => image.complete && image.naturalWidth > 0)).toBe(true);
        await link.locator(".showcase-label").scrollIntoViewIfNeeded();
        expect(await link.locator(".showcase-label").evaluate(label => {
          const rect = label.getBoundingClientRect();
          const element = document.elementFromPoint(rect.x + rect.width / 2, rect.y + rect.height / 2);
          return label.contains(element);
        })).toBe(true);
        const bounds = await link.boundingBox();
        expect(bounds.x).toBeGreaterThanOrEqual(0);
        expect(bounds.x + bounds.width).toBeLessThanOrEqual(width + 1);
        const sectionBounds = await hero.boundingBox();
        expect(bounds.y + bounds.height).toBeLessThanOrEqual(sectionBounds.y + sectionBounds.height + 1);
      }
      await expect(hero.getByText("Produktvisualisierung · vom Autor bereitgestellt", { exact: true })).toBeVisible();
      await expect(hero.getByRole("link", { name: "Projekte entdecken", exact: true })).toHaveAttribute("href", "/willianfonseca-portfolio/projekte");
      await expect(hero.getByRole("link", { name: "Kontakt", exact: true })).toHaveAttribute("href", "/willianfonseca-portfolio/kontakt");
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      expect(errors).toEqual([]);
      await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
      await page.screenshot({ path: `docs/visual/home-premium-${theme}-${width}.png` });
      if (theme === "dark" && [1440, 390].includes(width)) await hero.screenshot({ path: `docs/visual/home-premium-hero-${width}.png` });
    });
  }
}

test("hero CTAs and keyboard-accessible windows lead to their cases", async ({ page }) => {
  await page.goto("./");
  await page.locator(".product-hero").getByRole("link", { name: "Projekte entdecken", exact: true }).click();
  await expect(page).toHaveURL(/\/projekte$/);
  await page.goto("./");
  await page.locator(".product-hero").getByRole("link", { name: "Kontakt", exact: true }).click();
  await expect(page).toHaveURL(/\/kontakt$/);
  for (const name of ["WAITURN", "Argosapp", "ORLA+"]) {
    await page.goto("./");
    const link = page.locator(".hero-showcase").getByRole("link", { name: `${name} – Zum Case`, exact: true });
    await link.focus();
    await expect(link).toBeFocused();
    await expect(link).toHaveCSS("outline-style", "solid");
    await page.keyboard.press("Enter");
    await expect(page.locator("h1")).toHaveText(name);
  }
});

test("showcase parallax resets and respects reduced motion", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("./");
  const stage = page.locator(".hero-showcase");
  const bounds = await stage.boundingBox();
  await page.mouse.move(bounds.x + bounds.width * 0.8, bounds.y + bounds.height * 0.2);
  await expect.poll(() => stage.evaluate(node => Number(node.style.getPropertyValue("--pointer-x")))).toBeGreaterThan(0);
  await page.mouse.move(5, 5);
  await expect.poll(() => stage.evaluate(node => node.style.getPropertyValue("--pointer-x"))).toBe("0");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.mouse.move(bounds.x + bounds.width * 0.8, bounds.y + bounds.height * 0.2);
  await expect(stage.locator(".showcase-scene")).toHaveCSS("transform", "none");
  for (const window of await stage.locator(".showcase-window").all()) await expect(window).toHaveCSS("animation-name", "none");
  expect(await stage.evaluate(node => node.style.getPropertyValue("--pointer-x"))).toBe("0");
});

for (const [width, height] of [[1280, 720], [1280, 800], [1440, 700], [1440, 800], [1440, 900], [1512, 982], [1728, 900], [1920, 800]]) {
  test(`showcase fits ${width}x${height} at rest and keeps other projects visible on hover`, async ({ page }) => {
    await page.setViewportSize({ width, height });
    await page.emulateMedia({ reducedMotion: "no-preference" });
    await page.goto("./");
    await page.evaluate(() => document.fonts.ready);
    await page.locator(".showcase-image img").evaluateAll(images => Promise.all(images.map(image => image.decode())));
    await page.evaluate(() => Promise.all(document.getAnimations()
      .filter(animation => Number.isFinite(animation.effect?.getComputedTiming().endTime))
      .map(animation => animation.finished.catch(() => undefined))));
    await page.mouse.move(8, 8);
    const projects = page.locator(".showcase-project");
    const measure = () => projects.evaluateAll(links => links.map(link => {
      const headerBottom = document.querySelector(".nav-header").getBoundingClientRect().bottom;
      const label = link.querySelector(".showcase-label");
      const rect = label.getBoundingClientRect();
      const windowRect = link.querySelector(".showcase-window").getBoundingClientRect();
      const labelHit = document.elementFromPoint(rect.x + rect.width / 2, rect.y + rect.height / 2);
      const imageRect = link.querySelector(".showcase-image").getBoundingClientRect();
      let visibleSamples = 0;
      for (let row = 1; row <= 8; row++) for (let col = 1; col <= 8; col++) {
        const hit = document.elementFromPoint(imageRect.x + imageRect.width * col / 9, imageRect.y + imageRect.height * row / 9);
        if (hit && link.contains(hit)) visibleSamples++;
      }
      return { labelVisible: label.contains(labelHit), labelTop: rect.top, headerBottom,
        bottom: Math.max(rect.bottom, windowRect.bottom), left: Math.min(rect.left, windowRect.left),
        right: Math.max(rect.right, windowRect.right), visibleSamples };
    }));
    const assertFraming = measurements => {
      expect(measurements).toHaveLength(3);
      for (const item of measurements) {
        expect(item.labelVisible).toBe(true);
        expect(item.labelTop).toBeGreaterThan(item.headerBottom + 4);
        expect(item.bottom).toBeLessThan(height - 4);
        expect(item.left).toBeGreaterThan(0);
        expect(item.right).toBeLessThan(width);
        expect(item.visibleSamples).toBeGreaterThan(12);
      }
    };
    await expect.poll(async () => (await measure()).every(item => item.labelVisible && item.bottom < height - 4)).toBe(true);
    const initial = await measure();
    assertFraming(initial);
    await page.screenshot({ path: `docs/visual/hero-fit-${width}x${height}-rest.png` });
    for (const [index, id] of ["waiturn", "argosapp", "orla-plus"].entries()) {
      const project = page.locator(`.showcase-project--${id}`);
      // Move the physical pointer; locator.hover() may auto-scroll a scaled scene.
      const labelBox = await project.locator(".showcase-label").boundingBox();
      await page.mouse.move(labelBox.x + labelBox.width / 2, labelBox.y + labelBox.height / 2);
      await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
      await expect(project).toHaveCSS("translate", "0px -3px");
      await expect.poll(async () => (await measure()).every(item => item.labelVisible && item.bottom < height - 4)).toBe(true);
      const hovered = await measure();
      assertFraming(hovered);
      for (let other = 0; other < 3; other++) {
        if (other !== index) expect(hovered[other].visibleSamples).toBeGreaterThanOrEqual(initial[other].visibleSamples - 8);
      }
      await page.screenshot({ path: `docs/visual/hero-fit-${width}x${height}-hover-${id}.png` });
    }
    // Resizing the same page must recompute the fit, including the tablet reset.
    await page.setViewportSize({ width, height: height - 80 });
    await page.mouse.move(8, 8);
    await expect.poll(async () => (await measure()).every(item => item.bottom < height - 80 - 4)).toBe(true);
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.locator(".hero-showcase")).not.toHaveAttribute("style", /--showcase-scale/);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  });
}
