import client from "@/tina/__generated__/client";
import { cache } from "react";

export const getShorts = cache(async () => {
  const shortsResponse = await client.queries.shortConnection({ sort: "date" });

  const shorts = shortsResponse?.data.shortConnection.edges?.map((short) => {
    return { slug: short?.node?._sys.filename, tags: short?.node?.tags };
  });

  return shorts ?? [];
});

export const getShort = cache(async (slug: string) => {
  const short = await client.queries.short({ relativePath: `${slug}.md` });
  return short;
});
