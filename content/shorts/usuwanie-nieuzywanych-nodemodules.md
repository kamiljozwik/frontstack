---
title: Usuwanie nieużywanych `node_modules`
date: 2024-05-11T10:15:00.000Z
category: node
---

Wszyscy znamy problem gromadzenia się wielu repozytoriów na naszym dysku. Przy projektach korzystających z Node.js, foldery `node_modules` mogą zajmować setki megabajtów 🤯. Ręczne ich usuwanie to dośc żmudna praca, ale na szczęście istnieje prosty sposób - paczka [npkill](https://www.npmjs.com/package/npkill).

Możemy ją uruchomić bezpośrednio w terminalu:

```
$ npx npkill
```

Po uruchomieniu tego polecenia, `npkill` wyświetli listę wszystkich folderów `node_modules` w danym, oraz w zagnieżdżonych katalogach i pozwoli na ich błyskawiczne usunięcie z dysku 🧹.
