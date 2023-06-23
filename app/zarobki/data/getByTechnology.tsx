import { ColumnHelper } from "@tanstack/react-table";

import { Report, Technologies } from ".";

export const getByTechnology = (
  columnHelper: ColumnHelper<Report>,
  tech: Technologies
) =>
  columnHelper.group({
    id: tech,
    header: () => <span>{tech}</span>,
    columns: ["junior", "senior"].map((seniority) =>
      columnHelper.accessor((row) => row.salaries, {
        id: seniority,
        cell: (info) => {
          const salaries = info.row.original.salaries.find(
            (s) => s.technology === tech
          );

          if (!salaries) return null;

          if ("salary" in salaries) {
            return salaries.salary;
          } else {
            // @ts-ignore TODO: fix
            return salaries.experience[seniority];
          }
        },
        footer: (props) => 9999,
      })
    ),
  });
