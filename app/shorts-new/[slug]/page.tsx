import { Codeblock } from "@/components/codeblock/Codeblock";
import { Metadata } from "next";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { getShort, getShorts } from "../utils";

export const revalidate = 43200; // Refresh data every 12h

export async function generateStaticParams() {
  const shorts = await getShorts();
  return shorts;
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata> {
  const resp = await getShort(params.slug);
  return { title: resp.data.short.title };
}

const ShortDetails = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const resp = await getShort(params.slug);

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
