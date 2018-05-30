!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types"),require("react-dom/server"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","prop-types","react-dom/server","react-dom"],t):"object"==typeof exports?exports.ReactLazy=t(require("react"),require("prop-types"),require("react-dom/server"),require("react-dom")):e.ReactLazy=t(e.React,e.PropTypes,e.ReactDOMServer,e.ReactDOM)}(window,function(e,t,r,n){return function(e){var t={}
function r(n){if(t[n])return t[n].exports
var o=t[n]={i:n,l:!1,exports:{}}
return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e}
return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/build/",r(r.s=9)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t,r){"use strict"
var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
Object.defineProperty(t,"__esModule",{value:!0})
var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}()
t.callback=s
var i=c(r(0)),a=(c(r(1)),r(11)),l=c(r(12)),u=r(8)
function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t){for(var r=0;r<e.length;r++){var n=l.default.findElement(e[r],t)
n&&n.handleChange(e[r])}}var f=["root","rootMargin","threshold"],p={root:"viewport",rootMargin:"cushion"},d=["viewport","cushion","disabled"].concat(f),h=Object.prototype,y=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)
var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==(void 0===t?"undefined":n(t))&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
return r.handleChange=r.handleChange.bind(r),r.handleNode=r.handleNode.bind(r),r.observe=r.observe.bind(r),r.unobserve=r.unobserve.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":n(t)))
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),o(t,[{key:"handleChange",value:function(e){this.props.onChange(e,this.unobserve)}},{key:"handleNode",value:function(e){"function"==typeof this.props.children.ref&&this.props.children.ref(e),this.renderedTarget&&e&&this.renderedTarget!==e?(this.unobserve(),this.targetChanged=!0):this.targetChanged=!1,this.target=e}},{key:"observe",value:function(){this.target=(0,u.isDOMTypeElement)(this.target)?this.target:(0,a.findDOMNode)(this.target),this.observer=l.default.create(s,this.options),l.default.observe(this)}},{key:"unobserve",value:function(){null!=this.target&&l.default.unobserve(this)}},{key:"componentDidMount",value:function(){this.props.disabled||this.observe()}},{key:"componentDidUpdate",value:function(e){var t=this;(this.targetChanged||d.some(function(r){return(0,u.shallowCompareOptions)(t.props[r],e[r])}))&&(this.unobserve(),this.props.disabled||this.observe())}},{key:"componentWillUnmount",value:function(){this.unobserve()}},{key:"render",value:function(){return this.renderedTarget=this.target,i.default.cloneElement(i.default.Children.only(this.props.children),{ref:this.handleNode})}},{key:"options",get:function(){var e=this.props
return f.reduce(function(t,r){var n=p[r]||r,o=h.hasOwnProperty.call(e,n)&&n||n!==r&&h.hasOwnProperty.call(e,r)&&r||""
if(o){var i="root"===r&&"[object String]"===h.toString.call(e[o])
t[r]=i?document.querySelector(e[o]):e[o]}return t},{})}}]),t}()
t.default=y},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=i(r(0))
i(r(1))
function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.childProps,r=e.children,i=e.isFailed,a=e.isLoaded,l=function(e,t){var r={}
for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])
return r}(e,["childProps","children","isFailed","isLoaded"]),u="react-lazy-wrapper"+(a||i?"":" react-lazy-wrapper--"+(t?"loading":"placeholder"))+(i?" react-lazy-wrapper--failed":"")+(a?" react-lazy-wrapper--loaded":"")+(l.className?" "+l.className:"")
return o.default.createElement("div",n({},l,{className:u}),r)}},function(e,t,r){"use strict"
var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
Object.defineProperty(t,"__esModule",{value:!0})
var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=l(r(0))
l(r(1))
function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var r={}
for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])
return r}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)
var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==(void 0===t?"undefined":n(t))&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),o=e.children&&(e.children.props||e.children._store&&e.children._store.props)||{},i=o.onError,a=o.onLoad,l=u(o,["onError","onLoad"])
return r.childOnError=i,r.childOnLoad=a,r.childProps=l,r.state={isFailed:!1,isLoaded:!1},r.onError=r.onError.bind(r),r.onLoad=r.onLoad.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":n(t)))
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.PureComponent),i(t,[{key:"componentDidUpdate",value:function(e){if(e.children!==this.props.children){var t=this.props.children&&(this.props.children.props||this.props.children._store&&this.props.children._store.props)||{},r=t.onError,n=t.onLoad,o=u(t,["onError","onLoad"])
this.childOnError=r,this.childOnLoad=n,this.childProps=o}}},{key:"onError",value:function(e){this.setState({isFailed:!0},this.props.callback),this.childOnError&&this.childOnError(e)}},{key:"onLoad",value:function(e){this.setState({isLoaded:!0},this.props.callback),this.childOnLoad&&this.childOnLoad(e)}},{key:"render",value:function(){var e=this.props,t=(e.callback,e.children),r=e.wrapper,n=u(e,["callback","children","wrapper"]),i=a.default.Children.only(t)
return a.default.createElement(r,o({},n,this.state,{childProps:this.childProps}),this.state.isFailed||this.state.isLoaded?i:a.default.cloneElement(i,{onError:this.onError,onLoad:this.onLoad}))}}]),t}()
t.default=c},function(e,t,r){"use strict"
var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
Object.defineProperty(t,"__esModule",{value:!0})
var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=c(r(0)),a=(c(r(1)),r(6)),l=c(r(3)),u=c(r(2))
function c(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)
var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==(void 0===t?"undefined":n(t))&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
return r.loadedImgTags=0,r.state={imgTagCount:null,loadedAt:null,viewportAt:null},r.onImgLoaded=r.onImgLoaded.bind(r),r.onViewport=r.onViewport.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":n(t)))
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.PureComponent),o(t,[{key:"onImgLoaded",value:function(){this.loadedImgTags++,this.loadedImgTags===this.state.imgTagCount&&(this.loadedImgTags=0,this.setState({imgTagCount:null,loadedAt:Date.now()},this.props.onLoad))}},{key:"onViewport",value:function(e,t){var r=this.props,n=r.children,o=r.childrenToWrap,i=r.onLoad,l=r.onViewport
if(!r.visible)return!1
if(e.isIntersecting&&!e.defaultPrevented){t()
var u=(0,a.countTypesTags)(o,n)||null
this.loadedImgTags=0,l&&l(e)
var c=Date.now()
this.setState({imgTagCount:u,loadedAt:u?null:c,viewportAt:c},u?null:i)}}},{key:"render",value:function(){var e=this.props,t=e.children,r=e.childrenToWrap,n=e.childWrapper,o=e.clientOnly,l=e.component,c=e.cushion,s=e.ltIE9,f=(e.onLoad,e.onViewport,e.threshold),p=e.viewport,d=e.visible,h=function(e,t){var r={}
for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])
return r}(e,["children","childrenToWrap","childWrapper","clientOnly","component","cushion","ltIE9","onLoad","onViewport","threshold","viewport","visible"])
return i.default.createElement(u.default,{cushion:c,onChange:this.onViewport,threshold:f,viewport:p},i.default.createElement(l,h,o||d&&this.state.viewportAt?(0,a.wrapTypesToLazyChild)(r,t,n,this.onImgLoaded):(0,a.wrapTypesToNoScript)(r,t,s,n)))}}]),t}()
t.default=s,s.defaultProps={childrenToWrap:["iframe","img"],childWrapper:l.default,clientOnly:!1,component:"div",ltIE9:!1,visible:!0}},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.countTypesTags=function e(t,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0
if(!r)return o
n.default.Children.forEach(r,function(r){if(r&&r.type!==i.default&&r.type!==l.default&&r.type!==a.default)if(t.includes(r.type))o++
else{var n=r.props||r._store&&r._store.props||{}
o+=e(t,n.children)}})
return o},t.propsWithNoScriptRender=c,t.wrapTypesToLazyChild=function e(t,r,o,u){if(!r)return r
return n.default.Children.map(r,function(r){if(r&&r.type!==i.default&&r.type!==l.default&&r.type!==a.default){if(t.includes(r.type))return n.default.createElement(a.default,{callback:u,wrapper:o},r)
var c=r.props||r._store&&r._store.props||{},s=e(t,c.children,o,u)
return s!==c.children?n.default.cloneElement(r,null,s):r}return r})},t.wrapTypesToNoScript=function e(t,r,o,u){if(!r)return r
return n.default.Children.map(r,function(r){if(r&&r.type!==i.default&&r.type!==l.default&&r.type!==a.default){if(t.includes(r.type))return n.default.createElement(u,c(r,o))
var s=r.props||r._store&&r._store.props||{},f=e(t,s.children,o,u)
return f!==s.children?n.default.cloneElement(r,null,f):r}return r})}
var n=u(r(0)),o=r(10),i=u(r(7)),a=u(r(4)),l=u(r(5))
function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=(0,o.renderToStaticMarkup)(n.default.createElement("noscript",null,e)),a=t?i.replace("<noscript>","\x3c!--[if IE 9]>\x3c!--\x3e<noscript>\x3c!--<![endif]--\x3e").replace("</noscript>","\x3c!--[if IE 9]>\x3c!--\x3e</noscript>\x3c!--<![endif]--\x3e"):i
return r.dangerouslySetInnerHTML={__html:a},r}},function(e,t,r){"use strict"
var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
Object.defineProperty(t,"__esModule",{value:!0})
var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=u(r(0)),a=(u(r(1)),u(r(2))),l=r(6)
function u(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)
var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==(void 0===t?"undefined":n(t))&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
return r.state={show:!1},r.onViewport=r.onViewport.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":n(t)))
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.PureComponent),o(t,[{key:"onViewport",value:function(e,t){var r=this.props,n=r.onLoad,o=r.onViewport
r.visible&&e.isIntersecting&&!e.defaultPrevented&&(t(),o&&o(e),this.setState({show:!0},n))}},{key:"render",value:function(){var e=this.props,t=e.children,r=e.clientOnly,n=e.component,o=e.cushion,u=e.ltIE9,c=e.visible,s=(e.onLoad,e.onViewport,e.threshold),f=e.viewport,p=function(e,t){var r={}
for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])
return r}(e,["children","clientOnly","component","cushion","ltIE9","visible","onLoad","onViewport","threshold","viewport"])
return r||c&&this.state.show?i.default.createElement(a.default,{cushion:o,onChange:this.onViewport,threshold:s,viewport:f},i.default.createElement(n,p,c&&this.state.show?t:null)):i.default.createElement(a.default,{cushion:o,onChange:this.onViewport},i.default.createElement(n,(0,l.propsWithNoScriptRender)(t,u,p)))}}]),t}()
t.default=c,c.defaultProps={clientOnly:!1,component:"div",ltIE9:!1,visible:!0}},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n=function(){return function(e,t){if(Array.isArray(e))return e
if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,o=!1,i=void 0
try{for(var a,l=e[Symbol.iterator]();!(n=(a=l.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&l.return&&l.return()}finally{if(o)throw i}}return r}(e,t)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()
t.isDOMTypeElement=function(e){return a.default.isValidElement(e)&&"string"==typeof e.type},t.parseRootMargin=function(e){var t=(e?e.trim():"0px").split(/\s+/).map(function(e){if(!l.test(e))throw new Error("rootMargin must be a string literal containing pixels and/or percent values")
return e}),r=n(t,4),o=r[0],i=void 0===o?"0px":o,a=r[1],u=void 0===a?i:a,c=r[2],s=void 0===c?i:c,f=r[3],p=void 0===f?u:f
return i+" "+u+" "+s+" "+p},t.shallowCompareOptions=function e(t,r){if(Array.isArray(t)&&Array.isArray(r)&&t.length===r.length)return t.some(function(n,o){return e(t[o],r[o])})
return t!==r}
var o,i=r(0),a=(o=i)&&o.__esModule?o:{default:o}
var l=/^-?\d*\.?\d+(px|%)$/},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.Observer=t.Lazy=t.LazyGroup=t.LazyChild=t.DefaultWrapper=void 0
var n=u(r(3)),o=u(r(4)),i=u(r(5)),a=u(r(7)),l=u(r(2))
function u(e){return e&&e.__esModule?e:{default:e}}t.DefaultWrapper=n.default,t.LazyChild=o.default,t.LazyGroup=i.default,t.Lazy=a.default,t.Observer=l.default},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.storage=void 0
var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}()
t.getPooled=a
var o=r(8)
function i(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t]
return r}return Array.from(e)}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.root||null,r=(0,o.parseRootMargin)(e.rootMargin),n=Array.isArray(e.threshold)?e.threshold:[null!=e.threshold?e.threshold:0],a=!0,u=!1,c=void 0
try{for(var s,f=l.keys()[Symbol.iterator]();!(a=(s=f.next()).done);a=!0){var p=s.value
if(![[t,p.root],[r,p.rootMargin],[n,p.thresholds]].some(function(e){return o.shallowCompareOptions.apply(void 0,i(e))}))return p}}catch(e){u=!0,c=e}finally{try{!a&&f.return&&f.return()}finally{if(u)throw c}}return null}var l=t.storage=new Map,u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,null,[{key:"create",value:function(e,t){return a(t)||new IntersectionObserver(e,t)}},{key:"findElement",value:function(e,t){var r=l.get(t)
if(r){var n=!0,o=!1,i=void 0
try{for(var a,u=r.values()[Symbol.iterator]();!(n=(a=u.next()).done);n=!0){var c=a.value
if(c.target===e.target)return c}}catch(e){o=!0,i=e}finally{try{!n&&u.return&&u.return()}finally{if(o)throw i}}}return null}},{key:"observe",value:function(e){var t=void 0
l.has(e.observer)?t=l.get(e.observer):(t=new Set,l.set(e.observer,t)),t.add(e),e.observer.observe(e.target)}},{key:"unobserve",value:function(e){if(l.has(e.observer)){var t=l.get(e.observer)
t.delete(e)&&(t.size>0?e.observer.unobserve(e.target):(e.observer.disconnect(),l.delete(e.observer)))}}},{key:"clear",value:function(){l.clear()}},{key:"count",value:function(){return l.size}}]),e}()
t.default=u}])})

//# sourceMappingURL=react-lazy.js.map