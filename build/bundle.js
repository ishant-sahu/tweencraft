/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		"main": 0
/******/ 	}
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"Home":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "" + chunkId + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + chunkId + ".bundle.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./src/client/actions/home.js":
/*!************************************!*\
  !*** ./src/client/actions/home.js ***!
  \************************************/
/*! exports provided: FETCH_STORIES, fetchStories, fetchSamples */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_STORIES\", function() { return FETCH_STORIES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchStories\", function() { return fetchStories; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchSamples\", function() { return fetchSamples; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\nvar FETCH_STORIES = 'FETCH_STORIES';\nvar fetchStories = function fetchStories() {\n  return (/*#__PURE__*/function () {\n      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {\n        var res;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                _context.next = 3;\n                return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('http://chimpoon.com:8080/getWebsiteInfo', {}, {\n                  auth: {\n                    username: 'vipin',\n                    password: 'gravity'\n                  }\n                });\n\n              case 3:\n                res = _context.sent;\n                dispatch({\n                  type: FETCH_STORIES,\n                  payload: res\n                });\n                _context.next = 9;\n                break;\n\n              case 7:\n                _context.prev = 7;\n                _context.t0 = _context[\"catch\"](0);\n\n              case 9:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 7]]);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }()\n  );\n};\nvar fetchSamples = function fetchSamples() {\n  return (/*#__PURE__*/function () {\n      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch) {\n        var res;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.prev = 0;\n                _context2.next = 3;\n                return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('http://chimpoon.com:8080/getWebsiteInfo', {}, {\n                  auth: {\n                    username: 'vipin',\n                    password: 'gravity'\n                  }\n                });\n\n              case 3:\n                res = _context2.sent;\n                dispatch({\n                  type: FETCH_STORIES,\n                  payload: res\n                });\n                _context2.next = 9;\n                break;\n\n              case 7:\n                _context2.prev = 7;\n                _context2.t0 = _context2[\"catch\"](0);\n\n              case 9:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, null, [[0, 7]]);\n      }));\n\n      return function (_x2) {\n        return _ref2.apply(this, arguments);\n      };\n    }()\n  );\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(FETCH_STORIES, \"FETCH_STORIES\", \"/mnt/codebase/tweencraft/src/client/actions/home.js\");\n  reactHotLoader.register(fetchStories, \"fetchStories\", \"/mnt/codebase/tweencraft/src/client/actions/home.js\");\n  reactHotLoader.register(fetchSamples, \"fetchSamples\", \"/mnt/codebase/tweencraft/src/client/actions/home.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/client/actions/home.js?");

/***/ }),

/***/ "./src/client/actions/index.js":
/*!*************************************!*\
  !*** ./src/client/actions/index.js ***!
  \*************************************/
/*! exports provided: homeAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/client/actions/home.js\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"homeAction\", function() { return _home__WEBPACK_IMPORTED_MODULE_0__; });\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n//# sourceURL=webpack:///./src/client/actions/index.js?");

/***/ }),

/***/ "./src/client/components/Loader/index.js":
/*!***********************************************!*\
  !*** ./src/client/components/Loader/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ \"./src/client/components/Loader/styles.scss\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\nvar _default = function _default() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.spinnerWrapper\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.spinner\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.bounce1\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.bounce2\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.bounce3\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/mnt/codebase/tweencraft/src/client/components/Loader/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/client/components/Loader/index.js?");

/***/ }),

/***/ "./src/client/components/Loader/styles.scss":
/*!**************************************************!*\
  !*** ./src/client/components/Loader/styles.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"spinnerWrapper\":\"styles__spinnerWrapper\",\"spinner\":\"styles__spinner\",\"sk-bouncedelay\":\"styles__sk-bouncedelay\",\"bounce1\":\"styles__bounce1\",\"bounce2\":\"styles__bounce2\"};\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./src/client/components/Loader/styles.scss?");

/***/ }),

/***/ "./src/client/components/NavBar/index.js":
/*!***********************************************!*\
  !*** ./src/client/components/NavBar/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ \"./src/client/components/NavBar/styles.scss\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/ */ \"./src/client/images/index.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\nvar _default = function _default() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n    className: \"navbar navbar-expand-md navbar-dark \".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.navbarCustom, \" fixed-top\")\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    className: \"navbar-brand \".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.navbarBrand, \" \").concat(_styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.logoImage),\n    href: \"/\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: _images___WEBPACK_IMPORTED_MODULE_2__[\"logo\"],\n    alt: \"logo\"\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/mnt/codebase/tweencraft/src/client/components/NavBar/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/client/components/NavBar/index.js?");

/***/ }),

/***/ "./src/client/components/NavBar/styles.scss":
/*!**************************************************!*\
  !*** ./src/client/components/NavBar/styles.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"navbarCustom\":\"styles__navbarCustom\",\"navbarBrand\":\"styles__navbarBrand\",\"logoImage\":\"styles__logoImage\",\"logoText\":\"styles__logoText\"};\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./src/client/components/NavBar/styles.scss?");

/***/ }),

/***/ "./src/client/images/details-lightbox-1.png":
/*!**************************************************!*\
  !*** ./src/client/images/details-lightbox-1.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"details-lightbox-1.a3f67ca2.png\";\n\n//# sourceURL=webpack:///./src/client/images/details-lightbox-1.png?");

/***/ }),

/***/ "./src/client/images/details-lightbox-2.png":
/*!**************************************************!*\
  !*** ./src/client/images/details-lightbox-2.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"details-lightbox-2.e70eee36.png\";\n\n//# sourceURL=webpack:///./src/client/images/details-lightbox-2.png?");

/***/ }),

/***/ "./src/client/images/features-iphone-2.png":
/*!*************************************************!*\
  !*** ./src/client/images/features-iphone-2.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"features-iphone-2.149ca1fa.png\";\n\n//# sourceURL=webpack:///./src/client/images/features-iphone-2.png?");

/***/ }),

/***/ "./src/client/images/features-iphone-3.png":
/*!*************************************************!*\
  !*** ./src/client/images/features-iphone-3.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"features-iphone-3.27a2c330.png\";\n\n//# sourceURL=webpack:///./src/client/images/features-iphone-3.png?");

/***/ }),

