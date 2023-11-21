import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { PostMeta, getPostBySlug, getPostsMeta } from "@/app/utils/blog";

import styles from "./blopost.module.scss";
import Link from "next/link";
import { NoPost } from "./components/NoPost";
import { CourseBanner } from "@/app/blog/[slug]/components/courseBanner/CourseBanner";
import { Discord } from "@/app/components/discord/Discord";

export async function generateStaticParams() {
  return getPostsMeta();
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata> {
  const meta = getPostBySlug(params.slug);
  return { title: meta?.title, description: meta?.seo_desc };
}

const PostPage = ({ params }: { params: PostMeta }) => {
  const slugs = getPostsMeta().map(({ slug }) => slug);

  const PostContent = slugs.includes(params.slug)
    ? (dynamic(() => import(`../../posts/${params.slug}/content.mdx`), {
        loading: () => <p>Loading...</p>,
      }) as any) // TODO: fix types
    : null;

  const meta = getPostBySlug(params.slug);

  return (
    <div className={styles.root}>
      <main className={styles.main}>
        {meta ? (
          <>
            <header>
              <h1>{meta?.title}</h1>
              <div className={styles.meta}>
                <div className={styles.time} title="Ostatnia aktualizacja">
                  <span>📅</span>
                  <time dateTime={meta?.date}>{meta?.date}</time>
                </div>
                <div className={styles.tags} title="Tagi">
                  <span>🏷️</span>
                  {meta?.tags.map((tag) => (
                    <Link key={tag} href={`/blog/tags/${tag.toLowerCase()}`}>
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </header>
            <CourseBanner />
            <PostContent />
          </>
        ) : (
          <NoPost />
        )}
        {/*@ts-ignore */}
        <Discord title="Masz uwagi lub sugestie do tego wpisu?" />
      </main>
      <section className={styles.side}>{/* <h2>Podobne posty</h2> */}</section>
    </div>
  );
};

export default PostPage;
