import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "app", "frontendowka", "news");

export type NewsMeta = {
  title: string;
  date: string;
  period: string;
  slug: string;
  ogTitles: string[];
};

export function getNewsMeta() {
  const filesNames = fs.readdirSync(postsDirectory);

  const postsMeta = filesNames.map((name) => {
    const meta = require(`../frontendowka/news/${name}`).meta as Omit<
      NewsMeta,
      "slug"
    >;

    return {
      slug: name.split(".")[0],
      ...meta,
    };
  });

  return postsMeta.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export const getNewsBySlug = (slugToFind: string) =>
  getNewsMeta().find(({ slug }) => slug === slugToFind);
