import { test, expect } from "@playwright/test";

test("home page has core navigation", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: "Apply" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Donate" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Partner" })).toBeVisible();
});
