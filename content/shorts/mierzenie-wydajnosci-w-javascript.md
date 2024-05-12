---
title: Mierzenie wydajności w JavaScript
date: 2024-05-11T10:18:00.000Z
category: js
---

Czy wiesz, że w JavaScript możemy precyzyjnie mierzyć czas wykonania naszego kodu za pomocą funkcji `performance.now()`? Jest ona znacznie dokładniejsza niż `Date.now()` i pozwala na uzyskanie wyniku z dokładnością do mikrosekund.

Spójrzmy na przykład:

```js
const start = performance.now();

// Tutaj umieść swój kod, którego wydajność chcesz zmierzyć
for (let i = 0; i < 1000; i++) {
  console.log(i);
}

const end = performance.now();
console.log(`Czas wykonania: ${end - start} milisekund`);
```

W powyższym przykładzie mierzymy czas wykonania pętli `for`. Funkcja `performance.now()` zwraca czas w milisekundach od momentu uruchomienia strony / aplikacji, więc poprzez odjęcie czasu startu od czasu końca, otrzymujemy czas wykonania naszego kodu.

Jest to szczególnie użyteczne podczas optymalizacji wydajności aplikacji, gdy chcemy zrozumieć, które fragmenty kodu są "wąskimi gardłami" naszej aplikacji. Albo gdy chcemy udowodnić, że nasz kod jest szybszy od kodu napisanego przez kolegę 😎.
