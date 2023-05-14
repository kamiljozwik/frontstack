import { CSSProperties, PropsWithChildren } from "react";

/* TODO: CSS modules not working with MDX - find out why and replace styles with css modules. */
const style: { [key: string]: CSSProperties } = {
  root: {
    borderStyle: "solid",
    borderColor: "var(--color-primary)",
    borderWidth: "0 0 0 2px",
    padding: "8px 16px",
    marginBottom: "24px",
    fontStyle: "italic",
  },
};

type Props = {
  author: string;
};

export const Quote = ({ children, author }: PropsWithChildren<Props>) => {
  return (
    <div style={style.root}>
      <div>{children}</div>
      <small>{author}</small>
    </div>
  );
};
