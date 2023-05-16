import { PropsWithChildren, CSSProperties } from "react";
import styles from "./infox.module.scss";
/* TODO: Not working with MDX - why? */

type Props = {
  type?: "info" | "warning" | "danger";
  title?: string;
};

const colorsMapper = (type: Props["type"]) => {
  switch (type) {
    case "info":
      return "var(--color-links)";
    case "warning":
      return "var(--color-headers)";
    case "danger":
      return "var(--color-primary)";

    default:
      return "white";
  }
};

export const Info = ({
  children,
  title,
  type = "info",
}: PropsWithChildren<Props>) => {
  const style: { [key: string]: CSSProperties } = {
    root: {
      borderStyle: "solid",
      borderColor: colorsMapper(type),
      borderWidth: "4px 1px 1px",
      padding: "8px 16px",
      marginBottom: "24px",
    },
  };

  return (
    <div className={styles.root} style={style.root}>
      {title ? <h4>{title}</h4> : null}
      {children}
    </div>
  );
};
