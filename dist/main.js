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

eval("const modal = document.querySelector('.modal')\nconst modalBtn = document.querySelector('.modal-button')\nconst closemodalBtn = document.querySelector('.close-modal-button')\nconst passwordInput = document.getElementById('password')\nconst passwordConfInput = document.getElementById('confirm')\nconst validationContainer = document.querySelector('.pass-validation-container')\nconst emailInput = document.getElementById('email')\nconst postcodeInput = document.getElementById('postcode')\nconst submitBtn = document.querySelector('.submit-button')\n\nmodalBtn.addEventListener('click', () => {modal.showModal()})\nclosemodalBtn.addEventListener('click', () => {modal.close()})\n\nemailInput.addEventListener('input', () => {\n    const isValid = /^[^@]+@[^@.]+\\.[a-zA-Z]{2,}(?:\\.[a-zA-Z]{2,})?$/\n    .test(emailInput.value);\n    emailInput.setCustomValidity(isValid ? '' : 'invalid')\n})\n\npostcodeInput.addEventListener('blur', addSpaceToPostcode)\n\nfunction addSpaceToPostcode() {\n    const postcode = postcodeInput.value.trim();\n    const updatedPostcode = postcode.replace(/^(.*[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]?)\\s*([0-9][ABD-HJLNP-UW-Zabd-hjlnp-uw-z]{2})?$/, '$1 $2');\n    postcodeInput.value = updatedPostcode;\n}\n\npasswordInput.addEventListener('focus', () => {\n    validationContainer.classList.remove('hidden')\n})\n\npasswordInput.addEventListener('blur', () => {\n    validationContainer.classList.add('hidden')\n})\n\npasswordInput.addEventListener('input', () => {\n    validatePassword()\n    checkPasswordsMatch()\n})\n\npasswordConfInput.addEventListener('input', () => {\n    checkPasswordsMatch()\n})\n\nfunction validatePassword() {\n    const lowerContainer = document.getElementById('validate-lower')\n    const upperContainer = document.getElementById('validate-upper')\n    const specialContainer = document.getElementById('validate-special')\n\n    let containsLower = /[a-z]/.test(passwordInput.value)\n    let containsUpper = /[A-Z]/.test(passwordInput.value)\n    let containsSpecial = /[0-9`¬|!\"£$€%^&*()\\-_=+{}[\\];:'@#~\\\\,<>./?]/.test(passwordInput.value)\n\n    containsLower === true ? setPasswordHint(lowerContainer, \"check\", \"add\") : setPasswordHint(lowerContainer, \"cross\", \"remove\")\n    containsUpper === true ? setPasswordHint(upperContainer, \"check\", \"add\") : setPasswordHint(upperContainer, \"cross\", \"remove\")\n    containsSpecial === true ? setPasswordHint(specialContainer, \"check\", \"add\") : setPasswordHint(specialContainer, \"cross\", \"remove\")\n}\n\nfunction setPasswordHint(container, status, classStatus) {\n    container.children[0].src = `./img/${status}.svg`\n    classStatus === \"add\" ? container.children[1].classList.add('valid') : container.children[1].classList.remove('valid')\n}\n\nfunction checkPasswordsMatch() {\n    if (passwordInput.value != passwordConfInput.value) {\n        passwordConfInput.setCustomValidity(\"invalid\")\n    }\n    else if (passwordInput.value === passwordConfInput.value) {\n        passwordConfInput.setCustomValidity(\"\")\n    }\n}\n\n\n//# sourceURL=webpack://form-validation/./src/index.js?");

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