---
title: Discriminated Unions w TypeScript
date: 2024-05-11T19:01:38.772Z
category: ts
---

Bardzo często w naszych projektach możemy spotykać się z typem takim jak ten poniżej:

```typescript
type Order = {
  status: string; // "string" jest dość szerokim typem, a pewnie statusy zamówień są ograniczone do kilku wartości
  name: string;
  description?: string;
  expectedDelivery?: Date; // czemu opcjonalny?
  deliveredOn?: Date; // kiedy opcjonalny, a kiedy nie?
};
```

Ten sposób definiowania typów jest dość nieczytelny (czemu niektóre właściwości są opcjonalne?) i nieelastyczny. W takich przypadkach warto zastanowić się nad użyciem tzw. [Discriminated Unions](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions).

```typescript
type Order = {
  name: string;
  description?: string;
} & (
  | {
      status: "ready"; // "expectedDelivery" i "deliveredOn" nie powinny tutaj się poajawić
    }
  | {
      status: "inProgress";
      expectedDelivery: Date; // Dostępne wtedy, gdy status jest "inProgress"
    }
  | {
      status: "complete";
      expectedDelivery: Date; // Dostępne wtedy, gdy status jest "complete"
      deliveredOn: Date; // Dostępne wtedy, gdy status jest "complete"
    }
);
```

Ten zapis może wydawać się bardziej rozwlekły, ale działa już jako prosta dokumentacja domeny, usuwa mnóstwo niejasności i pozwala pisać bardziej przejrzysty kod. Teraz TS będzie w stanie "domyśleć" się, które właściwości są wymagane w zależności od statusu zamówienia.

Rozszerzenie tego tematu można znaleźć w ciekawych artykule: [How I ease the next developer reading my code](https://dev.to/noriste/how-i-ease-the-next-developer-reading-my-code-1986)
