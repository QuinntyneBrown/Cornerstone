// Traces to: L2-149, L2-150, L2-151, L2-153, L2-155
import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('lists every public component in an accessible catalog', async ({ page }) => {
  test.setTimeout(60_000);
  await page.goto('/');

  await expect(page).toHaveURL(/\/components\/categories$/);
  await expect(page.locator('html')).toHaveClass(/cs-theme-dark/);
  await expect(page.getByRole('heading', { name: 'Components', exact: true })).toBeVisible();
  await expect(page.locator('.component-nav nav a')).toHaveCount(144);
  await expect(page.locator('.component-grid > a')).toHaveCount(144);

  const results = await new AxeBuilder({ page }).analyze();
  expect(
    results.violations.filter((violation) =>
      ['critical', 'serious'].includes(violation.impact ?? ''),
    ),
  ).toEqual([]);

  await page.getByRole('button', { name: 'Light theme' }).click();
  await expect(page.locator('html')).toHaveClass(/cs-theme-light/);
  const lightResults = await new AxeBuilder({ page }).analyze();
  expect(
    lightResults.violations.filter((violation) =>
      ['critical', 'serious'].includes(violation.impact ?? ''),
    ),
  ).toEqual([]);
});

test('exposes Badge controls, source, and its actual API', async ({ page }) => {
  test.setTimeout(60_000);
  await page.goto('/components/badge/examples');

  const tone = page.getByLabel(/tone/i);
  await expect(tone).toHaveValue('neutral');
  await tone.selectOption('success');
  await expect(page.locator('.preview-stage cs-badge')).toHaveClass(/cs-tone--success/);

  await page.getByRole('button', { name: 'Source' }).click();
  await expect(page.getByRole('tab', { name: 'HTML' })).toHaveAttribute('aria-selected', 'true');
  await expect(page.locator('.source-view code')).toContainText('<ng-content />');
  await page.getByRole('tab', { name: 'TS' }).click();
  await expect(page.locator('.source-view code')).toContainText('export class BadgeComponent');

  await page.getByRole('link', { name: 'api', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'API reference for Badge' })).toBeVisible();
  await expect(page.locator('.api-page')).toContainText("Default: 'neutral'");
  await expect(page.locator('.api-page')).toContainText(
    "'neutral' | 'success' | 'warning' | 'error' | 'info' | 'lime'",
  );
});

test('renders all 144 live component routes without runtime errors', async ({ page }) => {
  test.setTimeout(90_000);
  await page.goto('/components/categories');

  const result = await page.evaluate(async () => {
    const catalog = (await (await fetch('/generated/api.json')).json()) as {
      components: { slug: string; label: string }[];
    };
    const failures: { slug: string; error: string }[] = [];
    let current = '';
    const originalError = console.error;
    console.error = (...values: unknown[]) => {
      failures.push({ slug: current, error: values.map(String).join(' ') });
      originalError(...values);
    };

    for (const component of catalog.components) {
      current = component.slug;
      history.pushState({}, '', `/components/${component.slug}/overview`);
      dispatchEvent(new PopStateEvent('popstate'));
      for (let attempt = 0; attempt < 30; attempt++) {
        await new Promise((resolve) => setTimeout(resolve, 50));
        if (document.querySelector('main h1')?.textContent?.trim() === component.label) break;
      }
      await new Promise((resolve) => setTimeout(resolve, 80));
      const heading = document.querySelector('main h1')?.textContent?.trim();
      const renderError = document.querySelector('.render-error')?.textContent?.trim();
      if (heading !== component.label || renderError) {
        failures.push({
          slug: current,
          error: renderError || `Expected ${component.label}, rendered ${heading ?? 'nothing'}`,
        });
      }
    }

    console.error = originalError;
    return { checked: catalog.components.length, failures };
  });

  expect(result.checked).toBe(144);
  expect(result.failures).toEqual([]);
});

test('keeps the catalog usable at a narrow viewport', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/components/categories');
  await expect(page.getByLabel('Find a component')).toBeVisible();
  await expect(page.locator('body')).toHaveJSProperty('scrollWidth', 390);
  await page.getByLabel('Find a component').fill('badge');
  await expect(page.locator('.component-nav nav a')).toHaveCount(2);
});
