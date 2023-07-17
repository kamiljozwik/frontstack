export const Table = () => (
  <table style={{ margin: "32px 0" }}>
    <thead>
      <tr>
        <th>Aspekt</th>
        <th>Git Merge</th>
        <th>Git Rebase</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cel</td>
        <td>Łączy commity z różnych gałęzi</td>
        <td>Przenosi lub łączy commity do nowego commita bazowego</td>
      </tr>
      <tr>
        <td>Historia commitów</td>
        <td>Zachowuje całą historię; Tworzy nowy merge commit</td>
        <td>Zapewnia czystszą, liniową historię poprzez jej przepisanie</td>
      </tr>
      <tr>
        <td>Złożoność</td>
        <td>Ogólnie prostsze w użyciu; Mniej ryzykowne</td>
        <td>
          Może być skomplikowany dla nowych użytkowników; Wymaga lepszego
          zrozumienia Gita.
        </td>
      </tr>
      <tr>
        <td>Konflikty</td>
        <td>Konflikty muszą być rozwiązywane tylko raz</td>
        <td>
          Każdy ponownie zastosowany (przeniesiony) commit może potencjalnie
          powodować konflikt
        </td>
      </tr>
      <tr>
        <td>Przypadki użycia</td>
        <td>
          Świetnie nadaje się do łączenia ukończonych dużych feature-ów lub
          długo żyjących branchy
        </td>
        <td>
          Przydatne do włączania najnowszych zmian z głównej gałęzi do feature
          branchy
        </td>
      </tr>
      <tr>
        <td>Użycie z publicznym repo.</td>
        <td>Bezpieczny w użyciu</td>
        <td>
          Może powodować problemy; nie powinien być używany w gałęziach
          publicznych
        </td>
      </tr>
      <tr>
        <td>Używaj, gdy:</td>
        <td>Gdy chcesz zachować kontekst historyczny</td>
        <td>Gdy chcesz mieć czystą, liniową historię</td>
      </tr>
      <tr>
        <td>Nie używaj, gdy:</td>
        <td>Gdy chcesz uniknąć wielu merge commitów w krótkim czasie</td>
        <td>
          Gdy gałąź jest współdzielona, ponieważ przepisuje historię commitów
        </td>
      </tr>
    </tbody>
  </table>
);
