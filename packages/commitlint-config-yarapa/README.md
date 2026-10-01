# @yarapa/commitlint-config-yarapa

[![npm version](https://img.shields.io/npm/v/%40yarapa%2Fcommitlint-config-yarapa.svg?color=cb3837)](https://www.npmjs.com/package/@yarapa/commitlint-config-yarapa)
[![npm downloads](https://img.shields.io/npm/dm/%40yarapa%2Fcommitlint-config-yarapa.svg)](https://www.npmjs.com/package/@yarapa/commitlint-config-yarapa)
[![codecov](https://codecov.io/gh/useyarapa/yarapa-code-standards/branch/main/graph/badge.svg)](https://codecov.io/gh/useyarapa/yarapa-code-standards/branch/main)
[![node version](https://img.shields.io/badge/node-%3E%3D24.15.0%20%3C25-brightgreen.svg)](https://nodejs.org)
[![license](https://img.shields.io/npm/l/%40yarapa%2Fcommitlint-config-yarapa.svg)](../../LICENSE)

Commitlint configuration for Yarapa Conventional Commit messages.

## Installation

```sh
# pnpm
pnpm add -D @commitlint/cli @yarapa/commitlint-config-yarapa

# npm
npm install --save-dev @commitlint/cli @yarapa/commitlint-config-yarapa

# yarn
yarn add -D @commitlint/cli @yarapa/commitlint-config-yarapa

# bun
bun add -d @commitlint/cli @yarapa/commitlint-config-yarapa
```

## Requirements

| Tool            | Supported range |
| :-------------- | :-------------- |
| Node.js         | `>=24.15.0 <25` |
| @commitlint/cli | `>=19.0.0`      |

## Quick start

Create `.commitlintrc.json`:

```json
{
  "extends": ["@yarapa/commitlint-config-yarapa"]
}
```

Or re-export the config from `commitlint.config.mjs`:

```js
import yarapaCommitlint from "@yarapa/commitlint-config-yarapa";

export default yarapaCommitlint;
```

Add a script:

```json
{
  "scripts": {
    "commitlint": "commitlint --edit"
  }
}
```

Run:

```sh
pnpm commitlint
```

## Commit format

Use:

```text
<type>(<scope>): <subject>
```

Examples:

```text
feat(api): add booking endpoint
fix(ui): handle empty state
docs(readme): clarify installation
```

The scope is required and must be lowercase. The subject must be non-empty, must not end in a period, and is limited to 50 characters. `!` breaking-change syntax is not allowed.

Allowed types:

```text
build
chore
ci
docs
feat
fix
perf
refactor
revert
style
test
```

Commit bodies and footers are not allowed by this config.

## Enforced rules

| Rule                       | Requirement                              |
| :------------------------- | :--------------------------------------- |
| `body-empty`               | Commit body must be empty                |
| `footer-empty`             | Commit footer must be empty              |
| `scope-case`               | Scope must be lowercase                  |
| `scope-empty`              | Scope is required                        |
| `subject-empty`            | Subject is required                      |
| `subject-exclamation-mark` | `!` breaking-change syntax is prohibited |
| `subject-max-length`       | Subject is at most 50 characters         |
| `type-case`                | Type must be lowercase                   |
| `type-empty`               | Type is required                         |
| `type-enum`                | Type must be one of the allowed values   |

The extended Conventional Commits preset also rejects disallowed subject capitalization, trailing periods, oversized headers, and leading or trailing header whitespace.

## Git hook example

If your project uses a `commit-msg` hook, run Commitlint against the message file:

```sh
pnpm exec commitlint --edit "$1"
```

The hook mechanism is up to the consuming project; this package only provides the Commitlint policy.

## License

[MIT](https://github.com/useyarapa/yarapa-code-standards/blob/main/LICENSE) © Yarapa
