(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9482],{6051:function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bridge/framework/locale",function(){return l(2203)}])},2203:function(e,a,l){"use strict";l.r(a);var s=l(5893),n=l(2673),r=l(1151);function i(e){let a=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",span:"span",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{children:"Framework Locale"}),"\n",(0,s.jsxs)(a.p,{children:["Language files are automatically loaded from the ",(0,s.jsx)(a.code,{children:"locales"})," folder, the default language is ",(0,s.jsx)(a.code,{children:"en"})]}),"\n",(0,s.jsx)(a.h2,{id:"change-the-language",children:"Change The Language"}),"\n",(0,s.jsx)(a.p,{children:"Add the following convar to your server.cfg to change the preferred language"}),"\n",(0,s.jsx)(a.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(a.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(a.span,{className:"line",children:(0,s.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"setr bridge:locale en"})})})}),"\n",(0,s.jsx)(a.h2,{id:"loading-languages",children:"Loading Languages"}),"\n",(0,s.jsx)(a.p,{children:"Add the following to your fxmanifest to load all locales"}),"\n",(0,s.jsx)(a.pre,{"data-language":"lua","data-theme":"default",filename:"fxmanifest.lua",hasCopyCode:!0,children:(0,s.jsxs)(a.code,{"data-language":"lua","data-theme":"default",children:[(0,s.jsxs)(a.span,{className:"line",children:[(0,s.jsx)(a.span,{style:{color:"var(--shiki-token-function)"},children:"files"}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,s.jsxs)(a.span,{className:"line",children:[(0,s.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'bridge/**/**/client.lua'"}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,s.jsxs)(a.span,{className:"line",children:[(0,s.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'bridge/**/*.lua'"}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,s.jsxs)(a.span,{className:"line highlighted",children:[(0,s.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'locales/*.json'"})]}),"\n",(0,s.jsx)(a.span,{className:"line",children:(0,s.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,s.jsx)(a.h2,{id:"create-locale",children:"Create Locale"}),"\n",(0,s.jsx)(a.pre,{"data-language":"json","data-theme":"default",filename:"locales/en.json",children:(0,s.jsxs)(a.code,{"data-language":"json","data-theme":"default",children:[(0,s.jsx)(a.span,{className:"line",children:(0,s.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,s.jsxs)(a.span,{className:"line",children:[(0,s.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-token-keyword)"},children:'"myname"'}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"My Name Is {name}"'}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,s.jsx)(a.span,{className:"line",children:(0,s.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,s.jsx)(a.p,{children:"Getting Specific Locale String"}),"\n",(0,s.jsx)(a.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(a.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(a.span,{className:"line",children:[(0,s.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Framework."}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-token-function)"},children:"Locale"}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'myname'"}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:", {  name "}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Sloppy' "}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"})"})]})})}),"\n",(0,s.jsx)(a.p,{children:"Returns"}),"\n",(0,s.jsx)(a.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(a.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(a.span,{className:"line",children:(0,s.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"My Name Is Sloppy"})})})}),"\n",(0,s.jsx)(a.h2,{id:"locale",children:"Locale"}),"\n",(0,s.jsx)(a.p,{children:"Get Specific Language String"}),"\n",(0,s.jsx)(a.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(a.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(a.span,{className:"line",children:[(0,s.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Framework."}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-token-function)"},children:"Locale"}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"(key, params)"})]})})}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["key: ",(0,s.jsx)(a.code,{children:"string"})]}),"\n",(0,s.jsxs)(a.li,{children:["params: ",(0,s.jsx)(a.code,{children:"table"})]}),"\n"]}),"\n",(0,s.jsx)(a.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(a.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(a.span,{className:"line",children:[(0,s.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Framework."}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-token-function)"},children:"Locale"}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'mykey'"}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:", {  myvalue "}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'My Value' "}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"})"})]})})}),"\n",(0,s.jsxs)(a.p,{children:["returns: ",(0,s.jsx)(a.code,{children:"string"})]}),"\n",(0,s.jsx)(a.h2,{id:"locales",children:"Locales"}),"\n",(0,s.jsx)(a.p,{children:"Get Language Table"}),"\n",(0,s.jsx)(a.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(a.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(a.span,{className:"line",children:[(0,s.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"Framework."}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-token-function)"},children:"Locales"}),(0,s.jsx)(a.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]})})}),"\n",(0,s.jsxs)(a.p,{children:["returns: ",(0,s.jsx)(a.code,{children:"table"})]})]})}l(5675),a.default=(0,n.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:a}=Object.assign({},(0,r.ah)(),e.components);return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(i,{...e})}):i(e)},pageOpts:{filePath:"pages/bridge/framework/locale.mdx",route:"/bridge/framework/locale",headings:[{depth:1,value:"Framework Locale",id:"framework-locale"},{depth:2,value:"Change The Language",id:"change-the-language"},{depth:2,value:"Loading Languages",id:"loading-languages"},{depth:2,value:"Create Locale",id:"create-locale"},{depth:2,value:"Locale",id:"locale"},{depth:2,value:"Locales",id:"locales"}],title:"Framework Locale"},pageNextRoute:"/bridge/framework/locale"})}},function(e){e.O(0,[2673,9774,2888,179],function(){return e(e.s=6051)}),_N_E=e.O()}]);