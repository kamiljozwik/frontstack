---
title: Readonly w TS
date: 2024-05-11T08:53:04.738Z
tags:
  - ts
---

W języku TypeScript można użyć modyfikatora `readonly`, aby wskazać, że właściwość klasy lub interfejsu jest tylko do odczytu, co oznacza, że po przypisaniu do niej wartości nie można jej zmienić. Oto krótki przykład:

```ts
interface Point {
  readonly x: number;
  readonly y: number;
}

let p: Point = { x: 10, y: 20 };
p.x = 5; // Error: Cannot assign to 'x' because it is a read-only property
```

W powyższym kodzie `x` i `y` w `Point` są właściwościami tylko do odczytu 💪.
