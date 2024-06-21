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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/form/form.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/form/form.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  $('.js-phone').inputmask({
    "mask": "+7 (999) 999-9999"
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $body = $('body');
  var $header = $('.js-header');
  var $headerBurger = $(".js-header-burger");
  var $headerMenu = $(".js-header-menu");
  $headerBurger.on("click", function () {
    if ($(this).hasClass("is-change")) {
      $body.removeAttr("style");
    } else {
      $body.css("overflow", "hidden");
    }

    $(this).toggleClass("is-change");
    $headerMenu.toggleClass("is-show");
    $header.toggleClass("is-show");
  });
  $headerMenu.on("click", function (e) {
    if (!!e.target.closest("a")) {
      setTimeout(function () {
        $headerBurger.removeClass("is-change");
        $headerMenu.removeClass("is-show");
      }, 500);
      $body.removeAttr("style");
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/number/number.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/number/number.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $sliderNumber = $(".js-number-slider");
  if (!$sliderNumber.length) return;
  $sliderNumber.each(function (_, slider) {
    var $slider = $(slider);
    var $nav = $slider.siblings('.number__nav');
    $slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      $nav.find('.js-counter').text(i + '/' + slick.slideCount);
    });
    $slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: false
    });
    $nav.find('.js-number-slider-prev').on('click', function () {
      return $slider.slick('slickPrev');
    });
    $nav.find('.js-number-slider-next').on('click', function () {
      return $slider.slick('slickNext');
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/programs/programs.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/programs/programs.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $sliderPrograms = $(".js-programs-slider");
  var $sliderProgramsPrev = $(".js-programs-slider-prev");
  var $sliderProgramsNext = $(".js-programs-slider-next");
  if (!$sliderPrograms.length) return;
  $sliderPrograms.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [{
      breakpoint: 1241,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: false
      }
    }, {
      breakpoint: 1025,
      settings: {
        slidesToShow: 1.3,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    }, {
      breakpoint: 601,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    }]
  });
  $sliderProgramsPrev.on('click', function () {
    return $sliderPrograms.slick('slickPrev');
  });
  $sliderProgramsNext.on('click', function () {
    return $sliderPrograms.slick('slickNext');
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/select/select.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/select/select.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $select = $('.js-select');
  if (!$select.length) return;
  $select.each(function (_, select) {
    var $that = $(select);

    var _$that$data = $that.data(),
        placeholder = _$that$data.placeholder,
        type = _$that$data.type,
        label = _$that$data.label;

    $that.select2({
      dropdownAutoWidth: true,
      placeholder: placeholder,
      width: null,
      dropdownCssClass: type === 'horizontal' ? 'dd-horizontal' : type === 'vertical' ? 'dd-vertical' : ''
    });

    var getDdList = function getDdList() {
      var ddSelector = type === 'horizontal' ? '.select2-dropdown.dd-horizontal' : type === 'vertical' ? '.select2-dropdown.dd-vertical' : '';
      var ddList = $(ddSelector);
      ddList.find('.js-select2-dropdown-label').remove();
      return ddList;
    };

    $that.on('select2:open', function () {
      var ddList = getDdList();

      if (ddList.length) {
        ddList.find('.select2-results').before($("<div class=\"js-select2-dropdown-label select2-dropdown-label\">".concat(label, "</div>")));
      }
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_form_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/form/form */ "./src/blocks/modules/form/form.js");
/* harmony import */ var _modules_form_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_form_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_select_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/select/select */ "./src/blocks/modules/select/select.js");
/* harmony import */ var _modules_select_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_select_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_programs_programs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/programs/programs */ "./src/blocks/modules/programs/programs.js");
/* harmony import */ var _modules_programs_programs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_programs_programs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_number_number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/number/number */ "./src/blocks/modules/number/number.js");
/* harmony import */ var _modules_number_number__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_number_number__WEBPACK_IMPORTED_MODULE_4__);






/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map