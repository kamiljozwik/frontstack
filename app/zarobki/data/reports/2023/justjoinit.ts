import { Report } from "../../../types";

export const justjoinit23: Report = {
  company: "justjoinit",
  reportName: "Raport wynagrodzeń i realnych zarobków w IT",
  year: 2023,
  url: "https://raport.justjoin.it/",
  salaries: [
    {
      technology: "js",
      dataType: "perMonth",
      salaryBySeniority: {
        junior: 7_600,
        mid: 15_000,
        senior: 25_000,
      },
    },
  ],
};
