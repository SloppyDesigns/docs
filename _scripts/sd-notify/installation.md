---
layout: default
title: Installation
parent: SD-Notify
nav_order: 2
---

# Installation

## QBCore

1. Open **qb-core/client/functions.lua**
2. Search for **QBCore.Functions.Notify**
3. Replace with the code below.

```lua
function QBCore.Functions.Notify(text, texttype, length)
    if type(text) == "table" then
        local ttext = text.text or 'Placeholder'
        local caption = text.caption or 'Placeholder'
        texttype = texttype or 'primary'
        length = length or 5000
        exports['sd-notify']:Notify(caption, ttext, length, texttype)
    else
        texttype = texttype or 'primary'
        length = length or 5000
        exports['sd-notify']:Notify('', text, length, texttype)
    end
end
```

## ESX

1. Open **es_extended/client/functions.lua**
2. Search for **ESX.ShowNotification**
3. Replace with the code below.

### ESX Legacy 1.8.5
```lua
function ESX.ShowNotification(message, _type, _length)
    if GetResourceState("sd-notify") ~= "missing" then
        if type(message) == "table" then
            local text = message.text or ''
            local title = message.title or ''
            _type = _type or 'info'
            _length = _length or 5000
            exports['sd-notify']:Notify(title, text, length, type)
        else
            _type = _type or 'info'
            _length = _length or 5000
            exports['sd-notify']:Notify("", message, length, type)
        end
    else
        print("[^1ERROR^7] ^5SD Notify^7 is Missing!")
    end
end
```

### ESX Legacy 1.7.5
```lua
function ESX.ShowNotification(message, _type, _length)
    if Config.NativeNotify then 
        BeginTextCommandThefeedPost('STRING')
        AddTextComponentSubstringPlayerName(message)
        EndTextCommandThefeedPostTicker(0,1)
    else
        if type(message) == "table" then
            local text = message.text or ''
            local title = message.title or ''
            _type = _type or 'info'
            _length = _length or 5000
            exports['sd-notify']:Notify(title, text, _length, _type)
        else
            _type = _type or 'info'
            _length = _length or 5000
            exports['sd-notify']:Notify("", message, _length, _type)
        end
    end
end
```