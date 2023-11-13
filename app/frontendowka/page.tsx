import React from "react";
import { PageHeader } from "../components/headers/Headers";
import { getNewsMeta } from "../utils/news";
import Link from "next/link";

const Frontendowka = () => {
  const newsMeta = getNewsMeta();

  return (
    <main>
      <PageHeader desc="Podsumowanie najważniejszych wiadomości ze świata frontendu">
        Frontendówka
      </PageHeader>

      <div>
        {newsMeta.map((meta) => (
          <section className="my-10" key={meta.slug}>
            <small className="m-0 text-gray-500">{meta.period}</small>
            <header className="flex items-center">
              <span className="gradient-text text-2xl mr-2">{meta.slug}.</span>
              <Link href={`/frontendowka/${meta.slug.split(".")[0]}`}>
                <h2 className="m-0 text-white hover:text-blue-400">
                  {meta.title}
                </h2>
              </Link>
            </header>
            <p className="mt-1">{meta.short}</p>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Frontendowka;
