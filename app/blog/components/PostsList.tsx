import { PostLink } from "../../components/postLink/PostLink";
import { getPostsMeta } from "../../utils/blog";
import styles from "./page.module.scss";

type Props = {
  title: string;
  tag?: string;
};

export const PostsList = ({ title, tag }: Props) => {
  const allPosts = getPostsMeta();

  return (
    <div className={styles.root}>
      <h2>{title}</h2>
      <div>
        {tag
          ? allPosts
              .filter((post) =>
                post.tags.map((el) => el.toLowerCase()).includes(tag)
              )
              .map((post) => <PostLink key={post.slug} post={post} />)
          : allPosts.map((post) => <PostLink key={post.slug} post={post} />)}
      </div>
    </div>
  );
};