/***/ "./src/client/images/index.js":
/*!************************************!*\
  !*** ./src/client/images/index.js ***!
  \************************************/
/*! exports provided: logo, headerIphone, testimonial1, testimonial2, testimonial3, testimonial4, testimonial5, testimonial6, featuresIphone1, featuresIphone2, featuresIphone3, videoFrame, details1Iphone, details2Iphone, detailsLightBox1, detailsLightBox2, screenShot1, screenShot2, screenShot3, screenShot4, screenShot5, screenShot6, screenShot7, screenShot8, screenShot9, screenShot10, download, qrCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tweenkraft_fb_tweencraft_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tweenkraft/fb_tweencraft_logo.png */ \"./src/client/images/tweenkraft/fb_tweencraft_logo.png\");\n/* harmony import */ var _tweenkraft_fb_tweencraft_logo_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tweenkraft_fb_tweencraft_logo_png__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"logo\", function() { return _tweenkraft_fb_tweencraft_logo_png__WEBPACK_IMPORTED_MODULE_0___default.a; });\n/* harmony import */ var _tweenkraft_header_iphone_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tweenkraft/header-iphone.png */ \"./src/client/images/tweenkraft/header-iphone.png\");\n/* harmony import */ var _tweenkraft_header_iphone_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tweenkraft_header_iphone_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"headerIphone\", function() { return _tweenkraft_header_iphone_png__WEBPACK_IMPORTED_MODULE_1___default.a; });\n/* harmony import */ var _testimonial_1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./testimonial-1.jpg */ \"./src/client/images/testimonial-1.jpg\");\n/* harmony import */ var _testimonial_1_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_testimonial_1_jpg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"testimonial1\", function() { return _testimonial_1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a; });\n/* harmony import */ var _testimonial_2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./testimonial-2.jpg */ \"./src/client/images/testimonial-2.jpg\");\n/* harmony import */ var _testimonial_2_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_testimonial_2_jpg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"testimonial2\", function() { return _testimonial_2_jpg__WEBPACK_IMPORTED_MODULE_3___default.a; });\n/* harmony import */ var _testimonial_3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./testimonial-3.jpg */ \"./src/client/images/testimonial-3.jpg\");\n/* harmony import */ var _testimonial_3_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_testimonial_3_jpg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"testimonial3\", function() { return _testimonial_3_jpg__WEBPACK_IMPORTED_MODULE_4___default.a; });\n/* harmony import */ var _testimonial_4_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./testimonial-4.jpg */ \"./src/client/images/testimonial-4.jpg\");\n/* harmony import */ var _testimonial_4_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_testimonial_4_jpg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"testimonial4\", function() { return _testimonial_4_jpg__WEBPACK_IMPORTED_MODULE_5___default.a; });\n/* harmony import */ var _testimonial_5_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./testimonial-5.jpg */ \"./src/client/images/testimonial-5.jpg\");\n/* harmony import */ var _testimonial_5_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_testimonial_5_jpg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"testimonial5\", function() { return _testimonial_5_jpg__WEBPACK_IMPORTED_MODULE_6___default.a; });\n/* harmony import */ var _testimonial_6_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./testimonial-6.jpg */ \"./src/client/images/testimonial-6.jpg\");\n/* harmony import */ var _testimonial_6_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_testimonial_6_jpg__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"testimonial6\", function() { return _testimonial_6_jpg__WEBPACK_IMPORTED_MODULE_7___default.a; });\n/* harmony import */ var _tweenkraft_features_iphone_1_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tweenkraft/features-iphone-1.png */ \"./src/client/images/tweenkraft/features-iphone-1.png\");\n/* harmony import */ var _tweenkraft_features_iphone_1_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tweenkraft_features_iphone_1_png__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"featuresIphone1\", function() { return _tweenkraft_features_iphone_1_png__WEBPACK_IMPORTED_MODULE_8___default.a; });\n/* harmony import */ var _features_iphone_2_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features-iphone-2.png */ \"./src/client/images/features-iphone-2.png\");\n/* harmony import */ var _features_iphone_2_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_features_iphone_2_png__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"featuresIphone2\", function() { return _features_iphone_2_png__WEBPACK_IMPORTED_MODULE_9___default.a; });\n/* harmony import */ var _features_iphone_3_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./features-iphone-3.png */ \"./src/client/images/features-iphone-3.png\");\n/* harmony import */ var _features_iphone_3_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_features_iphone_3_png__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"featuresIphone3\", function() { return _features_iphone_3_png__WEBPACK_IMPORTED_MODULE_10___default.a; });\n/* harmony import */ var _tweenkraft_video_frame_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tweenkraft/video-frame.jpg */ \"./src/client/images/tweenkraft/video-frame.jpg\");\n/* harmony import */ var _tweenkraft_video_frame_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_tweenkraft_video_frame_jpg__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"videoFrame\", function() { return _tweenkraft_video_frame_jpg__WEBPACK_IMPORTED_MODULE_11___default.a; });\n/* harmony import */ var _tweenkraft_details_1_iphone_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tweenkraft/details-1-iphone.png */ \"./src/client/images/tweenkraft/details-1-iphone.png\");\n/* harmony import */ var _tweenkraft_details_1_iphone_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_tweenkraft_details_1_iphone_png__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"details1Iphone\", function() { return _tweenkraft_details_1_iphone_png__WEBPACK_IMPORTED_MODULE_12___default.a; });\n/* harmony import */ var _tweenkraft_details_2_iphone_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tweenkraft/details-2-iphone.png */ \"./src/client/images/tweenkraft/details-2-iphone.png\");\n/* harmony import */ var _tweenkraft_details_2_iphone_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_tweenkraft_details_2_iphone_png__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"details2Iphone\", function() { return _tweenkraft_details_2_iphone_png__WEBPACK_IMPORTED_MODULE_13___default.a; });\n/* harmony import */ var _details_lightbox_1_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./details-lightbox-1.png */ \"./src/client/images/details-lightbox-1.png\");\n/* harmony import */ var _details_lightbox_1_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_details_lightbox_1_png__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"detailsLightBox1\", function() { return _details_lightbox_1_png__WEBPACK_IMPORTED_MODULE_14___default.a; });\n/* harmony import */ var _details_lightbox_2_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./details-lightbox-2.png */ \"./src/client/images/details-lightbox-2.png\");\n/* harmony import */ var _details_lightbox_2_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_details_lightbox_2_png__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"detailsLightBox2\", function() { return _details_lightbox_2_png__WEBPACK_IMPORTED_MODULE_15___default.a; });\n/* harmony import */ var _tweenkraft_screenshot_1_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tweenkraft/screenshot-1.png */ \"./src/client/images/tweenkraft/screenshot-1.png\");\n/* harmony import */ var _tweenkraft_screenshot_1_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_tweenkraft_screenshot_1_png__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"screenShot1\", function() { return _tweenkraft_screenshot_1_png__WEBPACK_IMPORTED_MODULE_16___default.a; });\n/* harmony import */ var _tweenkraft_screenshot_2_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tweenkraft/screenshot-2.png */ \"./src/client/images/tweenkraft/screenshot-2.png\");\n/* harmony import */ var _tweenkraft_screenshot_2_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_tweenkraft_screenshot_2_png__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"screenShot2\", function() { return _tweenkraft_screenshot_2_png__WEBPACK_IMPORTED_MODULE_17___default.a; });\n/* harmony import */ var _tweenkraft_screenshot_3_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tweenkraft/screenshot-3.png */ \"./src/client/images/tweenkraft/screenshot-3.png\");\n/* harmony import */ var _tweenkraft_screenshot_3_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_tweenkraft_screenshot_3_png__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"screenShot3\", function() { return _tweenkraft_screenshot_3_png__WEBPACK_IMPORTED_MODULE_18___default.a; });\n/* harmony import */ var _tweenkraft_screenshot_4_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tweenkraft/screenshot-4.png */ \"./src/client/images/tweenkraft/screenshot-4.png\");\n/* harmony import */ var _tweenkraft_screenshot_4_png__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_tweenkraft_screenshot_4_png__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"screenShot4\", function() { return _tweenkraft_screenshot_4_png__WEBPACK_IMPORTED_MODULE_19___default.a; });\n/* harmony import */ var _tweenkraft_screenshot_5_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tweenkraft/screenshot-5.png */ \"./src/client/images/tweenkraft/screenshot-5.png\");\n/* harmony import */ var _tweenkraft_screenshot_5_png__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_tweenkraft_screenshot_5_png__WEBPACK_IMPORTED_MODULE_20__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"screenShot5\", function() { return _tweenkraft_screenshot_5_png__WEBPACK_IMPORTED_MODULE_20___default.a; });\n/* harmony import */ var _tweenkraft_screenshot_6_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./tweenkraft/screenshot-6.png */ \"./src/client/images/tweenkraft/screenshot-6.png\");\n/* harmony import */ var _tweenkraft_screenshot_6_png__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_tweenkraft_screenshot_6_png__WEBPACK_IMPORTED_MODULE_21__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"screenShot6\", function() { return _tweenkraft_screenshot_6_png__WEBPACK_IMPORTED_MODULE_21___default.a; });\n/* harmony import */ var _tweenkraft_screenshot_7_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./tweenkraft/screenshot-7.png */ \"./src/client/images/tweenkraft/screenshot-7.png\");\n/* harmony import */ var _tweenkraft_screenshot_7_png__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_tweenkraft_screenshot_7_png__WEBPACK_IMPORTED_MODULE_22__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"screenShot7\", function() { return _tweenkraft_screenshot_7_png__WEBPACK_IMPORTED_MODULE_22___default.a; });\n/* harmony import */ var _tweenkraft_screenshot_8_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./tweenkraft/screenshot-8.png */ \"./src/client/images/tweenkraft/screenshot-8.png\");\n/* harmony import */ var _tweenkraft_screenshot_8_png__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_tweenkraft_screenshot_8_png__WEBPACK_IMPORTED_MODULE_23__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"screenShot8\", function() { return _tweenkraft_screenshot_8_png__WEBPACK_IMPORTED_MODULE_23___default.a; });\n/* harmony import */ var _tweenkraft_screenshot_9_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./tweenkraft/screenshot-9.png */ \"./src/client/images/tweenkraft/screenshot-9.png\");\n/* harmony import */ var _tweenkraft_screenshot_9_png__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_tweenkraft_screenshot_9_png__WEBPACK_IMPORTED_MODULE_24__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"screenShot9\", function() { return _tweenkraft_screenshot_9_png__WEBPACK_IMPORTED_MODULE_24___default.a; });\n/* harmony import */ var _tweenkraft_screenshot_10_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./tweenkraft/screenshot-10.png */ \"./src/client/images/tweenkraft/screenshot-10.png\");\n/* harmony import */ var _tweenkraft_screenshot_10_png__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_tweenkraft_screenshot_10_png__WEBPACK_IMPORTED_MODULE_25__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"screenShot10\", function() { return _tweenkraft_screenshot_10_png__WEBPACK_IMPORTED_MODULE_25___default.a; });\n/* harmony import */ var _tweenkraft_download_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./tweenkraft/download.png */ \"./src/client/images/tweenkraft/download.png\");\n/* harmony import */ var _tweenkraft_download_png__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_tweenkraft_download_png__WEBPACK_IMPORTED_MODULE_26__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"download\", function() { return _tweenkraft_download_png__WEBPACK_IMPORTED_MODULE_26___default.a; });\n/* harmony import */ var _tweenkraft_tweencraft_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./tweenkraft/tweencraft.png */ \"./src/client/images/tweenkraft/tweencraft.png\");\n/* harmony import */ var _tweenkraft_tweencraft_png__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_tweenkraft_tweencraft_png__WEBPACK_IMPORTED_MODULE_27__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"qrCode\", function() { return _tweenkraft_tweencraft_png__WEBPACK_IMPORTED_MODULE_27___default.a; });\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/client/images/index.js?");

