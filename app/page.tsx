import { Tags } from "./components/tags/Tags";
import { Hero } from "./components/hero/Hero";
import { PostLink } from "./components/postLink/PostLink";
import styles from "./page.module.scss";
import { getPostsMeta } from "./utils/blog";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const allPosts = getPostsMeta();

  return (
    <div className={styles.root}>
      <Hero />
      <main className={styles.main}>
        <section className="w-full md:w-[60vw]">
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
          {/* <NewsList /> */}
        </div>
      </main>
    </div>
  );
}
