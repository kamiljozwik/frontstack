import client from "@/tina/__generated__/client";
import { unstable_cache } from "next/cache";

type Config = Parameters<typeof client.queries.newsConnection>[0];

export const getNews = unstable_cache(
  async (config: Config) => {
    const { data } = await client.queries.newsConnection(config);
    return data.newsConnection.edges;
  },
  ["news"],
  {
    tags: ["news"],
  }
);
