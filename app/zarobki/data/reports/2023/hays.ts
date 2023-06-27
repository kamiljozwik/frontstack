import { Report } from "../../../types";

export const hays23: Report = {
  company: "hays",
  reportName: "IT Contracting",
  year: 2022,
  url: "https://www.hays.pl/raport-placowy/o-raporcie",
  salaries: [
    {
      technology: "react",
      salaryBySeniority: {
        junior: 16_800,
        mid: 24_400,
        senior: 26_900,
      },
    },
    {
      technology: "angular",
      salaryBySeniority: {
        junior: 16_800,
        mid: 21_000,
        senior: 26_000,
      },
    },
    {
      technology: "vue",
      salaryBySeniority: {
        junior: 16_800,
        mid: 21_000,
        senior: 26_000,
      },
    },
    {
      technology: "node",
      salaryBySeniority: {
        junior: 17_600,
        mid: 21_800,
        senior: 28_600,
      },
    },
  ],
};
