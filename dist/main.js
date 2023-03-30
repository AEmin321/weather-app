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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/interface */ \"./src/modules/interface.js\");\n\n\nconst searchInput = document.querySelector('.search-input');\nconst searchButton = document.querySelector('.search-icon');\nconst errorP = document.querySelector('.error');\n\nwindow.onload=(0,_modules_interface__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('konya');\n\nsearchInput.addEventListener('keypress',(e)=>{\n    if (e.key==='Enter') {\n        e.preventDefault();\n        searchButton.click();\n    }\n})\n\nsearchButton.addEventListener('click',()=>{\n    ;(0,_modules_interface__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(searchInput.value);\n})\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/data.js":
/*!*****************************!*\
  !*** ./src/modules/data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loader = document.querySelector('.load');\n\nasync function getData (city) {\n    displayLoading();\n    try {\n        const endKey=`http://api.weatherapi.com/v1/forecast.json?key=523aad0fd36442f98a4141313232903&q=${city}&days=7`;\n        const response=await fetch(endKey,{mode:'cors'});\n        if (!response.ok){\n            throw new Error(`Sorry cant find ${city}.`);\n        }\n        const data=await response.json();\n        console.log (data);\n        removeLoading();\n        return data;\n    }\n    catch(error) {\n        alert(error);\n    }\n}\n\nfunction displayLoading () {\n    loader.classList.add('display');\n    setTimeout(()=>{\n        loader.classList.remove('display');\n    },4000);\n}\n\nfunction removeLoading () {\n    loader.classList.remove('display');\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://weather-app/./src/modules/data.js?");

/***/ }),

/***/ "./src/modules/interface.js":
/*!**********************************!*\
  !*** ./src/modules/interface.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/modules/data.js\");\n\n\nconst domController=(city)=>{\n    const currentCard=document.querySelector('.current-card');\n    const daysWrapper=document.querySelector('.days-wrapper');\n\n    async function handleCurrentWeather (city){\n        const data1=await (0,_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(city);\n        currentCard.innerHTML=`<div class=\"temp\">${data1.current.temp_c}&deg;</div>\n        <div class=\"weather-headings\">\n            <div class=\"weather-img\">\n                <img src=\"${data1.current.condition.icon}\" alt=\"\">\n            </div>\n            <div class=\"weather-details\">\n                <div class=\"weather\">${data1.current.condition.text}</div>\n                <div class=\"location\">${data1.location.name}, ${data1.location.country}</div>\n            </div>\n        </div>\n        <div class=\"last-updated\">${data1.current.last_updated}</div>\n        <div class=\"current-details\">\n            <p><i class=\"fa-solid fa-temperature-three-quarters fa-lg\" style=\"color: #232931;\"></i>${data1.current.feelslike_c}</p>\n            <p><i class=\"fa-solid fa-wind fa-lg\" style=\"color: #232931;\"></i>${data1.current.wind_mph}</p>\n            <p><i class=\"fa-solid fa-water fa-lg\" style=\"color: #232931;\"></i>${data1.current.humidity}</p>\n        </div>`;\n    }\n\n    async function handleFutureWeather(city) {\n        daysWrapper.textContent='';\n        const data=await (0,_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(city);\n        data.forecast.forecastday.forEach(day => {\n            const Card=document.createElement('div');\n            Card.classList.add('day-card');\n            Card.innerHTML=`<div class=\"weater-img\"><img src=\"${day.day.condition.icon}\" alt=\"weather image\"></div>\n            <div class=\"weather-temp\">${day.day.avgtemp_c}&deg;</div>\n            <div class=\"weather-title\">${day.day.condition.text}</div>\n            <div class=\"weather-date\">${day.date}</div>`;\n            daysWrapper.appendChild(Card);\n        });\n    }\n\n    handleCurrentWeather(city);\n    handleFutureWeather(city);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domController);\n\n//# sourceURL=webpack://weather-app/./src/modules/interface.js?");

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