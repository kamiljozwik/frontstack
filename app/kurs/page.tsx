import { Chat } from "./components/Chat";
import styles from "./kurs.module.scss";
import { qa } from "./qa";

const Kurs = () => {
  return (
    <main className={styles.root}>
      <header className={styles.hero}>
        <h1>Jedyny kurs, którego potrzebujesz</h1>
        <p>
          Poznaj w końcu <strong>FRONTEND</strong>, a nie tylko JavaScript.
        </p>
      </header>

      <section className={styles.chatWrapper}>
        <Chat qa={qa} />
      </section>

      <section className={styles.mainSection}>
        <h2>Format kursu</h2>
        <p>Najlepsze materiały w sieci + własne materiały</p>
      </section>

      <section className={styles.mainSection}>
        <h2>Plan kursu</h2>
        <p>Czego nauczysz się na kursie?</p>
        <p>Ciągle żyjący</p>
      </section>

      <section className={styles.mainSection}>
        <h2>Termin</h2>
        <p>Kiedy zaczynamy?</p>
      </section>

      <section className={styles.mainSection}>
        <h2>Dla kogo?</h2>
        <p>Seniority</p>
      </section>

      <section className={styles.mainSection}>
        <h2>Cena</h2>
        <p>Subskrypcja czasowa / pojedyncze moduły</p>
      </section>

      <section className={styles.mainSection}>
        <h2>Autor</h2>
        <p>Bio</p>
      </section>
    </main>
  );
};

export default Kurs;
