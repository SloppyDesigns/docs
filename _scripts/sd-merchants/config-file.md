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

## sh_config.lua

### QBCore
```lua
Config = {}

Config.Debug = true

Config.PathDebug = false

Config.CreationTool = false

Config.Inventory = 'qb-inventory/html/images/'

Config.Merchants = {}
```

### ESX
```lua
Config = {}

Config.Locale = 'en'

Config.Debug = false

Config.PathDebug = false

Config.CreationTool = false

Config.Inventory = 'ox_inventory/web/images'

Config.Merchants = {}
```

## sv_config.lua

### QBCore
```lua
Config.Currencies = {}

Config.Examples = true

Config.Notification = function(src, title, message, type, time)
    TriggerClientEvent('QBCore:Notify', src, { caption = title, text = message }, type, time)
end

Config.Discord = {
    ['open'] = '',
    ['buy'] = '',
    ['sell'] = '',
    ['market_buy'] = '',
    ['market_sell'] = '',
    ['market_collect'] = '',
}
```

### ESX
```lua
Config.Currencies = {}

Config.Examples = true

Config.Notification = function(src, title, message, type, time)
    TriggerClientEvent('sd-notify:Notify', src, title, message, time, type)
end

Config.Discord = {
    ['open'] = '',
    ['buy'] = '',
    ['sell'] = '',
    ['market_buy'] = '',
    ['market_sell'] = '',
    ['market_collect'] = '',
}
```