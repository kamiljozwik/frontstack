---
title: Typ warunkowy `infer` w TS
date: 2024-05-11T10:09:00.000Z
category: ts
---

W TypeScript możemy wykorzystać typy warunkowe wraz z słowem kluczowym `infer` do wnioskowania o typach.

Przyjrzyjmy się poniższemu przykładowi:

```typescript
type ArrayTypes<T> = T extends (infer U)[] ? U : never;

let arr = [1, "2", []];
type test = ArrayTypes<typeof arr>; // typ test = string | number | any[]
```

W tym przykładzie, typ `ArrayTypes<T>` bierze typ `T` i sprawdza, czy `T` jest typem tablicy. Jeśli tak, to inferuje typ `U` z tablicy `T[]` i zwraca `U`. W przeciwnym razie zwraca `never`.

Ważne jest, aby zauważyć, że `infer` musi być podłączony do `U`, a nie do `[]`. Dlatego korzystamy z nawiasów w `(infer U)[]`. Bez nawiasów, TypeScript zinterpretowałby to jako `infer (U[])`, co byłoby niepoprawne, ponieważ `infer` może być używane tylko do inferencji typów, a nie struktur typów takich jak tablice.

Kolejny przykład, tym razem z obiektem. W tym przypadku `infer` stworzy nam typ, który będzie zawierał wszystkie typy wartości obiektu:

```typescript
type ObjectTypes<T> = T extends { a: infer U; b: infer U } ? U : never;

let obj = { a: 1, b: "2" };
type Test = ObjectTypes<typeof obj>; // typ Test = string | number
```

Jak widać możliwości tutaj są ogromne, więc warto zapoznać się z tym tematem.
