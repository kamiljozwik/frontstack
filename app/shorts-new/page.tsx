import { PageHeader } from "../components/headers/Headers";
import style from "./shorts.module.scss";
import Link from "next/link";
import { getShorts } from "./utils";

export const revalidate = 60; // Refresh data every 60 sec

export const metadata = {
  title: "Frontend - użyteczne informacje",
  description:
    "Krótkie informacje / sztuczki / rozwiązania, które mogą Ci się przydać w codziennej pracy",
};

const Shorts = async () => {
  const shorts = await getShorts();

  return (
    <main className={style.root}>
      <PageHeader desc="Krótkie informacje / sztuczki / rozwiązania, które mogą Ci się przydać w codziennej pracy 😉">
        Shorts
      </PageHeader>
      {shorts?.map((el) => (
        <div key={el.slug}>
          <Link href={`/shorts-new/${el.slug}`}>{el.slug}</Link>
        </div>
      ))}
    </main>
  );
};

export default Shorts;
