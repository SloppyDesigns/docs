---
layout: default
title: Options
parent: Merchants
grand_parent: SD-Merchants
nav_order: 3
---

# Options
```lua
['options'] = {
    ['buy'] = {
        label = 'Target Label',
        icon = 'Target Icon',
        job = 'Target Job',
        gang = 'Target Gang',
    },
    ['sell'] = {
        label = 'Target Label',
        icon = 'Target Icon',
        job = 'Target Job',
        gang = 'Target Gang',
    },
    ['collect'] = {
        label = 'Target Label',
        icon = 'Target Icon',
        job = 'Target Job',
        gang = 'Target Gang',
    }
},
```

| name            | type           | required     | description                    | 
|:----------------|:---------------|:-------------|:-------------------------------|
| label           | string         | yes          | Target Label                   | 
| icon            | string         | yes          | Target Icon                    |
| job             | string         | no           | Target Job                     |
| gang            | string         | no           | Target Gang (QBCore Only)      |