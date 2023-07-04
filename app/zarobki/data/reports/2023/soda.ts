import { Report } from "../../../types";

export const soda23: Report = {
  company: "soda",
  reportName: "Raport płacowy",
  year: 2023,
  period: "Q1",
  url: "https://sodapl.com/raporty/",
  salaries: [
    {
      technology: "js",
      salaryBySeniority: {
        mid: 15_000,
        senior: 22_000,
      },
    },
    {
      technology: "react",
      salaryBySeniority: {
        mid: 15_000,
        senior: 21_000,
      },
    },
    {
      technology: "node",
      salaryBySeniority: {
        mid: 15_000,
        senior: 22_000,
      },
    },
    {
      technology: "angular",
      salaryBySeniority: {
        mid: 16_000,
        senior: 21_000,
      },
    },
  ],
};
