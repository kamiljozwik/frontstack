export const Table = () => (
  <div className="table-wrapper">
    <table>
      <thead>
        <tr>
          <th>Cecha</th>
          <th>Klasy (ES6) </th>
          <th>Konstruktory</th>
          <th>Prototypy</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Składnia</td>
          <td>Bardzo czytelna i prosta</td>
          <td>Prosta, ale mniej czytelna</td>
          <td>Mniej intuicyjna</td>
        </tr>
        <tr>
          <td>Dziedziczenie</td>
          <td>Łatwe za pomocą `extends`</td>
          <td>Możliwe, ale trudniejsze</td>
          <td>Możliwe, ale trudniejsze</td>
        </tr>
        <tr>
          <td>Konstruktor</td>
          <td>Jasno zdefiniowany</td>
          <td>Jasno zdefiniowany</td>
          <td>Brak jasno zdefiniowanego</td>
        </tr>
        <tr>
          <td>Zarządzanie metodami</td>
          <td>W ciele klasy</td>
          <td>W obiekcie prototype</td>
          <td>Bezpośrednio na prototypie</td>
        </tr>
        <tr>
          <td>Przejrzystość kodu</td>
          <td>Wysoka</td>
          <td>Średnia</td>
          <td>Niska</td>
        </tr>
      </tbody>
    </table>
  </div>
);
