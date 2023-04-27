import Link from "next/link";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.links}>
        <Link href="/">FRONTSTACK.PL</Link>
        <ul>
          <li>
            <Link href="/blog">Najnowsze</Link>
          </li>
          <li>
            <Link href="/blog">Kategorie</Link>
          </li>
        </ul>
      </div>
      <div className="extra"></div>
    </header>
  );
};
