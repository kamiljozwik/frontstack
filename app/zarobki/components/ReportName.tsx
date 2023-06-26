import { CellContext } from "@tanstack/react-table";

import { Report } from "../types";

type Props = {
  info: CellContext<Report, string>;
};

export const ReportName = ({ info }: Props) => {
  return (
    <div>
      <div>{info.getValue()}</div>
      <div>{info.row.original.reportName}</div>
      <div>{info.row.original.year}</div>
    </div>
  );
};
