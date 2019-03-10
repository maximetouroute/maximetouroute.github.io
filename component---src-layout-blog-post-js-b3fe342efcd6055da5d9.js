(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{146:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(148),o=(n(157),n(219),n(164)),s=n.n(o),l=n(159),d=(n(27),n(72),n(6)),g=n.n(d),c=n(1),p=n.n(c),m=n(221),u={leftImage:p.a.string.isRequired,rightImage:p.a.string.isRequired,sliderLineWidth:p.a.number,handleSize:p.a.number,hover:p.a.bool,skeleton:p.a.element,autoReloadSpan:p.a.number,autoReloadLimit:p.a.number,sliderPositionPercentage:p.a.number},h=function(e){function t(t){var n;return(n=e.call(this,t)||this).componentDidMount=function(){var e=n.containerRef.current;new m.ResizeSensor(e,function(){n.setImagesSize()}),e.addEventListener("touchstart",n.startSliding),window.addEventListener("touchend",n.finishSliding),n.props.hover?(e.addEventListener("mouseenter",n.startSliding),e.addEventListener("mouseleave",n.finishSliding)):(e.addEventListener("mousedown",n.startSliding),window.addEventListener("mouseup",n.finishSliding)),n.setState({isImgFullyLoaded:!0})},n.componentDidUpdate=function(e,t){!1===t.isImgFullyLoaded&&!0===n.state.isImgFullyLoaded&&n.setImagesSize(),n.props.leftImage===e.leftImage&&n.props.rightImage===e.rightImage||(n.underImageRef.current.src=null,n.overImageRef.current.src=null,n.isLoadingRightImg=!0,n.isLoadingLeftImg=!0,n.setState({isImgFullyLoaded:!1}),n.underImageRef.current.src=n.props.rightImage,n.overImageRef.current.src=n.props.leftImage)},n.componentWillUnmount=function(){n.finishSliding(),window.removeEventListener("mouseup",n.finishSliding),window.removeEventListener("touchend",n.finishSliding),n.autoReloadTasks.forEach(function(e){return clearTimeout(e)})},n.setImagesSize=function(){n.setState({imageWidth:n.underImageRef.current.getBoundingClientRect().width})},n.startSliding=function(e){"touches"in e||e.preventDefault(),n.handleSliding(e),window.addEventListener("mousemove",n.handleSliding),window.addEventListener("touchmove",n.handleSliding)},n.finishSliding=function(){window.removeEventListener("mousemove",n.handleSliding),window.removeEventListener("touchmove",n.handleSliding)},n.handleSliding=function(e){var t=e||window.event,r=(t.touches?t.touches[0].pageX:t.pageX)-window.pageXOffset-n.underImageRef.current.getBoundingClientRect().left,a=0+n.props.sliderLineWidth/2,i=n.state.imageWidth-n.props.sliderLineWidth/2;r<a&&(r=a),r>i&&(r=i),n.setState({sliderPositionPercentage:r/n.state.imageWidth})},n.onRightImageLoaded=function(){n.isLoadingRightImg=!1,n.isLoadingRightImg||n.isLoadingLeftImg||n.setState({isImgFullyLoaded:!0})},n.onLeftImageLoaded=function(){n.isLoadingLeftImg=!1,n.isLoadingRightImg||n.isLoadingLeftImg||n.setState({isImgFullyLoaded:!0})},n.onError=function(e,t){var r=n.props,a=r.autoReloadSpan,i=r.autoReloadLimit;if(a&&!(n.retryCount>=i)){var o=setTimeout(function(){e.current.src=null,e.current.src=t},a);n.autoReloadTasks.push(o),n.retryCount+=1}},n.render=function(){var e={container:{boxSizing:"border-box",position:"relative",width:"100%",overflow:"hidden",marginTop:"1em",marginBottom:"1em"},underImage:{display:"block",height:"auto",width:"100%",background:"url("+n.props.underImage+")"},overImage:{clip:"rect(auto, "+n.state.imageWidth*n.state.sliderPositionPercentage+"px, auto, auto)",display:"block",height:"100%",objectFit:"cover",position:"absolute",top:0,width:"100%"},slider:{alignItems:"center",cursor:!n.props.hover&&"ew-resize",display:"flex",flexDirection:"column",height:"100%",justifyContent:"center",left:n.state.imageWidth*n.state.sliderPositionPercentage-n.props.handleSize/2+"px",position:"absolute",top:0,width:n.props.handleSize+"px"},line:{background:"white",boxShadow:"0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",flex:"0 1 auto",height:"100%",width:n.props.sliderLineWidth+"px"},handle:{alignItems:"center",border:n.props.sliderLineWidth+"px solid white",boxShadow:"0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",boxSizing:"border-box",display:"flex",flex:"1 0 auto",height:"80px",justifyContent:"center",width:"10px",backgroundColor:"white"},leftArrow:{border:"inset "+.15*n.props.handleSize+"px rgba(0,0,0,0)",borderRight:.15*n.props.handleSize+"px solid white",height:"0px",marginLeft:"-"+.5*n.props.handleSize+"px",marginRight:.5*n.props.handleSize+"px",width:"0px"},rightArrow:{border:"inset "+.15*n.props.handleSize+"px rgba(0,0,0,0)",borderLeft:.15*n.props.handleSize+"px solid white",height:"0px",marginRight:"-"+.5*n.props.handleSize+"px",width:"0px"},overlayTextLeft:{alignItems:"flex-start",display:"flex",flexDirection:"column",justifyContent:"center",left:n.state.imageWidth+"-100px",position:"absolute",top:0,backgroundColor:"rgba(0,0,0,0.5)",opacity:n.state.sliderPositionPercentage},overlayTextRight:{alignItems:"flex-end",display:"flex",flexDirection:"column",justifyContent:"center",right:"0",position:"absolute",top:0,backgroundColor:"rgba(0,0,0,0.5)",opacity:1-n.state.sliderPositionPercentage},leftWord:{textAlign:"left",color:"white",fontWeight:400,textTransform:"uppercase",padding:"1em"},rightWord:{textAlign:"right",color:"white",fontWeight:400,textTransform:"uppercase",padding:"1em"}};return a.a.createElement(a.a.Fragment,null,n.props.skeleton&&!n.state.isImgFullyLoaded&&a.a.createElement("div",{style:Object.assign({},e.container)},n.props.skeleton),a.a.createElement("div",{style:Object.assign({},e.container,{display:n.state.isImgFullyLoaded?"block":"none"}),ref:n.containerRef,dataenzyme:"container"},a.a.createElement("img",{onLoad:n.onLeftImageLoaded,onError:function(){return n.onError(n.underImageRef,n.props.rightImage)},alt:"left",className:"img-comp-under",ref:n.underImageRef,src:n.props.rightImage,style:e.underImage}),a.a.createElement("img",{onLoad:n.onRightImageLoaded,onError:function(){return n.onError(n.overImageRef,n.props.leftImage)},alt:"right",className:"img-comp-over",ref:n.overImageRef,src:n.props.leftImage,style:e.overImage}),a.a.createElement("div",{style:e.overlayTextRight},a.a.createElement("span",{style:e.leftWord},"RAW")),a.a.createElement("div",{style:e.overlayTextLeft},a.a.createElement("span",{style:e.leftWord},"GRADED")),a.a.createElement("div",{className:"img-comp-slider",style:e.slider},a.a.createElement("div",{style:e.line}),a.a.createElement("div",{style:e.handle},a.a.createElement("div",{style:e.leftArrow}),a.a.createElement("div",{style:e.rightArrow})),a.a.createElement("div",{style:e.line}))))},n.state={sliderPositionPercentage:n.props.sliderPositionPercentage,imageWidth:0,isImgFullyLoaded:!1},n.containerRef=a.a.createRef(),n.underImageRef=a.a.createRef(),n.overImageRef=a.a.createRef(),n.isLoadingRightImg=!0,n.isLoadingLeftImg=!0,n.autoReloadTasks=[],n.retryCount=0,n}return g()(t,e),t}(a.a.Component);function f(e){var t=e.children.filter(function(e){return"string"!=typeof e}),n=t[0].props.href,r=t[1].props.href;return a.a.createElement(h,{leftImage:n||null,rightImage:r||null})}h.propTypes=u,h.defaultProps={sliderLineWidth:2,handleSize:40,hover:!1,skeleton:null,autoReloadSpan:null,autoReloadLimit:10,sliderPositionPercentage:.75},f.propTypes={children:p.a.node.isRequired};var v=f,x=n(163);n.d(t,"default",function(){return y}),n.d(t,"pageQuery",function(){return b});var I=new s.a({createElement:a.a.createElement,components:{"photo-grid":l.a,"image-compare":v}}).Compiler;function y(e){var t=e.data.markdownRemark;return a.a.createElement(i.a,null,a.a.createElement(x.a,{title:t.frontmatter.title,description:t.frontmatter.description||t.frontmatter.subtitle,image:t.frontmatter.image.childImageSharp.sizes.src,pathname:t.frontmatter.path,article:!0}),a.a.createElement("div",{className:"coverBand",id:"content"},a.a.createElement("div",{className:"overlay"},a.a.createElement("h1",{className:"punchline"},t.frontmatter.title),a.a.createElement("h2",{className:"subtext"},a.a.createElement("p",null,a.a.createElement("strong",null,t.frontmatter.subtitle," ")),a.a.createElement("p",null,a.a.createElement("em",null,new Date(t.frontmatter.date).getFullYear()))))),a.a.createElement("div",{className:"Page"},a.a.createElement("article",{className:"card",itemScope:!0,itemType:"http://schema.org/BlogPosting"},a.a.createElement("div",{className:"article"},a.a.createElement("br",null),a.a.createElement("br",null),I(t.htmlAst)))))}var b="1021491203"},157:function(e,t,n){},159:function(e,t,n){"use strict";var r=n(6),a=n.n(r),i=n(0),o=n.n(i),s=n(178),l=(n(182),n(1)),d=n.n(l);n(161);var g={gatsbyImages:d.a.array.isRequired},c=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={photoIndex:0,isOpen:!1},n}a()(t,e);var n=t.prototype;return n.generatePicture=function(e,t,n){var r,a=this,i=n?"photoThumbnail marginRight":"photoThumbnail";return o.a.createElement("div",{key:t,className:i,style:(r=e,{backgroundImage:"url("+r+")"}),onClick:function(){return a.setState({isOpen:!0,photoIndex:t})}})},n.generateGrid=function(e,t){void 0===t&&(t=3);for(var n=[],r=0;r<e.length;r+=t){for(var a=[],i=0;i<t&&r+i<e.length;i++)i<t?a.push(this.generatePicture(e[r+i],r+i,!0)):a.push(this.generatePicture(e[r+i],r+i,!1));n.push(o.a.createElement("div",{key:r,className:"photoRowContainer"},a)),a=[]}return n},n.render=function(){var e=this,t=this.state,n=t.isOpen,r=t.photoIndex,a=this.props.gatsbyImages;return o.a.createElement("div",{className:"componentPhotoGrid"},n&&o.a.createElement(s.a,{mainSrc:a[r],nextSrc:a[(r+1)%a.length],prevSrc:a[(r+a.length-1)%a.length],onCloseRequest:function(){return e.setState({isOpen:!1})},onMovePrevRequest:function(){return e.setState({photoIndex:(r+a.length-1)%a.length})},onMoveNextRequest:function(){return e.setState({photoIndex:(r+1)%a.length})}}),o.a.createElement("div",{className:"photoGrid"},this.generateGrid(this.props.gatsbyImages)))},t}(o.a.Component);function p(e){var t=e.children.filter(function(e){return"string"!=typeof e}).map(function(e){return e.props.href});return o.a.createElement(c,{gatsbyImages:t})}c.propTypes=g,p.propTypes={children:d.a.node.isRequired},t.a=p},161:function(e,t,n){}}]);
//# sourceMappingURL=component---src-layout-blog-post-js-b3fe342efcd6055da5d9.js.map