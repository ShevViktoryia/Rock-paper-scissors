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

/***/ "./js/bgImage.js":
/*!***********************!*\
  !*** ./js/bgImage.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ bgImage)\n/* harmony export */ });\nconst img = new Image();\r\nconst slideNext = document.querySelector('.slide-next');\r\nconst slidePrev = document.querySelector('.slide-prev');\r\n\r\nfunction bgImage() {\r\n  const url = 'https://api.unsplash.com/photos/random?orientation=landscape&query=town&client_id=fr3uNsS5_5imggcRgoo99b4ksGO9eJu0ZG1rRS_NWxY';\r\n  fetch(url)\r\n  .then(res => res.json())\r\n  .then(data => {\r\n    img.src = `${data.urls.regular}`;\r\n    img.onload = () => {\r\n      document.body.style.backgroundImage = `url('${data.urls.regular}')`;\r\n    }\r\n  });\r\n }\r\n\r\n slideNext.addEventListener('click', () => {\r\n  bgImage();\r\n});\r\n\r\nslidePrev.addEventListener('click', () => {\r\n  bgImage();\r\n});\n\n//# sourceURL=webpack://rock-paper-scissors/./js/bgImage.js?");

/***/ }),

/***/ "./js/computerChoice.js":
/*!******************************!*\
  !*** ./js/computerChoice.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ computerChoice)\n/* harmony export */ });\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ \"./js/state.js\");\n/* harmony import */ var _winner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./winner */ \"./js/winner.js\");\n\r\n\r\n\r\nfunction computerChoice() {\r\n  const imgContainer = document.querySelector('#imgContainer_2');\r\n  _state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].blocked = true;\r\n  let random = Math.floor(Math.random() * 3);\r\n  imgContainer.childNodes.forEach(item => {\r\n    item.classList.add('blink');\r\n  })\r\n  setTimeout(() => {\r\n    imgContainer.childNodes.forEach(item => {\r\n      item.classList.remove('active');\r\n      item.classList.remove('lose');\r\n      item.classList.remove('blink');\r\n    });\r\n    _state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].compChoice = imgContainer.childNodes[random];\r\n    const compChoice = imgContainer.querySelector(`.${_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].compChoice.className}`);\r\n    compChoice.classList.add('active');\r\n    (0,_winner__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  }, 2000);\r\n}\n\n//# sourceURL=webpack://rock-paper-scissors/./js/computerChoice.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bgImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bgImage */ \"./js/bgImage.js\");\n/* harmony import */ var _playDashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playDashboard */ \"./js/playDashboard.js\");\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs */ \"./js/tabs.js\");\n\r\n\r\n\r\n\r\n(0,_bgImage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_tabs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_playDashboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://rock-paper-scissors/./js/index.js?");

/***/ }),

