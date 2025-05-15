(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[848],{56882:function(e,t,i){(function(){"use strict";function e(e){var t=0;return function(){return t<e.length?{done:!1,value:e[t++]}:{done:!0}}}var t,r="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,i){return e==Array.prototype||e==Object.prototype||(e[t]=i.value),e},n=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof i.g&&i.g];for(var t=0;t<e.length;++t){var r=e[t];if(r&&r.Math==Math)return r}throw Error("Cannot find global object")}(this);function o(e,t){if(t)e:{var i=n;e=e.split(".");for(var o=0;o<e.length-1;o++){var a=e[o];if(!(a in i))break e;i=i[a]}(t=t(o=i[e=e[e.length-1]]))!=o&&null!=t&&r(i,e,{configurable:!0,writable:!0,value:t})}}function a(t){var i="undefined"!=typeof Symbol&&Symbol.iterator&&t[Symbol.iterator];return i?i.call(t):{next:e(t)}}function s(e){if(!(e instanceof Array)){e=a(e);for(var t,i=[];!(t=e.next()).done;)i.push(t.value);e=i}return e}o("Symbol",function(e){function t(e,t){this.h=e,r(this,"description",{configurable:!0,writable:!0,value:t})}if(e)return e;t.prototype.toString=function(){return this.h};var i="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",n=0;return function e(r){if(this instanceof e)throw TypeError("Symbol is not a constructor");return new t(i+(r||"")+"_"+n++,r)}}),o("Symbol.iterator",function(t){if(t)return t;t=Symbol("Symbol.iterator");for(var i="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),o=0;o<i.length;o++){var a=n[i[o]];"function"==typeof a&&"function"!=typeof a.prototype[t]&&r(a.prototype,t,{configurable:!0,writable:!0,value:function(){var t;return(t={next:t=e(this)})[Symbol.iterator]=function(){return this},t}})}return t});var u="function"==typeof Object.assign?Object.assign:function(e,t){for(var i=1;i<arguments.length;i++){var r=arguments[i];if(r)for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};o("Object.assign",function(e){return e||u});var l,h,d="function"==typeof Object.create?Object.create:function(e){function t(){}return t.prototype=e,new t};if("function"==typeof Object.setPrototypeOf)h=Object.setPrototypeOf;else{e:{var p={};try{p.__proto__={a:!0},J=p.a;break e}catch(e){}J=!1}h=J?function(e,t){if(e.__proto__=t,e.__proto__!==t)throw TypeError(e+" is not extensible");return e}:null}var c=h;function f(e,t){if(e.prototype=d(t.prototype),e.prototype.constructor=e,c)c(e,t);else for(var i in t)if("prototype"!=i){if(Object.defineProperties){var r=Object.getOwnPropertyDescriptor(t,i);r&&Object.defineProperty(e,i,r)}else e[i]=t[i]}e.za=t.prototype}function m(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function g(e){if(e.m)throw TypeError("Generator is already running");e.m=!0}function y(e,t){e.l={ma:t,na:!0},e.h=e.s||e.v}function x(e,t,i){return e.h=i,{value:t}}function v(e){this.h=new m,this.i=e}function b(e,t,i,r){try{var n=t.call(e.h.j,i);if(!(n instanceof Object))throw TypeError("Iterator result "+n+" is not an object");if(!n.done)return e.h.m=!1,n;var o=n.value}catch(t){return e.h.j=null,y(e.h,t),w(e)}return e.h.j=null,r.call(e.h,o),w(e)}function w(e){for(;e.h.h;)try{var t=e.i(e.h);if(t)return e.h.m=!1,{value:t.value,done:!1}}catch(t){e.h.i=void 0,y(e.h,t)}if(e.h.m=!1,e.h.l){if(t=e.h.l,e.h.l=null,t.na)throw t.ma;return{value:t.return,done:!0}}return{value:void 0,done:!0}}function S(e){this.next=function(t){return g(e.h),e.h.j?t=b(e,e.h.j.next,t,e.h.u):(e.h.u(t),t=w(e)),t},this.throw=function(t){return g(e.h),e.h.j?t=b(e,e.h.j.throw,t,e.h.u):(y(e.h,t),t=w(e)),t},this.return=function(t){var i;return g(e.h),(i=e.h.j)?b(e,"return"in i?i.return:function(e){return{value:e,done:!0}},t,e.h.return):(e.h.return(t),w(e))},this[Symbol.iterator]=function(){return this}}function C(e){return function(e){function t(t){return e.next(t)}function i(t){return e.throw(t)}return new Promise(function(r,n){!function e(o){o.done?r(o.value):Promise.resolve(o.value).then(t,i).then(e,n)}(e.next())})}(new S(new v(e)))}function k(e){return e||Array.prototype.fill}m.prototype.u=function(e){this.i=e},m.prototype.return=function(e){this.l={return:e},this.h=this.v},o("Promise",function(e){function t(e){this.i=0,this.j=void 0,this.h=[],this.u=!1;var t=this.l();try{e(t.resolve,t.reject)}catch(e){t.reject(e)}}function i(){this.h=null}function r(e){return e instanceof t?e:new t(function(t){t(e)})}if(e)return e;i.prototype.i=function(e){if(null==this.h){this.h=[];var t=this;this.j(function(){t.m()})}this.h.push(e)};var o=n.setTimeout;i.prototype.j=function(e){o(e,0)},i.prototype.m=function(){for(;this.h&&this.h.length;){var e=this.h;this.h=[];for(var t=0;t<e.length;++t){var i=e[t];e[t]=null;try{i()}catch(e){this.l(e)}}}this.h=null},i.prototype.l=function(e){this.j(function(){throw e})},t.prototype.l=function(){function e(e){return function(r){i||(i=!0,e.call(t,r))}}var t=this,i=!1;return{resolve:e(this.I),reject:e(this.m)}},t.prototype.I=function(e){if(e===this)this.m(TypeError("A Promise cannot resolve to itself"));else if(e instanceof t)this.L(e);else{switch(typeof e){case"object":var i=null!=e;break;case"function":i=!0;break;default:i=!1}i?this.F(e):this.s(e)}},t.prototype.F=function(e){var t=void 0;try{t=e.then}catch(e){this.m(e);return}"function"==typeof t?this.M(t,e):this.s(e)},t.prototype.m=function(e){this.v(2,e)},t.prototype.s=function(e){this.v(1,e)},t.prototype.v=function(e,t){if(0!=this.i)throw Error("Cannot settle("+e+", "+t+"): Promise already settled in state"+this.i);this.i=e,this.j=t,2===this.i&&this.K(),this.H()},t.prototype.K=function(){var e=this;o(function(){if(e.D()){var t=n.console;void 0!==t&&t.error(e.j)}},1)},t.prototype.D=function(){if(this.u)return!1;var e=n.CustomEvent,t=n.Event,i=n.dispatchEvent;return void 0===i||("function"==typeof e?e=new e("unhandledrejection",{cancelable:!0}):"function"==typeof t?e=new t("unhandledrejection",{cancelable:!0}):(e=n.document.createEvent("CustomEvent")).initCustomEvent("unhandledrejection",!1,!0,e),e.promise=this,e.reason=this.j,i(e))},t.prototype.H=function(){if(null!=this.h){for(var e=0;e<this.h.length;++e)s.i(this.h[e]);this.h=null}};var s=new i;return t.prototype.L=function(e){var t=this.l();e.T(t.resolve,t.reject)},t.prototype.M=function(e,t){var i=this.l();try{e.call(t,i.resolve,i.reject)}catch(e){i.reject(e)}},t.prototype.then=function(e,i){function r(e,t){return"function"==typeof e?function(t){try{n(e(t))}catch(e){o(e)}}:t}var n,o,a=new t(function(e,t){n=e,o=t});return this.T(r(e,n),r(i,o)),a},t.prototype.catch=function(e){return this.then(void 0,e)},t.prototype.T=function(e,t){function i(){switch(r.i){case 1:e(r.j);break;case 2:t(r.j);break;default:throw Error("Unexpected state: "+r.i)}}var r=this;null==this.h?s.i(i):this.h.push(i),this.u=!0},t.resolve=r,t.reject=function(e){return new t(function(t,i){i(e)})},t.race=function(e){return new t(function(t,i){for(var n=a(e),o=n.next();!o.done;o=n.next())r(o.value).T(t,i)})},t.all=function(e){var i=a(e),n=i.next();return n.done?r([]):new t(function(e,t){var o=[],a=0;do o.push(void 0),a++,r(n.value).T(function(t){return function(i){o[t]=i,0==--a&&e(o)}}(o.length-1),t),n=i.next();while(!n.done)})},t}),o("Array.prototype.keys",function(e){return e||function(){var e,t,i,r,n;return e=this,t=function(e){return e},e instanceof String&&(e+=""),i=0,r=!1,(n={next:function(){if(!r&&i<e.length){var n=i++;return{value:t(n,e[n]),done:!1}}return r=!0,{done:!0,value:void 0}}})[Symbol.iterator]=function(){return n},n}}),o("Array.prototype.fill",function(e){return e||function(e,t,i){var r=this.length||0;for(0>t&&(t=Math.max(0,r+t)),(null==i||i>r)&&(i=r),0>(i=Number(i))&&(i=Math.max(0,r+i)),t=Number(t||0);t<i;t++)this[t]=e;return this}}),o("Int8Array.prototype.fill",k),o("Uint8Array.prototype.fill",k),o("Uint8ClampedArray.prototype.fill",k),o("Int16Array.prototype.fill",k),o("Uint16Array.prototype.fill",k),o("Int32Array.prototype.fill",k),o("Uint32Array.prototype.fill",k),o("Float32Array.prototype.fill",k),o("Float64Array.prototype.fill",k),o("Object.is",function(e){return e||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}}),o("Array.prototype.includes",function(e){return e||function(e,t){var i=this;i instanceof String&&(i=String(i));var r=i.length;for(0>(t=t||0)&&(t=Math.max(t+r,0));t<r;t++){var n=i[t];if(n===e||Object.is(n,e))return!0}return!1}}),o("String.prototype.includes",function(e){return e||function(e,t){if(null==this)throw TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(e instanceof RegExp)throw TypeError("First argument to String.prototype.includes must not be a regular expression");return -1!==this.indexOf(e,t||0)}});var I=this||self;function R(e,t){e=e.split(".");var i,r=I;for((e[0]in r)||void 0===r.execScript||r.execScript("var "+e[0]);e.length&&(i=e.shift());)e.length||void 0===t?r=r[i]&&r[i]!==Object.prototype[i]?r[i]:r[i]={}:r[i]=t}function P(e){var t;return(t=I.navigator)&&(t=t.userAgent)||(t=""),-1!=t.indexOf(e)}var $=Array.prototype.map?function(e,t){return Array.prototype.map.call(e,t,void 0)}:function(e,t){for(var i=e.length,r=Array(i),n="string"==typeof e?e.split(""):e,o=0;o<i;o++)o in n&&(r[o]=t.call(void 0,n[o],o,e));return r},A={},T=null;function _(){if(!T){T={};for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=["+/=","+/","-_=","-_.","-_"],i=0;5>i;i++){var r=e.concat(t[i].split(""));A[i]=r;for(var n=0;n<r.length;n++){var o=r[n];void 0===T[o]&&(T[o]=n)}}}}var N="undefined"!=typeof Uint8Array,F=!(P("Trident")||P("MSIE"))&&"function"==typeof I.btoa;function z(e){if(!F){var t;void 0===t&&(t=0),_(),t=A[t];for(var i=Array(Math.floor(e.length/3)),r=t[64]||"",n=0,o=0;n<e.length-2;n+=3){var a=e[n],s=e[n+1],u=e[n+2],l=t[a>>2];a=t[(3&a)<<4|s>>4],s=t[(15&s)<<2|u>>6],u=t[63&u],i[o++]=l+a+s+u}switch(l=0,u=r,e.length-n){case 2:u=t[(15&(l=e[n+1]))<<2]||r;case 1:e=e[n],i[o]=t[e>>2]+t[(3&e)<<4|l>>4]+u+r}return i.join("")}for(t="";10240<e.length;)t+=String.fromCharCode.apply(null,e.subarray(0,10240)),e=e.subarray(10240);return btoa(t+=String.fromCharCode.apply(null,e))}var D=RegExp("[-_.]","g");function E(e){switch(e){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function L(e){if(!F){var t,i,r,n,o;return(r=3*(i=(t=e).length)/4)%3?r=Math.floor(r):-1!="=.".indexOf(t[i-1])&&(r=-1!="=.".indexOf(t[i-2])?r-2:r-1),n=new Uint8Array(r),o=0,function(e,t){function i(t){for(;r<e.length;){var i=e.charAt(r++),n=T[i];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(i))throw Error("Unknown base64 encoding at char: "+i)}return t}_();for(var r=0;;){var n=i(-1),o=i(0),a=i(64),s=i(64);if(64===s&&-1===n)break;t(n<<2|o>>4),64!=a&&(t(o<<4&240|a>>2),64!=s&&t(a<<6&192|s))}}(t,function(e){n[o++]=e}),o!==r?n.subarray(0,o):n}D.test(e)&&(e=e.replace(D,E)),e=atob(e);for(var a=new Uint8Array(e.length),s=0;s<e.length;s++)a[s]=e.charCodeAt(s);return a}function O(){return ee||(ee=new Uint8Array(0))}var U={},M="function"==typeof Uint8Array.prototype.slice,B=0,W=0;function V(e){var t=0>e,i=(e=Math.abs(e))>>>0;e=Math.floor((e-i)/4294967296),t&&(t=(i=a(G(i,e))).next().value,e=i.next().value,i=t),B=i>>>0,W=e>>>0}var H="function"==typeof BigInt;function G(e,t){return t=~t,e?e=~e+1:t+=1,[e,t]}function j(e,t){this.i=e>>>0,this.h=t>>>0}function X(e){if(!e)return et||(et=new j(0,0));if(!/^-?\d+$/.test(e))return null;if(16>e.length)V(Number(e));else if(H)B=Number((e=BigInt(e))&BigInt(4294967295))>>>0,W=Number(e>>BigInt(32)&BigInt(4294967295));else{var t=+("-"===e[0]);W=B=0;for(var i=e.length,r=t,n=(i-t)%6+t;n<=i;r=n,n+=6)r=Number(e.slice(r,n)),W*=1e6,4294967296<=(B=1e6*B+r)&&(W+=B/4294967296|0,B%=4294967296);t&&(e=(t=a(G(B,W))).next().value,t=t.next().value,B=e,W=t)}return new j(B,W)}function K(e,t){return Error("Invalid wire type: "+e+" (at position "+t+")")}function Y(){return Error("Failed to read varint, encoding is invalid.")}function q(e,t){return Error("Tried to read past the end of the data "+t+" > "+e)}function Q(){throw Error("Invalid UTF8")}function Z(e,t){return t=String.fromCharCode.apply(null,t),null==e?t:e+t}var J,ee,et,ei,er,en=void 0,eo="undefined"!=typeof TextDecoder,ea="undefined"!=typeof TextEncoder;function es(e){if(e!==U)throw Error("illegal external caller")}function eu(e,t){if(es(t),this.V=e,null!=e&&0===e.length)throw Error("ByteString should be constructed with non-empty values")}function el(){return ez||(ez=new eu(null,U))}function eh(e){es(U);var t=e.V;return null==(t=null==t||N&&null!=t&&t instanceof Uint8Array?t:"string"==typeof t?L(t):null)?t:e.V=t}function ed(e,t){this.i=null,this.m=!1,this.h=this.j=this.l=0,ep(this,e,t)}function ep(e,t,i){i=void 0===i?{}:i,e.S=void 0!==i.S&&i.S,t&&(t=function(e){if("string"==typeof e)return{buffer:L(e),C:!1};if(Array.isArray(e))return{buffer:new Uint8Array(e),C:!1};if(e.constructor===Uint8Array)return{buffer:e,C:!1};if(e.constructor===ArrayBuffer)return{buffer:new Uint8Array(e),C:!1};if(e.constructor===eu)return{buffer:eh(e)||O(),C:!0};if(e instanceof Uint8Array)return{buffer:new Uint8Array(e.buffer,e.byteOffset,e.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}(t),e.i=t.buffer,e.m=t.C,e.l=0,e.j=e.i.length,e.h=e.l)}function ec(e,t){if(e.h=t,t>e.j)throw q(e.j,t)}function ef(e){var t=e.i,i=e.h,r=t[i++],n=127&r;if(128&r&&(n|=(127&(r=t[i++]))<<7,128&r&&(n|=(127&(r=t[i++]))<<14,128&r&&(n|=(127&(r=t[i++]))<<21,128&r&&(n|=(r=t[i++])<<28,128&r&&128&t[i++]&&128&t[i++]&&128&t[i++]&&128&t[i++]&&128&t[i++])))))throw Y();return ec(e,i),n}function em(e,t){if(0>t)throw Error("Tried to read a negative byte length: "+t);var i=e.h,r=i+t;if(r>e.j)throw q(t,e.j-i);return e.h=r,i}ed.prototype.reset=function(){this.h=this.l};var eg=[];function ey(){this.h=[]}function ex(e,t,i){for(;0<i||127<t;)e.h.push(127&t|128),t=(t>>>7|i<<25)>>>0,i>>>=7;e.h.push(t)}function ev(e,t){for(;127<t;)e.h.push(127&t|128),t>>>=7;e.h.push(t)}function eb(e,t){if(eg.length){var i=eg.pop();ep(i,e,t),e=i}else e=new ed(e,t);this.h=e,this.j=this.h.h,this.i=this.l=-1,this.setOptions(t)}function ew(e){var t=e.h;if(t.h==t.j)return!1;e.j=e.h.h;var i=ef(e.h)>>>0;if(t=i>>>3,!(0<=(i&=7)&&5>=i))throw K(i,e.j);if(1>t)throw Error("Invalid field number: "+t+" (at position "+e.j+")");return e.l=t,e.i=i,!0}ey.prototype.length=function(){return this.h.length},ey.prototype.end=function(){var e=this.h;return this.h=[],e},eb.prototype.setOptions=function(e){e=void 0===e?{}:e,this.ca=void 0!==e.ca&&e.ca},eb.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};var eS=[];function eC(){this.j=[],this.i=0,this.h=new ey}function ek(e,t){0!==t.length&&(e.j.push(t),e.i+=t.length)}var eI="function"==typeof Symbol&&"symbol"==typeof Symbol()?Symbol():void 0;function eR(e,t){return eI?e[eI]|=t:void 0!==e.A?e.A|=t:(Object.defineProperties(e,{A:{value:t,configurable:!0,writable:!0,enumerable:!1}}),t)}function eP(e,t){eI?e[eI]&&(e[eI]&=~t):void 0!==e.A&&(e.A&=~t)}function e$(e){var t;return null==(t=eI?e[eI]:e.A)?0:t}function eA(e,t){eI?e[eI]=t:void 0!==e.A?e.A=t:Object.defineProperties(e,{A:{value:t,configurable:!0,writable:!0,enumerable:!1}})}function eT(e,t){eA(t,(0|e)&-51)}function e_(e,t){eA(t,(18|e)&-41)}var eN={};function eF(e){return null!==e&&"object"==typeof e&&!Array.isArray(e)&&e.constructor===Object}var ez,eD,eE=[];function eL(e){if(2&e$(e.o))throw Error("Cannot mutate an immutable Message")}function eO(e){var t=e.length;(t=t?e[t-1]:void 0)&&eF(t)?t.g=1:(t={},e.push((t.g=1,t)))}function eU(e){var t=e.i+e.G;return e.B||(e.B=e.o[t]={})}function eM(e,t){return -1===t?null:t>=e.i?e.B?e.B[t]:void 0:e.o[t+e.G]}function eB(e,t,i,r){eL(e),eW(e,t,i,r)}function eW(e,t,i,r){e.j&&(e.j=void 0),t>=e.i||r?eU(e)[t]=i:(e.o[t+e.G]=i,(e=e.B)&&t in e&&delete e[t])}function eV(e,t,i,r){var n=eM(e,t);Array.isArray(n)||(n=eD);var o=e$(n);if(1&o||eR(n,1),r)2&o||eR(n,2),1&i||Object.freeze(n);else{r=!(2&i);var a,s=2&o;1&i||!s?r&&16&o&&!s&&eP(n,16):(eR(a=Array.prototype.slice.call(n),1),eW(e,t,n=a))}return n}function eH(e,t){var i=eM(e,t),r=null==i?i:"number"==typeof i||"NaN"===i||"Infinity"===i||"-Infinity"===i?Number(i):void 0;return null!=r&&r!==i&&eW(e,t,r),r}function eG(e,t,i,r,n){e.h||(e.h={});var o=e.h[i],a=eV(e,i,3,n);if(!o){var s=a;o=[];var u=!!(16&e$(e.o));a=!!(2&e$(s));var l=s;!n&&a&&(s=Array.prototype.slice.call(s));for(var h=a,d=0;d<s.length;d++){var p=s[d],c=t,f=!1;if(void 0!==(p=Array.isArray(p)?new c(p):f?new c:void 0)){var m=f=e$(c=p.o);a&&(m|=2),u&&(m|=16),m!=f&&eA(c,m),c=m,h=h||!!(2&c),o.push(p)}}return e.h[i]=o,t=33|(u=e$(s)),u!=(t=h?-9&t:8|t)&&(Object.isFrozen(h=s)&&(h=Array.prototype.slice.call(h)),eA(h,t),s=h),l!==s&&eW(e,i,s),(n||r&&a)&&eR(o,2),r&&Object.freeze(o),o}return n||(n=Object.isFrozen(o),r&&!n?Object.freeze(o):!r&&n&&(o=Array.prototype.slice.call(o),e.h[i]=o)),o}function ej(e,t,i){var r=!!(2&e$(e.o));if(t=eG(e,t,i,r,r),e=eV(e,i,3,r),!(r||8&e$(e))){for(r=0;r<t.length;r++){if(2&e$((i=t[r]).o)){var n=e1(i,!1);n.j=i}else n=i;i!==n&&(t[r]=n,e[r]=n.o)}eR(e,8)}return t}function eX(e,t,i){if(null!=i&&"number"!=typeof i)throw Error("Value of float/double field must be a number|null|undefined, found "+typeof i+": "+i);eB(e,t,i)}function eK(e,t,i,r,n){eL(e);var o=eG(e,i,t,!1,!1);return i=null!=r?r:new i,e=eV(e,t,2,!1),void 0!=n?(o.splice(n,0,i),e.splice(n,0,i.o)):(o.push(i),e.push(i.o)),i.C()&&eP(e,8),i}function eY(e,t){return null==e?t:e}function eq(e,t,i){return i=void 0===i?0:i,eY(eH(e,t),i)}function eQ(e,t,i,r){var n=e$(e);r=r?!!(16&n):void 0,e=Array.prototype.slice.call(e);for(var o=0;o<e.length;o++)e[o]=function e(t,i,r,n){if(null!=t){if(Array.isArray(t))t=eQ(t,i,r,void 0!==n);else if(eF(t)){var o,a={};for(o in t)a[o]=e(t[o],i,r,n);t=a}else t=i(t,n);return t}}(e[o],t,i,r);return i(n,e),e}function eZ(e){return e.ja===eN?e.toJSON():function(e){switch(typeof e){case"number":return isFinite(e)?e:String(e);case"object":if(e){if(Array.isArray(e)){if(0!=(128&e$(e)))return eO(e=Array.prototype.slice.call(e)),e}else{if(N&&null!=e&&e instanceof Uint8Array)return z(e);if(e instanceof eu){var t=e.V;return null==t?"":"string"==typeof t?t:e.V=z(t)}}}}return e}(e)}function eJ(e,t){128&e&&eO(t)}function e0(e,t,i,r,n,o,a){if(e=e.h&&e.h[i]){var s;if(2&(r=e$(e))?r=e:(e_(r,o=$(e,e2)),Object.freeze(o),r=o),eL(t),a=null==r?eD:(eR(s=[],1),s),null!=r){for(e=0,o=!!r.length;e<r.length;e++){var u=r[e];o=o&&!(2&e$(u.o)),a[e]=u.o}o=(o?8:0)|1,((e=e$(a))&o)!==o&&(Object.isFrozen(a)&&(a=Array.prototype.slice.call(a)),eA(a,e|o)),t.h||(t.h={}),t.h[i]=r}else t.h&&(t.h[i]=void 0);eW(t,i,a,n)}else eB(t,i,function e(t,i,r){if(r=void 0===r?e_:r,null!=t){if(N&&t instanceof Uint8Array)return t.length?new eu(new Uint8Array(t),U):el();if(Array.isArray(t)){var n=e$(t);return 2&n||(i&&!(32&n)&&(16&n||0===n)?eA(t,2|n):4&(i=e$(t=eQ(t,e,4&n?e_:r,!0)))&&2&i&&Object.freeze(t)),t}return t.ja===eN?e2(t):t}}(r,o,a),n)}function e2(e){return 2&e$(e.o)||eR((e=e1(e,!0)).o,2),e}function e1(e,i){var r=e.o,n=[];eR(n,16);var o=e.constructor.h;if(o&&n.push(o),o=e.B){n.length=r.length,n.fill(void 0,n.length,r.length);var a={};n[n.length-1]=a}0!=(128&e$(r))&&eO(n),i=i||e.C()?e_:eT,a=e.constructor,t=n,n=new a(n),t=void 0,e.R&&(n.R=e.R.slice()),a=!!(16&e$(r));for(var s=o?r.length-1:r.length,u=0;u<s;u++)e0(e,n,u-e.G,r[u],!1,a,i);if(o)for(var l in o)e0(e,n,+l,o[l],!0,a,i);return n}function e3(e,i,r){null==e&&(e=t),t=void 0;var n,o=this.constructor.i||0,a=0<o,s=this.constructor.h,u=!1;if(null==e){var l=48,h=!0;a&&(o=0,l|=128),eA(e=s?[s]:[],l)}else{if(!Array.isArray(e)||s&&s!==e[0])throw Error();var d=l=eR(e,0);if((h=0!=(16&d))&&((u=0!=(32&d))||(d|=32)),a){if(128&d)o=0;else if(0<e.length){var p=e[e.length-1];if(eF(p)&&"g"in p){o=0,d|=128,delete p.g;var c,f=!0;for(c in p){f=!1;break}f&&e.pop()}}}else if(128&d)throw Error();l!==d&&eA(e,d)}this.G=(s?0:-1)-o,this.h=void 0,this.o=e;e:{if(o=(s=this.o.length)-1,s&&eF(s=this.o[o])){this.B=s,this.i=o-this.G;break e}void 0!==i&&-1<i?(this.i=Math.max(i,o+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!a&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(r)for(i=h&&!u&&!0,a=this.i,h=0;h<r.length;h++)(u=r[h])<a?(u+=this.G,(o=e[u])?e4(o,i):e[u]=eD):(n||(n=eU(this)),(o=n[u])?e4(o,i):n[u]=eD)}function e4(e,t){if(Array.isArray(e)){var i=e$(e),r=1;!t||2&i||(r|=16),(i&r)!==r&&eA(e,i|r)}}function e5(e,t,i){if(i){var r,n={};for(r in i){var o=i[r],a=o.ra;a||(n.J=o.xa||o.oa.W,o.ia?(n.aa=ti(o.ia),a=function(e){return function(t,i,r){return e.J(t,i,r,e.aa)}}(n)):o.ka?(n.Z=tr(o.da.P,o.ka),a=function(e){return function(t,i,r){return e.J(t,i,r,e.Z)}}(n)):a=n.J,o.ra=a),a(t,e,o.da),n={J:n.J,aa:n.aa,Z:n.Z}}}!function(e,t){if(t=t.R){ek(e,e.h.end());for(var i=0;i<t.length;i++)ek(e,eh(t[i])||O())}}(t,e)}eA(eE,23),eD=Object.freeze(eE),e3.prototype.toJSON=function(){return eQ(this.o,eZ,eJ)},e3.prototype.C=function(){return!!(2&e$(this.o))},e3.prototype.ja=eN,e3.prototype.toString=function(){return this.o.toString()};var e6=Symbol();function e8(e,t,i){return e[e6]||(e[e6]=function(e,r){return t(e,r,i)})}function e7(e){var t=e[e6];if(!t){var i=tm(e);t=function(e,t){return tg(e,t,i)},e[e6]=t}return t}function e9(e,t){var i=e[t];return"function"==typeof i&&0===i.length&&(i=i(),e[t]=i),Array.isArray(i)&&(th in i||tn in i||0<i.length&&"function"==typeof i[0])?i:void 0}function te(e,t,i,r,n,o){t.P=e[0];var a=1;if(e.length>a&&"number"!=typeof e[a]){var s=e[a++];i(t,s)}for(;a<e.length;){i=e[a++];for(var u=a+1;u<e.length&&"number"!=typeof e[u];)u++;switch(s=e[a++],u-=a){case 0:r(t,i,s);break;case 1:(u=e9(e,a))?(a++,n(t,i,s,u)):r(t,i,s,e[a++]);break;case 2:n(t,i,s,u=e9(e,u=a++),e[a++]);break;case 3:o(t,i,s,e[a++],e[a++],e[a++]);break;case 4:o(t,i,s,e[a++],e[a++],e[a++],e[a++]);break;default:throw Error("unexpected number of binary field arguments: "+u)}}return t}var tt=Symbol();function ti(e){var t=e[tt];if(!t){var i=tl(e);t=function(e,t){return ty(e,t,i)},e[tt]=t}return t}function tr(e,t){var i=e[tt];return i||(i=function(e,i){return e5(e,i,t)},e[tt]=i),i}var tn=Symbol();function to(e,t){e.push(t)}function ta(e,t,i){e.push(t,i.W)}function ts(e,t,i,r){var n=ti(r),o=tl(r).P,a=i.W;e.push(t,function(e,t,i){return a(e,t,i,o,n)})}function tu(e,t,i,r,n,o){var a=tr(r,o),s=i.W;e.push(t,function(e,t,i){return s(e,t,i,r,a)})}function tl(e){var t=e[tn];return t||(t=te(e,e[tn]=[],to,ta,ts,tu),th in e&&tn in e&&(e.length=0)),t}var th=Symbol();function td(e,t){e[0]=t}function tp(e,t,i,r){var n=i.U;e[t]=r?function(e,t,i){return n(e,t,i,r)}:n}function tc(e,t,i,r,n){var o=i.U,a=e7(r),s=tm(r).P;e[t]=function(e,t,i){return o(e,t,i,s,a,n)}}function tf(e,t,i,r,n,o,a){var s=i.U,u=e8(r,n,o);e[t]=function(e,t,i){return s(e,t,i,r,u,a)}}function tm(e){var t=e[th];return t||(t=te(e,e[th]={},td,tp,tc,tf),th in e&&tn in e&&(e.length=0)),t}function tg(e,t,i){for(;ew(t)&&4!=t.i;){var r=t.l,n=i[r];if(!n){var o=i[0];o&&(o=o[r])&&(n=i[r]=function(e){var t,i=(t=e.ia)?e7(t):(t=e.wa)?e8(e.da.P,t,e.ka):void 0,r=e.da,n=e.oa.U;return i?function(e,t){return n(e,t,r,i)}:function(e,t){return n(e,t,r)}}(o))}if(!n||!n(t,e,r)){n=t,r=e,o=n.j,function e(t){switch(t.i){case 0:if(0!=t.i)e(t);else e:{t=t.h;for(var i=t.h,r=i+10,n=t.i;i<r;)if(0==(128&n[i++])){ec(t,i);break e}throw Y()}break;case 1:ec(t=t.h,t.h+8);break;case 2:2!=t.i?e(t):(i=ef(t.h)>>>0,ec(t=t.h,t.h+i));break;case 5:ec(t=t.h,t.h+4);break;case 3:for(i=t.l;;){if(!ew(t))throw Error("Unmatched start-group tag: stream EOF");if(4==t.i){if(t.l!=i)throw Error("Unmatched end-group tag");break}e(t)}break;default:throw K(t.i,t.j)}}(n);var a=n;if(!a.ca){if(n=a.h.h-o,a.h.h=o,a=a.h,0==n)n=el();else{if(o=em(a,n),a.S&&a.m)n=a.i.subarray(o,o+n);else{a=a.i;var s=o;n=s===(n=o+n)?O():M?a.slice(s,n):new Uint8Array(a.subarray(s,n))}n=0==n.length?el():new eu(n,U)}(o=r.R)?o.push(n):r.R=[n]}}}return e}function ty(e,t,i){for(var r=i.length,n=1==r%2,o=n?1:0;o<r;o+=2)(0,i[o+1])(t,e,i[o]);e5(e,t,n?i[0]:void 0)}function tx(e,t){return{U:e,W:t}}var tv=tx(function(e,t,i){if(5!==e.i)return!1;var r=(e=e.h).i,n=e.h,o=r[n],a=r[n+1],s=r[n+2];return r=r[n+3],ec(e,e.h+4),e=2*((a=(o<<0|a<<8|s<<16|r<<24)>>>0)>>31)+1,o=a>>>23&255,a&=8388607,eB(t,i,255==o?a?NaN:1/0*e:0==o?1401298464324817e-60*e*a:e*Math.pow(2,o-150)*(a+8388608)),!0},function(e,t,i){if(null!=(t=eH(t,i))){ev(e.h,8*i+5),e=e.h;var r=+t;0===r?0<1/r?B=W=0:(W=0,B=2147483648):isNaN(r)?(W=0,B=2147483647):34028234663852886e22<(r=(i=0>r?-2147483648:0)?-r:r)?(W=0,B=(2139095040|i)>>>0):11754943508222875e-54>r?(W=0,B=(i|(r=Math.round(r/1401298464324817e-60)))>>>0):(t=Math.floor(Math.log(r)/Math.LN2),r*=Math.pow(2,-t),16777216<=(r=Math.round(8388608*r))&&++t,W=0,B=(i|t+127<<23|8388607&r)>>>0),i=B,e.h.push(i>>>0&255),e.h.push(i>>>8&255),e.h.push(i>>>16&255),e.h.push(i>>>24&255)}}),tb=tx(function(e,t,i){if(0!==e.i)return!1;var r=e.h,n=0,o=e=0,a=r.i,s=r.h;do{var u=a[s++];n|=(127&u)<<o,o+=7}while(32>o&&128&u);for(32<o&&(e|=(127&u)>>4),o=3;32>o&&128&u;o+=7)e|=(127&(u=a[s++]))<<o;if(ec(r,s),128>u)r=n>>>0,(e=2147483648&(u=e>>>0))&&(u=~u>>>0,0==(r=~r+1>>>0)&&(u=u+1>>>0)),r=4294967296*u+(r>>>0);else throw Y();return eB(t,i,e?-r:r),!0},function(e,t,i){null!=(t=eM(t,i))&&("string"==typeof t&&X(t),null!=t&&(ev(e.h,8*i),"number"==typeof t?(e=e.h,V(t),ex(e,B,W)):(i=X(t),ex(e.h,i.i,i.h))))}),tw=tx(function(e,t,i){return 0===e.i&&(eB(t,i,ef(e.h)),!0)},function(e,t,i){if(null!=(t=eM(t,i))&&null!=t){if(ev(e.h,8*i),e=e.h,0<=(i=t))ev(e,i);else{for(t=0;9>t;t++)e.h.push(127&i|128),i>>=7;e.h.push(1)}}}),tS=tx(function(e,t,i){if(2!==e.i)return!1;var r=ef(e.h)>>>0,n=em(e=e.h,r);if(e=e.i,eo){var o,a=e;(o=ei)||(o=ei=new TextDecoder("utf-8",{fatal:!0})),e=n+r,a=0===n&&e===a.length?a:a.subarray(n,e);try{var s=o.decode(a)}catch(e){if(void 0===en){try{o.decode(new Uint8Array([128]))}catch(e){}try{o.decode(new Uint8Array([97])),en=!0}catch(e){en=!1}}throw en||(ei=void 0),e}}else{r=(s=n)+r,n=[];for(var u,l,h=null;s<r;)128>(u=e[s++])?n.push(u):224>u?s>=r?Q():(l=e[s++],194>u||128!=(192&l)?(s--,Q()):n.push((31&u)<<6|63&l)):240>u?s>=r-1?Q():128!=(192&(l=e[s++]))||224===u&&160>l||237===u&&160<=l||128!=(192&(a=e[s++]))?(s--,Q()):n.push((15&u)<<12|(63&l)<<6|63&a):244>=u?s>=r-2?Q():128!=(192&(l=e[s++]))||0!=(u<<28)+(l-144)>>30||128!=(192&(a=e[s++]))||128!=(192&(o=e[s++]))?(s--,Q()):(u=((7&u)<<18|(63&l)<<12|(63&a)<<6|63&o)-65536,n.push((u>>10&1023)+55296,(1023&u)+56320)):Q(),8192<=n.length&&(h=Z(h,n),n.length=0);s=Z(h,n)}return eB(t,i,s),!0},function(e,t,i){if(null!=(t=eM(t,i))){if(ea)t=(er||(er=new TextEncoder)).encode(t);else{for(var r=0,n=new Uint8Array(3*t.length),o=0;o<t.length;o++){var a=t.charCodeAt(o);if(128>a)n[r++]=a;else{if(2048>a)n[r++]=a>>6|192;else{if(55296<=a&&57343>=a){if(56319>=a&&o<t.length){var s=t.charCodeAt(++o);if(56320<=s&&57343>=s){a=1024*(a-55296)+s-56320+65536,n[r++]=a>>18|240,n[r++]=a>>12&63|128,n[r++]=a>>6&63|128,n[r++]=63&a|128;continue}o--}a=65533}n[r++]=a>>12|224,n[r++]=a>>6&63|128}n[r++]=63&a|128}}t=r===n.length?n:n.subarray(0,r)}ev(e.h,8*i+2),ev(e.h,t.length),ek(e,e.h.end()),ek(e,t)}}),tC=tx(function(e,t,i,r,n){if(2!==e.i)return!1;t=eK(t,i,r),i=e.h.j,r=ef(e.h)>>>0;var o=e.h.h+r,a=o-i;if(0>=a&&(e.h.j=o,n(t,e,void 0,void 0,void 0),a=o-e.h.h),a)throw Error("Message parsing ended unexpectedly. Expected to read "+r+" bytes, instead read "+(r-a)+" bytes, either the data ended unexpectedly or the message misreported its own length");return e.h.h=o,e.h.j=i,!0},function(e,t,i,r,n){if(null!=(t=ej(t,r,i)))for(r=0;r<t.length;r++){var o=e;ev(o.h,8*i+2);var a=o.h.end();ek(o,a),a.push(o.i),o=a,n(t[r],e),a=e;var s=o.pop();for(s=a.i+a.h.length()-s;127<s;)o.push(127&s|128),s>>>=7,a.i++;o.push(s),a.i++}});function tk(e){return function(t,i){e:{if(eS.length){var r=eS.pop();r.setOptions(i),ep(r.h,t,i),t=r}else t=new eb(t,i);try{var n=tm(e),o=tg(new n.P,t,n);break e}finally{(n=t.h).i=null,n.m=!1,n.l=0,n.j=0,n.h=0,n.S=!1,t.l=-1,t.i=-1,100>eS.length&&eS.push(t)}o=void 0}return o}}function tI(e){return function(){var t=new eC;ty(this,t,tl(e)),ek(t,t.h.end());for(var i=new Uint8Array(t.i),r=t.j,n=r.length,o=0,a=0;a<n;a++){var s=r[a];i.set(s,o),o+=s.length}return t.j=[i],i}}function tR(e){e3.call(this,e)}f(tR,e3);var tP=[tR,1,tw,2,tv,3,tS,4,tS];function t$(e){e3.call(this,e,-1,tA)}tR.prototype.l=tI(tP),f(t$,e3),t$.prototype.addClassification=function(e,t){return eK(this,1,tR,e,t),this};var tA=[1],tT=tk([t$,1,tC,tP]);function t_(e){e3.call(this,e)}f(t_,e3);var tN=[t_,1,tv,2,tv,3,tv,4,tv,5,tv];function tF(e){e3.call(this,e,-1,tz)}t_.prototype.l=tI(tN),f(tF,e3);var tz=[1],tD=tk([tF,1,tC,tN]);function tE(e){e3.call(this,e)}f(tE,e3);var tL=[tE,1,tv,2,tv,3,tv,4,tv,5,tv,6,tb],tO=tk(tL);function tU(e,t,i){if(i=e.createShader(0===i?e.VERTEX_SHADER:e.FRAGMENT_SHADER),e.shaderSource(i,t),e.compileShader(i),!e.getShaderParameter(i,e.COMPILE_STATUS))throw Error("Could not compile WebGL shader.\n\n"+e.getShaderInfoLog(i));return i}function tM(e){return{x:eq(e,1),y:eq(e,2),z:eq(e,3),visibility:null!=eH(e,4)?eq(e,4):void 0}}function tB(e){return ej(tD(e),t_,1).map(tM)}function tW(e,t){this.i=e,this.h=t,this.m=0}function tV(e,t,i){return(function(e,t){var i=e.h;if(void 0===e.s){var r=tU(i,"\n  attribute vec2 aVertex;\n  attribute vec2 aTex;\n  varying vec2 vTex;\n  void main(void) {\n    gl_Position = vec4(aVertex, 0.0, 1.0);\n    vTex = aTex;\n  }",0),n=tU(i,"\n  precision mediump float;\n  varying vec2 vTex;\n  uniform sampler2D sampler0;\n  void main(){\n    gl_FragColor = texture2D(sampler0, vTex);\n  }",1),o=i.createProgram();if(i.attachShader(o,r),i.attachShader(o,n),i.linkProgram(o),!i.getProgramParameter(o,i.LINK_STATUS))throw Error("Could not compile WebGL program.\n\n"+i.getProgramInfoLog(o));r=e.s=o,i.useProgram(r),n=i.getUniformLocation(r,"sampler0"),e.l={O:i.getAttribLocation(r,"aVertex"),N:i.getAttribLocation(r,"aTex"),ya:n},e.v=i.createBuffer(),i.bindBuffer(i.ARRAY_BUFFER,e.v),i.enableVertexAttribArray(e.l.O),i.vertexAttribPointer(e.l.O,2,i.FLOAT,!1,0,0),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),i.STATIC_DRAW),i.bindBuffer(i.ARRAY_BUFFER,null),e.u=i.createBuffer(),i.bindBuffer(i.ARRAY_BUFFER,e.u),i.enableVertexAttribArray(e.l.N),i.vertexAttribPointer(e.l.N,2,i.FLOAT,!1,0,0),i.bufferData(i.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),i.STATIC_DRAW),i.bindBuffer(i.ARRAY_BUFFER,null),i.uniform1i(n,0)}r=e.l,i.useProgram(e.s),i.canvas.width=t.width,i.canvas.height=t.height,i.viewport(0,0,t.width,t.height),i.activeTexture(i.TEXTURE0),e.i.bindTexture2d(t.glName),i.enableVertexAttribArray(r.O),i.bindBuffer(i.ARRAY_BUFFER,e.v),i.vertexAttribPointer(r.O,2,i.FLOAT,!1,0,0),i.enableVertexAttribArray(r.N),i.bindBuffer(i.ARRAY_BUFFER,e.u),i.vertexAttribPointer(r.N,2,i.FLOAT,!1,0,0),i.bindFramebuffer(i.DRAW_FRAMEBUFFER?i.DRAW_FRAMEBUFFER:i.FRAMEBUFFER,null),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.colorMask(!0,!0,!0,!0),i.drawArrays(i.TRIANGLE_FAN,0,4),i.disableVertexAttribArray(r.O),i.disableVertexAttribArray(r.N),i.bindBuffer(i.ARRAY_BUFFER,null),e.i.bindTexture2d(0)}(e,t),"function"==typeof e.h.canvas.transferToImageBitmap)?Promise.resolve(e.h.canvas.transferToImageBitmap()):i?Promise.resolve(e.h.canvas):"function"==typeof createImageBitmap?createImageBitmap(e.h.canvas):(void 0===e.j&&(e.j=document.createElement("canvas")),new Promise(function(t){e.j.height=e.h.canvas.height,e.j.width=e.h.canvas.width,e.j.getContext("2d",{}).drawImage(e.h.canvas,0,0,e.h.canvas.width,e.h.canvas.height),t(e.j)}))}function tH(e){this.h=e}tE.prototype.l=tI(tL);var tG=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function tj(e,t){return t+e}function tX(e){if(this.h=e,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=e&&e.locateFile||tj,"object"==typeof window)var t=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if("undefined"!=typeof location)t=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.ha=t,e.options){t=a(Object.keys(e.options));for(var i=t.next();!i.done;i=t.next()){i=i.value;var r=e.options[i].default;void 0!==r&&(this.l[i]="function"==typeof r?r():r)}}}function tK(e,t){var i;return C(function(r){return t in e.L?r.return(e.L[t]):(i=fetch(e.locateFile(t,"")).then(function(e){return e.arrayBuffer()}),e.L[t]=i,r.return(i))})}function tY(e){switch(void 0===e&&(e=0),e){case 1:return"pose_landmark_full.tflite";case 2:return"pose_landmark_heavy.tflite";default:return"pose_landmark_lite.tflite"}}function tq(e){var t=this;e=e||{},this.h=new tX({locateFile:e.locateFile,files:function(e){return[{url:"pose_solution_packed_assets_loader.js"},{simd:!1,url:"pose_solution_wasm_bin.js"},{simd:!0,url:"pose_solution_simd_wasm_bin.js"},{data:!0,url:tY(e.modelComplexity)}]},graph:{url:"pose_web.binarypb"},listeners:[{wants:["pose_landmarks","world_landmarks","segmentation_mask","image_transformed"],outs:{image:{type:"texture",stream:"image_transformed"},poseLandmarks:{type:"proto",stream:"pose_landmarks",transform:tB},poseWorldLandmarks:{type:"proto",stream:"world_landmarks",transform:tB},segmentationMask:{type:"texture",stream:"segmentation_mask"}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:"object"==typeof window&&void 0!==window.navigator&&("iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document)},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(e){var i,r,n;return C(function(o){return 1==o.h?(r="third_party/mediapipe/modules/pose_landmark/"+(i=tY(e)),x(o,tK(t.h,i),2)):(n=o.i,t.h.overrideFile(r,n),o.return(!0))})}},smoothLandmarks:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorSmoothLandmarks",fieldName:"bool_value"}},enableSegmentation:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorEnableSegmentation",fieldName:"bool_value"}},smoothSegmentation:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorSmoothSegmentation",fieldName:"bool_value"}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"poselandmarkgpu__posedetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"poselandmarkgpu__poselandmarkbyroigpu__tensorstoposelandmarksandsegmentation__ThresholdingCalculator",fieldName:"threshold"}}}})}(l=tX.prototype).close=function(){return this.j&&this.j.delete(),Promise.resolve()},l.reset=function(){var e=this;return C(function(t){e.j&&(e.j.reset(),e.s={},e.v={}),t.h=0})},l.setOptions=function(e,t){var i=this;if(t=t||this.h.options){for(var r=[],n=[],o={},s=a(Object.keys(e)),u=s.next();!u.done;o={X:o.X,Y:o.Y},u=s.next())if(!((u=u.value)in this.l&&this.l[u]===e[u])){this.l[u]=e[u];var l=t[u];void 0!==l&&(l.onChange&&(o.X=l.onChange,o.Y=e[u],r.push(function(e){return function(){return C(function(t){if(1==t.h)return x(t,e.X(e.Y),2);!0===t.i&&(i.u=!0),t.h=0})}}(o))),l.graphOptionXref&&(u=Object.assign({},{calculatorName:"",calculatorIndex:0},l.graphOptionXref,{valueNumber:1===l.type?e[u]:0,valueBoolean:0===l.type&&e[u],valueString:2===l.type?e[u]:""}),n.push(u)))}(0!==r.length||0!==n.length)&&(this.u=!0,this.H=(void 0===this.H?[]:this.H).concat(n),this.F=(void 0===this.F?[]:this.F).concat(r))}},l.initialize=function(){var e=this;return C(function(t){var i,r,n,o,u,l,h,d,p,c,f,m,g,y,v,b,w,S,k,I,R,P,$,A;return 1==t.h?x(t,C(function(t){switch(t.h){case 1:if(!e.ga)return t.return();return i=void 0===e.h.files?[]:"function"==typeof e.h.files?e.h.files(e.l):e.h.files,x(t,C(function(e){switch(e.h){case 1:return e.s=2,x(e,WebAssembly.instantiate(tG),4);case 4:e.h=3,e.s=0;break;case 2:return e.s=0,e.l=null,e.return(!1);case 3:return e.return(!0)}}),2);case 2:if(r=t.i,"object"==typeof window){var a,m;return a={locateFile:e.locateFile},window.createMediapipeSolutionsWasm=a,m={locateFile:e.locateFile},window.createMediapipeSolutionsPackedAssets=m,l=i.filter(function(e){return void 0!==e.data}),h=i.filter(function(e){return void 0===e.data}),d=Promise.all(l.map(function(t){var i=tK(e,t.url);if(void 0!==t.path){var r=t.path;i=i.then(function(t){return e.overrideFile(r,t),Promise.resolve(t)})}return i})),p=Promise.all(h.map(function(t){var i,n;return void 0===t.simd||t.simd&&r||!t.simd&&!r?(i=e.locateFile(t.url,e.ha),(n=document.createElement("script")).setAttribute("src",i),n.setAttribute("crossorigin","anonymous"),new Promise(function(e){n.addEventListener("load",function(){e()},!1),n.addEventListener("error",function(){e()},!1),document.body.appendChild(n)})):Promise.resolve()})).then(function(){var t,i,r;return C(function(n){if(1==n.h)return t=window.createMediapipeSolutionsWasm,i=window.createMediapipeSolutionsPackedAssets,r=e,x(n,t(i),2);r.i=n.i,n.h=0})}),c=C(function(t){return e.h.graph&&e.h.graph.url?t=x(t,tK(e,e.h.graph.url),0):(t.h=0,t=void 0),t}),x(t,Promise.all([p,d,c]),7)}if("function"!=typeof importScripts)throw Error("solutions can only be loaded on a web page or in a web worker");return n=i.filter(function(e){return void 0===e.simd||e.simd&&r||!e.simd&&!r}).map(function(t){return e.locateFile(t.url,e.ha)}),importScripts.apply(null,s(n)),o=e,x(t,createMediapipeSolutionsWasm(Module),6);case 6:o.i=t.i,e.m=new OffscreenCanvas(1,1),e.i.canvas=e.m,u=e.i.GL.createContext(e.m,{antialias:!1,alpha:!1,va:"undefined"!=typeof WebGL2RenderingContext?2:1}),e.i.GL.makeContextCurrent(u),t.h=4;break;case 7:if(e.m=document.createElement("canvas"),!(f=e.m.getContext("webgl2",{}))&&!(f=e.m.getContext("webgl",{})))return alert("Failed to create WebGL canvas context when passing video frame."),t.return();e.K=f,e.i.canvas=e.m,e.i.createContext(e.m,!0,!0,{});case 4:e.j=new e.i.SolutionWasm,e.ga=!1,t.h=0}}),2):3!=t.h?x(t,C(function(t){if(1==t.h){if(e.h.graph&&e.h.graph.url&&e.fa===e.h.graph.url)return t.return();if(e.u=!0,!e.h.graph||!e.h.graph.url){t.h=2;return}return e.fa=e.h.graph.url,x(t,tK(e,e.h.graph.url),3)}for(2!=t.h&&(m=t.i,e.j.loadGraph(m)),y=(g=a(Object.keys(e.D))).next();!y.done;y=g.next())v=y.value,e.j.overrideFile(v,e.D[v]);if(e.D={},e.h.listeners)for(w=(b=a(e.h.listeners)).next();!w.done;w=b.next())(function(e,t){for(var i=t.name||"$",r=[].concat(s(t.wants)),n=new e.i.StringList,o=a(t.wants),u=o.next();!u.done;u=o.next())n.push_back(u.value);o=e.i.PacketListener.implement({onResults:function(n){for(var o,s,u,l,h,d,p,c,f,m,g,y,v,b,w={},S=0;S<t.wants.length;++S)w[r[S]]=n.get(S);var k=e.listeners[i];k&&(e.I=(o=t.outs,C(function(t){switch(t.h){case 1:if(!o)return t.return(w);for(s={},u=0,h=(l=a(Object.keys(o))).next();!h.done;h=l.next())"string"!=typeof(d=o[h.value])&&"texture"===d.type&&void 0!==w[d.stream]&&++u;1<u&&(e.M=!1),h=(p=a(Object.keys(o))).next();case 2:if(h.done){t.h=4;break}if("string"==typeof(f=o[c=h.value]))return v=s,b=c,x(t,function(e,t,i){var r;return C(function(n){return"number"==typeof i||i instanceof Uint8Array||i instanceof e.i.Uint8BlobList?n.return(i):i instanceof e.i.Texture2dDataOut?((r=e.v[t])||(r=new tW(e.i,e.K),e.v[t]=r),n.return(tV(r,i,e.M))):n.return(void 0)})}(e,c,w[f]),14);if(m=w[f.stream],"detection_list"===f.type){if(m){for(var i=m.getRectList(),r=m.getLandmarksList(),n=m.getClassificationsList(),S=[],k=0;k<i.size();++k){var I=tO(i.get(k)),R=eq(I,1),P=eq(I,2),$=eq(I,3),A=eq(I,4),T=eq(I,5,0),_=void 0;_=void 0===_?0:_,I={la:{sa:R,ta:P,height:$,width:A,rotation:T,pa:eY(eM(I,6),_)},ea:tB(r.get(k)),ba:ej(tT(n.get(k)),tR,1).map(function(e){var t=eM(e,1);return{index:null==t?0:t,qa:eq(e,2),label:null!=eM(e,3)?eY(eM(e,3),""):void 0,displayName:null!=eM(e,4)?eY(eM(e,4),""):void 0}})},S.push(I)}i=S}else i=[];s[c]=i,t.h=7;break}if("proto_list"===f.type){if(m){for(r=0,i=Array(m.size());r<m.size();r++)i[r]=m.get(r);m.delete()}else i=[];s[c]=i,t.h=7;break}if(void 0===m){t.h=3;break}if("float_list"===f.type||"proto"===f.type){s[c]=m,t.h=7;break}if("texture"!==f.type)throw Error("Unknown output config type: '"+f.type+"'");return(g=e.v[c])||(g=new tW(e.i,e.K),e.v[c]=g),x(t,tV(g,m,e.M),13);case 13:y=t.i,s[c]=y;case 7:f.transform&&s[c]&&(s[c]=f.transform(s[c])),t.h=3;break;case 14:v[b]=t.i;case 3:h=p.next(),t.h=2;break;case 4:return t.return(s)}})).then(function(i){i=k(i);for(var n=0;n<t.wants.length;++n){var o=w[r[n]];"object"==typeof o&&o.hasOwnProperty&&o.hasOwnProperty("delete")&&o.delete()}i&&(e.I=i)}))}}),e.j.attachMultiListener(n,o),n.delete()})(e,w.value);S=e.l,e.l={},e.setOptions(S),t.h=0}),3):x(t,C(function(t){switch(t.h){case 1:if(!e.u)return t.return();if(!e.F){t.h=2;break}I=(k=a(e.F)).next();case 3:if(I.done){t.h=5;break}return x(t,(0,I.value)(),4);case 4:I=k.next(),t.h=3;break;case 5:e.F=void 0;case 2:if(e.H){for(R=new e.i.GraphOptionChangeRequestList,$=(P=a(e.H)).next();!$.done;$=P.next())A=$.value,R.push_back(A);e.j.changeOptions(R),R.delete(),e.H=void 0}e.u=!1,t.h=0}}),0)})},l.overrideFile=function(e,t){this.j?this.j.overrideFile(e,t):this.D[e]=t},l.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},l.send=function(e,t){var i,r,n,o,s,u,l,h,d,p=this;return C(function(c){switch(c.h){case 1:if(!p.h.inputs)return c.return();return i=1e3*(null==t?performance.now():t),x(c,p.I,2);case 2:return x(c,p.initialize(),3);case 3:for(r=new p.i.PacketDataList,o=(n=a(Object.keys(e))).next();!o.done;o=n.next())if(s=o.value,u=p.h.inputs[s]){e:{var f=e[s];switch(u.type){case"video":var m=p.s[u.stream];if(m||(m=new tW(p.i,p.K),p.s[u.stream]=m),0===m.m&&(m.m=m.i.createTexture()),"undefined"!=typeof HTMLVideoElement&&f instanceof HTMLVideoElement)var g=f.videoWidth,y=f.videoHeight;else"undefined"!=typeof HTMLImageElement&&f instanceof HTMLImageElement?(g=f.naturalWidth,y=f.naturalHeight):(g=f.width,y=f.height);y={glName:m.m,width:g,height:y},(g=m.h).canvas.width=y.width,g.canvas.height=y.height,g.activeTexture(g.TEXTURE0),m.i.bindTexture2d(m.m),g.texImage2D(g.TEXTURE_2D,0,g.RGBA,g.RGBA,g.UNSIGNED_BYTE,f),m.i.bindTexture2d(0),m=y;break e;case"detections":for((m=p.s[u.stream])||(m=new tH(p.i),p.s[u.stream]=m),m.data||(m.data=new m.h.DetectionListData),m.data.reset(f.length),y=0;y<f.length;++y){g=f[y];var v=m.data,b=v.setBoundingBox,w=y,S=g.la,C=new tE;if(eX(C,1,S.sa),eX(C,2,S.ta),eX(C,3,S.height),eX(C,4,S.width),eX(C,5,S.rotation),eB(C,6,S.pa),S=C.l(),b.call(v,w,S),g.ea)for(v=0;v<g.ea.length;++v){C=g.ea[v],w=(b=m.data).addNormalizedLandmark,S=y,C=Object.assign({},C,{visibility:C.visibility?C.visibility:0});var k=new t_;eX(k,1,C.x),eX(k,2,C.y),eX(k,3,C.z),C.visibility&&eX(k,4,C.visibility),C=k.l(),w.call(b,S,C)}if(g.ba)for(v=0;v<g.ba.length;++v)w=(b=m.data).addClassification,S=y,C=g.ba[v],eX(k=new tR,2,C.qa),C.index&&eB(k,1,C.index),C.label&&eB(k,3,C.label),C.displayName&&eB(k,4,C.displayName),C=k.l(),w.call(b,S,C)}m=m.data;break e;default:m={}}}switch(l=m,h=u.stream,u.type){case"video":r.pushTexture2d(Object.assign({},l,{stream:h,timestamp:i}));break;case"detections":(d=l).stream=h,d.timestamp=i,r.pushDetectionList(d);break;default:throw Error("Unknown input config type: '"+u.type+"'")}}return p.j.send(r),x(c,p.I,4);case 4:r.delete(),c.h=0}})},l.onResults=function(e,t){this.listeners[t||"$"]=e},R("Solution",tX),R("OptionType",{BOOL:0,NUMBER:1,ua:2,0:"BOOL",1:"NUMBER",2:"STRING"}),(l=tq.prototype).reset=function(){this.h.reset()},l.close=function(){return this.h.close(),Promise.resolve()},l.onResults=function(e){this.h.onResults(e)},l.initialize=function(){var e=this;return C(function(t){return x(t,e.h.initialize(),0)})},l.send=function(e,t){var i=this;return C(function(r){return x(r,i.h.send(e,t),0)})},l.setOptions=function(e){this.h.setOptions(e)},R("Pose",tq),R("POSE_CONNECTIONS",[[0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]]),R("POSE_LANDMARKS",{NOSE:0,LEFT_EYE_INNER:1,LEFT_EYE:2,LEFT_EYE_OUTER:3,RIGHT_EYE_INNER:4,RIGHT_EYE:5,RIGHT_EYE_OUTER:6,LEFT_EAR:7,RIGHT_EAR:8,LEFT_RIGHT:9,RIGHT_LEFT:10,LEFT_SHOULDER:11,RIGHT_SHOULDER:12,LEFT_ELBOW:13,RIGHT_ELBOW:14,LEFT_WRIST:15,RIGHT_WRIST:16,LEFT_PINKY:17,RIGHT_PINKY:18,LEFT_INDEX:19,RIGHT_INDEX:20,LEFT_THUMB:21,RIGHT_THUMB:22,LEFT_HIP:23,RIGHT_HIP:24,LEFT_KNEE:25,RIGHT_KNEE:26,LEFT_ANKLE:27,RIGHT_ANKLE:28,LEFT_HEEL:29,RIGHT_HEEL:30,LEFT_FOOT_INDEX:31,RIGHT_FOOT_INDEX:32}),R("POSE_LANDMARKS_LEFT",{LEFT_EYE_INNER:1,LEFT_EYE:2,LEFT_EYE_OUTER:3,LEFT_EAR:7,LEFT_RIGHT:9,LEFT_SHOULDER:11,LEFT_ELBOW:13,LEFT_WRIST:15,LEFT_PINKY:17,LEFT_INDEX:19,LEFT_THUMB:21,LEFT_HIP:23,LEFT_KNEE:25,LEFT_ANKLE:27,LEFT_HEEL:29,LEFT_FOOT_INDEX:31}),R("POSE_LANDMARKS_RIGHT",{RIGHT_EYE_INNER:4,RIGHT_EYE:5,RIGHT_EYE_OUTER:6,RIGHT_EAR:8,RIGHT_LEFT:10,RIGHT_SHOULDER:12,RIGHT_ELBOW:14,RIGHT_WRIST:16,RIGHT_PINKY:18,RIGHT_INDEX:20,RIGHT_THUMB:22,RIGHT_HIP:24,RIGHT_KNEE:26,RIGHT_ANKLE:28,RIGHT_HEEL:30,RIGHT_FOOT_INDEX:32}),R("POSE_LANDMARKS_NEUTRAL",{NOSE:0}),R("VERSION","0.5.1675469404")}).call(this)},25848:function(e,t,i){"use strict";let r;i.d(t,{oV:function(){return sF},$b:function(){return sN},cH:function(){return uc},cy:function(){return uf}});var n,o,a=i(56882),s=i(46040),u=i(65269);let l=(0,s.OBj)();l.registerFlag("WEBGPU_DEFERRED_SUBMIT_BATCH_SIZE",()=>15),l.registerFlag("WEBGPU_CPU_FORWARD",()=>!0),l.registerFlag("WEBGPU_MATMUL_PROGRAM_TYPE",()=>-1),l.registerFlag("WEBGPU_USE_NAIVE_CONV2D_TRANSPOSE",()=>!0),l.registerFlag("WEBGPU_USE_LOW_POWER_GPU",()=>!1),l.registerFlag("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD",()=>1e3),l.registerFlag("WEBGPU_USE_PROFILE_TOOL",()=>!1),l.registerFlag("WEBGPU_IMPORT_EXTERNAL_TEXTURE",()=>!0),l.registerFlag("WEBGPU_USE_NAIVE_CONV2D_DEBUG",()=>!1),l.registerFlag("WEBGPU_THRESHOLD_TO_INCREASE_WORKGROUPS_FOR_MATMUL",()=>-1),l.registerFlag("WEBGPU_CONV_SEPARATE_IM2COL_SHADER",()=>!1),l.registerFlag("WEBGPU_PRINT_SHADER",()=>""),l.registerFlag("WEBGPU_ENGINE_COMPILE_ONLY",()=>!1);class h{constructor(e){e&&(this.vendor=e.vendor,this.architecture=e.architecture,this.intelGPUGeneration=this.getIntelGPUGeneration())}getIntelGPUGeneration(){if(this.isIntel()){if(this.architecture.startsWith("gen"))return Number(this.architecture.match(/\d+/));if(this.architecture.startsWith("xe"))return 12}return 0}isIntel(){return"intel"===this.vendor}}class d{constructor(e){this.device=e,this.numUsedBuffers=0,this.numFreeBuffers=0,this.freeBuffers=new Map,this.usedBuffers=new Map,this.numBytesUsed=0,this.numBytesAllocated=0}acquireBuffer(e,t,i=!1,r=!0){let n;let o=`${e}_${t}`;return r?(this.freeBuffers.has(o)||this.freeBuffers.set(o,[]),this.freeBuffers.get(o).length>0?(n=this.freeBuffers.get(o).pop(),this.numFreeBuffers--):(n=this.device.createBuffer({size:e,usage:t,mappedAtCreation:i}),this.numBytesAllocated+=e)):(n=this.device.createBuffer({size:e,usage:t,mappedAtCreation:i}),this.numBytesAllocated+=e),this.usedBuffers.has(o)||this.usedBuffers.set(o,[]),this.usedBuffers.get(o).push(n),this.numUsedBuffers++,this.numBytesUsed+=e,n}releaseBuffer(e,t=!0){var i;if(0===this.freeBuffers.size)return;let r=e.size,n=(i=e.usage,`${r}_${i}`),o=this.usedBuffers.get(n),a=o.indexOf(e);if(a<0)throw Error("Cannot find the buffer in buffer manager");o[a]=o[o.length-1],o.pop(),this.numUsedBuffers--,this.numBytesUsed-=r,t?(this.freeBuffers.get(n).push(e),this.numFreeBuffers++):(e.destroy(),this.numBytesAllocated-=r)}getNumUsedBuffers(){return this.numUsedBuffers}getNumFreeBuffers(){return this.numFreeBuffers}dispose(){this.freeBuffers.forEach((e,t)=>{e.forEach(e=>{e.destroy()})}),this.usedBuffers.forEach((e,t)=>{e.forEach(e=>{e.destroy()})}),this.freeBuffers=new Map,this.usedBuffers=new Map,this.numUsedBuffers=0,this.numFreeBuffers=0,this.numBytesUsed=0,this.numBytesAllocated=0}}class p{constructor(e){this.device=e,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures=new Map,this.usedTextures=new Map,this.numBytesUsed=0,this.numBytesAllocated=0}acquireTexture(e,t,i,r){let n=e*t*f(i),o=c(e,t,i,r);if(this.freeTextures.has(o)||this.freeTextures.set(o,[]),this.usedTextures.has(o)||this.usedTextures.set(o,[]),this.numBytesUsed+=n,this.numUsedTextures++,this.freeTextures.get(o).length>0){this.numFreeTextures--;let e=this.freeTextures.get(o).shift();return this.usedTextures.get(o).push(e),e}this.numBytesAllocated+=n;let a=this.device.createTexture({size:[e,t],format:i,usage:r});return this.usedTextures.get(o).push(a),a}releaseTexture(e){if(0===this.freeTextures.size)return;let t=e.width,i=e.height,r=e.format,n=c(t,i,r,e.usage);this.freeTextures.has(n)||this.freeTextures.set(n,[]),this.freeTextures.get(n).push(e),this.numFreeTextures++,this.numUsedTextures--;let o=this.usedTextures.get(n),a=o.indexOf(e);if(a<0)throw Error("Cannot release a texture that was never provided by this texture manager");o.splice(a,1);let s=t*i*f(r);this.numBytesUsed-=s}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){this.freeTextures.forEach((e,t)=>{e.forEach(e=>{e.destroy()})}),this.usedTextures.forEach((e,t)=>{e.forEach(e=>{e.destroy()})}),this.freeTextures=new Map,this.usedTextures=new Map,this.numUsedTextures=0,this.numFreeTextures=0,this.numBytesUsed=0,this.numBytesAllocated=0}}function c(e,t,i,r){return`${e}_${t}_${i}_${r}`}function f(e){if("rgba8unorm"===e)return 16;throw Error(`${e} is not supported!`)}let m=(e,t,i)=>"int32"===i?`atomicAdd(${e}, bitcast<i32>(${t}));`:`
          {
            var oldValue = 0;
            loop {
              let newValueF32 = bitcast<f32>(oldValue) + (${t});
              let newValue = bitcast<i32>(newValueF32);
              let res = atomicCompareExchangeWeak(${e}, oldValue, newValue);
              if res.exchanged {
                break;
              }
              oldValue = res.old_value;
            }
          }`;(sS=sP||(sP={}))[sS.FROM_PIXELS=0]="FROM_PIXELS",sS[sS.DRAW=1]="DRAW";let g=(e,t,i,r,n)=>{let o=function(e,t,i){var r;let n;let o=[],a=i.workgroupSize[0]*i.workgroupSize[1]*i.workgroupSize[2];if(i.outputComponent=i.outputComponent?i.outputComponent:1,o.push(`

      var<private> localId: vec3<u32>;
      var<private> localIndex: u32;
      var<private> globalId: vec3<u32>;
      var<private> numWorkgroups: vec3<u32>;
      var<private> workgroupId: vec3<u32>;

      // Only used when the y/z dimension of workgroup size is 1.
      fn getGlobalIndex() -> i32 {
        ${I(i)?"  return i32(globalId.x);":`  return i32((workgroupId.z * numWorkgroups.x * numWorkgroups.y +
                workgroupId.y * numWorkgroups.x + workgroupId.x) * ${a}u +
                localIndex);
        `}
      }
    `),null!=i.pixelsOpType){let r=i.pixelsOpType===sP.FROM_PIXELS?`@group(0) @binding(0) var<storage, read_write> result: array<${R(t.dtype,i.outputComponent)}>;`:`@group(0) @binding(1) var<storage, read> inBuf : array<${R(e[0].dtype,i.outputComponent)}>;`,n=3===t.shape.length?"vec2<i32>":"i32";o.push(`
        struct Uniform {
          outShapeStrides : ${n},
          size            : i32,
          numChannels     : i32,
          alpha           : f32,
        };

        ${r}
        @group(0) @binding(2) var<uniform> uniforms: Uniform;
      `);let a=P(i);return[S,o.join("\n"),k(t.shape),i.getUserCode(),w(a,i)].join("\n")}let u="struct Uniforms { NAN : f32, INFINITY : f32, ";i.variableNames.forEach((t,i)=>{let r=x(e[i].shape.length);u+=`${t.charAt(0).toLowerCase()+t.slice(1)}Shape : ${r}, `,n=x(e[i].shape.length-1),u+=`${t.charAt(0).toLowerCase()+t.slice(1)}ShapeStrides: ${n}, `});let l=x(t.shape.length);u+=`outShape : ${l}, `,n=x(t.shape.length-1),u+=`
         outShapeStrides: ${n}, `,i.size&&(u+="size : i32, "),i.uniforms&&(u+=i.uniforms),u+="};",u=u.replace(/(\w+)\s*:\s*vec(5|6)/g,e=>"@align(16) "+e).replace(/vec(5|6)\s*,\s*(\w+)/g,(e,t,i)=>`vec${t}, @align(16) ${i}`),o.push(u),i.atomic?o.push(`
      @group(0) @binding(0) var<storage, read_write> result: array<atomic<i32>>;
    `):o.push(`
      @group(0) @binding(0) var<storage, read_write> result: array<${R(t.dtype,i.outputComponent)}>;
    `),i.variableNames.forEach((t,r)=>{o.push(`
      @group(0) @binding(${1+r}) var<storage, read> ${t}: array<${i.variableComponents?R(e[r].dtype,i.variableComponents[r]):R(e[r].dtype,i.outputComponent)}>;
        `)}),""!==u&&o.push(`
      @group(0) @binding(${1+i.variableNames.length}) var<uniform> uniforms: Uniforms;
      `);let h=function(e,t){let{x:i,y:r=[],z:n=[]}=t,o=e.length,a=i.length+r.length+n.length;if(a!==o)return"";if(i.length===o){let e=x(o);return`fn getOutputCoords() -> ${e}{
    let globalIndex = getGlobalIndex();
    return getCoordsFromIndex(globalIndex);
  }
  `}let s="",u=[i,r,n];for(let e=0;e<u.length;e++){let t=u[e];if(0!==t.length){if(1===t.length)s+=`let d${t[0]} = i32(globalId[${e}]);`;else{let i=function(e,t){if(Math.max(...e)>5)throw Error("Cannot symbolically compute strides for rank > 6 tensor.");let i=e.length,r=e.map(e=>`${t}.${"xyzwuv"[e]}`),n=Array(i-1);n[i-2]=r[i-1];for(let e=i-3;e>=0;--e)n[e]=`(${n[e+1]} * ${r[e+1]})`;return n}(t,"uniforms.outShape");s+=`var index${e} = i32(globalId[${e}]);`;for(let r=0;r<i.length;r++)s+=`let d${t[r]} = index${e} / ${i[r]};`,r===i.length-1?s+=`let d${t[r+1]} = index${e} - d${t[r]} * ${i[r]};`:s+=`index${e} = index${e} - d${t[r]} * ${i[r]};`}}}let l=[];for(let e=0;e<a;e++)l.push(`d${e}`);let h=x(a),d=`fn getOutputCoords() -> ${h} {
  ${s}
`;return 0===l.length?d+=`return ${h}(0); }`:d+=`return ${h}(${l.join(",")}); }`,d}(t.shape,i.dispatchLayout),d=[S,o.join("\n")+C,k(t.shape),h,function(e){let t="";switch(e){case 0:case 1:t+=`
        fn getOutputIndexFromCoords(coords : i32) -> i32 {
          return coords;
        }
        `;break;case 2:t+=`
        fn getOutputIndexFromCoords(coords : vec2<i32>) -> i32 {
          return dot(coords, vec2<i32>(uniforms.outShapeStrides, 1));
        }
        `;break;case 3:t+=`
        fn getOutputIndexFromCoords(coords : vec3<i32>) -> i32 {
          return dot(coords, vec3<i32>(uniforms.outShapeStrides.x, uniforms.outShapeStrides.y, 1));
        }
        `;break;case 4:t+=`
        fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
          return dot(coords, vec4<i32>(
            uniforms.outShapeStrides.x, uniforms.outShapeStrides.y, uniforms.outShapeStrides.z, 1));
        }
        `;break;case 5:t+=`
        fn getOutputIndexFromCoords(coords : vec5) -> i32 {
          return coords.x * uniforms.outShapeStrides.x +
              coords.y * uniforms.outShapeStrides.y +
              coords.z * uniforms.outShapeStrides.z +
              coords.w * uniforms.outShapeStrides.w +
              coords.u;
        }
        `;break;case 6:t+=`
        fn getOutputIndexFromCoords(coords : vec6) -> i32 {
          return coords.x * uniforms.outShapeStrides.x +
              coords.y * uniforms.outShapeStrides.y +
              coords.z * uniforms.outShapeStrides.z +
              coords.w * uniforms.outShapeStrides.w +
              coords.u * uniforms.outShapeStrides.u +
              coords.v;
        }
        `;break;default:s.D5U.assert(!1,()=>`Unsupported ${e}D shape`)}return t}(t.shape.length)];i.atomic||d.push(function(e,t,i){let r=e.length,n=R(t,i),o=`fn setOutputAtIndex(flatIndex : i32, value : ${y(i)}) {
      result[flatIndex] = ${n}(value);
    }

    fn setOutputAtIndexI32(flatIndex : i32, value : ${y(i,"i32")}) {
      result[flatIndex] = ${n}(value);
    }
    `;if(r>=2){let e=["d0","d1","d2","d3","d4","d5"].slice(0,r),t=x(r);o+=`
      fn setOutputAtCoords(${e.map(e=>`${e} : i32`).join(", ")}, value : ${y(i)}) {
        let flatIndex = getOutputIndexFromCoords(${t}(${e.join(", ")}));
        setOutputAtIndex(flatIndex${1===i?"":` / ${i}`}, value);
      }
      fn setOutputAtCoordsI32(${e.map(e=>`${e} : i32`).join(", ")}, value : ${y(i,"i32")}) {
        let flatIndex = getOutputIndexFromCoords(${t}(${e.join(", ")}));
        setOutputAtIndexI32(flatIndex${1===i?"":` / ${i}`}, value);
      }
    `}return o}(t.shape,t.dtype,i.outputComponent)),i.variableNames.forEach((t,i)=>{d.push(`${k(e[i].shape,t)}`)});let p=e.map((e,r)=>{var n,o,a;let u;return n=t.shape,o=i.variableComponents?i.variableComponents[r]:i.outputComponent,a=i.dispatchLayout.x.length===t.shape.length,u=function(e,t){let i=e.name,r=e.shape.length,n=x(r),o="get"+i.charAt(0).toUpperCase()+i.slice(1),a=["d0","d1","d2","d3","d4","d5"].slice(0,r),s=a.map(e=>`${e} : i32`).join(", ");if(r<1)return`
      fn ${o}() -> ${y(t)} {
        return ${y(t)}(${i}[0]);
      }
    `;let u=`uniforms.${i.charAt(0).toLowerCase()+i.slice(1)}Shape`,l=`${r}D`;return 0===r&&(l="1D"),`
    fn ${o}(${s}) -> ${y(t)} {
      return ${y(t)}(${i}[getIndexFromCoords${l}(${n}(${a.join(",")}),
        ${u})${1===t?"":` / ${t}`}]);
    }
   `}(e,o),e.shape.length<=n.length&&(u+=function(e,t,i,r){let n=e.name,o=n.charAt(0).toUpperCase()+n.slice(1),a="get"+o+"ByOutput",u=e.shape.length,l=t.length,h=x(l);if(s.D5U.arraysEqual(e.shape,t)&&r)return`
    fn ${a}Index(globalIndex : i32) -> ${y(i)} {
      return ${y(i)}(${n}[globalIndex]);
    }

    fn ${a}Coords(coords : ${h}) -> ${y(i)} {
      return ${y(i)}(${n}[${l>1?"getOutputIndexFromCoords(coords)":"coords"}${1===i?"":` / ${i}`}]);
    }
    `;let d=s.backend_util.getBroadcastDims(e.shape,t),p=l-u,c="";if(0===u)return`
    fn ${a}Index(globalIndex : i32) -> ${y(i)}{
      return get${o}();
    }

    fn ${a}Coords(coords : ${h}) -> ${y(i)}{
      return get${o}();
    }
  `;c=l<2&&d.length>=1?"coords = 0;":d.map(e=>`coords.${v(e+p)} = 0;`).join("\n");let f="";if(l<2&&u>0)f="coords";else if(l>1){let t=x(u),i=e.shape.map((e,t)=>`coords.${v(t+p)}`).join(", ");f=`${t}(${i})`}else f="coords";let m=`uniforms.${n.charAt(0).toLowerCase()+n.slice(1)}Shape`,g=`${u}D`;return`
  fn ${a}Index(globalIndex : i32) -> ${y(i)} {
    var coords = getCoordsFromIndex(globalIndex);
    ${c}
    return ${y(i)}(${n}[getIndexFromCoords${g}(${f}, ${m})${1===i?"":` / ${i}`}]);
  }

  fn ${a}Coords(coordsIn : ${h}) -> ${y(i)} {
    var coords = coordsIn;
    ${c}
    return ${y(i)}(${n}[getIndexFromCoords${g}(${f}, ${m})${1===i?"":` / ${i}`}]);
  }
`}(e,n,o,a)),u}).join("\n");d.push(p),d.push(i.getUserCode());let c=P(i);return d.push(w(c,i)),d.join("\n")}(i,{dtype:r.dtype,shape:r.shape},t),a=e.createShaderModule({code:o,label:t.constructor.name}),u=(0,s.OBj)().get("WEBGPU_PRINT_SHADER");if(""!==u){let e=(u=u.toLowerCase()).split(",");("all"===u||e.some(e=>t.shaderKey.toLowerCase().includes(e)))&&(console.group(t.shaderKey),console.debug(o),console.groupEnd())}return n?e.createComputePipelineAsync({compute:{module:a,entryPoint:"_start"},label:t.constructor.name,layout:"auto"}):e.createComputePipeline({compute:{module:a,entryPoint:"_start"},label:t.constructor.name,layout:"auto"})},y=(e,t="f32")=>{switch(e){case 1:return`${t}`;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw Error(`${e}-component ${t} is not supported.`)}};function x(e){if(e<=1)return"i32";if(2===e)return"vec2<i32>";if(3===e)return"vec3<i32>";if(4===e)return"vec4<i32>";if(5===e)return"vec5";if(6===e)return"vec6";throw Error(`GPU for rank ${e} is not yet supported`)}function v(e){if(0===e)return"x";if(1===e)return"y";if(2===e)return"z";if(3===e)return"w";if(4===e)return"u";if(5===e)return"v";throw Error(`Index ${e} is not yet supported`)}function b(...e){let t;switch(e.length){case 0:t=`
        fn main()
      `;break;case 1:t=`
        fn main(${e[0]} : i32)
      `;break;default:throw Error("Unreachable")}return t}function w(e,t){return`
     
  @compute @workgroup_size(${t.workgroupSize[0]}, ${t.workgroupSize[1]}, ${t.workgroupSize[2]})

      fn _start(@builtin(local_invocation_id) LocalId : vec3<u32>,
                @builtin(global_invocation_id) GlobalId : vec3<u32>,
                @builtin(local_invocation_index) LocalIndex: u32,
                @builtin(workgroup_id) WorkgroupId : vec3<u32>,
                @builtin(num_workgroups) NumWorkgroups : vec3<u32>) {
        localId = LocalId;
        localIndex = LocalIndex;
        globalId = GlobalId;
        numWorkgroups = NumWorkgroups;
        workgroupId = WorkgroupId;
        ${e?"main(getGlobalIndex());":"main();"};
      }
    `}let S=`
  struct vec5 {x: i32, y: i32, z: i32, w: i32, u: i32};
  struct vec6 {x: i32, y: i32, z: i32, w: i32, u: i32, v: i32};

  // Checks whether coordinates lie within the bounds of the shape.
  fn coordsInBounds2D(coord : vec2<i32>, shape : vec2<i32>) -> bool {
    return all(coord >= vec2<i32>(0)) && all(coord < shape);
  }
  fn coordsInBounds3D(coord : vec3<i32>, shape : vec3<i32>) -> bool {
    return all(coord >= vec3<i32>(0)) && all(coord < shape);
  }
  fn coordsInBounds4D(coord : vec4<i32>, shape : vec4<i32>) -> bool {
    return all(coord >= vec4<i32>(0)) && all(coord < shape);
  }

  fn getIndexFromCoords1D(coord : i32, shape : i32) -> i32 {
    return coord;
  }
  fn getIndexFromCoords2D(coords : vec2<i32>, shape : vec2<i32>) -> i32 {
    return dot(coords, vec2<i32>(shape.y, 1));
  }
  fn getIndexFromCoords3D(coords : vec3<i32>, shape : vec3<i32>) -> i32 {
    return dot(coords, vec3<i32>(shape.y * shape.z, shape.z, 1));
  }
  fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
    return dot(coords, vec4<i32>(
        shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
  }
  fn getIndexFromCoords5D(coords : vec5, shape : vec5) -> i32 {
    let shapeStrides: vec5 = vec5(shape.y * shape.z * shape.w * shape.u, shape.z * shape.w * shape.u, shape.w * shape.u, shape.u, 1);
    return coords.x*shapeStrides.x + coords.y*shapeStrides.y + coords.z*shapeStrides.z + coords.w*shapeStrides.w + coords.u*shapeStrides.u;
  }
  fn getIndexFromCoords6D(coords : vec6, shape : vec6) -> i32 {
    let shapeStrides: vec6 = vec6(shape.y * shape.z * shape.w * shape.u * shape.v, shape.z * shape.w * shape.u * shape.v, shape.w * shape.u * shape.v, shape.u * shape.v, shape.v, 1);
    return coords.x*shapeStrides.x + coords.y*shapeStrides.y + coords.z*shapeStrides.z + coords.w*shapeStrides.w + coords.u*shapeStrides.u + coords.v*shapeStrides.v;
  }

  // NaN defination in IEEE 754-1985 is :
  //   - sign = either 0 or 1.
  //   - biased exponent = all 1 bits.
  //   - fraction = anything except all 0 bits (since all 0 bits represents infinity).
  // https://en.wikipedia.org/wiki/IEEE_754-1985#Representation_of_non-numbers
  fn isnan(val: f32) -> bool {
    let floatToUint: u32 = bitcast<u32>(val);
    return (floatToUint & 0x7fffffffu) > 0x7f800000u;
  }
  fn isnanVec4(val : vec4<f32>) -> vec4<bool> {
    let floatToUint: vec4<u32> = bitcast<vec4<u32>>(val);
    return (floatToUint & vec4<u32>(0x7fffffffu)) > vec4<u32>(0x7f800000u);
  }
`,C=`
  fn isinf(val: f32) -> bool {
    return abs(val) == uniforms.INFINITY;
  }
`;function k(e,t=""){let i;let r=e.length,n=""!==t?`get${t.charAt(0).toUpperCase()+t.slice(1)}CoordsFromIndex`:"getCoordsFromIndex",o=""!==t?`${t.charAt(0).toLowerCase()+t.slice(1)}ShapeStrides`:"outShapeStrides";if(r<=1)return`fn ${n}(index : i32) -> i32 { return index; }`;let a=s.D5U.computeStrides(e),u=x(r),l=[];for(let e=0;e<r;e++)l.push(`d${e}`);return 1===a.length?`    fn ${n}(index : i32) -> vec2<i32> {
      let d0 = index / uniforms.${o}; let d1 = index - d0 * uniforms.${o};
      return vec2<i32>(d0, d1);
    }`:(i="var index2 = index;"+a.map((e,t)=>{let i=`let ${l[t]} = index2 / uniforms.${o}.${v(t)}`,r=t===a.length-1?`let ${l[t+1]} = index2 - ${l[t]} * uniforms.${o}.${v(t)}`:`index2 = index2 - ${l[t]} * uniforms.${o}.${v(t)}`;return`${i}; ${r};`}).join(""),`
    fn ${n}(index : i32) -> ${u} {
      ${i}
      return ${u}(${l.join(",")});
    }
  `)}function I(e){return 1===e.dispatch[1]&&1===e.dispatch[2]}function R(e,t=1){if("float32"===e)return y(t,"f32");if("int32"===e||"bool"===e)return y(t,"i32");throw Error(`type ${e} is not supported.`)}function P(e){return!(e.dispatchLayout.hasOwnProperty("y")&&0!==e.dispatchLayout.y.length||e.dispatchLayout.hasOwnProperty("z")&&0!==e.dispatchLayout.z.length)}let $=e=>{let t=1;for(let i=0;i<e.length;i++)t*=e[i];return t};function A(e,t,i=[1,1,1],r=[1,1,1]){let[n,o,a]=[Math.ceil($(e.x.map(e=>t[e]))/(i[0]*r[0])),e.y?Math.ceil($(e.y.map(e=>t[e]))/(i[1]*r[1])):1,e.z?Math.ceil($(e.z.map(e=>t[e]))/(i[2]*r[2])):1];return[n,o,a]}function T(e,t,i=!1){if(i)return[8,8,1];let r=$(e.x.map(e=>t[e])),n=$(e.y.map(e=>t[e]));return r<=4?[4,16,1]:n<=4?[16,4,1]:[16,16,1]}function _(e,t,i=!1){if(i)return[4,4,1];let r=$(e.x.map(e=>t[e])),n=$(e.y.map(e=>t[e]));return r<=4?[1,2,1]:n<=4?[2,1,1]:[2,2,1]}function N(e){return{x:e.map((e,t)=>t)}}function F(e){if("float32"===e||"int32"===e||"bool"===e||"string"===e)return 4;if("complex64"===e)return 8;throw Error(`Unknown dtype ${e}`)}function z(){return!!("undefined"!=typeof globalThis&&globalThis.navigator&&globalThis.navigator.gpu)}function D(e,t){Array.isArray(e)||(e=[e]),e.forEach(e=>{null!=e&&s.D5U.assert("complex64"!==e.dtype,()=>`${t} does not support complex64 tensors in the WebGPU backend.`)})}(sC=s$||(s$={}))[sC.MatMulReduceProgram=0]="MatMulReduceProgram",sC[sC.MatMulSplitKProgram=1]="MatMulSplitKProgram",sC[sC.MatMulSmallOutputSizeProgram=2]="MatMulSmallOutputSizeProgram",sC[sC.MatMulPackedProgram=3]="MatMulPackedProgram",sC[sC.MatMulMax=4]="MatMulMax";let E=(0,s.OBj)().getNumber("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD"),L=(e,t)=>{let i=e.limits.maxComputeWorkgroupsPerDimension,r=t.dispatchLayout,n=t.dispatch;if(n.every(e=>e<=i))return n;s.D5U.assert(n[0]>i&&void 0===r.y&&void 0===r.z,()=>"Dispatch size exceeds WebGPU limits in Y or Z dimension.");let o=Math.ceil(Math.sqrt(n[0]));return o>i?(o=Math.ceil(Math.cbrt(n[0])),s.D5U.assert(o<=i,()=>"Total dispatch size exceeds WebGPU maximum."),[o,o,o]):[o,o,1]};class O extends s.Zuw{nextDataId(){return O.nextDataId++}constructor(e,t){if(super(),this.commandQueueOwnedIds=new WeakSet,this.dispatchCountInPass=0,this.disposed=!1,this.downloadWaitMs=0,this.tensorDataPendingDisposal=[],this.queryResolveBuffer=null,this.querySet=null,this.querySetCount=2,this.stagingPendingDisposal=[],this.uniformPendingDisposal=[],this.uploadWaitMs=0,this.hasReadSyncWarned=!1,this.hasTimestampQueryWarned=!1,!z())throw Error("WebGPU is not supported on this device");this.pipelineCache={},this.device=e,this.queue=e.queue,this.commandEncoder=null,this.computePassEncoder=null,this.adapterInfo=new h(t),this.supportTimestampQuery=this.device.features.has("timestamp-query"),this.thresholdToIncreaseWorkgroups=this.adapterInfo.intelGPUGeneration>=12?16:8,this.bufferManager=new d(this.device),this.textureManager=new p(this.device),this.tensorMap=new s.JLz(this,(0,s.SRH)()),(0,s.OBj)().getBool("WEBGPU_USE_PROFILE_TOOL")&&(this.dummyCanvas=document.createElement("canvas"),this.dummyCanvas.width=1,this.dummyCanvas.height=1,this.dummyContext=this.dummyCanvas.getContext("webgpu"),this.dummyContext.configure({device:e,format:"bgra8unorm"}),document.body.appendChild(this.dummyCanvas))}floatPrecision(){return 32}disposeData(e,t=!1){if(!this.tensorMap.has(e))return!0;let i=this.tensorMap.get(e);return t?i.refCount=0:i.refCount--,!(i.refCount>0)&&((null!=i.complexTensorInfos&&(this.disposeData(i.complexTensorInfos.real.dataId),this.disposeData(i.complexTensorInfos.imag.dataId)),this.commandQueueOwnedIds.has(e))?this.tensorDataPendingDisposal.push(e):(this.releaseResource(e),this.tensorMap.delete(e)),!0)}memory(){return{numBytesInGPU:this.bufferManager.numBytesUsed,numBytesAllocatedInGPU:this.bufferManager.numBytesAllocated,unreliable:!1}}releaseResource(e){let t=this.tensorMap.get(e);if(t&&t.resource){if(t.external){t.resource=null;return}t.resource instanceof GPUBuffer?this.bufferManager.releaseBuffer(t.resource):t.resource instanceof GPUTexture&&this.textureManager.releaseTexture(t.resource),t.resource=null}}refCount(e){return this.tensorMap.has(e)?this.tensorMap.get(e).refCount:0}incRef(e){let t=this.tensorMap.get(e);t.refCount++}decRef(e){if(this.tensorMap.has(e)){let t=this.tensorMap.get(e);t.refCount--}}write(e,t,i){if("complex64"===i&&null!=e)throw Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");let r={id:this.nextDataId()};return this.tensorMap.set(r,{dtype:i,shape:t,values:e,refCount:1}),r}move(e,t,i,r,n){if("complex64"===r)throw Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.tensorMap.set(e,{dtype:r,shape:i,values:t,refCount:n})}submitQueue(){this.queue.submit([this.commandEncoder.finish()]),this.commandEncoder=null,this.dispatchCountInPass=0,this.commandQueueOwnedIds=new WeakSet,this.tensorDataPendingDisposal.forEach(e=>{this.releaseResource(e),this.tensorMap.delete(e)}),this.uniformPendingDisposal.forEach(e=>this.bufferManager.releaseBuffer(e)),this.stagingPendingDisposal.forEach(e=>this.bufferManager.releaseBuffer(e,!1)),this.tensorDataPendingDisposal=[],this.uniformPendingDisposal=[],this.stagingPendingDisposal=[]}ensureCommandEncoderReady(){this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder())}endComputePassEncoder(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}async checkCompileCompletionAsync(){let e;try{e=await Promise.all(Object.values(this.pipelineCache))}catch(e){throw Error(e.message)}Object.keys(this.pipelineCache).map((t,i)=>{this.pipelineCache[t]=e[i]})}async getBufferData(e){if((0,s.OBj)().getBool("WEBGPU_ENGINE_COMPILE_ONLY"))return console.warn("The data may be invalid since WEBGPU_ENGINE_COMPILE_ONLY is true, this can only be called when WEBGPU_ENGINE_COMPILE_ONLY is false"),null;let t=e.size,i=this.bufferManager.acquireBuffer(t,GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ);this.ensureCommandEncoderReady(),this.endComputePassEncoder(),this.commandEncoder.copyBufferToBuffer(e,0,i,0,t),this.submitQueue(),await i.mapAsync(GPUMapMode.READ);let r=i.getMappedRange().slice(0);return i.unmap(),null!=i&&this.bufferManager.releaseBuffer(i),(0,s.OBj)().getBool("WEBGPU_USE_PROFILE_TOOL")&&(s.D5U.assert(void 0!==this.dummyContext,()=>"Fail to get context for profiling tool"),this.dummyContext.getCurrentTexture()),r}convertAndCacheOnCPU(e,t){let i=this.tensorMap.get(e);return i.values=t,i.values}readSync(e){let t=this.tensorMap.get(e),{values:i,complexTensorInfos:r}=t;if(null!=i||"string"===t.dtype)return i;if("complex64"===t.dtype){let t=this.readSync(r.real.dataId),i=this.readSync(r.imag.dataId),n=s.D5U.convertBackendValuesAndArrayBuffer(s.backend_util.mergeRealAndImagArrays(t,i).buffer,"float32");return this.convertAndCacheOnCPU(e,n),n}this.hasReadSyncWarned||(this.hasReadSyncWarned=!0,console.warn("The performance of synchronously reading data from GPU to CPU is poor on the webgpu backend, please use asynchronous APIs instead."));let n=["opaque","premultiplied"],o=t.resource,a=o.size;s.D5U.assert(a%4==0,()=>"Because there is 4 bytes for one pixel, buffer size must be multiple of 4.");let u=a/4,l=new ArrayBuffer(a),h=n.map(e=>new OffscreenCanvas(256,256)),d=new OffscreenCanvas(256,256);this.endComputePassEncoder(),h.map((e,t)=>{let i=e.getContext("webgpu");return i.configure({device:this.device,format:"bgra8unorm",usage:GPUTextureUsage.COPY_DST,alphaMode:n[t]}),i.getCurrentTexture()}).map((e,t)=>{let i=(i,r,a)=>{this.ensureCommandEncoderReady(),this.commandEncoder.copyBufferToTexture({buffer:o,bytesPerRow:1024,offset:a},{texture:e},{width:i,height:r}),this.submitQueue();let s=d.getContext("2d",{willReadFrequently:!0});s.clearRect(0,0,i,r),s.drawImage(h[t],0,0);let u=s.getImageData(0,0,i,r).data,p=n[t],c=new Uint8ClampedArray(l,a,i*r*4);for(let e=0;e<c.length;e+=4)if("premultiplied"===p)c[e+3]=u[e+3];else{let t=u[e];c[e]=u[e+2],c[e+1]=u[e+1],c[e+2]=t}},r=Math.floor(u/65536),a=256,s=256,p=0;for(let e=0;e<r;e++)i(a,s,p),p+=262144;let c=u%65536;(s=Math.floor(c/256))>0&&(i(a,s,p),p+=1024*s),(a=c%256)>0&&i(a,1,p)});let p=s.D5U.convertBackendValuesAndArrayBuffer(l,t.dtype);return this.convertAndCacheOnCPU(e,p),p}async read(e){let t;if(!this.tensorMap.has(e))throw Error(`Tensor ${e} was not registered!`);let i=this.tensorMap.get(e),{values:r}=i;if(null!=r)return r;if("complex64"===i.dtype){let e=await Promise.all([this.read(i.complexTensorInfos.real.dataId),this.read(i.complexTensorInfos.imag.dataId)]),r=e[0],n=e[1];t=s.backend_util.mergeRealAndImagArrays(r,n)}else{let e=await this.getBufferData(i.resource);t=s.D5U.convertBackendValuesAndArrayBuffer(e,i.dtype)}return this.convertAndCacheOnCPU(e,t),t}copyBuffer(e){let t=e.size,i=e.usage,r=this.bufferManager.acquireBuffer(t,i);return this.ensureCommandEncoderReady(),this.endComputePassEncoder(),this.commandEncoder.copyBufferToBuffer(e,0,r,0,t),this.submitQueue(),r}createTensorFromGPUData(e,t,i){let r=e.buffer;if("complex64"===i)throw Error("Cannot write to a complex64 dtype. ");let n={id:this.nextDataId()};this.tensorMap.set(n,{dtype:i,shape:t,values:null,refCount:1,external:e.zeroCopy});let o=this.tensorMap.get(n),a=F(o.dtype)*s.D5U.sizeFromShape(o.shape);if(e.buffer.size<a)throw Error(`GPUBuffer size(${e.buffer.size}) is smaller than tensor size(${a})!`);if((e.buffer.usage&(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC))!=(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC))throw Error("GPUBuffer.usage should include GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC!");return!0!==e.zeroCopy&&(r=this.copyBuffer(r)),o.resource=r,(0,s.SRH)().makeTensorFromDataId(n,t,i,this)}readToGPU(e){let{values:t,dtype:i,shape:r,resource:n}=this.tensorMap.get(e);if("complex64"===i)throw Error("Does not support reading buffer for complex64 dtype.");if(null==n){if(null!=t)throw Error("Data is not on GPU but on CPU.");throw Error("There is no data on GPU or CPU.")}let o=n.size,a=n.usage,u=this.bufferManager.acquireBuffer(o,a);this.ensureCommandEncoderReady(),this.endComputePassEncoder(),this.commandEncoder.copyBufferToBuffer(n,0,u,0,o),this.submitQueue();let l=this.makeTensorInfo(r,i),h=(0,s.SRH)().makeTensorFromTensorInfo(l);return this.tensorMap.get(l.dataId).resource=u,{tensorRef:h,buffer:u}}bufferSync(e){let t=this.readSync(e.dataId);if("string"===e.dtype)try{let i=t.map(e=>s.D5U.decodeString(e));return(0,s.f3b)(e.shape,e.dtype,i)}catch(e){throw Error("Failed to decode encoded string bytes into utf-8")}return(0,s.f3b)(e.shape,e.dtype,t)}async time(e){this.supportTimestampQuery||this.hasTimestampQueryWarned||(console.warn("This device doesn't support timestamp-query extension. Start Chrome browser with flag --enable-dawn-features=allow_unsafe_apis to try it again. Otherwise, zero will be shown for the kernel time when profiling mode is enabled."),this.hasTimestampQueryWarned=!0);let t=this.activeTimers,i=[],r=!1;null==this.programTimersStack?(this.programTimersStack=i,r=!0):this.activeTimers.push(i),this.activeTimers=i,e();let n=s.D5U.flatten(this.activeTimers.map(e=>e.query)).filter(e=>null!=e),o=s.D5U.flatten(this.activeTimers.map(e=>e.name)).filter(e=>null!=e);this.activeTimers=t,r&&(this.programTimersStack=null);let a={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},u=await Promise.all(n);return a.kernelMs=s.D5U.sum(u),a.getExtraProfileInfo=()=>u.map((e,t)=>({name:o[t],ms:e})).map(e=>`${e.name}: ${e.ms}`).join(", "),this.uploadWaitMs=0,this.downloadWaitMs=0,a}makeTensorInfo(e,t,i){return"string"===t&&null!=i&&i.length>0&&s.D5U.isString(i[0])&&(i=i.map(e=>s.D5U.encodeString(e))),{dataId:this.write(i,e,t),shape:e,dtype:t}}tensorToBinding(e){if(!e)return null;let t=this.tensorMap.get(e.dataId).resource;return t instanceof GPUBuffer?{buffer:t}:t instanceof GPUTexture?t.createView():t}uploadToGPU(e){let t;let i=this.tensorMap.get(e);if(null!=i.resource)return;let r=F(i.dtype)*s.D5U.sizeFromShape(i.shape),n=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST;if(i.values){if("unmapped"===(t=this.bufferManager.acquireBuffer(r,n,!0)).mapState){let e=this.bufferManager.acquireBuffer(r,GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC,!0,!1),n=e.getMappedRange();"int32"===i.dtype||"bool"===i.dtype?new Int32Array(n).set(i.values):new Float32Array(n).set(i.values),e.unmap(),this.ensureCommandEncoderReady(),this.endComputePassEncoder(),this.commandEncoder.copyBufferToBuffer(e,0,t,0,r),this.stagingPendingDisposal.push(e)}else{let e=t.getMappedRange();"int32"===i.dtype||"bool"===i.dtype?new Int32Array(e).set(i.values):new Float32Array(e).set(i.values),t.unmap()}i.values=null}else t=this.bufferManager.acquireBuffer(r,n);i.resource=t}makeUniforms(e){let t=0,i=0,r=[],n=1;e.forEach(e=>{let o;switch(0===e.data.length&&(e.data=[1]),e.data.length){case 1:o=4;break;case 2:o=8;break;case 3:case 4:case 5:case 6:o=16;break;default:s.D5U.assert(!1,()=>`Unsupported ${e.data.length}D shape`)}(5===i||6===i)&&(o=16),o>n&&(n=o),t=Math.ceil(t/o)*o,i=e.data.length,r.push(t),t+=4*e.data.length});let o=new ArrayBuffer(t=Math.ceil(t/n)*n);e.forEach((e,t)=>{let i=r[t];"int32"===e.type?new Int32Array(o,i,e.data.length).set(e.data):"uint32"===e.type?new Uint32Array(o,i,e.data.length).set(e.data):new Float32Array(o,i,e.data.length).set(e.data)});let a=this.bufferManager.acquireBuffer(t,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);return this.queue.writeBuffer(a,0,o,0,t),this.uniformPendingDisposal.push(a),{offset:0,size:t,buffer:a}}runWebGPUProgram(e,t,i,r,n){if(n||(n=this.makeTensorInfo(e.outputShape,i)),0===s.D5U.sizeFromShape(n.shape))return this.tensorMap.get(n.dataId).values=s.D5U.getTypedArrayFromDType(n.dtype,0),n;this.uploadToGPU(n.dataId),e.dispatch=L(this.device,e);let o=t.map((t,i)=>{if("complex64"===t.dtype)throw Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");return this.uploadToGPU(t.dataId),{dtype:this.tensorMap.get(t.dataId).dtype,shape:t.shape,name:e.variableNames[i]}});e.shaderKey=function(e,t,i){let r=e.shaderKey;if(null!=e.pixelsOpType)return r;let n=[],o=[];t.forEach(e=>{n.push(e.shape),o.push(e.dtype)}),n.push(i.shape),o.push(i.dtype);let a=t.map(e=>s.backend_util.getBroadcastDims(e.shape,i.shape)),u=t.map(e=>s.D5U.arraysEqual(e.shape,i.shape)).join("_"),l=a.map(e=>e.join("_")).join(";"),h=I(e)?"flatDispatch":"";return r+("_"+(e.workgroupSize?e.workgroupSize.join(","):"")+n.map(e=>e.length).join(",")+o.join(",")+e.variableNames.join(",")+l+u)+h}(e,o,n);let a=(0,s.OBj)().getBool("WEBGPU_ENGINE_COMPILE_ONLY");return e.shaderKey in this.pipelineCache||(this.pipelineCache[e.shaderKey]=g(this.device,e,o,n,a)),e.pipeline=this.pipelineCache[e.shaderKey],a||this.recordAndSubmit(e,n,t,r),n}recordAndSubmit(e,t,i,r){if(e.pipeline instanceof Promise)throw Error("Please call checkCompileCompletionAsync to ensure parallel compilation is done!");let n=[],o=[],a="int32";if(null==e.pixelsOpType){n.push({type:"float32",data:[NaN]},{type:"float32",data:[1/0]});let e="int32";i.concat(t).map(e=>e.shape).map(t=>{n.push({type:e,data:t});let i=s.D5U.computeStrides(t);n.push({type:e,data:i})})}else{let e=s.D5U.computeStrides(t.shape);n.push({type:a,data:e})}if(e.size){let t=s.D5U.sizeFromShape(e.outputShape);n.push({type:a,data:[e.outputComponent?t/e.outputComponent:t]})}r&&(n=[...n,...r]);let u=[this.tensorToBinding(t),...i.map(e=>this.tensorToBinding(e)),this.makeUniforms(n)];i.forEach(e=>{this.commandQueueOwnedIds.add(e.dataId)}),this.commandQueueOwnedIds.add(t.dataId);let l=this.device.createBindGroup({layout:e.pipeline.getBindGroupLayout(0),entries:u.map((e,t)=>({binding:t,resource:e}))}),h=null!=this.activeTimers;this.ensureCommandEncoderReady();let d={};h&&this.supportTimestampQuery?(this.endComputePassEncoder(),null==this.querySet&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.querySetCount})),d.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1},this.computePassEncoder=this.commandEncoder.beginComputePass(d)):this.computePassEncoder||(this.computePassEncoder=this.commandEncoder.beginComputePass(d)),this.computePassEncoder.setPipeline(e.pipeline),this.computePassEncoder.setBindGroup(0,l),this.computePassEncoder.dispatchWorkgroups(e.dispatch[0],e.dispatch[1],e.dispatch[2]),this.dispatchCountInPass++,(h||(0,s.OBj)().get("WEBGPU_DEFERRED_SUBMIT_BATCH_SIZE")<=this.dispatchCountInPass||e.pixelsOpType===sP.DRAW)&&(this.endComputePassEncoder(),h?this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime()}):this.submitQueue())}async getQueryTime(){if(!this.supportTimestampQuery)return 0;null==this.queryResolveBuffer&&(this.queryResolveBuffer=this.bufferManager.acquireBuffer(8*this.querySetCount,GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST|GPUBufferUsage.QUERY_RESOLVE)),this.commandEncoder.resolveQuerySet(this.querySet,0,this.querySetCount,this.queryResolveBuffer,0);let e=this.bufferManager.acquireBuffer(8*this.querySetCount,GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST);this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,8*this.querySetCount),this.submitQueue(),await e.mapAsync(GPUMapMode.READ);let t=new BigUint64Array(e.getMappedRange()),i=Number(t[1]-t[0])/1e6;return e.unmap(),this.bufferManager.releaseBuffer(e),i}shouldExecuteOnCPU(e,t=E){return(0,s.OBj)().getBool("WEBGPU_CPU_FORWARD")&&e.every(e=>null==this.tensorMap.get(e.dataId).resource&&s.D5U.sizeFromShape(e.shape)<t)}numDataIds(){return this.tensorMap.numDataIds()-this.tensorDataPendingDisposal.length}dispose(){this.disposed||(null!=this.querySet&&this.querySet.destroy(),this.bufferManager.dispose(),this.textureManager.dispose(),this.disposed=!0)}}O.nextDataId=0,z()&&(0,s.jqO)("webgpu",async()=>{let e={powerPreference:(0,s.OBj)().get("WEBGPU_USE_LOW_POWER_GPU")?"low-power":"high-performance"},t=await navigator.gpu.requestAdapter(e),i={},r=[];t.features.has("timestamp-query")&&r.push("timestamp-query"),t.features.has("bgra8unorm-storage")&&r.push(["bgra8unorm-storage"]),i.requiredFeatures=r;let n=t.limits;return i.requiredLimits={maxComputeWorkgroupStorageSize:n.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:n.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:n.maxStorageBufferBindingSize,maxBufferSize:n.maxBufferSize,maxComputeWorkgroupSizeX:n.maxComputeWorkgroupSizeX,maxComputeInvocationsPerWorkgroup:n.maxComputeInvocationsPerWorkgroup},new O(await t.requestDevice(i),"info"in t?t.info:"requestAdapterInfo"in t?await t.requestAdapterInfo():void 0)},3),(sk=sA||(sA={}))[sk.ADD=0]="ADD",sk[sk.ATAN2=1]="ATAN2",sk[sk.COMPLEX_MULTIPLY_IMAG=2]="COMPLEX_MULTIPLY_IMAG",sk[sk.COMPLEX_MULTIPLY_REAL=3]="COMPLEX_MULTIPLY_REAL",sk[sk.DIV=4]="DIV",sk[sk.ELU_DER=5]="ELU_DER",sk[sk.EQUAL=6]="EQUAL",sk[sk.FLOOR_DIV=7]="FLOOR_DIV",sk[sk.GREATER=8]="GREATER",sk[sk.GREATER_EQUAL=9]="GREATER_EQUAL",sk[sk.LESS=10]="LESS",sk[sk.LESS_EQUAL=11]="LESS_EQUAL",sk[sk.LOGICAL_AND=12]="LOGICAL_AND",sk[sk.LOGICAL_OR=13]="LOGICAL_OR",sk[sk.MAX=14]="MAX",sk[sk.MIN=15]="MIN",sk[sk.MOD=16]="MOD",sk[sk.MUL=17]="MUL",sk[sk.NOT_EQUAL=18]="NOT_EQUAL",sk[sk.POW=19]="POW",sk[sk.PRELU=20]="PRELU",sk[sk.SQUARED_DIFFERENCE=21]="SQUARED_DIFFERENCE",sk[sk.SUB=22]="SUB";let U=`
  let zero = sign(a) * 0 + 0;
  let one = sign(b) * 0 + 1;
  let resultTemp = select(zero, one, a == b);
`,M=`
  let remainder =
      select(a % b, round(a % b), (round(a) == a) & (round(b) == b));
  let quotient = (a - remainder) / b;
  let resultTemp =
      round(select(quotient, quotient - 1, sign(remainder) == -sign(b)));
`,B=`
  let zero = sign(a) * 0 + 0;
  let one = sign(b) * 0 + 1;
  let resultTemp = select(zero, one, a > b);
`,W=`
  let zero = sign(a) * 0 + 0;
  let one = sign(b) * 0 + 1;
  let resultTemp = select(zero, one, a >= b);
`,V=`
  let zero = sign(a) * 0 + 0;
  let one = sign(b) * 0 + 1;
  let resultTemp = select(zero, one, a < b);
`,H=`
  let zero = sign(a) * 0 + 0;
  let one = sign(b) * 0 + 1;
  let resultTemp = select(zero, one, a <= b);
`,G=`return (vec4<f32>(a >= vec4<f32>(1.0)) *
  vec4<f32>(b >= vec4<f32>(1.0)));`,j=`return min(vec4<f32>(a >= vec4<f32>(1.0)) +
  vec4<f32>(b >= vec4<f32>(1.0)), vec4<f32>(1.0));`,X=`
  let isNaN = b == 0.;
  var resultTemp = a % b;
  resultTemp = select((resultTemp + b) % b, resultTemp,
      (a < 0. && b < 0.) || (a >= 0. && b > 0.));
`,K=`
  let isNaN = !vec4<bool>(b);
  var resultTemp = vec4<f32>(a % b);
  if (!((a[0] < 0. && b[0] < 0.) || (a[0] >= 0. && b[0] > 0.))) {
    resultTemp[0] = (resultTemp[0] + b[0]) % b[0];
  }
  if (!((a[1] < 0. && b[1] < 0.) || (a[1] >= 0. && b[1] > 0.))) {
    resultTemp[1] = (resultTemp[1] + b[1]) % b[1];
  }
  if (!((a[2] < 0. && b[2] < 0.) || (a[2] >= 0. && b[2] > 0.))) {
    resultTemp[2] = (resultTemp[2] + b[2]) % b[2];
  }
  if (!((a[3] < 0. && b[3] < 0.) || (a[3] >= 0. && b[3] > 0.))) {
    resultTemp[3] = (resultTemp[3] + b[3]) % b[3];
  }
`,Y=`
  var resultTemp = f32(a != b);
  let valueForNaN = 1.0;
`,q=`
  var resultTemp = vec4<f32>(a != b);
  let valueForNaN = 1.0;
`,Q=`
  let isNaN = a < 0.0 && floor(b) < b;
  if (b == 0.0) {
    return 1.0;
  }
  var resultTemp = select(sign(a) * pow(abs(a), b), pow(abs(a), b),
      round(abs(b) % 2.0) != 1.0);
`,Z=`
  let isModRound1Bool = vec4<i32>(round(abs(b) % vec4<f32>(2.0))) == vec4<i32>(1);
  let isModRound1 = vec4<f32>(isModRound1Bool);
  let multiplier = sign(a) * isModRound1 + (vec4<f32>(1.0) - isModRound1);
  var resultTemp = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  let isExpZero = b == vec4<f32>(0.0);
  if (isExpZero.r) {
    resultTemp.r = 1.0;
  }
  if (isExpZero.g) {
    resultTemp.g = 1.0;
  }
  if (isExpZero.b) {
    resultTemp.b = 1.0;
  }
  if (isExpZero.a) {
    resultTemp.a = 1.0;
  }
  let isNaN = (a < vec4<f32>(0.0)) & (floor(b) < b);
`,J=`
  let aLessThanZero = vec4<f32>(a < vec4<f32>(0.0));
  return (aLessThanZero * (b * a)) + ((vec4<f32>(1.0) - aLessThanZero) * a);
`;function ee(e,t){let i;do{let r,n,o;switch(e){case sA.ATAN2:i="let resultTemp = atan2(a, b);";break;case sA.MAX:i="let resultTemp = max(a, b);";break;case sA.MIN:i="let resultTemp = min(a, b);";break;case sA.MOD:i=t?K:X;break;case sA.NOT_EQUAL:i=t?q:Y;break;case sA.POW:i=t?Z:Q;break;default:continue}return t?(r="isnanVec4",n="vec4<f32>",o="vec4<bool>"):(r="isnan",n="f32",o="bool"),`
      let aIsNaN = ${r}(a);
      let aPostLegalization = select(a, ${n}(42), aIsNaN);
      let bIsNaN = ${r}(b);
      let bPostLegalization = select(b, ${n}(42), bIsNaN);
      let isNaN = false;
      let valueForNaN = uniforms.NAN;
      {
        let a = aPostLegalization;
        let b = bPostLegalization;
        ${i}
        return select(
            resultTemp, ${n}(valueForNaN),
            ${o}(isNaN) | aIsNaN | bIsNaN);
      }
    `}while(!1);switch(e){case sA.ADD:i="let resultTemp = a + b;";break;case sA.COMPLEX_MULTIPLY_IMAG:i="let resultTemp = areal * bimag + aimag * breal;";break;case sA.COMPLEX_MULTIPLY_REAL:i="let resultTemp = areal * breal - aimag * bimag;";break;case sA.DIV:i="let resultTemp = a / b;";break;case sA.ELU_DER:i="let resultTemp = select(a * (b + 1.0), a, b >= b - b);";break;case sA.EQUAL:i=U;break;case sA.FLOOR_DIV:i=M;break;case sA.GREATER:i=B;break;case sA.GREATER_EQUAL:i=W;break;case sA.LESS:i=V;break;case sA.LESS_EQUAL:i=H;break;case sA.LOGICAL_AND:return t?G:"return f32(a >= 1.0 && b >= 1.0);";case sA.LOGICAL_OR:return t?j:"return f32(a >= 1.0 || b >= 1.0);";case sA.MUL:i="let resultTemp = a * b;";break;case sA.PRELU:return t?J:"if (a < 0.0) { return b * a; }  return a;";case sA.SQUARED_DIFFERENCE:i="let resultTemp = (a - b) * (a - b);";break;case sA.SUB:i="let resultTemp = a - b;"}return`
    ${i}
    return resultTemp;
  `}(sI=sT||(sT={}))[sI.ABS=0]="ABS",sI[sI.ACOS=1]="ACOS",sI[sI.ACOSH=2]="ACOSH",sI[sI.ASIN=3]="ASIN",sI[sI.ASINH=4]="ASINH",sI[sI.ATAN=5]="ATAN",sI[sI.ATANH=6]="ATANH",sI[sI.CEIL=7]="CEIL",sI[sI.COS=8]="COS",sI[sI.COSH=9]="COSH",sI[sI.ELU=10]="ELU",sI[sI.ERF=11]="ERF",sI[sI.EXP=12]="EXP",sI[sI.EXPM1=13]="EXPM1",sI[sI.FLOOR=14]="FLOOR",sI[sI.IS_FINITE=15]="IS_FINITE",sI[sI.IS_INF=16]="IS_INF",sI[sI.IS_NAN=17]="IS_NAN",sI[sI.LINEAR=18]="LINEAR",sI[sI.LOG=19]="LOG",sI[sI.LOG1P=20]="LOG1P",sI[sI.LOGICAL_NOT=21]="LOGICAL_NOT",sI[sI.NEG=22]="NEG",sI[sI.RELU=23]="RELU",sI[sI.RELU6=24]="RELU6",sI[sI.LEAKYRELU=25]="LEAKYRELU",sI[sI.RECIPROCAL=26]="RECIPROCAL",sI[sI.ROUND=27]="ROUND",sI[sI.RSQRT=28]="RSQRT",sI[sI.SELU=29]="SELU",sI[sI.SIGMOID=30]="SIGMOID",sI[sI.SIGN=31]="SIGN",sI[sI.SIN=32]="SIN",sI[sI.SINH=33]="SINH",sI[sI.SOFTPLUS=34]="SOFTPLUS",sI[sI.SQRT=35]="SQRT",sI[sI.SQUARE=36]="SQUARE",sI[sI.STEP=37]="STEP",sI[sI.TAN=38]="TAN",sI[sI.TANH=39]="TANH",sI[sI.TO_INT=40]="TO_INT";let et=`
  if (abs(a) > 1.) {
    return uniforms.NAN;
  }
  return acos(a);
`,ei=`
  if (a < 1.) {
    return uniforms.NAN;
  }
  return acosh(a);
`,er=`
  if (abs(a) > 1.) {
    return uniforms.NAN;
  }
  return asin(a);
`,en=`
  if (isnan(a)) {
    return uniforms.NAN;
  }
  return atan(a);
`,eo=`
  if (abs(a) > 1.) {
    return uniforms.NAN;
  }
  if (a == 1.) {
    return uniforms.INFINITY;
  }
  if (a == -1.) {
    return -uniforms.INFINITY;
  }
  return atanh(a);
`,ea=`
  let e2x = exp(-a);
  return (e2x + 1.0 / e2x) / 2.0;
`,es=`
  var resFloat = exp(a) - vec4<f32>(1.0);
  if (a.r >= 0.0) {
    resFloat.r = a.r;
  }
  if (a.g >= 0.0) {
    resFloat.g = a.g;
  }
  if (a.b >= 0.0) {
    resFloat.b = a.b;
  }
  if (a.a >= 0.0) {
    resFloat.a = a.a;
  }
  return resFloat;
`,eu=`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  let p = ${s.backend_util.ERF_P};
  let a1 = ${s.backend_util.ERF_A1};
  let a2 = ${s.backend_util.ERF_A2};
  let a3 = ${s.backend_util.ERF_A3};
  let a4 = ${s.backend_util.ERF_A4};
  let a5 = ${s.backend_util.ERF_A5};

  let sign = sign(a);
  let absA = abs(a);
  let t = 1.0 / (1.0 + p * absA);
  return sign * (1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * exp(-absA * absA));
`,el=`if (a < 0.0) { return uniforms.NAN; }
  return log(a);`,eh=`
  if (isnan(a)) { return a; }
  return log(1.0 + a);
`,ed=`
  let aLessThanZero = vec4<f32>(a < vec4<f32>(0.0));
  return (aLessThanZero * (uniforms.alpha * a)) + ((vec4<f32>(1.0) - aLessThanZero) * a);
`,ep=`
  return select(a, vec4<f32>(0.0), a < vec4<f32>(0.0));
`,ec=`
  if (a >= 0.0) {
    return ${s.backend_util.SELU_SCALE} * a;
  } else {
    return ${s.backend_util.SELU_SCALEALPHA} * (exp(a) - 1.0);
  }
`,ef=`
  let e2x = exp(a);
  return (e2x - 1.0 / e2x) / 2.0;
`,em=`
  let epsilon = 1.1920928955078125e-7;
  let threshold = log(epsilon) + 2.0;

  let too_large = a > -threshold;
  let too_small = a < threshold;
  let exp_a = exp(a);

  if (too_large) {
    return a;
  } else if (too_small) {
    return exp_a;
  } else {
    return log(exp_a + 1.0);
  }
`,eg=`
  if (isnan(a)) {
    return a;
  }

  return select(uniforms.stepAlpha, 1.0, a > 0.0);
`,ey=`
  let e2x = exp(-2.0 * abs(a));
  return sign(a) * (1.0 - e2x) / (1.0 + e2x);
`;function ex(e,t){switch(e){case sT.ABS:return"return abs(a);";case sT.ACOS:return et;case sT.ACOSH:return ei;case sT.ASIN:return er;case sT.ASINH:return"return asinh(a);";case sT.ATAN:return en;case sT.ATANH:return eo;case sT.COS:return"return cos(a);";case sT.COSH:return ea;case sT.CEIL:return"return ceil(a);";case sT.ELU:return t?es:"if (a >= 0.0) { return a; }  return (exp(a) - 1.0);";case sT.ERF:return eu;case sT.EXP:return"return exp(a);";case sT.EXPM1:return"return exp(a) - 1.0;";case sT.FLOOR:return"return floor(a);";case sT.IS_FINITE:return"return f32(!isnan(a) && !isinf(a));";case sT.IS_INF:return"return f32(isinf(a));";case sT.IS_NAN:return"return f32(isnan(a));";case sT.LINEAR:return"return a;";case sT.LOG:return el;case sT.LOG1P:return eh;case sT.LOGICAL_NOT:return"return f32(!(a >= 1.0));";case sT.NEG:return"return -a;";case sT.LEAKYRELU:return t?ed:"if (a < 0.0) { return uniforms.alpha * a; } return a;";case sT.RECIPROCAL:return"return 1.0 / a;";case sT.RELU:return t?ep:"return select(a, 0.0, a < 0.0);";case sT.RELU6:return t?"return clamp(a, vec4<f32>(0.0, 0.0, 0.0, 0.0), vec4<f32>(6.0, 6.0, 6.0, 6.0));":"return clamp(a, 0.0, 6.0);";case sT.ROUND:return"return round(a);";case sT.RSQRT:return"return inverseSqrt(a);";case sT.SELU:return ec;case sT.SIGMOID:return"return 1.0 / (1.0 + exp(-1.0 * a));";case sT.SIGN:return"return sign(a);";case sT.SIN:return"return sin(a);";case sT.SINH:return ef;case sT.SOFTPLUS:return em;case sT.SQRT:return"return sqrt(a);";case sT.SQUARE:return"return a * a;";case sT.STEP:return eg;case sT.TAN:return"return tan(a);";case sT.TANH:return ey;case sT.TO_INT:return"return f32(i32((a)));";default:throw Error(`BinaryType ${e} is not implemented!`)}}function ev(e,t=!1,i=!1,r=3){if(null===e)return"";let n="";if("linear"===e)n=ex(sT.LINEAR);else if("relu"===e)n=ex(sT.RELU,i);else if("elu"===e)n=ex(sT.ELU,i);else if("relu6"===e)n=ex(sT.RELU6,i);else if("prelu"===e)n=ee(sA.PRELU,i);else if("sigmoid"===e)n=ex(sT.SIGMOID,i);else if("leakyrelu"===e)n=ex(sT.LEAKYRELU,i);else throw Error(`Activation ${e} has not been implemented for the WebGPU backend.`);let o=y(i?4:1);return t?`
      fn activation(a : ${o}, coords : vec${r}<i32>) -> ${o} {
        let b = getPreluActivationWeightsByOutputCoords(coords);
        ${n}
      }`:`
      fn activation(a : ${o}, coords : vec${r}<i32>) -> ${o} {
        ${n}
      }`}function eb(e,t){return`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      ${t?"value = activation(value, coords);":""}
      `}function ew(e,t,i=!1,r=!1,n=!1,o=1){s.D5U.assert(e&&1===o||!e,()=>`transposeA ${e} is not compatible with component size ${o}`);let a=`
      ${e?"value = getA(batch, col, row);":"value = getA(batch, row, col);"}

    `;return`
  fn mm_readA(batch: i32, row: i32, col: i32) -> ${y(o)} {
    var value = ${y(o)}(0.0);
    ${i&&n?a:`
    ${e?"if(row < uniforms.dimAOuter && col < uniforms.dimInner)":"if(row < uniforms.aShape[1] && col < uniforms.aShape[2])"}
    {
      ${a}
    }
    `}
    return value;
  }

  fn mm_readB(batch: i32, row: i32, col: i32) -> ${y(o)} {
    var value = ${y(o)}(0.0);
    ${t?"value = getB(batch, col, row);":"value = getB(batch, row, col);"}
    return value;
  }
  `}function eS(e,t,i,r,n=!1,o=!1,a=!1,s=1){return`
  ${ew(i,r,n,o,a,s)}
  fn mm_write(batch: i32, row: i32, col: i32, valueIn: ${y(s)}) {
    ${n&&o?"":"if (row < uniforms.dimAOuter && col < uniforms.dimBOuter)"}
    {
      var value = valueIn;
      let coords = vec3<i32>(batch, row, col);
      ${eb(e,t)}
      setOutputAtCoords(coords[0], coords[1], coords[2], value);
    }
  }
  `}let eC=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batchA,
          kStart + inputRow,
          globalRowStart + inputCol * ${t});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batchA,
          globalRow + innerRow,
          kStart + inputCol * ${t});
        `,ek=(e,t,i,r)=>{if(e)return`
      for (var k = 0; k < ${r}; k++) {
        let BCached0 = mm_Bsub[k][tileCol];
        let ACached0 = mm_Asub[k][localRow];
        for (var i = 0; i < ${i}; i++) {
          acc[i] = fma(BCached0, vec4<f32>(ACached0[i]), acc[i]);
        }
      }`;{let e="",n="";for(let i=0;i<t;i++)e+=`let BCached${i} = mm_Bsub[k * ${t} + ${i}][tileCol];`,n+=`acc[i] = fma(BCached${i}, vec4<f32>(ACached[${i}]), acc[i]);`;return`
      for (var k = 0; k < ${r/t}; k++) {
        ${e}
        for (var i = 0; i < ${i}; i++) {
          let ACached = mm_Asub[tileRow + i][k];
          ${n}
        }
      }`}};function eI(e,t,i=!1,r=32,n=!1,o=32,a=!1){let u=t[1]*e[1],l=t[0]*e[0],h=i?u:r,d=i?r:u,p=h/t[0],c=r/t[1],f=e[1],m=e[0];return s.D5U.assert((i&&4===p&&4===e[1]||!i&&(3===p||4===p))&&h%t[0]==0&&r%t[1]==0&&4===e[0],()=>`If transposeA ${i} is true, innerElementSize ${p} and workPerThread[1] ${e[1]} must be 4.
          Otherwise, innerElementSize ${p} must be 3 or 4.
      tileAWidth ${h} must be divisible by workgroupSize[0]${t[0]}. tileInner ${r} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`),`
  var<workgroup> mm_Asub : array<array<vec${p}<f32>, ${h/p}>, ${d}>;
  var<workgroup> mm_Bsub : array<array<vec4<f32>, ${l/e[0]}>, ${r}>;

  ${b()} {
    let localRow = i32(localId.y);
    let tileRow = localRow * ${f};
    let tileCol = i32(localId.x);

    let globalRow = i32(globalId.y) * ${f};
    let globalCol = i32(globalId.x) * ${m};
    let batch = ${n?"0":"i32(globalId.z)"};
    let batchA = ${n||!a?"batch":"batch % uniforms.aShape[0]"};
    let batchB = ${n||!a?"batch":"batch % uniforms.bShape[0]"};
    let globalRowStart = i32(workgroupId.y) * ${u};

    let numTiles = ${n?`${Math.ceil(o/r)}`:`(uniforms.dimInner - 1) / ${r} + 1`};
    var kStart = ${n?`i32(globalId.z) * ${o}`:"0"};

    var acc: array<vec4<f32>, ${f}>;

    // Loop over shared dimension.
    let tileRowB = localRow * ${c};
    for (var t = 0; t < numTiles; t++) {
        // Load one tile of A into local memory.
        for (var innerRow = 0; innerRow < ${f}; innerRow++) {
            let inputRow = tileRow + innerRow;
            let inputCol = tileCol;
            ${eC(i,p)}
        }

        // Load one tile of B into local memory.
        for (var innerRow = 0; innerRow < ${c}; innerRow++) {
            let inputRow = tileRowB + innerRow;
            let inputCol = tileCol;
            mm_Bsub[inputRow][inputCol] = mm_readB(batchB, kStart + inputRow, globalCol);
        }
        kStart = kStart + ${r};
        workgroupBarrier();

        // Compute acc values for a single thread.
        ${ek(i,p,f,r)}
        workgroupBarrier();
    }

    for (var innerRow = 0; innerRow < ${f}; innerRow++) {
        mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
    }
  }`}let eR=e=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batchA,
          kStart + inputRow,
          globalRowStart + inputCol);
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batchA,
          globalRowStart + inputRow,
          kStart + inputCol);
        `,eP=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];";function e$(e,t,i=!1,r=32,n=!1,o=32,a=!1,u=!1){let l=e[1]*t[1],h=e[0]*t[0],d=i?l:r,p=i?r:l;s.D5U.assert(p%t[1]==0&&d%t[0]==0&&r%t[1]==0,()=>`tileAHight ${p} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${d} must be divisible by workgroupSize[0]${t[0]}, tileInner ${r} must be divisible by workgroupSize[1]${t[1]}`);let c=p/t[1],f=d/t[0],m=r/t[1],g=e[1],y=e[0],x=a?`
      let localRow = i32(localId.y);
      let localCol = i32(localId.x);
      let globalRowStart = i32(workgroupId.y) * ${l};
      let globalColStart = i32(workgroupId.x) * ${h};

      // Loop over shared dimension.
      for (var t = 0; t < numTiles; t++) {
        // Load one tile of A into local memory.
        for (var inputRow = localRow; inputRow < ${p}; inputRow = inputRow + ${t[1]}) {
          for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${t[0]}) {
            ${eR(i)}
          }
        }
        // Load one tile of B into local memory.
        for (var inputRow = localRow; inputRow < ${r}; inputRow = inputRow + ${t[1]}) {
              for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${t[0]}) {
            mm_Bsub[inputRow][inputCol] = mm_readB(batchB,
              kStart + inputRow,
              globalColStart + inputCol);
          }
        }
        kStart = kStart + ${r};
        workgroupBarrier();

        // Compute acc values for a single thread.
        var BCached : array<f32, ${y}>;
        for (var k = 0; k < ${r}; k++) {
          for (var inner = 0; inner < ${y}; inner++) {
            BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
          }
          for (var innerRow = 0; innerRow < ${g}; innerRow++) {
            let ACached = ${i?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
            for (var innerCol = 0; innerCol < ${y}; innerCol++) {
              acc[innerRow][innerCol] =
                  fma(ACached, BCached[innerCol], acc[innerRow][innerCol]);
            }
          }
        }
        workgroupBarrier();
      }
      for (var innerRow = 0; innerRow < ${g}; innerRow++) {
        let gRow = globalRowStart + localRow + innerRow * ${t[1]};
        for (var innerCol = 0; innerCol < ${y}; innerCol++) {
          let gCol = globalColStart + localCol + innerCol * ${t[0]};
          mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
        }
      }
      `:`
  let tileRow = i32(localId.y) * ${g};
  let tileCol = i32(localId.x) * ${y};

  let globalRow = i32(globalId.y) * ${g};
  let globalCol = i32(globalId.x) * ${y};
  let globalRowStart = i32(workgroupId.y) * ${l};

  let tileRowA = i32(localId.y) * ${c};
  let tileColA = i32(localId.x) * ${f};
  let tileRowB = i32(localId.y) * ${m};
  // Loop over shared dimension.
  for (var t = 0; t < numTiles; t++) {
    // Load one tile of A into local memory.
    for (var innerRow = 0; innerRow < ${c}; innerRow++) {
      for (var innerCol = 0; innerCol < ${f}; innerCol++) {
        let inputRow = tileRowA + innerRow;
        let inputCol = tileColA + innerCol;
        ${eR(i)}
      }
    }

    // Load one tile of B into local memory.
    for (var innerRow = 0; innerRow < ${m}; innerRow++) {
      for (var innerCol = 0; innerCol < ${y}; innerCol++) {
        let inputRow = tileRowB + innerRow;
        let inputCol = tileCol + innerCol;
        mm_Bsub[inputRow][inputCol] = mm_readB(batchB,
          kStart + inputRow,
          globalCol + innerCol);
      }
    }
    kStart = kStart + ${r};
    workgroupBarrier();

    // Compute acc values for a single thread.
    var BCached : array<f32, ${y}>;
    for (var k = 0; k < ${r}; k++) {
      for (var inner = 0; inner < ${y}; inner++) {
        BCached[inner] = mm_Bsub[k][tileCol + inner];
      }

      for (var innerRow = 0; innerRow < ${g}; innerRow++) {
        ${eP(i)}
        for (var innerCol = 0; innerCol < ${y}; innerCol++) {
          acc[innerRow][innerCol] =
              fma(ACached, BCached[innerCol], acc[innerRow][innerCol]);
        }
      }
    }

    workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < ${g}; innerRow++) {
    for (var innerCol = 0; innerCol < ${y}; innerCol++) {
      mm_write(batch, globalRow + innerRow, globalCol + innerCol,
          acc[innerRow][innerCol]);
    }
  }
  `;return`
    var<workgroup> mm_Asub : array<array<f32, ${d}>, ${p}>;
    var<workgroup> mm_Bsub : array<array<f32, ${h}>, ${r}>;

    ${b()} {
      let batch = ${n?"0":"i32(globalId.z)"};
      let batchA = ${n||!u?"batch":"batch % uniforms.aShape[0]"};
      let batchB = ${n||!u?"batch":"batch % uniforms.bShape[0]"};
      let numTiles = ${n?`${Math.ceil(o/r)}`:`(uniforms.dimInner - 1) / ${r} + 1`};
      var kStart = ${n?`i32(globalId.z) * ${o}`:"0"};

      var acc : array<array<f32, ${y}>, ${g}>;

      // Without this initialization strange values show up in acc.
      for (var innerRow = 0; innerRow < ${g}; innerRow++) {
        for (var innerCol = 0; innerCol < ${y}; innerCol++) {
          acc[innerRow][innerCol] = 0.0;
        }
      }
      ${x}
    }
  `}let eA=e=>e?`
      mm_readA(batchA, colA, globalRow),
      mm_readA(batchA, colA + 1, globalRow),
      mm_readA(batchA, colA + 2, globalRow),
      mm_readA(batchA, colA + 3, globalRow)
  `:`
      mm_readA(batchA, globalRow, colA),
      mm_readA(batchA, globalRow, colA + 1),
      mm_readA(batchA, globalRow, colA + 2),
      mm_readA(batchA, globalRow, colA + 3)
  `;class eT{constructor(e,t,i=!1,r=!1,n=null,o=null,a=null,s=!1){this.variableNames=["A","B"],this.uniforms="dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.outputShape=t,this.dispatchLayout={x:[2],y:[1],z:[0]};let u=i?e[1]:e[2];if(this.isVec4=(u%4==0&&!i||t[1]%4==0&&i)&&t[2]%4==0&&!r,this.outputComponent=this.isVec4?4:1,this.isVectorA=1===t[1]&&!i,!this.isVec4&&this.isVectorA)this.elementsPerThread=[1,1,1],this.workgroupSize=[32,1,1];else{let e=function(e,t,i,r=!1){let n=[8,8,1],o=[4,4,1];return!r&&(e<=8&&(o[1]=1),t<=16&&i<=16&&(n[0]=4)),{workgroupSize:n,elementsPerThread:o}}(t[1],u,t[2],i);this.workgroupSize=e.workgroupSize,this.elementsPerThread=e.elementsPerThread}this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize,this.elementsPerThread);let l=null!=n,h=null!=a;l&&this.variableNames.push("bias"),h&&this.variableNames.push("preluActivationWeights"),this.sequentialAccessByThreads=s,this.transposeA=i,this.transposeB=r,this.addBias=l,this.activation=o,this.hasPreluActivationWeights=h,[this.fitAOuter,this.fitBOuter,this.fitInner]=this.getShapeFit(t[1],t[2],u),this.shaderKey=`matMulPacked_${this.elementsPerThread}_${i}_${r}_${this.activation}_${this.fitAOuter}_${this.fitBOuter}_${this.fitInner}_${this.isVec4}_${this.isVectorA}_${this.sequentialAccessByThreads}`}getShapeFit(e,t,i){let r=this.workgroupSize[1]*this.elementsPerThread[1],n=this.workgroupSize[0]*this.elementsPerThread[0];return!this.isVec4&&this.isVectorA?this.tileInner=4*this.workgroupSize[0]:this.tileInner=n,[e%r==0,t%n==0,i%this.tileInner==0]}getUserCode(){return`
      ${ev(this.activation,this.hasPreluActivationWeights,this.isVec4)}
      ${eS(this.addBias,this.activation,!1,this.transposeB,this.fitAOuter,this.fitBOuter,this.fitInner,this.isVec4?4:1)}
      ${this.isVec4?eI(this.elementsPerThread,this.workgroupSize,this.transposeA,this.tileInner,!1,null,!0):this.isVectorA?function(e,t=!1){s.D5U.assert(1===e[1]&&1===e[2],()=>`A linear work group size is required. But got ${e}.`);let i=4*e[0];return`
    var<workgroup> mm_Asub : array<vec4<f32>, ${e[0]}>;

    ${b()} {
      let tileCol = i32(localId.x);
      let globalCol = i32(globalId.x);
      let globalRow = i32(globalId.y);

      let numTiles = (uniforms.dimInner - 1) / ${i} + 1;
      let batch = i32(globalId.z);
      let batchA = batch % uniforms.aShape[0];
      let batchB = batch % uniforms.bShape[0];
      // Without this initialization strange values show up in acc.
      var acc = 0.0;

      // Loop over shared dimension.
      for (var t = 0; t < numTiles; t++) {
        // Load one tile of A into local memory.
        let colA = t * ${i} + tileCol * 4;
        mm_Asub[tileCol] = vec4<f32>(${eA(t)});
        workgroupBarrier();

        // Compute acc values for a single thread.
        for (var k = 0; k < ${i/4}; k++) {
          let rowB = t * ${i} + k * 4;
          let BCached = vec4<f32>(mm_readB(batchB, rowB, globalCol),
                              mm_readB(batchB, rowB + 1, globalCol),
                              mm_readB(batchB, rowB + 2, globalCol),
                              mm_readB(batchB, rowB + 3, globalCol));

          let ACached = mm_Asub[k];
          acc = acc + dot(ACached, BCached);
        }

        workgroupBarrier();
      }

      mm_write(batch, globalRow, globalCol, acc);
    }
  `}(this.workgroupSize,this.transposeA):e$(this.elementsPerThread,this.workgroupSize,this.transposeA,this.tileInner,!1,null,this.sequentialAccessByThreads,!0)}
    `}}class e_{constructor(e,t=!1,i=!1,r=null,n=null,o=null){this.variableNames=["A","B"],this.uniforms="dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.workgroupSize=[256,1,1],this.outputShape=e,this.dispatchLayout={x:[],y:[1,2],z:[0]},this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize);let a=null!=r,s=null!=o;a&&this.variableNames.push("bias"),s&&this.variableNames.push("preluActivationWeights"),this.transposeA=t,this.transposeB=i,this.addBias=a,this.activation=n,this.hasPreluActivationWeights=s,this.shaderKey=`matMulReduce_${this.activation}_${t}_${i}`}getUserCode(){var e;return`
      ${ev(this.activation,this.hasPreluActivationWeights)}
      ${eS(this.addBias,this.activation,this.transposeA,this.transposeB)}
      ${e=this.workgroupSize[0],`
    var<workgroup> sumValues : array<f32, ${e}>;
    ${b()} {
      let coords = getOutputCoords();
      let batch = coords[0];
      let batchA = batch % uniforms.aShape[0];
      let batchB = batch % uniforms.bShape[0];
      let row = coords[1];
      let col = coords[2];
      var sum = 0.0;
      let Length = uniforms.dimInner;
      for (var k = i32(localId.x); k < Length; k = k + ${e}) {
        let dataA = mm_readA(batchA, row, k);
        let dataB = mm_readB(batchB, k, col);
        sum = sum + dataA * dataB;
      }
      sumValues[localId.x] = sum;
      workgroupBarrier();

      for(var currentSize = ${e/2}u; currentSize > 1u;
          currentSize = currentSize / 2u) {
        if (localId.x < currentSize)
        {
          sumValues[localId.x] = sumValues[localId.x] + sumValues[localId.x + currentSize];
        }
        workgroupBarrier();
      }

      if (localId.x == 0u) {
        sum = sumValues[0] + sumValues[1];
        mm_write(batch, row, col, sum);
      }
    }
  `}
    `}}class eN{constructor(e,t,i,r=!1,n=!1,o=null,a=null,s=null){this.variableNames=["A","B"],this.uniforms="dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.workgroupSize=[16,8,1],this.outputShape=i,this.dispatchLayout={x:[2],y:[1],z:[0]},this.dispatch=[Math.ceil(i[2]/this.workgroupSize[0]),Math.ceil(i[1]/this.workgroupSize[1]),i[0]];let u=null!=o;u&&this.variableNames.push("bias");let l=null!=s;l&&this.variableNames.push("preluActivationWeights"),this.transposeA=r,this.transposeB=n,this.addBias=u,this.activation=a,this.hasPreluActivationWeights=l,this.shaderKey=`matMulSmallOutputSize_${this.activation}_${r}_${n}`}getUserCode(){return`
      ${ev(this.activation,this.hasPreluActivationWeights)}
      ${eS(this.addBias,this.activation,this.transposeA,this.transposeB)}
      ${function(e){let t=e[1],i=e[0],r=t>i?t:i;return`
  var<workgroup> mm_Asub : array<array<f32, ${r}>, ${t}>;
  var<workgroup> mm_Bsub : array<array<f32, ${i}>, ${r}>;

  // If the output size is small for matrix multiplication, avoid to use vec4
  // and handle some elements per thread to optimally utilize the ALU.
  // Read data from global memory to registers firstly, then store them into
  // shared memory, so it is instruction-Level parallelism for arithmetic
  // operations and others handle IO operations between barrier api, makes ALU
  // and load/store units work simultaneously, could improves the performance.
  ${b()} {
    let tileRow = i32(localId.y);
    let tileCol = i32(localId.x);
    let globalRow = i32(globalId.y);
    let globalCol = i32(globalId.x);
    let batch = i32(globalId.z);
    let batchA = batch % uniforms.aShape[0];
    let batchB = batch % uniforms.bShape[0];

    // uniforms.dimInner should be greater than 0.
    let numTiles = (uniforms.dimInner - 1) / ${r} + 1;
    var acc = 0.0;

    var globalColA = tileCol;
    var globalRowB = 0;
    var regA = mm_readA(batchA, globalRow, globalColA);
    var regB0 = mm_readB(batchB, globalRowB + 2 * tileRow, globalCol);
    var regB1 = mm_readB(batchB, globalRowB + 2 * tileRow + 1, globalCol);
    globalColA = globalColA + ${r};
    globalRowB = globalRowB + ${r};

    for (var t = 0; t < numTiles; t = t + 1) {
      mm_Asub[tileRow][tileCol] = regA;
      mm_Bsub[2 * tileRow][tileCol] = regB0;
      mm_Bsub[2 * tileRow + 1][tileCol] = regB1;

      workgroupBarrier();

      regA = mm_readA(batchA, globalRow, globalColA);
      regB0 = mm_readB(batchB, globalRowB + 2 * tileRow, globalCol);
      regB1 = mm_readB(batchB, globalRowB + 2 * tileRow + 1, globalCol);
      globalColA = globalColA + ${r};
      globalRowB = globalRowB + ${r};

      for (var k = 0; k < ${r}; k = k + 1) {
        acc = acc + mm_Asub[tileRow][k] * mm_Bsub[k][tileCol];
      }
      workgroupBarrier();
    }

    mm_write(batch, globalRow, globalCol, acc);
  }
  `}(this.workgroupSize)}
    `}}class eF{constructor(e,t,i=!1,r=!1){this.variableNames=["A","B"],this.uniforms="dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.workgroupSize=[8,8,1],this.atomic=!0,this.splitedDimInner=128,s.D5U.assert(1===e[0],()=>"MatMulSplitKProgram only supports batch = 1."),this.outputShape=e,this.dispatchLayout={x:[2],y:[1],z:[0,3]};let n=(i&&this.outputShape[1]%4==0||!i&&t%4==0)&&this.outputShape[2]%4==0;this.elementsPerThread=[4,4,this.splitedDimInner],this.outputComponent=n?4:1,!n&&(this.outputShape[1]<16&&(this.elementsPerThread[1]=1),this.outputShape[2]<16&&(this.elementsPerThread[0]=1)),this.dispatch=A(this.dispatchLayout,[this.outputShape[0],this.outputShape[1],this.outputShape[2],t],this.workgroupSize,this.elementsPerThread),this.transposeA=i,this.transposeB=r,this.shaderKey=`matMulSplitK_${i}_${r}_${this.elementsPerThread}_${this.outputComponent}`}getUserCode(){let e=this.outputComponent;return`
      ${ew(!1,this.transposeB,!1,!1,!1,e)}
      fn mm_write(batch: i32, row : i32, col : i32, value : ${y(e)}) {
        if (row < uniforms.dimAOuter && col < uniforms.dimBOuter) {
          let coords = vec3<i32>(batch, row, col);
          let flatIndex = getOutputIndexFromCoords(coords);
          // The problem is that we should initialize output to zero before using.
          // Otherwise, the original value will be added to the result.
          for (var i = 0; i < ${e}; i = i + 1) {
            ${m("&result[flatIndex + i]",`${e>1?"value[i]":"value"}`,"float32")}
          }
        }
      }
      ${4===e?eI(this.elementsPerThread,this.workgroupSize,this.transposeA,32,!0,this.splitedDimInner):e$(this.elementsPerThread,this.workgroupSize,this.transposeA,32,!0,this.splitedDimInner)}
    `}}class ez{constructor(e,t=null,i=null,r=null){this.uniforms="",this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.addBias=null!=t,this.hasPreluActivationWeights=null!=r,this.activation=i,this.addBias&&this.variableNames.push("bias"),this.hasPreluActivationWeights&&this.variableNames.push("preluActivationWeights"),this.shaderKey=`biasActivation_${i}`}getUserCode(){return`
    ${ev(this.activation,this.hasPreluActivationWeights)}
    ${b("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        var value = getXByOutputIndex(index);
        ${eb(this.addBias,this.activation)}
        setOutputAtIndex(index, value);
      }
    }
    `}}class eD{constructor(e){this.variableNames=[],this.outputShape=[],this.uniforms="value : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="fill"}getUserCode(){return`
    ${b("index")} {
      if (index < uniforms.size) {
        setOutputAtIndex(index, uniforms.value);
      }
    }
  `}}function eE(e){let{backend:t,attrs:i}=e,{shape:r,value:n}=i,{dtype:o}=i;if("string"===(o=o||s.D5U.inferDtype(n))){let e=s.D5U.getArrayFromDType(o,s.D5U.sizeFromShape(r));return e.fill(n),t.makeTensorInfo(r,o,e)}{let e=new eD(r);return t.runWebGPUProgram(e,[],o,[{type:"float32",data:[n]}])}}let eL={kernelName:s.deh,backendName:"webgpu",kernelFunc:eE};function eO(e){let{inputs:t,attrs:i}=e,{x:r}=t,{shape:n}=i,o=s.D5U.sizeFromShape(r.shape),a=s.D5U.inferFromImplicitShape(n,o),u=s.D5U.sizeFromShape(a);return s.D5U.assert(o===u,()=>`The new shape (${a}) has ${u} elements and the old shape (${r.shape}) has ${o} elements. The new shape and old shape must have the same number of elements.`),e.backend.incRef(r.dataId),{dataId:r.dataId,shape:a,dtype:r.dtype}}let eU={kernelName:s.HZH,backendName:"webgpu",kernelFunc:eO};function eM({a:e,b:t,transposeA:i,transposeB:r,backend:n,bias:o=null,preluActivationWeights:a=null,leakyreluAlpha:u=0,activation:l=null}){let h,d;let p=e.shape.length,c=t.shape.length,f=i?e.shape[p-2]:e.shape[p-1],m=r?t.shape[c-1]:t.shape[c-2],g=i?e.shape[p-1]:e.shape[p-2],y=r?t.shape[c-2]:t.shape[c-1],x=e.shape.slice(0,-2),v=t.shape.slice(0,-2),b=s.D5U.sizeFromShape(x),w=s.D5U.sizeFromShape(v),S=s.Jyw.assertAndGetBroadcastShape(e.shape.slice(0,-2),t.shape.slice(0,-2)).concat([g,y]);s.D5U.assert(f===m,()=>`Error in matMul: inner shapes (${f}) and (${m}) of Tensors with shapes ${e.shape} and ${t.shape} and transposeA=${i} and transposeB=${r} must match.`);let C=i?[b,f,g]:[b,g,f],k=r?[w,y,m]:[w,m,y],I=eO({inputs:{x:e},backend:n,attrs:{shape:C}}),R=eO({inputs:{x:t},backend:n,attrs:{shape:k}}),P=[I,R],$=Math.max(b,w),A=[I,R],T=[{type:"int32",data:[g]},{type:"int32",data:[y]},{type:"int32",data:[f]}],_=[$,g,y],N=(0,s.OBj)().get("WEBGPU_MATMUL_PROGRAM_TYPE");if(N<0){let e=(0,s.OBj)().getNumber("WEBGPU_THRESHOLD_TO_INCREASE_WORKGROUPS_FOR_MATMUL"),t=e>0?e:n.thresholdToIncreaseWorkgroups,i=$*Math.ceil(g/32)*Math.ceil(y/32);N=i<=t||g<=8&&i<=2*t?$*g*y<=128?s$.MatMulReduceProgram:1===$&&m>=2e3?s$.MatMulSplitKProgram:s$.MatMulSmallOutputSizeProgram:s$.MatMulPackedProgram}switch(N){case s$.MatMulReduceProgram:h=new e_(_,i,r,o,l,a);break;case s$.MatMulSplitKProgram:if(d=eE({backend:n,attrs:{shape:_,value:0,dtype:e.dtype}}),h=new eF(_,m,i,r),o||l){let t=new ez((d=n.runWebGPUProgram(h,A,e.dtype,T,d)).shape,o,l,a),i=null,r=[d];o&&r.push(o),a&&r.push(a),"leakyrelu"===l&&(i=[{type:"float32",data:[u]}],t.uniforms+=" alpha : f32,");let s=n.runWebGPUProgram(t,r,d.dtype,i);P.push(d);let p=eO({inputs:{x:s},backend:n,attrs:{shape:S}});for(let e of(P.push(s),P))n.disposeData(e.dataId);return p}break;case s$.MatMulSmallOutputSizeProgram:h=new eN(C,k,_,i,r,o,l,a);break;case s$.MatMulPackedProgram:h=new eT(C,_,i,r,o,l,a,n.adapterInfo.isIntel());break;default:throw Error(`Unsupported MatMulProgramType ${N}.`)}o&&A.push(o),a&&A.push(a),"leakyrelu"===l&&(T.push({type:"float32",data:[u]}),h.uniforms+=" alpha : f32,");let F=eO({inputs:{x:d=n.runWebGPUProgram(h,A,e.dtype,T,d)},backend:n,attrs:{shape:S}});for(let e of(P.push(d),P))n.disposeData(e.dataId);return F}let eB={kernelName:s.usg,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{a:n,b:o,bias:a,preluActivationWeights:s}=t,{transposeA:u,transposeB:l,activation:h,leakyreluAlpha:d}=r;return eM({a:n,b:o,transposeA:u,transposeB:l,backend:i,bias:a,preluActivationWeights:s,leakyreluAlpha:d,activation:h})}};class eW{constructor(e,t,i){this.variableNames=["AReal","AImag","BReal","BImag"],this.workgroupSize=[128,1,1],this.size=!0,this.outputShape=s.backend_util.assertAndGetBroadcastShape(t,i),this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey=`binaryOpComplex_${e}`,this.op=e}getUserCode(){let e=ee(this.op,!1);return`
      fn binaryOpComplex(
          areal : f32, aimag : f32, breal : f32, bimag : f32) -> f32 {
        ${e}
      }

      ${b("index")} {
        if(index < uniforms.size) {
          let areal = getARealByOutputIndex(index);
          let aimag = getAImagByOutputIndex(index);
          let breal = getBRealByOutputIndex(index);
          let bimag = getBImagByOutputIndex(index);
          setOutputAtIndex(index, binaryOpComplex(areal, aimag, breal, bimag));
        }
      }
    `}}class eV{constructor(e,t,i){if(this.size=!0,this.variableNames=["A","B"],this.outputShape=s.backend_util.assertAndGetBroadcastShape(t,i),this.dispatchLayout=N(this.outputShape),this.op=e,this.useSharedMemoryWithA=t.length<=1&&i.length>1&&t[0]<128,this.useSharedMemoryWithB=i.length<=1&&t.length>1&&i[0]<128,this.useSharedMemoryWithA||this.useSharedMemoryWithB)this.outputComponent=1,this.variableComponents=[1,1],this.lastDimensionSize=this.useSharedMemoryWithB?i[0]:t[0],this.shaderKey=`binary_${e}_${this.lastDimensionSize}`,this.type="shared",this.workgroupSize=[256,1,1];else{let r=t.length>0&&t[t.length-1]%4==0,n=i.length>0&&i[i.length-1]%4==0;r&&n?(this.outputComponent=4,this.variableComponents=[4,4]):r&&(s.D5U.isScalarShape(i)||1===i[i.length-1])||n&&(s.D5U.isScalarShape(t)||1===t[t.length-1])?(this.outputComponent=4,this.variableComponents=r?[4,1]:[1,4]):(this.outputComponent=1,this.variableComponents=[1,1]),this.type="nonshared",this.shaderKey=`binary_${e}_${this.variableComponents}`,this.workgroupSize=[128,1,1]}this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.outputComponent,1,1])}getUserCode(){let e;let t=4===this.outputComponent?"vec4<f32>":"f32",i=`
    fn binaryOperation(a : ${t}, b : ${t}) -> ${t} {
      ${ee(this.op,4===this.outputComponent)}
    };
    `;if("shared"===this.type){let t=this.lastDimensionSize>1?`coords[${this.outputShape.length-1}]`:"0",r=this.useSharedMemoryWithB?`let a = getAByOutputIndex(index);
          let b = sharedBuf[${t}];`:`let a = sharedBuf[${t}];
          let b = getBByOutputIndex(index);`;e=`
        ${i}
        var<workgroup> sharedBuf : array<f32, ${this.lastDimensionSize}>;
        ${b("index")} {
          // Fill in the shared memory buffer.
          let localIndex = i32(localId.x);
          if(localIndex < ${this.lastDimensionSize}) {
            sharedBuf[localIndex] = f32(${this.useSharedMemoryWithB?"B":"A"}[localIndex]);
          }
          workgroupBarrier();

          if(index < uniforms.size) {
            let coords = getCoordsFromIndex(index);
            ${r}
            setOutputAtIndex(index, binaryOperation(a, b));
          }
        }
        `}else e=`
       ${i}
       ${b("index")} {
         if (index < uniforms.size) {
           let coords = getCoordsFromIndex(index * ${this.outputComponent});
           let a = ${t}(getAByOutputCoords(coords));
           let b = ${t}(getBByOutputCoords(coords));
           setOutputAtIndex(index, binaryOperation(a, b));
         }
       }
       `;return e}}function eH(e){let{inputs:t}=e,{x:i}=t;return e.backend.incRef(i.dataId),{dataId:i.dataId,shape:i.shape,dtype:i.dtype}}let eG={kernelName:s.iJz,backendName:"webgpu",kernelFunc:eH};function ej(e){let{inputs:t,backend:i}=e,{real:r,imag:n}=t,o=i.makeTensorInfo(r.shape,"complex64"),a=i.tensorMap.get(o.dataId),s=eH({inputs:{x:r},backend:i}),u=eH({inputs:{x:n},backend:i});return a.complexTensorInfos={real:s,imag:u},o}let eX={kernelName:s.Zz9,backendName:"webgpu",kernelFunc:ej};class eK{constructor(e,t,i=""){this.variableNames=["A"],this.size=!0,this.workgroupSize=[128,1,1],this.outputShape=e,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.op=t,""!==i&&(this.uniforms=i),this.shaderKey=`unary_${t}`}getUserCode(){return`
      fn unaryOperation(a : f32) -> f32 {
        ${ex(this.op,!1)}
      }
      ${b("index")} {
        if (index < uniforms.size) {
          let a = getAByOutputIndex(index);
          setOutputAtIndex(index, unaryOperation(a));
        }
      }
      `}}function eY({opType:e,cpuKernelImpl:t,dtype:i}){return({inputs:r,backend:n})=>{let{x:o}=r,a=i||o.dtype;if(n.shouldExecuteOnCPU([o])&&null!=t){let e=t(n.tensorMap.get(o.dataId).values,a);return n.makeTensorInfo(o.shape,a,e)}let s=new eK(o.shape,e);return n.runWebGPUProgram(s,[o],a)}}function eq({opType:e,cpuKernelImpl:t,supportsComplex:i=!1,dtype:r}){return({inputs:n,backend:o})=>{let{a,b:u}=n;if(i&&"complex64"===a.dtype){let t,i;let r=o.tensorMap.get(a.dataId),n=o.tensorMap.get(u.dataId);if(e!==sA.MUL)[t,i]=[[r.complexTensorInfos.real,n.complexTensorInfos.real],[r.complexTensorInfos.imag,n.complexTensorInfos.imag]].map(t=>{let[i,r]=t,n={dataId:i.dataId,dtype:i.dtype,shape:a.shape},l={dataId:r.dataId,dtype:r.dtype,shape:u.shape},h=new eV(e,a.shape,u.shape);return o.runWebGPUProgram(h,[n,l],(0,s.x8V)(i.dtype,r.dtype))});else{let e=new eW(sA.COMPLEX_MULTIPLY_REAL,a.shape,u.shape),s=new eW(sA.COMPLEX_MULTIPLY_IMAG,a.shape,u.shape),l=[{dataId:r.complexTensorInfos.real.dataId,dtype:r.complexTensorInfos.real.dtype,shape:a.shape},{dataId:r.complexTensorInfos.imag.dataId,dtype:r.complexTensorInfos.imag.dtype,shape:a.shape},{dataId:n.complexTensorInfos.real.dataId,dtype:n.complexTensorInfos.real.dtype,shape:u.shape},{dataId:n.complexTensorInfos.imag.dataId,dtype:n.complexTensorInfos.imag.dtype,shape:u.shape}];t=o.runWebGPUProgram(e,l,"float32"),i=o.runWebGPUProgram(s,l,"float32")}let l=ej({inputs:{real:t,imag:i},backend:o});return o.disposeData(t.dataId),o.disposeData(i.dataId),l}let l=r||(0,s.x8V)(a.dtype,u.dtype);if(("string"===a.dtype||"string"===u.dtype||o.shouldExecuteOnCPU([a,u]))&&null!=t){let e=o.tensorMap.get(a.dataId).values,i=o.tensorMap.get(u.dataId).values,r="string"===a.dtype?s.backend_util.fromUint8ToStringArray(e):e,n="string"===a.dtype?s.backend_util.fromUint8ToStringArray(i):i,[h,d]=t(a.shape,u.shape,r,n,l);return o.makeTensorInfo(d,l,h)}let h=new eV(e,a.shape,u.shape);return o.runWebGPUProgram(h,[a,u],l)}}let{addImpl:eQ,castImpl:eZ,ceilImpl:eJ,concatImpl:e0,equalImpl:e2,expImpl:e1,expm1Impl:e3,floorImpl:e4,floorDivImpl:e5,gatherNdImpl:e6,gatherV2Impl:e8,greaterEqualImpl:e7,greaterImpl:e9,lessEqualImpl:te,lessImpl:tt,logImpl:ti,maxImpl:tr,maximumImpl:tn,minimumImpl:to,multiplyImpl:ta,negImpl:ts,notEqualImpl:tu,prodImpl:tl,rangeImpl:th,rsqrtImpl:td,scatterImpl:tp,simpleAbsImpl:tc,sliceImpl:tf,stridedSliceImpl:tm,stringNGramsImpl:tg,subImpl:ty,tileImpl:tx,topKImpl:tv,transposeImpl:tb,uniqueImpl:tw}=i(11163),tS=eY({opType:sT.ABS,cpuKernelImpl:tc}),tC={kernelName:s.SYM,backendName:"webgpu",kernelFunc:tS},tk=eY({opType:sT.ACOS}),tI={kernelName:s.VGw,backendName:"webgpu",kernelFunc:tk},tR=eY({opType:sT.ACOSH}),tP={kernelName:s.SpW,backendName:"webgpu",kernelFunc:tR},t$=eq({opType:sA.ADD,cpuKernelImpl:eQ,supportsComplex:!0}),tA={kernelName:s.mm_,backendName:"webgpu",kernelFunc:t$};class tT{constructor(e){this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e[0],this.variableNames=e.map((e,t)=>`T${t}`),this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.shaderKey="addN"}getUserCode(){let e=[];this.variableNames.forEach(t=>{e.push(`let v${t} = get${t}ByOutputCoords(coords);`)});let t=this.variableNames.map(e=>`v${e}`).join(" + ");return`
      ${b("index")} {
        for (var i = 0; i < ${this.workPerThread}; i = i + 1) {
          let flatIndex = index * ${this.workPerThread} + i;
          if (flatIndex < uniforms.size) {
            let coords = getCoordsFromIndex(flatIndex);
            ${e.join("\n        ")}
            setOutputAtIndex(flatIndex, ${t});
          }
        }
      }
    `}}let t_={kernelName:s.Xze,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i}=e;if(1===t.length)return eH({inputs:{x:t[0]},backend:i});let r=t.map(e=>e.dtype).reduce((e,t)=>(0,s.x8V)(e,t)),n=new tT(t.map(e=>e.shape));return i.runWebGPUProgram(n,t,r)}};class tN{constructor(e,t){this.variableNames=["A"],this.workgroupSize=[16,16,1];let i=Array(e.length);for(let r=0;r<i.length;r++)i[r]=e[t[r]];this.outputShape=i,this.dispatchLayout={x:[0],y:[1]},this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize,[1,1,1]),this.shaderKey="transposeShared"}getUserCode(){s.D5U.assert(this.workgroupSize[0]===this.workgroupSize[1],()=>`Must be a square tile, current tile shape is ${this.workgroupSize[0]} x ${this.workgroupSize[1]}`);let e=this.workgroupSize[0];return`
      var<workgroup> tile : array<array<f32, ${this.workgroupSize[0]+1}>, ${this.workgroupSize[0]}>;
      ${b()} {
        var x = i32(workgroupId.x) * ${e} + i32(localId.x);
        var y = i32(workgroupId.y) * ${e} + i32(localId.y);
        let width = uniforms.outShape[0];
        let height = uniforms.outShape[1];
        if (x < width && y < height) {
          tile[localId.y][localId.x] = f32(A[y * width + x]);
        }
        workgroupBarrier();

        x = i32(workgroupId.y) * ${e} + i32(localId.x);
        y = i32(workgroupId.x) * ${e} + i32(localId.y);
        if (x < height && y < width) {
          setOutputAtIndex((y * height + x), tile[localId.x]
            [localId.y]);
        }
      }
    `}}class tF{constructor(e,t){this.variableNames=["A"],this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0;let i=Array(e.length);for(let r=0;r<i.length;r++)i[r]=e[t[r]];this.outputShape=i,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.newDim=t,this.shaderKey=`transpose_${t}`}getUserCode(){let e=x(this.outputShape.length),t=tz(this.newDim);return`
      ${b("index")} {
        for(var i = 0; i < ${this.workPerThread}; i = i + 1) {
          let flatIndex = index * ${this.workPerThread} + i;
          if(flatIndex < uniforms.size) {
            let coords = getCoordsFromIndex(flatIndex);
            setOutputAtIndex(flatIndex, A[getIndexFromCoords${this.outputShape.length}D(
              ${e}(${t}), uniforms.aShape)]);
          }
        }
      }
    `}}function tz(e){let t=e.length;if(t>6)throw Error(`Transpose for rank ${t} is not yet supported`);let i=Array(t);for(let t=0;t<e.length;t++)i[e[t]]=`coords.${v(t)}`;return i.join()}function tD(e){let{inputs:t,backend:i,attrs:r}=e,{x:n}=t,{perm:o}=r,a=Array(n.shape.length);for(let e=0;e<a.length;e++)a[e]=n.shape[o[e]];if(i.shouldExecuteOnCPU([n])){let e=tb(i.tensorMap.get(n.dataId).values,n.shape,n.dtype,o,a);return i.makeTensorInfo(a,n.dtype,e)}if(2===n.shape.length&&s.D5U.arraysEqual(o,[1,0])){let e=new tN(n.shape,o);return i.runWebGPUProgram(e,[n],n.dtype)}let u=new tF(n.shape,o);return i.runWebGPUProgram(u,[n],n.dtype)}let tE={kernelName:s.G3Y,backendName:"webgpu",kernelFunc:tD};class tL{constructor(e,t,i){this.variableNames=["x"],this.uniforms="reduceSize : i32,",this.size=!0,this.inputShape=[e.batchSize,e.inSize];let[r]=s.backend_util.computeOutAndReduceShapes(this.inputShape,[1]);this.outputShape=0===r.length?[1]:r,e.inSize>=32768&&i>=512?this.workgroupSize=[512,1,1]:e.inSize>=4096?this.workgroupSize=[256,1,1]:this.workgroupSize=[64,1,1],this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,[1,1,1]),this.reduceType=t,this.shaderKey=`reduce_${t}`}getUserCode(){let e="",t="0.0",i=this.workgroupSize[0];"min"===this.reduceType||"max"===this.reduceType?(e=`
         if (isnan(candidate)) {
          bestValue = uniforms.NAN;
         } else if (!isnan(bestValue) && candidate ${"min"===this.reduceType?"<":">"} bestValue)
           {  bestValue = candidate; }`,t="f32(x[offset])"):"sum"===this.reduceType||"mean"===this.reduceType?e=" bestValue = bestValue + candidate; ":"prod"===this.reduceType?(e=" bestValue = bestValue * candidate; ",t="1.0"):"all"===this.reduceType?(e=" bestValue = f32(bestValue >= 1.0 && candidate >= 1.0); ",t="1.0"):"any"===this.reduceType&&(e=" bestValue = f32(bestValue >= 1.0 || candidate >= 1.0); ",t="0.0");let r="mean"===this.reduceType?"setOutputAtIndex(outputIndex, bestValue / f32(uniforms.reduceSize));":"setOutputAtIndex(outputIndex, bestValue);",n=`
         var<workgroup> xBestValues : array<f32, ${i}>;
       `;return`
       fn DIV_CEIL(a : u32, b : u32) -> u32 {
        return ((a - 1u) / b + 1u);
       }

       ${n}
       fn getOffset(outputIndex : i32) -> i32 {
         let outputCoords = getCoordsFromIndex(outputIndex);
         let offset = ${1===this.outputShape.length?"outputCoords":"outputCoords[0]"} * uniforms.reduceSize;
          return offset;
       }
       ${b("index")} {
         let outputIndex = index / ${i};
         let offset = getOffset(outputIndex);
         var bestValue = ${t};
         let Length = uniforms.reduceSize;
         let WorkPerThread = DIV_CEIL(u32(Length), ${i}u);
         for (var k = i32(localId.x); k < Length && outputIndex < uniforms.size;
             k = k + ${i}) {
           let candidate = f32(x[offset + k]);
           ${e}
         }
         xBestValues[localId.x] = bestValue;
         workgroupBarrier();

         var reduceSize = min(u32(Length), ${i}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (localId.x < currentSize) {
            let candidate = xBestValues[localId.x + interval];
            ${e}
            xBestValues[localId.x] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (localId.x == 0u && outputIndex < uniforms.size) {
          ${r}
        }
       }
     `}}let tO={mean:"float32",all:"bool",any:"bool"};function tU(e,t,i,r,n){let o;let a=e.shape.length,u=[],l=s.D5U.parseAxisParam(t,e.shape),h=l,d=s.backend_util.getAxesPermutation(h,a),p=e;null!=d&&(p=tD({inputs:{x:e},attrs:{perm:d},backend:n}),h=s.backend_util.getInnerMostAxes(h.length,a),u.push(p)),s.backend_util.assertAxesAreInnerMostDims(r,h,a);let[c,f]=s.backend_util.computeOutAndReduceShapes(p.shape,h),m=c;if(i&&(m=s.backend_util.expandShapeToKeepDim(c,l)),("max"===r||"prod"===r)&&n.shouldExecuteOnCPU([p])){let t=n.tensorMap.get(p.dataId).values;switch(r){case"max":let i=tr(t,s.D5U.sizeFromShape(f),m,e.dtype);o=n.makeTensorInfo(m,e.dtype,i);break;case"prod":let{outVals:a,outShape:u,outDtype:l}=tl(p.shape,p.dtype,t,h);o=n.makeTensorInfo(u,l,a);break;default:throw Error(`${r} CPU implementation is not yet supported.`)}}else{let t=s.D5U.sizeFromShape(f),i=s.D5U.sizeFromShape(p.shape)/t,a=tO[r]||(0,s.z4k)(e.dtype),l=new tL({windowSize:t,inSize:t,batchSize:i,outSize:1},r,n.device.limits.maxComputeWorkgroupSizeX),h=n.runWebGPUProgram(l,[p],a,[{type:"int32",data:[t]}]);u.push(h),o=eO({inputs:{x:h},attrs:{shape:m},backend:n})}return u.forEach(e=>n.disposeData(e.dataId)),o}let tM={kernelName:s.oT6,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{x:n}=t,{keepDims:o,axis:a}=r;return tU(n,a,o,"all",i)}},tB={kernelName:s.IKK,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{x:n}=t,{keepDims:o,axis:a}=r;return tU(n,a,o,"any",i)}};class tW{constructor(e,t,i){this.workgroupSize=[64,1,1],this.variableNames=["x"],this.uniforms="infinityValue : f32,",this.size=!0,this.op="min"===i?"<":">";let[r,n]=s.backend_util.computeOutAndReduceShapes(e,[t]);this.outputShape=0===r.length?[1]:r,this.dispatchLayout=N(this.outputShape),32>s.D5U.sizeFromShape(n)?(this.type="plain",this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize)):(this.type="shared",this.dispatch=A(this.dispatchLayout,this.outputShape,[1,1,1])),this.inputShape=e,this.shaderKey=`argMinMax_${this.op}_${this.type}`}getUserCode(){let e=this.workgroupSize[0],t=()=>1===this.inputShape.length?"uniforms.xShape":`uniforms.xShape.${v(this.inputShape.length-1)}`,i=()=>{let e="";if(1===this.outputShape.length)1!==this.inputShape.length&&(e+="outputCoords,");else for(let t=0;t<this.outputShape.length;t++)e+=`outputCoords.${v(t)},`;return e};if("shared"!==this.type)return`
      ${b("index")} {
        if (index < uniforms.size) {
          let outputCoords = getCoordsFromIndex(index);
          var bestIndex = 0;
          var bestValue = getX(${i()} 0);
          let reduceLength = ${t()};
          for (var i = 1; i < reduceLength; i++) {
            let candidate = getX(${i()} i);
            if (candidate ${this.op} bestValue) {
              bestValue = candidate;
              bestIndex = i;
            }
          }
          setOutputAtIndexI32(index, bestIndex);
        }
      }
      `;{let r=`
      var<workgroup> xBestIndices : array<i32, ${e}>;
      var<workgroup> xBestValues : array<f32, ${e}>;
    `;return`
      fn DIV_CEIL(a : u32, b : u32) -> u32 {
        return ((a - 1u) / b + 1u);
      }

      ${r}

      ${b("index")} {
        let outputIndex = index / ${e};
        let reduceLength = ${t()};

        var bestIndex = i32(localId.x);
        var bestValue = uniforms.infinityValue;
        let outputCoords = getCoordsFromIndex(outputIndex);
        for (var k = i32(localId.x); k < reduceLength && outputIndex < uniforms.size;
            k = k + ${e}) {
          let candidate = getX(${i()} k);
          if (!isnan(candidate) && candidate ${this.op} bestValue) {
            bestValue = candidate;
            bestIndex = k;
          }
        }
        xBestValues[localId.x] = bestValue;
        xBestIndices[localId.x] = bestIndex;
        workgroupBarrier();

        var reduceSize = min(u32(reduceLength), ${e}u);
        for (var currentSize = reduceSize / 2u; reduceSize > 1u;
            currentSize = reduceSize / 2u) {
          let interval = DIV_CEIL(reduceSize, 2u);
          if (localId.x < currentSize) {
            let candidate = xBestValues[localId.x + interval];
            if (candidate ${this.op} bestValue) {
              bestValue = candidate;
              xBestValues[localId.x] = bestValue;
              xBestIndices[localId.x] = xBestIndices[localId.x + interval];
            }
          }
          reduceSize = interval;
          workgroupBarrier();
        }

        if (localId.x == 0u && outputIndex < uniforms.size) {
          setOutputAtIndexI32(outputIndex, xBestIndices[localId.x]);
        }
      }
    `}}}let tV={kernelName:s.sJF,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{x:n}=t,{axis:o}=r,a=s.D5U.parseAxisParam(o,n.shape),u=s.backend_util.getAxesPermutation(a,n.shape.length),l=n,h=[];null!=u&&(h.push(l=tD({inputs:{x:n},backend:i,attrs:{perm:u}})),a=s.backend_util.getInnerMostAxes(a.length,l.shape.length)),s.backend_util.assertAxesAreInnerMostDims("argMax",[a[0]],l.shape.length);let d=new tW(l.shape,a[0],"max"),p=[{type:"float32",data:[Number.NEGATIVE_INFINITY]}],c=i.runWebGPUProgram(d,[l],"int32",p);return h.forEach(e=>i.disposeData(e.dataId)),c}},tH={kernelName:s.aJk,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{x:n}=t,{axis:o}=r,a=s.D5U.parseAxisParam(o,n.shape),u=s.backend_util.getAxesPermutation(a,n.shape.length),l=n,h=[];null!=u&&(h.push(l=tD({inputs:{x:n},backend:i,attrs:{perm:u}})),a=s.backend_util.getInnerMostAxes(a.length,l.shape.length)),s.backend_util.assertAxesAreInnerMostDims("argMin",[a[0]],l.shape.length);let d=new tW(l.shape,a[0],"min"),p=[{type:"float32",data:[Number.POSITIVE_INFINITY]}],c=i.runWebGPUProgram(d,[l],"int32",p);return h.forEach(e=>i.disposeData(e.dataId)),c}},tG=eY({opType:sT.ASIN}),tj={kernelName:s.M2y,backendName:"webgpu",kernelFunc:tG},tX=eY({opType:sT.ASINH}),tK={kernelName:s.qw7,backendName:"webgpu",kernelFunc:tX},tY=eY({opType:sT.ATAN}),tq={kernelName:s.jMg,backendName:"webgpu",kernelFunc:tY},tQ=eq({opType:sA.ATAN2}),tZ={kernelName:s.QCc,backendName:"webgpu",kernelFunc:tQ},tJ=eY({opType:sT.ATANH}),t0={kernelName:s.Oyi,backendName:"webgpu",kernelFunc:tJ};class t2{constructor(e){this.variableNames=["x"],this.uniforms="strides : vec2<i32>,",this.workgroupSize=[256,1,1],this.size=!0,this.outputShape=e.outShape,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="poolWithFilterSizeEqualsOne"}getUserCode(){return`
      ${b("index")} {
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let batch = coords[0];
          let d = coords[3];

          let xRCCorner = coords.yz * uniforms.strides;
          let xRCorner = xRCCorner.x;
          let xCCorner = xRCCorner.y;

          let value = getX(batch, xRCorner, xCCorner, d);
          setOutputAtIndex(index, value);
        }
      }
    `}}class t1{constructor(e,t,i=!1,r=!1,n=!1){if(this.variableNames=["x"],this.uniforms="strides : vec2<i32>, pads : vec2<i32>, dilations : vec2<i32>, convDims : vec2<i32>, filterDims : vec2<i32>,",this.workgroupSize=[128,1,1],this.size=!0,"avg"===t&&i)throw Error("Cannot compute positions for average pool.");this.outputShape=e.outShape,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.poolType=t,this.computePositions=i,this.flattenPositions=r,this.includeBatchIndex=n,this.shaderKey=`pool2D_${t}_${i}_${r}_${n}`}getUserCode(){let e;if("avg"===this.poolType)e="resultValue = resultValue + value; count = count + 1.0;";else if(this.computePositions){let t=this.flattenPositions?this.includeBatchIndex?"((batch * uniforms.xShape[1] + xR) * uniforms.xShape[2] + xC) * uniforms.xShape[3] + d":"(xR * uniforms.xShape[2] + xC) * uniforms.xShape[3] + d":"wR * uniforms.filterDims.y + wC";e=`let currMaxValue = mix(value, maxValue, maxValueFound);
      if (value >= currMaxValue) {
        maxValue = value;
        maxValueFound = 1.0;
        maxPosition = ${t};
      }`}else e="resultValue = max(value, resultValue);";let t="resultValue";return"avg"===this.poolType&&(t="resultValue / max(count, 1.0)"),`
      ${b("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
          let batch = coords[0];
          let d = coords[3];
          let xRCCorner = vec2<i32>(coords.yz) * uniforms.strides - uniforms.pads;
          let xRCorner = xRCCorner.x;
          let xCCorner = xRCCorner.y;

          ${this.computePositions?`var maxValue = 0.0;
            var maxValueFound = 0.0;
            var maxPosition = 0;`:`var resultValue = ${"avg"===this.poolType?"0.0":"-1.0 / pow(10.0, -20.0)"};`}

          var count = 0.0;
          for (var wR = 0; wR < uniforms.filterDims.x; wR = wR + uniforms.dilations.x) {
            let xR = xRCorner + wR;

            if (xR < 0 || xR >= uniforms.convDims.x) {
              continue;
            }

            for (var wC = 0; wC < uniforms.filterDims.y; wC = wC + uniforms.dilations.y) {
              let xC = xCCorner + wC;
              if (xC < 0 || xC >= uniforms.convDims.y) {
                continue;
              }

              let value = getX(batch, xR, xC, d);
              ${e}
            }
          }

          ${this.computePositions?"setOutputAtIndexI32(index, maxPosition);":`setOutputAtIndex(index, ${t});`}
        }
      }
    `}}class t3{constructor(e,t,i=!1,r=!1,n=!1){if(this.variableNames=["x"],this.uniforms="strides : vec3<i32>, pads : vec3<i32>, convDims : vec3<i32>, filterDims : vec3<i32>,",this.workgroupSize=[128,1,1],this.size=!0,"avg"===t&&i)throw Error("Cannot compute positions for average pool.");this.outputShape=e.outShape,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.poolType=t,this.computePositions=i,this.flattenPositions=r,this.includeBatchIndex=n,this.shaderKey=`pool3D_${t}_${i}_${r}_${n}`}getUserCode(){let e;if("avg"===this.poolType)e="resultValue += value; count += 1.0;";else if(this.computePositions){let t=this.flattenPositions?this.includeBatchIndex?"(((batch * uniforms.xShape.y + xD) * uniforms.xShape.z + xR) * uniforms.xShape.w + xC) * uniforms.xShape.u + ch":"((xD * uniforms.xShape.z + xR) * uniforms.xShape.w + xC) * uniforms.xShape.u + ch":"wD * uniforms.filterDims.y * uniforms.filterDims.y + wR * uniforms.filterDims.z + wC";e=`let currMaxValue = mix(value, maxValue, maxValueFound);
      if (value >= currMaxValue) {
        maxValue = value;
        maxValueFound = 1.0;
        maxPosition = ${t};
      }`}else e="resultValue = max(value, resultValue);";let t="resultValue";return"avg"===this.poolType&&(t="resultValue / max(count, 1.0)"),`
      ${b("index")} {
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let batch = coords.x;
          let ch = coords.u;

          let xCorner = vec3<i32>(coords.y, coords.z, coords.w) * uniforms.strides - uniforms.pads;
          let xDCorner = xCorner.x;
          let xRCorner = xCorner.y;
          let xCCorner = xCorner.z;

          ${this.computePositions?`var maxValue = 0.0;
            var maxValueFound = 0.0;
            var maxPosition = 0;`:`var resultValue = ${"avg"===this.poolType?"0.0":"-1.0 / pow(10.0, -20.0)"};`}

          var count = 0.0;
          for (var wD = 0; wD < uniforms.filterDims.x; wD++) {
            let xD = xDCorner + wD;
            if (xD < 0 || xD >= uniforms.convDims.x) {
              continue;
            }

            for (var wR = 0; wR < uniforms.filterDims.y; wR++) {
              let xR = xRCorner + wR;
              if (xR < 0 || xR >= uniforms.convDims.y) {
                continue;
              }

              for (var wC = 0; wC < uniforms.filterDims.z; wC++) {
                let xC = xCCorner + wC;
                if (xC < 0 || xC >= uniforms.convDims.z) {
                  continue;
                }

                let value = getX(batch, xD, xR, xC, ch);
                ${e}
              }
            }
          }

          ${this.computePositions?"setOutputAtIndexI32(index, maxPosition);":`setOutputAtIndex(index, ${t});`}
        }
      }
    `}}function t4(e){let{inputs:t,backend:i,attrs:r}=e,{x:n}=t,{reductionIndices:o,keepDims:a}=r;return tU(n,o,a,"max",i)}let t5={kernelName:s.YoZ,backendName:"webgpu",kernelFunc:t4};function t6(e){let{inputs:t,backend:i,attrs:r}=e,{x:n}=t,{keepDims:o,axis:a}=r;return tU(n,a,o,"mean",i)}let t8={kernelName:s.q2K,backendName:"webgpu",kernelFunc:t6};function t7(e,t,i,r){let n;if(1===t.filterWidth&&1===t.filterHeight&&s.D5U.arraysEqual(t.inShape,t.outShape))return eH({inputs:{x:e},backend:r});if(t.filterWidth===t.inWidth&&t.filterHeight===t.inHeight&&1===t.batchSize&&"VALID"===t.padInfo.type){let n;let o=e.shape.length,a=eO({inputs:{x:e},backend:r,attrs:{shape:[e.shape[o-3]*e.shape[o-2],e.shape[o-1]]}});"avg"===i?n=t6({inputs:{x:a},backend:r,attrs:{axis:0,keepDims:!1}}):(s.D5U.assert("max"===i,()=>`Invalid pool type ${i}`),n=t4({inputs:{x:a},backend:r,attrs:{reductionIndices:0,keepDims:!1}}));let u=eO({inputs:{x:n},backend:r,attrs:{shape:t.outShape}});return r.disposeData(a.dataId),r.disposeData(n.dataId),u}let o=[{type:"int32",data:[t.strideHeight,t.strideWidth]}];return 1===t.filterHeight&&1===t.filterWidth?n=new t2(t):("avg"===i?n=new t1(t,"avg"):(s.D5U.assert("max"===i,()=>`Invalid pool type ${i}`),n=new t1(t,"max")),o.push({type:"int32",data:[t.padInfo.top,t.padInfo.left]},{type:"int32",data:[t.dilationHeight,t.dilationWidth]},{type:"int32",data:[t.inHeight,t.inWidth]},{type:"int32",data:[t.effectiveFilterHeight,t.effectiveFilterWidth]})),r.runWebGPUProgram(n,[e],e.dtype,o)}let t9={kernelName:s.JhU,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{x:n}=t,{filterSize:o,strides:a,pad:u,dimRoundingMode:l}=r,h=s.backend_util.computePool2DInfo(n.shape,o,a,1,u,l);return t7(n,h,"avg",i)}},ie={kernelName:s._k9,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{x:n}=t,{filterSize:o,strides:a,pad:u,dataFormat:l,dimRoundingMode:h}=r,d=s.backend_util.computePool3DInfo(n.shape,o,a,[1,1,1],u,h,l),p=new t3(d,"avg"),c=[{type:"int32",data:[d.strideDepth,d.strideHeight,d.strideWidth]},{type:"int32",data:[d.padInfo.front,d.padInfo.top,d.padInfo.left]},{type:"int32",data:[d.inDepth,d.inHeight,d.inWidth]},{type:"int32",data:[d.effectiveFilterDepth,d.effectiveFilterHeight,d.effectiveFilterWidth]}];return i.runWebGPUProgram(p,[n],n.dtype,c)}};class it{constructor(e){this.variableNames=["dy"],this.uniforms=`strides : vec2<i32>, pads : vec2<i32>, dilations : vec2<i32>, filterDims : vec2<i32>,
       outHeight : i32, outWidth : i32, avgMultiplier : f32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.inShape,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="avgPool2DBackprop"}getUserCode(){return`
      ${b("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let batch = coords[0];
        let d = coords[3];

        let dyRCCorner = vec2<i32>(coords.yz) - uniforms.pads;
        let dyRCorner = dyRCCorner.x;
        let dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        var dotProd = 0.0;
        for (var wR = 0; wR < uniforms.filterDims[0]; wR = wR + uniforms.dilations[0]) {
          let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[0]);

          if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {
            continue;
          }
          let idyR = i32(dyR);

          for (var wC = 0; wC < uniforms.filterDims[1]; wC = wC + uniforms.dilations[1]) {
            let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[1]);

            if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {
              continue;
            }
            let idyC = i32(dyC);

            let dyValue = getDy(batch, idyR, idyC, d);

            dotProd = dotProd + dyValue * uniforms.avgMultiplier;
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
    `}}class ii{constructor(e){this.variableNames=["dy"],this.uniforms=`strides : vec3<i32>, pads : vec3<i32>, filterDims : vec3<i32>,
       outDepth : i32, outHeight : i32, outWidth : i32, avgMultiplier : f32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.inShape,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="avgPool3DBackprop"}getUserCode(){return`
      ${b("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let batch = coords.x;
        let ch = coords.u;

        let dyCorner = vec3<i32>(coords.y, coords.z, coords.w) - uniforms.pads;
        let dyDCorner = dyCorner.x;
        let dyRCorner = dyCorner.y;
        let dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        var dotProd = 0.0;
        for (var wD = 0; wD < uniforms.filterDims[0]; wD++) {
          let dyD = f32(dyDCorner + wD) / f32(uniforms.strides[0]);

          if (dyD < 0.0 || dyD >= f32(uniforms.outDepth) || fract(dyD) > 0.0) {
            continue;
          }
          let idyD = i32(dyD);

          for (var wR = 0; wR < uniforms.filterDims[1]; wR++) {
            let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[1]);

            if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {
              continue;
            }
            let idyR = i32(dyR);

            for (var wC = 0; wC < uniforms.filterDims[2]; wC++) {
              let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[2]);

              if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {
                continue;
              }
              let idyC = i32(dyC);

              let dyValue = getDy(batch, idyD, idyR, idyC, ch);
              dotProd += dyValue * uniforms.avgMultiplier;
            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
    `}}let ir={kernelName:s.IMb,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{dy:n,input:o}=t,{filterSize:a,strides:u,pad:l,dimRoundingMode:h}=r,d=s.backend_util.computePool3DInfo(o.shape,a,u,1,l,h),p=new ii(d),c=1/(d.filterDepth*d.filterHeight*d.filterWidth),f=[{type:"int32",data:[d.strideDepth,d.strideHeight,d.strideWidth]},{type:"int32",data:[d.effectiveFilterDepth-1-d.padInfo.front,d.effectiveFilterHeight-1-d.padInfo.top,d.effectiveFilterWidth-1-d.padInfo.left]},{type:"int32",data:[d.effectiveFilterDepth,d.effectiveFilterHeight,d.effectiveFilterWidth]},{type:"int32",data:[d.outDepth]},{type:"int32",data:[d.outHeight]},{type:"int32",data:[d.outWidth]},{type:"float32",data:[c]}];return i.runWebGPUProgram(p,[n],o.dtype,f)}},io={kernelName:s.ROF,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{dy:n,input:o}=t;D([n,o],"avgPoolGrad");let{filterSize:a,strides:u,pad:l}=r,h=s.backend_util.computePool2DInfo(o.shape,a,u,1,l),d=new it(h),p=1/(h.filterHeight*h.filterWidth),c=[{type:"int32",data:[h.strideHeight,h.strideWidth]},{type:"int32",data:[h.effectiveFilterHeight-1-h.padInfo.top,h.effectiveFilterWidth-1-h.padInfo.left]},{type:"int32",data:[h.dilationHeight,h.dilationWidth]},{type:"int32",data:[h.effectiveFilterHeight,h.effectiveFilterWidth]},{type:"int32",data:[h.outHeight]},{type:"int32",data:[h.outWidth]},{type:"float32",data:[p]}];return i.runWebGPUProgram(d,[n],o.dtype,c)}},ia={kernelName:s.XLW,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{a:n,b:o}=t,{transposeA:a,transposeB:s}=r;return eM({a:n,b:o,transposeA:a,transposeB:s,backend:i})}};class is{constructor(e,t){this.variableNames=["source"],this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.rank=t.length,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.start=e,this.uniforms=`start : ${x(e.length)}, `,this.shaderKey="slice"}getUserCode(){let e;let t=x(this.rank),i=function(e){if(1===e)return"sourceLoc";if(e<=6)return iu.slice(0,e).map(e=>`sourceLoc.${e}`).join(",");throw Error(`Slicing for rank ${e} is not yet supported`)}(this.rank);return e=1===this.start.length?this.outputShape.map((e,t)=>"sourceLoc = uniforms.start + coords;"):this.outputShape.map((e,t)=>`sourceLoc.${iu[t]} = uniforms.start.${v(t)} + coords.${iu[t]};`),`
      ${b("index")} {
        if (index < uniforms.size) {
          var sourceLoc : ${t};
          let coords = getCoordsFromIndex(index);
          ${e.join("\n")}
          setOutputAtIndex(index, getSource(${i}));
        }
      }
    `}}let iu=["x","y","z","w","u","v"];function il(e){let{inputs:t,backend:i,attrs:r}=e,{x:n}=t,{begin:o,size:a}=r,[u,l]=s.kuN.parseSliceParams(n,o,a);if(s.kuN.assertParamsValid(n,u,l),i.shouldExecuteOnCPU([n])||"string"===n.dtype){let e=tf(i.tensorMap.get(n.dataId).values,u,l,n.shape,n.dtype);return i.makeTensorInfo(l,n.dtype,e)}if(0===s.D5U.sizeFromShape(l))return i.makeTensorInfo(l,n.dtype,[]);let h=new is(u,l),d=[{type:"int32",data:u}];return i.runWebGPUProgram(h,[n],n.dtype,d)}let ih={kernelName:s.p2w,backendName:"webgpu",kernelFunc:il},id={kernelName:s.zws,backendName:"webgpu",kernelFunc:e=>{let{inputs:t,backend:i,attrs:r}=e,{x:n}=t,{blockShape:o,crops:a}=r;s.D5U.assert(n.shape.length<=4,()=>"batchToSpaceND for rank > 4 with a WebGPU backend not implemented yet");let u=o.reduce((e,t)=>e*t),l=s.backend_util.getReshaped(n.shape,o,u),h=s.backend_util.getPermuted(l.length,o.length),d=s.backend_util.getReshapedPermuted(n.shape,o,u),p=s.backend_util.getSliceBeginCoords(a,o.length),c=s.backend_util.getSliceSize(d,a,o.length),f=[],m=eO({inputs:{x:n},backend:i,attrs:{shape:l}}),g=tD({inputs:{x:m},backend:i,attrs:{perm:h}}),y=eO({inputs:{x:g},backend:i,attrs:{shape:d}}),x=il({inputs:{x:y},backend:i,attrs:{begin:p,size:c}});return f.push(m),f.push(g),f.push(y),f.forEach(e=>i.disposeData(e.dataId)),x}},ip=`
  fn bincount_write(index: i32, value: f32) {
    ${m("&result[index]","value","float32")}
  }
`,ic=`
  fn bincount_write(index: i32, value: f32) {
    atomicStore(&result[index], bitcast<i32>(value));
  }
`;class im{constructor(e,t,i=!1){this.outputShape=[],this.variableNames=["x"],this.uniforms="binCountSize : i32,",this.workgroupSize=[64,1,1],this.atomic=!0,this.hasWeights=!0,this.binaryOutput=!1,this.outputShape=e,this.rank=e.length,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.binaryOutput=i,i&&(this.atomic=!1),this.hasWeights=t,this.hasWeights&&this.variableNames.push("w"),this.shaderKey=`bincount_${this.hasWeights}_${this.binaryOutput}_${this.rank}`}getUserCode(){return`
    ${this.binaryOutput?ic:ip}
  ${b("index")} {
    ${1===this.rank?`if (index < uniforms.xShape) {
      let indexVal = i32(getX(index));
      if (indexVal < uniforms.binCountSize) {
        let value = ${this.binaryOutput?1:this.hasWeights?"getW(index)":"1."};
        bincount_write(indexVal, value);
      }
    }`:`let coord = getCoordsFromIndex(index);
    if (coordsInBounds2D(coord, uniforms.xShape)) {
      let indexVal = i32(getX(coord[0], coord[1]));
      if (indexVal < uniforms.binCountSize) {
        let value = ${this.binaryOutput?1:this.hasWeights?"getW(coord[0], coord[1])":"1."};
        bincount_write(coord.x * uniforms.binCountSize + indexVal, value);
      }
    }`}
  }
  `}}let ig={kernelName:s.zvY,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{x:n,weights:o}=t,{size:a}=r,u=s.D5U.sizeFromShape(n.shape),l=s.D5U.sizeFromShape(o.shape)>0,h=o.dtype,d=eE({backend:i,attrs:{shape:[a],value:0,dtype:h}}),p=new im([u],l),c=[{type:"int32",data:[a]}],f=l?[n,o]:[n];return i.runWebGPUProgram(p,f,h,c,d)}};class iy{constructor(e){this.outputShape=[],this.variableNames=["s0","s1"],this.uniforms="s0Size : i32, s1Size : i32, ",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[e],this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="broadcastArgs"}getUserCode(){return`
  ${b("index")} {
    if (index < uniforms.size) {
      var s0 = 1.0;
      var s1 = 1.0;
      let indexS0 = index - uniforms.size + uniforms.s0Size;
      let indexS1 = index - uniforms.size + uniforms.s1Size;
      if (indexS0 >= 0) {
        s0 = getS0(indexS0);
      }
      if (indexS1 >= 0) {
        s1 = getS1(indexS1);
      }

      if (s0 == 1.0) {
        setOutputAtIndex(index, s1);
      } else if (s1 == 1.0) {
        setOutputAtIndex(index, s0);
      } else if (s0 != s1) {
        setOutputAtIndex(index, uniforms.NAN);
      } else {
        setOutputAtIndex(index, s0);
      }
    }
  }
  `}}let ix={kernelName:s.eEB,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i}=e,{s0:r,s1:n}=t;if(i.shouldExecuteOnCPU([r,n])){let e=i.tensorMap.get(r.dataId),t=i.tensorMap.get(n.dataId),o=e.values,a=t.values,u=s.backend_util.assertAndGetBroadcastShape(Array.from(o),Array.from(a));return i.makeTensorInfo([u.length],"int32",Int32Array.from(u))}let o=s.D5U.sizeFromShape(r.shape),a=s.D5U.sizeFromShape(n.shape),u=new iy(Math.max(o,a)),l=[{type:"int32",data:[o]},{type:"int32",data:[a]}];return i.runWebGPUProgram(u,[r,n],"int32",l)}},iv=eq({opType:sA.NOT_EQUAL,dtype:"bool",cpuKernelImpl:tu}),ib={kernelName:s.yQU,backendName:"webgpu",kernelFunc:iv};function iw(e){let{inputs:t,backend:i}=e,{input:r}=t;return eH({inputs:{x:i.tensorMap.get(r.dataId).complexTensorInfos.real},backend:i})}let iS={kernelName:s.xJR,backendName:"webgpu",kernelFunc:iw},iC={kernelName:s.RFZ,backendName:"webgpu",kernelFunc:function e(t){let{inputs:i,backend:r,attrs:n}=t,{x:o}=i,{dtype:a}=n;if("complex64"===a){if("complex64"===o.dtype)return eH({inputs:{x:o},backend:r});let t=s.lls(o.shape),i=e({inputs:{x:o},backend:r,attrs:{dtype:"float32"}}),n=ej({inputs:{real:i,imag:t},backend:r});return t.dispose(),r.disposeData(i.dataId),n}if("complex64"===o.dtype){let t=iw({inputs:{input:o},backend:r}),i=e({inputs:{x:t},backend:r,attrs:{dtype:a}});return r.disposeData(t.dataId),i}if(!s.D5U.hasEncodingLoss(o.dtype,a)){let e=eH({inputs:{x:o},backend:r});return{dataId:e.dataId,shape:e.shape,dtype:a}}if(r.shouldExecuteOnCPU([o])){let[e,t,i]=eZ(r.tensorMap.get(o.dataId).values,o.shape,o.dtype,a);return r.makeTensorInfo(e,t,i)}if("int32"===a)return function(e,t){let i=new eK(e.shape,sT.TO_INT),r=t.runWebGPUProgram(i,[e],"int32");return{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}(o,r);if("bool"===a){let e=r.makeTensorInfo([],"bool",s.D5U.getTypedArrayFromDType("bool",1)),t=iv({inputs:{a:o,b:e},backend:r});return r.disposeData(e.dataId),t}throw Error(`Error in Cast: failed to cast ${o.dtype} to ${a}`)}},ik=eY({opType:sT.CEIL,cpuKernelImpl:eJ}),iI={kernelName:s.gJX,backendName:"webgpu",kernelFunc:ik};class iR{constructor(e){this.variableNames=["A"],this.uniforms="minVal : f32, maxVal : f32,",this.workPerThread=4,this.workgroupSize=[64,1,1],this.outputComponent=4,this.size=!0,this.outputShape=e,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.shaderKey="clipVec4"}getUserCode(){return`
      ${b("index")} {
        if(index < uniforms.size) {
          let value = getAByOutputIndex(index);
          var clampedValue = clamp(
              value, vec4<f32>(uniforms.minVal), vec4<f32>(uniforms.maxVal));
          clampedValue = select(clampedValue, value, isnanVec4(value));
          setOutputAtIndex(index, clampedValue);
        }
      }
    `}}class iP{constructor(e){this.variableNames=["A"],this.uniforms="minVal : f32, maxVal : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="clip"}getUserCode(){return`
      ${b("index")} {
        if(index < uniforms.size) {
          let value = getAByOutputIndex(index);
          if (isnan(value)) {
            setOutputAtIndex(index, value);
            return;
          }
          setOutputAtIndex(index, clamp(value, uniforms.minVal, uniforms.maxVal));
        }
      }
    `}}let i$={kernelName:s.xnO,backendName:"webgpu",kernelFunc:function(e){let t;let{inputs:i,backend:r,attrs:n}=e,{x:o}=i,{clipValueMin:a,clipValueMax:u}=n;return t=s.D5U.sizeFromShape(o.shape)%4==0?new iR(o.shape):new iP(o.shape),r.runWebGPUProgram(t,[o],o.dtype,[{type:"float32",data:[a]},{type:"float32",data:[u]}])}};class iA{constructor(e){this.outputShape=[],this.variableNames=["real","imag"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="complexAbs"}getUserCode(){return`
    ${b("index")} {
      if (index < uniforms.size) {
        let re = abs(getRealByOutputIndex(index));
        let im = abs(getImagByOutputIndex(index));
        let mx = max(re, im);

        // The length function in wgsl may be not underflow-safe on some GPUs.
        // So the safe solution is to ensure underflow-safety in all cases.
        setOutputAtIndex(index, select(mx * length(vec2<f32>(1, min(re, im)/mx)), 0.0, mx == 0.0));
      }
    }
  `}}function iT(e,t){return{dataId:t.dataId,dtype:t.dtype,shape:e.shape}}let i_={kernelName:s.yj2,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i}=e,{x:r}=t,n=i.tensorMap.get(r.dataId),o=new iA(r.shape),a=[iT(r,n.complexTensorInfos.real),iT(r,n.complexTensorInfos.imag)];return i.runWebGPUProgram(o,a,a[0].dtype)}};class iN{constructor(e){this.uniforms="",this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=s.backend_util.computeOutShape(e,1),this.variableNames=e.map((e,t)=>`T${t}`),this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.offsetLength=e.length-1;for(let e=0;e<this.offsetLength;e++)this.uniforms+=`offset${e} : i32,`;this.shaderKey="concat"}getUserCode(){let e=[];if(this.offsetLength>0){e.push("if (yC < uniforms.offset0){ setOutputAtCoords(coords.x, coords.y, getT0(yR, yC)); }");for(let t=1;t<this.offsetLength;t++)e.push(`else if (yC < uniforms.offset${[t]}){ setOutputAtCoords(coords.x, coords.y, getT${t}(yR, yC - uniforms.offset${t-1})); }`);let t=this.offsetLength,i=this.offsetLength-1;e.push(`else { setOutputAtCoords(coords.x, coords.y, getT${t}(yR, yC - uniforms.offset${i})); }`)}else e.push("setOutputAtCoords(coords.x, coords.y, getT0(yR, yC));");return`
      ${b("index")} {
        for(var i = 0; i < ${this.workPerThread}; i = i + 1) {
          let flatIndex = index * ${this.workPerThread} + i;
          if(flatIndex < uniforms.size) {
            let coords = getCoordsFromIndex(flatIndex);
            let yR = coords.x;
            let yC = coords.y;

            ${e.join("\n        ")}
          }
        }
      }
    `}}function iF(e){let{inputs:t,backend:i}=e,{input:r}=t;return eH({inputs:{x:i.tensorMap.get(r.dataId).complexTensorInfos.imag},backend:i})}let iz={kernelName:s.J_u,backendName:"webgpu",kernelFunc:iF};function iD(e){let{inputs:t,backend:i,attrs:r}=e,{axis:n}=r,o=s.D5U.parseAxisParam(n,t[0].shape)[0],a=t.map(e=>e.shape);s.backend_util.assertParamsConsistent(a,o);let u=s.backend_util.computeOutShape(t.map(e=>e.shape),o);if(0===s.D5U.sizeFromShape(u))return i.makeTensorInfo(u,t[0].dtype,[]);let l=t.filter(e=>s.D5U.sizeFromShape(e.shape)>0);return 1===l.length?eH({inputs:{x:l[0]},backend:i}):function e(t,i,r){let n=t[0].dtype;if("complex64"===n){let n=t.map(e=>iw({inputs:{input:e},backend:r})),o=t.map(e=>iF({inputs:{input:e},backend:r})),a=e(n,i,r),s=e(o,i,r),u=ej({inputs:{real:a,imag:s},backend:r});return n.forEach(e=>r.disposeData(e.dataId)),o.forEach(e=>r.disposeData(e.dataId)),r.disposeData(a.dataId),r.disposeData(s.dataId),u}let o=r.shouldExecuteOnCPU(t);if("string"===n&&(o=!0),o){let e=t.map(e=>{let t=s.D5U.sizeFromShape(e.shape.slice(i));return eO({inputs:{x:e},backend:r,attrs:{shape:[-1,t]}})}),o=e0(e.map(e=>({vals:r.readSync(e.dataId),shape:e.shape})),s.backend_util.computeOutShape(e.map(e=>e.shape),1),n,1===e[0].shape[0]),a=s.backend_util.computeOutShape(t.map(e=>e.shape),i),u=r.makeTensorInfo(a,n,o);return e.forEach(e=>r.disposeData(e.dataId)),u}let a=r.device.limits.maxStorageBuffersPerShaderStage-1;if(t.length>a){let n=[];for(let o=0;o<t.length;o+=a){let s=t.slice(o,o+a);n.push(e(s,i,r))}let o=e(n,i,r);for(let e of n)r.disposeData(e.dataId);return o}let{tensors2D:u,outShape:l}=function(e,t,i){let r=s.backend_util.computeOutShape(e.map(e=>e.shape),t);return{tensors2D:e.map(e=>eO({inputs:{x:e},backend:i,attrs:{shape:[s.D5U.sizeFromShape(e.shape.slice(0,t)),s.D5U.sizeFromShape(e.shape.slice(t))]}})),outShape:r}}(t,i,r),h=u.map(e=>e.shape),d=new iN(h),p=[],c=Array(h.length-1);if(c.length>0){c[0]=h[0][1],p.push({type:"int32",data:[c[0]]});for(let e=1;e<c.length;e++)c[e]=c[e-1]+h[e][1],p.push({type:"int32",data:[c[e]]})}let f=r.runWebGPUProgram(d,u,u[0].dtype,p);u.forEach(e=>r.disposeData(e.dataId));let m=eO({inputs:{x:f},backend:r,attrs:{shape:l}});return r.disposeData(f.dataId),m}(l,o,i)}let iE={kernelName:s.Eh3,backendName:"webgpu",kernelFunc:iD};class iL{constructor(e,t,i,r,n=!1,o=null,a=!1,s=!1){this.variableNames=["x","W"],this.uniforms="filterDims : vec2<i32>, pads : vec2<i32>, strides : vec2<i32>, dilations : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.outputShape=e.outShape,this.isChannelsLast="channelsLast"===e.dataFormat,this.isVec4=((e.inChannels%4==0||e.inChannels%3==0)&&this.isChannelsLast||e.outWidth%4==0&&!this.isChannelsLast)&&e.outChannels%4==0,this.dispatchLayout=this.isChannelsLast?{x:[3],y:[1,2],z:[0]}:{x:[2,3],y:[1],z:[0]},this.workgroupSize=T(this.dispatchLayout,this.outputShape,this.isVec4),this.elementsPerThread=_(this.dispatchLayout,this.outputShape,this.isVec4),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize,this.elementsPerThread),this.isVec4?(this.outputComponent=4,this.isChannelsLast&&e.inChannels%4!=0?(this.innerElementSize=3,this.variableComponents=[1,4]):(this.innerElementSize=4,this.variableComponents=[4,4]),n&&(this.variableNames.push("bias"),this.variableComponents.push(4)),a&&(this.variableNames.push("preluActivationWeights"),this.variableComponents.push(4))):(this.innerElementSize=this.elementsPerThread[0],n&&this.variableNames.push("bias"),a&&this.variableNames.push("preluActivationWeights")),this.sequentialAccessByThreads=s,this.addBias=n,this.activation=o,this.hasPreluActivationWeights=a,this.tileAOuter=this.workgroupSize[1]*this.elementsPerThread[1],this.tileBOuter=this.workgroupSize[0]*this.elementsPerThread[0],this.tileInner=Math.max(this.workgroupSize[0]*this.innerElementSize,this.workgroupSize[1]),this.fitAOuter=t%this.tileAOuter==0,this.fitBOuter=i%this.tileBOuter==0,this.fitInner=r%this.tileInner==0,this.shaderKey=`conv2DMM_${this.elementsPerThread}_${this.activation}}_${this.fitAOuter}_${this.fitBOuter}_${this.fitInner}_${this.isVec4}_${this.innerElementSize}_${this.isChannelsLast}_${this.sequentialAccessByThreads}`}getUserCode(){let e=this.isVec4?eI(this.elementsPerThread,this.workgroupSize,!this.isChannelsLast,this.tileInner):e$(this.elementsPerThread,this.workgroupSize,!this.isChannelsLast,this.tileInner,!1,null,this.sequentialAccessByThreads),t=this.isVec4?[this.innerElementSize,4,4]:[1,1,1];return`
    ${function(e,t,i,r,n=!1,o=null,a=!1,s=4,u=4,l=4){let h=e?`
      let coord = vec4<i32>(batch, xRow, xCol, xCh);
      `:`
      let coord = vec4<i32>(batch, xCh, xRow, xCol);
      `,d=e?`
      let coords = vec4<i32>(
        batch,
        row / outWidth,
        row % outWidth,
        col);
      `:`
      let coords = vec4<i32>(
        batch,
        row,
        col / outWidth,
        col % outWidth);
      `,p=e?"row":"col",c=e?"col":"row",f=`
      let inChannels = uniforms.wShape[2];
      let outWidth = ${e?"uniforms.outShape[2]":"uniforms.outShape[3]"};
      let outRow = ${p} / outWidth;
      let outCol = ${p} % outWidth;

      let WRow = ${c} / (uniforms.filterDims[1] * inChannels);
      let WCol = ${c} / inChannels % uniforms.filterDims[1];
      let xRow = outRow * uniforms.strides[0] + uniforms.dilations[0] * WRow - uniforms.pads[0];
      let xCol = outCol * uniforms.strides[1] + uniforms.dilations[1] * WCol - uniforms.pads[1];
      let xCh = ${c} % inChannels;
      var resData = ${y(s)}(0.0);
      // The bounds checking is always needed since we use it to pad zero for
      // the 'same' padding type.
      if (xRow >= 0 && xRow < ${e?"uniforms.xShape[1]":"uniforms.xShape[2]"} && xCol >= 0 && xCol < ${e?"uniforms.xShape[2]":"uniforms.xShape[3]"}) {
        ${h}
        let xIndex = getIndexFromCoords4D(coord, uniforms.xShape);
        ${(e=>{switch(e){case 1:return"resData = f32(x[xIndex]);";case 3:return"resData = vec3<f32>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);";case 4:return"resData = vec4<f32>(x[xIndex / 4]);";default:throw Error(`innerElementSize ${e} is not supported.`)}})(s)}
      }
      return resData;`,m=e?t&&r?`
      ${f}`:`
      if (row < uniforms.dimAOuter && col < uniforms.dimInner) {
        ${f}
      }
      return ${y(s)}(0.0);`:r&&i?`
      ${f}`:`
      if (row < uniforms.dimInner && col < uniforms.dimBOuter) {
        ${f}
      }
      return ${y(s)}(0.0);`,g=`${(e=>{switch(e){case 1:return"return f32(W[row * uniforms.wShape[3] + col]);";case 4:return"return vec4<f32>(W[(row * uniforms.wShape[3] + col) / 4]);";default:throw Error(`innerElementSize ${e} is not supported.`)}})(u)}`,x=y(l),v=e?y(s):y(u),b=e?y(u):y(s);return`
      ${ev(o,a,4===l,4)}
      fn mm_readA(batch: i32, row : i32, col : i32) -> ${v} {
        ${e?m:g}
      }

      fn mm_readB(batch: i32, row : i32, col : i32) -> ${b} {
        ${e?g:m}
      }

      fn mm_write(batch: i32, row : i32, col : i32, valueIn : ${x}) {
        if (row < uniforms.dimAOuter && col < uniforms.dimBOuter)
        {
        var value = valueIn;
        let outWidth = ${e?"uniforms.outShape[2]":"uniforms.outShape[3]"};
        ${d}
        ${eb(n,o)}
        setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
        }
      }`}(this.isChannelsLast,this.fitAOuter,this.fitBOuter,this.fitInner,this.addBias,this.activation,this.hasPreluActivationWeights,t[0],t[1],t[2])}
    ${e}
  `}}class iO{constructor(e,t=!1,i=null,r=!1){this.variableNames=["x","W"],this.uniforms="filterDims: vec2<i32>, pads: vec2<i32>, strides: vec2<i32>, dilations: vec2<i32>,",this.workgroupSize=[4,4,8],this.outputShape=e.outShape,this.isChannelsLast="channelsLast"===e.dataFormat,this.dispatchLayout=this.isChannelsLast?{x:[2],y:[1],z:[0,3]}:{x:[3],y:[2],z:[0,1]},this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.addBias=t,this.activation=i,this.hasPreluActivationWeights=r,t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.shaderKey=`conv2dnaive_${this.activation}_${this.isChannelsLast}`}getUserCode(){return`
       ${ev(this.activation,this.hasPreluActivationWeights,!1,4)}
       fn readInp(batch : i32, row : i32, col : i32, chan : i32) -> f32{
         let coords = vec4<i32>(batch, row, col, chan);
         if (coordsInBounds4D(coords, uniforms.xShape)) {
           return  getX(batch, row, col, chan);
         } else {
          return 0.0;
         }
       }
       fn readFilt(row : i32, col : i32, xChannel : i32, outChannel : i32) -> f32{
         let coords = vec4<i32>(row, col, xChannel, outChannel);
         if(coordsInBounds4D(coords, uniforms.wShape)) {
           return getW(row, col, xChannel, outChannel);
          } else {
            return 0.0;
          }
       }
       fn writeResult(batch : i32, row : i32, col : i32, chan : i32, valueIn : f32) {
         let coords = ${this.isChannelsLast?"vec4<i32>(batch, row, col, chan);":"vec4<i32>(batch, chan, row, col);"}
         if (coordsInBounds4D(coords, uniforms.outShape)) {
           var value = valueIn;
           ${eb(this.addBias,this.activation)}
           setOutputAtCoords(coords.x, coords.y, coords.z, coords.w, value);
         }
       }
       ${b("index")} {
         let coords = getOutputCoords();
         let batch = coords[0];
         let outChannel = ${this.isChannelsLast?"coords[3];":"coords[1];"}
         let outRow = ${this.isChannelsLast?"coords[1];":"coords[2];"}
         let outCol = ${this.isChannelsLast?"coords[2];":"coords[3];"}
         var acc : f32 = 0.0;
         for (var row = 0; row < uniforms.filterDims[0]; row = row + 1) {
           for (var col = 0; col < uniforms.filterDims[1]; col = col + 1) {
             let xRow = outRow * uniforms.strides[0] + uniforms.dilations[0] * row - uniforms.pads[0];
             let xCol = outCol * uniforms.strides[1] + uniforms.dilations[1] * col - uniforms.pads[1];
             for (var xChannel = 0; xChannel < ${this.isChannelsLast?"uniforms.xShape[3];":"uniforms.xShape[1];"} xChannel = xChannel + 1) {
               ${this.isChannelsLast?"let v = readInp(batch, xRow, xCol, xChannel);":"let v = readInp(batch, xChannel, xRow, xCol);"}
               let f = readFilt(row, col, xChannel, outChannel);
               acc = acc + v * f;
             }
           }
         }
         writeResult(batch, outRow, outCol, outChannel, acc);
       }
     `}}class iU{constructor(e,t){this.variableNames=["x"],this.uniforms=`pads : vec2<i32>, strides : vec2<i32>, dilations : vec2<i32>, outWidth : i32, itemsPerBlockRow : i32,
       inChannels : i32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.isChannelsLast=t,this.shaderKey=`im2col_${this.isChannelsLast}`}getUserCode(){let e=this.isChannelsLast?1:2,t=this.isChannelsLast?2:3,i=this.isChannelsLast?"coords[1]":"coords[2]",r=this.isChannelsLast?"coords[2]":"coords[1]",n=this.isChannelsLast?"getX(batch, xRow, xCol, ch)":"getX(batch, ch, xRow, xCol)";return`
    ${b("index")} {
      let coords = getCoordsFromIndex(index);
      if(index < uniforms.size) {
        let batch = coords[0];
        let row = ${i};
        let col = ${r};
        let offsetY = (row / uniforms.outWidth) * uniforms.strides[0] - uniforms.pads[0];
        let xRow = offsetY + uniforms.dilations[0] * (col / uniforms.itemsPerBlockRow);
        var value = 0.0;
        if(xRow < uniforms.xShape[${e}] && xRow >= 0) {
          let offsetX = (row % uniforms.outWidth) * uniforms.strides[1] -
              uniforms.pads[1];
          let xCol = offsetX + uniforms.dilations[1] * ((col %
              uniforms.itemsPerBlockRow) / uniforms.inChannels);
          let ch = col % uniforms.inChannels;
          if(xCol < uniforms.xShape[${t}] && xCol >= 0) {
            value = ${n};
          }
        }
        setOutputAtIndex(index, value);
      }
    }
   `}}function iM(e,t){let i=e.length;return i>=3?t?[...e.slice(0,-3),e[i-3]*e[i-2],e[i-1]]:[...e.slice(0,-3),e[i-3],e[i-2]*e[i-1]]:!t&&1===i&&e[0]>1?[e[0],1]:null}function iB({x:e,filter:t,convInfo:i,backend:r,bias:n=null,preluActivationWeights:o=null,leakyreluAlpha:a=0,activation:u=null}){let l;let h=null!=n,d=null!=o,p="channelsLast"===i.dataFormat,c=p&&i.filterHeight===i.inHeight&&i.filterWidth===i.inWidth&&"VALID"===i.padInfo.type,f=(0,s.OBj)().getBool("WEBGPU_USE_NAIVE_CONV2D_DEBUG");if(!f&&(c||1===i.filterHeight&&1===i.filterWidth&&1===i.dilationHeight&&1===i.dilationWidth&&1===i.strideHeight&&1===i.strideWidth&&("SAME"===i.padInfo.type||"VALID"===i.padInfo.type)))return function({x:e,filter:t,convInfo:i,backend:r,bias:n=null,preluActivationWeights:o=null,leakyreluAlpha:a=0,activation:s=null}){let u,l;let h="channelsLast"===i.dataFormat,d=h&&i.filterHeight===i.inHeight&&i.filterWidth===i.inWidth&&"VALID"===i.padInfo.type,p=[];if(d){let n=i.inHeight*i.inWidth*i.inChannels;u=eO({inputs:{x:e},backend:r,attrs:{shape:[1,i.batchSize,n]}}),l=eO({inputs:{x:t},backend:r,attrs:{shape:[1,n,i.outChannels]}})}else u=eO({inputs:{x:e},backend:r,attrs:{shape:h?[i.batchSize,i.inHeight*i.inWidth,i.inChannels]:[i.batchSize,i.inChannels,i.inHeight*i.inWidth]}}),l=eO({inputs:{x:t},backend:r,attrs:{shape:[1,i.inChannels,i.outChannels]}});if(p.push(u),p.push(l),null!=o){let e=iM(o.shape,h);null!=e&&(o=eO({inputs:{x:o},backend:r,attrs:{shape:e}}),p.push(o))}if(null!=n){let e=iM(n.shape,h);null!=e&&(n=eO({inputs:{x:n},backend:r,attrs:{shape:e}}),p.push(n))}let c=eM({a:h?u:l,b:h?l:u,transposeA:!h,transposeB:!1,backend:r,bias:n,activation:s,preluActivationWeights:o,leakyreluAlpha:a}),f=eO({inputs:{x:c},backend:r,attrs:{shape:i.outShape}});for(let e of(p.push(c),p))r.disposeData(e.dataId);return f}({x:e,filter:t,convInfo:i,backend:r,bias:n,activation:u,preluActivationWeights:o,leakyreluAlpha:a});let m=(0,s.OBj)().getNumber("WEBGPU_THRESHOLD_TO_INCREASE_WORKGROUPS_FOR_MATMUL"),g=m>-1?m:r.thresholdToIncreaseWorkgroups,y=i.batchSize*Math.ceil(i.outHeight*i.outWidth/32)*Math.ceil(i.outChannels/32);if((0,s.OBj)().getBool("WEBGPU_CONV_SEPARATE_IM2COL_SHADER")||y<=g)return function({x:e,filter:t,convInfo:i,backend:r,bias:n=null,preluActivationWeights:o=null,leakyreluAlpha:a=0,activation:s=null}){let{filterWidth:u,filterHeight:l,inChannels:h,strideWidth:d,strideHeight:p,padInfo:c,outWidth:f,outHeight:m,dilationWidth:g,dilationHeight:y,dataFormat:x}=i,v="channelsLast"===x,b=u*l*h,w=m*f,S=new iU(v?[i.batchSize,w,b]:[i.batchSize,b,w],v),C=[{type:"int32",data:[c.top,c.left]},{type:"int32",data:[p,d]},{type:"int32",data:[y,g]},{type:"int32",data:[f]},{type:"int32",data:[h*u]},{type:"int32",data:[h]}],k=r.runWebGPUProgram(S,[e],e.dtype,C),I=[];I.push(k);let R=eO({inputs:{x:t},backend:r,attrs:{shape:[1,b,-1]}});if(I.push(R),null!=o){let e=iM(o.shape,v);null!=e&&(o=eO({inputs:{x:o},backend:r,attrs:{shape:e}}),I.push(o))}if(null!=n){let e=iM(n.shape,v);null!=e&&(n=eO({inputs:{x:n},backend:r,attrs:{shape:e}}),I.push(n))}let P=eM({a:v?k:R,b:v?R:k,transposeA:!v,transposeB:!1,backend:r,bias:n,activation:s,preluActivationWeights:o,leakyreluAlpha:a}),$=eO({inputs:{x:P},backend:r,attrs:{shape:i.outShape}});for(let e of(I.push(P),I))r.disposeData(e.dataId);return $}({x:e,filter:t,convInfo:i,backend:r,bias:n,preluActivationWeights:o,leakyreluAlpha:a,activation:u});let x=[i.padInfo.top,i.padInfo.left],v=[{type:"int32",data:[i.filterHeight,i.filterWidth]},{type:"int32",data:[...x]},{type:"int32",data:[i.strideHeight,i.strideWidth]},{type:"int32",data:[i.dilationHeight,i.dilationWidth]}];if(f)l=new iO(i,h,u,d);else{let e=p?i.outHeight*i.outWidth:i.outChannels,t=p?i.outChannels:i.outHeight*i.outWidth,n=i.filterHeight*i.filterWidth*i.inChannels;v.push({type:"int32",data:[e]},{type:"int32",data:[t]},{type:"int32",data:[n]}),l=new iL(i,e,t,n,h,u,d,r.adapterInfo.isIntel())}let b=[],w=[e,t];h&&(p||1!==n.shape.length||b.push(n=eO({inputs:{x:n},backend:r,attrs:{shape:[n.shape[0],1,1]}})),w.push(n)),d&&(p||1!==o.shape.length||b.push(o=eO({inputs:{x:o},backend:r,attrs:{shape:[o.shape[0],1,1]}})),w.push(o)),"leakyrelu"===u&&(v.push({type:"float32",data:[a]}),l.uniforms+=" alpha : f32,");let S=r.runWebGPUProgram(l,w,e.dtype,v);for(let e of b)r.disposeData(e.dataId);return S}let iW={kernelName:s.mhS,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,attrs:i,backend:r}=e,{x:n,filter:o}=t,{strides:a,pad:u,dataFormat:l,dilations:h,dimRoundingMode:d}=i,p=s.backend_util.convertConv2DDataFormat(l),c=s.backend_util.computeConv2DInfo(n.shape,o.shape,a,h,u,d,!1,p);return iB({x:n,filter:o,convInfo:c,backend:r})}};class iV{constructor(e){this.variableNames=["dy","W"],this.uniforms="filterDims : vec2<i32>, pads : vec2<i32>, strides : vec2<i32>, outBackprop : vec4<i32>,",this.workgroupSize=[64,1,1],this.size=!1,this.isVec4=!1,this.workPerThread=1,this.outputShape=e.inShape,this.isChannelsLast="channelsLast"===e.dataFormat,this.isVec4=this.isChannelsLast&&e.outChannels%4==0&&e.inChannels%4==0,this.isVec4?(this.workPerThread=2,this.outputComponent=4,this.workgroupSize=[4,4,4],this.dispatchLayout={x:[3],y:[2],z:[0,1]},this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize,[4,this.workPerThread,1])):(this.size=!0,this.workPerThread=1,this.workgroupSize=[64,1,1],this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize)),this.shaderKey=`conv2DDerInput_${this.isChannelsLast}_${this.isVec4}_${this.workPerThread}`}getUserCode(){let e=this.isChannelsLast?1:2,t=this.isChannelsLast?2:3,i=this.isChannelsLast?3:1,r=`
    ${b()} {
      let batch = i32(globalId.z) / uniforms.outShape[1];
      let r = i32(globalId.z) % uniforms.outShape[1];
      let c = i32(globalId.y) * ${this.workPerThread};
      let d1 = i32(globalId.x) * 4;

      let dyCorner = vec2<i32>(r, c) - uniforms.pads;

      // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
      // ? = to be determined. : = across all values in that axis.
      var dotProd: array<vec4<f32>, ${this.workPerThread}>;
      for (var i = 0; i < ${this.workPerThread}; i++) {
        dotProd[i] = vec4<f32>(0.0);
      }
      for (var wR = 0; wR < uniforms.filterDims.x; wR = wR + 1) {
        let dyR = f32(dyCorner.x + wR) / f32(uniforms.strides.x);
        let wRPerm = uniforms.filterDims.x - 1 - wR;
        if (dyR < 0.0 || dyR >= f32(uniforms.outBackprop[1]) ||
            fract(dyR) > 0.0) {
          continue;
        }
        let idyR = i32(dyR);

        for (var wC = 0; wC < uniforms.filterDims.y; wC = wC + 1) {
          let dyC = f32(dyCorner.y + wC) / f32(uniforms.strides.y);
          let dyC2 = f32(dyCorner.y + 1 + wC) / f32(uniforms.strides.y);
          let wCPerm = uniforms.filterDims.y - 1 - wC;
          var bDyCVal = true;
          var bDyCVal2 = true;
          if (dyC < 0.0 || dyC >= f32(uniforms.outBackprop[2]) ||
              fract(dyC) > 0.0) {
            bDyCVal = false;
          }
          if (dyC2 < 0.0 || dyC2 >= f32(uniforms.outBackprop[2]) ||
              fract(dyC2) > 0.0) {
            bDyCVal2 = false;
          }

          let idyC = i32(dyC);
          let idyC2 = i32(dyC2);
          if (bDyCVal && bDyCVal2) {
            let d2Length = uniforms.outBackprop[3];
            for (var d2 = 0; d2 < d2Length; d2 = d2 + 4) {
              let wValue0 = getW(wRPerm, wCPerm, d1, d2);
              let wValue1 = getW(wRPerm, wCPerm, d1 + 1, d2);
              let wValue2 = getW(wRPerm, wCPerm, d1 + 2, d2);
              let wValue3 = getW(wRPerm, wCPerm, d1 + 3, d2);
              var xValue =  getDy(batch, idyR, idyC, d2);
              let tmpval = vec4<f32>(dot(xValue, wValue0),
                                     dot(xValue, wValue1),
                                     dot(xValue, wValue2),
                                     dot(xValue, wValue3));
              dotProd[0] = dotProd[0] + tmpval;
              xValue = getDy(batch, idyR, idyC2, d2);
              dotProd[1] = dotProd[1] + vec4<f32>(dot(xValue, wValue0),
                                                  dot(xValue, wValue1),
                                                  dot(xValue, wValue2),
                                                  dot(xValue, wValue3));
            }
          } else if (bDyCVal) {
            let d2Length = uniforms.outBackprop[3];
            for (var d2 = 0; d2 < d2Length; d2 = d2 + 4) {
              let wValue0 = getW(wRPerm, wCPerm, d1, d2);
              let wValue1 = getW(wRPerm, wCPerm, d1 + 1, d2);
              let wValue2 = getW(wRPerm, wCPerm, d1 + 2, d2);
              let wValue3 = getW(wRPerm, wCPerm, d1 + 3, d2);
              var xValue =  getDy(batch, idyR, idyC, d2);
              let tmpval = vec4<f32>(dot(xValue, wValue0),
                                     dot(xValue, wValue1),
                                     dot(xValue, wValue2),
                                     dot(xValue, wValue3));
              dotProd[0] = dotProd[0] + tmpval;
            }
          } else if (bDyCVal2) {
            let d2Length = uniforms.outBackprop[3];
            for (var d2 = 0; d2 < d2Length; d2 = d2 + 4) {
              let wValue0 = getW(wRPerm, wCPerm, d1, d2);
              let wValue1 = getW(wRPerm, wCPerm, d1 + 1, d2);
              let wValue2 = getW(wRPerm, wCPerm, d1 + 2, d2);
              let wValue3 = getW(wRPerm, wCPerm, d1 + 3, d2);
              var xValue =  getDy(batch, idyR, idyC2, d2);
              let tmpval = vec4<f32>(dot(xValue, wValue0),
                                     dot(xValue, wValue1),
                                     dot(xValue, wValue2),
                                     dot(xValue, wValue3));
              dotProd[1] = dotProd[1] + tmpval;
            }
          }
        }
      }

      for (var i = 0; i < ${this.workPerThread}; i = i + 1) {
        let coords = vec4<i32>(batch, r, c + i, d1);
        if (coordsInBounds4D(coords, uniforms.outShape)) {
          setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], dotProd[i]);
        }
      }
    }
    `;return this.isVec4?`
    ${r}
    `:`
    ${b("index")} {
      if(index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let batch = coords[0];
        let d1 = coords[${i}];

        let dyCorner = vec2<i32>(coords[${e}], coords[${t}]) - uniforms.pads;
        let dyRCorner = dyCorner.x;
        let dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        var dotProd = 0.0;
        for (var wR = 0; wR < uniforms.filterDims.x; wR = wR + 1) {
          let dyR = (f32(dyRCorner) + f32(wR)) / f32(uniforms.strides.x);
          let wRPerm = uniforms.filterDims.x - 1 - wR;
          if (dyR < 0.0 || dyR >= f32(uniforms.outBackprop[1]) || fract(dyR) > 0.0 ||
              wRPerm < 0) {
            continue;
          }
          let idyR = i32(dyR);

          for (var wC = 0; wC < uniforms.filterDims.y; wC = wC + 1) {
            let dyC = (f32(dyCCorner) + f32(wC)) / f32(uniforms.strides.y);
            let wCPerm = uniforms.filterDims.y - 1 - wC;
            if (dyC < 0.0 || dyC >= f32(uniforms.outBackprop[2]) ||
                fract(dyC) > 0.0 || wCPerm < 0) {
              continue;
            }
            let idyC = i32(dyC);

            for (var d2 = 0; d2 < uniforms.outBackprop[3]; d2 = d2 + 1) {
              let xValue = ${this.isChannelsLast?"getDy(batch, idyR, idyC, d2)":"getDy(batch, d2, idyR, idyC)"};
              let wValue = getW(wRPerm, wCPerm, d1, d2);
              dotProd = dotProd + xValue * wValue;
            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
  `}}class iH{constructor(e){this.variableNames=["x","dy"],this.uniforms="pads : vec2<i32>, strides : vec2<i32>, batchSize : i32, outHeight : i32, outWidth : i32, inHeight : i32, inWidth : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.filterShape,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.isChannelsLast="channelsLast"===e.dataFormat,this.shaderKey=`conv2DDerFilter_${this.isChannelsLast}`}getUserCode(){return`
    ${b("index")} {
      if(index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let wR = coords[0];
        let wC = coords[1];
        let d1 = coords[2];
        let d2 = coords[3];

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        var dotProd = 0.0;
        for (var b = 0; b < uniforms.batchSize; b = b + 1) {
          for (var yR = 0; yR < uniforms.outHeight; yR = yR + 1) {
            let xR = wR + yR * uniforms.strides[0] - uniforms.pads[0];
            if (xR < 0 || xR >= uniforms.inHeight) {
              continue;
            }

            for (var yC = 0; yC < uniforms.outWidth; yC = yC + 1) {
              let xC = wC + yC * uniforms.strides[1] - uniforms.pads[1];

              if (xC < 0 || xC >= uniforms.inWidth) {
                continue;
              }

              if (${this.isChannelsLast}) {
                let dyValue = getDy(b, yR, yC, d2);
                let xValue = getX(b, xR, xC, d1);
                dotProd = dotProd + xValue * dyValue;
              } else {
                let dyValue = getDy(b, d2, yR, yC);
                let xValue = getX(b, d1, xR, xC);
                dotProd = dotProd + xValue * dyValue;
              }
            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
  `}}class iG{constructor(e){this.variableNames=["x","dy"],this.uniforms=`pads : vec3<i32>, strides : vec3<i32>, batchSize : i32, outDepth : i32,
       outHeight : i32, outWidth : i32, inDepth : i32, inHeight : i32, inWidth : i32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.filterShape,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="conv3DDerFilter"}getUserCode(){return`
    ${b("index")} {
      if(index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let wF = coords.x;
        let wR = coords.y;
        let wC = coords.z;
        let d1 = coords.w;
        let d2 = coords.u;

        var dotProd = 0.0;
        for (var b = 0; b < uniforms.batchSize; b++) {
          for (var yF = 0; yF < uniforms.outDepth; yF++) {
            let xF = wF + yF * uniforms.strides[0] - uniforms.pads[0];
            if (xF < 0 || xF >= uniforms.inDepth) {
              continue;
            }

            for (var yR = 0; yR < uniforms.outHeight; yR++) {
              let xR = wR + yR * uniforms.strides[1] - uniforms.pads[1];
              if (xR < 0 || xR >= uniforms.inHeight) {
                continue;
              }

              for (var yC = 0; yC < uniforms.outWidth; yC++) {
                let xC = wC + yC * uniforms.strides[2] - uniforms.pads[2];
                if (xC < 0 || xC >= uniforms.inWidth) {
                  continue;
                }

                let dyValue = getDy(b, yF, yR, yC, d2);
                let xValue = getX(b, xF, xR, xC, d1);
                dotProd += xValue * dyValue;
              }
            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
  `}}class ij{constructor(e){this.variableNames=["dy","W"],this.uniforms=`filterDims : vec3<i32>, pads : vec3<i32>, strides : vec3<i32>,
      outDepth : i32, outHeight : i32, outWidth : i32, outChannels : i32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.inShape,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="conv3DDerInput"}getUserCode(){return`
    ${b("index")} {
      if(index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let batch = coords.x;
        let d1 = coords.u;

        let dyCorner = vec3<i32>(coords.y, coords.z, coords.w) - uniforms.pads;
        let dyFCorner = dyCorner.x;
        let dyRCorner = dyCorner.y;
        let dyCCorner = dyCorner.z;

        var dotProd = 0.0;
        for (var wF = 0; wF < uniforms.filterDims[0]; wF++) {
          let dyF = f32(dyFCorner + wF) / f32(uniforms.strides[0]);
          if (dyF < 0.0 || dyF >= f32(uniforms.outDepth) || fract(dyF) > 0.0) {
            continue;
          }
          let idyF = i32(dyF);

          let wFPerm = uniforms.filterDims[0] - 1 - wF;

          for (var wR = 0; wR < uniforms.filterDims[1]; wR++) {
            let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[1]);

            if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {
              continue;
            }
            let idyR = i32(dyR);

            let wRPerm = uniforms.filterDims[1] - 1 - wR;

            for (var wC = 0; wC < uniforms.filterDims[2]; wC++) {
              let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[2]);

              if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {
                continue;
              }
              let idyC = i32(dyC);

              let wCPerm = uniforms.filterDims[2] - 1 - wC;

              for (var d2 = 0; d2 < uniforms.outChannels; d2++) {
                let xValue = getDy(batch, idyF, idyR, idyC, d2);
                let wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
  `}}let iX={kernelName:s.wUP,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{x:n,dy:o}=t,{strides:a,pad:u,dataFormat:l,dimRoundingMode:h,filterShape:d}=r,p=s.backend_util.convertConv2DDataFormat(l),c=s.backend_util.computeConv2DInfo(n.shape,d,a,1,u,h,!1,p),f=new iH(c),m=[{type:"int32",data:[c.padInfo.top,c.padInfo.left]},{type:"int32",data:[c.strideHeight,c.strideWidth]},{type:"int32",data:[c.batchSize]},{type:"int32",data:[c.outHeight]},{type:"int32",data:[c.outWidth]},{type:"int32",data:[c.inHeight]},{type:"int32",data:[c.inWidth]}];return i.runWebGPUProgram(f,[n,o],n.dtype,m)}};class iK{constructor(e){this.variableNames=["x","W"],this.uniforms="filterDims : vec2<i32>, pads : vec2<i32>, strides : vec2<i32>, outBackprop : vec4<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.outputShape=e.inShape,s.D5U.assert("channelsLast"===e.dataFormat,()=>"TODO: NCHW is unimplemented"),this.isVec4=e.inChannels%4==0&&e.outChannels%4==0,this.dispatchLayout={x:[3],y:[1,2],z:[0]},this.workgroupSize=T(this.dispatchLayout,this.outputShape,this.isVec4),this.elementsPerThread=_(this.dispatchLayout,this.outputShape,this.isVec4),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize,this.elementsPerThread),this.isVec4&&(this.outputComponent=4,this.variableComponents=[4,1]),this.shaderKey=`conv2DDerInputMM_${this.isVec4}_${this.elementsPerThread}`}getUserCode(){let e=this.isVec4?eI(this.elementsPerThread,this.workgroupSize):e$(this.elementsPerThread,this.workgroupSize);return`
    ${function(e=4){let t=`
      let outRow = row / uniforms.outShape[2];
      let outCol = row % uniforms.outShape[2];

      let WRow = col / (uniforms.filterDims[1] * uniforms.outBackprop[3]);
      let WCol = col / uniforms.outBackprop[3] % uniforms.filterDims[1];
      let xR = f32(outRow - uniforms.pads[0] + WRow) / f32(uniforms.strides[0]);
      let xC = f32(outCol - uniforms.pads[1] + WCol) / f32(uniforms.strides[1]);
      if (xR < 0.0 || xR >= f32(uniforms.outBackprop[1]) || fract(xR) > 0.0) {
        return ${y(e)}(0.0);
      }
      if (xC < 0.0 || xC >= f32(uniforms.outBackprop[2]) || fract(xC) > 0.0) {
        return ${y(e)}(0.0);
      }
      let coord = vec4<i32>(
          batch,
          i32(xR),
          i32(xC),
          col % uniforms.outBackprop[3]);
      return x[getIndexFromCoords4D(coord, uniforms.xShape)/${e}];`,i=`if (row < uniforms.dimAOuter && col < uniforms.dimInner) {
        ${t}
      }
      return ${y(e)}(0.0);`;return`
  fn mm_readA(batch: i32, row : i32, col : i32) -> ${y(e)} {
    ${i}
  }

  fn mm_readB(batch: i32, row : i32, col : i32) -> ${y(e)} {
    let coordX = uniforms.filterDims.x - 1 -
        row / (uniforms.filterDims[1] * uniforms.outBackprop[3]);
    let coordY = uniforms.filterDims.y - 1 -
        (row / uniforms.outBackprop[3]) % uniforms.filterDims[1];
    if (row < uniforms.dimInner && col < uniforms.dimBOuter &&
        coordX >= 0 && coordY >= 0) {
      let rowInner = row % uniforms.outBackprop[3];
      let coord = vec4<i32>(coordX, coordY, col, rowInner);
      ${(e=>{switch(e){case 1:return"return W[getIndexFromCoords4D(coord, uniforms.wShape)];";case 4:return`
            let coord1 = vec4<i32>(coordX, coordY, col + 1, rowInner);
            let coord2 = vec4<i32>(coordX, coordY, col + 2, rowInner);
            let coord3 = vec4<i32>(coordX, coordY, col + 3, rowInner);
            let v0 = W[getIndexFromCoords4D(coord, uniforms.wShape)];
            let v1 = W[getIndexFromCoords4D(coord1, uniforms.wShape)];
            let v2 = W[getIndexFromCoords4D(coord2, uniforms.wShape)];
            let v3 = W[getIndexFromCoords4D(coord3, uniforms.wShape)];
            return vec4<f32>(v0, v1, v2, v3);
            `;default:throw Error(`innerElementSize ${e} is not supported.`)}})(e)}
    }
    return ${y(e)}(0.0);
  }

  fn mm_write(batch: i32, row : i32, col : i32, valueInput : ${y(e)}) {
    if (row < uniforms.dimAOuter && col < uniforms.dimBOuter) {
      var value = valueInput;
      let outCoord = vec4<i32>(
          batch,
          row / uniforms.outShape[2],
          row % uniforms.outShape[2],
          col);
      result[getIndexFromCoords4D(outCoord, uniforms.outShape)/${e}] = value;
    }
  }`}(this.isVec4?4:1)}
    ${e}
    `}}let iY={kernelName:s.wm,backendName:"webgpu",kernelFunc:function(e){let t;let{inputs:i,backend:r,attrs:n}=e,{dy:o,filter:a}=i,{inputShape:u,strides:l,pad:h,dataFormat:d,dimRoundingMode:p}=n,c=s.backend_util.convertConv2DDataFormat(d),f=s.backend_util.computeConv2DInfo(u,a.shape,l,1,h,p,!1,c),m=[{type:"int32",data:[f.filterHeight,f.filterWidth]},{type:"int32",data:[f.filterHeight-1-f.padInfo.top,f.filterWidth-1-f.padInfo.left]},{type:"int32",data:[f.strideHeight,f.strideWidth]},{type:"int32",data:[f.batchSize,f.outHeight,f.outWidth,f.outChannels]}];if((0,s.OBj)().getBool("WEBGPU_USE_NAIVE_CONV2D_TRANSPOSE")||"channelsLast"!==f.dataFormat)t=new iV(f);else{t=new iK(f);let e=f.inHeight*f.inWidth,i=f.inChannels,r=f.filterHeight*f.filterWidth*f.outChannels;m.push({type:"uint32",data:[e]},{type:"uint32",data:[i]},{type:"uint32",data:[r]})}return r.runWebGPUProgram(t,[o,a],"float32",m)}};class iq{constructor(e){this.variableNames=["x","W"],this.uniforms="filterDims: vec3<i32>, pads: vec3<i32>, strides: vec3<i32>, dilations: vec3<i32>,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.outShape,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="conv3dnaive"}getUserCode(){return`
    ${b("index")} {
      if (index < uniforms.size) {
        let coords = getOutputCoords();
        let batch = coords.x;
        let d2 = coords.u;

        let xFRCCorner = vec3<i32>(coords.y, coords.z, coords.w) * uniforms.strides - uniforms.pads;
        let xFCorner = xFRCCorner.x;
        let xRCorner = xFRCCorner.y;
        let xCCorner = xFRCCorner.z;

        let inputDepthNearestVec4 = (uniforms.xShape.u / 4) * 4;
        let inputDepthVec4Remainder = uniforms.xShape.u % 4;

        var dotProd = 0.0;
        for (var wF = 0; wF < uniforms.filterDims[0]; wF++) {
          let xF = xFCorner + wF * uniforms.dilations[0];
          if (xF < 0 || xF >= uniforms.xShape.y) {
            continue;
          }

          for (var wR = 0; wR < uniforms.filterDims[1]; wR++) {
            let xR = xRCorner + wR * uniforms.dilations[1];
            if (xR < 0 || xR >= uniforms.xShape.z) {
              continue;
            }

            for (var wC = 0; wC < uniforms.filterDims[2]; wC++) {
              let xC = xCCorner + wC * uniforms.dilations[2];
              if (xC < 0 || xC >= uniforms.xShape.w) {
                continue;
              }

              for (var d1 = 0; d1 < inputDepthNearestVec4; d1 += 4) {
                let xValues = vec4<f32>(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                let wValues = vec4<f32>(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (inputDepthVec4Remainder == 1) {
                dotProd += getX(batch, xF, xR, xC, inputDepthNearestVec4) *
                  getW(wF, wR, wC, inputDepthNearestVec4, d2);
              } else if (inputDepthVec4Remainder == 2) {
                let xValues = vec2<f32>(
                  getX(batch, xF, xR, xC, inputDepthNearestVec4),
                  getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1)
                );
                let wValues = vec2<f32>(
                  getW(wF, wR, wC, inputDepthNearestVec4, d2),
                  getW(wF, wR, wC, inputDepthNearestVec4 + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (inputDepthVec4Remainder == 3) {
                let xValues = vec3<f32>(
                  getX(batch, xF, xR, xC, inputDepthNearestVec4),
                  getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                  getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2)
                );
                let wValues = vec3<f32>(
                  getW(wF, wR, wC, inputDepthNearestVec4, d2),
                  getW(wF, wR, wC, inputDepthNearestVec4 + 1, d2),
                  getW(wF, wR, wC, inputDepthNearestVec4 + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }`}}let iQ={kernelName:s.x12,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{x:n,filter:o}=t,{strides:a,pad:u,dilations:l}=r,h=s.backend_util.computeConv3DInfo(n.shape,o.shape,a,l,u),d=[h.padInfo.front,h.padInfo.top,h.padInfo.left],p=[{type:"int32",data:[h.filterDepth,h.filterHeight,h.filterWidth]},{type:"int32",data:[...d]},{type:"int32",data:[h.strideDepth,h.strideHeight,h.strideWidth]},{type:"int32",data:[h.dilationDepth,h.dilationHeight,h.dilationWidth]}],c=new iq(h),f=(0,s.x8V)(n.dtype,o.dtype);return i.runWebGPUProgram(c,[n,o],f,p)}},iZ={kernelName:s.o2y,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{x:n,dy:o}=t,{strides:a,pad:u,filterShape:l}=r,h=s.backend_util.computeConv3DInfo(n.shape,l,a,1,u),d=new iG(h),p=[{type:"int32",data:[h.padInfo.front,h.padInfo.top,h.padInfo.left]},{type:"int32",data:[h.strideDepth,h.strideHeight,h.strideWidth]},{type:"int32",data:[h.batchSize]},{type:"int32",data:[h.outDepth]},{type:"int32",data:[h.outHeight]},{type:"int32",data:[h.outWidth]},{type:"int32",data:[h.inDepth]},{type:"int32",data:[h.inHeight]},{type:"int32",data:[h.inWidth]}];return i.runWebGPUProgram(d,[n,o],o.dtype,p)}},iJ={kernelName:s.ik2,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{dy:n,filter:o}=t,{strides:a,pad:u,inputShape:l}=r,h=s.backend_util.computeConv3DInfo(l,o.shape,a,1,u),d=new ij(h),p=[{type:"int32",data:[h.filterDepth,h.filterHeight,h.filterWidth]},{type:"int32",data:[h.filterDepth-1-h.padInfo.front,h.filterHeight-1-h.padInfo.top,h.filterWidth-1-h.padInfo.left]},{type:"int32",data:[h.strideDepth,h.strideHeight,h.strideWidth]},{type:"int32",data:[h.outDepth]},{type:"int32",data:[h.outHeight]},{type:"int32",data:[h.outWidth]},{type:"int32",data:[h.outChannels]}];return i.runWebGPUProgram(d,[n,o],n.dtype,p)}},i0=eY({opType:sT.COS}),i2={kernelName:s.mc4,backendName:"webgpu",kernelFunc:i0},i1=eY({opType:sT.COSH}),i3={kernelName:s.TR1,backendName:"webgpu",kernelFunc:i1};class i4{constructor(e,t,i,r){this.variableNames=["Image","Boxes","BoxInd"],this.uniforms="extrapolationValue : f32,",this.workgroupSize=[64,1,1],this.size=!0;let[n]=t;this.outputShape=[n,i[0],i[1],e],this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.methodId="bilinear"===r?1:0,this.cropHeightBiggerThan1=this.outputShape[1]>1,this.cropWidthBiggerThan1=this.outputShape[2]>1,this.shaderKey=`cropAndResize_${this.methodId}_${this.cropHeightBiggerThan1}_${this.cropWidthBiggerThan1}`}getUserCode(){let[e,t]=["f32(uniforms.imageShape[1] - 1)","f32(uniforms.imageShape[2] - 1)"],[i,r,n]=this.cropHeightBiggerThan1?[`(${e} / f32(uniforms.outShape[1] - 1))`,"(y2-y1) * height_ratio",`y1*${e} + f32(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${e}`],[o,a,s]=this.cropWidthBiggerThan1?[`(${t} / f32(uniforms.outShape[2] - 1))`,"(x2-x1) * width_ratio",`x1*${t} + f32(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${t}`];return`
    ${b("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let height_ratio = f32(${i});
        let width_ratio = f32(${o});
        let b = coords[0];
        let y = coords[1];
        let x = coords[2];
        let d = coords[3];
        // get box vals
        let y1 = getBoxes(b, 0);
        let x1 = getBoxes(b, 1);
        let y2 = getBoxes(b, 2);
        let x2 = getBoxes(b, 3);
        // get image in batch index
        let bInd = i32(round(getBoxInd(b)));
        if(bInd < 0 || bInd >= uniforms.outShape[0]) {
          return;
        }
        let height_scale = ${r};
        let width_scale = ${a};
        let in_y = ${n};
        if( in_y < 0.0 || in_y > ${e} ) {
          setOutputAtIndex(index, uniforms.extrapolationValue);
          return;
        }
        let in_x = ${s};
        if( in_x < 0.0 || in_x > ${t} ) {
          setOutputAtIndex(index, uniforms.extrapolationValue);
          return;
        }
        let sourceFracIndexCR = vec2<f32>(in_x,in_y);
        if(${this.methodId} == 1) {
          // Compute the four integer indices.
          let sourceFloorCR = vec2<i32>(sourceFracIndexCR);
          let sourceCeilCR = vec2<i32>(ceil(sourceFracIndexCR));
          let topLeft = getImage(bInd, sourceFloorCR.y, sourceFloorCR.x, d);
          let bottomLeft = getImage(bInd, sourceCeilCR.y, sourceFloorCR.x, d);
          let topRight = getImage(bInd, sourceFloorCR.y, sourceCeilCR.x, d);
          let bottomRight = getImage(bInd, sourceCeilCR.y, sourceCeilCR.x, d);
          let fracCR = sourceFracIndexCR - vec2<f32>(sourceFloorCR);
          let top = topLeft + (topRight - topLeft) * fracCR.x;
          let bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          let newValue = top + (bottom - top) * fracCR.y;
          setOutputAtIndex(index, newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          let sourceNearestCR = vec2<i32>(floor(
            sourceFracIndexCR + vec2<f32>(0.5,0.5)));
          let newValue = getImage(
            bInd, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutputAtIndex(index, newValue);
        }
      }
    }
    `}}let i5={kernelName:s.VcC,backendName:"webgpu",kernelFunc:e=>{let{inputs:t,backend:i,attrs:r}=e,{image:n,boxes:o,boxInd:a}=t,{cropSize:s,method:u,extrapolationValue:l}=r,h=new i4(n.shape[3],o.shape,s,u);return i.runWebGPUProgram(h,[n,o,a],"float32",[{type:"float32",data:[l]}])}};(sR=s_||(s_={})).Prod="*",sR.Sum="+";class i6{constructor(e,t,i,r){this.variableNames=["x"],this.uniforms="index : f32,",this.size=!0,this.workgroupSize=[128,1,1],this.outputShape=t,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.exclusive=i,this.reverse=r,this.op=e,this.shaderKey=`cum_${this.op}_${this.exclusive}_${this.reverse}`}getUserCode(){let e=this.outputShape.length,t=this.op===s_.Prod?"1.0":"0.0",i=this.exclusive?t:`getX(${i8(e,"coords",this.op)})`,r=this.outputShape[this.outputShape.length-1],n="",o="";return this.exclusive?(n=this.reverse?`end != ${r-1}`:"end != 0",o=this.reverse?"end + 1":"end - 1"):(n=this.reverse?`end + pow2 < ${r}`:"end >= pow2",o=this.reverse?"end + pow2":"end - pow2"),`
      ${b("index")} {
       if (index < uniforms.size) {
         var coords = getCoordsFromIndex(index);

         let end = ${i7(e,"coords",this.op)};
         var val = ${i};
         let pow2 = i32(pow(2.0, uniforms.index));
         if (${n}) {
           let idx = ${o};
           ${i7(e,"coords",this.op)} = idx;
           val ${this.op}= getX(${i8(e,"coords",this.op)});
         }
         setOutputAtIndex(index, val);
       }
      }
    `}}function i8(e,t,i){if(1===e)return`${t}`;if(2===e)return`${t}.x, ${t}.y`;if(3===e)return`${t}.x, ${t}.y, ${t}.z`;if(4===e)return`${t}.x, ${t}.y, ${t}.z, ${t}.w`;throw Error(`Cumulative ${i} for rank ${e} is not yet supported`)}function i7(e,t,i){if(1===e)return`${t}`;if(2===e)return`${t}.y`;if(3===e)return`${t}.z`;if(4===e)return`${t}.w`;throw Error(`Cumulative ${i} for rank ${e} is not yet supported`)}function i9(e,t,i,r,n,o){let a=t.shape.length,u=s.backend_util.getAxesPermutation([r],a),l=t;null!=u&&(l=tD({inputs:{x:t},backend:i,attrs:{perm:u}}));let h=s.backend_util.getInnerMostAxes(1,a)[0];if(h!==a-1)throw Error(`WebGPU cumprod shader expects an inner-most axis=${t.shape.length-1} but got axis=${r}`);let d=l.shape[h],p=eH({inputs:{x:l},backend:i});for(let t=0;t<=Math.ceil(Math.log2(d))-1;t++){let r=new i6(e,l.shape,!1,o),n=p,a=[{type:"float32",data:[t]}];p=i.runWebGPUProgram(r,[p],p.dtype,a),i.disposeData(n.dataId)}if(n){let t=new i6(e,l.shape,n,o),r=p;p=i.runWebGPUProgram(t,[p],p.dtype,[{type:"float32",data:[0]}]),i.disposeData(r.dataId)}if(null!=u){let e=tD({inputs:{x:p},backend:i,attrs:{perm:s.backend_util.getUndoAxesPermutation(u)}});return i.disposeData(p.dataId),i.disposeData(l.dataId),e}return p}let re={kernelName:s.Byc,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{x:n}=t,{axis:o,exclusive:a,reverse:s}=r;return i9(s_.Prod,n,i,o,a,s)}},rt={kernelName:s.iHb,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{x:n}=t,{axis:o,exclusive:a,reverse:s}=r;return i9(s_.Sum,n,i,o,a,s)}},ri={kernelName:s.QRR,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{x:n,weights:o}=t,{size:a,binaryOutput:u}=r,l=1===n.shape.length,h=s.D5U.sizeFromShape(o.shape)>0,d=o.dtype,p=l?[n.shape[0]]:[n.shape[0],n.shape[1]],c=eE({backend:i,attrs:{shape:l?[a]:[n.shape[0],a],value:0,dtype:d}}),f=new im(p,h,u),m=[{type:"int32",data:[a]}],g=h?[n,o]:[n];return i.runWebGPUProgram(f,g,d,m,c)}};class rr{constructor(e,t){this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.uniforms="blockSize : i32,",this.outputShape=e,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey=`depthToSpace_${t}`,this.dataFormat=t}getUserCode(){return`
      ${b("index")} {
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let b = coords[0];
          let h = ${this.getHeightCoordString()};
          let w = ${this.getWidthCoordString()};
          let d = ${this.getDepthCoordString()};

          let in_h = h / uniforms.blockSize;
          let offset_h = h % uniforms.blockSize;
          let in_w = w / uniforms.blockSize;
          let offset_w = w % uniforms.blockSize;
          let offset_d = (offset_h * uniforms.blockSize + offset_w) *
            ${this.getOutputDepthSize()};
          let in_d = d + offset_d;

          let rlt = ${this.getInputSamplingString()};
          setOutputAtIndex(index, rlt);
        }
      }`}getHeightCoordString(){return"NHWC"===this.dataFormat?"coords[1]":"coords[2]"}getWidthCoordString(){return"NHWC"===this.dataFormat?"coords[2]":"coords[3]"}getDepthCoordString(){return"NHWC"===this.dataFormat?"coords[3]":"coords[1]"}getOutputDepthSize(){return"NHWC"===this.dataFormat?"uniforms.outShape[3]":"uniforms.outShape[1]"}getInputSamplingString(){return"NHWC"===this.dataFormat?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}}let rn={kernelName:s.T0n,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{x:n}=t,{blockSize:o,dataFormat:a}=r,s=n.shape[0],u="NHWC"===a?n.shape[1]:n.shape[2],l="NHWC"===a?n.shape[2]:n.shape[3],h="NHWC"===a?n.shape[3]:n.shape[1],d=u*o,p=l*o,c=h/(o*o),f=new rr("NHWC"===a?[s,d,p,c]:[s,c,d,p],a);return i.runWebGPUProgram(f,[n],n.dtype,[{type:"int32",data:[o]}])}};class ro{constructor(e,t,i,r=!1,n=null,o=!1){this.variableNames=["x","W"],this.uniforms="pads : vec2<i32>, inDims : vec2<i32>,",this.workgroupSize=[16,16,1],this.outputShape=e,this.dispatchLayout={x:[3],y:[2],z:[0,1]},this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),r&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),this.addBias=r,this.activation=n,this.hasPreluActivation=o,this.filterHeight=t,this.filterWidth=i,this.shaderKey=`depthwiseNCHW_${this.activation}_${this.filterHeight}_${this.filterWidth}`}getUserCode(){let e=this.filterWidth*this.filterHeight,t=this.workgroupSize[0]*this.workgroupSize[1]*this.workgroupSize[2],i=this.workgroupSize[1]+this.filterHeight-1,r=this.workgroupSize[0]+this.filterWidth-1;return`
      ${ev(this.activation,this.hasPreluActivation,!1,4)}

      var<workgroup> mm_Asub : array<array<f32, ${r}>, ${i}>;
      var<workgroup> mm_Bsub : array<array<f32, ${this.filterWidth}>, ${this.filterHeight}>;
      fn readX(batch : i32, channel : i32, row : i32, col : i32) -> f32 {
        var value = 0.0;
        if (row >=0 && row < uniforms.inDims[0] && col >=0 && col < uniforms.inDims[1])
        {
          value = getX(batch, channel, row, col);
        }
        return value;
      }

      ${b()} {
        let coords = getOutputCoords();
        let batch = coords[0];
        let xRCCorner = vec2<i32>(coords.zw) - uniforms.pads;
        let channelMul = uniforms.wShape[3];
        let d1 = coords[1] / channelMul;
        let q = coords[1] % channelMul;

        let inputRowStart = xRCCorner.x;
        let inputColStart = xRCCorner.y;

        let localRow = i32(localId.y);
        let localCol = i32(localId.x);

        // Load one tile of X into local memory.
        for (var inputRow = localRow; inputRow < ${i}; inputRow = inputRow + ${this.workgroupSize[1]}) {
          for (var inputCol = localCol; inputCol < ${r}; inputCol = inputCol + ${this.workgroupSize[0]}) {
            let rowOffset = inputRow - localRow;
            let colOffset = inputCol - localCol;
            mm_Asub[inputRow][inputCol] = readX(batch, d1, inputRowStart + rowOffset, inputColStart + colOffset);
          }
        }

        // Load one tile of W into local memory.
        var wIndex = i32(localIndex);
        ${e<t?`if (wIndex < ${e})`:`for(; wIndex < ${e}; wIndex = wIndex + ${t})`}

        {
          let wRow = wIndex / ${this.filterWidth};
          let wCol = wIndex % ${this.filterWidth};
          mm_Bsub[wRow][wCol] = getW(wRow, wCol, d1, q);
        }

        workgroupBarrier();

        var value = 0.0;
        for (var wR = 0; wR < ${this.filterHeight}; wR = wR + 1) {
          for (var wC = 0; wC < ${this.filterWidth}; wC = wC + 1) {
            let xVal = mm_Asub[localRow + wR][localCol + wC];
            let wVal = mm_Bsub[wR][wC];
            value = fma(xVal, wVal, value);
          }
        }
        ${eb(this.addBias,this.activation)}
        if (coordsInBounds4D(coords, uniforms.outShape)) {
          setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
        }
      }
    `}}class ra{constructor(e,t=!1,i=null,r=!1){this.variableNames=["x","W"],this.uniforms="pads : vec2<i32>, inDims : vec2<i32>, virtualWidth : i32,",this.workgroupSize=[64,1,1],this.workPerThread=4,this.outputComponent=4,this.outputShape=e.outShape,this.virtualWidth=Math.ceil(this.outputShape[2]/this.workPerThread)*this.workPerThread;let n=[this.outputShape[0],this.outputShape[1],this.virtualWidth,this.outputShape[3]];this.dispatchLayout=N(n),this.dispatch=A(this.dispatchLayout,n,this.workgroupSize,[this.outputComponent*this.workPerThread,1,1]),s.D5U.assert("channelsLast"===e.dataFormat,()=>"TODO: NCHW is unimplemented"),t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.convInfo=e,this.addBias=t,this.activation=i,this.hasPreluActivation=r,this.shaderKey=`depthwiseVec4_${i}_${this.convInfo.filterHeight}_${this.convInfo.filterWidth}_${this.convInfo.strideHeight}_${this.convInfo.strideWidth}_${this.workPerThread}`}getUserCode(){let e=(this.workPerThread-1)*this.convInfo.strideWidth+this.convInfo.filterWidth,t=this.convInfo.strideHeight,i=this.convInfo.strideWidth;return`
      ${ev(this.activation,this.hasPreluActivation,!0,4)}
      fn readX(batch : i32, row : i32, col : i32, channel : i32) -> vec4<f32> {
        var value = vec4<f32>(0.0);
        if (col >=0 && col < uniforms.inDims[1]) {
          value = getX(batch, row, col, channel);
        }
        return value;
      }

      ${b("index")} {
        let width0 = uniforms.outShape[3] / ${this.outputComponent};
        let d1 = (index % width0) * ${this.outputComponent};
        var index1 = index / width0;
        let width1 = uniforms.virtualWidth / ${this.workPerThread};
        let c = (index1 % width1) * ${this.workPerThread};
        index1 = index1 / width1;
        let r = index1 % uniforms.outShape[1];
        let batch = index1 / uniforms.outShape[1];

        let xRCCorner = vec2<i32>(r, c) * vec2<i32>(${t}, ${i}) - uniforms.pads;

        let xRCorner = xRCCorner.x;
        let xCCorner = xRCCorner.y;
        var xVals : array<vec4<f32>, ${e}>;
        var dotProd : array<vec4<f32>, ${this.workPerThread}>;
        for (var i = 0; i < ${this.workPerThread}; i++) {
          dotProd[i] = vec4<f32>(0.0);
        }

        // Use constant instead of uniform can give better performance.
        for (var wR = 0; wR < ${this.convInfo.filterHeight}; wR = wR + 1) {
          let xR = xRCorner + wR;
          if (xR >=0 && xR < uniforms.inDims[0]) {
            for (var i = 0; i < ${e}; i++) {
              xVals[i] = readX(batch, xR, xCCorner + i, d1);
            }
            for (var wC = 0; wC < ${this.convInfo.filterWidth}; wC = wC + 1) {
              let wValue = getW(wR, wC, d1, 0);
              for (var i = 0; i < ${this.workPerThread}; i++) {
                dotProd[i] = fma(xVals[i * ${i} + wC], wValue, dotProd[i]);
              }
            }
          }
        }

        for (var i = 0; i < ${this.workPerThread}; i = i + 1) {
          let coords = vec4<i32>(batch, r, c + i, d1);
          if (coordsInBounds4D(coords, uniforms.outShape)) {
            var value = dotProd[i];
            ${eb(this.addBias,this.activation)}
            setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
          }
        }
      }
    `}}class rs{constructor(e,t=!1,i=null,r=!1){this.variableNames=["x","W"],this.uniforms=`pads : vec2<i32>, inDims : vec2<i32>, filterHeight : i32,
      filterWidth : i32, strides : vec2<i32>, dilations : vec2<i32>,`,this.workgroupSize=[256,1,1],this.size=!0,this.outputShape=e.outShape,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.isChannelsLast="channelsLast"===e.dataFormat,t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.convInfo=e,this.addBias=t,this.activation=i,this.hasPreluActivation=r,this.shaderKey=`depthwise_${this.activation}_${this.isChannelsLast}`}getUserCode(){let e=this.isChannelsLast?"getX(batch, xR, xC, d1);":"getX(batch, d1, xR, xC);";return`
      ${ev(this.activation,this.hasPreluActivation,!1,4)}

      ${b("index")} {
        if (index < uniforms.size) {
          let coords = getOutputCoords();
          let batch = coords[0];
          let xRCCorner = vec2<i32>(coords.${this.isChannelsLast?"yz":"zw"}) * uniforms.strides - uniforms.pads;
          let d2 = coords[${this.isChannelsLast?3:1}];
          let channelMul = uniforms.wShape[3];
          let d1 = d2 / channelMul;
          let q = d2 % channelMul;

          let inputRowStart = xRCCorner.x;
          let inputColStart = xRCCorner.y;
          let inputRowEnd = inputRowStart + uniforms.filterHeight *
              uniforms.dilations[0];
          let inputColEnd = inputColStart + uniforms.filterWidth *
              uniforms.dilations[1];

          // Convolve x(?, ?, d1)|x(d1, ?, ?) with w(:, :, d1, q) to get
          // y(yR, yC, d2)|y(d2, yR, yC). ? = to be determined. : = across all
          // values in that axis. x(?, ?, d1) and y(yR, yC, d2) is for NHWC.
          // x(d1, ?, ?) and y(d2, yR, yC) is for NCHW.
          var value = 0.0;

          // Extract if checking out of for loop for performance.
          if (inputRowStart >= 0 && inputColStart >= 0 &&
            inputRowEnd < uniforms.inDims[0] &&
                inputColEnd < uniforms.inDims[1]) {
              for (var wR = 0; wR < uniforms.filterHeight; wR = wR + 1) {
                let xR = inputRowStart + wR * uniforms.dilations[0];

                for (var wC = 0; wC < uniforms.filterWidth; wC = wC + 1) {
                  let xC = inputColStart + wC * uniforms.dilations[1];

                  let xVal = ${e};
                  let wVal = getW(wR, wC, d1, q);
                  value = value + xVal * wVal;
                }
              }
            } else {
              for (var wR = 0; wR < uniforms.filterHeight; wR = wR + 1) {
                let xR = inputRowStart + wR * uniforms.dilations[0];

                if (xR < 0 || xR >= uniforms.inDims[0]) {
                  continue;
                }

                for (var wC = 0; wC < uniforms.filterWidth; wC = wC + 1) {
                  let xC = inputColStart + wC * uniforms.dilations[1];

                  if (xC < 0 || xC >= uniforms.inDims[1]) {
                    continue;
                  }

                  let xVal = ${e};
                  let wVal = getW(wR, wC, d1, q);
                  value = value + xVal * wVal;
                }
              }
            }
            ${eb(this.addBias,this.activation)}
          setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
        }
      }
    `}}let ru={kernelName:s.cie,backendName:"webgpu",kernelFunc:function(e){let t;let{inputs:i,backend:r,attrs:n}=e,{x:o,filter:a}=i,{strides:u,pad:l,dataFormat:h,dilations:d,dimRoundingMode:p}=n,c=s.backend_util.convertConv2DDataFormat(h),f=d;null==f&&(f=[1,1]);let m=s.backend_util.computeConv2DInfo(o.shape,a.shape,u,f,l,p,!0,c),g=[{type:"int32",data:[m.padInfo.top,m.padInfo.left]},{type:"int32",data:[m.inHeight,m.inWidth]}],y="channelsLast"===m.dataFormat;return!y&&m.inHeight>16&&m.inWidth>16&&1===m.strideHeight&&1===m.strideWidth&&1===m.dilationWidth&&1===m.dilationHeight&&m.inChannels===m.outChannels?t=new ro(m.outShape,m.filterHeight,m.filterWidth):y&&m.outHeight>4&&m.outWidth>4&&m.strideWidth<=2&&m.inChannels===m.outChannels&&1===m.dilationHeight&&1===m.dilationWidth&&m.inChannels%4==0?(t=new ra(m),g.push({type:"int32",data:[t.virtualWidth]})):(t=new rs(m),g.push({type:"int32",data:[m.filterHeight]},{type:"int32",data:[m.filterWidth]},{type:"int32",data:[m.strideHeight,m.strideWidth]},{type:"int32",data:[m.dilationHeight,m.dilationWidth]})),r.runWebGPUProgram(t,[o,a],o.dtype,g)}};class rl{constructor(e){this.variableNames=["x","dy"],this.uniforms=`strides : vec2<i32>, pads : vec2<i32>, filterDims : vec2<i32>, outHeight : i32,
      outWidth : i32, inHeight : i32, inWidth : i32, batchSize : i32, channelMul : i32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.filterShape,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="depthwise_conv2d_backprop_filter"}getUserCode(){return`
      ${b("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let wR = coords[0];
        let wC = coords[1];
        let d1 = coords[2];
        let dm = coords[3];
        let d2 = d1 * uniforms.channelMul + dm;

        var dotProd = 0.0;
        for (var b = 0; b < uniforms.batchSize; b++) {
          for (var yR = 0; yR < uniforms.outHeight; yR++) {
            let xR = wR + yR * uniforms.strides[0] - uniforms.pads[0];

            if (xR < 0 || xR >= uniforms.inHeight) {
              continue;
            }

            for (var yC = 0; yC < uniforms.outWidth; yC++) {
              let xC = wC + yC * uniforms.strides[1] - uniforms.pads[1];

              if (xC < 0 || xC >= uniforms.inWidth) {
                continue;
              }

              let dyValue = getDy(b, yR, yC, d2);
              let xValue = getX(b, xR, xC, d1);
              dotProd += xValue * dyValue;
            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
    `}}class rh{constructor(e){this.variableNames=["dy","W"],this.uniforms=`strides : vec2<i32>, pads : vec2<i32>, filterDims : vec2<i32>,
       outHeight : i32, outWidth : i32, channelMul : i32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.inShape,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="depthwise_conv2d_backprop_input"}getUserCode(){return`
      ${b("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let batch = coords[0];
        let d1 = coords[3];
        let dyCorner = coords.yz - uniforms.pads;
        let dyRCorner = dyCorner.x;
        let dyCCorner = dyCorner.y;

        var dotProd = 0.0;
        for (var wR = 0; wR < uniforms.filterDims[0]; wR++) {
          let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[0]);

          if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {
            continue;
          }

          let idyR = i32(dyR);
          let wRPerm = uniforms.filterDims[0] - 1 - wR;

          for (var wC = 0; wC < uniforms.filterDims[1]; wC++) {
            let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[1]);

            if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {
              continue;
            }

            let idyC = i32(dyC);
            let wCPerm = uniforms.filterDims[1] - 1 - wC;

            for (var dm = 0; dm < uniforms.channelMul; dm++) {
              let d2 = d1 * uniforms.channelMul + dm;
              let xValue = getDy(batch, idyR, idyC, d2);
              let wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
    `}}let rd={kernelName:s.sL$,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{x:n,dy:o}=t,{strides:a,dilations:u,pad:l,dimRoundingMode:h,filterShape:d}=r,p=s.backend_util.computeConv2DInfo(n.shape,d,a,u,l,h,!0),c=new rl(p),f=[{type:"int32",data:[p.strideHeight,p.strideWidth]},{type:"int32",data:[p.padInfo.top,p.padInfo.left]},{type:"int32",data:[p.filterHeight,p.filterWidth]},{type:"int32",data:[p.outHeight]},{type:"int32",data:[p.outWidth]},{type:"int32",data:[p.inHeight]},{type:"int32",data:[p.inWidth]},{type:"int32",data:[p.batchSize]},{type:"int32",data:[p.outChannels/p.inChannels]}];return i.runWebGPUProgram(c,[n,o],"float32",f)}},rp={kernelName:s.y7R,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{dy:n,filter:o}=t,{strides:a,dilations:u,pad:l,dimRoundingMode:h,inputShape:d}=r,p=s.backend_util.computeConv2DInfo(d,o.shape,a,u,l,h,!0),c=new rh(p),f=[{type:"int32",data:[p.strideHeight,p.strideWidth]},{type:"int32",data:[p.filterHeight-1-p.padInfo.top,p.filterWidth-1-p.padInfo.left]},{type:"int32",data:[p.filterHeight,p.filterWidth]},{type:"int32",data:[p.outHeight]},{type:"int32",data:[p.outWidth]},{type:"int32",data:[p.outChannels/p.inChannels]}];return i.runWebGPUProgram(c,[n,o],n.dtype,f)}};class rc{constructor(e){this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[e,e],this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="diag"}getUserCode(){return`
      ${b("index")} {
        if (index < uniforms.size) {
          let coords = getOutputCoords();
          let value = select(0.0, getX(coords[0]), coords[0] == coords[1]);
          setOutputAtIndex(index, value);
        }
      }
    `}}let rf={kernelName:s.$w,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i}=e,{x:r}=t,n=[...r.shape,...r.shape],o=s.D5U.sizeFromShape(r.shape),a=eO({inputs:{x:r},backend:i,attrs:{shape:[o]}}),u=new rc(o),l=i.runWebGPUProgram(u,[a],a.dtype),h=eO({inputs:{x:l},backend:i,attrs:{shape:n}});return i.disposeData(a.dataId),i.disposeData(l.dataId),h}};class rm{constructor(e){this.variableNames=["x","w"],this.uniforms="filterDims: vec2<i32>, pads: vec2<i32>, strides: vec2<i32>, dilations: vec2<i32>",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.outShape,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="dilation2d"}getUserCode(){return`
       ${b("index")} {
         if (index < uniforms.size) {
           let neg_infinity = -3.4e38;
           let coords = getOutputCoords();
           let batch = coords.x;
           let d1 = coords.w;
           let outTopLeftCorner = coords.yz * uniforms.strides - uniforms.pads;
           let hBeg = outTopLeftCorner.x;
           let wBeg = outTopLeftCorner.y;

           var curVal = neg_infinity;
           for (var h = 0; h < uniforms.filterDims[0]; h = h + 1) {
             let hIn = hBeg + h * uniforms.dilations[0];

             if (hIn >= 0 && hIn < uniforms.xShape[1]) {
               for (var w = 0; w < uniforms.filterDims[1]; w = w + 1) {
                 let wIn = wBeg + w * uniforms.dilations[1];

                 if (wIn >= 0 && wIn < uniforms.xShape[2]) {
                   let val = getX(batch, hIn, wIn, d1) + getW(h, w, d1);
                   if (val > curVal) {
                     curVal = val;
                   }
                 }
               }
             }
           }

           setOutputAtIndex(index, curVal);
         }
       }
     `}}let rg={kernelName:s.p4S,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{x:n,filter:o}=t,{strides:a,pad:u,dilations:l}=r,h=s.backend_util.computeDilation2DInfo(n.shape,o.shape,a,u,"NHWC",l),d=[h.padInfo.top,h.padInfo.left],p=[{type:"int32",data:[h.filterHeight,h.filterWidth]},{type:"int32",data:[...d]},{type:"int32",data:[h.strideHeight,h.strideWidth]},{type:"int32",data:[h.dilationHeight,h.dilationWidth]}],c=new rm(h);return i.runWebGPUProgram(c,[n,o],n.dtype,p)}};class ry{constructor(e,t){if(this.variableNames=["x","w","dy"],this.uniforms="filterDims: vec2<i32>, pads: vec2<i32>, strides: vec2<i32>, dilations: vec2<i32>, dySize: i32,",this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=e.inShape,this.dispatchLayout=N(e.outShape),this.dispatch=A(this.dispatchLayout,e.outShape,this.workgroupSize),"float32"!==t&&"int32"!==t)throw Error(`Dilation2DBackpropInput only supports float32 and int32
          types, does not support ${t} type.`);this.type=t,this.shaderKey="dilation2DBackpropInput"}getUserCode(){return`
       ${b("index")} {
         if (index < uniforms.dySize) {
           let coords = getDyCoordsFromIndex(index);
           let b = coords[0];
           let r = coords[1];
           let c = coords[2];
           let d = coords[3];

           let dyCorner = vec2<i32>(r, c) * uniforms.strides - uniforms.pads;
           var curVal = -3.4e38;  // neg_infinity
           var xRMax = 0;
           var xCMax = 0;

           // In the case of multiple argmax branches, we only back-propagate
           // along the last branch, i.e., the one with largest value of
           // 'wR * uniforms.filterDims[1] + wC', similarly to the max-pooling
           // backward routines.
           for (var wR = 0; wR < uniforms.filterDims[0]; wR++) {
             let xR = dyCorner.x + wR * uniforms.dilations[0];

             if (xR >= 0 && xR < uniforms.xShape[1]) {
               for (var wC = 0; wC < uniforms.filterDims[1]; wC++) {
                 let xC = dyCorner.y + wC * uniforms.dilations[1];

                 if (xC >= 0 && xC < uniforms.xShape[2]) {
                   let val = getX(b, xR, xC, d) + getW(wR, wC, d);
                   if (val > curVal) {
                     curVal = val;
                     xRMax = xR;
                     xCMax = xC;
                   }
                 }
               }
             }
           }

           let flatIndexIn = d + uniforms.xShape[3] *
               (xCMax + uniforms.xShape[2] * (xRMax + uniforms.xShape[1] * b));
           let value = getDy(b, r, c, d);
           ${m("&result[flatIndexIn]","value",this.type)}
         }
       }
     `}}class rx{constructor(e,t,i){if(this.variableNames=["x","w","dy"],this.uniforms="filterDims: vec2<i32>, pads: vec2<i32>, strides: vec2<i32>, dilations: vec2<i32>, dySize: i32,",this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=e.filterShape,this.dispatchLayout=N(e.outShape),this.dispatch=A(this.dispatchLayout,e.outShape,this.workgroupSize),"float32"!==i&&"int32"!==i)throw Error(`Dilation2DBackpropFilter only supports float32 and int32
          types, does not support ${i} type.`);this.type=i,this.shaderKey="dilation2DBackpropFilter"}getUserCode(){return`
       ${b("index")} {
         if (index < uniforms.dySize) {
           let coords = getDyCoordsFromIndex(index);
           let b = coords[0];
           let r = coords[1];
           let c = coords[2];
           let d = coords[3];

           let dyCorner = vec2<i32>(r, c) * uniforms.strides - uniforms.pads;
           var curVal = -3.4e38;  // neg_infinity
           var wRMax = 0;
           var wCMax = 0;

           // In the case of multiple argmax branches, we only back-propagate
           // along the last branch, i.e., the one with largest value of
           // 'wR * uniforms.filterDims[1] + wC', similarly to the max-pooling
           // backward routines.
           for (var wR = 0; wR < uniforms.filterDims[0]; wR++) {
             let xR = dyCorner.x + wR * uniforms.dilations[0];

             if (xR >= 0 && xR < uniforms.xShape[1]) {
               for (var wC = 0; wC < uniforms.filterDims[1]; wC++) {
                 let xC = dyCorner.y + wC * uniforms.dilations[1];

                 if (xC >= 0 && xC < uniforms.xShape[2]) {
                   let val = getX(b, xR, xC, d) + getW(wR, wC, d);
                   if (val > curVal) {
                     curVal = val;
                     wRMax = wR;
                     wCMax = wC;
                   }
                 }
               }
             }
           }

           let flatIndexIn = d + uniforms.wShape[2] * (wCMax + wRMax * uniforms.wShape[1]);
           let value = getDy(b, r, c, d);
           ${m("&result[flatIndexIn]","value",this.type)}
         }
       }
     `}}let rv={kernelName:s.Vn9,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{x:n,filter:o,dy:a}=t,{strides:u,pad:l,dilations:h}=r,d=s.backend_util.computeDilation2DInfo(n.shape,o.shape,u,l,"NHWC",h),p=o.dtype,c=new rx(d,o.shape,p),f=[{type:"int32",data:[d.filterHeight,d.filterWidth]},{type:"int32",data:[d.padInfo.top,d.padInfo.left]},{type:"int32",data:[d.strideHeight,d.strideWidth]},{type:"int32",data:[d.dilationHeight,d.dilationWidth]},{type:"int32",data:[s.D5U.sizeFromShape(d.outShape)]}],m=eE({backend:i,attrs:{shape:o.shape,value:0,dtype:p}});return i.runWebGPUProgram(c,[n,o,a],p,f,m)}},rb={kernelName:s.ekb,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{x:n,filter:o,dy:a}=t,{strides:u,pad:l,dilations:h}=r,d=s.backend_util.computeDilation2DInfo(n.shape,o.shape,u,l,"NHWC",h),p=n.dtype,c=new ry(d,p),f=[{type:"int32",data:[d.filterHeight,d.filterWidth]},{type:"int32",data:[d.padInfo.top,d.padInfo.left]},{type:"int32",data:[d.strideHeight,d.strideWidth]},{type:"int32",data:[d.dilationHeight,d.dilationWidth]},{type:"int32",data:[s.D5U.sizeFromShape(d.outShape)]}],m=eE({backend:i,attrs:{shape:d.inShape,value:0,dtype:p}});return i.runWebGPUProgram(c,[n,o,a],p,f,m)}};class rw{constructor(e,t,i){this.variableNames=["Image"],this.uniforms="alpha: f32,",this.workgroupSize=[64,1,1],this.pixelsOpType=sP.DRAW,this.size=!0,this.outputShape=e,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.type=t,this.textureFormat=i,this.shaderKey=`draw_${t}_${i}`}getUserCode(){let e;let t="float32"===this.type?"value":"value / 255.0";return e=`
      if (uniforms.numChannels == 1) {
        rgba[0] = ${t};
        rgba[1] = ${t};
        rgba[2] = ${t};
      } else {
        rgba[d] = ${t};
      }`,`
       @group(0) @binding(0) var outImage : texture_storage_2d<${this.textureFormat}, write>;
       ${b("index")} {
         if (index < uniforms.size) {
           var rgba = vec4<f32>(0.0, 0.0, 0.0, uniforms.alpha);
           for (var d = 0; d < uniforms.numChannels; d = d + 1) {
             let value = f32(inBuf[index * uniforms.numChannels + d]);
             ${e}
           }
           rgba.x = rgba.x * rgba.w;
           rgba.y = rgba.y * rgba.w;
           rgba.z = rgba.z * rgba.w;
           let coords = getCoordsFromIndex(index);
           textureStore(outImage, vec2<i32>(coords.yx), rgba);
         }
       }
      `}}let rS={kernelName:s.hGc,backendName:"webgpu",kernelFunc:function(e){let t;let{inputs:i,backend:r,attrs:n}=e,{image:o}=i,{canvas:a,options:s}=n,[u,l]=o.shape.slice(0,2),{imageOptions:h}=s||{},d=(null==h?void 0:h.alpha)||1,p=r.device.features.has("bgra8unorm-storage")?"bgra8unorm":"rgba8unorm",c=[u,l],f=new rw(c,o.dtype,p);a.width=l,a.height=u;let m="webgpu",g=a.getContext(m);g||(g=(t=new OffscreenCanvas(l,u)).getContext(m));let y=3===o.shape.length?o.shape[2]:1;g.configure({device:r.device,format:p,usage:GPUTextureUsage.STORAGE_BINDING,alphaMode:"premultiplied"});let x="int32",v=r.makeTensorInfo(c,x),b=r.tensorMap.get(v.dataId);if(b.resource=g.getCurrentTexture(),b.external=!0,r.runWebGPUProgram(f,[o],x,[{type:"uint32",data:[y]},{type:"float32",data:[d]}],v),t){let e=a.getContext("2d");if(!e)throw Error("Please make sure this canvas has only been used for 2d or webgpu context!");e.drawImage(t,0,0)}return r.disposeData(v.dataId),o}},rC=eq({opType:sA.MUL,cpuKernelImpl:ta,supportsComplex:!0}),rk={kernelName:s.wYn,backendName:"webgpu",kernelFunc:rC};function rI(e){let{inputs:t,backend:i,attrs:r}=e,{x:n}=t,{axis:o,keepDims:a}=r;return tU(n,o,a,"sum",i)}let rR={kernelName:s.GBy,backendName:"webgpu",kernelFunc:rI},rP={kernelName:s.$g6,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{equation:n}=r,{allDims:o,summedDims:a,idDims:u}=s.backend_util.decodeEinsumEquation(n,t.length);s.backend_util.checkEinsumDimSizes(o.length,u,t);let{path:l,steps:h}=s.backend_util.getEinsumComputePath(a,u),d=h.length,p=null,c=o.length,f=[];for(let e=0;e<d;++e){for(let r of h[e]){let e;let{permutationIndices:n,expandDims:o}=s.backend_util.getEinsumPermutation(c,u[r]);s.backend_util.isIdentityPermutation(n)?e=t[r]:(e=tD({inputs:{x:t[r]},backend:i,attrs:{perm:n}}),f.push(e));let a=e.shape.slice();for(let e=0;e<o.length;++e)a.splice(o[e],0,1);s.D5U.arraysEqual(e.shape,a)||(e=eO({inputs:{x:e},backend:i,attrs:{shape:a}}),f.push(e)),null===p?p=e:(p=rC({inputs:{a:e,b:p},backend:i}),f.push(p))}e<d-1&&(l[e]>=0&&(p=rI({inputs:{x:p},backend:i,attrs:{axis:l[e]-(o.length-c),keepDims:!1}}),f.push(p)),c--)}for(let e of f)e!==p&&i.disposeData(e.dataId);return p}},r$=eY({opType:sT.ELU}),rA={kernelName:s.SX0,backendName:"webgpu",kernelFunc:r$},rT={kernelName:s.HEU,backendName:"webgpu",kernelFunc:e=>{let{inputs:t,backend:i}=e,{dy:r,y:n}=t,o=new eV(sA.ELU_DER,r.shape,n.shape);return i.runWebGPUProgram(o,[r,n],r.dtype)}},r_=eq({opType:sA.EQUAL,dtype:"bool",cpuKernelImpl:e2}),rN={kernelName:s.hdR,backendName:"webgpu",kernelFunc:r_},rF=eY({opType:sT.ERF}),rz={kernelName:s.Omj,backendName:"webgpu",kernelFunc:rF},rD=eY({opType:sT.EXP,cpuKernelImpl:e1,dtype:"float32"}),rE={kernelName:s.NEP,backendName:"webgpu",kernelFunc:rD};function rL(e){let{inputs:t,attrs:i,backend:r}=e,{dim:n}=i,{input:o}=t,a=o.shape.length,u=o.shape.slice(),l=n;return n<0&&(s.D5U.assert(-(a+1)<=n,()=>`Axis must be in the interval [${-(a+1)}, ${a}]`),l=a+n+1),u.splice(l,0,1),eO({inputs:{x:o},backend:r,attrs:{shape:u}})}let rO={kernelName:s.YFo,backendName:"webgpu",kernelFunc:rL},rU=eY({opType:sT.EXPM1,cpuKernelImpl:e3}),rM={kernelName:s.Y0y,backendName:"webgpu",kernelFunc:rU};class rB{constructor(e,t){this.variableNames=["real","imag"],this.outputShape=[],this.uniforms="exponentMultiplier : f32, denominator: f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.component=e,this.shaderKey=`fft_${e}`}getUserCode(){let e="real"===this.component?"return real * expR - imag * expI;":"return real * expI + imag * expR;";return`
    fn unaryOpComplex(real: f32, expR: f32, imag: f32, expI: f32) -> f32 {
      ${e}
    }

    fn mulMatDFT(batch: i32, index: i32) -> f32 {
      let indexRatio = f32(index) / f32(uniforms.realShape[1]);
      let exponentMultiplierTimesIndexRatio =
          uniforms.exponentMultiplier * indexRatio;

      var result = 0.0;

      for (var i = 0; i < uniforms.realShape[1]; i = i + 1) {
        // x = (-2|2 * PI / N) * index * i;
        let x = exponentMultiplierTimesIndexRatio * f32(i);
        let expR = cos(x);
        let expI = sin(x);
        let real = getReal(batch, i);
        let imag = getImag(batch, i);

        result = result +
            unaryOpComplex(real, expR, imag, expI) / uniforms.denominator;
      }

      return result;
    }

    ${b("index")} {
      if (index < uniforms.size) {
        let coords = getOutputCoords();
        setOutputAtIndex(index, mulMatDFT(coords[0], coords[1]));
      }
    }
  `}}function rW(e,t,i){let r=i.tensorMap.get(e.dataId),n=s.D5U.sizeFromShape(e.shape),o=e.shape[e.shape.length-1],a=[],u=eO({inputs:{x:e},backend:i,attrs:{shape:[n/o,o]}});a.push(u);let l=u.shape,h=new rB("real",l),d=new rB("imag",l),p=[{dataId:r.complexTensorInfos.real.dataId,dtype:r.complexTensorInfos.real.dtype,shape:l},{dataId:r.complexTensorInfos.imag.dataId,dtype:r.complexTensorInfos.imag.dtype,shape:l}],c=[{type:"float32",data:[t?2*Math.PI:-2*Math.PI]},{type:"float32",data:[t?l[1]:1]}],f=i.runWebGPUProgram(h,p,"float32",c);a.push(f);let m=i.runWebGPUProgram(d,p,"float32",c);a.push(m);let g=ej({inputs:{real:f,imag:m},backend:i});a.push(g);let y=eO({inputs:{x:g},backend:i,attrs:{shape:e.shape}});return a.forEach(e=>i.disposeData(e.dataId)),y}let rV={kernelName:s.vwp,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i}=e,{input:r}=t;return rW(r,!1,i)}};class rH{constructor(e){this.outputShape=[],this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="flipLeftRight"}getUserCode(){return`
      ${b("index")} {
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let coordX = uniforms.xShape[2] - coords[2] - 1;
          let outputValue = getX(coords[0], coords[1], coordX, coords[3]);
          setOutputAtIndex(index, outputValue);
        }
      }
    `}}let rG={kernelName:s.Uyb,backendName:"webgpu",kernelFunc:({inputs:e,backend:t})=>{let{image:i}=e,r=new rH(i.shape);return t.runWebGPUProgram(r,[i],i.dtype)}},rj=eY({opType:sT.FLOOR,cpuKernelImpl:e4}),rX={kernelName:s.OR,backendName:"webgpu",kernelFunc:rj},rK=eq({opType:sA.FLOOR_DIV,cpuKernelImpl:e5,dtype:"int32"}),rY={kernelName:s.jeX,backendName:"webgpu",kernelFunc:rK};class rq{constructor(e,t,i=!1){this.pixelsOpType=sP.FROM_PIXELS,this.outputShape=[0],this.variableNames=[],this.workgroupSize=[256,1,1],this.outputShape=e,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize,[t,1,1]),this.importVideo=i,this.shaderKey=`fromPixels_${this.importVideo}`}getUserCode(){let e=this.importVideo?"textureLoad(src, vec2<i32>(coords.yx));":"textureLoad(src, vec2<i32>(coords.yx), 0)",t=this.importVideo?"texture_external":"texture_2d<f32>";return`
      @binding(1) @group(0) var src: ${t};
      ${b("index")} {
        let flatIndex = index * uniforms.numChannels;
        if (flatIndex < uniforms.size) {
          let coords = getCoordsFromIndex(flatIndex);
          let values = ${e};
          for (var i = 0; i < uniforms.numChannels; i = i + 1) {
            result[flatIndex + i] = i32(floor(255.0 * values[i]));
          }
        }
      }
  `}}let rQ={kernelName:s.eBW,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:n}=e,{pixels:o}=t,{numChannels:a}=n;if(null==o)throw Error("pixels passed to tf.browser.fromPixels() can not be null");let u="undefined"!=typeof HTMLVideoElement&&o instanceof HTMLVideoElement,l="undefined"!=typeof HTMLImageElement&&o instanceof HTMLImageElement,h="undefined"!=typeof HTMLCanvasElement&&o instanceof HTMLCanvasElement||"undefined"!=typeof OffscreenCanvas&&o instanceof OffscreenCanvas,d="undefined"!=typeof ImageBitmap&&o instanceof ImageBitmap,[p,c]=u?[o.videoWidth,o.videoHeight]:[o.width,o.height],f=[c,p,a],m=(0,s.OBj)().getBool("WEBGPU_IMPORT_EXTERNAL_TEXTURE")&&u,g=u||l;if(d||h||g){let e;if(m)e=i.device.importExternalTexture({source:o});else{if(g){let e=(0,s.OBj)().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");(null==r||e!==rZ)&&(rZ=e,r=document.createElement("canvas").getContext("2d",{willReadFrequently:rZ})),r.canvas.width=p,r.canvas.height=c,r.drawImage(o,0,0,p,c),o=r.canvas}let t=GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,n=i.textureManager.acquireTexture(f[1],f[0],"rgba8unorm",t);i.queue.copyExternalImageToTexture({source:o},{texture:n},[f[1],f[0]]),e=n}let t=s.D5U.sizeFromShape(f),n=s.D5U.computeStrides(f),u=new rq(f,a,m),l=[{type:"uint32",data:[t]},{type:"uint32",data:[a]},{type:"uint32",data:[...n]}],h=i.makeTensorInfo([c,p],"int32");i.tensorMap.get(h.dataId).resource=e;let d=i.runWebGPUProgram(u,[h],"int32",l);return i.disposeData(h.dataId),d}let y=o.data,x=y;if(null!=a&&4!==a){x=new Uint8Array(o.width*o.height*a);let e=y.length,t=0;for(let i=0;i<e;i++)i%4<a&&(x[t++]=y[i])}let v=i.makeTensorInfo(f,"int32",new Int32Array(x));return i.uploadToGPU(v.dataId),v}},rZ=(0,s.OBj)().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");class rJ{constructor(e,t,i,r,n){this.uniforms="varianceEpsilon : f32,",this.workgroupSize=[128,1,1],this.size=!0,this.variableNames=["x","mean","variance"],s.backend_util.assertAndGetBroadcastShape(e,t),s.backend_util.assertAndGetBroadcastShape(e,i),this.outputShape=e,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),null!=r&&(s.backend_util.assertAndGetBroadcastShape(e,r),this.variableNames.push("offset")),null!=n&&(s.backend_util.assertAndGetBroadcastShape(e,n),this.variableNames.push("scale")),this.offsetShape=r,this.scaleShape=n,this.shaderKey="batchNorm"}getUserCode(){let e="0.0";null!=this.offsetShape&&(e="getOffsetByOutputIndex(index)");let t="1.0";return null!=this.scaleShape&&(t="getScaleByOutputIndex(index)"),`
      ${b("index")} {
        if (index < uniforms.size)
        {
          let xValue = getXByOutputIndex(index);
          let meanValue = getMeanByOutputIndex(index);
          let varianValue = getVarianceByOutputIndex(index);
          let offsetValue = ${e};
          let scaleValue = ${t};
          let inv = scaleValue * inverseSqrt(varianValue + f32(uniforms.varianceEpsilon));
          setOutputAtIndex(index,dot(vec3<f32>(xValue, -meanValue, offsetValue), vec3<f32>(inv, inv, 1.0)));
        }
      }
  `}}let r0={kernelName:s.sHE,backendName:"webgpu",kernelFunc:({inputs:e,attrs:t,backend:i})=>{let{x:r,scale:n,offset:o,mean:a,variance:s}=e,{varianceEpsilon:u}=t,l=[r,a,s],h=null;null!=o&&(h=o.shape,l.push(o));let d=null;null!=n&&(d=n.shape,l.push(n));let p=new rJ(r.shape,a.shape,s.shape,h,d);return i.runWebGPUProgram(p,l,r.dtype,[{type:"float32",data:[u]}])}},r2={kernelName:s._V0,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{x:n,filter:o,bias:a,preluActivationWeights:u}=t,{strides:l,pad:h,dataFormat:d,dilations:p,dimRoundingMode:c,activation:f,leakyreluAlpha:m}=r,g=s.backend_util.convertConv2DDataFormat(d),y=s.backend_util.computeConv2DInfo(n.shape,o.shape,l,p,h,c,!1,g);return iB({x:n,filter:o,convInfo:y,backend:i,bias:a,preluActivationWeights:u,leakyreluAlpha:m,activation:f})}},r1={kernelName:s.luS,backendName:"webgpu",kernelFunc:function(e){let t;let{inputs:i,backend:r,attrs:n}=e,{x:o,filter:a,bias:u,preluActivationWeights:l}=i,{strides:h,pad:d,dilations:p,dimRoundingMode:c,activation:f,leakyreluAlpha:m}=n,g=p;null==g&&(g=[1,1]),s.D5U.assert(s.backend_util.eitherStridesOrDilationsAreOne(h,g),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${h} and dilations '${g}'`);let y=s.backend_util.computeConv2DInfo(o.shape,a.shape,h,g,d,c,!0),x=[o,a],v=null!=u,b=null!=l;v&&x.push(u),b&&x.push(l);let w=[{type:"int32",data:[y.padInfo.top,y.padInfo.left]},{type:"int32",data:[y.inHeight,y.inWidth]}];return y.outHeight>4&&y.outWidth>4&&y.strideWidth<=2&&y.inChannels===y.outChannels&&1===y.dilationHeight&&1===y.dilationWidth&&y.inChannels%4==0?(t=new ra(y,v,f,b),w.push({type:"int32",data:[t.virtualWidth]})):(t=new rs(y,v,f,b),w.push({type:"int32",data:[y.filterHeight]},{type:"int32",data:[y.filterWidth]},{type:"int32",data:[y.strideHeight,y.strideWidth]},{type:"int32",data:[y.dilationHeight,y.dilationWidth]})),"leakyrelu"===f&&(w.push({type:"float32",data:[m]}),t.uniforms+=" alpha : f32,"),r.runWebGPUProgram(t,x,"float32",w)}};class r3{constructor(e,t){this.variableNames=["A","indices"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey=`gathernd_${e}`,this.sliceDim=e,this.uniforms=`sliceDim : i32, strides : ${x(e)},`}getUserCode(){let e;return e=this.sliceDim>1?"uniforms.strides[j]":"uniforms.strides",`
      ${b("index")} {
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          var flattenIndex = 0;
          for (var j = 0; j < uniforms.sliceDim; j = j + 1) {
            let indexTemp = i32(round(getIndices(coords[0], j)));
            let strideNum = ${e};
            flattenIndex = flattenIndex + indexTemp * strideNum;
          }

          setOutputAtIndex(index, getA(flattenIndex, coords[1]));
        }
      }
      `}}let r4={kernelName:s.q1x,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i}=e,{params:r,indices:n}=t,o=n.shape,a=o[o.length-1],u=s.D5U.sizeFromShape(r.shape),[l,h,d,p]=s.backend_util.prepareAndValidate(r,n),c=eO({inputs:{x:n},backend:i,attrs:{shape:[h,a]}}),f=eO({inputs:{x:r},backend:i,attrs:{shape:[s.D5U.sizeFromShape(r.shape)/d,d]}});if(i.shouldExecuteOnCPU([r,n])||"string"===r.dtype){let e=e6(i.readSync(n.dataId),i.bufferSync(r),r.dtype,h,a,d,p,r.shape,u);return i.makeTensorInfo(l,r.dtype,e.values)}let m=new r3(a,[h,d]),g=[{type:"int32",data:[a]},{type:"int32",data:p}],y=i.runWebGPUProgram(m,[f,c],f.dtype,g),x=eO({inputs:{x:y},backend:i,attrs:{shape:l}});return i.disposeData(c.dataId),i.disposeData(f.dataId),i.disposeData(y.dataId),x}};class r5{constructor(e,t){this.variableNames=["A","indices"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.slice(),this.aShape=e,this.outputShape=t,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="gather"}getUserCode(){let e=function(e){let t=["resRC.x","resRC.y","resRC.z","resRC.w"],i=[];for(let r=0;r<e.length;r++)2===r?i.push("indexZ"):i.push(`${t[r]}`);return i.join()}(this.aShape);return`
      ${b("index")} {
        if (index < uniforms.size) {
          let resRC = getCoordsFromIndex(index);
          let indexZ = i32(getIndices(resRC.x, resRC.z));
          let inBounds = select(0.0, 1.0, indexZ >= 0 && indexZ < uniforms.aShape[2]);
          setOutputAtIndex(index, inBounds * getA(${e}));
        }
      }
    `}}function r6(e){let{inputs:t,backend:i,attrs:r}=e,{x:n,indices:o}=t,{axis:a,batchDims:u}=r,l=s.D5U.parseAxisParam(a,n.shape)[0],h=s.backend_util.segment_util.collectGatherOpShapeInfo(n,o,l,u),d=s.D5U.sizeFromShape(o.shape),p=[],c=eO({inputs:{x:n},backend:i,attrs:{shape:[h.batchSize,h.outerSize,h.dimSize,h.sliceSize]}}),f=eO({inputs:{x:o},backend:i,attrs:{shape:[h.batchSize,d/h.batchSize]}});p.push(c),p.push(f);let m=[h.batchSize,h.outerSize,d/h.batchSize,h.sliceSize];if(i.shouldExecuteOnCPU([n,o])){let e=i.tensorMap.get(f.dataId).values,t=(0,s.f3b)(f.shape,f.dtype,e),r=i.tensorMap.get(c.dataId).values,n=e8((0,s.f3b)(c.shape,c.dtype,r),t,m);return p.forEach(e=>i.disposeData(e.dataId)),i.makeTensorInfo(h.outputShape,n.dtype,n.values)}let g=new r5(c.shape,m),y=i.runWebGPUProgram(g,[c,f],c.dtype);p.push(y);let x=eO({inputs:{x:y},backend:i,attrs:{shape:h.outputShape}});return p.forEach(e=>i.disposeData(e.dataId)),x}let r8={kernelName:s.qi_,backendName:"webgpu",kernelFunc:r6},r7=eq({opType:sA.GREATER,cpuKernelImpl:e9,dtype:"bool"}),r9={kernelName:s.iZT,backendName:"webgpu",kernelFunc:r7},ne=eq({opType:sA.GREATER_EQUAL,dtype:"bool",cpuKernelImpl:e7}),nt={kernelName:s.Acj,backendName:"webgpu",kernelFunc:ne},ni={kernelName:s.Qg5,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i}=e,{input:r}=t;return rW(r,!0,i)}},nr=eY({opType:sT.IS_FINITE,dtype:"bool"}),nn={kernelName:s.avt,backendName:"webgpu",kernelFunc:nr},no=eY({opType:sT.IS_INF,dtype:"bool"}),na={kernelName:s.iWB,backendName:"webgpu",kernelFunc:no},ns=eY({opType:sT.IS_NAN,dtype:"bool"}),nu={kernelName:s.r7n,backendName:"webgpu",kernelFunc:ns},nl={kernelName:s.J$2,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{x:n}=t,{alpha:o}=r,a=new eK(n.shape,sT.LEAKYRELU,"alpha : f32,");return i.runWebGPUProgram(a,[n],"float32",[{type:"float32",data:[o]}])}},nh=eq({opType:sA.LESS,dtype:"bool",cpuKernelImpl:tt}),nd={kernelName:s.vtC,backendName:"webgpu",kernelFunc:nh},np=eq({opType:sA.LESS_EQUAL,dtype:"bool",cpuKernelImpl:te}),nc={kernelName:s.CAk,backendName:"webgpu",kernelFunc:np};class nf{constructor(e){this.variableNames=[],this.outputShape=[],this.uniforms="start : f32, step : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[e],this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="linSpace"}getUserCode(){return`
      ${b("index")} {
        if (index < uniforms.size) {
          setOutputAtIndex(index, uniforms.start + f32(index) * uniforms.step);
        }
      }
    `}}let nm={kernelName:s.e7N,backendName:"webgpu",kernelFunc:function(e){let{backend:t,attrs:i}=e,{start:r,stop:n,num:o}=i,a=(n-r)/(o-1),s=new nf(o);return t.runWebGPUProgram(s,[],"float32",[{type:"float32",data:[r]},{type:"float32",data:[a]}])}},ng=eY({opType:sT.LOG,cpuKernelImpl:ti}),ny={kernelName:s.ZbH,backendName:"webgpu",kernelFunc:ng},nx=eY({opType:sT.LOG1P}),nv={kernelName:s.kU,backendName:"webgpu",kernelFunc:nx},nb=eq({opType:sA.LOGICAL_AND,dtype:"bool"}),nw={kernelName:s.PYm,backendName:"webgpu",kernelFunc:nb},nS=eY({opType:sT.LOGICAL_NOT}),nC={kernelName:s.VfG,backendName:"webgpu",kernelFunc:nS},nk=eq({opType:sA.LOGICAL_OR}),nI={kernelName:s.MZg,backendName:"webgpu",kernelFunc:nk},nR=`
  var powValue = 0.0;
  let basis = uniforms.bias + uniforms.alpha * sum;
  if (uniforms.beta == 0.5) {
    powValue = inverseSqrt(basis);
  } else if (uniforms.beta == 1.0) {
    powValue = 1.0 / basis;
  } else {
    powValue = exp(log(basis) * (-uniforms.beta));
  }
`;class nP{constructor(e){this.outputShape=[],this.variableNames=["x"],this.uniforms="radius : i32, bias : f32, alpha : f32, beta : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="lrn"}getUserCode(){return`
    ${b("index")} {
      if (index < uniforms.size) {
        let coords = getOutputCoords();
        let b = coords[0];
        let r = coords[1];
        let c = coords[2];
        let d = coords[3];

        let x = getX(b, r, c, d);
        var sum = 0.0;
        for (var i = -uniforms.radius; i <= uniforms.radius; i = i + 1) {
          let idx = d + i;
          if (idx >= 0 && idx < uniforms.xShape[3]) {
            let z = getX(b, r, c, idx);
            sum = sum + z * z;
          }
        }
        ${nR}

        setOutputAtIndex(index, x * powValue);
      }
    }
  `}}class n${constructor(e,t){this.outputShape=[],this.variableNames=["x"],this.uniforms="radius : i32, bias : f32, alpha : f32, beta : f32,",this.workgroupSize=[256,1,1],this.maxAllowRadius=16,s.D5U.assert(t<=this.maxAllowRadius,()=>`Radius must be less than or equal to ${this.maxAllowRadius}, current radius is ${t}`),this.outputShape=e,this.elementsPerWorkgroup=this.workgroupSize[0]-2*this.maxAllowRadius,this.dispatchLayout={x:[3],y:[2],z:[0,1]},this.dispatch=A(this.dispatchLayout,this.outputShape,[this.elementsPerWorkgroup,this.workgroupSize[1],this.workgroupSize[2]]),this.shaderKey="lrn_shared"}getUserCode(){return`
    var <workgroup>lrnSub: array<f32, ${this.workgroupSize[0]}>;
    const elementsPerWorkgroup = ${this.elementsPerWorkgroup};
    const maxAllowRadius = ${this.maxAllowRadius};

    ${b()} {
      let localDepth = i32(localId.x);
      let workgroupDepth = i32(workgroupId.x) * elementsPerWorkgroup;
      let xDepth = workgroupDepth + localDepth - maxAllowRadius;
      let b = i32(globalId.z) / uniforms.xShape[1];
      let r = i32(globalId.z) - b * uniforms.xShape[1];
      let c = i32(globalId.y);
      let d = workgroupDepth + localDepth;

      var x = 0.0;
      if (xDepth >= 0 && xDepth < uniforms.xShape[3]) {
        x = getX(b, r, c, xDepth);
      }
      lrnSub[localDepth] = x;
      workgroupBarrier();

      if (localDepth < elementsPerWorkgroup && d < uniforms.outShape[3]) {
        var sum = 0.0;
        let index = localDepth + maxAllowRadius;
        for (var i = -uniforms.radius; i <= uniforms.radius; i = i + 1) {
          let z = lrnSub[index + i];
          sum = sum + z * z;
        }
        ${nR}

        setOutputAtCoords(b, r, c, d, lrnSub[index] * powValue);
      }
    } `}}let nA={kernelName:s.eZ0,backendName:"webgpu",kernelFunc:function(e){let t;let{inputs:i,backend:r,attrs:n}=e,{x:o}=i,{depthRadius:a,bias:s,alpha:u,beta:l}=n;t=a>16?new nP(o.shape):new n$(o.shape,a);let h=[{type:"int32",data:[a]},{type:"float32",data:[s]},{type:"float32",data:[u]},{type:"float32",data:[l]}];return r.runWebGPUProgram(t,[o],o.dtype,h)}};class nT{constructor(e){this.outputShape=[],this.variableNames=["inputImage","outputImage","dy"],this.uniforms="depthRadius : i32, bias : f32, alpha : f32, beta : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="lrn_grad"}getUserCode(){return`
    ${b("index")} {
      if (index < uniforms.size) {
        let coords = getOutputCoords();
        let b = coords[0];
        let r = coords[1];
        let c = coords[2];

        let MIN_DEPTH_BEGIN = 0;
        let MAX_DEPTH_END = uniforms.outShape[3];
        var result = 0.0;
        for (var d = MIN_DEPTH_BEGIN; d < MAX_DEPTH_END; d++) {
          let depthBegin = max(MIN_DEPTH_BEGIN, d - uniforms.depthRadius);
          let depthEnd = min(MAX_DEPTH_END, d + uniforms.depthRadius + 1);

          var norm = 0.0;
          for (var k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; k++) {
            if (k < depthBegin) {
              continue;
            } else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            } else {
              break;
            }
          }

          norm = uniforms.alpha * norm + uniforms.bias;

          for (var k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; k++) {
            if (k < depthBegin) {
              continue;
            } else if (k >= depthBegin && k < depthEnd) {
              var dyi = -2.0 * uniforms.alpha * uniforms.beta
                * getInputImage(b, r, c, k) * getOutputImage(b, r, c, d) / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * uniforms.beta);
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            } else {
              break;
            }
          }
        }

        setOutputAtIndex(index, result);
      }
    }
  `}}let n_={kernelName:s.Hhh,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{x:n,y:o,dy:a}=t,{depthRadius:s,bias:u,alpha:l,beta:h}=r,d=new nT(n.shape);return i.runWebGPUProgram(d,[n,o,a],n.dtype,[{type:"int32",data:[s]},{type:"float32",data:[u]},{type:"float32",data:[l]},{type:"float32",data:[h]}])}},nN=eq({opType:sA.MAX,cpuKernelImpl:tn}),nF={kernelName:s.BMI,backendName:"webgpu",kernelFunc:nN},nz={kernelName:s.mTV,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{x:n}=t,{filterSize:o,strides:a,pad:u,dimRoundingMode:l}=r,h=s.backend_util.computePool2DInfo(n.shape,o,a,1,u,l);return t7(n,h,"max",i)}},nD={kernelName:s.OAf,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{x:n}=t,{filterSize:o,strides:a,pad:u,dataFormat:l,dimRoundingMode:h}=r,d=s.backend_util.computePool3DInfo(n.shape,o,a,[1,1,1],u,h,l),p=new t3(d,"max"),c=[{type:"int32",data:[d.strideDepth,d.strideHeight,d.strideWidth]},{type:"int32",data:[d.padInfo.front,d.padInfo.top,d.padInfo.left]},{type:"int32",data:[d.inDepth,d.inHeight,d.inWidth]},{type:"int32",data:[d.effectiveFilterDepth,d.effectiveFilterHeight,d.effectiveFilterWidth]}];return i.runWebGPUProgram(p,[n],n.dtype,c)}};class nE{constructor(e){this.variableNames=["dy","maxPos"],this.uniforms=`strides : vec2<i32>, pads : vec2<i32>, dilations : vec2<i32>, filterDims : vec2<i32>,
       outHeight : i32, outWidth : i32`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.inShape,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="maxPool2DBackprop"}getUserCode(){return`
      ${b("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let batch = coords[0];
        let d = coords[3];

        let dyRCCorner = vec2<i32>(coords.yz) - uniforms.pads;
        let dyRCorner = dyRCCorner.x;
        let dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        var dotProd = 0.0;
        let lastIndex = uniforms.filterDims[0] * uniforms.filterDims[1] - 1;
        for (var wR = 0; wR < uniforms.filterDims[0]; wR += uniforms.dilations[0]) {
          let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[0]);

          if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {
            continue;
          }
          let idyR = i32(dyR);

          for (var wC = 0; wC < uniforms.filterDims[1]; wC += uniforms.dilations[1]) {
            let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[1]);

            if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {
              continue;
            }
            let idyC = i32(dyC);

            let dyValue = getDy(batch, idyR, idyC, d);
            let maxPosValue = lastIndex - i32(getMaxPos(batch, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            let curPosValue = wR * uniforms.filterDims[1] + wC;
            let mask = select(0.0, 1.0, maxPosValue == curPosValue);
            dotProd += dyValue * mask;
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
    `}}class nL{constructor(e){this.variableNames=["dy","maxPos"],this.uniforms=`strides : vec3<i32>, pads : vec3<i32>, filterDims : vec3<i32>,
      outDepth : i32, outHeight : i32, outWidth : i32`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.inShape,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="maxPool3DBackprop"}getUserCode(){return`
      ${b("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let batch = coords.x;
        let ch = coords.u;

        let dyCorner = vec3<i32>(coords.y, coords.z, coords.w) - uniforms.pads;
        let dyDCorner = dyCorner.x;
        let dyRCorner = dyCorner.y;
        let dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        var dotProd = 0.0;
        let lastIndex = uniforms.filterDims[0] * uniforms.filterDims[1] * uniforms.filterDims[2] - 1;

        for (var wD = 0; wD < uniforms.filterDims[0]; wD++) {
          let dyD = f32(dyDCorner + wD) / f32(uniforms.strides[0]);

          if (dyD < 0.0 || dyD >= f32(uniforms.outDepth) || fract(dyD) > 0.0) {
            continue;
          }
          let idyD = i32(dyD);

          for (var wR = 0; wR < uniforms.filterDims[1]; wR++) {
            let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[1]);

            if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {
              continue;
            }
            let idyR = i32(dyR);

            for (var wC = 0; wC < uniforms.filterDims[2]; wC++) {
              let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[2]);

              if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {
                continue;
              }
              let idyC = i32(dyC);

              let dyValue = getDy(batch, idyD, idyR, idyC, ch);
              let maxPosValue = lastIndex - i32(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              let curPosValue = wD * uniforms.filterDims[1] * uniforms.filterDims[2] + wR * uniforms.filterDims[2] + wC;
              let mask = select(0.0, 1.0, maxPosValue == curPosValue);
              dotProd += dyValue * mask;
            }
          }
        }

        setOutputAtIndex(index, dotProd);
      }
    }
    `}}let nO={kernelName:s.OU7,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{dy:n,input:o}=t,{filterSize:a,strides:u,pad:l,dimRoundingMode:h}=r,d=s.backend_util.computePool3DInfo(o.shape,a,u,[1,1,1],l,h),p=new t3(d,"max",!0),c=[{type:"int32",data:[d.strideDepth,d.strideHeight,d.strideWidth]},{type:"int32",data:[d.padInfo.front,d.padInfo.top,d.padInfo.left]},{type:"int32",data:[d.inDepth,d.inHeight,d.inWidth]},{type:"int32",data:[d.effectiveFilterDepth,d.effectiveFilterHeight,d.effectiveFilterWidth]}],f=i.runWebGPUProgram(p,[o],"int32",c),m=new nL(d);c=[{type:"int32",data:[d.strideDepth,d.strideHeight,d.strideWidth]},{type:"int32",data:[d.effectiveFilterDepth-1-d.padInfo.front,d.effectiveFilterHeight-1-d.padInfo.top,d.effectiveFilterWidth-1-d.padInfo.left]},{type:"int32",data:[d.effectiveFilterDepth,d.effectiveFilterHeight,d.effectiveFilterWidth]},{type:"int32",data:[d.outDepth]},{type:"int32",data:[d.outHeight]},{type:"int32",data:[d.outWidth]}];let g=i.runWebGPUProgram(m,[n,f],o.dtype,c);return i.disposeData(f.dataId),g}},nU={kernelName:s.OV7,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{dy:n,input:o,output:a}=t;D([o,a],"maxPoolGrad");let{filterSize:u,strides:l,pad:h,dimRoundingMode:d}=r,p=s.backend_util.computePool2DInfo(o.shape,u,l,1,h,d),c=new t1(p,"max",!0),f=[{type:"int32",data:[p.strideHeight,p.strideWidth]},{type:"int32",data:[p.padInfo.top,p.padInfo.left]},{type:"int32",data:[p.dilationHeight,p.dilationWidth]},{type:"int32",data:[p.inHeight,p.inWidth]},{type:"int32",data:[p.effectiveFilterHeight,p.effectiveFilterWidth]}],m=i.runWebGPUProgram(c,[o],"int32",f),g=new nE(p);f=[{type:"int32",data:[p.strideHeight,p.strideWidth]},{type:"int32",data:[p.effectiveFilterHeight-1-p.padInfo.top,p.effectiveFilterWidth-1-p.padInfo.left]},{type:"int32",data:[p.dilationHeight,p.dilationWidth]},{type:"int32",data:[p.effectiveFilterHeight,p.effectiveFilterWidth]},{type:"int32",data:[p.outHeight]},{type:"int32",data:[p.outWidth]}];let y=i.runWebGPUProgram(g,[n,m],o.dtype,f);return i.disposeData(m.dataId),y}},nM={kernelName:s.vFR,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{filterSize:n,strides:o,pad:a,includeBatchInIndex:u}=r,{x:l}=t;s.D5U.assert(4===l.shape.length,()=>`Error in maxPool: input must be rank 4 but got rank ${l.shape.length}.`);let h=[1,1];s.D5U.assert(s.backend_util.eitherStridesOrDilationsAreOne(o,h),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${o} and dilations '${h}'`);let d=s.backend_util.computePool2DInfo(l.shape,n,o,h,a),p=[{type:"int32",data:[d.strideHeight,d.strideWidth]},{type:"int32",data:[d.padInfo.top,d.padInfo.left]},{type:"int32",data:[d.dilationHeight,d.dilationWidth]},{type:"int32",data:[d.inHeight,d.inWidth]},{type:"int32",data:[d.effectiveFilterHeight,d.effectiveFilterWidth]}],c=new t1(d,"max",!1),f=i.runWebGPUProgram(c,[l],l.dtype,p);return c=new t1(d,"max",!0,!0,u),[f,i.runWebGPUProgram(c,[l],"int32",p)]}},nB={kernelName:s.c17,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{x:n}=t,{axis:o,keepDims:a}=r;return tU(n,o,a,"min",i)}},nW=eq({opType:sA.MIN,cpuKernelImpl:to}),nV={kernelName:s.q8u,backendName:"webgpu",kernelFunc:nW};class nH{constructor(e,t,i){this.uniforms="",this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.map((t,i)=>t[0]+e[i]+t[1]),this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.xShape=e,t.map((e,t)=>{this.uniforms+=` pad${t} : vec2<i32>,`}),this.offset="reflect"===i?0:1,this.shaderKey=`mirrorPad_${i}`}getUserCode(){let e=this.xShape.length,t=this.xShape.map((e,t)=>`uniforms.pad${t}[0]`).join(","),i=this.xShape.map((t,i)=>`uniforms.pad${i}[0] + uniforms.xShape${e>1?`[${i}]`:""}`).join(","),r=1===e?"start":"start[i]",n=1===e?"end":"end[i]",o=1===e?"outC":"outC[i]",a=x(e),s=e>1?["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,e):"coords";return`
      ${b("index")} {
        if (index < uniforms.size) {
          let start = ${a}(${t});
          let end = ${a}(${i});
          var outC = getCoordsFromIndex(index);
          for (var i = 0; i < ${e}; i = i + 1) {
            if (${o} < ${r}) {
              ${o} = ${r} * 2 - ${o} - ${this.offset};
            } else if(${o} >= ${n}) {
              ${o} = (${n} - 1) * 2 - ${o} + ${this.offset};
            }
          }
          let coords = outC - start;
          setOutputAtIndex(index, getX(${s}));
        }
      }
    `}}let nG={kernelName:s.jQs,backendName:"webgpu",kernelFunc:({inputs:e,attrs:t,backend:i})=>{let{x:r}=e,{paddings:n,mode:o}=t,a=n.map(e=>({type:"int32",data:[e[0],e[1]]})),s=new nH(r.shape,n,o);return i.runWebGPUProgram(s,[r],r.dtype,a)}},nj=eq({opType:sA.MOD}),nX={kernelName:s.Vbg,backendName:"webgpu",kernelFunc:nj};class nK{constructor(e,t){this.variableNames=["probs"],this.outputShape=[],this.uniforms="seed : f32, numOutcomes: i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[e,t],this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="multinomial"}getUserCode(){return`
    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    fn random (seed : f32, resultUV : vec2<f32>) -> f32 {
      let HASHSCALE1 = 443.8975;
      let p = resultUV * seed;
      var p3  = fract(vec3<f32>(p.xyx) * HASHSCALE1);
      p3 = p3 + dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    ${b("index")} {
      if (index < uniforms.size) {
        let coords = getOutputCoords();
        let batch = coords[0];

        let resUV = vec2<f32>(f32(coords[1]) / f32(uniforms.outShape[1]),
            f32(coords[0]) / f32(uniforms.outShape[0]));
        let r = random(uniforms.seed, resUV);
        var cdf = 0.0;
        for (var i = 0; i < uniforms.numOutcomes - 1; i = i + 1) {
          cdf = cdf + getProbs(batch, i);

          if (r < cdf) {
            setOutputAtIndexI32(index, i);
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutputAtIndexI32(index, uniforms.numOutcomes - 1);
      }
    }
  `}}class nY{constructor(e){this.variableNames=["logits"],this.outputShape=e,this.dispatchLayout=N(this.outputShape),this.dispatch=[this.outputShape[0],1,1],this.outputShape[1]>=4096?this.workgroupSize=[256,1,1]:this.workgroupSize=[64,1,1],this.shaderKey="softmax"}getUserCode(){return`
    var<workgroup> buf : array<f32, ${this.workgroupSize[0]}>;
    var<workgroup> rowMaxShared : f32;
    var<workgroup> rowSumShared : f32;
    const blockSize = ${this.workgroupSize[0]};
    ${b("index")} {
      let row = index / blockSize;
      let tid = i32(localId.x);
      let cols = uniforms.outShape[1];

      var threadMax = -3.402823e+38f;
      for (var col = tid; col < cols; col += blockSize) {
        let value = getLogits(row, col);
        threadMax = max(threadMax, value);
      }
      if (tid < cols) {
        buf[tid] = threadMax;
      }
      workgroupBarrier();

      var reduceSize = min(cols, blockSize);
      for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
        reduceSize = currSize + (reduceSize & 1);
        if (tid < currSize) {
          buf[tid] = max(buf[tid], buf[tid + reduceSize]);
        }
        workgroupBarrier();
      }

      if (tid == 0) {
        rowMaxShared = buf[0];
      }
      workgroupBarrier();

      var threadSum = 0.0;
      for (var col = tid; col < cols; col += blockSize) {
        let subExp = exp(getLogits(row, col) - rowMaxShared);
        threadSum += subExp;
      }
      buf[tid] = threadSum;
      workgroupBarrier();

      for (var currSize = blockSize >> 1;  currSize > 0; currSize = currSize >> 1) {
        if (tid < currSize) {
          buf[tid] = buf[tid] + buf[tid + currSize];
        }
        workgroupBarrier();
      }

      if (tid == 0) {
        rowSumShared = buf[0];
      }
      workgroupBarrier();

      for (var col = tid; col < cols; col += blockSize) {
        let value = exp(getLogits(row, col) - rowMaxShared) / rowSumShared;
        setOutputAtCoords(row, col, value);
      }
  }
    `}}function nq(e){let{inputs:t,backend:i,attrs:r}=e,{logits:n}=t,{dim:o}=r,a=eO({inputs:{x:n},backend:i,attrs:{shape:[s.D5U.sizeFromShape(n.shape)/n.shape[o],n.shape[o]]}}),u=new nY(a.shape),l=i.runWebGPUProgram(u,[a],n.dtype),h=eO({inputs:{x:l},backend:i,attrs:{shape:n.shape}});return i.disposeData(a.dataId),i.disposeData(l.dataId),h}let nQ={kernelName:s.Gcp,backendName:"webgpu",kernelFunc:nq},nZ={kernelName:s.NZg,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{logits:n}=t,{numSamples:o,seed:a,normalized:s}=r,u=s?n:nq({inputs:{logits:n},backend:i,attrs:{dim:n.shape.length-1}}),l=u.shape[0],h=u.shape[1],d=new nK(l,o),p=i.runWebGPUProgram(d,[u],"int32",[{type:"float32",data:[a]},{type:"int32",data:[h]}]);return s||i.disposeData(u.dataId),p}},nJ={kernelName:s.kuV,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i}=e,{x:r}=t;if(i.shouldExecuteOnCPU([r])){let[e,t]=ts(i.tensorMap.get(r.dataId).values,r.shape,r.dtype);return i.makeTensorInfo(t,r.dtype,e)}let n=new eK(r.shape,sT.NEG);return i.runWebGPUProgram(n,[r],r.dtype)}},n0={kernelName:s.uv1,backendName:"webgpu",kernelFunc:function(e){console.warn("tf.nonMaxSuppression() in webgpu locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:t,backend:i,attrs:r}=e,{boxes:n,scores:o}=t,{maxOutputSize:a,iouThreshold:u,scoreThreshold:l}=r,h=i.readSync(n.dataId),d=i.readSync(o.dataId),{selectedIndices:p}=s.GDt.nonMaxSuppressionV3Impl(h,d,a,u,l);return i.makeTensorInfo([p.length],"int32",new Int32Array(p))}},n2={kernelName:s.W0H,backendName:"webgpu",kernelFunc:function(e){console.warn("tf.nonMaxSuppression() in webgpu locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:t,backend:i,attrs:r}=e,{boxes:n,scores:o}=t,{maxOutputSize:a,iouThreshold:u,scoreThreshold:l,softNmsSigma:h}=r,d=i.readSync(n.dataId),p=i.readSync(o.dataId),{selectedIndices:c,selectedScores:f}=s.GDt.nonMaxSuppressionV5Impl(d,p,a,u,l,h);return[i.makeTensorInfo([c.length],"int32",new Int32Array(c)),i.makeTensorInfo([f.length],"float32",new Float32Array(f))]}};class n1{constructor(e,t){this.variableNames=["x"],this.uniforms="onValue : f32, offValue : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[e,t],this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="onehot"}getUserCode(){return`
      ${b("index")} {
        if(index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          setOutputAtIndex(index, mix(uniforms.offValue, uniforms.onValue,
                                      f32(i32(round(getX(coords.x))) == coords.y)));
        }
      }
    `}}let n3={kernelName:s.we_,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{indices:n}=t,{dtype:o,depth:a,onValue:u,offValue:l}=r,h=s.D5U.sizeFromShape(n.shape),d=new n1(h,a),p=eO({inputs:{x:n},backend:i,attrs:{shape:[h]}}),c=i.runWebGPUProgram(d,[p],o,[{type:"float32",data:[u]},{type:"float32",data:[l]}]);i.disposeData(p.dataId);let f=eO({inputs:{x:c},backend:i,attrs:{shape:[...n.shape,a]}});return i.disposeData(c.dataId),f}};function n4(e){let{inputs:t,backend:i}=e,{x:r}=t;if("complex64"!==r.dtype)return eE({attrs:{shape:r.shape,dtype:r.dtype,value:"string"===r.dtype?"":0},backend:i});{let e=iw({inputs:{input:r},backend:i}),t=n4({inputs:{x:e},backend:i}),n=iF({inputs:{input:r},backend:i}),o=n4({inputs:{x:n},backend:i}),a=ej({inputs:{real:t,imag:o},backend:i});return i.disposeData(e.dataId),i.disposeData(t.dataId),i.disposeData(n.dataId),i.disposeData(o.dataId),a}}let n5={kernelName:s.RuY,backendName:"webgpu",kernelFunc:n4},n6={kernelName:s.qWM,backendName:"webgpu",kernelFunc:function e(t){let{inputs:i,backend:r}=t,{x:n}=i;if("string"===n.dtype)throw Error("onesLike is not supported under string dtype");if("complex64"!==n.dtype)return eE({attrs:{shape:n.shape,dtype:n.dtype,value:1},backend:r});{let t=iw({inputs:{input:n},backend:r}),i=e({inputs:{x:t},backend:r}),o=iF({inputs:{input:n},backend:r}),a=n4({inputs:{x:o},backend:r}),s=ej({inputs:{real:i,imag:a},backend:r});return r.disposeData(t.dataId),r.disposeData(i.dataId),r.disposeData(o.dataId),r.disposeData(a.dataId),s}}},n8={kernelName:s.QiL,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{axis:n}=r;if(1===t.length)return rL({inputs:{input:t[0]},backend:i,attrs:{dim:n}});let o=t[0].shape,a=t[0].dtype;t.forEach(e=>{s.D5U.assertShapesMatch(o,e.shape,"All tensors passed to stack must have matching shapes"),s.D5U.assert(a===e.dtype,()=>"All tensors passed to stack must have matching dtypes")});let u=[],l=iD({inputs:t.map(e=>{let t=rL({inputs:{input:e},backend:i,attrs:{dim:n}});return u.push(t),t}),backend:i,attrs:{axis:n}});return u.forEach(e=>i.disposeData(e.dataId)),l}};function n7(e,t=!1){let i=e.length,r=x(i),n=e.map((e,t)=>`uniforms.pad${t}[0]`).join(","),o=e.map((e,t)=>`uniforms.pad${t}[0] + uniforms.xShape${i>1?`[${t}]`:""}`).join(","),a=i>1?`${r}(${n})`:`${n}`,s=i>1?`${r}(${o})`:`${o}`,u=i>1?"any(paddedCoords < start)":"paddedCoords < start",l=i>1?"any(paddedCoords >= end)":"paddedCoords >= end",h=i>1?["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,i):"coords";return`
        let start = ${a};
        let end = ${s};
        if (${u} || ${l}) {
          setOutputAtIndex(index, ${t?0:"uniforms.constantValue"});
        } else {
          let coords = paddedCoords - start;
          setOutputAtIndex(index, getX(${h}));
        }
  `}class n9{constructor(e,t){this.variableNames=["x"],this.uniforms="constantValue : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.map((t,i)=>t[0]+e[i]+t[1]),this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),t.map((e,t)=>{this.uniforms+=` pad${t} : vec2<i32>,`}),this.xShape=e,this.shaderKey="pad"}getUserCode(){return`
      ${b("index")} {
        if (index < uniforms.size) {
          let paddedCoords = getCoordsFromIndex(index);
          ${n7(this.xShape)}
        }
      }
    `}}let oe={kernelName:s.lyA,backendName:"webgpu",kernelFunc:e=>{let{inputs:t,backend:i,attrs:r}=e,{x:n}=t,{paddings:o,constantValue:a}=r;if(o.every(e=>s.D5U.arraysEqual(e,[0,0])))return eH({inputs:{x:n},backend:i});if(0===s.D5U.sizeFromShape(n.shape))return eE({backend:i,attrs:{shape:o.map((e,t)=>e[0]+n.shape[t]+e[1]),value:a,dtype:n.dtype}});let u=[{type:"float32",data:[a]}];o.map(e=>u.push({type:"int32",data:[e[0],e[1]]}));let l=new n9(n.shape,o);return i.runWebGPUProgram(l,[n],n.dtype,u)}},ot=eq({opType:sA.POW}),oi={kernelName:s.pe_,backendName:"webgpu",kernelFunc:ot},or={kernelName:s.o0g,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i}=e,{x:r,alpha:n}=t,o=new eV(sA.PRELU,r.shape,n.shape);return i.runWebGPUProgram(o,[r,n],"float32")}},on={kernelName:s.DlI,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{x:n}=t,{axis:o,keepDims:a}=r;return tU(n,o,a,"prod",i)}},oo={kernelName:s.e6w,backendName:"webgpu",kernelFunc:e=>{let{backend:t,attrs:i}=e,{start:r,stop:n,step:o,dtype:a}=i,s=th(r,n,o,a);return t.makeTensorInfo([s.length],a,s)}},oa=eq({opType:sA.DIV}),os={kernelName:s.oHH,backendName:"webgpu",kernelFunc:oa},ou=eY({opType:sT.RECIPROCAL}),ol={kernelName:s.$HU,backendName:"webgpu",kernelFunc:ou},oh=eY({opType:sT.RELU}),od={kernelName:s.qkr,backendName:"webgpu",kernelFunc:oh},op=eY({opType:sT.RELU6}),oc={kernelName:s.SbG,backendName:"webgpu",kernelFunc:op};class of{constructor(e,t,i){this.variableNames=["x"],this.uniforms="adjustHeightWidth : vec2<f32>, halfPixelCenters : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[e[0],t,i,e[3]],this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="resizeBilinear"}getUserCode(){return`
      ${b("index")} {
        if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
          let b = coords[0];
          let d = coords[3];
          let rc = coords.yz;

          let effectiveInSize = vec2<f32>(
            f32(uniforms.xShape.y) - uniforms.adjustHeightWidth[0],
            f32(uniforms.xShape.z) - uniforms.adjustHeightWidth[1]);

          let effectiveOutSize = vec2<f32>(
            f32(uniforms.outShape.y) - uniforms.adjustHeightWidth[0],
            f32(uniforms.outShape.z) - uniforms.adjustHeightWidth[1]);

          let effectiveInputOverOutputRatioRC =
              effectiveInSize / effectiveOutSize;

          // Fractional source index
          let sourceFracIndexRC =
            (vec2<f32>(rc) + vec2<f32>(uniforms.halfPixelCenters)) *
            effectiveInputOverOutputRatioRC - vec2<f32>(uniforms.halfPixelCenters);

          // Compute the four integer indices.
          let sourceFloorRC = vec2<i32>(sourceFracIndexRC);
          let sourceCeilRC = vec2<i32>(
            min(vec2<f32>(uniforms.xShape.yz) - vec2<f32>(1.0), ceil(sourceFracIndexRC)));

          let topLeft = getX(b, sourceFloorRC.x, sourceFloorRC.y, d);
          let bottomLeft = getX(b, sourceCeilRC.x, sourceFloorRC.y, d);
          let topRight = getX(b, sourceFloorRC.x, sourceCeilRC.y, d);
          let bottomRight = getX(b, sourceCeilRC.x, sourceCeilRC.y, d);

          let fracRC = sourceFracIndexRC - vec2<f32>(sourceFloorRC);

          let top = topLeft + (topRight - topLeft) * fracRC.y;
          let bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
          let newValue = top + (bottom - top) * fracRC.x;

          setOutputAtIndex(index, newValue);
        }
      }
    `}}let om={kernelName:s._Yw,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{images:n}=t,{alignCorners:o,size:a,halfPixelCenters:s}=r,[u,l]=a,h=o&&u>1?1:0,d=o&&l>1?1:0,p=new of(n.shape,u,l);return i.runWebGPUProgram(p,[n],"float32",[{type:"float32",data:[h,d]},{type:"float32",data:[s?.5:0]}])}};class og{constructor(e,t){this.variableNames=["dy"],this.uniforms=`effectiveXSize : vec2<i32>, effectiveYSize : vec2<i32>, heightScale : f32, widthScale : f32,
       invHeightScale : f32, invWidthScale : f32, winHeight : i32, winWidth : i32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.alignCorners=t,this.shaderKey=`resizeBilinearBackprop_${t}`}getUserCode(){return`
      ${b("index")} {
        if (index < uniforms.size) {
          let coords = getOutputCoords();
          let b = coords[0];
          let d = coords[3];
          let r = coords[1];
          let c = coords[2];

          var accumulator = 0.0;

          // Compute bounds for where in dy we will look
          let startRLerp = floor(f32(r) * uniforms.invHeightScale);
          let startDyR = i32(startRLerp - f32(uniforms.winHeight / 2));

          let startCLerp = floor(f32(c) * uniforms.invWidthScale);
          let startDyC = i32(startCLerp - f32(uniforms.winWidth / 2));

          // Loop over dy
          for (var dyROffset = 0; dyROffset < uniforms.winHeight; dyROffset++) {
            let dyR = startDyR + dyROffset;

            // Guard against the window exceeding the bounds of dy
            if (dyR < 0 || dyR >= uniforms.dyShape[1]) {
              continue;
            }

            for (var dyCOffset = 0; dyCOffset < uniforms.winWidth; dyCOffset++) {
              let dyC = startDyC + dyCOffset;

              // Guard against the window exceeding the bounds of dy
              if (dyC < 0 || dyC >= uniforms.dyShape[2]) {
                continue;
              }

              let dxR = f32(dyR) * uniforms.heightScale;
              let topDxRIndex = i32(floor(dxR));
              let bottomDxRIndex = i32(min(ceil(dxR), f32(uniforms.outShape[1] - 1)));
              let dxRLerp = dxR - f32(topDxRIndex);
              let inverseDxRLerp = 1.0 - dxRLerp;

              let dxC = f32(dyC) * uniforms.widthScale;
              let leftDxCIndex = i32(floor(dxC));
              let rightDxCIndex = i32(min(ceil(dxC), f32(uniforms.outShape[2] - 1)));
              let dxCLerp = dxC - f32(leftDxCIndex);
              let inverseDxCLerp = 1.0 - dxCLerp;

              if (r == topDxRIndex && c == leftDxCIndex) {
                // topLeft
                accumulator +=
                  getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
              }

              if (r == topDxRIndex && c == rightDxCIndex) {
                // topRight
                accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
              }

              if (r == bottomDxRIndex && c == leftDxCIndex) {
                // bottomLeft
                accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
              }

              if (r == bottomDxRIndex && c == rightDxCIndex) {
                // bottomRight
                accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
              }
            }
          }
          // End loop over dy

          setOutputAtIndex(index, accumulator);
        }
      }
    `}}let oy={kernelName:s.zbQ,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{images:n,dy:o}=t,{alignCorners:a}=r,[,s,u]=n.shape,[,l,h]=o.shape,d=[a&&l>1?s-1:s,a&&h>1?u-1:u],p=[a&&l>1?l-1:l,a&&h>1?h-1:h],c=d[0]/p[0],f=d[1]/p[1],m=1/c,g=1/f,y=2*Math.ceil(m)+2,x=2*Math.ceil(g)+2,v=new og(n.shape,a);return i.runWebGPUProgram(v,[o],o.dtype,[{type:"int32",data:d},{type:"int32",data:p},{type:"float32",data:[c]},{type:"float32",data:[f]},{type:"float32",data:[m]},{type:"float32",data:[g]},{type:"int32",data:[y]},{type:"int32",data:[x]}])}};class ox{constructor(e,t,i,r){this.variableNames=["x"],this.uniforms="adjustHeightWidth : vec2<f32>, roundBase : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[e[0],t,i,e[3]],this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.halfPixelCenters=r,this.shaderKey=`resizeNearest_${r}`}getUserCode(){let e;return e=this.halfPixelCenters?"max((vec2<f32>(rc) + vec2<f32>(0.5)) * effectiveInputOverOutputRatioRC, vec2<f32>(0.0))":"vec2<f32>(rc) * effectiveInputOverOutputRatioRC",`
      ${b("index")} {
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let b = coords[0];
          let d = coords[3];
          let rc = coords.yz;

          let effectiveInSize = vec2<f32>(
            f32(uniforms.xShape.y) - uniforms.adjustHeightWidth[0],
            f32(uniforms.xShape.z) - uniforms.adjustHeightWidth[1]);

          let effectiveOutSize = vec2<f32>(
            f32(uniforms.outShape.y) - uniforms.adjustHeightWidth[0],
            f32(uniforms.outShape.z) - uniforms.adjustHeightWidth[1]);

          let effectiveInputOverOutputRatioRC =
              effectiveInSize / effectiveOutSize;

          // Fractional source index
          let sourceFracIndexRC = ${e};

          // Compute the coordinators of nearest neighbor point.
          let inputShapeRC = vec2<f32>(f32(uniforms.xShape.y), f32(uniforms.xShape.z));
          let sourceNearestRC = vec2<i32>(
            min(inputShapeRC - 1.0, floor(sourceFracIndexRC + uniforms.roundBase)));
          let newValue = getX(b, sourceNearestRC.x, sourceNearestRC.y, d);

          setOutputAtIndex(index, newValue);
        }
      }
    `}}let ov={kernelName:s.dpD,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{images:n}=t,{alignCorners:o,halfPixelCenters:a,size:s}=r,[u,l]=s,h=o&&u>1?1:0,d=o&&l>1?1:0,p=new ox(n.shape,u,l,a);return i.runWebGPUProgram(p,[n],n.dtype,[{type:"float32",data:[h,d]},{type:"float32",data:[o?.5:0]}])}};class ob{constructor(e,t){this.variableNames=["dy"],this.uniforms=`effectiveXSize : vec2<i32>, effectiveYSize : vec2<i32>, invHeightScale : f32, invWidthScale : f32,
       winHeight : i32, winWidth : i32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.alignCorners=t,this.shaderKey=`resizeNearestNeigborBackprop_${t}`}getUserCode(){return`
      ${b("index")} {
        if (index < uniforms.size) {
          let coords = getOutputCoords();
          let b = coords[0];
          let d = coords[3];
          let r = coords[1];
          let c = coords[2];

          var accumulator = 0.0;

          // Compute bounds for where in dy we will look
          let startRLerp = floor(f32(r) * uniforms.invHeightScale);
          let startDyR = i32(floor(startRLerp - f32(uniforms.winHeight / 2)));

          let startCLerp = floor(f32(c) * uniforms.invWidthScale);
          let startDyC = i32(floor(startCLerp - f32(uniforms.winWidth / 2)));

          // Loop over dy
          for (var dyROffset = 0; dyROffset < uniforms.winHeight; dyROffset++) {
            let dyR = startDyR + dyROffset;

            // Guard against the window exceeding the bounds of dy
            if (dyR < 0 || dyR >= uniforms.dyShape[1]) {
              continue;
            }

            for (var dyCOffset = 0; dyCOffset < uniforms.winWidth; dyCOffset++) {
              let dyC = startDyC + dyCOffset;

              // Guard against the window exceeding the bounds of dy
              if (dyC < 0 || dyC >= uniforms.dyShape[2]) {
                continue;
              }

              let sourceFracRow = f32(uniforms.effectiveXSize[0]) *
                  (f32(dyR) / f32(uniforms.effectiveYSize[0]));

              let sourceFracCol = f32(uniforms.effectiveXSize[1]) *
                  (f32(dyC) / f32(uniforms.effectiveYSize[1]));

              let sourceNearestRow =
                  i32(min(f32(uniforms.outShape[1] - 1),
                  ${this.alignCorners?"floor(sourceFracRow + 0.5)":"floor(sourceFracRow)"}));

              let sourceNearestCol =
                  i32(min(f32(uniforms.outShape[2] - 1),
                  ${this.alignCorners?"floor(sourceFracCol + 0.5)":"floor(sourceFracCol)"}));

              if (r == sourceNearestRow && c == sourceNearestCol) {
                accumulator += getDy(b, dyR, dyC, d);
              }
            }
          }
          // End loop over dy

          setOutputAtIndex(index, accumulator);
        }
      }
    `}}let ow={kernelName:s.Hmb,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{images:n,dy:o}=t,{alignCorners:a}=r,[,s,u]=n.shape,[,l,h]=o.shape,d=[a&&l>1?s-1:s,a&&h>1?u-1:u],p=[a&&l>1?l-1:l,a&&h>1?h-1:h],c=d[0]/p[0],f=d[1]/p[1],m=1/c,g=1/f,y=2*Math.ceil(m)+2,x=2*Math.ceil(g)+2,v=new ob(n.shape,a);return i.runWebGPUProgram(v,[o],o.dtype,[{type:"int32",data:d},{type:"int32",data:p},{type:"float32",data:[m]},{type:"float32",data:[g]},{type:"int32",data:[y]},{type:"int32",data:[x]}])}};class oS{constructor(e){this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.uniforms=" axis : vec4<i32>,",this.shaderKey="reverse"}getUserCode(){let e=`
      // Using uniform variables as judging conditions, so the function has
      // coherent execution within all threads.
      fn getReverseCoords(coords : vec4<i32>) -> vec4<i32> {
        var reverseCoords = coords;
        if (uniforms.axis[0] == 1) {
          reverseCoords[0] = uniforms.xShape[0] - coords[0] - 1;
        }
        if (uniforms.axis[1] == 1) {
          reverseCoords[1] = uniforms.xShape[1] - coords[1] - 1;
        }
        if (uniforms.axis[2] == 1) {
          reverseCoords[2] = uniforms.xShape[2] - coords[2] - 1;
        }
        if (uniforms.axis[3] == 1) {
          reverseCoords[3] = uniforms.xShape[3] - coords[3] - 1;
        }

        return reverseCoords;
      }
    `;return`
      ${e}
      ${b("index")} {
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let reverseCoords = getReverseCoords(coords);
          setOutputAtIndex(index, getX(reverseCoords[0],
              reverseCoords[1], reverseCoords[2], reverseCoords[3]));
        }
      }
    `}}let oC={kernelName:s.mKl,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{x:n}=t,{dims:o}=r,a=n.shape.length;if(0===a)return eH({inputs:{x:n},backend:i});let u=n.shape,l=[1,1,1,1];u.forEach((e,t)=>{l[t+4-a]=e});let h=s.D5U.parseAxisParam(o,n.shape),d=[0,0,0,0];h.forEach(e=>{d[e+4-a]=1});let p=eO({inputs:{x:n},backend:i,attrs:{shape:l}}),c=new oS(l),f=i.runWebGPUProgram(c,[p],p.dtype,[{type:"int32",data:d}]);i.disposeData(p.dataId);let m=eO({inputs:{x:f},backend:i,attrs:{shape:u}});return i.disposeData(f.dataId),m}};class ok{constructor(e,t){this.outputShape=[],this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.uniforms=`centerX : f32, centerY : f32, sinRadians : f32,
          cosRadians : f32,`,this.shaderKey="rotate",this.outputShape=e,"number"==typeof t?(this.uniforms+=" fillValue : f32,",this.fillSnippet="var outputValue = uniforms.fillValue;",this.shaderKey+="_float"):(this.uniforms+=" fillValue : vec3<f32>,",this.fillSnippet="var outputValue = uniforms.fillValue[coords[3]];",this.shaderKey+="_vec3")}getUserCode(){return`
        ${b("index")} {
          if (index < uniforms.size) {
            let coords = getCoordsFromIndex(index);
            let coordXFloat = (f32(coords[2]) - uniforms.centerX) *
                uniforms.cosRadians - (f32(coords[1]) - uniforms.centerY) *
                uniforms.sinRadians;
            let coordYFloat = (f32(coords[2]) - uniforms.centerX) *
                uniforms.sinRadians + (f32(coords[1]) - uniforms.centerY) *
                uniforms.cosRadians;
            let coordX = i32(round(coordXFloat + uniforms.centerX));
            let coordY = i32(round(coordYFloat + uniforms.centerY));
            ${this.fillSnippet}
            if(coordX >= 0 && coordX < uniforms.xShape[2] && coordY >= 0 &&
                coordY < uniforms.xShape[1]) {
              outputValue = getX(coords[0], coordY, coordX, coords[3]);
            }
            setOutputAtIndex(index, outputValue);
          }
        }
      `}}let oI={kernelName:s.b9H,backendName:"webgpu",kernelFunc:({inputs:e,attrs:t,backend:i})=>{let{image:r}=e,{radians:n,fillValue:o,center:a}=t,u=new ok(r.shape,o),[l,h]=s.backend_util.getImageCenter(a,r.shape[1],r.shape[2]),d=[{type:"float32",data:[l]},{type:"float32",data:[h]},{type:"float32",data:[Math.sin(n)]},{type:"float32",data:[Math.cos(n)]}];return"number"==typeof o?d.push({type:"float32",data:[Number.parseFloat(o.toFixed(2))]}):d.push({type:"float32",data:o}),i.runWebGPUProgram(u,[r],r.dtype,d)}},oR=eY({opType:sT.ROUND}),oP={kernelName:s.e07,backendName:"webgpu",kernelFunc:oR},o$=eY({opType:sT.RSQRT,cpuKernelImpl:td}),oA={kernelName:s.bV0,backendName:"webgpu",kernelFunc:o$};class oT{constructor(e,t,i,r,n,o,a,s=!0){this.variableNames=["updates","indices"],this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=o,this.type=a,this.sumDupeIndices=s,this.dispatchLayout=N(e),this.dispatch=A(this.dispatchLayout,e,this.workgroupSize),this.sliceDimGreaterThanOne=t>1,this.shaderKey=`scatter_${i}_${r}_${this.sliceDimGreaterThanOne}_${a}_${s}_${n.length}`;let u=x(n.length);this.uniforms=`sliceDim : i32, strides: ${u}, updatesSize: i32,`,this.updatesRank=r,this.indicesRank=i}getUserCode(){let e="";1===this.indicesRank?e="coords[0]":2===this.indicesRank&&(e="coords[0], j");let t=`getIndices(${e})`,i=this.sliceDimGreaterThanOne?"uniforms.strides[j]":"uniforms.strides",r="",n="";1===this.dispatchLayout.x.length?(r="flattenedIndex",n=`
      fn getUpdatesCoordsFromFlatIndex(index : i32) -> i32 {
        return index;
      }
      `):2===this.dispatchLayout.x.length&&(r="vec2<i32>(flattenedIndex, coords[1])",n=`
      fn getUpdatesCoordsFromFlatIndex(index : i32) -> vec2<i32> {
        // N.B. |updates| could be a scalar tensor, conceptually representing a
        // 2D tensor with all values equal to that. By design, its size must be
        // the same as |outShape[1]| in one dimension, and |indicesShape[0]|
        // gives the other.
        let sliceSize = uniforms.outShape[1];
        let d0 = index / sliceSize;
        let d1 = index - d0 * sliceSize;
        return vec2<i32>(d0, d1);
      }
      `);let o=Array.from({length:this.updatesRank},(e,t)=>`coords[${t}]`),a=`getUpdates(${o.join(", ")})`;return`
    ${n}
      ${b("index")} {
        if (index < uniforms.updatesSize) {
          let coords = getUpdatesCoordsFromFlatIndex(index);
          var flattenedIndex = 0;
          for (var j = 0; j < uniforms.sliceDim; j = j + 1) {
            let indexInside = i32(round(${t}));
            flattenedIndex = flattenedIndex + indexInside * ${i};
          }
          let updateValue =
              ${R(this.type)}(${a});
          let flatIndex = getOutputIndexFromCoords(${r});

          ${this.sumDupeIndices?m("&result[flatIndex]","updateValue",this.type):"atomicStore(&result[flatIndex], bitcast<i32>(updateValue));"}
        }
      }`}}let o_={kernelName:s.xQA,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{indices:n,updates:o}=t,{shape:a}=r,{sliceRank:u,numUpdates:l,sliceSize:h,strides:d,outputSize:p}=s.backend_util.calculateShapes(o,n,a),c=[p/h,h];if(0===p)return i.makeTensorInfo(a,n.dtype);let f=eO({inputs:{x:n},backend:i,attrs:{shape:[l,u]}}),m=eO({inputs:{x:o},backend:i,attrs:{shape:[l,h]}}),g=m.dtype,y=eE({backend:i,attrs:{shape:c,value:0,dtype:g}}),x=[{type:"int32",data:[u]},{type:"int32",data:d},{type:"int32",data:[s.D5U.sizeFromShape(m.shape)]}],v=new oT(m.shape,u,f.shape.length,m.shape.length,d,c,g),b=i.runWebGPUProgram(v,[m,f],g,x,y),w=eO({inputs:{x:b},backend:i,attrs:{shape:a}});return i.disposeData(f.dataId),i.disposeData(m.dataId),i.disposeData(b.dataId),w}};class oN{constructor(e,t){this.outputShape=[],this.variableNames=["sortedSequence","values"],this.uniforms="numInputs : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.side=t,this.shaderKey=`search_sorted_${t}`}getUserCode(){let e="left"===this.side?"<":"<=";return`
      fn findBound(batch: i32, value: f32) -> i32 {
        var left = i32(0);
        var right = uniforms.numInputs;
        while (left < right) {
          var mid = (left + right) / 2;
          if (getSortedSequence(batch, mid) ${e} value) {
            left = mid + 1;
          } else {
            right = mid;
          }
        }
        return right;
      }

      ${b("index")} {
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let value = getValuesByOutputIndex(index);
          setOutputAtIndexI32(index, findBound(coords[0], value));
        }
      }
    `}}let oF={kernelName:s.nr8,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{sortedSequence:n,values:o}=t,{side:a}=r,s=new oN([o.shape[0],o.shape[1]],a),u=[{type:"int32",data:[n.shape[1]]}];return i.runWebGPUProgram(s,[n,o],"int32",u)}};class oz{constructor(e,t,i){this.variableNames=["c","a","b"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.cRank=e,this.rank=i,this.shaderKey="select"}getUserCode(){let e,t;if(this.rank>4)throw Error(`Where for rank ${this.rank} is not yet supported`);if(1===this.rank)t="resRC",e="resRC";else{let i=["resRC.x","resRC.y","resRC.z","resRC.w"],r=[],n=[];for(let e=0;e<this.outputShape.length;e++)n.push(`${i[e]}`),e<this.cRank&&r.push(`${i[e]}`);e=r.join(),t=n.join()}return`
      ${b("index")} {
        if (index < uniforms.size) {
          let resRC = getCoordsFromIndex(index);
          let cVal = getC(${e});
          if (cVal >= 1.0) {
            setOutputAtIndex(index, getA(${t}));
          } else {
            setOutputAtIndex(index, getB(${t}));
          }
        }
      }
    `}}let oD={kernelName:s.PhF,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i}=e,{condition:r,t:n,e:o}=t,a=new oz(r.shape.length,n.shape,n.shape.length);return i.runWebGPUProgram(a,[r,n,o],(0,s.x8V)(n.dtype,o.dtype))}},oE=eY({opType:sT.SELU}),oL={kernelName:s.oFR,backendName:"webgpu",kernelFunc:oE},oO=eY({opType:sT.SIGMOID}),oU={kernelName:s.a5O,backendName:"webgpu",kernelFunc:oO},oM=eY({opType:sT.SIGN}),oB={kernelName:s.i5y,backendName:"webgpu",kernelFunc:oM},oW=eY({opType:sT.SIN}),oV={kernelName:s.RQH,backendName:"webgpu",kernelFunc:oW},oH=eY({opType:sT.SINH}),oG={kernelName:s.wYB,backendName:"webgpu",kernelFunc:oH},oj=eY({opType:sT.SOFTPLUS}),oX={kernelName:s.MRv,backendName:"webgpu",kernelFunc:oj};class oK{constructor(e,t,i,r,n,o){this.variableNames=["x"],this.outputShape=[],this.uniforms="",this.workgroupSize=[64,1,1],this.size=!0;let a=Array(r.length);for(let e=0;e<a.length;e++)a[e]=r[n[e]];this.outputShape=a,this.newDim=n,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.xShape=e,this.paddedXShape=t,this.uniforms+=`reshapedPaddedXShape : ${x(r.length)}, paddedXShapeStrides : ${x(o)}, `,i.map((e,t)=>{this.uniforms+=` pad${t} : vec2<i32>,`}),this.shaderKey=`spaceToBatchND_${n}`}getUserCode(){let e=x(this.outputShape.length),t=tz(this.newDim);return`
      ${k(this.paddedXShape,"PaddedX")}
      ${b("index")} {
        if(index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let switchedIndex = getIndexFromCoords${this.outputShape.length}D(${e}(${t}), uniforms.reshapedPaddedXShape);
          let paddedCoords = getPaddedXCoordsFromIndex(switchedIndex);
          ${n7(this.xShape,!0)}
        }
      }
    `}}let oY={kernelName:s.TQc,backendName:"webgpu",kernelFunc:e=>{let{inputs:t,backend:i,attrs:r}=e,{x:n}=t,{blockShape:o,paddings:a}=r;s.D5U.assert(n.shape.length<=4,()=>"spaceToBatchND for rank > 4 with a WebGPU backend not implemented yet");let u=o.reduce((e,t)=>e*t),l=[[0,0]];l.push(...a);for(let e=1+o.length;e<n.shape.length;++e)l.push([0,0]);let h=l.map((e,t)=>e[0]+n.shape[t]+e[1]),d=s.backend_util.getReshaped(h,o,u,!1),p=s.backend_util.getPermuted(d.length,o.length,!1),c=s.backend_util.getReshapedPermuted(h,o,u,!1),f=s.D5U.computeStrides(h),m=new oK(n.shape,h,l,d,p,f.length),g=[{type:"int32",data:d},{type:"int32",data:f}];l.map(e=>g.push({type:"int32",data:[e[0],e[1]]}));let y=i.runWebGPUProgram(m,[n],n.dtype,g),x=eO({inputs:{x:y},backend:i,attrs:{shape:c}});return i.disposeData(y.dataId),x}};class oq{constructor(e,t,i){this.variableNames=["input","indices","segmentIds"],this.outputShape=[],this.uniforms="segmentSize : i32, sparseSize : i32,",this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=e,this.type=i,this.dispatchLayout=N([t]),this.dispatch=A(this.dispatchLayout,[t],this.workgroupSize),this.shaderKey="sparseSegmentSum"}getUserCode(){return`
    ${b("index")} {
      if (index < uniforms.sparseSize) {
        let indexInSegmentIds = index / uniforms.segmentSize;
        let indexInSegment = index % uniforms.segmentSize;
        let indexInInput = indices[indexInSegmentIds];
        let segmentId = segmentIds[indexInSegmentIds];

        let value = input[indexInInput * uniforms.segmentSize + indexInSegment];
        let outIndex = segmentId * uniforms.segmentSize + indexInSegment;
        ${m("&result[outIndex]","value",this.type)}
      }
    }
  `}}class oQ{constructor(e,t){this.variableNames=["segmentIds"],this.outputShape=[],this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=[e],this.dispatchLayout=N(t),this.dispatch=A(this.dispatchLayout,t,this.workgroupSize),this.shaderKey="sparseSegmentIdCountProgram"}getUserCode(){return`
    ${b("index")} {
      if (index < uniforms.segmentIdsShape) {
        let segmentId = segmentIds[index];
        ${m("&result[segmentId]","1","int32")}
      }
    }
  `}}class oZ{constructor(e,t){this.variableNames=["segmentSum","sameSegmentIdCount"],this.outputShape=[],this.uniforms="segmentSize : i32",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.type=t,this.dispatchLayout=N(e),this.dispatch=A(this.dispatchLayout,e,this.workgroupSize),this.shaderKey="sparseSegmentMean"}getUserCode(){return`
    ${b("index")} {
      if (index < uniforms.size) {
        let segmentId = index / uniforms.segmentSize;
        let count = sameSegmentIdCount[segmentId];
        if (count != 0) {
          ${"float32"===this.type?"setOutputAtIndex(index, segmentSum[index] / f32(count));":"setOutputAtIndexI32(index, segmentSum[index] / count);"}
        }
      }
    }
  `}}function oJ(e,t,i,r=!1,n){let o;let a=s.D5U.sizeFromShape(e.shape)/e.shape[0],u=e.dtype,l=s.D5U.sizeFromShape(t.shape),h=n.readSync(i.dataId),d=l>0?h[l-1]+1:0,p=e.shape.slice();p[0]=d;let c=l*a,f=eE({backend:n,attrs:{shape:p,value:0,dtype:u}});o=new oq(p,c,u);let m=[{type:"int32",data:[a]},{type:"int32",data:[c]}],g=n.runWebGPUProgram(o,[e,t,i],u,m,f);if(r)return g;let y=eE({backend:n,attrs:{shape:[d],value:0,dtype:"int32"}});o=new oQ(d,i.shape);let x=n.runWebGPUProgram(o,[i],"int32",null,y),v=eE({backend:n,attrs:{shape:p,value:0,dtype:u}});o=new oZ(p,u),m=[{type:"int32",data:[a]}];let b=n.runWebGPUProgram(o,[g,x],u,m,v);return n.disposeData(g.dataId),n.disposeData(x.dataId),b}let o0={kernelName:s.w3H,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i}=e,{data:r,indices:n,segmentIds:o}=t;return oJ(r,n,o,!1,i)}},o2={kernelName:s.ZjV,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i}=e,{data:r,indices:n,segmentIds:o}=t;return oJ(r,n,o,!0,i)}};class o1{constructor(e,t){this.variableNames=["A"],this.workgroupSize=[64,1,1],this.size=!0;let i=Array(e.length);for(let r=0;r<i.length;r++)i[r]=e[r]*t[r];this.outputShape=i,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.rank=this.outputShape.length,this.shaderKey="tile"}getUserCode(){let e=function(e,t=""){if(e>=5)throw Error(`Tile for rank ${e} is not yet supported`);if(1===e)return`(resRC % ${t}aShape)`;let i=["resRC.x","resRC.y","resRC.z","resRC.w"],r=[];for(let n=0;n<e;n++)r.push(`(${i[n]} % ${t}aShape[${n}])`);return r.join()}(this.rank,"uniforms.");return`
      ${b("index")} {
        if (index < uniforms.size) {
          let resRC = getCoordsFromIndex(index);
          setOutputAtIndex(index, getA(${e}));
        }
      }
    `}}function o3(e){let{inputs:t,backend:i,attrs:r}=e,{x:n}=t,{reps:o}=r;if(i.shouldExecuteOnCPU([n])||"string"===n.dtype||n.shape.length>=5){let e=i.readSync(n.dataId),t="string"===n.dtype?e.map(e=>s.D5U.decodeString(e)):e,r=tx((0,s.f3b)(n.shape,n.dtype,t),o);return i.makeTensorInfo(r.shape,r.dtype,r.values)}let a=new o1(n.shape,o);return i.runWebGPUProgram(a,[n],n.dtype)}let o4={kernelName:s.n9L,backendName:"webgpu",kernelFunc:o3},o5={kernelName:s.D2d,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{sparseIndices:n,sparseValues:o,defaultValue:a}=t,{outputShape:u}=r,{sliceRank:l,numUpdates:h,sliceSize:d,strides:p,outputSize:c}=s.backend_util.calculateShapes(o,n,u);if("string"===o.dtype){let e=tp(i.bufferSync(n),i.bufferSync(o),u,c,d,h,l,p,s.D5U.decodeString(i.readSync(a.dataId)[0]),!1);return i.makeTensorInfo(u,e.dtype,e.values)}let f=[c/d,d],m=eO({inputs:{x:n},backend:i,attrs:{shape:[h,l]}}),g=o.shape.length?eO({inputs:{x:o},backend:i,attrs:{shape:[h,d]}}):eH({inputs:{x:o},backend:i}),y=g.dtype,x=i.makeTensorInfo([],y,s.D5U.makeZerosTypedArray(1,y)),v=eO({inputs:{x:a},backend:i,attrs:{shape:Array(f.length).fill(1)}}),b=o3({inputs:{x:v},backend:i,attrs:{reps:f}}),w=[{type:"int32",data:[l]},{type:"int32",data:p},{type:"int32",data:[s.D5U.sizeFromShape([h,d])]}];switch(h){case 0:break;case 1:{let e=new oT([h,d],l,m.shape.length,g.shape.length,p,f,y,!1);i.runWebGPUProgram(e,[g,m],y,w,b)}break;default:{let e=new oT([h,d],l,m.shape.length,x.shape.length,p,f,y,!1);i.runWebGPUProgram(e,[x,m],y,w,b)}{let e=new oT([h,d],l,m.shape.length,g.shape.length,p,f,y);i.runWebGPUProgram(e,[g,m],y,w,b)}}let S=eO({inputs:{x:b},backend:i,attrs:{shape:u}});return i.disposeData(m.dataId),i.disposeData(g.dataId),i.disposeData(v.dataId),i.disposeData(x.dataId),i.disposeData(b.dataId),S}},o6={kernelName:s.L8s,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{x:n}=t,{numOrSizeSplits:o,axis:a}=r,u=s.D5U.parseAxisParam(a,n.shape)[0],l=s.backend_util.prepareSplitSize(n,o,u),h=Array(n.shape.length).fill(0),d=n.shape.slice();return l.map(e=>{let t=[...d];t[u]=e;let r=il({inputs:{x:n},backend:i,attrs:{begin:h,size:t}});return h[u]+=e,r})}},o8=eY({opType:sT.SQRT}),o7={kernelName:s.FKq,backendName:"webgpu",kernelFunc:o8},o9={kernelName:s.bK0,backendName:"webgpu",kernelFunc:({inputs:e,backend:t})=>{let{x:i}=e,r=new eK(i.shape,sT.SQUARE);return t.runWebGPUProgram(r,[i],i.dtype)}},ae=eq({opType:sA.SQUARED_DIFFERENCE}),at={kernelName:s._tC,backendName:"webgpu",kernelFunc:ae},ai={kernelName:s.h8e,backendName:"webgpu",kernelFunc:function({inputs:e,attrs:t,backend:i}){let{x:r}=e,n=new eK(r.shape,sT.STEP,"stepAlpha : f32,"),o=[{type:"float32",data:[t.alpha]}];return i.runWebGPUProgram(n,[r],r.dtype,o)}};class ar{constructor(e){this.variableNames=["x"],this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]);let t=x(this.outputShape.length);this.uniforms=`begin : ${t},  strides : ${t}, `,this.shaderKey="stridedSlice"}getUserCode(){let e=this.outputShape.length,t="";if(1===e)t="coords * uniforms.strides + uniforms.begin";else{let e=0;t=this.outputShape.map((t,i)=>(e++,1===this.outputShape.length?`coords * uniforms.strides[${i}] + uniforms.begin[${i}]`:`coords[${e-1}] * uniforms.strides[${i}] + uniforms.begin[${i}]`)).join(",")}return`
       ${b("index")} {
         if (index < uniforms.size) {
           let coords = getCoordsFromIndex(index);
           setOutputAtIndex(index, getX(${t}));
         }
       }
     `}}let an={kernelName:s.jQk,backendName:"webgpu",kernelFunc:function(e){let t;let{inputs:i,backend:r,attrs:n}=e,{x:o}=i,{begin:a,end:u,strides:l,beginMask:h,endMask:d,ellipsisMask:p,newAxisMask:c,shrinkAxisMask:f}=n,{finalShapeSparse:m,finalShape:g,isIdentity:y,sliceDim0:x,isSimpleSlice:v,begin:b,end:w,strides:S}=s.kuN.sliceInfo(o.shape,a,u,l,h,d,p,c,f);if(y)t=eO({inputs:{x:o},backend:r,attrs:{shape:g}});else if(x||v){s.D5U.assert(o.shape.length>=1,()=>`Input must have rank at least 1, got: ${o.shape.length}`);let e=s.kuN.computeOutShape(b,w,S),i=il({inputs:{x:o},backend:r,attrs:{begin:b,size:e}});t=eO({inputs:{x:i},backend:r,attrs:{shape:g}}),r.disposeData(i.dataId)}else if(r.shouldExecuteOnCPU([o])){let e=r.readSync(o.dataId),i=tm(m,(0,s.f3b)(o.shape,o.dtype,e),S,b);t=r.makeTensorInfo(g,o.dtype,i.values)}else{let e=new ar(m),i=[{type:"int32",data:b},{type:"int32",data:S}],n=r.runWebGPUProgram(e,[o],o.dtype,i);t=eO({inputs:{x:n},backend:r,attrs:{shape:g}}),r.disposeData(n.dataId)}return t}},ao={kernelName:s._JP,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{separator:n,nGramWidths:o,leftPad:a,rightPad:s,padWidth:u,preserveShortSequences:l}=r,{data:h,dataSplits:d}=t,[p,c]=tg(i.readSync(h.dataId),i.readSync(d.dataId),n,o,a,s,u,l);return[i.makeTensorInfo([p.length],"string",p),i.makeTensorInfo(d.shape,"int32",c)]}},aa=eq({opType:sA.SUB,cpuKernelImpl:ty,supportsComplex:!0}),as={kernelName:s.Tr8,backendName:"webgpu",kernelFunc:aa},au=eY({opType:sT.TAN}),al={kernelName:s.sEM,backendName:"webgpu",kernelFunc:au},ah=eY({opType:sT.TANH}),ad={kernelName:s.MIZ,backendName:"webgpu",kernelFunc:ah},ap={kernelName:s.SIB,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{tensor:n,indices:o,updates:a}=t,{}=r,{sliceRank:u,numUpdates:l,sliceSize:h,strides:d,outputSize:p}=s.backend_util.calculateShapes(a,o,n.shape),c=[p/h,h];if(0===p)return i.makeTensorInfo(n.shape,o.dtype);let f=[],m=eO({inputs:{x:o},backend:i,attrs:{shape:[l,u]}});f.push(m);let g=eO({inputs:{x:a},backend:i,attrs:{shape:[l,h]}});f.push(g);let y=eO({inputs:{x:n},backend:i,attrs:{shape:c}});f.push(y);let x=o3({inputs:{x:y},backend:i,attrs:{reps:Array(c.length).fill(1)}}),v=new oT([l,h],u,m.shape.length,g.shape.length,d,c,n.dtype,!1),b=[{type:"int32",data:[u]},{type:"int32",data:d},{type:"int32",data:[s.D5U.sizeFromShape([l,h])]}],w=i.runWebGPUProgram(v,[g,m],y.dtype,b,x);f.push(w);let S=eO({inputs:{x:w},backend:i,attrs:{shape:n.shape}});return f.forEach(e=>i.disposeData(e.dataId)),S}};class ac{constructor(e){this.variableNames=["x","indices"],this.workgroupSize=[256,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.uniforms=`inputSize : i32, firstPass : i32, negativeInf : f32,
        dir : i32, inc : i32,`,this.shaderKey="swap"}getUserCode(){return`
        ${b("index")} {
          if (index < uniforms.size) {
            let outC = getCoordsFromIndex(index);
            let batch = outC[0];
            let elemIdx = outC[1];
            // We compare elements pair-wise within a group of size 2 * inc.
            // The comparing rule for each group alternates between ascending
            // and descending. Within each group, we compare each pair at
            // positions i and i+inc. To decide whether an element at position i
            // is x0 or x1, we mod it by 2 * inc, if the result is smaller than
            // inc, it is in the first half of the group, we denote it as x0,
            // otherwise we denote it as x1.
            // For example, as shown in the Bitonic top K paper referenced
            // above, Figure5(a) shows that element[1] is in the second half of
            // the group when group size is 2, but it is in the first half of
            // the group when group size is 4.
            let isFirstInPair = elemIdx % (2 * uniforms.inc) < uniforms.inc;
            var i = 0;
            if (isFirstInPair) {
              i = elemIdx;
            } else {
              i = elemIdx - uniforms.inc;
            }

            var i0 = 0;
            if (uniforms.firstPass == 1) {
              i0 = i;
            } else {
              i0 = i32(getIndices(batch, i));
            }

            var i1 = 0;
            if (uniforms.firstPass == 1) {
              i1 = i + uniforms.inc;
            } else {
              i1 = i32(getIndices(batch, i + uniforms.inc));
            }

            var x0 = f32(0.0);
            var x1 = f32(0.0);
            if (i0 < uniforms.inputSize) {
              x0 = getX(batch, i0);
            } else {
              x0 = uniforms.negativeInf;
            }
            if (i1 < uniforms.inputSize) {
              x1 = getX(batch, i1);
            } else {
              x1 = uniforms.negativeInf;
            }

            let reverse = elemIdx % (2 * uniforms.dir) >= uniforms.dir;
            let isGreater = x0 > x1 || (x0 == x1 && i1 > i0);
            if (reverse == isGreater) {
              // Elements in opposite order of direction
              let iTemp = i0;
              i0 = i1;
              i1 = iTemp;
            }
            if (isFirstInPair) {
              setOutputAtIndex(index, f32(i0));
            } else {
              setOutputAtIndex(index, f32(i1));
            }
          }
        }
      `}}class af{constructor(e){this.variableNames=["x","indices"],this.workgroupSize=[256,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.uniforms="inputSize : i32, firstPass : i32, k : i32,",this.shaderKey="merge"}getUserCode(){return`
        ${b("index")} {
          if (index < uniforms.size) {
            let outC = getCoordsFromIndex(index);
            let batch = outC[0];
            let elemIdx = outC[1];
            // The output size is half of the previous size.
            // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _
            // (k=4), we only need to output the indices at positions |, the
            // indices at positions _ can be thrown away, see Figure5(b) After
            // Phase 2 (Merge phase) in the Bitonic Top K paper referenced
            // above.
            // For example, the paper shows we only need to output the orange
            // bars. The output sequence should look like this | | | | | | | |.
            // Because the sequence is halved, to map the output index back to
            // the previous sequence to find the corresponding value, we need
            // to double the index. When we double the index, we basically
            // interpolate a position, so 2i looks like
            // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k
            // position of each 2k positions by - elemIdx % k. E.g. for output
            // at index 4,5,6,7, we want to get the corresponding element at
            // original index 8,9,10,11, for output at index 8,9,10,11,
            // we want to get the corresponding element at original index
            // 16,17,18,19, so on and so forth.

            var i = 0;
            if (elemIdx < uniforms.k) {
              i = elemIdx;
            } else {
              i = elemIdx * 2 - elemIdx % uniforms.k;
            }
            var i0 = 0;
            if (uniforms.firstPass == 1) {
              i0 = i;
            } else {
              i0 = i32(getIndices(batch, i));
            }
            var i1 = 0;
            if (uniforms.firstPass == 1) {
              i1 = i + uniforms.k;
            } else {
              i1 = i32(getIndices(batch, i + uniforms.k));
            }

            let x0 = getX(batch, i0);
            var x1 = f32(0.0);
            if (i1 < uniforms.inputSize) {
              x1 = getX(batch, i1);
            } else {
              x1 = x0;
            }

            if (x0 >= x1) {
              setOutputAtIndex(index, f32(i0));
            } else {
              setOutputAtIndex(index, f32(i1));
            }
          }
        }
      `}}function am(e,t){null!==t&&e.disposeData(t.dataId)}function ag(e){let t=1;for(;t<e;)t*=2;return t}let ay={kernelName:s.cWu,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{x:n}=t,{k:o,sorted:a}=r,u=n.shape,l=u[u.length-1];if(i.shouldExecuteOnCPU([n])){let[e,t]=tv(i.readSync(n.dataId),u,n.dtype,o,a);return[i.makeTensorInfo(e.shape,e.dtype,e.values),i.makeTensorInfo(t.shape,t.dtype,t.values)]}if(0===o)return u[u.length-1]=0,[i.makeTensorInfo(u,n.dtype,[]),i.makeTensorInfo(u,"int32",[])];if(1===l)return[n,eE({attrs:{shape:u,dtype:"int32",value:0},backend:i})];let h=s.D5U.sizeFromShape(u)/l,d=eO({inputs:{x:n},attrs:{shape:[h,l]},backend:i}),p=ag(o),c=ag(l),f=null,m=()=>null===f?[d,d]:[d,f],g=(e,t,r)=>{let n=m(),o=new ac(r),a=[{type:"int32",data:[l]},{type:"int32",data:[null===f?1:0]},{type:"float32",data:[Number.NEGATIVE_INFINITY]},{type:"int32",data:[e]},{type:"int32",data:[t]}],s=f;f=i.runWebGPUProgram(o,n,"int32",a),am(i,s)};for(let e=1;e<p;e*=2){let t=2*e;for(let i=e;i>=1;i/=2)g(t,i,[h,c])}for(let e=c;e>p;e/=2){let t=m(),r=new af([h,e/2]),n=[{type:"int32",data:[l]},{type:"int32",data:[null===f?1:0]},{type:"int32",data:[p]}],o=f;f=i.runWebGPUProgram(r,t,"int32",n),am(i,o);let a=p/2,s=2*a;for(let e=a;e>=1;e/=2)g(s,e,f.shape)}let y=f;f=il({inputs:{x:f},backend:i,attrs:{begin:0,size:[h,o]}}),am(i,y);let x=r6({inputs:{x:d,indices:f},backend:i,attrs:{axis:1,batchDims:1}});am(i,d);let v=u.slice(0,-1);v.push(o),y=f,f=eO({inputs:{x:f},attrs:{shape:v},backend:i}),am(i,y);let b=x;return x=eO({inputs:{x:x},attrs:{shape:v},backend:i}),am(i,b),[x,f]}};class ax{constructor(e){this.variableNames=["Image","Transforms"],this.uniforms="interpolationModeId : i32, fillModeId : i32, fillValue : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="transform"}getUserCode(){return`
          fn mapCoord(outCoord : f32, len : f32) -> f32{
            var inCoord = outCoord;
            if(uniforms.fillModeId == 2) {
              if (inCoord < 0.0) {
                if (len <= 1.0) {
                  inCoord = 0.0;
                } else {
                  let sz2 = 2.0 * len;
                  if (inCoord < sz2) {
                    inCoord = sz2 * f32(i32(f32(-inCoord / sz2))) +
                    inCoord;
                  }
                  if (inCoord < -len) {
                    inCoord = inCoord + sz2;
                  } else {
                    inCoord = -inCoord - 1.0;
                  }
                }
              } else if (inCoord > len - 1.0) {
                if (len <= 1.0) {
                  inCoord = 0.0;
                } else {
                  let sz2 = 2.0 * len;
                  inCoord = inCoord - sz2 * f32(i32(f32(inCoord / sz2)));
                  if (inCoord >= len) {
                    inCoord = sz2 - inCoord - 1.0;
                  }
                }
              }
              return clamp(inCoord, 0.0, len - 1.0);
            } else if (uniforms.fillModeId == 3) {
              if (inCoord < 0.0) {
                if (len <= 1.0) {
                  inCoord = 0.0;
                } else {
                  let sz = len - 1.0;
                  inCoord = inCoord + len * (f32(i32(f32(-inCoord / sz))) + 1.0);
                }
              } else if (inCoord > len - 1.0) {
                if (len <= 1.0) {
                  inCoord = 0.0;
                } else {
                  let sz = len - 1.0;
                  inCoord = inCoord - len * f32(i32(f32(inCoord / sz)));
                }
              }
              return clamp(inCoord, 0.0, len - 1.0);
            } else if (uniforms.fillModeId == 4) {
              return clamp(outCoord, 0.0, len - 1.0);
            }
            return outCoord;
          }
          fn readWithFillValue(batch : i32, coordY : i32, coordX : i32,
            channel : i32) -> f32 {
            var outputValue : f32;
            if (0 <= coordY && coordY < uniforms.imageShape[1] && 0 <= coordX && coordX < uniforms.imageShape[2]) {
                outputValue = getImage(batch, coordY, coordX, channel);
            } else {
              outputValue = uniforms.fillValue;
            }
            return outputValue;
          }

          ${b("index")} {
            if (index < uniforms.size) {
              let coords = getCoordsFromIndex(index);
              var outputValue : f32;
              let batch = coords[0];
              let x = coords[2];
              let y = coords[1];
              let channel = coords[3];
              let xf = f32(x);
              let yf = f32(y);
              let a1 = getTransforms(batch, 0);
              let a2 = getTransforms(batch, 1);
              let a3 = getTransforms(batch, 2);
              let b1 = getTransforms(batch, 3);
              let b2 = getTransforms(batch, 4);
              let b3 = getTransforms(batch, 5);
              let c1 = getTransforms(batch, 6);
              let c2 = getTransforms(batch, 7);
              let projection = c1 * xf + c2 * yf + 1.0;
              if (projection == 0.0) {
                outputValue = uniforms.fillValue;
              } else {
                let inX = (a1 * xf + a2 * yf + a3) / projection;
                let inY = (b1 * xf + b2 * yf + b3) / projection;
                let mapX = mapCoord(inX, f32(uniforms.imageShape[2]));
                let mapY = mapCoord(inY, f32(uniforms.imageShape[1]));

                if (uniforms.interpolationModeId == 1) {
                  let coordY = i32(round(mapY));
                  let coordX = i32(round(mapX));
                  outputValue = readWithFillValue(batch, coordY, coordX,
                    channel);
                } else {
                  let yFloor = floor(mapY);
                  let xFloor = floor(mapX);
                  let yCeil = yFloor + 1.0;
                  let xCeil = xFloor + 1.0;
                  let valueYFloor = (xCeil - mapX) *
                  readWithFillValue(batch, i32(yFloor), i32(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, i32(yFloor), i32(xCeil), channel);
                  let valueYCeil = (xCeil - mapX) *
                  readWithFillValue(batch, i32(yCeil), i32(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, i32(yCeil), i32(xCeil), channel);
                  outputValue = (yCeil - mapY) * valueYFloor +
                  (mapY - yFloor) * valueYCeil;
                }
              }
              setOutputAtIndex(index, outputValue);
            }
          }
        `}}let av={kernelName:s.wx7,backendName:"webgpu",kernelFunc:function(e){let t;let{inputs:i,backend:r,attrs:n}=e,{image:o,transforms:a}=i,{interpolation:s,fillMode:u,fillValue:l,outputShape:h}=n,[d,p,c,f]=o.shape,[m,g]=null!=h?h:[p,c],y=new ax([d,m,g,f]);switch(u){case"constant":default:t=1;break;case"reflect":t=2;break;case"wrap":t=3;break;case"nearest":t=4}let x=[{type:"int32",data:["nearest"===s?1:2]},{type:"int32",data:[t]},{type:"float32",data:[l]}];return r.runWebGPUProgram(y,[o,a],"float32",x)}},ab={kernelName:s.ToN,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{value:n}=t,{axis:o}=r;o<0&&(o+=n.shape.length);let a=n.shape.length,s=n.shape[o],u=Array(a-1),l=0;for(let e=0;e<a;e++)e!==o&&(u[l++]=n.shape[e]);let h=[],d=Array(a).fill(0),p=n.shape.slice();p[o]=1;let c=Array(s);for(let e=0;e<c.length;e++){d[o]=e;let t=il({inputs:{x:n},backend:i,attrs:{begin:d,size:p}}),r=eO({inputs:{x:t},backend:i,attrs:{shape:u}});c[e]=r,h.push(t)}return h.forEach(e=>i.disposeData(e.dataId)),c}};class aw{constructor(e,t,i){if(this.outputShape=[],this.variableNames=["x","segmentIds"],this.uniforms="numSegments : i32, xSize: i32,",this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=t,this.dispatchLayout=N(e),this.dispatch=A(this.dispatchLayout,e,this.workgroupSize),"float32"!==i&&"int32"!==i)throw Error(`UnsortedSegmentSum only supports float32 and int32
              types, does not support ${i} type.`);this.type=i,this.shaderKey="unsortedSegmentSum"}getUserCode(){return`
    ${b("index")} {
      if (index < uniforms.xSize) {
        let coords = getXCoordsFromIndex(index);
        let b = coords[0];
        let inCol = coords[1];

        let segmentId = i32(getSegmentIds(inCol));
        if (segmentId >= 0) {
          let flatIndex = b * uniforms.numSegments + segmentId % uniforms.numSegments;
          let value = getX(b, inCol);

          ${m("&result[flatIndex]","value",this.type)}
        }
      }
    }
  `}}for(let e of[eB,tC,tI,tP,tA,t_,tM,tB,tV,tH,tj,tK,tq,tZ,t0,t9,ie,ir,io,ia,id,ig,ix,iC,iI,i$,eX,i_,iE,iW,iX,iY,iQ,iZ,iJ,i2,i3,i5,re,rt,ri,rn,rd,rp,ru,rf,rg,rv,rb,rS,rP,rA,rT,rN,rz,rE,rO,rM,rV,eL,rG,rQ,rX,rY,r0,r2,r1,r4,r8,r9,nt,eG,ni,iz,nn,na,nu,nl,nd,nc,nm,nv,ny,nw,nC,nI,nA,n_,t5,nF,nz,nU,nD,nO,nM,t8,nB,nV,nG,nX,nZ,rk,nJ,n0,n2,ib,n3,n6,n8,oe,oi,or,on,oo,iS,os,ol,od,oc,eU,om,oy,ov,ow,oC,oI,oP,oA,o_,oF,oD,oL,oU,oB,oV,oG,ih,ai,an,ao,nQ,oX,oY,o0,o2,o5,o6,o7,o9,at,as,rR,al,ad,ap,o4,ay,av,tE,ab,{kernelName:s.Qvg,backendName:"webgpu",kernelFunc:function(e){let{inputs:t,backend:i,attrs:r}=e,{x:n,segmentIds:o}=t,{numSegments:a}=r,u=n.shape.length,l=[],h=0,d=s.backend_util.getAxesPermutation([h],u),p=n;null!=d&&(l.push(p=tD({inputs:{x:n},backend:i,attrs:{perm:d}})),h=s.backend_util.getInnerMostAxes(1,u)[0]);let c=s.backend_util.segment_util.computeOutShape(p.shape,h,a),f=s.D5U.sizeFromShape([p.shape[h]]),m=eO({inputs:{x:p},backend:i,attrs:{shape:[-1,f]}});l.push(m);let g=n.dtype,y=[m.shape[0],a],x=eE({backend:i,attrs:{shape:y,value:0,dtype:g}}),v=new aw(m.shape,y,g),b=[{type:"int32",data:[a]},{type:"int32",data:[s.D5U.sizeFromShape(m.shape)]}],w=i.runWebGPUProgram(v,[m,o],g,b,x),S=eO({inputs:{x:w},backend:i,attrs:{shape:c}});l.push(w);let C=S;return null!=d&&(l.push(S),C=tD({inputs:{x:C},backend:i,attrs:{perm:s.backend_util.getUndoAxesPermutation(d)}})),l.forEach(e=>i.disposeData(e.dataId)),C}},n5])(0,s.wCN)(e);var aS=function(e,t){return(aS=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(e,t)};function aC(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function i(){this.constructor=e}aS(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}var ak=function(){return(ak=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function aI(e,t,i,r){return new(i||(i=Promise))(function(n,o){function a(e){try{u(r.next(e))}catch(e){o(e)}}function s(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?n(e.value):((t=e.value)instanceof i?t:new i(function(e){e(t)})).then(a,s)}u((r=r.apply(e,t||[])).next())})}function aR(e,t){var i,r,n,o,a={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(i)throw TypeError("Generator is already executing.");for(;a;)try{if(i=1,r&&(n=2&o[0]?r.return:o[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,o[1])).done)return n;switch(r=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(n=(n=a.trys).length>0&&n[n.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){a.label=o[1];break}if(6===o[0]&&a.label<n[1]){a.label=n[1],n=o;break}if(n&&a.label<n[2]){a.label=n[2],a.ops.push(o);break}n[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{i=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function aP(e,t,i){if(i||2==arguments.length)for(var r,n=0,o=t.length;n<o;n++)!r&&n in t||(r||(r=Array.prototype.slice.call(t,0,n)),r[n]=t[n]);return e.concat(r||Array.prototype.slice.call(t))}var a$=["nose","left_eye","right_eye","left_ear","right_ear","left_shoulder","right_shoulder","left_elbow","right_elbow","left_wrist","right_wrist","left_hip","right_hip","left_knee","right_knee","left_ankle","right_ankle"],aA=["nose","left_eye_inner","left_eye","left_eye_outer","right_eye_inner","right_eye","right_eye_outer","left_ear","right_ear","mouth_left","mouth_right","left_shoulder","right_shoulder","left_elbow","right_elbow","left_wrist","right_wrist","left_pinky","right_pinky","left_index","right_index","left_thumb","right_thumb","left_hip","right_hip","left_knee","right_knee","left_ankle","right_ankle","left_heel","right_heel","left_foot_index","right_foot_index"],aT={left:[1,2,3,7,9,11,13,15,17,19,21,23,25,27,29,31],right:[4,5,6,8,10,12,14,16,18,20,22,24,26,28,30,32],middle:[0]},a_={left:[1,3,5,7,9,11,13,15],right:[2,4,6,8,10,12,14,16],middle:[0]},aN=[[0,1],[0,2],[1,3],[2,4],[5,6],[5,7],[5,11],[6,8],[6,12],[7,9],[8,10],[11,12],[11,13],[12,14],[13,15],[14,16]],aF=[[0,1],[0,4],[1,2],[2,3],[3,7],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[11,23],[12,14],[14,16],[12,24],[13,15],[15,17],[16,18],[16,20],[15,17],[15,19],[15,21],[16,22],[17,19],[18,20],[23,25],[23,24],[24,26],[25,27],[26,28],[27,29],[28,30],[27,31],[28,32],[29,31],[30,32]];function az(e){return e instanceof SVGAnimatedLength?e.baseVal.value:e}function aD(e){return aI(this,void 0,void 0,function(){var t,i;return aR(this,function(r){switch(r.label){case 0:return t=document.createElement("canvas"),e instanceof s.esB?[4,s.Xhn.toPixels(e,t)]:[3,2];case 1:return r.sent(),[3,3];case 2:t.width=az(e.width),t.height=az(e.height),i=t.getContext("2d"),e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0),r.label=3;case 3:return[2,t]}})})}function aE(e){return aI(this,void 0,void 0,function(){var t,i,r,n,o,a;return aR(this,function(u){switch(u.label){case 0:return e instanceof s.esB?(i=(t=e.shape.slice(0,2))[0],r=t[1],n=ImageData.bind,[4,s.Xhn.toPixels(e)]):[3,2];case 1:return[2,new(n.apply(ImageData,[void 0,u.sent(),r,i]))];case 2:return a=(o=document.createElement("canvas")).getContext("2d"),o.width=az(e.width),o.height=az(e.height),a.drawImage(e,0,0),[2,a.getImageData(0,0,o.width,o.height)]}})})}function aL(e){if(e<0||e>=256)throw Error("Mask value must be in range [0, 255] but got ".concat(e));if(!Number.isInteger(e))throw Error("Mask value must be an integer but got ".concat(e))}var aO={runtime:"mediapipe",enableSmoothing:!0,enableSegmentation:!1,smoothSegmentation:!0,modelType:"full"},aU=function(){function e(e){this.mask=e}return e.prototype.toCanvasImageSource=function(){return aI(this,void 0,void 0,function(){return aR(this,function(e){return[2,this.mask]})})},e.prototype.toImageData=function(){return aI(this,void 0,void 0,function(){return aR(this,function(e){return[2,aE(this.mask)]})})},e.prototype.toTensor=function(){return aI(this,void 0,void 0,function(){return aR(this,function(e){return[2,function(e){return aI(this,void 0,void 0,function(){var t,i;return aR(this,function(r){switch(r.label){case 0:return e instanceof SVGImageElement||e instanceof OffscreenCanvas?[4,aD(e)]:[3,2];case 1:return i=r.sent(),[3,3];case 2:i=e,r.label=3;case 3:return t=i,[2,s.Xhn.fromPixels(t,4)]}})})}(this.mask)]})})},e.prototype.getUnderlyingType=function(){return"canvasimagesource"},e}();function aM(e){return aL(e),"person"}var aB=function(){function e(e){var t,i=this;switch(this.width=0,this.height=0,this.selfieMode=!1,this.poseSolution=new a.Pose({locateFile:function(t,i){if(e.solutionPath){var r=e.solutionPath.replace(/\/+$/,"");return"".concat(r,"/").concat(t)}return"".concat(i,"/").concat(t)}}),e.modelType){case"lite":t=0;break;case"heavy":t=2;break;default:t=1}this.poseSolution.setOptions({modelComplexity:t,smoothLandmarks:e.enableSmoothing,enableSegmentation:e.enableSegmentation,smoothSegmentation:e.smoothSegmentation,selfieMode:this.selfieMode}),this.poseSolution.onResults(function(e){if(i.height=e.image.height,i.width=e.image.width,null==e.poseLandmarks)i.poses=[];else{var t=i.translateOutput(e.poseLandmarks,e.poseWorldLandmarks);e.segmentationMask&&(t.segmentation={maskValueToLabel:aM,mask:new aU(e.segmentationMask)}),i.poses=[t]}})}return e.prototype.translateOutput=function(e,t){var i=this,r={keypoints:e.map(function(e,t){return{x:e.x*i.width,y:e.y*i.height,z:e.z,score:e.visibility,name:aA[t]}})};return null!=t&&(r.keypoints3D=t.map(function(e,t){return{x:e.x,y:e.y,z:e.z,score:e.visibility,name:aA[t]}})),r},e.prototype.estimatePoses=function(e,t,i){return aI(this,void 0,void 0,function(){var r,n;return aR(this,function(o){switch(o.label){case 0:return t&&t.flipHorizontal&&t.flipHorizontal!==this.selfieMode&&(this.selfieMode=t.flipHorizontal,this.poseSolution.setOptions({selfieMode:this.selfieMode})),e instanceof s.esB?(n=ImageData.bind,[4,s.Xhn.toPixels(e)]):[3,2];case 1:return r=new(n.apply(ImageData,[void 0,o.sent(),e.shape[1],e.shape[0]])),[3,3];case 2:r=e,o.label=3;case 3:return e=r,[4,this.poseSolution.send({image:e},i)];case 4:return o.sent(),[2,this.poses]}})})},e.prototype.dispose=function(){this.poseSolution.close()},e.prototype.reset=function(){this.poseSolution.reset()},e.prototype.initialize=function(){return this.poseSolution.initialize()},e}();function aW(e){return e instanceof s.esB?{height:e.shape[0],width:e.shape[1]}:{height:e.height,width:e.width}}function aV(e){return e-2*Math.PI*Math.floor((e+Math.PI)/(2*Math.PI))}function aH(e){return e instanceof s.esB?e:s.Xhn.fromPixels(e)}function aG(e,t,i){return aj(i,"inputResolution"),[1/i.width*e[0][0]*t.width,1/i.height*e[0][1]*t.width,e[0][3]*t.width,1/i.width*e[1][0]*t.height,1/i.height*e[1][1]*t.height,e[1][3]*t.height,0,0]}function aj(e,t){s.D5U.assert(0!==e.width,function(){return"".concat(t," width cannot be 0.")}),s.D5U.assert(0!==e.height,function(){return"".concat(t," height cannot be 0.")})}function aX(e,t,i){var r,n,o,a,s,u,l,h=i.rotationVectorStartKeypointIndex,d=i.rotationVectorEndKeypointIndex,p=e.locationData,c=p.relativeKeypoints[h].x*t.width,f=p.relativeKeypoints[h].y*t.height,m=p.relativeKeypoints[d].x*t.width,g=p.relativeKeypoints[d].y*t.height,y=2*Math.sqrt((m-c)*(m-c)+(g-f)*(g-f)),x=(n=e.locationData,o=i.rotationVectorStartKeypointIndex,a=i.rotationVectorEndKeypointIndex,r=i.rotationVectorTargetAngle?i.rotationVectorTargetAngle:Math.PI*i.rotationVectorTargetAngleDegree/180,s=n.relativeKeypoints[o].x*t.width,u=n.relativeKeypoints[o].y*t.height,l=n.relativeKeypoints[a].x*t.width,aV(r-Math.atan2(-(n.relativeKeypoints[a].y*t.height-u),l-s)));return{xCenter:c/t.width,yCenter:f/t.height,width:y/t.width,height:y/t.height,rotation:x}}function aK(e){if(16!==e.length)throw Error("Array length must be 16 but got ".concat(e.length));return[[e[0],e[1],e[2],e[3]],[e[4],e[5],e[6],e[7]],[e[8],e[9],e[10],e[11]],[e[12],e[13],e[14],e[15]]]}function aY(e,t,i,r,n,o,a){return e[t][n]*(e[i][o]*e[r][a]-e[i][a]*e[r][o])}function aq(e,t,i){var r=(t+1)%4,n=(t+2)%4,o=(t+3)%4,a=(i+1)%4,s=(i+2)%4,u=(i+3)%4;return aY(e,r,n,o,a,s,u)+aY(e,n,o,r,a,s,u)+aY(e,o,r,n,a,s,u)}function aQ(e,t,i){void 0===i&&(i={ignoreRotation:!1});for(var r=[],n=0;n<e.length;n++){var o=e[n],a=o.x-.5,s=o.y-.5,u=i.ignoreRotation?0:t.rotation,l=Math.cos(u)*a-Math.sin(u)*s,h=Math.sin(u)*a+Math.cos(u)*s;l=l*t.width+t.xCenter,h=h*t.height+t.yCenter;var d=o.z*t.width,p=ak({},o);p.x=l,p.y=h,p.z=d,r.push(p)}return r}function aZ(e,t){var i,r,n,o=(i=0,r=t[0],{scale:n=(t[1]-r)/255,offset:r-0*n});return(0,s.lub)(function(){return(0,s.IHx)((0,s.dC7)(e,o.scale),o.offset)})}function aJ(e,t,i){var r,n,o,a,u,l,h,d,p,c,f,m=t.outputTensorSize,g=t.keepAspectRatio,y=t.borderMode,x=t.outputTensorFloatRange,v=aW(e),b=i?{xCenter:i.xCenter*v.width,yCenter:i.yCenter*v.height,width:i.width*v.width,height:i.height*v.height,rotation:i.rotation}:{xCenter:.5*v.width,yCenter:.5*v.height,width:v.width,height:v.height,rotation:0},w=function(e,t,i){if(void 0===i&&(i=!1),!i)return{top:0,left:0,right:0,bottom:0};var r=t.height,n=t.width;aj(t,"targetSize"),aj(e,"roi");var o,a,s=r/n,u=e.height/e.width,l=0,h=0;return s>u?(o=e.width,a=e.width*s,h=(1-u/s)/2):(o=e.height/s,a=e.height,l=(1-s/u)/2),e.width=o,e.height=a,{top:h,left:l,right:l,bottom:h}}(b,m,g),S=(r=v.width,n=v.height,o=b.width,a=b.height,u=Math.cos(b.rotation),l=Math.sin(b.rotation),h=b.xCenter,d=b.yCenter,p=1/r,c=1/n,(f=Array(16))[0]=o*u*1*p,f[1]=-a*l*p,f[2]=0,f[3]=(-.5*o*u*1+.5*a*l+h)*p,f[4]=o*l*1*c,f[5]=a*u*c,f[6]=0,f[7]=(-.5*a*u-.5*o*l*1+d)*c,f[8]=0,f[9]=0,f[10]=o*p,f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,aK(f));return{imageTensor:(0,s.lub)(function(){var t=aH(e),i=(0,s.odF)(aG(S,v,m),[1,8]),r=s.image.transform((0,s.dt4)((0,s.pju)(t,"float32")),i,"bilinear","zero"===y?"constant":"nearest",0,[m.height,m.width]);return null!=x?aZ(r,x):r}),padding:w,transformationMatrix:S}}function a0(e,t,i,r){return 1===r?.5*(e+t):e+(t-e)*i/(r-1)}function a2(e){return null!=e&&null!=e.currentTime}function a1(e){for(var t={locationData:{relativeKeypoints:[]}},i=Number.MAX_SAFE_INTEGER,r=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER,o=Number.MIN_SAFE_INTEGER,a=0;a<e.length;++a){var s=e[a];i=Math.min(i,s.x),r=Math.max(r,s.x),n=Math.min(n,s.y),o=Math.max(o,s.y),t.locationData.relativeKeypoints.push({x:s.x,y:s.y})}return t.locationData.relativeBoundingBox={xMin:i,yMin:n,xMax:r,yMax:o,width:r-i,height:o-n},t}function a3(e,t){return e.map(function(e){var i=ak(ak({},e),{x:e.x*t.width,y:e.y*t.height});return null!=e.z&&(i.z=e.z*t.width),i})}function a4(e,t){var i=t.left,r=t.top,n=t.left+t.right,o=t.top+t.bottom;return e.map(function(e){return ak(ak({},e),{x:(e.x-i)/(1-n),y:(e.y-r)/(1-o),z:e.z/(1-n)})})}function a5(e,t,i,r){return aI(this,void 0,void 0,function(){var n,o,a,s,u,l,h;return aR(this,function(d){switch(d.label){case 0:return i=i||t.flipHorizontally||!1,r=r||t.flipVertically||!1,n=e.size/t.numLandmarks,[4,e.data()];case 1:for(o=d.sent(),a=[],s=0;s<t.numLandmarks;++s){var p,c;u=s*n,(h={x:0,y:0}).x=i?t.inputImageWidth-o[u]:o[u],n>1&&(h.y=r?t.inputImageHeight-o[u+1]:o[u+1]),n>2&&(h.z=o[u+2]),n>3&&(h.score=(p=t.visibilityActivation,c=o[u+3],"none"===p?c:1/(1+Math.exp(-c)))),a.push(h)}for(l=0;l<a.length;++l)(h=a[l]).x=h.x/t.inputImageWidth,h.y=h.y/t.inputImageHeight,h.z=h.z/t.inputImageWidth/(t.normalizeZ||1);return[2,a]}})})}function a6(e,t,i){var r,n=e.width,o=e.height,a=e.rotation;if(null==i.rotation&&null==i.rotationDegree||(r=a,null!=i.rotation?r+=i.rotation:null!=i.rotationDegree&&(r+=Math.PI*i.rotationDegree/180),a=aV(r)),0===a)e.xCenter=e.xCenter+n*i.shiftX,e.yCenter=e.yCenter+o*i.shiftY;else{var s=(t.width*n*i.shiftX*Math.cos(a)-t.height*o*i.shiftY*Math.sin(a))/t.width,u=(t.width*n*i.shiftX*Math.sin(a)+t.height*o*i.shiftY*Math.cos(a))/t.height;e.xCenter=e.xCenter+s,e.yCenter=e.yCenter+u}if(i.squareLong){var l=Math.max(n*t.width,o*t.height);n=l/t.width,o=l/t.height}else if(i.squareShort){var h=Math.min(n*t.width,o*t.height);n=h/t.width,o=h/t.height}return e.width=n*i.scaleX,e.height=o*i.scaleY,e}var a8=function(){function e(e){this.alpha=e,this.initialized=!1}return e.prototype.apply=function(e,t){var i;return this.initialized?i=null==t?this.storedValue+this.alpha*(e-this.storedValue):this.storedValue+this.alpha*t*Math.asinh((e-this.storedValue)/t):(i=e,this.initialized=!0),this.rawValue=e,this.storedValue=i,i},e.prototype.applyWithAlpha=function(e,t,i){return this.alpha=t,this.apply(e,i)},e.prototype.hasLastRawValue=function(){return this.initialized},e.prototype.lastRawValue=function(){return this.rawValue},e.prototype.reset=function(){this.initialized=!1},e}(),a7=function(){function e(e){this.frequency=e.frequency,this.minCutOff=e.minCutOff,this.beta=e.beta,this.thresholdCutOff=e.thresholdCutOff,this.thresholdBeta=e.thresholdBeta,this.derivateCutOff=e.derivateCutOff,this.x=new a8(this.getAlpha(this.minCutOff)),this.dx=new a8(this.getAlpha(this.derivateCutOff)),this.lastTimestamp=0}return e.prototype.apply=function(e,t,i){if(null==e)return e;var r=Math.trunc(t);if(this.lastTimestamp>=r)return e;0!==this.lastTimestamp&&0!==r&&(this.frequency=1/(1e-6*(r-this.lastTimestamp))),this.lastTimestamp=r;var n=this.x.hasLastRawValue()?(e-this.x.lastRawValue())*i*this.frequency:0,o=this.dx.applyWithAlpha(n,this.getAlpha(this.derivateCutOff)),a=this.minCutOff+this.beta*Math.abs(o),s=null!=this.thresholdCutOff?this.thresholdCutOff+this.thresholdBeta*Math.abs(o):null;return this.x.applyWithAlpha(e,this.getAlpha(a),s)},e.prototype.getAlpha=function(e){return 1/(1+this.frequency/(2*Math.PI*e))},e}(),a9=function(){function e(e){this.config=e}return e.prototype.apply=function(e,t,i){var r=this;if(null==e)return this.reset(),null;this.initializeFiltersIfEmpty(e);var n=1;if(!this.config.disableValueScaling){if(i<this.config.minAllowedObjectScale)return aP([],e,!0);n=1/i}return e.map(function(e,i){var o=ak(ak({},e),{x:r.xFilters[i].apply(e.x,t,n),y:r.yFilters[i].apply(e.y,t,n)});return null!=e.z&&(o.z=r.zFilters[i].apply(e.z,t,n)),o})},e.prototype.reset=function(){this.xFilters=null,this.yFilters=null,this.zFilters=null},e.prototype.initializeFiltersIfEmpty=function(e){var t=this;null!=this.xFilters&&this.xFilters.length===e.length||(this.xFilters=e.map(function(e){return new a7(t.config)}),this.yFilters=e.map(function(e){return new a7(t.config)}),this.zFilters=e.map(function(e){return new a7(t.config)}))},e}(),se=function(){function e(e){this.config=e,this.window=[],this.lowPassFilter=new a8(1),this.lastValue=0,this.lastValueScale=1,this.lastTimestamp=-1}return e.prototype.apply=function(e,t,i){if(null==e)return e;var r,n=Math.trunc(t);if(this.lastTimestamp>=n)return e;if(-1===this.lastTimestamp)r=1;else{for(var o=e*i-this.lastValue*this.lastValueScale,a=n-this.lastTimestamp,s=o,u=a,l=(1+this.window.length)*(1e6/30),h=0,d=this.window;h<d.length;h++){var p=d[h];if(u+p.duration>l)break;s+=p.distance,u+=p.duration}var c=s/(1e-6*u);r=1-1/(1+this.config.velocityScale*Math.abs(c)),this.window.unshift({distance:o,duration:a}),this.window.length>this.config.windowSize&&this.window.pop()}return this.lastValue=e,this.lastValueScale=i,this.lastTimestamp=n,this.lowPassFilter.applyWithAlpha(e,r)},e}(),st=function(){function e(e){this.config=e}return e.prototype.apply=function(e,t,i){var r=this;if(null==e)return this.reset(),null;var n=1;if(!this.config.disableValueScaling){if(i<this.config.minAllowedObjectScale)return aP([],e,!0);n=1/i}return this.initializeFiltersIfEmpty(e),e.map(function(e,i){var o=ak(ak({},e),{x:r.xFilters[i].apply(e.x,t,n),y:r.yFilters[i].apply(e.y,t,n)});return null!=e.z&&(o.z=r.zFilters[i].apply(e.z,t,n)),o})},e.prototype.reset=function(){this.xFilters=null,this.yFilters=null,this.zFilters=null},e.prototype.initializeFiltersIfEmpty=function(e){var t=this;null!=this.xFilters&&this.xFilters.length===e.length||(this.xFilters=e.map(function(e){return new se(t.config)}),this.yFilters=e.map(function(e){return new se(t.config)}),this.zFilters=e.map(function(e){return new se(t.config)}))},e}(),si=function(){function e(e){if(null!=e.velocityFilter)this.keypointsFilter=new st(e.velocityFilter);else{if(null==e.oneEuroFilter)throw Error("Either configure velocityFilter or oneEuroFilter, but got "+"".concat(e,"."));this.keypointsFilter=new a9(e.oneEuroFilter)}}return e.prototype.apply=function(e,t,i,r,n){if(void 0===r&&(r=!1),null==e)return this.keypointsFilter.reset(),null;var o=null!=n?(n.width*i.width+n.height*i.height)/2:1,a=r?a3(e,i):e,s=this.keypointsFilter.apply(a,t,o);return r?s.map(function(e){var t=ak(ak({},e),{x:e.x/i.width,y:e.y/i.height});return null!=e.z&&(e.z=e.z/i.width),t}):s},e}(),sr=function(){function e(e){this.alpha=e.alpha}return e.prototype.apply=function(e){var t=this;if(null==e)return this.visibilityFilters=null,null;null!=this.visibilityFilters&&this.visibilityFilters.length===e.length||(this.visibilityFilters=e.map(function(e){return new a8(t.alpha)}));for(var i=[],r=0;r<e.length;++r){var n=e[r],o=ak({},n);o.score=this.visibilityFilters[r].apply(n.score),i.push(o)}return i},e}(),sn={reduceBoxesInLowestlayer:!1,interpolatedScaleAspectRatio:1,featureMapHeight:[],featureMapWidth:[],numLayers:5,minScale:.1484375,maxScale:.75,inputSizeHeight:224,inputSizeWidth:224,anchorOffsetX:.5,anchorOffsetY:.5,strides:[8,16,32,32,32],aspectRatios:[1],fixedAnchorSize:!0},so={runtime:"tfjs",modelType:"full",enableSmoothing:!0,enableSegmentation:!1,smoothSegmentation:!0,detectorModelUrl:"https://tfhub.dev/mediapipe/tfjs-model/blazepose_3d/detector/1",landmarkModelUrl:"https://tfhub.dev/mediapipe/tfjs-model/blazepose_3d/landmark/full/2"},sa={maxPoses:1,flipHorizontal:!1},ss={applyExponentialOnBoxSize:!1,flipVertically:!1,ignoreClasses:[],numClasses:1,numBoxes:2254,numCoords:12,boxCoordOffset:0,keypointCoordOffset:4,numKeypoints:4,numValuesPerKeypoint:2,sigmoidScore:!0,scoreClippingThresh:100,reverseOutputOrder:!0,xScale:224,yScale:224,hScale:224,wScale:224,minScoreThresh:.5},su={shiftX:0,shiftY:0,scaleX:1.25,scaleY:1.25,squareLong:!0},sl={outputTensorSize:{width:224,height:224},keepAspectRatio:!0,outputTensorFloatRange:[-1,1],borderMode:"zero"},sh={outputTensorSize:{width:256,height:256},keepAspectRatio:!0,outputTensorFloatRange:[0,1],borderMode:"zero"},sd={numLandmarks:39,inputImageWidth:256,inputImageHeight:256,visibilityActivation:"sigmoid",flipHorizontally:!1,flipVertically:!1},sp={numLandmarks:39,inputImageWidth:1,inputImageHeight:1,visibilityActivation:"sigmoid",flipHorizontally:!1,flipVertically:!1},sc={kernelSize:7,minConfidenceToRefine:.5},sf={alpha:.1},sm={oneEuroFilter:{frequency:30,minCutOff:.05,beta:80,derivateCutOff:1,minAllowedObjectScale:1e-6}},sg={oneEuroFilter:{frequency:30,minCutOff:.01,beta:10,derivateCutOff:1,minAllowedObjectScale:1e-6}},sy={oneEuroFilter:{frequency:30,minCutOff:.1,beta:40,derivateCutOff:1,minAllowedObjectScale:1e-6,disableValueScaling:!0}},sx={activation:"none"},sv={combineWithPreviousRatio:.7},sb=function(){function e(e){this.mask=e}return e.prototype.toCanvasImageSource=function(){return aI(this,void 0,void 0,function(){return aR(this,function(e){return[2,aD(this.mask)]})})},e.prototype.toImageData=function(){return aI(this,void 0,void 0,function(){return aR(this,function(e){return[2,aE(this.mask)]})})},e.prototype.toTensor=function(){return aI(this,void 0,void 0,function(){return aR(this,function(e){return[2,this.mask]})})},e.prototype.getUnderlyingType=function(){return"tensor"},e}();function sw(e){return aL(e),"person"}var sS,sC,sk,sI,sR,sP,s$,sA,sT,s_,sN,sF,sz=function(){function e(e,t,i,r,n,o){this.detectorModel=e,this.landmarkModel=t,this.enableSmoothing=i,this.enableSegmentation=r,this.smoothSegmentation=n,this.modelType=o,this.regionOfInterest=null,this.prevFilteredSegmentationMask=null,this.anchors=function(e){null==e.reduceBoxesInLowestLayer&&(e.reduceBoxesInLowestLayer=!1),null==e.interpolatedScaleAspectRatio&&(e.interpolatedScaleAspectRatio=1),null==e.fixedAnchorSize&&(e.fixedAnchorSize=!1);for(var t=[],i=0;i<e.numLayers;){for(var r=[],n=[],o=[],a=[],s=i;s<e.strides.length&&e.strides[s]===e.strides[i];){var u=a0(e.minScale,e.maxScale,s,e.strides.length);if(0===s&&e.reduceBoxesInLowestLayer)o.push(1),o.push(2),o.push(.5),a.push(.1),a.push(u),a.push(u);else{for(var l=0;l<e.aspectRatios.length;++l)o.push(e.aspectRatios[l]),a.push(u);if(e.interpolatedScaleAspectRatio>0){var h=s===e.strides.length-1?1:a0(e.minScale,e.maxScale,s+1,e.strides.length);a.push(Math.sqrt(u*h)),o.push(e.interpolatedScaleAspectRatio)}}s++}for(var d=0;d<o.length;++d){var p=Math.sqrt(o[d]);r.push(a[d]/p),n.push(a[d]*p)}var c=0,f=0;if(e.featureMapHeight.length>0)c=e.featureMapHeight[i],f=e.featureMapWidth[i];else{var m=e.strides[i];c=Math.ceil(e.inputSizeHeight/m),f=Math.ceil(e.inputSizeWidth/m)}for(var g=0;g<c;++g)for(var y=0;y<f;++y)for(var x=0;x<r.length;++x){var v={xCenter:(y+e.anchorOffsetX)/f,yCenter:(g+e.anchorOffsetY)/c,width:0,height:0};e.fixedAnchorSize?(v.width=1,v.height=1):(v.width=n[x],v.height=r[x]),t.push(v)}i=s}return t}(sn);var a=(0,s.RRF)(this.anchors.map(function(e){return e.width})),u=(0,s.RRF)(this.anchors.map(function(e){return e.height})),l=(0,s.RRF)(this.anchors.map(function(e){return e.xCenter})),h=(0,s.RRF)(this.anchors.map(function(e){return e.yCenter}));this.anchorTensor={x:l,y:h,w:a,h:u},this.prevFilteredSegmentationMask=this.enableSegmentation?(0,s.odF)([],[0,0]):null}return e.prototype.estimatePoses=function(e,t,i){return aI(this,void 0,void 0,function(){var r,n,o,a,u,l,h,d,p,c,f,m,g,y,x,v,b,w,S,C,k,I,R;return aR(this,function(P){switch(P.label){case 0:return r=function(e){var t;if(null==(t=null==e?sa:ak({},e)).maxPoses&&(t.maxPoses=1),t.maxPoses<=0)throw Error("Invalid maxPoses ".concat(t.maxPoses,". Should be > 0."));if(t.maxPoses>1)throw Error("Multi-pose detection is not implemented yet. Please set maxPoses to 1.");return t}(t),null==e?(this.reset(),[2,[]]):(this.maxPoses=r.maxPoses,this.timestamp=null!=i?1e3*i:a2(e)?1e6*e.currentTime:null,n=aW(e),o=(0,s.lub)(function(){return(0,s.pju)(aH(e),"float32")}),null!=(a=this.regionOfInterest)?[3,2]:[4,this.detectPose(o)]);case 1:if(0===(u=P.sent()).length)return this.reset(),o.dispose(),[2,[]];l=u[0],a=this.poseDetectionToRoi(l,n),P.label=2;case 2:return[4,this.poseLandmarksByRoi(a,o)];case 3:return h=P.sent(),o.dispose(),null==h?(this.reset(),[2,[]]):(d=h.landmarks,p=h.auxiliaryLandmarks,c=h.poseScore,f=h.worldLandmarks,m=h.segmentationMask,y=(g=this.poseLandmarkFiltering(d,p,f,n)).actualLandmarksFiltered,x=g.auxiliaryLandmarksFiltered,v=g.actualWorldLandmarksFiltered,b=this.poseLandmarksToRoi(x,n),this.regionOfInterest=b,w=this.smoothSegmentation&&null!=m?this.poseSegmentationFiltering(m):m,null!=(S=null!=y?a3(y,n):null)&&S.forEach(function(e,t){e.name=aA[t]}),null!=(C=v)&&C.forEach(function(e,t){e.name=aA[t]}),k={score:c,keypoints:S,keypoints3D:C},null!==w&&(I=(0,s.lub)(function(){var e=(0,s.dt4)(w,2),t=(0,s.vku)(e,[[0,0],[0,0],[0,1]]);return(0,s.VdP)(t,[[0,0],[0,0],[0,2]],"symmetric")}),this.smoothSegmentation||(0,s.B90)(w),R={maskValueToLabel:sw,mask:new sb(I)},k.segmentation=R),[2,[k]])}})})},e.prototype.poseSegmentationFiltering=function(e){var t,i,r,n=this.prevFilteredSegmentationMask;return 0===n.size?this.prevFilteredSegmentationMask=e:(this.prevFilteredSegmentationMask="webgl"===(0,s.N_N)()?(t=sv.combineWithPreviousRatio.toFixed(2),i={variableNames:["prevMask","newMask"],outputShape:n.shape,userCode:"\n  void main() {\n      ivec2 coords = getOutputCoords();\n      int height = coords[0];\n      int width = coords[1];\n\n      float prevMaskValue = getPrevMask(height, width);\n      float newMaskValue = getNewMask(height, width);\n\n      /*\n      * Assume p := newMaskValue\n      * H(p) := 1 + (p * log(p) + (1-p) * log(1-p)) / log(2)\n      * uncertainty alpha(p) =\n      *   Clamp(1 - (1 - H(p)) * (1 - H(p)), 0, 1) [squaring the\n      * uncertainty]\n      *\n      * The following polynomial approximates uncertainty alpha as a\n      * function of (p + 0.5):\n      */\n      const float c1 = 5.68842;\n      const float c2 = -0.748699;\n      const float c3 = -57.8051;\n      const float c4 = 291.309;\n      const float c5 = -624.717;\n      float t = newMaskValue - 0.5;\n      float x = t * t;\n\n      float uncertainty =\n        1.0 - min(1.0, x * (c1 + x * (c2 + x * (c3 + x * (c4 + x * c5)))));\n\n      float outputValue = newMaskValue + (prevMaskValue - newMaskValue) *\n                             (uncertainty * ".concat(t,");\n\n      setOutput(outputValue);\n    }\n")},r=(0,s.y3$)(),(0,s.lub)(function(){var t=r.compileAndRun(i,[n,e]);return(0,s.SRH)().makeTensorFromDataId(t.dataId,t.shape,t.dtype)})):(0,s.lub)(function(){var t=(0,s.luU)(e,.5),i=(0,s.h62)(t),r=(0,s.luU)(1,(0,s.LTh)(1,(0,s.dC7)(i,(0,s.IHx)(5.68842,(0,s.dC7)(i,(0,s.IHx)(-.748699,(0,s.dC7)(i,(0,s.IHx)(-57.8051,(0,s.dC7)(i,(0,s.IHx)(291.309,(0,s.dC7)(i,-624.717)))))))))));return(0,s.IHx)(e,(0,s.dC7)((0,s.luU)(n,e),(0,s.dC7)(r,sv.combineWithPreviousRatio)))}),(0,s.B90)(e)),(0,s.B90)(n),this.prevFilteredSegmentationMask},e.prototype.dispose=function(){this.detectorModel.dispose(),this.landmarkModel.dispose(),(0,s.B90)([this.anchorTensor.x,this.anchorTensor.y,this.anchorTensor.w,this.anchorTensor.h,this.prevFilteredSegmentationMask])},e.prototype.reset=function(){this.regionOfInterest=null,this.enableSegmentation&&((0,s.B90)(this.prevFilteredSegmentationMask),this.prevFilteredSegmentationMask=(0,s.odF)([],[0,0])),this.visibilitySmoothingFilterActual=null,this.visibilitySmoothingFilterAuxiliary=null,this.landmarksSmoothingFilterActual=null,this.landmarksSmoothingFilterAuxiliary=null},e.prototype.detectPose=function(e){return aI(this,void 0,void 0,function(){var t,i,r,n,o,a,u,l,h;return aR(this,function(d){switch(d.label){case 0:var p;return i=(t=aJ(e,sl)).imageTensor,r=t.padding,p=n=this.detectorModel.predict(i),a=(o=(0,s.lub)(function(){var e=(0,s.lub)(function(){return[(0,s.tPi)(p,[0,0,0],[1,-1,1]),(0,s.tPi)(p,[0,0,1],[1,-1,-1])]}),t=e[0],i=e[1];return{boxes:(0,s.L9e)(i),logits:(0,s.L9e)(t)}})).boxes,[4,function(e,t,i){return aI(this,void 0,void 0,function(){var r,n,o,a;return aR(this,function(u){switch(u.label){case 0:var l;return r=e[0],l=e[1],n=(0,s.lub)(function(){i.reverseOutputOrder?(r=(0,s.L9e)((0,s.tPi)(l,[0,i.boxCoordOffset+0],[-1,1])),e=(0,s.L9e)((0,s.tPi)(l,[0,i.boxCoordOffset+1],[-1,1])),o=(0,s.L9e)((0,s.tPi)(l,[0,i.boxCoordOffset+2],[-1,1])),n=(0,s.L9e)((0,s.tPi)(l,[0,i.boxCoordOffset+3],[-1,1]))):(e=(0,s.L9e)((0,s.tPi)(l,[0,i.boxCoordOffset+0],[-1,1])),r=(0,s.L9e)((0,s.tPi)(l,[0,i.boxCoordOffset+1],[-1,1])),n=(0,s.L9e)((0,s.tPi)(l,[0,i.boxCoordOffset+2],[-1,1])),o=(0,s.L9e)((0,s.tPi)(l,[0,i.boxCoordOffset+3],[-1,1]))),r=(0,s.IHx)((0,s.dC7)((0,s.hiC)(r,i.xScale),t.w),t.x),e=(0,s.IHx)((0,s.dC7)((0,s.hiC)(e,i.yScale),t.h),t.y),i.applyExponentialOnBoxSize?(n=(0,s.dC7)((0,s.Qqt)((0,s.hiC)(n,i.hScale)),t.h),o=(0,s.dC7)((0,s.Qqt)((0,s.hiC)(o,i.wScale)),t.w)):(n=(0,s.dC7)((0,s.hiC)(n,i.hScale),t.h),o=(0,s.dC7)((0,s.hiC)(o,i.wScale),t.h));var e,r,n,o,a=(0,s.luU)(e,(0,s.hiC)(n,2)),u=(0,s.luU)(r,(0,s.hiC)(o,2)),h=(0,s.IHx)(e,(0,s.hiC)(n,2)),d=(0,s.IHx)(r,(0,s.hiC)(o,2)),p=(0,s.zoF)([(0,s.XLQ)(a,[i.numBoxes,1]),(0,s.XLQ)(u,[i.numBoxes,1]),(0,s.XLQ)(h,[i.numBoxes,1]),(0,s.XLQ)(d,[i.numBoxes,1])],1);if(i.numKeypoints)for(var c=0;c<i.numKeypoints;++c){var f=i.keypointCoordOffset+c*i.numValuesPerKeypoint,m=void 0,g=void 0;i.reverseOutputOrder?(m=(0,s.L9e)((0,s.tPi)(l,[0,f],[-1,1])),g=(0,s.L9e)((0,s.tPi)(l,[0,f+1],[-1,1]))):(g=(0,s.L9e)((0,s.tPi)(l,[0,f],[-1,1])),m=(0,s.L9e)((0,s.tPi)(l,[0,f+1],[-1,1])));var y=(0,s.IHx)((0,s.dC7)((0,s.hiC)(m,i.xScale),t.w),t.x),x=(0,s.IHx)((0,s.dC7)((0,s.hiC)(g,i.yScale),t.h),t.y);p=(0,s.zoF)([p,(0,s.XLQ)(y,[i.numBoxes,1]),(0,s.XLQ)(x,[i.numBoxes,1])],1)}return p}),o=(0,s.lub)(function(){var e=r;return i.sigmoidScore?(null!=i.scoreClippingThresh&&(e=(0,s.iUl)(r,-i.scoreClippingThresh,i.scoreClippingThresh)),e=(0,s.XD2)(e)):e}),[4,function(e,t,i){return aI(this,void 0,void 0,function(){var r,n,o,a,s,u,l,h,d,p,c,f;return aR(this,function(m){switch(m.label){case 0:return r=[],[4,e.data()];case 1:return n=m.sent(),[4,t.data()];case 2:for(o=m.sent(),a=0;a<i.numBoxes;++a){var g,y,x,v,b,w;if(!(null!=i.minScoreThresh&&o[a]<i.minScoreThresh||(l=(g=n[(s=a*i.numCoords)+0],y=n[s+1],x=n[s+2],v=n[s+3],b=o[a],w=i.flipVertically,u={score:[b],ind:a,locationData:{relativeBoundingBox:{xMin:y,yMin:w?1-x:g,xMax:v,yMax:w?1-g:x,width:v-y,height:x-g}}}).locationData.relativeBoundingBox).width<0||l.height<0)){if(i.numKeypoints>0)for((h=u.locationData).relativeKeypoints=[],d=i.numKeypoints*i.numValuesPerKeypoint,p=0;p<d;p+=i.numValuesPerKeypoint)f={x:n[(c=s+i.keypointCoordOffset+p)+0],y:i.flipVertically?1-n[c+1]:n[c+1]},h.relativeKeypoints.push(f);r.push(u)}}return[2,r]}})})}(n,o,i)];case 1:return a=u.sent(),(0,s.B90)([n,o]),[2,a]}})})}([u=o.logits,a],this.anchorTensor,ss)];case 1:return 0===(l=d.sent()).length?((0,s.B90)([i,n,u,a]),[2,l]):[4,function(e,t,i,r){return aI(this,void 0,void 0,function(){var i,r,n,o,a;return aR(this,function(u){switch(u.label){case 0:return e.sort(function(e,t){return Math.max.apply(Math,t.score)-Math.max.apply(Math,e.score)}),i=(0,s.odF)(e.map(function(e){return[e.locationData.relativeBoundingBox.yMin,e.locationData.relativeBoundingBox.xMin,e.locationData.relativeBoundingBox.yMax,e.locationData.relativeBoundingBox.xMax]})),r=(0,s.RRF)(e.map(function(e){return e.score[0]})),[4,s.image.nonMaxSuppressionAsync(i,r,t,.3)];case 1:return[4,(n=u.sent()).array()];case 2:return o=u.sent(),a=e.filter(function(e,t){return o.indexOf(t)>-1}),(0,s.B90)([i,r,n]),[2,a]}})})}(l,this.maxPoses,0)];case 2:return h=function(e,t){void 0===e&&(e=[]);for(var i=t.left,r=t.top,n=t.left+t.right,o=t.top+t.bottom,a=0;a<e.length;a++){var s=e[a],u=s.locationData.relativeBoundingBox,l=(u.xMin-i)/(1-n),h=(u.yMin-r)/(1-o),d=u.width/(1-n),p=u.height/(1-o);u.xMin=l,u.yMin=h,u.width=d,u.height=p,u.xMax=l+d,u.yMax=h+p;var c=s.locationData.relativeKeypoints;c&&c.forEach(function(e){var t=(e.x-i)/(1-n),a=(e.y-r)/(1-o);e.x=t,e.y=a})}return e}(d.sent(),r),(0,s.B90)([i,n,u,a]),[2,h]}})})},e.prototype.poseDetectionToRoi=function(e,t){return a6(aX(e,t,{rotationVectorEndKeypointIndex:1,rotationVectorStartKeypointIndex:0,rotationVectorTargetAngleDegree:90}),t,su)},e.prototype.poseLandmarksByRoi=function(e,t){return aI(this,void 0,void 0,function(){var i,r,n,o,a,u,l,h,d,p,c,f,m,g;return aR(this,function(y){switch(y.label){case 0:if(i=aW(t),n=(r=aJ(t,sh,e)).imageTensor,o=r.padding,a=r.transformationMatrix,"lite"!==this.modelType&&"full"!==this.modelType&&"heavy"!==this.modelType)throw Error("Model type must be one of lite, full or heavy,"+"but got ".concat(this.modelType));return u=["ld_3d","output_poseflag","activation_heatmap","world_3d"],this.enableSegmentation&&u.push("activation_segmentation"),l=this.landmarkModel.execute(n,u),[4,this.tensorsToPoseLandmarksAndSegmentation(l)];case 1:return null==(h=y.sent())?((0,s.B90)(l),(0,s.B90)(n),[2,null]):(d=h.landmarks,p=h.auxiliaryLandmarks,c=h.poseScore,f=h.worldLandmarks,m=h.segmentationMask,[4,this.poseLandmarksAndSegmentationInverseProjection(i,e,o,a,d,p,f,m)]);case 2:return g=y.sent(),(0,s.B90)(l),(0,s.B90)(n),[2,ak({poseScore:c},g)]}})})},e.prototype.poseLandmarksAndSegmentationInverseProjection=function(e,t,i,r,n,o,a,u){return aI(this,void 0,void 0,function(){var l,h,d,p,c,f;return aR(this,function(m){return l=a4(n,i),h=a4(o,i),d=aQ(l,t),p=aQ(h,t),c=function(e,t){for(var i=[],r=0;r<e.length;r++){var n=e[r],o=n.x,a=n.y,s=t.rotation,u=Math.cos(s)*o-Math.sin(s)*a,l=Math.sin(s)*o+Math.cos(s)*a,h=ak({},n);h.x=u,h.y=l,i.push(h)}return i}(a,t),f=null,this.enableSegmentation&&(f=(0,s.lub)(function(){var t=u.shape,i=t[0],n=t[1],o=function(e){var t=aK(Array(16).fill(0));t[0][0]=aq(e,0,0),t[1][0]=-aq(e,0,1),t[2][0]=aq(e,0,2),t[3][0]=-aq(e,0,3),t[0][2]=aq(e,2,0),t[1][2]=-aq(e,2,1),t[2][2]=aq(e,2,2),t[3][2]=-aq(e,2,3),t[0][1]=-aq(e,1,0),t[1][1]=aq(e,1,1),t[2][1]=-aq(e,1,2),t[3][1]=aq(e,1,3),t[0][3]=-aq(e,3,0),t[1][3]=aq(e,3,1),t[2][3]=-aq(e,3,2),t[3][3]=aq(e,3,3);for(var i=e[0][0]*t[0][0]+e[1][0]*t[0][1]+e[2][0]*t[0][2]+e[3][0]*t[0][3],r=0;r<t.length;r++)for(var n=0;n<t.length;n++)t[r][n]/=i;return t}(r),a=(0,s.odF)(aG(o,{width:n,height:i},e),[1,8]),l=[1,i,n,1];return(0,s.L9e)(s.image.transform((0,s.XLQ)(u,l),a,"bilinear","constant",0,[e.height,e.width]),[0,3])}),(0,s.B90)(u)),[2,{landmarks:d,auxiliaryLandmarks:p,worldLandmarks:c,segmentationMask:f}]})})},e.prototype.tensorsToPoseLandmarksAndSegmentation=function(e){return aI(this,void 0,void 0,function(){var t,i,r,n,o,a,u,l,h,d,p,c;return aR(this,function(f){switch(f.label){case 0:return t=e[0],i=e[1],r=e[2],n=e[3],o=this.enableSegmentation?e[4]:null,[4,i.data()];case 1:return(a=f.sent()[0])<.5?[2,null]:[4,a5(t,sd)];case 2:return[4,function(e,t,i){return aI(this,void 0,void 0,function(){var r,n,o,a,u,l,h,d,p,c,f,m,g,y,x,v,b,w,S,C,k,I,R,P;return aR(this,function($){switch($.label){case 0:if(o=(n=(r=(0,s.L9e)(t,[0])).shape)[0],a=n[1],u=n[2],e.length!==u)throw Error("Expected heatmap to have same number of channels as the number of landmarks. But got landmarks length: "+"".concat(e.length,", heatmap length: ").concat(u));return l=[],[4,r.buffer()];case 1:for(h=$.sent(),d=0;d<e.length;d++)if(p=e[d],c=ak({},p),l.push(c),f=Math.trunc(c.x*a),m=Math.trunc(c.y*o),!(f<0||f>=a||m<0||f>=o)){for(y=Math.max(0,f-(g=Math.trunc((i.kernelSize-1)/2))),x=Math.min(a,f+g+1),v=Math.max(0,m-g),b=Math.min(o,m+g+1),w=0,S=0,C=0,k=0,I=v;I<b;++I)for(R=y;R<x;++R)P=h.get(I,R,d),w+=P,k=Math.max(k,P),S+=R*P,C+=I*P;k>=i.minConfidenceToRefine&&w>0&&(c.x=S/a/w,c.y=C/o/w)}return r.dispose(),[2,l]}})})}(f.sent(),r,sc)];case 3:return l=(u=f.sent()).slice(0,33),h=u.slice(33,35),[4,a5(n,sp)];case 4:var m;return d=f.sent().slice(0,33),p=function(e,t,i){void 0===i&&(i=!0);for(var r=[],n=0;n<e.length;n++){var o=ak({},t[n]);i&&(o.score=e[n].score),r.push(o)}return r}(l,d,!0),c=this.enableSegmentation?(m=o,(0,s.lub)(function(){var e=(0,s.L9e)(m,[0]),t=e.shape[2];if(1===t){var i=e;switch(sx.activation){case"none":break;case"sigmoid":i=(0,s.XD2)(i);break;case"softmax":throw Error("Softmax activation requires two channels.");default:throw Error("Activation not supported (".concat(sx.activation,")"))}var r=i;return(0,s.L9e)(r,[2])}throw Error("Unsupported number of tensor channels ".concat(t))})):null,[2,{landmarks:l,auxiliaryLandmarks:h,poseScore:a,worldLandmarks:p,segmentationMask:c}]}})})},e.prototype.poseLandmarksToRoi=function(e,t){return a6(aX(a1(e),t,{rotationVectorStartKeypointIndex:0,rotationVectorEndKeypointIndex:1,rotationVectorTargetAngleDegree:90}),t,su)},e.prototype.poseLandmarkFiltering=function(e,t,i,r){var n,o,a;if(null!=this.timestamp&&this.enableSmoothing){var s=aX(a1(t),r,{rotationVectorEndKeypointIndex:0,rotationVectorStartKeypointIndex:1,rotationVectorTargetAngleDegree:90});null==this.visibilitySmoothingFilterActual&&(this.visibilitySmoothingFilterActual=new sr(sf)),n=this.visibilitySmoothingFilterActual.apply(e),null==this.visibilitySmoothingFilterAuxiliary&&(this.visibilitySmoothingFilterAuxiliary=new sr(sf)),o=this.visibilitySmoothingFilterAuxiliary.apply(t),a=this.visibilitySmoothingFilterActual.apply(i),null==this.landmarksSmoothingFilterActual&&(this.landmarksSmoothingFilterActual=new si(sm)),n=this.landmarksSmoothingFilterActual.apply(n,this.timestamp,r,!0,s),null==this.landmarksSmoothingFilterAuxiliary&&(this.landmarksSmoothingFilterAuxiliary=new si(sg)),o=this.landmarksSmoothingFilterAuxiliary.apply(o,this.timestamp,r,!0,s),null==this.worldLandmarksSmoothingFilterActual&&(this.worldLandmarksSmoothingFilterActual=new si(sy)),a=this.worldLandmarksSmoothingFilterActual.apply(i,this.timestamp)}else n=e,o=t,a=i;return{actualLandmarksFiltered:n,auxiliaryLandmarksFiltered:o,actualWorldLandmarksFiltered:a}},e}(),sD=function(){function e(e){!function(e){if(e.maxTracks<1)throw Error("Must specify 'maxTracks' to be at least 1, but "+"encountered ".concat(e.maxTracks));if(e.maxAge<=0)throw Error("Must specify 'maxAge' to be positive, but "+"encountered ".concat(e.maxAge));if(void 0!==e.keypointTrackerParams){if(e.keypointTrackerParams.keypointConfidenceThreshold<0||e.keypointTrackerParams.keypointConfidenceThreshold>1)throw Error("Must specify 'keypointConfidenceThreshold' to be in the range [0, 1], but encountered "+"".concat(e.keypointTrackerParams.keypointConfidenceThreshold));if(e.keypointTrackerParams.minNumberOfKeypoints<1)throw Error("Must specify 'minNumberOfKeypoints' to be at least 1, but "+"encountered ".concat(e.keypointTrackerParams.minNumberOfKeypoints));for(var t=0,i=e.keypointTrackerParams.keypointFalloff;t<i.length;t++){var r=i[t];if(r<=0)throw Error("Must specify each keypoint falloff parameterto be positive "+"but encountered ".concat(r))}}}(e),this.tracks=[],this.maxTracks=e.maxTracks,this.maxAge=1e3*e.maxAge,this.minSimilarity=e.minSimilarity,this.nextID=1}return e.prototype.apply=function(e,t){this.filterOldTracks(t);var i=this.computeSimilarity(e);return this.assignTracks(e,i,t),this.updateTracks(t),e},e.prototype.getTracks=function(){return this.tracks.slice()},e.prototype.getTrackIDs=function(){return new Set(this.tracks.map(function(e){return e.id}))},e.prototype.filterOldTracks=function(e){var t=this;this.tracks=this.tracks.filter(function(i){return e-i.lastTimestamp<=t.maxAge})},e.prototype.assignTracks=function(e,t,i){for(var r=Array.from(Array(t[0].length).keys()),n=[],o=0,a=Array.from(Array(e.length).keys());o<a.length;o++){var s=a[o];if(0!==r.length){for(var u=-1,l=-1,h=0;h<r.length;h++){var d=r[h],p=t[s][d];p>=this.minSimilarity&&p>l&&(u=d,l=p)}if(u>=0){var c=this.tracks[u];c=Object.assign(c,this.createTrack(e[s],i,c.id)),e[s].id=c.id;var f=r.indexOf(u);r.splice(f,1)}else n.push(s)}else n.push(s)}for(var m=0;m<n.length;m++){s=n[m];var g=this.createTrack(e[s],i);this.tracks.push(g),e[s].id=g.id}},e.prototype.updateTracks=function(e){this.tracks.sort(function(e,t){return t.lastTimestamp-e.lastTimestamp}),this.tracks=this.tracks.slice(0,this.maxTracks)},e.prototype.createTrack=function(e,t,i){var r={id:i||this.nextTrackID(),lastTimestamp:t,keypoints:aP([],e.keypoints,!0).map(function(e){return ak({},e)})};return void 0!==e.box&&(r.box=ak({},e.box)),r},e.prototype.nextTrackID=function(){var e=this.nextID;return this.nextID+=1,e},e.prototype.remove=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.tracks=this.tracks.filter(function(t){return!e.includes(t.id)})},e.prototype.reset=function(){this.tracks=[]},e}(),sE=function(e){function t(t){return e.call(this,t)||this}return aC(t,e),t.prototype.computeSimilarity=function(e){var t=this;return 0===e.length||0===this.tracks.length?[[]]:e.map(function(e){return t.tracks.map(function(i){return t.iou(e,i)})})},t.prototype.iou=function(e,t){var i=Math.max(e.box.xMin,t.box.xMin),r=Math.max(e.box.yMin,t.box.yMin),n=Math.min(e.box.xMax,t.box.xMax),o=Math.min(e.box.yMax,t.box.yMax);if(i>=n||r>=o)return 0;var a=(n-i)*(o-r);return a/(e.box.width*e.box.height+t.box.width*t.box.height-a)},t}(sD),sL=function(e){function t(t){var i=e.call(this,t)||this;return i.keypointThreshold=t.keypointTrackerParams.keypointConfidenceThreshold,i.keypointFalloff=t.keypointTrackerParams.keypointFalloff,i.minNumKeyoints=t.keypointTrackerParams.minNumberOfKeypoints,i}return aC(t,e),t.prototype.computeSimilarity=function(e){if(0===e.length||0===this.tracks.length)return[[]];for(var t=[],i=0;i<e.length;i++){for(var r=e[i],n=[],o=0,a=this.tracks;o<a.length;o++){var s=a[o];n.push(this.oks(r,s))}t.push(n)}return t},t.prototype.oks=function(e,t){for(var i=this.area(t.keypoints)+1e-6,r=0,n=0,o=0;o<e.keypoints.length;++o){var a=e.keypoints[o],s=t.keypoints[o];a.score<this.keypointThreshold||s.score<this.keypointThreshold||(n+=1,r+=Math.exp(-1*(Math.pow(a.x-s.x,2)+Math.pow(a.y-s.y,2))/(2*i*Math.pow(2*this.keypointFalloff[o],2))))}return n<this.minNumKeyoints?0:r/n},t.prototype.area=function(e){var t=this,i=e.filter(function(e){return e.score>t.keypointThreshold}),r=Math.min.apply(Math,aP([1],i.map(function(e){return e.x}),!1)),n=Math.max.apply(Math,aP([0],i.map(function(e){return e.x}),!1)),o=Math.min.apply(Math,aP([1],i.map(function(e){return e.y}),!1));return(n-r)*(Math.max.apply(Math,aP([0],i.map(function(e){return e.y}),!1))-o)},t}(sD);function sO(e){switch(e){case sF.BlazePose:return aA.reduce(function(e,t,i){return e[t]=i,e},{});case sF.PoseNet:case sF.MoveNet:return a$.reduce(function(e,t,i){return e[t]=i,e},{});default:throw Error("Model ".concat(e," is not supported."))}}(n=sN||(sN={})).Keypoint="keypoint",n.BoundingBox="boundingBox",(o=sF||(sF={})).MoveNet="MoveNet",o.BlazePose="BlazePose",o.PoseNet="PoseNet",Object.freeze({__proto__:null,getKeypointIndexBySide:function(e){switch(e){case sF.BlazePose:return aT;case sF.PoseNet:case sF.MoveNet:return a_;default:throw Error("Model ".concat(e," is not supported."))}},getAdjacentPairs:function(e){switch(e){case sF.BlazePose:return aF;case sF.PoseNet:case sF.MoveNet:return aN;default:throw Error("Model ".concat(e," is not supported."))}},getKeypointIndexByName:sO});var sU=["SinglePose.Lightning","SinglePose.Thunder","MultiPose.Lightning"],sM={modelType:"SinglePose.Lightning",enableSmoothing:!0},sB={},sW={frequency:30,minCutOff:2.5,beta:300,derivateCutOff:2.5,thresholdCutOff:.5,thresholdBeta:5,disableValueScaling:!0},sV={maxTracks:18,maxAge:1e3,minSimilarity:.2,keypointTrackerParams:{keypointConfidenceThreshold:.3,keypointFalloff:[.026,.025,.025,.035,.035,.079,.079,.072,.072,.062,.062,.107,.107,.087,.087,.089,.089],minNumberOfKeypoints:4}},sH={maxTracks:18,maxAge:1e3,minSimilarity:.15,trackerParams:{}};function sG(e,t){var i,r,n,o;return e?t.width>t.height?(i=1,r=t.height/t.width,n=0,o=(t.width/2-t.height/2)/t.width):(i=t.width/t.height,r=1,n=(t.height/2-t.width/2)/t.height,o=0):t.width>t.height?(i=t.width/t.height,r=1,n=(t.height/2-t.width/2)/t.height,o=0):(i=1,r=t.height/t.width,n=0,o=(t.width/2-t.height/2)/t.width),{yMin:n,xMin:o,yMax:n+i,xMax:o+r,height:i,width:r}}function sj(e,t){var i={maxTracks:e.maxTracks,maxAge:e.maxAge,minSimilarity:e.minSimilarity};return null!=t.maxTracks&&(i.maxTracks=t.maxTracks),null!=t.maxAge&&(i.maxAge=t.maxAge),null!=t.minSimilarity&&(i.minSimilarity=t.minSimilarity),i}var sX=function(){function e(e,t){this.moveNetModel=e,this.modelInputResolution={height:0,width:0},this.keypointIndexByName=sO(sF.MoveNet),"SinglePose.Lightning"===t.modelType?(this.modelInputResolution.width=192,this.modelInputResolution.height=192):"SinglePose.Thunder"===t.modelType&&(this.modelInputResolution.width=256,this.modelInputResolution.height=256),this.multiPoseModel="MultiPose.Lightning"===t.modelType,this.multiPoseModel||(this.keypointFilter=new a9(sW),this.cropRegionFilterYMin=new a8(.9),this.cropRegionFilterXMin=new a8(.9),this.cropRegionFilterYMax=new a8(.9),this.cropRegionFilterXMax=new a8(.9)),this.enableSmoothing=t.enableSmoothing,t.minPoseScore?this.minPoseScore=t.minPoseScore:this.minPoseScore=.25,t.multiPoseMaxDimension?this.multiPoseMaxDimension=t.multiPoseMaxDimension:this.multiPoseMaxDimension=256,this.enableTracking=t.enableTracking,this.multiPoseModel&&this.enableTracking&&(t.trackerType===sN.Keypoint?this.tracker=new sL(t.trackerConfig):t.trackerType===sN.BoundingBox&&(this.tracker=new sE(t.trackerConfig)),this.enableSmoothing&&(this.keypointFilterMap=new Map))}return e.prototype.runSinglePersonPoseModel=function(e){return aI(this,void 0,void 0,function(){var t,i,r,n,o;return aR(this,function(a){switch(a.label){case 0:if(4!==(t=this.moveNetModel.execute(e)).shape.length||1!==t.shape[0]||1!==t.shape[1]||17!==t.shape[2]||3!==t.shape[3])throw t.dispose(),Error("Unexpected output shape from model: [".concat(t.shape,"]"));return"webgpu"===(0,s.N_N)()?[3,1]:(i=t.dataSync(),[3,3]);case 1:return[4,t.data()];case 2:i=a.sent(),a.label=3;case 3:for(t.dispose(),r={keypoints:[],score:0},n=0,o=0;o<17;++o)r.keypoints[o]={y:i[3*o],x:i[3*o+1],score:i[3*o+2]},r.keypoints[o].score>.2&&(++n,r.score+=r.keypoints[o].score);return n>0&&(r.score/=n),[2,r]}})})},e.prototype.runMultiPersonPoseModel=function(e){return aI(this,void 0,void 0,function(){var t,i,r,n,o,a,u,l;return aR(this,function(h){switch(h.label){case 0:if(3!==(t=this.moveNetModel.execute(e)).shape.length||1!==t.shape[0]||56!==t.shape[2])throw t.dispose(),Error("Unexpected output shape from model: [".concat(t.shape,"]"));return"webgpu"===(0,s.N_N)()?[3,1]:(i=t.dataSync(),[3,3]);case 1:return[4,t.data()];case 2:i=h.sent(),h.label=3;case 3:for(t.dispose(),r=[],n=i.length/56,o=0;o<n;++o)for(r[o]={keypoints:[]},a=56*o+51,r[o].box={yMin:i[a],xMin:i[a+1],yMax:i[a+2],xMax:i[a+3],width:i[a+3]-i[a+1],height:i[a+2]-i[a]},u=56*o+55,r[o].score=i[u],r[o].keypoints=[],l=0;l<17;++l)r[o].keypoints[l]={y:i[56*o+3*l],x:i[56*o+3*l+1],score:i[56*o+3*l+2]};return[2,r]}})})},e.prototype.estimatePoses=function(e,t,i){return void 0===t&&(t=sB),aI(this,void 0,void 0,function(){var r,n,o,a,u,l;return aR(this,function(h){switch(h.label){case 0:var d;return t=null==(d=t)?sB:ak({},d),null==e?(this.reset(),[2,[]]):(null==i?a2(e)&&(i=1e6*e.currentTime):i*=1e3,n=aW(r=aH(e)),o=(0,s.dt4)(r,0),e instanceof s.esB||r.dispose(),a=[],this.multiPoseModel?[3,2]:[4,this.estimateSinglePose(o,n,i)]);case 1:return a=h.sent(),[3,4];case 2:return[4,this.estimateMultiplePoses(o,n,i)];case 3:a=h.sent(),h.label=4;case 4:for(u=0;u<a.length;++u)for(l=0;l<a[u].keypoints.length;++l)a[u].keypoints[l].name=a$[l],a[u].keypoints[l].y*=n.height,a[u].keypoints[l].x*=n.width;return[2,a]}})})},e.prototype.estimateSinglePose=function(e,t,i){return aI(this,void 0,void 0,function(){var r,n,o,a,u=this;return aR(this,function(l){switch(l.label){case 0:return this.cropRegion||(this.cropRegion=sG(null==this.cropRegion,t)),r=(0,s.lub)(function(){var t=(0,s.odF)([[u.cropRegion.yMin,u.cropRegion.xMin,u.cropRegion.yMax,u.cropRegion.xMax]]),i=(0,s.lls)([1],"int32"),r=[u.modelInputResolution.height,u.modelInputResolution.width];return(0,s.pju)(s.image.cropAndResize(e,t,i,r,"bilinear",0),"int32")}),e.dispose(),[4,this.runSinglePersonPoseModel(r)];case 1:if(n=l.sent(),r.dispose(),n.score<this.minPoseScore)return this.reset(),[2,[]];for(o=0;o<n.keypoints.length;++o)n.keypoints[o].y=this.cropRegion.yMin+n.keypoints[o].y*this.cropRegion.height,n.keypoints[o].x=this.cropRegion.xMin+n.keypoints[o].x*this.cropRegion.width;return null!=i&&this.enableSmoothing&&(n.keypoints=this.keypointFilter.apply(n.keypoints,i,1)),a=function(e,t,i,r){for(var n={},o=0;o<a$.length;o++){var a=a$[o];n[a]=[t[i[a]].y*r.height,t[i[a]].x*r.width]}if((t[i.left_hip].score>.2||t[i.right_hip].score>.2)&&(t[i.left_shoulder].score>.2||t[i.right_shoulder].score>.2)){var s=(n.left_hip[0]+n.right_hip[0])/2,u=(n.left_hip[1]+n.right_hip[1])/2,l=function(e,t,i,r,n){for(var o=["left_shoulder","right_shoulder","left_hip","right_hip"],a=0,s=0,u=0;u<o.length;u++)(c=Math.abs(r-i[o[u]][0]))>a&&(a=c),(f=Math.abs(n-i[o[u]][1]))>s&&(s=f);for(var l=0,h=0,d=0,p=Object.keys(i);d<p.length;d++){var c,f,m=p[d];!(e[t[m]].score<.2)&&((c=Math.abs(r-i[m][0]))>l&&(l=c),(f=Math.abs(n-i[m][1]))>h&&(h=f))}return[a,s,l,h]}(t,i,n,s,u),h=l[0],d=Math.max(1.9*l[1],1.9*h,1.2*l[2],1.2*l[3]),p=[s-(d=Math.min(d,Math.max(u,r.width-u,s,r.height-s))),u-d];if(d>Math.max(r.width,r.height)/2)return sG(null==e,r);var c=2*d;return{yMin:p[0]/r.height,xMin:p[1]/r.width,yMax:(p[0]+c)/r.height,xMax:(p[1]+c)/r.width,height:(p[0]+c)/r.height-p[0]/r.height,width:(p[1]+c)/r.width-p[1]/r.width}}return sG(null==e,r)}(this.cropRegion,n.keypoints,this.keypointIndexByName,t),this.cropRegion=this.filterCropRegion(a),[2,[n]]}})})},e.prototype.estimateMultiplePoses=function(e,t,i){return aI(this,void 0,void 0,function(){var r,n,o,a,u,l,h,d,p,c,f,m=this;return aR(this,function(g){switch(g.label){case 0:return t.width>t.height?(n=this.multiPoseMaxDimension,o=Math.round(this.multiPoseMaxDimension*t.height/t.width),r=s.image.resizeBilinear(e,[o,n]),u=n,l=32*Math.ceil(o/32),a=(0,s.vku)(r,[[0,0],[0,l-o],[0,0],[0,0]])):(n=Math.round(this.multiPoseMaxDimension*t.width/t.height),o=this.multiPoseMaxDimension,r=s.image.resizeBilinear(e,[o,n]),u=32*Math.ceil(n/32),l=o,a=(0,s.vku)(r,[[0,0],[0,0],[0,u-n],[0,0]])),r.dispose(),e.dispose(),h=(0,s.pju)(a,"int32"),a.dispose(),[4,this.runMultiPersonPoseModel(h)];case 1:for(d=g.sent(),h.dispose(),d=d.filter(function(e){return e.score>=m.minPoseScore}),c=0;c<d.length;++c)for(p=0;p<d[c].keypoints.length;++p)d[c].keypoints[p].y*=l/o,d[c].keypoints[p].x*=u/n;if(this.enableTracking&&(this.tracker.apply(d,i),this.enableSmoothing)){for(c=0;c<d.length;++c)this.keypointFilterMap.has(d[c].id)||this.keypointFilterMap.set(d[c].id,new a9(sW)),d[c].keypoints=this.keypointFilterMap.get(d[c].id).apply(d[c].keypoints,i,1);f=this.tracker.getTrackIDs(),this.keypointFilterMap.forEach(function(e,t){f.has(t)||m.keypointFilterMap.delete(t)})}return[2,d]}})})},e.prototype.filterCropRegion=function(e){if(e){var t=this.cropRegionFilterYMin.apply(e.yMin),i=this.cropRegionFilterXMin.apply(e.xMin),r=this.cropRegionFilterYMax.apply(e.yMax),n=this.cropRegionFilterXMax.apply(e.xMax);return{yMin:t,xMin:i,yMax:r,xMax:n,height:r-t,width:n-i}}return this.cropRegionFilterYMin.reset(),this.cropRegionFilterXMin.reset(),this.cropRegionFilterYMax.reset(),this.cropRegionFilterXMax.reset(),null},e.prototype.dispose=function(){this.moveNetModel.dispose()},e.prototype.reset=function(){this.cropRegion=null,this.resetFilters()},e.prototype.resetFilters=function(){this.keypointFilter.reset(),this.cropRegionFilterYMin.reset(),this.cropRegionFilterXMin.reset(),this.cropRegionFilterYMax.reset(),this.cropRegionFilterXMax.reset()},e}(),sK={architecture:"MobileNetV1",outputStride:16,multiplier:.75,inputResolution:{height:257,width:257}},sY=["MobileNetV1","ResNet50"],sq={MobileNetV1:[8,16],ResNet50:[16]},sQ=[8,16,32],sZ={MobileNetV1:[.5,.75,1],ResNet50:[1]},sJ=[1,2,4],s0={maxPoses:1,flipHorizontal:!1},s2={maxPoses:5,flipHorizontal:!1,scoreThreshold:.5,nmsRadius:20},s1=[-123.15,-115.9,-103.06];function s3(e){return Math.floor(e/2)}var s4=function(){function e(e,t){this.priorityQueue=Array(e),this.numberOfElements=-1,this.getElementValue=t}return e.prototype.enqueue=function(e){this.priorityQueue[++this.numberOfElements]=e,this.swim(this.numberOfElements)},e.prototype.dequeue=function(){var e=this.priorityQueue[0];return this.exchange(0,this.numberOfElements--),this.sink(0),this.priorityQueue[this.numberOfElements+1]=null,e},e.prototype.empty=function(){return -1===this.numberOfElements},e.prototype.size=function(){return this.numberOfElements+1},e.prototype.all=function(){return this.priorityQueue.slice(0,this.numberOfElements+1)},e.prototype.max=function(){return this.priorityQueue[0]},e.prototype.swim=function(e){for(;e>0&&this.less(s3(e),e);)this.exchange(e,s3(e)),e=s3(e)},e.prototype.sink=function(e){for(;2*e<=this.numberOfElements;){var t=2*e;if(t<this.numberOfElements&&this.less(t,t+1)&&t++,!this.less(e,t))break;this.exchange(e,t),e=t}},e.prototype.getValueAt=function(e){return this.getElementValue(this.priorityQueue[e])},e.prototype.less=function(e,t){return this.getValueAt(e)<this.getValueAt(t)},e.prototype.exchange=function(e,t){var i=this.priorityQueue[e];this.priorityQueue[e]=this.priorityQueue[t],this.priorityQueue[t]=i},e}();function s5(e,t,i,r){return{y:r.get(e,t,i),x:r.get(e,t,i+17)}}function s6(e,t,i){var r=s5(e.heatmapY,e.heatmapX,e.id,i),n=r.y,o=r.x;return{x:e.heatmapX*t+o,y:e.heatmapY*t+n}}function s8(e,t,i,r){var n=i.x,o=i.y;return e.some(function(e){var i,a,s,u,l=e.keypoints;return i=l[r].y,a=l[r].x,(s=i-o)*s+(u=a-n)*u<=t})}var s7=a$.reduce(function(e,t,i){return e[t]=i,e},{}),s9=[["nose","left_eye"],["left_eye","left_ear"],["nose","right_eye"],["right_eye","right_ear"],["nose","left_shoulder"],["left_shoulder","left_elbow"],["left_elbow","left_wrist"],["left_shoulder","left_hip"],["left_hip","left_knee"],["left_knee","left_ankle"],["nose","right_shoulder"],["right_shoulder","right_elbow"],["right_elbow","right_wrist"],["right_shoulder","right_hip"],["right_hip","right_knee"],["right_knee","right_ankle"]].map(function(e){var t=e[0],i=e[1];return[s7[t],s7[i]]}),ue=s9.map(function(e){return e[1]}),ut=s9.map(function(e){return e[0]});function ui(e,t,i,r){var n,o,a,s;return{y:(n=Math.round(e.y/t),o=i-1,n<0?0:n>o?o:n),x:(a=Math.round(e.x/t),s=r-1,a<0?0:a>s?s:a)}}function ur(e,t){return{x:e.x+t.x,y:e.y+t.y}}function un(e,t,i,r,n,o,a,s){void 0===s&&(s=2);for(var u,l,h=r.shape,d=h[0],p=h[1],c={y:t.y,x:t.x},f=ur(c,(u=ui(c,o,d,p),l=a.shape[2]/2,{y:a.get(u.y,u.x,e),x:a.get(u.y,u.x,l+e)})),m=0;m<s;m++){var g=ui(f,o,d,p),y=s5(g.y,g.x,i,n);f=ur({x:g.x*o,y:g.y*o},{x:y.x,y:y.y})}var x=ui(f,o,d,p),v=r.get(x.y,x.x,i);return{y:f.y,x:f.x,name:a$[i],score:v}}function uo(){for(var e,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];switch(t.length){case 0:e="fn main() ";break;case 1:e="fn main(".concat(t[0]," : i32)");break;default:throw Error("Unreachable")}return e}var ua=function(){function e(e){this.variableNames=["A","B"],this.size=!0,this.workgroupSize=[32,1,1],this.outputShape=[e[0],1],this.dispatchLayout=N(this.outputShape),this.dispatch=A(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="getpointsConfidenceOp"}return e.prototype.getUserCode=function(){return"\n        ".concat(uo("index")," {\n          if (index < uniforms.size) {\n            let y = B[index * 2];\n            let x = B[index * 2 + 1];\n            let outIndex = y * uniforms.aShape.x * uniforms.aShape.z + x * uniforms.aShape.z + index;\n            result[index] = A[outIndex];\n          }\n        }\n        ")},e}(),us=function(){function e(e){if(this.variableNames=["A","B"],this.size=!0,this.supportedLastDimension=2,2!==e.length||e[1]!==this.supportedLastDimension)throw Error("GetOffsetVectorsProgram only supports shape of [x, ".concat(this.supportedLastDimension,"], but current shape is ").concat(e));this.workgroupSize=[32,1,1],this.outputShape=e;var t=[e[0],1];this.dispatchLayout=N(t),this.dispatch=A(this.dispatchLayout,t,this.workgroupSize),this.shaderKey="GetOffsetVectors"}return e.prototype.getUserCode=function(){return"\n    fn getOffsetPoint(y: i32, x: i32, index: i32) -> vec2<i32> {\n      let outIndexY = y * uniforms.bShape.x * uniforms.bShape.y + x * uniforms.bShape.y + index;\n      let outIndexX = outIndexY + uniforms.bShape.z;\n      let outY = i32(B[outIndexY]);\n      let outX = i32(B[outIndexX]);\n      return vec2<i32>(outY, outX);\n    }\n\n    ".concat(uo("index")," {\n      if (index < uniforms.size) {\n        let indexY = index * ").concat(this.supportedLastDimension,";\n        let indexX = indexY + 1;\n        let heatmapY = A[indexY];\n        let heatmapX = A[indexX];\n        let out = getOffsetPoint(i32(heatmapY), i32(heatmapX), index);\n        result[indexY] = f32(out[0]);\n        result[indexX] = f32(out[1]);\n      }\n    }\n    ")},e}();function uu(e){var t=e.shape,i=t[0],r=t[1],n=t[2];return(0,s.lub)(function(){var t=(0,s.XLQ)(e,[i*r,n]),o=(0,s.NqF)(t,0),a=(0,s.dt4)((0,s.hiC)(o,(0,s.iD$)(r,"int32")),1),u=(0,s.dt4)((0,s.lub)(function(){var e=(0,s.hiC)(o,(0,s.iD$)(r,"int32"));return(0,s.luU)(o,(0,s.dC7)(e,(0,s.iD$)(r,"int32")))}),1);return(0,s.zoF)([a,u],1)})}var ul="https://storage.googleapis.com/tfjs-models/savedmodel/posenet/mobilenet/",uh="https://storage.googleapis.com/tfjs-models/savedmodel/posenet/resnet50/";function ud(e,t){return(e-1)%t==0?e:Math.floor(e/t)*t+1}var up=function(){function e(e,t){this.posenetModel=e;var i,r,n=this.posenetModel.inputs[0].shape;s.D5U.assert(-1===n[1]&&-1===n[2],function(){return"Input shape [".concat(n[1],", ").concat(n[2],"] ")+"must both be equal to or -1"});var o,a,u=(o=t.inputResolution,a=t.outputStride,{height:ud(o.height,a),width:ud(o.width,a)});i=t.outputStride,s.D5U.assert(sQ.indexOf(i)>=0,function(){return"outputStride of ".concat(i," is invalid. ")+"It must be either 8 or 16."}),r=t.outputStride,s.D5U.assert((u.height-1)%r==0,function(){return"height of ".concat(u.height," is invalid for output stride ")+"".concat(r,".")}),s.D5U.assert((u.width-1)%r==0,function(){return"width of ".concat(u.width," is invalid for output stride ")+"".concat(r,".")}),this.inputResolution=u,this.outputStride=t.outputStride,this.architecture=t.architecture}return e.prototype.estimatePoses=function(e,t){return void 0===t&&(t=s0),aI(this,void 0,void 0,function(){return aR(this,function(i){return[2,this.estimatePosesGPU(e,t,!1)]})})},e.prototype.estimatePosesGPU=function(e,t,i){return void 0===t&&(t=s0),void 0===i&&(i=!1),aI(this,void 0,void 0,function(){var r,n,o,a,u,l,h,d,p,c,f,m,g,y,x,v,b,w;return aR(this,function(S){switch(S.label){case 0:return r=function(e){var t=e;if(null==t.maxPoses&&(t.maxPoses=1),t.maxPoses<=0)throw Error("Invalid maxPoses ".concat(t.maxPoses,". Should be > 0."));if(t.maxPoses>1){if((t=ak(ak({},s2),t)).scoreThreshold<0||t.scoreThreshold>1)throw Error("Invalid scoreThreshold ".concat(t.scoreThreshold,". ")+"Should be in range [0.0, 1.0]");if(t.nmsRadius<=0)throw Error("Invalid nmsRadius ".concat(t.nmsRadius,"."))}return t}(t),null==e?[2,i?[[],[]]:[]]:(this.maxPoses=r.maxPoses,o=(n=aJ(e,{outputTensorSize:this.inputResolution,keepAspectRatio:!0,borderMode:"replicate"})).imageTensor,a=n.padding,u="ResNet50"===this.architecture?(0,s.IHx)(o,s1):aZ(o,[-1,1]),l=this.posenetModel.predict(u),"ResNet50"===this.architecture?(h=(0,s.L9e)(l[2],[0]),d=(0,s.L9e)(l[3],[0]),p=(0,s.L9e)(l[0],[0]),c=(0,s.L9e)(l[1],[0])):(h=(0,s.L9e)(l[0],[0]),d=(0,s.L9e)(l[1],[0]),p=(0,s.L9e)(l[2],[0]),c=(0,s.L9e)(l[3],[0])),f=(0,s.XD2)(d),1!==this.maxPoses?[3,5]:i?[4,function(e,t,i){return aI(this,void 0,void 0,function(){var r;return aR(this,function(n){var o;return o=r=uu(e),[2,[(0,s.lub)(function(){var e=function(e,t){if((0,s.y3$)() instanceof O){var i,r,n;return i=(0,s.y3$)(),r=new us(e.shape),n=i.runWebGPUProgram(r,[e,t],"float32"),(0,s.SRH)().makeTensorFromTensorInfo(n)}throw Error("getOffsetVectorsGPU is not supported in this backend!")}(o,t);return(0,s.IHx)((0,s.pju)((0,s.dC7)(o,(0,s.iD$)(i,"int32")),"float32"),e)}),function(e,t){if((0,s.y3$)() instanceof O){var i,r,n;return i=(0,s.y3$)(),r=new ua(t.shape),n=i.runWebGPUProgram(r,[e,t],"float32"),(0,s.SRH)().makeTensorFromTensorInfo(n)}throw Error("getPointsConfidenceWebGPU is not supported in this backend!")}(e,r)]]})})}(f,h,this.outputStride)]:[3,2]);case 1:return x=(g=S.sent())[0],y=g[1],m=[x,y],[3,4];case 2:return[4,function(e,t,i){return aI(this,void 0,void 0,function(){var r,n,o,a,u,l,h,d,p;return aR(this,function(c){switch(c.label){case 0:return r=0,n=uu(e),[4,Promise.all([e.buffer(),t.buffer(),n.buffer()])];case 1:var f;return a=(o=c.sent())[0],u=o[1],[4,(f=l=o[2],h=(0,s.lub)(function(){var e=function(e,t){for(var i=[],r=0;r<a$.length;r++){var n,o,a,u=(n=e.get(r,0).valueOf(),o=e.get(r,1).valueOf(),a=r,{y:t.get(n,o,a),x:t.get(n,o,a+a$.length)}),l=u.x,h=u.y;i.push(h),i.push(l)}return(0,s.odF)(i,[a$.length,2])}(f,u);return(0,s.IHx)((0,s.pju)((0,s.dC7)(f.toTensor(),(0,s.iD$)(i,"int32")),"float32"),e)})).buffer()];case 2:return d=c.sent(),p=Array.from(function(e,t){for(var i=t.shape[0],r=new Float32Array(i),n=0;n<i;n++){var o=t.get(n,0),a=t.get(n,1);r[n]=e.get(o,a,n)}return r}(a,l)).map(function(e,t){return r+=e,{y:d.get(t,0),x:d.get(t,1),score:e,name:a$[t]}}),n.dispose(),h.dispose(),[2,{keypoints:p,score:r/p.length}]}})})}(f,h,this.outputStride)];case 3:m=[x=S.sent()],S.label=4;case 4:return[3,7];case 5:if(i)throw Error("GPU renderer only supports single pose!");return[4,function(e,t,i,r,n,o,a,s){return void 0===a&&(a=.5),void 0===s&&(s=20),aI(this,void 0,void 0,function(){var u,l,h,d,p,c,f,m,g,y,x;return aR(this,function(v){switch(v.label){case 0:return[4,function(e){return aI(this,void 0,void 0,function(){return aR(this,function(t){return[2,Promise.all(e.map(function(e){return e.buffer()}))]})})}([e,t,i,r])];case 1:for(l=(u=v.sent())[0],h=u[1],d=u[2],p=u[3],c=[],f=function(e,t,i){for(var r=i.shape,n=r[0],o=r[1],a=r[2],s=new s4(n*o*a,function(e){return e.score}),u=0;u<n;++u)for(var l=0;l<o;++l)for(var h=0;h<a;++h){var d=i.get(u,l,h);d<e||function(e,t,i,r,n,o){for(var a=o.shape,s=a[0],u=a[1],l=!0,h=Math.max(i-1,0),d=Math.min(i+1+1,s),p=h;p<d;++p){for(var c=Math.max(r-n,0),f=Math.min(r+n+1,u),m=c;m<f;++m)if(o.get(p,m,e)>t){l=!1;break}if(!l)break}return l}(h,d,u,l,1,i)&&s.enqueue({score:d,part:{heatmapY:u,heatmapX:l,id:h}})}return s}(a,0,l),m=s*s;c.length<o&&!f.empty();)s8(c,m,s6((g=f.dequeue()).part,n,h),g.part.id)||(x=function(e,t,i){return i.reduce(function(i,r,n){var o=r.y,a=r.x,s=r.score;return s8(e,t,{y:o,x:a},n)||(i+=s),i},0)/i.length}(c,m,y=function(e,t,i,r,n,o){var a=t.shape[2],s=ue.length,u=Array(a),l=e.part,h=e.score,d=s6(l,r,i);u[l.id]={score:h,name:a$[l.id],y:d.y,x:d.x};for(var p=s-1;p>=0;--p){var c=ue[p],f=ut[p];u[c]&&!u[f]&&(u[f]=un(p,u[c],f,t,i,r,o))}for(p=0;p<s;++p)c=ut[p],f=ue[p],u[c]&&!u[f]&&(u[f]=un(p,u[c],f,t,i,r,n));return u}(g,l,h,n,d,p)),c.push({keypoints:y,score:x}));return[2,c]}})})}(f,h,p,c,this.outputStride,this.maxPoses,r.scoreThreshold,r.nmsRadius)];case 6:m=S.sent(),S.label=7;case 7:if(i){if(!0===r.flipHorizontal)throw Error("flipHorizontal is not supported!");v=this.getCanvasInfo(aW(e),this.inputResolution,a)}else w=aW(e),b=function(e,t,i,r){var n=t.height,o=t.width,a=n/(i.height*(1-r.top-r.bottom)),s=o/(i.width*(1-r.left-r.right)),u=-r.top*i.height,l=-r.left*i.width;if(1===s&&1===a&&0===u&&0===l)return e;for(var h=0;h<e.length;h++)for(var d=0,p=e[h].keypoints;d<p.length;d++){var c=p[d];c.x=(c.x+l)*s,c.y=(c.y+u)*a}return e}(m,w,this.inputResolution,a),r.flipHorizontal&&(b=function(e,t){for(var i=0;i<e.length;i++)for(var r=0,n=e[i].keypoints;r<n.length;r++){var o=n[r];o.x=t.width-1-o.x}return e}(b,w));return o.dispose(),u.dispose(),(0,s.B90)(l),h.dispose(),d.dispose(),p.dispose(),c.dispose(),f.dispose(),[2,i?[m,v]:b]}})})},e.prototype.getCanvasInfo=function(e,t,i){var r=e.height,n=e.width,o=r/(t.height*(1-i.top-i.bottom)),a=n/(t.width*(1-i.left-i.right)),s=-i.top*t.height;return[-i.left*t.width,s,a,o,e.width,e.height]},e.prototype.dispose=function(){this.posenetModel.dispose()},e.prototype.reset=function(){},e}();function uc(e,t){return aI(this,void 0,void 0,function(){var i,r;return aR(this,function(n){switch(e){case sF.PoseNet:return[2,function(e){return void 0===e&&(e=sK),aI(this,void 0,void 0,function(){var t,i,r;return aR(this,function(n){var o,a,s,l,h,d,p,c;switch(n.label){case 0:return"ResNet50"!==(t=function(e){var t=e||sK;if(null==t.architecture&&(t.architecture="MobileNetV1"),0>sY.indexOf(t.architecture))throw Error("Invalid architecture ".concat(t.architecture,". ")+"Should be one of ".concat(sY));if(null==t.inputResolution&&(t.inputResolution={height:257,width:257}),null==t.outputStride&&(t.outputStride=16),0>sq[t.architecture].indexOf(t.outputStride))throw Error("Invalid outputStride ".concat(t.outputStride,". ")+"Should be one of ".concat(sq[t.architecture]," ")+"for architecture ".concat(t.architecture,"."));if(null==t.multiplier&&(t.multiplier=1),0>sZ[t.architecture].indexOf(t.multiplier))throw Error("Invalid multiplier ".concat(t.multiplier,". ")+"Should be one of ".concat(sZ[t.architecture]," ")+"for architecture ".concat(t.architecture,"."));if(null==t.quantBytes&&(t.quantBytes=4),0>sJ.indexOf(t.quantBytes))throw Error("Invalid quantBytes ".concat(t.quantBytes,". ")+"Should be one of ".concat(sJ," ")+"for architecture ".concat(t.architecture,"."));if("MobileNetV1"===t.architecture&&32===t.outputStride&&1!==t.multiplier)throw Error("When using an output stride of 32, you must select 1 as the multiplier.");return t}(e)).architecture?[3,2]:(o=t.outputStride,a=t.quantBytes,s="model-stride".concat(o,".json"),i=4===a?uh+"float/"+s:uh+"quant".concat(a,"/")+s,[4,(0,u.YL)(t.modelUrl||i)]);case 1:case 3:return[2,new up(n.sent(),t)];case 2:return l=t.outputStride,h=t.multiplier,d=t.quantBytes,p={1:"100",.75:"075",.5:"050"},c="model-stride".concat(l,".json"),r=4===d?ul+"float/".concat(p[h],"/")+c:ul+"quant".concat(d,"/").concat(p[h],"/")+c,[4,(0,u.YL)(t.modelUrl||r)]}})})}(t)];case sF.BlazePose:if(r=void 0,null!=(i=t)){if("tfjs"===i.runtime)return[2,function(e){return aI(this,void 0,void 0,function(){var t,i,r,n;return aR(this,function(o){switch(o.label){case 0:return i="string"==typeof(t=function(e){var t=ak({},null==e?so:e);if(null==t.enableSmoothing&&(t.enableSmoothing=so.enableSmoothing),null==t.enableSegmentation&&(t.enableSegmentation=so.enableSegmentation),null==t.smoothSegmentation&&(t.smoothSegmentation=so.smoothSegmentation),null==t.modelType&&(t.modelType=so.modelType),null==t.detectorModelUrl&&(t.detectorModelUrl=so.detectorModelUrl),null==t.landmarkModelUrl)switch(t.modelType){case"lite":t.landmarkModelUrl="https://tfhub.dev/mediapipe/tfjs-model/blazepose_3d/landmark/lite/2";break;case"heavy":t.landmarkModelUrl="https://tfhub.dev/mediapipe/tfjs-model/blazepose_3d/landmark/heavy/2";break;default:t.landmarkModelUrl="https://tfhub.dev/mediapipe/tfjs-model/blazepose_3d/landmark/full/2"}return t}(e)).detectorModelUrl&&t.detectorModelUrl.indexOf("https://tfhub.dev")>-1,r="string"==typeof t.landmarkModelUrl&&t.landmarkModelUrl.indexOf("https://tfhub.dev")>-1,[4,Promise.all([(0,u.YL)(t.detectorModelUrl,{fromTFHub:i}),(0,u.YL)(t.landmarkModelUrl,{fromTFHub:r})])];case 1:return[2,new sz((n=o.sent())[0],n[1],t.enableSmoothing,t.enableSegmentation,t.smoothSegmentation,t.modelType)]}})})}(t)];if("mediapipe"===i.runtime)return[2,function(e){return aI(this,void 0,void 0,function(){var t;return aR(this,function(i){switch(i.label){case 0:return[4,(t=new aB(function(e){if(null==e)return ak({},aO);var t=ak({},e);return t.runtime="mediapipe",null==t.enableSegmentation&&(t.enableSegmentation=aO.enableSegmentation),null==t.enableSmoothing&&(t.enableSmoothing=aO.enableSmoothing),null==t.smoothSegmentation&&(t.smoothSegmentation=aO.smoothSegmentation),null==t.modelType&&(t.modelType=aO.modelType),t}(e))).initialize()];case 1:return i.sent(),[2,t]}})})}(t)];r=i.runtime}throw Error("Expect modelConfig.runtime to be either 'tfjs' "+"or 'mediapipe', but got ".concat(r));case sF.MoveNet:return[2,function(e){return void 0===e&&(e=sM),aI(this,void 0,void 0,function(){var t,i,r,n;return aR(this,function(o){switch(o.label){case 0:return t=function(e){var t,i,r=null==e?sM:ak({},e);if(null==r.modelType)r.modelType="SinglePose.Lightning";else if(0>sU.indexOf(r.modelType))throw Error("Invalid architecture ".concat(r.modelType,". ")+"Should be one of ".concat(sU));if(null==r.enableSmoothing&&(r.enableSmoothing=!0),null!=r.minPoseScore&&(r.minPoseScore<0||r.minPoseScore>1))throw Error("minPoseScore should be between 0.0 and 1.0");if(null!=r.multiPoseMaxDimension&&(r.multiPoseMaxDimension%32!=0||r.multiPoseMaxDimension<32))throw Error("multiPoseMaxDimension must be a multiple of 32 and higher than 0");if("MultiPose.Lightning"===r.modelType&&null==r.enableTracking&&(r.enableTracking=!0),"MultiPose.Lightning"===r.modelType&&!0===r.enableTracking){if(null==r.trackerType&&(r.trackerType=sN.BoundingBox),r.trackerType===sN.Keypoint)null!=r.trackerConfig?r.trackerConfig=((i=sj(sV,t=r.trackerConfig)).keypointTrackerParams=ak({},sV.keypointTrackerParams),null!=t.keypointTrackerParams&&(null!=t.keypointTrackerParams.keypointConfidenceThreshold&&(i.keypointTrackerParams.keypointConfidenceThreshold=t.keypointTrackerParams.keypointConfidenceThreshold),null!=t.keypointTrackerParams.keypointFalloff&&(i.keypointTrackerParams.keypointFalloff=t.keypointTrackerParams.keypointFalloff),null!=t.keypointTrackerParams.minNumberOfKeypoints&&(i.keypointTrackerParams.minNumberOfKeypoints=t.keypointTrackerParams.minNumberOfKeypoints)),i):r.trackerConfig=sV;else{if(r.trackerType!==sN.BoundingBox)throw Error("Tracker type not supported by MoveNet");null!=r.trackerConfig?r.trackerConfig=sj(sH,r.trackerConfig):r.trackerConfig=sH}}return r}(e),r=!0,t.modelUrl?(r="string"==typeof t.modelUrl&&t.modelUrl.indexOf("https://tfhub.dev")>-1,[4,(0,u.YL)(t.modelUrl,{fromTFHub:r})]):[3,2];case 1:return i=o.sent(),[3,4];case 2:return n=void 0,"SinglePose.Lightning"===t.modelType?n="https://tfhub.dev/google/tfjs-model/movenet/singlepose/lightning/4":"SinglePose.Thunder"===t.modelType?n="https://tfhub.dev/google/tfjs-model/movenet/singlepose/thunder/4":"MultiPose.Lightning"===t.modelType&&(n="https://tfhub.dev/google/tfjs-model/movenet/multipose/lightning/1"),[4,(0,u.YL)(n,{fromTFHub:r})];case 3:i=o.sent(),o.label=4;case 4:return"webgl"===(0,s.N_N)()&&(0,s.OBj)().set("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",0),[2,new sX(i,t)]}})})}(t)];default:throw Error("".concat(e," is not a supported model name."))}})})}var uf={modelType:{SINGLEPOSE_LIGHTNING:"SinglePose.Lightning",SINGLEPOSE_THUNDER:"SinglePose.Thunder",MULTIPOSE_LIGHTNING:"MultiPose.Lightning"}}}}]);