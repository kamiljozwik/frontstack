export const technologies = [
  "fe",
  "js",
  "ts",
  "react",
  "angular",
  "vue",
  "node",
] as const;

export type Technology = (typeof technologies)[number];

export const seniorities = ["junior", "mid", "senior"] as const;

export type Seniority = (typeof seniorities)[number];

type SalaryBySeniority = {
  [key in Seniority]?: number;
};

export type Report = {
  company: string;
  reportName: string;
  year: number;
  url: string;
  salaries: Salary[];
};

export type Salary = {
  technology: Technology;
  dataType?: "perHour" | "perMonth";
  /* Single salary for all seniority levels. Treat it as a mid salary. */
  salary?: number;
  /* Salary for each seniority level. */
  salaryBySeniority?: SalaryBySeniority;
};
