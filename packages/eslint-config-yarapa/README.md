# @yarapa/eslint-config-yarapa-imprement-demo

[![CI](https://github.com/useyarapa/yarapa-code-standards-dev/actions/workflows/ci.yml/badge.svg)](https://github.com/useyarapa/yarapa-code-standards-dev/actions/workflows/ci.yml) [![Codecov](https://codecov.io/gh/useyarapa/yarapa-code-standards-dev/branch/main/graph/badge.svg)](https://codecov.io/gh/useyarapa/yarapa-code-standards-dev/branch/main) [![License](https://img.shields.io/github/license/useyarapa/yarapa-code-standards-dev.svg)](../../LICENSE)

One strict Flat Config for Node.js, TypeScript, React, Next.js, tests, and structured data—with runtime and framework context explicit instead of inferred.

- Strict and type-aware by default.
- Project context is opt-in and visible in configuration.
- One policy surface covers source code, tests, package manifests, and common data formats.

## Usage

```js
import yarapa from "@yarapa/eslint-config-yarapa-imprement-demo";

export default yarapa();
```

Node.js is the default runtime context.

### Project contexts

| Option    | Default | Contract                                                                         |
| :-------- | :------ | :------------------------------------------------------------------------------- |
| `browser` | `false` | Enable browser globals instead of the default Node.js runtime context.           |
| `react`   | `false` | Enable React, JSX accessibility, and Hooks policy.                               |
| `nextjs`  | `false` | Enable Next.js file and route compatibility; implies React, not browser globals. |

```js
import yarapa from "@yarapa/eslint-config-yarapa-imprement-demo";

export default yarapa({browser: true, react: true});
```

For Next.js:

```js
export default yarapa({nextjs: true});
```

The package does not bundle `eslint-config-next` or `@next/eslint-plugin-next`.

## Policy coverage

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

Targeted `eslint-disable` directives are allowed when narrow and described. Unused suppression directives are reported.

## Project-specific ignores

Use ESLint's `globalIgnores()` for generated, vendor, or project-owned paths:

```js
import {defineConfig, globalIgnores} from "eslint/config";
import yarapa from "@yarapa/eslint-config-yarapa-imprement-demo";

export default defineConfig(globalIgnores(["dist/**", "coverage/**"]), yarapa());
```

## Formatting boundary

ESLint owns diagnostics, semantic fixes, code quality, and non-conflicting structural rules.

[`@yarapa/prettier-config-yarapa-imprement-demo`](../prettier-config-yarapa) owns layout formatting such as indentation, quotes, wrapping, and semicolons.

## Compatibility

| Surface                   | Supported contract |
| :------------------------ | :----------------- |
| Node.js                   | `>=24.15.0`        |
| ESLint                    | `^10.4.0`          |
| TypeScript                | `>=4.8.4 <6.1.0`   |
| Module format             | ESM only           |
| ESLint configuration      | Flat Config        |
| `eslint.config.ts` loader | `jiti >=2.2.0`     |

## Troubleshooting

### TypeScript files are outside the project

Run ESLint from the project root and ensure the files are included by the controlling `tsconfig.json`.

### Valid Next.js files receive generic filename or export diagnostics

Use the Next.js project context:

```js
export default yarapa({nextjs: true});
```

### Generated files keep reporting diagnostics

Add project-owned generated paths with `globalIgnores()` rather than file-local suppression comments.

## License

[MIT](../../LICENSE) © Yarapa
