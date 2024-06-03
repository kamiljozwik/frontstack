---
title: Operator `satisfies`
date: 2024-06-01T15:34:40.578Z
category: ts
---

Operator `satisfies` w TypeScript jest przydatny, gdy chcemy upewnić się, że wyrażenie spełnia określony typ, ale jednocześnie chcemy zachować jak najbardziej szczegółowy typ tego wyrażenia do celów inferencji.

## Przykład 1: Wzięty z dokumentacji

Załóżmy, że mamy paletę kolorów, gdzie każdy kolor może być reprezentowany jako `string` lub `tuple` RGB. Chcemy zachować typy `string` oraz `tuple`, ale także upewnić się, że klucze są poprawne.

```typescript
type Colors = "red" | "green" | "blue";
type RGB = [red: number, green: number, blue: number];

const paleta = {
  red: [255, 0, 0],
  green: "#00ff00",
  bleu: [0, 0, 255],
  //  ~~~~ Błąd - literówka!
} satisfies Record<Colors, string | RGB>;

// Zachowujemy dostęp do metod typowych dla stringów i tuples!
const redComponent = paleta.red.at(0); // TS i VS Code wiedzą, że 'paleta.red' jest tablicą.
const greenNormalized = paleta.green.toUpperCase(); // TS wie, że 'paleta.green' ma typ string
```

## Przykład 2: Ograniczenie kluczy obiektu

Możemy upewnić się, że obiekt ma dokładnie takie klucze, jakie określiliśmy w typie `Colors`, bez dodawania dodatkowych kluczy.

```typescript
type Colors = "red" | "green" | "blue";

const myColors = {
  red: "tak",
  green: false,
  blue: "tak",
  platypus: false,
  //  ~~~~~~~~~~ Błąd - "platypus" nie jest zdefiniowany w 'Colors'.
} satisfies Record<Colors, unknown>;

// Zachowujemy informacje o właściwościach 'red', 'green' i 'blue'.
const zielony: boolean = myColors.green; // TS wie, że 'myColors.green' ma typ 'boolean'
```

Gdy jednak zapiszemy to następująco (za pomocą anotacji zmiennych):

```typescript
type Colors = "red" | "green" | "blue";

const myColors: Record<Colors, unknown> = {
  red: "tak",
  green: false,
  blue: "tak",
  platypus: false,
  //  ~~~~~~~~~~ Błąd - "platypus" nie jest zdefiniowany w 'Colors'.
};

// Tracimy informacje o właściwościach 'red', 'green' i 'blue'.
const zielony: boolean = myColors.green; // TS sądzi, że 'myColors.green' jest typu 'unknown'
//             ^ Type 'unknown' is not assignable to type 'boolean'
```

## Przykład 3: Walidacja wartości

Możemy upewnić się, że wartości wszystkich właściwości obiektu są zgodne z określonym typem.

```typescript
type Scores = Record<string, number>;

const wyniki = {
  matematyka: 90,
  fizyka: 85,
  angielski: "95", //  ~~~~~~ Błąd - wartość powinna być liczbą!
} satisfies Scores;

// Informacje o każdym typie właściwości są tak jak poprzednio zachowane.
const matematykaScore = wyniki.matematyka; // number
const fizykaScore = wyniki.fizyka; // number
```

Operator `satisfies` jest świetny do utrzymywania wąskich typów, co pomaga zachować dokładne informacje typów oraz autouzupełnianie w IDE, takich jak VS Code. Anotacje zmiennych są lepsze do rozszerzania typów.

Dzięki `satisfies` możemy również wychwytywać literówki i inne błędy typów na etapie kompilacji, co znacząco ułatwia pracę z kodem TypeScript.

- [TypeScript 4.9](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html)
- [Most TS devs don't understand 'satisfies'](https://www.youtube.com/watch?v=r1L35zxZQPE)
