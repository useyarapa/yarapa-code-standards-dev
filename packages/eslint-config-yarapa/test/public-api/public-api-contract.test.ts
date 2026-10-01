import {describe, expect, it} from "vitest";

describe("public API", () => {
  it("exports the canonical config factory", async () => {
    const module = await import("../../src/index.ts");

    expect(Object.keys(module)).toEqual(["default"]);
    expect(module.default).toEqual(expect.any(Function));
    expect(module.default()).toEqual(expect.any(Array));
  });

  it("keeps company policy mandatory and project context explicit", async () => {
    const {default: yarapa} = await import("../../src/index.ts");
    const defaultNames = yarapa().map(config => config.name);

    const browserReactNames = yarapa({
      browser: true,
      react: true,
    }).map(config => config.name);

    expect(defaultNames).toContain("yarapa/node");
    expect(defaultNames).toContain("yarapa/vitest");
    expect(defaultNames).toContain("yarapa/json");
    expect(defaultNames).toContain("yarapa/markdown");
    expect(defaultNames).toContain("yarapa/package-json");
    expect(defaultNames).toContain("yarapa/yaml");
    expect(defaultNames).toContain("yarapa/toml");
    expect(defaultNames).not.toContain("yarapa/browser/globals");
    expect(defaultNames).not.toContain("yarapa/react");
    expect(defaultNames).not.toContain("yarapa/yarapa-react");
    expect(defaultNames).not.toContain("yarapa/jsx-a11y");
    expect(defaultNames).not.toContain("yarapa/react-hooks");
    expect(browserReactNames).not.toContain("yarapa/node");
    expect(browserReactNames).toContain("yarapa/browser/globals");
    expect(browserReactNames).toContain("yarapa/react");
    expect(browserReactNames).toContain("yarapa/yarapa-react");
    expect(browserReactNames).toContain("yarapa/jsx-a11y");
    expect(browserReactNames).toContain("yarapa/react-hooks");
  });
});
