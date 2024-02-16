import { Tool } from "../type";
import { githubClient } from "./clients/github";
import { npmClient } from "./clients/npm";
import { columns } from "./table/columns";
import { DataTable } from "./table/DataTable";
import { getFilenames } from "../utils/getFilenames";
import { toolsNames } from "../dictionary";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

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
    <main>
      <div className="m-12 text-center">
        <Link className="text-white" href="/biblioteki">
          Lista bibliotek
        </Link>
        <h2 className="text-5xl mt-4">
          <span className="relative">
            {toolsNames[params.slug]}
            <Badge variant="secondary" className="absolute top-0 right-[-40px]">
              {tools.length}
            </Badge>
          </span>
        </h2>
      </div>
      <div className="container mx-auto py-10 animate-in fade-in slide-in-from-bottom-10 duration-500">
        <DataTable columns={columns} data={toolsWitData} />
      </div>
    </main>
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
