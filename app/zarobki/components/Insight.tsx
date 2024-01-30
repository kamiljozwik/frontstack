import React from "react";

export const Insight = () => {
  return (
    <section>
      <h2>2. Wnioski po raportach za 2023 rok</h2>
      <ul className="text-lg">
        <li>
          Nastąpił znaczny wzrost wynagrodzeń dla młodszych programistów
          Node.js, co wskazuje na rosnące zapotrzebowanie na tę technologię.
        </li>
        <li>
          TypeScript i Vue, szczególnie na średnim poziomie, również wykazują
          znaczny wzrost wynagrodzeń, co sugeruje wzrost wartości rynkowej tych
          umiejętności.
        </li>
        <li>
          Starsze role w JavaScript i Node.js odnotowały spadki wynagrodzeń,
          prawdopodobnie z powodu nasycenia rynku.
        </li>
        <li>
          React i Angular wykazują mieszany trend, z niewielkimi wzrostami na
          średnich i wyższych stanowiskach, ale spadkami na niższych szczeblach.
        </li>
        <li>
          Ogólny trend wskazuje na wzrost wynagrodzeń w IT, z różnym stopniem
          wzrostu wynagrodzeń w różnych technologiach i na różnych poziomach
          doświadczenia.
        </li>
      </ul>

      <div className="my-12">
        <table className="w-full md:w-2/3">
          <thead>
            <tr>
              <th>Technologia</th>
              <th>Junior</th>
              <th>Mid</th>
              <th>Senior</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Frontend</td>
              <td>7.81% ⬆️</td>
              <td>6.75% ⬆️</td>
              <td>-1.01% 🔻</td>
            </tr>
            <tr>
              <td>JavaScript</td>
              <td>2.93% ⬆️</td>
              <td>4.9% ⬆️</td>
              <td>-6.2% 🔻</td>
            </tr>
            <tr>
              <td>TypeScript</td>
              <td>N/A</td>
              <td>10.14% ⬆️</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>React</td>
              <td>-7.84% 🔻</td>
              <td>2.04% ⬆️</td>
              <td>1.19% ⬆️</td>
            </tr>
            <tr>
              <td>Angular</td>
              <td>-4.4% 🔻</td>
              <td>2.0% ⬆️</td>
              <td>2.04% ⬆️</td>
            </tr>
            <tr>
              <td>Vue</td>
              <td>-10.0% 🔻</td>
              <td>10.75% ⬆️</td>
              <td>0.15% ⬆️</td>
            </tr>
            <tr>
              <td>Node.js</td>
              <td>30.13% ⬆️</td>
              <td>0.09% ⬆️</td>
              <td>-13.87% 🔻</td>
            </tr>
          </tbody>
        </table>
        <small>
          Procentowe zmiany średnich wynagrodzeń w 2023 względem 2022
        </small>
      </div>
    </section>
  );
};
