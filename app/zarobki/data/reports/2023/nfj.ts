import { Report } from "../../../types";

export const nfj23: Report = {
  company: "nfj",
  reportName: "Rynek pracy IT w 2023 roku",
  year: 2023,
  url: "https://nofluffjobs.com/insights/raport-rynek-pracy-it/",
  salaries: [
    {
      technology: "fe",
      dataType: "perMonth",
      salaryBySeniority: {
        junior: 9_250,
        mid: 18_500,
        senior: 24_500,
      },
    },
  ],
};
