---
title: "`type guards` dla tablic danych"
date: 2024-05-11T10:00:00.000Z
category: ts
---

Mając tablicę danych, która może zawierać różne typy (czyli np. nie jesteśmy pewni odpowiedzi z API), możemy użyć [type guard](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates) i metodę `.every()` zamiast `if-ów`, żeby zawęzić sobie typowanie.

```ts
// type guard z użyciem słowa kluczowego "is"
function isArrayOfNumbers(arr: unknown[]): arr is number[] {
  return arr.every((element) => typeof element === "number");
}

const arr = [1, 2, 3, 4, 5];

if (isArrayOfNumbers(arr)) {
  console.log(arr[0].toFixed); // ✅ OK, wiemy, że "arr" jest tablicą liczb
} else {
  console.log(arr[0].toFixed); // ⛔ ERROR, nie możemy użyć metody ".toFixed()" na typie "unknown"
}
```

Powyżej mamy prosty przykład z tablicą liczb, ale możemy też użyć tego rozwiązania do bardziej skomplikowanych typów danych.
