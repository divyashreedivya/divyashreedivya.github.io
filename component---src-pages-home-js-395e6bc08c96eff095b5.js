(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[79],{625:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAXABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAMEBQEG/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQMC/9oADAMBAAIQAxAAAAG1DypOmwkD56A3PVBr/8QAHRAAAgEEAwAAAAAAAAAAAAAAAgMBAAQREiEiMv/aAAgBAQABBQI+oB60q6bGIdgwKDFmTbE827dV/wD/xAAVEQEBAAAAAAAAAAAAAAAAAAARIP/aAAgBAwEBPwFj/8QAFREBAQAAAAAAAAAAAAAAAAAAESD/2gAIAQIBAT8BI//EAB0QAAICAQUAAAAAAAAAAAAAAAABAhEhAxBBUWH/2gAIAQEABj8CbEs572enWSD4QpIk0iivT//EABsQAQADAQEBAQAAAAAAAAAAAAEAETEhUWGR/9oACAEBAAE/IT74cnrTh+5XyGOlG3koUXX8mBDOvVKsRFN5LjYKf//aAAwDAQACAAMAAAAQxBD9/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARIf/aAAgBAwEBPxBO2yQ8v//EABcRAQEBAQAAAAAAAAAAAAAAAAEAESH/2gAIAQIBAT8QFZDJ2//EAB4QAQEAAQQDAQAAAAAAAAAAAAERACExQVFhcYGh/9oACAEBAAE/EI6DXRzsfuKObKw7KJ1s6Z4GA+HRBy+5ClaWCrCfO8uzOl3PGDn5AEBnPrEdCyurkKpYZxpn/9k="},"images":{"fallback":{"src":"/static/d511d6af04017d42dfcc3ce54e2db0b2/a9c12/profilepic.jpg","srcSet":"/static/d511d6af04017d42dfcc3ce54e2db0b2/cbd81/profilepic.jpg 72w,\\n/static/d511d6af04017d42dfcc3ce54e2db0b2/32af9/profilepic.jpg 144w,\\n/static/d511d6af04017d42dfcc3ce54e2db0b2/a9c12/profilepic.jpg 287w","sizes":"(min-width: 287px) 287px, 100vw"},"sources":[{"srcSet":"/static/d511d6af04017d42dfcc3ce54e2db0b2/a9c18/profilepic.webp 72w,\\n/static/d511d6af04017d42dfcc3ce54e2db0b2/d429a/profilepic.webp 144w,\\n/static/d511d6af04017d42dfcc3ce54e2db0b2/edaf8/profilepic.webp 287w","type":"image/webp","sizes":"(min-width: 287px) 287px, 100vw"}]},"width":287,"height":331}')},2815:function(e,A,t){"use strict";function o(e,A){var t={};for(var o in e)A.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}function r(e,A){var t=A.left,o=A.right,r=A.up,a=A.down,n=A.top,i=A.bottom,l=A.big,d=A.mirror,u=A.opposite,p=(t?1:0)|(o?2:0)|(n||a?4:0)|(i||r?8:0)|(d?16:0)|(u?32:0)|(e?64:0)|(l?128:0);if(f.hasOwnProperty(p))return f[p];var s=t||o||r||a||n||i,m=void 0,b=void 0;if(s){if(!d!=!(e&&u)){var E=[o,t,i,n,a,r];t=E[0],o=E[1],n=E[2],i=E[3],r=E[4],a=E[5]}var v=l?"2000px":"100%";m=t?"-"+v:o?v:"0",b=a||n?"-"+v:r||i?v:"0"}return f[p]=(0,c.animation)((e?"to":"from")+" {"+(s?" transform: translate3d("+m+", "+b+", 0);":"")+"}\n     "+(e?"from":"to")+" {transform: none;} "),f[p]}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.defaults,A=e.children,t=(e.out,e.forever),a=e.timeout,n=e.duration,i=void 0===n?c.defaults.duration:n,l=e.delay,u=void 0===l?c.defaults.delay:l,f=e.count,p=void 0===f?c.defaults.count:f,s=o(e,["children","out","forever","timeout","duration","delay","count"]),m={make:r,duration:void 0===a?i:a,delay:u,forever:t,count:p,style:{animationFillMode:"both"},reverse:s.left};return(0,d.default)(s,m,m,A)}Object.defineProperty(A,"__esModule",{value:!0});var n,i=t(5697),l=t(1719),d=(n=l)&&n.__esModule?n:{default:n},c=t(5321),u={out:i.bool,left:i.bool,right:i.bool,top:i.bool,bottom:i.bool,big:i.bool,mirror:i.bool,opposite:i.bool,duration:i.number,timeout:i.number,delay:i.number,count:i.number,forever:i.bool},f={};a.propTypes=u,A.default=a,e.exports=A.default},8501:function(e,A,t){"use strict";function o(e,A){var t={};for(var o in e)A.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}function r(e,A){var t=A.left,o=A.right,r=A.up,a=A.down,n=A.top,i=A.bottom,l=A.mirror,d=A.opposite,u=(t?1:0)|(o?2:0)|(n||a?4:0)|(i||r?8:0)|(l?16:0)|(d?32:0)|(e?64:0);if(f.hasOwnProperty(u))return f[u];if(!l!=!(e&&d)){var p=[o,t,i,n,a,r];t=p[0],o=p[1],n=p[2],i=p[3],r=p[4],a=p[5]}var s=t||o,m=n||i||r||a,b=void 0;return s||m?e?b="40% {\n          opacity: 1;\n          transform: scale3d(.475, .475, .475) translate3d("+(s?(t?"":"-")+"42px":"0")+", "+(m?(a||n?"-":"")+"60px":"0")+", 0);\n        }\n        to {\n          opacity: 0;\n          transform: scale(.1) translate3d("+(s?(o?"":"-")+"2000px":"0")+", "+(m?(r||i?"":"-")+"2000px":"0")+", 0);\n          transform-origin: "+(m?"center bottom":(t?"left":"right")+" center")+";\n        }":b="from {\n          opacity: 0;\n          transform: scale3d(.1, .1, .1) translate3d("+(s?(t?"-":"")+"1000px":"0")+", "+(m?(a||n?"-":"")+"1000px":"0")+", 0);\n          animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n        }\n        60% {\n          opacity: 1;\n          transform: scale3d(.475, .475, .475) translate3d("+(s?(o?"-":"")+"10px":"0")+", "+(m?(r||i?"-":"")+"60px":"0")+", 0);\n          animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n        }":b=(e?"to":"from")+" {opacity: 0; transform: scale3d(.1, .1, .1);} "+(e?"from":"to")+" { opacity: 1; transform: none;}",f[u]=(0,c.animation)(b),f[u]}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.defaults,A=e.children,t=(e.out,e.forever),a=e.timeout,n=e.duration,i=void 0===n?c.defaults.duration:n,l=e.delay,u=void 0===l?c.defaults.delay:l,f=e.count,p=void 0===f?c.defaults.count:f,s=o(e,["children","out","forever","timeout","duration","delay","count"]),m={make:r,duration:void 0===a?i:a,delay:u,forever:t,count:p,style:{animationFillMode:"both"},reverse:s.left};return(0,d.default)(s,m,m,A)}Object.defineProperty(A,"__esModule",{value:!0});var n,i=t(5697),l=t(1719),d=(n=l)&&n.__esModule?n:{default:n},c=t(5321),u={out:i.bool,left:i.bool,right:i.bool,top:i.bool,bottom:i.bool,mirror:i.bool,opposite:i.bool,duration:i.number,timeout:i.number,delay:i.number,count:i.number,forever:i.bool},f={};a.propTypes=u,A.default=a,e.exports=A.default},3303:function(e,A,t){"use strict";t.r(A),t.d(A,{default:function(){return u}});var o=t(3552),r=t(7294),a=(t.p,t(6187)),n=t(994),i=t(7408),l=(t(2815),t(8501)),d=t.n(l),c=t(6802),u=function(e){function A(){return e.apply(this,arguments)||this}return(0,o.Z)(A,e),A.prototype.render=function(){var e,A;return r.createElement(a.Z,{fluid:!0,className:"homeBody"},r.createElement("h1",null,r.createElement(d(),{top:!0,cascade:!0},"Hey There!     ")),r.createElement(n.Z,null,r.createElement(i.Z,((e={xs:12,md:6}).md={order:2},e.className="profile",e),r.createElement(c.S,{src:"../images/profilepic.jpg",alt:"Profile",placeholder:"blurred",className:" profileimg",__imageData:t(625)})),r.createElement(i.Z,((A={xs:12,md:6}).md={order:1},A),r.createElement("div",{className:"profile-info"},"I am ",r.createElement("span",{className:"myname"},"Divyashree")," ,",r.createElement("wbr",null)," a second year",r.createElement("wbr",null)," BTech- CSE student at Manipal Institute of Technology, Manipal. I am an aspiring Developer."))))},A}(r.Component)}}]);
//# sourceMappingURL=component---src-pages-home-js-395e6bc08c96eff095b5.js.map