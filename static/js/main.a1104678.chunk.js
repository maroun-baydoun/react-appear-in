(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(n,e,t){n.exports=t(28)},28:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(7),c=t.n(i),o=t(2),l=t(1),u=t(11),d=t(15),s=t(12),m=t(8),p=t.n(m),f=function(n,e){return Math.floor(Math.random()*e)+n};function b(){var n=Object(o.a)(["\n  margin-top: 5px;\n  color: #aaa;\n"]);return b=function(){return n},n}function x(){var n=Object(o.a)(["\n  background-color: darkgrey;\n  color: #ccc;\n  width: 150px;\n  height: 100px;\n  margin: 5px;\n  padding: 5px;\n  border-radius: 10px;\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n"]);return x=function(){return n},n}function g(){var n=Object(o.a)(["\n  background-color: #efefef;\n  border-radius: 10px;\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n"]);return g=function(){return n},n}function h(){var n=Object(o.a)([""," ","ms linear;"]);return h=function(){return n},n}function j(){var n=Object(o.a)(["\n  animation: ","\n  background-color: #efefef;\n  border-radius: 10px;\n  display: flex;\n  flex-grow: 1;\n"]);return j=function(){return n},n}function O(){var n=Object(o.a)(["\n  from {\n    width: 0;\n  }\n\n  to {\n    width: 100%;\n  }\n"]);return O=function(){return n},n}var w=Object(l.e)(O()),v=Object(l.d)("div")(j(),function(n){return Object(l.c)(h(),w,n.time)}),E=Object(l.d)("div")(g()),y=Object(l.d)("div")(x()),k=Object(l.d)("div")(b()),A=function(){var n=Object(r.useState)(Object(d.a)({},{milliseconds:f(10,100),minutes:f(0,2),seconds:f(5,30)})),e=Object(s.a)(n,1)[0],t=e.minutes,i=e.seconds,c=e.milliseconds,o=Object(r.useCallback)(function(n){return a.a.createElement(v,{time:n})},[]);return a.a.createElement(y,null,a.a.createElement(p.a,{minutes:t,seconds:i,milliseconds:c,placeholder:o},a.a.createElement(E,null,a.a.createElement("div",null,"I appeared after"),a.a.createElement(k,null,t,"m. ",i,"s. ",c,"ms."))))};function I(){var n=Object(o.a)(["\n  position: absolute;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  background-color: grey;\n  z-index: 1;\n\n  @media (max-width: 768px) {\n    position: static;\n  }\n"]);return I=function(){return n},n}var M=Object(l.d)("div")(I()),z=function(){return a.a.createElement(M,null,Object(u.a)(Array(100)).map(function(n,e){return a.a.createElement(A,{key:e})}))};function B(){var n=Object(o.a)(["\n    background-color: #aaa;\n    color: #000;\n    padding: 16px;\n    border-radius: 2px;\n    white-space: pre-wrap;\n    word-wrap: break-word;\n    text-align: justify;\n"]);return B=function(){return n},n}function H(){var n=Object(o.a)(["\n    padding: 0;\n    max-width: 70%;\n    font-family: 'B612',sans-serif;\n\n    @media (max-width: 768px) {\n        max-width: none;\n    }\n"]);return H=function(){return n},n}function S(){var n=Object(o.a)(["\n    margin-top: 16px;\n    padding: 16px;\n"]);return S=function(){return n},n}function C(){var n=Object(o.a)(["\n  margin-top: 16px;\n  display: flex;\n  align-items: center;\n\n  & > * {\n      display: flex;\n  }\n\n  & > * + * {\n    margin-left: 8px;\n   }\n"]);return C=function(){return n},n}function J(){var n=Object(o.a)(["\n    font-size: 1rem;\n    font-family: 'B612 Mono', monospace;\n    margin: 16px 0 0 0;\n    color: #aaa;\n"]);return J=function(){return n},n}function F(){var n=Object(o.a)(["\n    font-size: 2rem;\n    font-family: 'B612', sans-serif;\n    margin: 0;\n"]);return F=function(){return n},n}function G(){var n=Object(o.a)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  width: 50%;\n  min-height: 50%;\n  background-color: #333;\n  color: #efefef;\n  padding: 16px;\n  border-radius: 10px;\n  box-shadow: 1px 1px 10px #333;\n  z-index: 100;\n\n  @media (max-width: 768px) {\n    position: static;\n    transform: none;\n    min-height: auto;\n    width: auto;\n    border-radius: 0;\n    box-shadow: none;\n  }\n"]);return G=function(){return n},n}var N=Object(l.d)("article")(G()),R=Object(l.d)("h1")(F()),U=Object(l.d)("h2")(J()),X=Object(l.d)("section")(C()),Y=Object(l.d)("section")(S()),q=Object(l.d)("ol")(H()),D=Object(l.d)("pre")(B()),K=function(){return a.a.createElement(N,null,a.a.createElement(R,null,"React Appear In"),a.a.createElement(U,null,"Make react components appear sometime in the future"),a.a.createElement(X,null,a.a.createElement("a",{className:"github-button",href:"https://github.com/maroun-baydoun/react-appear-in","aria-label":"Star maroun-baydoun/react-appear-in on GitHub"},"Star"),a.a.createElement("a",{href:"https://badge.fury.io/js/react-appear-in"},a.a.createElement("img",{src:"https://badge.fury.io/js/react-appear-in.svg",alt:"npm version",height:"18"}))),a.a.createElement(Y,null,a.a.createElement(q,null,a.a.createElement("li",null,"Install",a.a.createElement(D,null,"npm install react-appear-in")),a.a.createElement("li",null,"Use",a.a.createElement(D,null,"import AppearIn from 'react-appear-in';\n\n\nconst MyAwesomeComponent = () => (\n    <AppearIn minutes={1} seconds={20} milliseconds={10}>\n        Hello in 1 minute, 20 seconds and 10 milliseconds\n    </AppearIn>\n);\n                        ")))))};function L(){var n=Object(o.a)(["\n  html, body {\n    padding: 0;\n    margin: 0;\n    width: 100%;\n    height: 100%;\n  }\n\n  body {\n    font-family: Arial, Helvetica, sans-serif;\n  }\n"]);return L=function(){return n},n}var P=Object(l.b)(L()),Q=function(){return a.a.createElement(l.a,{theme:{}},a.a.createElement(r.Fragment,null,a.a.createElement(P,null),a.a.createElement(K,null),a.a.createElement(z,null)))};c.a.render(a.a.createElement(Q,null),document.getElementById("root"))}},[[16,2,1]]]);
//# sourceMappingURL=main.a1104678.chunk.js.map