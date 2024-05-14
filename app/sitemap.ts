import { MetadataRoute } from "next";
import { getPostsMeta } from "./utils/blog";
import { getNewsMeta } from "./utils/news";
import { getShorts } from "./shorts/utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allPosts = getPostsMeta();
  const allNews = getNewsMeta();
  const shorts = await getShorts();

  const postsMap = allPosts.map((p) => ({
    url: `https://frontstack.pl/blog/${p.slug}`,
    lastModified: p.date,
  }));

  const newsMap = allNews.map((p) => ({
    url: `https://frontstack.pl/frontendowka/${p.slug}`,
    lastModified: p.date,
  }));

  const shortsMap = shorts.map((p) => ({
    url: `https://frontstack.pl/shorts/${p.slug}`,
    lastModified: p.date,
  }));

  return [
    {
      url: `https://frontstack.pl`,
    },
    {
      url: `https://frontstack.pl/blog`,
    },
    ...postsMap,
    ...newsMap,
    ...shortsMap,
    {
      url: `https://frontstack.pl/shorts`,
    },
    {
      url: `https://frontstack.pl/news/2024`,
    },
    {
      url: `https://frontstack.pl/zarobki`,
    },
    {
      url: `https://frontstack.pl/biblioteki`,
    },
  ];
}
