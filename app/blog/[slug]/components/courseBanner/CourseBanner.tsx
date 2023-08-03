import Link from "next/link";

import styles from "./courseBanner.module.scss";

type Props = {
  variant?: "default" | "small";
};

export const CourseBanner = ({ variant = "default" }: Props) => {
  return (
    <div className={`${styles.root} ${styles[variant]}`}>
      <Link href="/kurs">
        <p>Sprawdź kompletną ścieżkę nauki frontendu.</p>
      </Link>
    </div>
  );
};
