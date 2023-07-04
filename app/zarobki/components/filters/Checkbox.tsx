import { InputHTMLAttributes } from "react";

import styles from "./checkbox.module.scss";

type Props = {
  label: string | number;
} & InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = (props: Props) => {
  const { label, ...rest } = props;

  return (
    <div className={styles.root}>
      <input {...rest} />
      <label htmlFor={props.id}>{label}</label>
    </div>
  );
};