/***/ }),

/***/ "./src/client/images/testimonial-1.jpg":
/*!*********************************************!*\
  !*** ./src/client/images/testimonial-1.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"testimonial-1.eaa9b2b4.jpg\";\n\n//# sourceURL=webpack:///./src/client/images/testimonial-1.jpg?");

/***/ }),

/***/ "./src/client/images/testimonial-2.jpg":
/*!*********************************************!*\
  !*** ./src/client/images/testimonial-2.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"testimonial-2.c01a797e.jpg\";\n\n//# sourceURL=webpack:///./src/client/images/testimonial-2.jpg?");

/***/ }),

/***/ "./src/client/images/testimonial-3.jpg":
/*!*********************************************!*\
  !*** ./src/client/images/testimonial-3.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"testimonial-3.33d0ac89.jpg\";\n\n//# sourceURL=webpack:///./src/client/images/testimonial-3.jpg?");

/***/ }),

/***/ "./src/client/images/testimonial-4.jpg":
/*!*********************************************!*\
  !*** ./src/client/images/testimonial-4.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"testimonial-4.700ca185.jpg\";\n\n//# sourceURL=webpack:///./src/client/images/testimonial-4.jpg?");

/***/ }),

/***/ "./src/client/images/testimonial-5.jpg":
/*!*********************************************!*\
  !*** ./src/client/images/testimonial-5.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"testimonial-5.e706dd8f.jpg\";\n\n//# sourceURL=webpack:///./src/client/images/testimonial-5.jpg?");

/***/ }),

