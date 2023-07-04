import { ReportTable } from "./components/table/ReportTable";
import { PageHeader } from "../components/headers/Headers";
import styles from "./page.module.scss";

export const metadata = {
  title: "Frontstack - zarobki programistów frontend",
  description:
    "Zarobki programistów pracujących w technologiach frontend-owych.",
};

const Zarobki = () => {
  return (
    <main className={styles.root}>
      <PageHeader desc="Zarobki programistów pracujących w technologiach frontend-owych.">
        Zarobki
      </PageHeader>
      <section>
        <p>
          Tabela agregująca zarobki w najpopularniejszych technologiach
          frontendowych. Prezentowane kwoty pochodzą z najpopularniejszych w
          Polsce raportów płacowych.
        </p>
        <p>
          Kwoty wynagrodzeń w raportach są prezentowane w kilku różnych
          formatach (stawka godzinowa, miesięczna, średnia, mediana, B2B, UoP,
          itp.). Porównywanie takich danych jest dość kłopotliwe, dlatego też
          wszystkie kwoty zostały przeliczone zgodnie z poniższymi założeniami:
        </p>
        <ul>
          <li>bierzemy pod uwagę tylko umowy B2B,</li>
          <li>
            prezentujemy wynagrodzenie miesięczne netto (czyli to co na FV),
          </li>
          <li>
            stawka godzinowa została przeliczona na miesięczną zakładając 21 dni
            roboczych po 8 godzin dziennie,
          </li>
          <li>wartości średnie traktujemy na równi z medianą,</li>
          <li>
            w przypadku podziału na miasta bierzemy pod uwagę tylko Warszawę.
          </li>
        </ul>
      </section>
      <ReportTable />
      <section>
        <h2>Liczba ofert pracy w popularnych job boardach:</h2>
        <p>Coming soon... ⌛</p>
      </section>
    </main>
  );
};

export default Zarobki;
