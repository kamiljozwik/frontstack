---
title: Atrybut `capture` dla szybkiego zdjęcia
date: 2024-06-03T07:43:14.634Z
category: html
---

Atrybut `capture` jest używany w elementach `<input>` typu `file`, aby określić, że urządzenie powinno uruchomić kamerę lub mikrofon użytkownika do nagrania nowego pliku zamiast pozwalać na wybór istniejącego pliku z pamięci urządzenia.

Atrybut `capture` może przyjmować wartości `user` lub `environment`:

* `user` - Używa przedniej kamery lub mikrofonu (zwykle używane do selfie).
* `environment` - Używa tylnej kamery (zwykle używane do zdjęć otoczenia).

```html
<!-- Uruchomienie przedniej kamery -->
<input type="file" accept="image/*" capture="user">

<!-- Uruchomienie tylnej kamery -->
<input type="file" accept="image/*" capture="environment">
```

W powyższym przykładzie, pierwszy element `<input>` uruchomi przednią kamerę, natomiast drugi element uruchomi tylną kamerę. Użycie atrybutu `capture` zapewnia bardziej bezpośrednie doświadczenie użytkownika, umożliwiając szybkie wykonywanie zdjęć lub nagrań bez potrzeby przeszukiwania pamięci urządzenia.

Nie wszystkie [przeglądarki i urządzenia](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/capture) w pełni wspierają ten atrybut. Najlepiej przetestować jego działanie na docelowych platformach, aby upewnić się, że działa zgodnie z oczekiwaniami.
