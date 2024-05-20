import { Timeline } from "../components/Timeline";

export async function generateStaticParams() {
  const yearNow = new Date().getFullYear();
  const years = [];

  for (let i = 2024; i <= yearNow; i++) {
    years.push({ year: i.toString() });
  }

  return years;
}

const News = async ({ params }: { params: { year: string } }) => {
  return <Timeline year={params.year} />;
};

export default News;
