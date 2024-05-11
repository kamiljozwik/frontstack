import { PageHeader } from "../components/headers/Headers";
import Link from "next/link";
import { getShorts, tagToName } from "./utils";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/utils";

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
            href={`/shorts-new/${el.slug}`}
            className="hover:no-underline hover:bg-gray-800 border rounded-md border-gray-500 text-white"
          >
            <div className="p-4 relative">
              <Badge
                variant="default"
                className={cn("absolute top-[-0.8rem]", {
                  "!text-white": ["ts", "node"].includes(el.category ?? ""),
                  "!bg-yellow-300": el.category === "js",
                  "!bg-blue-600": el.category === "ts",
                  "!bg-sky-400": el.category === "tailwind",
                  "!bg-green-800": el.category === "node",
                })}
              >
                {tagToName(el.category)}
              </Badge>
              <span>{el.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Shorts;
