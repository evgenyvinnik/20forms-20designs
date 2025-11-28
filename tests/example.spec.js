import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/20forms-20designs/);
});

test('get started link', async ({ page }) => {
  await page.goto('/');
  
  // Check if the main heading exists
  // Adjust the selector based on your actual app content
  // For a default Vite app, it might be an h1 or just checking for some text
  // await expect(page.locator('h1')).toBeVisible();
});
