import Link from "next/link";
import styles from "./header.module.scss";

import { Logo } from "../logo/Logo";

export const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.links}>
        <Link href="/">
          <Logo />
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/blog">Wszystkie posty</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="extra"></div>
    </header>
  );
};
