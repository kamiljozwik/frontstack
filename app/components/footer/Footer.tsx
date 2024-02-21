import Link from "next/link";

import { Logo } from "../logo/Logo";
import styles from "./footer.module.scss";
import { SocialLinks } from "../socialLinks/SocialLinks";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.dash} />
      <Link href="/">
        <Logo />
      </Link>
      <p className="m-0">kontakt🐵frontstack.pl</p>
      <Button asChild variant="link">
        <Link href="/o-mnie">Strona o mnie</Link>
      </Button>
      <SocialLinks />
      <p>©frontstack.pl | {new Date().getFullYear()}</p>
    </footer>
  );
};
