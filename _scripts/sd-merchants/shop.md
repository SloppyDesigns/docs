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

| name            | type           | required     | description               | options              |
|:----------------|:---------------|:-------------|:--------------------------|:---------------------|
| type            | string         | yes          | Type                      | buy, sell, market    |
| title           | string         | yes          | Title For UI              | |
| collect         | boolean        | no           | Disable Collect For Market| |
