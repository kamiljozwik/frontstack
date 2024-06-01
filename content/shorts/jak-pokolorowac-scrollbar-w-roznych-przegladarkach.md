---
title: Jak pokolorować scrollbar w różnych przeglądarkach
date: 2024-06-01T16:43:19.978Z
category: misc
---

Dziś nauczymy się, jak dostosować kolor paska przewijania, aby działał we wszystkich przeglądarkach 🎨

### CSS dla Chrome, Edge, Safari

```css
/* Firefox */
html {
  scrollbar-color: blue white;
  scrollbar-width: thin;
}

/* WebKit and Chromiums */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background-color: white;
}

::-webkit-scrollbar-thumb {
  background: blue;
  border-radius: 5px;
}
```

Dzięki tym stylom, Twój pasek przewijania będzie wyglądał spójnie na różnych przeglądarkach.

Więcej informacji na ten temat do znalezienia [🔗tutaj.](https://www.stefanjudis.com/snippets/how-to-color-the-browser-scrollbar-across-browsers/)
