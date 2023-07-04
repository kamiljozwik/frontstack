import { Report } from "../../../types";

export const nfj22: Report = {
  company: "nfj",
  reportName: "Rynek pracy IT w 2022 roku",
  year: 2022,
  url: "https://nofluffjobs.com/insights/raport-rynek-pracy-it-w-2022",
  salaries: [
    {
      technology: "fe",
      dataType: "perMonth",
      salaryBySeniority: {
        junior: 8_000,
        mid: 17_500,
        senior: 21_600,
      },
    },
  ],
};
