import type {Linter} from "eslint";

import {
  NEXTJS_APP_COMPONENT_FILES,
  NEXTJS_FRAMEWORK_FILES,
  NEXTJS_PAGE_COMPONENT_FILES,
} from "../globs";

const NEXTJS_APP_EXPORTS = [
  "dynamic",
  "dynamicParams",
  "fetchCache",
  "generateMetadata",
  "generateStaticParams",
  "generateViewport",
  "instant",
  "maxDuration",
  "metadata",
  "prefetch",
  "preferredRegion",
  "revalidate",
  "runtime",
  "viewport",
];

const NEXTJS_PAGE_EXPORTS = [
  "config",
  "getServerSideProps",
  "getStaticPaths",
  "getStaticProps",
  "reportWebVitals",
];

export const nextjs: Linter.Config[] = [
  {
    files: NEXTJS_FRAMEWORK_FILES,
    name: "yarapa/nextjs/framework-files",
    rules: {
      "sonarjs/file-name-differ-from-class": "off",
    },
  },
  {
    files: NEXTJS_APP_COMPONENT_FILES,
    name: "yarapa/nextjs/app-component-module",
    rules: {
      "friday/component-module": [
        "error",
        {
          allowDeclarations: NEXTJS_APP_EXPORTS,
        },
      ],
    },
  },
  {
    files: NEXTJS_PAGE_COMPONENT_FILES,
    name: "yarapa/nextjs/pages-component-module",
    rules: {
      "friday/component-module": [
        "error",
        {
          allowDeclarations: NEXTJS_PAGE_EXPORTS,
        },
      ],
    },
  },
];
