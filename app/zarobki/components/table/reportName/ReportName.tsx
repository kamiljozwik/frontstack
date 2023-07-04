import { CellContext } from "@tanstack/react-table";

import { Report } from "../../../types";
import { brands } from "../../../data/dictionary";
import styles from "./reportName.module.scss";

type Props = {
  info: CellContext<Report, string>;
};

export const ReportName = ({ info }: Props) => {
  return (
    <div className={styles.root} title={info.row.original.reportName}>
      <div>{brands[info.row.original.company].name}</div>
      <div className={styles.year}>
        <div>
          {info.row.original.period ? `${info.row.original.period} ` : ""}
          {info.row.original.year}
        </div>
        <div>|</div>
        <div>
          <a href={info.row.original.url} target="_blank" rel="noopener">
            Link
          </a>
        </div>
      </div>
    </div>
  );
};
