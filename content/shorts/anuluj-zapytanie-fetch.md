---
title: Anuluj zapytanie `fetch`
date: 2024-06-03T08:02:33.403Z
category: js
---

Dzięki `AbortController` możemy anulować żądania `fetch` w JavaScript. Jest to szczególnie przydatne, gdy chcemy przerwać długotrwałe zapytania sieciowe, np. w odpowiedzi na akcje użytkownika.

```javascript
const controller = new AbortController();
const signal = controller.signal;

fetch("https://api.example.com/data", { signal })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    if (error.name === "AbortError") {
      //  wiemy, że request został przerwany w sposób kontrolowany przez nas
      console.log("Fetch aborted!");
    } else {
      //  Wystąpił nieoczekiwany błąd
      console.error("Fetch error:", error);
    }
  });

// Anulowanie zapytania po 5 sekundach
setTimeout(() => {
  controller.abort();
}, 5000);
```

Metodę `controller.abort()` równie dobrze możemy [podpiąć pod przycisk](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) na UI i dać możliwość anulowania zapytania użytkownikowi.
