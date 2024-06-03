---
title: Wysyłanie "requestu" przy zamykaniu karty
date: 2024-06-03T07:52:10.073Z
category: js
---

Czasami trzeba wysłać dane na serwer, nawet jeśli użytkownik zamyka stronę. Wykorzystanie zdarzeń `unload` i `beforeunload` jest problematyczne, bo przeglądarki mogą nie wysyłać asynchronicznych żądań w tych momentach. Lepiej użyć `Navigator.sendBeacon()` \[[docs](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon)], który wysyła dane asynchronicznie i niezawodnie.

Oto przykład z `visibilitychange`:

```javascript
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    navigator.sendBeacon("/log", new URLSearchParams({ event: "pagehide" }));
  }
});
```

Metoda`sendBeacon` gwarantuje wysyłkę danych bez opóźnień, nawet przy zamykaniu kart.

Przeczytaj więcej na ten temat [tutaj](https://webdeveloper.beehiiv.com/p/securely-send-request-closing-tabs).
