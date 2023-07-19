import React, { ButtonHTMLAttributes } from "react";

import styles from "./Button.module.scss";

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { children, ...rest } = props;
  return (
    <button {...rest} className={styles.button}>
      {children}
    </button>
  );
};
