(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{FJi0:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o})),n.d(t,"newsQuery",(function(){return u}));n("91GP"),n("SRfc"),n("KKXr"),n("pIFo"),n("Vd3H");var r=n("q1tI"),a=n.n(r),l=n("Wbzz"),c=n("xXUH"),i=n("uft2");n("UApj");function o(e){var t=e.data.allIcal.edges.sort((function(e,t){return new Date(t.node.start).getTime()-new Date(e.node.start).getTime()})),n=new Date,r=t.filter((function(e){var t=e.node;return new Date(t.end)<n})),o=t.filter((function(e){var t=e.node;return new Date(t.start)<=n&n<=new Date(t.end)})),u=t.filter((function(e){var t=e.node;return n<new Date(t.start)})),m=function(e){var t=new Date(e.start).toISOString().substring(0,10),n=new Date(e.end).toISOString().substring(0,10),r=t===n?""+t:t+" → "+n,c=/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;e.description=e.description.replace(/<\/?[^>]+(>|$)/g,(function(e){return""})),e.description=e.description.replace(/&.*;/g,(function(e){return""})),e.description=e.description.replace("\n",(function(e){return""}));var i=e.description.replace(c,(function(){return""})),o=a.a.createElement(a.a.Fragment,null,i.split(/BR/g).map((function(e){return a.a.createElement(a.a.Fragment,null,e,a.a.createElement("br",null))}))),u=e.description.match(c)||[];return a.a.createElement("div",{style:{lineHeight:1.5,marginBottom:"2em"},key:e.summary},a.a.createElement("h3",{style:{marginBottom:"0.5em"}},e.summary),a.a.createElement("div",null,a.a.createElement("strong",null,r)),e.location&&a.a.createElement("div",null,"Location: ",e.location),a.a.createElement("p",null,o,u.map((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.Link,{to:e},e),a.a.createElement("br",null))}))))},s={textAlign:"",marginTop:"2em",marginBottom:"2em",borderLeft:"5px solid #bfceee",paddingLeft:"0.5em"};return a.a.createElement(c.a,null,a.a.createElement(i.a,{title:"News"}),a.a.createElement("div",{className:"Page"},a.a.createElement("article",{className:"card article"},a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("div",{className:"content",itemProp:"articleBody"},a.a.createElement("h2",{style:Object.assign({},s,{color:"#3568cf"})},"Currently Happening"),o.map((function(e){var t=e.node;return m(t)})),a.a.createElement("h2",{style:Object.assign({},s,{color:"#3568cf"})},"Upcoming Events"),u.map((function(e){var t=e.node;return m(t)})),a.a.createElement("h2",{style:s},"Past Events"),r.map((function(e){var t=e.node;return m(t)}))),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(l.Link,{to:"/"},"Go Home"))))}var u="3048838278"}}]);
//# sourceMappingURL=component---src-pages-news-js-8ecafea737f2cddb5e90.js.map