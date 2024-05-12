---
title: Selekcja zależności w npm
date: 2024-05-11T10:20:00.000Z
category: node
---

Czy wiesz, że dzięki komendzie `npm query` oraz selektorom zależności, opartych na znanej składni CSS możesz szybko i elastycznie filtrować zależności w projekcie Node.js?

Oto kilka przykładów:

- Wypisanie wszystkich zależności (podobnie jak `npm list --all`):

```shell
  npm query "*"
```

- Znalezienie wszystkich wersji `react` i `lodash` w projekcie:

```shell
  npm query "#react, #lodash"
```

- Wyszukiwanie wersji `react`, które nie są zależnościami typu peer:

```shell
  npm query "#react:not(.peer)"
```

- Znalezienie zależności z licencją `MIT`:

```shell
  npm query "[license=MIT]"
```

- Wyszukiwanie zależności z repozytorium git:

```shell
  npm query ":type(git)"
```

- Sprawdzenie, które zależności transakcyjne używają skryptu `postinstall`:

```shell
  npm query ":attr(scripts, [postinstall]):not(:root > *)"
```

👉 Więcej informacji do znalezienia [tutaj](https://github.blog/changelog/2022-08-03-introducing-the-new-npm-dependency-selector-syntax/), [tutaj](https://docs.npmjs.com/cli/v10/using-npm/dependency-selectors) oraz [tutaj](https://www.youtube.com/watch?v=h_ZpixOgKDY).
