import type { CodegenConfig } from "@graphql-codegen/cli";
import "dotenv/config";

const config: CodegenConfig = {
  schema: [
    {
      ["https://graphql.contentful.com/content/v1/spaces/" +
      process.env.CONTENTFUL_SPACE_ID]: {
        headers: {
          Authorization: `Bearer ${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}`,
        },
      },
    },
  ],
  documents: ["src/**/*.{ts,tsx}"],
  ignoreNoDocuments: true,
  generates: {
    "./src/gql/": {
      preset: "client",
      config: {
        documentMode: "string",
      },
    },
    "./src/gql/schema.graphql": {
      plugins: ["schema-ast"],
      config: {
        includeDirectives: true,
      },
    },
  },
};

export default config;
