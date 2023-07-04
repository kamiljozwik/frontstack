import styles from "./filters.module.scss";
import { Checkbox } from "./Checkbox";
import { data } from "../../data";
import { Report } from "@/app/zarobki/types";
import { brands } from "@/app/zarobki/data/dictionary";

type Props = {
  reports: Report[];
  setReports: (y: Report[]) => void;
  years: number[];
};

export const Reports = ({ reports, setReports, years }: Props) => {
  const updateReports = (report: Report) => {
    if (reports.includes(report)) {
      setReports(reports.filter((y) => y !== report));
    } else {
      setReports([...reports, report]);
    }
  };

  return (
    <section>
      <div className={styles.title}>Wynagrodzenia z raportów:</div>
      <div className={styles.options}>
        {data.map((report) => (
          <Checkbox
            key={`${report.company}-${report.year}-${report.period}`}
            id={`${report.company}-${report.year}-${report.period}`}
            label={`${brands[report.company].name} ${report.period ?? ""} ${
              report.year
            }`}
            type="checkbox"
            onChange={() => updateReports(report)}
            checked={reports.includes(report)}
            disabled={!years.includes(report.year)}
          />
        ))}
      </div>
    </section>
  );
};
