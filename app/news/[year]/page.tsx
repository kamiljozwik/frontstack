import { Timeline } from "../components/Timeline";

const News = async ({ params }: { params: { year: string } }) => {
  return <Timeline year={params.year} />;
};

export default News;
