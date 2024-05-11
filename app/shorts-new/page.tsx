import { PageHeader } from "../components/headers/Headers";
import style from "./shorts.module.scss";
import client from "@/tina/__generated__/client";
import Link from "next/link";

export const metadata = {
  title: "Frontend - użyteczne informacje",
  description:
    "Krótkie informacje / sztuczki / rozwiązania, które mogą Ci się przydać w codziennej pracy",
};

const Shorts = async () => {
  const shortsResponse = await client.queries.shortConnection({ sort: "date" });
  const shorts = shortsResponse?.data.shortConnection.edges?.map((short) => {
    return { slug: short?.node?._sys.filename, tags: short?.node?.tags };
  });

  return (
    <main className={style.root}>
      <PageHeader desc="Krótkie informacje / sztuczki / rozwiązania, które mogą Ci się przydać w codziennej pracy 😉">
        Shorts
      </PageHeader>
      {shorts?.map((el) => (
        <div key={el.slug}>
          <Link href={`/shorts/${el.slug}`}>{el.slug}</Link>
        </div>
      ))}
    </main>
  );
};

export default Shorts;
