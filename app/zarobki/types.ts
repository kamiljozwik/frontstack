export type Technology = "js" | "react" | "vue" | "node";
export type Seniority = "junior" | "mid" | "senior" | "expert";

type SalaryBySeniority = {
  [key in Seniority]?: number;
};

export type Report = {
  company: string;
  reportName: string;
  year: number;
  salaries: Salary[];
};

export type Salary = {
  technology: Technology;
  /* Single salary for all seniority levels. Treat it as a mid salary. */
  salary?: number;
  /* Salary for each seniority level. */
  salaryBySeniority?: SalaryBySeniority;
};