/***/ "./js/playDashboard.js":
/*!*****************************!*\
  !*** ./js/playDashboard.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ playDashboard)\n/* harmony export */ });\n/* harmony import */ var _selectImg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectImg */ \"./js/selectImg.js\");\n/* harmony import */ var _startGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startGame */ \"./js/startGame.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ \"./js/state.js\");\n\r\n\r\n\r\n\r\nfunction getImage(img_id, block) {\r\n  const img = new Image();\r\n  const url = `https://api.unsplash.com/photos/random?orientation=portrait&query=${img_id}&client_id=fr3uNsS5_5imggcRgoo99b4ksGO9eJu0ZG1rRS_NWxY`;\r\n  fetch(url)\r\n  .then(res => res.json())\r\n  .then(data => {\r\n    img.src = `${data.urls.regular}`;\r\n    img.onload = () => {\r\n      block.style.backgroundImage = `url('${data.urls.regular}')`;\r\n    }\r\n  });\r\n}\r\n\r\nfunction playDashboard() {\r\n  const container = document.querySelector('.container');\r\n  const start_button = document.querySelector('.start');\r\n\r\n  start_button.onclick = () => {\r\n    container.remove();\r\n\r\n    const dashboard = document.createElement('div');\r\n    dashboard.className = 'container';\r\n    const play_button = document.createElement('button');\r\n    play_button.className = 'play';\r\n    play_button.textContent = 'Играть';\r\n\r\n    const playContainer = document.createElement('div');\r\n    playContainer.className = 'playContainer';\r\n\r\n    const score = document.createElement('div');\r\n    score.className = 'score';\r\n    const scorePlayer1 = document.createElement('span');\r\n    scorePlayer1.className = 'scorePlayer1';\r\n    scorePlayer1.textContent = 0;\r\n    const scorePlayer2 = document.createElement('span');\r\n    scorePlayer2.className = 'scorePlayer2';\r\n    scorePlayer2.textContent = 0;\r\n\r\n    score.append(scorePlayer1);\r\n    score.innerHTML += \"&nbsp;:&nbsp;\";\r\n    score.append(scorePlayer2);\r\n\r\n    const player1 = document.createElement('div');\r\n    player1.className = 'player';\r\n    player1.textContent = 'Игрок 1';\r\n\r\n    const player2 = document.createElement('div');\r\n    player2.className = 'player';\r\n    player2.textContent = 'Игрок 2';\r\n\r\n    const status = document.createElement('div');\r\n    status.className = 'status';\r\n    status.textContent = 'Сделайте ход';\r\n\r\n    playContainer.append(player1);\r\n    playContainer.append(player2);\r\n\r\n    dashboard.append(play_button);\r\n    dashboard.append(score);\r\n    dashboard.append(playContainer);\r\n    dashboard.append(status);\r\n    document.body.append(dashboard);\r\n\r\n    const countPlayer = [...document.querySelectorAll('.player')];\r\n    for(let i = 0; i < countPlayer.length; i++) {\r\n      const imgContainer = document.createElement('div');\r\n      imgContainer.className = 'imgContainer';\r\n      imgContainer.id = `imgContainer_${i+1}`;\r\n\r\n      const rockImg = document.createElement('div');\r\n      rockImg.className = 'rockImg';\r\n      rockImg.id = 'rock';\r\n      const paperImg = document.createElement('div');\r\n      paperImg.className = 'paperImg';\r\n      paperImg.id = 'paper';\r\n      const scissorsImg = document.createElement('div');\r\n      scissorsImg.className = 'scissorsImg';\r\n      scissorsImg.id = 'scissors';\r\n\r\n      getImage('rock', rockImg);\r\n      getImage('paper', paperImg);\r\n      getImage('scissors', scissorsImg);\r\n\r\n      imgContainer.append(rockImg);\r\n      imgContainer.append(paperImg);\r\n      imgContainer.append(scissorsImg);\r\n      countPlayer[i].append(imgContainer);\r\n    }\r\n\r\n    _state__WEBPACK_IMPORTED_MODULE_2__[\"default\"].blocked ? '' : (0,_selectImg__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    (0,_startGame__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  } \r\n}\n\n//# sourceURL=webpack://rock-paper-scissors/./js/playDashboard.js?");

/***/ }),

/***/ "./js/selectImg.js":
/*!*************************!*\
  !*** ./js/selectImg.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ selectImg)\n/* harmony export */ });\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ \"./js/state.js\");\n\r\n\r\nfunction checkActive(block) {\r\n  block.childNodes.forEach(item => {\r\n    if(item.classList.contains('active')) {\r\n      item.classList.remove('active');\r\n    }\r\n    item.classList.remove('lose');\r\n  });\r\n}\r\nfunction selectImg() {\r\n  const imgContainer = document.querySelector('#imgContainer_1');\r\n  imgContainer.childNodes.forEach(item => item.addEventListener('click', e => {\r\n    checkActive(imgContainer);\r\n    const selImg = document.querySelector(`.${e.target.className}`);\r\n    selImg.classList.add('active');\r\n    _state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].select = `${e.target.id}`;\r\n  }));\r\n}\n\n//# sourceURL=webpack://rock-paper-scissors/./js/selectImg.js?");

/***/ }),

/***/ "./js/startGame.js":
/*!*************************!*\
  !*** ./js/startGame.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startGame)\n/* harmony export */ });\n/* harmony import */ var _computerChoice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./computerChoice */ \"./js/computerChoice.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ \"./js/state.js\");\n\r\n\r\n\r\nfunction startGame() {\r\n  const playButton = document.querySelector('.play');\r\n  playButton.onclick = () => {\r\n    if(_state__WEBPACK_IMPORTED_MODULE_1__[\"default\"].select) {\r\n      const imgContainer = document.querySelector('#imgContainer_1');\r\n      imgContainer.childNodes.forEach(item => {\r\n        if(item.classList.contains('lose')) {\r\n          item.classList.remove('lose');\r\n          item.classList.add('active');\r\n        }\r\n      });\r\n      (0,_computerChoice__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    }\r\n    else {\r\n      alert('Пожалуйста, сначала сделай выбор: камень, бумага или ножницы');\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://rock-paper-scissors/./js/startGame.js?");

/***/ }),

