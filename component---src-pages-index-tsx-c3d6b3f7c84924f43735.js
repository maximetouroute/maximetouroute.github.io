"use strict";(self.webpackChunkmaxime_touroute_portfolio=self.webpackChunkmaxime_touroute_portfolio||[]).push([[6691],{8525:function(t,e,o){o.r(e),o.d(e,{default:function(){return Z}});var r=o(4854),n=o(660),i=o(2837),a=o(917),c=o(5624),m=o(8032),s=o(1249);const l={display:"flex",flexDirection:"column",backgroundColor:"transparent",transform:"scale(0.98)",fontSize:"1rem",color:"#4c4c4c",opacity:.9,transition:"color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    filter 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)",textDecoration:"none",[(0,s.W8)("small")]:{width:"90vw",height:"70vw",marginTop:"1em",marginCottom:"1em",opacity:1,"&:hover":{transform:"none",cursor:"pointer"}},[(0,s.W8)("normal")]:{margin:"1em",width:"60vw",height:"30vw",maxWidth:"30em",maxHeight:"20em",opacity:1},"&:hover":{border:"none",cursor:"pointer",transform:"scale(1)",color:"white",opacity:1}},d={display:"flex",flexDirection:"column"},f={fontSize:"1.5em",fontWeight:600,padding:"0.5rem",paddingBottom:0,paddingLeft:0,marginBottom:0},p={fontSize:"1em",boxDecorationBreak:"clone",padding:"0.5rem",paddingLeft:0},u={flexGrow:1,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center top"},g={margin:"auto",display:"flex",flexDirection:"row",justifyContent:"center",flexWrap:"wrap",maxWidth:"90rem",width:"100%",padding:0},b=t=>({"&:hover":{color:t+" !important"}});function h(t){let{posts:e}=t;return(0,a.tZ)("div",{css:g},e.filter((t=>t.node.frontmatter.title.length>0)).map((t=>{let{node:e}=t;const o=e.frontmatter.image.childImageSharp,n=(0,m.c)(o),i=void 0!==e.frontmatter.image.colors?b(e.frontmatter.image.colors.vibrant):{};return(0,a.tZ)(r.Link,{css:(0,a.iv)({...l,...i},"","","",""),to:e.frontmatter.path+"#content",key:e.id},(0,a.tZ)("div",{css:d},(0,a.tZ)("span",{css:f},e.frontmatter.title),(0,a.tZ)("span",{css:p},e.frontmatter.subtitle," ")),(0,a.tZ)(c.Dz,{image:n,css:u}))})))}const x={aboutMe:{en:"About",fr:"A propos"}},v={marginTop:"4rem"},y=t=>({fontSize:"1.5rem",display:"grid",justifySelf:"center",justifyItems:"center",a:{textAlign:"center",margin:"1rem",marginTop:"4rem",...(0,s.G)(t.palette.primary.main)}});function Z(t){let{data:e,pageContext:{langCode:o},location:c}=t;const m=e.allMdx.edges.filter((t=>t.node.frontmatter.language===o));return(0,a.tZ)(n.Z,{language:o,location:{...c}},(0,a.tZ)(i.Z,{title:"Home",langCode:o}),(0,a.tZ)("div",{css:v},(0,a.tZ)(h,{posts:m}),(0,a.tZ)("div",{css:t=>y(t)},(0,a.tZ)(r.Link,{to:"/about"},x.aboutMe[o]))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-c3d6b3f7c84924f43735.js.map