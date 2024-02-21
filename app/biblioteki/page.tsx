import Link from "next/link";
import { getFilenames } from "./utils/getFilenames";
import { toolsNames } from "./dictionary";
import { ToolsCard } from "./components/ToolsCard";
import { PageHeader } from "../components/headers/Headers";
import { Card, CardContent } from "@/components/ui/card";

const Bibloteki = async () => {
  const tools = [...new Set(["frameworks", ...getFilenames()])];

  return (
    <main>
      <PageHeader
        desc="Tylko sprawdzone w boju rozwiązania 💪"
        className="mb-20"
      >
        Biblioteki i frameworki frontendowe
      </PageHeader>
      <section className="flex gap-6 flex-wrap animate-in fade-in duration-300">
        {tools.map((tool) =>
          tool in toolsNames ? (
            <Link
              href={`biblioteki/${tool}`}
              key={tool}
              className="hover:no-underline w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.3333%-1rem)]"
            >
              <ToolsCard tool={tool} />
            </Link>
          ) : null
        )}
        <Card className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.3333%-1rem)]">
          <CardContent className="flex justify-center h-full items-center text-2xl  text-center">
            Kolejne kategorie już niebawem ⌛
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default Bibloteki;
