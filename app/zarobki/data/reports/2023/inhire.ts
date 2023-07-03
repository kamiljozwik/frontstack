import { Report } from "../../../types";

export const inhireQ123: Report = {
  company: "inhire",
  reportName: "IT Market Snapshot Q1 2023",
  year: 2023,
  period: "Q1",
  url: "https://inhire.io/pl/insights/it-market-snapshot-q1-2023/",
  salaries: [
    {
      technology: "js",
      salaryBySeniority: {
        junior: 10_000,
        mid: 20_500,
        senior: 27_000,
      },
    },
    {
      technology: "ts",
      salary: 24_712,
    },
    {
      technology: "fe",
      salaryBySeniority: {
        junior: 11_000,
        mid: 19_500,
        senior: 24_500,
      },
    },
    {
      technology: "react",
      salaryBySeniority: {
        junior: 12_000,
        mid: 18_500,
        senior: 27_500,
      },
    },
  ],
};
