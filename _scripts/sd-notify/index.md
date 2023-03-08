---
layout: default
title: SD-Notify
nav_order: 4
has_children: true
has_toc: false
prev_page: /index
next_page: /scripts/sd-notify/installation
prev_title: About Us
next_title: Installation
permalink: /scripts/sd-notify
---

# SD-Notify
### Next Generation Notification System

<iframe src="https://www.youtube.com/embed/p4fk_fKc0IM?ecver=1&amp;iv_load_policy=3&amp;rel=0&amp;showinfo=0&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560&amp;width=560" width="100%" allowtransparency="true" frameborder="0"></iframe>

{: .warning }
if you experience notifications getting stuck when using a lower-end pc, make sure to check 'Fix UI Lag at high GPU usage in FiveM Settings'

# Notify
### Simple Notification 
<br />

**Client Side**
```lua
exports['sd-notify']:Notify('Title', 'Message', time, type, position, hideprogressbar, sound)
```

**Server Side**
```lua
TriggerClientEvent('sd-notify:Notify', source, 'Title', 'Message', length, type, position, hideprogressbar, sound)
```

# Promise
## Notification That Stays Until It's Closed 
<br />

**Client Side**
```lua
exports['sd-notify']:Promise(title, message, type, position, sound)
```

# Update
## Update A Promise Notification 
<br />

**Client Side**
```lua
exports['sd-notify']:Update(id, title, message, time, type, position, hideprogressbar, sound)
```
# RemoveAll
## Remove All Notifications On Screen

**Export**
```lua
exports['sd-notify']:RemoveAll()
```

**Command**
```lua
/clearnotify
```

# Remove
## Remove An Specific Notification

**Export**
```lua
exports['sd-notify']:Remove(id)
```

{: .important-title }
Every Notify including Promise and Update return a unique id to update or to remove them

| name         | type              | required |
|:-------------|:------------------|:---------|
| ok           | good swedish fish | nice     |
| out of stock | good and plenty   | nice     |
| ok           | good `oreos`      | hmm      |
| ok           | good `zoute` drop | yumm     |

## Options
| name            | type        | required |
|:----------------|:------------|:---------|
| title           | string      | yes      |
| message         | string      | yes      |
| time            | number      | yes      |
| type            | string      | yes      |
| position        | string      | no       |
| hideprogressbar | boolean     | no       |
| sound           | boolean     | no       |

## Types
- primary
- info
- success
- error
- warning
- phone
- announce

{: .highlight }
You can add any custom type in the config.lua

## Positions
- top-left
- top-right
- top-center
- bottom-left
- bottom-right
- bottom-center
- right-center
- left-center
