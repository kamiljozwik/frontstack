import { PostMeta } from "@/app/utils/blog";
import Link from "next/link";
import styles from "./postLink.module.scss";

type PostLinkProps = {
  post: PostMeta;
};

export const PostLink = ({ post }: PostLinkProps) => {
  return (
    <li className={styles.root}>
      <Link href={`/blog/${post.slug}`}>
        <h3>{post.title}</h3>
      </Link>
      <time dateTime={post.date}>{post.date}</time>
      <button>Przejdź do artykulu</button>
    </li>
  );
};
