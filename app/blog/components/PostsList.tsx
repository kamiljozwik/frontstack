import { PageHeader } from "@/app/components/headers/Headers";
import { PostLink } from "../../components/postLink/PostLink";
import { getPostsMeta } from "../../utils/blog";

type Props = {
  title: string;
  tag?: string;
};

export const PostsList = ({ title, tag }: Props) => {
  const allPosts = getPostsMeta();

  return (
    <section>
      <PageHeader>{title}</PageHeader>
      <div>
        {tag
          ? allPosts
              .filter((post) =>
                post.tags.map((el) => el.toLowerCase()).includes(tag)
              )
              .map((post) => <PostLink key={post.slug} post={post} />)
          : allPosts.map((post) => <PostLink key={post.slug} post={post} />)}
      </div>
    </section>
  );
};
