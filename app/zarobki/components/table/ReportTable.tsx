"use client";

import { useEffect, useState } from "react";

import { Table } from "./Table";
import { data } from "../../data";
import { Year, Reports } from "../filters";
import { Report } from "../../types";

const getAllYears = () => {
  const years = data.map((report) => report.year);
  return Array.from(new Set(years));
};

export const ReportTable = () => {
  const [years, setYears] = useState(getAllYears());
  const [reports, setReports] = useState<Report[]>(data);

  useEffect(() => {
    setReports(data.filter((report) => years.includes(report.year)));
  }, [years]);

  return (
    <>
      <h2>3. Aktualna tabela wynagrodzeń</h2>
      <Year years={years} setYears={setYears} />
      <Reports reports={reports} setReports={setReports} years={years} />
      <Table data={reports} />
    </>
  );
};
