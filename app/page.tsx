import styles from "./page.module.css";
import { getPostsMeta } from "./utils/blog";

export default function Home() {
  const allPosts = getPostsMeta();

  return (
    <main className={styles.main}>
      <h1>Frontstack</h1>
      <div>
        <ul>
          {allPosts.map((post) => (
            <li key={post.slug}>
              <a href={`/blog/${post.slug}`}>{post.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
