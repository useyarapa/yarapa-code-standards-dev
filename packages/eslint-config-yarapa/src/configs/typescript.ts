import {parser as typescriptParser, plugin as typescriptPlugin} from "typescript-eslint";
import type {Linter} from "eslint";

import {TYPESCRIPT_FILES} from "../globs";

const typescriptRules: Linter.RulesRecord = {
  "@typescript-eslint/ban-ts-comment": "error",
  "@typescript-eslint/default-param-last": "error",
  "@typescript-eslint/no-array-constructor": "error",
  "@typescript-eslint/no-dupe-class-members": "error",
  "@typescript-eslint/no-duplicate-enum-values": "error",
  "@typescript-eslint/no-empty-object-type": "error",
  "@typescript-eslint/no-explicit-any": "error",
  "@typescript-eslint/no-extra-non-null-assertion": "error",
  "@typescript-eslint/no-misused-new": "error",
  "@typescript-eslint/no-namespace": "error",
  "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
  "@typescript-eslint/no-redeclare": "error",
  "@typescript-eslint/no-require-imports": "error",
  "@typescript-eslint/no-shadow": "error",
  "@typescript-eslint/no-this-alias": "error",
  "@typescript-eslint/no-unnecessary-type-constraint": "error",
  "@typescript-eslint/no-unsafe-declaration-merging": "error",
  "@typescript-eslint/no-unsafe-function-type": "error",
  "@typescript-eslint/no-useless-constructor": "error",
  "@typescript-eslint/no-wrapper-object-types": "error",
  "@typescript-eslint/prefer-as-const": "error",
  "@typescript-eslint/prefer-namespace-keyword": "error",
  "@typescript-eslint/triple-slash-reference": "error",
  "constructor-super": "off",
  "default-param-last": "off",
  "dot-notation": "off",
  "getter-return": "off",
  "no-array-constructor": "off",
  "no-class-assign": "off",
  "no-const-assign": "off",
  "no-dupe-args": "off",
  "no-dupe-class-members": "off",
  "no-dupe-keys": "off",
  "no-empty-function": "off",
  "no-func-assign": "off",
  "no-implied-eval": "off",
  "no-import-assign": "off",
  "no-new-native-nonconstructor": "off",
  "no-obj-calls": "off",
  "no-redeclare": "off",
  "no-setter-return": "off",
  "no-shadow": "off",
  "no-this-before-super": "off",
  "no-throw-literal": "off",
  "no-undef": "off",
  "no-unreachable": "off",
  "no-unsafe-negation": "off",
  "no-unused-expressions": "off",
  "no-unused-vars": "off",
  "no-use-before-define": "off",
  "no-useless-constructor": "off",
  "no-with": "off",
  "prefer-promise-reject-errors": "off",
  "unused-imports/no-unused-vars": "off",
  "@typescript-eslint/no-empty-function": [
    "error",
    {
      allow: ["arrowFunctions", "functions", "methods"],
    },
  ],
  "@typescript-eslint/no-unused-expressions": [
    "error",
    {
      allowShortCircuit: false,
      allowTaggedTemplates: false,
      allowTernary: false,
    },
  ],
  "@typescript-eslint/no-unused-vars": [
    "error",
    {
      args: "after-used",
      vars: "all",
      ignoreRestSiblings: true,
    },
  ],
  "@typescript-eslint/no-use-before-define": [
    "error",
    {
      classes: true,
      functions: true,
      variables: true,
    },
  ],
};

export const typescript: Linter.Config[] = [
  {
    files: TYPESCRIPT_FILES,
    name: "yarapa/typescript",
    languageOptions: {
      parser: typescriptParser,
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
    },
    rules: typescriptRules,
  },
];