/***/ "./src/client/images/testimonial-6.jpg":
/*!*********************************************!*\
  !*** ./src/client/images/testimonial-6.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"testimonial-6.6b6adffd.jpg\";\n\n//# sourceURL=webpack:///./src/client/images/testimonial-6.jpg?");

/***/ }),

/***/ "./src/client/images/tweenkraft/details-1-iphone.png":
/*!***********************************************************!*\
  !*** ./src/client/images/tweenkraft/details-1-iphone.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"details-1-iphone.1aeb2f37.png\";\n\n//# sourceURL=webpack:///./src/client/images/tweenkraft/details-1-iphone.png?");

/***/ }),

/***/ "./src/client/images/tweenkraft/details-2-iphone.png":
/*!***********************************************************!*\
  !*** ./src/client/images/tweenkraft/details-2-iphone.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"details-2-iphone.2438697c.png\";\n\n//# sourceURL=webpack:///./src/client/images/tweenkraft/details-2-iphone.png?");

/***/ }),

/***/ "./src/client/images/tweenkraft/download.png":
/*!***************************************************!*\
  !*** ./src/client/images/tweenkraft/download.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"download.69895db4.png\";\n\n//# sourceURL=webpack:///./src/client/images/tweenkraft/download.png?");

/***/ }),

/***/ "./src/client/images/tweenkraft/fb_tweencraft_logo.png":
/*!*************************************************************!*\
  !*** ./src/client/images/tweenkraft/fb_tweencraft_logo.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fb_tweencraft_logo.108ba918.png\";\n\n//# sourceURL=webpack:///./src/client/images/tweenkraft/fb_tweencraft_logo.png?");

/***/ }),

/***/ "./src/client/images/tweenkraft/features-iphone-1.png":
/*!************************************************************!*\
  !*** ./src/client/images/tweenkraft/features-iphone-1.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"features-iphone-1.ef460a59.png\";\n\n//# sourceURL=webpack:///./src/client/images/tweenkraft/features-iphone-1.png?");

/***/ }),

/***/ "./src/client/images/tweenkraft/header-iphone.png":
/*!********************************************************!*\
  !*** ./src/client/images/tweenkraft/header-iphone.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"header-iphone.04497e3d.png\";\n\n//# sourceURL=webpack:///./src/client/images/tweenkraft/header-iphone.png?");

/***/ }),

/***/ "./src/client/images/tweenkraft/screenshot-1.png":
/*!*******************************************************!*\
  !*** ./src/client/images/tweenkraft/screenshot-1.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"screenshot-1.4404fb24.png\";\n\n//# sourceURL=webpack:///./src/client/images/tweenkraft/screenshot-1.png?");

/***/ }),

/***/ "./src/client/images/tweenkraft/screenshot-10.png":
/*!********************************************************!*\
  !*** ./src/client/images/tweenkraft/screenshot-10.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"screenshot-10.01c9a722.png\";\n\n//# sourceURL=webpack:///./src/client/images/tweenkraft/screenshot-10.png?");

/***/ }),

/***/ "./src/client/images/tweenkraft/screenshot-2.png":
/*!*******************************************************!*\
  !*** ./src/client/images/tweenkraft/screenshot-2.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"screenshot-2.179dc0b1.png\";\n\n//# sourceURL=webpack:///./src/client/images/tweenkraft/screenshot-2.png?");

/***/ }),

/***/ "./src/client/images/tweenkraft/screenshot-3.png":
/*!*******************************************************!*\
  !*** ./src/client/images/tweenkraft/screenshot-3.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"screenshot-3.31d444ef.png\";\n\n//# sourceURL=webpack:///./src/client/images/tweenkraft/screenshot-3.png?");

/***/ }),

/***/ "./src/client/images/tweenkraft/screenshot-4.png":
/*!*******************************************************!*\
  !*** ./src/client/images/tweenkraft/screenshot-4.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"screenshot-4.b79e6a5a.png\";\n\n//# sourceURL=webpack:///./src/client/images/tweenkraft/screenshot-4.png?");

/***/ }),

/***/ "./src/client/images/tweenkraft/screenshot-5.png":
/*!*******************************************************!*\
  !*** ./src/client/images/tweenkraft/screenshot-5.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"screenshot-5.019ca225.png\";\n\n//# sourceURL=webpack:///./src/client/images/tweenkraft/screenshot-5.png?");

/***/ }),

/***/ "./src/client/images/tweenkraft/screenshot-6.png":
/*!*******************************************************!*\
  !*** ./src/client/images/tweenkraft/screenshot-6.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"screenshot-6.868b13e1.png\";\n\n//# sourceURL=webpack:///./src/client/images/tweenkraft/screenshot-6.png?");

/***/ }),

/***/ "./src/client/images/tweenkraft/screenshot-7.png":
/*!*******************************************************!*\
  !*** ./src/client/images/tweenkraft/screenshot-7.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"screenshot-7.b8f6a85e.png\";\n\n//# sourceURL=webpack:///./src/client/images/tweenkraft/screenshot-7.png?");

/***/ }),

