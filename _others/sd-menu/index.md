---
layout: default
title: SD-Menu
nav_order: 1
has_children: true
has_toc: false
prev_page: /index
next_page: /others/sd-menu/config-file
prev_title: About Us
next_title: Config
permalink: /others/sd-menu
---

# SD-Menu

SD-Menu is Developer Tool for FiveM that allows you to support multiple menus and inputs using a single export and also adds [Font Awesome](https://fontawesome.com/) support to menu's without code changes.

## Currently Supported Menu's
- nh-context v1
- nh-context v2
- zf_context (nh-context v1.5)
- qb-menu
- ox_lib

## Currently Supported Input's
- nh-keyboard v1
- nh-keyboard v2
- zf_dialog
- qb-input
- ox_lib

## Using SD-Menu

### Library (In Your Resource)
You can inlude sd-menu in your resource without having to depend on another resource, simply add **lib/sd-menu.lua** to your resource and include it in your **fxmanifest.lua** on the client side.

{: .warning }
Keep in mind if you want to use **ox_lib** you have to include the **@ox_lib/init.lua** in your **fxmanifest.lua**

```lua
fx_version 'cerulean'
game 'gta5'
version '1.0.0'
description 'Your Resource'

shared_scripts {
    'config.lua',
    '@ox_lib/init.lua' -- Required: When Using OX Menu
}

client_scripts {
    'client/main.lua',
    'client/sd-menu.lua'
}

server_scripts {
    'server/main.lua'
}

lua54 'yes'
```

### Resource
You can also run sd-menu as standalone resource by downloading the github source code and removing the **client/main.lua** example code, and removing the client script from the **fxmanifest.lua**

{: .important }
Remove the client script when running sd-menu in standalone mode.

```lua
client_scripts {
    'client/main.lua'
}
```

You can then use the exports as followed.
```lua
-- Menu
exports['sd-menu']:CreateMenu(data)

-- Input
exports['sd-menu']:CreateInput(data)
```