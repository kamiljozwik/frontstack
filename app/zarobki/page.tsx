import { ReportTable } from "./components/table/ReportTable";
import { PageHeader } from "../components/headers/Headers";
import { Insight } from "./components/Insight";
import { Rules } from "./components/Rules";

export const metadata = {
  title: "Frontstack - zarobki programistów frontend",
  description:
    "Zarobki programistów pracujących w technologiach frontend-owych.",
};

const Zarobki = () => {
  return (
    <main className="">
      <PageHeader desc="Zarobki programistów pracujących w technologiach frontendowych.">
        Zarobki
      </PageHeader>
      <Rules />
      <Insight />
      <ReportTable />
    </main>
  );
};

export default Zarobki;