/***/ "./src/client/images/tweenkraft/screenshot-8.png":
/*!*******************************************************!*\
  !*** ./src/client/images/tweenkraft/screenshot-8.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"screenshot-8.46465f4e.png\";\n\n//# sourceURL=webpack:///./src/client/images/tweenkraft/screenshot-8.png?");

/***/ }),

/***/ "./src/client/images/tweenkraft/screenshot-9.png":
/*!*******************************************************!*\
  !*** ./src/client/images/tweenkraft/screenshot-9.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"screenshot-9.d1af0fbf.png\";\n\n//# sourceURL=webpack:///./src/client/images/tweenkraft/screenshot-9.png?");

/***/ }),

/***/ "./src/client/images/tweenkraft/tweencraft.png":
/*!*****************************************************!*\
  !*** ./src/client/images/tweenkraft/tweencraft.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"tweencraft.3cd36e10.png\";\n\n//# sourceURL=webpack:///./src/client/images/tweenkraft/tweencraft.png?");

/***/ }),

/***/ "./src/client/images/tweenkraft/video-frame.jpg":
/*!******************************************************!*\
  !*** ./src/client/images/tweenkraft/video-frame.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"video-frame.4181eb00.jpg\";\n\n//# sourceURL=webpack:///./src/client/images/tweenkraft/video-frame.jpg?");

/***/ }),

/***/ "./src/client/pages/App.js":
/*!*********************************!*\
  !*** ./src/client/pages/App.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_NavBar___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NavBar/ */ \"./src/client/components/NavBar/index.js\");\n/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.css */ \"./src/client/pages/app.css\");\n/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_4__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nvar App = function App(_ref) {\n  var route = _ref.route;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavBar___WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), Object(react_router_config__WEBPACK_IMPORTED_MODULE_1__[\"renderRoutes\"])(route.routes));\n};\n\nvar _default = Object(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_4__[\"hot\"])(App);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(App, \"App\", \"/mnt/codebase/tweencraft/src/client/pages/App.js\");\n  reactHotLoader.register(_default, \"default\", \"/mnt/codebase/tweencraft/src/client/pages/App.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/client/pages/App.js?");

/***/ }),

/***/ "./src/client/pages/app.css":
/*!**********************************!*\
  !*** ./src/client/pages/app.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./src/client/pages/app.css?");

/***/ }),

/***/ "./src/client/pages/index.js":
/*!***********************************!*\
  !*** ./src/client/pages/index.js ***!
  \***********************************/
/*! exports provided: Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Home\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @loadable/component */ \"@loadable/component\");\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Loader___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Loader/ */ \"./src/client/components/Loader/index.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\nvar Home = _loadable_component__WEBPACK_IMPORTED_MODULE_1___default()({\n  resolved: {},\n  chunkName: function chunkName() {\n    return \"Home\";\n  },\n  isReady: function isReady(props) {\n    var key = this.resolve(props);\n\n    if (this.resolved[key] === false) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n  importAsync: function importAsync() {\n    return __webpack_require__.e(/*! import() | Home */ \"Home\").then(__webpack_require__.bind(null, /*! ./Home */ \"./src/client/pages/Home/index.js\"));\n  },\n  requireAsync: function requireAsync(props) {\n    var _this = this;\n\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./Home */ \"./src/client/pages/Home/index.js\");\n    }\n\n    return eval('require.resolve')(\"./Home\");\n  }\n}, {\n  fallback: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loader___WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)\n});\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Home, \"Home\", \"/mnt/codebase/tweencraft/src/client/pages/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/client/pages/index.js?");

/***/ }),

/***/ "./src/client/reducers/homeReducer.js":
/*!********************************************!*\
  !*** ./src/client/reducers/homeReducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\nvar _default = function _default() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"homeAction\"].FETCH_STORIES:\n      return action.payload.data;\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/mnt/codebase/tweencraft/src/client/reducers/homeReducer.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/client/reducers/homeReducer.js?");

/***/ }),

/***/ "./src/client/reducers/index.js":
/*!**************************************!*\
  !*** ./src/client/reducers/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! connected-react-router */ \"connected-react-router\");\n/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _homeReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homeReducer */ \"./src/client/reducers/homeReducer.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\nvar _default = function _default(history) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"combineReducers\"])({\n    home: _homeReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    router: Object(connected_react_router__WEBPACK_IMPORTED_MODULE_0__[\"connectRouter\"])(history)\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/mnt/codebase/tweencraft/src/client/reducers/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/client/reducers/index.js?");

/***/ }),

/***/ "./src/helpers/createStore.js":
/*!************************************!*\
  !*** ./src/helpers/createStore.js ***!
  \************************************/
/*! exports provided: configureStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"configureStore\", function() { return configureStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! history */ \"history\");\n/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connected-react-router */ \"connected-react-router\");\n/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _client_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client/reducers */ \"./src/client/reducers/index.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nvar configureStore = function configureStore() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var url = arguments.length > 1 ? arguments[1] : undefined;\n  var history = getHistory(url);\n  var middlewares = [Object(connected_react_router__WEBPACK_IMPORTED_MODULE_2__[\"routerMiddleware\"])(history), redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a];\n  var reducers = Object(_client_reducers__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(history);\n  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducers, state, redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"].apply(void 0, middlewares));\n  moduleHotReload(history);\n  return {\n    store: store,\n    history: history\n  };\n};\n\nvar moduleHotReload = function moduleHotReload(history) {\n  if (false) {}\n};\n\nvar getHistory = function getHistory(url) {\n  var isServer = typeof window === 'undefined';\n  var history = isServer ? Object(history__WEBPACK_IMPORTED_MODULE_1__[\"createMemoryHistory\"])({\n    initialEntries: [url || '/']\n  }) : Object(history__WEBPACK_IMPORTED_MODULE_1__[\"createBrowserHistory\"])();\n  return history;\n};\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(configureStore, \"configureStore\", \"/mnt/codebase/tweencraft/src/helpers/createStore.js\");\n  reactHotLoader.register(moduleHotReload, \"moduleHotReload\", \"/mnt/codebase/tweencraft/src/helpers/createStore.js\");\n  reactHotLoader.register(getHistory, \"getHistory\", \"/mnt/codebase/tweencraft/src/helpers/createStore.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/helpers/createStore.js?");

/***/ }),

