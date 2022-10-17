---
layout: default
title: Config File
parent: SD-Notify
nav_order: 2
---

# Config File

```lua
Config = {}

-- top-left | top-right | top-center | bottom-left | bottom-right | bottom-center | right-center | left-center
Config.DefaultPosition = 'right-center'

-- bounce | slide | zoom | flip
Config.Transition = 'bounce'

-- light | dark | colored | custom
Config.Theme = 'dark'

-- Add Custom Types
Config.Types = {
    ['primary'] = {
        icon = 'fa-solid fa-comment fa-lg',
        color = '#87838a',
    },
    ['info'] = {
        icon = 'fa-solid fa-circle-info fa-lg',
        color = '#59C2DA',
    },
    ['success'] = {
        icon = 'fa-solid fa-circle-check fa-lg',
        color = '#58D96E',
    },
    ['error'] = {
        icon = 'fa-solid fa-circle-xmark fa-lg',
        color = '#E64A63',
    },
    ['warning'] = {
        icon = 'fa-solid fa-triangle-exclamation fa-lg',
        color = '#f1c40f',
    },
    ['phone'] = {
        icon = 'fa-solid fa-phone fa-lg',
        color = '#ebae34',
    },
}
```