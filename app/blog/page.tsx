import { PostsList } from "./components/PostsList";

export const metadata = {
  title: "Wszystkie posty",
  description: "Lista wszystkich postów na blogu.",
};

const BlogPage = () => {
  return (
    <main>
      <PostsList title="Wszystkie posty" />
    </main>
  );
};

export default BlogPage;
