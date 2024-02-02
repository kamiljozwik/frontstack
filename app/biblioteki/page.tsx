import React from "react";
import { PageHeader } from "../components/headers/Headers";
import Link from "next/link";

const Bibloteki = () => {
  return (
    <main>
      <PageHeader desc="Lista kategorii">Biblioteki</PageHeader>
      <section>
        <Link href="biblioteki/ui">Frameworki UI</Link>
      </section>
    </main>
  );
};

export default Bibloteki;
