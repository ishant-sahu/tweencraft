(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[0],{202:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(60),l=a(15),c=a(431),i=a.n(c),m=a(112);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(e){var a,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(a=!(o=p(t).call(this,e))||"object"!==s(o)&&"function"!=typeof o?f(n):o).state={selectedRadio:"noscript"},a.onChange=a.onChange.bind(f(a)),a}var a,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),a=t,(n=[{key:"onChange",value:function(e,t){var a,n,o,r=e.target.value;this.setState((o=r,(n=t)in(a={})?Object.defineProperty(a,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[n]=o,a))}},{key:"renderScreens",value:function(){return o.a.createElement("div",{className:"row",style:{marginTop:"50px"}},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("h5",{style:{marginTop:"30px"}},"When your contact information should be displayed"),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-4"},o.a.createElement("div",{className:"form-control-radio-group"},o.a.createElement("input",{id:"option4",name:"option4",type:"checkbox"}),o.a.createElement("label",{htmlFor:"option4",className:i.a.labelText},"Always on screen")),o.a.createElement("div",{className:i.a.imgItem},o.a.createElement("img",{src:m.h}))),o.a.createElement("div",{className:"col-lg-4"},o.a.createElement("div",{className:"form-control-radio-group"},o.a.createElement("input",{id:"option5",name:"option5",type:"checkbox"}),o.a.createElement("label",{htmlFor:"option5",className:i.a.labelText},"In Dialogue")),o.a.createElement("div",{className:i.a.imgItem},o.a.createElement("img",{src:m.d}))),o.a.createElement("div",{className:"col-lg-4"},o.a.createElement("div",{className:"form-control-radio-group"},o.a.createElement("input",{id:"option6",name:"option6",type:"checkbox"}),o.a.createElement("label",{htmlFor:"option6",className:i.a.labelText},"In the End")),o.a.createElement("div",{className:i.a.imgItem},o.a.createElement("img",{src:m.b}))))))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"contact",className:"".concat(i.a.callOfAction)},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("h2",null,"CALL OF ACTION"),o.a.createElement("h5",{style:{marginTop:"30px"}},"Your viewer should contact you at"),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"offset-lg-2 col-lg-4 "},o.a.createElement("div",{className:"form-control-radio-group"},o.a.createElement("input",{id:"option1",name:"option1",type:"checkbox"}),o.a.createElement("label",{htmlFor:"option1",className:i.a.labelText},"Phone no in Video"))),o.a.createElement("div",{className:"col-lg-4 form-group"},o.a.createElement("input",{type:"text",className:"form-control-input",id:"cname",required:!0,value:this.state.name,onChange:function(t){e.onChange(t,"name")}})," ",o.a.createElement("label",{className:"label-control",htmlFor:"cname"},"Phone no"),o.a.createElement("div",{className:"help-block with-errors"}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"offset-lg-2 col-lg-4 "},o.a.createElement("div",{className:"form-control-radio-group"},o.a.createElement("input",{id:"option2",name:"option2",type:"checkbox"}),o.a.createElement("label",{htmlFor:"option2",className:i.a.labelText},"Website in Video"))),o.a.createElement("div",{className:"col-lg-4 form-group"},o.a.createElement("input",{type:"text",className:"form-control-input",id:"cname",required:!0,value:this.state.name,onChange:function(t){e.onChange(t,"name")}}),o.a.createElement("label",{className:"label-control",htmlFor:"cname"},"Website URL"),o.a.createElement("div",{className:"help-block with-errors"}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"offset-lg-2 col-lg-4 "},o.a.createElement("div",{className:"form-control-radio-group"},o.a.createElement("input",{id:"option3",name:"option3",type:"checkbox"}),o.a.createElement("label",{htmlFor:"option3",className:i.a.labelText},"Email in Video"))),o.a.createElement("div",{className:"col-lg-4 form-group"},o.a.createElement("input",{type:"text",className:"form-control-input",id:"cname",required:!0,value:this.state.name,onChange:function(t){e.onChange(t,"name")}}),o.a.createElement("label",{className:"label-control",htmlFor:"cname"},"Email"),o.a.createElement("div",{className:"help-block with-errors"}))),this.renderScreens(),o.a.createElement("div",{className:"col-lg-4 offset-lg-4"},o.a.createElement("div",{className:"form-group"},o.a.createElement("button",{type:"submit",className:"form-control-submit-button"},"NEXT")))))))}}])&&u(a.prototype,n),r&&u(a,r),t}(o.a.Component);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=function(e){function t(){return y(this,t),v(this,g(t).apply(this,arguments))}var a,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,e),a=t,(n=[{key:"componentDidMount",value:function(){this.props.fetchSamples()}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(d,null))}}])&&E(a.prototype,n),r&&E(a,r),t}(o.a.Component);t.default=Object(r.c)((function(e){return{homeData:e.home}}),(function(e){return{fetchSamples:function(){return e(l.a.fetchSamples())}}}))(w)},431:function(e,t,a){e.exports={callOfAction:"_2hjxr",item:"_3BSc6",imgItem:"l-9Fh",labelText:"_1u1V6"}}}]);