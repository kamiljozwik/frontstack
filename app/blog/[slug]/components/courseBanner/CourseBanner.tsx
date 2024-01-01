import Link from "next/link";

import styles from "./courseBanner.module.scss";

type Props = {
  variant?: "default" | "small";
};

export const CourseBanner = ({ variant = "default" }: Props) => {
  return (
    <div className={`${styles.root} ${styles[variant]}`}>
      <Link href="/kurs">
        <p>Sprawdź również moje kursy i szkolenia 🙂</p>
      </Link>
    </div>
  );
};
