# @yarapa/eslint-config-yarapa-imprement-demo

[![npm version](https://img.shields.io/npm/v/%40yarapa%2Feslint-config-yarapa.svg?color=cb3837)](https://www.npmjs.com/package/@yarapa/eslint-config-yarapa-imprement-demo)
[![npm downloads](https://img.shields.io/npm/dm/%40yarapa%2Feslint-config-yarapa.svg)](https://www.npmjs.com/package/@yarapa/eslint-config-yarapa-imprement-demo)
[![codecov](https://codecov.io/gh/useyarapa/yarapa-code-standards/branch/main/graph/badge.svg)](https://codecov.io/gh/useyarapa/yarapa-code-standards/branch/main)
[![node version](https://img.shields.io/badge/node-%3E%3D24.15.0-brightgreen.svg)](https://nodejs.org)
[![license](https://img.shields.io/npm/l/%40yarapa%2Feslint-config-yarapa.svg)](../../LICENSE)

Strict ESLint Flat Config for Yarapa JavaScript and TypeScript projects.

It supports JavaScript, TypeScript, Node.js, browser projects, React, Next.js compatibility, Vitest files, JSON, JSONC, JSON5, YAML, TOML, Markdown, and package manifests.

## Installation

```sh
# pnpm 12
pnpm add --allow-build=unrs-resolver -D eslint typescript @yarapa/eslint-config-yarapa-imprement-demo

# npm
npm install --save-dev eslint typescript @yarapa/eslint-config-yarapa-imprement-demo

# yarn
yarn add -D eslint typescript @yarapa/eslint-config-yarapa-imprement-demo

# bun
bun add -d eslint typescript @yarapa/eslint-config-yarapa-imprement-demo
```

The pnpm 12 command explicitly allows the lifecycle build required by Import-X's native resolver, `unrs-resolver`. Without it, pnpm can report `ERR_PNPM_IGNORED_BUILDS`.

## Requirements

| Tool       | Supported range  |
| :--------- | :--------------- |
| Node.js    | `>=24.15.0`      |
| ESLint     | `^10.4.0`        |
| TypeScript | `>=4.8.4 <6.1.0` |

This package is ESM-only and uses ESLint Flat Config.

## Quick start

Create `eslint.config.mjs`:

```js
import yarapa from "@yarapa/eslint-config-yarapa-imprement-demo";

export default yarapa();
```

Add scripts to `package.json`:

```json
{
  "scripts": {
    "lint": "eslint . --max-warnings=0",
    "lint:fix": "eslint . --fix"
  }
}
```

Run:

```sh
pnpm lint
```

### Using `eslint.config.ts`

If you use a TypeScript ESLint config on Node.js, install `jiti` 2.2.0 or newer:

```sh
pnpm add -D jiti@^2.2.0
```

## Project options

The config exposes project-context switches rather than rule-by-rule preferences:

| Option    | Default | Use when                                                                       |
| :-------- | :------ | :----------------------------------------------------------------------------- |
| `browser` | `false` | The project runs in a browser instead of the default Node.js runtime context.  |
| `react`   | `false` | The project contains React JSX/TSX.                                            |
| `nextjs`  | `false` | The project uses Next.js framework files and route conventions. Implies React. |

Browser example:

```js
import yarapa from "@yarapa/eslint-config-yarapa-imprement-demo";

export default yarapa({browser: true});
```

React example:

```js
import yarapa from "@yarapa/eslint-config-yarapa-imprement-demo";

export default yarapa({browser: true, react: true});
```

Next.js example:

```js
import yarapa from "@yarapa/eslint-config-yarapa-imprement-demo";

export default yarapa({nextjs: true});
```

`nextjs: true` enables Yarapa's Next.js compatibility rules and implies React. It does not enable browser globals automatically, because a Next.js project contains both server and client code.

The package does not bundle `eslint-config-next` or `@next/eslint-plugin-next`.

## What is checked

| Area                                    |    Enabled by default    |
| :-------------------------------------- | :----------------------: |
| JavaScript and TypeScript correctness   |            ✅            |
| Type-aware TypeScript rules             |            ✅            |
| Node.js runtime rules                   |            ✅            |
| Imports and deterministic ordering      |            ✅            |
| Promise, RegExp, and code-quality rules |            ✅            |
| JSDoc and ESLint directive governance   |            ✅            |
| Vitest test files                       |            ✅            |
| JSON / JSONC / JSON5                    |            ✅            |
| YAML and TOML                           |            ✅            |
| Markdown                                |            ✅            |
| `package.json`                          |            ✅            |
| React / JSX accessibility / Hooks       | with `react` or `nextjs` |
| Browser globals                         |      with `browser`      |
| Next.js compatibility                   |      with `nextjs`       |

Targeted `eslint-disable` directives are allowed, but they must remain narrow and described. Unused suppression directives are reported.

## Formatting

Use ESLint for diagnostics, semantic fixes, code quality, and non-conflicting structural rules.

Use [`@yarapa/prettier-config-yarapa-imprement-demo`](../prettier-config-yarapa) for layout formatting such as indentation, quotes, wrapping, and semicolons.

## Ignoring generated or vendor files

Use ESLint's `globalIgnores()` for project-specific paths:

```js
import {defineConfig, globalIgnores} from "eslint/config";
import yarapa from "@yarapa/eslint-config-yarapa-imprement-demo";

export default defineConfig(globalIgnores(["dist/**", "coverage/**"]), yarapa());
```

## Editor setup

### VS Code

Install the ESLint extension. If you also use Prettier, let Prettier format and ESLint apply lint fixes:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```

### JetBrains IDEs

Configure ESLint to use the project's local `node_modules/eslint` package and enable ESLint fixes on save if desired.

### Neovim

Use the ESLint language server from your preferred LSP integration and run `EslintFixAll` on save when you want automatic lint fixes.

## Inspecting active rules

You can inspect the effective Flat Config with ESLint's config inspector:

```sh
pnpm dlx @eslint/config-inspector
```

## Troubleshooting

### TypeScript files are not part of a project

Run ESLint from the directory containing the controlling `tsconfig.json`, usually the project root:

```sh
pnpm exec eslint .
```

If you use a non-standard or nested TypeScript layout, make sure the files being linted are included by the appropriate `tsconfig.json`.

### Valid Next.js files receive generic filename or export diagnostics

Enable the Next.js project context:

```js
export default yarapa({nextjs: true});
```

### Generated files keep reporting diagnostics

Add those paths with `globalIgnores()` rather than scattering file-local suppression comments.

## License

[MIT](https://github.com/useyarapa/yarapa-code-standards/blob/main/LICENSE) © Yarapa
