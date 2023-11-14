import { Button } from "../components/button/Button";
import { Chat } from "./components/Chat";
import styles from "./kurs.module.scss";
import { qa } from "./qa";
import { Icons } from "./components/Icons";
import { SendButton } from "./components/SendButton";
import { TextCarousel } from "../components/textCarousel/TextCarousel";

const arrayOfTech = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "GitHub",
  "Node.js",
  "Svelte",
  "Sass",
];

export const metadata = {
  title: "Kurs - Programista Frontend",
  description:
    "Kompletna ścieżka nauki frontendu dla początkujących oraz doświadczonych programistów ",
};

const Kurs = () => {
  return (
    <main className={styles.root}>
      <header className={styles.hero}>
        <h1>
          Frontend <span>Kompletna ścieżka nauki</span>
        </h1>
        <p>
          <span>
            Opanuj w końcu <strong>FRONTEND</strong>, a nie tylko
          </span>
          <TextCarousel words={arrayOfTech} />
        </p>
      </header>

      <section className={styles.kursLive}>
        <Button
          as="a"
          href="https://kursy.frontstack.pl"
          size="md"
          className="animate-bounce"
        >
          Dostęp do kursów 🎉
        </Button>
      </section>

      <section className={styles.chatWrapper}>
        <div>
          <small>
            Pomiń czat i zobacz{" "}
            <a href="#informacje">najważniejsze informacje</a> 👇
          </small>
        </div>
        <Chat qa={qa} />
        <SendButton />
      </section>

      <div id="informacje" className={styles.info}>
        Najważniejsze informacje
      </div>

      <section className={styles.mainSection}>
        <h2>Format kursu</h2>
        <ul>
          <li>
            Mix (wideo + tekst) najlepszych dostępnych i zawsze aktualnych
            materiałów wzbogadzony o liczne autorskie treści.
          </li>
          <li>
            Duże nacisk ma ćwiczenia, zadania oraz mini-projekty pozwalające na
            praktyczne wykorzystanie zdobytej wiedzy.
          </li>
          <li>
            Duże samodzielne projekty realizowane po opanowaniu większego bloku
            tematycznego.
          </li>
          <li>
            Duże projekty grupowe (open-source) pozwalające na praktyczne
            wykorzystanie zdobytej wiedzy oraz naukę pracy w zespole.
          </li>
        </ul>
      </section>

      <section className={styles.mainSection}>
        <h2>Plan kursu</h2>
        <p>Wszystkie najważniejsze technologie frontendowe</p>
        <div className={styles.icons}>
          <Icons />
          <p>i więcej.</p>
        </div>
      </section>

      <section className={styles.mainSection}>
        <h2>Dla kogo?</h2>
        <p>Osoby z żadnym, małym oraz średnim doświadczeniem.</p>
      </section>

      <section className={styles.mainSection}>
        <h2>Cena</h2>
        <p>Każdy moduł będzie posiadał swoją własną cenę.</p>
        <p>Dostęp będzie zarówno na stałe, jak i w subskrypcji.</p>
      </section>

      <section className={styles.mainSection}>
        <h2>Autor</h2>
        <p>Sprawdź, kto przygotowuje dla Ciebie ten kurs.</p>
        <Button as="link" href="/o-mnie" size="sm">
          O mnie
        </Button>
      </section>
    </main>
  );
};

export default Kurs;
