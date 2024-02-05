import React from "react";
import { PageHeader } from "../components/headers/Headers";
import Link from "next/link";

const Bibloteki = () => {
  return (
    <main>
      <PageHeader desc="Lista kategorii">Biblioteki</PageHeader>
      <section className="flex gap-4">
        <Link href="biblioteki/frameworks">Frameworki UI</Link>
        <Link href="biblioteki/tests">Testowanie</Link>
      </section>
    </main>
  );
};

export default Bibloteki;
