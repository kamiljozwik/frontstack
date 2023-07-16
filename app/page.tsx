import { Tags } from "./components/tags/Tags";
import { Hero } from "./components/hero/Hero";
import { PostLink } from "./components/postLink/PostLink";
import styles from "./page.module.scss";
import { getPostsMeta } from "./utils/blog";
import Link from "next/link";

export default function Home() {
  const allPosts = getPostsMeta();

  return (
    <div className={styles.root}>
      <Hero />
      <main className={styles.main}>
        <section className={styles.postsList}>
          <h2>NAJNOWSZE WPISY</h2>
          <div>
            {allPosts.slice(0, 5).map((post) => (
              <PostLink key={post.slug} post={post} />
            ))}
          </div>
          <div className={styles.seeAllPosts}>
            <Link href="/blog">Zobacz wszystkie wpisy</Link>
          </div>
        </section>
        <div className={styles.side}>
          <section>
            <h2>KATEGORIE</h2>
            <Tags />
          </section>
        </div>
      </main>
    </div>
  );
}
