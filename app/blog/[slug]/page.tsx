import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { PostMeta, getPostsMeta } from "@/app/utils/blog";

import styles from "./blopost.module.scss";

export async function generateStaticParams() {
  return getPostsMeta();
}

export async function generateMetadata({
  params,
}: {
  params: PostMeta;
}): Promise<Metadata> {
  const meta = getPostsMeta().find(({ slug }) => slug === params.slug);
  return { title: meta?.title, description: meta?.seo_desc };
}

const PostPage = ({ params }: { params: PostMeta }) => {
  const slugs = getPostsMeta().map(({ slug }) => slug);

  const PostContent = slugs.includes(params.slug)
    ? (dynamic(() => import(`../../posts/${params.slug}/content.mdx`), {
        loading: () => <p>Loading...</p>,
      }) as any) // TODO: fix types
    : () => <p>Nie mogliśmy znaleźć tego posta</p>;

  const meta = getPostsMeta().find(({ slug }) => slug === params.slug);

  return (
    <div className={styles.root}>
      <main className={styles.main}>
        <div>
          <small>Aktualizacja: </small>
          <time dateTime={meta?.date}>{meta?.date}</time>
        </div>
        <h1>{meta?.title}</h1>
        <PostContent />
      </main>
      <section className={styles.side}>
        <h2>Podobne posty</h2>
      </section>
    </div>
  );
};

export default PostPage;
