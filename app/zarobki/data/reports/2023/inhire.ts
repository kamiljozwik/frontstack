import { Report } from "../../../types";

export const inhire23: Report = {
  company: "InHire",
  reportName: "InHire report",
  year: 2023,
  salaries: [
    {
      technology: "js",
      salaryBySeniority: {
        junior: 1000,
        mid: 2000,
        senior: 3000,
        expert: 4000,
      },
    },
    {
      technology: "react",
      salary: 5000,
    },
  ],
};
