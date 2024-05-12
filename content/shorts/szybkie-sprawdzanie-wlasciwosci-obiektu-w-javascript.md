---
title: Sprawdzanie właściwości obiektu JS
date: 2024-05-11T10:02:00.000Z
category: js
---

Czy wiedziałeś, że możesz sprawdzić, czy obiekt ma daną właściwość używając operatora `in`?

Oto jak to zrobić:

```javascript
const myObject = { foo: "bar" };

console.log("foo" in myObject); // true
console.log("baz" in myObject); // false
```

Szybko i czysto, bez potrzeby sprawdzania `undefined` 😉
