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
        distance = 3.0
    },
    ['sell'] = {
        label = 'Target Label',
        icon = 'Target Icon',
        job = 'Target Job',
        gang = 'Target Gang',
        distance = 3.0
    },
    ['collect'] = {
        label = 'Target Label',
        icon = 'Target Icon',
        job = 'Target Job',
        gang = 'Target Gang',
        distance = 3.0
    }
},
```

| name            | type           | required     | description                    | 
|:----------------|:---------------|:-------------|:-------------------------------|
| label           | string         | yes          | Target Label                   | 
| icon            | string         | yes          | Target Icon                    |
| job             | string         | no           | Target Job                     |
| gang            | string         | no           | Target Gang (QBCore Only)      |
| distance        | number         | no           | Overwrite Target Distance      |