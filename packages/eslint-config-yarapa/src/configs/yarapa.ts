import yarapaPlugin from "@yarapa/eslint-plugin-yarapa-imprement-demo";
import type {Linter} from "eslint";

import {JAVASCRIPT_AND_TYPESCRIPT_FILES, REACT_FILES} from "../globs";

const yarapaRules: Linter.RulesRecord = {
  "yarapa/index-export-only": "error",
  "yarapa/no-lazy-identifiers": "error",
  "yarapa/object-curly-newline": "error",
};

const yarapaReactRules: Linter.RulesRecord = {
  "yarapa/component-module": "error",
  "yarapa/jsx-newline-between-elements": "error",
  "yarapa/jsx-no-newline-single-line-elements": "error",
  "yarapa/named-props": "error",
  "yarapa/props-in-body": "error",
};

export const yarapa: Linter.Config[] = [
  {
    files: JAVASCRIPT_AND_TYPESCRIPT_FILES,
    name: "yarapa",
    plugins: {
      yarapa: yarapaPlugin,
    },
    rules: yarapaRules,
  },
];

export const yarapaReact: Linter.Config[] = [
  {
    files: REACT_FILES,
    name: "yarapa/yarapa-react",
    plugins: {
      yarapa: yarapaPlugin,
    },
    rules: yarapaReactRules,
  },
];
