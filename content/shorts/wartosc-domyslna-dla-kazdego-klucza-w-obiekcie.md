---
title: Wartość domyślna dla każdego klucza w obiekcie
date: 2024-05-11T10:03:00.000Z
category: js
---

Czasami chcemy (niezbyt często, ale może się zdarzyć 😉), aby właściwości obiektu były automatycznie inicjalizowane. Powszechnym sposobem radzenia sobie z tym jest korzystanie z metod `getter` i `setter`. Jednak może to stać się uciążliwe, jeśli mamy wiele właściwości. Właśnie tutaj obiekt [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy?retiredLocale=pl) może okazać się bardzo pomocny.

`Proxy` w JavaScript jest używane do definiowania niestandardowego zachowania dla podstawowych operacji (np. wyszukiwanie, przypisanie, wyliczanie, wywoływanie funkcji itp.) obiektów.

Proxy możemy również użyć więc również do automatycznego inicjowania właściwości obiektów, których właściwości nie są do końca znane:

```js
const autoInit = (defaultValue) =>
  new Proxy(
    {},
    {
      get: (target, name) =>
        name in target ? target[name] : (target[name] = defaultValue),
    }
  );

const myObject = autoInit([]);

console.log(myObject.foo); // []

myObject.foo.push("bar");

console.log(myObject.foo); // ['bar']
```

W tym przykładzie każda właściwość `myObject`, która jest dostępna przed jej ustawieniem, zostanie automatycznie zainicjowana na pustą tablicę (lub dowolną inną domyślną wartość, którą podamy). Może to być dość przydatne w sytuacjach w których chcemy uniknąć wartości `undefined`.
