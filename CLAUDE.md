# Cornerstone frontend architecture

These rules are mandatory for every frontend source file under `projects/cornerstone/src` and
`design-system/src`. The brochure site in `marketing/` is hand-written static HTML and CSS with no
TypeScript, so it is outside their scope — see [`docs/marketing-site.md`](docs/marketing-site.md).

## File-per-type organization

- A TypeScript source file may declare at most one top-level class, interface, type alias, enum,
  function, or variable.
- Name the file for its declaration and role: `.component.ts`, `.directive.ts`, `.service.ts`,
  `.pipe.ts`, `.interface.ts`, `.type.ts`, `.enum.ts`, `.function.ts`, `.token.ts`, `.constant.ts`,
  or `.class.ts`.
- A barrel may re-export any number of files, but it must not contain a declaration.
- Do not place helper types, configuration interfaces, injection tokens, constants, or functions in
  a component, directive, service, or other declaration file. Give each one its own file.
- Test host components follow the same rules as production components and live in their own files.

## No single-file components

- Every Angular component consists of three colocated files: `name.component.ts`,
  `name.component.html`, and `name.component.scss`.
- Component decorators must use `templateUrl` and `styleUrl`.
- Inline `template`, `styles`, or style arrays are prohibited, including for empty and test-only
  components.
- Directives, pipes, and services remain TypeScript-only unless their own role requires another
  resource.

## Enforcement

Run `npm run architecture:check` before committing. CI runs the same check and rejects multiple
top-level declarations, inline component resources, missing component resources, and filenames
that do not match the declared type.
