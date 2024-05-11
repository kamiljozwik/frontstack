---
title: '"extends keyof" vs. "in keyof" w TypeScript'
date: 2024-05-11T19:00:29.247Z
category: ts
---

Czy zdarzyło Ci się czasami trochę pogubić lub nie do końca rozumieć różnicę pomiędzy `extends keyof` i `in keyof` w TypeScript?

Oto krótkie wyjaśnienie:

`extends keyof` jest używane w TypeScript dla typów generycznych. Wskazuje, że typ generyczny musi być kluczem określonego obiektu.

Oto prosty przykład:

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

console.log(getProperty(x, "a")); // Output: 1
console.log(getProperty(x, "m")); // Error: Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.
```

W tym przykładzie `K extends keyof T` oznacza, że `K` powinien być kluczem obiektu `T`. Dlatego TypeScript wyświetli błąd, jeśli spróbujesz użyć właściwości, która nie istnieje w obiekcie.

Wyrażenie `in keyof` jest używane z typami mapowanymi, które są sposobem na tworzenie nowych typów na podstawie starych. Tak więc `in keyof` pozwala nam iterować po kluczach typu obiektu.

Brzmi może nieco trudniej, ale spójrzmy na kolejny przykład:

```typescript
interface User {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  joinedDate: Date;
}

type AllStrings<T> = {
  [K in keyof T]: string; // nasz nowy typ będzie zawierał wszystkie klucze z T
};

let user: User = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  age: 30,
  joinedDate: new Date(2023, 1, 1),
};

let userInStrings: AllStrings<User> = {
  firstName: user.firstName,
  lastName: user.lastName,
  email: user.email,
  age: String(user.age),
  joinedDate: user.joinedDate.toISOString(),
};

console.log(userInStrings);
// Output: { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', age: '30', joinedDate: '2023-02-01T00:00:00.000Z' }
```

Tutaj `AllStrings<T>` jest typem mapowanym, który konwertuje wszystkie właściwości `T` na ciągi znaków. Używamy `in keyof` (`[K in keyof T]`), aby przejść przez każdy klucz w `T` i przypisać mu nowy typ (w tym przypadku `string`). W `userInStrings` używamy tego zmapowanego typu do utworzenia obiektu, w którym wszystkie wartości są łańcuchami, co może być przydatne do niektórych rodzajów przetwarzania, serializacji, rejestrowania lub debugowania.
