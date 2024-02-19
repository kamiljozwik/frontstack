import { Button } from "@/components/ui/button";
import styles from "./hero.module.scss";
import { ExternalLink } from "../externalLink/ExternalLink";

export const Hero = () => {
  return (
    <section className={styles.root}>
      <h1>Blog frontstack.pl</h1>
      <div className={styles.course}>
        <div>
          <p className="mt-6 md:mt-0">
            <span className={styles.courseSubTitle}>Sprawdź również moje</span>
            <span className={styles.courseTitle}>kursy i szkolenia</span>
          </p>
          <div className="animate-bounce">
            <Button asChild>
              <ExternalLink href="https://kursy.frontstack.pl">
                Zobacz więcej
              </ExternalLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
