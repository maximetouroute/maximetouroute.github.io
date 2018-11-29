(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{142:function(e,t,a){"use strict";a.r(t);a(154);var r=a(6),i=a.n(r),n=a(0),o=a.n(n),l=a(144),s=(a(156),a(27),a(69),a(1)),d=a.n(s),m=a(218),c={leftImage:d.a.string.isRequired,rightImage:d.a.string.isRequired,sliderLineWidth:d.a.number,handleSize:d.a.number,hover:d.a.bool,skeleton:d.a.element,autoReloadSpan:d.a.number,autoReloadLimit:d.a.number,sliderPositionPercentage:d.a.number},p=function(e){function t(t){var a;return(a=e.call(this,t)||this).componentDidMount=function(){var e=a.containerRef.current;new m.ResizeSensor(e,function(){a.setImagesSize()}),e.addEventListener("touchstart",a.startSliding),window.addEventListener("touchend",a.finishSliding),a.props.hover?(e.addEventListener("mouseenter",a.startSliding),e.addEventListener("mouseleave",a.finishSliding)):(e.addEventListener("mousedown",a.startSliding),window.addEventListener("mouseup",a.finishSliding))},a.componentDidUpdate=function(e,t){!1===t.isImgFullyLoaded&&!0===a.state.isImgFullyLoaded&&a.setImagesSize(),a.props.leftImage===e.leftImage&&a.props.rightImage===e.rightImage||(a.underImageRef.current.src=null,a.overImageRef.current.src=null,a.isLoadingRightImg=!0,a.isLoadingLeftImg=!0,a.setState({isImgFullyLoaded:!1}),a.underImageRef.current.src=a.props.rightImage,a.overImageRef.current.src=a.props.leftImage)},a.componentWillUnmount=function(){a.finishSliding(),window.removeEventListener("mouseup",a.finishSliding),window.removeEventListener("touchend",a.finishSliding),a.autoReloadTasks.forEach(function(e){return clearTimeout(e)})},a.setImagesSize=function(){a.setState({imageWidth:a.underImageRef.current.getBoundingClientRect().width})},a.startSliding=function(e){"touches"in e||e.preventDefault(),a.handleSliding(e),window.addEventListener("mousemove",a.handleSliding),window.addEventListener("touchmove",a.handleSliding)},a.finishSliding=function(){window.removeEventListener("mousemove",a.handleSliding),window.removeEventListener("touchmove",a.handleSliding)},a.handleSliding=function(e){var t=e||window.event,r=(t.touches?t.touches[0].pageX:t.pageX)-window.pageXOffset-a.underImageRef.current.getBoundingClientRect().left,i=0+a.props.sliderLineWidth/2,n=a.state.imageWidth-a.props.sliderLineWidth/2;r<i&&(r=i),r>n&&(r=n),a.setState({sliderPositionPercentage:r/a.state.imageWidth})},a.onRightImageLoaded=function(){a.isLoadingRightImg=!1,a.isLoadingRightImg||a.isLoadingLeftImg||a.setState({isImgFullyLoaded:!0})},a.onLeftImageLoaded=function(){a.isLoadingLeftImg=!1,a.isLoadingRightImg||a.isLoadingLeftImg||a.setState({isImgFullyLoaded:!0})},a.onError=function(e,t){var r=a.props,i=r.autoReloadSpan,n=r.autoReloadLimit;if(i&&!(a.retryCount>=n)){var o=setTimeout(function(){e.current.src=null,e.current.src=t},i);a.autoReloadTasks.push(o),a.retryCount+=1}},a.render=function(){var e={container:{boxSizing:"border-box",position:"relative",width:"100%",overflow:"hidden"},underImage:{display:"block",height:"auto",width:"100%",background:"url("+a.props.underImage+")"},overImage:{clip:"rect(auto, "+a.state.imageWidth*a.state.sliderPositionPercentage+"px, auto, auto)",display:"block",height:"100%",objectFit:"cover",position:"absolute",top:0,width:"100%"},slider:{alignItems:"center",cursor:!a.props.hover&&"ew-resize",display:"flex",flexDirection:"column",height:"100%",justifyContent:"center",left:a.state.imageWidth*a.state.sliderPositionPercentage-a.props.handleSize/2+"px",position:"absolute",top:0,width:a.props.handleSize+"px"},line:{background:"white",boxShadow:"0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",flex:"0 1 auto",height:"100%",width:a.props.sliderLineWidth+"px"},handle:{alignItems:"center",border:a.props.sliderLineWidth+"px solid white",boxShadow:"0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",boxSizing:"border-box",display:"flex",flex:"1 0 auto",height:"80px",justifyContent:"center",width:"10px",backgroundColor:"white"},leftArrow:{border:"inset "+.15*a.props.handleSize+"px rgba(0,0,0,0)",borderRight:.15*a.props.handleSize+"px solid white",height:"0px",marginLeft:"-"+.5*a.props.handleSize+"px",marginRight:.5*a.props.handleSize+"px",width:"0px"},rightArrow:{border:"inset "+.15*a.props.handleSize+"px rgba(0,0,0,0)",borderLeft:.15*a.props.handleSize+"px solid white",height:"0px",marginRight:"-"+.5*a.props.handleSize+"px",width:"0px"},overlayTextLeft:{alignItems:"flex-start",display:"flex",flexDirection:"column",justifyContent:"center",left:a.state.imageWidth+"-100px",position:"absolute",top:0,backgroundColor:"rgba(0,0,0,0.5)",opacity:a.state.sliderPositionPercentage},overlayTextRight:{alignItems:"flex-end",display:"flex",flexDirection:"column",justifyContent:"center",right:"0",position:"absolute",top:0,backgroundColor:"rgba(0,0,0,0.5)",opacity:1-a.state.sliderPositionPercentage},leftWord:{textAlign:"left",color:"white",fontWeight:400,textTransform:"uppercase",padding:"1em"},rightWord:{textAlign:"right",color:"white",fontWeight:400,textTransform:"uppercase",padding:"1em"}};return o.a.createElement(o.a.Fragment,null,a.props.skeleton&&!a.state.isImgFullyLoaded&&o.a.createElement("div",{style:Object.assign({},e.container)},a.props.skeleton),o.a.createElement("div",{style:Object.assign({},e.container,{display:a.state.isImgFullyLoaded?"block":"none"}),ref:a.containerRef,dataenzyme:"container"},o.a.createElement("img",{onLoad:a.onLeftImageLoaded,onError:function(){return a.onError(a.underImageRef,a.props.rightImage)},alt:"left",className:"img-comp-under",ref:a.underImageRef,src:a.props.rightImage,style:e.underImage}),o.a.createElement("img",{onLoad:a.onRightImageLoaded,onError:function(){return a.onError(a.overImageRef,a.props.leftImage)},alt:"right",className:"img-comp-over",ref:a.overImageRef,src:a.props.leftImage,style:e.overImage}),o.a.createElement("div",{style:e.overlayTextRight},o.a.createElement("span",{style:e.leftWord},"RAW")),o.a.createElement("div",{style:e.overlayTextLeft},o.a.createElement("span",{style:e.leftWord},"GRADED")),o.a.createElement("div",{className:"img-comp-slider",style:e.slider},o.a.createElement("div",{style:e.line}),o.a.createElement("div",{style:e.handle},o.a.createElement("div",{style:e.leftArrow}),o.a.createElement("div",{style:e.rightArrow})),o.a.createElement("div",{style:e.line}))))},a.state={sliderPositionPercentage:a.props.sliderPositionPercentage,imageWidth:0,isImgFullyLoaded:!1},a.containerRef=o.a.createRef(),a.underImageRef=o.a.createRef(),a.overImageRef=o.a.createRef(),a.isLoadingRightImg=!0,a.isLoadingLeftImg=!0,a.autoReloadTasks=[],a.retryCount=0,a}return i()(t,e),t}(o.a.Component);p.propTypes=c,p.defaultProps={sliderLineWidth:2,handleSize:40,hover:!1,skeleton:null,autoReloadSpan:null,autoReloadLimit:10,sliderPositionPercentage:.75};var g=p,u=a(33);a.d(t,"fileImage",function(){return v}),a.d(t,"query",function(){return E});var h={title:d.a.string.isRequired,subtitle:d.a.string.isRequired,cameraModel:d.a.string.isRequired,videoFlux:d.a.string.isRequired,description:d.a.string.isRequired},f={backgroundColor:"#4c4c4c",borderColor:"#4c4c4c",height:"1px",marginTop:"5em",marginBottom:"5em",width:"250px"},x=function(e){function t(){return e.apply(this,arguments)||this}i()(t,e);var a=t.prototype;return a.cameraUsed=function(){return void 0!==this.props.cameraModel?o.a.createElement("p",null,o.a.createElement("strong",null,"Caméra : "),this.props.cameraModel):o.a.createElement(o.a.Fragment,null)},a.videoFlux=function(){return void 0!==this.props.videoFlux?o.a.createElement("p",null,o.a.createElement("strong",null,"Video flux : "),this.props.videoFlux):o.a.createElement(o.a.Fragment,null)},a.render=function(){return o.a.createElement("div",null,o.a.createElement("h2",null,this.props.title),o.a.createElement("p",null,this.props.subtitle),this.cameraUsed(),this.videoFlux(),o.a.createElement("p",null,this.props.description))},t}(n.Component);x.propTypes=h;var I=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return o.a.createElement(l.a,null,o.a.createElement("div",{className:"coverBand",id:"content"},o.a.createElement("div",{className:"overlay overlaySmaller"},o.a.createElement("div",{className:"punchline"},"Color Grade showreel"))),o.a.createElement("div",{className:"Page"},o.a.createElement("article",{className:"card article",id:"content"},o.a.createElement("header",{className:"header",style:{paddingTop:"1em",paddingBottom:"2em"}}),o.a.createElement("div",{className:"content",itemProp:"articleBody"},o.a.createElement(x,{title:"RÉALITÉ",subtitle:"Court métrage de Maxime Touroute",videoFlux:"H264",cameraModel:"Nikon D5500",description:"Ici, et suite à un tournage avec très peu d'éclairage disponible, un gros travail sur le contraste de l'image a été fait pour lui donner un maximum de dynamisme.\n"}),o.a.createElement(g,{leftImage:this.props.data.real2A.childImageSharp.fixed.src,rightImage:this.props.data.real2B.childImageSharp.fixed.src}),o.a.createElement("hr",{style:f}),o.a.createElement(x,{title:"PETIT POUCET",subtitle:"Court métrage co-réalisé",cameraModel:"Blackmagic Cinema Camera",videoFlux:"Prores standard",description:"Étalonnage express d'un court métrage réalisé en quelques heures."}),o.a.createElement(g,{leftImage:this.props.data.poucet2A.childImageSharp.fixed.src,rightImage:this.props.data.poucet2B.childImageSharp.fixed.src}),o.a.createElement("hr",{style:f}),o.a.createElement(x,{title:"MARIPEGA",subtitle:"Clip réalité par Maxime Touroute",cameraModel:"Nikon D5500",videoFlux:"H264 de bonne qualité",description:"Création d'un effet coucher de soleil chaud ainsi qu'une ambiance matinale anxiogène."}),o.a.createElement(g,{leftImage:this.props.data.mari3A.childImageSharp.fixed.src,rightImage:this.props.data.mari3B.childImageSharp.fixed.src}),o.a.createElement(g,{leftImage:this.props.data.mari1A.childImageSharp.fixed.src,rightImage:this.props.data.mari1B.childImageSharp.fixed.src}),o.a.createElement(g,{leftImage:this.props.data.mari5A.childImageSharp.fixed.src,rightImage:this.props.data.mari5B.childImageSharp.fixed.src}),o.a.createElement("hr",{style:f}),o.a.createElement(x,{title:"HARMONIE DES SPHÈRES",subtitle:"Court métrage de Vincent Montalieu.",cameraModel:"Lumix GH2",videoFlux:"H264 de qualité assez faible nécessitant une grande finesse dans l'étalonnage",description:"Création d'un étalonnage neutre et froid pour une ambiance réaliste et parfois sombre."}),o.a.createElement(g,{leftImage:this.props.data.harm1A.childImageSharp.fixed.src,rightImage:this.props.data.harm1B.childImageSharp.fixed.src}),o.a.createElement(g,{leftImage:this.props.data.harm3A.childImageSharp.fixed.src,rightImage:this.props.data.harm3B.childImageSharp.fixed.src}),o.a.createElement(g,{leftImage:this.props.data.harm4A.childImageSharp.fixed.src,rightImage:this.props.data.harm4B.childImageSharp.fixed.src}),o.a.createElement(g,{leftImage:this.props.data.harm5A.childImageSharp.fixed.src,rightImage:this.props.data.harm5B.childImageSharp.fixed.src}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("p",null,"For more, check out my ",o.a.createElement(u.Link,{to:"/color-grade-breakdown-2017"},"2017 Color Grading Showreel"))))))},t}(o.a.Component),v=(t.default=I,"3877438404"),E="1420418722"}}]);
//# sourceMappingURL=component---src-pages-grading-showcase-js-adc386e34d0f9658b84b.js.map