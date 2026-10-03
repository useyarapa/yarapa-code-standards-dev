# Yarapa Code Standards

[![CI](https://github.com/useyarapa/yarapa-code-standards-dev/actions/workflows/ci.yml/badge.svg)](https://github.com/useyarapa/yarapa-code-standards-dev/actions/workflows/ci.yml) [![Codecov](https://codecov.io/gh/useyarapa/yarapa-code-standards-dev/branch/main/graph/badge.svg)](https://codecov.io/gh/useyarapa/yarapa-code-standards-dev/branch/main) [![License](https://img.shields.io/github/license/useyarapa/yarapa-code-standards-dev.svg)](LICENSE)

One shared engineering contract for linting, formatting, and commit history across Yarapa JavaScript and TypeScript repositories.

Encode policy once. Keep repository behavior deterministic without rebuilding the same standards in every codebase.

## Packages

| Package                                                                                | Purpose                                                                                                                          |
| :------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| [`@yarapa/eslint-config-yarapa-imprement-demo`](packages/eslint-config-yarapa)         | Strict ESLint Flat Config for JavaScript, TypeScript, React, Next.js, Node.js, browser projects, tests, and common data formats. |
| [`@yarapa/prettier-config-yarapa-imprement-demo`](packages/prettier-config-yarapa)     | Shared Prettier configuration, including shell formatting.                                                                       |
| [`@yarapa/commitlint-config-yarapa-imprement-demo`](packages/commitlint-config-yarapa) | Conventional Commit policy for commit messages.                                                                                  |

## Usage

### ESLint

```js
import yarapa from "@yarapa/eslint-config-yarapa-imprement-demo";

export default yarapa();
```

Node.js is the default runtime context. Opt into project context explicitly:

```js
export default yarapa({
  browser: true,
  react: true,
});
```

`nextjs: true` implies React but does not enable browser globals.

### Prettier

```json
{
  "prettier": "@yarapa/prettier-config-yarapa-imprement-demo"
}
```

The package can also be referenced from a Prettier config file.

### Commitlint

```json
{
  "extends": ["@yarapa/commitlint-config-yarapa-imprement-demo"]
}
```

The commit contract is `<type>(<scope>): <subject>`; scope is required and lowercase.

## Compatibility

| Tool            | Supported range  |
| :-------------- | :--------------- |
| Node.js         | `>=24.15.0 <25`  |
| ESLint          | `^10.4.0`        |
| TypeScript      | `>=4.8.4 <6.1.0` |
| Prettier        | `>=3.6.0 <4.0.0` |
| @commitlint/cli | `>=19.0.0`       |

See each package README for its complete public contract and behavior.

## License

[MIT](LICENSE) © Yarapa