/***/ "./js/state.js":
/*!*********************!*\
  !*** ./js/state.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet state = {\r\n  select: '',\r\n  blocked: false,\r\n  compChoice: ''\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (state);\n\n//# sourceURL=webpack://rock-paper-scissors/./js/state.js?");

/***/ }),

/***/ "./js/tabs.js":
/*!********************!*\
  !*** ./js/tabs.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ tabs)\n/* harmony export */ });\nfunction tabs() {\r\n  const tabs = document.querySelectorAll('.tab');\r\n  const tabs_content = document.querySelectorAll('.content');\r\n\r\n  const openTab = (event, id) => {\r\n    tabs.forEach(item => {\r\n      if(item.classList.contains('active_tab')) {\r\n        item.classList.remove('active_tab');\r\n      }\r\n    });\r\n    tabs_content.forEach(item => {\r\n      if(item.classList.contains('active_content')) {\r\n        item.classList.remove('active_content');\r\n      }\r\n      if(item.id == `${id}_cont`) {\r\n        item.classList.add('active_content');\r\n      }\r\n    });\r\n    event.classList.add('active_tab');\r\n  }\r\n\r\n  tabs.forEach(item => item.addEventListener('click', e => {\r\n    openTab(e.target, e.target.id);\r\n  }));\r\n}\n\n//# sourceURL=webpack://rock-paper-scissors/./js/tabs.js?");

/***/ }),

/***/ "./js/winner.js":
/*!**********************!*\
  !*** ./js/winner.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ winner)\n/* harmony export */ });\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ \"./js/state.js\");\n\r\n\r\nfunction winner() {\r\n  const imgContainer1 = document.querySelector('#imgContainer_1');\r\n  const imgContainer2 = document.querySelector('#imgContainer_2');\r\n  const player1Choice = imgContainer1.querySelector(`#${_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].select}`);\r\n  const player2Choice = imgContainer2.querySelector(`#${_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].compChoice.id }`);\r\n  const status = document.querySelector('.status');\r\n  const scorePlayer1 = document.querySelector('.scorePlayer1');\r\n  const scorePlayer2 = document.querySelector('.scorePlayer2');\r\n  switch(_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].select) {\r\n    case 'rock':\r\n      if(_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].compChoice.id == 'paper') {\r\n        status.textContent = 'Вы проиграли!';\r\n        player1Choice.classList.remove('active');\r\n        player1Choice.classList.add('lose');\r\n        scorePlayer2.textContent = Number(scorePlayer2.textContent) + 1;\r\n      }\r\n      else if(_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].compChoice.id == 'scissors') {\r\n        status.textContent = 'Вы выйграли!';\r\n        player2Choice.classList.remove('active');\r\n        player2Choice.classList.add('lose');\r\n        scorePlayer1.textContent = Number(scorePlayer1.textContent) + 1;\r\n      }\r\n      else {\r\n        status.textContent = 'Ничья!';\r\n      }\r\n      break;\r\n    case 'paper':\r\n      if(_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].compChoice.id == 'rock') {\r\n        status.textContent = 'Вы выйграли!';\r\n        player2Choice.classList.remove('active');\r\n        player2Choice.classList.add('lose');\r\n        scorePlayer1.textContent = Number(scorePlayer1.textContent) + 1;\r\n      }\r\n      else if(_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].compChoice.id == 'scissors') {\r\n        status.textContent = 'Вы проиграли!';\r\n        player1Choice.classList.remove('active');\r\n        player1Choice.classList.add('lose');\r\n        scorePlayer2.textContent = Number(scorePlayer2.textContent) + 1;\r\n      }\r\n      else {\r\n        status.textContent = 'Ничья!';\r\n      }\r\n      break;\r\n    case 'scissors':\r\n      if(_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].compChoice.id == 'rock') {\r\n        status.textContent = 'Вы проиграли!';\r\n        player1Choice.classList.remove('active');\r\n        player1Choice.classList.add('lose');\r\n        scorePlayer2.textContent = Number(scorePlayer2.textContent) + 1;\r\n      }\r\n      else if(_state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].compChoice.id == 'paper') {\r\n        status.textContent = 'Вы выйграли!';\r\n        player2Choice.classList.remove('active');\r\n        player2Choice.classList.add('lose');\r\n        scorePlayer1.textContent = Number(scorePlayer1.textContent) + 1;\r\n      }\r\n      else {\r\n        status.textContent = 'Ничья!';\r\n      }\r\n      break;\r\n    default:\r\n      break;\r\n  }\r\n}\n\n//# sourceURL=webpack://rock-paper-scissors/./js/winner.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;