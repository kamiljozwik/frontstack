import { Report } from "../../../types";

export const ntp22: Report = {
  company: "ntp",
  reportName: "RYNEK PRACY IT W POLSCE",
  year: 2022,
  url: "https://nexttechnology.io/pl/raport-2023-rynek-pracy-it-w-polsce/",
  salaries: [
    {
      technology: "js",
      dataType: "perMonth",
      salaryBySeniority: {
        junior: 8_712,
        mid: 16_586,
        senior: 30_187,
      },
    },
    {
      technology: "node",
      dataType: "perMonth",
      salaryBySeniority: {
        junior: 8_211,
        mid: 17_552,
        senior: 31_080,
      },
    },
    {
      technology: "fe",
      dataType: "perMonth",
      salaryBySeniority: {
        junior: 9_180,
        mid: 17_106,
        senior: 29_050,
      },
    },
    {
      technology: "ts",
      dataType: "perMonth",
      salary: 19_921,
    },
    {
      technology: "react",
      dataType: "perMonth",
      salary: 19_373,
    },
    {
      technology: "angular",
      dataType: "perMonth",
      salary: 19_437,
    },
    {
      technology: "vue",
      dataType: "perMonth",
      salary: 18_436,
    },
  ],
};
