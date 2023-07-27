---
title: $cropText
description: '$cropText обрезает данный текст.'
id: cropText
---

`$cropText` используется для обрезания данного текста.

## Использование

```php
$cropText[text;limit;start?]
```

## Параметры

| Название | Nbg    | Описание                                                                | Нужно |
| -------- | ------ | ----------------------------------------------------------------------- |:-----:|
| текст    | строка | Текст, который вы хотите разрезать.                                     |  да   |
| предел   | число  | Ограничение обрезанного текста/начнёт обрезать любой текст после этого. |  да   |
| начать?  | число  | Там, где должна начинаться обрезание.                                   | ложь  |

## Пример(ы)

Это вернет `от` и удалит `приветствие и` из заданного текста:

```javascript
bot.command({
    name: 'cropText',
    code: `
$cropText[hello and bye;20;9]
  `
});
```