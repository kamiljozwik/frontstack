import { createColumnHelper } from "@tanstack/react-table";

import { Report, technologies } from "../types";
import { getByTechnology } from "./getByTechnology";
import { ReportName } from "../components/ReportName";

const columnHelper = createColumnHelper<Report>();

const allTechnologies = technologies.map((t) =>
  getByTechnology(columnHelper, t)
);

export const columns = [
  columnHelper.accessor("company", {
    header: "Raport",
    cell: (info) => <ReportName info={info} />,
    footer: () => "Średnia",
  }),
  ...allTechnologies,
];
