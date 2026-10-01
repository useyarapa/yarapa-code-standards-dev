import {assert, describe, expect, it} from "vitest";

import {eslint, javascriptFixture} from "./behavior.helper";

interface CalculatedConfig {
  rules: Record<string, readonly [number, ...unknown[]]>;
}

describe("Prettier ownership behavior", () => {
  it("leaves mechanical formatting to Prettier", async () => {
    const config = (await eslint.calculateConfigForFile(javascriptFixture)) as
      CalculatedConfig | undefined;

    assert(config);
    expect(config.rules["@stylistic/arrow-parens"]?.[0]).toBe(0);
    expect(config.rules["@stylistic/comma-dangle"]?.[0]).toBe(0);
    expect(config.rules["@stylistic/indent"]?.[0]).toBe(0);
    expect(config.rules["@stylistic/max-len"]?.[0]).toBe(0);
    expect(config.rules["@stylistic/object-curly-newline"]?.[0]).toBe(0);
    expect(config.rules["@stylistic/object-curly-spacing"]?.[0]).toBe(0);
    expect(config.rules["@stylistic/quotes"]?.[0]).toBe(0);
    expect(config.rules["@stylistic/semi"]?.[0]).toBe(0);
    expect(config.rules["unicorn/empty-brace-spaces"]?.[0]).toBe(0);
    expect(config.rules["unicorn/number-literal-case"]?.[0]).toBe(0);
    expect(config.rules["unicorn/template-indent"]?.[0]).toBe(0);
  });

  it("keeps non-Prettier policy active", async () => {
    const config = (await eslint.calculateConfigForFile(javascriptFixture)) as
      CalculatedConfig | undefined;

    assert(config);
    expect(config.rules["@stylistic/lines-between-class-members"]?.[0]).toBe(2);
    expect(config.rules["@stylistic/no-confusing-arrow"]?.[0]).toBe(2);
    expect(config.rules["@stylistic/no-mixed-operators"]?.[0]).toBe(2);
    expect(config.rules["@stylistic/padding-line-between-statements"]?.[0]).toBe(2);
    expect(config.rules["no-unexpected-multiline"]?.[0]).toBe(2);
    expect(config.rules["@stylistic/spaced-comment"]?.[0]).toBe(2);
    expect(config.rules["yarapa/object-curly-newline"]?.[0]).toBe(2);
  });

  it("keeps React structural policy active", async () => {
    const reactFixture = javascriptFixture.replace(/\.js$/u, ".jsx");

    const config = (await eslint.calculateConfigForFile(reactFixture)) as
      CalculatedConfig | undefined;

    assert(config);
    expect(config.rules["@stylistic/jsx-curly-brace-presence"]?.[0]).toBe(2);
    expect(config.rules["@stylistic/jsx-self-closing-comp"]?.[0]).toBe(2);
  });
});
