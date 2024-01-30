import React from "react";

export const Rules = () => {
  return (
    <section>
      <h2 className="mt-10">1. Założenia</h2>
      <p>
        Tabela agregująca zarobki w głównych technologiach frontendowych.
        Prezentowane kwoty pochodzą z najpopularniejszych w Polsce raportów
        płacowych.
      </p>
      <p>
        Kwoty wynagrodzeń w raportach są prezentowane w kilku różnych formatach
        (stawka godzinowa, miesięczna, średnia, mediana, B2B, UoP, itp.).
        Porównywanie takich danych jest dość kłopotliwe, dlatego też wszystkie
        kwoty zostały przeliczone zgodnie z poniższymi założeniami:
      </p>
      <ul className="text-lg">
        <li>bierzemy pod uwagę tylko umowy B2B,</li>
        <li>
          prezentujemy wynagrodzenie miesięczne netto (czyli to co na FV),
        </li>
        <li>
          stawka godzinowa została przeliczona na miesięczną zakładając 21 dni
          roboczych po 8 godzin dziennie,
        </li>
        <li>wartości średnie traktujemy na równi z medianą,</li>
        <li>
          w przypadku podziału na miasta bierzemy pod uwagę tylko Warszawę.
        </li>
      </ul>
    </section>
  );
};
