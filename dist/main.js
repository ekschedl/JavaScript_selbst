/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/render */ \"./src/modules/render.js\");\n/* harmony import */ var _modules_usersService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/usersService */ \"./src/modules/usersService.js\");\n\r\n// index.js\r\n\r\n\r\n\r\n\r\nwindow.userService = new _modules_usersService__WEBPACK_IMPORTED_MODULE_1__.UserService\r\n;(0,_modules_render__WEBPACK_IMPORTED_MODULE_0__.render)(userService.users);\n\n//# sourceURL=webpack://json-sever__lesson/./src/index.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n// first.js\r\nconst render = (users) => {\r\n    const tbody = document.getElementById(\"table-body\");\r\n    console.log(tbody);\r\n    users.forEach(user => {\r\n        tbody.insertAdjacentHTML('beforeend',\r\n        `<tr>\r\n            <th scope=\"row\">${user.id}</th>\r\n            <td>${user.name}</td>\r\n            <td>${user.email}</td>\r\n            <td>${user.children ? 'Есть' : 'Нет' }</td>\r\n            <td>\r\n                <div class=\"form-check form-switch\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" id=\"form-children\" ${user.permission ? 'checked' : '' }>\r\n                </div>\r\n            </td>\r\n            <td>\r\n                <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Basic example\">\r\n                    <button type=\"button\" class=\"btn btn-warning\">\r\n                        <i class=\"bi-pencil-square\"></i>\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn btn-danger\">\r\n                        <i class=\"bi-person-x\"></i>\r\n                    </button>\r\n                </div>\r\n            </td>\r\n        </tr>`);\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/render.js?");

/***/ }),

/***/ "./src/modules/usersService.js":
/*!*************************************!*\
  !*** ./src/modules/usersService.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserService: () => (/* binding */ UserService)\n/* harmony export */ });\nclass UserService {\n \n    _users =[\n{\n    id:0,\n    name: \"Mark\",\n    email: \"otto@gmail.com\",\n    children: true,\n    permission: false\n},\n{\n    id:1,\n    name: \"Jacob\",\n    email: \"thornton@gmail.com\",\n    children: false,\n    permission: true\n}\n\n    ]\n    get users(){\n        return this._users\n    }\n\n    set users(users){\n        this._users = users\n    }\n    logger(){\n    console.log(this.users);\n    }\n\n   }\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/usersService.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;