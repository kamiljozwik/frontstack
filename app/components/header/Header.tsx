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
              <Link href="/blog">Posty</Link>
            </li>
            <li>
              <Link href="/frontendowka">Frontendówka</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="extra"></div>
    </header>
  );
};
