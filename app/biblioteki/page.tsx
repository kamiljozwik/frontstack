import React from "react";
import Link from "next/link";
import { getFilenames } from "./utils/getFilenames";
import { toolsNames } from "./dictionary";

const Bibloteki = () => {
  const tools = getFilenames();

  return (
    <main>
      <section className="flex gap-4">
        {tools.map((tool) =>
          tool in toolsNames ? (
            <Link href={`biblioteki/${tool}`} key={tool}>
              <div className="p-12 border">{toolsNames[tool]}</div>
            </Link>
          ) : null
        )}
      </section>
    </main>
  );
};

export default Bibloteki;
