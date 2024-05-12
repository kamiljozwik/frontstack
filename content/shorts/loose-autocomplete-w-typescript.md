---
title: Loose Autocomplete w TypeScript
date: 2024-05-11T10:13:00.000Z
category: ts
---

Chcesz, aby zdefiniowany przez Ciebie typ [union](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types) przyjmował również ogólnego `string`-a, ale zachował możliwość automatycznego uzupełniania zdefiniowanych wartości? Możesz użyć pewnego tricku, aby to osiągnąć 🪄

Oto przykład:

```typescript
// VS Code nie będzie podpowiadał wartości "foo", "bar" i "baz" 😢
type MyType = "foo" | "bar" | "baz" | string;

// Możemy podać dowolny string, ale VS Code będzie podpowiadał wartości "foo", "bar" i "baz" 🤩
type MyBetterType = "foo" | "bar" | "baz" | (string & {});
```

Teraz nasz typ jest bardziej elastyczny, ale nadal możemy korzystać z automatycznego uzupełniania w VS Code 💪
