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

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './logo.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nPromise.resolve().then(function webpackMissingModule() { var e = new Error(\"Cannot find module './index.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; });\r\n\r\n\r\nfunction create(p){\r\n    return document.createElement(p)\r\n}\r\n\r\nfunction get(p){ return document.getElementById(p)}\r\n\r\nget(\"form\").addEventListener(\"submit\", (p)=>{\r\n    e.preventDefault();\r\n\r\n    let x = get(\"note\").value;\r\n    get(\"output\").innerHTML = x;\r\n})\r\n\r\nlet img = create(\"img\");\r\nimg.src = image;\r\nget(\"header\").appendChild(img);\r\n\r\nconst h1 = create(\"h1\");\r\nh1.innerText = \"Notes App\";\r\nh1.classList.add(\"greeting\");\r\nget(\"header\").appendChild(h1);\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;