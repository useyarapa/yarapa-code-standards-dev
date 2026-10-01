import {assert, describe, expect, it} from "vitest";
import path from "node:path";

import {eslintForConfigs, packageRoot} from "../helpers";
import yarapa from "../../src/index";

const COMPONENT_MODULE = "yarapa/component-module";
const HOME_COMPONENT = "export default function Home() { return <main />; }";
const SONAR_FILENAME_RULE = "sonarjs/file-name-differ-from-class";
const UNICORN_FILENAME_RULE = "unicorn/filename-case";
const projectRoot = path.resolve(packageRoot, "fixtures/projects/typed");
const componentFixture = path.resolve(projectRoot, "src/component.tsx");
const pageFixture = path.resolve(projectRoot, "src/app/blog/[slug]/page.tsx");
const routeFixture = path.resolve(projectRoot, "src/app/api/[id]/route.ts");

describe("Next.js project context", () => {
  it("treats Next.js TSX files as React files", async () => {
    const eslint = eslintForConfigs(
      yarapa({
        nextjs: true,
      }),
    );

    const source =
      "export default function Home({value}: {value: string}) { return <main>{value}</main>; }";

    const [result] = await eslint.lintText(source, {
      filePath: pageFixture,
    });

    assert(result);
    expect(result.messages.map(message => message.ruleId)).toContain("yarapa/props-in-body");
  });

  it("scopes framework filename exceptions to Next.js files", async () => {
    const eslint = eslintForConfigs(
      yarapa({
        nextjs: true,
      }),
    );

    const [pageResult] = await eslint.lintText(HOME_COMPONENT, {
      filePath: pageFixture,
    });

    const [componentResult] = await eslint.lintText(HOME_COMPONENT, {
      filePath: componentFixture,
    });

    assert(pageResult);
    assert(componentResult);

    const pageRules = pageResult.messages.map(message => message.ruleId);

    expect(pageRules).not.toContain(SONAR_FILENAME_RULE);
    expect(pageRules).not.toContain(UNICORN_FILENAME_RULE);
    expect(componentResult.messages.map(message => message.ruleId)).toContain(SONAR_FILENAME_RULE);
  });

  it("keeps Next.js exceptions disabled in React-only mode", async () => {
    const eslint = eslintForConfigs(
      yarapa({
        react: true,
      }),
    );

    const metadataSource = ['export const metadata = {title: "Home"};', HOME_COMPONENT, ""].join(
      "\n",
    );

    const [pageResult] = await eslint.lintText(HOME_COMPONENT, {
      filePath: pageFixture,
    });

    const [metadataResult] = await eslint.lintText(metadataSource, {
      filePath: pageFixture,
    });

    assert(pageResult);
    assert(metadataResult);
    expect(pageResult.messages.map(message => message.ruleId)).toContain(SONAR_FILENAME_RULE);
    expect(metadataResult.messages.map(message => message.ruleId)).toContain(COMPONENT_MODULE);
  });

  it("does not bundle the official Next.js plugin", () => {
    const pluginNames = yarapa({
      nextjs: true,
    }).flatMap(config => Object.keys(config.plugins ?? {}));

    expect(pluginNames).not.toContain("@next/next");
    expect(pluginNames).toContain("@typescript-eslint");
    expect(pluginNames).toContain("react-hooks");
    expect(pluginNames).toContain("jsx-a11y-x");
  });

  it("allows documented Next.js exports in TSX route components", async () => {
    const eslint = eslintForConfigs(
      yarapa({
        nextjs: true,
      }),
    );

    const source = [
      'export const metadata = {title: "Home"};',
      "export const revalidate = 60;",
      'export const dynamic = "force-static";',
      "export function generateMetadata() { return {title: 'Home'}; }",
      HOME_COMPONENT,
      "",
    ].join("\n");

    const [result] = await eslint.lintText(source, {
      filePath: pageFixture,
    });

    assert(result);
    expect(result.messages.map(message => message.ruleId)).not.toContain(COMPONENT_MODULE);
  });

  it("still rejects unrelated top-level code in Next.js component modules", async () => {
    const eslint = eslintForConfigs(
      yarapa({
        nextjs: true,
      }),
    );

    const source = [
      "const helper = 1;",
      "export default function Home() { return <main>{helper}</main>; }",
      "",
    ].join("\n");

    const [result] = await eslint.lintText(source, {
      filePath: pageFixture,
    });

    assert(result);
    expect(result.messages.map(message => message.ruleId)).toContain(COMPONENT_MODULE);
  });

  it("does not apply React component-module policy to route.ts", async () => {
    const eslint = eslintForConfigs(
      yarapa({
        nextjs: true,
      }),
    );

    const [result] = await eslint.lintText(
      "export function GET() { return Response.json({ok: true}); }\n",
      {
        filePath: routeFixture,
      },
    );

    assert(result);
    expect(result.fatalErrorCount).toBe(0);
    expect(result.messages.map(message => message.ruleId)).not.toContain(COMPONENT_MODULE);
  });
});
