export type Technologies = "js" | "react";

export type Report = {
  name: string;
  year: number;
  salaries: Salary[];
};

export type Salary = {
  technology: Technologies;
} & (
  | { salary: number }
  | {
      experience: {
        junior?: number;
        mid?: number;
        senior?: number;
        expert?: number;
      };
    }
);

export const data: Report[] = [
  {
    name: "dcg",
    year: 2023,
    salaries: [
      {
        technology: "js",
        experience: {
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
  },
  {
    name: "justjoinit",
    year: 2022,
    salaries: [
      {
        technology: "js",
        salary: 1000,
      },
    ],
  },
  {
    name: "hays",
    year: 2021,
    salaries: [
      {
        technology: "js",
        experience: {
          junior: 1000,
          mid: 2000,
          senior: 3000,
          expert: 4000,
        },
      },
    ],
  },
];
