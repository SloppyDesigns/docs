---
layout: default
title: Merchants
parent: SD-Merchants
nav_order: 2
---

# Merchants

Merchants are located in the merchants folder, you can create any custom merchant by creating a new lua file and following the guide below.

## Getting Started

Create a merchant by creating a new lua file and name it anything you want.

```lua
Config.Merchants['YourMerchantName'] = {

    type = "",

}
```

## Merchant Type

| type            | modes            |
|:----------------|:-----------------|
| server          | ped              |
| client          | ped, model, zone |

