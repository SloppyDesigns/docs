---
layout: default
title: SD-Paycheck
nav_order: 1
has_children: true
has_toc: false
prev_page: /index
next_page: /free/sd-paycheck/config
prev_title: About Us
next_title: Config
permalink: /free/sd-paycheck
---

# SD-Paycheck

Simple Resource to add Paycheck System to your Server without all the hassle.

## Features
- Use Ped Or BoxZone
- Pay Paycheck In Cash Or Bank
- Set Paycheck Collection to a specific day of the week

# Installation Guide

## QBCore
1. Open qb-core/server/functions.lua
2. Go to Line 168 or search for **PayCheckInterval()**
3. Replace **Player.Functions.AddMoney('bank', payment)** with **TriggerEvent('sd-paycheck:server:AddPaycheck', payment, Player.PlayerData.source)**
4. Restart Server.

## ESX
1. Open es_extended/server/paycheck.lua
2. Replace **xPlayer.addAccountMoney('bank', salary)** with **TriggerEvent('sd-paycheck:server:AddPaycheck', salary, xPlayer.source)**
3. Restart Server.