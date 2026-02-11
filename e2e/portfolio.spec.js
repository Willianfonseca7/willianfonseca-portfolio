import { test, expect } from "@playwright/test";

test("Home -> Projects shows ContainerHub", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: /projekte/i }).click();
  await expect(page.getByText("ContainerHub")).toBeVisible();
});

test("Contact form shows confirmation", async ({ page }) => {
  await page.goto("/kontakt");

  await page.getByLabel(/name/i).fill("Willian");
  await page.getByLabel(/e-mail/i).fill("willian@example.com");
  await page.getByLabel(/nachricht/i).fill("Das ist eine gültige Nachricht mit mehr als 20 Zeichen.");

  const submitButton = page.getByRole("button", { name: /nachricht senden/i });
  await expect(submitButton).toBeEnabled();
  await submitButton.click();

  await expect(page.getByRole("status")).toContainText(/danke/i);
});
