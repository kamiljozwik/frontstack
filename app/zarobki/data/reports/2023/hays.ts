import { Report } from "../../../types";

export const hays23: Report = {
  company: "hays",
  reportName: "IT Contracting",
  year: 2023,
  url: "https://www.hays.pl/raport-placowy/o-raporcie",
  salaries: [
    {
      technology: "react",
      dataType: "perHour",
      salaryBySeniority: {
        junior: 90,
        mid: 140,
        senior: 160,
      },
    },
    {
      technology: "angular",
      dataType: "perHour",
      salaryBySeniority: {
        junior: 90,
        mid: 130,
        senior: 155,
      },
    },
    {
      technology: "vue",
      dataType: "perHour",
      salaryBySeniority: {
        junior: 90,
        mid: 130,
        senior: 155,
      },
    },
    {
      technology: "node",
      dataType: "perHour",
      salaryBySeniority: {
        junior: 100,
        mid: 140,
        senior: 175,
      },
    },
  ],
};
