(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[7],{207:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(59),c=n(111),u=n(482),l=n.n(u),i=n(426);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(){return s(this,t),m(this,d(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return o.a.createElement("div",{className:"".concat(l.a.orders)},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-6 offset-lg-3"},o.a.createElement("h2",null,"YOUR ORDERS"),o.a.createElement("div",{className:l.a.orderBox},([{orderId:192788645,amount:588,advancePaid:300,status:"In work"},{orderId:192788622,amount:688,advancePaid:400,status:"Completed"}]||[]).map((function(e,t){return o.a.createElement("table",{className:l.a.order,key:t},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Order Id"),o.a.createElement("td",null,e.orderId)),o.a.createElement("tr",null,o.a.createElement("td",null,"Amount"),o.a.createElement("td",null," ₹ ",e.amount)),o.a.createElement("tr",null,o.a.createElement("td",null,"Advance Paid"),o.a.createElement("td",null," ₹ ",e.advancePaid)),o.a.createElement("tr",null,o.a.createElement("td",null,"Order Status"),o.a.createElement("td",null,e.status)),o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement(i.a,{to:"/order/".concat(e.orderId)},"View"),o.a.createElement(i.a,{to:"/order/".concat(e.orderId)},"Edit")))))})))))))}}])&&p(n.prototype,r),a&&p(n,a),t}(o.a.Component);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=function(e){function t(){return E(this,t),h(this,_(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(b,null))}}])&&O(n.prototype,r),a&&O(n,a),t}(o.a.Component);t.default=Object(a.c)((function(e){return{homeData:e.home}}),(function(e){return{fetchSamples:function(){return e(c.a.fetchSamples())}}}))(w)},426:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(36),o=n(37),a=n(0),c=n.n(a),u=n(25),l=(n(9),n(2)),i=n(20),f=n(32);c.a.Component;c.a.Component;var s=function(e,t){return"function"==typeof e?e(t):e},p=function(e,t){return"string"==typeof e?Object(u.c)(e,null,null,t):e},m=function(e){return e},d=c.a.forwardRef;void 0===d&&(d=m);var y=d((function(e,t){var n=e.innerRef,r=e.navigate,o=e.onClick,a=Object(i.a)(e,["innerRef","navigate","onClick"]),u=a.target,f=Object(l.a)({},a,{onClick:function(e){try{o&&o(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||u&&"_self"!==u||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return f.ref=m!==d&&t||n,c.a.createElement("a",f)}));var b=d((function(e,t){var n=e.component,o=void 0===n?y:n,a=e.replace,u=e.to,b=e.innerRef,v=Object(i.a)(e,["component","replace","to","innerRef"]);return c.a.createElement(r.d.Consumer,null,(function(e){e||Object(f.a)(!1);var n=e.history,r=p(s(u,e.location),e.location),i=r?n.createHref(r):"",y=Object(l.a)({},v,{href:i,navigate:function(){var t=s(u,e.location);(a?n.replace:n.push)(t)}});return m!==d?y.ref=t||b:y.innerRef=b,c.a.createElement(o,y)}))})),v=function(e){return e},E=c.a.forwardRef;void 0===E&&(E=v);E((function(e,t){var n=e["aria-current"],o=void 0===n?"page":n,a=e.activeClassName,u=void 0===a?"active":a,m=e.activeStyle,d=e.className,y=e.exact,O=e.isActive,h=e.location,_=e.strict,j=e.style,w=e.to,g=e.innerRef,S=Object(i.a)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","strict","style","to","innerRef"]);return c.a.createElement(r.d.Consumer,null,(function(e){e||Object(f.a)(!1);var n=h||e.location,a=p(s(w,n),n),i=a.pathname,C=i&&i.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),R=C?Object(r.e)(n.pathname,{path:C,exact:y,strict:_}):null,P=!!(O?O(R,n):R),N=P?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(d,u):d,A=P?Object(l.a)({},j,{},m):j,D=Object(l.a)({"aria-current":P&&o||null,className:N,style:A,to:a},S);return v!==E?D.ref=t||g:D.innerRef=g,c.a.createElement(b,D)}))}))},482:function(e,t,n){e.exports={orders:"_3tRKM",orderBox:"_3pOEe",order:"_2sZo6"}}}]);