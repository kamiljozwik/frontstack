---
title: Odczyt wartości z package.json
date: 2024-05-11T10:19:00.000Z
category: node
---

Czy wiesz, że możesz odnosić się do wartości zdefiniowanych w pliku `package.json` bezpośrednio w definicjach skryptów npm/yarn? To świetne rozwiązanie, które pomaga uniknąć powtórzeń, szczególnie w większych projektach.

Przyjrzyjmy się przykładowi:

```json
{
  "name": "my-package",
  "config": {
    "src": "./src/*"
  },
  "scripts": {
    "lint": "eslint $npm_package_config_src",
    "test": "jest $npm_package_config_src"
  }
}
```

W powyższym przykładzie zdefiniowaliśmy ścieżkę `./src/*` jako część konfiguracji i odnosimy się do niej w skryptach `lint` i `test`. Dzięki temu, jeśli ścieżka ulegnie zmianie, wystarczy zaktualizować ją tylko w jednym miejscu.

Dodatkowo, wartości z `package.json` są dostępne również w Node.js poprzez `process.env`, gdy uruchamiasz skrypty za pomocą `yarn`:

```json
// package.json
{
  "foo": "bar",
  "scripts": {
    "start": "node index.js"
  }
}
```

```js
// index.js
console.log(process.env.npm_package_foo); // 'bar'
```

Kiedy uruchomisz `yarn start`, plik `index.js` będzie miał dostęp do wartości z `package.json` poprzez `process.env`.
