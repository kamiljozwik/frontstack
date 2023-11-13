import Content from "./content.mdx";
import { PageHeader } from "../components/headers/Headers";
import style from "./shorts.module.scss";

export const metadata = {
  title: "Frontend - użyteczne informacje",
  description:
    "Krótkie informacje / sztuczki / rozwiązania, które mogą Ci się przydać w codziennej pracy",
};

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
      <Content />
    </main>
  );
};

export default Shorts;
