import { getNewsBySlug, getNewsMeta } from "@/app/utils/news";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import styles from "./news.module.scss";
import { Discord } from "@/app/components/discord/Discord";

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
  return {
    title: meta?.title,
    description: `Podsumowanie najważniejszych wiadomości ze świata frontendu - nr ${params.slug}`,
    openGraph: {
      title: meta?.title,
      description: `Podsumowanie najważniejszych wiadomości ze świata frontendu - nr ${params.slug}`,
      type: "article",
      url: `https://www.frontstack.pl/frontendowka/${params.slug}`,
      images: [
        {
          url: `/frontendowka/${params.slug}.png`,
          width: 1200,
          height: 630,
          alt: "Frontendówka",
        },
      ],
    },
  };
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
      <p className="m-0 mb-2 text-sm">
        <p className="mb-2">📅 {meta?.period}</p>
        <h1 className="text-2xl md:text-4xl mt-0">
          Frontendówka <span className="gradient-text">#</span>
          {params.slug}
        </h1>
        {/* <span className="text-orange-400 mx-2">|</span> */}
      </p>
      <section className={styles.news}>
        <NewsContent />
      </section>
      <div>
        {/* @ts-ignore */}
        <Discord title="Chcesz podyskutować na jeden z powyższych tematów?" />
      </div>
    </main>
  );
};

export default NewsPage;
