---
title: Typy warunkowe w TypeScript
date: 2024-05-11T10:08:00.000Z
category: ts
---

Typy warunkowe w TypeScript pozwalają na wybór typu w zależności od warunku. Jest to dość przydatne narzędzie, które pozwala na tworzenie bardziej złożonych typów.

```typescript
type IsString<T> = T extends string ? true : false;

type X = IsString<"hello">; // true
type Y = IsString<number>; // false
type Z = IsString<{ name: string }>; // false
```

W tym prostym przykładzie, `IsString` jest typem warunkowym, który sprawdza, czy podany typ `T` jest stringiem. Jeśli tak, to zwraca `true`, a w przeciwnym razie zwraca `false`.

Pamiętaj, że typy warunkowe mogą być zagnieżdżone i mogą używać dowolnej logiki (możemy np. używać tego sprawdzenia w `if`-ach i zawężać bardziej typowanie), która jest dostępna w typach, co czyni je niezwykle elastycznymi i potężnymi narzędziami do modelowania typów w TypeScript.
