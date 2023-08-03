import { Button } from "../button/Button";
import styles from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={styles.root}>
      <h1>Blog frontstack.pl</h1>
      <div>
        <h2>Poznaj kompleksową ścieżkę nauki frontendu</h2>
        <p>Najlepsze materiały, serwowane w najlepszej kolejności 💪</p>
        <div className="animate-bounce">
          <Button as="link" href="/kurs" size="sm">
            Zobacz więcej
          </Button>
        </div>
      </div>
    </section>
  );
};
