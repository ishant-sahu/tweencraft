(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[5],{201:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(59),c=n(111),i=n(431),l=n.n(i);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=f(t).call(this,e))||"object"!==u(r)&&"function"!=typeof r?m(o):r).state={email:"",phone:"",otp:""},n.onChange=n.onChange.bind(m(n)),n.submit=n.submit.bind(m(n)),n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(o=[{key:"onChange",value:function(e,t){var n,o,r,a=e.target.value;this.setState((r=a,(o=t)in(n={})?Object.defineProperty(n,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[o]=r,n))}},{key:"submit",value:function(e){var t=this;e.preventDefault(),axios.post("/message",this.state).then((function(e){t.setState({name:"",email:"",phone:"",message:""}),$("#cmsgSubmit").text("Message sent successfully")})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"contact",className:"".concat(l.a.login)},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("h2",null,"LOGIN"))),r.a.createElement("div",{className:"row ".concat(l.a.formWrapper)},r.a.createElement("div",{className:"col-lg-4 offset-lg-4"},r.a.createElement("form",{id:"contactForm","data-toggle":"validator","data-focus":"false",onSubmit:this.submit},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control-input",id:"cname",required:!0,value:this.state.name,onChange:function(t){e.onChange(t,"name")}}),r.a.createElement("label",{className:"label-control",htmlFor:"cname"},"Name"),r.a.createElement("div",{className:"help-block with-errors"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"phone",className:"form-control-input",id:"cphone",required:!0,value:this.state.phone,onChange:function(t){e.onChange(t,"phone")}}),r.a.createElement("label",{className:"label-control",htmlFor:"cphone"},"Phone"),r.a.createElement("div",{className:"help-block with-errors"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"submit",className:"form-control-submit-button"},"SUBMIT")),r.a.createElement("div",{className:"form-message"},r.a.createElement("div",{id:"cmsgSubmit",className:"h3 text-center hidden"})))))))}}])&&s(n.prototype,o),a&&s(n,a),t}(r.a.Component);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _=function(e){function t(){return h(this,t),d(this,g(t).apply(this,arguments))}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,null))}}])&&v(n.prototype,o),a&&v(n,a),t}(r.a.Component);t.default=Object(a.c)((function(e){return{homeData:e.home}}),(function(e){return{fetchSamples:function(){return e(c.a.fetchSamples())}}}))(_)},431:function(e,t,n){e.exports={login:"_9jtsi",formWrapper:"_3a5xm"}}}]);