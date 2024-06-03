---
title: Kilka nowych metod tablicowych
date: 2024-06-01T16:38:55.695Z
category: js
---

W ostatnich miesiącach pojawiło się kilka nowych metod tablicowych w JavaScript, o których warto wiedzieć. Metody pozwalają na manipulację tablicami bez modyfikowania (_mutowania_) oryginalnych danych.

- `toReversed()` - tworzymy odwróconą kopię tablicy.

```javascript
let wizards = ["Merlin", "Ursula", "Gandalf"];
let reversedWizards = wizards.toReversed();
console.log(reversedWizards); // ["Gandalf", "Ursula", "Merlin"]
console.log(wizards); // ["Merlin", "Ursula", "Gandalf"]
```

- `toSpliced()` - tworzymy kopię tablicy z usuniętymi elementami.

```javascript
let wizards = ["Merlin", "Ursula", "Gandalf", "Radagast"];
let lessWizards = wizards.toSpliced(2, 1);
console.log(lessWizards); // ["Merlin", "Ursula", "Radagast"]
```

- `toSorted()` - tworzymy posortowaną kopię tablicy.

```javascript
let wizards = ["Merlin", "Ursula", "Gandalf"];
let sortedWizards = wizards.toSorted();
console.log(sortedWizards); // ["Gandalf", "Merlin", "Ursula"]
```

- `with()` - tworzymy kopię tablicy z jednym zaktualizowanym elementem.

```javascript
let wizards = ["Merlin", "Ursula", "Gandalf"];
let differentWizards = wizards.with(2, "Radagast");
console.log(differentWizards); // ["Merlin", "Ursula", "Radagast"]
```

Więcej informacji znajdziesz [🔗tutaj](https://12daysofweb.dev/2023/new-js-array-methods/).
