!function(){"use strict";var e={274:function(e,t,n){var a=n(325),r=n.n(a);n(874),n(335),n(433),n(980),n(356),r().highlightAll;var l=n(294),o=n(935),c=n(559),u=n.n(c),i=()=>{const[e,t]=(0,l.useState)(!1),[n,a]=(0,l.useState)("5"),r=(0,l.useCallback)((e=>l.createElement("div",{className:"cell__placeholder",style:{animationDuration:`${e}ms`}})),[]),o=e=>a(e.target.value);return l.createElement("div",{className:"cell-container"},l.createElement("div",{className:"cell "+(e?"cell--started":"")},e?null:l.createElement(l.Fragment,null,l.createElement("div",{className:"cell__options-container"},l.createElement("p",null,"Make the component appear after: "),l.createElement("div",{className:""},l.createElement("input",{type:"radio",value:"5",name:"duration",id:"duration-5",checked:"5"===n,onChange:o}),l.createElement("label",{htmlFor:"duration-5"},"5s."),l.createElement("input",{type:"radio",value:"10",name:"duration",id:"duration-10",checked:"10"===n,onChange:o}),l.createElement("label",{htmlFor:"duration-10"},"10s."),l.createElement("input",{type:"radio",value:"15",name:"duration",id:"duration-15",checked:"15"===n,onChange:o}),l.createElement("label",{htmlFor:"duration-15"},"15s.")),l.createElement("button",{className:"button",onClick:()=>t(!0)},"Start"))),e?l.createElement(u(),{seconds:Number.parseInt(n,10),placeholder:r},l.createElement("div",{className:"cell__content"},l.createElement("div",null,"I am a wonderful React component, and I appeared after"," ",n,"s."))):null))};const s=()=>l.createElement(i,null);o.render(l.createElement(s,null),document.querySelector(".demo-container"))}},t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}n.m=e,n.x=function(){},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={179:0},t=[[274,999]],a=function(){},r=function(r,l){for(var o,c,u=l[0],i=l[1],s=l[2],m=l[3],d=0,p=[];d<u.length;d++)c=u[d],n.o(e,c)&&e[c]&&p.push(e[c][0]),e[c]=0;for(o in i)n.o(i,o)&&(n.m[o]=i[o]);for(s&&s(n),r&&r(l);p.length;)p.shift()();return m&&t.push.apply(t,m),a()},l=self.webpackChunkgh_page_template=self.webpackChunkgh_page_template||[];function o(){for(var a,r=0;r<t.length;r++){for(var l=t[r],o=!0,c=1;c<l.length;c++){var u=l[c];0!==e[u]&&(o=!1)}o&&(t.splice(r--,1),a=n(n.s=l[0]))}return 0===t.length&&(n.x(),n.x=function(){}),a}l.forEach(r.bind(null,0)),l.push=r.bind(null,l.push.bind(l));var c=n.x;n.x=function(){return n.x=c||function(){},(a=o)()}}(),n.x()}();