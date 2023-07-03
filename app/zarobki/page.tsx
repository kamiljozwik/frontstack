"use client";

import { getCoreRowModel, useReactTable } from "@tanstack/react-table";

import { data } from "./data";
import { columns } from "./components/table/columns";
import { ReportTable } from "./components";
import { PageHeader } from "../components/headers/Headers";

const Zarobki = () => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <main>
      <PageHeader desc="Zarobki programistów pracujących w technologiach frontend-owych.">
        Zarobki
      </PageHeader>
      <ReportTable table={table} />
    </main>
  );
};

export default Zarobki;
