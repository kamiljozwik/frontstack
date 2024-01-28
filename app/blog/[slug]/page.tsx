import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { PostMeta, getPostBySlug, getPostsMeta } from "@/app/utils/blog";

import styles from "./blopost.module.scss";
import Link from "next/link";
import { NoPost } from "./components/NoPost";
import { CourseBanner } from "@/app/blog/[slug]/components/courseBanner/CourseBanner";
import { Discord } from "@/app/components/discord/Discord";
import { TableOfContents } from "./TableOfContents";

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

const PostPage = async ({ params }: { params: PostMeta }) => {
  const slugs = getPostsMeta().map(({ slug }) => slug);

  const PostContent = slugs.includes(params.slug)
    ? (dynamic(() => import(`../../posts/${params.slug}/content.mdx`), {
        loading: () => <p>Loading...</p>,
      }) as any) // TODO: fix types
    : null;

  const meta = getPostBySlug(params.slug);

  const content = await PostContent;
  const mdxContent = await content().props.children.type["_payload"][
    "_result"
  ]();

  return (
    <div>
      <header className="mt-12 mb-12">
        <div className="flex gap-6 items-center mb-4">
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
        <h1 className="text-3xl md:text-5xl mb-12">{meta?.title}</h1>
        <CourseBanner />
      </header>
      <div className="flex gap-2">
        <main className="w-full sm:w-2/3 md:w-3/4">
          <div className={styles.post}>
            {meta ? <PostContent /> : <NoPost />}
          </div>
          <Discord title="Masz uwagi lub sugestie do tego wpisu?" />
        </main>
        <div className="hidden sm:block w-[1px] bg-gray-700" />
        <aside className="hidden sm:block w-1/3 md:w-1/4">
          <TableOfContents mdxContent={mdxContent} />
        </aside>
      </div>
    </div>
  );
};

export default PostPage;
