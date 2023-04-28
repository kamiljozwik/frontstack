import { PostMeta } from "@/app/utils/blog";
import Link from "next/link";
import styles from "./postLink.module.scss";

type PostLinkProps = {
  post: PostMeta;
};

export const PostLink = ({ post }: PostLinkProps) => {
  return (
    <div className={styles.root}>
      <time dateTime={post.date}>{post.date}</time>
      <Link href={`/blog/${post.slug}`}>
        <h3>{post.title}</h3>
      </Link>
      <p>{post.short}</p>
    </div>
  );
};
