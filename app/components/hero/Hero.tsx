import Image from "next/image";
import { Button } from "../button/Button";
import styles from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={styles.root}>
      <h1>Blog frontstack.pl</h1>
      <div className={styles.course}>
        <div>
          <p className={styles.courseSubTitle}>Kompletna ścieżka rozwoju</p>
          <p className={styles.courseTitle}>Frontend developera</p>
          <div className="animate-bounce">
            <Button as="a" href="https://kursy.frontstack.pl" size="sm">
              Zobacz więcej
            </Button>
          </div>
        </div>
        <div className={styles.courseImage}>
          <Image
            src="/assets/hero.webp"
            width={150}
            height={166}
            alt="kurs frontend"
          />
        </div>
      </div>
    </section>
  );
};
