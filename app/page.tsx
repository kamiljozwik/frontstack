import { Tags } from "./components/tags/Tags";
import { Hero } from "./components/hero/Hero";
import { PostLink } from "./components/postLink/PostLink";
import styles from "./page.module.scss";
import { getPostsMeta } from "./utils/blog";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import client from "@/tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { AnchorLink } from "@/mdx-components";
import { formatDate } from "@/utils/date";

export const revalidate = 43200; // Refresh data every 12h

export default async function Home() {
  const allPosts = getPostsMeta();

  const { data } = await client.queries.newsConnection({
    sort: "date",
    filter: {
      category: {
        eq: "news",
      },
    },
    last: 3,
  });
  const news = data.newsConnection.edges;

  return (
    <div className={styles.root}>
      <Hero />
      <main className={styles.main}>
        <section className="w-[60vw]">
          <h2 className="font-bold">Najnowsze wpisy</h2>
          {allPosts.slice(0, 5).map((post) => (
            <PostLink key={post.slug} post={post} />
          ))}
          <div className={styles.seeAllPosts}>
            <Button asChild variant="secondary">
              <Link href="/blog">Zobacz wszystkie wpisy</Link>
            </Button>
          </div>
        </section>
        <div className={styles.side}>
          <section>
            <h2 className="mb-0">Kategorie</h2>
            <Tags />
          </section>
          <section className="mt-4">
            <h2 className="mb-0">Newsy</h2>
            <ul className="list-none p-0 m-0">
              {news?.map((n) => (
                <li key={n?.cursor} className="flex flex-col">
                  <small className="text-gray-400">
                    {formatDate(n?.node?.date)}
                  </small>
                  <h3>{n?.node?.title}</h3>
                  <TinaMarkdown
                    content={n?.node?.body}
                    components={{
                      a: (props: any) => (
                        <AnchorLink href={props.url}>
                          {props.children}
                        </AnchorLink>
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
        </div>
      </main>
    </div>
  );
}
