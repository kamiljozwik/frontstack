import Link from "next/link";

import { Logo } from "../logo/Logo";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <Link href="/">
        <Logo />
      </Link>
      <p>©frontstack.pl | {new Date().getFullYear()}</p>
    </footer>
  );
};
