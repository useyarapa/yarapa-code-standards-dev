import {defineConfig, globalIgnores} from "eslint/config";
import yarapa from "@yarapa/eslint-config-yarapa-imprement-demo";

export default defineConfig(
  globalIgnores([
    ".agents/**",
    ".claude/**",
    ".turbo/**",
    "**/dist/**",
    "**/fixtures/**",
    "**/build/**",
    "**/out/**",
    "**/coverage/**",
    "**/.next/**",
    "**/.turbo/**",
  ]),
  yarapa(),
  {
    name: "yarapa/dependency-cruiser-config",
    rules: {
      "sonarjs/file-name-differ-from-class": "off",
    },
    files: [".dependency-cruiser.ts"],
  },
);
