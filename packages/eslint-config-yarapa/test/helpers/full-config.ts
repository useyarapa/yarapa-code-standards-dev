import type {Linter} from "eslint";

import yarapa from "../../src/index.ts";

export const fullConfig: Linter.Config[] = yarapa({
  react: true,
});
