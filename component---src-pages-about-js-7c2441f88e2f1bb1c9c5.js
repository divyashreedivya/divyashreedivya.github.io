(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[682],{1046:function(e,t,r){"use strict";r.d(t,{w_:function(){return i}});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&(r[n[a]]=e[n[a]])}return r};function s(e){return e&&e.map((function(e,t){return n.createElement(e.tag,l({key:t},e.attr),s(e.child))}))}function i(e){return function(t){return n.createElement(m,l({attr:l({},e.attr)},t),s(e.child))}}function m(e){var t=function(t){var r,a=e.size||t.size||"1em";t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className);var o=e.attr,s=e.title,i=c(e,["attr","title"]);return n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,i,{className:r,style:l({color:e.color||t.color},t.style,e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==o?n.createElement(o.Consumer,null,(function(e){return t(e)})):t(a)}},14:function(e,t,r){"use strict";function n(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function a(e,t){var r=t.distance,n=t.left,a=t.right,o=t.up,l=t.down,c=t.top,i=t.bottom,m=t.big,u=t.mirror,d=t.opposite,p=(r?r.toString():0)+((n?1:0)|(a?2:0)|(c||l?4:0)|(i||o?8:0)|(u?16:0)|(d?32:0)|(e?64:0)|(m?128:0));if(f.hasOwnProperty(p))return f[p];var E=n||a||o||l||c||i,v=void 0,x=void 0;if(E){if(!u!=!(e&&d)){var y=[a,n,i,c,l,o];n=y[0],a=y[1],c=y[2],i=y[3],o=y[4],l=y[5]}var b=r||(m?"2000px":"100%");v=n?"-"+b:a?b:"0",x=l||c?"-"+b:o||i?b:"0"}return f[p]=(0,s.animation)((e?"to":"from")+" {opacity: 0;"+(E?" transform: translate3d("+v+", "+x+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),f[p]}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=e.children,o=(e.out,e.forever),l=e.timeout,c=e.duration,i=void 0===c?s.defaults.duration:c,u=e.delay,f=void 0===u?s.defaults.delay:u,d=e.count,p=void 0===d?s.defaults.count:d,E=n(e,["children","out","forever","timeout","duration","delay","count"]),v={make:a,duration:void 0===l?i:l,delay:f,forever:o,count:p,style:{animationFillMode:"both"},reverse:E.left};return t?(0,m.default)(E,v,v,r):v}Object.defineProperty(t,"__esModule",{value:!0});var l,c=r(5697),s=r(5321),i=r(1719),m=(l=i)&&l.__esModule?l:{default:l},u={out:c.bool,left:c.bool,right:c.bool,top:c.bool,bottom:c.bool,big:c.bool,mirror:c.bool,opposite:c.bool,duration:c.number,timeout:c.number,distance:c.string,delay:c.number,count:c.number,forever:c.bool},f={};o.propTypes=u,t.default=o,e.exports=t.default},9095:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(7294),a=r(3201),o=r(782),l=r(6187),c=r(994),s=r(7408),i=r(14),m=r.n(i),u=[{role:"Management Committee Member",time:"July 2020-June 2021",org:"IEEE SBM"},{role:"Management Committee Member",time:"July 2020-Present",org:"Music and Fine Arts Club, Manipal"}],f=[{org:"MIT, Manipal",score:"9.5 CGPA",desc:"BTech CSE"},{org:"MGM PU College, Udupi",score:"94%",desc:"PCMB"},{org:"Christ School, Manipal",score:"10 CGPA",desc:""}];function d(){return n.createElement(l.Z,{fluid:!0,className:"aboutBody"},n.createElement("h1",null,"About Me"),n.createElement("h4",null,"Experience"),u.map((function(e,t){return n.createElement(m(),{key:t},n.createElement(c.Z,null,n.createElement(s.Z,{xs:3,sm:1},n.createElement("div",{className:"exp-icon"},n.createElement(a.I8D,{className:"iconfa",size:"40px"}))),n.createElement(s.Z,{xs:9,sm:11,className:"exp"},n.createElement(c.Z,null,n.createElement(s.Z,{xs:11,sm:4,className:"info"},e.role),n.createElement(s.Z,{xs:11,sm:4,className:"info"},e.org),n.createElement(s.Z,{xs:11,sm:4,className:"info"},e.time)))))})),n.createElement("h4",null,"Education"),f.map((function(e,t){return n.createElement(m(),{key:t},n.createElement(c.Z,null,n.createElement(s.Z,{xs:3,sm:1},n.createElement("div",{className:"exp-icon"},n.createElement(a.nGB,{className:"iconfa",size:"40px"}))),n.createElement(s.Z,{xs:9,sm:11,className:"exp"},n.createElement(c.Z,null,n.createElement(s.Z,{xs:11,sm:4,className:"info"},e.org),n.createElement(s.Z,{xs:11,sm:4,className:"info"},e.desc),n.createElement(s.Z,{xs:11,sm:4,className:"info"},e.score)))))})),n.createElement("h4",null,"Extra Curricular Activities"),n.createElement(m(),{left:!0},n.createElement(c.Z,{className:"extra"},n.createElement(s.Z,{xs:3,sm:1},n.createElement("div",{className:"exp-icon"},n.createElement(o.TEy,{className:"iconfa",size:"40px"}))),n.createElement(s.Z,{xs:9,sm:11,className:"exp"},"Carnatic Music Vocalist - Have rendered many concerts")),n.createElement(c.Z,{className:"extra"},n.createElement(s.Z,{xs:3,sm:1},n.createElement("div",{className:"exp-icon"},n.createElement(a.SaA,{className:"iconfa",size:"40px"}))),n.createElement(s.Z,{xs:9,sm:11,className:"exp"},"Drawing, Painting",n.createElement("a",{href:"https://www.instagram.com/divya.art",target:"_blank",rel:"noopener noreferrer"},"  ",n.createElement(a.Zf_,{size:20}))))))}}}]);
//# sourceMappingURL=component---src-pages-about-js-7c2441f88e2f1bb1c9c5.js.map