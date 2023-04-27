import { Hero } from "./components/hero/Hero";
import { PostLink } from "./components/postLink/PostLink";
import styles from "./page.module.scss";
import { getPostsMeta } from "./utils/blog";

export default function Home() {
  const allPosts = getPostsMeta();

  return (
    <div className={styles.root}>
      <Hero />
      <main className={styles.main}>
        <section className={styles.postsList}>
          <h2>Najnowsze wpisy</h2>
          <ul>
            {allPosts.map((post) => (
              <PostLink key={post.slug} post={post} />
            ))}
          </ul>
        </section>
        <div className={styles.side}>
          <section>
            <h2>Kategorie</h2>
          </section>
          <section>
            <h2>Popularne</h2>
          </section>
        </div>
      </main>
    </div>
  );
}
