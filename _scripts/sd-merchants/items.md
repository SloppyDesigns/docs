---
layout: default
title: Items
parent: Merchants
grand_parent: SD-Merchants
nav_order: 4
---

# Items
```lua
['items'] = {
    {
        name = "item_name",
        price = 0,
        amount = 0,
        info = {},
        currency = "cash",
        category = 'Weapons',
        limited = true,
    },
},
```

| name            | type           | required     | description                     | 
|:----------------|:---------------|:-------------|:--------------------------------|
| name            | string         | yes          | Name                            | 
| price           | string         | yes          | Price                           |
| amount          | string         | yes          | Amount (Avaible On Server Start)|
| info            | string         | yes          | Metadata (Applied When Buying An Item) |
| currency        | string         | yes          | [Currency](../config-file/#sv_currencieslua) |
| category        | string         | yes          | Category For UI Filtering       |
| limited         | string         | yes          | Remove Item From Stock To Limit Amount That Can Be Purchased During Server Restarts |