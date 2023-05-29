import { PropsWithChildren } from "react";
import styles from "./headers.module.scss";

type Props = {
  desc?: string;
};

export const PageHeader = ({ children, desc }: PropsWithChildren<Props>) => {
  return (
    <header>
      <h1 className={styles.h1}>{children}</h1>
      {desc ? <p>{desc}</p> : null}
    </header>
  );
};