/***/ "./src/helpers/renderer.js":
/*!*********************************!*\
  !*** ./src/helpers/renderer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @loadable/server */ \"@loadable/server\");\n/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loadable_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../routes */ \"./src/routes.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\nvar _default = function _default(req, store) {\n  var statsFile = path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(process.cwd(), 'public/loadable-stats.json');\n  var extractor;\n\n  if (true) {\n    extractor = new _loadable_server__WEBPACK_IMPORTED_MODULE_2__[\"ChunkExtractor\"]({\n      statsFile: statsFile\n    });\n  } else {}\n\n  var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_4__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_loadable_server__WEBPACK_IMPORTED_MODULE_2__[\"ChunkExtractorManager\"], {\n    extractor: extractor\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"Provider\"], {\n    store: store\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"StaticRouter\"], {\n    location: req.path,\n    context: {}\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_6__[\"renderRoutes\"])(_routes__WEBPACK_IMPORTED_MODULE_7__[\"default\"]))))));\n  var html = \"\\n          <html>\\n          <head>\\n          <title>Tweencraft</title>\\n          <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\">\\n          <link href=\\\"https://fonts.googleapis.com/css?family=Montserrat:400,600,700\\\" rel=\\\"stylesheet\\\">\\n          <link href=\\\"https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i\\\" rel=\\\"stylesheet\\\">\\n          <link rel=\\\"stylesheet\\\" href=\\\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\\\" integrity=\\\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\\\" crossorigin=\\\"anonymous\\\">\\n          <link href=\\\"https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/css/swiper.min.css\\\" rel=\\\"stylesheet\\\"></link>\\n          <link rel=\\\"stylesheet\\\" href=\\\"https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css\\\"></link>\\n          <script src=\\\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/js/all.min.js\\\"></script>  \\n          \".concat(extractor.getLinkTags(), \"\\n          \").concat(extractor.getStyleTags(), \"\\n\\n          </head>\\n          <body data-spy=\\\"scroll\\\" data-target=\\\".fixed-top\\\">\\n              <div id=\\\"root\\\">\").concat(content, \"</div>\\n              <script>\\n                window.INITIAL_STATE = \").concat(JSON.stringify(store.getState()), \"\\n              </script>\\n              <script src=\\\"https://code.jquery.com/jquery-3.4.1.min.js\\\" ></script>\\n              <script src=\\\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\\\" integrity=\\\"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1\\\" crossorigin=\\\"anonymous\\\"></script>\\n              <script src=\\\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\\\" integrity=\\\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\\\" crossorigin=\\\"anonymous\\\"></script>\\n              <script src=\\\"https://cdnjs.cloudflare.com/ajax/libs/Morphext/2.4.4/morphext.min.js\\\"></script>\\n              <script src=\\\"https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.min.js\\\"></script>\\n              <script src=\\\"https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js\\\"></script>\\n              \").concat(extractor.getScriptTags(), \"\\n            \\n\\n          </body>\\n          </html>\\n      \");\n  return html;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/mnt/codebase/tweencraft/src/helpers/renderer.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/helpers/renderer.js?");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _client_pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client/pages */ \"./src/client/pages/index.js\");\n/* harmony import */ var _client_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client/actions */ \"./src/client/actions/index.js\");\n/* harmony import */ var _client_pages_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client/pages/App */ \"./src/client/pages/App.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\nvar base = process.env.BASE || '';\nvar _default = [{\n  component: _client_pages_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  routes: [{\n    path: \"/\".concat(base),\n    component: _client_pages__WEBPACK_IMPORTED_MODULE_0__[\"Home\"],\n    exact: true,\n    loadData: function loadData(dispatch) {\n      return dispatch(_client_actions__WEBPACK_IMPORTED_MODULE_1__[\"homeAction\"].fetchStories());\n    }\n  }, {\n    path: \"/\".concat(base, \"/samples\"),\n    component: _client_pages__WEBPACK_IMPORTED_MODULE_0__[\"Home\"],\n    exact: true,\n    loadData: function loadData(dispatch) {\n      return dispatch(_client_actions__WEBPACK_IMPORTED_MODULE_1__[\"homeAction\"].fetchSamples());\n    }\n  }]\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(base, \"base\", \"/mnt/codebase/tweencraft/src/routes.js\");\n  reactHotLoader.register(_default, \"default\", \"/mnt/codebase/tweencraft/src/routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/routes.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module, __dirname) {/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ \"@babel/polyfill\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes */ \"./src/routes.js\");\n/* harmony import */ var _helpers_renderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/renderer */ \"./src/helpers/renderer.js\");\n/* harmony import */ var _tools_webpack_middleware__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tools/webpack-middleware */ \"./tools/webpack-middleware.js\");\n/* harmony import */ var _helpers_createStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers/createStore */ \"./src/helpers/createStore.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\nvar nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n\nvar sendGridTransport = __webpack_require__(/*! nodemailer-sendgrid-transport */ \"nodemailer-sendgrid-transport\");\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\napp.use(cors__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a.json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_4___default.a.urlencoded());\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a[\"static\"]('public'));\napp.use('/favicon.ico', express__WEBPACK_IMPORTED_MODULE_1___default.a[\"static\"](__dirname + 'src/client/images/tweenkraft/favicon.png'));\n\nif (true) {\n  Object(_tools_webpack_middleware__WEBPACK_IMPORTED_MODULE_7__[\"webpackDevMiddleWare\"])(app);\n}\n\napp.post('/message', function (req, res) {\n  try {\n    var transporter = nodemailer.createTransport(sendGridTransport({\n      auth: {\n        api_key: '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'\n      }\n    }));\n    transporter.sendMail({\n      from: \"Tweencraft Website: \".concat(req.body.email),\n      to: 'ad@tweencraft.com',\n      text: req.body.message || '',\n      subject: \"Mail from user from website, Name:\".concat(req.body.name, \", Phone:\").concat(req.body.phone, \", Email: \").concat(req.body.email)\n    });\n  } catch (err) {\n    console.log(err);\n  }\n\n  res.status(200).send();\n});\napp.get('*', function (req, res) {\n  var _configureStore = Object(_helpers_createStore__WEBPACK_IMPORTED_MODULE_8__[\"configureStore\"])({}, req.url),\n      store = _configureStore.store;\n\n  try {\n    var promises = (Object(react_router_config__WEBPACK_IMPORTED_MODULE_2__[\"matchRoutes\"])(_routes__WEBPACK_IMPORTED_MODULE_5__[\"default\"], req.path) || []).map(function (_ref) {\n      var route = _ref.route;\n      return route.loadData ? route.loadData(store.dispatch) : Promise.resolve(null);\n    });\n    Promise.all(promises).then(function (resp) {\n      res.send(Object(_helpers_renderer__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(req, store));\n    });\n  } catch (err) {\n    res.status(404).send('Not Found :(');\n  }\n});\napp.listen(3000, function () {\n  console.log('Listening on port 3000');\n});\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(app, \"app\", \"/mnt/codebase/tweencraft/src/server.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module), \"/\"))\n\n//# sourceURL=webpack:///./src/server.js?");

