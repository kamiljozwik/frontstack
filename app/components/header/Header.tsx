import Link from "next/link";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.links}>
        <Link href="/">FRONTSTACK.PL</Link>
        <nav>
          <ul>
            <li>
              <Link href="/blog">Wszystkie posty</Link>
            </li>
            <li>
              <Link href="/blog">Kategorie</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="extra"></div>
    </header>
  );
};
