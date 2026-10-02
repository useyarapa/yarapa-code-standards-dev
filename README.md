# Yarapa Code Standards

[![Verify workflow status](https://github.com/useyarapa/yarapa-code-standards/actions/workflows/ci.yml/badge.svg)](https://github.com/useyarapa/yarapa-code-standards/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/useyarapa/yarapa-code-standards/branch/main/graph/badge.svg)](https://codecov.io/gh/useyarapa/yarapa-code-standards/branch/main)
[![ESLint config version](https://img.shields.io/npm/v/%40yarapa%2Feslint-config-yarapa.svg?color=cb3837&label=eslint-config)](https://www.npmjs.com/package/@yarapa/eslint-config-yarapa-imprement-demo)
[![Prettier config version](https://img.shields.io/npm/v/%40yarapa%2Fprettier-config-yarapa.svg?color=cb3837&label=prettier-config)](https://www.npmjs.com/package/@yarapa/prettier-config-yarapa-imprement-demo)
[![Commitlint config version](https://img.shields.io/npm/v/%40yarapa%2Fcommitlint-config-yarapa.svg?color=cb3837&label=commitlint-config)](https://www.npmjs.com/package/@yarapa/commitlint-config-yarapa-imprement-demo)
[![node version](https://img.shields.io/badge/node-%3E%3D24.15.0%20%3C25-brightgreen.svg)](https://nodejs.org)
[![license](https://img.shields.io/github/license/useyarapa/yarapa-code-standards.svg)](LICENSE)

Shared linting, formatting, and commit-message standards for Yarapa JavaScript and TypeScript projects.

## Packages

| Package                                                                                | Purpose                                                                                                                          |
| :------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| [`@yarapa/eslint-config-yarapa-imprement-demo`](packages/eslint-config-yarapa)         | Strict ESLint Flat Config for JavaScript, TypeScript, React, Next.js, Node.js, browser projects, tests, and common data formats. |
| [`@yarapa/prettier-config-yarapa-imprement-demo`](packages/prettier-config-yarapa)     | Shared Prettier configuration, including shell formatting.                                                                       |
| [`@yarapa/commitlint-config-yarapa-imprement-demo`](packages/commitlint-config-yarapa) | Conventional Commit policy for commit messages.                                                                                  |

## Quick start

Install the complete standards suite:

```sh
# pnpm 12
pnpm add --allow-build=unrs-resolver -D eslint prettier @commitlint/cli @yarapa/eslint-config-yarapa-imprement-demo @yarapa/prettier-config-yarapa-imprement-demo @yarapa/commitlint-config-yarapa-imprement-demo
```

For npm, Yarn, or Bun:

```sh
npm install --save-dev eslint prettier @commitlint/cli @yarapa/eslint-config-yarapa-imprement-demo @yarapa/prettier-config-yarapa-imprement-demo @yarapa/commitlint-config-yarapa-imprement-demo
yarn add -D eslint prettier @commitlint/cli @yarapa/eslint-config-yarapa-imprement-demo @yarapa/prettier-config-yarapa-imprement-demo @yarapa/commitlint-config-yarapa-imprement-demo
bun add -d eslint prettier @commitlint/cli @yarapa/eslint-config-yarapa-imprement-demo @yarapa/prettier-config-yarapa-imprement-demo @yarapa/commitlint-config-yarapa-imprement-demo
```

The pnpm 12 command explicitly allows the lifecycle build used by Import-X's native resolver, `unrs-resolver`.

### ESLint

Create `eslint.config.mjs`:

```js
import yarapa from "@yarapa/eslint-config-yarapa-imprement-demo";

export default yarapa();
```

Node.js is the default runtime context. Enable project context explicitly when needed:

```js
import yarapa from "@yarapa/eslint-config-yarapa-imprement-demo";

export default yarapa({
  browser: true,
  react: true,
});
```

For Next.js projects, use `nextjs: true`; it implies the React profile but does not imply browser globals.

See the [ESLint package documentation](packages/eslint-config-yarapa/README.md) for supported files, editor setup, project-specific ignores, and troubleshooting.

### Prettier

Add the shared config to `package.json`:

```json
{
  "prettier": "@yarapa/prettier-config-yarapa-imprement-demo"
}
```

You can also use the package name in `.prettierrc.json` or re-export it from `prettier.config.mjs`.

See the [Prettier package documentation](packages/prettier-config-yarapa/README.md) for formatting options and editor setup.

### Commitlint

Create `.commitlintrc.json`:

```json
{
  "extends": ["@yarapa/commitlint-config-yarapa-imprement-demo"]
}
```

Commit messages use the form `<type>(<scope>): <subject>`. Scopes are required and lowercase; subjects are limited to 50 characters, may not end in a period, and may not use `!` breaking-change syntax.

See the [Commitlint package documentation](packages/commitlint-config-yarapa/README.md) for the complete rule set.

## Recommended scripts

```json
{
  "scripts": {
    "lint": "eslint . --max-warnings=0",
    "lint:fix": "eslint . --fix",
    "format": "prettier --write --cache .",
    "format:check": "prettier --check --cache .",
    "commitlint": "commitlint --edit"
  }
}
```

## Requirements

| Tool            | Supported range  |
| :-------------- | :--------------- |
| Node.js         | `>=24.15.0 <25`  |
| ESLint          | `^10.4.0`        |
| Prettier        | `>=3.6.0 <4.0.0` |
| @commitlint/cli | `>=19.0.0`       |

## License

[MIT](LICENSE) © Yarapa
