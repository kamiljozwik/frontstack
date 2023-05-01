import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "app", "posts");

export type PostMeta = {
  title: string;
  seo_desc: string;
  short: string;
  date: string;
  tags: string[];
  slug: string;
};

export function getPostsMeta() {
  const folderNames = fs.readdirSync(postsDirectory);

  const postsMeta = folderNames.map((name) => {
    const meta = require(`../posts/${name}/content.mdx`).meta as Omit<
      PostMeta,
      "slug"
    >;

    return {
      slug: name,
      ...meta,
    };
  });

  return postsMeta;
}