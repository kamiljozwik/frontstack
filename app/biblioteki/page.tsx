import React from "react";
import Link from "next/link";
import { getFilenames } from "./utils/getFilenames";
import { toolsNames } from "./dictionary";
import { ToolsCard } from "./components/ToolsCard";
import { PageHeader } from "../components/headers/Headers";

const Bibloteki = () => {
  const tools = getFilenames();

  return (
    <main>
      <PageHeader desc="Lorem ipsum" className="mb-12">
        Biblioteki
      </PageHeader>
      <section className="flex gap-6 flex-wrap animate-in fade-in duration-300">
        {tools.map((tool) =>
          tool in toolsNames ? (
            <Link
              href={`biblioteki/${tool}`}
              key={tool}
              className="hover:no-underline"
            >
              <ToolsCard title={toolsNames[tool]} />
            </Link>
          ) : null
        )}
      </section>
    </main>
  );
};

export default Bibloteki;
