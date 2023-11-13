import { getNewsBySlug, getNewsMeta } from "@/app/utils/news";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import styles from "./news.module.scss";

export async function generateStaticParams() {
  return getNewsMeta();
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata> {
  const meta = getNewsBySlug(params.slug);
  return { title: meta?.title, description: meta?.short };
}

const NewsPage = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const slugs = getNewsMeta().map(({ slug }) => slug);

  const NewsContent = slugs.includes(params.slug)
    ? (dynamic(() => import(`../news/${params.slug}.mdx`), {
        loading: () => <p>Loading...</p>,
      }) as any) // TODO: fix types
    : null;

  const meta = getNewsBySlug(params.slug);
  return (
    <main className="mt-8">
      <p className="m-0 ">Frontendówka nr {params.slug}</p>
      <h1 className="mb-8">{meta?.title}</h1>
      <section className={styles.news}>
        <NewsContent />
      </section>
    </main>
  );
};

export default NewsPage;
