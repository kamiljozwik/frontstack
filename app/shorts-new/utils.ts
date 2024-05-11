import client from "@/tina/__generated__/client";
import { cache } from "react";

export const getShorts = cache(async () => {
  const shortsResponse = await client.queries.shortConnection({ sort: "date" });

  const shorts = shortsResponse?.data.shortConnection.edges?.map((short) => {
    return {
      slug: short?.node?._sys.filename,
      category: short?.node?.category,
      title: short?.node?.title,
    };
  });

  return shorts ?? [];
});

export const getShort = cache(async (slug: string) => {
  const short = await client.queries.short({ relativePath: `${slug}.md` });
  return short;
});

export const tagToName = (tag = "") => {
  switch (tag) {
    case "js":
      return "JavaScript";
    case "ts":
      return "TypeScript";
    case "tailwind":
      return "TailwindCSS";
    case "node":
      return "Node.js";
    default:
      return "Inne";
  }
};
