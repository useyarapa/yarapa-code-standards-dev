import fridayPlugin from "@next-friday/eslint-plugin-friday";
import type {Linter} from "eslint";

import {JAVASCRIPT_AND_TYPESCRIPT_FILES, REACT_FILES} from "../globs";

const fridayRules: Linter.RulesRecord = {
  "friday/index-export-only": "error",
  "friday/no-lazy-identifiers": "error",
  "friday/object-curly-newline": "error",
};

const fridayReactRules: Linter.RulesRecord = {
  "friday/component-module": "error",
  "friday/jsx-newline-between-elements": "error",
  "friday/jsx-no-newline-single-line-elements": "error",
  "friday/named-props": "error",
  "friday/props-in-body": "error",
};

export const yarapa: Linter.Config[] = [
  {
    files: JAVASCRIPT_AND_TYPESCRIPT_FILES,
    name: "yarapa",
    plugins: {
      friday: fridayPlugin,
    },
    rules: fridayRules,
  },
];

export const yarapaReact: Linter.Config[] = [
  {
    files: REACT_FILES,
    name: "yarapa/yarapa-react",
    plugins: {
      friday: fridayPlugin,
    },
    rules: fridayReactRules,
  },
];
