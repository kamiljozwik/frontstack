import { Codeblock } from "@/components/codeblock/Codeblock";
import client from "@/tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";

const ShortDetails = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const resp = await client.queries.short({
    relativePath: `${params.slug}.md`,
  });

  const components = {
    code_block: (props: any) => {
      return <Codeblock language={props.lang}>{props.value}</Codeblock>;
    },
  };

  return (
    <div>
      <h1>{resp.data.short.title}</h1>
      <TinaMarkdown content={resp.data.short.body} components={components} />
    </div>
  );
};

export default ShortDetails;
