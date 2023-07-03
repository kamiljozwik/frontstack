import { ColumnHelper } from "@tanstack/react-table";

import { Report, Salary, Technology, seniorities } from "../../types";
import { techs } from "../../data/dictionary";

export const getByTechnology = (
  columnHelper: ColumnHelper<Report>,
  tech: Technology
) =>
  columnHelper.group({
    id: tech,
    header: () => techs[tech],
    columns: seniorities.map((seniority) =>
      columnHelper.accessor((row) => row.salaries, {
        id: `${tech}-${seniority}`,
        header: () => seniority.charAt(0).toUpperCase() + seniority.slice(1),
        size: 80,
        cell: (info) => {
          const salaries = info.row.original.salaries.find(
            (s) => s.technology === tech
          );

          if (!salaries) return null;

          const rawSalaryData =
            salaries.salaryBySeniority?.[seniority] ??
            (seniority === "mid" ? salaries.salary : 0) ??
            0;

          const perMonth = calcPerMonth(rawSalaryData, salaries.dataType);

          return perMonth ? `${(perMonth / 1000).toFixed(2)}k` : null;
        },
        footer: (props) => {
          const rowsSalaries = props.table
            .getFilteredRowModel()
            .rows.map((r) =>
              r.original.salaries.find((s) => s.technology === tech)
            )
            .filter(Boolean);

          const singleSalaries = rowsSalaries
            .map((s) => calcPerMonth(s?.salary, s?.dataType))
            .filter(Boolean);

          // Take single salaries as mid salaries
          const midSalaries = seniority === "mid" ? singleSalaries : [];

          const salariesByExperience = rowsSalaries
            .map((s) =>
              calcPerMonth(s?.salaryBySeniority?.[seniority], s?.dataType)
            )
            .filter(Boolean);

          const allSalaries = [...midSalaries, ...salariesByExperience];

          const sum =
            allSalaries.reduce(
              (total, curr) => (total ?? 0) + (curr ?? 0),
              0
            ) ?? 0;

          const avg = allSalaries.length
            ? Math.round(sum / allSalaries.length)
            : 0;

          return avg ? `${(avg / 1000).toFixed(2)}k` : null;
        },
      })
    ),
  });

const calcPerMonth = (
  salary = 0,
  dataType: Salary["dataType"] = "perMonth"
) => {
  const NUMBER_OF_DAYS_IN_MONTH = 21;
  const NUMBER_OF_WORKING_HOURS_PER_DAY = 8;

  return dataType === "perHour"
    ? salary * NUMBER_OF_DAYS_IN_MONTH * NUMBER_OF_WORKING_HOURS_PER_DAY
    : salary;
};
