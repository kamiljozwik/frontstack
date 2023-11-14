import React from "react";
import { PageHeader } from "../components/headers/Headers";
import { getNewsMeta } from "../utils/news";
import Link from "next/link";
import { ExternalLink } from "../components/externalLink/ExternalLink";

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
            <small className="m-0 text-gray-400">{meta.period}</small>
            <header className="flex items-start lg:w-[90%]">
              <span className="gradient-text text-xl mr-2">{meta.slug}.</span>
              <Link href={`/frontendowka/${meta.slug.split(".")[0]}`}>
                <h2 className="m-0 text-white hover:text-blue-400 text-base font-normal">
                  {meta.title}
                </h2>
              </Link>
            </header>
          </section>
        ))}
        <div>
          💡 Sprawdź poprzenie frontendówki{" "}
          <ExternalLink href="https://www.youtube.com/playlist?list=PLV9PqLC_guPB6jMDBA8XDQFXtfQNqgyHm">
            na YouTubie.
          </ExternalLink>{" "}
        </div>
      </div>
    </main>
  );
};

export default Frontendowka;
