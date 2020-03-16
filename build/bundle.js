/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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

/***/ "./src/client/actions/index.js":
/*!*************************************!*\
  !*** ./src/client/actions/index.js ***!
  \*************************************/
/*! exports provided: usersAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users */ \"./src/client/actions/users.js\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"usersAction\", function() { return _users__WEBPACK_IMPORTED_MODULE_0__; });\n\n\n\n//# sourceURL=webpack:///./src/client/actions/index.js?");

/***/ }),

/***/ "./src/client/actions/users.js":
/*!*************************************!*\
  !*** ./src/client/actions/users.js ***!
  \*************************************/
/*! exports provided: FETCH_USERS, fetchUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_USERS\", function() { return FETCH_USERS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchUsers\", function() { return fetchUsers; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nvar FETCH_USERS = 'FETCH_USERS';\nvar fetchUsers = function fetchUsers() {\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee(dispatch) {\n        var res;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('https://react-ssr-api.herokuapp.com/users');\n\n              case 2:\n                res = _context.sent;\n                dispatch({\n                  type: FETCH_USERS,\n                  payload: res\n                });\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }()\n  );\n};\n\n//# sourceURL=webpack:///./src/client/actions/users.js?");

/***/ }),

/***/ "./src/client/pages/index.js":
/*!***********************************!*\
  !*** ./src/client/pages/index.js ***!
  \***********************************/
/*! exports provided: Home, UsersList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Home\", function() { return Home; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UsersList\", function() { return UsersList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @loadable/component */ \"@loadable/component\");\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar Home = _loadable_component__WEBPACK_IMPORTED_MODULE_1___default()({\n  resolved: {},\n  chunkName: function chunkName() {\n    return \"Home\";\n  },\n  isReady: function isReady(props) {\n    var key = this.resolve(props);\n\n    if (this.resolved[key] === false) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n  importAsync: function importAsync() {\n    return __webpack_require__.e(/*! import() | Home */ \"Home\").then(__webpack_require__.bind(null, /*! ./Home */ \"./src/client/pages/Home/index.js\"));\n  },\n  requireAsync: function requireAsync(props) {\n    var _this = this;\n\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./Home */ \"./src/client/pages/Home/index.js\");\n    }\n\n    return eval('require.resolve')(\"./Home\");\n  }\n}, {\n  fallback: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Loading... \")\n});\nvar UsersList = _loadable_component__WEBPACK_IMPORTED_MODULE_1___default()({\n  resolved: {},\n  chunkName: function chunkName() {\n    return \"UsersList\";\n  },\n  isReady: function isReady(props) {\n    var key = this.resolve(props);\n\n    if (this.resolved[key] === false) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n  importAsync: function importAsync() {\n    return __webpack_require__.e(/*! import() | UsersList */ \"UsersList\").then(__webpack_require__.bind(null, /*! ./UsersList */ \"./src/client/pages/UsersList/index.js\"));\n  },\n  requireAsync: function requireAsync(props) {\n    var _this = this;\n\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n  requireSync: function requireSync(props) {\n    var id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n  resolve: function resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./UsersList */ \"./src/client/pages/UsersList/index.js\");\n    }\n\n    return eval('require.resolve')(\"./UsersList\");\n  }\n}, {\n  fallback: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Loading ...\")\n});\n\n//# sourceURL=webpack:///./src/client/pages/index.js?");

/***/ }),

/***/ "./src/client/reducers/index.js":
/*!**************************************!*\
  !*** ./src/client/reducers/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _usersReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usersReducer */ \"./src/client/reducers/usersReducer.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  users: _usersReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}));\n\n//# sourceURL=webpack:///./src/client/reducers/index.js?");

/***/ }),

/***/ "./src/client/reducers/usersReducer.js":
/*!*********************************************!*\
  !*** ./src/client/reducers/usersReducer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"usersAction\"].FETCH_USERS:\n      return action.payload.data;\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/client/reducers/usersReducer.js?");

/***/ }),

