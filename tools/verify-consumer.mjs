import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { compileString, NodePackageImporter } from 'sass';

const root = resolve(import.meta.dirname, '..');
const parent = resolve(root, 'dist/consumers');
mkdirSync(parent, { recursive: true });
const consumer = mkdtempSync(resolve(parent, 'packed-'));
const npm = (args, cwd = consumer) =>
  execFileSync('npm', args, {
    cwd,
    encoding: 'utf8',
    shell: process.platform === 'win32',
  });
const registryVersion = process.argv[2] === '--registry-version' ? process.argv[3] : undefined;
if (registryVersion) assert.match(registryVersion, /^\d+\.\d+\.\d+$/);
const archives = registryVersion
  ? [
      `@quinntyne/cornerstone@${registryVersion}`,
      `@quinntyne/cornerstone-design-system@${registryVersion}`,
    ]
  : process.argv[2] === '--archives'
    ? process.argv.slice(3)
    : ['cornerstone', 'design-system-tokens'].map((directory) => {
        const [result] = JSON.parse(
          npm(['pack', '--json', `./dist/${directory}`, '--pack-destination', consumer], root),
        );
        return resolve(consumer, result.filename);
      });
assert.equal(archives.length, 2, 'Verify exactly the two release packages');
writeFileSync(
  resolve(consumer, 'package.json'),
  '{"name":"cornerstone-packed-consumer","private":true}\n',
);
npm([
  'install',
  ...archives,
  '--ignore-scripts',
  '--legacy-peer-deps',
  '--no-audit',
  '--no-fund',
  '--package-lock=false',
  '--registry=https://registry.npmjs.org',
]);
writeFileSync(
  resolve(consumer, 'consumer.component.ts'),
  `
import { Component } from '@angular/core';
import { BadgeComponent, CardComponent, CsButtonDirective, CsCardHeaderComponent, CsProgressComponent } from '@quinntyne/cornerstone';
@Component({
  imports: [BadgeComponent, CardComponent, CsButtonDirective, CsCardHeaderComponent, CsProgressComponent],
  templateUrl: './consumer.component.html',
  styleUrl: './consumer.component.scss',
})
export class ConsumerComponent {}
`,
);
writeFileSync(
  resolve(consumer, 'consumer.component.html'),
  '<cs-card><header csCardHeader>Review</header><cs-badge tone="success">Ready</cs-badge><button csButton>Continue</button></cs-card><cs-progress-bar [value]="50" />',
);
writeFileSync(resolve(consumer, 'consumer.component.scss'), ':host { display: block; }');
writeFileSync(
  resolve(consumer, 'tsconfig.json'),
  JSON.stringify(
    {
      compilerOptions: {
        target: 'ES2022',
        module: 'preserve',
        moduleResolution: 'bundler',
        strict: true,
        experimentalDecorators: true,
        skipLibCheck: true,
        outDir: './compiled',
        types: [],
      },
      angularCompilerOptions: { strictTemplates: true },
      files: ['consumer.component.ts'],
    },
    null,
    2,
  ),
);
execFileSync(
  process.execPath,
  [
    resolve(root, 'node_modules/@angular/compiler-cli/bundles/src/bin/ngc.js'),
    '-p',
    resolve(consumer, 'tsconfig.json'),
  ],
  { stdio: 'inherit' },
);

const importer = new NodePackageImporter(consumer);
for (const name of ['theme', 'tokens', 'compat']) {
  for (const suffix of ['', '.scss']) {
    const css = compileString(`@use "pkg:@quinntyne/cornerstone/styles/${name}${suffix}";`, {
      importers: [importer],
    }).css;
    assert.match(css, /--cs-paper:/, `Missing tokens in ${name}${suffix}`);
  }
}
const tokens = compileString('@use "pkg:@quinntyne/cornerstone-design-system/tokens.scss";', {
  importers: [importer],
}).css;
assert.match(tokens, /--cs-paper:/);
const packedTokenCss = readFileSync(
  resolve(consumer, 'node_modules/@quinntyne/cornerstone-design-system/tokens.css'),
  'utf8',
);
assert.equal(tokens, packedTokenCss);
console.log('Packed Angular consumer and all public stylesheet entry points verified.');
