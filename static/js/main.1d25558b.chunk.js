(this["webpackJsonpcomponent-example"]=this["webpackJsonpcomponent-example"]||[]).push([[0],{23:function(e,n,t){e.exports=t(45)},45:function(e,n,t){"use strict";t.r(n);var i=t(9),a=t(0),r=t.n(a),o=t(14),l=t.n(o),c=t(2),s=function(e,n){return"http://placekitten.com/".concat(e,"/").concat(n)},d=t(17),m=t.n(d),p=t(1),h=c.a.div((function(){return"\n    border-width: 0px;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    box-sizing: border-box;\n    border-radius: 0.25rem;\n  "}),p.c,p.h,{label:"Card"}),g=c.a.p("\n    font-family: 'Josefin Sans', sans-serif;\n  ",p.c,p.h,p.i,p.g),u=c.a.div("\n  ",p.c,p.h,p.e,p.a,p.g,p.f),f=c.a.div("\n    width: 100%;\n    @media (min-width: 1200px) {\n      max-width: 1140px;\n    }\n    @media (min-width: 992px) {\n      max-width: 960px;\n    }\n    @media (min-width: 768px) {\n      max-width: 720px;\n    }\n    @media (min-width: 576px) {\n      max-width: 540px;\n    }\n  ",p.c,p.h,p.g,p.f);f.defaultProps={px:"15px",mx:"auto"};var x=f,b=c.a.img("\n    vertical-align: middle;\n    border-style: none;\n  ",Object(p.d)(p.f,p.h,p.e,p.b,p.g));b.defaultProps={maxWidth:"100%",height:"auto"};var v=b;function w(){var e=Object(i.a)(["\ndisplay: flex;\nflex-direction: column;\nwidth: 100%;\n@media screen and (min-width: 920px) {\n  flex-direction: row;\n}\n"]);return w=function(){return e},e}var k=function(e){var n=e.item,t=n.alignment,i=n.name,a=n.description,o=e.background,l=s(400+Math.floor(10*Math.random()),200+Math.floor(10*Math.random()));return r.a.createElement(h,{px:"15px",backgroundColor:"Light"===o?"white":"#25282A"},r.a.createElement(v,{src:l,alt:i+" the kitten"}),r.a.createElement(g,{textAlign:t,color:"Light"===o?"#25282A":"white"},a))},y=c.a.div(w()),E=function(e){var n=e.background,t=e.logoItems,i={infinite:!0,arrows:!0,slidesToShow:3,slidesToScroll:1,dots:!1,nextArrow:r.a.createElement("img",{src:"/component-example/icons/chevron-right-".concat("Light"===n?"dark":"light",".svg"),alt:"next-kitten"}),prevArrow:r.a.createElement("img",{src:"/component-example/icons/chevron-left-".concat("Light"===n?"dark":"light",".svg"),alt:"prev-kitten"}),responsive:[{breakpoint:767,settings:{slidesToShow:1,arrows:!1,dots:!0}}]};return r.a.createElement(u,{p:"4rem 2rem",bg:"Light"===n?"white":"#25282A"},r.a.createElement(x,{bg:"Light"===n?"white":"#25282A"},t&&Array.isArray(t)&&t.length>3?r.a.createElement(m.a,i,t.map((function(e,t){return r.a.createElement(k,{item:e,key:"Kitten-slide-".concat(t),background:n})}))):t&&Array.isArray(t)&&r.a.createElement(y,null,t.map((function(e,t){return r.a.createElement(k,{key:"Kitten-".concat(t),item:e,background:n})})))))},A=c.a.h2("\n    text-transform: uppercase;\n  ",p.c,p.i,p.h,p.g);A.defaultProps={textAlign:"center",py:"3rem",px:"0.5rem",fontSize:"2.5rem",lineHeight:"2.3rem",fontFamily:"'Krona One', sans-serif",fontWeight:600,color:"#25282a",my:0};var z=A,L=t(22),j=function(e){var n,t,i=e.width;return i<427?(n=427,t=240):i<=854?(n=854,t=480):i<1280?(n=1280,t=720):(n=1920,t=1080),r.a.createElement("div",{className:"extra-large-container"},r.a.createElement("style",{jsx:!0},"\n          .extra-large-container {\n            width: 100%;\n            background-color: #25282A;\n          }\n          .wrapper {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            width: 100%;\n            max-width: 1920px;\n            max-height: ".concat(480,"px;\n            overflow: hidden;671\n          }\n          video {\n            object-fit: cover;\n          }\n        ")),r.a.createElement("div",{className:"wrapper mx-xl-auto"},r.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"auto",width:n,height:t<480?480:t},r.a.createElement("source",{src:"https://satsui-user-profile-pictures.s3.amazonaws.com/video/drone-footage.ogv",type:"video/ogv"}),r.a.createElement("source",{src:"https://satsui-user-profile-pictures.s3.amazonaws.com/video/drone-footage.webm",type:"video/webm"}),r.a.createElement("source",{src:"https://satsui-user-profile-pictures.s3.amazonaws.com/video/drone-footage.mp4",type:"video/mp4"}))))},O=c.a.div(p.f,p.c,p.g),C=function(e){var n,t,i,o=e.children,l=e.imgOrVid,c=e.opacityLayerClass,d=e.opacityOverride,m=void 0!==d&&d,p=250,h=Object(a.useState)([0,0]),g=Object(L.a)(h,2),f=g[0],x=g[1];Object(a.useLayoutEffect)((function(){var e=function(){x([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]);var b=f[0]>992?1:f[0]>576&&f[0]<993?1.2:2;return e.title&&(p+=75),e.subtitle&&(p+=60),e.description&&(p+=20*Math.ceil(e.description.length/40)),e.searchPlaceHolder&&(p+=60),e.hasAccompanyingCards&&(p+=200/(2*b)),e.hasAccompanyingBioCard&&(p+=200/b),e.link&&(p+=60),e.logos&&(p+=200),"Image"===l?(t=!1,n=s(f[0],f[0]/2)):"Video"===l&&(t=!0,i=f[0]>1920?1920:f[0]),r.a.createElement(u,{backgroundImage:t?"":'url("'.concat(n,'")'),backgroundSize:"cover"},r.a.createElement(O,{bg:m?"":"rgba(0, 0, 0, 0.6)",width:1,zIndex:m?"":2,height:t?"":"given"!==c||t?"manual-height"===c?p:"":[450,450,600],minHeight:t?480:"",position:"relative"},t&&r.a.createElement(j,{width:i}),r.a.createElement(u,{display:"flex",height:"100%",position:"absolute",zIndex:2,width:1,top:0,left:0,flexDirection:"column",justifyContent:"center"},o)))},I=function(e){var n=e.title,t=e.description;return r.a.createElement(C,{imgOrVid:"Video",opacityLayerClass:"manual-height",title:n,description:t},r.a.createElement(z,{color:"white"},n),t?r.a.createElement(g,{color:"white"},t):null)},M=[{alignment:"center",name:"Mittens",description:"Mittens is a great kitten! Mittens loves to play with other kittens."},{alignment:"center",name:"Fluffy",description:"Fluffy is a great kitten! Fluffy works hard and plays hard!"},{alignment:"center",name:"Roscoe",description:"Roscoe is a great kitten! Roscoe likes to play fetch with his little ball."},{alignment:"center",name:"Avery",description:"Avery is a great kitten! Avery likes to give love nibbles, and then lots of kisses."}];var S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{title:"General Hero Video Banner"}),r.a.createElement(z,{bg:"#f6f4f3"},"Light Kitten Carousel"),r.a.createElement(E,{background:"Light",logoItems:M}),r.a.createElement(z,{bg:"#f6f4f3"},"Dark Kitten Carousel"),r.a.createElement(E,{background:"Dark",logoItems:M}))},F=t(4),H=t(18);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=["320px","576px","768px","992px","1200px"],P="\nhtml,\nbody,\n#root {\n  min-width: ".concat(K[0],";\n  min-height: 100vh;\n  border: 0;\n  margin: 0;\n  padding: 0;\n  background: white;\n\n  * {\n    box-sizing: border-box;\n  }\n}\n\n.slick-slider {\n  width: 100%;\n  position: relative;\n  box-sizing: border-box;\n  user-select: none;\n  touch-action: pan-y;\n  -webkit-tap-hightlight-color: transparent;\n}\n.slick-list {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n}\n.slick-track {\n  position: relative;\n  top: 0;\n  left: 0;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.slick-slide {\n  display: block;\n  border-radius: 5px;\n  float: left;\n  height: 100%;\n  min-height: 1px;\n}\n.slick-prev,\n.slick-next {\n  font-size: 0;\n  line-height: 0;\n  position: absolute;\n  top: 50%;\n  width: 20px;\n  height: 20px;\n  padding: 0;\n  transform: translate(0, -50%);\n  cursor: pointer;\n  color: transparent;\n  border: none;\n  outline: none;\n  background: transparent;\n}\n.slick-prev {\n  left: -25px;\n}\n.slick-next {\n  right: -25px;\n}\n.slick-dots {\n  position: absolute;\n  bottom: -25px;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  text-align: center;\n  justify-content: center;\n  display: flex;\n}\n.slick-dots li {\n  position: relative;\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  margin: 0 5px;\n  padding: 0;\n  cursor: pointer;\n}\n.slick-dots button {\n  width: 0.1rem;\n  height: 0.1rem;\n  padding: 3px;\n  border-radius: 100%;\n  text-indent: -9999px;\n}\n.slick-dots li button {\n  font-size: 0;\n  line-height: 0;\n  display: block;\n  cursor: pointer;\n  color: transparent;\n  outline: none;\n  background: transparent;  \n  border: 1px solid #6f6f6f;\n}\n.slick-dots li.slick-active button {\n  border: 1px solid #d95e16;\n  background-color: #d95e16;\n}\n\n@media screen and (min-width: 1200px) {\n  .slick-list {\n    left: 0px;\n  }\n}\n.slick-slider .slick-list {\n  transform: translate3d(0, 0, 0);\n}\n"),V={breakpoints:K};function W(){var e=Object(i.a)(["\n        ","\n        "]);return W=function(){return e},e}l.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{styles:Object(F.c)(W(),P)}),r.a.createElement(r.a.StrictMode,null,r.a.createElement(H.a,{theme:V},r.a.createElement(S,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.1d25558b.chunk.js.map