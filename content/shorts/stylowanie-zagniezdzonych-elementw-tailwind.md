---
title: Stylowanie zagnieżdżonych elementów w Tailwind CSS
date: 2024-05-11T10:22:00.000Z
category: tailwind
---

Czy wiesz, że w Tailwind CSS możesz stylować zagnieżdżone elementy w sposób bardziej zbliżony do tradycyjnego CSS? To możliwe dzięki tzw. [arbitrary variants](https://tailwindcss.com/docs/hover-focus-and-other-states#using-arbitrary-variants). Pozwalają one na tworzenie niestandardowych selektorów.

Rozważmy przykład, w którym chcemy obrócić ikonę SVG w zależności od stanu `:open` elementu `details`. W tradycyjnym CSS, użylibyśmy selektora `details:open svg { rotate: 0.5turn; }`.

W Tailwind możemy osiągnąć podobny efekt za pomocą `arbitrary variants`.

```html
<details class="[&_svg]:open:-rotate-180">
  <summary>
    Otwórz mnie
    <svg>
      <!-- SVG stuff -->
    </svg>
  </summary>
</details>
```

Ta składnia Tailwind, `[&_svg]:open:-rotate-180`, jest interpretowana następująco:

- `&` odnosi się do bieżącego selektora, czyli w tym przypadku do `details`.
- `_svg` wskazuje, że chcemy stylować elementy SVG wewnątrz `details`.
- `:open:-rotate-180` dodaje obrót o 180 stopni, gdy `details` jest w stanie `open`.

Dzięki temu możemy tworzyć złożone i zaawansowane selektory w sposób zbliżony do klasycznego CSS, jednocześnie korzystając z tego, co daje nam Tailwind CSS.

Zobacz również [ten short na YT](https://www.youtube.com/watch?v=Y1av0bWl238) z innym przykładem.
