import { Report } from "../../../types";

export const inhire23: Report = {
  company: "inhire",
  reportName: "IT Market Snapshot",
  year: 2022,
  url: "https://inhire.io/pl/insights/it-market-snapshot-2022/",
  salaries: [
    {
      technology: "js",
      salaryBySeniority: {
        junior: 10_000,
        mid: 20_000,
        senior: 27_000,
      },
    },
    {
      technology: "ts",
      salary: 24_659,
    },
    {
      technology: "fe",
      salaryBySeniority: {
        junior: 9_500,
        mid: 19_000,
        senior: 27_000,
      },
    },
    {
      technology: "react",
      salaryBySeniority: {
        junior: 11_500,
        mid: 18_500,
        senior: 25_100,
      },
    },
    {
      technology: "angular",
      salaryBySeniority: {
        junior: 10_000,
        mid: 17_500,
        senior: 24_000,
      },
    },
  ],
};
