<!-- Use `<type>(<scope>): <subject>` for this pull request title. Repository workflows validate it against the Conventional Commits title policy. -->

## Description

<!-- Describe the changes proposed in this pull request and the rationale behind them. -->

## Related issue

<!-- Reference a verified related issue (e.g. Closes #123), or write "None". -->

## Type of change

<!-- Mark the relevant option with [x]. -->

- [ ] `build`: Build-system or packaging infrastructure change
- [ ] `chore`: Maintenance or dependency update
- [ ] `ci`: CI or automation change
- [ ] `docs`: Documentation or README update
- [ ] `feat`: New backward-compatible package capability
- [ ] `fix`: Compatible bug fix or package-policy correction
- [ ] `perf`: Performance improvement
- [ ] `refactor`: Internal code or test refactoring without observable behavior changes
- [ ] `revert`: Revert of an earlier change
- [ ] `style`: Non-semantic source-style change
- [ ] `test`: Test-only change

<!-- A breaking consumer contract uses a valid title type above and records `major` in its changeset; `breaking` is not a commitlint type. -->

## Contributor checklist

<!-- Confirm compliance with repository standards. -->

- [ ] Changes adhere to repository guidelines and preserve package boundaries.
- [ ] Tests were added or updated when required by the changed observable contract.

## Verification

<!-- List checks that ran locally and their results. State which checks remain delegated to Git hooks or CI. -->

## Release intent & Changeset

<!-- Select exactly one option based on the affected package release policy: -->

- [ ] A package change that requires a release is covered by an existing pending changeset or includes a new `.changeset/*.md` entry.
- [ ] The package change has no release impact: no changeset is required.
- [ ] Only documentation, CI workflows, or repository tooling changed: no changeset is required.
