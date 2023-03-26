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


## Ped (Server)

```lua
['ped'] = {
    model = `ped_model`,
    coords = {
        vector3(0.00, 0.00, 0.00),
    }
},
```

| name            | type           | required |
|:----------------|:---------------|:---------|
| mode            | hash           | yes      |
| coords          | table(vector3) | yes      |


## Ped (Client)

## Model (Client)

## Zone (Client)