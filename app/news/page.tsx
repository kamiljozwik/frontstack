import { redirect } from "next/navigation";

const News = () => {
  const year = new Date().getFullYear();

  redirect(`/news/${year}`);
};

export default News;
