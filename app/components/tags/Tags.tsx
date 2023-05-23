import { getPostsMeta } from "@/app/utils/blog";
import styles from "./tags.module.scss";

export const Tags = () => {
  const allPosts = getPostsMeta();

  const tags = allPosts
    .reduce((acc: string[], post) => {
      return [...acc, ...post.tags];
    }, [])
    .filter((category, index, arr) => arr.indexOf(category) === index);

  return (
    <ul className={styles.root}>
      {tags.map((category) => (
        <li key={category}>
          <a href={`/blog/tags/${category.toLowerCase()}`}>{category}</a>
        </li>
      ))}
    </ul>
  );
};
