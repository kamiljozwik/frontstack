import { Report } from "../../../types";

export const dcg22: Report = {
  company: "dcg",
  reportName: "Rynek wynagrodzeń IT",
  year: 2022,
  url: "https://dcg.pl/raport-wynagrodzen-it-w-2022-roku,3637,pl",
  salaries: [
    {
      technology: "fe",
      dataType: "perHour",
      salaryBySeniority: {
        junior: 85,
        mid: 129,
        senior: 150,
      },
    },
  ],
};
