import {defineConfig} from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    include: ["test/**/*.test.ts"],
    coverage: {
      provider: "v8",
      exclude: ["src/**/*.d.ts"],
      include: ["src/**/*.ts"],
      reporter: [
        "text",
        "html",
        [
          "lcov",
          {
            projectRoot: "../..",
          },
        ],
      ],
    },
  },
});
