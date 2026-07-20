# Cornerstone

FaithTech's `@cornerstone/ui` Angular CDK component library: accessible behavior, a disciplined FaithTech visual
language, and a practical migration bridge for [Liturgy](https://github.com/QuinntyneBrown/Liturgy)
and [Word Up](https://github.com/QuinntyneBrown/word-up).

## Workspace

```text
projects/cornerstone/ @cornerstone/ui library
design-system/        component documentation application (Angular)
marketing/            brochure site (hand-written static HTML and CSS)
docs/specs/           architecture, API inventory, and migration specifications
```

The documentation application is a static Angular build. The brochure site is plain HTML and CSS
with no framework and no runtime JavaScript; `npm run build:marketing` copies it to
`dist/marketing/browser` and fails if a script tag ever appears in it. Both ship Azure Static Web
Apps route configuration, and GitHub Actions deploys each from `main` when its Azure deployment
token is configured. See [`docs/marketing-site.md`](docs/marketing-site.md) for the brochure site's
design and content rationale.

## Start locally

```bash
npm install
npm start                 # component documentation on :5173
npm run start:marketing   # brochure site on :5174
```

## Build and test

```bash
npm test
npm run test:coverage
npm run lint
npm run e2e
npm run build
npm run pack:check
npm run format:check
```

## Frontend file organization

Frontend code follows a strict file-per-type convention. Each TypeScript file contains at most one
top-level declaration, and every Angular component uses colocated external `.html` and `.scss`
resources. See [`CLAUDE.md`](CLAUDE.md) and run `npm run architecture:check` to verify the invariant.

## Install in an Angular application

```bash
npm install @cornerstone/ui @angular/cdk
```

Add the base theme to the application's `angular.json` styles array:

```json
"styles": ["@cornerstone/ui/styles/theme.scss", "src/styles.scss"]
```

Then import only the standalone pieces a screen uses:

```ts
import { CsButtonDirective, CsCardComponent } from '@cornerstone/ui';

@Component({
  imports: [CsButtonDirective, CsCardComponent],
  template: `<cs-card><button csButton>Continue</button></cs-card>`,
})
export class ExampleComponent {}
```

For a best-effort drop-in migration from Liturgy or Word Up, load the compatibility layer after
the theme:

```json
"styles": [
  "@cornerstone/ui/styles/theme.scss",
  "@cornerstone/ui/styles/compat.scss",
  "src/styles.scss"
]
```

This preserves Liturgy's existing generic product primitives and Word Up's complete `wu-*`
vocabulary while templates move incrementally to the `cs-*` Angular API. See
[`docs/specs/migration.md`](docs/specs/migration.md) for the audited component mapping.

## Theme customization

All decisions are CSS custom properties. Override tokens on `:root` or a subtree:

```scss
:root {
  --cs-font-display: 'Your licensed FaithTech display face', sans-serif;
  --cs-container: 76rem;
}
```

Apply `.cs-theme-dark` to any ancestor for the supplied dark theme. Motion durations collapse
automatically for `prefers-reduced-motion`.

## License

MIT
