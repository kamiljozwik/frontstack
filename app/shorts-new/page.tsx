import Content from "./content.mdx";
import { PageHeader } from "../components/headers/Headers";
import style from "./shorts.module.scss";
import { ExternalLink } from "../components/externalLink/ExternalLink";
import client from "@/tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Codeblock } from "@/components/codeblock/Codeblock";
import Link from "next/link";

export const metadata = {
  title: "Frontend - użyteczne informacje",
  description:
    "Krótkie informacje / sztuczki / rozwiązania, które mogą Ci się przydać w codziennej pracy",
};

const Shorts = async () => {
  const sections = Content({}).props.children.filter(
    (c: any) => c.type === "section"
  );

  // const resp = await client.queries.short({
  //   relativePath: "Edycja-danych-z-API-w-DevTools.md",
  // });

  const shortsResponse = await client.queries.shortConnection({ sort: "date" });
  const shorts = shortsResponse?.data.shortConnection.edges?.map((short) => {
    return { slug: short?.node?._sys.filename, tags: short?.node?.tags };
  });

  console.log("shorts", shorts);

  return (
    <main
      className={style.root}
      style={{ counterReset: `section ${sections.length + 1}` }}
    >
      <PageHeader desc="Krótkie informacje / sztuczki / rozwiązania, które mogą Ci się przydać w codziennej pracy 😉">
        Shorts
      </PageHeader>
      {shorts?.map((el) => (
        <div key={el.slug}>
          <Link href={`/shorts/${el.slug}`}>{el.slug}</Link>
        </div>
      ))}
    </main>
  );
};

export default Shorts;
