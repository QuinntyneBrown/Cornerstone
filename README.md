# Cornerstone

FaithTech's Angular CDK component library: accessible behavior, a disciplined FaithTech visual
language, and a practical migration bridge for [Liturgy](https://github.com/QuinntyneBrown/Liturgy)
and [Word Up](https://github.com/QuinntyneBrown/word-up).

## Workspace

```text
projects/cornerstone/ @faithtech/cornerstone library
design-system/        component documentation application
marketing/            static product and brochure site
docs/specs/           architecture, API inventory, and migration specifications
```

Both sites are static Angular builds and include Azure Static Web Apps route configuration.
GitHub Actions builds every project on pull requests and deploys the two sites from `main` when
their respective Azure deployment token is configured.

## Start locally

```bash
npm install
npm start                 # component documentation on :4200
npm run start:marketing   # brochure site on :4200
```

## Build and test

```bash
npm test
npm run build
npm run format:check
```

## Install in an Angular application

```bash
npm install @faithtech/cornerstone @angular/cdk
```

Add the base theme to the application's `angular.json` styles array:

```json
"styles": ["@faithtech/cornerstone/styles/theme.scss", "src/styles.scss"]
```

Then import only the standalone pieces a screen uses:

```ts
import { CsButtonDirective, CsCardComponent } from '@faithtech/cornerstone';

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
  "@faithtech/cornerstone/styles/theme.scss",
  "@faithtech/cornerstone/styles/compat.scss",
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