/***/ "./src/helpers/createStore.js":
/*!************************************!*\
  !*** ./src/helpers/createStore.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client/reducers */ \"./src/client/reducers/index.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_client_reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));\n  return store;\n});\n\n//# sourceURL=webpack:///./src/helpers/createStore.js?");

/***/ }),

/***/ "./src/helpers/renderer.js":
/*!*********************************!*\
  !*** ./src/helpers/renderer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @loadable/server */ \"@loadable/server\");\n/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loadable_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../routes */ \"./src/routes.js\");\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (req, store) {\n  var statsFile = path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(process.cwd(), 'public/loadable-stats.json');\n  var extractor = new _loadable_server__WEBPACK_IMPORTED_MODULE_2__[\"ChunkExtractor\"]({\n    statsFile: statsFile\n  });\n  var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_4__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_loadable_server__WEBPACK_IMPORTED_MODULE_2__[\"ChunkExtractorManager\"], {\n    extractor: extractor\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"Provider\"], {\n    store: store\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"StaticRouter\"], {\n    location: req.path,\n    context: {}\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_6__[\"renderRoutes\"])(_routes__WEBPACK_IMPORTED_MODULE_7__[\"default\"]))))));\n  var html = \"\\n          <html>\\n          <head></head>\\n          <body>\\n              <div id=\\\"root\\\">\".concat(content, \"</div>\\n              <script>\\n                window.INITIAL_STATE = \").concat(JSON.stringify(store.getState()), \"\\n              </script>\\n              \").concat(extractor.getScriptTags(), \"\\n          </body>\\n          </html>\\n      \");\n  return html;\n});\n\n//# sourceURL=webpack:///./src/helpers/renderer.js?");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _client_pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client/pages */ \"./src/client/pages/index.js\");\n/* harmony import */ var _client_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client/actions */ \"./src/client/actions/index.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  path: '/',\n  component: _client_pages__WEBPACK_IMPORTED_MODULE_0__[\"Home\"],\n  exact: true\n}, {\n  path: '/users',\n  component: _client_pages__WEBPACK_IMPORTED_MODULE_0__[\"UsersList\"],\n  loadData: function loadData(dispatch) {\n    return dispatch(_client_actions__WEBPACK_IMPORTED_MODULE_1__[\"usersAction\"].fetchUsers());\n  },\n  exact: true\n}]);\n\n//# sourceURL=webpack:///./src/routes.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ \"@babel/polyfill\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ \"./src/routes.js\");\n/* harmony import */ var _helpers_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/renderer */ \"./src/helpers/renderer.js\");\n/* harmony import */ var _tools_webpack_middleware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tools/webpack-middleware */ \"./tools/webpack-middleware.js\");\n/* harmony import */ var _helpers_createStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/createStore */ \"./src/helpers/createStore.js\");\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a[\"static\"]('public'));\nObject(_tools_webpack_middleware__WEBPACK_IMPORTED_MODULE_5__[\"webpackDevMiddleWare\"])(app);\napp.get('*', function (req, res) {\n  var store = Object(_helpers_createStore__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n  var promises = (Object(react_router_config__WEBPACK_IMPORTED_MODULE_2__[\"matchRoutes\"])(_routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"], req.path) || []).map(function (_ref) {\n    var route = _ref.route;\n    return route.loadData ? route.loadData(store.dispatch) : null;\n  });\n  Promise.all(promises).then(function (resp) {\n    res.send(Object(_helpers_renderer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(req, store));\n  });\n});\napp.listen(3000, function () {\n  console.log('Listening on port 3000');\n});\n\n//# sourceURL=webpack:///./src/server.js?");

/***/ }),

