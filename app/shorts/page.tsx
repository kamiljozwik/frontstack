import Content from "./content.mdx";
import { PageHeader } from "../components/headers/Headers";
import style from "./shorts.module.scss";
import { ExternalLink } from "../components/externalLink/ExternalLink";

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
      <div className="p-3 bg-gray-400 rounded-lg">
        Masz pomysł na nietypowego i pomocnego Shorta? Daj mi o tym znać na{" "}
        <ExternalLink href="https://discord.gg/Jg9aSAuxpP">
          Discordzie
        </ExternalLink>
        🔗
      </div>
      <Content />
    </main>
  );
};

export default Shorts;
