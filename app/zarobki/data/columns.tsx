import { createColumnHelper } from "@tanstack/react-table";

import { Report } from "../types";
import { getByTechnology } from "./getByTechnology";
import { ReportName } from "../components/ReportName";

const columnHelper = createColumnHelper<Report>();

export const columns = [
  columnHelper.accessor("company", {
    header: "Raport",
    cell: (info) => <ReportName info={info} />,
    footer: () => "Średnia",
  }),
  getByTechnology(columnHelper, "js"),
  getByTechnology(columnHelper, "react"),
  getByTechnology(columnHelper, "vue"),
  getByTechnology(columnHelper, "node"),
];
