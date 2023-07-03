import { Company } from "../types";

export const techs = {
  fe: "Frontend",
  js: "JavaScript",
  ts: "TypeScript",
  react: "React",
  angular: "Angular",
  vue: "Vue",
  node: "Node.js",
};

type CompanyData = {
  name: string;
  logo?: string;
};

export const brands: { [key in Company]: CompanyData } = {
  dcg: {
    name: "DCG",
  },
  devire: {
    name: "Devire",
  },
  hays: {
    name: "Hays",
  },
  inhire: {
    name: "Inhire",
  },
  justjoinit: {
    name: "Just Join IT",
  },
  nfj: {
    name: "No Fluff Jobs",
  },
  ntp: {
    name: "Next Tech. Pro.",
  },
  soda: {
    name: "SoDA",
  },
  grafton: {
    name: "Grafton",
  },
};