/***/ "./tools/environment.js":
/*!******************************!*\
  !*** ./tools/environment.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getEnvironment = function getEnvironment() {\n  return false;\n  var nodeEnv = \"development\" || false;\n  var isDev = nodeEnv === 'development';\n  return isDev;\n};\n\nmodule.exports = {\n  getEnvironment: getEnvironment\n};\n\n//# sourceURL=webpack:///./tools/environment.js?");

/***/ }),

/***/ "./tools/webpack-middleware.js":
/*!*************************************!*\
  !*** ./tools/webpack-middleware.js ***!
  \*************************************/
/*! exports provided: webpackDevMiddleWare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"webpackDevMiddleWare\", function() { return webpackDevMiddleWare; });\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar webpackConfig = __webpack_require__(/*! ../webpack.client */ \"./webpack.client.js\");\n\nvar compiler = webpack(webpackConfig);\nvar webpackDevMiddleWare = function webpackDevMiddleWare(app) {\n  var instance = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\")(compiler, {\n    publicPath: webpackConfig.output.publicPath,\n    headers: {\n      'Access-Control-Allow-Origin': '*'\n    },\n    stats: 'minimal',\n    serverSideRender: true,\n    watchOptions: {\n      ignored: /node_modules/\n    }\n  });\n\n  app.use(instance);\n  instance.waitUntilValid(function () {\n    console.info('Listening at 300');\n  });\n  app.use(__webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\")(compiler));\n};\n\n//# sourceURL=webpack:///./tools/webpack-middleware.js?");

/***/ }),

/***/ "./webpack.base.js":
/*!*************************!*\
  !*** ./webpack.base.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var LoadablePlugin = __webpack_require__(/*! @loadable/webpack-plugin */ \"@loadable/webpack-plugin\");\n\nvar environment = __webpack_require__(/*! ./tools/environment */ \"./tools/environment.js\");\n\nvar isDev = environment.getEnvironment();\nmodule.exports = {\n  mode: 'development',\n  module: {\n    rules: [{\n      test: /\\.(js|jsx)$/,\n      exclude: /node_modules/,\n      use: [{\n        loader: 'babel-loader',\n        options: {\n          presets: ['@babel/preset-env', '@babel/preset-react'],\n          plugins: ['@loadable/babel-plugin']\n        }\n      }]\n    }, {\n      test: /\\.(gif|png|jpe?g|webp|svg)$/,\n      use: [{\n        loader: 'url-loader',\n        options: {\n          limit: 10 * 1024,\n          name: '[name].[hash:8].[ext]'\n        }\n      }]\n    }]\n  },\n  plugins: [new LoadablePlugin()]\n};\n\n//# sourceURL=webpack:///./webpack.base.js?");

/***/ }),

/***/ "./webpack.client.js":
/*!***************************!*\
  !*** ./webpack.client.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {var path = __webpack_require__(/*! path */ \"path\");\n\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar baseConfig = __webpack_require__(/*! ./webpack.base */ \"./webpack.base.js\");\n\nvar merge = __webpack_require__(/*! webpack-merge */ \"webpack-merge\");\n\nvar environment = __webpack_require__(/*! ./tools/environment */ \"./tools/environment.js\");\n\nvar isDev = environment.getEnvironment();\n\nvar getEntry = function getEntry() {\n  // Development\n  var entry = ['webpack-hot-middleware/client?reload=true', './src/client.js']; // production\n\n  if (!isDev) entry = ['./src/client.js'];\n  return entry;\n};\n\nvar getPlugins = function getPlugins() {\n  var plugins = [];\n\n  if (isDev) {\n    plugins.push(new webpack.HotModuleReplacementPlugin());\n  }\n\n  return plugins;\n};\n\nvar config = {\n  entry: getEntry(),\n  output: {\n    path: path.resolve(__dirname, 'public'),\n    publicPath: '/js/',\n    filename: 'bundle-client.js'\n  },\n  plugins: getPlugins()\n};\nmodule.exports = merge(baseConfig, config);\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./webpack.client.js?");

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

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

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