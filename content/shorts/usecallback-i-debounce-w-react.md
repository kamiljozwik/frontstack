---
title: '"useCallback" i "debounce" w React'
date: 2024-05-11T10:12:00.000Z
category: react
---

Szybki snippet na to, aby połączyć ze sobą `useCallback` oraz funkcję `debounce()` (chyba nie muszę nikomu jej przedstawiać 😉) z biblioteki `lodash` (albo z naszej własnej implementacji).

```typescript
import { useMemo } from "react";
import debounce from "lodash.debounce";

function MyComponent() {
  const changeHandler = () => {
    // handle the event...
  };
  const eventHandler = () => {
    // handle the event...
  };

  // Option A: useCallback() stores the debounced callback
  const debouncedChangeHandler = useCallback(debounce(changeHandler, 300), []);

  // Option B: useMemo() stores the debounced callback
  const debouncedEventHandler = useMemo(() => debounce(eventHandler, 300), []);

  // ...
}
```

Sprawdź dokładniejszy opis i więcej przykładów [w tym artykule](https://dmitripavlutin.com/react-throttle-debounce/).
