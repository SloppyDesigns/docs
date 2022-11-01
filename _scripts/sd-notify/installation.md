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

```lua
function ESX.ShowNotification(message, type, length)
    if GetResourceState("sd-notify") ~= "missing" then
        if type(message) == "table" then
            local text = message.text or 'Placeholder'
            local title = message.title or 'Placeholder'
            exports['sd-notify']:Notify(title, text, length, type)
        else
            exports['sd-notify']:Notify("", message, length, type)
        end
    else
        print("[^1ERROR^7] ^5SD Notify^7 is Missing!")
    end
end
```