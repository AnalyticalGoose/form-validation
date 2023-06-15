/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const modal = document.querySelector('.modal')\nconst modalBtn = document.querySelector('.modal-button')\nconst closemodalBtn = document.querySelector('.close-modal-button')\n\nconst password = document.getElementById('password')\nconst passwordConfirm = document.getElementById('confirm')\n\nconst validationContainer = document.querySelector('.pass-validation-container')\n\n\nmodalBtn.addEventListener('click', () => {modal.showModal()})\nclosemodalBtn.addEventListener('click', () => {modal.close()})\n\n\npassword.addEventListener('focus', () => {\n    validationContainer.classList.remove('hidden')\n})\n\npassword.addEventListener('focusout', () => {\n    validationContainer.classList.add('hidden')\n})\n\npassword.addEventListener('input', () => {\n    validatePassword()\n})\n\nlet lower = false\nlet upper = false\nlet special = false\n\nfunction validatePassword() {\n    const lowerContainer = document.getElementById('validate-lower')\n    const upperContainer = document.getElementById('validate-upper')\n    const specialContainer = document.getElementById('validate-special')\n\n    let containsLower = /[a-z]/.test(password.value)\n    let containsUpper = /[A-Z]/.test(password.value)\n    let containsSpecial = /[0-9`¬|!\"£$€%^&*()\\-_=+{}[\\];:'@#~\\\\,<>./?]/.test(password.value)\n\n    if (containsLower!= lower) {\n        if (containsLower == true) {\n            lowerContainer.children[0].src = \"./img/check.svg\"\n            lowerContainer.children[1].classList.add('valid')\n            lower = true\n        }\n        else {\n            lowerContainer.children[0].src = \"./img/cross.svg\"\n            lowerContainer.children[1].classList.remove('valid')\n            lower = false\n        }\n    }\n    else if (containsUpper != upper) {\n        if (containsUpper == true) {\n            upperContainer.children[0].src = \"./img/check.svg\"\n            upperContainer.children[1].classList.add('valid')\n            upper = true\n        }\n        else {\n            upperContainer.children[0].src = \"./img/cross.svg\"\n            upperContainer.children[1].classList.remove('valid')\n            upper = false\n        }\n    }\n    else if (containsSpecial != special) {\n        if (containsSpecial == true) {\n            specialContainer.children[0].src = \"./img/check.svg\"\n            specialContainer.children[1].classList.add('valid')\n            special = true\n        }\n        else {\n            specialContainer.children[0].src = \"./img/cross.svg\"\n            specialContainer.children[1].classList.remove('valid')\n            special = false\n        }\n    }\n}\n\n\n//# sourceURL=webpack://form-validation/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;