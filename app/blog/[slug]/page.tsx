import { getPostsMeta } from "@/app/utils/blog";
import dynamic from "next/dynamic";

export async function generateStaticParams() {
  return getPostsMeta().map(({ slug }) => ({
    slug,
  }));
}

const PostPage = ({ params }: { params: { slug: string } }) => {
  const slugs = getPostsMeta().map(({ slug }) => slug);

  const PostContent = slugs.includes(params.slug)
    ? dynamic(() => import(`../../posts/${params.slug}/content.mdx`), {
        loading: () => <p>Loading...</p>,
      })
    : () => <p>Nie mogliśmy znaleźć tego posta</p>;

  return (
    <div>
      <div>Single Post Page</div>
      <PostContent />
    </div>
  );
};

export default PostPage;
