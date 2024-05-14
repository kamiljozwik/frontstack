import client from "@/tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { formatDate } from "@/utils/date";
import { AnchorLink } from "@/mdx-components";
import { PageHeader } from "@/app/components/headers/Headers";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Badge } from "@/components/ui/badge";

export const revalidate = 43200; // Refresh data every 12h

export const metadata = {
  title: "Wiadomości oraz ciekawe artykuły",
  description:
    "Nowości oraz polecane artykuły ze świata frontend oraz web development",
};

export async function generateStaticParams() {
  const yearNow = new Date().getFullYear();
  const years = [];

  for (let i = 2024; i <= yearNow; i++) {
    years.push({ year: i.toString() });
  }

  return years;
}

const News = async ({ params }: { params: { year: string } }) => {
  const yearNow = new Date().getFullYear();

  if (Number(params.year) > yearNow) {
    return (
      <div className="flex flex-col items-center justify-center mt-10">
        <Image
          src="/assets/img/future.webp"
          width={400}
          height={400}
          alt={"Back to the future"}
        />
        <p className="text-2xl font-bold uppercase text-center">
          Tego jeszcze nie wiemy 🙂
        </p>
      </div>
    );
  } else if (Number(params.year) < 2024) {
    redirect("/news");
  }

  const { data } = await client.queries.newsConnection({
    sort: "date",
    filter: {
      date: {
        after: new Date(Number(params.year), 0, 1, 0, 0, 0).toISOString(),
        before: new Date(Number(params.year), 11, 31, 23, 59, 59).toISOString(),
      },
    },
  });

  type Edges = typeof data.newsConnection.edges;

  const allNewsByMonth =
    data.newsConnection.edges?.reverse().reduce((acc, curr) => {
      const month = new Intl.DateTimeFormat("pl-PL", { month: "long" }).format(
        new Date(curr?.node?.date ?? "")
      );

      const monthIndex = acc.findIndex((group: any) => group.month === month);

      if (monthIndex === -1) {
        return [...acc, { month, news: [curr] }];
      }
      return [
        ...acc.slice(0, monthIndex),
        {
          month,
          // @ts-expect-error
          news: [...acc[monthIndex].news, curr],
        },
        ...acc.slice(monthIndex + 1),
      ];
    }, [] as { month: string; news: Edges }[]) ?? [];

  return (
    <main>
      <PageHeader desc="Co nowego w świecie web developmentu?">
        WebDev News
      </PageHeader>
      {allNewsByMonth.map((group) => (
        <div key={group.month}>
          <div className="inline-block uppercase py-2 px-4 border-2 border-gray-500 rounded-lg ">
            {group.month}
          </div>
          <section className="">
            {group.news?.map((edge, i) => (
              <div
                key={edge?.cursor}
                className="grid grid-cols-[50px_auto] m-0 p-0 [&>div]:last:text-red-500"
              >
                <hr className="w-1 h-4 bg-gray-500 border-0 col-start-1 row-start-1 justify-self-center" />
                <div className="col-start-1 row-start-2 justify-self-center">
                  <div className="w-[22px] h-[22px] rounded-full bg-gray-500" />
                </div>
                <div className="col-start-2 row-start-2 self-center flex gap-2">
                  <Badge variant="outline">
                    <time
                      dateTime={edge?.node?.date}
                      className="font-medium text-xs"
                    >
                      {formatDate(edge?.node?.date)}
                    </time>
                  </Badge>
                  <Badge
                    variant={
                      edge?.node?.category === "news" ? "default" : "secondary"
                    }
                  >
                    {edge?.node?.category === "news" ? "News" : "Artykuł"}
                  </Badge>
                </div>
                <article className="row-start-3 col-start-2 pt-2 pb-8">
                  <h2 className="mb-0">{edge?.node?.title}</h2>
                  <div className="text-gray-300">
                    <TinaMarkdown content={edge?.node?.body} />
                  </div>
                  <div>
                    <ul className="m-0 mt-[-10px] p-0 list-none">
                      {edge?.node?.links?.map((link) => {
                        const url = link?.includes("https")
                          ? link
                          : `https://${link}`;

                        return url ? (
                          <li key={url} className="p-0 m-0">
                            <AnchorLink href={url}>
                              {url.replace("https://", "")}
                            </AnchorLink>
                          </li>
                        ) : null;
                      })}
                    </ul>
                  </div>
                </article>
                <hr className="w-1 h-full bg-gray-500 border-0 justify-self-center col-start-1 row-start-3" />
              </div>
            ))}
          </section>
        </div>
      ))}
    </main>
  );
};

export default News;
