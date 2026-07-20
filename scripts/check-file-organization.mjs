import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { basename, dirname, relative, resolve } from 'node:path';
import ts from 'typescript';

const root = resolve(import.meta.dirname, '..');
const sourceRoots = [resolve(root, 'projects/cornerstone/src'), resolve(root, 'design-system/src')];
const files = [];

function visit(directory) {
  for (const name of readdirSync(directory)) {
    const path = resolve(directory, name);
    if (statSync(path).isDirectory()) visit(path);
    else if (name.endsWith('.ts') && !name.endsWith('.d.ts')) files.push(path);
  }
}

for (const sourceRoot of sourceRoots) {
  if (existsSync(sourceRoot)) visit(sourceRoot);
}

function kebabCase(value) {
  return value
    .replace(/_/g, '-')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .replace(/-+/g, '-')
    .toLowerCase();
}

function decorators(node) {
  return ts.canHaveDecorators(node) ? (ts.getDecorators(node) ?? []) : [];
}

function componentMetadata(node) {
  const decorator = decorators(node).find(
    (candidate) =>
      ts.isCallExpression(candidate.expression) &&
      ts.isIdentifier(candidate.expression.expression) &&
      candidate.expression.expression.text === 'Component',
  );
  if (!decorator || !ts.isCallExpression(decorator.expression)) return undefined;
  const metadata = decorator.expression.arguments[0];
  return metadata && ts.isObjectLiteralExpression(metadata) ? metadata : undefined;
}

function property(metadata, name) {
  return metadata.properties.find(
    (candidate) => ts.isPropertyAssignment(candidate) && candidate.name.getText() === name,
  );
}

function declarationName(node) {
  if (
    ts.isClassDeclaration(node) ||
    ts.isInterfaceDeclaration(node) ||
    ts.isTypeAliasDeclaration(node) ||
    ts.isEnumDeclaration(node) ||
    ts.isFunctionDeclaration(node)
  )
    return node.name?.text;
  return undefined;
}

function declarationKind(node, name) {
  if (ts.isClassDeclaration(node)) {
    if (componentMetadata(node)) return 'component';
    for (const suffix of ['Directive', 'Service', 'Pipe', 'Guard', 'Interceptor']) {
      if (name.endsWith(suffix)) return suffix.toLowerCase();
    }
    return 'class';
  }
  if (ts.isInterfaceDeclaration(node)) return 'interface';
  if (ts.isTypeAliasDeclaration(node)) return 'type';
  if (ts.isEnumDeclaration(node)) return 'enum';
  if (ts.isFunctionDeclaration(node)) return 'function';
  if (ts.isVariableDeclaration(node)) {
    return node.initializer?.getText().includes('InjectionToken') ? 'token' : 'constant';
  }
  throw new Error(`Unsupported declaration ${name}`);
}

function expectedFileName(node, name) {
  const kind = declarationKind(node, name);
  const roleSuffix = kind[0].toUpperCase() + kind.slice(1);
  const stem = ['component', 'directive', 'service', 'pipe', 'guard', 'interceptor'].includes(kind)
    ? name.slice(0, -roleSuffix.length)
    : name;
  return `${kebabCase(stem)}.${kind}.ts`;
}

const failures = [];
let declarationsChecked = 0;
let componentsChecked = 0;

for (const file of files) {
  const source = readFileSync(file, 'utf8');
  const sourceFile = ts.createSourceFile(
    file,
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );
  const declarations = [];
  for (const statement of sourceFile.statements) {
    const name = declarationName(statement);
    if (name) declarations.push({ node: statement, name });
    if (ts.isVariableStatement(statement)) {
      for (const declaration of statement.declarationList.declarations) {
        if (ts.isIdentifier(declaration.name))
          declarations.push({ node: declaration, name: declaration.name.text });
        else failures.push(`${relative(root, file)} has a destructured top-level variable.`);
      }
    }
  }

  declarationsChecked += declarations.length;
  if (declarations.length > 1) {
    failures.push(
      `${relative(root, file)} declares ${declarations.length} top-level types (${declarations.map(({ name }) => name).join(', ')}).`,
    );
  }
  if (declarations.length === 1 && !file.endsWith('.spec.ts')) {
    const declaration = declarations[0];
    const expected = expectedFileName(declaration.node, declaration.name);
    if (basename(file) !== expected) {
      failures.push(`${relative(root, file)} must be named ${expected} for ${declaration.name}.`);
    }
  }

  for (const declaration of declarations) {
    if (!ts.isClassDeclaration(declaration.node)) continue;
    const metadata = componentMetadata(declaration.node);
    if (!metadata) continue;
    componentsChecked += 1;
    for (const forbidden of ['template', 'styles']) {
      if (property(metadata, forbidden))
        failures.push(`${relative(root, file)} uses forbidden inline ${forbidden}.`);
    }
    const templateUrl = property(metadata, 'templateUrl');
    const styleUrl = property(metadata, 'styleUrl');
    if (
      !templateUrl ||
      !ts.isPropertyAssignment(templateUrl) ||
      !ts.isStringLiteralLike(templateUrl.initializer)
    ) {
      failures.push(`${relative(root, file)} must declare a static templateUrl.`);
    } else if (!existsSync(resolve(dirname(file), templateUrl.initializer.text))) {
      failures.push(
        `${relative(root, file)} references missing template ${templateUrl.initializer.text}.`,
      );
    }
    if (
      !styleUrl ||
      !ts.isPropertyAssignment(styleUrl) ||
      !ts.isStringLiteralLike(styleUrl.initializer)
    ) {
      failures.push(`${relative(root, file)} must declare a static styleUrl.`);
    } else if (!existsSync(resolve(dirname(file), styleUrl.initializer.text))) {
      failures.push(
        `${relative(root, file)} references missing stylesheet ${styleUrl.initializer.text}.`,
      );
    }
  }
}

if (failures.length > 0) {
  for (const failure of failures) console.error(failure);
  process.exitCode = 1;
} else {
  console.log(
    `File organization verified: ${declarationsChecked} declarations in individual files; ${componentsChecked} components use external HTML and SCSS.`,
  );
}
