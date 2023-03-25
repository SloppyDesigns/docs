---
layout: default
title: Config File
parent: SD-Merchants
nav_order: 2
---

# cl_config.lua
```lua
-- ❗ CLIENT NOTIFICATION ❗
Config.Notification = function(title, message, type, time)
    QBCore.Functions.Notify({ caption = title, text = message }, type, time)
end
```