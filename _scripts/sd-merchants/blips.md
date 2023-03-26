---
layout: default
title: Blips
parent: SD-Merchants
nav_order: 3
---

# Merchants

Merchants are located in the merchants folder, you can create any custom merchant by creating a new lua file and following the guide below.

## Getting Started

Create a merchant by creating a new lua file and name it anything you want.

### Server
```lua
Config.Merchants['YourMerchantName'] = {
    type = "server",
}
```

### Client
```lua
Config.Merchants['YourMerchantName'] = {
    type = "client",
}
```

## Merchant Type

| type            | modes            |
|:----------------|:-----------------|
| server          | ped              |
| client          | ped, model, zone |