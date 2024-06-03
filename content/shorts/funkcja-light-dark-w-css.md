---
title: Funkcja `light-dark()` w CSS
date: 2024-06-03T08:23:26.343Z
category: css
---

Dzięki funkcji `light-dark()` w CSS można ustawić dwa kolory dla jednej właściwości, które zmieniają się w zależności od preferencji kolorystycznych użytkownika (tryb jasny lub ciemny). Funkcja ta pozwala na określenie kolorów bez konieczności używania zapytań `@media prefers-color-scheme`.

Aby korzystać z funkcji `light-dark()`, należy ustawić `color-scheme` na `light dark`, zazwyczaj na pseudo-klasie `:root`.

```css
:root {
  color-scheme: light dark;
}

body {
  color: light-dark(#333b3c, #efefec);
  background-color: light-dark(#efedea, #223a2c);
}
```

## Przykład użycia funkcji `light-dark()` w HTML i CSS

HTML:

```html
<h1><code>light-dark()</code> CSS function</h1>
<section>
  <h2>Automatic</h2>
  <p>This section will react to the users system or user agent setting.</p>
</section>
<section class="light">
  <h2>Light</h2>
  <p>This section will be light due to the <code>color-scheme: light;</code>.</p>
</section>
<section class="dark">
  <h2>Dark</h2>
  <p>This section will be dark due to the <code>color-scheme: dark;</code>.</p>
</section>
```

CSS:

```css
:root {
  /* musi być ustawione aby przełączać między trybem jasnym i ciemnym */
  color-scheme: light dark;

  --light-bg: ghostwhite;
  --light-color: darkslategray;
  --light-code: tomato;

  --dark-bg: darkslategray;
  --dark-color: ghostwhite;
  --dark-code: gold;
}

* {
  background-color: light-dark(var(--light-bg), var(--dark-bg));
  color: light-dark(var(--light-color), var(--dark-color));
}

code {
  color: light-dark(var(--light-code), var(--dark-code));
}

.light {
  /* wymusza jasny schemat kolorów */
  color-scheme: light;
}

.dark {
  /* wymusza ciemny schemat kolorów */
  color-scheme: dark;
}
```

Więcej informacji do znlezienia [na stronach MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark).
