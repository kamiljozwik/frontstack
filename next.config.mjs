import rehypePrettyCode from "rehype-pretty-code";
import rehypePrettyCodeOptions from "./pretty-code.js";
import createMDX from "@next/mdx";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behaviour: "append",
          properties: {
            ariaHidden: true,
            tabIndex: -1,
          },
        },
      ],
      [rehypePrettyCode, rehypePrettyCodeOptions],
    ],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  experimental: {
    mdxRs: false,
  },
  async redirects() {
    return [
      ...oldPosts,
      {
        source: `/til`,
        destination: `/shorts/`,
        permanent: true,
      },
    ];
  },
};

export default withMDX(nextConfig);

const oldPosts = [
  "adapter-design-pattern",
  "aws-dla-front-end-developera",
  "baw-sie-i-programuj",
  "chain-of-responsibility",
  "command-design-pattern",
  "constructor-design-pattern",
  "czym-jest-local-storage-i-jak-uzywac",
  "decorator-design-pattern",
  "docker-dockerfile-tworzenie-obrazow",
  "docker-komendy",
  "docker-wprowadzenie",
  "facade-design-pattern",
  "flyweight-design-pattern",
  "hosting-stron-i-aplikacji-webowych",
  "jak-zostac-front-end-developerem",
  "javascript-i-ecmascript",
  "javascript-zmienne-css",
  "klasy-javascript",
  "licencje-open-source",
  "lokalizacja-uzytkownika",
  "mediator-design-pattern",
  "module-design-pattern",
  "obiekty-javascript-podstawy",
  "observer-design-pattern",
  "praca-z-git-git-flow",
  "praca-z-git-github-flow",
  "prototypy-i-dziedziczenie-javascript",
  "redux-thunk-w-aplikacjach-react",
  "rodzaje-testow-automatycznych",
  "service-worker",
  "simple-factory",
  "singleton-design-pattern",
  "wprowadzenie-do-aws",
  "wstep-do-progressive-web-apps",
  "wzorce-projektowe-javascript",
].map((slug) => ({
  source: `/${slug}`,
  destination: `/blog/${slug}/`,
  permanent: true,
}));
