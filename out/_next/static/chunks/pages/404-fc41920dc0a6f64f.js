(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2197],{77913:function(e,t,r){"use strict";var n=r(85696);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=(o=r(67294))&&o.__esModule?o:{default:o},l=r(12199),c=r(61587),u=r(27215);function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var f={};function s(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;f[t+"%"+r+(o?"%"+o:"")]=!0}}var d=a.default.forwardRef((function(e,t){var r,o=e.legacyBehavior,d=void 0===o?!0!==Boolean(!1):o,p=e.href,v=e.as,h=e.children,m=e.prefetch,y=e.passHref,g=e.replace,b=e.shallow,w=e.scroll,x=e.locale,O=e.onClick,j=e.onMouseEnter,E=i(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);r=h,d&&"string"===typeof r&&(r=a.default.createElement("a",null,r));var k,C=!1!==m,_=c.useRouter(),N=a.default.useMemo((function(){var e=l.resolveHref(_,p,!0),t=n(e,2),r=t[0],o=t[1];return{href:r,as:v?l.resolveHref(_,v):o||r}}),[_,p,v]),M=N.href,L=N.as,P=a.default.useRef(M),R=a.default.useRef(L);d&&(k=a.default.Children.only(r));var I=d?k&&"object"===typeof k&&k.ref:t,z=u.useIntersection({rootMargin:"200px"}),S=n(z,3),H=S[0],U=S[1],B=S[2],K=a.default.useCallback((function(e){R.current===L&&P.current===M||(B(),R.current=L,P.current=M),H(e),I&&("function"===typeof I?I(e):"object"===typeof I&&(I.current=e))}),[L,I,M,B,H]);a.default.useEffect((function(){var e=U&&C&&l.isLocalURL(M),t="undefined"!==typeof x?x:_&&_.locale,r=f[M+"%"+L+(t?"%"+t:"")];e&&!r&&s(_,M,L,{locale:t})}),[L,M,U,x,C,_]);var T={ref:K,onClick:function(e){d||"function"!==typeof O||O(e),d&&k.props&&"function"===typeof k.props.onClick&&k.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,c,u){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:u,scroll:c}))}(e,_,M,L,g,b,w,x)},onMouseEnter:function(e){d||"function"!==typeof j||j(e),d&&k.props&&"function"===typeof k.props.onMouseEnter&&k.props.onMouseEnter(e),l.isLocalURL(M)&&s(_,M,L,{priority:!0})}};if(!d||y||"a"===k.type&&!("href"in k.props)){var D="undefined"!==typeof x?x:_&&_.locale,X=_&&_.isLocaleDomain&&l.getDomainLocale(L,D,_&&_.locales,_&&_.domainLocales);T.href=X||l.addBasePath(l.addLocale(L,D,_&&_.defaultLocale))}return d?a.default.cloneElement(k,T):a.default.createElement("a",Object.assign({},E,T),r)}));t.default=d,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},27215:function(e,t,r){"use strict";var n=r(85696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,i=e.disabled||!l,f=o.useRef(),s=o.useState(!1),d=n(s,2),p=d[0],v=d[1],h=o.useState(t?t.current:null),m=n(h,2),y=m[0],g=m[1],b=o.useCallback((function(e){f.current&&(f.current(),f.current=void 0),i||p||e&&e.tagName&&(f.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=u.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=c.get(n):(t=c.get(r),u.push(r));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,l=n.elements;return l.set(e,t),a.observe(e),function(){if(l.delete(e),a.unobserve(e),0===l.size){a.disconnect(),c.delete(o);var t=u.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&u.splice(t,1)}}}(e,(function(e){return e&&v(e)}),{root:y,rootMargin:r}))}),[i,y,r,p]),w=o.useCallback((function(){v(!1)}),[]);return o.useEffect((function(){if(!l&&!p){var e=a.requestIdleCallback((function(){return v(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[p]),o.useEffect((function(){t&&g(t.current)}),[t]),[b,p,w]};var o=r(67294),a=r(98065),l="undefined"!==typeof IntersectionObserver;var c=new Map,u=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},81418:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});r(67294);var n=r(41664),o=r.n(n),a=r(79352),l=r(85893);function c(){return(0,l.jsx)("main",{children:(0,l.jsx)("section",{className:"bg-white",children:(0,l.jsxs)("div",{className:"layout flex min-h-screen flex-col items-center justify-center text-center text-black",children:[(0,l.jsx)(a.Chf,{size:60,className:"drop-shadow-glow animate-flicker text-red-500"}),(0,l.jsx)("h1",{className:"mt-8 text-4xl md:text-6xl",children:"Page Not Found"}),(0,l.jsx)("a",{className:"mt-4 md:text-lg",children:(0,l.jsx)(o(),{href:"/",children:"Back to Home"})})]})})})}},6141:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return r(81418)}])},41664:function(e,t,r){e.exports=r(77913)},88357:function(e,t,r){"use strict";r.d(t,{w_:function(){return i}});var n=r(67294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),l=function(){return l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},l.apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function u(e){return e&&e.map((function(e,t){return n.createElement(e.tag,l({key:t},e.attr),u(e.child))}))}function i(e){return function(t){return n.createElement(f,l({attr:l({},e.attr)},t),u(e.child))}}function f(e){var t=function(t){var r,o=e.attr,a=e.size,u=e.title,i=c(e,["attr","size","title"]),f=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,i,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),u&&n.createElement("title",null,u),e.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}}},function(e){e.O(0,[5937,9774,2888,179],(function(){return t=6141,e(e.s=t);var t}));var t=e.O();_N_E=t}]);