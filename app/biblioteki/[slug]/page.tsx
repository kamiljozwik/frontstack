import path from "path";
import fs from "fs";
import { Tool } from "../type";
import { githubClient } from "./clients/github";
import { npmClient } from "./clients/npm";
import { columns } from "./table/columns";
import { DataTable } from "./table/DataTable";
import { getFilenames } from "../utils/getFilenames";

export const revalidate = 86400; // Refresh data every 24h

export async function generateStaticParams() {
  return getFilenames().map((tool) => ({ slug: tool }));
}

type Props = {
  params: {
    slug: string;
  };
};

export default async function LibPage({ params }: Props) {
  const { tools }: { tools: Tool[] } = await import(
    `../data/${params.slug}.ts`
  );

  const toolsWitData = await getLibsData(tools);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={toolsWitData} />
    </div>
  );
}

const getLibsData = async (tools: Tool[]) => {
  // TODO: handle duplicates
  const data = await Promise.all(
    tools.map(async (tool) => {
      const githubData = await githubClient(tool.github);
      const npmData = await npmClient(tool.npm);

      return {
        ...tool,
        githubData,
        npmData,
      };
    })
  );

  return data;
};
