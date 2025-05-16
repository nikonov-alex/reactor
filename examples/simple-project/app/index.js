/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./node_modules/@nikonov-alex/reactor/index.js
var e,t={d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},n={};t.d(n,{ZU:()=>w,L8:()=>y,wk:()=>N,R9:()=>S});var o="undefined"==typeof document?void 0:document,i=!!o&&"content"in o.createElement("template"),r=!!o&&o.createRange&&"createContextualFragment"in o.createRange();function s(e,t){var n,o,i=e.nodeName,r=t.nodeName;return i===r||(n=i.charCodeAt(0),o=r.charCodeAt(0),n<=90&&o>=97?i===r.toUpperCase():o<=90&&n>=97&&r===i.toUpperCase())}function a(e,t,n){e[n]!==t[n]&&(e[n]=t[n],e[n]?e.setAttribute(n,""):e.removeAttribute(n))}var d={OPTION:function(e,t){var n=e.parentNode;if(n){var o=n.nodeName.toUpperCase();"OPTGROUP"===o&&(o=(n=n.parentNode)&&n.nodeName.toUpperCase()),"SELECT"!==o||n.hasAttribute("multiple")||(e.hasAttribute("selected")&&!t.selected&&(e.setAttribute("selected","selected"),e.removeAttribute("selected")),n.selectedIndex=-1)}a(e,t,"selected")},INPUT:function(e,t){a(e,t,"checked"),a(e,t,"disabled"),e.value!==t.value&&(e.value=t.value),t.hasAttribute("value")||e.removeAttribute("value")},TEXTAREA:function(e,t){var n=t.value;e.value!==n&&(e.value=n);var o=e.firstChild;if(o){var i=o.nodeValue;if(i==n||!n&&i==e.placeholder)return;o.nodeValue=n}},SELECT:function(e,t){if(!t.hasAttribute("multiple")){for(var n,o,i=-1,r=0,s=e.firstChild;s;)if("OPTGROUP"===(o=s.nodeName&&s.nodeName.toUpperCase()))s=(n=s).firstChild;else{if("OPTION"===o){if(s.hasAttribute("selected")){i=r;break}r++}!(s=s.nextSibling)&&n&&(s=n.nextSibling,n=null)}e.selectedIndex=i}}};function l(){}function c(e){if(e)return e.getAttribute&&e.getAttribute("id")||e.id}const h=function(t,n,a){if(a||(a={}),"string"==typeof n)if("#document"===t.nodeName||"HTML"===t.nodeName||"BODY"===t.nodeName){var h=n;(n=o.createElement("html")).innerHTML=h}else u=(u=n).trim(),n=i?function(e){var t=o.createElement("template");return t.innerHTML=e,t.content.childNodes[0]}(u):r?function(t){return e||(e=o.createRange()).selectNode(o.body),e.createContextualFragment(t).childNodes[0]}(u):function(e){var t=o.createElement("body");return t.innerHTML=e,t.childNodes[0]}(u);else 11===n.nodeType&&(n=n.firstElementChild);var u,v=a.getNodeKey||c,_=a.onBeforeNodeAdded||l,f=a.onNodeAdded||l,p=a.onBeforeElUpdated||l,m=a.onElUpdated||l,g=a.onBeforeNodeDiscarded||l,b=a.onNodeDiscarded||l,E=a.onBeforeElChildrenUpdated||l,w=a.skipFromChildren||l,y=a.addChild||function(e,t){return e.appendChild(t)},N=!0===a.childrenOnly,S=Object.create(null),A=[];function C(e){A.push(e)}function U(e,t){if(1===e.nodeType)for(var n=e.firstChild;n;){var o=void 0;t&&(o=v(n))?C(o):(b(n),n.firstChild&&U(n,t)),n=n.nextSibling}}function T(e,t,n){!1!==g(e)&&(t&&t.removeChild(e),b(e),U(e,n))}function R(e){if(1===e.nodeType||11===e.nodeType)for(var t=e.firstChild;t;){var n=v(t);n&&(S[n]=t),R(t),t=t.nextSibling}}function H(e){f(e);for(var t=e.firstChild;t;){var n=t.nextSibling,o=v(t);if(o){var i=S[o];i&&s(t,i)?(t.parentNode.replaceChild(i,t),O(i,t)):H(t)}else H(t);t=n}}function O(e,t,n){var i=v(t);if(i&&delete S[i],!n){var r=p(e,t);if(!1===r)return;if(r instanceof HTMLElement&&R(e=r),function(e,t){var n,o,i,r,s=t.attributes;if(11!==t.nodeType&&11!==e.nodeType){for(var a=s.length-1;a>=0;a--)o=(n=s[a]).name,i=n.namespaceURI,r=n.value,i?(o=n.localName||o,e.getAttributeNS(i,o)!==r&&("xmlns"===n.prefix&&(o=n.name),e.setAttributeNS(i,o,r))):e.getAttribute(o)!==r&&e.setAttribute(o,r);for(var d=e.attributes,l=d.length-1;l>=0;l--)o=(n=d[l]).name,(i=n.namespaceURI)?(o=n.localName||o,t.hasAttributeNS(i,o)||e.removeAttributeNS(i,o)):t.hasAttribute(o)||e.removeAttribute(o)}}(e,t),m(e),!1===E(e,t))return}"TEXTAREA"!==e.nodeName?function(e,t){var n,i,r,a,l,c=w(e,t),h=t.firstChild,u=e.firstChild;e:for(;h;){for(a=h.nextSibling,n=v(h);!c&&u;){if(r=u.nextSibling,h.isSameNode&&h.isSameNode(u)){h=a,u=r;continue e}i=v(u);var f=u.nodeType,p=void 0;if(f===h.nodeType&&(1===f?(n?n!==i&&((l=S[n])?r===l?p=!1:(e.insertBefore(l,u),i?C(i):T(u,e,!0),i=v(u=l)):p=!1):i&&(p=!1),(p=!1!==p&&s(u,h))&&O(u,h)):3!==f&&8!=f||(p=!0,u.nodeValue!==h.nodeValue&&(u.nodeValue=h.nodeValue))),p){h=a,u=r;continue e}i?C(i):T(u,e,!0),u=r}if(n&&(l=S[n])&&s(l,h))c||y(e,l),O(l,h);else{var m=_(h);!1!==m&&(m&&(h=m),h.actualize&&(h=h.actualize(e.ownerDocument||o)),y(e,h),H(h))}h=a,u=r}!function(e,t,n){for(;t;){var o=t.nextSibling;(n=v(t))?C(n):T(t,e,!0),t=o}}(e,u,i);var g=d[e.nodeName];g&&g(e,t)}(e,t):d.TEXTAREA(e,t)}R(t);var k,L,x=t,z=x.nodeType,M=n.nodeType;if(!N)if(1===z)1===M?s(t,n)||(b(t),x=function(e,t){for(var n=e.firstChild;n;){var o=n.nextSibling;t.appendChild(n),n=o}return t}(t,(k=n.nodeName,(L=n.namespaceURI)&&"http://www.w3.org/1999/xhtml"!==L?o.createElementNS(L,k):o.createElement(k)))):x=n;else if(3===z||8===z){if(M===z)return x.nodeValue!==n.nodeValue&&(x.nodeValue=n.nodeValue),x;x=n}if(x===n)b(t);else{if(n.isSameNode&&n.isSameNode(x))return;if(O(x,n,N),A)for(var V=0,I=A.length;V<I;V++){var D=S[A[V]];D&&T(D,D.parentNode,!1)}}return!N&&x!==t&&t.parentNode&&(x.actualize&&(x=x.actualize(t.ownerDocument||o)),t.parentNode.replaceChild(x,t)),x},u={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let v;const _=new Uint8Array(16);function f(){if(!v){if("undefined"==typeof crypto||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");v=crypto.getRandomValues.bind(crypto)}return v(_)}const p=[];for(let e=0;e<256;++e)p.push((e+256).toString(16).slice(1));const m=function(e,t,n){if(u.randomUUID&&!t&&!e)return u.randomUUID();const o=(e=e||{}).random||(e.rng||f)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=o[e];return t}return function(e,t=0){return(p[e[t+0]]+p[e[t+1]]+p[e[t+2]]+p[e[t+3]]+"-"+p[e[t+4]]+p[e[t+5]]+"-"+p[e[t+6]]+p[e[t+7]]+"-"+p[e[t+8]]+p[e[t+9]]+"-"+p[e[t+10]]+p[e[t+11]]+p[e[t+12]]+p[e[t+13]]+p[e[t+14]]+p[e[t+15]]).toLowerCase()}(o)};class g extends HTMLElement{}customElements.define("reactor-viewport",g);class b{_id;_state;_render;_viewport;_container;_root;_emit=new Map;_http=new Map;_globalEvents=new Map;_localEvents=new Map;_documentEvents=new Map;_debug;_resizeObserver;_resizeUserHandler;_dommode;_validation;_deferredRedraw=!1;constructor(e){this._id=m(),this._state=e.initialState,this._render=e.render,this._viewport=document.createElement("reactor-viewport"),this._viewport.classList.add("viewport"),this._viewport.dataset.id=this._id,e.id&&(this._viewport.id=e.id),this._dommode=e.dommode||"shadow";const t="shadow"===this._dommode?this._viewport.attachShadow({mode:"closed",clonable:!0,delegatesFocus:!0}):this._viewport;if(this._container=e.container?e.container:document.createElement("div"),t.appendChild(this._container),this._root=this._render(this._state),this._container.appendChild(this._root),e.styles&&(t instanceof ShadowRoot?t.adoptedStyleSheets.push(e.styles):document.adoptedStyleSheets.push(e.styles)),this._debug=!!e.debug,this._globalEventHandler=this._globalEventHandler.bind(this),this._documentEventHandler=this._documentEventHandler.bind(this),this._localEventHandler=this._localEventHandler.bind(this),this._resizeHandler=this._resizeHandler.bind(this),e.events)for(const t in e.events)Object.hasOwn(e.events,t)&&("function"==typeof e.events[t]?this._localEvents.set(t,{handler:e.events[t]}):Object.hasOwn(e.events[t],"target")&&"local"!==e.events[t].target?"window"===e.events[t].target?this._globalEvents.set(t,{handler:e.events[t].handler,options:e.events[t].options}):this._documentEvents.set(t,{handler:e.events[t].handler,options:e.events[t].options}):this._localEvents.set(t,{handler:e.events[t].handler,options:e.events[t].options}));if(e.emit)for(const t of e.emit)this._emit.set(t.when,new Set(Array.isArray(t.emit)?t.emit:[t.emit]));if(e.http)for(const t of e.http)this._http.set(t.when,new Set(Array.isArray(t.send)?t.send:[t.send]));for(const e of this._localEvents.keys())this._container.addEventListener(e,this._localEventHandler,this._localEvents.get(e).options||!0);for(const e of this._globalEvents.keys())window.addEventListener(e,this._globalEventHandler,this._globalEvents.get(e).options||!0);for(const e of this._documentEvents.keys())this._container.ownerDocument.addEventListener(e,this._documentEventHandler,this._documentEvents.get(e).options||!0);e.onResize&&(this._resizeUserHandler=e.onResize,this._resizeObserver=new ResizeObserver(this._resizeHandler),this._resizeObserver.observe(this._viewport)),this._sendRequests(null),this._validation=e.validation,this._maybeValidate()}destructor(){for(const e of this._localEvents.keys())this._container.removeEventListener(e,this._localEventHandler,this._localEvents.get(e).options||!0);for(const e of this._globalEvents.keys())window.removeEventListener(e,this._globalEventHandler,this._globalEvents.get(e).options||!0);for(const e of this._documentEvents.keys())this._container.ownerDocument.removeEventListener(e,this._documentEventHandler,this._documentEvents.get(e).options||!0);this._resizeObserver&&this._resizeObserver.unobserve(this._viewport)}_maybeValidate(){if(this._validation){const[e,t]=this._validation.validate(this._state);this._validityDiffers(e)&&this._validation.internals.setValidity(e,t),this._validation.internals.setFormValue(this._validation.formValue(this._state))}}_validityDiffers(e){const t=this._validation.internals.validity;return t.valueMissing!==(e.valueMissing??!1)||t.stepMismatch!==(e.stepMismatch??!1)||t.badInput!==(e.badInput??!1)||t.customError!==(e.customError??!1)||t.patternMismatch!==(e.patternMismatch??!1)||t.rangeOverflow!==(e.rangeOverflow??!1)||t.rangeUnderflow!==(e.rangeUnderflow??!1)||t.tooLong!==(e.tooLong??!1)||t.tooShort!==(e.tooShort??!1)||t.typeMismatch!==(e.typeMismatch??!1)}_resizeHandler(e){this._changeState(this._resizeUserHandler(this._state,e))}_localEventHandler(e){this._debug&&console.log("nikonov-components: local event catch",e),["submit"].includes(e.type)&&e.preventDefault(),e.stopImmediatePropagation();const t=this._localEvents.get(e.type).handler;this._changeState(t(this._state,e))}_globalEventHandler(e){this._debug&&console.log("nikonov-components: global event catch",e);const t=this._globalEvents.get(e.type).handler;this._changeState(t(this._state,e))}_documentEventHandler(e){this._debug&&console.log("nikonov-components: document event catch",e);const t=this._documentEvents.get(e.type).handler;this._changeState(t(this._state,e))}_redraw(){const e=this._render(this._state);this._debug&&console.log("nikonov-components: redraw",this._root.cloneNode(!0),e.cloneNode(!0)),this._root.isEqualNode(e)||(this._root.nodeName!==e.nodeName?(this._root.replaceWith(e),this._root=e):h(this._root,e,{getNodeKey:e=>e instanceof g?e.dataset.id:e.id,onBeforeNodeAdded:e=>(this._debug&&console.log("nikonov-components: element added",e.cloneNode(!0)),e instanceof g&&e.classList.contains("stub")?e.reference.deref():e),onBeforeElUpdated:(e,t)=>(this._debug&&console.log("nikonov-components: element update",e.cloneNode(!0),t.cloneNode(!0)),!e.isEqualNode(t)&&(t instanceof g?t.dataset.id!==e.dataset.id&&(t.classList.contains("viewport")?t:(e.replaceWith(t.reference.deref()),!1)):e))}))}_emitEvents(e){for(let[t,n]of this._emit)if(t(e,this._state))for(let t of n)this._viewport.dispatchEvent(t(this._state,e))}async _sendRequest(e){const t=("function"==typeof e?e:e.request)(this._state),n="retry"in e&&e.retry?e.retry:1;let o=null;for(let i=0;i<n;i++)try{o=await fetch(t);break}catch(t){if(i<n-1)continue;return void("error"in e&&e.error&&this._changeState(e.error(this._state,t)))}if("response"in e&&e.response||"error"in e&&e.error){let t="";try{if(!o.ok)throw new Error(o.statusText);t=await o.text()}catch(t){return void("error"in e&&e.error&&this._changeState(e.error(this._state,t)))}"response"in e&&e.response&&this._changeState(e.response(this._state,o,t))}}_sendRequests(e){for(let[t,n]of this._http)t(e,this._state)&&n.forEach((e=>{this._sendRequest(e)}))}_changeState(e){if(this._state===e)return;const t=this._state;this._state=e,this._deferredRedraw||(setTimeout((()=>{this._redraw(),this._deferredRedraw=!1}),0),this._deferredRedraw=!0),this._emitEvents(t),this._sendRequests(t),this._maybeValidate(),this._debug&&console.log("nikonov-components: transition from",t,"to",this._state)}}const E=new FinalizationRegistry((e=>{e._debug&&console.log("nikonov-components gc:",e._id,JSON.parse(JSON.stringify(e._state))),e.destructor()}));class w{_core;constructor(e){this._core=new b(e),E.register(this,this._core)}}const y=e=>new w(e),N=e=>e._core._state,S=e=>{if(!e._core._viewport.isConnected)return e._core._viewport;const t=document.createElement("reactor-viewport");return t.classList.add("stub"),t.dataset.id=e._core._id,t.reference=new WeakRef(e._core._viewport),t};var A=n.ZU,C=n.L8,U=n.wk,T=n.R9;
;// ./node_modules/jsx-dom/index.js
/* eslint-disable */
const keys = Object.keys;
function identity(value) {
  return value;
}
function isBoolean(val) {
  return typeof val === "boolean";
}
function isElement(val) {
  return val && typeof val.nodeType === "number";
}
function isString(val) {
  return typeof val === "string";
}
function isNumber(val) {
  return typeof val === "number";
}
function isObject(val) {
  return typeof val === "object" ? val !== null : isFunction(val);
}
function isFunction(val) {
  return typeof val === "function";
}
function isComponentClass(Component) {
  return !!(Component && Component.isComponent);
}
function isArrayLike(obj) {
  return (
    isObject(obj) &&
    typeof obj.length === "number" &&
    typeof obj.nodeType !== "number"
  );
}
function forEach(value, fn) {
  if (!value) return;
  for (const key of keys(value)) {
    fn(value[key], key);
  }
}

function createRef() {
  return Object.seal({
    current: null,
  });
}
function isRef(maybeRef) {
  return isObject(maybeRef) && "current" in maybeRef;
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found on
 * https://github.com/facebook/react/blob/b87aabdfe1b7461e7331abb3601d9e6bb27544bc/LICENSE
 */

/**
 * CSS properties which accept numbers but are not in units of "px".
 */
const isUnitlessNumber = {
  animationIterationCount: 0,
  borderImageOutset: 0,
  borderImageSlice: 0,
  borderImageWidth: 0,
  boxFlex: 0,
  boxFlexGroup: 0,
  boxOrdinalGroup: 0,
  columnCount: 0,
  columns: 0,
  flex: 0,
  flexGrow: 0,
  flexPositive: 0,
  flexShrink: 0,
  flexNegative: 0,
  flexOrder: 0,
  gridArea: 0,
  gridRow: 0,
  gridRowEnd: 0,
  gridRowSpan: 0,
  gridRowStart: 0,
  gridColumn: 0,
  gridColumnEnd: 0,
  gridColumnSpan: 0,
  gridColumnStart: 0,
  fontWeight: 0,
  lineClamp: 0,
  lineHeight: 0,
  opacity: 0,
  order: 0,
  orphans: 0,
  tabSize: 0,
  widows: 0,
  zIndex: 0,
  zoom: 0,
  // SVG-related properties
  fillOpacity: 0,
  floodOpacity: 0,
  stopOpacity: 0,
  strokeDasharray: 0,
  strokeDashoffset: 0,
  strokeMiterlimit: 0,
  strokeOpacity: 0,
  strokeWidth: 0,
};

/**
 * @param prefix vendor-specific prefix, eg: Webkit
 * @param key style name, eg: transitionDuration
 * @return style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */
function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}

/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */
const prefixes = ["Webkit", "ms", "Moz", "O"];
// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
keys(isUnitlessNumber).forEach((prop) => {
  prefixes.forEach((prefix) => {
    isUnitlessNumber[prefixKey(prefix, prop)] = 0; // isUnitlessNumber[prop]
  });
});

const jsxDomType = Symbol.for("jsx-dom:type");
var JsxDomType = /*#__PURE__*/ (function (JsxDomType) {
  JsxDomType["ShadowRoot"] = "ShadowRoot";
  return JsxDomType;
})(JsxDomType || {});
function jsx_dom_ShadowRoot(_ref) {
  let { children, ref, ...attr } = _ref;
  return {
    [jsxDomType]: JsxDomType.ShadowRoot,
    ref,
    attr,
    children,
  };
}
function isShadowRoot(el) {
  return el != null && el[jsxDomType] === JsxDomType.ShadowRoot;
}

const SVGNamespace = "http://www.w3.org/2000/svg";
const XLinkNamespace = "http://www.w3.org/1999/xlink";
const XMLNamespace = "http://www.w3.org/XML/1998/namespace";

// https://facebook.github.io/react/docs/jsx-in-depth.html#booleans-null-and-undefined-are-ignored
// Emulate JSX Expression logic to ignore certain type of children or className.
function isVisibleChild(value) {
  return !isBoolean(value) && value != null;
}

/**
 * Convert a `value` to a className string.
 * `value` can be a string, an array or a `Dictionary<boolean>`.
 */
function className(value) {
  if (Array.isArray(value)) {
    return value.map(className).filter(Boolean).join(" ");
  } else if (isObject(value)) {
    if (Symbol.iterator in value) {
      return className(Array.from(value));
    }
    return keys(value)
      .filter((k) => value[k])
      .join(" ");
  } else if (isVisibleChild(value)) {
    return "" + value;
  } else {
    return "";
  }
}
const svg = {
  animate: 0,
  circle: 0,
  clipPath: 0,
  defs: 0,
  desc: 0,
  ellipse: 0,
  feBlend: 0,
  feColorMatrix: 0,
  feComponentTransfer: 0,
  feComposite: 0,
  feConvolveMatrix: 0,
  feDiffuseLighting: 0,
  feDisplacementMap: 0,
  feDistantLight: 0,
  feFlood: 0,
  feFuncA: 0,
  feFuncB: 0,
  feFuncG: 0,
  feFuncR: 0,
  feGaussianBlur: 0,
  feImage: 0,
  feMerge: 0,
  feMergeNode: 0,
  feMorphology: 0,
  feOffset: 0,
  fePointLight: 0,
  feSpecularLighting: 0,
  feSpotLight: 0,
  feTile: 0,
  feTurbulence: 0,
  filter: 0,
  foreignObject: 0,
  g: 0,
  image: 0,
  line: 0,
  linearGradient: 0,
  marker: 0,
  mask: 0,
  metadata: 0,
  path: 0,
  pattern: 0,
  polygon: 0,
  polyline: 0,
  radialGradient: 0,
  rect: 0,
  stop: 0,
  svg: 0,
  switch: 0,
  symbol: 0,
  text: 0,
  textPath: 0,
  tspan: 0,
  use: 0,
  view: 0,
};
const nonPresentationSVGAttributes =
  /^(a(ll|t|u)|base[FP]|c(al|lipPathU|on)|di|ed|ex|filter[RU]|g(lyphR|r)|ke|l(en|im)|ma(rker[HUW]|s)|n|pat|pr|point[^e]|re[^n]|s[puy]|st[^or]|ta|textL|vi|xC|y|z)/;
function createFactory(tag) {
  return createElement.bind(null, tag);
}
function Fragment(attr) {
  const fragment = document.createDocumentFragment();
  appendChild(attr.children, fragment);
  return fragment;
}
class Component {
  static isComponent = true;
  constructor(props) {
    this.props = props;
  }
  render() {
    return null;
  }
}
function initComponentClass(Class, attr, children) {
  attr = {
    ...attr,
    children,
  };
  const instance = new Class(attr);
  const node = instance.render();
  if ("ref" in attr) {
    attachRef(attr.ref, instance);
  }
  return node;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function jsx(tag, _ref) {
  let { children, ...attr } = _ref;
  if (!attr.namespaceURI && svg[tag] === 0) {
    attr = {
      ...attr,
      namespaceURI: SVGNamespace,
    };
  }
  let node;
  if (isString(tag)) {
    node = attr.namespaceURI
      ? document.createElementNS(attr.namespaceURI, tag)
      : document.createElement(tag);
    attributes(attr, node);
    appendChild(children, node);

    // Select `option` elements in `select`
    if (node instanceof window.HTMLSelectElement && attr.value != null) {
      if (attr.multiple === true && Array.isArray(attr.value)) {
        const values = attr.value.map((value) => String(value));
        node
          .querySelectorAll("option")
          .forEach(
            (option) => (option.selected = values.includes(option.value)),
          );
      } else {
        node.value = attr.value;
      }
    }
    attachRef(attr.ref, node);
  } else if (isFunction(tag)) {
    // Custom elements.
    if (isObject(tag.defaultProps)) {
      attr = {
        ...tag.defaultProps,
        ...attr,
      };
    }
    node = isComponentClass(tag)
      ? initComponentClass(tag, attr, children)
      : tag({
          ...attr,
          children,
        });
  } else {
    throw new TypeError(`Invalid JSX element type: ${tag}`);
  }
  return node;
}
function createElement(tag, attr) {
  for (
    var _len = arguments.length,
      children = new Array(_len > 2 ? _len - 2 : 0),
      _key2 = 2;
    _key2 < _len;
    _key2++
  ) {
    children[_key2 - 2] = arguments[_key2];
  }
  if (isString(attr) || Array.isArray(attr)) {
    children.unshift(attr);
    attr = {};
  }
  attr = attr || {};
  if (attr.children != null && !children.length) {
    ({ children, ...attr } = attr);
  }
  return jsx(
    tag,
    {
      ...attr,
      children,
    },
    attr.key,
  );
}
function attachRef(ref, node) {
  if (isRef(ref)) {
    ref.current = node;
  } else if (isFunction(ref)) {
    ref(node);
  }
}
function appendChild(child, node) {
  if (isArrayLike(child)) {
    appendChildren(child, node);
  } else if (isString(child) || isNumber(child)) {
    appendChildToNode(document.createTextNode(child), node);
  } else if (child === null) {
    appendChildToNode(document.createComment(""), node);
  } else if (isElement(child)) {
    appendChildToNode(child, node);
  } else if (isShadowRoot(child)) {
    const shadowRoot = node.attachShadow(child.attr);
    appendChild(child.children, shadowRoot);
    attachRef(child.ref, shadowRoot);
  }
}
function appendChildren(children, node) {
  for (const child of [...children]) {
    appendChild(child, node);
  }
  return node;
}
function appendChildToNode(child, node) {
  if (node instanceof window.HTMLTemplateElement) {
    node.content.appendChild(child);
  } else {
    node.appendChild(child);
  }
}
function normalizeAttribute(s, separator) {
  return s.replace(/[A-Z]/g, (match) => separator + match.toLowerCase());
}
function style(node, value) {
  if (value == null || value === false);
  else if (Array.isArray(value)) {
    value.forEach((v) => style(node, v));
  } else if (isString(value)) {
    node.setAttribute("style", value);
  } else if (isObject(value)) {
    forEach(value, (val, key) => {
      if (key.indexOf("-") === 0) {
        // CSS custom properties (variables) start with `-` (e.g. `--my-variable`)
        // and must be assigned via `setProperty`.
        node.style.setProperty(key, val);
      } else if (isNumber(val) && isUnitlessNumber[key] !== 0) {
        node.style[key] = val + "px";
      } else {
        node.style[key] = val;
      }
    });
  }
}
function attribute(key, value, node) {
  switch (key) {
    case "xlinkActuate":
    case "xlinkArcrole":
    case "xlinkHref":
    case "xlinkRole":
    case "xlinkShow":
    case "xlinkTitle":
    case "xlinkType":
      attrNS(node, XLinkNamespace, normalizeAttribute(key, ":"), value);
      return;
    case "xmlnsXlink":
      attr(node, normalizeAttribute(key, ":"), value);
      return;
    case "xmlBase":
    case "xmlLang":
    case "xmlSpace":
      attrNS(node, XMLNamespace, normalizeAttribute(key, ":"), value);
      return;
  }
  switch (key) {
    case "htmlFor":
      attr(node, "for", value);
      return;
    case "dataset":
      forEach(value, (dataValue, dataKey) => {
        if (dataValue != null) {
          node.dataset[dataKey] = dataValue;
        }
      });
      return;
    case "innerHTML":
    case "innerText":
    case "textContent":
      if (isVisibleChild(value)) {
        node[key] = value;
      }
      return;
    case "dangerouslySetInnerHTML":
      if (isObject(value)) {
        node.innerHTML = value["__html"];
      }
      return;
    case "value":
      if (value == null || node instanceof window.HTMLSelectElement) {
        // skip nullish values
        // for `<select>` apply value after appending `<option>` elements
        return;
      } else if (node instanceof window.HTMLTextAreaElement) {
        node.value = value;
        return;
      }
      // use attribute for other elements
      break;
    case "spellCheck":
      node.spellcheck = value;
      return;
    case "class":
    case "className":
      if (isFunction(value)) {
        value(node);
      } else {
        attr(node, "class", className(value));
      }
      return;
    case "ref":
    case "namespaceURI":
      return;
    case "style":
      style(node, value);
      return;
    case "on":
    case "onCapture":
      forEach(value, (eventHandler, eventName) => {
        node.addEventListener(eventName, eventHandler, key === "onCapture");
      });
      return;
    // fallthrough
  }
  if (isFunction(value)) {
    if (key[0] === "o" && key[1] === "n") {
      let attribute = key.toLowerCase();
      const useCapture = attribute.endsWith("capture");
      if (attribute === "ondoubleclick") {
        attribute = "ondblclick";
      } else if (useCapture && attribute === "ondoubleclickcapture") {
        attribute = "ondblclickcapture";
      }
      if (!useCapture && node[attribute] === null) {
        // use property when possible PR #17
        node[attribute] = value;
      } else if (useCapture) {
        node.addEventListener(
          attribute.substring(2, attribute.length - 7),
          value,
          true,
        );
      } else {
        let eventName;
        if (attribute in window) {
          // standard event
          // the JSX attribute could have been "onMouseOver" and the
          // member name "onmouseover" is on the window's prototype
          // so let's add the listener "mouseover", which is all lowercased
          const standardEventName = attribute.substring(2);
          eventName = standardEventName;
        } else {
          // custom event
          // the JSX attribute could have been "onMyCustomEvent"
          // so let's trim off the "on" prefix and lowercase the first character
          // and add the listener "myCustomEvent"
          // except for the first character, we keep the event name case
          const customEventName = attribute[2] + key.slice(3);
          eventName = customEventName;
        }
        node.addEventListener(eventName, value);
      }
    }
  } else if (isObject(value)) {
    node[key] = value;
  } else if (value === true) {
    attr(node, key, "");
  } else if (value !== false && value != null) {
    if (node instanceof SVGElement && !nonPresentationSVGAttributes.test(key)) {
      attr(node, normalizeAttribute(key, "-"), value);
    } else {
      attr(node, key, value);
    }
  }
}
function attr(node, key, value) {
  node.setAttribute(key, value);
}
function attrNS(node, namespace, key, value) {
  node.setAttributeNS(namespace, key, value);
}
function attributes(attr, node) {
  for (const key of keys(attr)) {
    attribute(key, attr[key], node);
  }
  return node;
}

function useText(initialValue) {
  const text = new Text();
  Object.defineProperty(text, "toString", {
    value() {
      return this.textContent;
    },
  });
  function setText(value) {
    text.textContent = value;
  }
  if (initialValue != null) {
    setText(initialValue);
  }
  return [text, setText];
}
function useClassList(initialValue) {
  const div = document.createElement("div");
  if (initialValue != null) {
    div.className = className(initialValue);
  }
  let list = div.classList;
  function ClassList(value) {
    value.setAttribute("class", list.value);
    list = value.classList;
  }
  Object.defineProperties(
    ClassList,
    Object.getOwnPropertyDescriptors({
      get size() {
        return list.length;
      },
      get value() {
        return list.value;
      },
      add() {
        list.add(...arguments);
      },
      remove() {
        list.remove(...arguments);
      },
      toggle(token, force) {
        list.toggle(token, force);
      },
      contains(token) {
        return list.contains(token);
      },
    }),
  );
  return ClassList;
}

function useMemo(factory) {
  return factory();
}
function forwardRef(render) {
  return (_ref) => {
    let { ref, ...props } = _ref;
    return render(props, ref ?? createRef());
  };
}
function useImperativeHandle(ref, init) {
  attachRef(ref, init());
}

const cache = /* @__PURE__ */ new Map();
const createStyledComponent = (name) =>
  function (list) {
    for (
      var _len = arguments.length,
        interpolations = new Array(_len > 1 ? _len - 1 : 0),
        _key = 1;
      _key < _len;
      _key++
    ) {
      interpolations[_key - 1] = arguments[_key];
    }
    return (_ref) => {
      let { style, ...props } = _ref;
      const lastIndex = list.length - 1;
      const css =
        list.slice(0, lastIndex).reduce((p, s, i) => {
          const interpolation = interpolations[i];
          const current =
            typeof interpolation === "function"
              ? interpolation(props)
              : interpolation;
          return p + s + current;
        }, "") + list[lastIndex];
      return createElement(name, {
        style: [css, style],
        ...props,
      });
    };
  };
const baseStyled = (customComponent) => createStyledComponent(customComponent);
const styled = /* @__PURE__ */ new Proxy(baseStyled, {
  get(_, name) {
    return setIfAbsent(cache, name, () => createStyledComponent(name));
  },
});
function setIfAbsent(map, key, getValue) {
  if (map.has(key)) {
    return map.get(key);
  } else {
    const value = getValue(key);
    map.set(key, value);
    return value;
  }
}

var index = {
  Component,
  PureComponent: Component,
  createElement,
  Fragment,
  ShadowRoot: jsx_dom_ShadowRoot,
};
function preventDefault(event) {
  event.preventDefault();
  return event;
}
function stopPropagation(event) {
  event.stopPropagation();
  return event;
}



;// ./node_modules/jsx-dom/jsx-runtime.js
/* eslint-disable */


;// ./sources/counter/styles.sass
const styles_namespaceObject = ".increment-button{background:red}";
;// ./sources/counter/index.tsx



const stylesheet = new CSSStyleSheet();
stylesheet.replace(styles_namespaceObject);
const render = (state) => jsx("div", { children: [jsx("div", { children: ["Counter: ", state] }), jsx("button", { id: "increment", className: "increment-button", children: "Increment" })] });
const increment = (state, event) => "increment" === event.target.id
    ? state + 1
    : state;
const make = () => C({
    initialState: 1,
    render,
    events: {
        click: increment
    },
    styles: stylesheet
});


;// ./sources/index.js




window.counter = make();
document.body.appendChild( T( window.counter ) );
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxJQUFJO0FBQ0oscURBQXFELElBQUk7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLG9CQUFvQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxnQkFBZ0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxrQkFBa0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQTZCRTs7O0FDdnJCRjtBQUNvRTs7Ozs7O0FDRG5CO0FBQ2Y7QUFHbEMsTUFBTSxVQUFVLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztBQUN2QyxVQUFVLENBQUMsT0FBTyxDQUFFLHNCQUFNLENBQUUsQ0FBQztBQVU3QixNQUFNLE1BQU0sR0FBRyxDQUFFLEtBQVksRUFBZ0IsRUFBRSxDQUMzQyx3QkFDSSxxQ0FBZ0IsS0FBSyxJQUFRLEVBQzdCLGdCQUFRLEVBQUUsRUFBQyxXQUFXLEVBQ2QsU0FBUyxFQUFDLGtCQUFrQiwwQkFBbUIsSUFDdEMsQ0FBQztBQUsxQixNQUFNLFNBQVMsR0FBRyxDQUFFLEtBQVksRUFBRSxLQUFZLEVBQVUsRUFBRSxDQUN0RCxXQUFXLEtBQU0sS0FBSyxDQUFDLE1BQXNCLENBQUMsRUFBRTtJQUM1QyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUM7SUFDWCxDQUFDLENBQUMsS0FBSyxDQUFDO0FBS2hCLE1BQU0sSUFBSSxHQUFHLEdBQXdCLEVBQUUsQ0FDbkMsQ0FBWSxDQUFFO0lBQ1YsWUFBWSxFQUFFLENBQUM7SUFDZixNQUFNO0lBQ04sTUFBTSxFQUFFO1FBQ0osS0FBSyxFQUFFLFNBQVM7S0FDbkI7SUFDRCxNQUFNLEVBQUUsVUFBVTtDQUNyQixDQUFFLENBQUM7QUFHUTs7O0FDNUNpQztBQUNaOzs7QUFHckMsaUJBQWlCLElBQVk7QUFDN0IsMkJBQTJCLENBQWdCLHFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMTIzLy4vbm9kZV9tb2R1bGVzL0BuaWtvbm92LWFsZXgvcmVhY3Rvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8xMjMvLi9ub2RlX21vZHVsZXMvanN4LWRvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8xMjMvLi9ub2RlX21vZHVsZXMvanN4LWRvbS9qc3gtcnVudGltZS5qcyIsIndlYnBhY2s6Ly8xMjMvLi9zb3VyY2VzL2NvdW50ZXIvaW5kZXgudHN4Iiwid2VicGFjazovLzEyMy8uL3NvdXJjZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGUsdD17ZDooZSxuKT0+e2Zvcih2YXIgbyBpbiBuKXQubyhuLG8pJiYhdC5vKGUsbykmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG8se2VudW1lcmFibGU6ITAsZ2V0Om5bb119KX0sbzooZSx0KT0+T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LG49e307dC5kKG4se1pVOigpPT53LEw4OigpPT55LHdrOigpPT5OLFI5OigpPT5TfSk7dmFyIG89XCJ1bmRlZmluZWRcIj09dHlwZW9mIGRvY3VtZW50P3ZvaWQgMDpkb2N1bWVudCxpPSEhbyYmXCJjb250ZW50XCJpbiBvLmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKSxyPSEhbyYmby5jcmVhdGVSYW5nZSYmXCJjcmVhdGVDb250ZXh0dWFsRnJhZ21lbnRcImluIG8uY3JlYXRlUmFuZ2UoKTtmdW5jdGlvbiBzKGUsdCl7dmFyIG4sbyxpPWUubm9kZU5hbWUscj10Lm5vZGVOYW1lO3JldHVybiBpPT09cnx8KG49aS5jaGFyQ29kZUF0KDApLG89ci5jaGFyQ29kZUF0KDApLG48PTkwJiZvPj05Nz9pPT09ci50b1VwcGVyQ2FzZSgpOm88PTkwJiZuPj05NyYmcj09PWkudG9VcHBlckNhc2UoKSl9ZnVuY3Rpb24gYShlLHQsbil7ZVtuXSE9PXRbbl0mJihlW25dPXRbbl0sZVtuXT9lLnNldEF0dHJpYnV0ZShuLFwiXCIpOmUucmVtb3ZlQXR0cmlidXRlKG4pKX12YXIgZD17T1BUSU9OOmZ1bmN0aW9uKGUsdCl7dmFyIG49ZS5wYXJlbnROb2RlO2lmKG4pe3ZhciBvPW4ubm9kZU5hbWUudG9VcHBlckNhc2UoKTtcIk9QVEdST1VQXCI9PT1vJiYobz0obj1uLnBhcmVudE5vZGUpJiZuLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkpLFwiU0VMRUNUXCIhPT1vfHxuLmhhc0F0dHJpYnV0ZShcIm11bHRpcGxlXCIpfHwoZS5oYXNBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiKSYmIXQuc2VsZWN0ZWQmJihlLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsXCJzZWxlY3RlZFwiKSxlLnJlbW92ZUF0dHJpYnV0ZShcInNlbGVjdGVkXCIpKSxuLnNlbGVjdGVkSW5kZXg9LTEpfWEoZSx0LFwic2VsZWN0ZWRcIil9LElOUFVUOmZ1bmN0aW9uKGUsdCl7YShlLHQsXCJjaGVja2VkXCIpLGEoZSx0LFwiZGlzYWJsZWRcIiksZS52YWx1ZSE9PXQudmFsdWUmJihlLnZhbHVlPXQudmFsdWUpLHQuaGFzQXR0cmlidXRlKFwidmFsdWVcIil8fGUucmVtb3ZlQXR0cmlidXRlKFwidmFsdWVcIil9LFRFWFRBUkVBOmZ1bmN0aW9uKGUsdCl7dmFyIG49dC52YWx1ZTtlLnZhbHVlIT09biYmKGUudmFsdWU9bik7dmFyIG89ZS5maXJzdENoaWxkO2lmKG8pe3ZhciBpPW8ubm9kZVZhbHVlO2lmKGk9PW58fCFuJiZpPT1lLnBsYWNlaG9sZGVyKXJldHVybjtvLm5vZGVWYWx1ZT1ufX0sU0VMRUNUOmZ1bmN0aW9uKGUsdCl7aWYoIXQuaGFzQXR0cmlidXRlKFwibXVsdGlwbGVcIikpe2Zvcih2YXIgbixvLGk9LTEscj0wLHM9ZS5maXJzdENoaWxkO3M7KWlmKFwiT1BUR1JPVVBcIj09PShvPXMubm9kZU5hbWUmJnMubm9kZU5hbWUudG9VcHBlckNhc2UoKSkpcz0obj1zKS5maXJzdENoaWxkO2Vsc2V7aWYoXCJPUFRJT05cIj09PW8pe2lmKHMuaGFzQXR0cmlidXRlKFwic2VsZWN0ZWRcIikpe2k9cjticmVha31yKyt9IShzPXMubmV4dFNpYmxpbmcpJiZuJiYocz1uLm5leHRTaWJsaW5nLG49bnVsbCl9ZS5zZWxlY3RlZEluZGV4PWl9fX07ZnVuY3Rpb24gbCgpe31mdW5jdGlvbiBjKGUpe2lmKGUpcmV0dXJuIGUuZ2V0QXR0cmlidXRlJiZlLmdldEF0dHJpYnV0ZShcImlkXCIpfHxlLmlkfWNvbnN0IGg9ZnVuY3Rpb24odCxuLGEpe2lmKGF8fChhPXt9KSxcInN0cmluZ1wiPT10eXBlb2YgbilpZihcIiNkb2N1bWVudFwiPT09dC5ub2RlTmFtZXx8XCJIVE1MXCI9PT10Lm5vZGVOYW1lfHxcIkJPRFlcIj09PXQubm9kZU5hbWUpe3ZhciBoPW47KG49by5jcmVhdGVFbGVtZW50KFwiaHRtbFwiKSkuaW5uZXJIVE1MPWh9ZWxzZSB1PSh1PW4pLnRyaW0oKSxuPWk/ZnVuY3Rpb24oZSl7dmFyIHQ9by5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7cmV0dXJuIHQuaW5uZXJIVE1MPWUsdC5jb250ZW50LmNoaWxkTm9kZXNbMF19KHUpOnI/ZnVuY3Rpb24odCl7cmV0dXJuIGV8fChlPW8uY3JlYXRlUmFuZ2UoKSkuc2VsZWN0Tm9kZShvLmJvZHkpLGUuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KHQpLmNoaWxkTm9kZXNbMF19KHUpOmZ1bmN0aW9uKGUpe3ZhciB0PW8uY3JlYXRlRWxlbWVudChcImJvZHlcIik7cmV0dXJuIHQuaW5uZXJIVE1MPWUsdC5jaGlsZE5vZGVzWzBdfSh1KTtlbHNlIDExPT09bi5ub2RlVHlwZSYmKG49bi5maXJzdEVsZW1lbnRDaGlsZCk7dmFyIHUsdj1hLmdldE5vZGVLZXl8fGMsXz1hLm9uQmVmb3JlTm9kZUFkZGVkfHxsLGY9YS5vbk5vZGVBZGRlZHx8bCxwPWEub25CZWZvcmVFbFVwZGF0ZWR8fGwsbT1hLm9uRWxVcGRhdGVkfHxsLGc9YS5vbkJlZm9yZU5vZGVEaXNjYXJkZWR8fGwsYj1hLm9uTm9kZURpc2NhcmRlZHx8bCxFPWEub25CZWZvcmVFbENoaWxkcmVuVXBkYXRlZHx8bCx3PWEuc2tpcEZyb21DaGlsZHJlbnx8bCx5PWEuYWRkQ2hpbGR8fGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuYXBwZW5kQ2hpbGQodCl9LE49ITA9PT1hLmNoaWxkcmVuT25seSxTPU9iamVjdC5jcmVhdGUobnVsbCksQT1bXTtmdW5jdGlvbiBDKGUpe0EucHVzaChlKX1mdW5jdGlvbiBVKGUsdCl7aWYoMT09PWUubm9kZVR5cGUpZm9yKHZhciBuPWUuZmlyc3RDaGlsZDtuOyl7dmFyIG89dm9pZCAwO3QmJihvPXYobikpP0Mobyk6KGIobiksbi5maXJzdENoaWxkJiZVKG4sdCkpLG49bi5uZXh0U2libGluZ319ZnVuY3Rpb24gVChlLHQsbil7ITEhPT1nKGUpJiYodCYmdC5yZW1vdmVDaGlsZChlKSxiKGUpLFUoZSxuKSl9ZnVuY3Rpb24gUihlKXtpZigxPT09ZS5ub2RlVHlwZXx8MTE9PT1lLm5vZGVUeXBlKWZvcih2YXIgdD1lLmZpcnN0Q2hpbGQ7dDspe3ZhciBuPXYodCk7biYmKFNbbl09dCksUih0KSx0PXQubmV4dFNpYmxpbmd9fWZ1bmN0aW9uIEgoZSl7ZihlKTtmb3IodmFyIHQ9ZS5maXJzdENoaWxkO3Q7KXt2YXIgbj10Lm5leHRTaWJsaW5nLG89dih0KTtpZihvKXt2YXIgaT1TW29dO2kmJnModCxpKT8odC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChpLHQpLE8oaSx0KSk6SCh0KX1lbHNlIEgodCk7dD1ufX1mdW5jdGlvbiBPKGUsdCxuKXt2YXIgaT12KHQpO2lmKGkmJmRlbGV0ZSBTW2ldLCFuKXt2YXIgcj1wKGUsdCk7aWYoITE9PT1yKXJldHVybjtpZihyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQmJlIoZT1yKSxmdW5jdGlvbihlLHQpe3ZhciBuLG8saSxyLHM9dC5hdHRyaWJ1dGVzO2lmKDExIT09dC5ub2RlVHlwZSYmMTEhPT1lLm5vZGVUeXBlKXtmb3IodmFyIGE9cy5sZW5ndGgtMTthPj0wO2EtLSlvPShuPXNbYV0pLm5hbWUsaT1uLm5hbWVzcGFjZVVSSSxyPW4udmFsdWUsaT8obz1uLmxvY2FsTmFtZXx8byxlLmdldEF0dHJpYnV0ZU5TKGksbykhPT1yJiYoXCJ4bWxuc1wiPT09bi5wcmVmaXgmJihvPW4ubmFtZSksZS5zZXRBdHRyaWJ1dGVOUyhpLG8scikpKTplLmdldEF0dHJpYnV0ZShvKSE9PXImJmUuc2V0QXR0cmlidXRlKG8scik7Zm9yKHZhciBkPWUuYXR0cmlidXRlcyxsPWQubGVuZ3RoLTE7bD49MDtsLS0pbz0obj1kW2xdKS5uYW1lLChpPW4ubmFtZXNwYWNlVVJJKT8obz1uLmxvY2FsTmFtZXx8byx0Lmhhc0F0dHJpYnV0ZU5TKGksbyl8fGUucmVtb3ZlQXR0cmlidXRlTlMoaSxvKSk6dC5oYXNBdHRyaWJ1dGUobyl8fGUucmVtb3ZlQXR0cmlidXRlKG8pfX0oZSx0KSxtKGUpLCExPT09RShlLHQpKXJldHVybn1cIlRFWFRBUkVBXCIhPT1lLm5vZGVOYW1lP2Z1bmN0aW9uKGUsdCl7dmFyIG4saSxyLGEsbCxjPXcoZSx0KSxoPXQuZmlyc3RDaGlsZCx1PWUuZmlyc3RDaGlsZDtlOmZvcig7aDspe2ZvcihhPWgubmV4dFNpYmxpbmcsbj12KGgpOyFjJiZ1Oyl7aWYocj11Lm5leHRTaWJsaW5nLGguaXNTYW1lTm9kZSYmaC5pc1NhbWVOb2RlKHUpKXtoPWEsdT1yO2NvbnRpbnVlIGV9aT12KHUpO3ZhciBmPXUubm9kZVR5cGUscD12b2lkIDA7aWYoZj09PWgubm9kZVR5cGUmJigxPT09Zj8obj9uIT09aSYmKChsPVNbbl0pP3I9PT1sP3A9ITE6KGUuaW5zZXJ0QmVmb3JlKGwsdSksaT9DKGkpOlQodSxlLCEwKSxpPXYodT1sKSk6cD0hMSk6aSYmKHA9ITEpLChwPSExIT09cCYmcyh1LGgpKSYmTyh1LGgpKTozIT09ZiYmOCE9Znx8KHA9ITAsdS5ub2RlVmFsdWUhPT1oLm5vZGVWYWx1ZSYmKHUubm9kZVZhbHVlPWgubm9kZVZhbHVlKSkpLHApe2g9YSx1PXI7Y29udGludWUgZX1pP0MoaSk6VCh1LGUsITApLHU9cn1pZihuJiYobD1TW25dKSYmcyhsLGgpKWN8fHkoZSxsKSxPKGwsaCk7ZWxzZXt2YXIgbT1fKGgpOyExIT09bSYmKG0mJihoPW0pLGguYWN0dWFsaXplJiYoaD1oLmFjdHVhbGl6ZShlLm93bmVyRG9jdW1lbnR8fG8pKSx5KGUsaCksSChoKSl9aD1hLHU9cn0hZnVuY3Rpb24oZSx0LG4pe2Zvcig7dDspe3ZhciBvPXQubmV4dFNpYmxpbmc7KG49dih0KSk/QyhuKTpUKHQsZSwhMCksdD1vfX0oZSx1LGkpO3ZhciBnPWRbZS5ub2RlTmFtZV07ZyYmZyhlLHQpfShlLHQpOmQuVEVYVEFSRUEoZSx0KX1SKHQpO3ZhciBrLEwseD10LHo9eC5ub2RlVHlwZSxNPW4ubm9kZVR5cGU7aWYoIU4paWYoMT09PXopMT09PU0/cyh0LG4pfHwoYih0KSx4PWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPWUuZmlyc3RDaGlsZDtuOyl7dmFyIG89bi5uZXh0U2libGluZzt0LmFwcGVuZENoaWxkKG4pLG49b31yZXR1cm4gdH0odCwoaz1uLm5vZGVOYW1lLChMPW4ubmFtZXNwYWNlVVJJKSYmXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIhPT1MP28uY3JlYXRlRWxlbWVudE5TKEwsayk6by5jcmVhdGVFbGVtZW50KGspKSkpOng9bjtlbHNlIGlmKDM9PT16fHw4PT09eil7aWYoTT09PXopcmV0dXJuIHgubm9kZVZhbHVlIT09bi5ub2RlVmFsdWUmJih4Lm5vZGVWYWx1ZT1uLm5vZGVWYWx1ZSkseDt4PW59aWYoeD09PW4pYih0KTtlbHNle2lmKG4uaXNTYW1lTm9kZSYmbi5pc1NhbWVOb2RlKHgpKXJldHVybjtpZihPKHgsbixOKSxBKWZvcih2YXIgVj0wLEk9QS5sZW5ndGg7VjxJO1YrKyl7dmFyIEQ9U1tBW1ZdXTtEJiZUKEQsRC5wYXJlbnROb2RlLCExKX19cmV0dXJuIU4mJnghPT10JiZ0LnBhcmVudE5vZGUmJih4LmFjdHVhbGl6ZSYmKHg9eC5hY3R1YWxpemUodC5vd25lckRvY3VtZW50fHxvKSksdC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZCh4LHQpKSx4fSx1PXtyYW5kb21VVUlEOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBjcnlwdG8mJmNyeXB0by5yYW5kb21VVUlEJiZjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byl9O2xldCB2O2NvbnN0IF89bmV3IFVpbnQ4QXJyYXkoMTYpO2Z1bmN0aW9uIGYoKXtpZighdil7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIGNyeXB0b3x8IWNyeXB0by5nZXRSYW5kb21WYWx1ZXMpdGhyb3cgbmV3IEVycm9yKFwiY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWRcIik7dj1jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKX1yZXR1cm4gdihfKX1jb25zdCBwPVtdO2ZvcihsZXQgZT0wO2U8MjU2OysrZSlwLnB1c2goKGUrMjU2KS50b1N0cmluZygxNikuc2xpY2UoMSkpO2NvbnN0IG09ZnVuY3Rpb24oZSx0LG4pe2lmKHUucmFuZG9tVVVJRCYmIXQmJiFlKXJldHVybiB1LnJhbmRvbVVVSUQoKTtjb25zdCBvPShlPWV8fHt9KS5yYW5kb218fChlLnJuZ3x8ZikoKTtpZihvWzZdPTE1Jm9bNl18NjQsb1s4XT02MyZvWzhdfDEyOCx0KXtuPW58fDA7Zm9yKGxldCBlPTA7ZTwxNjsrK2UpdFtuK2VdPW9bZV07cmV0dXJuIHR9cmV0dXJuIGZ1bmN0aW9uKGUsdD0wKXtyZXR1cm4ocFtlW3QrMF1dK3BbZVt0KzFdXStwW2VbdCsyXV0rcFtlW3QrM11dK1wiLVwiK3BbZVt0KzRdXStwW2VbdCs1XV0rXCItXCIrcFtlW3QrNl1dK3BbZVt0KzddXStcIi1cIitwW2VbdCs4XV0rcFtlW3QrOV1dK1wiLVwiK3BbZVt0KzEwXV0rcFtlW3QrMTFdXStwW2VbdCsxMl1dK3BbZVt0KzEzXV0rcFtlW3QrMTRdXStwW2VbdCsxNV1dKS50b0xvd2VyQ2FzZSgpfShvKX07Y2xhc3MgZyBleHRlbmRzIEhUTUxFbGVtZW50e31jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJyZWFjdG9yLXZpZXdwb3J0XCIsZyk7Y2xhc3MgYntfaWQ7X3N0YXRlO19yZW5kZXI7X3ZpZXdwb3J0O19jb250YWluZXI7X3Jvb3Q7X2VtaXQ9bmV3IE1hcDtfaHR0cD1uZXcgTWFwO19nbG9iYWxFdmVudHM9bmV3IE1hcDtfbG9jYWxFdmVudHM9bmV3IE1hcDtfZG9jdW1lbnRFdmVudHM9bmV3IE1hcDtfZGVidWc7X3Jlc2l6ZU9ic2VydmVyO19yZXNpemVVc2VySGFuZGxlcjtfZG9tbW9kZTtfdmFsaWRhdGlvbjtfZGVmZXJyZWRSZWRyYXc9ITE7Y29uc3RydWN0b3IoZSl7dGhpcy5faWQ9bSgpLHRoaXMuX3N0YXRlPWUuaW5pdGlhbFN0YXRlLHRoaXMuX3JlbmRlcj1lLnJlbmRlcix0aGlzLl92aWV3cG9ydD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicmVhY3Rvci12aWV3cG9ydFwiKSx0aGlzLl92aWV3cG9ydC5jbGFzc0xpc3QuYWRkKFwidmlld3BvcnRcIiksdGhpcy5fdmlld3BvcnQuZGF0YXNldC5pZD10aGlzLl9pZCxlLmlkJiYodGhpcy5fdmlld3BvcnQuaWQ9ZS5pZCksdGhpcy5fZG9tbW9kZT1lLmRvbW1vZGV8fFwic2hhZG93XCI7Y29uc3QgdD1cInNoYWRvd1wiPT09dGhpcy5fZG9tbW9kZT90aGlzLl92aWV3cG9ydC5hdHRhY2hTaGFkb3coe21vZGU6XCJjbG9zZWRcIixjbG9uYWJsZTohMCxkZWxlZ2F0ZXNGb2N1czohMH0pOnRoaXMuX3ZpZXdwb3J0O2lmKHRoaXMuX2NvbnRhaW5lcj1lLmNvbnRhaW5lcj9lLmNvbnRhaW5lcjpkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHQuYXBwZW5kQ2hpbGQodGhpcy5fY29udGFpbmVyKSx0aGlzLl9yb290PXRoaXMuX3JlbmRlcih0aGlzLl9zdGF0ZSksdGhpcy5fY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuX3Jvb3QpLGUuc3R5bGVzJiYodCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3Q/dC5hZG9wdGVkU3R5bGVTaGVldHMucHVzaChlLnN0eWxlcyk6ZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzLnB1c2goZS5zdHlsZXMpKSx0aGlzLl9kZWJ1Zz0hIWUuZGVidWcsdGhpcy5fZ2xvYmFsRXZlbnRIYW5kbGVyPXRoaXMuX2dsb2JhbEV2ZW50SGFuZGxlci5iaW5kKHRoaXMpLHRoaXMuX2RvY3VtZW50RXZlbnRIYW5kbGVyPXRoaXMuX2RvY3VtZW50RXZlbnRIYW5kbGVyLmJpbmQodGhpcyksdGhpcy5fbG9jYWxFdmVudEhhbmRsZXI9dGhpcy5fbG9jYWxFdmVudEhhbmRsZXIuYmluZCh0aGlzKSx0aGlzLl9yZXNpemVIYW5kbGVyPXRoaXMuX3Jlc2l6ZUhhbmRsZXIuYmluZCh0aGlzKSxlLmV2ZW50cylmb3IoY29uc3QgdCBpbiBlLmV2ZW50cylPYmplY3QuaGFzT3duKGUuZXZlbnRzLHQpJiYoXCJmdW5jdGlvblwiPT10eXBlb2YgZS5ldmVudHNbdF0/dGhpcy5fbG9jYWxFdmVudHMuc2V0KHQse2hhbmRsZXI6ZS5ldmVudHNbdF19KTpPYmplY3QuaGFzT3duKGUuZXZlbnRzW3RdLFwidGFyZ2V0XCIpJiZcImxvY2FsXCIhPT1lLmV2ZW50c1t0XS50YXJnZXQ/XCJ3aW5kb3dcIj09PWUuZXZlbnRzW3RdLnRhcmdldD90aGlzLl9nbG9iYWxFdmVudHMuc2V0KHQse2hhbmRsZXI6ZS5ldmVudHNbdF0uaGFuZGxlcixvcHRpb25zOmUuZXZlbnRzW3RdLm9wdGlvbnN9KTp0aGlzLl9kb2N1bWVudEV2ZW50cy5zZXQodCx7aGFuZGxlcjplLmV2ZW50c1t0XS5oYW5kbGVyLG9wdGlvbnM6ZS5ldmVudHNbdF0ub3B0aW9uc30pOnRoaXMuX2xvY2FsRXZlbnRzLnNldCh0LHtoYW5kbGVyOmUuZXZlbnRzW3RdLmhhbmRsZXIsb3B0aW9uczplLmV2ZW50c1t0XS5vcHRpb25zfSkpO2lmKGUuZW1pdClmb3IoY29uc3QgdCBvZiBlLmVtaXQpdGhpcy5fZW1pdC5zZXQodC53aGVuLG5ldyBTZXQoQXJyYXkuaXNBcnJheSh0LmVtaXQpP3QuZW1pdDpbdC5lbWl0XSkpO2lmKGUuaHR0cClmb3IoY29uc3QgdCBvZiBlLmh0dHApdGhpcy5faHR0cC5zZXQodC53aGVuLG5ldyBTZXQoQXJyYXkuaXNBcnJheSh0LnNlbmQpP3Quc2VuZDpbdC5zZW5kXSkpO2Zvcihjb25zdCBlIG9mIHRoaXMuX2xvY2FsRXZlbnRzLmtleXMoKSl0aGlzLl9jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihlLHRoaXMuX2xvY2FsRXZlbnRIYW5kbGVyLHRoaXMuX2xvY2FsRXZlbnRzLmdldChlKS5vcHRpb25zfHwhMCk7Zm9yKGNvbnN0IGUgb2YgdGhpcy5fZ2xvYmFsRXZlbnRzLmtleXMoKSl3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihlLHRoaXMuX2dsb2JhbEV2ZW50SGFuZGxlcix0aGlzLl9nbG9iYWxFdmVudHMuZ2V0KGUpLm9wdGlvbnN8fCEwKTtmb3IoY29uc3QgZSBvZiB0aGlzLl9kb2N1bWVudEV2ZW50cy5rZXlzKCkpdGhpcy5fY29udGFpbmVyLm93bmVyRG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihlLHRoaXMuX2RvY3VtZW50RXZlbnRIYW5kbGVyLHRoaXMuX2RvY3VtZW50RXZlbnRzLmdldChlKS5vcHRpb25zfHwhMCk7ZS5vblJlc2l6ZSYmKHRoaXMuX3Jlc2l6ZVVzZXJIYW5kbGVyPWUub25SZXNpemUsdGhpcy5fcmVzaXplT2JzZXJ2ZXI9bmV3IFJlc2l6ZU9ic2VydmVyKHRoaXMuX3Jlc2l6ZUhhbmRsZXIpLHRoaXMuX3Jlc2l6ZU9ic2VydmVyLm9ic2VydmUodGhpcy5fdmlld3BvcnQpKSx0aGlzLl9zZW5kUmVxdWVzdHMobnVsbCksdGhpcy5fdmFsaWRhdGlvbj1lLnZhbGlkYXRpb24sdGhpcy5fbWF5YmVWYWxpZGF0ZSgpfWRlc3RydWN0b3IoKXtmb3IoY29uc3QgZSBvZiB0aGlzLl9sb2NhbEV2ZW50cy5rZXlzKCkpdGhpcy5fY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoZSx0aGlzLl9sb2NhbEV2ZW50SGFuZGxlcix0aGlzLl9sb2NhbEV2ZW50cy5nZXQoZSkub3B0aW9uc3x8ITApO2Zvcihjb25zdCBlIG9mIHRoaXMuX2dsb2JhbEV2ZW50cy5rZXlzKCkpd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoZSx0aGlzLl9nbG9iYWxFdmVudEhhbmRsZXIsdGhpcy5fZ2xvYmFsRXZlbnRzLmdldChlKS5vcHRpb25zfHwhMCk7Zm9yKGNvbnN0IGUgb2YgdGhpcy5fZG9jdW1lbnRFdmVudHMua2V5cygpKXRoaXMuX2NvbnRhaW5lci5vd25lckRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZSx0aGlzLl9kb2N1bWVudEV2ZW50SGFuZGxlcix0aGlzLl9kb2N1bWVudEV2ZW50cy5nZXQoZSkub3B0aW9uc3x8ITApO3RoaXMuX3Jlc2l6ZU9ic2VydmVyJiZ0aGlzLl9yZXNpemVPYnNlcnZlci51bm9ic2VydmUodGhpcy5fdmlld3BvcnQpfV9tYXliZVZhbGlkYXRlKCl7aWYodGhpcy5fdmFsaWRhdGlvbil7Y29uc3RbZSx0XT10aGlzLl92YWxpZGF0aW9uLnZhbGlkYXRlKHRoaXMuX3N0YXRlKTt0aGlzLl92YWxpZGl0eURpZmZlcnMoZSkmJnRoaXMuX3ZhbGlkYXRpb24uaW50ZXJuYWxzLnNldFZhbGlkaXR5KGUsdCksdGhpcy5fdmFsaWRhdGlvbi5pbnRlcm5hbHMuc2V0Rm9ybVZhbHVlKHRoaXMuX3ZhbGlkYXRpb24uZm9ybVZhbHVlKHRoaXMuX3N0YXRlKSl9fV92YWxpZGl0eURpZmZlcnMoZSl7Y29uc3QgdD10aGlzLl92YWxpZGF0aW9uLmludGVybmFscy52YWxpZGl0eTtyZXR1cm4gdC52YWx1ZU1pc3NpbmchPT0oZS52YWx1ZU1pc3Npbmc/PyExKXx8dC5zdGVwTWlzbWF0Y2ghPT0oZS5zdGVwTWlzbWF0Y2g/PyExKXx8dC5iYWRJbnB1dCE9PShlLmJhZElucHV0Pz8hMSl8fHQuY3VzdG9tRXJyb3IhPT0oZS5jdXN0b21FcnJvcj8/ITEpfHx0LnBhdHRlcm5NaXNtYXRjaCE9PShlLnBhdHRlcm5NaXNtYXRjaD8/ITEpfHx0LnJhbmdlT3ZlcmZsb3chPT0oZS5yYW5nZU92ZXJmbG93Pz8hMSl8fHQucmFuZ2VVbmRlcmZsb3chPT0oZS5yYW5nZVVuZGVyZmxvdz8/ITEpfHx0LnRvb0xvbmchPT0oZS50b29Mb25nPz8hMSl8fHQudG9vU2hvcnQhPT0oZS50b29TaG9ydD8/ITEpfHx0LnR5cGVNaXNtYXRjaCE9PShlLnR5cGVNaXNtYXRjaD8/ITEpfV9yZXNpemVIYW5kbGVyKGUpe3RoaXMuX2NoYW5nZVN0YXRlKHRoaXMuX3Jlc2l6ZVVzZXJIYW5kbGVyKHRoaXMuX3N0YXRlLGUpKX1fbG9jYWxFdmVudEhhbmRsZXIoZSl7dGhpcy5fZGVidWcmJmNvbnNvbGUubG9nKFwibmlrb25vdi1jb21wb25lbnRzOiBsb2NhbCBldmVudCBjYXRjaFwiLGUpLFtcInN1Ym1pdFwiXS5pbmNsdWRlcyhlLnR5cGUpJiZlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtjb25zdCB0PXRoaXMuX2xvY2FsRXZlbnRzLmdldChlLnR5cGUpLmhhbmRsZXI7dGhpcy5fY2hhbmdlU3RhdGUodCh0aGlzLl9zdGF0ZSxlKSl9X2dsb2JhbEV2ZW50SGFuZGxlcihlKXt0aGlzLl9kZWJ1ZyYmY29uc29sZS5sb2coXCJuaWtvbm92LWNvbXBvbmVudHM6IGdsb2JhbCBldmVudCBjYXRjaFwiLGUpO2NvbnN0IHQ9dGhpcy5fZ2xvYmFsRXZlbnRzLmdldChlLnR5cGUpLmhhbmRsZXI7dGhpcy5fY2hhbmdlU3RhdGUodCh0aGlzLl9zdGF0ZSxlKSl9X2RvY3VtZW50RXZlbnRIYW5kbGVyKGUpe3RoaXMuX2RlYnVnJiZjb25zb2xlLmxvZyhcIm5pa29ub3YtY29tcG9uZW50czogZG9jdW1lbnQgZXZlbnQgY2F0Y2hcIixlKTtjb25zdCB0PXRoaXMuX2RvY3VtZW50RXZlbnRzLmdldChlLnR5cGUpLmhhbmRsZXI7dGhpcy5fY2hhbmdlU3RhdGUodCh0aGlzLl9zdGF0ZSxlKSl9X3JlZHJhdygpe2NvbnN0IGU9dGhpcy5fcmVuZGVyKHRoaXMuX3N0YXRlKTt0aGlzLl9kZWJ1ZyYmY29uc29sZS5sb2coXCJuaWtvbm92LWNvbXBvbmVudHM6IHJlZHJhd1wiLHRoaXMuX3Jvb3QuY2xvbmVOb2RlKCEwKSxlLmNsb25lTm9kZSghMCkpLHRoaXMuX3Jvb3QuaXNFcXVhbE5vZGUoZSl8fCh0aGlzLl9yb290Lm5vZGVOYW1lIT09ZS5ub2RlTmFtZT8odGhpcy5fcm9vdC5yZXBsYWNlV2l0aChlKSx0aGlzLl9yb290PWUpOmgodGhpcy5fcm9vdCxlLHtnZXROb2RlS2V5OmU9PmUgaW5zdGFuY2VvZiBnP2UuZGF0YXNldC5pZDplLmlkLG9uQmVmb3JlTm9kZUFkZGVkOmU9Pih0aGlzLl9kZWJ1ZyYmY29uc29sZS5sb2coXCJuaWtvbm92LWNvbXBvbmVudHM6IGVsZW1lbnQgYWRkZWRcIixlLmNsb25lTm9kZSghMCkpLGUgaW5zdGFuY2VvZiBnJiZlLmNsYXNzTGlzdC5jb250YWlucyhcInN0dWJcIik/ZS5yZWZlcmVuY2UuZGVyZWYoKTplKSxvbkJlZm9yZUVsVXBkYXRlZDooZSx0KT0+KHRoaXMuX2RlYnVnJiZjb25zb2xlLmxvZyhcIm5pa29ub3YtY29tcG9uZW50czogZWxlbWVudCB1cGRhdGVcIixlLmNsb25lTm9kZSghMCksdC5jbG9uZU5vZGUoITApKSwhZS5pc0VxdWFsTm9kZSh0KSYmKHQgaW5zdGFuY2VvZiBnP3QuZGF0YXNldC5pZCE9PWUuZGF0YXNldC5pZCYmKHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmlld3BvcnRcIik/dDooZS5yZXBsYWNlV2l0aCh0LnJlZmVyZW5jZS5kZXJlZigpKSwhMSkpOmUpKX0pKX1fZW1pdEV2ZW50cyhlKXtmb3IobGV0W3Qsbl1vZiB0aGlzLl9lbWl0KWlmKHQoZSx0aGlzLl9zdGF0ZSkpZm9yKGxldCB0IG9mIG4pdGhpcy5fdmlld3BvcnQuZGlzcGF0Y2hFdmVudCh0KHRoaXMuX3N0YXRlLGUpKX1hc3luYyBfc2VuZFJlcXVlc3QoZSl7Y29uc3QgdD0oXCJmdW5jdGlvblwiPT10eXBlb2YgZT9lOmUucmVxdWVzdCkodGhpcy5fc3RhdGUpLG49XCJyZXRyeVwiaW4gZSYmZS5yZXRyeT9lLnJldHJ5OjE7bGV0IG89bnVsbDtmb3IobGV0IGk9MDtpPG47aSsrKXRyeXtvPWF3YWl0IGZldGNoKHQpO2JyZWFrfWNhdGNoKHQpe2lmKGk8bi0xKWNvbnRpbnVlO3JldHVybiB2b2lkKFwiZXJyb3JcImluIGUmJmUuZXJyb3ImJnRoaXMuX2NoYW5nZVN0YXRlKGUuZXJyb3IodGhpcy5fc3RhdGUsdCkpKX1pZihcInJlc3BvbnNlXCJpbiBlJiZlLnJlc3BvbnNlfHxcImVycm9yXCJpbiBlJiZlLmVycm9yKXtsZXQgdD1cIlwiO3RyeXtpZighby5vayl0aHJvdyBuZXcgRXJyb3Ioby5zdGF0dXNUZXh0KTt0PWF3YWl0IG8udGV4dCgpfWNhdGNoKHQpe3JldHVybiB2b2lkKFwiZXJyb3JcImluIGUmJmUuZXJyb3ImJnRoaXMuX2NoYW5nZVN0YXRlKGUuZXJyb3IodGhpcy5fc3RhdGUsdCkpKX1cInJlc3BvbnNlXCJpbiBlJiZlLnJlc3BvbnNlJiZ0aGlzLl9jaGFuZ2VTdGF0ZShlLnJlc3BvbnNlKHRoaXMuX3N0YXRlLG8sdCkpfX1fc2VuZFJlcXVlc3RzKGUpe2ZvcihsZXRbdCxuXW9mIHRoaXMuX2h0dHApdChlLHRoaXMuX3N0YXRlKSYmbi5mb3JFYWNoKChlPT57dGhpcy5fc2VuZFJlcXVlc3QoZSl9KSl9X2NoYW5nZVN0YXRlKGUpe2lmKHRoaXMuX3N0YXRlPT09ZSlyZXR1cm47Y29uc3QgdD10aGlzLl9zdGF0ZTt0aGlzLl9zdGF0ZT1lLHRoaXMuX2RlZmVycmVkUmVkcmF3fHwoc2V0VGltZW91dCgoKCk9Pnt0aGlzLl9yZWRyYXcoKSx0aGlzLl9kZWZlcnJlZFJlZHJhdz0hMX0pLDApLHRoaXMuX2RlZmVycmVkUmVkcmF3PSEwKSx0aGlzLl9lbWl0RXZlbnRzKHQpLHRoaXMuX3NlbmRSZXF1ZXN0cyh0KSx0aGlzLl9tYXliZVZhbGlkYXRlKCksdGhpcy5fZGVidWcmJmNvbnNvbGUubG9nKFwibmlrb25vdi1jb21wb25lbnRzOiB0cmFuc2l0aW9uIGZyb21cIix0LFwidG9cIix0aGlzLl9zdGF0ZSl9fWNvbnN0IEU9bmV3IEZpbmFsaXphdGlvblJlZ2lzdHJ5KChlPT57ZS5fZGVidWcmJmNvbnNvbGUubG9nKFwibmlrb25vdi1jb21wb25lbnRzIGdjOlwiLGUuX2lkLEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZS5fc3RhdGUpKSksZS5kZXN0cnVjdG9yKCl9KSk7Y2xhc3Mgd3tfY29yZTtjb25zdHJ1Y3RvcihlKXt0aGlzLl9jb3JlPW5ldyBiKGUpLEUucmVnaXN0ZXIodGhpcyx0aGlzLl9jb3JlKX19Y29uc3QgeT1lPT5uZXcgdyhlKSxOPWU9PmUuX2NvcmUuX3N0YXRlLFM9ZT0+e2lmKCFlLl9jb3JlLl92aWV3cG9ydC5pc0Nvbm5lY3RlZClyZXR1cm4gZS5fY29yZS5fdmlld3BvcnQ7Y29uc3QgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicmVhY3Rvci12aWV3cG9ydFwiKTtyZXR1cm4gdC5jbGFzc0xpc3QuYWRkKFwic3R1YlwiKSx0LmRhdGFzZXQuaWQ9ZS5fY29yZS5faWQsdC5yZWZlcmVuY2U9bmV3IFdlYWtSZWYoZS5fY29yZS5fdmlld3BvcnQpLHR9O3ZhciBBPW4uWlUsQz1uLkw4LFU9bi53ayxUPW4uUjk7ZXhwb3J0e0EgYXMgVHlwZSxDIGFzIG1ha2UsVSBhcyBzdGF0ZSxUIGFzIHZpZXdwb3J0fTsiLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzO1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gaXNCb29sZWFuKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gXCJib29sZWFuXCI7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQodmFsKSB7XG4gIHJldHVybiB2YWwgJiYgdHlwZW9mIHZhbC5ub2RlVHlwZSA9PT0gXCJudW1iZXJcIjtcbn1cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIjtcbn1cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIjtcbn1cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gXCJvYmplY3RcIiA/IHZhbCAhPT0gbnVsbCA6IGlzRnVuY3Rpb24odmFsKTtcbn1cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSBcImZ1bmN0aW9uXCI7XG59XG5mdW5jdGlvbiBpc0NvbXBvbmVudENsYXNzKENvbXBvbmVudCkge1xuICByZXR1cm4gISEoQ29tcG9uZW50ICYmIENvbXBvbmVudC5pc0NvbXBvbmVudCk7XG59XG5mdW5jdGlvbiBpc0FycmF5TGlrZShvYmopIHtcbiAgcmV0dXJuIChcbiAgICBpc09iamVjdChvYmopICYmXG4gICAgdHlwZW9mIG9iai5sZW5ndGggPT09IFwibnVtYmVyXCIgJiZcbiAgICB0eXBlb2Ygb2JqLm5vZGVUeXBlICE9PSBcIm51bWJlclwiXG4gICk7XG59XG5mdW5jdGlvbiBmb3JFYWNoKHZhbHVlLCBmbikge1xuICBpZiAoIXZhbHVlKSByZXR1cm47XG4gIGZvciAoY29uc3Qga2V5IG9mIGtleXModmFsdWUpKSB7XG4gICAgZm4odmFsdWVba2V5XSwga2V5KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVSZWYoKSB7XG4gIHJldHVybiBPYmplY3Quc2VhbCh7XG4gICAgY3VycmVudDogbnVsbCxcbiAgfSk7XG59XG5mdW5jdGlvbiBpc1JlZihtYXliZVJlZikge1xuICByZXR1cm4gaXNPYmplY3QobWF5YmVSZWYpICYmIFwiY3VycmVudFwiIGluIG1heWJlUmVmO1xufVxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIG9uXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi9iODdhYWJkZmUxYjc0NjFlNzMzMWFiYjM2MDFkOWU2YmIyNzU0NGJjL0xJQ0VOU0VcbiAqL1xuXG4vKipcbiAqIENTUyBwcm9wZXJ0aWVzIHdoaWNoIGFjY2VwdCBudW1iZXJzIGJ1dCBhcmUgbm90IGluIHVuaXRzIG9mIFwicHhcIi5cbiAqL1xuY29uc3QgaXNVbml0bGVzc051bWJlciA9IHtcbiAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IDAsXG4gIGJvcmRlckltYWdlT3V0c2V0OiAwLFxuICBib3JkZXJJbWFnZVNsaWNlOiAwLFxuICBib3JkZXJJbWFnZVdpZHRoOiAwLFxuICBib3hGbGV4OiAwLFxuICBib3hGbGV4R3JvdXA6IDAsXG4gIGJveE9yZGluYWxHcm91cDogMCxcbiAgY29sdW1uQ291bnQ6IDAsXG4gIGNvbHVtbnM6IDAsXG4gIGZsZXg6IDAsXG4gIGZsZXhHcm93OiAwLFxuICBmbGV4UG9zaXRpdmU6IDAsXG4gIGZsZXhTaHJpbms6IDAsXG4gIGZsZXhOZWdhdGl2ZTogMCxcbiAgZmxleE9yZGVyOiAwLFxuICBncmlkQXJlYTogMCxcbiAgZ3JpZFJvdzogMCxcbiAgZ3JpZFJvd0VuZDogMCxcbiAgZ3JpZFJvd1NwYW46IDAsXG4gIGdyaWRSb3dTdGFydDogMCxcbiAgZ3JpZENvbHVtbjogMCxcbiAgZ3JpZENvbHVtbkVuZDogMCxcbiAgZ3JpZENvbHVtblNwYW46IDAsXG4gIGdyaWRDb2x1bW5TdGFydDogMCxcbiAgZm9udFdlaWdodDogMCxcbiAgbGluZUNsYW1wOiAwLFxuICBsaW5lSGVpZ2h0OiAwLFxuICBvcGFjaXR5OiAwLFxuICBvcmRlcjogMCxcbiAgb3JwaGFuczogMCxcbiAgdGFiU2l6ZTogMCxcbiAgd2lkb3dzOiAwLFxuICB6SW5kZXg6IDAsXG4gIHpvb206IDAsXG4gIC8vIFNWRy1yZWxhdGVkIHByb3BlcnRpZXNcbiAgZmlsbE9wYWNpdHk6IDAsXG4gIGZsb29kT3BhY2l0eTogMCxcbiAgc3RvcE9wYWNpdHk6IDAsXG4gIHN0cm9rZURhc2hhcnJheTogMCxcbiAgc3Ryb2tlRGFzaG9mZnNldDogMCxcbiAgc3Ryb2tlTWl0ZXJsaW1pdDogMCxcbiAgc3Ryb2tlT3BhY2l0eTogMCxcbiAgc3Ryb2tlV2lkdGg6IDAsXG59O1xuXG4vKipcbiAqIEBwYXJhbSBwcmVmaXggdmVuZG9yLXNwZWNpZmljIHByZWZpeCwgZWc6IFdlYmtpdFxuICogQHBhcmFtIGtleSBzdHlsZSBuYW1lLCBlZzogdHJhbnNpdGlvbkR1cmF0aW9uXG4gKiBAcmV0dXJuIHN0eWxlIG5hbWUgcHJlZml4ZWQgd2l0aCBgcHJlZml4YCwgcHJvcGVybHkgY2FtZWxDYXNlZCwgZWc6XG4gKiBXZWJraXRUcmFuc2l0aW9uRHVyYXRpb25cbiAqL1xuZnVuY3Rpb24gcHJlZml4S2V5KHByZWZpeCwga2V5KSB7XG4gIHJldHVybiBwcmVmaXggKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc3Vic3RyaW5nKDEpO1xufVxuXG4vKipcbiAqIFN1cHBvcnQgc3R5bGUgbmFtZXMgdGhhdCBtYXkgY29tZSBwYXNzZWQgaW4gcHJlZml4ZWQgYnkgYWRkaW5nIHBlcm11dGF0aW9uc1xuICogb2YgdmVuZG9yIHByZWZpeGVzLlxuICovXG5jb25zdCBwcmVmaXhlcyA9IFtcIldlYmtpdFwiLCBcIm1zXCIsIFwiTW96XCIsIFwiT1wiXTtcbi8vIFVzaW5nIE9iamVjdC5rZXlzIGhlcmUsIG9yIGVsc2UgdGhlIHZhbmlsbGEgZm9yLWluIGxvb3AgbWFrZXMgSUU4IGdvIGludG8gYW5cbi8vIGluZmluaXRlIGxvb3AsIGJlY2F1c2UgaXQgaXRlcmF0ZXMgb3ZlciB0aGUgbmV3bHkgYWRkZWQgcHJvcHMgdG9vLlxua2V5cyhpc1VuaXRsZXNzTnVtYmVyKS5mb3JFYWNoKChwcm9wKSA9PiB7XG4gIHByZWZpeGVzLmZvckVhY2goKHByZWZpeCkgPT4ge1xuICAgIGlzVW5pdGxlc3NOdW1iZXJbcHJlZml4S2V5KHByZWZpeCwgcHJvcCldID0gMDsgLy8gaXNVbml0bGVzc051bWJlcltwcm9wXVxuICB9KTtcbn0pO1xuXG5jb25zdCBqc3hEb21UeXBlID0gU3ltYm9sLmZvcihcImpzeC1kb206dHlwZVwiKTtcbnZhciBKc3hEb21UeXBlID0gLyojX19QVVJFX18qLyAoZnVuY3Rpb24gKEpzeERvbVR5cGUpIHtcbiAgSnN4RG9tVHlwZVtcIlNoYWRvd1Jvb3RcIl0gPSBcIlNoYWRvd1Jvb3RcIjtcbiAgcmV0dXJuIEpzeERvbVR5cGU7XG59KShKc3hEb21UeXBlIHx8IHt9KTtcbmZ1bmN0aW9uIFNoYWRvd1Jvb3QoX3JlZikge1xuICBsZXQgeyBjaGlsZHJlbiwgcmVmLCAuLi5hdHRyIH0gPSBfcmVmO1xuICByZXR1cm4ge1xuICAgIFtqc3hEb21UeXBlXTogSnN4RG9tVHlwZS5TaGFkb3dSb290LFxuICAgIHJlZixcbiAgICBhdHRyLFxuICAgIGNoaWxkcmVuLFxuICB9O1xufVxuZnVuY3Rpb24gaXNTaGFkb3dSb290KGVsKSB7XG4gIHJldHVybiBlbCAhPSBudWxsICYmIGVsW2pzeERvbVR5cGVdID09PSBKc3hEb21UeXBlLlNoYWRvd1Jvb3Q7XG59XG5cbmNvbnN0IFNWR05hbWVzcGFjZSA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcbmNvbnN0IFhMaW5rTmFtZXNwYWNlID0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI7XG5jb25zdCBYTUxOYW1lc3BhY2UgPSBcImh0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZVwiO1xuXG4vLyBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL2pzeC1pbi1kZXB0aC5odG1sI2Jvb2xlYW5zLW51bGwtYW5kLXVuZGVmaW5lZC1hcmUtaWdub3JlZFxuLy8gRW11bGF0ZSBKU1ggRXhwcmVzc2lvbiBsb2dpYyB0byBpZ25vcmUgY2VydGFpbiB0eXBlIG9mIGNoaWxkcmVuIG9yIGNsYXNzTmFtZS5cbmZ1bmN0aW9uIGlzVmlzaWJsZUNoaWxkKHZhbHVlKSB7XG4gIHJldHVybiAhaXNCb29sZWFuKHZhbHVlKSAmJiB2YWx1ZSAhPSBudWxsO1xufVxuXG4vKipcbiAqIENvbnZlcnQgYSBgdmFsdWVgIHRvIGEgY2xhc3NOYW1lIHN0cmluZy5cbiAqIGB2YWx1ZWAgY2FuIGJlIGEgc3RyaW5nLCBhbiBhcnJheSBvciBhIGBEaWN0aW9uYXJ5PGJvb2xlYW4+YC5cbiAqL1xuZnVuY3Rpb24gY2xhc3NOYW1lKHZhbHVlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5tYXAoY2xhc3NOYW1lKS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIik7XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGNsYXNzTmFtZShBcnJheS5mcm9tKHZhbHVlKSk7XG4gICAgfVxuICAgIHJldHVybiBrZXlzKHZhbHVlKVxuICAgICAgLmZpbHRlcigoaykgPT4gdmFsdWVba10pXG4gICAgICAuam9pbihcIiBcIik7XG4gIH0gZWxzZSBpZiAoaXNWaXNpYmxlQ2hpbGQodmFsdWUpKSB7XG4gICAgcmV0dXJuIFwiXCIgKyB2YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxufVxuY29uc3Qgc3ZnID0ge1xuICBhbmltYXRlOiAwLFxuICBjaXJjbGU6IDAsXG4gIGNsaXBQYXRoOiAwLFxuICBkZWZzOiAwLFxuICBkZXNjOiAwLFxuICBlbGxpcHNlOiAwLFxuICBmZUJsZW5kOiAwLFxuICBmZUNvbG9yTWF0cml4OiAwLFxuICBmZUNvbXBvbmVudFRyYW5zZmVyOiAwLFxuICBmZUNvbXBvc2l0ZTogMCxcbiAgZmVDb252b2x2ZU1hdHJpeDogMCxcbiAgZmVEaWZmdXNlTGlnaHRpbmc6IDAsXG4gIGZlRGlzcGxhY2VtZW50TWFwOiAwLFxuICBmZURpc3RhbnRMaWdodDogMCxcbiAgZmVGbG9vZDogMCxcbiAgZmVGdW5jQTogMCxcbiAgZmVGdW5jQjogMCxcbiAgZmVGdW5jRzogMCxcbiAgZmVGdW5jUjogMCxcbiAgZmVHYXVzc2lhbkJsdXI6IDAsXG4gIGZlSW1hZ2U6IDAsXG4gIGZlTWVyZ2U6IDAsXG4gIGZlTWVyZ2VOb2RlOiAwLFxuICBmZU1vcnBob2xvZ3k6IDAsXG4gIGZlT2Zmc2V0OiAwLFxuICBmZVBvaW50TGlnaHQ6IDAsXG4gIGZlU3BlY3VsYXJMaWdodGluZzogMCxcbiAgZmVTcG90TGlnaHQ6IDAsXG4gIGZlVGlsZTogMCxcbiAgZmVUdXJidWxlbmNlOiAwLFxuICBmaWx0ZXI6IDAsXG4gIGZvcmVpZ25PYmplY3Q6IDAsXG4gIGc6IDAsXG4gIGltYWdlOiAwLFxuICBsaW5lOiAwLFxuICBsaW5lYXJHcmFkaWVudDogMCxcbiAgbWFya2VyOiAwLFxuICBtYXNrOiAwLFxuICBtZXRhZGF0YTogMCxcbiAgcGF0aDogMCxcbiAgcGF0dGVybjogMCxcbiAgcG9seWdvbjogMCxcbiAgcG9seWxpbmU6IDAsXG4gIHJhZGlhbEdyYWRpZW50OiAwLFxuICByZWN0OiAwLFxuICBzdG9wOiAwLFxuICBzdmc6IDAsXG4gIHN3aXRjaDogMCxcbiAgc3ltYm9sOiAwLFxuICB0ZXh0OiAwLFxuICB0ZXh0UGF0aDogMCxcbiAgdHNwYW46IDAsXG4gIHVzZTogMCxcbiAgdmlldzogMCxcbn07XG5jb25zdCBub25QcmVzZW50YXRpb25TVkdBdHRyaWJ1dGVzID1cbiAgL14oYShsbHx0fHUpfGJhc2VbRlBdfGMoYWx8bGlwUGF0aFV8b24pfGRpfGVkfGV4fGZpbHRlcltSVV18ZyhseXBoUnxyKXxrZXxsKGVufGltKXxtYShya2VyW0hVV118cyl8bnxwYXR8cHJ8cG9pbnRbXmVdfHJlW15uXXxzW3B1eV18c3RbXm9yXXx0YXx0ZXh0THx2aXx4Q3x5fHopLztcbmZ1bmN0aW9uIGNyZWF0ZUZhY3RvcnkodGFnKSB7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50LmJpbmQobnVsbCwgdGFnKTtcbn1cbmZ1bmN0aW9uIEZyYWdtZW50KGF0dHIpIHtcbiAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gIGFwcGVuZENoaWxkKGF0dHIuY2hpbGRyZW4sIGZyYWdtZW50KTtcbiAgcmV0dXJuIGZyYWdtZW50O1xufVxuY2xhc3MgQ29tcG9uZW50IHtcbiAgc3RhdGljIGlzQ29tcG9uZW50ID0gdHJ1ZTtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5mdW5jdGlvbiBpbml0Q29tcG9uZW50Q2xhc3MoQ2xhc3MsIGF0dHIsIGNoaWxkcmVuKSB7XG4gIGF0dHIgPSB7XG4gICAgLi4uYXR0cixcbiAgICBjaGlsZHJlbixcbiAgfTtcbiAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ2xhc3MoYXR0cik7XG4gIGNvbnN0IG5vZGUgPSBpbnN0YW5jZS5yZW5kZXIoKTtcbiAgaWYgKFwicmVmXCIgaW4gYXR0cikge1xuICAgIGF0dGFjaFJlZihhdHRyLnJlZiwgaW5zdGFuY2UpO1xuICB9XG4gIHJldHVybiBub2RlO1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5mdW5jdGlvbiBqc3godGFnLCBfcmVmKSB7XG4gIGxldCB7IGNoaWxkcmVuLCAuLi5hdHRyIH0gPSBfcmVmO1xuICBpZiAoIWF0dHIubmFtZXNwYWNlVVJJICYmIHN2Z1t0YWddID09PSAwKSB7XG4gICAgYXR0ciA9IHtcbiAgICAgIC4uLmF0dHIsXG4gICAgICBuYW1lc3BhY2VVUkk6IFNWR05hbWVzcGFjZSxcbiAgICB9O1xuICB9XG4gIGxldCBub2RlO1xuICBpZiAoaXNTdHJpbmcodGFnKSkge1xuICAgIG5vZGUgPSBhdHRyLm5hbWVzcGFjZVVSSVxuICAgICAgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoYXR0ci5uYW1lc3BhY2VVUkksIHRhZylcbiAgICAgIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGF0dHJpYnV0ZXMoYXR0ciwgbm9kZSk7XG4gICAgYXBwZW5kQ2hpbGQoY2hpbGRyZW4sIG5vZGUpO1xuXG4gICAgLy8gU2VsZWN0IGBvcHRpb25gIGVsZW1lbnRzIGluIGBzZWxlY3RgXG4gICAgaWYgKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTFNlbGVjdEVsZW1lbnQgJiYgYXR0ci52YWx1ZSAhPSBudWxsKSB7XG4gICAgICBpZiAoYXR0ci5tdWx0aXBsZSA9PT0gdHJ1ZSAmJiBBcnJheS5pc0FycmF5KGF0dHIudmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IGF0dHIudmFsdWUubWFwKCh2YWx1ZSkgPT4gU3RyaW5nKHZhbHVlKSk7XG4gICAgICAgIG5vZGVcbiAgICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcIm9wdGlvblwiKVxuICAgICAgICAgIC5mb3JFYWNoKFxuICAgICAgICAgICAgKG9wdGlvbikgPT4gKG9wdGlvbi5zZWxlY3RlZCA9IHZhbHVlcy5pbmNsdWRlcyhvcHRpb24udmFsdWUpKSxcbiAgICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZS52YWx1ZSA9IGF0dHIudmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIGF0dGFjaFJlZihhdHRyLnJlZiwgbm9kZSk7XG4gIH0gZWxzZSBpZiAoaXNGdW5jdGlvbih0YWcpKSB7XG4gICAgLy8gQ3VzdG9tIGVsZW1lbnRzLlxuICAgIGlmIChpc09iamVjdCh0YWcuZGVmYXVsdFByb3BzKSkge1xuICAgICAgYXR0ciA9IHtcbiAgICAgICAgLi4udGFnLmRlZmF1bHRQcm9wcyxcbiAgICAgICAgLi4uYXR0cixcbiAgICAgIH07XG4gICAgfVxuICAgIG5vZGUgPSBpc0NvbXBvbmVudENsYXNzKHRhZylcbiAgICAgID8gaW5pdENvbXBvbmVudENsYXNzKHRhZywgYXR0ciwgY2hpbGRyZW4pXG4gICAgICA6IHRhZyh7XG4gICAgICAgICAgLi4uYXR0cixcbiAgICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCBKU1ggZWxlbWVudCB0eXBlOiAke3RhZ31gKTtcbiAgfVxuICByZXR1cm4gbm9kZTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnLCBhdHRyKSB7XG4gIGZvciAoXG4gICAgdmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgICAgY2hpbGRyZW4gPSBuZXcgQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLFxuICAgICAgX2tleTIgPSAyO1xuICAgIF9rZXkyIDwgX2xlbjtcbiAgICBfa2V5MisrXG4gICkge1xuICAgIGNoaWxkcmVuW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG4gIGlmIChpc1N0cmluZyhhdHRyKSB8fCBBcnJheS5pc0FycmF5KGF0dHIpKSB7XG4gICAgY2hpbGRyZW4udW5zaGlmdChhdHRyKTtcbiAgICBhdHRyID0ge307XG4gIH1cbiAgYXR0ciA9IGF0dHIgfHwge307XG4gIGlmIChhdHRyLmNoaWxkcmVuICE9IG51bGwgJiYgIWNoaWxkcmVuLmxlbmd0aCkge1xuICAgICh7IGNoaWxkcmVuLCAuLi5hdHRyIH0gPSBhdHRyKTtcbiAgfVxuICByZXR1cm4ganN4KFxuICAgIHRhZyxcbiAgICB7XG4gICAgICAuLi5hdHRyLFxuICAgICAgY2hpbGRyZW4sXG4gICAgfSxcbiAgICBhdHRyLmtleSxcbiAgKTtcbn1cbmZ1bmN0aW9uIGF0dGFjaFJlZihyZWYsIG5vZGUpIHtcbiAgaWYgKGlzUmVmKHJlZikpIHtcbiAgICByZWYuY3VycmVudCA9IG5vZGU7XG4gIH0gZWxzZSBpZiAoaXNGdW5jdGlvbihyZWYpKSB7XG4gICAgcmVmKG5vZGUpO1xuICB9XG59XG5mdW5jdGlvbiBhcHBlbmRDaGlsZChjaGlsZCwgbm9kZSkge1xuICBpZiAoaXNBcnJheUxpa2UoY2hpbGQpKSB7XG4gICAgYXBwZW5kQ2hpbGRyZW4oY2hpbGQsIG5vZGUpO1xuICB9IGVsc2UgaWYgKGlzU3RyaW5nKGNoaWxkKSB8fCBpc051bWJlcihjaGlsZCkpIHtcbiAgICBhcHBlbmRDaGlsZFRvTm9kZShkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZCksIG5vZGUpO1xuICB9IGVsc2UgaWYgKGNoaWxkID09PSBudWxsKSB7XG4gICAgYXBwZW5kQ2hpbGRUb05vZGUoZG9jdW1lbnQuY3JlYXRlQ29tbWVudChcIlwiKSwgbm9kZSk7XG4gIH0gZWxzZSBpZiAoaXNFbGVtZW50KGNoaWxkKSkge1xuICAgIGFwcGVuZENoaWxkVG9Ob2RlKGNoaWxkLCBub2RlKTtcbiAgfSBlbHNlIGlmIChpc1NoYWRvd1Jvb3QoY2hpbGQpKSB7XG4gICAgY29uc3Qgc2hhZG93Um9vdCA9IG5vZGUuYXR0YWNoU2hhZG93KGNoaWxkLmF0dHIpO1xuICAgIGFwcGVuZENoaWxkKGNoaWxkLmNoaWxkcmVuLCBzaGFkb3dSb290KTtcbiAgICBhdHRhY2hSZWYoY2hpbGQucmVmLCBzaGFkb3dSb290KTtcbiAgfVxufVxuZnVuY3Rpb24gYXBwZW5kQ2hpbGRyZW4oY2hpbGRyZW4sIG5vZGUpIHtcbiAgZm9yIChjb25zdCBjaGlsZCBvZiBbLi4uY2hpbGRyZW5dKSB7XG4gICAgYXBwZW5kQ2hpbGQoY2hpbGQsIG5vZGUpO1xuICB9XG4gIHJldHVybiBub2RlO1xufVxuZnVuY3Rpb24gYXBwZW5kQ2hpbGRUb05vZGUoY2hpbGQsIG5vZGUpIHtcbiAgaWYgKG5vZGUgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTFRlbXBsYXRlRWxlbWVudCkge1xuICAgIG5vZGUuY29udGVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gIH0gZWxzZSB7XG4gICAgbm9kZS5hcHBlbmRDaGlsZChjaGlsZCk7XG4gIH1cbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZUF0dHJpYnV0ZShzLCBzZXBhcmF0b3IpIHtcbiAgcmV0dXJuIHMucmVwbGFjZSgvW0EtWl0vZywgKG1hdGNoKSA9PiBzZXBhcmF0b3IgKyBtYXRjaC50b0xvd2VyQ2FzZSgpKTtcbn1cbmZ1bmN0aW9uIHN0eWxlKG5vZGUsIHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09PSBmYWxzZSk7XG4gIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgdmFsdWUuZm9yRWFjaCgodikgPT4gc3R5bGUobm9kZSwgdikpO1xuICB9IGVsc2UgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIG5vZGUuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgdmFsdWUpO1xuICB9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIGZvckVhY2godmFsdWUsICh2YWwsIGtleSkgPT4ge1xuICAgICAgaWYgKGtleS5pbmRleE9mKFwiLVwiKSA9PT0gMCkge1xuICAgICAgICAvLyBDU1MgY3VzdG9tIHByb3BlcnRpZXMgKHZhcmlhYmxlcykgc3RhcnQgd2l0aCBgLWAgKGUuZy4gYC0tbXktdmFyaWFibGVgKVxuICAgICAgICAvLyBhbmQgbXVzdCBiZSBhc3NpZ25lZCB2aWEgYHNldFByb3BlcnR5YC5cbiAgICAgICAgbm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbCk7XG4gICAgICB9IGVsc2UgaWYgKGlzTnVtYmVyKHZhbCkgJiYgaXNVbml0bGVzc051bWJlcltrZXldICE9PSAwKSB7XG4gICAgICAgIG5vZGUuc3R5bGVba2V5XSA9IHZhbCArIFwicHhcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUuc3R5bGVba2V5XSA9IHZhbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24gYXR0cmlidXRlKGtleSwgdmFsdWUsIG5vZGUpIHtcbiAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlIFwieGxpbmtBY3R1YXRlXCI6XG4gICAgY2FzZSBcInhsaW5rQXJjcm9sZVwiOlxuICAgIGNhc2UgXCJ4bGlua0hyZWZcIjpcbiAgICBjYXNlIFwieGxpbmtSb2xlXCI6XG4gICAgY2FzZSBcInhsaW5rU2hvd1wiOlxuICAgIGNhc2UgXCJ4bGlua1RpdGxlXCI6XG4gICAgY2FzZSBcInhsaW5rVHlwZVwiOlxuICAgICAgYXR0ck5TKG5vZGUsIFhMaW5rTmFtZXNwYWNlLCBub3JtYWxpemVBdHRyaWJ1dGUoa2V5LCBcIjpcIiksIHZhbHVlKTtcbiAgICAgIHJldHVybjtcbiAgICBjYXNlIFwieG1sbnNYbGlua1wiOlxuICAgICAgYXR0cihub2RlLCBub3JtYWxpemVBdHRyaWJ1dGUoa2V5LCBcIjpcIiksIHZhbHVlKTtcbiAgICAgIHJldHVybjtcbiAgICBjYXNlIFwieG1sQmFzZVwiOlxuICAgIGNhc2UgXCJ4bWxMYW5nXCI6XG4gICAgY2FzZSBcInhtbFNwYWNlXCI6XG4gICAgICBhdHRyTlMobm9kZSwgWE1MTmFtZXNwYWNlLCBub3JtYWxpemVBdHRyaWJ1dGUoa2V5LCBcIjpcIiksIHZhbHVlKTtcbiAgICAgIHJldHVybjtcbiAgfVxuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgXCJodG1sRm9yXCI6XG4gICAgICBhdHRyKG5vZGUsIFwiZm9yXCIsIHZhbHVlKTtcbiAgICAgIHJldHVybjtcbiAgICBjYXNlIFwiZGF0YXNldFwiOlxuICAgICAgZm9yRWFjaCh2YWx1ZSwgKGRhdGFWYWx1ZSwgZGF0YUtleSkgPT4ge1xuICAgICAgICBpZiAoZGF0YVZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICBub2RlLmRhdGFzZXRbZGF0YUtleV0gPSBkYXRhVmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIGNhc2UgXCJpbm5lckhUTUxcIjpcbiAgICBjYXNlIFwiaW5uZXJUZXh0XCI6XG4gICAgY2FzZSBcInRleHRDb250ZW50XCI6XG4gICAgICBpZiAoaXNWaXNpYmxlQ2hpbGQodmFsdWUpKSB7XG4gICAgICAgIG5vZGVba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIGNhc2UgXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiOlxuICAgICAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICBub2RlLmlubmVySFRNTCA9IHZhbHVlW1wiX19odG1sXCJdO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIGNhc2UgXCJ2YWx1ZVwiOlxuICAgICAgaWYgKHZhbHVlID09IG51bGwgfHwgbm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MU2VsZWN0RWxlbWVudCkge1xuICAgICAgICAvLyBza2lwIG51bGxpc2ggdmFsdWVzXG4gICAgICAgIC8vIGZvciBgPHNlbGVjdD5gIGFwcGx5IHZhbHVlIGFmdGVyIGFwcGVuZGluZyBgPG9wdGlvbj5gIGVsZW1lbnRzXG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAobm9kZSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MVGV4dEFyZWFFbGVtZW50KSB7XG4gICAgICAgIG5vZGUudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gdXNlIGF0dHJpYnV0ZSBmb3Igb3RoZXIgZWxlbWVudHNcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJzcGVsbENoZWNrXCI6XG4gICAgICBub2RlLnNwZWxsY2hlY2sgPSB2YWx1ZTtcbiAgICAgIHJldHVybjtcbiAgICBjYXNlIFwiY2xhc3NcIjpcbiAgICBjYXNlIFwiY2xhc3NOYW1lXCI6XG4gICAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUobm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhdHRyKG5vZGUsIFwiY2xhc3NcIiwgY2xhc3NOYW1lKHZhbHVlKSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgY2FzZSBcInJlZlwiOlxuICAgIGNhc2UgXCJuYW1lc3BhY2VVUklcIjpcbiAgICAgIHJldHVybjtcbiAgICBjYXNlIFwic3R5bGVcIjpcbiAgICAgIHN0eWxlKG5vZGUsIHZhbHVlKTtcbiAgICAgIHJldHVybjtcbiAgICBjYXNlIFwib25cIjpcbiAgICBjYXNlIFwib25DYXB0dXJlXCI6XG4gICAgICBmb3JFYWNoKHZhbHVlLCAoZXZlbnRIYW5kbGVyLCBldmVudE5hbWUpID0+IHtcbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRIYW5kbGVyLCBrZXkgPT09IFwib25DYXB0dXJlXCIpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgLy8gZmFsbHRocm91Z2hcbiAgfVxuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICBpZiAoa2V5WzBdID09PSBcIm9cIiAmJiBrZXlbMV0gPT09IFwiblwiKSB7XG4gICAgICBsZXQgYXR0cmlidXRlID0ga2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgICBjb25zdCB1c2VDYXB0dXJlID0gYXR0cmlidXRlLmVuZHNXaXRoKFwiY2FwdHVyZVwiKTtcbiAgICAgIGlmIChhdHRyaWJ1dGUgPT09IFwib25kb3VibGVjbGlja1wiKSB7XG4gICAgICAgIGF0dHJpYnV0ZSA9IFwib25kYmxjbGlja1wiO1xuICAgICAgfSBlbHNlIGlmICh1c2VDYXB0dXJlICYmIGF0dHJpYnV0ZSA9PT0gXCJvbmRvdWJsZWNsaWNrY2FwdHVyZVwiKSB7XG4gICAgICAgIGF0dHJpYnV0ZSA9IFwib25kYmxjbGlja2NhcHR1cmVcIjtcbiAgICAgIH1cbiAgICAgIGlmICghdXNlQ2FwdHVyZSAmJiBub2RlW2F0dHJpYnV0ZV0gPT09IG51bGwpIHtcbiAgICAgICAgLy8gdXNlIHByb3BlcnR5IHdoZW4gcG9zc2libGUgUFIgIzE3XG4gICAgICAgIG5vZGVbYXR0cmlidXRlXSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIGlmICh1c2VDYXB0dXJlKSB7XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBhdHRyaWJ1dGUuc3Vic3RyaW5nKDIsIGF0dHJpYnV0ZS5sZW5ndGggLSA3KSxcbiAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGV2ZW50TmFtZTtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZSBpbiB3aW5kb3cpIHtcbiAgICAgICAgICAvLyBzdGFuZGFyZCBldmVudFxuICAgICAgICAgIC8vIHRoZSBKU1ggYXR0cmlidXRlIGNvdWxkIGhhdmUgYmVlbiBcIm9uTW91c2VPdmVyXCIgYW5kIHRoZVxuICAgICAgICAgIC8vIG1lbWJlciBuYW1lIFwib25tb3VzZW92ZXJcIiBpcyBvbiB0aGUgd2luZG93J3MgcHJvdG90eXBlXG4gICAgICAgICAgLy8gc28gbGV0J3MgYWRkIHRoZSBsaXN0ZW5lciBcIm1vdXNlb3ZlclwiLCB3aGljaCBpcyBhbGwgbG93ZXJjYXNlZFxuICAgICAgICAgIGNvbnN0IHN0YW5kYXJkRXZlbnROYW1lID0gYXR0cmlidXRlLnN1YnN0cmluZygyKTtcbiAgICAgICAgICBldmVudE5hbWUgPSBzdGFuZGFyZEV2ZW50TmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBjdXN0b20gZXZlbnRcbiAgICAgICAgICAvLyB0aGUgSlNYIGF0dHJpYnV0ZSBjb3VsZCBoYXZlIGJlZW4gXCJvbk15Q3VzdG9tRXZlbnRcIlxuICAgICAgICAgIC8vIHNvIGxldCdzIHRyaW0gb2ZmIHRoZSBcIm9uXCIgcHJlZml4IGFuZCBsb3dlcmNhc2UgdGhlIGZpcnN0IGNoYXJhY3RlclxuICAgICAgICAgIC8vIGFuZCBhZGQgdGhlIGxpc3RlbmVyIFwibXlDdXN0b21FdmVudFwiXG4gICAgICAgICAgLy8gZXhjZXB0IGZvciB0aGUgZmlyc3QgY2hhcmFjdGVyLCB3ZSBrZWVwIHRoZSBldmVudCBuYW1lIGNhc2VcbiAgICAgICAgICBjb25zdCBjdXN0b21FdmVudE5hbWUgPSBhdHRyaWJ1dGVbMl0gKyBrZXkuc2xpY2UoMyk7XG4gICAgICAgICAgZXZlbnROYW1lID0gY3VzdG9tRXZlbnROYW1lO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgbm9kZVtrZXldID0gdmFsdWU7XG4gIH0gZWxzZSBpZiAodmFsdWUgPT09IHRydWUpIHtcbiAgICBhdHRyKG5vZGUsIGtleSwgXCJcIik7XG4gIH0gZWxzZSBpZiAodmFsdWUgIT09IGZhbHNlICYmIHZhbHVlICE9IG51bGwpIHtcbiAgICBpZiAobm9kZSBpbnN0YW5jZW9mIFNWR0VsZW1lbnQgJiYgIW5vblByZXNlbnRhdGlvblNWR0F0dHJpYnV0ZXMudGVzdChrZXkpKSB7XG4gICAgICBhdHRyKG5vZGUsIG5vcm1hbGl6ZUF0dHJpYnV0ZShrZXksIFwiLVwiKSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhdHRyKG5vZGUsIGtleSwgdmFsdWUpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gYXR0cihub2RlLCBrZXksIHZhbHVlKSB7XG4gIG5vZGUuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xufVxuZnVuY3Rpb24gYXR0ck5TKG5vZGUsIG5hbWVzcGFjZSwga2V5LCB2YWx1ZSkge1xuICBub2RlLnNldEF0dHJpYnV0ZU5TKG5hbWVzcGFjZSwga2V5LCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBhdHRyaWJ1dGVzKGF0dHIsIG5vZGUpIHtcbiAgZm9yIChjb25zdCBrZXkgb2Yga2V5cyhhdHRyKSkge1xuICAgIGF0dHJpYnV0ZShrZXksIGF0dHJba2V5XSwgbm9kZSk7XG4gIH1cbiAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIHVzZVRleHQoaW5pdGlhbFZhbHVlKSB7XG4gIGNvbnN0IHRleHQgPSBuZXcgVGV4dCgpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGV4dCwgXCJ0b1N0cmluZ1wiLCB7XG4gICAgdmFsdWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZXh0Q29udGVudDtcbiAgICB9LFxuICB9KTtcbiAgZnVuY3Rpb24gc2V0VGV4dCh2YWx1ZSkge1xuICAgIHRleHQudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgfVxuICBpZiAoaW5pdGlhbFZhbHVlICE9IG51bGwpIHtcbiAgICBzZXRUZXh0KGluaXRpYWxWYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIFt0ZXh0LCBzZXRUZXh0XTtcbn1cbmZ1bmN0aW9uIHVzZUNsYXNzTGlzdChpbml0aWFsVmFsdWUpIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaWYgKGluaXRpYWxWYWx1ZSAhPSBudWxsKSB7XG4gICAgZGl2LmNsYXNzTmFtZSA9IGNsYXNzTmFtZShpbml0aWFsVmFsdWUpO1xuICB9XG4gIGxldCBsaXN0ID0gZGl2LmNsYXNzTGlzdDtcbiAgZnVuY3Rpb24gQ2xhc3NMaXN0KHZhbHVlKSB7XG4gICAgdmFsdWUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgbGlzdC52YWx1ZSk7XG4gICAgbGlzdCA9IHZhbHVlLmNsYXNzTGlzdDtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhcbiAgICBDbGFzc0xpc3QsXG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoe1xuICAgICAgZ2V0IHNpemUoKSB7XG4gICAgICAgIHJldHVybiBsaXN0Lmxlbmd0aDtcbiAgICAgIH0sXG4gICAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiBsaXN0LnZhbHVlO1xuICAgICAgfSxcbiAgICAgIGFkZCgpIHtcbiAgICAgICAgbGlzdC5hZGQoLi4uYXJndW1lbnRzKTtcbiAgICAgIH0sXG4gICAgICByZW1vdmUoKSB7XG4gICAgICAgIGxpc3QucmVtb3ZlKC4uLmFyZ3VtZW50cyk7XG4gICAgICB9LFxuICAgICAgdG9nZ2xlKHRva2VuLCBmb3JjZSkge1xuICAgICAgICBsaXN0LnRvZ2dsZSh0b2tlbiwgZm9yY2UpO1xuICAgICAgfSxcbiAgICAgIGNvbnRhaW5zKHRva2VuKSB7XG4gICAgICAgIHJldHVybiBsaXN0LmNvbnRhaW5zKHRva2VuKTtcbiAgICAgIH0sXG4gICAgfSksXG4gICk7XG4gIHJldHVybiBDbGFzc0xpc3Q7XG59XG5cbmZ1bmN0aW9uIHVzZU1lbW8oZmFjdG9yeSkge1xuICByZXR1cm4gZmFjdG9yeSgpO1xufVxuZnVuY3Rpb24gZm9yd2FyZFJlZihyZW5kZXIpIHtcbiAgcmV0dXJuIChfcmVmKSA9PiB7XG4gICAgbGV0IHsgcmVmLCAuLi5wcm9wcyB9ID0gX3JlZjtcbiAgICByZXR1cm4gcmVuZGVyKHByb3BzLCByZWYgPz8gY3JlYXRlUmVmKCkpO1xuICB9O1xufVxuZnVuY3Rpb24gdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGluaXQpIHtcbiAgYXR0YWNoUmVmKHJlZiwgaW5pdCgpKTtcbn1cblxuY29uc3QgY2FjaGUgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuY29uc3QgY3JlYXRlU3R5bGVkQ29tcG9uZW50ID0gKG5hbWUpID0+XG4gIGZ1bmN0aW9uIChsaXN0KSB7XG4gICAgZm9yIChcbiAgICAgIHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICAgICAgaW50ZXJwb2xhdGlvbnMgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLFxuICAgICAgICBfa2V5ID0gMTtcbiAgICAgIF9rZXkgPCBfbGVuO1xuICAgICAgX2tleSsrXG4gICAgKSB7XG4gICAgICBpbnRlcnBvbGF0aW9uc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuICAgIHJldHVybiAoX3JlZikgPT4ge1xuICAgICAgbGV0IHsgc3R5bGUsIC4uLnByb3BzIH0gPSBfcmVmO1xuICAgICAgY29uc3QgbGFzdEluZGV4ID0gbGlzdC5sZW5ndGggLSAxO1xuICAgICAgY29uc3QgY3NzID1cbiAgICAgICAgbGlzdC5zbGljZSgwLCBsYXN0SW5kZXgpLnJlZHVjZSgocCwgcywgaSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGludGVycG9sYXRpb24gPSBpbnRlcnBvbGF0aW9uc1tpXTtcbiAgICAgICAgICBjb25zdCBjdXJyZW50ID1cbiAgICAgICAgICAgIHR5cGVvZiBpbnRlcnBvbGF0aW9uID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgICAgPyBpbnRlcnBvbGF0aW9uKHByb3BzKVxuICAgICAgICAgICAgICA6IGludGVycG9sYXRpb247XG4gICAgICAgICAgcmV0dXJuIHAgKyBzICsgY3VycmVudDtcbiAgICAgICAgfSwgXCJcIikgKyBsaXN0W2xhc3RJbmRleF07XG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChuYW1lLCB7XG4gICAgICAgIHN0eWxlOiBbY3NzLCBzdHlsZV0sXG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbmNvbnN0IGJhc2VTdHlsZWQgPSAoY3VzdG9tQ29tcG9uZW50KSA9PiBjcmVhdGVTdHlsZWRDb21wb25lbnQoY3VzdG9tQ29tcG9uZW50KTtcbmNvbnN0IHN0eWxlZCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgUHJveHkoYmFzZVN0eWxlZCwge1xuICBnZXQoXywgbmFtZSkge1xuICAgIHJldHVybiBzZXRJZkFic2VudChjYWNoZSwgbmFtZSwgKCkgPT4gY3JlYXRlU3R5bGVkQ29tcG9uZW50KG5hbWUpKTtcbiAgfSxcbn0pO1xuZnVuY3Rpb24gc2V0SWZBYnNlbnQobWFwLCBrZXksIGdldFZhbHVlKSB7XG4gIGlmIChtYXAuaGFzKGtleSkpIHtcbiAgICByZXR1cm4gbWFwLmdldChrZXkpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHZhbHVlID0gZ2V0VmFsdWUoa2V5KTtcbiAgICBtYXAuc2V0KGtleSwgdmFsdWUpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuXG52YXIgaW5kZXggPSB7XG4gIENvbXBvbmVudCxcbiAgUHVyZUNvbXBvbmVudDogQ29tcG9uZW50LFxuICBjcmVhdGVFbGVtZW50LFxuICBGcmFnbWVudCxcbiAgU2hhZG93Um9vdCxcbn07XG5mdW5jdGlvbiBwcmV2ZW50RGVmYXVsdChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICByZXR1cm4gZXZlbnQ7XG59XG5mdW5jdGlvbiBzdG9wUHJvcGFnYXRpb24oZXZlbnQpIHtcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIHJldHVybiBldmVudDtcbn1cblxuZXhwb3J0IHtcbiAgQ29tcG9uZW50LFxuICBGcmFnbWVudCxcbiAgQ29tcG9uZW50IGFzIFB1cmVDb21wb25lbnQsXG4gIFNWR05hbWVzcGFjZSxcbiAgU2hhZG93Um9vdCxcbiAgRnJhZ21lbnQgYXMgU3RyaWN0TW9kZSxcbiAgY2xhc3NOYW1lLFxuICBjcmVhdGVFbGVtZW50LFxuICBjcmVhdGVGYWN0b3J5LFxuICBjcmVhdGVSZWYsXG4gIGluZGV4IGFzIGRlZmF1bHQsXG4gIGZvcndhcmRSZWYsXG4gIGNyZWF0ZUVsZW1lbnQgYXMgaCxcbiAgaXNSZWYsXG4gIGpzeCxcbiAganN4IGFzIGpzeHMsXG4gIGlkZW50aXR5IGFzIG1lbW8sXG4gIHByZXZlbnREZWZhdWx0LFxuICBzdG9wUHJvcGFnYXRpb24sXG4gIHN0eWxlZCxcbiAgaWRlbnRpdHkgYXMgdXNlQ2FsbGJhY2ssXG4gIHVzZUNsYXNzTGlzdCxcbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZSxcbiAgdXNlTWVtbyxcbiAgY3JlYXRlUmVmIGFzIHVzZVJlZixcbiAgdXNlVGV4dCxcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuZXhwb3J0IHsgRnJhZ21lbnQsIGpzeCwganN4IGFzIGpzeERFViwganN4IGFzIGpzeHMgfSBmcm9tIFwianN4LWRvbVwiO1xuIiwiaW1wb3J0ICogYXMgUmVhY3RvciBmcm9tIFwiQG5pa29ub3YtYWxleC9yZWFjdG9yXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5zYXNzXCJcblxuXG5jb25zdCBzdHlsZXNoZWV0ID0gbmV3IENTU1N0eWxlU2hlZXQoKTtcbnN0eWxlc2hlZXQucmVwbGFjZSggc3R5bGVzICk7XG5cblxuXG5cbnR5cGUgU3RhdGUgPSBudW1iZXI7XG5cblxuXG5cbmNvbnN0IHJlbmRlciA9ICggc3RhdGU6IFN0YXRlICk6IEhUTUxFbGVtZW50ID0+XG4gICAgPGRpdj5cbiAgICAgICAgPGRpdj5Db3VudGVyOiB7IHN0YXRlIH08L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cImluY3JlbWVudFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5jcmVtZW50LWJ1dHRvblwiPkluY3JlbWVudDwvYnV0dG9uPlxuICAgIDwvZGl2PiBhcyBIVE1MRWxlbWVudDtcblxuXG5cblxuY29uc3QgaW5jcmVtZW50ID0gKCBzdGF0ZTogU3RhdGUsIGV2ZW50OiBFdmVudCApOiBTdGF0ZSA9PlxuICAgIFwiaW5jcmVtZW50XCIgPT09IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmlkXG4gICAgICAgID8gc3RhdGUgKyAxXG4gICAgICAgIDogc3RhdGU7XG5cblxuXG5cbmNvbnN0IG1ha2UgPSAoKTogUmVhY3Rvci5UeXBlPFN0YXRlPiA9PlxuICAgIFJlYWN0b3IubWFrZSgge1xuICAgICAgICBpbml0aWFsU3RhdGU6IDEsXG4gICAgICAgIHJlbmRlcixcbiAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgICBjbGljazogaW5jcmVtZW50XG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlczogc3R5bGVzaGVldFxuICAgIH0gKTtcblxuXG5leHBvcnQgeyBtYWtlIH07IiwiaW1wb3J0ICogYXMgUmVhY3RvciBmcm9tIFwiQG5pa29ub3YtYWxleC9yZWFjdG9yXCI7XG5pbXBvcnQgKiBhcyBDb3VudGVyIGZyb20gXCIuL2NvdW50ZXJcIjtcblxuXG53aW5kb3cuY291bnRlciA9IENvdW50ZXIubWFrZSgpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggUmVhY3Rvci52aWV3cG9ydCggd2luZG93LmNvdW50ZXIgKSApOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==