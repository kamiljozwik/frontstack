import dynamic from "next/dynamic";
import { getPostsMeta } from "@/app/utils/blog";

import styles from "./blopost.module.scss";

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
    <div className={styles.root}>
      <main className={styles.main}>
        <PostContent />
      </main>
      <section className={styles.side}>
        <h2>Podobne posty</h2>
      </section>
    </div>
  );
};

export default PostPage;
