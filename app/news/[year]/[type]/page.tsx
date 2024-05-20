import { redirect } from "next/navigation";
import { Timeline } from "../../components/Timeline";

const yearNow = new Date().getFullYear();

export const metadata = {
  alternates: {
    canonical: `/news/${yearNow}`,
  },
};

export async function generateStaticParams() {
  const yearNow = new Date().getFullYear();
  const years = [];

  for (let i = 2024; i <= yearNow; i++) {
    years.push({ year: i.toString(), type: "news" });
    years.push({ year: i.toString(), type: "article" });
  }

  return years;
}

const News = async ({ params }: { params: { year: string; type: string } }) => {
  if (!["news", "article"].includes(params.type)) {
    redirect("/news");
  }

  return <Timeline year={params.year} type={params.type} />;
};

export default News;
