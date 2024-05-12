import client from "@/tina/__generated__/client";
import { categoriesShort } from "@/tina/dictionaries";
import { cache } from "react";

export const getShorts = cache(async () => {
  const shortsResponse = await client.queries.shortConnection({ sort: "date" });

  const shorts = shortsResponse?.data.shortConnection.edges
    ?.map((short) => {
      return {
        slug: short?.node?._sys.filename,
        category: short?.node?.category,
        title: short?.node?.title,
        date: short?.node?.date,
      };
    })
    .reverse();

  return shorts ?? [];
});

export const getShort = cache(async (slug: string) => {
  const short = await client.queries.short({ relativePath: `${slug}.md` });
  return short;
});

export const valueToLabel = (value = "") => {
  const def = "Other";
  const cat = categoriesShort.find((category) =>
    typeof category !== "string" ? category.value === value : { label: def }
  );

  return typeof cat !== "string" ? cat?.label ?? def : def;
};
