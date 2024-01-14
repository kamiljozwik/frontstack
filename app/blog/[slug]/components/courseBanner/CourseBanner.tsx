import styles from "./courseBanner.module.scss";
import { ExternalLink } from "@/app/components/externalLink/ExternalLink";

type Props = {
  variant?: "default" | "small";
};

export const CourseBanner = ({ variant = "default" }: Props) => {
  return (
    <div className={`${styles.root} ${styles[variant]}`}>
      <ExternalLink href="https://kursy.frontstack.pl/">
        <p>Sprawdź również moje kursy i szkolenia 🙂</p>
      </ExternalLink>
    </div>
  );
};
