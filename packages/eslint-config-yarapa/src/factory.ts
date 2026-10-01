import type {Linter} from "eslint";

import {
  antfu,
  base,
  browser,
  eslintComments,
  importX,
  jsdoc,
  json,
  jsxA11y,
  markdown,
  nextjs,
  node,
  packageJson,
  perfectionist,
  prettier,
  promise,
  react,
  reactHooks,
  reactStylistic,
  regexp,
  sonarjs,
  stylistic,
  toml,
  typeChecked,
  typescript,
  unicorn,
  unicornReact,
  unusedImports,
  vitest,
  yaml,
  yarapa as yarapaConfig,
  yarapaReact,
} from "./configs";
import type {YarapaOptions} from "./factory.type";

/**
 * Compose the public Yarapa ESLint Flat Config.
 * Config capabilities stay independent; this factory owns their evaluation order.
 * @param options Project-context switches.
 * @returns The composed ESLint Flat Config array.
 */
export function yarapa(options: YarapaOptions = {}): Linter.Config[] {
  const {
    browser: isBrowserEnabled = false,
    nextjs: isNextjsEnabled = false,
    react: isReactOptionEnabled = false,
  } = options;

  const isReactProject = isNextjsEnabled || isReactOptionEnabled;
  const runtimeConfigs = isBrowserEnabled ? browser : node;

  const reactConfigs = isReactProject
    ? [...unicornReact, ...react, ...yarapaReact, ...jsxA11y, ...reactHooks]
    : [];

  const nextjsConfigs = isNextjsEnabled ? nextjs : [];
  const reactStylisticConfigs = isReactProject ? reactStylistic : [];

  return [
    ...antfu,
    ...base,
    ...yarapaConfig,
    ...eslintComments,
    ...promise,
    ...regexp,
    ...unusedImports,
    ...typescript,
    ...typeChecked,
    ...importX,
    ...sonarjs,
    ...jsdoc,
    ...unicorn,
    ...perfectionist,
    ...runtimeConfigs,
    ...reactConfigs,
    ...nextjsConfigs,
    ...vitest,
    ...json,
    ...markdown,
    ...packageJson,
    ...yaml,
    ...toml,
    ...prettier,
    ...stylistic,
    ...reactStylisticConfigs,
  ];
}
