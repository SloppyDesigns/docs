(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8],{6960:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bridge/inventory/server",function(){return n(7559)}])},7559:function(e,s,n){"use strict";n.r(s);var l=n(5893),r=n(2673),t=n(1151);function i(e){let s=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",span:"span",p:"p",a:"a",ul:"ul",li:"li"},(0,t.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h1,{children:"Inventory Server"}),"\n",(0,l.jsx)(s.h2,{id:"items",children:"Items"}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(s.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Framework.Items"})})})}),"\n",(0,l.jsxs)(s.p,{children:["returns: ",(0,l.jsx)(s.a,{href:"/bridge/inventory/item",children:"Item[]"})]}),"\n",(0,l.jsx)(s.h2,{id:"additem",children:"AddItem"}),"\n",(0,l.jsx)(s.p,{children:"Add Item To Inventory"}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(s.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Framework."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"AddItem"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(inventory, item, count, metadata, slot)"})]})})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["inventory: ",(0,l.jsx)(s.code,{children:"number | string"})]}),"\n",(0,l.jsxs)(s.li,{children:["item: ",(0,l.jsx)(s.code,{children:"string"})]}),"\n",(0,l.jsxs)(s.li,{children:["count: ",(0,l.jsx)(s.code,{children:"number"})]}),"\n",(0,l.jsxs)(s.li,{children:["metadata?: ",(0,l.jsx)(s.code,{children:"table"})]}),"\n",(0,l.jsxs)(s.li,{children:["slot?: ",(0,l.jsx)(s.code,{children:"number"})]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:["returns: ",(0,l.jsx)(s.code,{children:"boolean"})]}),"\n",(0,l.jsx)(s.p,{children:"Add item to inventory"}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- To Player"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Framework."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"AddItem"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(source, "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'water_bottle'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", { quality "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"100"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" })"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:" "}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- To Stash"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Framework."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"AddItem"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'mystash'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'water_bottle'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", { quality "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"100"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" })"})]})]})}),"\n",(0,l.jsx)(s.h2,{id:"removeitem",children:"RemoveItem"}),"\n",(0,l.jsx)(s.p,{children:"Remove Item From Inventory"}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(s.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Framework."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"RemoveItem"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(inventory, item, count, metadata, slot)"})]})})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["inventory: ",(0,l.jsx)(s.code,{children:"number | string"})]}),"\n",(0,l.jsxs)(s.li,{children:["item: ",(0,l.jsx)(s.code,{children:"string"})]}),"\n",(0,l.jsxs)(s.li,{children:["count: ",(0,l.jsx)(s.code,{children:"number"})]}),"\n",(0,l.jsxs)(s.li,{children:["metadata?: ",(0,l.jsx)(s.code,{children:"table"})]}),"\n",(0,l.jsxs)(s.li,{children:["slot?: ",(0,l.jsx)(s.code,{children:"number"})]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:["returns: ",(0,l.jsx)(s.code,{children:"boolean"})]}),"\n",(0,l.jsx)(s.p,{children:"Remove item from inventory"}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- From Player"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Framework."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"RemoveItem"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(source, "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'water_bottle'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:" "}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- From Stash"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Framework."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"RemoveItem"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'mystash'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'water_bottle'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})}),"\n",(0,l.jsx)(s.p,{children:"Remove item from inventory where metadata matches"}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- From Player"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Framework."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"RemoveItem"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(source, "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'water_bottle'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", { quality "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"50"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" })"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:" "}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- From Stash"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Framework."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"RemoveItem"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'mystash'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'water_bottle'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", { quality "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"50"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" })"})]})]})}),"\n",(0,l.jsx)(s.p,{children:"Remove item from inventory from specific slot"}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- From Player"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Framework."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"RemoveItem"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(source, "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'water_bottle'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"nil"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:" "}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- From Stash"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Framework."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"RemoveItem"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'mystash'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'water_bottle'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"nil"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})}),"\n",(0,l.jsx)(s.h2,{id:"hasitem",children:"HasItem"}),"\n",(0,l.jsx)(s.p,{children:"Check if a player or a stash has an item"}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(s.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Framework."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"HasItem"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(inventory, items, count, metadata)"})]})})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["inventory: ",(0,l.jsx)(s.code,{children:"number | string"})]}),"\n",(0,l.jsxs)(s.li,{children:["items: ",(0,l.jsx)(s.code,{children:"string | string[] | table<string, number>"})]}),"\n",(0,l.jsxs)(s.li,{children:["count?: ",(0,l.jsx)(s.code,{children:"number"})]}),"\n",(0,l.jsxs)(s.li,{children:["metadata?: ",(0,l.jsx)(s.code,{children:"table"})]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:["returns: ",(0,l.jsx)(s.code,{children:"boolean"})]}),"\n",(0,l.jsx)(s.p,{children:"Check if inventory has item"}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Player"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Framework."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"HasItem"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(source, "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'water_bottle'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:" "}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Stash"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Framework."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"HasItem"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'mystash'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'water_bottle'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})}),"\n",(0,l.jsx)(s.p,{children:"Check if inventory has item with metadata"}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Player"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Framework."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"HasItem"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(source, "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'water_bottle'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", { quality "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"100"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" })"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:" "}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Stash"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Framework."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"HasItem"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'mystash'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'water_bottle'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", { quality "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"100"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" })"})]})]})}),"\n",(0,l.jsx)(s.p,{children:"Check if inventory has multiple items"}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Player"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Framework."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"HasItem"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(source, {"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'water_bottle'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'burger' "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}, "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:" "}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Stash"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Framework."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"HasItem"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'mystash'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", {"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'water_bottle'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'burger' "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}, "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})}),"\n",(0,l.jsx)(s.p,{children:"Check if inventory has multiple with different quantity"}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Player"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Framework."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"HasItem"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(source, {["}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'water_bottle'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", ["}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'burger'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"})"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:" "}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Stash"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Framework."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"HasItem"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'mystash'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", {["}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'water_bottle'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", ["}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'burger'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"})"})]})]})}),"\n",(0,l.jsx)(s.h2,{id:"getitemmetadata",children:"GetItemMetadata"}),"\n",(0,l.jsx)(s.p,{children:"Get Item Metadata"}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(s.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Framework."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GetItemMetadata"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(inventory, slot)"})]})})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["inventory: ",(0,l.jsx)(s.code,{children:"number | string"})]}),"\n",(0,l.jsxs)(s.li,{children:["slot: ",(0,l.jsx)(s.code,{children:"number"})]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:["returns: ",(0,l.jsx)(s.code,{children:"table"})]}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Player"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Framework."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GetItemMetadata"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(source, "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:" "}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Stash"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Framework."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GetItemMetadata"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'mystash'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})}),"\n",(0,l.jsx)(s.h2,{id:"setitemmetadata",children:"SetItemMetadata"}),"\n",(0,l.jsx)(s.p,{children:"Set Item Metadata"}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(s.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Framework."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"SetItemMetadata"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(inventory, slot, metadata)"})]})})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["inventory: ",(0,l.jsx)(s.code,{children:"number | string"})]}),"\n",(0,l.jsxs)(s.li,{children:["slot: ",(0,l.jsx)(s.code,{children:"number"})]}),"\n",(0,l.jsxs)(s.li,{children:["metadata: ",(0,l.jsx)(s.code,{children:"table"})]}),"\n"]}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Player"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Framework."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"SetItemMetadata"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(source, "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", { quality "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"100"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" })"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:" "}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Stash"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Framework."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"SetItemMetadata"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'mystash'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", { quality "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"100"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" })"})]})]})}),"\n",(0,l.jsx)(s.h2,{id:"getinventory",children:"GetInventory"}),"\n",(0,l.jsx)(s.p,{children:"Returns Inventory"}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(s.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Framework."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GetInventory"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(inventory)"})]})})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["inventory: ",(0,l.jsx)(s.code,{children:"number | string"})]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:["returns: ",(0,l.jsx)(s.a,{href:"/bridge/inventory/item",children:"Item[]"})]}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Player"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Framework."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GetInventory"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(source)"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:" "}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Stash"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Framework."}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GetInventory"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'mystash'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})})]})}n(5675),s.default=(0,r.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,t.ah)(),e.components);return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(i,{...e})}):i(e)},pageOpts:{filePath:"pages/bridge/inventory/server.mdx",route:"/bridge/inventory/server",headings:[{depth:1,value:"Inventory Server",id:"inventory-server"},{depth:2,value:"Items",id:"items"},{depth:2,value:"AddItem",id:"additem"},{depth:2,value:"RemoveItem",id:"removeitem"},{depth:2,value:"HasItem",id:"hasitem"},{depth:2,value:"GetItemMetadata",id:"getitemmetadata"},{depth:2,value:"SetItemMetadata",id:"setitemmetadata"},{depth:2,value:"GetInventory",id:"getinventory"}],title:"Inventory Server"},pageNextRoute:"/bridge/inventory/server"})}},function(e){e.O(0,[673,774,888,179],function(){return e(e.s=6960)}),_N_E=e.O()}]);