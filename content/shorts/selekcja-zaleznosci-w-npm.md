---
title: Selekcja zależności w npm
date: '2024-05-11T05:35:47.928Z'
tags:
  - misc
---


Czy wiesz, że dzięki komendzie `npm query` oraz selektorom zależności, opartych na znanej składni CSS możesz szybkio i elastycznie filtrować zależności w projekcie Node.js?

Oto kilka przykładów:

1. Wypisanie wszystkich zależności (podobnie jak `npm list --all`):

```shell
  npm query "*"
```

1. Znalezienie wszystkich wersji `react` i `lodash` w projekcie:

```shell
  npm query "#react, #lodash"
```

1. Wyszukiwanie wersji `react`, które nie są zależnościami typu peer:

```shell
  npm query "#react:not(.peer)"
```

1. Znalezienie zależności z licencją `MIT`:

```shell
  npm query "[license=MIT]"
```

1. Wyszukiwanie zależności z repozytorium git:

```shell
  npm query ":type(git)"
```

1. Sprawdzenie, które zależności transakcyjne używają skryptu `postinstall`:

```shell
  npm query ":attr(scripts, [postinstall]):not(:root > *)"
```

👉 Więcej informacji do znalezienia [tutaj](https://github.blog/changelog/2022-08-03-introducing-the-new-npm-dependency-selector-syntax/), [tutaj](https://docs.npmjs.com/cli/v10/using-npm/dependency-selectors) oraz [tutaj](https://www.youtube.com/watch?v=h_ZpixOgKDY).
