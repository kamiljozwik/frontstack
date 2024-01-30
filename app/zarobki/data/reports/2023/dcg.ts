import { Report } from "../../../types";

export const dcg23: Report = {
  company: "dcg",
  reportName: "Rynek wynagrodzeń IT w 2023",
  year: 2023,
  url: "https://dcg.pl/raport-wynagrodzen-it-w-2023-roku,4620,pl",
  salaries: [
    {
      technology: "fe",
      dataType: "perHour",
      salaryBySeniority: {
        junior: 95,
        mid: 140,
        senior: 165,
      },
    },
  ],
};
