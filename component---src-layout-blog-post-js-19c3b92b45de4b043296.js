(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{143:function(e,t,n){"use strict";n.r(t);n(154);var a=n(0),r=n.n(a),o=n(144),l=(n(156),n(188),n(190)),s=n.n(l),i=n(6),c=n.n(i),u=n(175),m=n.n(u),p=(n(178),n(1)),h=n.n(p);var d={gatsbyImages:h.a.array.isRequired},g=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={photoIndex:0,isOpen:!1},n}c()(t,e);var n=t.prototype;return n.generatePicture=function(e,t,n){var a,o=this,l=n?"photoThumbnail marginRight":"photoThumbnail";return r.a.createElement("div",{className:l,style:(a=e,{backgroundImage:"url("+a+")"}),onClick:function(){return o.setState({isOpen:!0,photoIndex:t})},key:e.id})},n.generateGrid=function(e,t){void 0===t&&(t=3);for(var n=[],a=0;a<e.length;a+=t){for(var o=[],l=0;l<t&&a+l<e.length;l++)l<t?o.push(this.generatePicture(e[a+l],a+l,!0)):o.push(this.generatePicture(e[a+l],a+l,!1));n.push(r.a.createElement("div",{className:"photoRowContainer",key:e[a].id},o)),o=[]}return n},n.render=function(){var e=this,t=this.state,n=t.isOpen,a=t.photoIndex,o=this.props.gatsbyImages;return r.a.createElement(r.a.Fragment,null,n&&r.a.createElement(m.a,{mainSrc:o[a],nextSrc:o[(a+1)%o.length],prevSrc:o[(a+o.length-1)%o.length],onCloseRequest:function(){return e.setState({isOpen:!1})},onMovePrevRequest:function(){return e.setState({photoIndex:(a+o.length-1)%o.length})},onMoveNextRequest:function(){return e.setState({photoIndex:(a+1)%o.length})}}),r.a.createElement("div",{className:"photoGrid"},this.generateGrid(this.props.gatsbyImages)))},t}(r.a.Component);function v(e){var t=e.children.filter(function(e){return"string"!=typeof e}),n=t.map(function(e){return e.props.href});return console.log("photos : "+t),console.log(t),r.a.createElement(g,{gatsbyImages:n})}g.propTypes=d,v.propTypes={children:h.a.node.isRequired};var f=v;n.d(t,"default",function(){return y}),n.d(t,"pageQuery",function(){return b});var E=new s.a({createElement:r.a.createElement,components:{"photo-grid":f}}).Compiler;function y(e){var t=e.data.markdownRemark;return r.a.createElement(o.a,null,r.a.createElement("div",{className:"coverBand",style:{backgroundImage:"url("+t.frontmatter.cover.childImageSharp.fixed.src+")"},id:"content"},r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"punchline"},t.frontmatter.title),r.a.createElement("div",{className:"subtext"},r.a.createElement("p",null,r.a.createElement("strong",null,t.frontmatter.subtitle," ")),r.a.createElement("p",null,r.a.createElement("em",null,new Date(t.frontmatter.date).getFullYear()))))),r.a.createElement("div",{className:"Page"},r.a.createElement("article",{className:"card",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.a.createElement("div",{className:"article"},r.a.createElement("br",null),r.a.createElement("br",null),E(t.htmlAst)))))}var b="597801053"}}]);
//# sourceMappingURL=component---src-layout-blog-post-js-19c3b92b45de4b043296.js.map