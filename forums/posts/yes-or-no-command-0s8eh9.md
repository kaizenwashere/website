---
title: "Yes or no command"
description: "Why i made this command?"
authors:
  name: "@dodogames"
  title: Member
  url: https://discord.com/users/632607624742961153
  image_url: https://cdn.discordapp.com/avatars/632607624742961153/5a4dc9bcccf66c5372f410c40d267708.png
tags: ["aoi.js","v6"]
hide_table_of_contents: false
enableComments: true
pagination_prev: null
pagination_next: null
---

Most ridiculous command (in my opinion) made for fun purposes.
```js
module.exports = {
name: "yesorno",
code: `> $message
*$randomText[yes;no]*
$cooldown[5s; Slow down! Don't spam the command!
Time left: \`%time%\`]
$onlyIf[$message!=;Please Ask me a question to answer you.]`
}
```