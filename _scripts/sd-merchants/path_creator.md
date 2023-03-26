---
layout: default
title: Path Creator
parent: SD-Merchants
nav_order: 3
---

# Path Creator
```lua
Config.CreationTool = false
```

You can use the path creator by enabling the Creation Tool in configs/sh_config.lua, and use the console command /createpath a window will popup to enter the Merchant name this only used so you can easily find the path you where working on.

# Create Path Point [E]
Path Points are the locations the ped will walk to and once reached it will select the next point location, there is no limits to how many path points you can have, once the ped reached the end it will walk the path backwards, Creating a pathing system.

# Start/Stop Test Path [U]
This can be used to preview the path and make sure its the way you want it to be.

# Save Path [Y]
The save option will save your path system inside a formated file that you can copy and use in your merchants, it's located in sd-merchants/creation/merchants_paths.txt


# Cancel [C]
You can cancel the creation without saving it if you are not happy with the way it turned out.