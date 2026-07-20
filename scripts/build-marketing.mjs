// Publishes the static brochure site.
//
// The site is hand-written HTML and CSS, so "building" it means copying it and
// then proving it is still static. The guard below is the point: it fails the
// build if a script tag ever appears, which is the one property that separates
// this site from the Angular application it replaced.
import { cp, mkdir, readFile, readdir, rm, stat } from 'node:fs/promises';
import { basename, join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const source = resolve(root, 'marketing');
const target = resolve(root, 'dist/marketing/browser');

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const found = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) found.push(...(await walk(path)));
    else found.push(path);
  }
  return found;
}

const files = await walk(source);
const failures = [];

for (const file of files) {
  const name = basename(file);

  if (/\.(ts|tsx|jsx|mjs|cjs)$/.test(name)) {
    failures.push(`${name} is a source module; the brochure site ships no build step.`);
    continue;
  }

  if (!name.endsWith('.html')) continue;

  const html = await readFile(file, 'utf8');
  if (/<script\b/i.test(html)) failures.push(`${name} contains a script tag.`);
  if (/\son[a-z]+\s*=/i.test(html)) failures.push(`${name} contains an inline event handler.`);
  if (!/<title>/.test(html)) failures.push(`${name} has no title.`);
  if (!/<html lang="[a-z-]+"/.test(html)) failures.push(`${name} has no language declared.`);
}

if (failures.length > 0) {
  console.error('The marketing site is no longer static:');
  for (const failure of failures) console.error(`  - ${failure}`);
  process.exit(1);
}

await rm(target, { recursive: true, force: true });
await mkdir(target, { recursive: true });
await cp(source, target, { recursive: true });

let bytes = 0;
for (const file of files) bytes += (await stat(file)).size;

console.log(
  `Marketing site published: ${files.length} files, ${(bytes / 1024).toFixed(1)} KiB, 0 scripts.`,
);
