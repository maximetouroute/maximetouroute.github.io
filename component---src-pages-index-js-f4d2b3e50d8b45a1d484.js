(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return s}),n.d(t,"portfolioPostsQuery",function(){return l});n(225);var a=n(0),r=n.n(a),o=n(33),c=n(150),i=n(165);n(227);function s(e){var t=e.data.allMarkdownRemark.edges;return r.a.createElement(c.a,null,r.a.createElement(i.a,{title:"Home"}),r.a.createElement("div",{className:"home homePosts"},r.a.createElement("div",{className:"postGrid"},t.filter(function(e){return e.node.frontmatter.title.length>0}).map(function(e){var t=e.node;return r.a.createElement("div",{className:"post",onClick:function(){Object(o.navigate)(t.frontmatter.path+"#content")},key:t.id},r.a.createElement("div",{className:"postHeader",style:{backgroundImage:"url("+t.frontmatter.image.childImageSharp.fixed.src+")"}},r.a.createElement("div",{className:"inside"},r.a.createElement("span",{className:"postTitle"},t.frontmatter.title),r.a.createElement("span",{className:"post-meta postTag"},t.frontmatter.subtitle))))})),r.a.createElement("div",{className:"moreProjects"},r.a.createElement(o.Link,{to:"/about#recentProjects"},"More projects"))))}var l="3212459193"},225:function(e,t,n){"use strict";n(226)("fixed",function(e){return function(){return e(this,"tt","","")}})},226:function(e,t,n){var a=n(14),r=n(26),o=n(17),c=/"/g,i=function(e,t,n,a){var r=String(o(e)),i="<"+t;return""!==n&&(i+=" "+n+'="'+String(a).replace(c,"&quot;")+'"'),i+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(i),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},227:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-index-js-f4d2b3e50d8b45a1d484.js.map