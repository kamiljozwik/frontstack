import Content from "./content.mdx";
import { PageHeader } from "../components/headers/Headers";
import style from "./til.module.scss";

const Til = () => {
  const sections = Content({}).props.children.filter(
    (c: any) => c.type === "section"
  );

  return (
    <main
      className={style.root}
      style={{ counterReset: `section ${sections.length + 1}` }}
    >
      <PageHeader desc="Małe, przydatne informacje / sztuczki / rozwiązania na które dzisiaj się natknąłem (albo które musiałem sobie przypominać 😉).">
        Dziś się nauczyłem 💡
      </PageHeader>
      <Content />
    </main>
  );
};

export default Til;
