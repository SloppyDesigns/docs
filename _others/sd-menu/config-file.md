---
layout: default
title: Config File
parent: SD-Menu
prev_page: /index
next_page: /others/sd-menu/menu
prev_title: About Us
next_title: Menu
nav_order: 1
---

# Config File

## The following Config Options are mapped by default

### Auto Detect Menu & Input Version, Default: false [Optional]

```lua
Config.SDAutoVersion = true
```

### Menu Version

| option       | resource          |
|:-------------|:------------------|
| v1           | nh-context v1 
| v2           | nh-context v2
| zf           | zf_context
| qb           | qb-menu 
| ox           | ox_lib 

```lua
Config.SDMenuVersion = 'ox'
```

### Input Version

| option       | resource          |
|:-------------|:------------------|
| v1           | nh-keyboard v1 
| v2           | nh-keyboard v2
| zf           | zf_dialog
| qb           | qb-input 
| ox           | ox_lib 

```lua
Config.SDInputVersion = 'ox'
```