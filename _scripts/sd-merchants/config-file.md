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

## sv_inventory.lua

## QBCore
```lua
ox_inventory = nil

if GetResourceState('ox_inventory'):find('start') then
    ox_inventory = exports.ox_inventory
end

function AddInventoryItem(src, item, amount, info)
    if ox_inventory then
        if ox_inventory:CanCarryItem(src, item, amount) then
            ox_inventory:AddItem(src, item, amount, info)
            return true
        else
            return false
        end
    else
        local Player = QBCore.Functions.GetPlayer(src)
        local itemInfo = QBCore.Shared.Items[item:lower()]
        info = info or {}
        if itemInfo['unique'] and amount > 1 then
            local itemsAdded = 0
            for i = 1, amount do
                if Player.Functions.AddItem(item, 1, false, info) then
                    itemsAdded = itemsAdded + 1
                end
            end

            if itemsAdded == amount then
                return true
            else
                for i = 1, itemsAdded do
                    Player.Functions.RemoveItem(item, 1)
                end
                return false
            end
            TriggerClientEvent('inventory:client:ItemBox', src, QBCore.Shared.Items[item], "add", amount)
        else
            if Player.Functions.AddItem(item, amount, false, info) then
                TriggerClientEvent('inventory:client:ItemBox', src, QBCore.Shared.Items[item], "add", amount)
                return true
            else
                return false
            end
        end
    end
end

function RemoveInventoryItem(src, item, amount, info, slot)
    if ox_inventory then
        return ox_inventory:RemoveItem(src, item, amount, info, slot)
    else
        local Player = QBCore.Functions.GetPlayer(src)
        if slot then
            if Player.Functions.GetItemBySlot(slot) and Player.Functions.RemoveItem(item, amount, slot) then
                TriggerClientEvent('inventory:client:ItemBox', src, QBCore.Shared.Items[item], "remove", amount)
                return true
            else
                return false
            end
        else
            local removed = amount
            local items = Player.Functions.GetItemsByName(item)
            for _, v in pairs(items) do
                if removed >= v.amount then
                    if Player.Functions.RemoveItem(item, v.amount) then removed = removed - v.amount end
                else
                    if Player.Functions.RemoveItem(item, removed) then removed = removed - removed end
                end
                if removed == 0 then break end
            end
            if removed == 0 then
                TriggerClientEvent('inventory:client:ItemBox', src, QBCore.Shared.Items[item], "remove", amount)
                return true
            else
                AddInventoryItem(src, item, (amount - removed))
                return true
            end
        end
    end
end

function GetInventoryItem(src, item, info)
    if ox_inventory then
        return ox_inventory:Search(src, 'slots', item, info)
    else
        local Player = QBCore.Functions.GetPlayer(src)
        return Player.Functions.GetItemsByName(item)
    end
end

function GetInventoryItemCount(src, item)
    if ox_inventory then
        return ox_inventory:GetItem(src, item, nil, true)
    else
        local Player = QBCore.Functions.GetPlayer(src)
        local items = Player.Functions.GetItemsByName(item)
        local amount = 0
        for _, v in pairs(items) do amount = amount + v.amount end
        return amount
    end
end

function GetItemLabel(item)
    if ox_inventory then
        return ox_inventory:Items()[item].label
    else
        return QBCore.Shared.Items[item]['label']
    end
end

function GetItemDescription(item)
    if ox_inventory then
        return ox_inventory:Items()[item].description
    else
        return QBCore.Shared.Items[item]['description']
    end
end

function GetInventoryImage(item)
    if ox_inventory then
        return item .. '.png'
    else
        return QBCore.Shared.Items[item]['image']
    end
end

function GetInventoryItemMetadata(src, item, slot)
    if ox_inventory then
        return ox_inventory:GetSlot(src, slot)?.metadata
    else
        local Player = QBCore.Functions.GetPlayer(src)
        return Player.Functions.GetItemBySlot(slot)?.info
    end
end

function CanInventoryItemStack(item)
    if ox_inventory then
        return ox_inventory:Items()[item]?.stack
    else
        return not QBCore.Shared.Items[item]['unique']
    end
end
```

## ESX
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