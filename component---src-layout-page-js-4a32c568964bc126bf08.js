(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return u}),n.d(t,"pageQuery",function(){return m});var a=n(0),r=n.n(a),o=n(143),i=(n(155),n(164)),s=n.n(i),c=n(156),l=new s.a({createElement:r.a.createElement,components:{"photo-grid":c.a}}).Compiler;function u(e){var t=e.data.markdownRemark;return r.a.createElement(o.a,null,r.a.createElement("div",{className:"coverBand",id:"content"},r.a.createElement("div",{className:"overlay overlaySmaller"},r.a.createElement("div",{className:"punchline"},t.frontmatter.title))),r.a.createElement("div",{className:"Page"},r.a.createElement("article",{className:"card article",id:"content"},r.a.createElement("header",{className:"header",style:{paddingTop:"1em",paddingBottom:"2em"}}),r.a.createElement("div",{className:"content",itemProp:"articleBody"},l(t.htmlAst)))))}var m="3413535720"},156:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(178),c=n.n(s),l=(n(181),n(1)),u=n.n(l);n(158);var m={gatsbyImages:u.a.array.isRequired},p=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={photoIndex:0,isOpen:!1},n}r()(t,e);var n=t.prototype;return n.generatePicture=function(e,t,n){var a,r=this,o=n?"photoThumbnail marginRight":"photoThumbnail";return i.a.createElement("div",{key:t,className:o,style:(a=e,{backgroundImage:"url("+a+")"}),onClick:function(){return r.setState({isOpen:!0,photoIndex:t})}})},n.generateGrid=function(e,t){void 0===t&&(t=3);for(var n=[],a=0;a<e.length;a+=t){for(var r=[],o=0;o<t&&a+o<e.length;o++)o<t?r.push(this.generatePicture(e[a+o],a+o,!0)):r.push(this.generatePicture(e[a+o],a+o,!1));n.push(i.a.createElement("div",{key:a,className:"photoRowContainer"},r)),r=[]}return n},n.render=function(){var e=this,t=this.state,n=t.isOpen,a=t.photoIndex,r=this.props.gatsbyImages;return i.a.createElement("div",{className:"componentPhotoGrid"},n&&i.a.createElement(c.a,{mainSrc:r[a],nextSrc:r[(a+1)%r.length],prevSrc:r[(a+r.length-1)%r.length],onCloseRequest:function(){return e.setState({isOpen:!1})},onMovePrevRequest:function(){return e.setState({photoIndex:(a+r.length-1)%r.length})},onMoveNextRequest:function(){return e.setState({photoIndex:(a+1)%r.length})}}),i.a.createElement("div",{className:"photoGrid"},this.generateGrid(this.props.gatsbyImages)))},t}(i.a.Component);function d(e){var t=e.children.filter(function(e){return"string"!=typeof e}).map(function(e){return e.props.href});return i.a.createElement(p,{gatsbyImages:t})}p.propTypes=m,d.propTypes={children:u.a.node.isRequired},t.a=d},158:function(e,t,n){}}]);
//# sourceMappingURL=component---src-layout-page-js-4a32c568964bc126bf08.js.map