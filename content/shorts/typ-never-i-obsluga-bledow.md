---
title: Typ "never" i obsługa błędów
date: 2024-06-01T16:52:18.398Z
category: ts
---

Typ `never` w TypeScript reprezentuje zbiór pusty – oznacza, że żadna wartość nie może być tego typu. Używany jest do modelowania stanów, które nigdy nie powinny się wydarzyć, np. w kontekście obsługi błędów lub wyczerpywania przypadków w strukturach typu `switch`.

### Przykład zastosowania w funkcjach

Typ `never` może być szczególnie użyteczny w funkcjach, aby upewnić się, że wszystkie możliwe przypadki zostały obsłużone.

```typescript
type Circle = { kind: "circle"; radius: number };
type Square = { kind: "square"; side: number };
type Rectangle = { kind: "rectangle"; width: number; height: number };

type Shape = Circle | Square | Rectangle;

function assertNever(x: never): never {
  throw new Error("Unexpected object: " + x);
}

function area(s: Shape): number {
  switch (s.kind) {
    case "circle":
      return Math.PI * s.radius ** 2;
    case "square":
      return s.side ** 2;
    case "rectangle":
      return s.width * s.height;
    default:
      return assertNever(s); // Typ `never` zapewnia, że wszystkie przypadki są obsłużone
  }
}
```

W powyższym przykładzie, funkcja `assertNever` rzuca błąd, jeśli otrzyma wartość, która nie jest jednym z oczekiwanych typów (`Circle`, `Square`, `Rectangle`). Dzięki temu TypeScript podpowie nam, jeśli w przyszłości dodamy nowy typ do unii `Shape`, a zapomnimy zaktualizować funkcję `area` 👏

### Obsługa błędów za pomocą unii dyskryminowanych (`discriminated union`)

Innym sposobem na bardziej elegancką obsługę błędów w TypeScript jest wykorzystanie typów unii dyskryminowanych.

```typescript
type ErrorT = { kind: "error"; error: string };
type Success<T> = { kind: "success"; value: T };

type Result<T> = ErrorT | Success<T>;

function error(msg: string): ErrorT {
  return { kind: "error", error: msg };
}

function success<T>(value: T): Success<T> {
  return { kind: "success", value };
}

function divide(a: number, b: number): Result<number> {
  if (b === 0) {
    return error("Division by zero");
  }
  return success(a / b);
}

const result = divide(10, 0);

if (result.kind === "error") {
  console.error(result.error);
} else {
  console.log(result.value);
}
```

W tym przypadku, funkcja `divide` zwraca typ `Result<number>`, który może być albo sukcesem (`Success<number>`), albo błędem (`ErrorT`). Taki sposób definiowania błędów daje większą przejrzystość i lepszą kontrolę nad stanami aplikacji.

Zobacz również:

* [The `never` type and error handling in TypeScript](https://fettblog.eu/typescript-never-and-error-handling/)
