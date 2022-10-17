---
layout: default
title: SD-Notify
nav_order: 4
has_children: true
has_toc: false
prev_page: /index
next_page: /scripts/sd-notify/installation/index
prev_title: About Us
next_title: Installation
permalink: /scripts/sd-notify
---

# SD-Notify

___
[Preview](https://www.youtube.com/watch?v=z8XstRn0gCg)

___

**Client Side**
```lua
exports['sd-notify']:Notify('Title', 'Message', length, type, position)
```

**Server Side**
```lua
TriggerClientEvent('sd-notify:Notify', source, 'Title', 'Message', length, type, position)
```

