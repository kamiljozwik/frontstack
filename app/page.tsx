import { Tags } from "./components/tags/Tags";
import { Hero } from "./components/hero/Hero";
import { PostLink } from "./components/postLink/PostLink";
import styles from "./page.module.scss";
import { getPostsMeta } from "./utils/blog";
import Link from "next/link";
import { getNewsMeta } from "./utils/news";
import { Button } from "@/components/ui/button";

export default function Home() {
  const allPosts = getPostsMeta();
  const news = getNewsMeta().slice(0, 3);

  return (
    <div className={styles.root}>
      <Hero />
      <main className={styles.main}>
        <section className="w-[60vw]">
          <h2>NAJNOWSZE WPISY</h2>
          {allPosts.slice(0, 5).map((post) => (
            <PostLink key={post.slug} post={post} />
          ))}
          <div className={styles.seeAllPosts}>
            <Button asChild>
              <Link href="/blog">Zobacz wszystkie wpisy</Link>
            </Button>
          </div>
        </section>
        <div className={styles.side}>
          <section>
            <h2>KATEGORIE</h2>
            <Tags />
          </section>
          <section className="mt-4">
            <h2>FRONTENDÓWKA</h2>
            <ul className="list-none p-0">
              {news.map((news) => (
                <li key={news.date} className="flex flex-col mt-2">
                  <small className="text-gray-400">{news.period}</small>
                  <Link
                    className="text-white"
                    href={`/frontendowka/${news.slug}`}
                  >
                    {news.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
