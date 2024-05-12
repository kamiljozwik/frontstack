---
title: Aliasy podczas importów w TS
date: 2024-05-11T10:06:00.000Z
category: ts
---

Macie już dość _kropkowania_ podczas importów? [Aliasy](https://www.typescriptlang.org/tsconfig#paths) w TS mogą nam tutaj znacznie uprościć życie. Do pliku `tsconfig.json` wystarczy dodać następującą konfigurację:

```json
{
  "compilerOptions": {
    // Your other options...
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

Od teraz możemy zaczynać nasze importy od zdefiniowanego wcześniej poziomu w naszej aplikacji:

```ts
import { Button } from "@/components/Button"; // 🤩 import z "src/components/Button"
import { OtherButton } from "../../../components/Button"; // 😥
```

Taka składnia jest dużo czytelniejsza i łatwiejsza do utrzymania. Jeśli zmienimy zagnieżdżenie bądź położenie folderu, to nie musimy martwić się o zmianę ścieżek w naszym kodzie 💪.
