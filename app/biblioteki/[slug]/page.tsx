import { Tool } from "../data/type";
import { githubClient } from "./clients/github";
import { npmClient } from "./clients/npm";
import { columns } from "./table/columns";
import { DataTable } from "./table/DataTable";

type Props = {
  params: {
    slug: string;
  };
};

const getLibsData = async (tools: Tool[]) => {
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

  // TODO: handle duplicates
  return data;
};

// TODO: use SSG with revalidate
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
