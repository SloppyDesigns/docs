---
layout: default
title: Shop
parent: SD-Merchants
nav_order: 4
---

# Shop

```lua
['shop'] = {
    type = "market",
    title = "Shop Title",
    collect = false, 
    requirement = {
        currency = "currency",
        item = "item_name",
        amount = 1,
        remove = false,
    },
}
```

| name            | type           | required     | description                    | 
|:----------------|:---------------|:-------------|:-------------------------------|
| type            | string         | yes          | Type (buy, sell, market)       | 
| title           | string         | yes          | Title For UI                   |
| collect         | boolean        | no           | Disable Collect For Market     |
| requirement     | table          | no           | [Requirement](#requirement) To Access Merchant |

## Requirement
| name            | type           | required     | description                    |
|:----------------|:---------------|:-------------|:-------------------------------|
| currency        | string         | yes          | [Currency](config-file/#sv_currencieslua)                   |  
| item            | string         | no           | Item If Using Item Currency    | 
| amount          | number         | yes          | Amount Required                | 
| remove          | boolean        | yes          | Should Currency Be Removed     |