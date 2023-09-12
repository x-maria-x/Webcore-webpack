/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/js/modal.js");
/* harmony import */ var _readMore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./readMore */ "./src/js/readMore.js");
/* harmony import */ var _swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./swiper */ "./src/js/swiper.js");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_3__);




var body = document.querySelector("body");
var btn_menu_open = document.querySelector(".round-button_burger");
btn_menu_open.addEventListener("click", function () {
  return Object(_modal__WEBPACK_IMPORTED_MODULE_0__["showModal"])(true, ".sidebar");
});
var btn_menu_close = document.querySelector(".sidebar__btn-close");
btn_menu_close.addEventListener("click", function () {
  return Object(_modal__WEBPACK_IMPORTED_MODULE_0__["showModal"])(false, ".sidebar");
});
body.addEventListener("click", function (event) {
  return Object(_modal__WEBPACK_IMPORTED_MODULE_0__["closeModal"])(event, false, ".sidebar", ".round-button_burger", "sidebar");
}, true);
var btn_modalCall_open = document.querySelectorAll(".round-button_call");

for (var i = 0; i < btn_modalCall_open.length; i++) {
  btn_modalCall_open[i].addEventListener("click", function () {
    return Object(_modal__WEBPACK_IMPORTED_MODULE_0__["showModal"])(true, ".modal-call");
  });
}

var btn_modalCall_close = document.querySelector(".modal-call--close");
btn_modalCall_close.addEventListener("click", function () {
  return Object(_modal__WEBPACK_IMPORTED_MODULE_0__["showModal"])(false, ".modal-call");
});
body.addEventListener("click", function (event) {
  return Object(_modal__WEBPACK_IMPORTED_MODULE_0__["closeModal"])(event, false, ".modal-call", ".round-button_call", "modal-call");
}, true);
var btn_modalMessage_open = document.querySelectorAll(".round-button_chat");

for (var _i2 = 0; _i2 < btn_modalMessage_open.length; _i2++) {
  btn_modalMessage_open[_i2].addEventListener("click", function () {
    return Object(_modal__WEBPACK_IMPORTED_MODULE_0__["showModal"])(true, ".modal-feedback");
  });
}

var btn_modalMessage_close = document.querySelector(".modal-feedback--close");
btn_modalMessage_close.addEventListener("click", function () {
  return Object(_modal__WEBPACK_IMPORTED_MODULE_0__["showModal"])(false, ".modal-feedback");
});
body.addEventListener("click", function (event) {
  return Object(_modal__WEBPACK_IMPORTED_MODULE_0__["closeModal"])(event, false, ".modal-feedback", ".round-button_chat", "modal-feedback");
}, true);
var read_more_descriptionText = document.querySelector(".main__description-read-more");
read_more_descriptionText.addEventListener("click", function () {
  return Object(_readMore__WEBPACK_IMPORTED_MODULE_1__["default"])(".main__description-text", read_more_descriptionText, true, "Читать далее");
});
var read_more_swiper_logo = document.querySelector(".swiper-logo-read-more");
read_more_swiper_logo.addEventListener("click", function () {
  return Object(_readMore__WEBPACK_IMPORTED_MODULE_1__["default"])(".slider-logo", read_more_swiper_logo, false, "Показать еще");
});
var read_more_swiper_type = document.querySelector(".swiper-type-read-more");
read_more_swiper_type.addEventListener("click", function () {
  return Object(_readMore__WEBPACK_IMPORTED_MODULE_1__["default"])(".slider-type", read_more_swiper_type, false, "Показать еще");
});
window.addEventListener("load", function () {
  Object(_swiper__WEBPACK_IMPORTED_MODULE_2__["default"])();
});
window.addEventListener("resize", function () {
  Object(_swiper__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/*! exports provided: showModal, closeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showModal", function() { return showModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
var main = document.querySelector(".main");
var header = document.querySelector(".header");
var body = document.querySelector("body");
function showModal(isShow, modalClass) {
  var modal = document.querySelector(modalClass);

  if (isShow) {
    modal.classList.add("modal_active");
    main.classList.add("blur");
    header.classList.add("blur");
    body.classList.add("scroll-lock");
  } else {
    modal.classList.remove("modal_active");
    main.classList.remove("blur");
    header.classList.remove("blur");
    body.classList.remove("scroll-lock");
  }
}
function closeModal(event, isShow, modalClass, buttonOpen, className) {
  var modal = document.querySelector(modalClass);
  var btnOpen = document.querySelector(buttonOpen);

  if (modal.classList.contains("modal_active") && !event.target.classList.value.includes(btnOpen) && event.target.offsetParent && event.target.offsetParent.className.indexOf(className) === -1) {
    showModal(isShow, modalClass);
  }
}

/***/ }),

/***/ "./src/js/readMore.js":
/*!****************************!*\
  !*** ./src/js/readMore.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return readMore; });
function readMore(containerClass, button, isGradient, text) {
  var container = document.querySelector(containerClass);

  if (isGradient) {
    container.classList.toggle("gradient-display-none");
  }

  container.classList.toggle("read-more_show");
  button.classList.toggle("pseudo-class-rotate");

  if (container.classList.contains("read-more_show")) {
    button.textContent = "Скрыть";
  } else {
    button.textContent = text;
  }
}

/***/ }),

/***/ "./src/js/swiper.js":
/*!**************************!*\
  !*** ./src/js/swiper.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return swiperMode; });
var swiper_logo = Swiper;
var swiper_type = Swiper;
var swiper_price = Swiper;
var init = false;
function swiperMode() {
  var mobile = window.matchMedia("(min-width: 0px) and (max-width: 768px)");
  var tablet_desktop = window.matchMedia("(min-width: 769px) ");

  if (mobile.matches) {
    if (!init) {
      init = true;
      swiper_logo = new Swiper(".slider-logo", {
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 16,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      });
      swiper_type = new Swiper(".slider-type", {
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 16,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      });
      swiper_price = new Swiper(".slider-price", {
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 16,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      });
    }
  } else {
    if (init) {
      swiper_logo.destroy();
      swiper_type.destroy();
      swiper_price.destroy();
      init = false;
    }
  }
}

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map