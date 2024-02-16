import React from "react";
import Link from "next/link";
import { getFilenames } from "./utils/getFilenames";
import { toolsNames } from "./dictionary";
import { ToolsCard } from "./components/ToolsCard";
import { PageHeader } from "../components/headers/Headers";

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
      </section>
    </main>
  );
};

export default Bibloteki;
