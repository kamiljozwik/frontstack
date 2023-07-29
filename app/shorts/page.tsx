import Content from "./content.mdx";
import { PageHeader } from "../components/headers/Headers";
import style from "./shorts.module.scss";
import { CourseBanner } from "../blog/[slug]/components/courseBanner/CourseBanner";

const Shorts = () => {
  const sections = Content({}).props.children.filter(
    (c: any) => c.type === "section"
  );

  return (
    <main
      className={style.root}
      style={{ counterReset: `section ${sections.length + 1}` }}
    >
      <PageHeader desc="Krótkie informacje / sztuczki / rozwiązania, które mogą Ci się przydać w codziennej pracy 😉">
        Shorts
      </PageHeader>
      <CourseBanner variant="small" />
      <Content />
    </main>
  );
};

export default Shorts;
