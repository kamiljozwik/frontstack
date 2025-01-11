import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { AnchorLink } from "@/mdx-components";
import { formatDate } from "@/utils/date";
import { getNews } from "../../news/utils";

export const NewsList = async () => {
  const news = await getNews({
    sort: "date",
    filter: {
      category: {
        eq: "news",
      },
    },
    last: 3,
  });

  return (
    <section className="mt-4">
      <h2 className="mb-0">Newsy</h2>
      <ul className="list-none p-0 m-0">
        {news?.map((n) => (
          <li key={n?.cursor} className="flex flex-col">
            <small className="text-gray-400">{formatDate(n?.node?.date)}</small>
            <h3>{n?.node?.title}</h3>
            <TinaMarkdown
              content={n?.node?.body}
              components={{
                a: (props: any) => (
                  <AnchorLink href={props.url}>{props.children}</AnchorLink>
                ),
              }}
            />
          </li>
        ))}
      </ul>
      <Button asChild variant="secondary" className="">
        <Link href="/news">Zobacz wszystkie newsy</Link>
      </Button>
    </section>
  );
};
