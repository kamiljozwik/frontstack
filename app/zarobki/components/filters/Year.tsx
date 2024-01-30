import { useEffect, useRef } from "react";

import styles from "./filters.module.scss";
import { Checkbox } from "./Checkbox";

type Props = {
  years: number[];
  setYears: (y: number[]) => void;
};

export const Year = ({ years, setYears }: Props) => {
  const allYears = useRef(years);

  useEffect(() => {
    setYears([2023]);
  }, [setYears]);

  const updateYears = (year: number) => {
    if (years.includes(year)) {
      setYears(years.filter((y) => y !== year));
    } else {
      setYears([...years, year]);
    }
  };

  return (
    <section>
      <div className={styles.title}>Wynagrodzenia w roku:</div>
      <div className={styles.options}>
        {allYears.current.map((year) => (
          <Checkbox
            key={`year-${year}`}
            label={year}
            id={`year-${year}`}
            type="checkbox"
            onChange={() => updateYears(year)}
            checked={years.includes(year)}
          />
        ))}
      </div>
    </section>
  );
};