/***/ }),

/***/ "./tools/environment.js":
/*!******************************!*\
  !*** ./tools/environment.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\nvar getEnvironment = function getEnvironment() {\n  var nodeEnv = \"development\" || false;\n  var isDev = nodeEnv === 'development';\n  return isDev;\n};\n\nmodule.exports = {\n  getEnvironment: getEnvironment\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(getEnvironment, \"getEnvironment\", \"/mnt/codebase/tweencraft/tools/environment.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./tools/environment.js?");

/***/ }),

/***/ "./tools/webpack-middleware.js":
/*!*************************************!*\
  !*** ./tools/webpack-middleware.js ***!
  \*************************************/
/*! exports provided: webpackDevMiddleWare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"webpackDevMiddleWare\", function() { return webpackDevMiddleWare; });\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar webpackConfig = __webpack_require__(/*! ../webpack.client */ \"./webpack.client.js\");\n\nvar compiler = webpack(webpackConfig);\nvar webpackDevMiddleWare = function webpackDevMiddleWare(app) {\n  var instance = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\")(compiler, {\n    publicPath: webpackConfig.output.publicPath,\n    headers: {\n      'Access-Control-Allow-Origin': '*'\n    },\n    stats: 'minimal',\n    serverSideRender: true,\n    watchOptions: {\n      ignored: /node_modules/\n    }\n  });\n\n  app.use(instance);\n  instance.waitUntilValid(function () {\n    console.info('Listening at 300');\n  });\n  app.use(__webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\")(compiler));\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compiler, \"compiler\", \"/mnt/codebase/tweencraft/tools/webpack-middleware.js\");\n  reactHotLoader.register(webpackDevMiddleWare, \"webpackDevMiddleWare\", \"/mnt/codebase/tweencraft/tools/webpack-middleware.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./tools/webpack-middleware.js?");

/***/ }),

/***/ "./webpack.base.js":
/*!*************************!*\
  !*** ./webpack.base.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\nvar LoadablePlugin = __webpack_require__(/*! @loadable/webpack-plugin */ \"@loadable/webpack-plugin\");\n\nvar MiniCssExtractPlugin = __webpack_require__(/*! mini-css-extract-plugin */ \"mini-css-extract-plugin\");\n\nvar CleanWebpackPlugin = __webpack_require__(/*! clean-webpack-plugin */ \"clean-webpack-plugin\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar environment = __webpack_require__(/*! ./tools/environment */ \"./tools/environment.js\");\n\nvar isDev = environment.getEnvironment();\nisSSR = process.env.SSR === 'true' ? true : false;\nvar USE_CSS_MODULES = true;\n\nvar getStyleLoaders = function getStyleLoaders() {\n  var sass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n  var loaders = [{\n    loader: MiniCssExtractPlugin.loader,\n    options: {\n      hmr: isDev && isSSR,\n      // If hmr does not work, this is a forceful method\n      reloadAll: true\n    }\n  }, {\n    loader: 'css-loader',\n    options: {\n      importLoaders: sass ? 2 : 1,\n      modules: USE_CSS_MODULES && sass && {\n        localIdentName: isDev ? '[name]__[local]' : '[hash:base64:5]',\n        context: path.resolve(process.cwd(), 'src')\n      },\n      sourceMap: true\n    }\n  }];\n\n  if (sass) {\n    loaders.push({\n      loader: 'postcss-loader',\n      options: {\n        sourceMap: true\n      }\n    });\n    loaders.push({\n      loader: 'sass-loader',\n      options: {\n        sourceMap: true\n      }\n    });\n  }\n\n  return loaders;\n};\n\nvar getPlugins = function getPlugins() {\n  var plugins = [new LoadablePlugin(), new CleanWebpackPlugin()];\n  plugins.push(new MiniCssExtractPlugin({\n    filename: isDev ? '[name].css' : '[name].[contenthash:8].css',\n    chunkFilename: isDev ? '[id].css' : '[id].[contenthash:8].css'\n  }));\n  return plugins;\n};\n\nmodule.exports = {\n  mode: isDev ? 'development' : 'production',\n  module: {\n    rules: [{\n      test: /\\.(js|jsx)$/,\n      exclude: /node_modules/,\n      use: [{\n        loader: 'babel-loader',\n        options: {\n          presets: ['@babel/preset-env', '@babel/preset-react'],\n          plugins: ['react-hot-loader/babel', '@loadable/babel-plugin']\n        }\n      }]\n    }, {\n      test: /\\.css$/,\n      use: getStyleLoaders()\n    }, {\n      test: /\\.(scss|sass)$/,\n      use: getStyleLoaders(true)\n    }, {\n      test: /\\.(gif|png|jpe?g|webp|svg)$/,\n      use: [{\n        loader: 'url-loader',\n        options: {\n          limit: 10 * 1024,\n          name: '[name].[hash:8].[ext]'\n        }\n      }]\n    }]\n  },\n  plugins: getPlugins(),\n  resolve: {\n    alias: {\n      'react-dom': '@hot-loader/react-dom'\n    }\n  }\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(isDev, \"isDev\", \"/mnt/codebase/tweencraft/webpack.base.js\");\n  reactHotLoader.register(USE_CSS_MODULES, \"USE_CSS_MODULES\", \"/mnt/codebase/tweencraft/webpack.base.js\");\n  reactHotLoader.register(getStyleLoaders, \"getStyleLoaders\", \"/mnt/codebase/tweencraft/webpack.base.js\");\n  reactHotLoader.register(getPlugins, \"getPlugins\", \"/mnt/codebase/tweencraft/webpack.base.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./webpack.base.js?");

