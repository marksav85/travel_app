var Client;(()=>{"use strict";var e={200:(e,n,r)=>{r.d(n,{Z:()=>g});var t=r(15),a=r.n(t),o=r(645),A=r.n(o),i=r(667),c=r.n(i),d=r(253),l=r(568),s=A()(a()),u=c()(d.Z),f=c()(l.Z);s.push([e.id,"body{background-image:url("+u+');margin:0;padding:0;height:100vh;background-size:cover;background-position:center;color:#fff;font-family:"Roboto",sans-serif}.header{display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:#f7ab4d;height:20vh;color:#fff;padding:1rem;text-align:center;border-radius:5px}.header h1{margin:0}header h6{margin:0}#main-container{display:flex;justify-content:space-around;flex-wrap:wrap;padding:2rem;width:100%;margin:0}.card{width:45%;min-width:300px;margin-bottom:20px;box-shadow:0 0 10px rgba(0,0,0,.1);background:linear-gradient(to bottom right, #fcb0a3, #d86779)}.card-header{display:flex;flex-direction:column;justify-content:center;align-items:center;height:15vh;border-bottom:none;background-color:rgba(0,0,0,0)}.card-body{display:flex;flex-direction:column;align-items:center;min-height:300px;padding:0px;margin:0px}.card-footer{display:flex;justify-content:center;align-items:center;border-top:none;padding:10px;height:15vh;background-color:rgba(0,0,0,0)}.footer-text{font-size:12px;font-weight:bold;color:#fff}@media screen and (max-width: 991px){.footer-text{font-size:10px}}.destination-card-body{margin:auto}.destination-form{max-width:400px;margin:auto}.destination{width:100%;padding:10px;border:1px solid #ced4da;border-radius:4px}.travel-date{display:block;margin-bottom:5px;font-weight:bold}input{margin-bottom:20px}.input[type=date]{width:100%;padding:10px;margin-bottom:20px;border:1px solid #ced4da;border-radius:4px}.alert-danger{color:red;background-color:#ced4da;font-weight:bold}#destination-button{background-color:#007bff;color:#fff;border:none;padding:10px 20px;margin-top:20px;border-radius:4px;cursor:pointer}#destination-button:hover{background-color:#0056b3}#weather-card{background-image:url('+f+");height:100%;margin:0;padding:0;background-size:cover;background-position:center;background-repeat:no-repeat}#weather-card-body{margin:0}#weather-details{display:flex;flex-direction:column;justify-content:space-between;align-items:center;text-align:start;margin:auto}#weather-icon{flex:1;width:50px;height:50px;text-align:center;margin-bottom:10px}.weather-data{display:flex;margin:10px 10px}#weather-footer-text{visibility:hidden}@media screen and (max-width: 731px){.card{width:100%}}","",{version:3,sources:["webpack://./src/client/styles/main.css"],names:[],mappings:"AAAA,KACE,wDAAA,CACA,QAAA,CACA,SAAA,CACA,YAAA,CACA,qBAAA,CACA,0BAAA,CAEA,UAAA,CACA,+BAAA,CAKF,QACE,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,kBAAA,CACA,wBAAA,CACA,WAAA,CACA,UAAA,CACA,YAAA,CACA,iBAAA,CACA,iBAAA,CAGF,WACE,QAAA,CAGF,UACE,QAAA,CAKF,gBACE,YAAA,CACA,4BAAA,CACA,cAAA,CACA,YAAA,CACA,UAAA,CACA,QAAA,CAKF,MACE,SAAA,CACA,eAAA,CAEA,kBAAA,CACA,kCAAA,CACA,6DAAA,CAGF,aACE,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,kBAAA,CACA,WAAA,CACA,kBAAA,CACA,8BAAA,CAGF,WACE,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,gBAAA,CACA,WAAA,CACA,UAAA,CAGF,aACE,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,eAAA,CACA,YAAA,CACA,WAAA,CACA,8BAAA,CAGF,aACE,cAAA,CACA,gBAAA,CACA,UAAA,CAGF,qCACE,aACE,cAAA,CAAA,CAMJ,uBACE,WAAA,CAGF,kBACE,eAAA,CACA,WAAA,CAGF,aACE,UAAA,CACA,YAAA,CACA,wBAAA,CACA,iBAAA,CAGF,aACE,aAAA,CACA,iBAAA,CACA,gBAAA,CAGF,MACE,kBAAA,CAGF,kBACE,UAAA,CACA,YAAA,CACA,kBAAA,CACA,wBAAA,CACA,iBAAA,CAGF,cACE,SAAA,CACA,wBAAA,CACA,gBAAA,CAGF,oBACE,wBAAA,CACA,UAAA,CACA,WAAA,CACA,iBAAA,CACA,eAAA,CACA,iBAAA,CACA,cAAA,CAGF,0BACE,wBAAA,CAKF,cACE,wDAAA,CACA,WAAA,CACA,QAAA,CACA,SAAA,CACA,qBAAA,CACA,0BAAA,CACA,2BAAA,CAGF,mBACE,QAAA,CAGF,iBACE,YAAA,CACA,qBAAA,CACA,6BAAA,CACA,kBAAA,CACA,gBAAA,CACA,WAAA,CAGF,cACE,MAAA,CACA,UAAA,CACA,WAAA,CACA,iBAAA,CACA,kBAAA,CAGF,cACE,YAAA,CACA,gBAAA,CAMF,qBACE,iBAAA,CAKF,qCACE,MACE,UAAA,CAAA",sourcesContent:['body {\r\n  background-image: url("../media/travel_camper.jpg");\r\n  margin: 0;\r\n  padding: 0;\r\n  height: 100vh;\r\n  background-size: cover;\r\n  background-position: center;\r\n  /* background-repeat: no-repeat; */\r\n  color: #ffffff;\r\n  font-family: "Roboto", sans-serif;\r\n}\r\n\r\n/* HEADER STYLES */\r\n\r\n.header {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #f7ab4d;\r\n  height: 20vh;\r\n  color: white;\r\n  padding: 1rem;\r\n  text-align: center;\r\n  border-radius: 5px;\r\n}\r\n\r\n.header h1 {\r\n  margin: 0;\r\n}\r\n\r\nheader h6 {\r\n  margin: 0;\r\n}\r\n\r\n/* CONTAINER STYLES */\r\n\r\n#main-container {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n  padding: 2rem;\r\n  width: 100%;\r\n  margin: 0;\r\n}\r\n\r\n/* CARD STYLES */\r\n\r\n.card {\r\n  width: 45%;\r\n  min-width: 300px;\r\n\r\n  margin-bottom: 20px;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n  background: linear-gradient(to bottom right, #fcb0a3, #d86779);\r\n}\r\n\r\n.card-header {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 15vh;\r\n  border-bottom: none;\r\n  background-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n.card-body {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  min-height: 300px;\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n\r\n.card-footer {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-top: none;\r\n  padding: 10px;\r\n  height: 15vh;\r\n  background-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n.footer-text {\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  color: #fff;\r\n}\r\n\r\n@media screen and (max-width: 991px) {\r\n  .footer-text {\r\n    font-size: 10px;\r\n  }\r\n}\r\n\r\n/* DESTINATION FORM STYLES */\r\n\r\n.destination-card-body {\r\n  margin: auto;\r\n}\r\n\r\n.destination-form {\r\n  max-width: 400px;\r\n  margin: auto;\r\n}\r\n\r\n.destination {\r\n  width: 100%;\r\n  padding: 10px;\r\n  border: 1px solid #ced4da;\r\n  border-radius: 4px;\r\n}\r\n\r\n.travel-date {\r\n  display: block;\r\n  margin-bottom: 5px;\r\n  font-weight: bold;\r\n}\r\n\r\ninput {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.input[type="date"] {\r\n  width: 100%;\r\n  padding: 10px;\r\n  margin-bottom: 20px;\r\n  border: 1px solid #ced4da;\r\n  border-radius: 4px;\r\n}\r\n\r\n.alert-danger {\r\n  color: red;\r\n  background-color: #ced4da;\r\n  font-weight: bold;\r\n}\r\n\r\n#destination-button {\r\n  background-color: #007bff;\r\n  color: #ffffff;\r\n  border: none;\r\n  padding: 10px 20px;\r\n  margin-top: 20px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n#destination-button:hover {\r\n  background-color: #0056b3;\r\n}\r\n\r\n/* WEATHER CARD STYLES */\r\n\r\n#weather-card {\r\n  background-image: url("../media/desert_island.png");\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n#weather-card-body {\r\n  margin: 0;\r\n}\r\n\r\n#weather-details {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  text-align: start;\r\n  margin: auto;\r\n}\r\n\r\n#weather-icon {\r\n  flex: 1;\r\n  width: 50px;\r\n  height: 50px;\r\n  text-align: center;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.weather-data {\r\n  display: flex;\r\n  margin: 10px 10px;\r\n}\r\n\r\n#weather-rainfall {\r\n}\r\n\r\n#weather-footer-text {\r\n  visibility: hidden;\r\n}\r\n\r\n/* MEDIA SCREEN RESPONSIVNESS */\r\n\r\n@media screen and (max-width: 731px) {\r\n  .card {\r\n    width: 100%;\r\n  }\r\n}\r\n'],sourceRoot:""}]);const g=s},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r=e(n);return n[2]?"@media ".concat(n[2]," {").concat(r,"}"):r})).join("")},n.i=function(e,r,t){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(t)for(var o=0;o<this.length;o++){var A=this[o][0];null!=A&&(a[A]=!0)}for(var i=0;i<e.length;i++){var c=[].concat(e[i]);t&&a[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),n.push(c))}},n}},15:e=>{function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}e.exports=function(e){var r,t,a=(t=4,function(e){if(Array.isArray(e))return e}(r=e)||function(e,n){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var t,a,o=[],A=!0,i=!1;try{for(r=r.call(e);!(A=(t=r.next()).done)&&(o.push(t.value),!n||o.length!==n);A=!0);}catch(e){i=!0,a=e}finally{try{A||null==r.return||r.return()}finally{if(i)throw a}}return o}}(r,t)||function(e,r){if(e){if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=a[1],A=a[3];if(!A)return o;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(A)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),d="/*# ".concat(c," */"),l=A.sources.map((function(e){return"/*# sourceURL=".concat(A.sourceRoot||"").concat(e," */")}));return[o].concat(l).concat([d]).join("\n")}return[o].join("\n")}},667:e=>{e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},568:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"media/desert_island.png"},253:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"media/travel_camper.jpg"},620:(e,n,r)=>{r.r(n),r.d(n,{default:()=>t});const t=r.p+"media/cloud.svg"},615:(e,n,r)=>{r.r(n),r.d(n,{default:()=>t});const t=r.p+"media/cloud_snowflake.svg"},476:(e,n,r)=>{r.r(n),r.d(n,{default:()=>t});const t=r.p+"media/cloud_sun.svg"},542:(e,n,r)=>{r.r(n),r.d(n,{default:()=>t});const t=r.p+"media/light_rain.svg"},558:(e,n,r)=>{r.r(n),r.d(n,{default:()=>t});const t=r.p+"media/rain.svg"},242:(e,n,r)=>{r.r(n),r.d(n,{default:()=>t});const t=r.p+"media/snowflake.svg"},453:(e,n,r)=>{r.r(n),r.d(n,{default:()=>t});const t=r.p+"media/sun.svg"},379:(e,n,r)=>{var t,a=function(){var e={};return function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[n]=r}return e[n]}}(),o=[];function A(e){for(var n=-1,r=0;r<o.length;r++)if(o[r].identifier===e){n=r;break}return n}function i(e,n){for(var r={},t=[],a=0;a<e.length;a++){var i=e[a],c=n.base?i[0]+n.base:i[0],d=r[c]||0,l="".concat(c," ").concat(d);r[c]=d+1;var s=A(l),u={css:i[1],media:i[2],sourceMap:i[3]};-1!==s?(o[s].references++,o[s].updater(u)):o.push({identifier:l,updater:p(u,n),references:1}),t.push(l)}return t}function c(e){var n=document.createElement("style"),t=e.attributes||{};if(void 0===t.nonce){var o=r.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(e){n.setAttribute(e,t[e])})),"function"==typeof e.insert)e.insert(n);else{var A=a(e.insert||"head");if(!A)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");A.appendChild(n)}return n}var d,l=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function s(e,n,r,t){var a=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet)e.styleSheet.cssText=l(n,a);else{var o=document.createTextNode(a),A=e.childNodes;A[n]&&e.removeChild(A[n]),A.length?e.insertBefore(o,A[n]):e.appendChild(o)}}function u(e,n,r){var t=r.css,a=r.media,o=r.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var f=null,g=0;function p(e,n){var r,t,a;if(n.singleton){var o=g++;r=f||(f=c(n)),t=s.bind(null,r,o,!1),a=s.bind(null,r,o,!0)}else r=c(n),t=u.bind(null,r,n),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else a()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var r=i(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<r.length;t++){var a=A(r[t]);o[a].references--}for(var c=i(e,n),d=0;d<r.length;d++){var l=A(r[d]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}r=c}}}}},n={};function r(t){var a=n[t];if(void 0!==a)return a.exports;var o=n[t]={id:t,exports:{}};return e[t](o,o.exports,r),o.exports}r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var n=r.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");if(t.length)for(var a=t.length-1;a>-1&&!e;)e=t[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.nc=void 0;var t={};(()=>{r.r(t);var e=r(379),n=r.n(e),a=r(200);n()(a.Z,{insert:"head",singleton:!1}),a.Z.locals,document.getElementById("destination-form").addEventListener("submit",(function(e){e.preventDefault();var n,t=document.getElementById("city").value||"Berlin",a=(n=t).charAt(0).toUpperCase()+n.slice(1).toLowerCase(),o=document.getElementById("travel-date").value;console.log(o),fetch("".concat("https://my-travel-weather-app-997ff38afb18.herokuapp.com","/weather?city=").concat(t,"&date=").concat(o)).then((function(e){return e.json()})).then((function(e){console.log(e),document.getElementById("weather-details");var n=document.getElementById("weather-city"),t=document.getElementById("weather-date"),o=document.getElementById("weather-temperature"),A=document.getElementById("weather-card"),i=document.getElementById("weather-clouds"),c=document.getElementById("weather-rainfall");document.getElementById("weather-footer-text").setAttribute("style","visibility: visible;"),document.getElementById("error-message").classList.add("d-none"),n.innerHTML="<h2>".concat(a,"</h2>");var d,l,s,u,f,g=(d=e.date,l=new Date(d),s=l.getDate(),u=["January","February","March","April","May","June","July","August","September","October","November","December"][l.getMonth()],f=l.getFullYear(),"".concat(s).concat(function(e){if(e>=11&&e<=13)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}(s)," ").concat(u," ").concat(f));console.log(g),t.innerHTML="<h5>".concat(g,"</h5>");var p=(e.temperature.afternoon-273.15).toFixed(0);o.innerHTML="<h5>".concat(p," °C</h5>"),p>=30?A.setAttribute("style","".concat("background: linear-gradient(to bottom right, #FF5733, #FD9728);",";")):p>=20?A.setAttribute("style","".concat("background: linear-gradient(to bottom right, #F0AE05, #FFD700);",";")):p>=10?A.setAttribute("style","".concat("background: linear-gradient(to bottom right, #FFD700, #4CAF50);",";")):p>=0?A.setAttribute("style","".concat("background: linear-gradient(to bottom right, #4CAF50, #3498DB);",";")):A.setAttribute("style","".concat("background: linear-gradient(to bottom right, #3498DB, #4B595E);",";"));var C=e.cloud_cover.afternoon;i.innerHTML=C<20?"<h5>Clear skies</h5>":C<40?"<h5>Partly cloudy</h5>":C<60?"<h5>Mostly cloudy</h5>":C<80?"<h5>Overcast</h5>":"<h5>Cloudy</h5>";var h=e.precipitation.total;c.innerHTML=h<1?"<h5>Dry</h5>":h<2.5?"<h5>Light Rain</h5>":h<25?"<h5>Moderate Rain</h5>":h<50?"<h5>Heavy Rain</h5>":"<h5>Torrential Rain</h5>";var m=document.getElementById("weather-icon");if(C<20&&h<2.5&&p>0){var b=r(453);m.innerHTML='<img src="'.concat(b.default,'" alt="Weather Icon">')}else if(C<60&&h<2.5&&p>0){var y=r(476);m.innerHTML='<img src="'.concat(y.default,'" alt="Weather Icon">')}else if(C<100&&h<2.5&&p>0){var x=r(620);m.innerHTML='<img src="'.concat(x.default,'" alt="Weather Icon">')}else if(h<25&&p>0){var v=r(542);m.innerHTML='<img src="'.concat(v.default,'" alt="Weather Icon">')}else if(h<150&&p>0){var w=r(558);m.innerHTML='<img src="'.concat(w.default,'" alt="Weather Icon">')}else if(h>2.5&&p<0){var B=r(615);m.innerHTML='<img src="'.concat(B.default,'" alt="Weather Icon">')}else{var E=r(242);m.innerHTML='<img src="'.concat(E.default,'" alt="Weather Icon">')}})).catch((function(e){console.error("Error fetching weather data:",e);var n=document.getElementById("error-message");n.textContent="Location must be on planet Earth ;)",n.classList.remove("d-none")}))}))})(),Client=t})();
//# sourceMappingURL=bundle.js.map