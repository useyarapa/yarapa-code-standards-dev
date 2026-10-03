# @yarapa/prettier-config-yarapa-imprement-demo

[![CI](https://github.com/useyarapa/yarapa-code-standards-dev/actions/workflows/ci.yml/badge.svg)](https://github.com/useyarapa/yarapa-code-standards-dev/actions/workflows/ci.yml) [![Codecov](https://codecov.io/gh/useyarapa/yarapa-code-standards-dev/branch/main/graph/badge.svg)](https://codecov.io/gh/useyarapa/yarapa-code-standards-dev/branch/main) [![License](https://img.shields.io/github/license/useyarapa/yarapa-code-standards-dev.svg)](../../LICENSE)

One deterministic formatting contract for application code and shell scripts—no per-repository style drift.

- Stable formatting decisions are encoded once.
- Shell formatting ships with the same contract.
- Layout stays separate from ESLint diagnostics and semantic policy.

## Usage

Reference the package directly:

```json
{
  "prettier": "@yarapa/prettier-config-yarapa-imprement-demo"
}
```

A standalone Prettier config can reference the same package:

```json
"@yarapa/prettier-config-yarapa-imprement-demo"
```

Or re-export it from an ESM config:

```js
import yarapaPrettier from "@yarapa/prettier-config-yarapa-imprement-demo";

export default yarapaPrettier;
```

## Formatting contract

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

The package bundles `prettier-plugin-sh`, so shell scripts and Husky hook files use the same formatting contract.

## ESLint boundary

[`@yarapa/eslint-config-yarapa-imprement-demo`](../eslint-config-yarapa) is designed to work alongside this config.

Prettier owns layout formatting. ESLint owns diagnostics, code quality, semantic fixes, and non-conflicting structural rules. Run them as independent tools.

## Compatibility

| Surface       | Supported contract |
| :------------ | :----------------- |
| Node.js       | `>=24.15.0`        |
| Prettier      | `>=3.6.0 <4.0.0`   |
| Module format | ESM                |

## License

[MIT](../../LICENSE) © Yarapa
