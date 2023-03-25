---
layout: default
title: Config File
parent: SD-Merchants
nav_order: 2
---
# Config File

## cl_config.lua

### QBCore
```lua
Config.Notification = function(title, message, type, time)
    QBCore.Functions.Notify({ caption = title, text = message }, type, time)
end
```

### ESX
```lua
Config.Notification = function(title, message, type, time)
    exports['sd-notify']:Notify(title, message, time, type)
end
```