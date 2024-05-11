import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "master";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "short",
        label: "Shorts",
        path: "content/shorts",
        defaultItem: () => {
          return {
            date: new Date(),
          };
        },
        ui: {
          filename: {
            readonly: false,
            slugify: (values) => slug(values.title),
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            name: "tags",
            label: "Tags",
            type: "string",
            list: true,
            required: true,
            options: [
              {
                value: "js",
                label: "JavaScript",
              },
              {
                value: "ts",
                label: "TypeScript",
              },
              {
                value: "misc",
                label: "Other",
              },
            ],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});

function slug(input = ""): string {
  const polishMap: { [key: string]: string } = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
  };

  let slug = input.toLowerCase();

  slug = slug
    .split("")
    .map((char) => polishMap[char] || char)
    .join("");

  slug = slug.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, "");

  return slug.toLowerCase();
}
