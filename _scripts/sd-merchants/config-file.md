---
layout: default
title: Config File
parent: SD-Merchants
nav_order: 1
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

## sv_currencies.lua

### QBCore
```lua
Config.Currencies['cash'] = {
    label = '${amount}',
    check = function(src, data)
        local Player = QBCore.Functions.GetPlayer(src)
        local cash = Player.Functions.GetMoney('cash')
        return cash >= data.amount
    end,
    remove = function(src, data)
        local Player = QBCore.Functions.GetPlayer(src)
        return Player.Functions.RemoveMoney('cash', data.amount)
    end,
    add = function(src, data)
        local Player = QBCore.Functions.GetPlayer(src)
        return Player.Functions.AddMoney('cash', data.amount)
    end,
}

Config.Currencies['bank'] = {
    label = '${amount}',
    check = function(src, data)
        local Player = QBCore.Functions.GetPlayer(src)
        local bank = Player.Functions.GetMoney('bank')
        return bank >= data.amount
    end,
    remove = function(src, data)
        local Player = QBCore.Functions.GetPlayer(src)
        return Player.Functions.RemoveMoney('bank', data.amount)
    end,
    add = function(src, data)
        local Player = QBCore.Functions.GetPlayer(src)
        return Player.Functions.AddMoney('bank', data.amount)
    end,
}

Config.Currencies['item'] = {
    label = '{amount}x {item}',
    check = function(src, data)
        local Player = QBCore.Functions.GetPlayer(src)
        local item = Player.Functions.GetItemByName(data.item)
        if item and item.amount >= data.amount then
            TriggerClientEvent('inventory:client:ItemBox', Player.PlayerData.source, QBCore.Shared.Items[data.item], "used")
            return true
        else
            return false
        end
    end,
    remove = function(src, data)
        local Player = QBCore.Functions.GetPlayer(src)
        local removed = Player.Functions.RemoveItem(data.item, data.amount)
        if removed then
            TriggerClientEvent('inventory:client:ItemBox', Player.PlayerData.source, QBCore.Shared.Items[data.item], "remove", data.amount)
            return true
        else
            return false
        end
    end,
    add = function(src, data)
        local Player = QBCore.Functions.GetPlayer(src)
        local added = Player.Functions.AddItem(data.item, data.amount)
        if added then
            TriggerClientEvent('inventory:client:ItemBox', Player.PlayerData.source, QBCore.Shared.Items[data.item], "add", data.amount)
            return true
        else
            return false
        end
    end,
}
```

### ESX
```lua
Config.Currencies['cash'] = {
    label = '${amount}',
    check = function(src, data)
        local xPlayer = ESX.GetPlayerFromId(src)
        local cash = xPlayer.getMoney()
        return cash >= data.amount
    end,
    remove = function(src, data)
        local xPlayer = ESX.GetPlayerFromId(src)
        if xPlayer.getMoney() >= data.amount then
            local current = xPlayer.getMoney()
            xPlayer.removeMoney(data.amount)
            return xPlayer.getMoney() == current - data.amount
        else
            return false
        end
    end,
    add = function(src, data)
        local xPlayer = ESX.GetPlayerFromId(src)
        local current = xPlayer.getMoney()
        xPlayer.addMoney(data.amount)
        return xPlayer.getMoney() == current + data.amount
    end,
}

Config.Currencies['bank'] = {
    label = '${amount}',
    check = function(src, data)
        local xPlayer = ESX.GetPlayerFromId(src)
        local bank = xPlayer.getAccount('bank')
        return bank.money >= data.amount
    end,
    remove = function(src, data)
        local xPlayer = ESX.GetPlayerFromId(src)
        local current = xPlayer.getAccount('bank')
        xPlayer.removeAccountMoney('bank', data.amount)
        return xPlayer.getAccount('bank').money == current.money - data.amount
    end,
    add = function(src, data)
        local xPlayer = ESX.GetPlayerFromId(src)
        local current = xPlayer.getAccount('bank')
        xPlayer.addAccountMoney('bank', data.amount)
        return xPlayer.getAccount('bank').money == current.money + data.amount
    end,
}

Config.Currencies['item'] = {
    label = '{amount}x {item}',
    check = function(src, data)
        return GetInventoryItemCount(src, data.item) > 0
    end,
    remove = function(src, data)
        return RemoveInventoryItem(src, data.item, data.amount)
    end,
    add = function(src, data)
        return AddInventoryItem(src, data.item, data.amount)
    end,
}
```

## sv_inventory.lua (ESX Only)
```lua
function AddInventoryItem(src, item, amount, info)
    if CanCarryItem(src, item, amount) then
        exports.ox_inventory:AddItem(src, item, amount, info)
        return true
    else
        return false
    end
end

function RemoveInventoryItem(src, item, amount, info, slot)
    return exports.ox_inventory:RemoveItem(src, item, amount, info, slot)
end

function CanCarryItem(src, item, amount)
    return exports.ox_inventory:CanCarryItem(src, item, amount)
end

function GetInventoryItem(src, item, info)
    return exports.ox_inventory:Search(src, 'slots', item, info)
end

function GetInventoryItemCount(src, item)
    return exports.ox_inventory:GetItem(src, item, nil, true)
end

function GetItemLabel(item)
    return exports.ox_inventory:Items()[item].label
end

function GetItemDescription(item)
    return exports.ox_inventory:Items()[item].description
end

function GetInventoryImage(item)
    return item .. '.png'
end

function GetInventoryItemMetadata(src, item, slot)
    return exports.ox_inventory:GetSlot(src, slot)?.metadata
end

function CanInventoryItemStack(item)
    return exports.ox_inventory:Items()[item].stack
end
```