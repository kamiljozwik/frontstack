import React from "react";
import { PostsList } from "../../components/PostsList";

type Props = {
  params: {
    tag: string;
  };
};

const Tags = ({ params }: Props) => {
  return <PostsList title={params.tag.toUpperCase()} tag={params.tag} />;
};

export default Tags;
