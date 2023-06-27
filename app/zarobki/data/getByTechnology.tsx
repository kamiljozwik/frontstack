import { ColumnHelper } from "@tanstack/react-table";

import { Report, Technology, seniorities } from "../types";
import { dict } from "./dictionary";

export const getByTechnology = (
  columnHelper: ColumnHelper<Report>,
  tech: Technology
) =>
  columnHelper.group({
    id: tech,
    header: () => dict[tech],
    // TODO: add general average
    // footer: () => "Średnia ogólna",
    columns: seniorities.map((seniority) =>
      columnHelper.accessor((row) => row.salaries, {
        id: `${tech}-${seniority}`,
        header: () => seniority,
        cell: (info) => {
          const salaries = info.row.original.salaries.find(
            (s) => s.technology === tech
          );

          if (!salaries) return null;

          return (
            salaries.salaryBySeniority?.[seniority] ??
            (seniority === "mid" ? salaries.salary : null)
          );
        },
        footer: (props) => {
          const rowsSalaries = props.table
            .getFilteredRowModel()
            .rows.map((r) =>
              r.original.salaries.find((s) => s.technology === tech)
            )
            .filter(Boolean);

          const singleSalaries = rowsSalaries
            .map((s) => s?.salary)
            .filter(Boolean);

          // Take single salaries as mid salaries
          const midSalaries = seniority === "mid" ? singleSalaries : [];

          const salariesByExperience = rowsSalaries
            .map((s) => s?.salaryBySeniority?.[seniority])
            .filter(Boolean);

          const allSalaries = [...midSalaries, ...salariesByExperience];

          const sum =
            allSalaries.reduce(
              (total, curr) => (total ?? 0) + (curr ?? 0),
              0
            ) ?? 0;

          return allSalaries.length ? Math.round(sum / allSalaries.length) : "";
        },
      })
    ),
  });
