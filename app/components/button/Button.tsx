import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ComponentProps,
} from "react";
import Link from "next/link";

import styles from "./Button.module.scss";

type Props = {
  size?: "sm" | "md";
} & (
  | ({ as?: "button" } & ButtonHTMLAttributes<HTMLButtonElement>)
  | ({ as?: "a"; href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({
      as?: "link";
    } & ComponentProps<typeof Link>)
);

export const Button = ({
  children,
  size = "md",
  as = "button",
  ...rest
}: Props) => {
  if (as === "link") {
    return (
      <Link {...(rest as any)} className={`${styles.button} ${styles[size]}`}>
        {children}
      </Link>
    );
  }

  const Component = as;

  return (
    <Component
      {...(rest as any)}
      className={`${styles.button} ${styles[size]}`}
    >
      {children}
    </Component>
  );
};
