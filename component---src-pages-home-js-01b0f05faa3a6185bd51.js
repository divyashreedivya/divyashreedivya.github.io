(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[79],{625:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAXABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAQFAQID/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAEDAv/aAAwDAQACEAMQAAABl8MRJ0umxOgjG53ID//EABwQAAICAgMAAAAAAAAAAAAAAAECAwQRIQATMv/aAAgBAQABBQKTSJ6AI5alGBNh0YOsoYzg7qluv//EABYRAQEBAAAAAAAAAAAAAAAAABEAEP/aAAgBAwEBPwF1v//EABYRAQEBAAAAAAAAAAAAAAAAABEAEP/aAAgBAgEBPwE0v//EABwQAAIDAAMBAAAAAAAAAAAAAAABAhEhAzFBUf/aAAgBAQAGPwKUvRLd+mMfHWkH4hSRPOijFas//8QAGxABAAMBAAMAAAAAAAAAAAAAAQARMSFRYZH/2gAIAQEAAT8huz0E8tOH3gFIEMdKNvJQouvyYEMryym+xEU3kEyoYM//2gAMAwEAAgADAAAAEMQg/wD/xAAYEQEBAAMAAAAAAAAAAAAAAAABABEhQf/aAAgBAwEBPxBBanjZl//EABgRAQEAAwAAAAAAAAAAAAAAAAABESFR/9oACAECAQE/EJTbsYV//8QAHRABAQACAgMBAAAAAAAAAAAAAREAITFRQYGhYf/aAAgBAQABPxDkACXe+D64o5srDwonXDrPKhIOA+HRB5e8hStLBVhPXeXZnS8n5m31AjR4+YjoWV1cocAEOs//2Q=="},"images":{"fallback":{"src":"/static/5eb5ecf4877c4c4867595376ab411259/a9c12/profilepic.jpg","srcSet":"/static/5eb5ecf4877c4c4867595376ab411259/cbd81/profilepic.jpg 72w,\\n/static/5eb5ecf4877c4c4867595376ab411259/32af9/profilepic.jpg 144w,\\n/static/5eb5ecf4877c4c4867595376ab411259/a9c12/profilepic.jpg 287w","sizes":"(min-width: 287px) 287px, 100vw"},"sources":[{"srcSet":"/static/5eb5ecf4877c4c4867595376ab411259/a9c18/profilepic.webp 72w,\\n/static/5eb5ecf4877c4c4867595376ab411259/d429a/profilepic.webp 144w,\\n/static/5eb5ecf4877c4c4867595376ab411259/edaf8/profilepic.webp 287w","type":"image/webp","sizes":"(min-width: 287px) 287px, 100vw"}]},"width":287,"height":331}')},2815:function(e,A,t){"use strict";function o(e,A){var t={};for(var o in e)A.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}function r(e,A){var t=A.left,o=A.right,r=A.up,a=A.down,n=A.top,i=A.bottom,l=A.big,c=A.mirror,s=A.opposite,p=(t?1:0)|(o?2:0)|(n||a?4:0)|(i||r?8:0)|(c?16:0)|(s?32:0)|(e?64:0)|(l?128:0);if(f.hasOwnProperty(p))return f[p];var d=t||o||r||a||n||i,m=void 0,b=void 0;if(d){if(!c!=!(e&&s)){var E=[o,t,i,n,a,r];t=E[0],o=E[1],n=E[2],i=E[3],r=E[4],a=E[5]}var v=l?"2000px":"100%";m=t?"-"+v:o?v:"0",b=a||n?"-"+v:r||i?v:"0"}return f[p]=(0,u.animation)((e?"to":"from")+" {"+(d?" transform: translate3d("+m+", "+b+", 0);":"")+"}\n     "+(e?"from":"to")+" {transform: none;} "),f[p]}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.defaults,A=e.children,t=(e.out,e.forever),a=e.timeout,n=e.duration,i=void 0===n?u.defaults.duration:n,l=e.delay,s=void 0===l?u.defaults.delay:l,f=e.count,p=void 0===f?u.defaults.count:f,d=o(e,["children","out","forever","timeout","duration","delay","count"]),m={make:r,duration:void 0===a?i:a,delay:s,forever:t,count:p,style:{animationFillMode:"both"},reverse:d.left};return(0,c.default)(d,m,m,A)}Object.defineProperty(A,"__esModule",{value:!0});var n,i=t(5697),l=t(1719),c=(n=l)&&n.__esModule?n:{default:n},u=t(5321),s={out:i.bool,left:i.bool,right:i.bool,top:i.bool,bottom:i.bool,big:i.bool,mirror:i.bool,opposite:i.bool,duration:i.number,timeout:i.number,delay:i.number,count:i.number,forever:i.bool},f={};a.propTypes=s,A.default=a,e.exports=A.default},8501:function(e,A,t){"use strict";function o(e,A){var t={};for(var o in e)A.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}function r(e,A){var t=A.left,o=A.right,r=A.up,a=A.down,n=A.top,i=A.bottom,l=A.mirror,c=A.opposite,s=(t?1:0)|(o?2:0)|(n||a?4:0)|(i||r?8:0)|(l?16:0)|(c?32:0)|(e?64:0);if(f.hasOwnProperty(s))return f[s];if(!l!=!(e&&c)){var p=[o,t,i,n,a,r];t=p[0],o=p[1],n=p[2],i=p[3],r=p[4],a=p[5]}var d=t||o,m=n||i||r||a,b=void 0;return d||m?e?b="40% {\n          opacity: 1;\n          transform: scale3d(.475, .475, .475) translate3d("+(d?(t?"":"-")+"42px":"0")+", "+(m?(a||n?"-":"")+"60px":"0")+", 0);\n        }\n        to {\n          opacity: 0;\n          transform: scale(.1) translate3d("+(d?(o?"":"-")+"2000px":"0")+", "+(m?(r||i?"":"-")+"2000px":"0")+", 0);\n          transform-origin: "+(m?"center bottom":(t?"left":"right")+" center")+";\n        }":b="from {\n          opacity: 0;\n          transform: scale3d(.1, .1, .1) translate3d("+(d?(t?"-":"")+"1000px":"0")+", "+(m?(a||n?"-":"")+"1000px":"0")+", 0);\n          animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n        }\n        60% {\n          opacity: 1;\n          transform: scale3d(.475, .475, .475) translate3d("+(d?(o?"-":"")+"10px":"0")+", "+(m?(r||i?"-":"")+"60px":"0")+", 0);\n          animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n        }":b=(e?"to":"from")+" {opacity: 0; transform: scale3d(.1, .1, .1);} "+(e?"from":"to")+" { opacity: 1; transform: none;}",f[s]=(0,u.animation)(b),f[s]}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.defaults,A=e.children,t=(e.out,e.forever),a=e.timeout,n=e.duration,i=void 0===n?u.defaults.duration:n,l=e.delay,s=void 0===l?u.defaults.delay:l,f=e.count,p=void 0===f?u.defaults.count:f,d=o(e,["children","out","forever","timeout","duration","delay","count"]),m={make:r,duration:void 0===a?i:a,delay:s,forever:t,count:p,style:{animationFillMode:"both"},reverse:d.left};return(0,c.default)(d,m,m,A)}Object.defineProperty(A,"__esModule",{value:!0});var n,i=t(5697),l=t(1719),c=(n=l)&&n.__esModule?n:{default:n},u=t(5321),s={out:i.bool,left:i.bool,right:i.bool,top:i.bool,bottom:i.bool,mirror:i.bool,opposite:i.bool,duration:i.number,timeout:i.number,delay:i.number,count:i.number,forever:i.bool},f={};a.propTypes=s,A.default=a,e.exports=A.default},3303:function(e,A,t){"use strict";t.r(A),t.d(A,{default:function(){return s}});var o=t(3552),r=t(7294),a=(t.p,t(6187)),n=t(994),i=t(7408),l=(t(2815),t(8501)),c=t.n(l),u=t(6802),s=function(e){function A(){return e.apply(this,arguments)||this}return(0,o.Z)(A,e),A.prototype.render=function(){var e,A;return r.createElement(a.Z,{fluid:!0,className:"homeBody"},r.createElement("h1",null,r.createElement(c(),{top:!0,cascade:!0},"Hey There!     ")),r.createElement(n.Z,null,r.createElement(i.Z,((e={xs:12,md:6}).md={order:2},e.className="profile",e),r.createElement(u.S,{src:"../images/profilepic.jpg",alt:"Profile",placeholder:"blurred",className:" profileimg",__imageData:t(625)})),r.createElement(i.Z,((A={xs:12,md:6}).md={order:1},A),r.createElement("div",{className:"profile-info"},"I am ",r.createElement("span",{className:"myname"},"Divyashree")," ,",r.createElement("wbr",null)," a second year",r.createElement("wbr",null)," BTech- CSE student at Manipal Institute of Technology, Manipal. I am an aspiring Developer."))))},A}(r.Component)}}]);
//# sourceMappingURL=component---src-pages-home-js-01b0f05faa3a6185bd51.js.map