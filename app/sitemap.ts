import { MetadataRoute } from "next";
import { getPostsMeta } from "./utils/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const allPosts = getPostsMeta();

  const postsMap = allPosts.map((p) => ({
    url: `https://frontstack.pl/blog/${p.slug}`,
    lastModified: p.date,
  }));

  return [
    {
      url: `https://frontstack.pl/blog`,
    },
    ...postsMap,
    {
      url: `https://frontstack.pl/frontendowka`,
    },
  ];
}
