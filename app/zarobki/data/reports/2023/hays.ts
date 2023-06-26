import { Report } from "../../../types";

export const hays23: Report = {
  company: "HAYS",
  reportName: "HAYS report",
  year: 2023,
  salaries: [
    {
      technology: "js",
      salaryBySeniority: {
        junior: 666,
        mid: 444,
        senior: 888,
        expert: 555,
      },
    },
    {
      technology: "react",
      salary: 22000,
    },
  ],
};
