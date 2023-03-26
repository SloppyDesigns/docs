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


## Ped (Server)

```lua
['ped'] = {
    model = `ped_model`,
    coords = {
        vector3(0.0, 0.0, 0.0),
    }
},
```

| name            | type            | required |
|:----------------|:----------------|:---------|
| mode            | hash            | yes      |
| coords          | table (vector3) | yes      |

## Weapon (Ped Server Only)

```lua
['weapon'] = {
    visible = true,
    model = `weapon_model`,
    accuracy = 100,
    armor = 100,
},
```

| name            | type           | required |
|:----------------|:---------------|:---------|
| visible         | boolean        | no       |
| model           | hash           | yes      |
| accuracy        | number         | yes      |
| armor           | number         | no       |


## Ped (Client)

```lua
['ped'] = {
    model = `ped_model`,
    coords = vector4(0.0, 0.0, 0.0, 0.0),
    scenario = 'scenario_name',
    animation = { name = 'animation_name', dictionary = 'animation_dictionary' } 
},
```

| name            | type           | required |
|:----------------|:---------------|:---------|
| mode            | hash           | yes      |
| coords          | vector4        | yes      |
| scenario        | string         | no       |
| animation       | table          | no       |

### Animation

| name            | type           | required |
|:----------------|:---------------|:---------|
| name            | string         | yes      |
| dictionary      | string         | yes      |

## Model (Client)

```lua
['model'] = { 
    `model_name`
},
```

| type           | required |
|:---------------|:---------|
| table (hashes) | yes      |

## Zone (Client)

### BoxZone
```lua
['zone'] = {
    coords = vector4(0.0, 0.0, 0.0, 0.0),
    length = 0,
    width = 0,
    minZ = 0.0,
    maxZ = 0.0,
},
```

| name            | type           | required |
|:----------------|:---------------|:---------|
| coords          | vector4        | yes      |
| length          | number         | yes      |
| width           | number         | yes      |
| minZ            | float          | yes      |
| maxZ            | float          | yes      |

### PolyZone
```lua
['zone'] = {
    coords = {
        vector2(0.0, 0.0),
    },
    minZ = 0.0,
    maxZ = 0.0,
},
```

| name            | type           | required |
|:----------------|:---------------|:---------|
| coords          | table (vector2)| yes      |
| minZ            | float          | yes      |
| maxZ            | float          | yes      |