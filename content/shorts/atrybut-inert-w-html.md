---
title: Atrybut `inert` w HTML
date: 2024-06-03T08:32:46.366Z
category: html
---

## Atrybut `inert` w HTML

Atrybut globalny `inert` jest atrybutem typu `boolean`, wskazującym, że przeglądarka będzie ignorować dany element. Kiedy element jest oznaczony jako `inert`, wszystkie jego "dzieci" również są ignorowane przez przeglądarkę.

Co dokładnie robi `inert`? Oto kilka kluczowych punktów:

* Zapobiega wywoływaniu zdarzenia kliknięcia (`click`), gdy użytkownik kliknie na element.
* Zapobiega zdarzeniu ustawienia fokusu (`focus`), uniemożliwiając elementowi uzyskanie fokusu.
* Zawartość elementu nie jest znajdowana w przeglądarce podczas wyszukiwania na stronie.
* Użytkownicy nie mogą zaznaczać tekstu w elemencie, co jest podobne do użycia właściwości CSS `user-select`.
* Użytkownicy nie mogą edytować zawartości elementu, nawet jeśli normalnie byłaby edytowalna.
* Element i jego zawartość są ukrywane przed technologiami wspomagającymi, poprzez wykluczenie ich z drzewa dostępności.

Przykład użycia:

```html
<div inert>
  <!-- zawartość -->
</div>
```

Należy zachować ostrożność przy stosowaniu atrybutu `inert`, aby nie wpłynąć negatywnie na dostępność strony. Domyślnie nie ma wizualnego sposobu, aby wskazać, czy element lub jego poddrzewo jest `inert`. Jako deweloperzy mamy obowiązek wyraźnie zaznaczyć, które części treści są aktywne, a które są `inert`.

Źródło: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inert)
