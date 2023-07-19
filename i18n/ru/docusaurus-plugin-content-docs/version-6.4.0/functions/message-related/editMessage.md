---
title: $editMessage
description: '$editMessage отредактирует данное сообщение.'
id: editMessage
---

`$editMessage` отредактирует данное сообщение.

## Использование

```php
$editMessage[messageID;content;channelID?]
```

## Параметры

| Название     | Nbg    | Описание                                    | Нужно |
| ------------ | ------ | ------------------------------------------- |:-----:|
| ID сообщения | целое  | Сообщение, которое следует отредактировать. |  да   |
| контент      | строка | Содержимое нового сообщения.                |  да   |
| ID канала?   | целое  | ID канала, в котором находится сообщение.   | false |

Вы можете редактировать только сообщения, отправленные самим ботом.

## Пример(ы)

Отправленное сообщение будет отредактировано через пять секунд: ( работает так же, как `$editIn`)

```javascript
bot.command({
    name: 'editMessage',
    code: `
  $editMessage[$get[id];Bye!]
  $wait[5s]
  $let[id;$sendMessage[Hello!;true]]
  `
});
```