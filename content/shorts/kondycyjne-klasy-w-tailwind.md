---
title: Kondycyjne klasy w Tailwind
date: 2024-05-11T18:47:27.463Z
category: tailwind
---

Kondycyjne dodawanie klas w Tailwindzie nie jest tak oczywiste, jak mogłoby się wydawać. Tailwind generuje pliki CSS na podstawie klas które znajdzie w kodzie, więc dodawanie logiki warunkowej do klas może spowodować, że dana klasa nie zostanie uwzględniona przez Tailwinda w trakcie budowania strony.

Na szczęście możemy to łatwo rozwiązać za pomocą małego helpera:

```ts
import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Utility function to add Tailwind classes conditionally */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

Przykład użycia w komponencie Reacta:

```tsx
import { cn } from "./utils/cn";

export function Button({ variant = "primary" }) {
  return (
    <button
      className={cn("px-4 py-2 rounded-md", {
        "bg-blue-500 text-white": variant === "primary", // klasy dodane tylko wtedy, gdy "variant" jest równy "primary"
        "bg-gray-200 text-gray-800": variant === "secondary", // klasy dodane tylko wtedy, gdy "variant" jest równy "secondary"
      })}
    >
      Click me
    </button>
  );
}
```

👉 Więcej informacji o tym helperze możecie znaleźć [tutaj](https://www.youtube.com/shorts/1Hgc6EU9PSg) oraz [tutaj](https://www.youtube.com/watch?v=re2JFITR7TI).
