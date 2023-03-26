---
layout: default
title: Blips
parent: SD-Merchants
nav_order: 3
---

# Blips


## Area
```lua
['blip'] = {
    type = 'area',
    coords = vector3(0.0, 0.0, 0.0),
    width = 0,
    height = 0,
    rotation = 0,
    colour = 0,
    shortrange = true,
    display = 0,
    alpha = 0,
}
```

| name            | type           | description     |
|:----------------|:---------------|:----------------|
| type            | string         | Type            |
| coords          | vector3        | Location        |
| width           | number         | Width Size      |
| height          | number         | Height Size     |
| rotation        | number         | Camera Rotation |
| colour          | number         | [Colours](https://docs.fivem.net/docs/game-references/blips/#blip-colors) |
| shortrange      | boolean        | Show When Closeby |
| display         | number         | [Blip Display](#blip-display) |
| alpha           | number         | Transparency From 0 to 255 |

## Coord
```lua
['blip'] = {
    type = 'coord',
    coords = vector3(0.0, 0.0, 0.0),
    sprite = 0,
    scale = 0, 
    colour = 0,
    shortrange = true,
    display = 0,
    name = "Blip Name"
}
```

| name            | type           | description     |
|:----------------|:---------------|:----------------|
| type            | string         | Type            |
| coords          | vector3        | Location        |
| sprite          | number         | [Sprites](https://docs.fivem.net/docs/game-references/blips/#blips)      |
| scale           | number         | Scale Size      |
| colour          | number         | [Colours](https://docs.fivem.net/docs/game-references/blips/#blip-colors) |
| shortrange      | boolean        | Show When Closeby |
| display         | number         | [Blip Display](#blip-display) |
| alpha           | number         | Transparency From 0 to 255 |
| name            | string         | Name |

## Entity (Server Ped Only)
```lua
['blip'] = {
    type = 'entity',
    sprite = 0,
    scale = 0,
    colour = 0,
    shortrange = true,
    display = 0,
    name = "Blip Name"
}
```

| name            | type           | description     |
|:----------------|:---------------|:----------------|
| type            | string         | Type            |
| sprite          | number         | [Sprites](https://docs.fivem.net/docs/game-references/blips/#blips)      |
| scale           | number         | Scale Size      |
| colour          | number         | [Colours](https://docs.fivem.net/docs/game-references/blips/#blip-colors) |
| shortrange      | boolean        | Show When Closeby |
| display         | number         | [Blip Display](#blip-display) |
| name            | string         | Name |

## Radius
```lua
['blip'] = {
    type = 'radius',
    coords = vector3(),
    radius = 0,
    colour = 0,
    shortrange = true,
    display = 0,
    alpha = 0,
}
```

| name            | type           | description     |
|:----------------|:---------------|:----------------|
| type            | string         | Type            |
| coords          | vector3        | Location        |
| radius          | number         | Radius Size     |
| colour          | number         | [Colours](https://docs.fivem.net/docs/game-references/blips/#blip-colors) |
| shortrange      | boolean        | Show When Closeby |
| display         | number         | [Blip Display](#blip-display) |
| alpha           | number         | Transparency From 0 to 255 |

## Radius + Icon
```lua
['blip'] = {
    type = 'radiusicon',
    coords = vector3(0.0, 0.0, 0.0),
    radius = 0.0,
    radius_colour = 0,
    radius_alpha = 0,
    icon_colour = 0,
    icon_alpha = 0,
    sprite = 0,
    scale = 0.0,
    shortrange = true,
    display = 0,
    name = 'Blip Name'
},
```

| name            | type           | description     |
|:----------------|:---------------|:----------------|
| type            | string         | Type            |
| coords          | vector3        | Location        |
| radius          | number         | Radius Size     |
| radius_colour   | number         | [Colours](https://docs.fivem.net/docs/game-references/blips/#blip-colors) |
| radius_alpha    | number         | Transparency From 0 to 255 |
| icon_colour     | number         | [Colours](https://docs.fivem.net/docs/game-references/blips/#blip-colors) |
| icon_alpha      | number         | Transparency From 0 to 255 |
| sprite          | number         | [Sprites](https://docs.fivem.net/docs/game-references/blips/#blips)      |
| scale           | number         | Scale Size      |
| shortrange      | boolean        | Show When Closeby |
| display         | number         | [Blip Display](#blip-display) |
| name            | string         | Name |


## Blip Display

| number          | behaviour                                                   |
|:----------------|:------------------------------------------------------------|
| 0               | Doesn't show up, ever, anywhere.                            |
| 1               | Doesn't show up, ever, anywhere.                            |
| 2               | Shows on both main map and minimap. (Selectable on map)     |
| 3               | Shows on main map only. (Selectable on map)                 |
| 4               | Shows on main map only. (Selectable on map)                 |
| 5               | Shows on minimap only.                                      |
| 6               | Shows on both main map and minimap. (Selectable on map)     |
| 7               | Doesn't show up, ever, anywhere.                            |
| 8               | Shows on both main map and minimap. (Not selectable on map) |
| 9               | Shows on minimap only.                                      |
| 10              | Shows on both main map and minimap. (Not selectable on map) |