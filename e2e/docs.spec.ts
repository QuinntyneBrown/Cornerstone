// Traces to: L2-151, L2-154, L2-155, L2-156, L2-157
import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('documents the public API without serious accessibility violations', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: '@cornerstone/ui' })).toBeVisible();
  const results = await new AxeBuilder({ page }).analyze();
  expect(
    results.violations.filter((violation) =>
      ['critical', 'serious'].includes(violation.impact ?? ''),
    ),
  ).toEqual([]);
});

test('preserves the documented landing-page visual', async ({ page, browserName }) => {
  test.skip(browserName !== 'chromium', 'One stable visual engine owns the approved baseline.');
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'API reference (491)' })).toBeVisible();
  await expect(page.locator('.api-grid li')).toHaveCount(491);
  await expect(page).toHaveScreenshot('docs-home-light.png', { fullPage: true });
});
