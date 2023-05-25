import { PropsWithChildren } from "react";
import styles from "./headers.module.scss";

export const PageHeader = ({ children }: PropsWithChildren) => {
  return <h1 className={styles.h1}>{children}</h1>;
};
