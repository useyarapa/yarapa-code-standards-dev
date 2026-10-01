# @yarapa/prettier-config-yarapa

[![npm version](https://img.shields.io/npm/v/%40yarapa%2Fprettier-config-yarapa.svg?color=cb3837)](https://www.npmjs.com/package/@yarapa/prettier-config-yarapa)
[![npm downloads](https://img.shields.io/npm/dm/%40yarapa%2Fprettier-config-yarapa.svg)](https://www.npmjs.com/package/@yarapa/prettier-config-yarapa)
[![node version](https://img.shields.io/badge/node-%3E%3D24.15.0-brightgreen.svg)](https://nodejs.org)
[![license](https://img.shields.io/npm/l/%40yarapa%2Fprettier-config-yarapa.svg)](../../LICENSE)

Shared Prettier configuration for Yarapa projects, including shell formatting.

## Installation

```sh
# pnpm
pnpm add -D prettier @yarapa/prettier-config-yarapa

# npm
npm install --save-dev prettier @yarapa/prettier-config-yarapa

# yarn
yarn add -D prettier @yarapa/prettier-config-yarapa

# bun
bun add -d prettier @yarapa/prettier-config-yarapa
```

## Requirements

| Tool     | Supported range  |
| :------- | :--------------- |
| Node.js  | `>=24.15.0`      |
| Prettier | `>=3.6.0 <4.0.0` |

## Quick start

The simplest setup is to reference the package from `package.json`:

```json
{
  "prettier": "@yarapa/prettier-config-yarapa"
}
```

You can also use `.prettierrc.json`:

```json
"@yarapa/prettier-config-yarapa"
```

Or re-export it from `prettier.config.mjs`:

```js
import yarapaPrettier from "@yarapa/prettier-config-yarapa";

export default yarapaPrettier;
```

Add scripts:

```json
{
  "scripts": {
    "format": "prettier --write --cache .",
    "format:check": "prettier --check --cache ."
  }
}
```

Run formatting with:

```sh
pnpm format
```

## Formatting style

The shared config uses:

| Option            | Value                       |
| :---------------- | :-------------------------- |
| Arrow parameters  | Omit parentheses when valid |
| Bracket same line | `false`                     |
| Bracket spacing   | `false`                     |
| End of line       | `lf`                        |
| JSX quotes        | Double                      |
| Print width       | `100`                       |
| Semicolons        | Enabled                     |
| String quotes     | Double                      |
| Tab width         | `2`                         |
| Trailing commas   | Wherever valid              |
| Tabs              | Spaces                      |

The package also bundles `prettier-plugin-sh`, so shell scripts and Husky hook files can be formatted without installing the plugin separately.

## Using it with ESLint

[`@yarapa/eslint-config-yarapa`](../eslint-config-yarapa) is designed to work with this config. Prettier owns layout formatting; ESLint owns diagnostics, code quality, semantic fixes, and non-conflicting structural rules.

Run both tools independently rather than running Prettier through ESLint.

## Editor setup

### VS Code

Install the Prettier extension and configure it as the default formatter:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

If you also use Yarapa ESLint, keep Prettier as the formatter and use the ESLint extension for lint fixes.

## License

[MIT](https://github.com/useyarapa/yarapa-code-standards/blob/main/LICENSE) © Yarapa
