import Link from "next/link";

import { Logo } from "../logo/Logo";
import styles from "./footer.module.scss";
import { SocialLinks } from "../socialLinks/SocialLinks";

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.dash} />
      <Link href="/">
        <Logo />
      </Link>
      <p className="m-0">kontakt🐵frontstack.pl</p>
      <Link href="/o-mnie">Strona o mnie</Link>
      <SocialLinks />
      <p>©frontstack.pl | {new Date().getFullYear()}</p>
    </footer>
  );
};
