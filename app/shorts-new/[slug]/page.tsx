import { Codeblock } from "@/components/codeblock/Codeblock";
import client from "@/tina/__generated__/client";
import { Metadata } from "next";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export async function generateStaticParams() {
  const shortsResponse = await client.queries.shortConnection();
  const slugs = shortsResponse?.data.shortConnection.edges?.map((short) => {
    return { slug: short?.node?._sys.filename };
  });

  return slugs ?? [];
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata> {
  const resp = await client.queries.short({
    relativePath: `${params.slug}.md`,
  });
  return { title: resp.data.short.title };
}

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
