import { Report } from "../../../types";

export const grafton23: Report = {
  company: "grafton",
  reportName: "Raport wynagrodzeń i trendów IT",
  year: 2023,
  period: "Q1",
  url: "https://www.grafton.pl/pl/raport-wynagrodzen-i-trendow-it-2023",
  salaries: [
    {
      technology: "js",
      salaryBySeniority: {
        mid: 20_000,
        senior: 25_000,
      },
    },
  ],
};
