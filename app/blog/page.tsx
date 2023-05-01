import { PostLink } from "../components/postLink/PostLink";
import { getPostsMeta } from "../utils/blog";

const BlogPage = () => {
  const allPosts = getPostsMeta();
  return (
    <div>
      <h2 className="yellow-header-h2">Wszystkie posty</h2>
      <div>
        {allPosts.map((post) => (
          <PostLink key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
