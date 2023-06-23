import { createColumnHelper } from "@tanstack/react-table";
import { Report } from ".";
import { getByTechnology } from "./getByTechnology";

const columnHelper = createColumnHelper<Report>();

export const columns = [
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("year", {
    header: () => "Year",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  getByTechnology(columnHelper, "js"),
  getByTechnology(columnHelper, "react"),
];
