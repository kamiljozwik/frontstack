const rehypePrettyCode = require("rehype-pretty-code");
const rehypePrettyCodeOptions = require("./pretty-code.js");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  experimental: {
    appDir: true,
    mdxRs: false,
  },
};

module.exports = withMDX(nextConfig);
