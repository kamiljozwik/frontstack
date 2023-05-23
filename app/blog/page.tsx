import { PostLink } from "../components/postLink/PostLink";
import { getPostsMeta } from "../utils/blog";
import styles from "./page.module.scss";

const BlogPage = () => {
  const allPosts = getPostsMeta();
  return (
    <div className={styles.root}>
      <h2>Wszystkie posty</h2>
      <div>
        {allPosts.map((post) => (
          <PostLink key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
