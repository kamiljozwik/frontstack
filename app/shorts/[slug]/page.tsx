import { Codeblock } from "@/components/codeblock/Codeblock";
import { Metadata } from "next";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { getShort, getShorts, valueToLabel } from "../utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnchorLink } from "@/mdx-components";
import { CategoryBadge } from "../components/CategoryBadge";
import { Badge } from "@/components/ui/badge";

export async function generateStaticParams() {
  const shorts = await getShorts();
  return shorts;
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata> {
  const resp = await getShort(params.slug);
  return { title: resp.data.short.title };
}

const ShortDetails = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const resp = await getShort(params.slug);

  const allShorts = await getShorts();
  const categoryShorts = allShorts.filter(
    (el) => el.category === resp.data.short.category
  );

  const nextIndex =
    categoryShorts.findIndex((el) => el.slug === params.slug) + 1;
  const nextSlug =
    nextIndex < categoryShorts.length
      ? categoryShorts[nextIndex].slug
      : categoryShorts[0].slug;

  const randomIndex = Math.floor(Math.random() * allShorts.length);
  const randomSlug = allShorts[randomIndex].slug;

  const components = {
    code_block: (props: any) => (
      <Codeblock language={props.lang}>{props.value}</Codeblock>
    ),
    a: (props: any) => (
      <AnchorLink href={props.url}>{props.children}</AnchorLink>
    ),
  };

  const category = valueToLabel(resp.data.short.category);

  return (
    <main className="mt-8">
      <div className="flex gap-2">
        <Badge variant="secondary">
          <time dateTime={resp.data.short.date} className="font-medium text-xs">
            {new Date(resp.data.short.date).toLocaleDateString("pl-PL", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
        </Badge>
        <CategoryBadge category={resp.data.short.category} />
      </div>
      <header>
        <h1 className="text-3xl font-bold mt-4 mb-6">
          {resp.data.short.title}
        </h1>
      </header>
      <div className="[&_p]:mb-2 [&_pre]:!p-2 [&_pre]:!mt-6 [&_pre]:!mb-8">
        <TinaMarkdown content={resp.data.short.body} components={components} />
      </div>

      <div className="flex gap-4 mt-12">
        <Button asChild variant="secondary">
          <Link href={`/shorts/${randomSlug}`}>Losowy short</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href={`/shorts/${nextSlug}`}>Kolejny short: {category}</Link>
        </Button>
      </div>
    </main>
  );
};

export default ShortDetails;
