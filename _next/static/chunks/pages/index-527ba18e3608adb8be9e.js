(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,n){var r=n(3646),o=n(6860),a=n(379),i=n(8206);e.exports=function(e){return r(e)||o(e)||a(e)||i()}},3398:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},6393:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},a=n(3398);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},2775:function(e,t,n){"use strict";var r=n(9713);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=f,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),s=(a=n(3244))&&a.__esModule?a:{default:a},l=n(3398),u=n(1165),c=n(6393);function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var s=o.key.slice(o.key.indexOf("$")+1);e.has(s)?a=!1:e.add(s)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var l=0,u=h.length;l<u;l++){var c=h[l];if(o.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?a=!1:n.add(c);else{var d=o.props[c],f=r[c]||new Set;"name"===c&&i||!f.has(d)?(f.add(d),r[c]=f):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,i.default.cloneElement(e,s)}return i.default.cloneElement(e,{key:a})}))}var x=function(e){var t=e.children,n=(0,i.useContext)(l.AmpStateContext),r=(0,i.useContext)(u.HeadManagerContext);return i.default.createElement(s.default,{reduceComponentsToState:v,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)};t.default=x},3244:function(e,t,n){"use strict";var r=n(319),o=n(4575),a=n(3913),i=(n(1506),n(2205)),s=n(8585),l=n(9754);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var c=n(7294),d=function(e){i(n,e);var t=u(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(c.Component);t.default=d},9666:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(5893),o=n(7294),a=n(9008);function i(){return(0,r.jsx)("header",{className:"bg-gray-800 w-screen",children:(0,r.jsx)("div",{className:"text-center text-white p-4",children:(0,r.jsx)("span",{style:{fontFamily:"'Fira Sans', sans-serif",fontVariant:"slashed-zero"},children:"Numer0n"})})})}function s(){for(var e=[];e.length<3;){for(var t=Math.floor(10*Math.random()),n=!1,r=0;r<e.length;r++)e[r]===t&&(n=!0);n||e.push(t)}return console.log(e),e}function l(){return(0,r.jsx)("p",{className:"text-red-500 text-8xl",children:"Clear!"})}function u(e){for(var t=0,n=0,o=0;o<3;o++)for(var a=0;a<3;a++)e.submit[o]!=e.answer[a]||(o==a?t++:n++);return console.log("eat",t,"bite",n),(0,r.jsxs)("div",{className:"flex rounded gap-4 border-green-500 border-4 p-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"font-bold text-3xl",children:"EAT"}),(0,r.jsx)("div",{className:"font-bold text-2xl",children:t})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"font-bold text-3xl",children:"BITE"}),(0,r.jsx)("div",{className:"font-bold text-2xl",children:n})]})]})}function c(e){return(0,r.jsx)("div",{children:(0,r.jsxs)("form",{className:"align-center",onSubmit:function(t){t.preventDefault();var n=t.target.elements;n.first.value===n.second.value||n.first.value===n.third.value||n.second.value===n.third?window.alert("Don't use same number"):e.submit([n.first.value,n.second.value,n.third.value])},children:[(0,r.jsxs)("div",{className:"ring rounded md:text-5xl text-3xl",children:[(0,r.jsxs)("select",{name:"first",defaultValue:"0",children:[(0,r.jsx)("option",{value:"0",children:"0"}),(0,r.jsx)("option",{value:"1",children:"1"}),(0,r.jsx)("option",{value:"2",children:"2"}),(0,r.jsx)("option",{value:"3",children:"3"}),(0,r.jsx)("option",{value:"4",children:"4"}),(0,r.jsx)("option",{value:"5",children:"5"}),(0,r.jsx)("option",{value:"6",children:"6"}),(0,r.jsx)("option",{value:"7",children:"7"}),(0,r.jsx)("option",{value:"8",children:"8"}),(0,r.jsx)("option",{value:"9",children:"9"})]}),(0,r.jsxs)("select",{name:"second",defaultValue:"0",children:[(0,r.jsx)("option",{value:"0",children:"0"}),(0,r.jsx)("option",{value:"1",children:"1"}),(0,r.jsx)("option",{value:"2",children:"2"}),(0,r.jsx)("option",{value:"3",children:"3"}),(0,r.jsx)("option",{value:"4",children:"4"}),(0,r.jsx)("option",{value:"5",children:"5"}),(0,r.jsx)("option",{value:"6",children:"6"}),(0,r.jsx)("option",{value:"7",children:"7"}),(0,r.jsx)("option",{value:"8",children:"8"}),(0,r.jsx)("option",{value:"9",children:"9"})]}),(0,r.jsxs)("select",{name:"third",defaultValue:"0",children:[(0,r.jsx)("option",{value:"0",children:"0"}),(0,r.jsx)("option",{value:"1",children:"1"}),(0,r.jsx)("option",{value:"2",children:"2"}),(0,r.jsx)("option",{value:"3",children:"3"}),(0,r.jsx)("option",{value:"4",children:"4"}),(0,r.jsx)("option",{value:"5",children:"5"}),(0,r.jsx)("option",{value:"6",children:"6"}),(0,r.jsx)("option",{value:"7",children:"7"}),(0,r.jsx)("option",{value:"8",children:"8"}),(0,r.jsx)("option",{value:"9",children:"9"})]})]}),(0,r.jsx)("div",{className:"p-3",children:(0,r.jsx)("button",{type:"submit",className:"bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",children:"Check"})})]})})}function d(){var e=(0,o.useState)(void 0),t=e[0],n=e[1],d=(0,o.useState)(s)[0];return(0,r.jsxs)("div",{className:"h-screen flex flex-col",children:[(0,r.jsx)(a.default,{children:(0,r.jsx)("title",{children:"Numeron"})}),(0,r.jsx)(i,{}),(0,r.jsxs)("main",{className:"flex flex-col items-center w-full flex-1 px-20 text-center",children:[(0,r.jsx)("div",{className:"pt-3",children:"Input Your Answer"}),(0,r.jsx)("div",{className:"pt-1",children:(0,r.jsx)(c,{submit:n,submitNumber:t})}),(0,r.jsx)("div",{children:t&&(0,r.jsx)(u,{submit:t,answer:d})}),(null===t||void 0===t?void 0:t.every((function(e,t){return parseInt(e,10)===d[t]})))&&(0,r.jsx)("div",{children:(0,r.jsx)(l,{})})]}),(0,r.jsx)("footer",{className:"w-full flex justify-center items-center h-12 border-t",children:(0,r.jsx)("p",{className:"flex item-center",children:"CopyRight \xa9 2021, husky All Right Reserved."})})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9666)}])},9008:function(e,t,n){e.exports=n(2775)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);