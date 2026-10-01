import {describe, expect, it} from "vitest";
import path from "node:path";

import {eslintForConfigs, packageRoot} from "../helpers";
import yarapa from "../../src/index";

const untypedFixture = path.resolve(packageRoot, "fixtures/projects/untyped/index.js");

describe("runtime boundaries", () => {
  it("selects exactly one runtime context", async () => {
    const nodeEslint = eslintForConfigs(yarapa());

    const browserEslint = eslintForConfigs(
      yarapa({
        browser: true,
      }),
    );

    const [nodeBufferResult] = await nodeEslint.lintText(
      'export const encoded = Buffer.from("value").toString("base64");\n',
      {
        filePath: untypedFixture,
      },
    );

    const [nodeDocumentResult] = await nodeEslint.lintText(
      'export const found = document.querySelector("main");\n',
      {
        filePath: untypedFixture,
      },
    );

    const [browserDocumentResult] = await browserEslint.lintText(
      'export const found = document.querySelector("main");\n',
      {
        filePath: untypedFixture,
      },
    );

    const [browserBufferResult] = await browserEslint.lintText(
      'export const encoded = Buffer.from("value").toString("base64");\n',
      {
        filePath: untypedFixture,
      },
    );

    expect(nodeBufferResult?.messages.map(message => message.ruleId)).not.toContain("no-undef");
    expect(nodeDocumentResult?.messages.map(message => message.ruleId)).toContain("no-undef");

    expect(browserDocumentResult?.messages.map(message => message.ruleId)).not.toContain(
      "no-undef",
    );

    expect(browserBufferResult?.messages.map(message => message.ruleId)).toContain("no-undef");
  });
});
