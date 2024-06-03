---
title: Responsywny grid w jednej linijce CSS
date: 2024-06-03T08:12:14.894Z
category: css
---

Dzisiaj dowiemy się, jak łatwo stworzyć responsywną siatkę CSS za pomocą `CSS Grid`. Mamy 100 elementów `div` i chcemy, aby nasza siatka była responsywna w zależności od szerokości ekranu.

Możemy osiągnąć to w prosty sposób, korzystając z `grid-template-columns`, `repeat`, `autofill` i `autofit`. Zamiast pisać wiele zapytań `@media`, możemy to zrobić za pomocą jednej linii CSS.

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

Powyższy kod definiuje siatkę, która automatycznie wypełnia dostępną przestrzeń. Używając `repeat(auto-fill, minmax(200px, 1fr))`, mówimy, że chcemy, aby każda kolumna miała minimalną szerokość 200px i maksymalnie zajmowała jedną jednostkę frakcyjną. Jeśli jest więcej miejsca, doda więcej kolumn.

## Różnica między `autofill` i `autofit`

Aby lepiej zrozumieć różnicę między `autofill` i `autofit`, przyjrzyjmy się następującemu przykładowi:

```css
.fill-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

.fit-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
```

W przypadku `auto-fill`, kolumny będą dodawane w zależności od dostępnej przestrzeni, ale nie będą rozciągane, jeśli nie ma wystarczającej liczby elementów.

W przypadku `auto-fit`, kolumny będą rozciągane, aby wypełnić całą dostępną przestrzeń, nawet jeśli liczba elementów jest mniejsza.

Inspiracja: [Responsive CSS Grid Layout In One Line Of Code](https://www.youtube.com/watch?v=b9N1qLTVhvs)
