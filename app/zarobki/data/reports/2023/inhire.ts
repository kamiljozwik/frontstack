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

export const inhireQ223: Report = {
  company: "inhire",
  reportName: "IT Market Snapshot Q2 2023",
  year: 2023,
  period: "Q2",
  url: "https://inhire.io/pl/insights/it-market-snapshot-q2-2023/",
  salaries: [
    {
      technology: "js",
      salaryBySeniority: {
        junior: 9_800,
        mid: 20_000,
        senior: 25_500,
      },
    },
    {
      technology: "ts",
      salary: 23_918,
    },
    {
      technology: "fe",
      salaryBySeniority: {
        junior: 9_000,
        mid: 20_000,
        senior: 26_000,
      },
    },
    {
      technology: "react",
      salaryBySeniority: {
        mid: 23_500,
        senior: 26_500,
      },
    },
  ],
};