/***/ }),

/***/ "./webpack.client.js":
/*!***************************!*\
  !*** ./webpack.client.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module, __dirname) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar HtmlWebpackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\n\nvar FaviconsWebpackPlugin = __webpack_require__(/*! favicons-webpack-plugin */ \"favicons-webpack-plugin\");\n\nvar baseConfig = __webpack_require__(/*! ./webpack.base */ \"./webpack.base.js\");\n\nvar merge = __webpack_require__(/*! webpack-merge */ \"webpack-merge\");\n\nvar environment = __webpack_require__(/*! ./tools/environment */ \"./tools/environment.js\");\n\nvar isDev = environment.getEnvironment();\nisSSR = process.env.SSR === 'true' ? true : false;\n\nvar getEntry = function getEntry() {\n  var entry = ['./src/client.js'];\n\n  if (isSSR && isDev) {\n    entry = ['webpack-hot-middleware/client?reload=true', './src/client.js'];\n  }\n\n  return entry;\n};\n\nvar getPlugins = function getPlugins() {\n  var plugins = [];\n\n  if (isDev) {\n    if (isSSR) {\n      plugins.push(new webpack.HotModuleReplacementPlugin());\n    } else {\n      plugins.push(new HtmlWebpackPlugin({\n        template: './tools/index.html'\n      }));\n    }\n  } else {\n    if (!isSSR) {\n      plugins.push(new HtmlWebpackPlugin({\n        template: './tools/index.html'\n      }));\n    }\n  }\n\n  plugins.push(new webpack.DefinePlugin({\n    'process.env.BASE': process.env.BASE ? JSON.stringify(process.env.BASE) : null\n  }));\n  plugins.push(new FaviconsWebpackPlugin('./src/client/images/tweenkraft/favicon.png'));\n  return plugins;\n};\n\nvar devServer = function devServer() {\n  return {\n    contentBase: path.resolve(__dirname, 'src'),\n    publicPath: '/',\n    historyApiFallback: true,\n    port: 3000,\n    compress: true,\n    disableHostCheck: true,\n    overlay: true\n  };\n};\n\nvar config = {\n  entry: getEntry(),\n  output: {\n    path: path.resolve(__dirname, 'public'),\n    publicPath: isDev ? '/' : '',\n    filename: isDev ? '[name].js' : '[name].[chunkhash:8].js',\n    chunkFilename: isDev ? '[id].js' : '[id].[chunkhash:8].js'\n  },\n  plugins: getPlugins(),\n  devServer: !isSSR && isDev ? devServer() : {}\n};\nmodule.exports = merge(baseConfig, config);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(isDev, \"isDev\", \"/mnt/codebase/tweencraft/webpack.client.js\");\n  reactHotLoader.register(getEntry, \"getEntry\", \"/mnt/codebase/tweencraft/webpack.client.js\");\n  reactHotLoader.register(getPlugins, \"getPlugins\", \"/mnt/codebase/tweencraft/webpack.client.js\");\n  reactHotLoader.register(devServer, \"devServer\", \"/mnt/codebase/tweencraft/webpack.client.js\");\n  reactHotLoader.register(config, \"config\", \"/mnt/codebase/tweencraft/webpack.client.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module), \"/\"))\n\n//# sourceURL=webpack:///./webpack.client.js?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?");

/***/ }),

/***/ "@loadable/component":
/*!**************************************!*\
  !*** external "@loadable/component" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@loadable/component\");\n\n//# sourceURL=webpack:///external_%22@loadable/component%22?");

/***/ }),

/***/ "@loadable/server":
/*!***********************************!*\
  !*** external "@loadable/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@loadable/server\");\n\n//# sourceURL=webpack:///external_%22@loadable/server%22?");

/***/ }),

/***/ "@loadable/webpack-plugin":
/*!*******************************************!*\
  !*** external "@loadable/webpack-plugin" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@loadable/webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22@loadable/webpack-plugin%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "clean-webpack-plugin":
/*!***************************************!*\
  !*** external "clean-webpack-plugin" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"clean-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22clean-webpack-plugin%22?");

/***/ }),

/***/ "connected-react-router":
/*!*****************************************!*\
  !*** external "connected-react-router" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"connected-react-router\");\n\n//# sourceURL=webpack:///external_%22connected-react-router%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "favicons-webpack-plugin":
/*!******************************************!*\
  !*** external "favicons-webpack-plugin" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"favicons-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22favicons-webpack-plugin%22?");

/***/ }),

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"history\");\n\n//# sourceURL=webpack:///external_%22history%22?");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"html-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22html-webpack-plugin%22?");

/***/ }),

/***/ "mini-css-extract-plugin":
/*!******************************************!*\
  !*** external "mini-css-extract-plugin" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mini-css-extract-plugin\");\n\n//# sourceURL=webpack:///external_%22mini-css-extract-plugin%22?");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nodemailer\");\n\n//# sourceURL=webpack:///external_%22nodemailer%22?");

/***/ }),

/***/ "nodemailer-sendgrid-transport":
/*!************************************************!*\
  !*** external "nodemailer-sendgrid-transport" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nodemailer-sendgrid-transport\");\n\n//# sourceURL=webpack:///external_%22nodemailer-sendgrid-transport%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ }),

/***/ "webpack-merge":
/*!********************************!*\
  !*** external "webpack-merge" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-merge\");\n\n//# sourceURL=webpack:///external_%22webpack-merge%22?");

/***/ })

/******/ });