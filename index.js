var e,t={d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},n={};t.d(n,{ZU:()=>g,L8:()=>E,ni:()=>y,wk:()=>w,ds:()=>A,R9:()=>N});var o="undefined"==typeof document?void 0:document,r=!!o&&"content"in o.createElement("template"),i=!!o&&o.createRange&&"createContextualFragment"in o.createRange();function a(e,t){var n,o,r=e.nodeName,i=t.nodeName;return r===i||(n=r.charCodeAt(0),o=i.charCodeAt(0),n<=90&&o>=97?r===i.toUpperCase():o<=90&&n>=97&&i===r.toUpperCase())}function s(e,t,n){e[n]!==t[n]&&(e[n]=t[n],e[n]?e.setAttribute(n,""):e.removeAttribute(n))}var d={OPTION:function(e,t){var n=e.parentNode;if(n){var o=n.nodeName.toUpperCase();"OPTGROUP"===o&&(o=(n=n.parentNode)&&n.nodeName.toUpperCase()),"SELECT"!==o||n.hasAttribute("multiple")||(e.hasAttribute("selected")&&!t.selected&&(e.setAttribute("selected","selected"),e.removeAttribute("selected")),n.selectedIndex=-1)}s(e,t,"selected")},INPUT:function(e,t){s(e,t,"checked"),s(e,t,"disabled"),e.value!==t.value&&(e.value=t.value),t.hasAttribute("value")||e.removeAttribute("value")},TEXTAREA:function(e,t){var n=t.value;e.value!==n&&(e.value=n);var o=e.firstChild;if(o){var r=o.nodeValue;if(r==n||!n&&r==e.placeholder)return;o.nodeValue=n}},SELECT:function(e,t){if(!t.hasAttribute("multiple")){for(var n,o,r=-1,i=0,a=e.firstChild;a;)if("OPTGROUP"===(o=a.nodeName&&a.nodeName.toUpperCase()))a=(n=a).firstChild;else{if("OPTION"===o){if(a.hasAttribute("selected")){r=i;break}i++}!(a=a.nextSibling)&&n&&(a=n.nextSibling,n=null)}e.selectedIndex=r}}};function l(){}function c(e){if(e)return e.getAttribute&&e.getAttribute("id")||e.id}const u=function(t,n,s){if(s||(s={}),"string"==typeof n)if("#document"===t.nodeName||"HTML"===t.nodeName||"BODY"===t.nodeName){var u=n;(n=o.createElement("html")).innerHTML=u}else f=(f=n).trim(),n=r?function(e){var t=o.createElement("template");return t.innerHTML=e,t.content.childNodes[0]}(f):i?function(t){return e||(e=o.createRange()).selectNode(o.body),e.createContextualFragment(t).childNodes[0]}(f):function(e){var t=o.createElement("body");return t.innerHTML=e,t.childNodes[0]}(f);else 11===n.nodeType&&(n=n.firstElementChild);var f,h=s.getNodeKey||c,v=s.onBeforeNodeAdded||l,p=s.onNodeAdded||l,m=s.onBeforeElUpdated||l,_=s.onElUpdated||l,b=s.onBeforeNodeDiscarded||l,g=s.onNodeDiscarded||l,E=s.onBeforeElChildrenUpdated||l,w=s.skipFromChildren||l,N=s.addChild||function(e,t){return e.appendChild(t)},y=!0===s.childrenOnly,A=Object.create(null),C=[];function T(e){C.push(e)}function S(e,t){if(1===e.nodeType)for(var n=e.firstChild;n;){var o=void 0;t&&(o=h(n))?T(o):(g(n),n.firstChild&&S(n,t)),n=n.nextSibling}}function U(e,t,n){!1!==b(e)&&(t&&t.removeChild(e),g(e),S(e,n))}function R(e){if(1===e.nodeType||11===e.nodeType)for(var t=e.firstChild;t;){var n=h(t);n&&(A[n]=t),R(t),t=t.nextSibling}}function L(e){p(e);for(var t=e.firstChild;t;){var n=t.nextSibling,o=h(t);if(o){var r=A[o];r&&a(t,r)?(t.parentNode.replaceChild(r,t),x(r,t)):L(t)}else L(t);t=n}}function x(e,t,n){var r=h(t);if(r&&delete A[r],!n){var i=m(e,t);if(!1===i)return;if(i instanceof HTMLElement&&R(e=i),function(e,t){var n,o,r,i,a=t.attributes;if(11!==t.nodeType&&11!==e.nodeType){for(var s=a.length-1;s>=0;s--)o=(n=a[s]).name,r=n.namespaceURI,i=n.value,r?(o=n.localName||o,e.getAttributeNS(r,o)!==i&&("xmlns"===n.prefix&&(o=n.name),e.setAttributeNS(r,o,i))):e.getAttribute(o)!==i&&e.setAttribute(o,i);for(var d=e.attributes,l=d.length-1;l>=0;l--)o=(n=d[l]).name,(r=n.namespaceURI)?(o=n.localName||o,t.hasAttributeNS(r,o)||e.removeAttributeNS(r,o)):t.hasAttribute(o)||e.removeAttribute(o)}}(e,t),_(e),!1===E(e,t))return}"TEXTAREA"!==e.nodeName?function(e,t){var n,r,i,s,l,c=w(e,t),u=t.firstChild,f=e.firstChild;e:for(;u;){for(s=u.nextSibling,n=h(u);!c&&f;){if(i=f.nextSibling,u.isSameNode&&u.isSameNode(f)){u=s,f=i;continue e}r=h(f);var p=f.nodeType,m=void 0;if(p===u.nodeType&&(1===p?(n?n!==r&&((l=A[n])?i===l?m=!1:(e.insertBefore(l,f),r?T(r):U(f,e,!0),r=h(f=l)):m=!1):r&&(m=!1),(m=!1!==m&&a(f,u))&&x(f,u)):3!==p&&8!=p||(m=!0,f.nodeValue!==u.nodeValue&&(f.nodeValue=u.nodeValue))),m){u=s,f=i;continue e}r?T(r):U(f,e,!0),f=i}if(n&&(l=A[n])&&a(l,u))c||N(e,l),x(l,u);else{var _=v(u);!1!==_&&(_&&(u=_),u.actualize&&(u=u.actualize(e.ownerDocument||o)),N(e,u),L(u))}u=s,f=i}!function(e,t,n){for(;t;){var o=t.nextSibling;(n=h(t))?T(n):U(t,e,!0),t=o}}(e,f,r);var b=d[e.nodeName];b&&b(e,t)}(e,t):d.TEXTAREA(e,t)}R(t);var H,O,k=t,I=k.nodeType,V=n.nodeType;if(!y)if(1===I)1===V?a(t,n)||(g(t),k=function(e,t){for(var n=e.firstChild;n;){var o=n.nextSibling;t.appendChild(n),n=o}return t}(t,(H=n.nodeName,(O=n.namespaceURI)&&"http://www.w3.org/1999/xhtml"!==O?o.createElementNS(O,H):o.createElement(H)))):k=n;else if(3===I||8===I){if(V===I)return k.nodeValue!==n.nodeValue&&(k.nodeValue=n.nodeValue),k;k=n}if(k===n)g(t);else{if(n.isSameNode&&n.isSameNode(k))return;if(x(k,n,y),C)for(var D=0,P=C.length;D<P;D++){var M=A[C[D]];M&&U(M,M.parentNode,!1)}}return!y&&k!==t&&t.parentNode&&(k.actualize&&(k=k.actualize(t.ownerDocument||o)),t.parentNode.replaceChild(k,t)),k},f={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let h;const v=new Uint8Array(16);function p(){if(!h){if("undefined"==typeof crypto||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");h=crypto.getRandomValues.bind(crypto)}return h(v)}const m=[];for(let e=0;e<256;++e)m.push((e+256).toString(16).slice(1));const _=function(e,t,n){if(f.randomUUID&&!t&&!e)return f.randomUUID();const o=(e=e||{}).random||(e.rng||p)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=o[e];return t}return function(e,t=0){return(m[e[t+0]]+m[e[t+1]]+m[e[t+2]]+m[e[t+3]]+"-"+m[e[t+4]]+m[e[t+5]]+"-"+m[e[t+6]]+m[e[t+7]]+"-"+m[e[t+8]]+m[e[t+9]]+"-"+m[e[t+10]]+m[e[t+11]]+m[e[t+12]]+m[e[t+13]]+m[e[t+14]]+m[e[t+15]]).toLowerCase()}(o)};class b extends HTMLElement{}customElements.define("reactor-viewport",b);class g{_id;_state;_render;_viewport;_shadowRoot;_root;_emit=new Map;_globalEvents=new Map;_localEvents=new Map;_debug;_deferredRedraw=!1;constructor(e){if(this._id=_(),this._state=e.initialState,this._render=e.render,this._viewport=document.createElement("reactor-viewport"),this._viewport.classList.add("viewport"),this._viewport.dataset.id=this._id,this._shadowRoot=this._viewport.attachShadow({mode:"closed",clonable:!0,delegatesFocus:!0}),this._root=this._render(this._state),this._shadowRoot.appendChild(this._root),e.styles&&this._shadowRoot.adoptedStyleSheets.push(e.styles),this._debug=!!e.debug,this._globalEventHandler=this._globalEventHandler.bind(this),this._localEventHandler=this._localEventHandler.bind(this),e.events)for(const t in e.events)Object.hasOwn(e.events,t)&&("function"==typeof e.events[t]?this._localEvents.set(t,e.events[t]):this._globalEvents.set(t,e.events[t].handler));if(e.emit)for(const t of e.emit)this._emit.set(t.when,new Set(Array.isArray(t.emit)?t.emit:[t.emit]))}_localEventHandler(e){this._debug&&console.log("nikonov-components: local event catch",e),["submit"].includes(e.type)&&e.preventDefault(),e.stopImmediatePropagation();const t=this._localEvents.get(e.type);this._changeState(t(this._state,e))}_globalEventHandler(e){this._debug&&console.log("nikonov-components: global event catch",e);const t=this._globalEvents.get(e.type);this._changeState(t(this._state,e))}_redraw(){const e=this._render(this._state);this._debug&&console.log("nikonov-components: redraw",this._root.cloneNode(!0),e.cloneNode(!0)),this._root.isEqualNode(e)||(this._root.nodeName!==e.nodeName?(this._root.replaceWith(e),this._root=e):u(this._root,e,{getNodeKey:e=>e instanceof b?e.dataset.id:e.id,onBeforeNodeAdded:e=>e instanceof b&&e.classList.contains("stub")?e.reference.deref():e,onBeforeElUpdated:(e,t)=>!e.isEqualNode(t)&&(!(t instanceof b)||(t.classList.contains("viewport")?t:t.reference.deref()))}))}_emitEvents(e){for(let[t,n]of this._emit)if(t(e,this._state))for(let e of n)this._viewport.dispatchEvent(e(this._state))}_changeState(e){if(this._state===e)return;const t=this._state;this._state=e,this._deferredRedraw||(setTimeout((()=>{this._redraw(),this._deferredRedraw=!1}),0),this._deferredRedraw=!0),this._emitEvents(t),this._debug&&console.log("nikonov-components: transition from",t,"to",this._state)}_start(){for(const e of this._localEvents.keys())this._shadowRoot.addEventListener(e,this._localEventHandler,!0);for(const e of this._globalEvents.keys())window.addEventListener(e,this._globalEventHandler,!0)}_stop(){for(const e of this._localEvents.keys())this._shadowRoot.removeEventListener(e,this._localEventHandler,!0);for(const e of this._globalEvents.keys())window.removeEventListener(e,this._globalEventHandler,!0)}}const E=e=>new g(e),w=e=>e._state,N=e=>{if(!e._viewport.isConnected)return e.viewport;const t=document.createElement("reactor-viewport");return t.classList.add("stub"),t.dataset.id=e._id,t.reference=new WeakRef(e._viewport),t},y=e=>(e._start(),e),A=e=>(e._stop(),e);var C=n.ZU,T=n.L8,S=n.ni,U=n.wk,R=n.ds,L=n.R9;export{C as Type,T as make,S as start,U as state,R as stop,L as viewport};