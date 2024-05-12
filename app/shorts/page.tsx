import { PageHeader } from "../components/headers/Headers";
import Link from "next/link";
import { getShorts } from "./utils";
import { CategoryBadge } from "./components/CategoryBadge";

export const revalidate = 43200; // Refresh data every 12h

export const metadata = {
  title: "Frontend - użyteczne informacje",
  description:
    "Krótkie informacje / sztuczki / rozwiązania, które mogą Ci się przydać w codziennej pracy",
};

const Shorts = async () => {
  const shorts = await getShorts();

  return (
    <main>
      <PageHeader desc="Krótkie informacje / sztuczki / rozwiązania, które mogą Ci się przydać w codziennej pracy 😉">
        Shorts
      </PageHeader>
      <div className="grid gap-x-4 gap-y-6 grid-cols-1 sm:grid-cols-3 md:grid-cols-4">
        {shorts?.map((el) => (
          <Link
            key={el.slug}
            href={`/shorts/${el.slug}`}
            className="hover:no-underline hover:bg-gray-800 transition-colors border rounded-md border-gray-500 text-white"
          >
            <div className="p-4 relative">
              <CategoryBadge
                category={el.category}
                className="absolute top-[-0.8rem]"
              />
              <span>{el.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Shorts;
