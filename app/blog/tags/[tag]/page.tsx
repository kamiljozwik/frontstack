import { getTags } from "@/app/utils/blog";
import { PostsList } from "../../components/PostsList";

export async function generateStaticParams() {
  const tags = getTags();
  return tags.map((tag) => ({ tag: tag.toLowerCase() }));
}

type Props = {
  params: {
    tag: string;
  };
};

const Tags = ({ params }: Props) => {
  return <PostsList title={params.tag.toUpperCase()} tag={params.tag} />;
};

export default Tags;
