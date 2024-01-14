import { Button } from "../button/Button";
import styles from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={styles.root}>
      <h1>Blog frontstack.pl</h1>
      <div className={styles.course}>
        <div>
          <p>
            <span className={styles.courseSubTitle}>Sprawdź również moje</span>
            <span className={styles.courseTitle}>kursy i szkolenia</span>
          </p>
          <div className="animate-bounce">
            <Button
              as="a"
              href="https://kursy.frontstack.pl"
              size="sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zobacz więcej
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
