import Image from "next/image";

import styles from "./page.module.scss";
import { Bio } from "./components/Bio";
import { ExternalLink } from "../components/externalLink/ExternalLink";
import { SocialLinks } from "../components/socialLinks/SocialLinks";

const About = () => {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.name}>
          <div>KAMIL JÓZWIK</div>
          <div>Frontend developer</div>
          <div>Twórca treści edukacyjnych</div>
          <SocialLinks />
        </div>
        <div>
          <Image
            src="/assets/kam.webp"
            width={300}
            height={300}
            alt="zdjęcie autora bloga"
          />
        </div>
      </section>

      <div className={styles.desc}>
        <section>
          <h2>Dzień dobry, cześć i czołem 👋</h2>
          <p>
            Mam na imię Kamil i jestem twórcą tego bloga. Pewnie już się
            zorientowałeś/zorientowałaś, iż specjalizuję się w technologiach
            frontend-owych i to właśnie ten &quot;kraniec&quot; aplikacji
            będziemy poznawali na łamach kolejnych artykułów. W moich treściach
            staram się skupiać na tematach uniwersalnych i przydatnych
            programiście na każdym stopniu zaawansowania.
          </p>
        </section>

        <section>
          <h2>Pytacie, skąd się wziąłem?</h2>
          <p>
            Osobiście dużo lepiej czyta mi się blogi, książki, ogląda jakieś
            materiały wideo w przypadku, gdy wiem cokolwiek na temat autora tych
            treści. Pozwala to nieco bardziej zrozumieć jego sposób myślenia,
            odnieść się do jego doświadczeń z przeszłości i dzięki temu lepiej
            zrozumieć przekaz, który autor chce nam przekazać. Dlatego też w tym
            miejscu postanowiłem napisać również dwa słowa o sobie, abyś nie
            myślał/myślała o mnie jak o kolejnym anonimowym autorze postów.
            Spokojnie, pełen życiorys to nie będzie – skupię się tylko na kilku
            najważniejszych tematach.
          </p>
          <Bio />
        </section>

        <section>
          <h2>Blog Fronstack.pl</h2>
          <p>
            Mojego bloga programistycznego założyłem w 2018 roku i od tego czasu
            w miarę możliwości staram się nieustannie dzielić swoją wiedzą z
            innymi frontendowymi developerami. Bloga tego traktuję również jako
            swoisty notatnik, ponieważ często zdarza mi się wracać do swoich
            starych artykułów, aby przypomnieć sobie, jak rozwiązałem jakiś
            problem w przeszłości. W międzyczasie blog ten przeszedł już kilka
            metamorfoz i refactorów (Gatsby.js, WordPress a teraz Next.js), ale
            zawsze starałem się, aby był on jak najbardziej czytelny i przyjazny
            dla czytelnika. Wszystkie treści, które publikuję na blogu, są w
            100% darmowe i zawsze takimi pozostaną. Dzielenie się wiedzą,
            sprawia mi ogromną frajdę i jest to dla mnie jedna z największych
            motywacji do dalszego rozwoju. Zdecydowanie zgadzam się ze
            stwierdzeniem, że najlepszą formą nauki jest przekazywanie wiedzy
            innym.
          </p>
        </section>
        <section>
          <h2>Rekrutend</h2>
          <p>
            <ExternalLink href="https://rekrutend.pl/">Rekrutend </ExternalLink>
            jest moją kolejną edukacyjną przygodą. Tym razem jednak, zamiast
            przekazywać wiedzę innym programistom, postanowiłem przekazywać ją
            rekruterom pracującym w branży IT. Sam doskonale wiem ile czasu i
            pracy trzeba włożyć w to, aby zrozumieć technologie oraz zależności
            między nimi w świecie IT, dlatego też postanowiłem stworzyć
            szkolenia, które pomogą rekruterom zrozumieć najważniejsze tematy
            związane z wytwarzaniem oprogramowania. Liczę na to, że dzięki moim
            szkoleniom rekruterzy będą mogli lepiej zrozumieć zarówno potrzeby
            swoich klientów, jak i oczekiwania rekrutowanych programistów.
          </p>
        </section>
        <section>
          <h2>Frontschool</h2>
          <p>
            <ExternalLink href="https://frontschool.pl/">
              Frontschool{" "}
            </ExternalLink>
            miał być moją kolejną platformą, na której planowałem publikować
            swoje kursy związane z frontendem. Obecnie znajdują się dwa
            szkolenie - &quot;Tworzenie stron za pomocą HTML i CSS&quot; oraz
            &quot;Git i Github dla początkujących&quot;. W międzyczasie pojawiła
            mi się jednak nowa koncepcja dotycząca nauczania sztuki frontendowej
            i mam nadzieję, że już niedługo będę mógł ukazać ją szerszej
            publiczności.
          </p>
        </section>

        <section>
          <p>
            Myślę, że tyle wystarczy, abyś mógł teraz zorientować się, kim jest
            ten człowiek, publikujący posty na tym blogu. Jeżeli masz jakieś
            pytania, sugestie, pomysły lub inne luźne wnioski, możesz złapać
            mnie na jednej z platform, które znajdziesz zarówno w stopce, jak i
            na samym początku tej strony. Miłej lektury!
          </p>
        </section>
      </div>
    </main>
  );
};

export default About;
