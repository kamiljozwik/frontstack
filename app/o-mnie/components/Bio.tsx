"use client";

import { useRef, useState } from "react";

import styles from "./Bio.module.scss";
import { ExternalLink } from "@/app/components/externalLink/ExternalLink";
import { Button } from "@/components/ui/button";

export const Bio = () => {
  const bio = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow((s) => !s)}>
        {show ? "Ukryj Bio" : "Pokaż Bio"}
      </Button>
      <div
        className={styles.bio}
        ref={bio}
        style={{ maxHeight: show ? bio.current?.scrollHeight + "px" : "" }}
      >
        <p>
          Od 2013 roku jestem dumnym absolwentem Wydziału Elektrycznego
          Politechniki Warszawskiej. Zarówno podczas studiów, jak i na początku
          mojej kariery zawodowej nic nie wskazywało na to, że dzisiaj będę
          pisał o sobie na blogu poświęconym frontendowi 😉. W tamtym czasie
          celem pisanych przeze mnie programów nie była przeglądarka, a głównie
          sterowniki przemysłowe. W celu zrealizowania pracy magisterskiej
          wyjechałem na pół roku do Hiszpanii i dość szybko po obronie udało mi
          się zostać inżynierem w Siemensie.
        </p>
        <p>
          Można powiedzieć, że{" "}
          <ExternalLink href="https://www.siemens.com/">Siemens</ExternalLink> w
          pewnym sensie nauczył mnie zawodowego życia 🙂. Mimo iż byłem świeżo
          upieczonym absolwentem, nie przysługiwała mi (na szczęście!) żadna
          taryfa ulgowa i już drugiego dnia pracy stałem z laptopem u klienta
          przed szafą sterowniczą i uruchamiałem nowo podłączoną instalację 🙂.
          Podczas kolejnych lat pracy stopniowo rozwijałem nowe umiejętności
          (m.in. uzyskane certyfikaty Cisco CCNA oraz ITIL) i cały czas szukałem
          dla siebie miejsca w świecie IT. W międzyczasie tworzyłem niezbyt duże
          skrypty w Pythonie, których zadaniem była automatyzacja części zadań,
          które musieliśmy do tej pory wykonywać ręcznie. Przełom jednak
          nastąpił wtedy, gdy część z tych rozwiązań postanowiłem przenieść do
          przeglądarki. Postanowiłem odświeżyć wiedzę ze studiów dotyczącą
          tworzenia aplikacji webowych… i wtedy coś „zatrybiło” 🙂. Chłonąłem
          kolejne materiały jak gąbka wodę i wtedy już wiedziałem, że moja
          przygoda z frontendem nie zakończy się dość szybko. Jako że w
          Siemensie nie było miejsca dla pełnoetatowego frontenda (w dalszym
          ciągu w zakresie moich obowiązków leżała automatyka i sieci
          komputerowe), postanowiłem pójść już dalej drogą web developera.
        </p>
        <p>
          I tak trafiłem do{" "}
          <ExternalLink href="https://grupapracuj.pl/">
            Grupy Pracuj
          </ExternalLink>
          , a dokładniej rzecz biorąc do zespołu rozwijającego aplikację{" "}
          <ExternalLink href="https://erecruiter.pl/">eRecruiter</ExternalLink>.
          Jako że do tej pory rozwijałem aplikacje głównie samodzielnie, trochę
          się obawiałem, że może robię to źle i nauczyłem się złych /
          przestarzałych rzeczy, ale na szczęście nic takiego nie miało miejsca.
          Dość szybko udało mi się odnaleźć w projekcie i stać się jego istotną
          częścią. Na pewno wpływ na to miała również niemal
          przyjacielsko-rodzinna atmosfera w zespole, którą niezwykle dobrze
          wspominam aż do dzisiaj 🙂. Jak to zazwyczaj bywa podczas rozwoju
          jednego produktu, nowe funkcjonalności są tworzone w tym samym języku
          i przy użyciu głównie tych samych frameworków i narzędzi. Doszedłem
          więc do pewnej ściany i wiedziałem, że aby dalej się rozwijać jako
          frontend developer, muszę poszukać nowych wyzwań i projektów. Poza
          nowymi technologiami, których miałem okazję nauczyć się w
          eRecruiterze, niezwykle ciekawą przygodą było również dla mnie dość
          dobre poznanie świata HR i rekrutacji od &quot;tej drugiej&quot;,
          rekrutującej strony 🙂.
        </p>
        <p>
          Tym kolejnym, nowym wyzwaniem zostały aplikacje{" "}
          <ExternalLink href="https://www.britishcouncil.org/">
            British Council
          </ExternalLink>
          . W przeciwieństwie do eRecruitera tutaj trafiłem na cały wachlarz
          rozmaitych aplikacji wspomagających biznes, egzaminatorów oraz
          kandydatów egzaminów językowych. Miałem więc dzięki temu okazję
          pracować przy obsłudze płatności, aplikacjach czysto „adminowych”
          (dashboardy, back office), aplikacjach B2B oraz globalnych aplikacjach
          B2C obsługującej codziennie tysiące rejestracji na różnego rodzaju
          egzaminy. Duża złożoność systemu oraz praca w globalnym
          wielokulturowym środowisku sprawia, iż codziennie mam okazję stawiać
          czoła nowym oraz coraz bardziej wymagającym problemom. Choć może
          wydawać się, że trochę zasiedziałem się w jednym miejscu, to jednak
          każdy kolejny zespół, projekt i aplikacja, nad którą pracuję, jest dla
          mnie nowym wyzwaniem i okazją do rozwoju.
        </p>
      </div>
    </>
  );
};
