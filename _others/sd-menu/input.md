---
layout: default
title: Input
parent: SD-Menu
prev: /others/sd-menu/menu
next: /index
prev_title: Menu
next_title: About Us
nav_order: 3
---

# Input

## Main Options

| option       | description             | type              |
|:-------------|:------------------------|:------------------|
| header       | Set Header Text         | string
| inputs       | Inputs                  | table

## Inputs Table

| option       | description             | type              |
|:-------------|:------------------------|:------------------|
| text         | Set Description Text    | string

## Example

```lua
local input, input1, input2 = exports['sd-menu']:CreateInput({
    header = 'Header Text',
    inputs = {
        {
            text = 'Input 1'
        },
        {
            text = 'Input 2'
        }
    }
})

if input then -- Confirm Input Submit
    print(input1, input2)
end
```