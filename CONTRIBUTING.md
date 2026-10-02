# Contributing to Yarapa Code Standards

Thank you for contributing to Yarapa Code Standards.

This pnpm workspace publishes `@yarapa/eslint-config-yarapa-imprement-demo` under `packages/eslint-config-yarapa/`, `@yarapa/prettier-config-yarapa-imprement-demo` under `packages/prettier-config-yarapa/`, and `@yarapa/commitlint-config-yarapa-imprement-demo` under `packages/commitlint-config-yarapa/`.

## Code of Conduct

Review and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## Prerequisites

- Node.js matching `.nvmrc` (active LTS: `>=24.15.0 <25`)
- pnpm matching root `package.json#packageManager` via Corepack

Install dependencies from the repository root:

```sh
corepack enable
pnpm install
```

## Quality Standards

- Resolve lint, type, test, and formatting failures at their root cause rather than adding inline suppression directives.
- Keep exports, dependencies, and implementation live; remove dead code instead of retaining placeholders.
- Edit source under `packages/*/src/`, tests in each package's existing `test/` directory, and ESLint fixtures under `packages/eslint-config-yarapa/fixtures/`.
- Treat `packages/*/dist/` as generated output.

## Verification

Human contributors can use these repository commands when needed:

- Complete repository verification contract: `pnpm verify`
- Repository lint with fixes, including root TypeScript configs: `pnpm lint`
- Repository lint check, including root TypeScript configs: `pnpm lint:check`
- Type check for root configs and all packages: `pnpm typecheck`
- Unit and behavior tests: `pnpm test`
- Formatting and EditorConfig check: `pnpm format:check`
- Dead-code analysis: `pnpm knip`
- Dependency architecture: `pnpm depcruise`
- Peer dependency contract: `pnpm peers:check`
- Package manifest/files validation: `pnpm check:publint`
- Package type-resolution validation: `pnpm check:attw`

Select checks that match the changed contract:

- ESLint policy rules, options, or scopes require configuration and observable diagnostic coverage. Dependency upgrades must not silently adopt newly added upstream preset rules.
- Documentation changes require manual review of local file and anchor references plus formatting inspection with `pnpm format:check`. The pre-commit hook formats staged Markdown but does not validate links. Docs-only changes are excluded from the heavy CI jobs, so record the manual link review and formatting check in the PR verification notes.

## Release Intent

Follow [`.changeset/README.md`](.changeset/README.md) for package release intent.

## Pull Requests

- Use `<type>(<scope>): <subject>` for commit messages and pull request titles. The commit-msg hook applies the full [shared Commitlint rules](packages/commitlint-config-yarapa/README.md#enforced-rules). The [pull request title workflow](.github/workflows/validate-pr-title.yml) enforces the supported subset: allowed type, required lowercase scope, and a subject length of 1–50 characters.
- Keep each pull request focused on one change or cohesive feature.
- Describe the change and record checks that actually ran, including their results.
- Leave checks owned by Git hooks or CI unreported as local successes.
- When squash-merging, keep the resulting commit subject within the shared policy: lowercase first word, no trailing period, no `!` breaking-change syntax, and at most 50 characters. The title workflow does not enforce Commitlint's `subject-case`, `subject-full-stop`, or `subject-exclamation-mark`; those remain the author's responsibility.
- Adding the `preview` label to a pull request publishes preview builds of the three packages through the [Preview workflow](.github/workflows/preview.yml).
