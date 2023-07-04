import { Report } from "../../../types";

export const justjoinit22: Report = {
  company: "justjoinit",
  reportName: "Raport wynagrodzeń i realnych zarobków w IT",
  year: 2022,
  url: "https://raport.justjoin.it/",
  salaries: [
    {
      technology: "js",
      dataType: "perMonth",
      salaryBySeniority: {
        junior: 8_910,
        mid: 16_728,
        senior: 24_600,
      },
    },
  ],
};
