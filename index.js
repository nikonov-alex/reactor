var e,t={d:(e,o)=>{for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},o={};t.d(o,{ZU:()=>E,L8:()=>N,wk:()=>y,R9:()=>A});var n="undefined"==typeof document?void 0:document,r=!!n&&"content"in n.createElement("template"),i=!!n&&n.createRange&&"createContextualFragment"in n.createRange();function a(e,t){var o,n,r=e.nodeName,i=t.nodeName;return r===i||(o=r.charCodeAt(0),n=i.charCodeAt(0),o<=90&&n>=97?r===i.toUpperCase():n<=90&&o>=97&&i===r.toUpperCase())}function s(e,t,o){e[o]!==t[o]&&(e[o]=t[o],e[o]?e.setAttribute(o,""):e.removeAttribute(o))}var d={OPTION:function(e,t){var o=e.parentNode;if(o){var n=o.nodeName.toUpperCase();"OPTGROUP"===n&&(n=(o=o.parentNode)&&o.nodeName.toUpperCase()),"SELECT"!==n||o.hasAttribute("multiple")||(e.hasAttribute("selected")&&!t.selected&&(e.setAttribute("selected","selected"),e.removeAttribute("selected")),o.selectedIndex=-1)}s(e,t,"selected")},INPUT:function(e,t){s(e,t,"checked"),s(e,t,"disabled"),e.value!==t.value&&(e.value=t.value),t.hasAttribute("value")||e.removeAttribute("value")},TEXTAREA:function(e,t){var o=t.value;e.value!==o&&(e.value=o);var n=e.firstChild;if(n){var r=n.nodeValue;if(r==o||!o&&r==e.placeholder)return;n.nodeValue=o}},SELECT:function(e,t){if(!t.hasAttribute("multiple")){for(var o,n,r=-1,i=0,a=e.firstChild;a;)if("OPTGROUP"===(n=a.nodeName&&a.nodeName.toUpperCase()))a=(o=a).firstChild;else{if("OPTION"===n){if(a.hasAttribute("selected")){r=i;break}i++}!(a=a.nextSibling)&&o&&(a=o.nextSibling,o=null)}e.selectedIndex=r}}};function l(){}function c(e){if(e)return e.getAttribute&&e.getAttribute("id")||e.id}const u=function(t,o,s){if(s||(s={}),"string"==typeof o)if("#document"===t.nodeName||"HTML"===t.nodeName||"BODY"===t.nodeName){var u=o;(o=n.createElement("html")).innerHTML=u}else f=(f=o).trim(),o=r?function(e){var t=n.createElement("template");return t.innerHTML=e,t.content.childNodes[0]}(f):i?function(t){return e||(e=n.createRange()).selectNode(n.body),e.createContextualFragment(t).childNodes[0]}(f):function(e){var t=n.createElement("body");return t.innerHTML=e,t.childNodes[0]}(f);else 11===o.nodeType&&(o=o.firstElementChild);var f,h=s.getNodeKey||c,v=s.onBeforeNodeAdded||l,p=s.onNodeAdded||l,m=s.onBeforeElUpdated||l,_=s.onElUpdated||l,g=s.onBeforeNodeDiscarded||l,b=s.onNodeDiscarded||l,w=s.onBeforeElChildrenUpdated||l,E=s.skipFromChildren||l,N=s.addChild||function(e,t){return e.appendChild(t)},y=!0===s.childrenOnly,A=Object.create(null),C=[];function T(e){C.push(e)}function S(e,t){if(1===e.nodeType)for(var o=e.firstChild;o;){var n=void 0;t&&(n=h(o))?T(n):(b(o),o.firstChild&&S(o,t)),o=o.nextSibling}}function R(e,t,o){!1!==g(e)&&(t&&t.removeChild(e),b(e),S(e,o))}function U(e){if(1===e.nodeType||11===e.nodeType)for(var t=e.firstChild;t;){var o=h(t);o&&(A[o]=t),U(t),t=t.nextSibling}}function L(e){p(e);for(var t=e.firstChild;t;){var o=t.nextSibling,n=h(t);if(n){var r=A[n];r&&a(t,r)?(t.parentNode.replaceChild(r,t),x(r,t)):L(t)}else L(t);t=o}}function x(e,t,o){var r=h(t);if(r&&delete A[r],!o){var i=m(e,t);if(!1===i)return;if(i instanceof HTMLElement&&U(e=i),function(e,t){var o,n,r,i,a=t.attributes;if(11!==t.nodeType&&11!==e.nodeType){for(var s=a.length-1;s>=0;s--)n=(o=a[s]).name,r=o.namespaceURI,i=o.value,r?(n=o.localName||n,e.getAttributeNS(r,n)!==i&&("xmlns"===o.prefix&&(n=o.name),e.setAttributeNS(r,n,i))):e.getAttribute(n)!==i&&e.setAttribute(n,i);for(var d=e.attributes,l=d.length-1;l>=0;l--)n=(o=d[l]).name,(r=o.namespaceURI)?(n=o.localName||n,t.hasAttributeNS(r,n)||e.removeAttributeNS(r,n)):t.hasAttribute(n)||e.removeAttribute(n)}}(e,t),_(e),!1===w(e,t))return}"TEXTAREA"!==e.nodeName?function(e,t){var o,r,i,s,l,c=E(e,t),u=t.firstChild,f=e.firstChild;e:for(;u;){for(s=u.nextSibling,o=h(u);!c&&f;){if(i=f.nextSibling,u.isSameNode&&u.isSameNode(f)){u=s,f=i;continue e}r=h(f);var p=f.nodeType,m=void 0;if(p===u.nodeType&&(1===p?(o?o!==r&&((l=A[o])?i===l?m=!1:(e.insertBefore(l,f),r?T(r):R(f,e,!0),r=h(f=l)):m=!1):r&&(m=!1),(m=!1!==m&&a(f,u))&&x(f,u)):3!==p&&8!=p||(m=!0,f.nodeValue!==u.nodeValue&&(f.nodeValue=u.nodeValue))),m){u=s,f=i;continue e}r?T(r):R(f,e,!0),f=i}if(o&&(l=A[o])&&a(l,u))c||N(e,l),x(l,u);else{var _=v(u);!1!==_&&(_&&(u=_),u.actualize&&(u=u.actualize(e.ownerDocument||n)),N(e,u),L(u))}u=s,f=i}!function(e,t,o){for(;t;){var n=t.nextSibling;(o=h(t))?T(o):R(t,e,!0),t=n}}(e,f,r);var g=d[e.nodeName];g&&g(e,t)}(e,t):d.TEXTAREA(e,t)}U(t);var k,O,I=t,V=I.nodeType,H=o.nodeType;if(!y)if(1===V)1===H?a(t,o)||(b(t),I=function(e,t){for(var o=e.firstChild;o;){var n=o.nextSibling;t.appendChild(o),o=n}return t}(t,(k=o.nodeName,(O=o.namespaceURI)&&"http://www.w3.org/1999/xhtml"!==O?n.createElementNS(O,k):n.createElement(k)))):I=o;else if(3===V||8===V){if(H===V)return I.nodeValue!==o.nodeValue&&(I.nodeValue=o.nodeValue),I;I=o}if(I===o)b(t);else{if(o.isSameNode&&o.isSameNode(I))return;if(x(I,o,y),C)for(var D=0,P=C.length;D<P;D++){var M=A[C[D]];M&&R(M,M.parentNode,!1)}}return!y&&I!==t&&t.parentNode&&(I.actualize&&(I=I.actualize(t.ownerDocument||n)),t.parentNode.replaceChild(I,t)),I},f={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let h;const v=new Uint8Array(16);function p(){if(!h){if("undefined"==typeof crypto||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");h=crypto.getRandomValues.bind(crypto)}return h(v)}const m=[];for(let e=0;e<256;++e)m.push((e+256).toString(16).slice(1));const _=function(e,t,o){if(f.randomUUID&&!t&&!e)return f.randomUUID();const n=(e=e||{}).random||(e.rng||p)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){o=o||0;for(let e=0;e<16;++e)t[o+e]=n[e];return t}return function(e,t=0){return(m[e[t+0]]+m[e[t+1]]+m[e[t+2]]+m[e[t+3]]+"-"+m[e[t+4]]+m[e[t+5]]+"-"+m[e[t+6]]+m[e[t+7]]+"-"+m[e[t+8]]+m[e[t+9]]+"-"+m[e[t+10]]+m[e[t+11]]+m[e[t+12]]+m[e[t+13]]+m[e[t+14]]+m[e[t+15]]).toLowerCase()}(n)};class g extends HTMLElement{}customElements.define("reactor-viewport",g);class b{_id;_state;_render;_viewport;_shadowRoot;_root;_emit=new Map;_globalEvents=new Map;_localEvents=new Map;_debug;_deferredRedraw=!1;constructor(e){if(this._id=_(),this._state=e.initialState,this._render=e.render,this._viewport=document.createElement("reactor-viewport"),this._viewport.classList.add("viewport"),this._viewport.dataset.id=this._id,this._shadowRoot=this._viewport.attachShadow({mode:"closed",clonable:!0,delegatesFocus:!0}),this._root=this._render(this._state),this._shadowRoot.appendChild(this._root),e.styles&&this._shadowRoot.adoptedStyleSheets.push(e.styles),this._debug=!!e.debug,e.events)for(const t in e.events)Object.hasOwn(e.events,t)&&("function"==typeof e.events[t]?this._localEvents.set(t,e.events[t]):this._globalEvents.set(t,e.events[t].handler));if(e.emit)for(const t of e.emit)this._emit.set(t.when,new Set(Array.isArray(t.emit)?t.emit:[t.emit]));for(const e of this._localEvents.keys())this._shadowRoot.addEventListener(e,this._localEventHandler,!0);for(const e of this._globalEvents.keys())window.addEventListener(e,this._globalEventHandler,!0)}destructor(){for(const e of this._localEvents.keys())this._shadowRoot.removeEventListener(e,this._localEventHandler,!0);for(const e of this._globalEvents.keys())window.removeEventListener(e,this._globalEventHandler,!0)}_localEventHandler(e){this._debug&&console.log("nikonov-components: local event catch",e),["submit"].includes(e.type)&&e.preventDefault(),e.stopImmediatePropagation();const t=this._localEvents.get(e.type);this._changeState(t(this._state,e))}_globalEventHandler(e){this._debug&&console.log("nikonov-components: global event catch",e);const t=this._globalEvents.get(e.type);this._changeState(t(this._state,e))}_redraw(){const e=this._render(this._state);this._debug&&console.log("nikonov-components: redraw",this._root.cloneNode(!0),e.cloneNode(!0)),this._root.isEqualNode(e)||(this._root.nodeName!==e.nodeName?(this._root.replaceWith(e),this._root=e):u(this._root,e,{getNodeKey:e=>e instanceof g?e.dataset.id:e.id,onBeforeNodeAdded:e=>e instanceof g&&e.classList.contains("stub")?e.reference.deref():e,onBeforeElUpdated:(e,t)=>!e.isEqualNode(t)&&(!(t instanceof g)||(t.classList.contains("viewport")?t:t.reference.deref()))}))}_emitEvents(e){for(let[t,o]of this._emit)if(t(e,this._state))for(let e of o)this._viewport.dispatchEvent(e(this._state))}_changeState(e){if(this._state===e)return;const t=this._state;this._state=e,this._deferredRedraw||(setTimeout((()=>{this._redraw(),this._deferredRedraw=!1}),0),this._deferredRedraw=!0),this._emitEvents(t),this._debug&&console.log("nikonov-components: transition from",t,"to",this._state)}}const w=new FinalizationRegistry((e=>{console.log("nikonov-components gc:",e),e.destructor()}));class E{_core;constructor(e){this._core=new b(e),w.register(this,this._core)}}const N=e=>new E(e),y=e=>e._core._state,A=e=>{if(!e._core._viewport.isConnected)return e._core._viewport;const t=document.createElement("reactor-viewport");return t.classList.add("stub"),t.dataset.id=e._core._id,t.reference=new WeakRef(e._core._viewport),t};var C=o.ZU,T=o.L8,S=o.wk,R=o.R9;export{C as Type,T as make,S as state,R as viewport};