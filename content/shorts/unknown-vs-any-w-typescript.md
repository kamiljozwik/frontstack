---
title: '"unknown" vs. "any" w TypeScript'
date: 2024-05-11T10:07:00.000Z
category: ts
---

W TypeScript typ `unknown` jest bezpieczniejszym odpowiednikiem typu `any`. Podczas gdy `any` pozwala nam na wszystko, `unknown` wymusza sprawdzanie typu przed wykonaniem operacji.

```ts
let foo: any = "hello";
foo = foo.split("").reverse().join(""); // Zadziała, ale...

let foo2: any = { greet: "hello" };
foo2 = foo.split("").reverse().join(""); // TS nie wykryje błędu, ale dostaniemy błąd w konsoli

let bar: unknown = "world";
bar = bar.split("").reverse().join(""); // TS podkreśli nam błąd w edytorze, ponieważ nie możemy użyć metody "split" na nieznanym typie.

bar = (bar as string).split("").reverse().join(""); // OK, ponieważ zadeklarowaliśmy typ, ale może być lepiej...
bar = typeof bar === "string" ? bar.split("").reverse().join("") : bar; // Jeszcze lepiej, ponieważ sprawdziliśmy typ
```

Z `unknown` TypeScript zapewnia, że musiz sprawdzić typ przed wykonaniem operacji, więc jest to dużo bezpieczniejsze podejście niż `any`.
