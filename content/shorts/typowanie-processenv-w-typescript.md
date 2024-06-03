---
title: Typowanie `process.env` w TypeScript
date: 2024-05-11T10:14:00.000Z
category: ts
---

Szybki, czysty i prosty sposób na typowanie `process.env` w TypeScript z użyciem biblioteki [zod](https://zod.dev/).

```ts
import { z } from "zod";

const envVariables = z.object({
  DATABASE_URL: z.string(),
  CUSTOM_STUFF: z.string(),
});

envVariables.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}

process.env.DATABASE_URL;
//          ^ Auto-completion 🥳
```

Zobacz więcej [tutaj](https://www.youtube.com/watch?v=q1im-hMlKhM).
