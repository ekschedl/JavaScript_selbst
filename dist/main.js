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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/render */ \"./src/modules/render.js\");\n/* harmony import */ var _modules_userService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/userService */ \"./src/modules/userService.js\");\n/* harmony import */ var _modules_addUsers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/addUsers */ \"./src/modules/addUsers.js\");\n/* harmony import */ var _modules_removeUsers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/removeUsers */ \"./src/modules/removeUsers.js\");\n// index.js\r\n\r\n\r\n\r\n\r\n\r\nwindow.userService = new _modules_userService__WEBPACK_IMPORTED_MODULE_1__.UserService();\r\nuserService.getUsers().then(data => {\r\n    (0,_modules_render__WEBPACK_IMPORTED_MODULE_0__.render)(data);\r\n});\r\n(0,_modules_addUsers__WEBPACK_IMPORTED_MODULE_2__.addUsers)();\r\n(0,_modules_removeUsers__WEBPACK_IMPORTED_MODULE_3__.removeUsers)();\n\n//# sourceURL=webpack://json-sever__lesson/./src/index.js?");

/***/ }),

/***/ "./src/modules/addUsers.js":
/*!*********************************!*\
  !*** ./src/modules/addUsers.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addUsers: () => (/* binding */ addUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n/* harmony import */ var _userService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userService */ \"./src/modules/userService.js\");\n// addUsers.js\n\n \n\nconst addUsers = () => {\n    const form = document.querySelector(\"form\");\n    const nameInput = form.querySelector('#form-name');\n    const emailInput = form.querySelector('#form-email');\n    const childrenInput = form.querySelector('#form-children');\n\n    form.addEventListener('submit', (e) => {\n        e.preventDefault();\n        \n        const user = {\n            name: nameInput.value,\n            email: emailInput.value,\n            children: childrenInput.checked,\n            permission: false\n        };\n        \n        userService.addUser(user).then(() => { \n            userService.getUsers().then(users => {\n                (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\n            });\n        });\n    });\n}\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/addUsers.js?");

/***/ }),

/***/ "./src/modules/removeUsers.js":
/*!************************************!*\
  !*** ./src/modules/removeUsers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeUsers: () => (/* binding */ removeUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n/* harmony import */ var _userService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userService */ \"./src/modules/userService.js\");\n\n// removeUsers.js\n\n \n\n\n\nconst removeUsers = () => {\n    const tbody = document.getElementById(\"table-body\");\n    tbody.addEventListener('click', (event) => {\n        if (event.target.closest('.btn-remove')) {\n            const tr = event.target.closest('tr')\n            const id = tr.dataset.key;\n            userService.removeUser(id).then(res => {\n                userService.getUsers().then(users => {\n                    (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\n                });\n            });\n        }\n    });\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/removeUsers.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n// first.js\r\nconst render = (users) => {\r\n    const tbody = document.getElementById(\"table-body\");\r\n    tbody.innerHTML = '';\r\n    users.forEach((user, index) => {\r\n        const userId = `${index + 1}`;\r\n        tbody.insertAdjacentHTML('beforeend',\r\n            `<tr data-key=\"${user.id}\">\r\n                <th scope=\"row\">${userId}</th>\r\n                <td>${user.name}</td>\r\n                <td>${user.email}</td>\r\n                <td>${user.children ? 'Есть' : 'Нет' }</td>\r\n                <td>\r\n                    <div class=\"form-check form-switch\">\r\n                        <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" id=\"form-children\" ${user.permission ? 'checked' : '' }>\r\n                    </div>\r\n                </td>\r\n                <td>\r\n                    <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Basic example\">\r\n                        <button type=\"button\" class=\"btn btn-warning\">\r\n                            <i class=\"bi-pencil-square\"></i>\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-danger btn-remove\">\r\n                            <i class=\"bi-person-x\"></i>\r\n                        </button>\r\n                    </div>\r\n                </td>\r\n            </tr>`);\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/render.js?");

/***/ }),

/***/ "./src/modules/userService.js":
/*!************************************!*\
  !*** ./src/modules/userService.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserService: () => (/* binding */ UserService)\n/* harmony export */ });\n// userService.js\nclass UserService {\n    getUsers() {\n        return fetch('http://localhost:4545/users').then(res => res.json())\n    }\n\n    addUser(user) {\n        return fetch('http://localhost:4545/users', {\n            method:'POST',\n            headers: {\n                \"Content-Type\" : \"application/json\",\n            },\n            body: JSON.stringify(user)\n        }).then(res => res.json())\n    }\n    \n    removeUser(id) {\n        return fetch(`http://localhost:4545/users/${id}`, {\n            method:'DELETE'\n        }).then(res => res.json())\n    }\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/userService.js?");

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