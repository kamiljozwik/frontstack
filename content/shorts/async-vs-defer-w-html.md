---
title: '`async` vs. `defer` w HTML'
date: 2024-06-03T07:03:24.320Z
category: html
---

Kiedy dodajemy skrypty do naszego dokumentu HTML, możemy użyć atrybutów `async` i `defer` w celu optymalizacji ładowania stron. Oba te atrybuty mają na celu usprawnienie działania strony, ale działają w nieco inny sposób.

Atrybut `async` powoduje, że skrypt jest ładowany asynchronicznie i wykonywany natychmiast po zakończeniu ładowania, bez czekania na zakończenie parsowania dokumentu HTML.

```html
<script src="script.js" async></script>
```

* Skrypt ładuje się równocześnie z parsowaniem dokumentu.
* Wykonuje się natychmiast po załadowaniu.
* Nie zachowuje kolejności w stosunku do innych skryptów.

Atrybut `defer` powoduje, że skrypt jest ładowany równocześnie z parsowaniem dokumentu, ale wykonuje się dopiero po zakończeniu parsowania całego dokumentu HTML.

```html
<script src="script.js" defer></script>
```

* Skrypt ładuje się równocześnie z parsowaniem dokumentu.
* Wykonuje się po zakończeniu parsowania całego dokumentu.
* Zachowuje kolejność w stosunku do innych skryptów z atrybutem `defer`.

## Kiedy używać?

* `async` jest użyteczny dla skryptów, które nie mają zależności od innych skryptów lub od struktury dokumentu HTML.
* `defer` jest idealny dla skryptów, które muszą być wykonane po pełnym załadowaniu dokumentu i które muszą zachować kolejność względem innych skryptów.
