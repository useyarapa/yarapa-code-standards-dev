import prettierCompat from "eslint-config-prettier/flat";
import type {Linter} from "eslint";

export const prettier: Linter.Config[] = [prettierCompat];
