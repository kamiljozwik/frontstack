import { PropsWithChildren, CSSProperties } from "react";
import styles from "./infox.module.scss";
/* TODO: Not working with MDX - why? */

type Props = {
  type?: "info";
  title?: string;
};

const style: { [key: string]: CSSProperties } = {
  root: {
    borderStyle: "solid",
    borderColor: "var(--color-links)",
    borderWidth: "4px 1px 1px",
    padding: "8px 16px",
    marginBottom: "24px",
  },
};

export const Info = ({
  children,
  title,
  type = "info",
}: PropsWithChildren<Props>) => {
  return (
    <div className={styles.root} style={style.root}>
      {title ? <h4>{title}</h4> : null}
      {children}
    </div>
  );
};
