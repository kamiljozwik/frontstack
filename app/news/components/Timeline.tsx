import { TinaMarkdown } from "tinacms/dist/rich-text";
import { formatDate } from "@/utils/date";
import { AnchorLink } from "@/mdx-components";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getNews } from "../utils";

type Props = {
  year: string;
  type?: string;
};
export const Timeline = async ({ year, type }: Props) => {
  const yearNow = new Date().getFullYear();

  if (Number(year) > yearNow) {
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
  } else if (Number(year) < 2024) {
    redirect("/news");
  }

  const edges = await getNews({
    sort: "date",
    filter: {
      category: type
        ? {
            eq: type,
          }
        : undefined,
      date: {
        after: new Date(Number(year), 0, 1, 0, 0, 0).toISOString(),
        before: new Date(Number(year), 11, 31, 23, 59, 59).toISOString(),
      },
    },
  });

  type Edges = typeof edges;

  const allNewsByMonth =
    edges?.reverse().reduce((acc, curr) => {
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
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        <Button variant={!type ? "default" : "secondary"} asChild>
          <Link href={`/news/${year}`}>Wszystko</Link>
        </Button>
        <Button variant={type === "news" ? "default" : "secondary"} asChild>
          <Link href={`/news/${year}/news`}>Tylko newsy</Link>
        </Button>
        <Button variant={type === "article" ? "default" : "secondary"} asChild>
          <Link href={`/news/${year}/article`}>Tylko artykuły</Link>
        </Button>
      </div>

      <div>
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
                        edge?.node?.category === "news"
                          ? "default"
                          : "secondary"
                      }
                    >
                      {edge?.node?.category === "news" ? "News" : "Artykuł"}
                    </Badge>
                  </div>
                  <article className="row-start-3 col-start-2 pt-2 pb-8 overflow-hidden">
                    <h2 className="mb-0">{edge?.node?.title}</h2>
                    <div className="text-gray-300">
                      <TinaMarkdown
                        content={edge?.node?.body}
                        components={{
                          a: (props: any) => (
                            <AnchorLink href={props.url}>
                              {props.children}
                            </AnchorLink>
                          ),
                        }}
                      />
                    </div>
                    <div className="m-0 mt-[-16px] p-0">
                      {edge?.node?.links?.map((link) => {
                        const url = link?.includes("https")
                          ? link
                          : `https://${link}`;

                        return url ? (
                          <div key={url} className="truncate">
                            <AnchorLink href={url}>
                              <div className="flex gap-1 items-center active:border">
                                {url.includes("youtube.com") ? null : (
                                  <Image
                                    width={12}
                                    height={12}
                                    src="/assets/icons/external-link.svg"
                                    alt=""
                                    className="ml-1"
                                  />
                                )}
                                {url
                                  .replace("https://", "")
                                  .replace("www.", "")}
                              </div>
                            </AnchorLink>
                          </div>
                        ) : null;
                      })}
                    </div>
                  </article>
                  <hr className="w-1 h-full bg-gray-500 border-0 justify-self-center col-start-1 row-start-3" />
                </div>
              ))}
            </section>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Button asChild>
          <Link href={`/frontendowka`}>
            Zobacz poprzednie wydania Frontendówki
          </Link>
        </Button>
      </div>
    </div>
  );
};
