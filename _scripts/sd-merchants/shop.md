---
layout: default
title: Shop
parent: Merchants
grand_parent: SD-Merchants
nav_order: 2
---

# Shop

```lua
['shop'] = {
    type = "market",
    title = "Shop Title",
    collect = false,
    empty = false,
    requirement = {
        currency = "currency",
        item = "item_name",
        amount = 1,
        remove = false,
    },
}
```

| name                | type           | required     | description                    | 
|:--------------------|:---------------|:-------------|:-------------------------------|
| type                | string         | yes          | Type (buy, sell, market)       | 
| title               | string         | yes          | Title For UI                   |
| collect             | boolean        | no           | Disable Collect For Market     |
| empty               | boolean        | no           | Allow Viewing Empty Merchant   |
| random_item_amount  | number         | no           | Random Item Amount To Select For The Shop |
| requirement         | table          | no           | [Requirement](#requirement) To Access Merchant |

## Requirement

| name            | type           | required     | description                    |
|:----------------|:---------------|:-------------|:-------------------------------|
| currency        | string         | yes          | [Currency](../config-file/#sv_currencieslua)                   |  
| item            | string         | no           | Item If Using Item Currency    | 
| amount          | number         | yes          | Amount Required                | 
| remove          | boolean        | yes          | Should Currency Be Removed     |