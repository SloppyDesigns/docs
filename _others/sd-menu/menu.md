---
layout: default
title: Menu
parent: SD-Menu
prev_page: /others/sd-menu/config=file
next_page: /others/sd-menu/input
prev_title: About Us
next_title: Config
nav_order: 2
---

# Menu

## Main Options

| option       | description             | type              |
|:-------------|:------------------------|:------------------|
| disabled     | Set Option Disabled     | boolean
| header       | Set Header Text         | string
| txt          | Set Description Text    | string
| icon         | Set FontAwesome Icon    | string
| params       | Parameters              | table

## Parameters Table

| option       | description             | type              |
|:-------------|:------------------------|:------------------|
| server       | Is Server Event         | boolean
| event        | Set Event               | string
| args         | Set Arguments           | any

## Example

```lua
exports['Your-Resource-Name']:CreateMenu({
    {
        disabled = true,                                        
        header = "Header Text",                               
        icon = "fa-solid fa-question",
    },
    {
        disabled = true,                                        
        header = "Header Text",                               
        icon = "fa-solid fa-question",                       
        txt = "Description Text",                                
        params = {                                              
            server = true,                                     
            event = "your-event",                         
            args = {                                            
                'MyFirstArg',
                'MySecondArg',
                true   
            }                         
        }
    },
})

RegisterNetEvent('your-event', function(arg1, arg2, arg3)
    print(arg1, arg2, arg3)
    -- Result:  MyFirstArg  MySecondArg true
end)
```