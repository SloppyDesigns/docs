---
layout: default
title: Log
parent: Merchants
grand_parent: SD-Merchants
nav_order: 5
---

# Log
```lua
['log'] = {
    open = false,
    buy = false,
    sell = false,
    collect = false,
}
```

| name            | type           | required     | description                      | 
|:----------------|:---------------|:-------------|:---------------------------------|
| open            | boolean        | no           | Log When Accessing The Merchant  | 
| buy             | boolean        | no           | Log When Buying An Item          |
| sell            | boolean        | no           | Log When Selling An Item         |
| collect         | boolean        | no           | Log When Collecting Items        |