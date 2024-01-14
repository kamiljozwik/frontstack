import { MetadataRoute } from "next";
import { getPostsMeta } from "./utils/blog";
import { getNewsMeta } from "./utils/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const allPosts = getPostsMeta();
  const allNews = getNewsMeta();

  const postsMap = allPosts.map((p) => ({
    url: `https://frontstack.pl/blog/${p.slug}`,
    lastModified: p.date,
  }));

  const newsMap = allNews.map((p) => ({
    url: `https://frontstack.pl/frontendowka/${p.slug}`,
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
    {
      url: `https://frontstack.pl/shorts`,
    },
    {
      url: `https://frontstack.pl/zarobki`,
    },
  ];
}
