"use client";

import { getCoreRowModel, useReactTable } from "@tanstack/react-table";

import { data } from "./data";
import { columns } from "./data/columns";
import { ReportTable } from "./components";

const Zarobki = () => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <ReportTable table={table} />
    </div>
  );
};

export default Zarobki;
