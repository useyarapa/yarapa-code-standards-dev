# Changesets

Use Changesets for every externally visible publishable package change. A change with no package release impact belongs in the commit alone.

Create an entry from the repository root:

```sh
pnpm changeset
```

Before adding an entry, read the pending `.changeset/*.md` files and cover only changes not already recorded.

Write each entry so its release note stands alone:

- State affected rule names, severities, options, and file patterns explicitly.
- Include migration guidance for every breaking change.
- Name the change inline rather than pointing at an issue, pull request, or commit.

Choose the bump from the affected package's policy: [ESLint](../packages/eslint-config-yarapa/README.md#versioning), [Prettier](../packages/prettier-config-yarapa/README.md#versioning), or [Commitlint](../packages/commitlint-config-yarapa/README.md#versioning). All packages form one fixed group (`fixed` in `config.json`), sharing a single version: bumping any one bumps and publishes all of them to that version, even a package with no change of its own. Pick the highest bump the affected packages require.
