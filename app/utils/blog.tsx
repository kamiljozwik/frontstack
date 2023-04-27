import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "app", "posts");

export type PostMeta = { date: string; title: string; slug: string };

export function getPostsMeta() {
  const fileNames = fs.readdirSync(postsDirectory);

  const postsMeta = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");

    const meta = require(`../posts/${fileName}`).meta as Omit<PostMeta, "slug">;

    return {
      slug,
      ...meta,
    };
  });

  return postsMeta;
}
