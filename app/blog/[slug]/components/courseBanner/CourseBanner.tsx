import styles from "./courseBanner.module.scss";
import { ExternalLink } from "@/app/components/externalLink/ExternalLink";

type Props = {
  variant?: "default" | "small";
};

export const CourseBanner = ({ variant = "default" }: Props) => {
  return (
    <div className={`${styles.root} ${styles[variant]}`}>
      <ExternalLink href="https://vademecum.frontstack.pl/">
        <p>Vademecum Web Developmentu już dostępne!</p>
      </ExternalLink>
    </div>
  );
};
