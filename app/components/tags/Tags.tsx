import { getTags } from "@/app/utils/blog";
import styles from "./tags.module.scss";

export const Tags = () => {
  const tags = getTags();
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
