(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("antd"), require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["antd", "react", "react-dom"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("antd"), require("react"), require("react-dom")) : factory(root["antd"], root["React"], root["ReactDOM"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_antd__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_css-loader@1.0.0@css-loader/index.js?!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./src/components/EditorContextMenu/index.scss":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.0@css-loader??ref--5-1!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--5-2!./src/components/EditorContextMenu/index.scss ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/_css-loader@1.0.0@css-loader/lib/css-base.js */ "./node_modules/_css-loader@1.0.0@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "._19q5fdigXichI1fAY2cNUJ {\n  display: none;\n  background: #FFFFFF;\n  border-radius: 4px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, .15);\n  overflow: hidden;\n}\n\n  ._19q5fdigXichI1fAY2cNUJ ._3qhm7WyOAnbwwzMSrZ566l {\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    display: flex;\n    align-items: center;\n    padding: 5px 12px;\n    transition: all .3s\n  }\n\n  ._19q5fdigXichI1fAY2cNUJ ._3qhm7WyOAnbwwzMSrZ566l:hover {\n  background: #E6F7FF;\n}\n\n  ._19q5fdigXichI1fAY2cNUJ ._3qhm7WyOAnbwwzMSrZ566l i {\n      margin-right: 8px;\n}\n\n  ._19q5fdigXichI1fAY2cNUJ .disable ._3qhm7WyOAnbwwzMSrZ566l {\n          cursor: auto;\n          color: rgba(0, 0, 0, 0.25)\n        }\n\n  ._19q5fdigXichI1fAY2cNUJ .disable ._3qhm7WyOAnbwwzMSrZ566l:hover {\n  background: #FFFFFF;\n}\n", ""]);

// exports
exports.locals = {
	"context-menu": "_19q5fdigXichI1fAY2cNUJ",
	"contextMenu": "_19q5fdigXichI1fAY2cNUJ",
	"item": "_3qhm7WyOAnbwwzMSrZ566l"
};

/***/ }),

/***/ "./node_modules/_css-loader@1.0.0@css-loader/index.js?!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./src/components/EditorDetailPanel/index.scss":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.0@css-loader??ref--5-1!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--5-2!./src/components/EditorDetailPanel/index.scss ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/_css-loader@1.0.0@css-loader/lib/css-base.js */ "./node_modules/_css-loader@1.0.0@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".f0TZF4uaIUiynDnm1hws0 {\n  flex: 1;\n  background: #FAFAFA;\n}\n\n  .f0TZF4uaIUiynDnm1hws0 .ant-card {\n      background: #FAFAFA;\n    }\n", ""]);

// exports
exports.locals = {
	"detail-panel": "f0TZF4uaIUiynDnm1hws0",
	"detailPanel": "f0TZF4uaIUiynDnm1hws0"
};

/***/ }),

/***/ "./node_modules/_css-loader@1.0.0@css-loader/index.js?!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./src/components/EditorItemPanel/index.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.0@css-loader??ref--5-1!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--5-2!./src/components/EditorItemPanel/index.scss ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/_css-loader@1.0.0@css-loader/lib/css-base.js */ "./node_modules/_css-loader@1.0.0@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "._3JzA3_8Dj4AL85zTwepote {\n  flex: 1;\n  background: #FAFAFA;\n}\n\n  ._3JzA3_8Dj4AL85zTwepote .ant-card {\n      background: #FAFAFA;\n    }\n\n  ._3JzA3_8Dj4AL85zTwepote .ant-card-body {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n\n  ._3JzA3_8Dj4AL85zTwepote .ant-card-body > div {\n        margin-bottom: 16px;\n      }\n", ""]);

// exports
exports.locals = {
	"item-panel": "_3JzA3_8Dj4AL85zTwepote",
	"itemPanel": "_3JzA3_8Dj4AL85zTwepote"
};

/***/ }),

/***/ "./node_modules/_css-loader@1.0.0@css-loader/index.js?!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./src/components/EditorToolbar/index.scss":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.0@css-loader??ref--5-1!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--5-2!./src/components/EditorToolbar/index.scss ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/_css-loader@1.0.0@css-loader/lib/css-base.js */ "./node_modules/_css-loader@1.0.0@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".l90zQDUJAIxd6GothsuAZ {\n  display: flex;\n  align-items: center;\n}\n\n  .l90zQDUJAIxd6GothsuAZ .command i {\n      cursor: pointer;\n      display: inline-block;\n      margin: 0 6px;\n      width: 27px;\n      height: 27px;\n      text-align: center;\n      border: 1px solid #FFFFFF\n    }\n\n  .l90zQDUJAIxd6GothsuAZ .command i:hover {\n  border: 1px solid #E6E9ED;\n}\n\n  .l90zQDUJAIxd6GothsuAZ .disable i {\n      cursor: auto;\n      color: rgba(0, 0, 0, 0.25)\n    }\n\n  .l90zQDUJAIxd6GothsuAZ .disable i:hover {\n  border: 1px solid #FFFFFF;\n}\n\n._292Dx23VEzQlasre0v7R4x .ant-tooltip-inner {\n      font-size: 12px;\n      border-radius: 0;\n    }\n", ""]);

// exports
exports.locals = {
	"toolbar": "l90zQDUJAIxd6GothsuAZ",
	"tooltip": "_292Dx23VEzQlasre0v7R4x"
};

/***/ }),

/***/ "./node_modules/_css-loader@1.0.0@css-loader/index.js?!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./src/pages/Flow/index.scss":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.0@css-loader??ref--5-1!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--5-2!./src/pages/Flow/index.scss ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/_css-loader@1.0.0@css-loader/lib/css-base.js */ "./node_modules/_css-loader@1.0.0@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "._3unnKPHv2lkSIEkT3zYZoB {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n}\n\n._18qagp5UbYbqEs72ThY9xO {\n  padding: 8px;\n  border: 1px solid #E6E9ED;\n}\n\n._3ZUijRGYPI6DJ6y61mrQQw {\n  flex: 1;\n}\n\n._3EC5bXeV7NixKVE2zQ3Myr,\n._3xqI4yODytagGV1OWZRkMZ {\n  display: flex;\n  flex-direction: column;\n}\n\n._3EC5bXeV7NixKVE2zQ3Myr {\n  background: #FAFAFA\n}\n\n._3EC5bXeV7NixKVE2zQ3Myr:first-child {\n  border-right: 1px solid #E6E9ED;\n}\n\n._3EC5bXeV7NixKVE2zQ3Myr:last-child {\n  border-left: 1px solid #E6E9ED;\n}\n\n._11Fm-jWJDlBWybwDCMQXru {\n  flex: 1;\n}\n", ""]);

// exports
exports.locals = {
	"editor": "_3unnKPHv2lkSIEkT3zYZoB",
	"editor-hd": "_18qagp5UbYbqEs72ThY9xO",
	"editorHd": "_18qagp5UbYbqEs72ThY9xO",
	"editor-bd": "_3ZUijRGYPI6DJ6y61mrQQw",
	"editorBd": "_3ZUijRGYPI6DJ6y61mrQQw",
	"editor-sidebar": "_3EC5bXeV7NixKVE2zQ3Myr",
	"editorSidebar": "_3EC5bXeV7NixKVE2zQ3Myr",
	"editor-content": "_3xqI4yODytagGV1OWZRkMZ",
	"editorContent": "_3xqI4yODytagGV1OWZRkMZ",
	"flow": "_11Fm-jWJDlBWybwDCMQXru"
};

/***/ }),

/***/ "./node_modules/_css-loader@1.0.0@css-loader/index.js?!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./src/theme/iconfont.scss":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.0@css-loader??ref--5-1!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--5-2!./src/theme/iconfont.scss ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@1.0.0@css-loader/lib/css-base.js */ "./node_modules/_css-loader@1.0.0@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@font-face {\n  font-family: \"iconfont\";\n  src: url('//at.alicdn.com/t/font_598462_3xve1872wizzolxr.eot?t=1522149591264');\n  src: url('//at.alicdn.com/t/font_598462_3xve1872wizzolxr.eot?t=1522149591264#iefix') format('embedded-opentype'),\n  url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAxkAAsAAAAAFhgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFZW7kqhY21hcAAAAYAAAACyAAACShfSB3RnbHlmAAACNAAAB60AAA5gHgLkoWhlYWQAAAnkAAAALwAAADYQ7NeLaGhlYQAAChQAAAAgAAAAJAfsA4tobXR4AAAKNAAAABgAAABEQ+8AAGxvY2EAAApMAAAAJAAAACQZwB0obWF4cAAACnAAAAAfAAAAIAE3AMhuYW1lAAAKkAAAAUUAAAJtPlT+fXBvc3QAAAvYAAAAigAAAL30adEGeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2Bk/s84gYGVgYOpk+kMAwNDP4RmfM1gxMjBwMDEwMrMgBUEpLmmMDgwVLzYwNzwv4EhhrmBoQEozAiSAwAy2Q0leJzFkdkRwjAMBdcQwn0UQiEUxEeGcrhvKIUyXhfwbPFDBWhmrZFsJx4t0AHaZm4qSCsSOZbuptJvMyj9ioXr2jnRotHz/XbdaF2yj3ivLrnlO5W/XNOlR9/3h4wYM2HKzAdq/hbpf7/+jVFZX9/KU6H54idqHXiSaBNkS9oG2ZR2QTaofZDnr0Pg2aNjYAvoFNgHOgfZrC6BHaFrkF+nW2Bv6B7YIHoEdomeAbMPnYI8RwAAeJyNV11sHFcVPufO3Bnv2Lvr8f5M7GRt7453xsVrp9lfsvHPIMImKXGBphWkULIRIjw0oYCRojpUHYFIg0gEUlKBXBAhqVIJHgAlEtRUYp5Mxc8TT414KALaJx5QH5BCZ8y5M7vO2l4Vr/f+nTn33nPOfOd8a+AAm3+T3pD2QQqm4RAchU8CoDKDhQTLYd6uzrEZzOR5xkgnJNu086pZmJMW0Cgo6Wy5XrUMRVWSmMBxrOTLdXuO2VirLrIjWM7mEEf3j50aKR4Ykb6P2j57/NvBY+wWZibMA8nF2eBEaSldnkwNXBwaGRkdGbk6oHA+wJicTOAFIxvjMU0JXuXJscwbE4+wCRwatcdOno5P7h85e6X65VzRiCG6Lqb2TyZeW9LHdPp+YyybGhlVh+MD+8bi5lQaL/5jcF9qKGf9Hegjk68b0obkwEE40vF0HjN1y46RA8Y4GqpF3qSNbLmxiHbDULJiSs/nULUXsWHVUSnYVrVRLxvZdKpezqaVglXl2bTalUvtQo4Ha8EdeTRn3HjKWfrqo83m/CvzM5lU61g6OzO/tnBYaZZWHad53maz/n/NtlkoiO6Lyelcbnocr0RL6th1lOTHzrJgDU/j0x975EdPOnnjEB3WbJaerbda9eem6eyX50uZvNNcKQ0c9u/StjNThcLUGVxIjIvzfjZ1xoyEof8AkiNRByoMQpL8r+hm1DJmhhqC4zBqm9Qc0vRBNOY4ngMgsOLKKsUvDsOQBRs+RMJ8wbJ1Ck7e0BMoiUNqeT2P1DL5mp0vKBk9nTXyKcOU3vEfaElE0mt7XP+l620Cer7o6c8Lbib1YQ0tx3XdYY21SNULTvM4W3IdLyANRlZ4w5q/Sk/Yqhva40nr5M9+mACT7Jkhj/S0YpJNNd2s1o8QFusRFCvlrFEkHw0yrGjqFaQmubmcv54zHTPn0TdnrucKGGxsbHj+OmsFbrMZxsPx6ZGZYw5pigmpuw4JPQRhurCDQupSXNIUkSV4Cs6SHXRz5960SCfLNqtWsaDk0BSpQ0bVG5VFXMCqJSSqmcAcipRaoC2UV9wy5pD2hbqZ6EHVSiVQJZxSuOeQufq4TjHTkx6PcVUR8Xu4lJnODnVnkZ7/R03TBrkndG6STLlTP4F4oh72rL0lZ7I2+M/ulGvcS6V8L5oldD2xRvK4pvGBnuux3D2HehGOsRArhLYtrKXA6HlPB6ECDcrCJfgoHIOPwyfgs3AGvgArcBFeAkh18Njb9FolU+nTGn10cYdOUYz0yKyZNZXmEmGzmBfvJ0ILxbbeT+b8v48PnQk6hFvx7aBCAGVT9Ld3rJm3tZm5/Q/dhK1pdKbQFR1hLwRgzgy8bUuKMWx+U1qleA9QZk5RLa/DYYouoFmrCJ9MAfia2UnHCuZrlRrBqEJoylRsChrqD5M1W5fMWkqkcEVSWue04ab/oCXGYa2Nl+lunBxtjU5iy221cHU9ylwGCX3JvRw0UfHY5Sap+vfYVRr9ZpSwYofY2Gq9fx/viExepwdyHF+95r/H4hsCNxjm0jpzIEeLObQJ8GSmqM1UmCOSaehV4YfkHLn37E/fnTr0m6987sfN85zLsoziqjRXcW35Myj97ofPPIf4+NELXNdkltSwmWJyxAObcpytQw0WCX1PhDeZtij6PSMlq8oTmKFLDXX7yMkIXMSiUa4vkWVFXmxE04ZhRgbXTAn4oHZuhSsyH4qJkctDseAqT/LA4wMY5yvP9w74Ej3BSmrAf+tPSpJffvJB4GEr8C78mSeVy6f+da2ttJetErZxNqbFz/FhvjU0GX8nnIyd7h3aTKZzh5+oMv780P3l904uV5i8Gn/33qev2LUXjg91Yv37KNapKMpRxIndyFMzLO1Vgk/G2x3qYGMPoabsh82/Sr+SmnCAMl7gUVTDjODNBap7VqdGdyolKtZBomKTrIjMSStki1IM650d1j6qesk2VZ62qDydCU4mJwdfL32peeNNWX7zBvUl+3WNBeVLtyTp1qWwx7eT2/aIif+fGEv8pTAV7aH+6Mqjbynjf+juoV6EaCjkmbeldljFRP2qwDwch0/BM3AOvgaXyKu8qOzprICnqNNqvkb0t1uGPfVbFd4LduA97jU6vynqfTWL/YTMC1xRBjDsAxfdnWvfm24gNqajnnwf13X2790yP7k3PeY+rDxU8HoXbHJLd7rxolAe153dIr+9W+buFvXiZ4gifzDEj8BltU5h3SteNkG8b4S9IyWMxl7QcYDsuxliQwoZbjc2XoRvEaN9F74H1+EH8Ar8BG7Da/Bz+AXchV/Db8mjPryT6sdPW14m0BY/EcRvA95PiHvX3MGTfCeP7ljzHfroCLR1kRahbtv69m70SH1Q1g95ffVe7vLuWpchpS2y9O90efUDuRJ7Ibq0G6Id0fventQeXt8lc+wS/BbRQ+e3d8g5VfgwfARO0nsPiaZqmd2xSzhUMgTRpLMTuJ1v7LqFXC1OYJd2KqpdqVUtm2B+vy0oJql1huA612RBNAl+YZWrceV8h2Zc4gacpQoe48F3cPZBsPH1Lt9sSMfa1661S/bjn0fnAyhGi2OHYp5mnM5M0r9t2CrdXz7VoZrm3bvx4y/Upq/C/wByZ6fCAAAAeJxjYGRgYADi3iOB+vH8Nl8ZuFkYQODaA8/rCPp/AwsvcwKQy8HABBIFAD1+CysAeJxjYGRgYG7438AQw8LGwPD/MwsvA1AEBQgCAHJ9BH94nGNhYGBgfsnAwMIAxWxIbCIxAEQdATMAAAAAAHYA9gEWAV4BogIsAuQDSAN6A/4EMASSBVAFoAa0BzB4nGNgZGBgEGTYwyDDAAJMQMwFhAwM/8F8BgAe9QIAAHicZY9NTsMwEIVf+gekEqqoYIfkBWIBKP0Rq25YVGr3XXTfpk6bKokjx63UA3AejsAJOALcgDvwSCebNpbH37x5Y08A3OAHHo7fLfeRPVwyO3INF7gXrlN/EG6QX4SbaONVuEX9TdjHM6bCbXRheYPXuGL2hHdhDx18CNdwjU/hOvUv4Qb5W7iJO/wKt9Dx6sI+5l5XuI1HL/bHVi+cXqnlQcWhySKTOb+CmV7vkoWt0uqca1vEJlODoF9JU51pW91T7NdD5yIVWZOqCas6SYzKrdnq0AUb5/JRrxeJHoQm5Vhj/rbGAo5xBYUlDowxQhhkiMro6DtVZvSvsUPCXntWPc3ndFsU1P9zhQEC9M9cU7qy0nk6T4E9XxtSdXQrbsuelDSRXs1JErJCXta2VELqATZlV44RelzRiT8oZ0j/AAlabsgAAAB4nG2LXQ6CMBAG+/FbUES8xx6qlmKI2CVlmyint8FX520mGZWpH636z4AMOQqUqFBDo0GLE87ocEGPKwbcFN65jdIZK9EstM27I64srx9iPbrFSfJ8mqXakljRq9nEBeIiuJG1ME2BvRTRj9zszC+aPXEd/SNwXNujcBTi8gh1Gu7GPpX6AjVyKhcAAA==') format('woff'),\n  url('//at.alicdn.com/t/font_598462_3xve1872wizzolxr.ttf?t=1522149591264') format('truetype'),\n  url('//at.alicdn.com/t/font_598462_3xve1872wizzolxr.svg?t=1522149591264#iconfont') format('svg');\n}\n\n@font-face {\n  font-family: \"bi-icon\";\n  src: url('//at.alicdn.com/t/font_538964_lt8h7c2h3hfo5hfr.eot');\n  src: url('//at.alicdn.com/t/font_538964_lt8h7c2h3hfo5hfr.eot?#iefix') format('embedded-opentype'),\n  url('//at.alicdn.com/t/font_538964_lt8h7c2h3hfo5hfr.woff') format('woff'),\n  url('//at.alicdn.com/t/font_538964_lt8h7c2h3hfo5hfr.ttf') format('truetype'),\n  url('//at.alicdn.com/t/font_538964_lt8h7c2h3hfo5hfr.svg#iconfont') format('svg');\n}\n\n._3gKIwLWvta-8492bkkps0Z {\n  font-family:\"iconfont\" !important;\n  font-size:16px;\n  font-style:normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n._3RCrVk5FJbHOyCxW2HP2kN {\n  font-family:\"bi-icon\" !important;\n  font-size:16px;\n  font-style:normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n._3804SZbAqbdIg29lS2vKqF:before {\n  content: \"\\E8AB\";\n}\n\n._3OAqavPVik2m97SHbNZnIc:before {\n  content: \"\\E8A9\";\n}\n\n.ezW5tuKGNdhzQ6HVY604C:before {\n  content: \"\\E8A2\";\n}\n\n.KICTfPwrxYsGZq8dHvVmc:before {\n  content: \"\\E8A4\";\n}\n\n._3sCwhHgw7Ushb5jxbAbZ0Q:before {\n  content: \"\\E8A8\";\n}\n\n._1TIPtuVLqVvD8rN2Sp_20P:before {\n  content: \"\\E8A5\";\n}\n\n._3kQ05bt0OaH9_3iE4bvLlK:before {\n  content: \"\\E8AC\";\n}\n\n._3WH0CjNVUQAJXIPb3WLbm6:before {\n  content: \"\\E8AE\";\n}\n\n._1mnmVS_Hfkb1IeCMV4knIE:before {\n  content: \"\\E8A6\";\n}\n\n._1RQ3iLlN0fhHSrjfdNzDaZ:before {\n  content: \"\\E8A3\";\n}\n\n.oJ_sHMzy19MeV27Vfjt4O:before {\n  content: \"\\E8B0\";\n}\n\n.AT40sVSCc_GaivtbjyEMV:before {\n  content: \"\\E8AA\";\n}\n\n._20vdN2FMw9LjjEJL1SClDD:before {\n  content: \"\\E8A7\";\n}\n\n._3pU0FOLXMvrn9an4WleROB:before {\n  content: \"\\E8AF\";\n}\n\n._3OH2Vr_Ff54NM0Ai4-ZWET:before {\n  content: \"\\E8AD\";\n}\n\n._2JfLHt0PBm7zWpqt47uxC6:before {\n  content: \"\\E8AF\";\n}\n\n._1UsTdbno27oiBTUzhuS70G:before {\n  content: \"\\E8AE\";\n}\n\n._1-QWGEWvr11iYk4NXJQ4Db:before {\n  content: \"\\E8B3\";\n}\n\n._2UTpNF6JDyKWuJQrJReG5y:before {\n  content: \"\\E8B4\";\n}\n", ""]);

// exports
exports.locals = {
	"iconfont": "_3gKIwLWvta-8492bkkps0Z",
	"bi-icon": "_3RCrVk5FJbHOyCxW2HP2kN",
	"biIcon": "_3RCrVk5FJbHOyCxW2HP2kN",
	"icon-undo": "_3804SZbAqbdIg29lS2vKqF",
	"iconUndo": "_3804SZbAqbdIg29lS2vKqF",
	"icon-redo": "_3OAqavPVik2m97SHbNZnIc",
	"iconRedo": "_3OAqavPVik2m97SHbNZnIc",
	"icon-cut": "ezW5tuKGNdhzQ6HVY604C",
	"iconCut": "ezW5tuKGNdhzQ6HVY604C",
	"icon-copy-o": "KICTfPwrxYsGZq8dHvVmc",
	"iconCopyO": "KICTfPwrxYsGZq8dHvVmc",
	"icon-paster-o": "_3sCwhHgw7Ushb5jxbAbZ0Q",
	"iconPasterO": "_3sCwhHgw7Ushb5jxbAbZ0Q",
	"icon-delete-o": "_1TIPtuVLqVvD8rN2Sp_20P",
	"iconDeleteO": "_1TIPtuVLqVvD8rN2Sp_20P",
	"icon-zoom-in-o": "_3kQ05bt0OaH9_3iE4bvLlK",
	"iconZoomInO": "_3kQ05bt0OaH9_3iE4bvLlK",
	"icon-zoom-out-o": "_3WH0CjNVUQAJXIPb3WLbm6",
	"iconZoomOutO": "_3WH0CjNVUQAJXIPb3WLbm6",
	"icon-fit": "_1mnmVS_Hfkb1IeCMV4knIE",
	"iconFit": "_1mnmVS_Hfkb1IeCMV4knIE",
	"icon-actual-size-o": "_1RQ3iLlN0fhHSrjfdNzDaZ",
	"iconActualSizeO": "_1RQ3iLlN0fhHSrjfdNzDaZ",
	"icon-to-back": "oJ_sHMzy19MeV27Vfjt4O",
	"iconToBack": "oJ_sHMzy19MeV27Vfjt4O",
	"icon-to-front": "AT40sVSCc_GaivtbjyEMV",
	"iconToFront": "AT40sVSCc_GaivtbjyEMV",
	"icon-select": "_20vdN2FMw9LjjEJL1SClDD",
	"iconSelect": "_20vdN2FMw9LjjEJL1SClDD",
	"icon-group": "_3pU0FOLXMvrn9an4WleROB",
	"iconGroup": "_3pU0FOLXMvrn9an4WleROB",
	"icon-ungroup": "_3OH2Vr_Ff54NM0Ai4-ZWET",
	"iconUngroup": "_3OH2Vr_Ff54NM0Ai4-ZWET",
	"icon-insert-sibling": "_2JfLHt0PBm7zWpqt47uxC6",
	"iconInsertSibling": "_2JfLHt0PBm7zWpqt47uxC6",
	"icon-insert-child": "_1UsTdbno27oiBTUzhuS70G",
	"iconInsertChild": "_1UsTdbno27oiBTUzhuS70G",
	"icon-collapse-subtree": "_1-QWGEWvr11iYk4NXJQ4Db",
	"iconCollapseSubtree": "_1-QWGEWvr11iYk4NXJQ4Db",
	"icon-expand-subtree": "_2UTpNF6JDyKWuJQrJReG5y",
	"iconExpandSubtree": "_2UTpNF6JDyKWuJQrJReG5y"
};

/***/ }),

/***/ "./node_modules/_css-loader@1.0.0@css-loader/lib/css-base.js":
/*!*******************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.0@css-loader/lib/css-base.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/_gg-editor@1.2.1@gg-editor/dist/bundle.js":
/*!****************************************************************!*\
  !*** ./node_modules/_gg-editor@1.2.1@gg-editor/dist/bundle.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};!function(t,e){"object"==( false?undefined:_typeof(exports))&&"object"==( false?undefined:_typeof(module))?module.exports=e(__webpack_require__(/*! react */ "react"),__webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.6.2@prop-types/index.js")): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! react */ "react"),__webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.6.2@prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined;}("undefined"!=typeof self?self:undefined,function(t,e){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports;}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r});},e.n=function(t){var n=t&&t.__esModule?function(){return t.default;}:function(){return t;};return e.d(n,"a",n),n;},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e);},e.p="",e(e.s=47);}([function(e,n){e.exports=t;},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t};}Object.defineProperty(e,"__esModule",{value:!0}),e.upperFirst=e.toQueryString=e.pick=e.merge=e.createId=void 0;var i=n(51),o=r(i),a=n(100),u=r(a),s=n(134),c=r(s),f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(){return t++;};}(),l=function l(t){return Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e]);}).join("&");};e.createId=f,e.merge=u.default,e.pick=o.default,e.toQueryString=l,e.upperFirst=c.default;},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t};}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(typeof e==="undefined"?"undefined":_typeof(e))&&"function"!=typeof e?t:e;}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(typeof e==="undefined"?"undefined":_typeof(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e;};}(),s=n(0),c=r(s),f=n(20),l=r(f),h=function(t){function e(){return i(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));}return a(e,t),u(e,[{key:"render",value:function value(){return null;}}]),e;}(c.default.Component);h.contextTypes={editor:l.default.object,propsAPI:l.default.object,onBeforeAddPage:l.default.func,onAfterAddPage:l.default.func},e.default=h;},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=(e.FLOW_CONTAINER="J_FlowContainer",e.MIND_CONTAINER="J_MindContainer",e.TOOLBAR_CONTAINER="J_ToolbarContainer",e.MINIMAP_CONTAINER="J_MinimapContainer",e.CONTEXT_MENU_CONTAINER="J_ContextMenuContainer",e.FLOW_CLASS_NAME="Flow",e.MIND_CLASS_NAME="Mind",e.EVENT_BEFORE_ADD_PAGE="beforeAddPage",e.EVENT_AFTER_ADD_PAGE="afterAddPage",e.STATUS_CANVAS_SELECTED="canvas-selected",e.STATUS_NODE_SELECTED="node-selected",e.STATUS_EDGE_SELECTED="edge-selected",e.STATUS_GROUP_SELECTED="group-selected",e.STATUS_MULTI_SELECTED="multi-selected",e.GRAPH_MOUSE_REACT_EVENTS={click:"Click",contextmenu:"ContextMenu",dblclick:"DoubleClick",drag:"Drag",dragend:"DragEnd",dragenter:"DragEnter",dragleave:"DragLeave",dragstart:"DragStart",drop:"Drop",mousedown:"MouseDown",mouseenter:"MouseEnter",mouseleave:"MouseLeave",mousemove:"MouseMove",mouseup:"MouseUp"}),i=e.GRAPH_OTHER_REACT_EVENTS={afterchange:"onAfterChange",afterchangesize:"onAfterChangeSize",afterviewportchange:"onAfterViewportChange",beforechange:"onBeforeChange",beforechangesize:"onBeforeChangeSize",beforeviewportchange:"onBeforeViewportChange",keydown:"onKeyDown",keyup:"onKeyUp",mousewheel:"onMouseWheel"},o=e.PAGE_REACT_EVENTS={afteritemactived:"onAfterItemActived",afteriteminactivated:"onAfterItemInactivated",afteritemselected:"onAfterItemSelected",afteritemunactived:"onAfterItemInactivated",afteritemunselected:"onAfterItemUnselected",beforeitemactived:"onBeforeItemActived",beforeiteminactivated:"onBeforeItemInactivated",beforeitemselected:"onBeforeItemSelected",beforeitemunactived:"onBeforeItemInactivated",beforeitemunselected:"onBeforeItemUnselected",keyUpEditLabel:"onKeyUpEditLabel"},a=e.EDITOR_REACT_EVENTS={aftercommandexecute:"onAfterCommandExecute",beforecommandexecute:"onBeforeCommandExecute"};e.GRAPH_MOUSE_EVENTS=Object.keys(r),e.GRAPH_OTHER_EVENTS=Object.keys(i),e.PAGE_EVENTS=Object.keys(o),e.EDITOR_EVENTS=Object.keys(a);},function(t,e,n){"use strict";function r(t){var e=void 0===t?"undefined":i(t);return null!=t&&("object"==e||"function"==e);}var i="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(t){return typeof t==="undefined"?"undefined":_typeof(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t==="undefined"?"undefined":_typeof(t);};t.exports=r;},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t};}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(typeof e==="undefined"?"undefined":_typeof(e))&&"function"!=typeof e?t:e;}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(typeof e==="undefined"?"undefined":_typeof(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}Object.defineProperty(e,"__esModule",{value:!0});var u=n(49),s=r(u),c=n(3),f=n(50),l=r(f),h=n(1),d=function(t){function e(t){i(this,e);var n=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.id=(0,h.createId)(),n.on(c.EVENT_BEFORE_ADD_PAGE,function(t){var e=t.className;return(0,l.default)({c1:e});}),n;}return a(e,t),e;}(s.default);e.default=d;},function(t,e,n){"use strict";var r=Array.isArray;t.exports=r;},function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(t){return typeof t==="undefined"?"undefined":_typeof(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t==="undefined"?"undefined":_typeof(t);},i=n(28),o="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,a=i||o||Function("return this")();t.exports=a;},function(t,e,n){"use strict";function r(t){return null!=t&&"object"==(void 0===t?"undefined":i(t));}var i="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(t){return typeof t==="undefined"?"undefined":_typeof(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t==="undefined"?"undefined":_typeof(t);};t.exports=r;},function(t,e,n){"use strict";function r(t){return null==t?void 0===t?s:u:c&&c in Object(t)?o(t):a(t);}var i=n(12),o=n(57),a=n(58),u="[object Null]",s="[object Undefined]",c=i?i.toStringTag:void 0;t.exports=r;},function(t,e,n){"use strict";t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function get(){return t.l;}}),Object.defineProperty(t,"id",{enumerable:!0,get:function get(){return t.i;}}),t.webpackPolyfill=1),t;};},function(t,e,n){"use strict";function r(t,e){return i(t)?t:o(t,e)?[t]:a(u(t));}var i=n(6),o=n(55),a=n(59),u=n(31);t.exports=r;},function(t,e,n){"use strict";var r=n(7),i=r.Symbol;t.exports=i;},function(t,e,n){"use strict";var r=n(22),i=r(Object,"create");t.exports=i;},function(t,e,n){"use strict";function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1]);}}var i=n(74),o=n(75),a=n(76),u=n(77),s=n(78);r.prototype.clear=i,r.prototype.delete=o,r.prototype.get=a,r.prototype.has=u,r.prototype.set=s,t.exports=r;},function(t,e,n){"use strict";function r(t,e){for(var n=t.length;n--;){if(i(t[n][0],e))return n;}return-1;}var i=n(16);t.exports=r;},function(t,e,n){"use strict";function r(t,e){return t===e||t!==t&&e!==e;}t.exports=r;},function(t,e,n){"use strict";function r(t,e){var n=t.__data__;return i(e)?n["string"==typeof e?"string":"hash"]:n.map;}var i=n(80);t.exports=r;},function(t,e,n){"use strict";function r(t,e){var n=void 0===t?"undefined":i(t);return!!(e=null==e?o:e)&&("number"==n||"symbol"!=n&&a.test(t))&&t>-1&&t%1==0&&t<e;}var i="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(t){return typeof t==="undefined"?"undefined":_typeof(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t==="undefined"?"undefined":_typeof(t);},o=9007199254740991,a=/^(?:0|[1-9]\d*)$/;t.exports=r;},function(t,e,n){"use strict";var r=n(90),i=n(8),o=Object.prototype,a=o.hasOwnProperty,u=o.propertyIsEnumerable,s=r(function(){return arguments;}())?r:function(t){return i(t)&&a.call(t,"callee")&&!u.call(t,"callee");};t.exports=s;},function(t,n){t.exports=e;},function(t,e,n){"use strict";function r(t){return"symbol"==(void 0===t?"undefined":i(t))||a(t)&&o(t)==u;}var i="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(t){return typeof t==="undefined"?"undefined":_typeof(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t==="undefined"?"undefined":_typeof(t);},o=n(9),a=n(8),u="[object Symbol]";t.exports=r;},function(t,e,n){"use strict";function r(t,e){var n=o(t,e);return i(n)?n:void 0;}var i=n(65),o=n(69);t.exports=r;},function(t,e,n){"use strict";function r(t){if(!o(t))return!1;var e=i(t);return e==u||e==s||e==a||e==c;}var i=n(9),o=n(4),a="[object AsyncFunction]",u="[object Function]",s="[object GeneratorFunction]",c="[object Proxy]";t.exports=r;},function(t,e,n){"use strict";function r(t){if("string"==typeof t||i(t))return t;var e=t+"";return"0"==e&&1/t==-o?"-0":e;}var i=n(21),o=1/0;t.exports=r;},function(t,e,n){"use strict";function r(t,e,n){"__proto__"==e&&i?i(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n;}var i=n(33);t.exports=r;},function(t,e,n){"use strict";function r(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i;}var i=9007199254740991;t.exports=r;},function(t,e,n){"use strict";function r(t){return null!=t&&o(t.length)&&!i(t);}var i=n(23),o=n(26);t.exports=r;},function(t,e,n){"use strict";(function(e){var n="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(t){return typeof t==="undefined"?"undefined":_typeof(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t==="undefined"?"undefined":_typeof(t);},r="object"==(void 0===e?"undefined":n(e))&&e&&e.Object===Object&&e;t.exports=r;}).call(e,n(56));},function(t,e,n){"use strict";function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1]);}}var i=n(62),o=n(79),a=n(81),u=n(82),s=n(83);r.prototype.clear=i,r.prototype.delete=o,r.prototype.get=a,r.prototype.has=u,r.prototype.set=s,t.exports=r;},function(t,e,n){"use strict";var r=n(22),i=n(7),o=r(i,"Map");t.exports=o;},function(t,e,n){"use strict";function r(t){return null==t?"":i(t);}var i=n(84);t.exports=r;},function(t,e,n){"use strict";function r(t,e,n){var r=t[e];u.call(t,e)&&o(r,n)&&(void 0!==n||e in t)||i(t,e,n);}var i=n(25),o=n(16),a=Object.prototype,u=a.hasOwnProperty;t.exports=r;},function(t,e,n){"use strict";var r=n(22),i=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t;}catch(t){}}();t.exports=i;},function(t,e,n){"use strict";function r(t,e,n){return e=o(void 0===e?t.length-1:e,0),function(){for(var r=arguments,a=-1,u=o(r.length-e,0),s=Array(u);++a<u;){s[a]=r[e+a];}a=-1;for(var c=Array(e+1);++a<e;){c[a]=r[a];}return c[e]=n(s),i(t,this,c);};}var i=n(96),o=Math.max;t.exports=r;},function(t,e,n){"use strict";var r=n(97),i=n(99),o=i(r);t.exports=o;},function(t,e,n){"use strict";function r(t){return t;}t.exports=r;},function(t,e,n){"use strict";function r(t,e,n){(void 0===n||o(t[e],n))&&(void 0!==n||e in t)||i(t,e,n);}var i=n(25),o=n(16);t.exports=r;},function(t,e,n){"use strict";var r=n(118),i=r(Object.getPrototypeOf,Object);t.exports=i;},function(t,e,n){"use strict";function r(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||i);}var i=Object.prototype;t.exports=r;},function(t,e,n){"use strict";(function(t){var r="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(t){return typeof t==="undefined"?"undefined":_typeof(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t==="undefined"?"undefined":_typeof(t);},i=n(7),o=n(120),a="object"==r(e)&&e&&!e.nodeType&&e,u=a&&"object"==r(t)&&t&&!t.nodeType&&t,s=u&&u.exports===a,c=s?i.Buffer:void 0,f=c?c.isBuffer:void 0,l=f||o;t.exports=l;}).call(e,n(10)(t));},function(t,e,n){"use strict";var r=n(122),i=n(123),o=n(124),a=o&&o.isTypedArray,u=a?i(a):r;t.exports=u;},function(t,e,n){"use strict";function r(t,e){if("__proto__"!=e)return t[e];}t.exports=r;},function(t,e,n){"use strict";function r(t){return a(t)?i(t,!0):o(t);}var i=n(127),o=n(129),a=n(27);t.exports=r;},function(t,e,n){"use strict";function r(t){return i.test(t);}var i=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");t.exports=r;},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={trackable:!0,versions:{g6:"2.0.5-beta.6","g6-editor":"1.0.8","gg-editor":"1.2.0"}};e.default={get:function get(t){return r[t];},set:function set(t,e){r[t]=e;}};},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t};}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(typeof e==="undefined"?"undefined":_typeof(e))&&"function"!=typeof e?t:e;}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(typeof e==="undefined"?"undefined":_typeof(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}Object.defineProperty(e,"__esModule",{value:!0});var u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n){Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}}return t;},s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e;};}(),c=n(0),f=r(c),l=n(20),h=r(l),d=n(1),p=n(3),g=n(2),v=r(g),m=function(t){function e(){var t,n,r,a;i(this,e);for(var u=arguments.length,s=Array(u),c=0;c<u;c++){s[c]=arguments[c];}return n=r=o(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(s))),r.config={},r.addListener=function(t,e,n){"function"==typeof n&&t.on(e,n);},a=n,o(r,a);}return a(e,t),s(e,[{key:"getChildContext",value:function value(){return{page:this.page,pageId:this.pageId,config:this.config};}},{key:"componentDidMount",value:function value(){this.init(),this.bindEvent(),this.forceUpdate();}},{key:"shouldComponentUpdate",value:function value(t){var e=t.data,n=this.props.data,r=t.graph||{},i=r.mode;return i!==(this.props.graph||{}).mode&&this.page.changeMode(i),e!==n&&(this.page.read(e),!0);}},{key:"initPage",value:function value(){}},{key:"readData",value:function value(){var t=this.config.data;t&&this.page.read(t);}},{key:"init",value:function value(){(0,d.merge)(this.config,this.props,{graph:{container:this.pageId}}),this.initPage(),this.readData();}},{key:"bindEvent",value:function value(){var t=this,e=this.addListener;p.GRAPH_MOUSE_EVENTS.forEach(function(n){var r=p.GRAPH_MOUSE_REACT_EVENTS[n];e(t.graph,"node:"+n,t.props["onNode"+r]),e(t.graph,"edge:"+n,t.props["onEdge"+r]);}),p.GRAPH_OTHER_EVENTS.forEach(function(n){e(t.graph,[n],t.props[p.GRAPH_OTHER_REACT_EVENTS[n]]);}),p.PAGE_EVENTS.forEach(function(n){e(t.page,[n],t.props[p.PAGE_REACT_EVENTS[n]]);});}},{key:"render",value:function value(){var t=this.page,e=this.pageId,n=this.props.children;return f.default.createElement("div",u({id:e},(0,d.pick)(this.props,["style","className"])),t?n:null);}},{key:"graph",get:function get(){return this.page.getGraph();}}]),e;}(v.default);m.childContextTypes={page:h.default.object,pageId:h.default.string,config:h.default.object},e.default=m;},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t};}Object.defineProperty(e,"__esModule",{value:!0}),e.withPropsAPI=e.DetailPanel=e.CanvasPanel=e.MultiPanel=e.GroupPanel=e.EdgePanel=e.NodePanel=e.ItemPanel=e.Item=e.Toolbar=e.ContextMenu=e.CanvasMenu=e.MultiMenu=e.GroupMenu=e.EdgeMenu=e.NodeMenu=e.Minimap=e.Command=e.RegisterBehaviour=e.RegisterCommand=e.RegisterGuide=e.RegisterGroup=e.RegisterEdge=e.RegisterNode=e.Register=e.Mind=e.Flow=void 0;var i=n(48),o=r(i),a=n(141),u=r(a),s=n(142),c=r(s),f=n(143),l=r(f),h=n(144),d=r(h),p=n(145),g=r(p),v=n(147),m=r(v),y=n(148),b=r(y),x=n(150),_=r(x),w=n(152),S=r(w),M=n(153),A=r(M);e.Flow=o.default,e.Mind=u.default,e.Register=c.default,e.RegisterNode=s.RegisterNode,e.RegisterEdge=s.RegisterEdge,e.RegisterGroup=s.RegisterGroup,e.RegisterGuide=s.RegisterGuide,e.RegisterCommand=s.RegisterCommand,e.RegisterBehaviour=s.RegisterBehaviour,e.Command=l.default,e.Minimap=d.default,e.NodeMenu=p.NodeMenu,e.EdgeMenu=p.EdgeMenu,e.GroupMenu=p.GroupMenu,e.MultiMenu=p.MultiMenu,e.CanvasMenu=p.CanvasMenu,e.ContextMenu=g.default,e.Toolbar=m.default,e.Item=y.Item,e.ItemPanel=b.default,e.NodePanel=x.NodePanel,e.EdgePanel=x.EdgePanel,e.GroupPanel=x.GroupPanel,e.MultiPanel=x.MultiPanel,e.CanvasPanel=x.CanvasPanel,e.DetailPanel=_.default,e.withPropsAPI=S.default,e.default=A.default;},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t};}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(typeof e==="undefined"?"undefined":_typeof(e))&&"function"!=typeof e?t:e;}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(typeof e==="undefined"?"undefined":_typeof(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e;};}(),s=n(5),c=r(s),f=n(3),l=n(46),h=r(l),d=function(t){function e(){return i(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));}return a(e,t),u(e,[{key:"initPage",value:function value(){var t=this.context.editor;t.emit(f.EVENT_BEFORE_ADD_PAGE,{className:f.FLOW_CLASS_NAME}),this.page=new c.default.Flow(this.config),t.add(this.page),t.emit(f.EVENT_AFTER_ADD_PAGE,{page:this.page});}},{key:"pageId",get:function get(){var t=this.context.editor;return f.FLOW_CONTAINER+"_"+t.id;}}]),e;}(h.default);d.defaultProps={data:{nodes:[],edges:[]}},e.default=d;},function(t,e,n){"use strict";(function(t){var n,r,i,o="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(t){return typeof t==="undefined"?"undefined":_typeof(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t==="undefined"?"undefined":_typeof(t);};!function(a,u){"object"==o(e)&&"object"==o(t)?t.exports=u():(r=[],n=u,void 0!==(i="function"==typeof n?n.apply(e,r):n)&&(t.exports=i));}(window,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports;}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r});},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0});},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==(void 0===t?"undefined":o(t))&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t){e.d(r,i,function(e){return t[e];}.bind(null,i));}return r;},e.n=function(t){var n=t&&t.__esModule?function(){return t.default;}:function(){return t;};return e.d(n,"a",n),n;},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e);},e.p="",e(e.s=208);}([,,,,,,,,,,,function(t,e,n){var r={},i=n(176),o=n(386),a=n(46),u=n(149),s=n(385),c=n(384),f=n(383);a.mix(r,a,s,c,u,o,i,f),t.exports=r;},function(t,e,n){function r(t,e){var n=[];return u.isString(t)?n=[e,t]:u.isArray(t)?(t.unshift(e),n=t):n=[e],n.unshift("page-base"),n;}var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n){Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}}return t;},o=n(34),a=n(13),u=n(18),s={getPath:function getPath(){},getStyle:function getStyle(){},getActivedStyle:function getActivedStyle(){},getSelectedStyle:function getSelectedStyle(){}};o.registerNode("page-base",i({},s)),o.registerEdge("page-base",i({},s)),o.registerGroup("page-base",i({},s)),a.registerBehaviour=function(t,e,n){o.registerBehaviour(t,function(t){var n=t.get("page");n.set("_graph",t),e(n);},n);},a.setRegister=function(t,e,n,i){t.registerNode=o.registerNode,t.registerEdge=o.registerEdge,t.registerGroup=o.registerGroup,t.registerGuide=o.registerGuide,e&&(t.registerNode=function(t,n,i){a.registerNode(t,n,r(i,e));}),n&&(t.registerEdge=function(t,e,i){a.registerEdge(t,e,r(i,n));}),i&&(t.registerGroup=function(t,e,n){a.registerGroup(t,e,r(n,i));});},a.registerNode=o.registerNode,a.registerEdge=o.registerEdge,a.registerGroup=o.registerGroup,a.registerGuide=o.registerGuide,n(329),t.exports=a;},function(t,e,n){var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e;};}(),i=n(179),a=n(18),u=n(339),s=n(338),c=n(336),f=[u,n(335),n(334),s,c,n(333),n(331),n(330)],l=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,e);var n={defaultData:null,shortcut:{redo:!0,undo:!0,delete:!0,resetZoom:!0,autoZoom:!0,zoomIn:!0,zoomOut:!0},_controllers:{},_signals:{}};a.each(f,function(t){a.mix(n,t.CFG);}),a.mix(!0,n,t);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(void 0===e?"undefined":o(e))&&"function"!=typeof e?t:e;}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n));return r.isPage=!0,r.type="page",r._init(),r;}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":o(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}(e,i),r(e,[{key:"getDelegation",value:function value(){}},{key:"focusGraphWrapper",value:function value(){this.getGraph().getKeyboardEventWrapper().focus();}},{key:"saveImage",value:function value(){var t=this,e=this.getGraph(),n=e.getBBox(),r=e.getFitViewPadding(),i=void 0,o=void 0;return a.graph2Canvas({graph:e,width:n.width+r[1]+r[3],height:n.height+r[0]+r[2],beforeTransform:function beforeTransform(){i=t.getSelected().map(function(t){return t.id;}),o=t.getSelected().map(function(t){return t.id;}),t.clearSelected(),t.clearActived();},afterTransform:function afterTransform(){t.setSelected(i,!0),t.setActived(o,!0);}});}},{key:"executeCommand",value:function value(t,e){var n=this.editor;n?n.executeCommand(t,e):t();}},{key:"_init",value:function value(){var t=this;a.each(f,function(e){e.INIT&&t[e.INIT]();}),this.bindEvent();}},{key:"_cacheBBox",value:function value(){var t=this.getGraph();this.set("bboxCache",t.getBBox());}},{key:"bindEvent",value:function value(){var t=this;this.getGraph().on("afterchange",function(){t._cacheBBox();});}},{key:"translateLimt",value:function value(t){var e=this.getGraph(),n=this.get("bboxCache"),r=e.getWidth(),i=e.getHeight(),o=[n.minX,n.minY,1],u=[n.maxX,n.maxY,1];return a.vec3.transformMat3(o,o,t),a.vec3.transformMat3(u,u,t),u[0]<100&&a.mat3.translate(t,t,[100-u[0],0]),u[1]<100&&a.mat3.translate(t,t,[0,100-u[1]]),o[1]>i-100&&a.mat3.translate(t,t,[0,i-100-o[1]]),o[0]>r-100&&a.mat3.translate(t,t,[r-100-o[0],0]),!0;}},{key:"setSignal",value:function value(t,e){this.get("_signals")[t]=e;}},{key:"getSignal",value:function value(t){return this.get("_signals")[t];}},{key:"setController",value:function value(t,e){this.get("_controllers")[t]=e;}},{key:"getController",value:function value(t){return this.get("_controllers")[t];}},{key:"destroy",value:function value(){var t=this.get("_graph"),e=this.get("_controllers");a.each(e,function(t){t.destroy();}),t.destroy();}}]),e;}();a.each(f,function(t){a.mix(l.prototype,t.AUGMENT);}),t.exports=l;},function(t,e,n){var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n){Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}}return t;},i=n(34),o=n(142),a=n(309),u=n(308),s=r({},i.Util,o,a,u);t.exports=s;},function(t,e){t.exports={nodeDefaultShape:"flow-node",edgeDefaultShape:"flow-smooth",groupDefaultShape:"flow-group",groupBackgroundPadding:[40,10,10,10],groupLabelOffsetX:10,groupLabelOffsetY:10,multiSelectRectStyle:{fill:"#1890FF",fillOpacity:.08,stroke:"#1890FF",opacity:.1},defaultNodeSize:[96,48],edgeLabelStyle:{fill:"#666",textAlign:"center",textBaseline:"middle"},edgeLabelRectPadding:4,edgeLabelRectStyle:{fill:"white"},nodeLabelStyle:{fill:"#666",textAlign:"center",textBaseline:"middle"},groupStyle:{stroke:"#CED4D9",fill:"#F2F4F5",radius:4},groupLabelStyle:{fill:"#666",textAlign:"left",textBaseline:"top"},nodeActivedOutterStyle:{stroke:null},nodeActivedOutterLineWidth:2,nodeSelectedStyle:{fill:"#F3F9FF",stroke:"#1890FF"},nodeSelectedOutterStyle:{stroke:"#E0F0FF"},nodeSelectedOutterLineWidth:2,groupSelectedOutterStyle:{stroke:"#E0F0FF",fill:"#E0F0FF"},groupSelectedOutterLineWidth:2,nodeActivedStyle:{fill:"#F3F9FF",stroke:"#1890FF"},groupActivedStyle:{stroke:"#1890FF"},arrowRadius:6,groupSelectedStyle:{stroke:"#1890FF",fill:"#F3F9FF",fillOpacity:.92},edgeSelectedStyle:{lineWidth:2,strokeOpacity:.92,stroke:"#A3B1BF"},dragNodeHoverToGroupStyle:{stroke:"#1890FF",lineWidth:2},dragNodeLeaveFromGroupStyle:{stroke:"#BAE7FF",lineWidth:2},nodeStyle:{stroke:"#CED4D9",fill:"#FFFFFF",shadowOffsetX:0,shadowOffsetY:4,shadowBlur:10,shadowColor:"rgba(13, 26, 38, 0.08)",lineWidth:1,radius:4,fillOpacity:.92},edgeStyle:{stroke:"#A3B1BF",strokeOpacity:.92,lineWidth:1,lineAppendWidth:8,endArrow:!0},edgeActivedStyle:{stroke:"#1890FF",strokeOpacity:.92},anchorPointStyle:{radius:3.5,fill:"#fff",stroke:"#1890FF",lineAppendWidth:12},anchorHotsoptStyle:{radius:12,fill:"#1890FF",fillOpacity:.25},anchorHotsoptActivedStyle:{radius:14},anchorPointHoverStyle:{radius:4,fill:"#1890FF",fillOpacity:1,stroke:"#1890FF"},nodeDelegationStyle:{stroke:"#1890FF",fill:"#1890FF",fillOpacity:.08,lineDash:[4,4],radius:4,lineWidth:1},groupDelegationStyle:{stroke:"#1890FF",fill:"#1890FF",fillOpacity:.08,lineDash:[4,4],radius:4,lineWidth:1},edgeDelegationStyle:{stroke:"#697B8C",lineWidth:1},nodeControlPointStyle:{radius:4,fill:"#fff",shadowBlur:4,shadowColor:"#666"},edgeControlPointStyle:{radius:6,symbol:"square",lineAppendWidth:6,fillOpacity:0,strokeOpacity:0},nodeSelectedBoxStyle:{stroke:"#C2C2C2"},cursor:{panningCanvas:"-webkit-grabbing",beforePanCanvas:"-webkit-grab",hoverNode:"move",hoverEffectiveAnchor:"crosshair",hoverEdge:"default",hoverGroup:"move",hoverUnEffectiveAnchor:"default",hoverEdgeControllPoint:"crosshair",multiSelect:"crosshair"},zIndex:{anchorPoint:3,anchorHotsopt:2,selectedBox:1,controlPoint:4},polylineEdgeStyle:{offset:10,borderRadius:5},addToGroupDelayTime:400,outFromGroupDelayTime:400};},,,function(t,e,n){var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n){Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}}return t;},i=n(30),o=n(67);t.exports=r({},i,{getPanCanvasBehaviour:function getPanCanvasBehaviour(t){return function(e){var n=e.getGraph(),r=n.getFrontCanvas(),a=n.getCanvas(),u=void 0,s=void 0;n.behaviourOn("canvas:mouseenter",function(){e.css({cursor:o.cursor.beforePanCanvas});}),n.behaviourOn("mouseleave",function(t){t.toShape||e.css({cursor:o.cursor.beforePanCanvas});}),n.behaviourOn("dragstart",function(r){(2!==r.button&&!t||!r.shape||r.item&&!1===r.item.dragable)&&(u={x:r.domX,y:r.domY},e.css({cursor:o.cursor.panningCanvas}),s=n.getMatrix(),e.setCapture(!1));}),n.behaviourOn("drag",function(t){if(u){var o=t.domX-u.x,c=t.domY-u.y,f=[];i.mat3.translate(f,s,[o,c]),e.translateLimt(f)&&(n.updateMatrix(f),a.draw(),r.draw());}}),n.behaviourOn("dragend",function(){u=void 0,s=void 0,e.setCapture(!0),e.css({cursor:o.cursor.beforePanCanvas});});};},getLabelTextByTextLineWidth:function getLabelTextByTextLineWidth(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:320,r=e.measureText(t).width;if(r>n){r=0;for(var i=1;i<t.length;i++){(r+=e.measureText(t[i]).width)>=n&&(t=t.substring(0,i)+"\n"+t.substring(i,t.length),i+=1,r=0);}}return t;}});},,,function(t,e,n){(function(t){var n,r,i,a="function"==typeof Symbol&&"symbol"==o(Symbol.iterator)?function(t){return void 0===t?"undefined":o(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":o(t);};!function(o,u){"object"===a(e)&&"object"===a(t)?t.exports=u():(r=[],void 0===(i="function"==typeof(n=u)?n.apply(e,r):n)||(t.exports=i));}(0,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports;}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r});},e.n=function(t){var n=t&&t.__esModule?function(){return t.default;}:function(){return t;};return e.d(n,"a",n),n;},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e);},e.p="",e(e.s=78);}([function(t,e,n){var r=n(8),i=n(36),o={};r.merge(o,r,i,{mixin:function mixin(t,e){var n=t.CFG?"CFG":"ATTRS";if(t&&e){t._mixins=e,t[n]=t[n]||{};var r={};o.each(e,function(e){o.augment(t,e);var i=e[n];i&&o.merge(r,i);}),t[n]=o.merge(r,t[n]);}}}),t.exports=o;},function(t,e,n){var r=n(0),i=n(63),o=n(3),a=function t(e){t.superclass.constructor.call(this,e);};a.ATTRS={},r.extend(a,i),r.augment(a,{isShape:!0,createPath:function createPath(){},afterPath:function afterPath(){},drawInner:function drawInner(t){var e=this.__attrs;this.createPath(t);var n=t.globalAlpha;if(this.hasFill()){var i=e.fillOpacity;r.isNil(i)||1===i?t.fill():(t.globalAlpha=i,t.fill(),t.globalAlpha=n);}if(this.hasStroke()&&this.__attrs.lineWidth>0){var o=e.strokeOpacity;r.isNil(o)||1===o||(t.globalAlpha=o),t.stroke();}this.afterPath(t);},isPointInPath:function isPointInPath(){return!1;},isHitBox:function isHitBox(){return!0;},isHit:function isHit(t,e){var n=[t,e,1];if(this.invert(n),this.isHitBox()){var r=this.getBBox();if(r&&!o.box(r.minX,r.maxX,r.minY,r.maxY,n[0],n[1]))return!1;}var i=this.__attrs.clip;return i?!!i.inside(t,e)&&this.isPointInPath(n[0],n[1]):this.isPointInPath(n[0],n[1]);},calculateBox:function calculateBox(){return null;},getHitLineWidth:function getHitLineWidth(){var t=this.__attrs,e=t.lineAppendWidth||0;return(t.lineWidth||0)+e;},clearTotalMatrix:function clearTotalMatrix(){this.__cfg.totalMatrix=null,this.__cfg.region=null;},clearBBox:function clearBBox(){this.__cfg.box=null,this.__cfg.region=null;},getBBox:function getBBox(){var t=this.__cfg.box;return t||((t=this.calculateBox())&&(t.x=t.minX,t.y=t.minY,t.width=t.maxX-t.minX,t.height=t.maxY-t.minY),this.__cfg.box=t),t;}}),t.exports=a;},function(t,e,n){var r=n(8),i=n(110),o=n(111),a=n(112);a.angle=function(t,e){var n=a.dot(t,e)/(a.length(t)*a.length(e));return Math.acos(r.clamp(n,-1,1));},a.direction=function(t,e){return t[0]*e[1]-e[0]*t[1];},a.angleTo=function(t,e,n){var r=a.angle(t,e),i=a.direction(t,e)>=0;return n?i?2*Math.PI-r:r:i?r:2*Math.PI-r;},a.vertical=function(t,e,n){return n?(t[0]=e[1],t[1]=-1*e[0]):(t[0]=-1*e[1],t[1]=e[0]),t;},i.translate=function(t,e,n){var r=new Array(9);return i.fromTranslation(r,n),i.multiply(t,r,e);},i.rotate=function(t,e,n){var r=new Array(9);return i.fromRotation(r,n),i.multiply(t,r,e);},i.scale=function(t,e,n){var r=new Array(9);return i.fromScaling(r,n),i.multiply(t,r,e);},t.exports={mat3:i,vec2:a,vec3:o,transform:function transform(t,e){return t=r.clone(t),r.each(e,function(e){switch(e[0]){case"t":i.translate(t,t,[e[1],e[2]]);break;case"s":i.scale(t,t,[e[1],e[2]]);break;case"r":i.rotate(t,t,e[1]);break;case"m":i.multiply(t,t,e[1]);break;default:return!1;}}),t;}};},function(t,e,n){var r=n(26),i=n(27),o=n(15),a=n(28);t.exports={line:function line(t,e,n,i,o,a,u){var s=r.box(t,e,n,i,o);if(!this.box(s.minX,s.maxX,s.minY,s.maxY,a,u))return!1;var c=r.pointDistance(t,e,n,i,a,u);return!isNaN(c)&&c<=o/2;},polyline:function polyline(t,e,n,r){var i=t.length-1;if(i<1)return!1;for(var o=0;o<i;o++){var a=t[o][0],u=t[o][1],s=t[o+1][0],c=t[o+1][1];if(this.line(a,u,s,c,e,n,r))return!0;}return!1;},cubicline:function cubicline(t,e,n,r,i,a,u,s,c,f,l){return o.pointDistance(t,e,n,r,i,a,u,s,f,l)<=c/2;},quadraticline:function quadraticline(t,e,n,r,o,a,u,s,c){return i.pointDistance(t,e,n,r,o,a,s,c)<=u/2;},arcline:function arcline(t,e,n,r,i,o,u,s,c){return a.pointDistance(t,e,n,r,i,o,s,c)<=u/2;},rect:function rect(t,e,n,r,i,o){return t<=i&&i<=t+n&&e<=o&&o<=e+r;},circle:function circle(t,e,n,r,i){return Math.pow(r-t,2)+Math.pow(i-e,2)<=Math.pow(n,2);},box:function box(t,e,n,r,i,o){return t<=i&&i<=e&&n<=o&&o<=r;}};},function(t,e,n){var r=n(0),i=n(17),o={rect:"rect",circle:"circle",line:"line",path:"path",marker:"marker",text:"text",polygon:"polygon",image:"image",ellipse:"ellipse",dom:"foreignObject",fan:"path"},a=function t(e){t.superclass.constructor.call(this,e);};a.ATTRS={},r.extend(a,i),r.augment(a,{isShape:!0,createPath:function createPath(){},init:function init(t){a.superclass.init.call(this);var e=o[this.type];if(e){var n=document.createElementNS("http://www.w3.org/2000/svg",e);t=t||r.uniqueId(this.type+"_"),n.setAttribute("id",t),this.setSilent("el",n),this.setSilent("id",t);}},isPointInPath:function isPointInPath(){return!1;},isHitBox:function isHitBox(){return!0;},isHit:function isHit(){return!1;},calculateBox:function calculateBox(){return null;},getHitLineWidth:function getHitLineWidth(){var t=this.__attrs,e=t.lineAppendWidth||0;return(t.lineWidth||0)+e;},clearTotalMatrix:function clearTotalMatrix(){this.__cfg.totalMatrix=null,this.__cfg.region=null;},clearBBox:function clearBBox(){this.__cfg.box=null,this.__cfg.region=null;}}),t.exports=a;},function(t,e){t.exports=function(t){return null!==t&&"function"!=typeof t&&isFinite(t.length);};},function(t,e,n){var r=n(22);n.d(e,"a",function(){return r.e;}),n.d(e,"f",function(){return r.g;}),n.d(e,"d",function(){return r.f;});var i=n(134);n.d(e,"e",function(){return i.a;}),n.d(e,"c",function(){return i.b;});var o=n(135);n.d(e,"b",function(){return o.a;});},function(t,e){function n(t,e,n,r,i,a){var h=void 0,d=void 0,p=void 0,g=void 0,v=void 0,m=void 0,y=void 0;if(!e.fill){var b=e.arrowLength||f,x=e.arrowAngle?e.arrowAngle*o/180:l;y=c(a-r,i-n),y-=o,v=e.lineWidth*s(y),m=e.lineWidth*u(y),h=i+b*s(y+x/2),d=a+b*u(y+x/2),p=i+b*s(y-x/2),g=a+b*u(y-x/2),t.beginPath(),t.moveTo(h-v,d-m),t.lineTo(i-v,a-m),t.lineTo(p-v,g-m),t.moveTo(i-v,a-m),t.lineTo(i+v,a+m),t.moveTo(i,a),t.stroke();}}function r(t,e,n,r,i,o,a){var u=a.__attrs;u.x||(u.x=i),u.y||(u.y=o),u.r||(u.r=e.lineWidth);var s=0,c=i-n,f=o-r,l=Math.atan(c/f);0===f&&c<0?s=Math.PI:c>0&&f>0?s=Math.PI/2-l:c<0&&f<0?s=-Math.PI/2-l:c>=0&&f<0?s=-l-Math.PI/2:c<=0&&f>0&&(s=Math.PI/2-l),t.save(),t.beginPath(),t.translate(u.x,u.y),t.rotate(s),t.translate(-u.x,-u.y),a.createPath(t),t.setTransform(1,0,0,1,0,0),t.fillStyle=a.attr("fill")||t.strokeStyle,t.fill(),t.restore();}var i="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(t){return void 0===t?"undefined":a(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":a(t);},o=Math.PI,u=Math.sin,s=Math.cos,c=Math.atan2,f=10,l=o/3;t.exports={addStartArrow:function addStartArrow(t,e,o,a,u,s){"object"===i(e.startArrow)?r(t,e,o,a,u,s,e.startArrow):e.startArrow&&n(t,e,o,a,u,s);},addEndArrow:function addEndArrow(t,e,o,a,u,s){"object"===i(e.endArrow)?r(t,e,o,a,u,s,e.endArrow):e.endArrow&&n(t,e,o,a,u,s);}};},function(t,e,n){var r=n(81);t.exports={isFunction:r.isFunction,isObject:r.isObject,isBoolean:r.isBoolean,isNil:r.isNil,isString:r.isString,isArray:r.isArray,isNumber:r.isNumber,isEmpty:r.isEmpty,uniqueId:r.uniqueId,clone:r.clone,assign:r.mix,merge:r.deepMix,upperFirst:r.upperFirst,each:r.each,isEqual:r.isEqual,toArray:r.toArray,extend:r.extend,augment:r.augment,remove:r.arrayUtil.pull,isNumberEqual:r.isNumberEqual,toRadian:r.toRadian,toDegree:r.toDegree,mod:r.mod,clamp:r.clamp};},function(t,e){var n={}.toString;t.exports=function(t,e){return n.call(t)==="[object "+e+"]";};},function(t,e,n){var r=n(90),i=n(11);t.exports=function(t,e){if(t)if(i(t))for(var n=0,o=t.length;n<o&&!1!==e(t[n],n);n++){}else if(r(t))for(var a in t){if(t.hasOwnProperty(a)&&!1===e(t[a],a))break;}};},function(t,e,n){var r=n(9),i=Array.isArray?Array.isArray:function(t){return r(t,"Array");};t.exports=i;},function(t,e,n){function r(t,e){return function(n){return t+n*e;};}function i(t,e){var n=e-t;return n?r(t,n):Object(o.a)(isNaN(t)?e:t);}e.c=function(t,e){var n=e-t;return n?r(t,n>180||n<-180?n-360*Math.round(n/360):n):Object(o.a)(isNaN(t)?e:t);},e.b=function(t){return 1==(t=+t)?i:function(e,n){return n-e?function(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(r){return Math.pow(t+r*e,n);};}(e,n,t):Object(o.a)(isNaN(e)?n:e);};},e.a=i;var o=n(56);},function(t,e,n){var r=n(9);t.exports=function(t){return r(t,"Function");};},function(t,e,n){e.a=function(t,e){return e-=t=+t,function(n){return t+e*n;};};},function(t,e,n){function r(t,e,n,r,i){var o=1-i;return o*o*(o*r+3*i*n)+i*i*(i*t+3*o*e);}function i(t,e,n,i,o,a,s,c,f,l,h){var d=void 0,p=.005,g=1/0,v=void 0,m=void 0,y=void 0,b=void 0,x=void 0,_=void 0,w=void 0,S=[f,l];for(v=0;v<1;v+=.05){m=[r(t,n,o,s,v),r(e,i,a,c,v)],(y=u.squaredDistance(S,m))<g&&(d=v,g=y);}g=1/0;for(var M=0;M<32&&!(p<1e-4);M++){w=d+p,m=[r(t,n,o,s,_=d-p),r(e,i,a,c,_)],y=u.squaredDistance(S,m),_>=0&&y<g?(d=_,g=y):(x=[r(t,n,o,s,w),r(e,i,a,c,w)],b=u.squaredDistance(S,x),w<=1&&b<g?(d=w,g=b):p*=.5);}return h&&(h.x=r(t,n,o,s,d),h.y=r(e,i,a,c,d)),Math.sqrt(g);}function o(t,e,n,r,i){return t*(t*(-3*e+9*n-9*r+3*i)+6*e-12*n+6*r)-3*e+3*n;}var a=n(0),u=n(2).vec2;t.exports={at:r,derivativeAt:function derivativeAt(t,e,n,r,i){var o=1-i;return 3*(((e-t)*o+2*(n-e)*i)*o+(r-n)*i*i);},projectPoint:function projectPoint(t,e,n,r,o,a,u,s,c,f){var l={};return i(t,e,n,r,o,a,u,s,c,f,l),l;},pointDistance:i,extrema:function extrema(t,e,n,r){var i=3*t-9*e+9*n-3*r,o=6*e-12*n+6*r,u=3*n-3*r,s=[],c=void 0,f=void 0,l=void 0;if(a.isNumberEqual(i,0))a.isNumberEqual(o,0)||(c=-u/o)>=0&&c<=1&&s.push(c);else{var h=o*o-4*i*u;a.isNumberEqual(h,0)?s.push(-o/(2*i)):h>0&&(f=(-o-(l=Math.sqrt(h)))/(2*i),(c=(-o+l)/(2*i))>=0&&c<=1&&s.push(c),f>=0&&f<=1&&s.push(f));}return s;},len:function len(t,e,n,r,i,u,s,c,f){a.isNil(f)&&(f=1);for(var l=(f=f>1?1:f<0?0:f)/2,h=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],d=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],p=0,g=0;g<12;g++){var v=l*h[g]+l,m=o(v,t,n,i,s),y=o(v,e,r,u,c),b=m*m+y*y;p+=d[g]*Math.sqrt(b);}return l*p;}};},function(t,e){function n(t,e){for(var n in e){e.hasOwnProperty(n)&&"constructor"!==n&&void 0!==e[n]&&(t[n]=e[n]);}}t.exports=function(t,e,r,i){return e&&n(t,e),r&&n(t,r),i&&n(t,i),t;};},function(t,e,n){var r=n(0),i=n(108),o=n(109),a=n(39),u=n(40),s=function s(t){this.__cfg={zIndex:0,capture:!0,visible:!0,destroyed:!1},r.assign(this.__cfg,this.getDefaultCfg(),t),this.init(t?t.id:null),this.initAttrs(this.__cfg.attrs),this.initTransform();};s.CFG={id:null,zIndex:0,canvas:null,parent:null,capture:!0,context:null,visible:!0,destroyed:!1},r.augment(s,i,o,u,a,{init:function init(){this.setSilent("animable",!0),this.setSilent("animating",!1);},getParent:function getParent(){return this.get("parent");},getDefaultCfg:function getDefaultCfg(){return{};},set:function set(t,e){return"zIndex"===t&&this._beforeSetZIndex(e),this.__cfg[t]=e,this;},setSilent:function setSilent(t,e){this.__cfg[t]=e;},get:function get(t){return this.__cfg[t];},draw:function draw(){},drawInner:function drawInner(){},show:function show(){this.set("visible",!0);var t=this.get("el");return t&&t.setAttribute("visibility","visible"),this;},hide:function hide(){this.set("visible",!1);var t=this.get("el");return t&&t.setAttribute("visibility","hidden"),this;},remove:function remove(t){var e=this.get("el");if(void 0===t&&(t=!0),this.get("parent")){var n=this.get("parent").get("children");r.remove(n,this),e.parentNode.removeChild(e);}return t&&this.destroy(),this;},destroy:function destroy(){this.get("destroyed")||(this.__cfg={},this.__attrs=null,this.removeEvent(),this.set("destroyed",!0));},_beforeSetZIndex:function _beforeSetZIndex(t){return this.__cfg.zIndex=t,r.isNil(this.get("parent"))||this.get("parent").sort(),t;},_setAttrs:function _setAttrs(t){return this.attr(t),t;},setZIndex:function setZIndex(t){return this.__cfg.zIndex=t,t;},clone:function clone(){return r.clone(this);},getBBox:function getBBox(){var t=this.get("el");if(!t)return{minX:0,minY:0,maxX:0,maxY:0,width:0,height:0,x:0,y:0};var e=t.getBBox();if(!t.parentNode||0===e.width&&0===e.height){var n=t.cloneNode();n.innerHTML=t.innerHTML,n.setAttribute("visible","hidden");var r=document.getElementsByTagName("svg")[0];r.appendChild(n),e=n.getBBox(),r.removeChild(n);}return e.minX=e.x,e.minY=e.y,e.maxX=e.x+e.width,e.maxY=e.y+e.height,{minX:e.x,minY:e.y,maxX:e.x+e.width,maxY:e.y+e.height,width:e.width,height:e.height,x:e.x,y:e.y};}}),t.exports=s;},function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.setMatrixArrayType=function(t){e.ARRAY_TYPE=t;},e.toRadian=function(t){return t*r;},e.equals=function(t,e){return Math.abs(t-e)<=n*Math.max(1,Math.abs(t),Math.abs(e));};var n=e.EPSILON=1e-6;e.ARRAY_TYPE="undefined"!=typeof Float32Array?Float32Array:Array,e.RANDOM=Math.random;var r=Math.PI/180;},function(t,e,n){var r="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(t){return void 0===t?"undefined":a(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":a(t);},i=n(8),o="\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029",u=new RegExp("([a-z])["+o+",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?["+o+"]*,?["+o+"]*)+)","ig"),s=new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)["+o+"]*,?["+o+"]*","ig"),c=function c(t){if(!t)return null;if((void 0===t?"undefined":r(t))===r([]))return t;var e={a:7,c:6,o:2,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,u:3,z:0},n=[];return String(t).replace(u,function(t,r,i){var o=[],a=r.toLowerCase();if(i.replace(s,function(t,e){e&&o.push(+e);}),"m"===a&&o.length>2&&(n.push([r].concat(o.splice(0,2))),a="l",r="m"===r?"l":"L"),"o"===a&&1===o.length&&n.push([r,o[0]]),"r"===a)n.push([r].concat(o));else for(;o.length>=e[a]&&(n.push([r].concat(o.splice(0,e[a]))),e[a]);){}}),n;},f=function f(t,e){for(var n=[],r=0,i=t.length;i-2*!e>r;r+=2){var o=[{x:+t[r-2],y:+t[r-1]},{x:+t[r],y:+t[r+1]},{x:+t[r+2],y:+t[r+3]},{x:+t[r+4],y:+t[r+5]}];e?r?i-4===r?o[3]={x:+t[0],y:+t[1]}:i-2===r&&(o[2]={x:+t[0],y:+t[1]},o[3]={x:+t[2],y:+t[3]}):o[0]={x:+t[i-2],y:+t[i-1]}:i-4===r?o[3]=o[2]:r||(o[0]={x:+t[r],y:+t[r+1]}),n.push(["C",(-o[0].x+6*o[1].x+o[2].x)/6,(-o[0].y+6*o[1].y+o[2].y)/6,(o[1].x+6*o[2].x-o[3].x)/6,(o[1].y+6*o[2].y-o[3].y)/6,o[2].x,o[2].y]);}return n;},l=function l(t,e,n,r,i){var o=[];if(null===i&&null===r&&(r=n),t=+t,e=+e,n=+n,r=+r,null!==i){var a=Math.PI/180,u=t+n*Math.cos(-r*a),s=t+n*Math.cos(-i*a);o=[["M",u,e+n*Math.sin(-r*a)],["A",n,n,0,+(i-r>180),0,s,e+n*Math.sin(-i*a)]];}else o=[["M",t,e],["m",0,-r],["a",n,r,0,1,1,0,2*r],["a",n,r,0,1,1,0,-2*r],["z"]];return o;},h=function h(t){if(!(t=c(t))||!t.length)return[["M",0,0]];var e=[],n=0,r=0,i=0,o=0,a=0,u=void 0,s=void 0;"M"===t[0][0]&&(i=n=+t[0][1],o=r=+t[0][2],a++,e[0]=["M",n,r]);for(var h,d,p=3===t.length&&"M"===t[0][0]&&"R"===t[1][0].toUpperCase()&&"Z"===t[2][0].toUpperCase(),g=a,v=t.length;g<v;g++){if(e.push(h=[]),(u=(d=t[g])[0])!==u.toUpperCase())switch(h[0]=u.toUpperCase(),h[0]){case"A":h[1]=d[1],h[2]=d[2],h[3]=d[3],h[4]=d[4],h[5]=d[5],h[6]=+d[6]+n,h[7]=+d[7]+r;break;case"V":h[1]=+d[1]+r;break;case"H":h[1]=+d[1]+n;break;case"R":for(var m=2,y=(s=[n,r].concat(d.slice(1))).length;m<y;m++){s[m]=+s[m]+n,s[++m]=+s[m]+r;}e.pop(),e=e.concat(f(s,p));break;case"O":e.pop(),(s=l(n,r,d[1],d[2])).push(s[0]),e=e.concat(s);break;case"U":e.pop(),e=e.concat(l(n,r,d[1],d[2],d[3])),h=["U"].concat(e[e.length-1].slice(-2));break;case"M":i=+d[1]+n,o=+d[2]+r;break;default:for(var b=1,x=d.length;b<x;b++){h[b]=+d[b]+(b%2?n:r);}}else if("R"===u)s=[n,r].concat(d.slice(1)),e.pop(),e=e.concat(f(s,p)),h=["R"].concat(d.slice(-2));else if("O"===u)e.pop(),(s=l(n,r,d[1],d[2])).push(s[0]),e=e.concat(s);else if("U"===u)e.pop(),e=e.concat(l(n,r,d[1],d[2],d[3])),h=["U"].concat(e[e.length-1].slice(-2));else for(var _=0,w=d.length;_<w;_++){h[_]=d[_];}if("O"!==(u=u.toUpperCase()))switch(h[0]){case"Z":n=+i,r=+o;break;case"H":n=h[1];break;case"V":r=h[1];break;case"M":i=h[h.length-2],o=h[h.length-1];break;default:n=h[h.length-2],r=h[h.length-1];}}return e;},d=function d(t,e,n,r){return[t,e,n,r,n,r];},p=function p(t,e,n,r,i,o){return[1/3*t+2/3*n,1/3*e+2/3*r,1/3*i+2/3*n,1/3*o+2/3*r,i,o];},g=function g(t,e){var n=h(t),r=e&&h(e),i={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},o={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},a=[],u=[],s="",c="",f=void 0,l=function l(t,e,n){var r=void 0,i=void 0;if(!t)return["C",e.x,e.y,e.x,e.y,e.x,e.y];switch(!(t[0]in{T:1,Q:1})&&(e.qx=e.qy=null),t[0]){case"M":e.X=t[1],e.Y=t[2];break;case"A":t=["C"].concat(function t(e,n,r,i,o,a,u,s,c,f){r===i&&(r+=1);var l=120*Math.PI/180,h=Math.PI/180*(+o||0),d=[],p=void 0,g=void 0,v=void 0,m=void 0,y=void 0,b=function b(t,e,n){return{x:t*Math.cos(n)-e*Math.sin(n),y:t*Math.sin(n)+e*Math.cos(n)};};if(f)g=f[0],v=f[1],m=f[2],y=f[3];else{e=(p=b(e,n,-h)).x,n=p.y,s=(p=b(s,c,-h)).x,c=p.y,e===s&&n===c&&(s+=1,c+=1);var x=(e-s)/2,_=(n-c)/2,w=x*x/(r*r)+_*_/(i*i);w>1&&(r*=w=Math.sqrt(w),i*=w);var S=r*r,M=i*i,A=(a===u?-1:1)*Math.sqrt(Math.abs((S*M-S*_*_-M*x*x)/(S*_*_+M*x*x)));m=A*r*_/i+(e+s)/2,y=A*-i*x/r+(n+c)/2,g=Math.asin(((n-y)/i).toFixed(9)),v=Math.asin(((c-y)/i).toFixed(9)),g=e<m?Math.PI-g:g,v=s<m?Math.PI-v:v,g<0&&(g=2*Math.PI+g),v<0&&(v=2*Math.PI+v),u&&g>v&&(g-=2*Math.PI),!u&&v>g&&(v-=2*Math.PI);}var O=v-g;if(Math.abs(O)>l){var P=v,E=s,C=c;v=g+l*(u&&v>g?1:-1),d=t(s=m+r*Math.cos(v),c=y+i*Math.sin(v),r,i,o,0,u,E,C,[v,P,m,y]);}O=v-g;var j=Math.cos(g),k=Math.sin(g),I=Math.cos(v),T=Math.sin(v),B=Math.tan(O/4),N=4/3*r*B,D=4/3*i*B,F=[e,n],L=[e+N*k,n-D*j],R=[s+N*T,c-D*I],G=[s,c];if(L[0]=2*F[0]-L[0],L[1]=2*F[1]-L[1],f)return[L,R,G].concat(d);for(var Y=[],X=0,z=(d=[L,R,G].concat(d).join().split(",")).length;X<z;X++){Y[X]=X%2?b(d[X-1],d[X],h).y:b(d[X],d[X+1],h).x;}return Y;}.apply(0,[e.x,e.y].concat(t.slice(1))));break;case"S":"C"===n||"S"===n?(r=2*e.x-e.bx,i=2*e.y-e.by):(r=e.x,i=e.y),t=["C",r,i].concat(t.slice(1));break;case"T":"Q"===n||"T"===n?(e.qx=2*e.x-e.qx,e.qy=2*e.y-e.qy):(e.qx=e.x,e.qy=e.y),t=["C"].concat(p(e.x,e.y,e.qx,e.qy,t[1],t[2]));break;case"Q":e.qx=t[1],e.qy=t[2],t=["C"].concat(p(e.x,e.y,t[1],t[2],t[3],t[4]));break;case"L":t=["C"].concat(d(e.x,e.y,t[1],t[2]));break;case"H":t=["C"].concat(d(e.x,e.y,t[1],e.y));break;case"V":t=["C"].concat(d(e.x,e.y,e.x,t[1]));break;case"Z":t=["C"].concat(d(e.x,e.y,e.X,e.Y));}return t;},g=function g(t,e){if(t[e].length>7){t[e].shift();for(var i=t[e];i.length;){a[e]="A",r&&(u[e]="A"),t.splice(e++,0,["C"].concat(i.splice(0,6)));}t.splice(e,1),f=Math.max(n.length,r&&r.length||0);}},v=function v(t,e,i,o,a){t&&e&&"M"===t[a][0]&&"M"!==e[a][0]&&(e.splice(a,0,["M",o.x,o.y]),i.bx=0,i.by=0,i.x=t[a][1],i.y=t[a][2],f=Math.max(n.length,r&&r.length||0));};f=Math.max(n.length,r&&r.length||0);for(var m=0;m<f;m++){n[m]&&(s=n[m][0]),"C"!==s&&(a[m]=s,m&&(c=a[m-1])),n[m]=l(n[m],i,c),"A"!==a[m]&&"C"===s&&(a[m]="C"),g(n,m),r&&(r[m]&&(s=r[m][0]),"C"!==s&&(u[m]=s,m&&(c=u[m-1])),r[m]=l(r[m],o,c),"A"!==u[m]&&"C"===s&&(u[m]="C"),g(r,m)),v(n,r,i,o,m),v(r,n,o,i,m);var y=n[m],b=r&&r[m],x=y.length,_=r&&b.length;i.x=y[x-2],i.y=y[x-1],i.bx=parseFloat(y[x-4])||i.x,i.by=parseFloat(y[x-3])||i.y,o.bx=r&&(parseFloat(b[_-4])||o.x),o.by=r&&(parseFloat(b[_-3])||o.y),o.x=r&&b[_-2],o.y=r&&b[_-1];}return r?[n,r]:n;},v=/,?([a-z]),?/gi,m=function m(t){return t.join(",").replace(v,"$1");},y=function y(t,e,n,r,i){return t*(t*(-3*e+9*n-9*r+3*i)+6*e-12*n+6*r)-3*e+3*n;},b=function b(t,e,n,r,i,o,a,u,s){null===s&&(s=1);for(var c=(s=s>1?1:s<0?0:s)/2,f=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],l=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],h=0,d=0;d<12;d++){var p=c*f[d]+c,g=y(p,t,n,i,a),v=y(p,e,r,o,u),m=g*g+v*v;h+=l[d]*Math.sqrt(m);}return c*h;},x=function x(t,e,n,r,i,o,a,u){if(!(Math.max(t,n)<Math.min(i,a)||Math.min(t,n)>Math.max(i,a)||Math.max(e,r)<Math.min(o,u)||Math.min(e,r)>Math.max(o,u))){var s=(t-n)*(o-u)-(e-r)*(i-a);if(s){var c=((t*r-e*n)*(i-a)-(t-n)*(i*u-o*a))/s,f=((t*r-e*n)*(o-u)-(e-r)*(i*u-o*a))/s,l=+c.toFixed(2),h=+f.toFixed(2);if(!(l<+Math.min(t,n).toFixed(2)||l>+Math.max(t,n).toFixed(2)||l<+Math.min(i,a).toFixed(2)||l>+Math.max(i,a).toFixed(2)||h<+Math.min(e,r).toFixed(2)||h>+Math.max(e,r).toFixed(2)||h<+Math.min(o,u).toFixed(2)||h>+Math.max(o,u).toFixed(2)))return{x:c,y:f};}}},_=function _(t,e,n){return e>=t.x&&e<=t.x+t.width&&n>=t.y&&n<=t.y+t.height;},w=function w(t,e,n,r,i){if(i)return[["M",+t+ +i,e],["l",n-2*i,0],["a",i,i,0,0,1,i,i],["l",0,r-2*i],["a",i,i,0,0,1,-i,i],["l",2*i-n,0],["a",i,i,0,0,1,-i,-i],["l",0,2*i-r],["a",i,i,0,0,1,i,-i],["z"]];var o=[["M",t,e],["l",n,0],["l",0,r],["l",-n,0],["z"]];return o.parsePathArray=m,o;},S=function S(t,e,n,r){return null===t&&(t=e=n=r=0),null===e&&(e=t.y,n=t.width,r=t.height,t=t.x),{x:t,y:e,width:n,w:n,height:r,h:r,x2:t+n,y2:e+r,cx:t+n/2,cy:e+r/2,r1:Math.min(n,r)/2,r2:Math.max(n,r)/2,r0:Math.sqrt(n*n+r*r)/2,path:w(t,e,n,r),vb:[t,e,n,r].join(" ")};},M=function M(t,e,n,r,o,a,u,s){i.isArray(t)||(t=[t,e,n,r,o,a,u,s]);var c=function(t,e,n,r,i,o,a,u){for(var s=[],c=[[],[]],f=void 0,l=void 0,h=void 0,d=void 0,p=0;p<2;++p){if(0===p?(l=6*t-12*n+6*i,f=-3*t+9*n-9*i+3*a,h=3*n-3*t):(l=6*e-12*r+6*o,f=-3*e+9*r-9*o+3*u,h=3*r-3*e),Math.abs(f)<1e-12){if(Math.abs(l)<1e-12)continue;(d=-h/l)>0&&d<1&&s.push(d);}else{var g=l*l-4*h*f,v=Math.sqrt(g);if(!(g<0)){var m=(-l+v)/(2*f);m>0&&m<1&&s.push(m);var y=(-l-v)/(2*f);y>0&&y<1&&s.push(y);}}}for(var b=s.length,x=b,_=void 0;b--;){_=1-(d=s[b]),c[0][b]=_*_*_*t+3*_*_*d*n+3*_*d*d*i+d*d*d*a,c[1][b]=_*_*_*e+3*_*_*d*r+3*_*d*d*o+d*d*d*u;}return c[0][x]=t,c[1][x]=e,c[0][x+1]=a,c[1][x+1]=u,c[0].length=c[1].length=x+2,{min:{x:Math.min.apply(0,c[0]),y:Math.min.apply(0,c[1])},max:{x:Math.max.apply(0,c[0]),y:Math.max.apply(0,c[1])}};}.apply(null,t);return S(c.min.x,c.min.y,c.max.x-c.min.x,c.max.y-c.min.y);},A=function A(t,e,n,r,i,o,a,u,s){var c=1-s,f=Math.pow(c,3),l=Math.pow(c,2),h=s*s,d=h*s,p=t+2*s*(n-t)+h*(i-2*n+t),g=e+2*s*(r-e)+h*(o-2*r+e),v=n+2*s*(i-n)+h*(a-2*i+n),m=r+2*s*(o-r)+h*(u-2*o+r);return{x:f*t+3*l*s*n+3*c*s*s*i+d*a,y:f*e+3*l*s*r+3*c*s*s*o+d*u,m:{x:p,y:g},n:{x:v,y:m},start:{x:c*t+s*n,y:c*e+s*r},end:{x:c*i+s*a,y:c*o+s*u},alpha:90-180*Math.atan2(p-v,g-m)/Math.PI};},O=function O(t,e,n){if(!function(t,e){return t=S(t),e=S(e),_(e,t.x,t.y)||_(e,t.x2,t.y)||_(e,t.x,t.y2)||_(e,t.x2,t.y2)||_(t,e.x,e.y)||_(t,e.x2,e.y)||_(t,e.x,e.y2)||_(t,e.x2,e.y2)||(t.x<e.x2&&t.x>e.x||e.x<t.x2&&e.x>t.x)&&(t.y<e.y2&&t.y>e.y||e.y<t.y2&&e.y>t.y);}(M(t),M(e)))return n?0:[];for(var r=~~(b.apply(0,t)/8),i=~~(b.apply(0,e)/8),o=[],a=[],u={},s=n?0:[],c=0;c<r+1;c++){var f=A.apply(0,t.concat(c/r));o.push({x:f.x,y:f.y,t:c/r});}for(var l=0;l<i+1;l++){var h=A.apply(0,e.concat(l/i));a.push({x:h.x,y:h.y,t:l/i});}for(var d=0;d<r;d++){for(var p=0;p<i;p++){var g=o[d],v=o[d+1],m=a[p],y=a[p+1],w=Math.abs(v.x-g.x)<.001?"y":"x",O=Math.abs(y.x-m.x)<.001?"y":"x",P=x(g.x,g.y,v.x,v.y,m.x,m.y,y.x,y.y);if(P){if(u[P.x.toFixed(4)]===P.y.toFixed(4))continue;u[P.x.toFixed(4)]=P.y.toFixed(4);var E=g.t+Math.abs((P[w]-g[w])/(v[w]-g[w]))*(v.t-g.t),C=m.t+Math.abs((P[O]-m[O])/(y[O]-m[O]))*(y.t-m.t);E>=0&&E<=1&&C>=0&&C<=1&&(n?s++:s.push({x:P.x,y:P.y,t1:E,t2:C}));}}}return s;};t.exports={parsePathString:c,parsePathArray:m,pathTocurve:g,pathToAbsolute:h,catmullRomToBezier:f,rectPath:w,intersection:function intersection(t,e){return function(t,e,n){t=g(t),e=g(e);for(var r=void 0,i=void 0,o=void 0,a=void 0,u=void 0,s=void 0,c=void 0,f=void 0,l=void 0,h=void 0,d=[],p=0,v=t.length;p<v;p++){var m=t[p];if("M"===m[0])r=u=m[1],i=s=m[2];else{"C"===m[0]?(r=(l=[r,i].concat(m.slice(1)))[6],i=l[7]):(l=[r,i,r,i,u,s,u,s],r=u,i=s);for(var y=0,b=e.length;y<b;y++){var x=e[y];if("M"===x[0])o=c=x[1],a=f=x[2];else{"C"===x[0]?(o=(h=[o,a].concat(x.slice(1)))[6],a=h[7]):(h=[o,a,o,a,c,f,c,f],o=c,a=f);for(var _=O(l,h,n),w=0,S=_.length;w<S;w++){_[w].segment1=p,_[w].segment2=y,_[w].bez1=l,_[w].bez2=h;}d=d.concat(_);}}}}return d;}(t,e);}};},function(t,e,n){function r(){return x||(S(i),x=w.now()+_);}function i(){x=0;}function o(){this._call=this._time=this._next=null;}function u(t,e,n){var r=new o();return r.restart(t,e,n),r;}function s(){r(),++g;for(var t,e=h;e;){(t=x-e._time)>=0&&e._call.call(null,t),e=e._next;}--g;}function c(){x=(b=w.now())+_,g=v=0;try{s();}finally{g=0,function(){for(var t,e,n=h,r=1/0;n;){n._call?(r>n._time&&(r=n._time),t=n,n=n._next):(e=n._next,n._next=null,n=t?t._next=e:h=e);}d=t,l(r);}(),x=0;}}function f(){var t=w.now(),e=t-b;e>y&&(_-=e,b=t);}function l(t){g||(v&&(v=clearTimeout(v)),t-x>24?(t<1/0&&(v=setTimeout(c,t-w.now()-_)),m&&(m=clearInterval(m))):(m||(b=w.now(),m=setInterval(f,y)),g=1,S(c)));}e.b=r,e.a=o,e.c=u,e.d=s;var h,d,p="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(t){return void 0===t?"undefined":a(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":a(t);},g=0,v=0,m=0,y=1e3,b=0,x=0,_=0,w="object"===("undefined"==typeof performance?"undefined":p(performance))&&performance.now?performance:Date,S="object"===("undefined"==typeof window?"undefined":p(window))&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17);};o.prototype=u.prototype={constructor:o,restart:function restart(t,e,n){if("function"!=typeof t)throw new TypeError("callback is not a function");n=(null==n?r():+n)+(null==e?0:+e),this._next||d===this||(d?d._next=this:h=this,d=this),this._call=t,this._time=n,l();},stop:function stop(){this._call&&(this._call=null,this._time=1/0,l());}};},function(t,e,n){var r=n(6),i=n(54),o=n(57),u=n(58),s=n(14),c=n(59),f=n(60),l=n(56),h="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(t){return void 0===t?"undefined":a(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":a(t);};e.a=function(t,e){var n,a=void 0===e?"undefined":h(e);return null==e||"boolean"===a?Object(l.a)(e):("number"===a?s.a:"string"===a?(n=Object(r.a)(e))?(e=n,i.a):f.a:e instanceof r.a?i.a:e instanceof Date?u.a:Array.isArray(e)?o.a:"function"!=typeof e.valueOf&&"function"!=typeof e.toString||isNaN(e)?c.a:s.a)(t,e);};},function(t,e,n){function r(){}function i(t){var e;return t=(t+"").trim().toLowerCase(),(e=x.exec(t))?new c((e=parseInt(e[1],16))>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):(e=_.exec(t))?o(parseInt(e[1],16)):(e=w.exec(t))?new c(e[1],e[2],e[3],1):(e=S.exec(t))?new c(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=M.exec(t))?a(e[1],e[2],e[3],e[4]):(e=A.exec(t))?a(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=O.exec(t))?f(e[1],e[2]/100,e[3]/100,1):(e=P.exec(t))?f(e[1],e[2]/100,e[3]/100,e[4]):E.hasOwnProperty(t)?o(E[t]):"transparent"===t?new c(NaN,NaN,NaN,0):null;}function o(t){return new c(t>>16&255,t>>8&255,255&t,1);}function a(t,e,n,r){return r<=0&&(t=e=n=NaN),new c(t,e,n,r);}function u(t){return t instanceof r||(t=i(t)),t?new c((t=t.rgb()).r,t.g,t.b,t.opacity):new c();}function s(t,e,n,r){return 1===arguments.length?u(t):new c(t,e,n,null==r?1:r);}function c(t,e,n,r){this.r=+t,this.g=+e,this.b=+n,this.opacity=+r;}function f(t,e,n,r){return r<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new h(t,e,n,r);}function l(t,e,n,o){return 1===arguments.length?function(t){if(t instanceof h)return new h(t.h,t.s,t.l,t.opacity);if(t instanceof r||(t=i(t)),!t)return new h();if(t instanceof h)return t;var e=(t=t.rgb()).r/255,n=t.g/255,o=t.b/255,a=Math.min(e,n,o),u=Math.max(e,n,o),s=NaN,c=u-a,f=(u+a)/2;return c?(s=e===u?(n-o)/c+6*(n<o):n===u?(o-e)/c+2:(e-n)/c+4,c/=f<.5?u+a:2-u-a,s*=60):c=f>0&&f<1?0:s,new h(s,c,f,t.opacity);}(t):new h(t,e,n,null==o?1:o);}function h(t,e,n,r){this.h=+t,this.s=+e,this.l=+n,this.opacity=+r;}function d(t,e,n){return 255*(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e);}e.a=r,n.d(e,"d",function(){return g;}),n.d(e,"c",function(){return v;}),e.e=i,e.h=u,e.g=s,e.b=c,e.f=l;var p=n(23),g=.7,v=1/g,m="\\s*([+-]?\\d+)\\s*",y="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",b="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",x=/^#([0-9a-f]{3})$/,_=/^#([0-9a-f]{6})$/,w=new RegExp("^rgb\\("+[m,m,m]+"\\)$"),S=new RegExp("^rgb\\("+[b,b,b]+"\\)$"),M=new RegExp("^rgba\\("+[m,m,m,y]+"\\)$"),A=new RegExp("^rgba\\("+[b,b,b,y]+"\\)$"),O=new RegExp("^hsl\\("+[y,b,b]+"\\)$"),P=new RegExp("^hsla\\("+[y,b,b,y]+"\\)$"),E={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Object(p.a)(r,i,{displayable:function displayable(){return this.rgb().displayable();},toString:function toString(){return this.rgb()+"";}}),Object(p.a)(c,s,Object(p.b)(r,{brighter:function brighter(t){return t=null==t?v:Math.pow(v,t),new c(this.r*t,this.g*t,this.b*t,this.opacity);},darker:function darker(t){return t=null==t?g:Math.pow(g,t),new c(this.r*t,this.g*t,this.b*t,this.opacity);},rgb:function rgb(){return this;},displayable:function displayable(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1;},toString:function toString(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")");}})),Object(p.a)(h,l,Object(p.b)(r,{brighter:function brighter(t){return t=null==t?v:Math.pow(v,t),new h(this.h,this.s,this.l*t,this.opacity);},darker:function darker(t){return t=null==t?g:Math.pow(g,t),new h(this.h,this.s,this.l*t,this.opacity);},rgb:function rgb(){var t=this.h%360+360*(this.h<0),e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*e,i=2*n-r;return new c(d(t>=240?t-240:t+120,i,r),d(t,i,r),d(t<120?t+240:t-120,i,r),this.opacity);},displayable:function displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1;}}));},function(t,e,n){e.b=function(t,e){var n=Object.create(t.prototype);for(var r in e){n[r]=e[r];}return n;},e.a=function(t,e,n){t.prototype=e.prototype=n,n.constructor=t;};},function(t,e,n){function r(t,e,n,r,i){var o=t*t,a=o*t;return((1-3*t+3*o-a)*e+(4-6*o+3*a)*n+(1+3*t+3*o-3*a)*r+a*i)/6;}e.a=r,e.b=function(t){var e=t.length-1;return function(n){var i=n<=0?n=0:n>=1?(n=1,e-1):Math.floor(n*e),o=t[i],a=t[i+1],u=i>0?t[i-1]:2*o-a,s=i<e-1?t[i+2]:2*a-o;return r((n-i/e)*e,u,o,a,s);};};},function(t,e,n){function r(t,e){var n=t.match(f);i.each(n,function(t){t=t.split(":"),e.addColorStop(t[0],t[1]);});}var i=n(0),o=/[MLHVQTCSAZ]([^MLHVQTCSAZ]*)/gi,a=/[^\s\,]+/gi,u=/^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i,s=/^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i,c=/^p\s*\(\s*([axyn])\s*\)\s*(.*)/i,f=/[\d.]+:(#[^\s]+|[^\)]+\))/gi,l={};t.exports={parsePath:function parsePath(t){return t=t||[],i.isArray(t)?t:i.isString(t)?(t=t.match(o),i.each(t,function(e,n){if((e=e.match(a))[0].length>1){var r=e[0].charAt(0);e.splice(1,0,e[0].substr(1)),e[0]=r;}i.each(e,function(t,n){isNaN(t)||(e[n]=+t);}),t[n]=e;}),t):void 0;},parseStyle:function parseStyle(t,e){if(i.isString(t)){if("("===t[1]||"("===t[2]){if("l"===t[0])return function(t,e){var n=u.exec(t),o=i.mod(i.toRadian(parseFloat(n[1])),2*Math.PI),a=n[2],s=e.getBBox(),c=void 0,f=void 0;o>=0&&o<.5*Math.PI?(c={x:s.minX,y:s.minY},f={x:s.maxX,y:s.maxY}):.5*Math.PI<=o&&o<Math.PI?(c={x:s.maxX,y:s.minY},f={x:s.minX,y:s.maxY}):Math.PI<=o&&o<1.5*Math.PI?(c={x:s.maxX,y:s.maxY},f={x:s.minX,y:s.minY}):(c={x:s.minX,y:s.maxY},f={x:s.maxX,y:s.minY});var l=Math.tan(o),h=l*l,d=(f.x-c.x+l*(f.y-c.y))/(h+1)+c.x,p=l*(f.x-c.x+l*(f.y-c.y))/(h+1)+c.y,g=e.get("context").createLinearGradient(c.x,c.y,d,p);return r(a,g),g;}(t,e);if("r"===t[0])return function(t,e){var n=s.exec(t),i=parseFloat(n[1]),o=parseFloat(n[2]),a=parseFloat(n[3]),u=n[4];if(0===a){var c=u.match(f);return c[c.length-1].split(":")[1];}var l=e.getBBox(),h=e.get("context"),d=l.maxX-l.minX,p=l.maxY-l.minY,g=Math.sqrt(d*d+p*p)/2,v=h.createRadialGradient(l.minX+d*i,l.minY+p*o,a*g,l.minX+d/2,l.minY+p/2,g);return r(u,v),v;}(t,e);if("p"===t[0])return function(t,e){function n(){var n=e.get("context");r=n.createPattern(i,a),e.setSilent("pattern",r),e.setSilent("patternSource",t);}if(e.get("patternSource")&&e.get("patternSource")===t)return e.get("pattern");var r=void 0,i=void 0,o=c.exec(t),a=o[1],u=o[2];switch(a){case"a":a="repeat";break;case"x":a="repeat-x";break;case"y":a="repeat-y";break;case"n":a="no-repeat";break;default:a="no-repeat";}return i=new Image(),u.match(/^data:/i)||(i.crossOrigin="Anonymous"),i.src=u,i.complete?n():(i.onload=n,i.src=i.src),r;}(t,e);}return t;}},numberToColor:function numberToColor(t){var e=l[t];if(!e){for(var n=t.toString(16),r=n.length;r<6;r++){n="0"+n;}e="#"+n,l[t]=e;}return e;}};},function(t,e,n){var r=n(2).vec2;t.exports={at:function at(t,e,n){return(e-t)*n+t;},pointDistance:function pointDistance(t,e,n,i,o,a){var u=[n-t,i-e];if(r.exactEquals(u,[0,0]))return NaN;var s=[-u[1],u[0]];r.normalize(s,s);var c=[o-t,a-e];return Math.abs(r.dot(c,s));},box:function box(t,e,n,r,i){var o=i/2,a=Math.min(t,n),u=Math.max(t,n);return{minX:a-o,minY:Math.min(e,r)-o,maxX:u+o,maxY:Math.max(e,r)+o};},len:function len(t,e,n,r){return Math.sqrt((n-t)*(n-t)+(r-e)*(r-e));}};},function(t,e,n){function r(t,e,n,r){var i=1-r;return i*(i*t+2*r*e)+r*r*n;}function i(t,e,n,i,o,u,s,c,f){var l=void 0,h=.005,d=1/0,p=void 0,g=void 0,v=void 0,m=void 0,y=void 0,b=void 0,x=[s,c];for(m=0;m<1;m+=.05){g=[r(t,n,o,m),r(e,i,u,m)],(p=a.squaredDistance(x,g))<d&&(l=m,d=p);}for(d=1/0,b=0;b<32&&!(h<1e-4);b++){var _=l-h,w=l+h;g=[r(t,n,o,_),r(e,i,u,_)],p=a.squaredDistance(x,g),_>=0&&p<d?(l=_,d=p):(v=[r(t,n,o,w),r(e,i,u,w)],y=a.squaredDistance(x,v),w<=1&&y<d?(l=w,d=y):h*=.5);}return f&&(f.x=r(t,n,o,l),f.y=r(e,i,u,l)),Math.sqrt(d);}var o=n(0),a=n(2).vec2;t.exports={at:r,projectPoint:function projectPoint(t,e,n,r,o,a,u,s){var c={};return i(t,e,n,r,o,a,u,s,c),c;},pointDistance:i,extrema:function extrema(t,e,n){var r=t+n-2*e;if(o.isNumberEqual(r,0))return[.5];var i=(t-e)/r;return i<=1&&i>=0?[i]:[];}};},function(t,e,n){function r(t,e,n,r){return{x:Math.cos(r)*n+t,y:Math.sin(r)*n+e};}function i(t,e,n,r){var i=void 0,o=void 0;return r?t<e?(i=e-t,o=2*Math.PI-n+t):t>n&&(i=2*Math.PI-t+e,o=t-n):(i=t-e,o=n-t),i>o?n:e;}function o(t,e,n,r){var o=0;return n-e>=2*Math.PI&&(o=2*Math.PI),e=u.mod(e,2*Math.PI),n=u.mod(n,2*Math.PI)+o,t=u.mod(t,2*Math.PI),r?e>=n?t>n&&t<e?t:i(t,n,e,!0):t<e||t>n?t:i(t,e,n):e<=n?e<t&&t<n?t:i(t,e,n,!0):t>e||t<n?t:i(t,n,e);}function a(t,e,n,r,i,a,u,c,f){var l=[u,c],h=[t,e],d=s.subtract([],l,h),p=s.angleTo([1,0],d);p=o(p,r,i,a);var g=[n*Math.cos(p)+t,n*Math.sin(p)+e];return f&&(f.x=g[0],f.y=g[1]),s.distance(g,l);}var u=n(0),s=n(2).vec2;t.exports={nearAngle:o,projectPoint:function projectPoint(t,e,n,r,i,o,u,s){var c={};return a(t,e,n,r,i,o,u,s,c),c;},pointDistance:a,box:function box(t,e,n,i,a,s){var c=Math.PI/2,f=Math.PI,l=3*Math.PI/2,h=[],d=o(0,i,a,s);0===d&&h.push(r(t,e,n,0)),(d=o(c,i,a,s))===c&&h.push(r(t,e,n,c)),(d=o(f,i,a,s))===f&&h.push(r(t,e,n,f)),(d=o(l,i,a,s))===l&&h.push(r(t,e,n,l)),h.push(r(t,e,n,i)),h.push(r(t,e,n,a));var p=1/0,g=-1/0,v=1/0,m=-1/0;return u.each(h,function(t){p>t.x&&(p=t.x),g<t.x&&(g=t.x),v>t.y&&(v=t.y),m<t.y&&(m=t.y);}),{minX:p,minY:v,maxX:g,maxY:m};}};},function(t,e,n){function r(t,e,n){return{x:n.x+t,y:n.y+e};}function i(t,e){return{x:e.x+(e.x-t.x),y:e.y+(e.y-t.y)};}function o(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1]);}function a(t,e){return(t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(function(t,e){return(t[0]*e[0]+t[1]*e[1])/(o(t)*o(e));}(t,e));}var u=n(0),s=n(3),c=n(15),f=n(27),l=n(151),h=n(2).vec3,d=n(2).mat3,p=["m","l","c","a","q","h","v","t","s","z"],g=function g(t,e,n){this.preSegment=e,this.isLast=n,this.init(t,e);};u.augment(g,{init:function init(t,e){var n=t[0];e=e||{endPoint:{x:0,y:0}};var o=p.indexOf(n)>=0,s=o?n.toUpperCase():n,c=t,f=void 0,l=void 0,h=void 0,d=void 0,g=e.endPoint,v=c[1],m=c[2];switch(s){default:break;case"M":d=o?r(v,m,g):{x:v,y:m},this.command="M",this.params=[g,d],this.subStart=d,this.endPoint=d;break;case"L":d=o?r(v,m,g):{x:v,y:m},this.command="L",this.params=[g,d],this.subStart=e.subStart,this.endPoint=d,this.endTangent=function(){return[d.x-g.x,d.y-g.y];},this.startTangent=function(){return[g.x-d.x,g.y-d.y];};break;case"H":d=o?r(v,0,g):{x:v,y:g.y},this.command="L",this.params=[g,d],this.subStart=e.subStart,this.endPoint=d,this.endTangent=function(){return[d.x-g.x,d.y-g.y];},this.startTangent=function(){return[g.x-d.x,g.y-d.y];};break;case"V":d=o?r(0,v,g):{x:g.x,y:v},this.command="L",this.params=[g,d],this.subStart=e.subStart,this.endPoint=d,this.endTangent=function(){return[d.x-g.x,d.y-g.y];},this.startTangent=function(){return[g.x-d.x,g.y-d.y];};break;case"Q":o?(f=r(v,m,g),l=r(c[3],c[4],g)):(f={x:v,y:m},l={x:c[3],y:c[4]}),this.command="Q",this.params=[g,f,l],this.subStart=e.subStart,this.endPoint=l,this.endTangent=function(){return[l.x-f.x,l.y-f.y];},this.startTangent=function(){return[g.x-f.x,g.y-f.y];};break;case"T":l=o?r(v,m,g):{x:v,y:m},"Q"===e.command?(f=i(e.params[1],g),this.command="Q",this.params=[g,f,l],this.subStart=e.subStart,this.endPoint=l,this.endTangent=function(){return[l.x-f.x,l.y-f.y];},this.startTangent=function(){return[g.x-f.x,g.y-f.y];}):(this.command="TL",this.params=[g,l],this.subStart=e.subStart,this.endPoint=l,this.endTangent=function(){return[l.x-g.x,l.y-g.y];},this.startTangent=function(){return[g.x-l.x,g.y-l.y];});break;case"C":o?(f=r(v,m,g),l=r(c[3],c[4],g),h=r(c[5],c[6],g)):(f={x:v,y:m},l={x:c[3],y:c[4]},h={x:c[5],y:c[6]}),this.command="C",this.params=[g,f,l,h],this.subStart=e.subStart,this.endPoint=h,this.endTangent=function(){return[h.x-l.x,h.y-l.y];},this.startTangent=function(){return[g.x-f.x,g.y-f.y];};break;case"S":o?(l=r(v,m,g),h=r(c[3],c[4],g)):(l={x:v,y:m},h={x:c[3],y:c[4]}),"C"===e.command?(f=i(e.params[2],g),this.command="C",this.params=[g,f,l,h],this.subStart=e.subStart,this.endPoint=h,this.endTangent=function(){return[h.x-l.x,h.y-l.y];},this.startTangent=function(){return[g.x-f.x,g.y-f.y];}):(this.command="SQ",this.params=[g,l,h],this.subStart=e.subStart,this.endPoint=h,this.endTangent=function(){return[h.x-l.x,h.y-l.y];},this.startTangent=function(){return[g.x-l.x,g.y-l.y];});break;case"A":var y=v,b=m,x=c[3],_=c[4],w=c[5];d=o?r(c[6],c[7],g):{x:c[6],y:c[7]},this.command="A";var S=function(t,e,n,r,i,o,s){var c=u.mod(u.toRadian(s),2*Math.PI),f=t.x,l=t.y,h=e.x,d=e.y,p=Math.cos(c)*(f-h)/2+Math.sin(c)*(l-d)/2,g=-1*Math.sin(c)*(f-h)/2+Math.cos(c)*(l-d)/2,v=p*p/(i*i)+g*g/(o*o);v>1&&(i*=Math.sqrt(v),o*=Math.sqrt(v));var m=i*i*(g*g)+o*o*(p*p),y=Math.sqrt((i*i*(o*o)-m)/m);n===r&&(y*=-1),isNaN(y)&&(y=0);var b=y*i*g/o,x=y*-o*p/i,_=(f+h)/2+Math.cos(c)*b-Math.sin(c)*x,w=(l+d)/2+Math.sin(c)*b+Math.cos(c)*x,S=a([1,0],[(p-b)/i,(g-x)/o]),M=a([(p-b)/i,(g-x)/o],[(-1*p-b)/i,(-1*g-x)/o]);return 0===r&&M>0&&(M-=2*Math.PI),1===r&&M<0&&(M+=2*Math.PI),[t,_,w,i,o,S,M,c,r];}(g,d,_,w,y,b,x);this.params=S;var M=e.subStart;this.subStart=M,this.endPoint=d;var A=S[5]%(2*Math.PI);u.isNumberEqual(A,2*Math.PI)&&(A=0);var O=S[6]%(2*Math.PI);u.isNumberEqual(O,2*Math.PI)&&(O=0);var P=.001;this.startTangent=function(){0===w&&(P*=-1);var t=S[3]*Math.cos(A-P)+S[1],e=S[4]*Math.sin(A-P)+S[2];return[t-M.x,e-M.y];},this.endTangent=function(){var t=S[6];t-2*Math.PI<1e-4&&(t=0);var e=S[3]*Math.cos(A+t+P)+S[1],n=S[4]*Math.sin(A+t-P)+S[2];return[g.x-e,g.y-n];};break;case"Z":this.command="Z",this.params=[g,e.subStart],this.subStart=e.subStart,this.endPoint=e.subStart;}},isInside:function isInside(t,e,n){var r=this.command,i=this.params,o=this.box;if(o&&!s.box(o.minX,o.maxX,o.minY,o.maxY,t,e))return!1;switch(r){default:break;case"M":return!1;case"TL":case"L":case"Z":return s.line(i[0].x,i[0].y,i[1].x,i[1].y,n,t,e);case"SQ":case"Q":return s.quadraticline(i[0].x,i[0].y,i[1].x,i[1].y,i[2].x,i[2].y,n,t,e);case"C":return s.cubicline(i[0].x,i[0].y,i[1].x,i[1].y,i[2].x,i[2].y,i[3].x,i[3].y,n,t,e);case"A":var a=i,u=a[1],c=a[2],f=a[3],l=a[4],p=a[5],g=a[6],v=a[7],m=a[8],y=f>l?f:l,b=f>l?1:f/l,x=f>l?l/f:1;a=[t,e,1];var _=[1,0,0,0,1,0,0,0,1];return d.translate(_,_,[-u,-c]),d.rotate(_,_,-v),d.scale(_,_,[1/b,1/x]),h.transformMat3(a,a,_),s.arcline(0,0,y,p,p+g,1-m,n,a[0],a[1]);}return!1;},draw:function draw(t){var e=this.command,n=this.params,r=void 0,i=void 0,o=void 0;switch(e){default:break;case"M":t.moveTo(n[1].x,n[1].y);break;case"TL":case"L":t.lineTo(n[1].x,n[1].y);break;case"SQ":case"Q":r=n[1],i=n[2],t.quadraticCurveTo(r.x,r.y,i.x,i.y);break;case"C":r=n[1],i=n[2],o=n[3],t.bezierCurveTo(r.x,r.y,i.x,i.y,o.x,o.y);break;case"A":var a=n,u=a[1],s=a[2],c=a[3],f=a[4],l=a[5],h=a[6],d=a[7],p=a[8],g=c>f?c:f,v=c>f?1:c/f,m=c>f?f/c:1;t.translate(u,s),t.rotate(d),t.scale(v,m),t.arc(0,0,g,l,l+h,1-p),t.scale(1/v,1/m),t.rotate(-d),t.translate(-u,-s);break;case"Z":t.closePath();}},getBBox:function getBBox(t){var e=t/2,n=this.params,r=void 0,i=void 0,o=void 0,a=void 0;switch(this.command){default:case"M":case"Z":break;case"TL":case"L":this.box={minX:Math.min(n[0].x,n[1].x)-e,maxX:Math.max(n[0].x,n[1].x)+e,minY:Math.min(n[0].y,n[1].y)-e,maxY:Math.max(n[0].y,n[1].y)+e};break;case"SQ":case"Q":for(o=0,a=(i=f.extrema(n[0].x,n[1].x,n[2].x)).length;o<a;o++){i[o]=f.at(n[0].x,n[1].x,n[2].x,i[o]);}for(i.push(n[0].x,n[2].x),o=0,a=(r=f.extrema(n[0].y,n[1].y,n[2].y)).length;o<a;o++){r[o]=f.at(n[0].y,n[1].y,n[2].y,r);}r.push(n[0].y,n[2].y),this.box={minX:Math.min.apply(Math,i)-e,maxX:Math.max.apply(Math,i)+e,minY:Math.min.apply(Math,r)-e,maxY:Math.max.apply(Math,r)+e};break;case"C":for(o=0,a=(i=c.extrema(n[0].x,n[1].x,n[2].x,n[3].x)).length;o<a;o++){i[o]=c.at(n[0].x,n[1].x,n[2].x,n[3].x,i[o]);}for(o=0,a=(r=c.extrema(n[0].y,n[1].y,n[2].y,n[3].y)).length;o<a;o++){r[o]=c.at(n[0].y,n[1].y,n[2].y,n[3].y,r[o]);}i.push(n[0].x,n[3].x),r.push(n[0].y,n[3].y),this.box={minX:Math.min.apply(Math,i)-e,maxX:Math.max.apply(Math,i)+e,minY:Math.min.apply(Math,r)-e,maxY:Math.max.apply(Math,r)+e};break;case"A":var u=n,s=u[1],h=u[2],d=u[3],p=u[4],g=u[5],v=u[6],m=u[7],y=u[8],b=g,x=g+v,_=l.xExtrema(m,d,p),w=1/0,S=-1/0,M=[b,x];for(o=2*-Math.PI;o<=2*Math.PI;o+=Math.PI){var A=_+o;1===y?b<A&&A<x&&M.push(A):x<A&&A<b&&M.push(A);}for(o=0,a=M.length;o<a;o++){var O=l.xAt(m,d,p,s,M[o]);O<w&&(w=O),O>S&&(S=O);}var P=l.yExtrema(m,d,p),E=1/0,C=-1/0,j=[b,x];for(o=2*-Math.PI;o<=2*Math.PI;o+=Math.PI){var k=P+o;1===y?b<k&&k<x&&j.push(k):x<k&&k<b&&j.push(k);}for(o=0,a=j.length;o<a;o++){var I=l.yAt(m,d,p,h,j[o]);I<E&&(E=I),I>C&&(C=I);}this.box={minX:w-e,maxX:S+e,minY:E-e,maxY:C+e};}}}),t.exports=g;},function(t,e,n){var r=n(5);t.exports=function(t){return r(t)?Array.prototype.slice.call(t):[];};},function(t,e,n){var r=n(32),i=n(9);t.exports=function(t){if(!r(t)||!i(t,"Object"))return!1;if(null===Object.getPrototypeOf(t))return!0;for(var e=t;null!==Object.getPrototypeOf(e);){e=Object.getPrototypeOf(e);}return Object.getPrototypeOf(t)===e;};},function(t,e){var n="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(t){return void 0===t?"undefined":a(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":a(t);},r="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(t){return void 0===t?"undefined":n(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":n(t);};t.exports=function(t){return"object"===(void 0===t?"undefined":r(t))&&null!==t;};},function(t,e,n){var r=n(13),i=n(11),o=n(34);t.exports=function(t,e){if(!e)return{0:t};if(!r(e)){var n=i(e)?e:e.replace(/\s+/g,"").split("*");e=function e(t){for(var e="_",r=0,i=n.length;r<i;r++){e+=t[n[r]]&&t[n[r]].toString();}return e;};}return o(t,e);};},function(t,e,n){var r=n(10),i=n(11),o=Object.prototype.hasOwnProperty;t.exports=function(t,e){if(!e||!i(t))return t;var n={},a=null;return r(t,function(t){a=e(t),o.call(n,a)?n[a].push(t):n[a]=[t];}),n;};},function(t,e,n){var r=n(32),i=n(5),o=n(102);t.exports=function t(e,n){if(e===n)return!0;if(!e||!n)return!1;if(o(e)||o(n))return!1;if(i(e)||i(n)){if(e.length!==n.length)return!1;for(var a=!0,u=0;u<e.length&&(a=t(e[u],n[u]));u++){}return a;}if(r(e)||r(n)){var s=Object.keys(e),c=Object.keys(n);if(s.length!==c.length)return!1;for(var f=!0,l=0;l<s.length&&(f=t(e[s[l]],n[s[l]]));l++){}return f;}return!1;};},function(t,e,n){var r=n(8),i=document.createElement("table"),o=document.createElement("tr"),a=/^\s*<(\w+|!)[^>]*>/,u={tr:document.createElement("tbody"),tbody:i,thead:i,tfoot:i,td:o,th:o,"*":document.createElement("div")};t.exports={getBoundingClientRect:function getBoundingClientRect(t,e){if(t&&t.getBoundingClientRect){var n=t.getBoundingClientRect(),r=document.documentElement.clientTop,i=document.documentElement.clientLeft;return{top:n.top-r,bottom:n.bottom-r,left:n.left-i,right:n.right-i};}return e||null;},getStyle:function getStyle(t,e,n){try{return window.getComputedStyle?window.getComputedStyle(t,null)[e]:t.currentStyle[e];}catch(t){return r.isNil(n)?null:n;}},modifyCSS:function modifyCSS(t,e){if(t)for(var n in e){e.hasOwnProperty(n)&&(t.style[n]=e[n]);}return t;},createDom:function createDom(t){var e=a.test(t)&&RegExp.$1;e in u||(e="*");var n=u[e];t=t.replace(/(^\s*)|(\s*$)/g,""),n.innerHTML=""+t;var r=n.childNodes[0];return n.removeChild(r),r;},getRatio:function getRatio(){return window.devicePixelRatio?window.devicePixelRatio:2;},getWidth:function getWidth(t,e){var n=this.getStyle(t,"width",e);return"auto"===n&&(n=t.offsetWidth),parseFloat(n);},getHeight:function getHeight(t,e){var n=this.getStyle(t,"height",e);return"auto"===n&&(n=t.offsetHeight),parseFloat(n);},getOuterHeight:function getOuterHeight(t,e){var n=this.getHeight(t,e),r=parseFloat(this.getStyle(t,"borderTopWidth"))||0,i=parseFloat(this.getStyle(t,"paddingTop"))||0,o=parseFloat(this.getStyle(t,"paddingBottom"))||0;return n+r+(parseFloat(this.getStyle(t,"borderBottomWidth"))||0)+i+o;},getOuterWidth:function getOuterWidth(t,e){var n=this.getWidth(t,e),r=parseFloat(this.getStyle(t,"borderLeftWidth"))||0,i=parseFloat(this.getStyle(t,"paddingLeft"))||0,o=parseFloat(this.getStyle(t,"paddingRight"))||0;return n+r+(parseFloat(this.getStyle(t,"borderRightWidth"))||0)+i+o;},addEventListener:function addEventListener(t,e,n){if(t){if(t.addEventListener)return t.addEventListener(e,n,!1),{remove:function remove(){t.removeEventListener(e,n,!1);}};if(t.attachEvent)return t.attachEvent("on"+e,n),{remove:function remove(){t.detachEvent("on"+e,n);}};}},requestAnimationFrame:function requestAnimationFrame(t){return(window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(t){return setTimeout(t,16);})(t);}};},function(t,e,n){var r=n(0),i=function i(t,e,n,r){this.type=t,this.target=null,this.currentTarget=null,this.bubbles=n,this.cancelable=r,this.timeStamp=new Date().getTime(),this.defaultPrevented=!1,this.propagationStopped=!1,this.removed=!1,this.event=e;};r.augment(i,{preventDefault:function preventDefault(){this.defaultPrevented=this.cancelable&&!0;},stopPropagation:function stopPropagation(){this.propagationStopped=!0;},remove:function remove(){this.remove=!0;},clone:function clone(){return r.clone(this);},toString:function toString(){return"[Event (type="+this.type+")]";}}),t.exports=i;},function(t,e,n){var r=n(0),i=n(17),o=n(113),a={},u="_INDEX",s=function t(e){t.superclass.constructor.call(this,e),this.set("children",[]),this._beforeRenderUI(),this._renderUI(),this._bindUI();};r.extend(s,i),r.augment(s,{isGroup:!0,canFill:!0,canStroke:!0,init:function init(t){s.superclass.init.call(this);var e=document.createElementNS("http://www.w3.org/2000/svg","g");t=t||r.uniqueId("g_"),e.setAttribute("id",t),this.setSilent("el",e),this.setSilent("id",t);},getDefaultCfg:function getDefaultCfg(){return function t(e){if(!e.__cfg&&e!==s){var n=e.superclass.constructor;n&&!n.__cfg&&t(n),e.__cfg={},r.merge(e.__cfg,n.__cfg),r.merge(e.__cfg,e.CFG);}}(this.constructor),r.merge({},this.constructor.__cfg);},_beforeRenderUI:function _beforeRenderUI(){},_renderUI:function _renderUI(){},_bindUI:function _bindUI(){},addShape:function addShape(t,e){var n=this.get("canvas");e=e||{};var i=a[t];if(i||(i=r.upperFirst(t),a[t]=i),e.attrs){var u=e.attrs;if("text"===t){var s=n.get("fontFamily");s&&(u.fontFamily=u.fontFamily||s);}}e.canvas=n,e.defs=this.get("defs"),e.type=t;var c=o[i];if(!c)throw new TypeError("the shape "+i+" is not supported by svg version, use canvas instead");var f=new c(e);return this.add(f),f;},addGroup:function addGroup(t,e){var n=this.get("canvas"),i=void 0;if(e=r.merge({},e),r.isFunction(t))e?(e.canvas=n,e.parent=this,i=new t(e)):i=new t({canvas:n,parent:this}),this.add(i);else if(r.isObject(t))t.canvas=n,i=new s(t),this.add(i);else{if(void 0!==t)return!1;i=new s(),this.add(i);}return i;},renderBack:function renderBack(t,e){var n=this.get("backShape"),i=this.getBBox();return r.merge(e,{x:i.minX-t[3],y:i.minY-t[0],width:i.width+t[1]+t[3],height:i.height+t[0]+t[2]}),n?n.attr(e):n=this.addShape("rect",{zIndex:-1,attrs:e}),this.set("backShape",n),this.sort(),n;},removeChild:function removeChild(t,e){if(arguments.length>=2)this.contain(t)&&t.remove(e);else{if(1===arguments.length){if(!r.isBoolean(t))return this.contain(t)&&t.remove(!0),this;e=t;}0===arguments.length&&(e=!0),s.superclass.remove.call(this,e);}return this;},add:function add(t){var e=this,n=e.get("children"),i=e.get("el");if(r.isArray(t))r.each(t,function(t){var n=t.get("parent");n&&n.removeChild(t,!1),t.get("dependencies")&&e._addDependency(t),e._setEvn(t),i.appendChild(t.get("el"));}),n.push.apply(n,t);else{var o=t,a=o.get("parent");a&&a.removeChild(o,!1),e._setEvn(o),o.get("dependencies")&&e._addDependency(o),i.appendChild(o.get("el")),n.push(o);}return e;},contain:function contain(t){return this.get("children").indexOf(t)>-1;},getChildByIndex:function getChildByIndex(t){return this.get("children")[t];},getFirst:function getFirst(){return this.getChildByIndex(0);},getLast:function getLast(){var t=this.get("children").length-1;return this.getChildByIndex(t);},_addDependency:function _addDependency(t){var e=t.get("dependencies");t.attr(e),t.__cfg.dependencies={};},_setEvn:function _setEvn(t){var e=this.__cfg;t.__cfg.parent=this,t.__cfg.timeline=e.timeline,t.__cfg.canvas=e.canvas,t.__cfg.defs=e.defs;var n=t.__attrs.clip;n&&(n.setSilent("parent",this),n.setSilent("timeline",e.timeline),n.setSilent("canvas",e.canvas));var i=t.__cfg.children;i&&r.each(i,function(e){t._setEvn(e);});},getCount:function getCount(){return this.get("children").length;},sort:function sort(){var t=this.get("children");return r.each(t,function(t,e){return t[u]=e,t;}),t.sort(function(t){return function(e,n){var r=t(e,n);return 0===r?e[u]-n[u]:r;};}(function(t,e){return t.get("zIndex")-e.get("zIndex");})),this;},findById:function findById(t){return this.find(function(e){return e.get("id")===t;});},find:function find(t){if(r.isString(t))return this.findById(t);var e=this.get("children"),n=null;return r.each(e,function(e){if(t(e)?n=e:e.find&&(n=e.find(t)),n)return!1;}),n;},findAll:function findAll(t){var e=this.get("children"),n=[],i=[];return r.each(e,function(e){t(e)&&n.push(e),e.findAllBy&&(i=e.findAllBy(t),n=n.concat(i));}),n;},findBy:function findBy(t){var e=this.get("children"),n=null;return r.each(e,function(e){if(t(e)?n=e:e.findBy&&(n=e.findBy(t)),n)return!1;}),n;},findAllBy:function findAllBy(t){var e=this.get("children"),n=[],i=[];return r.each(e,function(e){t(e)&&n.push(e),e.findAllBy&&(i=e.findAllBy(t),n=n.concat(i));}),n;},getShape:function getShape(){return null;},findShape:function findShape(t){if(this.__cfg.visible&&this.__cfg.capture&&this.get("el")===t)return this;for(var e=this.__cfg.children,n=null,r=e.length-1;r>=0;r--){var i=e[r];if(i.isGroup?(n=i.findShape(t),n=i.findShape(t)):i.get("visible")&&i.get("el")===t&&(n=i),n)break;}return n;},clearTotalMatrix:function clearTotalMatrix(){if(this.get("totalMatrix")){this.setSilent("totalMatrix",null);for(var t=this.__cfg.children,e=0;e<t.length;e++){t[e].clearTotalMatrix();}}},clear:function clear(){for(var t=this.get("children");0!==t.length;){t[t.length-1].remove();}return this;},destroy:function destroy(){this.get("destroyed")||(this.clear(),s.superclass.destroy.call(this));}}),t.exports=s;},function(t,e,n){var r=n(0),i=n(2),o={delay:"delay"};t.exports={animate:function animate(t,e,n,a){var u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;this.set("animating",!0);var s=this.get("timeline");s||(s=this.get("canvas").get("timeline"),this.setSilent("timeline",s));var c=this.get("animators")||[];s._timer||s.initTimer(),r.isNumber(a)&&(u=a,a=null),r.isFunction(n)?(a=n,n="easeLinear"):n=n||"easeLinear";var f=function(t,e){var n={matrix:null,attrs:{}};for(var r in t){"transform"===r?n.matrix=i.transform(e.getMatrix(),t[r]):"matrix"===r?n.matrix=t[r]:o[r]||(n.attrs[r]=t[r]);}return n;}(t,this),l={fromAttrs:function(t,e){var n={};for(var r in t){n[r]=e.attr(r);}return n;}(t,this),toAttrs:f.attrs,fromMatrix:r.clone(this.getMatrix()),toMatrix:f.matrix,duration:e,easing:n,callback:a,delay:u,startTime:s.getTime(),id:r.uniqueId()};c.length>0?c=function(t,e){var n=Object.prototype.hasOwnProperty;return r.each(e.toAttrs,function(e,i){r.each(t,function(t){n.call(t.toAttrs,i)&&(delete t.toAttrs[i],delete t.fromAttrs[i]);});}),t;}(c,l):s.addAnimator(this),c.push(l),this.setSilent("animators",c),this.setSilent("pause",{isPaused:!1});},stopAnimate:function stopAnimate(){var t=this,e=this.get("animators");r.each(e,function(e){t.attr(e.toAttrs),e.toMatrix&&t.attr("matrix",e.toMatrix),e.callback&&e.callback();}),this.setSilent("animating",!1),this.setSilent("animators",[]);},pauseAnimate:function pauseAnimate(){var t=this.get("timeline");return this.setSilent("pause",{isPaused:!0,pauseTime:t.getTime()}),this;},resumeAnimate:function resumeAnimate(){var t=this.get("timeline").getTime(),e=this.get("animators"),n=this.get("pause").pauseTime;return r.each(e,function(e){e.startTime=e.startTime+(t-n),e._paused=!1,e._pauseTime=null;}),this.setSilent("pause",{isPaused:!1}),this.setSilent("animators",e),this;}};},function(t,e,n){var r,i="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(t){return void 0===t?"undefined":a(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":a(t);};!function(e){function o(){}function a(t,e){for(var n=t.length;n--;){if(t[n].listener===e)return n;}return-1;}function u(t){return function(){return this[t].apply(this,arguments);};}var s=o.prototype,c=e.EventEmitter;s.getListeners=function(t){var e,n,r=this._getEvents();if(t instanceof RegExp)for(n in e={},r){r.hasOwnProperty(n)&&t.test(n)&&(e[n]=r[n]);}else e=r[t]||(r[t]=[]);return e;},s.flattenListeners=function(t){var e,n=[];for(e=0;e<t.length;e+=1){n.push(t[e].listener);}return n;},s.getListenersAsObject=function(t){var e,n=this.getListeners(t);return n instanceof Array&&((e={})[t]=n),e||n;},s.addListener=function(t,e){if(!function t(e){return"function"==typeof e||e instanceof RegExp||!(!e||"object"!==(void 0===e?"undefined":i(e)))&&t(e.listener);}(e))throw new TypeError("listener must be a function");var n,r=this.getListenersAsObject(t),o="object"===(void 0===e?"undefined":i(e));for(n in r){r.hasOwnProperty(n)&&-1===a(r[n],e)&&r[n].push(o?e:{listener:e,once:!1});}return this;},s.on=u("addListener"),s.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0});},s.once=u("addOnceListener"),s.defineEvent=function(t){return this.getListeners(t),this;},s.defineEvents=function(t){for(var e=0;e<t.length;e+=1){this.defineEvent(t[e]);}return this;},s.removeListener=function(t,e){var n,r,i=this.getListenersAsObject(t);for(r in i){i.hasOwnProperty(r)&&-1!==(n=a(i[r],e))&&i[r].splice(n,1);}return this;},s.off=u("removeListener"),s.addListeners=function(t,e){return this.manipulateListeners(!1,t,e);},s.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e);},s.manipulateListeners=function(t,e,n){var r,o,a=t?this.removeListener:this.addListener,u=t?this.removeListeners:this.addListeners;if("object"!==(void 0===e?"undefined":i(e))||e instanceof RegExp)for(r=n.length;r--;){a.call(this,e,n[r]);}else for(r in e){e.hasOwnProperty(r)&&(o=e[r])&&("function"==typeof o?a.call(this,r,o):u.call(this,r,o));}return this;},s.removeEvent=function(t){var e,n=void 0===t?"undefined":i(t),r=this._getEvents();if("string"===n)delete r[t];else if(t instanceof RegExp)for(e in r){r.hasOwnProperty(e)&&t.test(e)&&delete r[e];}else delete this._events;return this;},s.removeAllListeners=u("removeEvent"),s.emitEvent=function(t,e){var n,r,i,o,a=this.getListenersAsObject(t);for(o in a){if(a.hasOwnProperty(o))for(n=a[o].slice(0),i=0;i<n.length;i++){!0===(r=n[i]).once&&this.removeListener(t,r.listener),r.listener.apply(this,e||[])===this._getOnceReturnValue()&&this.removeListener(t,r.listener);}}return this;},s.trigger=u("emitEvent"),s.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e);},s.setOnceReturnValue=function(t){return this._onceReturnValue=t,this;},s._getOnceReturnValue=function(){return!this.hasOwnProperty("_onceReturnValue")||this._onceReturnValue;},s._getEvents=function(){return this._events||(this._events={});},o.noConflict=function(){return e.EventEmitter=c,o;},void 0===(r=function(){return o;}.call(e,n,e,t))||(t.exports=r);}(this||{});},function(t,e,n){var r=n(0),i=n(4),o=function t(e){t.superclass.constructor.call(this,e);};o.ATTRS={x:0,y:0,width:0,height:0,radius:0,lineWidth:1,fill:"none"},r.extend(o,i),r.augment(o,{canFill:!0,canStroke:!0,type:"rect",getDefaultAttrs:function getDefaultAttrs(){return{lineWidth:1,fill:"none"};},_afterSetRadius:function _afterSetRadius(){var t=this.get("el");t.setAttribute("rx",this.__attrs.radius),t.setAttribute("ry",this.__attrs.radius);},_afterSetAttrAll:function _afterSetAttrAll(t){"radius"in t&&this._afterSetRadius();}}),t.exports=o;},function(t,e,n){var r=n(0),i=n(4),o=function t(e){t.superclass.constructor.call(this,e);};o.ATTRS={x:0,y:0,r:0,lineWidth:1},r.extend(o,i),r.augment(o,{canFill:!0,canStroke:!0,type:"circle",getDefaultAttrs:function getDefaultAttrs(){return{lineWidth:1,fill:"none"};}}),t.exports=o;},function(t,e,n){var r=n(0),i=n(4),o=function t(e){t.superclass.constructor.call(this,e);};o.ATTRS={x:0,y:0,rx:1,ry:1,lineWidth:1},r.extend(o,i),r.augment(o,{canFill:!0,canStroke:!0,type:"ellipse",getDefaultAttrs:function getDefaultAttrs(){return{lineWidth:1};}}),t.exports=o;},function(t,e,n){function r(t,e,n,r,i){var o=1-i;return o*o*(o*r+3*i*n)+i*i*(i*t+3*o*e);}var i=n(0),o=n(4),a=function t(e){t.superclass.constructor.call(this,e);};a.ATTRS={path:null,lineWidth:1,curve:null,tCache:null,startArrow:!1,endArrow:!1},i.extend(a,o),i.augment(a,{canFill:!0,canStroke:!0,type:"path",getDefaultAttrs:function getDefaultAttrs(){return{lineWidth:1,fill:"none",startArrow:!1,endArrow:!1};},_afterSetAttrStroke:function _afterSetAttrStroke(t){var e=this.get("marker-start"),n=this.get("marker-end");e&&this.get("defs").findById(e).update(null,t),n&&this.get("defs").findById(n).update(null,t);},_afterSetAttrPath:function _afterSetAttrPath(t){var e=this.get("el"),n=t;i.isArray(n)&&(n=n.map(function(t){return t.join(" ");}).join("")),~n.indexOf("NaN")?e.setAttribute("d",""):e.setAttribute("d",n);},_afterSetAttrAll:function _afterSetAttrAll(t){t.path&&this._afterSetAttrPath(t.path),t.stroke&&this._afterSetAttrStroke(t.stroke);},getPoint:function getPoint(t){var e=this.tCache,n=void 0,o=void 0;e||(this._calculateCurve(),this._setTcache(),e=this.tCache);var a=this.curve;if(!e)return a?{x:a[0][1],y:a[0][2]}:null;i.each(e,function(e,r){t>=e[0]&&t<=e[1]&&(n=(t-e[0])/(e[1]-e[0]),o=r);});var u=a[o];if(i.isNil(u)||i.isNil(o))return null;var s=u.length,c=a[o+1];return{x:r(u[s-2],c[1],c[3],c[5],1-n),y:r(u[s-1],c[2],c[4],c[6],1-n)};},createPath:function createPath(){}}),t.exports=a;},function(t,e,n){var r=n(0),i=n(4),o=function t(e){t.superclass.constructor.call(this,e);},a={top:"before-edge",middle:"central",bottom:"after-edge",alphabetic:"baseline",hanging:"hanging"},u={left:"left",start:"left",center:"middle",right:"end",end:"end"};o.ATTRS={x:0,y:0,text:null,fontSize:12,fontFamily:"sans-serif",fontStyle:"normal",fontWeight:"normal",fontVariant:"normal",textAlign:"start",textBaseline:"bottom",lineHeight:null,textArr:null},r.extend(o,i),r.augment(o,{canFill:!0,canStroke:!0,type:"text",getDefaultAttrs:function getDefaultAttrs(){return{lineWidth:1,lineCount:1,fontSize:12,fill:"#000",fontFamily:"sans-serif",fontStyle:"normal",fontWeight:"normal",fontVariant:"normal",textAlign:"start",textBaseline:"bottom"};},initTransform:function initTransform(){this.attr("matrix",[1,0,0,0,1,0,0,0,1]);var t=this.__attrs.fontSize;t&&+t<12&&this.transform([["t",-1*this.__attrs.x,-1*this.__attrs.y],["s",+t/12,+t/12],["t",this.__attrs.x,this.__attrs.y]]);},_assembleFont:function _assembleFont(){var t=this.get("el"),e=this.__attrs,n=e.fontSize,r=e.fontFamily,i=e.fontWeight,o=[e.fontStyle,e.fontVariant,i,n+"px",r].join(" ");e.font=o,t.setAttribute("font",e.font);},_afterSetAttrFontSize:function _afterSetAttrFontSize(){this._assembleFont();},_afterSetAttrFontFamily:function _afterSetAttrFontFamily(){this._assembleFont();},_afterSetAttrFontWeight:function _afterSetAttrFontWeight(){this._assembleFont();},_afterSetAttrFontStyle:function _afterSetAttrFontStyle(){this._assembleFont();},_afterSetAttrFontVariant:function _afterSetAttrFontVariant(){this._assembleFont();},_afterSetAttrTextAlign:function _afterSetAttrTextAlign(){var t=this.__attrs.textAlign;this.get("el").setAttribute("text-anchor",u[t]);},_afterSetAttrTextBaseLine:function _afterSetAttrTextBaseLine(){var t=this.__attrs.textBaseline;this.get("el").setAttribute("alignment-baseline",a[t]||"baseline");},_afterSetAttrText:function _afterSetAttrText(t){var e=this.__attrs,n=void 0;if(r.isString(t)&&-1!==t.indexOf("\n")){var i=(n=t.split("\n")).length;e.lineCount=i,e.textArr=n;}var o=this.get("el");if(~["undefined","null","NaN"].indexOf(String(t))&&o)o.innerHTML="";else if(~t.indexOf("\n")){n=t.split("\n"),e.lineCount=n.length,e.textArr=n;var a="";r.each(n,function(t,e){a+='<tspan x="0" y="'+(e+1)+'em">'+t+"</tspan>";}),o.innerHTML=a;}else o.innerHTML=t;},_afterSetAttrOutline:function _afterSetAttrOutline(t){var e=this.get("el");t||e.setAttribute("paint-order","normal");var n=t.stroke||"#000",r=t.fill||this.__attrs.stroke,i=t.lineWidth||2*this.__attrs.lineWidth;e.setAttribute("paint-order","stroke"),e.setAttribute("style","stroke-linecap:butt; stroke-linejoin:miter;"),e.setAttribute("stroke",n),e.setAttribute("fill",r),e.setAttribute("stroke-width",i);},_afterSetAttrAll:function _afterSetAttrAll(t){("fontSize"in t||"fontWeight"in t||"fontStyle"in t||"fontVariant"in t||"fontFamily"in t)&&this._assembleFont(),"textAlign"in t&&this._afterSetAttrTextAlign(),"textBaseline"in t&&this._afterSetAttrTextBaseLine(),"text"in t&&this._afterSetAttrText(t.text),"outline"in t&&this._afterSetAttrOutline(t.outline);}}),t.exports=o;},function(t,e,n){var r=n(0),i=n(4),o=function t(e){t.superclass.constructor.call(this,e);};o.ATTRS={x1:0,y1:0,x2:0,y2:0,lineWidth:1,startArrow:!1,endArrow:!1},r.extend(o,i),r.augment(o,{canStroke:!0,type:"line",getDefaultAttrs:function getDefaultAttrs(){return{lineWidth:1,stroke:"#000",startArrow:!1,endArrow:!1};},_afterSetAttrStroke:function _afterSetAttrStroke(t){var e=this.get("marker-start"),n=this.get("marker-end");e&&this.get("defs").findById(e).update(t),n&&this.get("defs").findById(n).update(t);},_afterSetAttrAll:function _afterSetAttrAll(t){t.stroke&&this._afterSetAttrStroke(t.stroke);},createPath:function createPath(){},getPoint:function getPoint(t){var e=this.__attrs;return{x:(e.x2-e.x1)*t+e.x1,y:(e.y2-e.y1)*t+e.y1};}}),t.exports=o;},function(t,e,n){var r=n(0),i=n(4),o=function t(e){t.superclass.constructor.call(this,e);};o.ATTRS={x:0,y:0,img:void 0,width:0,height:0,sx:null,sy:null,swidth:null,sheight:null},r.extend(o,i),r.augment(o,{type:"image",_afterSetAttrImg:function _afterSetAttrImg(t){this._setAttrImg(t);},_afterSetAttrAll:function _afterSetAttrAll(t){t.img&&this._setAttrImg(t.img);},_setAttrImg:function _setAttrImg(t){var e=this.get("el"),n=this.__attrs,i=t;if(r.isString(i))e.setAttribute("href",i);else if(i instanceof Image)n.width||this.attr("width",i.width),n.height||this.attr("height",i.height),e.setAttribute("href",i.src);else if(i instanceof HTMLElement&&r.isString(i.nodeName)&&"CANVAS"===i.nodeName.toUpperCase())e.setAttribute("href",i.toDataURL());else if(i instanceof ImageData){var o=document.createElement("canvas");o.setAttribute("width",i.width),o.setAttribute("height",i.height),o.getContext("2d").putImageData(i,0,0),n.width||this.attr("width",i.width),n.height||this.attr("height",i.height),e.setAttribute("href",o.toDataURL());}},drawInner:function drawInner(){}}),t.exports=o;},function(t,e,n){var r=n(0),i=n(4),o=function t(e){t.superclass.constructor.call(this,e);};o.ATTRS={points:null,lineWidth:1},r.extend(o,i),r.augment(o,{canFill:!0,canStroke:!0,type:"polygon",getDefaultAttrs:function getDefaultAttrs(){return{lineWidth:1,fill:"none"};},_afterSetAttrPoints:function _afterSetAttrPoints(){var t=this.__attrs.points,e=this.get("el"),n=t;t&&0!==t.length?r.isArray(t)&&(n=(n=n.map(function(t){return t[0]+","+t[1];})).join(" ")):n="",e.setAttribute("points",n);},_afterSetAttrAll:function _afterSetAttrAll(t){"points"in t&&this._afterSetAttrPoints();},createPath:function createPath(){}}),t.exports=o;},function(t,e,n){var r=n(0),i=n(4),o=function t(e){t.superclass.constructor.call(this,e);};o.Symbols={circle:function circle(t,e,n){return"M"+t+","+e+"\n            m"+-n+",0\n            a "+n+","+n+",0,1,0,"+2*n+",0\n            a "+n+","+n+",0,1,0,"+2*-n+",0";},square:function square(t,e,n){return"M"+(t-n)+","+(e-n)+"\n            H"+(t+n)+"V"+(e+n)+"\n            H"+(t-n)+"Z";},diamond:function diamond(t,e,n){return"M"+(t-n)+","+e+"\n             L"+t+","+(e-n)+"\n             L"+(t+n)+","+e+",\n             L"+t+","+(e+n)+"Z";},triangle:function triangle(t,e,n){var r=n*Math.sin(1/3*Math.PI);return"M"+(t-n)+","+(e+r)+"\n            L"+t+","+(e-r)+"\n            L"+(t+n)+","+(e+r)+"Z";},"triangle-down":function triangleDown(t,e,n){var r=n*Math.sin(1/3*Math.PI);return"M"+(t-n)+","+(e-r)+"\n            L"+(t+n)+","+(e-r)+"\n            L"+t+","+(e+r)+"Z";}},o.ATTRS={path:null,lineWidth:1},r.extend(o,i),r.augment(o,{type:"marker",canFill:!0,canStroke:!0,init:function init(t){o.superclass.init.call(this);var e=document.createElementNS("http://www.w3.org/2000/svg","path");t=t||r.uniqueId(this.type+"_"),e.setAttribute("id",t),this.setSilent("el",e);},getDefaultAttrs:function getDefaultAttrs(){return{x:0,y:0,lineWidth:1,fill:"none"};},_afterSetX:function _afterSetX(){this._assembleShape();},_afterSetY:function _afterSetY(){this._assembleShape();},_afterSetRadius:function _afterSetRadius(){this._assembleShape();},_afterSetR:function _afterSetR(){this._assembleShape();},_afterSetAttrAll:function _afterSetAttrAll(t){("x"in t||"y"in t||"radius"in t)&&this._assembleShape();},_assembleShape:function _assembleShape(){var t=this.__attrs,e=t.r;if(void 0===t.r&&(e=t.radius),!(isNaN(Number(t.x))||isNaN(Number(t.y))||isNaN(Number(e)))){var n="";n="function"==typeof t.symbol?t.symbol(t.x,t.y,e):o.Symbols[t.symbol||"circle"](t.x,t.y,e),r.isArray(n)&&(n=n.map(function(t){return t.join(" ");}).join("")),this.get("el").setAttribute("d",n);}}}),t.exports=o;},function(t,e,n){var r=n(0),i=n(4),o=function t(e){t.superclass.constructor.call(this,e);};r.extend(o,i),r.augment(o,{canFill:!0,canStroke:!0,type:"dom",_afterSetAttrHtml:function _afterSetAttrHtml(){var t=this.__attrs.html,e=this.get("el");"string"==typeof t?e.innerHTML=t:(e.innerHTML="",e.appendChild(t));},_afterSetAttrAll:function _afterSetAttrAll(t){"html"in t&&this._afterSetAttrHtml();}}),t.exports=o;},function(t,e,n){function r(t,e,n){return{x:e*Math.cos(t)+n.x,y:e*Math.sin(t)+n.y};}var i=n(0),o=n(4),a=function t(e){t.superclass.constructor.call(this,e);};a.ATTRS={x:0,y:0,rs:0,re:0,startAngle:0,endAngle:0,clockwise:!1,lineWidth:1},i.extend(a,o),i.augment(a,{canFill:!0,canStroke:!0,type:"fan",getDefaultAttrs:function getDefaultAttrs(){return{clockwise:!1,lineWidth:1,rs:0,re:0,fill:"none"};},_afterSetAttrX:function _afterSetAttrX(){this._calculatePath();},_afterSetAttrY:function _afterSetAttrY(){this._calculatePath();},_afterSetAttrRs:function _afterSetAttrRs(){this._calculatePath();},_afterSetAttrRe:function _afterSetAttrRe(){this._calculatePath();},_afterSetAttrStartAngle:function _afterSetAttrStartAngle(){this._calculatePath();},_afterSetAttrEndAngle:function _afterSetAttrEndAngle(){this._calculatePath();},_afterSetAttrClockwise:function _afterSetAttrClockwise(){this._calculatePath();},_afterSetAttrAll:function _afterSetAttrAll(t){("x"in t||"y"in t||"rs"in t||"re"in t||"startAngle"in t||"endAngle"in t||"clockwise"in t)&&this._calculatePath();},_calculatePath:function _calculatePath(){var t=this.__attrs,e={x:t.x,y:t.y},n=[],o=t.startAngle,a=t.endAngle;i.isNumberEqual(a-o,2*Math.PI)&&(a-=1e-5);var u=r(o,t.re,e),s=r(a,t.re,e),c=a>o?1:0,f=Math.abs(a-o)>Math.PI?1:0,l=t.rs,h=t.re,d=r(o,t.rs,e),p=r(a,t.rs,e);t.rs>0?(n.push("M "+s.x+","+s.y),n.push("L "+p.x+","+p.y),n.push("A "+l+","+l+",0,"+f+","+(1===c?0:1)+","+d.x+","+d.y),n.push("L "+u.x+" "+u.y)):(n.push("M "+e.x+","+e.y),n.push("L "+u.x+","+u.y)),n.push("A "+h+","+h+",0,"+f+","+c+","+s.x+","+s.y),t.rs>0?n.push("L "+p.x+","+p.y):n.push("Z"),this.get("el").setAttribute("d",n.join(" "));}}),t.exports=a;},function(t,e,n){function r(t,e,n){var r=e.startTime;if(n<r+e.delay||e.isPaused)return!1;var a=void 0,s=!1,l=e.duration,h=e.easing;return n=n-r-e.delay,e.toAttrs.repeat?(a=n%l/l,a=u[h](a)):(a=n/l)<1?a=u[h](a):(a=1,e.callback&&e.callback(),s=!0),function(t,e,n){var r={},a=e.toAttrs,u=e.fromAttrs,s=e.toMatrix;if(!t.get("destroyed")){var l=void 0;for(var h in a){if(!i.isEqual(u[h],a[h]))if("path"===h){var d=o.parsePathString(a[h]),p=o.parsePathString(u[h]);r[h]=[];for(var g=0;g<d.length;g++){for(var v=d[g],m=p[g],y=[],b=0;b<v.length;b++){i.isNumber(v[b])&&m?(l=c(m[b],v[b]),y.push(l(n))):y.push(v[b]);}r[h].push(y);}}else l=c(u[h],a[h]),r[h]=l(n);}if(s){var x=f(e.fromMatrix,s)(n);t.setMatrix(x);}t.attr(r);}}(t,e,a),s;}var i=n(0),o=n(19),a=n(119),u=n(122),s=n(133),c=s.interpolate,f=s.interpolateArray,l=function l(){this._animators=[],this._current=0,this._timer=null;};i.augment(l,{initTimer:function initTimer(){var t=this,e=this,n=void 0,i=void 0,o=void 0,u=void 0;e._timer=a.timer(function(a){if(e._current=a,t._animators.length>0){for(var s=t._animators.length-1;s>=0;s--){if((n=t._animators[s]).get("destroyed"))e.removeAnimator(s);else{if(u||(u=n.get("canvas")),!n.get("pause").isPaused)for(var c=(i=n.get("animators")).length-1;c>=0;c--){o=i[c],r(n,o,a)&&i.splice(c,1);}0===i.length&&e.removeAnimator(s);}}u&&u.draw();}});},addAnimator:function addAnimator(t){this._animators.push(t);},removeAnimator:function removeAnimator(t){this._animators.splice(t,1);},clear:function clear(){this._animators=[];},isAnimating:function isAnimating(){return!!this._animators.length;},getTime:function getTime(){return this._current;}}),t.exports=l;},function(t,e,n){n.d(e,"a",function(){return r;}),n.d(e,"b",function(){return i;});var r=Math.PI/180,i=180/Math.PI;},function(t,e,n){function r(t){return function(e){var n,r,o=e.length,a=new Array(o),u=new Array(o),s=new Array(o);for(n=0;n<o;++n){r=Object(i.f)(e[n]),a[n]=r.r||0,u[n]=r.g||0,s[n]=r.b||0;}return a=t(a),u=t(u),s=t(s),r.opacity=1,function(t){return r.r=a(t),r.g=u(t),r.b=s(t),r+"";};};}n.d(e,"b",function(){return s;}),n.d(e,"c",function(){return c;});var i=n(6),o=n(24),a=n(55),u=n(12);e.a=function t(e){function n(t,e){var n=r((t=Object(i.f)(t)).r,(e=Object(i.f)(e)).r),o=r(t.g,e.g),a=r(t.b,e.b),s=Object(u.a)(t.opacity,e.opacity);return function(e){return t.r=n(e),t.g=o(e),t.b=a(e),t.opacity=s(e),t+"";};}var r=Object(u.b)(e);return n.gamma=t,n;}(1);var s=r(o.b),c=r(a.a);},function(t,e,n){var r=n(24);e.a=function(t){var e=t.length;return function(n){var i=Math.floor(((n%=1)<0?++n:n)*e),o=t[(i+e-1)%e],a=t[i%e],u=t[(i+1)%e],s=t[(i+2)%e];return Object(r.a)((n-i/e)*e,o,a,u,s);};};},function(t,e,n){e.a=function(t){return function(){return t;};};},function(t,e,n){var r=n(21);e.a=function(t,e){var n,i=e?e.length:0,o=t?Math.min(i,t.length):0,a=new Array(o),u=new Array(i);for(n=0;n<o;++n){a[n]=Object(r.a)(t[n],e[n]);}for(;n<i;++n){u[n]=e[n];}return function(t){for(n=0;n<o;++n){u[n]=a[n](t);}return u;};};},function(t,e,n){e.a=function(t,e){var n=new Date();return e-=t=+t,function(r){return n.setTime(t+e*r),n;};};},function(t,e,n){var r=n(21),i="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(t){return void 0===t?"undefined":a(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":a(t);};e.a=function(t,e){var n,o={},a={};for(n in null!==t&&"object"===(void 0===t?"undefined":i(t))||(t={}),null!==e&&"object"===(void 0===e?"undefined":i(e))||(e={}),e){n in t?o[n]=Object(r.a)(t[n],e[n]):a[n]=e[n];}return function(t){for(n in o){a[n]=o[n](t);}return a;};};},function(t,e,n){var r=n(14),i=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,o=new RegExp(i.source,"g");e.a=function(t,e){var n,a,u,s=i.lastIndex=o.lastIndex=0,c=-1,f=[],l=[];for(t+="",e+="";(n=i.exec(t))&&(a=o.exec(e));){(u=a.index)>s&&(u=e.slice(s,u),f[c]?f[c]+=u:f[++c]=u),(n=n[0])===(a=a[0])?f[c]?f[c]+=a:f[++c]=a:(f[++c]=null,l.push({i:c,x:Object(r.a)(n,a)})),s=o.lastIndex;}return s<e.length&&(u=e.slice(s),f[c]?f[c]+=u:f[++c]=u),f.length<2?l[0]?function(t){return function(e){return t(e)+"";};}(l[0].x):function(t){return function(){return t;};}(e):(e=l.length,function(t){for(var n,r=0;r<e;++r){f[(n=l[r]).i]=n.x(t);}return f.join("");});};},function(t,e,n){var r=n(0),i=function i(t,e,n,r){this.type=t,this.target=null,this.currentTarget=null,this.bubbles=n,this.cancelable=r,this.timeStamp=new Date().getTime(),this.defaultPrevented=!1,this.propagationStopped=!1,this.removed=!1,this.event=e;};r.augment(i,{preventDefault:function preventDefault(){this.defaultPrevented=this.cancelable&&!0;},stopPropagation:function stopPropagation(){this.propagationStopped=!0;},remove:function remove(){this.remove=!0;},clone:function clone(){return r.clone(this);},toString:function toString(){return"[Event (type="+this.type+")]";}}),t.exports=i;},function(t,e,n){function r(t,e,n){for(var r=void 0,i=t.length-1;i>=0;i--){var o=t[i];if(o.__cfg.visible&&o.__cfg.capture&&(o.isGroup?r=o.getShape(e,n):o.isHit(e,n)&&(r=o)),r)break;}return r;}var i=n(0),o=n(63),a=n(150),u={},s="_INDEX",c=function t(e){t.superclass.constructor.call(this,e),this.set("children",[]),this._beforeRenderUI(),this._renderUI(),this._bindUI();};i.extend(c,o),i.augment(c,{isGroup:!0,canFill:!0,canStroke:!0,getDefaultCfg:function getDefaultCfg(){return function t(e){if(!e.__cfg&&e!==c){var n=e.superclass.constructor;n&&!n.__cfg&&t(n),e.__cfg={},i.merge(e.__cfg,n.__cfg),i.merge(e.__cfg,e.CFG);}}(this.constructor),i.merge({},this.constructor.__cfg);},_beforeRenderUI:function _beforeRenderUI(){},_renderUI:function _renderUI(){},_bindUI:function _bindUI(){},addShape:function addShape(t,e){var n=this.get("canvas");e=e||{};var r=u[t];if(r||(r=i.upperFirst(t),u[t]=r),e.attrs){var o=e.attrs;if("text"===t){var s=n.get("fontFamily");s&&(o.fontFamily=o.fontFamily?o.fontFamily:s);}}e.canvas=n,e.type=t;var c=new a[r](e);return this.add(c),c;},addGroup:function addGroup(t,e){var n=this.get("canvas"),r=void 0;if(e=i.merge({},e),i.isFunction(t))e?(e.canvas=n,e.parent=this,r=new t(e)):r=new t({canvas:n,parent:this}),this.add(r);else if(i.isObject(t))t.canvas=n,r=new c(t),this.add(r);else{if(void 0!==t)return!1;r=new c(),this.add(r);}return r;},renderBack:function renderBack(t,e){var n=this.get("backShape"),r=this.getBBox();return i.merge(e,{x:r.minX-t[3],y:r.minY-t[0],width:r.width+t[1]+t[3],height:r.height+t[0]+t[2]}),n?n.attr(e):n=this.addShape("rect",{zIndex:-1,attrs:e}),this.set("backShape",n),this.sort(),n;},removeChild:function removeChild(t,e){if(arguments.length>=2)this.contain(t)&&t.remove(e);else{if(1===arguments.length){if(!i.isBoolean(t))return this.contain(t)&&t.remove(!0),this;e=t;}0===arguments.length&&(e=!0),c.superclass.remove.call(this,e);}return this;},add:function add(t){var e=this,n=e.get("children");if(i.isArray(t))i.each(t,function(t){var n=t.get("parent");n&&n.removeChild(t,!1),e._setCfgProperty(t);}),n.push.apply(n,t);else{var r=t,o=r.get("parent");o&&o.removeChild(r,!1),e._setCfgProperty(r),n.push(r);}return e;},contain:function contain(t){return this.get("children").indexOf(t)>-1;},getChildByIndex:function getChildByIndex(t){return this.get("children")[t];},getFirst:function getFirst(){return this.getChildByIndex(0);},getLast:function getLast(){var t=this.get("children").length-1;return this.getChildByIndex(t);},_setCfgProperty:function _setCfgProperty(t){var e=this.__cfg;t.__cfg.parent=this,t.__cfg.context=e.context,t.__cfg.canvas=e.canvas;var n=t.__attrs.clip;n&&(n.setSilent("parent",this),n.setSilent("canvas",e.canvas),n.setSilent("timeline",e.timeline),n.setSilent("context",this.get("context")));var r=t.__cfg.children;r&&i.each(r,function(e){t._setCfgProperty(e);});},getBBox:function getBBox(){var t=1/0,e=-1/0,n=1/0,r=-1/0,o=this.get("children");o.length>0?i.each(o,function(i){if(i.get("visible")){var o=i.getBBox();if(!o)return!0;var a=[o.minX,o.minY,1],u=[o.minX,o.maxY,1],s=[o.maxX,o.minY,1],c=[o.maxX,o.maxY,1];i.apply(a),i.apply(u),i.apply(s),i.apply(c);var f=Math.min(a[0],u[0],s[0],c[0]),l=Math.max(a[0],u[0],s[0],c[0]),h=Math.min(a[1],u[1],s[1],c[1]),d=Math.max(a[1],u[1],s[1],c[1]);f<t&&(t=f),l>e&&(e=l),h<n&&(n=h),d>r&&(r=d);}}):(t=0,e=0,n=0,r=0);var a={minX:t,minY:n,maxX:e,maxY:r};return a.x=a.minX,a.y=a.minY,a.width=a.maxX-a.minX,a.height=a.maxY-a.minY,a;},drawInner:function drawInner(t){for(var e=this.get("children"),n=0;n<e.length;n++){e[n].draw(t);}return this;},getCount:function getCount(){return this.get("children").length;},sort:function sort(){var t=this.get("children");return i.each(t,function(t,e){return t[s]=e,t;}),t.sort(function(t){return function(e,n){var r=t(e,n);return 0===r?e[s]-n[s]:r;};}(function(t,e){return t.get("zIndex")-e.get("zIndex");})),this;},findById:function findById(t){return this.find(function(e){return e.get("id")===t;});},find:function find(t){if(i.isString(t))return this.findById(t);var e=this.get("children"),n=null;return i.each(e,function(e){if(t(e)?n=e:e.find&&(n=e.find(t)),n)return!1;}),n;},findAll:function findAll(t){var e=this.get("children"),n=[],r=[];return i.each(e,function(e){t(e)&&n.push(e),e.findAllBy&&(r=e.findAllBy(t),n=n.concat(r));}),n;},findBy:function findBy(t){var e=this.get("children"),n=null;return i.each(e,function(e){if(t(e)?n=e:e.findBy&&(n=e.findBy(t)),n)return!1;}),n;},findAllBy:function findAllBy(t){var e=this.get("children"),n=[],r=[];return i.each(e,function(e){t(e)&&n.push(e),e.findAllBy&&(r=e.findAllBy(t),n=n.concat(r));}),n;},getShape:function getShape(t,e){var n=this.__attrs.clip,i=this.__cfg.children,o=void 0;return n?n.inside(t,e)&&(o=r(i,t,e)):o=r(i,t,e),o;},clearTotalMatrix:function clearTotalMatrix(){if(this.get("totalMatrix")){this.setSilent("totalMatrix",null);for(var t=this.__cfg.children,e=0;e<t.length;e++){t[e].clearTotalMatrix();}}},clear:function clear(){for(var t=this.get("children");0!==t.length;){t[t.length-1].remove();}return this;},destroy:function destroy(){this.get("destroyed")||(this.clear(),c.superclass.destroy.call(this));}}),t.exports=c;},function(t,e,n){var r=n(0),i=n(148),o=n(149),a=n(39),u=n(25),s=n(40),c=["fillStyle","font","globalAlpha","lineCap","lineWidth","lineJoin","miterLimit","shadowBlur","shadowColor","shadowOffsetX","shadowOffsetY","strokeStyle","textAlign","textBaseline","lineDash","lineDashOffset"],f=function f(t){this.__cfg={zIndex:0,capture:!0,visible:!0,destroyed:!1},r.assign(this.__cfg,this.getDefaultCfg(),t),this.initAttrs(this.__cfg.attrs),this.initTransform(),this.init();};f.CFG={id:null,zIndex:0,canvas:null,parent:null,capture:!0,context:null,visible:!0,destroyed:!1},r.augment(f,i,o,s,a,{init:function init(){this.setSilent("animable",!0),this.setSilent("animating",!1);var t=this.__attrs;t&&t.rotate&&this.rotateAtStart(t.rotate);},getParent:function getParent(){return this.get("parent");},getDefaultCfg:function getDefaultCfg(){return{};},set:function set(t,e){return"zIndex"===t&&this._beforeSetZIndex&&this._beforeSetZIndex(e),"loading"===t&&this._beforeSetLoading&&this._beforeSetLoading(e),this.__cfg[t]=e,this;},setSilent:function setSilent(t,e){this.__cfg[t]=e;},get:function get(t){return this.__cfg[t];},draw:function draw(t){this.get("destroyed")||this.get("visible")&&(this.setContext(t),this.drawInner(t),this.restoreContext(t));},setContext:function setContext(t){var e=this.__attrs.clip;t.save(),e&&(e.resetTransform(t),e.createPath(t),t.clip()),this.resetContext(t),this.resetTransform(t);},restoreContext:function restoreContext(t){t.restore();},resetContext:function resetContext(t){var e=this.__attrs;if(!this.isGroup)for(var n in e){if(c.indexOf(n)>-1){var i=e[n];"fillStyle"===n&&(i=u.parseStyle(i,this)),"strokeStyle"===n&&(i=u.parseStyle(i,this)),"lineDash"===n&&t.setLineDash?r.isArray(i)?t.setLineDash(i):r.isString(i)&&t.setLineDash(i.split(" ")):t[n]=i;}}},drawInner:function drawInner(){},show:function show(){return this.set("visible",!0),this;},hide:function hide(){return this.set("visible",!1),this;},remove:function remove(t){if(void 0===t&&(t=!0),this.get("parent")){var e=this.get("parent").get("children");r.remove(e,this);}return t&&this.destroy(),this;},destroy:function destroy(){if(!this.get("destroyed")){if(this.get("animating")){var t=this.get("animateTimer");t&&t.stop();}this.__cfg={},this.__attrs=null,this.removeEvent(),this.set("destroyed",!0);}},_beforeSetZIndex:function _beforeSetZIndex(t){return this.__cfg.zIndex=t,r.isNil(this.get("parent"))||this.get("parent").sort(),t;},_setAttrs:function _setAttrs(t){return this.attr(t),t;},setZIndex:function setZIndex(t){return this.__cfg.zIndex=t,t;},clone:function clone(){return r.clone(this);},getBBox:function getBBox(){return{minX:0,maxX:0,minY:0,maxY:0};}}),t.exports=f;},function(t,e,n){var r=n(0),i=n(1),o=n(3),a=function t(e){t.superclass.constructor.call(this,e);};a.ATTRS={x:0,y:0,width:0,height:0,radius:0,lineWidth:1},r.extend(a,i),r.augment(a,{canFill:!0,canStroke:!0,type:"rect",getDefaultAttrs:function getDefaultAttrs(){return{lineWidth:1,radius:0};},calculateBox:function calculateBox(){var t=this.__attrs,e=t.x,n=t.y,r=t.width,i=t.height,o=this.getHitLineWidth()/2;return{minX:e-o,minY:n-o,maxX:e+r+o,maxY:n+i+o};},isPointInPath:function isPointInPath(t,e){var n=this.hasFill(),r=this.hasStroke();return n&&r?this._isPointInFill(t,e)||this._isPointInStroke(t,e):n?this._isPointInFill(t,e):!!r&&this._isPointInStroke(t,e);},_isPointInFill:function _isPointInFill(t,e){var n=this.get("context");return!!n&&(this.createPath(),n.isPointInPath(t,e));},_isPointInStroke:function _isPointInStroke(t,e){var n=this.__attrs,r=n.x,i=n.y,a=n.width,u=n.height,s=n.radius,c=this.getHitLineWidth();if(0===s){var f=c/2;return o.line(r-f,i,r+a+f,i,c,t,e)||o.line(r+a,i-f,r+a,i+u+f,c,t,e)||o.line(r+a+f,i+u,r-f,i+u,c,t,e)||o.line(r,i+u+f,r,i-f,c,t,e);}return o.line(r+s,i,r+a-s,i,c,t,e)||o.line(r+a,i+s,r+a,i+u-s,c,t,e)||o.line(r+a-s,i+u,r+s,i+u,c,t,e)||o.line(r,i+u-s,r,i+s,c,t,e)||o.arcline(r+a-s,i+s,s,1.5*Math.PI,2*Math.PI,!1,c,t,e)||o.arcline(r+a-s,i+u-s,s,0,.5*Math.PI,!1,c,t,e)||o.arcline(r+s,i+u-s,s,.5*Math.PI,Math.PI,!1,c,t,e)||o.arcline(r+s,i+s,s,Math.PI,1.5*Math.PI,!1,c,t,e);},createPath:function createPath(t){var e=this.__attrs,n=e.x,r=e.y,i=e.width,o=e.height,a=e.radius;(t=t||this.get("context")).beginPath(),0===a?t.rect(n,r,i,o):(t.moveTo(n+a,r),t.lineTo(n+i-a,r),t.arc(n+i-a,r+a,a,-Math.PI/2,0,!1),t.lineTo(n+i,r+o-a),t.arc(n+i-a,r+o-a,a,0,Math.PI/2,!1),t.lineTo(n+a,r+o),t.arc(n+a,r+o-a,a,Math.PI/2,Math.PI,!1),t.lineTo(n,r+a),t.arc(n+a,r+a,a,Math.PI,3*Math.PI/2,!1),t.closePath());}}),t.exports=a;},function(t,e,n){var r=n(0),i=n(1),o=n(3),a=function t(e){t.superclass.constructor.call(this,e);};a.ATTRS={x:0,y:0,r:0,lineWidth:1},r.extend(a,i),r.augment(a,{canFill:!0,canStroke:!0,type:"circle",getDefaultAttrs:function getDefaultAttrs(){return{lineWidth:1};},calculateBox:function calculateBox(){var t=this.__attrs,e=t.x,n=t.y,r=t.r,i=this.getHitLineWidth()/2+r;return{minX:e-i,minY:n-i,maxX:e+i,maxY:n+i};},isPointInPath:function isPointInPath(t,e){var n=this.hasFill(),r=this.hasStroke();return n&&r?this._isPointInFill(t,e)||this._isPointInStroke(t,e):n?this._isPointInFill(t,e):!!r&&this._isPointInStroke(t,e);},_isPointInFill:function _isPointInFill(t,e){var n=this.__attrs,r=n.x,i=n.y,a=n.r;return o.circle(r,i,a,t,e);},_isPointInStroke:function _isPointInStroke(t,e){var n=this.__attrs,r=n.x,i=n.y,a=n.r,u=this.getHitLineWidth();return o.arcline(r,i,a,0,2*Math.PI,!1,u,t,e);},createPath:function createPath(t){var e=this.__attrs,n=e.x,r=e.y,i=e.r;(t=t||self.get("context")).beginPath(),t.arc(n,r,i,0,2*Math.PI,!1),t.closePath();}}),t.exports=a;},function(t,e,n){var r=n(0),i=n(1),o=n(3),a=n(2).mat3,u=n(2).vec3,s=function t(e){t.superclass.constructor.call(this,e);};s.ATTRS={x:0,y:0,rx:1,ry:1,lineWidth:1},r.extend(s,i),r.augment(s,{canFill:!0,canStroke:!0,type:"ellipse",getDefaultAttrs:function getDefaultAttrs(){return{lineWidth:1};},calculateBox:function calculateBox(){var t=this.__attrs,e=t.x,n=t.y,r=t.rx,i=t.ry,o=this.getHitLineWidth(),a=r+o/2,u=i+o/2;return{minX:e-a,minY:n-u,maxX:e+a,maxY:n+u};},isPointInPath:function isPointInPath(t,e){var n=this.hasFill(),r=this.hasStroke();return n&&r?this._isPointInFill(t,e)||this._isPointInStroke(t,e):n?this._isPointInFill(t,e):!!r&&this._isPointInStroke(t,e);},_isPointInFill:function _isPointInFill(t,e){var n=this.__attrs,r=n.x,i=n.y,s=n.rx,c=n.ry,f=s>c?s:c,l=s>c?1:s/c,h=s>c?c/s:1,d=[t,e,1],p=[1,0,0,0,1,0,0,0,1];a.scale(p,p,[l,h]),a.translate(p,p,[r,i]);var g=a.invert([],p);return u.transformMat3(d,d,g),o.circle(0,0,f,d[0],d[1]);},_isPointInStroke:function _isPointInStroke(t,e){var n=this.__attrs,r=n.x,i=n.y,s=n.rx,c=n.ry,f=this.getHitLineWidth(),l=s>c?s:c,h=s>c?1:s/c,d=s>c?c/s:1,p=[t,e,1],g=[1,0,0,0,1,0,0,0,1];a.scale(g,g,[h,d]),a.translate(g,g,[r,i]);var v=a.invert([],g);return u.transformMat3(p,p,v),o.arcline(0,0,l,0,2*Math.PI,!1,f,p[0],p[1]);},createPath:function createPath(t){var e=this.__attrs,n=e.x,r=e.y,i=e.rx,o=e.ry;t=t||self.get("context");var u=i>o?i:o,s=i>o?1:i/o,c=i>o?o/i:1,f=[1,0,0,0,1,0,0,0,1];a.scale(f,f,[s,c]),a.translate(f,f,[n,r]),t.beginPath(),t.save(),t.transform(f[0],f[1],f[3],f[4],f[6],f[7]),t.arc(0,0,u,0,2*Math.PI),t.restore(),t.closePath();}}),t.exports=s;},function(t,e,n){var r=n(0),i=n(1),o=n(29),a=n(25),u=n(7),s=n(19),c=n(15),f=function t(e){t.superclass.constructor.call(this,e);};f.ATTRS={path:null,lineWidth:1,curve:null,tCache:null,startArrow:!1,endArrow:!1},r.extend(f,i),r.augment(f,{canFill:!0,canStroke:!0,type:"path",getDefaultAttrs:function getDefaultAttrs(){return{lineWidth:1,startArrow:!1,endArrow:!1};},_afterSetAttrPath:function _afterSetAttrPath(t){if(r.isNil(t))return this.setSilent("segments",null),void this.setSilent("box",void 0);var e=a.parsePath(t),n=void 0,i=[];if(r.isArray(e)&&0!==e.length&&("M"===e[0][0]||"m"===e[0][0])){for(var u=e.length,s=0;s<e.length;s++){var c=e[s];n=new o(c,n,s===u-1),i.push(n);}this.setSilent("segments",i),this.set("tCache",null),this.setSilent("box",null);}},_afterSetAttrAll:function _afterSetAttrAll(t){t.path&&this._afterSetAttrPath(t.path);},calculateBox:function calculateBox(){var t=this.get("segments");if(!t)return null;var e=this.getHitLineWidth(),n=1/0,i=-1/0,o=1/0,a=-1/0;return r.each(t,function(t){t.getBBox(e);var r=t.box;r&&(r.minX<n&&(n=r.minX),r.maxX>i&&(i=r.maxX),r.minY<o&&(o=r.minY),r.maxY>a&&(a=r.maxY));}),{minX:n,minY:o,maxX:i,maxY:a};},isPointInPath:function isPointInPath(t,e){var n=this.hasFill(),r=this.hasStroke();return n&&r?this._isPointInFill(t,e)||this._isPointInStroke(t,e):n?this._isPointInFill(t,e):!!r&&this._isPointInStroke(t,e);},_isPointInFill:function _isPointInFill(t,e){var n=this.get("context");if(n)return this.createPath(),n.isPointInPath(t,e);},_isPointInStroke:function _isPointInStroke(t,e){var n=this.get("segments");if(!r.isEmpty(n))for(var i=this.getHitLineWidth(),o=0,a=n.length;o<a;o++){if(n[o].isInside(t,e,i))return!0;}return!1;},_setTcache:function _setTcache(){var t=0,e=0,n=[],i=void 0,o=void 0,a=void 0,u=void 0,s=this.curve;s&&(r.each(s,function(e,n){a=s[n+1],u=e.length,a&&(t+=c.len(e[u-2],e[u-1],a[1],a[2],a[3],a[4],a[5],a[6]));}),r.each(s,function(r,f){a=s[f+1],u=r.length,a&&((i=[])[0]=e/t,o=c.len(r[u-2],r[u-1],a[1],a[2],a[3],a[4],a[5],a[6]),e+=o,i[1]=e/t,n.push(i));}),this.tCache=n);},_calculateCurve:function _calculateCurve(){var t=this.__attrs.path;this.curve=s.pathTocurve(t);},getStartTangent:function getStartTangent(){var t=this.get("segments"),e=void 0,n=void 0,i=void 0,o=void 0;if(t.length>1)if(e=t[0].endPoint,n=t[1].endPoint,i=t[1].startTangent,o=[],r.isFunction(i)){var a=i();o.push([e.x-a[0],e.y-a[1]]),o.push([e.x,e.y]);}else o.push([n.x,n.y]),o.push([e.x,e.y]);return o;},getEndTangent:function getEndTangent(){var t=this.get("segments"),e=t.length,n=void 0,i=void 0,o=void 0,a=void 0;if(e>1)if(n=t[e-2].endPoint,i=t[e-1].endPoint,o=t[e-1].endTangent,a=[],r.isFunction(o)){var u=o();a.push([i.x-u[0],i.y-u[1]]),a.push([i.x,i.y]);}else a.push([n.x,n.y]),a.push([i.x,i.y]);return a;},getPoint:function getPoint(t){var e=this.tCache,n=void 0,i=void 0;e||(this._calculateCurve(),this._setTcache(),e=this.tCache);var o=this.curve;if(!e)return o?{x:o[0][1],y:o[0][2]}:null;r.each(e,function(e,r){t>=e[0]&&t<=e[1]&&(n=(t-e[0])/(e[1]-e[0]),i=r);});var a=o[i];if(r.isNil(a)||r.isNil(i))return null;var u=a.length,s=o[i+1];return{x:c.at(a[u-2],s[1],s[3],s[5],1-n),y:c.at(a[u-1],s[2],s[4],s[6],1-n)};},createPath:function createPath(t){var e=this.get("segments");if(r.isArray(e)){(t=t||this.get("context")).beginPath();for(var n=e.length,i=0;i<n;i++){e[i].draw(t);}}},afterPath:function afterPath(t){var e=this.__attrs,n=this.get("segments"),i=e.path;if(t=t||this.get("context"),r.isArray(n)&&(e.startArrow||e.endArrow)&&"z"!==i[i.length-1]&&"Z"!==i[i.length-1]&&!e.fill){var o=this.getStartTangent();u.addStartArrow(t,e,o[0][0],o[0][1],o[1][0],o[1][1]);var a=this.getEndTangent();u.addEndArrow(t,e,a[0][0],a[0][1],a[1][0],a[1][1]);}}}),t.exports=f;},function(t,e,n){var r=n(0),i=n(1),o=n(3),a=function t(e){t.superclass.constructor.call(this,e);};a.ATTRS={x:0,y:0,text:null,fontSize:12,fontFamily:"sans-serif",fontStyle:"normal",fontWeight:"normal",fontVariant:"normal",textAlign:"start",textBaseline:"bottom",lineHeight:null,textArr:null},r.extend(a,i),r.augment(a,{canFill:!0,canStroke:!0,type:"text",getDefaultAttrs:function getDefaultAttrs(){return{lineWidth:1,lineCount:1,fontSize:12,fontFamily:"sans-serif",fontStyle:"normal",fontWeight:"normal",fontVariant:"normal",textAlign:"start",textBaseline:"bottom"};},initTransform:function initTransform(){this.attr("matrix",[1,0,0,0,1,0,0,0,1]);var t=this.__attrs.fontSize;t&&+t<12&&this.transform([["t",-1*this.__attrs.x,-1*this.__attrs.y],["s",+t/12,+t/12],["t",this.__attrs.x,this.__attrs.y]]);},_assembleFont:function _assembleFont(){var t=this.__attrs,e=t.fontSize,n=t.fontFamily,r=t.fontWeight,i=t.fontStyle,o=t.fontVariant;t.font=[i,o,r,e+"px",n].join(" ");},_afterSetAttrFontSize:function _afterSetAttrFontSize(){this._assembleFont();},_afterSetAttrFontFamily:function _afterSetAttrFontFamily(){this._assembleFont();},_afterSetAttrFontWeight:function _afterSetAttrFontWeight(){this._assembleFont();},_afterSetAttrFontStyle:function _afterSetAttrFontStyle(){this._assembleFont();},_afterSetAttrFontVariant:function _afterSetAttrFontVariant(){this._assembleFont();},_afterSetAttrFont:function _afterSetAttrFont(){},_afterSetAttrText:function _afterSetAttrText(){var t=this.__attrs,e=t.text,n=void 0;if(r.isString(e)&&-1!==e.indexOf("\n")){var i=(n=e.split("\n")).length;t.lineCount=i,t.textArr=n;}},_getTextHeight:function _getTextHeight(){var t=this.__attrs,e=t.lineCount,n=1*t.fontSize;return e>1?n*e+this._getSpaceingY()*(e-1):n;},_afterSetAttrAll:function _afterSetAttrAll(t){("fontSize"in t||"fontWeight"in t||"fontStyle"in t||"fontVariant"in t||"fontFamily"in t)&&this._assembleFont(),"text"in t&&this._afterSetAttrText(t.text);},isHitBox:function isHitBox(){return!1;},calculateBox:function calculateBox(){var t=this.__attrs,e=t.x,n=t.y,r=this.measureText();if(!r)return{minX:e,minY:n,maxX:e,maxY:n};var i=this._getTextHeight(),o=t.textAlign,a=t.textBaseline,u=this.getHitLineWidth(),s={x:e,y:n-i};o&&("end"===o||"right"===o?s.x-=r:"center"===o&&(s.x-=r/2)),a&&("top"===a?s.y+=i:"middle"===a&&(s.y+=i/2)),this.set("startPoint",s);var c=u/2;return{minX:s.x-c,minY:s.y-c,maxX:s.x+r+c,maxY:s.y+i+c};},_getSpaceingY:function _getSpaceingY(){var t=this.__attrs,e=t.lineHeight,n=1*t.fontSize;return e?e-n:.14*n;},isPointInPath:function isPointInPath(t,e){var n=this.getBBox();if(this.hasFill()||this.hasStroke())return o.box(n.minX,n.maxX,n.minY,n.maxY,t,e);},drawInner:function drawInner(t){var e=this.__attrs,n=e.text;if(n){var i=e.textArr,o=e.x,a=e.y;if(t.beginPath(),this.hasStroke()){var u=e.strokeOpacity;r.isNil(u)||1===u||(t.globalAlpha=u),i?this._drawTextArr(t,!1):t.strokeText(n,o,a),t.globalAlpha=1;}if(this.hasFill()){var s=e.fillOpacity;r.isNil(s)||1===s||(t.globalAlpha=s),i?this._drawTextArr(t,!0):t.fillText(n,o,a);}}},_drawTextArr:function _drawTextArr(t,e){var n=this.__attrs.textArr,i=this.__attrs.textBaseline,o=1*this.__attrs.fontSize,a=this._getSpaceingY(),u=this.__attrs.x,s=this.__attrs.y,c=this.getBBox(),f=c.maxY-c.minY,l=void 0;r.each(n,function(n,r){l=s+r*(a+o)-f+o,"middle"===i&&(l+=f-o-(f-o)/2),"top"===i&&(l+=f-o),e?t.fillText(n,u,l):t.strokeText(n,u,l);});},measureText:function measureText(){var t=this.__attrs,e=t.text,n=t.font,i=t.textArr,o=void 0,a=0;if(!r.isNil(e)){var u=document.createElement("canvas").getContext("2d");return u.save(),u.font=n,i?r.each(i,function(t){o=u.measureText(t).width,a<o&&(a=o),u.restore();}):(a=u.measureText(e).width,u.restore()),a;}}}),t.exports=a;},function(t,e,n){var r=n(0),i=n(1),o=n(3),a=n(7),u=n(26),s=function t(e){t.superclass.constructor.call(this,e);};s.ATTRS={x1:0,y1:0,x2:0,y2:0,lineWidth:1,startArrow:!1,endArrow:!1},r.extend(s,i),r.augment(s,{canStroke:!0,type:"line",getDefaultAttrs:function getDefaultAttrs(){return{lineWidth:1,startArrow:!1,endArrow:!1};},calculateBox:function calculateBox(){var t=this.__attrs,e=t.x1,n=t.y1,r=t.x2,i=t.y2,o=this.getHitLineWidth();return u.box(e,n,r,i,o);},isPointInPath:function isPointInPath(t,e){var n=this.__attrs,r=n.x1,i=n.y1,a=n.x2,u=n.y2,s=this.getHitLineWidth();return!!this.hasStroke()&&o.line(r,i,a,u,s,t,e);},createPath:function createPath(t){var e=this.__attrs,n=e.x1,r=e.y1,i=e.x2,o=e.y2;(t=t||self.get("context")).beginPath(),t.moveTo(n,r),t.lineTo(i,o);},afterPath:function afterPath(t){var e=this.__attrs,n=e.x1,r=e.y1,i=e.x2,o=e.y2;t=t||this.get("context"),e.startArrow&&a.addStartArrow(t,e,i,o,n,r),e.endArrow&&a.addEndArrow(t,e,n,r,i,o);},getPoint:function getPoint(t){var e=this.__attrs;return{x:u.at(e.x1,e.x2,t),y:u.at(e.y1,e.y2,t)};}}),t.exports=s;},function(t,e,n){var r=n(0),i=n(1),o=n(3),a=function t(e){t.superclass.constructor.call(this,e);};a.ATTRS={x:0,y:0,img:void 0,width:0,height:0,sx:null,sy:null,swidth:null,sheight:null},r.extend(a,i),r.augment(a,{type:"image",_afterSetAttrImg:function _afterSetAttrImg(t){this._setAttrImg(t);},_afterSetAttrAll:function _afterSetAttrAll(t){t.img&&this._setAttrImg(t.img);},isHitBox:function isHitBox(){return!1;},calculateBox:function calculateBox(){var t=this.__attrs,e=t.x,n=t.y;return{minX:e,minY:n,maxX:e+t.width,maxY:n+t.height};},isPointInPath:function isPointInPath(t,e){var n=this.__attrs;if(this.get("toDraw")||!n.img)return!1;var r=n.x,i=n.y,a=n.width,u=n.height;return o.rect(r,i,a,u,t,e);},_beforeSetLoading:function _beforeSetLoading(t){var e=this.get("canvas");return!1===t&&!0===this.get("toDraw")&&(this.__cfg.loading=!1,e.draw()),t;},_setAttrImg:function _setAttrImg(t){var e=this,n=e.__attrs;if(!r.isString(t))return t instanceof Image?(n.width||e.attr("width",t.width),n.height||e.attr("height",t.height),t):t instanceof HTMLElement&&r.isString(t.nodeName)&&"CANVAS"===t.nodeName.toUpperCase()?(n.width||e.attr("width",Number(t.getAttribute("width"))),n.height||e.attr("height",Number(t.getAttribute("height"))),t):t instanceof ImageData?(n.width||e.attr("width",t.width),n.height||e.attr("height",t.height),t):null;var i=new Image();i.onload=function(){if(e.get("destroyed"))return!1;e.attr("imgSrc",t),e.attr("img",i);var n=e.get("callback");n&&n.call(e),e.set("loading",!1);},i.src=t,i.crossOrigin="Anonymous",e.set("loading",!0);},drawInner:function drawInner(t){this.get("loading")?this.set("toDraw",!0):this._drawImage(t);},_drawImage:function _drawImage(t){var e=this.__attrs,n=e.x,i=e.y,o=e.img,a=e.width,u=e.height,s=e.sx,c=e.sy,f=e.swidth,l=e.sheight;this.set("toDraw",!1);var h=o;if(h instanceof ImageData&&((h=new Image()).src=o),h instanceof Image||h instanceof HTMLElement&&r.isString(h.nodeName)&&"CANVAS"===h.nodeName.toUpperCase()){if(r.isNil(s)||r.isNil(c)||r.isNil(f)||r.isNil(l))return void t.drawImage(h,n,i,a,u);if(!(r.isNil(s)||r.isNil(c)||r.isNil(f)||r.isNil(l)))return void t.drawImage(h,s,c,f,l,n,i,a,u);}}}),t.exports=a;},function(t,e,n){var r=n(0),i=n(1),o=n(3),a=function t(e){t.superclass.constructor.call(this,e);};a.ATTRS={points:null,lineWidth:1},r.extend(a,i),r.augment(a,{canFill:!0,canStroke:!0,type:"polygon",getDefaultAttrs:function getDefaultAttrs(){return{lineWidth:1};},calculateBox:function calculateBox(){var t=this.__attrs.points,e=this.getHitLineWidth();if(!t||0===t.length)return null;var n=1/0,i=1/0,o=-1/0,a=-1/0;r.each(t,function(t){var e=t[0],r=t[1];e<n&&(n=e),e>o&&(o=e),r<i&&(i=r),r>a&&(a=r);});var u=e/2;return{minX:n-u,minY:i-u,maxX:o+u,maxY:a+u};},isPointInPath:function isPointInPath(t,e){var n=this.hasFill(),r=this.hasStroke();return n&&r?this._isPointInFill(t,e)||this._isPointInStroke(t,e):n?this._isPointInFill(t,e):!!r&&this._isPointInStroke(t,e);},_isPointInFill:function _isPointInFill(t,e){var n=this.get("context");return this.createPath(),n.isPointInPath(t,e);},_isPointInStroke:function _isPointInStroke(t,e){var n=this.__attrs.points;if(n.length<2)return!1;var r=this.getHitLineWidth(),i=n.slice(0);return n.length>=3&&i.push(n[0]),o.polyline(i,r,t,e);},createPath:function createPath(t){var e=this.__attrs.points;e.length<2||((t=t||this.get("context")).beginPath(),r.each(e,function(e,n){0===n?t.moveTo(e[0],e[1]):t.lineTo(e[0],e[1]);}),t.closePath());}}),t.exports=a;},function(t,e,n){var r=n(0),i=n(1),o=n(3),a=n(7),u=n(26),s=function t(e){t.superclass.constructor.call(this,e);};s.ATTRS={points:null,lineWidth:1,startArrow:!1,endArrow:!1,tCache:null},r.extend(s,i),r.augment(s,{canStroke:!0,type:"polyline",tCache:null,getDefaultAttrs:function getDefaultAttrs(){return{lineWidth:1,startArrow:!1,endArrow:!1};},calculateBox:function calculateBox(){var t=this.__attrs,e=this.getHitLineWidth(),n=t.points;if(!n||0===n.length)return null;var i=1/0,o=1/0,a=-1/0,u=-1/0;r.each(n,function(t){var e=t[0],n=t[1];e<i&&(i=e),e>a&&(a=e),n<o&&(o=n),n>u&&(u=n);});var s=e/2;return{minX:i-s,minY:o-s,maxX:a+s,maxY:u+s};},_setTcache:function _setTcache(){var t=this.__attrs.points,e=0,n=0,i=[],o=void 0,a=void 0;t&&0!==t.length&&(r.each(t,function(n,r){t[r+1]&&(e+=u.len(n[0],n[1],t[r+1][0],t[r+1][1]));}),e<=0||(r.each(t,function(r,s){t[s+1]&&((o=[])[0]=n/e,a=u.len(r[0],r[1],t[s+1][0],t[s+1][1]),n+=a,o[1]=n/e,i.push(o));}),this.tCache=i));},isPointInPath:function isPointInPath(t,e){var n=this.__attrs;if(this.hasStroke()){var r=n.points;if(r.length<2)return!1;var i=n.lineWidth;return o.polyline(r,i,t,e);}return!1;},createPath:function createPath(t){var e,n=this.__attrs.points,r=void 0;if(!(n.length<2)){for((t=t||this.get("context")).beginPath(),t.moveTo(n[0][0],n[0][1]),r=1,e=n.length-1;r<e;r++){t.lineTo(n[r][0],n[r][1]);}t.lineTo(n[e][0],n[e][1]);}},getStartTangent:function getStartTangent(){var t=this.__attrs.points,e=[];return e.push([t[1][0],t[1][1]]),e.push([t[0][0],t[0][1]]),e;},getEndTangent:function getEndTangent(){var t=this.__attrs.points,e=t.length-1,n=[];return n.push([t[e-1][0],t[e-1][1]]),n.push([t[e][0],t[e][1]]),n;},afterPath:function afterPath(t){var e=this.__attrs,n=e.points,r=n.length-1;t=t||this.get("context"),e.startArrow&&a.addStartArrow(t,e,n[1][0],n[1][1],n[0][0],n[0][1]),e.endArrow&&a.addEndArrow(t,e,n[r-1][0],n[r-1][1],n[r][0],n[r][1]);},getPoint:function getPoint(t){var e=this.__attrs.points,n=this.tCache,i=void 0,o=void 0;return n||(this._setTcache(),n=this.tCache),r.each(n,function(e,n){t>=e[0]&&t<=e[1]&&(i=(t-e[0])/(e[1]-e[0]),o=n);}),{x:u.at(e[o][0],e[o+1][0],i),y:u.at(e[o][1],e[o+1][1],i)};}}),t.exports=s;},function(t,e,n){function r(t,e,n){return t+e*Math.cos(n);}function i(t,e,n){return t+e*Math.sin(n);}var o=n(0),a=n(1),u=n(3),s=n(28),c=n(7),f=function t(e){t.superclass.constructor.call(this,e);};f.ATTRS={x:0,y:0,r:0,startAngle:0,endAngle:0,clockwise:!1,lineWidth:1,startArrow:!1,endArrow:!1},o.extend(f,a),o.augment(f,{canStroke:!0,type:"arc",getDefaultAttrs:function getDefaultAttrs(){return{x:0,y:0,r:0,startAngle:0,endAngle:0,clockwise:!1,lineWidth:1,startArrow:!1,endArrow:!1};},calculateBox:function calculateBox(){var t=this.__attrs,e=t.x,n=t.y,r=t.r,i=t.startAngle,o=t.endAngle,a=t.clockwise,u=this.getHitLineWidth()/2,c=s.box(e,n,r,i,o,a);return c.minX-=u,c.minY-=u,c.maxX+=u,c.maxY+=u,c;},getStartTangent:function getStartTangent(){var t=this.__attrs,e=t.x,n=t.y,o=t.startAngle,a=t.r,u=t.clockwise,s=Math.PI/180;u&&(s*=-1);var c=[],f=r(e,a,o+s),l=i(n,a,o+s),h=r(e,a,o),d=i(n,a,o);return c.push([f,l]),c.push([h,d]),c;},getEndTangent:function getEndTangent(){var t=this.__attrs,e=t.x,n=t.y,o=t.endAngle,a=t.r,u=t.clockwise,s=Math.PI/180,c=[];u&&(s*=-1);var f=r(e,a,o+s),l=i(n,a,o+s),h=r(e,a,o),d=i(n,a,o);return c.push([h,d]),c.push([f,l]),c;},isPointInPath:function isPointInPath(t,e){var n=this.__attrs,r=n.x,i=n.y,o=n.r,a=n.startAngle,s=n.endAngle,c=n.clockwise,f=this.getHitLineWidth();return!!this.hasStroke()&&u.arcline(r,i,o,a,s,c,f,t,e);},createPath:function createPath(t){var e=this.__attrs,n=e.x,r=e.y,i=e.r,o=e.startAngle,a=e.endAngle,u=e.clockwise;(t=t||self.get("context")).beginPath(),t.arc(n,r,i,o,a,u);},afterPath:function afterPath(t){var e=this.__attrs;if(t=t||this.get("context"),e.startArrow){var n=this.getStartTangent();c.addStartArrow(t,e,n[0][0],n[0][1],n[1][0],n[1][1]);}if(e.endArrow){var r=this.getEndTangent();c.addEndArrow(t,e,r[0][0],r[0][1],r[1][0],r[1][1]);}}}),t.exports=f;},function(t,e,n){var r=n(0),i=n(1),o=n(3),a=n(28),u=n(2).vec2,s=function t(e){t.superclass.constructor.call(this,e);};s.ATTRS={x:0,y:0,rs:0,re:0,startAngle:0,endAngle:0,clockwise:!1,lineWidth:1},r.extend(s,i),r.augment(s,{canFill:!0,canStroke:!0,type:"fan",getDefaultAttrs:function getDefaultAttrs(){return{clockwise:!1,lineWidth:1,rs:0,re:0};},calculateBox:function calculateBox(){var t=this.__attrs,e=t.x,n=t.y,r=t.rs,i=t.re,o=t.startAngle,u=t.endAngle,s=t.clockwise,c=this.getHitLineWidth(),f=a.box(e,n,r,o,u,s),l=a.box(e,n,i,o,u,s),h=c/2;return{minX:Math.min(f.minX,l.minX)-h,minY:Math.min(f.minY,l.minY)-h,maxX:Math.max(f.maxX,l.maxX)+h,maxY:Math.max(f.maxY,l.maxY)+h};},isPointInPath:function isPointInPath(t,e){var n=this.hasFill(),r=this.hasStroke();return n&&r?this._isPointInFill(t,e)||this._isPointInStroke(t,e):n?this._isPointInFill(t,e):!!r&&this._isPointInStroke(t,e);},_isPointInFill:function _isPointInFill(t,e){var n=this.__attrs,i=n.x,o=n.y,s=n.rs,c=n.re,f=n.startAngle,l=n.endAngle,h=n.clockwise,d=[t-i,e-o],p=u.angleTo([1,0],d),g=a.nearAngle(p,f,l,h);if(r.isNumberEqual(p,g)){var v=u.squaredLength(d);if(s*s<=v&&v<=c*c)return!0;}return!1;},_isPointInStroke:function _isPointInStroke(t,e){var n=this.__attrs,r=n.x,i=n.y,a=n.rs,u=n.re,s=n.startAngle,c=n.endAngle,f=n.clockwise,l=this.getHitLineWidth(),h={x:Math.cos(s)*a+r,y:Math.sin(s)*a+i},d={x:Math.cos(s)*u+r,y:Math.sin(s)*u+i},p={x:Math.cos(c)*a+r,y:Math.sin(c)*a+i},g={x:Math.cos(c)*u+r,y:Math.sin(c)*u+i};return!!(o.line(h.x,h.y,d.x,d.y,l,t,e)||o.line(p.x,p.y,g.x,g.y,l,t,e)||o.arcline(r,i,a,s,c,f,l,t,e)||o.arcline(r,i,u,s,c,f,l,t,e));},createPath:function createPath(t){var e=this.__attrs,n=e.x,r=e.y,i=e.rs,o=e.re,a=e.startAngle,u=e.endAngle,s=e.clockwise,c={x:Math.cos(a)*i+n,y:Math.sin(a)*i+r},f={x:Math.cos(a)*o+n,y:Math.sin(a)*o+r},l={x:Math.cos(u)*i+n,y:Math.sin(u)*i+r};(t=t||self.get("context")).beginPath(),t.moveTo(c.x,c.y),t.lineTo(f.x,f.y),t.arc(n,r,o,a,u,s),t.lineTo(l.x,l.y),t.arc(n,r,i,u,a,!s),t.closePath();}}),t.exports=s;},function(t,e,n){var r=n(0),i=n(1),o=n(3),a=n(7),u=n(15),s=function t(e){t.superclass.constructor.call(this,e);};s.ATTRS={p1:null,p2:null,p3:null,p4:null,lineWidth:1,startArrow:!1,endArrow:!1},r.extend(s,i),r.augment(s,{canStroke:!0,type:"cubic",getDefaultAttrs:function getDefaultAttrs(){return{lineWidth:1,startArrow:!1,endArrow:!1};},calculateBox:function calculateBox(){var t=this.__attrs,e=t.p1,n=t.p2,i=t.p3,o=t.p4,a=this.getHitLineWidth(),s=void 0,c=void 0;if(r.isNil(e)||r.isNil(n)||r.isNil(i)||r.isNil(o))return null;var f=a/2,l=u.extrema(e[0],n[0],i[0],o[0]);for(s=0,c=l.length;s<c;s++){l[s]=u.at(e[0],n[0],i[0],o[0],l[s]);}var h=u.extrema(e[1],n[1],i[1],o[1]);for(s=0,c=h.length;s<c;s++){h[s]=u.at(e[1],n[1],i[1],o[1],h[s]);}return l.push(e[0],o[0]),h.push(e[1],o[1]),{minX:Math.min.apply(Math,l)-f,maxX:Math.max.apply(Math,l)+f,minY:Math.min.apply(Math,h)-f,maxY:Math.max.apply(Math,h)+f};},isPointInPath:function isPointInPath(t,e){var n=this.__attrs,r=n.p1,i=n.p2,a=n.p3,u=n.p4,s=this.getHitLineWidth();return o.cubicline(r[0],r[1],i[0],i[1],a[0],a[1],u[0],u[1],s,t,e);},createPath:function createPath(t){var e=this.__attrs,n=e.p1,i=e.p2,o=e.p3,a=e.p4;t=t||self.get("context"),r.isNil(n)||r.isNil(i)||r.isNil(o)||r.isNil(a)||(t.beginPath(),t.moveTo(n[0],n[1]),t.bezierCurveTo(i[0],i[1],o[0],o[1],a[0],a[1]));},afterPath:function afterPath(t){var e=this.__attrs,n=e.p1,r=e.p2,i=e.p3,o=e.p4;t=t||this.get("context"),e.startArrow&&a.addStartArrow(t,e,r[0],r[1],n[0],n[1]),e.endArrow&&a.addEndArrow(t,e,i[0],i[1],o[0],o[1]);},getPoint:function getPoint(t){var e=this.__attrs;return{x:u.at(e.p4[0],e.p3[0],e.p2[0],e.p1[0],t),y:u.at(e.p4[1],e.p3[1],e.p2[1],e.p1[1],t)};}}),t.exports=s;},function(t,e,n){var r=n(0),i=n(1),o=n(3),a=n(7),u=n(27),s=function t(e){t.superclass.constructor.call(this,e);};s.ATTRS={p1:null,p2:null,p3:null,lineWidth:1,startArrow:!1,endArrow:!1},r.extend(s,i),r.augment(s,{canStroke:!0,type:"quadratic",getDefaultAttrs:function getDefaultAttrs(){return{lineWidth:1,startArrow:!1,endArrow:!1};},calculateBox:function calculateBox(){var t=this.__attrs,e=t.p1,n=t.p2,i=t.p3,o=this.getHitLineWidth(),a=void 0,s=void 0;if(r.isNil(e)||r.isNil(n)||r.isNil(i))return null;var c=o/2,f=u.extrema(e[0],n[0],i[0]);for(a=0,s=f.length;a<s;a++){f[a]=u.at(e[0],n[0],i[0],f[a]);}f.push(e[0],i[0]);var l=u.extrema(e[1],n[1],i[1]);for(a=0,s=l.length;a<s;a++){l[a]=u.at(e[1],n[1],i[1],l[a]);}return l.push(e[1],i[1]),{minX:Math.min.apply(Math,f)-c,maxX:Math.max.apply(Math,f)+c,minY:Math.min.apply(Math,l)-c,maxY:Math.max.apply(Math,l)+c};},isPointInPath:function isPointInPath(t,e){var n=this.__attrs,r=n.p1,i=n.p2,a=n.p3,u=this.getHitLineWidth();return o.quadraticline(r[0],r[1],i[0],i[1],a[0],a[1],u,t,e);},createPath:function createPath(t){var e=this.__attrs,n=e.p1,i=e.p2,o=e.p3;r.isNil(n)||r.isNil(i)||r.isNil(o)||((t=t||this.get("context")).beginPath(),t.moveTo(n[0],n[1]),t.quadraticCurveTo(i[0],i[1],o[0],o[1]));},afterPath:function afterPath(t){var e=this.__attrs,n=e.p1,r=e.p2,i=e.p3;t=t||this.get("context"),e.startArrow&&a.addStartArrow(t,e,r[0],r[1],n[0],n[1]),e.endArrow&&a.addEndArrow(t,e,r[0],r[1],i[0],i[1]);},getPoint:function getPoint(t){var e=this.__attrs;return{x:u.at(e.p1[0],e.p2[0],e.p3[0],t),y:u.at(e.p1[1],e.p2[1],e.p3[1],t)};}}),t.exports=s;},function(t,e,n){var r=n(0),i=n(1),o=n(3),a=n(25),u=n(29),s=function t(e){t.superclass.constructor.call(this,e);};s.Symbols={circle:function circle(t,e,n){return[["M",t,e],["m",-n,0],["a",n,n,0,1,0,2*n,0],["a",n,n,0,1,0,2*-n,0]];},square:function square(t,e,n){return[["M",t-n,e-n],["L",t+n,e-n],["L",t+n,e+n],["L",t-n,e+n],["Z"]];},diamond:function diamond(t,e,n){return[["M",t-n,e],["L",t,e-n],["L",t+n,e],["L",t,e+n],["Z"]];},triangle:function triangle(t,e,n){var r=n*Math.sin(1/3*Math.PI);return[["M",t-n,e+r],["L",t,e-r],["L",t+n,e+r],["z"]];},"triangle-down":function triangleDown(t,e,n){var r=n*Math.sin(1/3*Math.PI);return[["M",t-n,e-r],["L",t+n,e-r],["L",t,e+r],["Z"]];}},s.ATTRS={path:null,lineWidth:1},r.extend(s,i),r.augment(s,{type:"marker",canFill:!0,canStroke:!0,getDefaultAttrs:function getDefaultAttrs(){return{x:0,y:0,lineWidth:1};},calculateBox:function calculateBox(){var t=this.__attrs,e=t.x,n=t.y,r=t.radius,i=this.getHitLineWidth()/2+r;return{minX:e-i,minY:n-i,maxX:e+i,maxY:n+i};},isPointInPath:function isPointInPath(t,e){var n=this.__attrs,r=n.x,i=n.y,a=n.radius||n.r,u=this.getHitLineWidth();return o.circle(r,i,a+u/2,t,e);},createPath:function createPath(t){var e=this.__attrs,n=e.x,i=e.y,o=e.radius||e.r,c=e.symbol||"circle",f=(r.isFunction(c)?c:s.Symbols[c])(n,i,o);f=a.parsePath(f),t.beginPath();for(var l=void 0,h=0;h<f.length;h++){var d=f[h];(l=new u(d,l,h===f.length-1)).draw(t);}}}),t.exports=s;},function(t,e,n){t.exports={svg:n(79),canvas:n(146),CommonUtil:n(8),DomUtil:n(36),MatrixUtil:n(2),PathUtil:n(19),version:"3.0.0-beta.11"};},function(t,e,n){t.exports={Canvas:n(80),Group:n(38),Shape:n(4),Rect:n(41),Circle:n(42),Ellipse:n(43),Path:n(44),Text:n(45),Line:n(46),Image:n(47),Polygon:n(48),Marker:n(49),Dom:n(50),Fan:n(51),Event:n(37)};},function(t,e,n){var r=n(0),i=n(37),o=n(38),a=n(114),u=n(52),s=function t(e){t.superclass.constructor.call(this,e);};s.CFG={eventEnable:!0,width:null,height:null,widthCanvas:null,heightCanvas:null,widthStyle:null,heightStyle:null,containerDOM:null,canvasDOM:null,pixelRatio:r.getRatio()},r.extend(s,o),r.augment(s,{init:function init(){s.superclass.init.call(this),this._setDOM(),this._setInitSize(),this.get("eventEnable")&&this._registEvents();},getEmitter:function getEmitter(t,e){if(t){if(!r.isEmpty(t._getEvents()))return t;var n=t.get("parent");if(n&&!e.propagationStopped)return this.getEmitter(n,e);}},_getEventObj:function _getEventObj(t,e,n,r){var o=new i(t,e,!0,!0);return o.x=n.x,o.y=n.y,o.clientX=e.clientX,o.clientY=e.clientY,o.currentTarget=r,o.target=r,o;},_triggerEvent:function _triggerEvent(t,e){var n=this.getPointByClient(e.clientX,e.clientY),r=this.findShape(e.srcElement),i=void 0;if("mousemove"===t){var o=this.get("preShape");if(o&&o!==r){var a=this._getEventObj("mouseleave",e,n,o);(i=this.getEmitter(o,e))&&i.emit("mouseleave",a);}if(r){var u=this._getEventObj("mousemove",e,n,r);if((i=this.getEmitter(r,e))&&i.emit("mousemove",u),o!==r){var s=this._getEventObj("mouseenter",e,n,r);i&&i.emit("mouseenter",s,e);}}else{var c=this._getEventObj("mousemove",e,n,this);this.emit("mousemove",c);}this.set("preShape",r);}else{var f=this._getEventObj(t,e,n,r||this);(i=this.getEmitter(r,e))&&i!==this&&i.emit(t,f),this.emit(t,f);}var l=this.get("el");r&&!r.get("destroyed")&&(l.style.cursor=r.attr("cursor")||"default");},_registEvents:function _registEvents(){var t=this,e=t.get("el");r.each(["mouseout","mouseover","mousemove","mousedown","mouseup","click","dblclick"],function(n){e.addEventListener(n,function(e){t._triggerEvent(n,e);},!1);}),e.addEventListener("touchstart",function(e){r.isEmpty(e.touches)||t._triggerEvent("touchstart",e.touches[0]);},!1),e.addEventListener("touchmove",function(e){r.isEmpty(e.touches)||t._triggerEvent("touchmove",e.touches[0]);},!1),e.addEventListener("touchend",function(e){r.isEmpty(e.changedTouches)||t._triggerEvent("touchend",e.changedTouches[0]);},!1);},_setDOM:function _setDOM(){this._setContainer(),this._setLayer();},_setContainer:function _setContainer(){var t=this.get("containerId"),e=this.get("containerDOM");e||(e=document.getElementById(t),this.set("containerDOM",e)),r.modifyCSS(e,{position:"relative"});},_setLayer:function _setLayer(){var t=this.get("containerDOM"),e=r.uniqueId("svg_");if(t){var n=r.createDom('<svg id="'+e+'"></svg>');t.appendChild(n);var i=new a();n.appendChild(i.get("el")),this.set("canvasDOM",n),this.set("el",n),this.set("defs",i),this.set("canvas",this);}var o=this.get("canvasDOM"),s=new u();this.setSilent("timeline",s),this.set("context",o);},_setInitSize:function _setInitSize(){this.changeSize(this.get("width"),this.get("height")),this.set("pixelRatio",1);},_resize:function _resize(){var t=this.get("canvasDOM"),e=this.get("widthCanvas"),n=this.get("heightCanvas"),r=this.get("widthStyle"),i=this.get("heightStyle");t.style.width=r,t.style.height=i,t.setAttribute("width",e),t.setAttribute("height",n);},getWidth:function getWidth(){return this.get("width");},getHeight:function getHeight(){return this.get("height");},changeSize:function changeSize(t,e){this.set("widthCanvas",t),this.set("heightCanvas",e),this.set("widthStyle",t+"px"),this.set("heightStyle",e+"px"),this.set("width",t),this.set("height",e),this._resize();},getPointByClient:function getPointByClient(t,e){var n=this.get("el").getBoundingClientRect();return{x:t-n.left,y:e-n.top};},getClientByPoint:function getClientByPoint(t,e){var n=this.get("el").getBoundingClientRect();return{clientX:t+n.left,clientY:e+n.top};},beforeDraw:function beforeDraw(){this.get("el").innerHTML="";},_beginDraw:function _beginDraw(){this.setSilent("toDraw",!0);},_endDraw:function _endDraw(){this.setSilent("toDraw",!1);},draw:function draw(){},destroy:function destroy(){var t=this.get("containerDOM"),e=this.get("canvasDOM");e&&t&&t.removeChild(e),s.superclass.destroy.call(this);}}),t.exports=s;},function(t,e,n){var r=n(82),i=n(83),o=n(86),a=n(88),u=n(89),s=n(10),c=n(16),f={arrayUtil:r,eventUtil:i,mathUtil:o,stringUtil:a,typeUtil:u,augment:n(91),clone:n(92),deepMix:n(93),each:s,extend:n(94),filter:n(95),group:n(96),groupBy:n(34),groupToMap:n(33),indexOf:n(97),isEmpty:n(98),isEqual:n(35),isEqualWith:n(103),map:n(104),mix:c,pick:n(105),toArray:n(30),toString:n(106),uniqueId:n(107)};s([r,i,o,a,u],function(t){c(f,t);}),t.exports=f;},function(t,e,n){function r(t,e){return!!a(t)&&c.call(t,e)>-1;}function i(t){for(var e=s.call(arguments,1),n=0;n<e.length;n++){for(var r=e[n],i=-1;(i=c.call(t,r))>-1;){f.call(t,i,1);}}return t;}function o(t,e){if(!a(t))return[];for(var n=t?e.length:0,r=n-1;n--;){var i=void 0,o=e[n];n!==r&&o===i||(i=o,f.call(t,o,1));}return t;}var a=n(5),u=Array.prototype,s=u.slice,c=u.indexOf,f=u.splice,l={contains:r,pull:i,pullAll:i,pullAt:o,remove:function remove(t,e){var n=[];if(!a(t))return n;for(var r=-1,i=[],u=t.length;++r<u;){var s=t[r];e(s,r,t)&&(n.push(s),i.push(r));}return o(t,i),n;},uniq:function uniq(t){var e=[];return t.forEach(function(t){r(e,t)||e.push(t);}),e;}};t.exports=l;},function(t,e,n){t.exports={getWrapBehavior:n(84),wrapBehavior:n(85)};},function(t,e){t.exports=function(t,e){return t["_wrap_"+e];};},function(t,e){t.exports=function(t,e){if(t["_wrap_"+e])return t["_wrap_"+e];var n=function n(_n){t[e](_n);};return t["_wrap_"+e]=n,n;};},function(t,e,n){function r(t,e){return parseInt(t,e||10);}var i=n(87),o=Math.PI/180,a=180/Math.PI,u={clamp:function clamp(t,e,n){return t<e?e:t>n?n:t;},isDecimal:function isDecimal(t){return i(t)&&t%1!=0;},isEven:function isEven(t){return i(t)&&t%2==0;},isFinite:isFinite,isInteger:Number.isInteger?Number.isInteger:function(t){return i(t)&&t%1==0;},isNaN:isNaN,isNegative:function isNegative(t){return i(t)&&t<0;},isNumberEqual:function isNumberEqual(t,e){return Math.abs(t-e)<1e-5;},isOdd:function isOdd(t){return i(t)&&t%2!=0;},isPositive:function isPositive(t){return i(t)&&t>0;},mod:function mod(t,e){return(t%e+e)%e;},toFloat:function toFloat(t){return parseFloat(t);},toDegree:function toDegree(t){return a*t;},toInt:r,toInteger:r,toRadian:function toRadian(t){return o*t;},fixedBase:function fixedBase(t,e){var n=e.toString(),r=n.indexOf(".");if(-1===r)return Math.round(t);var i=n.substr(r+1).length;return i>20&&(i=20),parseFloat(t.toFixed(i));}};t.exports=u;},function(t,e,n){var r=n(9);t.exports=function(t){return r(t,"Number");};},function(t,e){function n(t){return t.toString();}function r(t){return n(t).toUpperCase();}function i(t){return n(t).toLowerCase();}var o={lc:i,lowerCase:i,lowerFirst:function lowerFirst(t){return i((t=n(t)).charAt(0))+t.substring(1);},uc:r,upperCase:r,upperFirst:function upperFirst(t){return r((t=n(t)).charAt(0))+t.substring(1);}};t.exports=o;},function(t,e){function n(t){return null===t;}function r(t){return void 0===t;}function i(t){return"object"===(void 0===t?"undefined":u(t))&&null!==t;}var o="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(t){return void 0===t?"undefined":a(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":a(t);},u="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return void 0===t?"undefined":o(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":o(t);},s={}.toString,c=Object.prototype,f=function f(t,e){return s.call(t)==="[object "+e+"]";},l={getType:function getType(t){return s.call(t).replace(/^\[object /,"").replace(/\]$/,"");},isArray:Array.isArray?Array.isArray:function(t){return f(t,"Array");},isArrayLike:function isArrayLike(t){return null!==t&&"function"!=typeof t&&isFinite(t.length);},isNil:function isNil(t){return r(t)||n(t);},isNull:n,isType:f,isObject:function isObject(t){var e=void 0===t?"undefined":u(t);return null!==t&&"object"===e||"function"===e;},isObjectLike:i,isPlainObject:function isPlainObject(t){if(!i(t)||!f(t,"Object"))return!1;if(null===Object.getPrototypeOf(t))return!0;for(var e=t;null!==Object.getPrototypeOf(e);){e=Object.getPrototypeOf(e);}return Object.getPrototypeOf(t)===e;},isPrototype:function isPrototype(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||c);},isUndefined:r};["Arguments","Boolean","Date","Error","Function","Number","RegExp","String"].forEach(function(t){l["is"+t]=function(e){return f(e,t);};}),t.exports=l;},function(t,e){var n="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(t){return void 0===t?"undefined":a(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":a(t);},r="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(t){return void 0===t?"undefined":n(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":n(t);};t.exports=function(t){var e=void 0===t?"undefined":r(t);return null!==t&&"object"===e||"function"===e;};},function(t,e,n){var r=n(13),i=n(30),o=n(16);t.exports=function(t){for(var e=i(arguments),n=1;n<e.length;n++){var a=e[n];r(a)&&(a=a.prototype),o(t.prototype,a);}};},function(t,e,n){var r="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(t){return void 0===t?"undefined":a(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":a(t);},i="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(t){return void 0===t?"undefined":r(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":r(t);},o=n(11);t.exports=function t(e){if("object"!==(void 0===e?"undefined":i(e))||null===e)return e;var n=void 0;if(o(e)){n=[];for(var r=0,a=e.length;r<a;r++){"object"===i(e[r])&&null!=e[r]?n[r]=t(e[r]):n[r]=e[r];}}else for(var u in n={},e){"object"===i(e[u])&&null!=e[u]?n[u]=t(e[u]):n[u]=e[u];}return n;};},function(t,e,n){function r(t,e,n,u){for(var s in n=n||0,u=u||a,e){if(e.hasOwnProperty(s)){var c=e[s];null!==c&&i(c)?(i(t[s])||(t[s]={}),n<u?r(t[s],c,n+1,u):t[s]=e[s]):o(c)?(t[s]=[],t[s]=t[s].concat(c)):void 0!==c&&(t[s]=c);}}}var i=n(31),o=n(11),a=5;t.exports=function(){for(var t=new Array(arguments.length),e=t.length,n=0;n<e;n++){t[n]=arguments[n];}for(var i=t[0],o=1;o<e;o++){r(i,t[o]);}return i;};},function(t,e,n){var r=n(13),i=n(16);t.exports=function(t,e,n,o){r(e)||(n=e,e=t,t=function t(){});var a=Object.create?function(t,e){return Object.create(t,{constructor:{value:e}});}:function(t,e){function n(){}n.prototype=t;var r=new n();return r.constructor=e,r;},u=a(e.prototype,t);return t.prototype=i(u,t.prototype),t.superclass=a(e.prototype,e),i(u,n),i(t,o),t;};},function(t,e,n){var r=n(10),i=n(5);t.exports=function(t,e){if(!i(t))return t;var n=[];return r(t,function(t,r){e(t,r)&&n.push(t);}),n;};},function(t,e,n){var r=n(33);t.exports=function(t,e){if(!e)return[t];var n=r(t,e),i=[];for(var o in n){i.push(n[o]);}return i;};},function(t,e,n){var r=n(5);t.exports=function(t,e){if(!r(t))return-1;var n=Array.prototype.indexOf;if(n)return n.call(t,e);for(var i=-1,o=0;o<t.length;o++){if(t[o]===e){i=o;break;}}return i;};},function(t,e,n){var r=n(99),i=n(5),o=n(100),a=n(101),u=Object.prototype.hasOwnProperty;t.exports=function(t){if(r(t))return!0;if(i(t))return!t.length;var e=o(t);if("Map"===e||"Set"===e)return!t.size;if(a(t))return!Object.keys(t).length;for(var n in t){if(u.call(t,n))return!1;}return!0;};},function(t,e){t.exports=function(t){return null===t||void 0===t;};},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).replace(/^\[object /,"").replace(/\]$/,"");};},function(t,e){var n=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||n);};},function(t,e,n){var r=n(9);t.exports=function(t){return r(t,"String");};},function(t,e,n){var r=n(13),i=n(35);t.exports=function(t,e,n){return r(n)?!!n(t,e):i(t,e);};},function(t,e,n){var r=n(10),i=n(5);t.exports=function(t,e){if(!i(t))return t;var n=[];return r(t,function(t,r){n.push(e(t,r));}),n;};},function(t,e,n){var r=n(10),i=n(31),o=Object.prototype.hasOwnProperty;t.exports=function(t,e){if(null===t||!i(t))return{};var n={};return r(e,function(e){o.call(t,e)&&(n[e]=t[e]);}),n;};},function(t,e){t.exports=function(t){return t.toString();};},function(t,e){var n=function(){var t={};return function(e){return t[e=e||"g"]?t[e]+=1:t[e]=1,e+t[e];};}();t.exports=n;},function(t,e,n){var r=n(0),i=["strokeStyle","fillStyle","globalAlpha"],o={r:"R",opacity:"Opacity",lineWidth:"LineWidth",clip:"Clip",stroke:"Stroke",fill:"Fill",strokeOpacity:"Stroke",fillOpacity:"Fill",x:"X",y:"Y",rx:"Rx",ry:"Ry",re:"Re",rs:"Rs",width:"Width",height:"Height",img:"Img",x1:"X1",x2:"X2",y1:"Y1",y2:"Y2",points:"Points",p1:"P1",p2:"P2",p3:"P3",p4:"P4",text:"Text",radius:"Radius",textAlign:"TextAlign",textBaseline:"TextBaseline",font:"Font",fontSize:"FontSize",fontStyle:"FontStyle",fontVariant:"FontVariant",fontWeight:"FontWeight",fontFamily:"FontFamily",clockwise:"Clockwise",startAngle:"StartAngle",endAngle:"EndAngle",path:"Path",outline:"Outline",html:"Html"},a={opacity:"opacity",clip:"clip",stroke:"stroke",fill:"fill",strokeOpacity:"stroke-opacity",fillOpacity:"fill-opacity",strokeStyle:"stroke",fillStyle:"fill",x:"x",y:"y",r:"r",rx:"rx",ry:"ry",re:"re",rs:"rs",width:"width",height:"height",image:"href",x1:"x1",x2:"x2",y1:"y1",y2:"y2",lineCap:"stroke-linecap",lineJoin:"stroke-linejoin",lineWidth:"stroke-width",lineDash:"stroke-dasharray",miterLimit:"stroke-miterlimit",font:"font",fontSize:"font-size",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",fontFamily:"font-family",startArrow:"marker-start",endArrow:"marker-end",preserveAspectRatio:"preserveAspectRatio"},u={stroke:"strokeStyle",fill:"fillStyle",opacity:"globalAlpha"};t.exports={canFill:!1,canStroke:!1,initAttrs:function initAttrs(t){return this.__attrs={opacity:1,fillOpacity:1,strokeOpacity:1},this.attr(r.assign(this.getDefaultAttrs(),t)),this;},getDefaultAttrs:function getDefaultAttrs(){return{};},attr:function attr(t,e){if(0===arguments.length)return this.__attrs;if(r.isObject(t)){for(var n in t){if(-1===i.indexOf(n)){var a=t[n];this._setAttr(n,a);}}return this._afterSetAttrAll&&this._afterSetAttrAll(t),this.clearBBox(),this;}if(2===arguments.length){this._setAttr(t,e);var u="_afterSetAttr"+o[t];return o[t]&&this[u]&&this[u](e),this.clearBBox(),this;}return this._getAttr(t);},clearBBox:function clearBBox(){this.setSilent("box",null);},_afterSetAttrAll:function _afterSetAttrAll(){},_getAttr:function _getAttr(t){return this.__attrs[t];},_setAttr:function _setAttr(t,e){var n=this.get("el");if("clip"!==t){if(this.__attrs[t]=e,!("number"==typeof e&&isNaN(e)||this.get("destroyed"))){if("transform"===t||"rotate"===t)this._setAttrTrans(t,e);else if(~t.indexOf("shadow"))this._setAttrShadow(t,e);else if(~["stroke","strokeStyle","fill","fillStyle"].indexOf(t)&&n)e?/^[r,R,L,l]{1}[\s]*\(/.test(e.trim())?this._setAttrGradients(t,e.trim()):n.setAttribute(a[t],e):n.setAttribute(a[t],"none");else if(~t.toLowerCase().indexOf("arrow")){if(!e)return this;this._setAttrArrow(t,e);}else if(~["circle","ellipse","marker"].indexOf(this.type)&&~["x","y"].indexOf(t))"marker"!==this.type&&"number"==typeof e&&n.setAttribute("c"+t,e);else{var r=a[t];n&&r&&n.setAttribute(r,e);var i=u[t];i&&(r=a[i],n&&r&&n.setAttribute(r,e),this.__attrs[i]=e);}return this;}}else this._setAttrClip(t,e);},hasFill:function hasFill(){return this.canFill&&this.__attrs.fillStyle;},hasStroke:function hasStroke(){return this.canStroke&&this.__attrs.strokeStyle;},_setAttrArrow:function _setAttrArrow(t,e){var n=this.get("el"),r=this.get("defs");if(!r){var i=this.get("canvas");if(!i)return this._setAttrDependency(t,e),this;r=i.get("defs");}if(!(t=a[t]))return this;if(!e)return n.removeAttribute(t),this;var o=r.find(t,{value:e,stroke:this.__attrs.stroke});o||(o=r.addArrow(t,e,this.__attrs.stroke)),this.__cfg[t]=o,this.get("el").setAttribute(t,"url(#"+o+")");},_setAttrShadow:function _setAttrShadow(t,e){var n=this.__attrs,r=this.get("filter"),i=this.get("defs");if(!e)return this.get("el").removeAttribute("filter"),this;if(r)return i.findById(r).update(t,e),this;if(!i){var o=this.get("canvas");if(!o)return this._setAttrDependency(t,e),this;i=o.get("defs");}var a={dx:n.shadowOffsetX,dy:n.shadowOffsetY,blur:n.shadowBlur,color:n.shadowColor};if(isNaN(Number(a.dx))||isNaN(Number(a.dy)))return this;var u=i.find("filter",a);u||(u=i.addShadow(a,this)),this.__cfg.filter=u,this.get("el").setAttribute("filter","url(#"+u+")");},_setAttrGradients:function _setAttrGradients(t,e){t=t.replace("Style","");var n=this.get("defs");if(!e)return this.get("el").removeAttribute("gradient"),this;if(!n){var r=this.get("canvas");if(!r)return this._setAttrDependency(t,e),this;n=r.get("defs");}var i=n.find("gradient",e);i||(i=n.addGradient(e,this)),this.get("el").setAttribute(t,"url(#"+i+")");},_setAttrDependency:function _setAttrDependency(t,e){var n=this.get("dependencies");return n||(n={}),n[t]=e,this.__cfg.dependencies=n,this;},_setAttrClip:function _setAttrClip(t,e){var n=this.get("defs"),r=this.get("canvas");if(!e)return this.get("el").removeAttribute("clip-path"),this;if(!n){var i=this.get("canvas");if(!i)return this._setAttrDependency(t,e),this;n=i.get("defs");}e.__cfg.canvas=r;var o=n.addClip(e);this.get("el").setAttribute("clip-path","url(#"+o+")");},_setAttrTrans:function _setAttrTrans(t,e){var n=this.__attrs;if(e||this.get("el").removeAttribute("transform"),n.matrix||this.initTransform(),"transform"===t)this.transform(e);else{if(void 0===n.x||void 0===n.y)return this._setAttrDependency(t,e),this;this.rotateAtStart(e);}return this;}};},function(t,e,n){var r=n(0),i=n(2).mat3,o=n(2).vec3;t.exports={initTransform:function initTransform(){this.attr("matrix",[1,0,0,0,1,0,0,0,1]);},translate:function translate(t,e,n){var r=this.attr("matrix");return i.translate(r,r,[t,e]),this.attr("matrix",r),(2===arguments.length||n)&&this._performTransform(),this;},rotate:function rotate(t,e){var n=this.attr("matrix");return Math.abs(t)>2*Math.PI&&(t=t/180*Math.PI),i.rotate(n,n,t),this.attr("matrix",n),(1===arguments.length||e)&&this._performTransform(),this;},rotateAtStart:function rotateAtStart(t){var e=this.attr("x"),n=this.attr("y");Math.abs(t)>2*Math.PI&&(t=t/180*Math.PI),this.transform([["t",-e,-n],["r",t],["t",e,n]]);},scale:function scale(t,e,n){var r=this.attr("matrix");return i.scale(r,r,[t,e]),this.attr("matrix",r),(2===arguments.length||n)&&this._performTransform(),this;},move:function move(t,e){var n=this.get("x")||0,r=this.get("y")||0;this.translate(t-n,e-r),this.set("x",t),this.set("y",e);},_performTransform:function _performTransform(){for(var t=this.__attrs.matrix,e=[],n=0;n<9;n+=3){e.push(t[n]+","+t[n+1]);}var r=this.get("el");r&&r.setAttribute("transform","matrix("+e.join(",")+")");},transform:function transform(t){var e=this,n=e.attr("matrix");return r.each(t,function(t){switch(t[0]){case"t":e.translate(t[1],t[2],!1);break;case"s":e.scale(t[1],t[2],!1);break;case"r":e.rotate(t[1],!1);break;case"m":e.attr("matrix",i.multiply([],n,t[1]));}}),this._performTransform(),e;},setTransform:function setTransform(t){return this.attr("matrix",[1,0,0,0,1,0,0,0,1]),this.transform(t);},getMatrix:function getMatrix(){return this.attr("matrix");},setMatrix:function setMatrix(t){return this.attr("matrix",t),this._performTransform(),this.clearTotalMatrix(),this;},apply:function apply(t,e){var n=void 0;return n=e?this._getMatrixByRoot(e):this.attr("matrix"),o.transformMat3(t,t,n),this;},invert:function invert(t){var e=this.attr("matrix");if(function(t){return 0===t[1]&&0===t[3]&&0===t[6]&&0===t[7];}(e))t[0]/=e[0],t[1]/=e[4];else{var n=i.invert([],e);n&&o.transformMat3(t,t,n);}return this;},resetTransform:function resetTransform(t){var e=this.attr("matrix");(function(t){return 1===t[0]&&0===t[1]&&0===t[3]&&1===t[4]&&0===t[6]&&0===t[7];})(e)||t.transform(e[0],e[1],e[3],e[4],e[6],e[7]);}};},function(t,e,n){function r(t,e,n){var r=e[0],i=e[1],o=e[2],a=e[3],u=e[4],s=e[5],c=e[6],f=e[7],l=e[8],h=n[0],d=n[1],p=n[2],g=n[3],v=n[4],m=n[5],y=n[6],b=n[7],x=n[8];return t[0]=h*r+d*a+p*c,t[1]=h*i+d*u+p*f,t[2]=h*o+d*s+p*l,t[3]=g*r+v*a+m*c,t[4]=g*i+v*u+m*f,t[5]=g*o+v*s+m*l,t[6]=y*r+b*a+x*c,t[7]=y*i+b*u+x*f,t[8]=y*o+b*s+x*l,t;}function i(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t[3]=e[3]-n[3],t[4]=e[4]-n[4],t[5]=e[5]-n[5],t[6]=e[6]-n[6],t[7]=e[7]-n[7],t[8]=e[8]-n[8],t;}Object.defineProperty(e,"__esModule",{value:!0}),e.sub=e.mul=void 0,e.create=function(){var t=new o.ARRAY_TYPE(9);return o.ARRAY_TYPE!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t;},e.fromMat4=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t;},e.clone=function(t){var e=new o.ARRAY_TYPE(9);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e;},e.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t;},e.fromValues=function(t,e,n,r,i,a,u,s,c){var f=new o.ARRAY_TYPE(9);return f[0]=t,f[1]=e,f[2]=n,f[3]=r,f[4]=i,f[5]=a,f[6]=u,f[7]=s,f[8]=c,f;},e.set=function(t,e,n,r,i,o,a,u,s,c){return t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=o,t[5]=a,t[6]=u,t[7]=s,t[8]=c,t;},e.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t;},e.transpose=function(t,e){if(t===e){var n=e[1],r=e[2],i=e[5];t[1]=e[3],t[2]=e[6],t[3]=n,t[5]=e[7],t[6]=r,t[7]=i;}else t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8];return t;},e.invert=function(t,e){var n=e[0],r=e[1],i=e[2],o=e[3],a=e[4],u=e[5],s=e[6],c=e[7],f=e[8],l=f*a-u*c,h=-f*o+u*s,d=c*o-a*s,p=n*l+r*h+i*d;return p?(p=1/p,t[0]=l*p,t[1]=(-f*r+i*c)*p,t[2]=(u*r-i*a)*p,t[3]=h*p,t[4]=(f*n-i*s)*p,t[5]=(-u*n+i*o)*p,t[6]=d*p,t[7]=(-c*n+r*s)*p,t[8]=(a*n-r*o)*p,t):null;},e.adjoint=function(t,e){var n=e[0],r=e[1],i=e[2],o=e[3],a=e[4],u=e[5],s=e[6],c=e[7],f=e[8];return t[0]=a*f-u*c,t[1]=i*c-r*f,t[2]=r*u-i*a,t[3]=u*s-o*f,t[4]=n*f-i*s,t[5]=i*o-n*u,t[6]=o*c-a*s,t[7]=r*s-n*c,t[8]=n*a-r*o,t;},e.determinant=function(t){var e=t[0],n=t[1],r=t[2],i=t[3],o=t[4],a=t[5],u=t[6],s=t[7],c=t[8];return e*(c*o-a*s)+n*(-c*i+a*u)+r*(s*i-o*u);},e.multiply=r,e.translate=function(t,e,n){var r=e[0],i=e[1],o=e[2],a=e[3],u=e[4],s=e[5],c=e[6],f=e[7],l=e[8],h=n[0],d=n[1];return t[0]=r,t[1]=i,t[2]=o,t[3]=a,t[4]=u,t[5]=s,t[6]=h*r+d*a+c,t[7]=h*i+d*u+f,t[8]=h*o+d*s+l,t;},e.rotate=function(t,e,n){var r=e[0],i=e[1],o=e[2],a=e[3],u=e[4],s=e[5],c=e[6],f=e[7],l=e[8],h=Math.sin(n),d=Math.cos(n);return t[0]=d*r+h*a,t[1]=d*i+h*u,t[2]=d*o+h*s,t[3]=d*a-h*r,t[4]=d*u-h*i,t[5]=d*s-h*o,t[6]=c,t[7]=f,t[8]=l,t;},e.scale=function(t,e,n){var r=n[0],i=n[1];return t[0]=r*e[0],t[1]=r*e[1],t[2]=r*e[2],t[3]=i*e[3],t[4]=i*e[4],t[5]=i*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t;},e.fromTranslation=function(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=e[0],t[7]=e[1],t[8]=1,t;},e.fromRotation=function(t,e){var n=Math.sin(e),r=Math.cos(e);return t[0]=r,t[1]=n,t[2]=0,t[3]=-n,t[4]=r,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t;},e.fromScaling=function(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=e[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t;},e.fromMat2d=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=0,t[3]=e[2],t[4]=e[3],t[5]=0,t[6]=e[4],t[7]=e[5],t[8]=1,t;},e.fromQuat=function(t,e){var n=e[0],r=e[1],i=e[2],o=e[3],a=n+n,u=r+r,s=i+i,c=n*a,f=r*a,l=r*u,h=i*a,d=i*u,p=i*s,g=o*a,v=o*u,m=o*s;return t[0]=1-l-p,t[3]=f-m,t[6]=h+v,t[1]=f+m,t[4]=1-c-p,t[7]=d-g,t[2]=h-v,t[5]=d+g,t[8]=1-c-l,t;},e.normalFromMat4=function(t,e){var n=e[0],r=e[1],i=e[2],o=e[3],a=e[4],u=e[5],s=e[6],c=e[7],f=e[8],l=e[9],h=e[10],d=e[11],p=e[12],g=e[13],v=e[14],m=e[15],y=n*u-r*a,b=n*s-i*a,x=n*c-o*a,_=r*s-i*u,w=r*c-o*u,S=i*c-o*s,M=f*g-l*p,A=f*v-h*p,O=f*m-d*p,P=l*v-h*g,E=l*m-d*g,C=h*m-d*v,j=y*C-b*E+x*P+_*O-w*A+S*M;return j?(j=1/j,t[0]=(u*C-s*E+c*P)*j,t[1]=(s*O-a*C-c*A)*j,t[2]=(a*E-u*O+c*M)*j,t[3]=(i*E-r*C-o*P)*j,t[4]=(n*C-i*O+o*A)*j,t[5]=(r*O-n*E-o*M)*j,t[6]=(g*S-v*w+m*_)*j,t[7]=(v*x-p*S-m*b)*j,t[8]=(p*w-g*x+m*y)*j,t):null;},e.projection=function(t,e,n){return t[0]=2/e,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/n,t[5]=0,t[6]=-1,t[7]=1,t[8]=1,t;},e.str=function(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")";},e.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2));},e.add=function(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t[3]=e[3]+n[3],t[4]=e[4]+n[4],t[5]=e[5]+n[5],t[6]=e[6]+n[6],t[7]=e[7]+n[7],t[8]=e[8]+n[8],t;},e.subtract=i,e.multiplyScalar=function(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*n,t;},e.multiplyScalarAndAdd=function(t,e,n,r){return t[0]=e[0]+n[0]*r,t[1]=e[1]+n[1]*r,t[2]=e[2]+n[2]*r,t[3]=e[3]+n[3]*r,t[4]=e[4]+n[4]*r,t[5]=e[5]+n[5]*r,t[6]=e[6]+n[6]*r,t[7]=e[7]+n[7]*r,t[8]=e[8]+n[8]*r,t;},e.exactEquals=function(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[7]===e[7]&&t[8]===e[8];},e.equals=function(t,e){var n=t[0],r=t[1],i=t[2],a=t[3],u=t[4],s=t[5],c=t[6],f=t[7],l=t[8],h=e[0],d=e[1],p=e[2],g=e[3],v=e[4],m=e[5],y=e[6],b=e[7],x=e[8];return Math.abs(n-h)<=o.EPSILON*Math.max(1,Math.abs(n),Math.abs(h))&&Math.abs(r-d)<=o.EPSILON*Math.max(1,Math.abs(r),Math.abs(d))&&Math.abs(i-p)<=o.EPSILON*Math.max(1,Math.abs(i),Math.abs(p))&&Math.abs(a-g)<=o.EPSILON*Math.max(1,Math.abs(a),Math.abs(g))&&Math.abs(u-v)<=o.EPSILON*Math.max(1,Math.abs(u),Math.abs(v))&&Math.abs(s-m)<=o.EPSILON*Math.max(1,Math.abs(s),Math.abs(m))&&Math.abs(c-y)<=o.EPSILON*Math.max(1,Math.abs(c),Math.abs(y))&&Math.abs(f-b)<=o.EPSILON*Math.max(1,Math.abs(f),Math.abs(b))&&Math.abs(l-x)<=o.EPSILON*Math.max(1,Math.abs(l),Math.abs(x));};var o=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t){Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);}return e.default=t,e;}(n(18));e.mul=r,e.sub=i;},function(t,e,n){function r(){var t=new p.ARRAY_TYPE(3);return p.ARRAY_TYPE!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t;}function i(t){var e=t[0],n=t[1],r=t[2];return Math.sqrt(e*e+n*n+r*r);}function o(t,e,n){var r=new p.ARRAY_TYPE(3);return r[0]=t,r[1]=e,r[2]=n,r;}function a(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t;}function u(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t[2]=e[2]*n[2],t;}function s(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t[2]=e[2]/n[2],t;}function c(t,e){var n=e[0]-t[0],r=e[1]-t[1],i=e[2]-t[2];return Math.sqrt(n*n+r*r+i*i);}function f(t,e){var n=e[0]-t[0],r=e[1]-t[1],i=e[2]-t[2];return n*n+r*r+i*i;}function l(t){var e=t[0],n=t[1],r=t[2];return e*e+n*n+r*r;}function h(t,e){var n=e[0],r=e[1],i=e[2],o=n*n+r*r+i*i;return o>0&&(o=1/Math.sqrt(o),t[0]=e[0]*o,t[1]=e[1]*o,t[2]=e[2]*o),t;}function d(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2];}Object.defineProperty(e,"__esModule",{value:!0}),e.forEach=e.sqrLen=e.len=e.sqrDist=e.dist=e.div=e.mul=e.sub=void 0,e.create=r,e.clone=function(t){var e=new p.ARRAY_TYPE(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e;},e.length=i,e.fromValues=o,e.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t;},e.set=function(t,e,n,r){return t[0]=e,t[1]=n,t[2]=r,t;},e.add=function(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t;},e.subtract=a,e.multiply=u,e.divide=s,e.ceil=function(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t[2]=Math.ceil(e[2]),t;},e.floor=function(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t[2]=Math.floor(e[2]),t;},e.min=function(t,e,n){return t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t[2]=Math.min(e[2],n[2]),t;},e.max=function(t,e,n){return t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t[2]=Math.max(e[2],n[2]),t;},e.round=function(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t[2]=Math.round(e[2]),t;},e.scale=function(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t;},e.scaleAndAdd=function(t,e,n,r){return t[0]=e[0]+n[0]*r,t[1]=e[1]+n[1]*r,t[2]=e[2]+n[2]*r,t;},e.distance=c,e.squaredDistance=f,e.squaredLength=l,e.negate=function(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t;},e.inverse=function(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t;},e.normalize=h,e.dot=d,e.cross=function(t,e,n){var r=e[0],i=e[1],o=e[2],a=n[0],u=n[1],s=n[2];return t[0]=i*s-o*u,t[1]=o*a-r*s,t[2]=r*u-i*a,t;},e.lerp=function(t,e,n,r){var i=e[0],o=e[1],a=e[2];return t[0]=i+r*(n[0]-i),t[1]=o+r*(n[1]-o),t[2]=a+r*(n[2]-a),t;},e.hermite=function(t,e,n,r,i,o){var a=o*o,u=a*(2*o-3)+1,s=a*(o-2)+o,c=a*(o-1),f=a*(3-2*o);return t[0]=e[0]*u+n[0]*s+r[0]*c+i[0]*f,t[1]=e[1]*u+n[1]*s+r[1]*c+i[1]*f,t[2]=e[2]*u+n[2]*s+r[2]*c+i[2]*f,t;},e.bezier=function(t,e,n,r,i,o){var a=1-o,u=a*a,s=o*o,c=u*a,f=3*o*u,l=3*s*a,h=s*o;return t[0]=e[0]*c+n[0]*f+r[0]*l+i[0]*h,t[1]=e[1]*c+n[1]*f+r[1]*l+i[1]*h,t[2]=e[2]*c+n[2]*f+r[2]*l+i[2]*h,t;},e.random=function(t,e){e=e||1;var n=2*p.RANDOM()*Math.PI,r=2*p.RANDOM()-1,i=Math.sqrt(1-r*r)*e;return t[0]=Math.cos(n)*i,t[1]=Math.sin(n)*i,t[2]=r*e,t;},e.transformMat4=function(t,e,n){var r=e[0],i=e[1],o=e[2],a=n[3]*r+n[7]*i+n[11]*o+n[15];return a=a||1,t[0]=(n[0]*r+n[4]*i+n[8]*o+n[12])/a,t[1]=(n[1]*r+n[5]*i+n[9]*o+n[13])/a,t[2]=(n[2]*r+n[6]*i+n[10]*o+n[14])/a,t;},e.transformMat3=function(t,e,n){var r=e[0],i=e[1],o=e[2];return t[0]=r*n[0]+i*n[3]+o*n[6],t[1]=r*n[1]+i*n[4]+o*n[7],t[2]=r*n[2]+i*n[5]+o*n[8],t;},e.transformQuat=function(t,e,n){var r=n[0],i=n[1],o=n[2],a=n[3],u=e[0],s=e[1],c=e[2],f=i*c-o*s,l=o*u-r*c,h=r*s-i*u,d=i*h-o*l,p=o*f-r*h,g=r*l-i*f,v=2*a;return f*=v,l*=v,h*=v,d*=2,p*=2,g*=2,t[0]=u+f+d,t[1]=s+l+p,t[2]=c+h+g,t;},e.rotateX=function(t,e,n,r){var i=[],o=[];return i[0]=e[0]-n[0],i[1]=e[1]-n[1],i[2]=e[2]-n[2],o[0]=i[0],o[1]=i[1]*Math.cos(r)-i[2]*Math.sin(r),o[2]=i[1]*Math.sin(r)+i[2]*Math.cos(r),t[0]=o[0]+n[0],t[1]=o[1]+n[1],t[2]=o[2]+n[2],t;},e.rotateY=function(t,e,n,r){var i=[],o=[];return i[0]=e[0]-n[0],i[1]=e[1]-n[1],i[2]=e[2]-n[2],o[0]=i[2]*Math.sin(r)+i[0]*Math.cos(r),o[1]=i[1],o[2]=i[2]*Math.cos(r)-i[0]*Math.sin(r),t[0]=o[0]+n[0],t[1]=o[1]+n[1],t[2]=o[2]+n[2],t;},e.rotateZ=function(t,e,n,r){var i=[],o=[];return i[0]=e[0]-n[0],i[1]=e[1]-n[1],i[2]=e[2]-n[2],o[0]=i[0]*Math.cos(r)-i[1]*Math.sin(r),o[1]=i[0]*Math.sin(r)+i[1]*Math.cos(r),o[2]=i[2],t[0]=o[0]+n[0],t[1]=o[1]+n[1],t[2]=o[2]+n[2],t;},e.angle=function(t,e){var n=o(t[0],t[1],t[2]),r=o(e[0],e[1],e[2]);h(n,n),h(r,r);var i=d(n,r);return i>1?0:i<-1?Math.PI:Math.acos(i);},e.str=function(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")";},e.exactEquals=function(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2];},e.equals=function(t,e){var n=t[0],r=t[1],i=t[2],o=e[0],a=e[1],u=e[2];return Math.abs(n-o)<=p.EPSILON*Math.max(1,Math.abs(n),Math.abs(o))&&Math.abs(r-a)<=p.EPSILON*Math.max(1,Math.abs(r),Math.abs(a))&&Math.abs(i-u)<=p.EPSILON*Math.max(1,Math.abs(i),Math.abs(u));};var p=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t){Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);}return e.default=t,e;}(n(18));e.sub=a,e.mul=u,e.div=s,e.dist=c,e.sqrDist=f,e.len=i,e.sqrLen=l,e.forEach=function(){var t=r();return function(e,n,r,i,o,a){var u=void 0,s=void 0;for(n||(n=3),r||(r=0),s=i?Math.min(i*n+r,e.length):e.length,u=r;u<s;u+=n){t[0]=e[u],t[1]=e[u+1],t[2]=e[u+2],o(t,t,a),e[u]=t[0],e[u+1]=t[1],e[u+2]=t[2];}return e;};}();},function(t,e,n){function r(){var t=new l.ARRAY_TYPE(2);return l.ARRAY_TYPE!=Float32Array&&(t[0]=0,t[1]=0),t;}function i(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t;}function o(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t;}function a(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t;}function u(t,e){var n=e[0]-t[0],r=e[1]-t[1];return Math.sqrt(n*n+r*r);}function s(t,e){var n=e[0]-t[0],r=e[1]-t[1];return n*n+r*r;}function c(t){var e=t[0],n=t[1];return Math.sqrt(e*e+n*n);}function f(t){var e=t[0],n=t[1];return e*e+n*n;}Object.defineProperty(e,"__esModule",{value:!0}),e.forEach=e.sqrLen=e.sqrDist=e.dist=e.div=e.mul=e.sub=e.len=void 0,e.create=r,e.clone=function(t){var e=new l.ARRAY_TYPE(2);return e[0]=t[0],e[1]=t[1],e;},e.fromValues=function(t,e){var n=new l.ARRAY_TYPE(2);return n[0]=t,n[1]=e,n;},e.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t;},e.set=function(t,e,n){return t[0]=e,t[1]=n,t;},e.add=function(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t;},e.subtract=i,e.multiply=o,e.divide=a,e.ceil=function(t,e){return t[0]=Math.ceil(e[0]),t[1]=Math.ceil(e[1]),t;},e.floor=function(t,e){return t[0]=Math.floor(e[0]),t[1]=Math.floor(e[1]),t;},e.min=function(t,e,n){return t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t;},e.max=function(t,e,n){return t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t;},e.round=function(t,e){return t[0]=Math.round(e[0]),t[1]=Math.round(e[1]),t;},e.scale=function(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t;},e.scaleAndAdd=function(t,e,n,r){return t[0]=e[0]+n[0]*r,t[1]=e[1]+n[1]*r,t;},e.distance=u,e.squaredDistance=s,e.length=c,e.squaredLength=f,e.negate=function(t,e){return t[0]=-e[0],t[1]=-e[1],t;},e.inverse=function(t,e){return t[0]=1/e[0],t[1]=1/e[1],t;},e.normalize=function(t,e){var n=e[0],r=e[1],i=n*n+r*r;return i>0&&(i=1/Math.sqrt(i),t[0]=e[0]*i,t[1]=e[1]*i),t;},e.dot=function(t,e){return t[0]*e[0]+t[1]*e[1];},e.cross=function(t,e,n){var r=e[0]*n[1]-e[1]*n[0];return t[0]=t[1]=0,t[2]=r,t;},e.lerp=function(t,e,n,r){var i=e[0],o=e[1];return t[0]=i+r*(n[0]-i),t[1]=o+r*(n[1]-o),t;},e.random=function(t,e){e=e||1;var n=2*l.RANDOM()*Math.PI;return t[0]=Math.cos(n)*e,t[1]=Math.sin(n)*e,t;},e.transformMat2=function(t,e,n){var r=e[0],i=e[1];return t[0]=n[0]*r+n[2]*i,t[1]=n[1]*r+n[3]*i,t;},e.transformMat2d=function(t,e,n){var r=e[0],i=e[1];return t[0]=n[0]*r+n[2]*i+n[4],t[1]=n[1]*r+n[3]*i+n[5],t;},e.transformMat3=function(t,e,n){var r=e[0],i=e[1];return t[0]=n[0]*r+n[3]*i+n[6],t[1]=n[1]*r+n[4]*i+n[7],t;},e.transformMat4=function(t,e,n){var r=e[0],i=e[1];return t[0]=n[0]*r+n[4]*i+n[12],t[1]=n[1]*r+n[5]*i+n[13],t;},e.rotate=function(t,e,n,r){var i=e[0]-n[0],o=e[1]-n[1],a=Math.sin(r),u=Math.cos(r);return t[0]=i*u-o*a+n[0],t[1]=i*a+o*u+n[1],t;},e.angle=function(t,e){var n=t[0],r=t[1],i=e[0],o=e[1],a=n*n+r*r;a>0&&(a=1/Math.sqrt(a));var u=i*i+o*o;u>0&&(u=1/Math.sqrt(u));var s=(n*i+r*o)*a*u;return s>1?0:s<-1?Math.PI:Math.acos(s);},e.str=function(t){return"vec2("+t[0]+", "+t[1]+")";},e.exactEquals=function(t,e){return t[0]===e[0]&&t[1]===e[1];},e.equals=function(t,e){var n=t[0],r=t[1],i=e[0],o=e[1];return Math.abs(n-i)<=l.EPSILON*Math.max(1,Math.abs(n),Math.abs(i))&&Math.abs(r-o)<=l.EPSILON*Math.max(1,Math.abs(r),Math.abs(o));};var l=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t){Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);}return e.default=t,e;}(n(18));e.len=c,e.sub=i,e.mul=o,e.div=a,e.dist=u,e.sqrDist=s,e.sqrLen=f,e.forEach=function(){var t=r();return function(e,n,r,i,o,a){var u=void 0,s=void 0;for(n||(n=2),r||(r=0),s=i?Math.min(i*n+r,e.length):e.length,u=r;u<s;u+=n){t[0]=e[u],t[1]=e[u+1],o(t,t,a),e[u]=t[0],e[u+1]=t[1];}return e;};}();},function(t,e,n){var r=n(4);r.Rect=n(41),r.Circle=n(42),r.Ellipse=n(43),r.Path=n(44),r.Text=n(45),r.Line=n(46),r.Image=n(47),r.Polygon=n(48),r.Marker=n(49),r.Dom=n(50),r.Fa=n(51),t.exports=r;},function(t,e,n){var r=n(0),i=n(17),o=n(115),a=n(116),u=n(117),s=n(118),c=function t(e){t.superclass.constructor.call(this,e),this.set("children",[]);};r.extend(c,i),r.augment(c,{isGroup:!1,canFill:!1,canStroke:!1,capture:!1,visible:!1,init:function init(){var t=document.createElementNS("http://www.w3.org/2000/svg","defs"),e=r.uniqueId("defs_");t.setAttribute("id",e),this.set("el",t),this.set("children",[]);},find:function find(t,e){for(var n=this.get("children"),r=null,i=0;i<n.length;i++){if(n[i].match(t,e)){r=n[i].__cfg.id;break;}}return r;},findById:function findById(t){for(var e=this.get("children"),n=null,r=0;r<e.length;r++){if(e[r].__cfg.id===t){n=e[r];break;}}return n;},add:function add(t){var e=this.get("el"),n=this,i=this.get("children");if(r.isArray(t))return r.each(t,function(t){var r=t.get("parent");r&&(r.removeChild(t,!1),n._setContext(t)),e.appendChild(t.get("el"));}),i.push.apply(i,t),n;if(n.findById(t.get("id")))return n;var o=t.get("parent");return o&&o.removeChild(t,!1),n._add(t),e.appendChild(t.get("el")),n;},_add:function _add(t){this.get("el").appendChild(t.__cfg.el),this.get("children").push(t),t.__cfg.parent=this,t.__cfg.defs=this,t.__cfg.canvas=this.__cfg.canvas;},addGradient:function addGradient(t){var e=new o(t);return this._add(e),e.__cfg.id;},addShadow:function addShadow(t){var e=new a(t);return this._add(e),e.__cfg.id;},addArrow:function addArrow(t,e,n){var r=new u(t,e,n);return this._add(r),r.__cfg.id;},addClip:function addClip(t){var e=new s(t);return this._add(e),e.__cfg.id;}}),t.exports=c;},function(t,e,n){function r(t){var e=t.match(u);if(!e)return"";var n="";return e.sort(function(t,e){return t=t.split(":"),e=e.split(":"),Number(t[0])-Number(e[0]);}),i.each(e,function(t){t=t.split(":"),n+='<stop offset="'+t[0]+'" stop-color="'+t[1]+'"></stop>';}),n;}var i=n(0),o=/^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i,a=/^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i,u=/[\d.]+:(#[^\s]+|[^\)]+\))/gi,s=function s(t){var e=null,n=i.uniqueId("gradient_");return"l"===t.toLowerCase()[0]?function(t,e){var n=o.exec(t),a=i.mod(i.toRadian(parseFloat(n[1])),2*Math.PI),u=n[2],s=void 0,c=void 0;a>=0&&a<.5*Math.PI?(s={x:0,y:0},c={x:1,y:1}):.5*Math.PI<=a&&a<Math.PI?(s={x:1,y:0},c={x:0,y:1}):Math.PI<=a&&a<1.5*Math.PI?(s={x:1,y:1},c={x:0,y:0}):(s={x:0,y:1},c={x:1,y:0});var f=Math.tan(a),l=f*f,h=(c.x-s.x+f*(c.y-s.y))/(l+1)+s.x,d=f*(c.x-s.x+f*(c.y-s.y))/(l+1)+s.y;e.setAttribute("x1",s.x),e.setAttribute("y1",s.y),e.setAttribute("x2",h),e.setAttribute("y2",d),e.innerHTML=r(u);}(t,e=document.createElementNS("http://www.w3.org/2000/svg","linearGradient")):function(t,e){var n=a.exec(t),i=parseFloat(n[1]),o=parseFloat(n[2]),u=parseFloat(n[3]),s=n[4];e.setAttribute("cx",i),e.setAttribute("cy",o),e.setAttribute("r",u),e.innerHTML=r(s);}(t,e=document.createElementNS("http://www.w3.org/2000/svg","radialGradient")),e.setAttribute("id",n),this.__cfg={el:e,id:n},this.__attrs={config:t},this;};i.augment(s,{type:"gradient",match:function match(t,e){return this.type===t&&this.__attrs.config===e;}}),t.exports=s;},function(t,e,n){function r(t,e){var n='<feDropShadow \n      dx="'+t.dx+'" \n      dy="'+t.dy+'" \n      stdDeviation="'+(t.blur?t.blur/10:0)+'"\n      flood-color="'+(t.color?t.color:"#000")+'"\n      flood-opacity="'+(t.opacity?t.opacity:1)+'"\n      />';e.innerHTML=n;}var i=n(0),o={shadowColor:"color",shadowOpacity:"opacity",shadowBlur:"blur",shadowOffsetX:"dx",shadowOffsetY:"dy"},a=function a(t){var e=document.createElementNS("http://www.w3.org/2000/svg","filter"),n=i.uniqueId("filter_");return e.setAttribute("id",n),r(t,e),this.__cfg={el:e,id:n},this.__attrs={config:t},this;};i.augment(a,{type:"filter",match:function match(t,e){if(this.type!==t)return!1;var n=!1,r=this.__attrs.config;return i.each(Object.keys(r),function(t){n||(n=r[t]===e[t]);}),n;},update:function update(t,e){var n=this.__attrs.config;return n[o[t]]=e,r(n,this.__cfg.el),this;}}),t.exports=a;},function(t,e,n){function r(t,e,n){var r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("d","M0,0 L6,3 L0,6 L3,3Z"),r.setAttribute("stroke","none"),r.setAttribute("fill",n||"#000"),t.appendChild(r),t.setAttribute("refX",3),t.setAttribute("refY",3),r;}var i="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(t){return void 0===t?"undefined":a(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":a(t);},o=n(0),u=function u(t,e,n){var a=document.createElementNS("http://www.w3.org/2000/svg","marker"),u=o.uniqueId("marker_");a.setAttribute("id",u),a.setAttribute("overflow","visible"),a.setAttribute("orient","auto-start-reverse"),this.__cfg={el:a,id:u,stroke:n||"#000"},this.__cfg[t]=!0;var s=null;return"boolean"==typeof e&&e?(s=r(a,0,n),this._setChild(s,!0)):"object"===(void 0===e?"undefined":i(e))&&(s=function(t,e,n,i){if(!t)return r(e);if("marker"!==t.type)throw new TypeError("the shape of an arrow should be an instance of Marker");t.attr({stroke:"none",fill:i}),e.append(t.get("el"));var o=t.__attrs.x,a=t.__attrs.y;return e.setAttribute("refX",o),e.setAttribute("refY",a),t;}(e,a,0,n),this._setChild(s,!1)),this.__attrs={config:e},this;};o.augment(u,{type:"arrow",match:function match(t,e){return!(!this.__cfg[t]||"object"===i(e.value)||"#000"!==e.stroke||"boolean"==typeof e.value&&!this.__cfg.default);},_setChild:function _setChild(t,e){this.__cfg.child=t,this.__cfg.default=e;},update:function update(t){var e=this.__cfg.child;this.__cfg.default=!1,e.attr?e.attr("fill",t):e.setAttribute("fill",t);}}),t.exports=u;},function(t,e,n){var r=n(0),i=function i(t){var e=document.createElementNS("http://www.w3.org/2000/svg","clipPath"),n=r.uniqueId("clip_");if(t.get("el"))e.appendChild(t.get("el"));else{if(!r.isString(t.nodeName))throw"clip element should be a instance of Shape or a SVG node";e.appendChild(t);}return e.setAttribute("id",n),this.__cfg={el:e,id:n},this.__attrs={config:t},this;};r.augment(i,{type:"clip",match:function match(){return!1;}}),t.exports=i;},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(20);n.d(e,"now",function(){return r.b;}),n.d(e,"timer",function(){return r.c;}),n.d(e,"timerFlush",function(){return r.d;});var i=n(120);n.d(e,"timeout",function(){return i.a;});var o=n(121);n.d(e,"interval",function(){return o.a;});},function(t,e,n){var r=n(20);e.a=function(t,e,n){var i=new r.a();return e=null==e?0:+e,i.restart(function(n){i.stop(),t(n+e);},e,n),i;};},function(t,e,n){var r=n(20);e.a=function(t,e,n){var i=new r.a(),o=e;return null==e?(i.restart(t,e,n),i):(e=+e,n=null==n?Object(r.b)():+n,i.restart(function r(a){a+=o,i.restart(r,o+=e,n),t(a);},e,n),i);};},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(123);n.d(e,"easeLinear",function(){return r.a;});var i=n(124);n.d(e,"easeQuad",function(){return i.b;}),n.d(e,"easeQuadIn",function(){return i.a;}),n.d(e,"easeQuadOut",function(){return i.c;}),n.d(e,"easeQuadInOut",function(){return i.b;});var o=n(125);n.d(e,"easeCubic",function(){return o.b;}),n.d(e,"easeCubicIn",function(){return o.a;}),n.d(e,"easeCubicOut",function(){return o.c;}),n.d(e,"easeCubicInOut",function(){return o.b;});var a=n(126);n.d(e,"easePoly",function(){return a.b;}),n.d(e,"easePolyIn",function(){return a.a;}),n.d(e,"easePolyOut",function(){return a.c;}),n.d(e,"easePolyInOut",function(){return a.b;});var u=n(127);n.d(e,"easeSin",function(){return u.b;}),n.d(e,"easeSinIn",function(){return u.a;}),n.d(e,"easeSinOut",function(){return u.c;}),n.d(e,"easeSinInOut",function(){return u.b;});var s=n(128);n.d(e,"easeExp",function(){return s.b;}),n.d(e,"easeExpIn",function(){return s.a;}),n.d(e,"easeExpOut",function(){return s.c;}),n.d(e,"easeExpInOut",function(){return s.b;});var c=n(129);n.d(e,"easeCircle",function(){return c.b;}),n.d(e,"easeCircleIn",function(){return c.a;}),n.d(e,"easeCircleOut",function(){return c.c;}),n.d(e,"easeCircleInOut",function(){return c.b;});var f=n(130);n.d(e,"easeBounce",function(){return f.c;}),n.d(e,"easeBounceIn",function(){return f.a;}),n.d(e,"easeBounceOut",function(){return f.c;}),n.d(e,"easeBounceInOut",function(){return f.b;});var l=n(131);n.d(e,"easeBack",function(){return l.b;}),n.d(e,"easeBackIn",function(){return l.a;}),n.d(e,"easeBackOut",function(){return l.c;}),n.d(e,"easeBackInOut",function(){return l.b;});var h=n(132);n.d(e,"easeElastic",function(){return h.c;}),n.d(e,"easeElasticIn",function(){return h.a;}),n.d(e,"easeElasticOut",function(){return h.c;}),n.d(e,"easeElasticInOut",function(){return h.b;});},function(t,e,n){e.a=function(t){return+t;};},function(t,e,n){e.a=function(t){return t*t;},e.c=function(t){return t*(2-t);},e.b=function(t){return((t*=2)<=1?t*t:--t*(2-t)+1)/2;};},function(t,e,n){e.a=function(t){return t*t*t;},e.c=function(t){return--t*t*t+1;},e.b=function(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2;};},function(t,e,n){n.d(e,"a",function(){return r;}),n.d(e,"c",function(){return i;}),n.d(e,"b",function(){return o;});var r=function t(e){function n(t){return Math.pow(t,e);}return e=+e,n.exponent=t,n;}(3),i=function t(e){function n(t){return 1-Math.pow(1-t,e);}return e=+e,n.exponent=t,n;}(3),o=function t(e){function n(t){return((t*=2)<=1?Math.pow(t,e):2-Math.pow(2-t,e))/2;}return e=+e,n.exponent=t,n;}(3);},function(t,e,n){e.a=function(t){return 1-Math.cos(t*i);},e.c=function(t){return Math.sin(t*i);},e.b=function(t){return(1-Math.cos(r*t))/2;};var r=Math.PI,i=r/2;},function(t,e,n){e.a=function(t){return Math.pow(2,10*t-10);},e.c=function(t){return 1-Math.pow(2,-10*t);},e.b=function(t){return((t*=2)<=1?Math.pow(2,10*t-10):2-Math.pow(2,10-10*t))/2;};},function(t,e,n){e.a=function(t){return 1-Math.sqrt(1-t*t);},e.c=function(t){return Math.sqrt(1- --t*t);},e.b=function(t){return((t*=2)<=1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2;};},function(t,e,n){function r(t){return(t=+t)<i?d*t*t:t<a?d*(t-=o)*t+u:t<c?d*(t-=s)*t+f:d*(t-=l)*t+h;}e.a=function(t){return 1-r(1-t);},e.c=r,e.b=function(t){return((t*=2)<=1?1-r(1-t):r(t-1)+1)/2;};var i=4/11,o=6/11,a=8/11,u=.75,s=9/11,c=10/11,f=.9375,l=21/22,h=63/64,d=1/i/i;},function(t,e,n){n.d(e,"a",function(){return r;}),n.d(e,"c",function(){return i;}),n.d(e,"b",function(){return o;});var r=function t(e){function n(t){return t*t*((e+1)*t-e);}return e=+e,n.overshoot=t,n;}(1.70158),i=function t(e){function n(t){return--t*t*((e+1)*t+e)+1;}return e=+e,n.overshoot=t,n;}(1.70158),o=function t(e){function n(t){return((t*=2)<1?t*t*((e+1)*t-e):(t-=2)*t*((e+1)*t+e)+2)/2;}return e=+e,n.overshoot=t,n;}(1.70158);},function(t,e,n){n.d(e,"a",function(){return i;}),n.d(e,"c",function(){return o;}),n.d(e,"b",function(){return a;});var r=2*Math.PI,i=function t(e,n){function i(t){return e*Math.pow(2,10*--t)*Math.sin((o-t)/n);}var o=Math.asin(1/(e=Math.max(1,e)))*(n/=r);return i.amplitude=function(e){return t(e,n*r);},i.period=function(n){return t(e,n);},i;}(1,.3),o=function t(e,n){function i(t){return 1-e*Math.pow(2,-10*(t=+t))*Math.sin((t+o)/n);}var o=Math.asin(1/(e=Math.max(1,e)))*(n/=r);return i.amplitude=function(e){return t(e,n*r);},i.period=function(n){return t(e,n);},i;}(1,.3),a=function t(e,n){function i(t){return((t=2*t-1)<0?e*Math.pow(2,10*t)*Math.sin((o-t)/n):2-e*Math.pow(2,-10*t)*Math.sin((o+t)/n))/2;}var o=Math.asin(1/(e=Math.max(1,e)))*(n/=r);return i.amplitude=function(e){return t(e,n*r);},i.period=function(n){return t(e,n);},i;}(1,.3);},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(21);n.d(e,"interpolate",function(){return r.a;});var i=n(57);n.d(e,"interpolateArray",function(){return i.a;});var o=n(24);n.d(e,"interpolateBasis",function(){return o.b;});var a=n(55);n.d(e,"interpolateBasisClosed",function(){return a.a;});var u=n(58);n.d(e,"interpolateDate",function(){return u.a;});var s=n(14);n.d(e,"interpolateNumber",function(){return s.a;});var c=n(59);n.d(e,"interpolateObject",function(){return c.a;});var f=n(136);n.d(e,"interpolateRound",function(){return f.a;});var l=n(60);n.d(e,"interpolateString",function(){return l.a;});var h=n(137);n.d(e,"interpolateTransformCss",function(){return h.a;}),n.d(e,"interpolateTransformSvg",function(){return h.b;});var d=n(140);n.d(e,"interpolateZoom",function(){return d.a;});var p=n(54);n.d(e,"interpolateRgb",function(){return p.a;}),n.d(e,"interpolateRgbBasis",function(){return p.b;}),n.d(e,"interpolateRgbBasisClosed",function(){return p.c;});var g=n(141);n.d(e,"interpolateHsl",function(){return g.a;}),n.d(e,"interpolateHslLong",function(){return g.b;});var v=n(142);n.d(e,"interpolateLab",function(){return v.a;});var m=n(143);n.d(e,"interpolateHcl",function(){return m.a;}),n.d(e,"interpolateHclLong",function(){return m.b;});var y=n(144);n.d(e,"interpolateCubehelix",function(){return y.b;}),n.d(e,"interpolateCubehelixLong",function(){return y.a;});var b=n(145);n.d(e,"quantize",function(){return b.a;});},function(t,e,n){function r(t){if(t instanceof o)return new o(t.l,t.a,t.b,t.opacity);if(t instanceof l){var e=t.h*p.a;return new o(t.l,Math.cos(e)*t.c,Math.sin(e)*t.c,t.opacity);}t instanceof d.b||(t=Object(d.h)(t));var n=c(t.r),r=c(t.g),i=c(t.b),u=a((.4124564*n+.3575761*r+.1804375*i)/g),s=a((.2126729*n+.7151522*r+.072175*i)/v);return new o(116*s-16,500*(u-s),200*(s-a((.0193339*n+.119192*r+.9503041*i)/m)),t.opacity);}function i(t,e,n,i){return 1===arguments.length?r(t):new o(t,e,n,null==i?1:i);}function o(t,e,n,r){this.l=+t,this.a=+e,this.b=+n,this.opacity=+r;}function a(t){return t>_?Math.pow(t,1/3):t/x+y;}function u(t){return t>b?t*t*t:x*(t-y);}function s(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055);}function c(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);}function f(t,e,n,i){return 1===arguments.length?function(t){if(t instanceof l)return new l(t.h,t.c,t.l,t.opacity);t instanceof o||(t=r(t));var e=Math.atan2(t.b,t.a)*p.b;return new l(e<0?e+360:e,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity);}(t):new l(t,e,n,null==i?1:i);}function l(t,e,n,r){this.h=+t,this.c=+e,this.l=+n,this.opacity=+r;}e.a=i,e.b=f;var h=n(23),d=n(22),p=n(53),g=.95047,v=1,m=1.08883,y=4/29,b=6/29,x=3*b*b,_=b*b*b;Object(h.a)(o,i,Object(h.b)(d.a,{brighter:function brighter(t){return new o(this.l+18*(null==t?1:t),this.a,this.b,this.opacity);},darker:function darker(t){return new o(this.l-18*(null==t?1:t),this.a,this.b,this.opacity);},rgb:function rgb(){var t=(this.l+16)/116,e=isNaN(this.a)?t:t+this.a/500,n=isNaN(this.b)?t:t-this.b/200;return t=v*u(t),e=g*u(e),n=m*u(n),new d.b(s(3.2404542*e-1.5371385*t-.4985314*n),s(-.969266*e+1.8760108*t+.041556*n),s(.0556434*e-.2040259*t+1.0572252*n),this.opacity);}})),Object(h.a)(l,f,Object(h.b)(d.a,{brighter:function brighter(t){return new l(this.h,this.c,this.l+18*(null==t?1:t),this.opacity);},darker:function darker(t){return new l(this.h,this.c,this.l-18*(null==t?1:t),this.opacity);},rgb:function rgb(){return r(this).rgb();}}));},function(t,e,n){function r(t,e,n,r){return 1===arguments.length?function(t){if(t instanceof i)return new i(t.h,t.s,t.l,t.opacity);t instanceof a.b||(t=Object(a.h)(t));var e=t.r/255,n=t.g/255,r=t.b/255,o=(g*r+d*e-p*n)/(g+d-p),s=r-o,c=(h*(n-o)-f*s)/l,v=Math.sqrt(c*c+s*s)/(h*o*(1-o)),m=v?Math.atan2(c,s)*u.b-120:NaN;return new i(m<0?m+360:m,v,o,t.opacity);}(t):new i(t,e,n,null==r?1:r);}function i(t,e,n,r){this.h=+t,this.s=+e,this.l=+n,this.opacity=+r;}e.a=r;var o=n(23),a=n(22),u=n(53),s=-.14861,c=1.78277,f=-.29227,l=-.90649,h=1.97294,d=h*l,p=h*c,g=c*f-l*s;Object(o.a)(i,r,Object(o.b)(a.a,{brighter:function brighter(t){return t=null==t?a.c:Math.pow(a.c,t),new i(this.h,this.s,this.l*t,this.opacity);},darker:function darker(t){return t=null==t?a.d:Math.pow(a.d,t),new i(this.h,this.s,this.l*t,this.opacity);},rgb:function rgb(){var t=isNaN(this.h)?0:(this.h+120)*u.a,e=+this.l,n=isNaN(this.s)?0:this.s*e*(1-e),r=Math.cos(t),i=Math.sin(t);return new a.b(255*(e+n*(s*r+c*i)),255*(e+n*(f*r+l*i)),255*(e+n*(h*r)),this.opacity);}}));},function(t,e,n){e.a=function(t,e){return e-=t=+t,function(n){return Math.round(t+e*n);};};},function(t,e,n){function r(t,e,n,r){function o(t){return t.length?t.pop()+" ":"";}return function(a,u){var s=[],c=[];return a=t(a),u=t(u),function(t,r,o,a,u,s){if(t!==o||r!==a){var c=u.push("translate(",null,e,null,n);s.push({i:c-4,x:Object(i.a)(t,o)},{i:c-2,x:Object(i.a)(r,a)});}else(o||a)&&u.push("translate("+o+e+a+n);}(a.translateX,a.translateY,u.translateX,u.translateY,s,c),function(t,e,n,a){t!==e?(t-e>180?e+=360:e-t>180&&(t+=360),a.push({i:n.push(o(n)+"rotate(",null,r)-2,x:Object(i.a)(t,e)})):e&&n.push(o(n)+"rotate("+e+r);}(a.rotate,u.rotate,s,c),function(t,e,n,a){t!==e?a.push({i:n.push(o(n)+"skewX(",null,r)-2,x:Object(i.a)(t,e)}):e&&n.push(o(n)+"skewX("+e+r);}(a.skewX,u.skewX,s,c),function(t,e,n,r,a,u){if(t!==n||e!==r){var s=a.push(o(a)+"scale(",null,",",null,")");u.push({i:s-4,x:Object(i.a)(t,n)},{i:s-2,x:Object(i.a)(e,r)});}else 1===n&&1===r||a.push(o(a)+"scale("+n+","+r+")");}(a.scaleX,a.scaleY,u.scaleX,u.scaleY,s,c),a=u=null,function(t){for(var e,n=-1,r=c.length;++n<r;){s[(e=c[n]).i]=e.x(t);}return s.join("");};};}n.d(e,"a",function(){return a;}),n.d(e,"b",function(){return u;});var i=n(14),o=n(138),a=r(o.a,"px, ","px)","deg)"),u=r(o.b,", ",")",")");},function(t,e,n){e.a=function(t){return"none"===t?u.b:(r||(r=document.createElement("DIV"),i=document.documentElement,o=document.defaultView),r.style.transform=t,t=o.getComputedStyle(i.appendChild(r),null).getPropertyValue("transform"),i.removeChild(r),t=t.slice(7,-1).split(","),Object(u.a)(+t[0],+t[1],+t[2],+t[3],+t[4],+t[5]));},e.b=function(t){return null==t?u.b:(a||(a=document.createElementNS("http://www.w3.org/2000/svg","g")),a.setAttribute("transform",t),(t=a.transform.baseVal.consolidate())?(t=t.matrix,Object(u.a)(t.a,t.b,t.c,t.d,t.e,t.f)):u.b);};var r,i,o,a,u=n(139);},function(t,e,n){n.d(e,"b",function(){return i;});var r=180/Math.PI,i={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};e.a=function(t,e,n,i,o,a){var u,s,c;return(u=Math.sqrt(t*t+e*e))&&(t/=u,e/=u),(c=t*n+e*i)&&(n-=t*c,i-=e*c),(s=Math.sqrt(n*n+i*i))&&(n/=s,i/=s,c/=s),t*i<e*n&&(t=-t,e=-e,c=-c,u=-u),{translateX:o,translateY:a,rotate:Math.atan2(e,t)*r,skewX:Math.atan(c)*r,scaleX:u,scaleY:s};};},function(t,e,n){function r(t){return((t=Math.exp(t))+1/t)/2;}var i=Math.SQRT2;e.a=function(t,e){var n,o,a=t[0],u=t[1],s=t[2],c=e[0],f=e[1],l=e[2],h=c-a,d=f-u,p=h*h+d*d;if(p<1e-12)o=Math.log(l/s)/i,n=function n(t){return[a+t*h,u+t*d,s*Math.exp(i*t*o)];};else{var g=Math.sqrt(p),v=(l*l-s*s+4*p)/(2*s*2*g),m=(l*l-s*s-4*p)/(2*l*2*g),y=Math.log(Math.sqrt(v*v+1)-v),b=Math.log(Math.sqrt(m*m+1)-m);o=(b-y)/i,n=function n(t){var e=t*o,n=r(y),c=s/(2*g)*(n*function(t){return((t=Math.exp(2*t))-1)/(t+1);}(i*e+y)-function(t){return((t=Math.exp(t))-1/t)/2;}(y));return[a+c*h,u+c*d,s*n/r(i*e+y)];};}return n.duration=1e3*o,n;};},function(t,e,n){function r(t){return function(e,n){var r=t((e=Object(i.d)(e)).h,(n=Object(i.d)(n)).h),a=Object(o.a)(e.s,n.s),u=Object(o.a)(e.l,n.l),s=Object(o.a)(e.opacity,n.opacity);return function(t){return e.h=r(t),e.s=a(t),e.l=u(t),e.opacity=s(t),e+"";};};}n.d(e,"b",function(){return a;});var i=n(6),o=n(12);e.a=r(o.c);var a=r(o.a);},function(t,e,n){e.a=function(t,e){var n=Object(i.a)((t=Object(r.e)(t)).l,(e=Object(r.e)(e)).l),o=Object(i.a)(t.a,e.a),a=Object(i.a)(t.b,e.b),u=Object(i.a)(t.opacity,e.opacity);return function(e){return t.l=n(e),t.a=o(e),t.b=a(e),t.opacity=u(e),t+"";};};var r=n(6),i=n(12);},function(t,e,n){function r(t){return function(e,n){var r=t((e=Object(i.c)(e)).h,(n=Object(i.c)(n)).h),a=Object(o.a)(e.c,n.c),u=Object(o.a)(e.l,n.l),s=Object(o.a)(e.opacity,n.opacity);return function(t){return e.h=r(t),e.c=a(t),e.l=u(t),e.opacity=s(t),e+"";};};}n.d(e,"b",function(){return a;});var i=n(6),o=n(12);e.a=r(o.c);var a=r(o.a);},function(t,e,n){function r(t){return function e(n){function r(e,r){var a=t((e=Object(i.b)(e)).h,(r=Object(i.b)(r)).h),u=Object(o.a)(e.s,r.s),s=Object(o.a)(e.l,r.l),c=Object(o.a)(e.opacity,r.opacity);return function(t){return e.h=a(t),e.s=u(t),e.l=s(Math.pow(t,n)),e.opacity=c(t),e+"";};}return n=+n,r.gamma=e,r;}(1);}n.d(e,"a",function(){return a;});var i=n(6),o=n(12);e.b=r(o.c);var a=r(o.a);},function(t,e,n){e.a=function(t,e){for(var n=new Array(e),r=0;r<e;++r){n[r]=t(r/(e-1));}return n;};},function(t,e,n){t.exports={Canvas:n(147),Group:n(62),Shape:n(1),Rect:n(64),Circle:n(65),Ellipse:n(66),Path:n(67),Text:n(68),Line:n(69),Image:n(70),Polygon:n(71),Polyline:n(72),Arc:n(73),Fan:n(74),Cubic:n(75),Quadratic:n(76),Marker:n(77),PathSegment:n(29),Event:n(61)};},function(t,e,n){var r=n(0),i=n(61),o=n(62),a=n(52),u=function t(e){t.superclass.constructor.call(this,e);};u.CFG={eventEnable:!0,width:null,height:null,widthCanvas:null,heightCanvas:null,widthStyle:null,heightStyle:null,containerDOM:null,canvasDOM:null,pixelRatio:null},r.extend(u,o),r.augment(u,{init:function init(){u.superclass.init.call(this),this._setGlobalParam(),this._setDOM(),this._setInitSize(),this._setCanvas(),this._scale(),this.get("eventEnable")&&this._registEvents();},getEmitter:function getEmitter(t,e){if(t){if(!r.isEmpty(t._getEvents()))return t;var n=t.get("parent");if(n&&!e.propagationStopped)return this.getEmitter(n,e);}},_getEventObj:function _getEventObj(t,e,n,r){var o=new i(t,e,!0,!0);return o.x=n.x,o.y=n.y,o.clientX=e.clientX,o.clientY=e.clientY,o.currentTarget=r,o.target=r,o;},_triggerEvent:function _triggerEvent(t,e){var n=this.getPointByClient(e.clientX,e.clientY),r=this.getShape(n.x,n.y),i=void 0;if("mousemove"===t){var o=this.get("preShape");if(o&&o!==r){var a=this._getEventObj("mouseleave",e,n,o);(i=this.getEmitter(o,e))&&i.emit("mouseleave",a);}if(r){var u=this._getEventObj("mousemove",e,n,r);if((i=this.getEmitter(r,e))&&i.emit("mousemove",u),o!==r){var s=this._getEventObj("mouseenter",e,n,r);i&&i.emit("mouseenter",s,e);}}else{var c=this._getEventObj("mousemove",e,n,this);this.emit("mousemove",c);}this.set("preShape",r);}else{var f=this._getEventObj(t,e,n,r||this);(i=this.getEmitter(r,e))&&i!==this&&i.emit(t,f),this.emit(t,f);}var l=this.get("el");r&&!r.get("destroyed")&&(l.style.cursor=r.attr("cursor")||"default");},_registEvents:function _registEvents(){var t=this,e=t.get("el");r.each(["mouseout","mouseover","mousemove","mousedown","mouseup","click","dblclick"],function(n){e.addEventListener(n,function(e){t._triggerEvent(n,e);},!1);}),e.addEventListener("mouseout",function(e){t._triggerEvent("mouseleave",e);},!1),e.addEventListener("mouseover",function(e){t._triggerEvent("mouseenter",e);},!1),e.addEventListener("touchstart",function(e){r.isEmpty(e.touches)||t._triggerEvent("touchstart",e.touches[0]);},!1),e.addEventListener("touchmove",function(e){r.isEmpty(e.touches)||t._triggerEvent("touchmove",e.touches[0]);},!1),e.addEventListener("touchend",function(e){r.isEmpty(e.changedTouches)||t._triggerEvent("touchend",e.changedTouches[0]);},!1);},_scale:function _scale(){var t=this.get("pixelRatio");this.scale(t,t);},_setCanvas:function _setCanvas(){var t=this.get("canvasDOM"),e=new a();this.setSilent("el",t),this.setSilent("timeline",e),this.setSilent("context",t.getContext("2d")),this.setSilent("canvas",this);},_setGlobalParam:function _setGlobalParam(){this.get("pixelRatio")||this.set("pixelRatio",r.getRatio());},_setDOM:function _setDOM(){this._setContainer(),this._setLayer();},_setContainer:function _setContainer(){var t=this.get("containerId"),e=this.get("containerDOM");e||(e=document.getElementById(t),this.set("containerDOM",e)),r.modifyCSS(e,{position:"relative"});},_setLayer:function _setLayer(){var t=this.get("containerDOM"),e=r.uniqueId("canvas_");if(t){var n=r.createDom('<canvas id="'+e+'"></canvas>');t.appendChild(n),this.set("canvasDOM",n);}},_setInitSize:function _setInitSize(){this.changeSize(this.get("width"),this.get("height"));},_resize:function _resize(){var t=this.get("canvasDOM"),e=this.get("widthCanvas"),n=this.get("heightCanvas"),r=this.get("widthStyle"),i=this.get("heightStyle");t.style.width=r,t.style.height=i,t.setAttribute("width",e),t.setAttribute("height",n);},getWidth:function getWidth(){var t=this.get("pixelRatio");return this.get("width")*t;},getHeight:function getHeight(){var t=this.get("pixelRatio");return this.get("height")*t;},changeSize:function changeSize(t,e){var n=this.get("pixelRatio"),r=t*n,i=e*n;this.set("widthCanvas",r),this.set("heightCanvas",i),this.set("widthStyle",t+"px"),this.set("heightStyle",e+"px"),this.set("width",t),this.set("height",e),this._resize();},getPointByClient:function getPointByClient(t,e){var n=this.get("el"),r=n.getBoundingClientRect(),i=r.right-r.left,o=r.bottom-r.top;return{x:(t-r.left)*(n.width/i),y:(e-r.top)*(n.height/o)};},getClientByPoint:function getClientByPoint(t,e){var n=this.get("el"),r=n.getBoundingClientRect(),i=r.right-r.left,o=r.bottom-r.top;return{clientX:t/(n.width/i)+r.left,clientY:e/(n.height/o)+r.top};},beforeDraw:function beforeDraw(){var t=this.get("context"),e=this.get("el");t&&t.clearRect(0,0,e.width,e.height);},_beginDraw:function _beginDraw(){this.setSilent("toDraw",!0);},_endDraw:function _endDraw(){this.setSilent("toDraw",!1);},draw:function draw(){var t=this;t.get("destroyed")||(t.get("animateHandler")?this._beginDraw():function e(){t.setSilent("animateHandler",r.requestAnimationFrame(function(){t.setSilent("animateHandler",void 0),t.get("toDraw")&&e();})),t.beforeDraw();try{var n=t.get("context");u.superclass.draw.call(t,n);}catch(e){console.warn("error in draw canvas, detail as:"),console.warn(e),t._endDraw();}t._endDraw();}());},destroy:function destroy(){var t=this.get("containerDOM"),e=this.get("canvasDOM");e&&t&&t.removeChild(e),u.superclass.destroy.call(this);}}),t.exports=u;},function(t,e,n){var r=n(0),i=["strokeStyle","fillStyle","globalAlpha"],o=["circle","ellipse","fan","polygon","rect","path"],a={r:"R",opacity:"Opacity",lineWidth:"LineWidth",clip:"Clip",stroke:"Stroke",fill:"Fill",strokeOpacity:"Stroke",fillOpacity:"Fill",x:"X",y:"Y",rx:"Rx",ry:"Ry",re:"Re",rs:"Rs",width:"Width",height:"Height",img:"Img",x1:"X1",x2:"X2",y1:"Y1",y2:"Y2",points:"Points",p1:"P1",p2:"P2",p3:"P3",p4:"P4",text:"Text",radius:"Radius",textAlign:"TextAlign",textBaseline:"TextBaseline",font:"Font",fontSize:"FontSize",fontStyle:"FontStyle",fontVariant:"FontVariant",fontWeight:"FontWeight",fontFamily:"FontFamily",clockwise:"Clockwise",startAngle:"StartAngle",endAngle:"EndAngle",path:"Path"},u={stroke:"strokeStyle",fill:"fillStyle",opacity:"globalAlpha"};t.exports={canFill:!1,canStroke:!1,initAttrs:function initAttrs(t){return this.__attrs={opacity:1,fillOpacity:1,strokeOpacity:1},this.attr(r.assign(this.getDefaultAttrs(),t)),this;},getDefaultAttrs:function getDefaultAttrs(){return{};},attr:function attr(t,e){if(0===arguments.length)return this.__attrs;if(r.isObject(t)){for(var n in t){if(-1===i.indexOf(n)){var o=t[n];this._setAttr(n,o);}}return this._afterSetAttrAll&&this._afterSetAttrAll(t),this.clearBBox(),this;}if(2===arguments.length){if(!1!==this._setAttr(t,e)){var u="_afterSetAttr"+a[t];this[u]&&this[u](e);}return this.clearBBox(),this;}return this._getAttr(t);},clearBBox:function clearBBox(){this.setSilent("box",null);},_afterSetAttrAll:function _afterSetAttrAll(){},_getAttr:function _getAttr(t){return this.__attrs[t];},_setAttr:function _setAttr(t,e){if("clip"===t)this._setAttrClip(e),this.__attrs.clip=e;else if("transform"===t)this._setAttrTrans(e);else{this.__attrs[t]=e;var n=u[t];n&&(this.__attrs[n]=e);}return this;},hasFill:function hasFill(){return this.canFill&&this.__attrs.fillStyle;},hasStroke:function hasStroke(){return this.canStroke&&this.__attrs.strokeStyle;},_setAttrOpacity:function _setAttrOpacity(t){return this.__attrs.globalAlpha=t,t;},_setAttrClip:function _setAttrClip(t){var e=this;return t&&o.indexOf(t.type)>-1?(null===t.get("canvas")&&(t=r.clone(t)),t.set("parent",e.get("parent")),t.set("canvas",e.get("canvas")),t.set("context",e.get("context")),t.inside=function(n,r){var i=[n,r,1];return t.invert(i,e.get("canvas")),t._isPointInFill(i[0],i[1]);},t):null;},_setAttrTrans:function _setAttrTrans(t){return this.transform(t);}};},function(t,e,n){function r(t){return 1===t[0]&&0===t[1]&&0===t[3]&&1===t[4]&&0===t[6]&&0===t[7];}function i(t){return 0===t[1]&&0===t[3]&&0===t[6]&&0===t[7];}function o(t,e){r(e)||(i(e)?(t[0]*=e[0],t[4]*=e[4]):u.multiply(t,t,e));}var a=n(0),u=n(2).mat3,s=n(2).vec3;t.exports={initTransform:function initTransform(){this.attr("matrix",[1,0,0,0,1,0,0,0,1]);},translate:function translate(t,e){var n=this.attr("matrix");return u.translate(n,n,[t,e]),this.clearTotalMatrix(),this.attr("matrix",n),this;},rotate:function rotate(t){var e=this.attr("matrix");return u.rotate(e,e,t),this.clearTotalMatrix(),this.attr("matrix",e),this;},scale:function scale(t,e){var n=this.attr("matrix");return u.scale(n,n,[t,e]),this.clearTotalMatrix(),this.attr("matrix",n),this;},rotateAtStart:function rotateAtStart(t){var e=this.attr("x"),n=this.attr("y");Math.abs(t)>2*Math.PI&&(t=t/180*Math.PI),this.transform([["t",-e,-n],["r",t],["t",e,n]]);},move:function move(t,e){var n=this.get("x")||0,r=this.get("y")||0;this.translate(t-n,e-r),this.set("x",t),this.set("y",e);},transform:function transform(t){var e=this,n=e.attr("matrix");return a.each(t,function(t){switch(t[0]){case"t":e.translate(t[1],t[2]);break;case"s":e.scale(t[1],t[2]);break;case"r":e.rotate(t[1]);break;case"m":e.attr("matrix",u.multiply([],n,t[1])),e.clearTotalMatrix();}}),e;},setTransform:function setTransform(t){return this.attr("matrix",[1,0,0,0,1,0,0,0,1]),this.transform(t);},getMatrix:function getMatrix(){return this.attr("matrix");},setMatrix:function setMatrix(t){return this.attr("matrix",t),this.clearTotalMatrix(),this;},apply:function apply(t,e){var n=void 0;return n=e?this._getMatrixByRoot(e):this.attr("matrix"),s.transformMat3(t,t,n),this;},_getMatrixByRoot:function _getMatrixByRoot(t){t=t||this;for(var e=this,n=[];e!==t;){n.unshift(e),e=e.get("parent");}n.unshift(e);var r=[1,0,0,0,1,0,0,0,1];return a.each(n,function(t){u.multiply(r,t.attr("matrix"),r);}),r;},getTotalMatrix:function getTotalMatrix(){var t=this.__cfg.totalMatrix;if(!t){t=[1,0,0,0,1,0,0,0,1];var e=this.__cfg.parent;e&&o(t,e.getTotalMatrix()),o(t,this.attr("matrix")),this.__cfg.totalMatrix=t;}return t;},clearTotalMatrix:function clearTotalMatrix(){},invert:function invert(t){var e=this.getTotalMatrix();if(i(e))t[0]/=e[0],t[1]/=e[4];else{var n=u.invert([],e);n&&s.transformMat3(t,t,n);}return this;},resetTransform:function resetTransform(t){var e=this.attr("matrix");r(e)||t.transform(e[0],e[1],e[3],e[4],e[6],e[7]);}};},function(t,e,n){var r=n(1);r.Rect=n(64),r.Circle=n(65),r.Ellipse=n(66),r.Path=n(67),r.Text=n(68),r.Line=n(69),r.Image=n(70),r.Polygon=n(71),r.Polyline=n(72),r.Arc=n(73),r.Fan=n(74),r.Cubic=n(75),r.Quadratic=n(76),r.Marker=n(77),t.exports=r;},function(t,e){t.exports={xAt:function xAt(t,e,n,r,i){return e*Math.cos(t)*Math.cos(i)-n*Math.sin(t)*Math.sin(i)+r;},yAt:function yAt(t,e,n,r,i){return e*Math.sin(t)*Math.cos(i)+n*Math.cos(t)*Math.sin(i)+r;},xExtrema:function xExtrema(t,e,n){return Math.atan(-n/e*Math.tan(t));},yExtrema:function yExtrema(t,e,n){return Math.atan(n/(e*Math.tan(t)));}};}]);});}).call(this,n(47)(t));},function(t,e){var n="function"==typeof Symbol&&"symbol"==o(Symbol.iterator)?function(t){return void 0===t?"undefined":o(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":o(t);};t.exports=function(t){var e=void 0===t?"undefined":n(t);return null!=t&&("object"==e||"function"==e);};},function(t,e){var n=Array.isArray;t.exports=n;},function(t,e,n){var r="function"==typeof Symbol&&"symbol"==o(Symbol.iterator)?function(t){return void 0===t?"undefined":o(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":o(t);},i=n(174),a="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,u=i||a||Function("return this")();t.exports=u;},,,,,function(t,e){var n="function"==typeof Symbol&&"symbol"==o(Symbol.iterator)?function(t){return void 0===t?"undefined":o(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":o(t);};t.exports=function(t){return null!=t&&"object"==(void 0===t?"undefined":n(t));};},function(t,e,n){var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n){Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}}return t;},i=n(34),o=n(345),a=n(344),u={whitespace:{9:"Tab",13:"Enter",32:"Space"},fn:{112:"f1 ",113:"f2 ",114:"f3 ",115:"f4 ",116:"f5 ",117:"f6 ",118:"f7 ",119:"f8 ",120:"f9 ",121:"f10",122:"f11",123:"f12"},letter:{65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z"},number:{48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9"},navigation:{37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown"},symbol:{110:"decimal point",186:"semi-colon",187:"=",188:"comma",189:"-",190:"period ",191:"/",192:"grave accent",219:"open bracket ",220:"back slash ",221:"close bracket ",222:"single quote "},smallNumberKey:{96:"numpad 0 ",97:"numpad 1 ",98:"numpad 2 ",99:"numpad 3 ",100:"numpad 4 ",101:"numpad 5 ",102:"numpad 6 ",103:"numpad 7 ",104:"numpad 8 ",105:"numpad 9 "},modifierKey:{16:"Shift",17:"Ctrl ",18:"Alt",20:"caps lock"},escKey:{8:"Backspace",46:"Delete",27:"Escape"},homeKey:{91:"Windows Key / Left command",92:"right window key ",93:"Windows Menu"},computeKey:{106:"multiply ",107:"add",109:"subtract ",111:"divide "}},s=r({},i.Util,o,{getTypeAndChar:function getTypeAndChar(t){t=""+t;var e=void 0;for(var n in u){for(var r in e=n,u[n]){if(r===t)return{type:e,character:u[n][r]};}}return{};},getKeyboradKey:function getKeyboradKey(t){return t.key||s.getTypeAndChar(t.keyCode).character;},getIndex:function getIndex(t){return t.getParent().get("children").indexOf(t);},setId:function setId(t){t.id||(t.id=i.Util.guid());},pointLineDistance:function pointLineDistance(t,e,n,r,o,a){var u=[n-t,r-e];if(i.Util.vec2.exactEquals(u,[0,0]))return NaN;var s=[-u[1],u[0]];i.Util.vec2.normalize(s,s);var c=[o-t,a-e];return Math.abs(i.Util.vec2.dot(c,s));},getRectByBox:function getRectByBox(t,e,n){return e.addShape("rect",{attrs:r({},n,{x:t.minX,y:t.minY,width:t.maxX-t.minX,height:t.maxY-t.minY})});},objectToValues:function objectToValues(t){var e=[],n=void 0;for(n in t){t.hasOwnProperty(n)&&e.push(t[n]);}return e;},getValue:function getValue(t){return i.Util.isFunction(t)?t():t;},getContrast:function getContrast(t,e){var n={};return i.Util.each(e,function(e,r){n[r]=t[r];}),n;},arrowTo:function arrowTo(t,e,n,r,o,a,u){var s=[a-r,u-o],c=i.Util.vec2.angleTo(s,[1,0],!0);return t.transform([["r",c],["t",e,n]]),t;},setEndOfContenteditable:function setEndOfContenteditable(t){var e=void 0,n=void 0;document.createRange?((e=document.createRange()).selectNodeContents(t),e.collapse(!1),(n=window.getSelection()).removeAllRanges(),n.addRange(e)):document.selection&&((e=document.body.createTextRange()).moveToElementText(t),e.collapse(!1),e.select());},matches:function matches(t,e){return(Element.prototype.matches||Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),n=e.length;--n>=0&&e.item(n)!==this;){}return n>-1;}).call(t,e);},delegateEvent:function delegateEvent(t,e,n,r){return s.addEventListener(t,e,function(e){for(var i=e.target||e.srcElement;i!==t;){s.matches(i,n)&&r.call(i,Array.prototype.slice.call(arguments)),i=i.parentNode;}});},Palettes:a});t.exports=s;},,,function(t,e,n){var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n){Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}}return t;},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e;};}(),a=function t(e,n,r){null===e&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,n);if(void 0===i){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,n,r);}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(r):void 0;},u=n(34),s=n(12),c=n(36),f=n(141),l=[],h=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,e);var n={showHotArea:!1,defaultData:{roots:[{label:"思维导图",children:[{label:"新建节点"},{label:"新建节点"},{label:"新建节点"}]}]},shortcut:{append:!0,appendChild:!0,collapseExpand:!0,selectAll:!0},labelEditable:!0,graph:{modes:{default:["clickNodeSelected","keydownMoveSelection","clickCanvasSelected","hoverMindExpandButton","keydownEditLabel","panBlank","wheelPanCanvas","panMindNode","clickCollapsedButton","clickExpandedButton","hoverButton","hoverNodeActived","dblclickItemEditLabel"],readOnly:["clickNodeSelected","wheelPanCanvas","keydownMoveSelection","hoverNodeActived","panCanvas","clickExpandedButton","hoverButton","clickCanvasSelected"]},layout:new u.Layouts.Mindmap({direction:"H",getSubTreeSep:function getSubTreeSep(t){return t.children&&t.children.length>0?t.hierarchy<=2?8:2:0;},getHGap:function getHGap(t){return 1===t.hierarchy?8:2===t.hierarchy?24:18;},getVGap:function getVGap(t){return 1===t.hierarchy?24:2===t.hierarchy?24:2;},getSide:function getSide(t){return t.data.side?t.data.side:"right";}}),mode:"default",defaultIntersectBox:"rect",nodeDefaultShape:f.nodeDefaultShape,edgeDefaultShape:f.edgeDefaultShape,minZoom:.2,maxZoom:2},align:{item:!1},rootShape:"mind-root",firstSubShape:"mind-first-sub",secondSubShape:"mind-second-sub",subShape:"mind-node",nodeDefaultShape:"mind-node",graphConstructor:u.Tree,defaultSide:"right"},r={};c.each(l,function(t){c.mix(r,t.CFG);}),c.mix(!0,n,r,t);var i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(void 0===e?"undefined":o(e))&&"function"!=typeof e?t:e;}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n));return i.isMind=!0,i;}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":o(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}(e,s),i(e,[{key:"_init",value:function value(){var t=this;a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"_init",this).call(this),c.each(l,function(e){e.INIT&&t[e.INIT]();});var n=this.getGraph(),r=this.get("defaultData"),i=n.get("mode");if(this.set("hotAreaGroup",n.getFrontRootGroup().addGroup()),n.edge().shape(function(t){if(n.find(t.target).getModel().isPlaceholder)return"mind-placeholder-edge";}),r&&this.read(r),"default"===i){if(r){var o=this.getRoot(),u=n.find(o.id);this.setSelected(u,!0);}}else if("readOnly"===i){var s=this.get("shortcut");s.append=!1,s.appendChild=!1,s.selectAll=!1,s.delete=!1;}if(r){var f=this.getRoot();this.focus(f.id);}}},{key:"bindEvent",value:function value(){var t=this;a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"bindEvent",this).call(this);var n=this.get("_graph");n.on("keydown",function(t){t.domEvent.preventDefault();}),n.on("beforechange",function(e){"add"===e.action?t._beforeAdd(e):"changeData"===e.action&&t._beforeChangeData(e);}),n.on("aftersource",function(){t._setHierarchy();}),n.on("afterchange",function(){t._setHotArea();}),n.on("afteritemdraw",function(t){var e=t.item,n=e.getModel();if(e.isEdge){var r=e.getGraphicGroup();c.toBack(r,r.getParent()),r.setSilent("capture",!1);}n.parent||(e.isRoot=!0,e.deleteable=!1,e.collapseExpand=!1,e.appendable=!1,e.dragable=!1);}),this.on("beforedelete",function(e){var n=e.items[0],r=t._getBrothers(n),i=t._getNth(n);r[i-1]?t.setSelected(r[i-1].id,!0):r[i+1]?t.setSelected(r[i+1].id,!0):t.setSelected(n.getParent(),!0);}),this.on("afteritemselected",function(e){t._tryAdjustViewport(e.item);});}},{key:"getRoot",value:function value(){return this.getGraph().getSource().roots[0];}},{key:"getDelegation",value:function value(t,e){var n=t[0],r=n.getKeyShape(),i=r.get("canvas"),o=i.get("context"),a=n.getBBox(),u=r.get("totalMatrix"),s=c.getBBox(r,u||i),f=c.createDOM("<canvas>"),l=f.getContext("2d"),h=s.maxX-s.minX,d=s.maxY-s.minY,p=[2.5,2.5,2.5,4];f.setAttribute("width",h),f.setAttribute("height",d);var g=o.getImageData(s.minX+p[3],s.minY+p[0],h-p[1]-p[3],d-p[0]-p[2]);return l.putImageData(g,0,0),e.addShape("image",{attrs:{x:a.minX,y:a.minY,width:a.width,height:a.height,swidth:h,sheight:d,img:f,opacity:.5}});}},{key:"_setHierarchy",value:function value(t){var e=this.getGraph(),n=this.get("firstSubShape"),r=this.get("secondSubShape"),i=this.get("defaultSide");if(t){var o=e.find(t.parent);if(o){var a=o.getModel();t.hierarchy=a.hierarchy+1,"mind-placeholder"!==t.shape&&(2===t.hierarchy&&(t.shape=n,t.side||(t.side=i)),3===t.hierarchy&&(t.shape=r));}}else(t=this.getRoot()).hierarchy=1;c.traverseTree(t,function(t,e){t.hierarchy=e.hierarchy+1,t.side||(t.side=i),e.side&&(t.side=e.side),2===t.hierarchy?t.shape=n:3===t.hierarchy&&(t.shape=r);},function(t){return t.children;});}},{key:"getFirstChildrenBySide",value:function value(t){var e=[];return this.getRoot().children.forEach(function(n){n.side===t&&e.push(n);}),e;}},{key:"_getNth",value:function value(t){return this.getGraph().getNth(t);}},{key:"_getBrothers",value:function value(t){return t.getParent().getModel().children;}},{key:"_getMoveChildModel",value:function value(t){if(t&&t.length>0){var e=t.length;return t[parseInt(e/2)];}}},{key:"_getVerticalMoveItem",value:function value(t,e,n){for(var r=this.getGraph().getNodes(),i=t.getBBox(),o=[i.minX,i.maxX],a=[],u=void 0,s=0;s<o.length;s++){for(var c=o[s],f=0;f<r.length;f++){var l=r[f],h=l.getBBox();e(h,i,c)&&a.push({long:n(h,i),node:l});}}return a.length>0&&(a.sort(function(t,e){return t.long-e.long;}),u=a[0].node),u;}},{key:"_arrowTopItem",value:function value(t){var e=this._getBrothers(t),n=this._getNth(t);return e[n-1]?e[n-1]:this._getVerticalMoveItem(t,function(t,e,n){return t.centerY<e.centerY&&n<=t.maxX&&n>=t.minX;},function(t,e){return e.centerY-t.centerY;});}},{key:"_arrowBottomItem",value:function value(t){var e=this._getBrothers(t),n=this._getNth(t);return e[n+1]?e[n+1]:this._getVerticalMoveItem(t,function(t,e,n){return t.centerY>e.centerY&&n<=t.maxX&&n>=t.minX;},function(t,e){return t.centerY-e.centerY;});}},{key:"_arrowLeftItem",value:function value(t){var e=c.getMindNodeSide(t);if(t.isRoot){var n=this.getFirstChildrenBySide("left");return this._getMoveChildModel(n);}if("left"===e){var r=t.getModel().children;return this._getMoveChildModel(r);}return t.getParent();}},{key:"_arrowRightItem",value:function value(t){var e=c.getMindNodeSide(t);if(t.isRoot){var n=this.getFirstChildrenBySide("right");return this._getMoveChildModel(n);}if("right"===e){var r=t.getModel().children;return this._getMoveChildModel(r);}return t.getParent();}},{key:"_moveItemSelection",value:function value(t){var e=this.getGraph(),n=this.getSelected()[0];if(n){var r=t.domEvent,i=c.getKeyboradKey(r),o=void 0;"ArrowUp"!==i||n.isRoot?"ArrowDown"!==i||n.isRoot?"ArrowLeft"===i?o=this._arrowLeftItem(n):"ArrowRight"===i&&(o=this._arrowRightItem(n)):o=this._arrowBottomItem(n):o=this._arrowTopItem(n),o&&(o=e.find(o.id)).isVisible()&&(this.clearSelected(),this.setSelected(o,!0));}}},{key:"showLabelEditor",value:function value(t){var e=t.domEvent,n=this.getSelected()[0],r=c.getKeyboradKey(e);if(n&&1===r.length&&!e.metaKey&&!e.ctrlKey){var i=this.get("labelTextArea");n&&(this.beginEditLabel(n),i.innerHTML=r,c.setEndOfContenteditable(i));}}},{key:"_tryAdjustViewport",value:function value(t){var e=this.get("_graph"),n=t.getBBox(),r={x:n.minX,y:n.minY},i={x:n.maxX,y:n.maxY},o=e.getDomPoint(r),a=e.getDomPoint(i),u=e.getWidth(),s=e.getHeight();o.x<0&&e.translate(16-o.x,0),o.y<0&&e.translate(0,16-o.y),a.x>u&&e.translate(u-a.x-16,0),a.y>s&&e.translate(0,s-a.y-16);}},{key:"_beforeChangeData",value:function value(t){var e=t.data.roots[0],n=this.get("rootShape");e.shape=n,this._setHierarchy(e);}},{key:"_beforeAdd",value:function value(t){var e=this.get("_graph"),n=t.model,r=e.find(n.parent);r.getModel().collapsed&&e.update(r,{collapsed:!1}),this._setHierarchy(n);}},{key:"_drawHotAreaShape",value:function value(){var t=this.get("_graph").getFrontCanvas(),e=this.get("hotAreaGroup"),n=this.get("hotAreas");e.clear(),n.forEach(function(t){e.addShape("rect",{attrs:{x:t.minX,y:t.minY,width:t.maxX-t.minX,height:t.maxY-t.minY,fill:t.color,fillOpacity:.4},capture:!1});}),t.draw();}},{key:"_setHotArea",value:function value(){var t=[],e=this.get("_graph"),n=this.getRoot(),i="placeholder",o=this.get("showHotArea"),a=e.find(n.id).getBBox();t.push({minX:a.minX-90,minY:a.minY-60,maxX:(a.minX+a.maxX)/2,maxY:a.maxY+60,parent:n,current:n,id:n.id+"left"+i,nth:n.children.length,side:"left",color:"orange"}),t.push({minX:(a.minX+a.maxX)/2,minY:a.minY-60,maxX:a.maxX+90,maxY:a.maxY+60,parent:n,current:n,id:n.id+"right"+i,nth:n.children.length,side:"right",color:"pink"}),c.traverseTree(n,function(n,o,a){var u=e.find(n.id);if(!n.isPlaceholder&&u&&u.isVisible()){var s=function(t,e,n){var r=n.children,i=t;if(!n.parent)for(;r[i]&&r[i].side!==e.side;){i++;}for(;r[i]&&r[i].isPlaceholder;){i++;}if(r[i]&&r[i].side===e.side)return r[i];}(a+1,n,o),c=function(t,e,n){var r=n.children,i=t;if(!n.parent)for(;r[i]&&r[i].side!==e.side;){i--;}for(;r[i]&&r[i].isPlaceholder;){i--;}if(r[i]&&r[i].side===e.side)return r[i];}(a-1,n,o),f=e.find(n.id).getBBox(),l=o.children,h=2===n.hierarchy&&"right"===n.side,d=2===n.hierarchy&&"left"===n.side;if(c||t.push({minX:h?f.minX-90:f.minX,minY:function(){var t=c?f.minY:f.minY-16;return l[a-1]&&l[a-1].isPlaceholder&&l[a-1].side===n.side&&(t=e.find(l[a-1].id).getBBox().minY),t;}(),maxX:d?f.maxX+90:f.maxX,maxY:(f.minY+f.maxY)/2,parent:o,id:(c?c.id:void 0)+n.id+o.id+i,side:n.side,color:"yellow",nth:a}),s){var p=e.find(s.id).getBBox();t.push({minX:"left"===n.side?Math.max(f.minX,p.minX):h?f.minX-90:f.minX,minY:(f.minY+f.maxY)/2,maxX:"right"===n.side?Math.min(f.maxX,p.maxX):d?f.maxX+90:f.maxX,maxY:(p.minY+p.maxY)/2,parent:o,id:n.id+(s?s.id:void 0)+o.id+i,side:n.side,color:"blue",nth:a+1});}else t.push({minX:h?f.minX-90:f.minX,minY:(f.minY+f.maxY)/2,maxX:d?f.maxX+90:f.maxX,maxY:function(){var t=f.maxY+16;return l[a+1]&&l[a+1].isPlaceholder&&l[a+1].side===n.side&&(t=e.find(l[a+1].id).getBBox().maxY),t;}(),parent:o,id:n.id+void 0+o.id+i,color:"red",nth:a+1,addOrder:"push",side:n.side});if(!n.children||0===n.children.length||1===n.children.length&&n.children[0].isPlaceholder){var g=void 0;g=n.x>o.x?{minX:f.maxX,minY:f.minY-0,maxX:f.maxX+100,maxY:f.maxY+0}:{minX:f.minX-100,minY:f.minY-0,maxX:f.minX,maxY:f.maxY+0},t.push(r({},g,{parent:n,id:NaN+n.id+i,nth:0,color:"green",side:n.side,addOrder:"push"}));}}},function(t){return t.children;}),this.set("hotAreas",t),o&&this._drawHotAreaShape();}},{key:"hideHotArea",value:function value(){var t=this.get("_graph").getFrontCanvas();this.get("hotAreaGroup").clear(),t.draw(),this.set("showHotArea",!1);}},{key:"showHotArea",value:function value(){this._drawHotAreaShape(),this.set("showHotArea",!0);}},{key:"getHotArea",value:function value(t){var e=void 0;return this.get("hotAreas").forEach(function(n){if(t.x>n.minX&&t.x<n.maxX&&t.y>n.minY&&t.y<n.maxY)return e=n,!1;}),e;}},{key:"saveExpandImage",value:function value(){var t=this,e=this.getGraph(),n=e.getBBox(),r=e.getFitViewPadding(),i=void 0,o=void 0,a=void 0;return c.graph2Canvas({graph:e,width:n.width+r[1]+r[3],height:n.height+r[0]+r[2],beforeTransform:function beforeTransform(){var n=e.getNodes();(i=n.filter(function(t){return t.getModel().collapsed;}).map(function(t){return t.getModel().id;})).forEach(function(t){e.update(t,{collapsed:!1});}),e.layout(),o=t.getSelected().map(function(t){return t.id;}),a=t.getSelected().map(function(t){return t.id;}),t.clearSelected(),t.clearActived();},afterTransform:function afterTransform(){i.forEach(function(t){e.update(t,{collapsed:!0});}),t.setSelected(o,!0),t.setActived(a,!0);}});}},{key:"save",value:function value(){var t=this.get("_graph").save();return t.roots.forEach(function(t){c.traverseTree(t,function(t){delete t.x,delete t.y,delete t.width,delete t.height,delete t.parent,delete t.nth,delete t.hierarchy,delete t.index,delete t.shape;},function(t){return t.children;},!0);}),t;}}]),e;}();c.each(l,function(t){c.mix(h.prototype,t.AUGMENT);}),t.exports=h;},function(t,e,n){var r=n(177),i=n(148),o=n(38),a=n(98),u=n(21),s={Graph:n(147),Tree:n(351),Util:n(11),Layouts:n(144),G:u,Plugins:{},Global:o,Shape:r,registerNode:r.registerNode,registerEdge:r.registerEdge,registerGroup:r.registerGroup,registerGuide:r.registerGuide,registerBehaviour:i.registerBehaviour,version:a,getG:function getG(){return n(21);},track:function track(t){o.trackable=t;}};n(346),t.exports=s;},,function(t,e,n){var r=(Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n){Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}}return t;})({},n(18),{getMindNodeSide:function getMindNodeSide(t){var e=t.getModel();if(e.side)return e.side;var n=t.getParent();return n?n.getModel().side?n.getModel().side:r.getMindNodeSide(n):void 0;}});t.exports=r;},function(t,e,n){var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e;};}(),i=n(34).Util,o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,t);var n=this.getDefaultCfg();i.mix(this,n,e),this.init();}return r(t,[{key:"getDefaultCfg",value:function value(){return{};}}]),r(t,[{key:"init",value:function value(){}},{key:"destroy",value:function value(){}}]),t;}();t.exports=o;},function(t,e,n){var r=n(98);t.exports={trackable:!0,defaultNodeSize:40,labelStyle:{fill:"#595959",textAlign:"center",textBaseline:"middle"},groupStyle:{stroke:"#CED4D9",fill:"#F2F4F5",radius:2},groupBackgroundPadding:[40,10,10,10],updateDuration:450,enterDuration:450,leaveDuration:450,updateEasing:"easeQuadOut",enterEasing:"easeQuadOut",leaveEasing:"easeQuadOut",version:r};},function(t,e,n){var r=n(464),i=n(461);t.exports=function(t,e){var n=i(t,e);return r(n)?n:void 0;};},function(t,e){var n,r="function"==typeof Symbol&&"symbol"==o(Symbol.iterator)?function(t){return void 0===t?"undefined":o(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":o(t);};n=function(){return this;}();try{n=n||Function("return this")()||(0,eval)("this");}catch(t){"object"===("undefined"==typeof window?"undefined":r(window))&&(n=window);}t.exports=n;},,,,function(t,e,n){var r=n(54),i=n(483),o=n(482),a=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?i(t):o(t);};},,function(t,e,n){function r(t,e,n){for(var a in n=n||0,e){if(e.hasOwnProperty(a)){var u=e[a];null!==u&&o.isPlainObject(u)?(o.isPlainObject(t[a])||(t[a]={}),n<i?r(t[a],e[a],n+1):t[a]=e[a]):o.isArray(u)?(t[a]=[],t[a]=t[a].concat(u)):void 0!==u&&(t[a]=e[a]);}}}var i=5,o=(Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n){Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}}return t;})({},n(21).CommonUtil,{lowerFirst:n(490),isPlainObject:n(204),indexOf:n(481),cloneDeep:n(476),round:n(421),filter:n(419),throttle:n(394),debounce:n(150),uniq:n(392),traverseTree:function traverseTree(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=n(t);r&&e(t,null,null),i&&o.each(i,function(r,i){e(r,t,i),o.traverseTree(r,e,n);});},toAllPadding:function toAllPadding(t){var e=0,n=0,r=0,i=0;return o.isNumber(t)||o.isString(t)?e=n=r=i=t:o.isArray(t)&&(e=t[0],r=o.isNil(t[1])?t[0]:t[1],i=o.isNil(t[2])?t[0]:t[2],n=o.isNil(t[3])?r:t[3]),[e,r,i,n];},guid:function guid(){return"xxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16);});},mix:function mix(){var t=o.toArray(arguments),e=t[0],n=void 0,i=void 0;if(!0===e)for(e=t[1],i=2;i<t.length;i++){r(e,n=t[i]);}else for(i=1;i<t.length;i++){for(var a in n=t[i]){n.hasOwnProperty(a)&&"constructor"!==a&&(e[a]=n[a]);}}return e;},mixin:function mixin(t,e){t&&e&&(t._mixins=e,t.ATTRS=t.ATTRS||{},o.each(e,function(e){o.augment(t,e);}),t.ATTRS=o.mix({},t.ATTRS));}});o.Array={remove:function remove(t,e){var n=o.indexOf(t,e);-1!==n&&t.splice(n,1);}},t.exports=o;},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function get(){return t.l;}}),Object.defineProperty(t,"id",{enumerable:!0,get:function get(){return t.i;}}),t.webpackPolyfill=1),t;};},function(t,e,n){var r=n(11),i={},o={draw:function draw(){}},a={defaultShapeType:null,getShape:function getShape(t,e){return this[t]||this[e]||this[this.defaultShapeType]||o;},getExtendShape:function getExtendShape(t,e){var n=this;if(r.isArray(t)){var i={};return t.forEach(function(t){i=r.mix({},i,n.getShape(t,e));}),i;}return this.getShape(t,e);}};i.registerShapeManager=function(t,e){var n=r.mix({},a,e),o=r.upperFirst(t);return i[o]=n,i["register"+o]=function(t,e,i,o){r.isNil(i)&&r.isNil(o)&&(i=t);var a=n.getExtendShape(i,o),u=r.mix(!0,{},a,e);return u.type=t,n[t]=u,u;},n;},t.exports=i;},,,,,function(t,e,n){var r=n(169),i=n(442),o=n(64);t.exports=function(t){return o(t)?r(t):i(t);};},function(t,e,n){var r=n(24).Symbol;t.exports=r;},,,,,,,,function(t,e,n){var r=n(77);t.exports=function(t){if("string"==typeof t||r(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e;};},function(t,e,n){var r=n(434),i=n(109),o=n(433),a=n(161),u=n(432),s=n(44),c=n(170),f=c(r),l=c(i),h=c(o),d=c(a),p=c(u),g=s;(r&&"[object DataView]"!=g(new r(new ArrayBuffer(1)))||i&&"[object Map]"!=g(new i())||o&&"[object Promise]"!=g(o.resolve())||a&&"[object Set]"!=g(new a())||u&&"[object WeakMap]"!=g(new u()))&&(g=function g(t){var e=s(t),n="[object Object]"==e?t.constructor:void 0,r=n?c(n):"";if(r)switch(r){case f:return"[object DataView]";case l:return"[object Map]";case h:return"[object Promise]";case d:return"[object Set]";case p:return"[object WeakMap]";}return e;}),t.exports=g;},function(t,e,n){var r=n(130),i=n(106);t.exports=function(t){return null!=t&&i(t.length)&&!r(t);};},function(t,e,n){var r=n(129),i=n(128);t.exports=function(t,e,n,o){var a=!n;n||(n={});for(var u=-1,s=e.length;++u<s;){var c=e[u],f=o?o(n[c],t[c],c,n,t):void 0;void 0===f&&(f=t[c]),a?i(n,c,f):r(n,c,f);}return n;};},,function(t,e){t.exports={gridStyle:{stroke:"#A3B1BF",lineWidth:.5},cursor:{panningCanvas:"-webkit-grabbing",beforePanCanvas:"-webkit-grab"},wheelPanRatio:.3,alignLineStyle:{stroke:"#FA8C16",lineWidth:1}};},function(t,e,n){var r=n(96);n(342),n(341),t.exports=r;},function(t,e,n){var r=function(t){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(void 0===e?"undefined":o(e))&&"function"!=typeof e?t:e;}(this,t.call(this));return r.options=n,r;}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":o(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}(e,t),e.prototype.execute=function(){var t=this,e=this.options;this.roots.forEach(function(n){t.layout(n,e).eachNode(function(t){t.data.x=t.x+t.data.width/2+t.hgap,t.data.y=t.y+t.data.height/2+t.vgap;});});},e;}(n(143));t.exports=r;},function(t,e,n){(function(t){var n,r,i,a="function"==typeof Symbol&&"symbol"==o(Symbol.iterator)?function(t){return void 0===t?"undefined":o(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":o(t);};!function(o,u){"object"===a(e)&&"object"===a(t)?t.exports=u():(r=[],void 0===(i="function"==typeof(n=u)?n.apply(e,r):n)||(t.exports=i));}("undefined"!=typeof self&&self,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports;}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r});},e.n=function(t){var n=t&&t.__esModule?function(){return t.default;}:function(){return t;};return e.d(n,"a",n),n;},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e);},e.p="",e(e.s=4);}([function(t,e,n){var r=n(2),i=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,t),this.options=n,this.rootNode=r(e,n);}return t.prototype.execute=function(){throw new Error("please override this method");},t;}();t.exports=i;},function(t,e,n){var r=n(3),i=["LR","RL","TB","BT","H","V"],o=["LR","RL","H"],a=i[0];t.exports=function(t,e,n){var u=e.direction||a;if(e.isHorizontal=function(t){return o.indexOf(t)>-1;}(u),u&&-1===i.indexOf(u))throw new TypeError("Invalid direction: "+u);if(u===i[0])n(t,e);else if(u===i[1])n(t,e),t.right2left();else if(u===i[2])n(t,e);else if(u===i[3])n(t,e),t.bottom2top();else if(u===i[4]||u===i[5]){var s=r(t,e),c=s.left,f=s.right;n(c,e),n(f,e),e.isHorizontal?c.right2left():c.bottom2top(),f.translate(c.x-f.x,c.y-f.y),t.x=c.x,t.y=f.y;var l=t.getBoundingBox();e.isHorizontal?l.top<0&&t.translate(0,-l.top):l.left<0&&t.translate(-l.left,0);}return t.translate(-(t.x+t.width/2+t.hgap),-(t.y+t.height/2+t.vgap)),t;};},function(t,e){function n(t,e){var r=this;if(r.vgap=r.hgap=0,t instanceof n)return t;r.data=t;var i=e.getHGap(t),o=e.getVGap(t);return r.width=e.getWidth(t),r.height=e.getHeight(t),r.id=e.getId(t),r.x=r.y=0,r.depth=0,r.children||(r.children=[]),r.addGap(i,o),r;}var r={getId:function getId(t){return t.id||t.name;},getHGap:function getHGap(t){return t.hgap||18;},getVGap:function getVGap(t){return t.vgap||18;},getChildren:function getChildren(t){return t.children;},getHeight:function getHeight(t){return t.height||36;},getWidth:function getWidth(t){var e=t.name||" ";return t.width||18*e.split("").length;}};Object.assign(n.prototype,{isRoot:function isRoot(){return 0===this.depth;},isLeaf:function isLeaf(){return 0===this.children.length;},addGap:function addGap(t,e){this.hgap+=t,this.vgap+=e,this.width+=2*t,this.height+=2*e;},eachNode:function eachNode(t){for(var e=[this],n=void 0;n=e.pop();){t(n),e=e.concat(n.children);}},DFTraverse:function DFTraverse(t){this.eachNode(t);},BFTraverse:function BFTraverse(t){for(var e=[this],n=void 0;n=e.shift();){t(n),e=e.concat(n.children);}},getBoundingBox:function getBoundingBox(){var t={left:Number.MAX_VALUE,top:Number.MAX_VALUE,width:0,height:0};return this.eachNode(function(e){t.left=Math.min(t.left,e.x),t.top=Math.min(t.top,e.y),t.width=Math.max(t.width,e.x+e.width),t.height=Math.max(t.height,e.y+e.height);}),t;},translate:function translate(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.eachNode(function(n){n.x+=t,n.y+=e;});},right2left:function right2left(){var t=this.getBoundingBox();this.eachNode(function(e){e.x=e.x-2*(e.x-t.left)-e.width;}),this.translate(t.width,0);},bottom2top:function bottom2top(){var t=this.getBoundingBox();this.eachNode(function(e){e.y=e.y-2*(e.y-t.top)-e.height;}),this.translate(0,t.height);}}),t.exports=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments[2],o=new n(t,e=Object.assign({},r,e)),a=[o],u=void 0;if(!i&&!t.collapsed)for(;u=a.pop();){if(!u.data.collapsed){var s=e.getChildren(u.data),c=s?s.length:0;if(u.children=new Array(c),s&&c)for(var f=0;f<c;f++){var l=new n(s[f],e);u.children[f]=l,a.push(l),l.parent=u,l.depth=u.depth+1;}}}return o;};},function(t,e,n){var r=n(2);t.exports=function(t,e){for(var n=r(t.data,e,!0),i=r(t.data,e,!0),o=t.children.length,a=Math.round(o/2),u=e.getSide||function(t,e){return e<a?"right":"left";},s=0;s<o;s++){var c=t.children[s];"right"===u(c,s)?i.children.push(c):n.children.push(c);}return n.eachNode(function(t){t.isRoot()||(t.side="left");}),i.eachNode(function(t){t.isRoot()||(t.side="right");}),{left:n,right:i};};},function(t,e,n){var r={compactBox:n(5),dendrogram:n(7),indented:n(9),mindmap:n(11)};t.exports=r;},function(t,e,n){var r=n(0),i=n(6),o=n(1),u=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":a(e))&&"function"!=typeof e?t:e;}(this,t.apply(this,arguments));}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":a(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}(e,t),e.prototype.execute=function(){return o(this.rootNode,this.options,i);},e;}(r),s={};t.exports=function(t,e){return e=Object.assign({},s,e),new u(t,e).execute();};},function(t,e){function n(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=this;i.w=t||0,i.h=e||0,i.y=n||0,i.x=0,i.c=r||[],i.cs=r.length,i.prelim=0,i.mod=0,i.shift=0,i.change=0,i.tl=null,i.tr=null,i.el=null,i.er=null,i.msel=0,i.mser=0;}function r(t,e){!function t(e,n,r){r?e.y+=n:e.x+=n,e.children.forEach(function(e){t(e,n,r);});}(t,-function t(e,n){var r=n?e.y:e.x;return e.children.forEach(function(e){r=Math.min(t(e,n),r);}),r;}(t,e),e);}n.fromNode=function(t,e){if(!t)return null;var r=[];return t.children.forEach(function(t){r.push(n.fromNode(t,e));}),e?new n(t.height,t.width,t.x,r):new n(t.width,t.height,t.y,r);},t.exports=function(t){function e(t){0===t.cs?(t.el=t,t.er=t,t.msel=t.mser=0):(t.el=t.c[0].el,t.msel=t.c[0].msel,t.er=t.c[t.cs-1].er,t.mser=t.c[t.cs-1].mser);}function i(t,e,n){for(var r=t.c[e-1],i=r.mod,c=t.c[e],f=c.mod;null!==r&&null!==c;){s(r)>n.low&&(n=n.nxt);var l=i+r.prelim+r.w-(f+c.prelim);l>0&&(f+=l,o(t,e,n.index,l));var h=s(r),d=s(c);h<=d&&null!==(r=u(r))&&(i+=r.mod),h>=d&&null!==(c=a(c))&&(f+=c.mod);}!r&&c?function(t,e,n,r){var i=t.c[0].el;i.tl=n;var o=r-n.mod-t.c[0].msel;i.mod+=o,i.prelim-=o,t.c[0].el=t.c[e].el,t.c[0].msel=t.c[e].msel;}(t,e,c,f):r&&!c&&function(t,e,n,r){var i=t.c[e].er;i.tr=n;var o=r-n.mod-t.c[e].mser;i.mod+=o,i.prelim-=o,t.c[e].er=t.c[e-1].er,t.c[e].mser=t.c[e-1].mser;}(t,e,r,i);}function o(t,e,n,r){t.c[e].mod+=r,t.c[e].msel+=r,t.c[e].mser+=r,function(t,e,n,r){if(n!==e-1){var i=e-n;t.c[n+1].shift+=r/i,t.c[e].shift-=r/i,t.c[e].change-=r-r/i;}}(t,e,n,r);}function a(t){return 0===t.cs?t.tl:t.c[0];}function u(t){return 0===t.cs?t.tr:t.c[t.cs-1];}function s(t){return t.y+t.h;}function c(t,e,n){for(;null!==n&&t>=n.low;){n=n.nxt;}return{low:t,index:e,nxt:n};}var f=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isHorizontal;!function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;n?(e.x=r,r+=e.width):(e.y=r,r+=e.height),e.children.forEach(function(e){t(e,n,r);});}(t,f);var l=n.fromNode(t,f);return function t(n){if(0!==n.cs){t(n.c[0]);for(var r=c(s(n.c[0].el),0,null),o=1;o<n.cs;++o){t(n.c[o]);var a=s(n.c[o].er);i(n,o,r),r=c(a,o,r);}!function(t){t.prelim=(t.c[0].prelim+t.c[0].mod+t.c[t.cs-1].mod+t.c[t.cs-1].prelim+t.c[t.cs-1].w)/2-t.w/2;}(n),e(n);}else e(n);}(l),function t(e,n){n+=e.mod,e.x=e.prelim+n,function(t){for(var e=0,n=0,r=0;r<t.cs;r++){e+=t.c[r].shift,n+=e+t.c[r].change,t.c[r].mod+=n;}}(e);for(var r=0;r<e.cs;r++){t(e.c[r],n);}}(l,0),function t(e,n,r){r?n.y=e.x:n.x=e.x,e.c.forEach(function(e,i){t(e,n.children[i],r);});}(l,t,f),r(t,f),t;};},function(t,e,n){var r=n(0),i=n(8),o=n(1),u=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":a(e))&&"function"!=typeof e?t:e;}(this,t.apply(this,arguments));}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":a(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}(e,t),e.prototype.execute=function(){return this.rootNode.width=0,o(this.rootNode,this.options,i);},e;}(r),s={};t.exports=function(t,e){return e=Object.assign({},s,e),new u(t,e).execute();};},function(t,e){var n={isHorizontal:!0,nodeSep:20,nodeSize:20,rankSep:200,subTreeSep:10};t.exports=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e=Object.assign({},n,e);var r=0,i=void 0,o=function t(e){if(!e)return null;e.width=0,e.depth&&e.depth>r&&(r=e.depth);var n=e.children,i=n.length,o=new function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],e=this;e.x=e.y=0,e.leftChild=e.rightChild=null,e.height=0,e.children=t;}(e.height,[]);return n.forEach(function(e,n){var r=t(e);o.children.push(r),0===n&&(o.leftChild=r),n===i-1&&(o.rightChild=r);}),o.originNode=e,o.isLeaf=e.isLeaf(),o;}(t);return function t(e){if(e.isLeaf||0===e.children.length)e.drawingDepth=r;else{var n=e.children.map(function(e){return t(e);}),i=Math.min.apply(null,n);e.drawingDepth=i-1;}return e.drawingDepth;}(o),function t(n){n.x=n.drawingDepth*e.rankSep,n.isLeaf?(n.y=0,i&&(n.y=i.y+i.height+e.nodeSep,n.originNode.parent!==i.originNode.parent&&(n.y+=e.subTreeSep)),i=n):(n.children.forEach(function(e){t(e);}),n.y=(n.leftChild.y+n.rightChild.y)/2);}(o),function t(e,n,r){r?(n.x=e.x,n.y=e.y):(n.x=e.y,n.y=e.x),e.children.forEach(function(e,i){t(e,n.children[i],r);});}(o,t,e.isHorizontal),t;};},function(t,e,n){var r=n(0),i=n(10),o=n(3),u=["LR","RL","H"],s=u[0],c=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":a(e))&&"function"!=typeof e?t:e;}(this,t.apply(this,arguments));}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":a(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}(e,t),e.prototype.execute=function(){var t=this.options,e=this.rootNode;t.isHorizontal=!0;var n=t.indent,r=t.direction||s;if(r&&-1===u.indexOf(r))throw new TypeError("Invalid direction: "+r);if(r===u[0])i(e,n);else if(r===u[1])i(e,n),e.right2left();else if(r===u[2]){var a=o(e,t),c=a.left,f=a.right;i(c,n),c.right2left(),i(f,n);var l=c.getBoundingBox();f.translate(l.width,0),e.x=f.x-e.width/2;}return e;},e;}(r),f={};t.exports=function(t,e){return e=Object.assign({},f,e),new c(t,e).execute();};},function(t,e){t.exports=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,n=null;t.eachNode(function(t){!function(t,e,n){t.x+=n*t.depth,t.y=e?e.y+e.height:0;}(t,n,e),n=t;});};},function(t,e,n){var r=n(0),i=n(12),o=n(1),u=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":a(e))&&"function"!=typeof e?t:e;}(this,t.apply(this,arguments));}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":a(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}(e,t),e.prototype.execute=function(){return o(this.rootNode,this.options,i);},e;}(r),s={};t.exports=function(t,e){return e=Object.assign({},s,e),new u(t,e).execute();};},function(t,e){var n={getSubTreeSep:function getSubTreeSep(){return 0;}};t.exports=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e=Object.assign({},n,e),t.parent={x:0,width:0,height:0,y:0},t.BFTraverse(function(t){t.x=t.parent.x+t.parent.width;}),t.parent=null,function t(e,n){var r=0;return e.children.length?e.children.forEach(function(e){r+=t(e,n);}):r=e.height,e._subTreeSep=n.getSubTreeSep(e.data),e.totalHeight=Math.max(e.height,r)+2*e._subTreeSep,e.totalHeight;}(t,e),t.startY=0,t.y=t.totalHeight/2-t.height/2,t.eachNode(function(t){var e=t.children,n=e.length;if(n){var r=e[0];if(r.startY=t.startY+t._subTreeSep,1===n)r.y=t.y+t.height/2-r.height/2;else{r.y=r.startY+r.totalHeight/2-r.height/2;for(var i=1;i<n;i++){var o=e[i];o.startY=e[i-1].startY+e[i-1].totalHeight,o.y=o.startY+o.totalHeight/2-o.height/2;}}}}),function t(e){var n=e.children,r=n.length;if(r){n.forEach(function(e){t(e);});var i=n[0],o=n[r-1],a=o.y-i.y+o.height,u=0;if(n.forEach(function(t){u+=t.totalHeight;}),a>e.height)e.y=i.y+a/2-e.height/2;else if(1!==n.length||e.height>u){var s=e.y+(e.height-a)/2-i.y;n.forEach(function(t){t.translate(0,s);});}else e.y=(i.y+i.height/2+o.y+o.height/2)/2-e.height/2;}}(t);};}]);});}).call(this,n(47)(t));},function(t,e,n){var r=n(11),i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,t);var n=this.getDefaultCfg();r.mix(this,n,e);}return t.prototype.getDefaultCfg=function(){return{};},t.prototype.destroy=function(){},t;}();t.exports=i;},function(t,e,n){var r=n(452);t.exports=function(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map;};},function(t,e,n){var r=n(39)(Object,"create");t.exports=r;},function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e;};},function(t,e,n){var r=n(74);t.exports=function(t,e){for(var n=t.length;n--;){if(r(t[n][0],e))return n;}return-1;};},function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1]);}}var i=n(474),o=n(473),a=n(472),u=n(471),s=n(470);r.prototype.clear=i,r.prototype.delete=o,r.prototype.get=a,r.prototype.has=u,r.prototype.set=s,t.exports=r;},function(t,e,n){var r="function"==typeof Symbol&&"symbol"==o(Symbol.iterator)?function(t){return void 0===t?"undefined":o(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":o(t);},i=n(44),a=n(29);t.exports=function(t){return"symbol"==(void 0===t?"undefined":r(t))||a(t)&&"[object Symbol]"==i(t);};},,,,,,,function(t,e){t.exports=function(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t;}),n;};},function(t,e,n){(function(t){var r="function"==typeof Symbol&&"symbol"==o(Symbol.iterator)?function(t){return void 0===t?"undefined":o(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":o(t);},i=n(24),a=n(444),u="object"==r(e)&&e&&!e.nodeType&&e,s=u&&"object"==r(t)&&t&&!t.nodeType&&t,c=s&&s.exports===u?i.Buffer:void 0,f=(c?c.isBuffer:void 0)||a;t.exports=f;}).call(this,n(47)(t));},function(t,e,n){function r(t){var e=this.__data__=new i(t);this.size=e.size;}var i=n(76),o=n(469),a=n(468),u=n(467),s=n(466),c=n(465);r.prototype.clear=o,r.prototype.delete=a,r.prototype.get=u,r.prototype.has=s,r.prototype.set=c,t.exports=r;},,,,,,,,,,function(t,e,n){function r(t){return t.getCurrentPage().getSelected().length>0;}function i(t){var e=t.getCurrentPage();this.snapShot=e.save(),this.selectedItems=e.getSelected().map(function(t){return t.id;}),this.method&&(l.isString(this.method)?e[this.method]():this.method(t));}function o(t){var e=t.getCurrentPage();e.read(this.snapShot),e.setSelected(this.selectedItems,!0);}function a(t){return t.getCurrentPage().getMode()!==this.toMode;}function u(t){var e=t.getCurrentPage();this.fromMode=e.getMode(),e.changeMode(this.toMode);}function s(t){t.getCurrentPage().changeMode(this.fromMode);}function c(t){var e={},n=[];return t.forEach(function(t){var r=t.model,i=l.mix(!0,{},f({},r,{id:l.guid()}));e[r.id]=i.id,n.push(f({},t,{model:i}));}),n.forEach(function(t){var n=t.model;if(n.parent){var r=e[n.parent];r?n.parent=r:delete n.parent;}}),n.sort(function(t,e){return t.index-e.index;}),n;}var f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n){Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}}return t;},l=n(30),h={};h.list=[],h.registerCommand=function(t,e,n){if(h[t])l.mix(h[t],e);else{var r=f({enable:function enable(){return!0;},init:function init(){},execute:i,back:o,shortcutCodes:void 0,executeTimes:1,name:t,queue:!0},e);n&&h[n]&&(r=l.mix({},h[n],e)),h[t]=r,h.list.push(r);}},h.execute=function(t,e,n){var r=l.mix(!0,{},h[t],n),i=e.get("_command");if(r.enable(e))return r.init(),r.queue&&(i.queue.splice(i.current,i.queue.length-i.current,r),i.current+=1),e.emit("beforecommandexecute",{command:r}),r.execute(e),e.emit("aftercommandexecute",{command:r}),e.setCommandDOMenable(),r;},h.enable=function(t,e){return h[t].enable(e);},h.registerCommand("common",{back:o}),h.registerCommand("update",{enable:function enable(){return this.itemId&&this.updateModel;},execute:function execute(t){var e=t.getCurrentPage(),n=e.getGraph(),r=n.find(this.itemId);1===this.executeTimes&&(this.originModel=l.getContrast(r.getModel(),this.updateModel),this.page=e),n.update(r,this.updateModel);},back:function back(){var t=this.page.getGraph(),e=t.find(this.itemId);t.update(e,this.originModel);}}),h.registerCommand("redo",{queue:!1,enable:function enable(t){var e=t.get("_command"),n=e.queue;return e.current<n.length;},execute:function execute(t){var e=t.get("_command");e.queue[e.current].execute(t),e.current+=1;},shortcutCodes:[["metaKey","shiftKey","z"],["ctrlKey","shiftKey","z"]]}),h.registerCommand("undo",{queue:!1,enable:function enable(t){return t.get("_command").current>0;},execute:function execute(t){var e=t.get("_command"),n=e.queue[e.current-1];n.executeTimes++,n.back(t),e.current-=1;},shortcutCodes:[["metaKey","z"],["ctrlKey","z"]]}),h.registerCommand("copy",{queue:!1,enable:r,method:function method(t){var e=t.getCurrentPage().getSelected(),n=t.get("_command"),r=e.map(function(t){return t.getGraphicGroup();}),i=l.getChildrenBBox(r);n.clipboard=[],e.forEach(function(t){l.traverseTree(t,function(t){var e=t.getModel(),r=t.getGraphicGroup();n.clipboard.push({type:t.type,index:l.getIndex(r),model:e});},function(t){return t.getChildren&&t.getChildren();},!0);}),t.set("copyCenterBox",f({},i));}}),h.registerCommand("pasteHere",{enable:function enable(t){return t.get("_command").clipboard.length>0;},method:function method(t){var e=t.getCurrentPage(),n=t.get("_command"),r=this.pasteData?this.pasteData:c(n.clipboard),i=this.copyCenterBox?this.copyCenterBox:t.get("copyCenterBox"),o=this.contextmenuPoint?this.contextmenuPoint:t.get("contextmenuPoint");e.clearSelected(),this.copyCenterBox=l.cloneDeep(i),this.pasteData=l.cloneDeep(r),this.contextmenuPoint=l.cloneDeep(o),r.forEach(function(t){var n=t.model;n.x&&(n.x+=o.x-i.minX),n.y&&(n.y+=o.y-i.minY),e.add(t.type,n);});},back:o}),h.registerCommand("paste",{enable:function enable(t){return t.get("_command").clipboard.length>0;},method:function method(t){var e=t.getCurrentPage(),n=t.get("_command"),r=this.pasteData?this.pasteData:c(n.clipboard);e.clearSelected(),this.pasteData=l.cloneDeep(r),r.forEach(function(t){var n=t.model;n.x&&(n.x+=10),n.y&&(n.y+=10),e.add(t.type,n);});},back:o}),h.registerCommand("addGroup",{init:function init(){this.addGroupId=l.guid();},enable:function enable(t){return t.getCurrentPage().getSelected().length>1;},method:function method(t){t.getCurrentPage().addGroup({id:this.addGroupId});},back:o}),h.registerCommand("unGroup",{enable:function enable(t){var e=t.getCurrentPage().getSelected();return 1===e.length&&e[0].isGroup;},method:"unGroup",back:o}),h.registerCommand("delete",{getDeleteItems:function getDeleteItems(t){var e=t.getCurrentPage(),n=e.getGraph(),r=this.itemIds?this.itemIds.map(function(t){return n.find(t);}):e.getSelected();return r=r.filter(function(t){return!1!==t.deleteable;});},enable:function enable(t){return this.getDeleteItems(t).length>0;},method:function method(t){var e=t.getCurrentPage(),n=this.getDeleteItems(t),r=e.getGraph();e.emit("beforedelete",{items:n}),l.each(n,function(t){r.remove(t);}),e.emit("afterdelete",{items:n}),this.itemIds=n.map(function(t){return t.getModel().id;});},back:o,shortcutCodes:["Delete","Backspace"]}),h.registerCommand("selectAll",{method:function method(t){var e=t.getCurrentPage();e.getGraph().getItems().forEach(function(t){e.setSelected(t,!0);});},back:o,shortcutCodes:[["metaKey","a"]]}),h.registerCommand("toBack",{enable:r,method:"toBack",back:o}),h.registerCommand("toFront",{enable:r,method:"toFront",back:o}),h.registerCommand("clear",{enable:function enable(t){return t.getCurrentPage().getItems().length>0;},method:"clear",back:o}),h.registerCommand("multiSelect",{enable:a,toMode:"multiSelect",execute:u,back:s}),h.registerCommand("move",{enable:a,toMode:"move",execute:u,back:s}),t.exports=h;},function(t,e,n){var r=n(11),i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,t),r.mix(this,{id:"",type:null,model:{},group:null,animate:!1,modelCache:{}},e),this._init();}return t.prototype._init=function(){this._setIndex(),this._mapping(),this._setShapeObj(),this._initGroup(),this.draw();},t.prototype._setIndex=function(){var t=this.model;r.isNil(t.index)&&(t.index=this.zIndex);},t.prototype._mapping=function(){var t=this.mapper,e=this.model;t.mapping(e);},t.prototype._initGroup=function(){var t=this.group,e=this.model,n=this.type;t.isItemContainer=!0,t.id=e.id,t.itemType=n,t.model=e;},t.prototype._calculateBBox=function(){var t=this.keyShape,e=this.group,n=r.getBBox(t,e);return n.width=n.maxX-n.minX,n.height=n.maxY-n.minY,n.centerX=(n.minX+n.maxX)/2,n.centerY=(n.minY+n.maxY)/2,n;},t.prototype.getLabel=function(){return this.group.findByClass("label")[0];},t.prototype.getGraph=function(){return this.graph;},t.prototype.getEnterAnimate=function(){var t=this.shapeObj,e=this.graph;return t.enterAnimate?t.enterAnimate:e.get("_enterAnimate");},t.prototype.getLeaveAnimate=function(){var t=this.shapeObj,e=this.graph;return t.leaveAnimate?t.leaveAnimate:e.get("_leaveAnimate");},t.prototype._setShapeObj=function(){var t=this.graph,e=this.type,n=this.getModel();this.shapeObj=t.getShapeObj(e,n);},t.prototype._afterDraw=function(){var t=this.graph;this._setGId(),this._cacheModel(),t.emit("afteritemdraw",{item:this});},t.prototype._cacheModel=function(){this.modelCache=r.mix({},this.model);},t.prototype._setGId=function(){var t=this.group,e=this.id,n=this.type;t.gid=e,t.deepEach(function(t,r,i){var o=r.gid;t.id=e,t.eventPreFix=n,t.gid=o+"-"+i;});},t.prototype._beforeDraw=function(){this.graph.emit("beforeitemdraw",{item:this}),this.updateCollapsedParent(),this._setShapeObj();},t.prototype._shouldDraw=function(){return!0;},t.prototype._getDiff=function(){var t=[],e=this.model,n=this.modelCache;return r.each(e,function(e,i){r.isEqual(e,n[i])||t.push(i);}),0!==t.length&&t;},t.prototype._drawInner=function(){var t=this.animate;this.group.clear(!t);var e=this.shapeObj,n=e.draw(this);n&&(n.isKeyShape=!0,this.keyShape=n),e.afterDraw&&e.afterDraw(this);},t.prototype.deepEach=function(t,e){r.traverseTree(this,t,e||function(t){return t.getChildren();});},t.prototype.getShapeObj=function(){return this.shapeObj;},t.prototype.updateCollapsedParent=function(){var t=this.dataMap;this.collapsedParent=function t(e,n){var r=n[e.parent];if(!r)return!1;if(r){var i=t(r,n);if(i)return i;}return r.collapsed?r:void 0;}(this.model,t);},t.prototype.isVisible=function(){return this.group.get("visible");},t.prototype.hide=function(){var t=this.group,e=this.graph;e.emit("beforeitemhide",{item:this}),t.hide(),e.emit("afteritemhide",{item:this});},t.prototype.show=function(){var t=this.group,e=this.graph;e.emit("beforeitemshow",{item:this}),t.show(),e.emit("afteritemshow",{item:this});},t.prototype.draw=function(){this._beforeDraw(),this._shouldDraw()&&this._drawInner(),this._afterDraw();},t.prototype.forceUpdate=function(){this._beforeDraw(),this._drawInner(),this._afterDraw();},t.prototype.getCenter=function(){var t=this.getBBox();return{x:t.centerX,y:t.centerY};},t.prototype.getBBox=function(){return this.bbox||this._calculateBBox();},t.prototype.layoutUpdate=function(){this.draw();},t.prototype.update=function(){this.draw();},t.prototype.getModel=function(){return this.model;},t.prototype.getKeyShape=function(){return this.keyShape;},t.prototype.getGraphicGroup=function(){return this.group;},t.prototype.getHierarchy=function(){return this.graph.getHierarchy(this);},t.prototype.getParent=function(){var t=this.model;return this.itemMap[t.parent];},t.prototype.getAllParents=function(){for(var t=this.model,e=this.itemMap,n=[],r=t.parent;r&&e[r];){n.push(e[r]),r=r.parent;}return n;},t.prototype.getAllChildren=function(){var t=[];return this.deepEach(function(e){t.push(e);}),t;},t.prototype.getChildren=function(){var t=this.id;return this.graph.getItems().filter(function(e){return e.model.parent===t;});},t.prototype.destroy=function(){if(!this.destroyed){var t=this.animate,e=this.graph;e.emit("beforeitemdestroy",{item:this}),this.group.remove(!t),this.destroyed=!0,e.emit("afteritemdestroy",{item:this});}},t;}();t.exports=i;},function(t,e){t.exports="2.0.5";},function(t,e,n){var r="function"==typeof Symbol&&"symbol"==o(Symbol.iterator)?function(t){return void 0===t?"undefined":o(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":o(t);},i=n(23),a=n(77),u=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,s=/^\w*$/;t.exports=function(t,e){if(i(t))return!1;var n=void 0===t?"undefined":r(t);return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!a(t))||s.test(t)||!u.test(t)||null!=e&&t in Object(e);};},function(t,e,n){var r=n(160);t.exports=function(t){var e=new t.constructor(t.byteLength);return new r(e).set(new r(t)),e;};},function(t,e,n){var r=n(167),i=n(166),o=Object.prototype.propertyIsEnumerable,a=Object.getOwnPropertySymbols,u=a?function(t){return null==t?[]:(t=Object(t),r(a(t),function(e){return o.call(t,e);}));}:i;t.exports=u;},function(t,e,n){var r=n(169),i=n(439),o=n(64);t.exports=function(t){return o(t)?r(t,!0):i(t);};},function(t,e){var n=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||n);};},function(t,e,n){(function(t){var r="function"==typeof Symbol&&"symbol"==o(Symbol.iterator)?function(t){return void 0===t?"undefined":o(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":o(t);},i=n(174),a="object"==r(e)&&e&&!e.nodeType&&e,u=a&&"object"==r(t)&&t&&!t.nodeType&&t,s=u&&u.exports===a&&i.process,c=function(){try{return u&&u.require&&u.require("util").types||s&&s.binding&&s.binding("util");}catch(t){}}();t.exports=c;}).call(this,n(47)(t));},function(t,e){t.exports=function(t){return function(e){return t(e);};};},function(t,e){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991;};},function(t,e){var n="function"==typeof Symbol&&"symbol"==o(Symbol.iterator)?function(t){return void 0===t?"undefined":o(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":o(t);},r=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var i=void 0===t?"undefined":n(t);return!!(e=null==e?9007199254740991:e)&&("number"==i||"symbol"!=i&&r.test(t))&&t>-1&&t%1==0&&t<e;};},function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1]);}}var i=n(460),o=n(453),a=n(451),u=n(450),s=n(449);r.prototype.clear=i,r.prototype.delete=o,r.prototype.get=a,r.prototype.has=u,r.prototype.set=s,t.exports=r;},function(t,e,n){var r=n(39)(n(24),"Map");t.exports=r;},function(t,e,n){var r=n(22),i=n(77),o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return NaN;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e;}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=u.test(t);return n||s.test(t)?c(t.slice(2),n?2:8):a.test(t)?NaN:+t;};},function(t,e,n){var r=n(173)(Object.getPrototypeOf,Object);t.exports=r;},function(t,e,n){var r=n(484);t.exports=function(t){return null==t?"":r(t);};},,,,,,,,,,,,,function(t,e,n){var r=n(23),i=n(99),o=n(402),a=n(112);t.exports=function(t,e){return r(t)?t:i(t,e)?[t]:o(a(t));};},function(t,e,n){var r=n(443),i=n(105),o=n(104),a=o&&o.isTypedArray,u=a?i(a):r;t.exports=u;},function(t,e,n){var r=n(445),i=n(29),o=Object.prototype,a=o.hasOwnProperty,u=o.propertyIsEnumerable,s=r(function(){return arguments;}())?r:function(t){return i(t)&&a.call(t,"callee")&&!u.call(t,"callee");};t.exports=s;},function(t,e,n){var r=n(203);t.exports=function(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n;};},function(t,e,n){var r=n(128),i=n(74),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var a=t[e];o.call(t,e)&&i(a,n)&&(void 0!==n||e in t)||r(t,e,n);};},function(t,e,n){var r=n(44),i=n(22);t.exports=function(t){if(!i(t))return!1;var e=r(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e;};},,,,,,,,,,,function(t,e){t.exports={nodeDefaultShape:"mind-node",edgeDefaultShape:"mind-edge"};},function(t,e,n){var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n){Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}}return t;},i=n(15),o=n(18);t.exports=r({},o,{getNodeSize:function getNodeSize(t,e){if(t.size)return o.isNumber(t.size)?[t.size,t.size]:o.isString(t.size)?t.size.split("*"):t.size;if(t.html&&e){var n=o.createDOM(t.html,{position:"absolute",visibility:"hidden"});e.appendChild(n);var r=o.getWidth(n),a=o.getHeight(n);return n.remove(),[r,a];}return i.defaultNodeSize;}});},function(t,e){var n=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,t);}return t.prototype.execute=function(){throw new Error("please override this method");},t;}();t.exports=n;},function(t,e,n){t.exports={CompactBoxTree:n(350),Dendrogram:n(349),IndentedTree:n(348),Mindmap:n(347),Base:n(143)};},function(t,e,n){var r=n(11),i=function(t){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,e);var i={type:"node",linkable:!0,isNode:!0,zIndex:3};return r.mix(i,n),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(void 0===e?"undefined":o(e))&&"function"!=typeof e?t:e;}(this,t.call(this,i));}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":o(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}(e,t),e.prototype.updatePosition=function(){var t=this.group,e=this.model;t.setMatrix([1,0,0,0,1,0,e.x?e.x:0,e.y?e.y:0,1]),this.bbox=this._calculateBBox();},e.prototype._shouldDraw=function(){var e=this._getDiff(),n=t.prototype._shouldDraw.call(this);return e&&!(2===e.length&&-1!==e.indexOf("x")&&-1!==e.indexOf("y"))&&!(1===e.length&&("x"===e[0]||"y"===e[0]))&&n;},e.prototype._afterDraw=function(){this.updatePosition(),t.prototype._afterDraw.call(this);},e.prototype.layoutUpdate=function(){this._beforeDraw(),this._afterDraw();},e.prototype.getEdges=function(t){var e=this.id,n=this.itemMap._edges,i=[];return r.each(n,function(n){if(t)t(n)&&i.push(n);else{var r=n.getModel();e!==r.target&&e!==r.source||i.push(n);}}),i;},e.prototype.getInEdges=function(){var t=this;return this.getEdges(function(e){return e.target===t;});},e.prototype.getOutEdges=function(){var t=this;return this.getEdges(function(e){return e.source===t;});},e.prototype.getLinkPoints=function(t){var e=this.getAnchorPoints();if(r.isNumber(t)&&e[t])return[e[t]];var n=t.x,i=t.y,o=this.getBBox(),a=o.centerX,u=o.centerY,s=n-a,c=i-u,f=this.shapeObj.anchor||{},l=this.defaultIntersectBox,h=[];if(r.isEmpty(e)){switch(f.intersectBox||f.type||l){case"rect":h=[r.getIntersectPointRect(o,t)];break;case"path":if(this.keyShape&&"path"===this.keyShape.get("type")){var d=r.parsePathArray(["M",n,i,"L",a,u]);h=[r.intersection(d,this.keyShape.get("path"))];}break;default:h=[r.getIntersectPointCircle(n,i,o.centerX,o.centerY,Math.max(o.width,o.height)/2)];}r.isEmpty(h[0])&&(h=[{x:a,y:u}]);}else h=e.map(function(t){var e=t.x-a,n=t.y-u,i=r.getArcOfVectors({x:s,y:c},{x:e,y:n});return r.mix({},t,{arc:i});}).sort(function(t,e){return t.arc-e.arc;});return h;},e.prototype.getAnchorPoints=function(t){var e=this.shapeObj,n=this.getBBox(),i=[],o=e.anchor||{},a=void 0;return a=r.isArray(o)?o:r.isFunction(o)?o(this):r.isFunction(o.points)?o.points(this):o.points,r.each(a,function(t,e){var o=r.mix({x:n.minX+t[0]*n.width,y:n.minY+t[1]*n.height},t[2],{index:e});i.push(o);}),this._anchorPoints=i,r.isNumber(t)?this._anchorPoints[t]:this._anchorPoints;},e;}(n(97));t.exports=i;},function(t,e,n){var r=n(11),i=n(21),o=function t(e){t.superclass.constructor.call(this,e);};r.extend(o,i.canvas.Shape),o.ATTRS={x:0,y:0,width:0,height:0},r.augment(o,{canFill:!0,type:"html",__isPointInFill:function __isPointInFill(t,e){var n=this.getBBox(),r=n.minX,i=n.minY,o=n.maxX-n.minX,a=n.maxY-n.minY;return r<=t&&t<=r+o&&i<=e&&e<=i+a;},__initHtml:function __initHtml(t){var e=this.get("attrs"),n=this.get("canvas").get("htmlElementContaniner");e.html&&e.html.destroy&&e.html.destroy(),(t=r.createDOM(t)).css({position:"absolute",padding:"0px",margin:"0px",visibility:"hidden"}),e.html=t,n.appendChild(t);},isPointInPath:function isPointInPath(t,e){return this.__isPointInFill(t,e);},init:function init(){var t=this.attr("html");this.get("canvas").on("beforedraw",function(){t.css({visibility:"hidden"});}),this.__initHtml(t);},getDefaultAttrs:function getDefaultAttrs(){return o.ATTRS;},attr:function attr(t,e){var n=this.get("attrs");return r.isObject(t)?(t.html&&(this.__initHtml(t.html),delete t.html),r.mix(n,t),void 0===t.x&&void 0===t.y&&void 0===t.width&&void 0===t.height||this.calculateBox(),n):r.isNil(e)?n[t]:("html"===t?this.__initHtml(e):(n[t]=e,"x"!==t&&"y"!==t&&"width"!==t&&"height"!==t||this.calculateBox()),this);},calculateBox:function calculateBox(){var t=this.attr("x"),e=this.attr("y");return{minX:t,minY:e,maxX:t+this.attr("width"),maxY:e+this.attr("height")};},getDrawTotalMatrix:function getDrawTotalMatrix(){for(var t=this.get("canvas"),e=r.clone(this.attr("matrix")),n=this.getParent();n!==t;){r.mat3.multiply(e,n.attr("matrix"),e),n=n.getParent();}return e;},getDOM:function getDOM(){return this.attr("html");},applyTransform:function applyTransform(){var t=this.attr("html"),e=this.getDrawTotalMatrix(),n=this.attr("x"),r=this.attr("y"),i=this.attr("width")/2,o=this.attr("height")/2,a=e[0]*n+e[6]+e[0]*i-i,u=e[4]*r+e[7]+e[4]*o-o;t.css({transform:"matrix("+e[0]+","+e[1]+","+e[3]+","+e[4]+","+a+","+u+")"});},createPath:function createPath(){var t=this.attr("html"),e=this.get("attrs");this.applyTransform(),t.css(r.mix({visibility:"visible"},e));},remove:function remove(t){this.attr("html").css({visibility:"hidden"}),o.superclass.remove.call(this,t);},destroy:function destroy(){var t=this.attr("html");t&&t.destroy(),o.superclass.destroy.call(this);}}),i.canvas.Shape.Html=o,t.exports=o;},function(t,e,n){n(146),n(373),n(372),n(371),n(370),n(146);var r=n(369),i=n(368),a=n(177),u=n(11),s=n(21),c=n(364),f=n(362),l=n(360),h=n(359),d=n(357),p=n(356),g=n(355),v=n(353),m=[p,f,l,g,n(352),c,v,h,d],y=function(t){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,e);var r={};m.forEach(function(t){u.mix(r,t.CFG,n);});var i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(void 0===e?"undefined":o(e))&&"function"!=typeof e?t:e;}(this,t.call(this,r));return i._pluginInit(),i.emit("beforeinit"),i._init(),i.emit("afterinit"),i;}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":o(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}(e,t),e.prototype.getDefaultCfg=function(){return{container:void 0,width:void 0,height:void 0,plugins:[],fontFamily:'"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", SimSun, "sans-serif"',nodeDefaultShape:void 0,edgeDefaultShape:void 0,groupDefaultShape:void 0,defaultIntersectBox:"circle",render:"canvas",_controllers:{},_timers:{},_dataMap:{},_itemMap:{},_data:{},_delayRunObj:{}};},e.prototype._init=function(){var t=this;this._initData(),this._initContainer(),this._initCanvas(),m.forEach(function(e){e.INIT&&t[e.INIT]();}),this.initEvent();},e.prototype.initEvent=function(){},e.prototype._executeLayout=function(t,e,n,r){u.isFunction(t)?t(e,n,this):u.isObject(t)&&(t.nodes=e,t.edges=n,t.groups=r,t.graph=this,t.execute());},e.prototype._pluginInit=function(){var t=this;this.get("plugins").forEach(function(e){t._initPlugin(e);});},e.prototype._initPlugin=function(t){t.graph=this,t.init&&t.init();},e.prototype._getTimer=function(t){return this.get("_timers")[t];},e.prototype._setTimer=function(t,e){this.get("_timers")[t]=e;},e.prototype._getController=function(t){return this.get("_controllers")[t];},e.prototype._initContainer=function(){var t=this.get("container");if(t||(t=this.get("id")),!t)throw new Error("please set the container for the graph !");u.isString(t)&&(t=document.getElementById(t));var e=u.createDOM('<div class="graph-container"></div>',{position:"relative"});t.appendChild(e),this.set("_containerDOM",t),this.set("_graphContainer",e);},e.prototype._initCanvas=function(){var t=this,e=this.get("_graphContainer"),n=this.get("width"),r=this.get("height"),i={width:n,height:r,fontFamily:this.get("fontFamily"),eventEnable:!1,containerDOM:e},o=this.getConstructor("Canvas"),a=new o(i),s=new o(i),c=s.get("el"),f=e.appendChild(u.createDOM('<div class="graph-container-html-Elements"></div>'));a.on("beforedraw",function(){t.emit("beforecanvasdraw");}),c.style.position="absolute",c.style.top=0,c.style.left=0,f.style.overflow="hidden",f.style.width=n+"px",f.style.height=r+"px",f.style.position="absolute",f.style.top=0,f.style.left=0,this.set("_canvas",a),this.set("_frontCanvas",s),this.set("_htmlElementContaniner",f);var l=this.getMouseEventWrapper();l.style.outline="none",l.style["user-select"]="none",l.setAttribute("tabindex",20),a.set("htmlElementContaniner",f);var h=this.getConstructor("RootGroup"),d=a.addGroup(h),p=s.addGroup(h),g=d.addGroup();this.set("_itemGroup",g),this.set("_rootGroup",d),this.set("_frontRootGroup",p);},e.prototype._initData=function(){this.set("_dataMap",{}),this.set("_itemMap",{_nodes:[],_edges:[],_groups:[],_guides:[]}),this.set("_data",{});},e.prototype._refresh=function(){},e.prototype.getKeyboardEventWrapper=function(){return this.get("keyboardEventWrapper")||this.getMouseEventWrapper();},e.prototype.getMouseEventWrapper=function(){return this.get("_htmlElementContaniner");},e.prototype.addPlugin=function(t){var e=this.get("plugins");this._initPlugin(t),e.push(t);},e.prototype.getGraphContainer=function(){return this.get("_graphContainer");},e.prototype.addItems=function(t,e){var n=this;this._addDatas(t,e);var r=u.upperFirst(t),o=i[r],a=this.get("_itemMap"),s=this.get("_itemGroup"),c=this.get("_dataMap"),f=this.get("animate"),l=this.get("defaultIntersectBox");if(!o)throw new Error("please set valid item type!");e.forEach(function(e){var r=new o({id:e.id,type:t,model:e,group:s.addGroup(),graph:n,mapper:n._getController(t+"Mapper"),itemMap:a,animate:f,dataMap:c,defaultIntersectBox:l});a[e.id]=r,a["_"+t+"s"].push(r);});},e.prototype.removeItems=function(t){var e=this.get("_dataMap"),n=this.get("_itemMap");t.forEach(function(t){delete e[t.id],delete n[t.id],u.Array.remove(n["_"+t.type+"s"],t),t.destroy();});},e.prototype.updateItem=function(t,e){u.mix(t.getModel(),e),t.update();},e.prototype._addDatas=function(t,e){var n=this.get("_dataMap");e.forEach(function(t){if(u.isNil(t.id)&&(t.id=u.guid()),n[t.id])throw new Error("id:"+t.id+" has already been set, please set new one");n[t.id]=t;});},e.prototype._drawInner=function(){var t=this.get("_data"),e=this.get("_itemGroup"),n=this.get("_dataMap");t.nodes&&this.addItems("node",t.nodes),t.groups&&this.addItems("group",t.groups),t.edges&&this.addItems("edge",t.edges),t.guides&&this.addItems("guide",t.guides),e.sortBy(function(t){var e=t.id;return n[e].index;});},e.prototype._clearInner=function(){this.getItems().forEach(function(t){t&&!t.destroyed&&t.destroy();});},e.prototype.getConstructor=function(t){return"svg"===this.get("render")?s.svg[t]:s.canvas[t];},e.prototype.getShapeObj=function(t,e){if(!u.isObject(t)){var n=u.upperFirst(t),r=a[n],i=this.get(t+"DefaultShape");return r.getShape(e.shape,i);}return t.getShapeObj();},e.prototype.getSource=function(){return this.get("_sourceData");},e.prototype.parseSource=function(t){return t;},e.prototype.getCanvas=function(){return this.get("_canvas");},e.prototype.getRootGroup=function(){return this.get("_rootGroup");},e.prototype.getItemGroup=function(){return this.get("_itemGroup");},e.prototype.getFrontRootGroup=function(){return this.get("_frontRootGroup");},e.prototype.getFrontCanvas=function(){return this.get("_frontCanvas");},e.prototype.source=function(t){return this.emit("beforesource"),this.set("_data",t),this.set("_sourceData",t),this.emit("aftersource"),this;},e.prototype.render=function(){return this.emit("beforerender"),this.emit("beforedrawinner"),this._drawInner(),this.emit("afterdrawinner"),this.draw(),this.emit("afterrender"),this;},e.prototype.forcePreventAnimate=function(t){this.set("forcePreventAnimate",t);},e.prototype.reRender=function(){var t=this.get("_sourceData");return this.read(t),this;},e.prototype.destroy=function(){var e=this.get("_canvas"),n=this.get("_frontCanvas"),r=this.get("_graphContainer"),i=this.get("_controllers"),o=this.get("_timers"),a=this.get("_windowForceResizeEvent"),s=this.get("plugins");return u.each(o,function(t){clearTimeout(t);}),u.each(i,function(t){t.destroy();}),s.forEach(function(t){t.destroy&&t.destroy();}),e&&e.destroy(),n&&n.destroy(),r.destroy(),window.removeEventListener("resize",a),t.prototype.destroy.call(this),this;},e.prototype.save=function(){var t={nodes:[],edges:[],groups:[],guides:[]};return this.get("_itemGroup").get("children").forEach(function(e,n){var r=e.model;if(r){var i=e.itemType,o=u.cloneDeep(r);o.index=n,t[i+"s"].push(o);}}),0===t.nodes.length&&delete t.nodes,0===t.edges.length&&delete t.edges,0===t.groups.length&&delete t.groups,0===t.guides.length&&delete t.guides,t;},e.prototype.add=function(t,e){var n={action:"add",model:e};this.emit("beforechange",n);var r=this.get("_itemMap");this.addItems(t,[e]);var i=r[e.id];return i.getAllParents().forEach(function(t){t.update();}),n.item=i,this.emit("afterchange",n),this.draw(),i;},e.prototype.remove=function(t){var e=this;if((t=this.getItem(t))&&!t.destroyed){var n={action:"remove",item:t};return this.emit("beforechange",n),(t.isNode||t.isGroup)&&t.getEdges().forEach(function(t){e.remove(t);}),t.isGroup&&t.getChildren().forEach(function(t){e.remove(t);}),this.removeItems([t]),t.getAllParents().forEach(function(t){t.update();}),this.emit("afterchange",n),this.draw(),this;}},e.prototype.simpleUpdate=function(t,e){return this.updateItem(t,e),this.draw(),this;},e.prototype.update=function(t,e){var n=this.get("_itemMap");if((t=this.getItem(t))&&!t.destroyed){var r=t.getModel(),i=u.mix({},r),o={action:"update",item:t,originModel:i,updateModel:e},a=n[i.parent];return a&&a!==parent&&u.isGroup(a)&&t.getAllParents().forEach(function(t){t.update();}),e&&this.emit("beforechange",o),this.updateItem(t,e),t.getAllParents().forEach(function(t){t.update();}),!t.isNode&&!t.isGroup||t.collapsedParent||t.getEdges().forEach(function(t){t.update();}),t.isGroup&&e&&(t.deepEach(function(t){t.updateCollapsedParent(),t.collapsedParent?t.hide():t.show(),t.update();}),t.getInnerEdges().forEach(function(t){t.linkedItemVisible()?t.show():t.hide(),t.update();})),e&&this.emit("afterchange",o),this.draw(),this;}},e.prototype.read=function(t){if(!t)throw new Error("please read valid data!");var e=this.get("fitView"),n={action:"changeData",data:t};return this.emit("beforechange",n),this.clear(),this.source(t),this.render(),this.emit("afterchange",n),e&&this.setFitView(e),this;},e.prototype.clear=function(){return this.emit("beforeclear"),this._clearInner(),this._initData(),this.emit("afterclear"),this.draw(),this;},e.prototype.hide=function(t){return(t=this.getItem(t)).hide(),t.isNode&&t.getEdges().forEach(function(t){t.hide();}),t.isGroup&&(t.getEdges().forEach(function(t){t.hide();}),t.deepEach(function(t){t.hide();})),this.draw(),this;},e.prototype._tryShowEdge=function(t){var e=t.getSource(),n=t.getTarget();return(e.linkable&&e.isVisible()||!e.linkable)&&(n.linkable&&n.isVisible()||!n.linkable)&&t.show();},e.prototype.show=function(t){var e=this;return(t=this.getItem(t)).isEdge?this._tryShowEdge(t):t.show(),t.isNode&&t.getEdges().forEach(function(t){e._tryShowEdge(t);}),t.isGroup&&(t.getEdges().forEach(function(t){e._tryShowEdge(t);}),t.deepEach(function(t){t.show();})),this.draw(),this;},e.prototype.getWidth=function(){return this.get("width");},e.prototype.getHeight=function(){return this.get("height");},e.prototype.changeSize=function(t,e){if(!(Math.abs(t)>=1/0||Math.abs(e)>=1/0)){var n=this.get("_canvas"),r=this.get("_frontCanvas"),i=this.get("_htmlElementContaniner");return t===this.get("width")&&e===this.get("height")||(this.emit("beforechangesize"),n.changeSize(t,e),r.changeSize(t,e),i.css({width:t+"px",height:e+"px"}),this.set("width",t),this.set("height",e),this.emit("afterchangesize"),this.draw()),this;}console.warn("size parameter more than the maximum");},e.prototype.toFront=function(t){t=this.getItem(t);var e=this.get("_itemGroup"),n=t.getGraphicGroup();u.toFront(n,e),this.draw();},e.prototype.toBack=function(t){t=this.getItem(t);var e=this.get("_itemGroup"),n=t.getGraphicGroup();u.toBack(n,e),this.draw();},e.prototype.css=function(t){var e=this.getGraphContainer();u.modifyCSS(e,t);},e.prototype.saveImage=function(){var t=this.getBBox(),e=this.getFitViewPadding();return u.graph2Canvas({graph:this,width:t.width+e[1]+e[3],height:t.height+e[0]+e[2]});},e;}(r);m.forEach(function(t){u.mix(y.prototype,t.AUGMENT);}),t.exports=y;},function(t,e){var n={registerBehaviour:function registerBehaviour(t,e,r){e.dependences=r,n[t]=e;},resetMode:function resetMode(t,e){var r=[],i=void 0;e._off();for(var o=0;o<t.length;o++){(i=n[t[o]])&&(i.dependences&&i.dependences.forEach(function(t){t&&-1===r.indexOf(t)&&(n[t](e),r.push(t));}),i&&-1===r.indexOf(i)&&i(e));}}};t.exports=n;},function(t,e,n){var r=n(21),i=n(46),o={};i.mix(o,r.DomUtil,{addEventListener:function addEventListener(t,e,n){return t.addEventListener?(t.addEventListener(e,n,!1),{remove:function remove(){t.removeEventListener(e,n,!1);}}):t.attachEvent?(t.attachEvent("on"+e,n),{remove:function remove(){t.detachEvent("on"+e,n);}}):void 0;},createDOM:function createDOM(t,e){var n=void 0;return(n=i.isString(t)?r.DomUtil.createDom(t):t).bbox=n.getBoundingClientRect(),n.hide=function(){return n.style.visibility="hidden",n;},n.show=function(){return n.style.visibility="visible",n;},n.css=function(t){return r.DomUtil.modifyCSS(n,t),n;},n.width=function(){return r.DomUtil.getWidth(n);},n.height=function(){return r.DomUtil.getHeight(n);},n.destroy=function(){n.parentNode&&n.parentNode.removeChild(n);},n.on=function(t,e){n.addEventListener(t,e);},n.off=function(t,e){n.removeEventListener(t,e);},n.attr=function(t){return n.getAttribute(t);},n.css(e),n;}}),t.exports=o;},function(t,e,n){var r=n(22),i=n(393),o=n(110),a=Math.max,u=Math.min;t.exports=function(t,e,n){function s(e){var n=d,r=p;return d=p=void 0,b=e,v=t.apply(r,n);}function c(t){var n=t-y;return void 0===y||n>=e||n<0||_&&t-b>=g;}function f(){var t=i();if(c(t))return l(t);m=setTimeout(f,function(t){var n=e-(t-y);return _?u(n,g-(t-b)):n;}(t));}function l(t){return m=void 0,w&&d?s(t):(d=p=void 0,v);}function h(){var t=i(),n=c(t);if(d=arguments,p=this,y=t,n){if(void 0===m)return function(t){return b=t,m=setTimeout(f,e),x?s(t):v;}(y);if(_)return m=setTimeout(f,e),s(y);}return void 0===m&&(m=setTimeout(f,e)),v;}var d,p,g,v,m,y,b=0,x=!1,_=!1,w=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return e=o(e)||0,r(n)&&(x=!!n.leading,g=(_="maxWait"in n)?a(o(n.maxWait)||0,e):g,w="trailing"in n?!!n.trailing:w),h.cancel=function(){void 0!==m&&clearTimeout(m),b=0,d=y=p=m=void 0;},h.flush=function(){return void 0===m?v:l(i());},h;};},function(t,e){t.exports=function(t){return t;};},function(t,e,n){var r=n(125),i=n(62);t.exports=function(t,e){for(var n=0,o=(e=r(e,t)).length;null!=t&&n<o;){t=t[i(e[n++])];}return n&&n==o?t:void 0;};},function(t,e,n){var r=n(152);t.exports=function(t,e,n){var i=null==t?void 0:r(t,e);return void 0===i?n:i;};},function(t,e){t.exports=function(t,e){return function(n){return null!=n&&n[t]===e&&(void 0!==e||t in Object(n));};};},function(t,e,n){var r=n(22);t.exports=function(t){return t==t&&!r(t);};},function(t,e){t.exports=function(t,e){return t.has(e);};},function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new i();++e<n;){this.add(t[e]);}}var i=n(108),o=n(409),a=n(408);r.prototype.add=r.prototype.push=o,r.prototype.has=a,t.exports=r;},function(t,e,n){var r=n(157),i=n(407),o=n(156);t.exports=function(t,e,n,a,u,s){var c=1&n,f=t.length,l=e.length;if(f!=l&&!(c&&l>f))return!1;var h=s.get(t);if(h&&s.get(e))return h==e;var d=-1,p=!0,g=2&n?new r():void 0;for(s.set(t,e),s.set(e,t);++d<f;){var v=t[d],m=e[d];if(a)var y=c?a(m,v,d,e,t,s):a(v,m,d,t,e,s);if(void 0!==y){if(y)continue;p=!1;break;}if(g){if(!i(e,function(t,e){if(!o(g,e)&&(v===t||u(v,t,n,a,s)))return g.push(e);})){p=!1;break;}}else if(v!==m&&!u(v,m,n,a,s)){p=!1;break;}}return s.delete(t),s.delete(e),p;};},function(t,e,n){var r=n(410),i=n(29);t.exports=function t(e,n,o,a,u){return e===n||(null==e||null==n||!i(e)&&!i(n)?e!=e&&n!=n:r(e,n,o,a,t,u));};},function(t,e,n){var r=n(24).Uint8Array;t.exports=r;},function(t,e,n){var r=n(39)(n(24),"Set");t.exports=r;},function(t,e,n){var r=n(164),i=n(23);t.exports=function(t,e,n){var o=e(t);return i(t)?o:r(o,n(t));};},function(t,e,n){var r=n(162),i=n(101),o=n(53);t.exports=function(t){return r(t,o,i);};},function(t,e){t.exports=function(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;){t[i+n]=e[n];}return t;};},function(t,e,n){var r=n(164),i=n(111),o=n(101),a=n(166),u=Object.getOwnPropertySymbols?function(t){for(var e=[];t;){r(e,o(t)),t=i(t);}return e;}:a;t.exports=u;},function(t,e){t.exports=function(){return[];};},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,i=0,o=[];++n<r;){var a=t[n];e(a,n,t)&&(o[i++]=a);}return o;};},function(t,e){t.exports=function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;){e[n]=t[n];}return e;};},function(t,e,n){var r=n(446),i=n(127),o=n(23),a=n(85),u=n(107),s=n(126),c=Object.prototype.hasOwnProperty;t.exports=function(t,e){var n=o(t),f=!n&&i(t),l=!n&&!f&&a(t),h=!n&&!f&&!l&&s(t),d=n||f||l||h,p=d?r(t.length,String):[],g=p.length;for(var v in t){!e&&!c.call(t,v)||d&&("length"==v||l&&("offset"==v||"parent"==v)||h&&("buffer"==v||"byteLength"==v||"byteOffset"==v)||u(v,g))||p.push(v);}return p;};},function(t,e){var n=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return n.call(t);}catch(t){}try{return t+"";}catch(t){}}return"";};},function(t,e,n){var r=n(477);t.exports=function(t){var e=r(t),n=e%1;return e==e?n?e-n:e:0;};},function(t,e,n){var r=n(480),i=n(479),o=n(478);t.exports=function(t,e,n){return e==e?o(t,e,n):r(t,i,n);};},function(t,e){t.exports=function(t,e){return function(n){return t(e(n));};};},function(t,e,n){(function(e){var n="function"==typeof Symbol&&"symbol"==o(Symbol.iterator)?function(t){return void 0===t?"undefined":o(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":o(t);},r="object"==(void 0===e?"undefined":n(e))&&e&&e.Object===Object&&e;t.exports=r;}).call(this,n(40));},function(t,e){var n=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");t.exports=function(t){return n.test(t);};},function(t,e,n){var r=n(21),i=n(46),o={isBetween:function isBetween(t,e,n){return t>=e&&t<=n;},getLineIntersect:function getLineIntersect(t,e,n,r){var i=n.x-t.x,a=n.y-t.y,u=e.x-t.x,s=e.y-t.y,c=r.x-n.x,f=r.y-n.y,l=u*f-s*c,h=null;if(l*l>.001*(u*u+s*s)*(c*c+f*f)){var d=(i*f-a*c)/l,p=(i*s-a*u)/l;o.isBetween(d,0,1)&&o.isBetween(p,0,1)&&(h={x:t.x+d*u,y:t.y+d*s});}return h;},getIntersectPointRect:function getIntersectPointRect(t,e){var n=t.minX,r=t.minY,i=t.maxX-t.minX,a=t.maxY-t.minY,u=[],s={x:n+i/2,y:r+a/2};u.push({x:n,y:r}),u.push({x:n+i,y:r}),u.push({x:n+i,y:r+a}),u.push({x:n,y:r+a}),u.push({x:n,y:r});for(var c=null,f=1;f<u.length&&!(c=o.getLineIntersect(u[f-1],u[f],s,e));f++){}return c;},getIntersectPointCircle:function getIntersectPointCircle(t,e,n,r,i){if(Math.sqrt(Math.pow(t-n,2)+Math.pow(e-r,2))<i)return null;var o=t-n,a=e-r,u=Math.sign(o),s=Math.sign(a),c=Math.atan(a/o);return{x:n+Math.abs(i*Math.cos(c))*u,y:r+Math.abs(i*Math.sin(c))*s};},applyMatrix:function applyMatrix(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=[t.x,t.y,n];return r.MatrixUtil.vec3.transformMat3(i,i,e),{x:i[0],y:i[1]};},invertMatrix:function invertMatrix(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=r.MatrixUtil.mat3.invert([],e),o=[t.x,t.y,n];return r.MatrixUtil.vec3.transformMat3(o,o,i),{x:o[0],y:o[1]};},radixSort:function radixSort(t,e){var n=10,r=1,i=[],o=1,a=void 0,u=void 0,s=void 0,c=void 0,f=void 0,l=void 0,h=void 0;for(s=0;s<t.length;s++){a=e(t[s]),u=(a=parseInt(a,10)).toString().length,a.toString().length>o&&(o=u);}for(s=0;s<o;s++,r*=10,n*=10){for(c=0;c<t.length;c++){f=e(t[c]),void 0===i[f=parseInt(f%n/r,10)]&&(i[f]=[]),i[f].push(t[c]);}for(l=0,c=0;c<i.length;c++){if(h=void 0,void 0!==i[c])for(h=i[c].shift();void 0!==h;){t[l++]=h,h=i[c].shift();}}}return t;},getArcOfVectors:function getArcOfVectors(t,e){var n=t.x,r=t.y,i=e.x,o=e.y,a=Math.sqrt(n*n+r*r),u=Math.sqrt(i*i+o*o);return Math.acos((n*i+r*o)/(a*u));}};t.exports=i.mix({},r.MatrixUtil,o);},function(t,e,n){var r=n(48);r.registerShapeManager("node",{defaultShapeType:"common"}),r.registerShapeManager("edge",{defaultShapeType:"common"}),r.registerShapeManager("group",{defaultShapeType:"common"}),r.registerShapeManager("guide",{defaultShapeType:"common"}),n(382),n(379),n(377),n(375),t.exports=r;},function(t,e,n){var r,i="function"==typeof Symbol&&"symbol"==o(Symbol.iterator)?function(t){return void 0===t?"undefined":o(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":o(t);};!function(e){function o(){}function a(t,e){for(var n=t.length;n--;){if(t[n].listener===e)return n;}return-1;}function u(t){return function(){return this[t].apply(this,arguments);};}var s=o.prototype,c=e.EventEmitter;s.getListeners=function(t){var e,n,r=this._getEvents();if(t instanceof RegExp)for(n in e={},r){r.hasOwnProperty(n)&&t.test(n)&&(e[n]=r[n]);}else e=r[t]||(r[t]=[]);return e;},s.flattenListeners=function(t){var e,n=[];for(e=0;e<t.length;e+=1){n.push(t[e].listener);}return n;},s.getListenersAsObject=function(t){var e,n=this.getListeners(t);return n instanceof Array&&((e={})[t]=n),e||n;},s.addListener=function(t,e){if(!function t(e){return"function"==typeof e||e instanceof RegExp||!(!e||"object"!==(void 0===e?"undefined":i(e)))&&t(e.listener);}(e))throw new TypeError("listener must be a function");var n,r=this.getListenersAsObject(t),o="object"===(void 0===e?"undefined":i(e));for(n in r){r.hasOwnProperty(n)&&-1===a(r[n],e)&&r[n].push(o?e:{listener:e,once:!1});}return this;},s.on=u("addListener"),s.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0});},s.once=u("addOnceListener"),s.defineEvent=function(t){return this.getListeners(t),this;},s.defineEvents=function(t){for(var e=0;e<t.length;e+=1){this.defineEvent(t[e]);}return this;},s.removeListener=function(t,e){var n,r,i=this.getListenersAsObject(t);for(r in i){i.hasOwnProperty(r)&&-1!==(n=a(i[r],e))&&i[r].splice(n,1);}return this;},s.off=u("removeListener"),s.addListeners=function(t,e){return this.manipulateListeners(!1,t,e);},s.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e);},s.manipulateListeners=function(t,e,n){var r,o,a=t?this.removeListener:this.addListener,u=t?this.removeListeners:this.addListeners;if("object"!==(void 0===e?"undefined":i(e))||e instanceof RegExp)for(r=n.length;r--;){a.call(this,e,n[r]);}else for(r in e){e.hasOwnProperty(r)&&(o=e[r])&&("function"==typeof o?a.call(this,r,o):u.call(this,r,o));}return this;},s.removeEvent=function(t){var e,n=void 0===t?"undefined":i(t),r=this._getEvents();if("string"===n)delete r[t];else if(t instanceof RegExp)for(e in r){r.hasOwnProperty(e)&&t.test(e)&&delete r[e];}else delete this._events;return this;},s.removeAllListeners=u("removeEvent"),s.emitEvent=function(t,e){var n,r,i,o,a=this.getListenersAsObject(t);for(o in a){if(a.hasOwnProperty(o))for(n=a[o].slice(0),i=0;i<n.length;i++){!0===(r=n[i]).once&&this.removeListener(t,r.listener),r.listener.apply(this,e||[])===this._getOnceReturnValue()&&this.removeListener(t,r.listener);}}return this;},s.trigger=u("emitEvent"),s.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e);},s.setOnceReturnValue=function(t){return this._onceReturnValue=t,this;},s._getOnceReturnValue=function(){return!this.hasOwnProperty("_onceReturnValue")||this._onceReturnValue;},s._getEvents=function(){return this._events||(this._events={});},o.noConflict=function(){return e.EventEmitter=c,o;},void 0===(r=function(){return o;}.call(e,n,e,t))||(t.exports=r);}("undefined"!=typeof window?window:{});},function(t,e,n){var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e;};}(),i=n(178),a=n(30),u=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(void 0===e?"undefined":o(e))&&"function"!=typeof e?t:e;}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this)),r=n.getDefaultCfg();return n._cfg=a.mix(!0,{},n._cfg,r,t),n;}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":o(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}(e,i),r(e,[{key:"getDefaultCfg",value:function value(){return{};}}]),r(e,[{key:"get",value:function value(t){return this._cfg[t];}},{key:"set",value:function value(t,e){this._cfg[t]=e;}},{key:"destroy",value:function value(){this._cfg={},this.destroyed=!0;}}]),e;}();t.exports=u;},,,,,,,,,,,,,,,,,,function(t,e,n){var r=n(125),i=n(127),o=n(23),a=n(107),u=n(106),s=n(62);t.exports=function(t,e,n){for(var c=-1,f=(e=r(e,t)).length,l=!1;++c<f;){var h=s(e[c]);if(!(l=null!=t&&n(t,h)))break;t=t[h];}return l||++c!=f?l:!!(f=null==t?0:t.length)&&u(f)&&a(h,f)&&(o(t)||i(t));};},function(t,e){t.exports=function(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t];}),n;};},function(t,e,n){var r=n(415)();t.exports=r;},function(t,e,n){var r=n(426),i=n(111),o=n(103);t.exports=function(t){return"function"!=typeof t.constructor||o(t)?{}:r(i(t));};},function(t,e,n){var r=n(100);t.exports=function(t,e){var n=e?r(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length);};},function(t,e,n){(function(t){var r="function"==typeof Symbol&&"symbol"==o(Symbol.iterator)?function(t){return void 0===t?"undefined":o(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":o(t);},i=n(24),a="object"==r(e)&&e&&!e.nodeType&&e,u=a&&"object"==r(t)&&t&&!t.nodeType&&t,s=u&&u.exports===a?i.Buffer:void 0,c=s?s.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var n=t.length,r=c?c(n):new t.constructor(n);return t.copy(r),r;};}).call(this,n(47)(t));},function(t,e,n){var r=n(39),i=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t;}catch(t){}}();t.exports=i;},function(t,e,n){var r=n(44),i=n(111),o=n(29),a=Function.prototype,u=Object.prototype,s=a.toString,c=u.hasOwnProperty,f=s.call(Object);t.exports=function(t){if(!o(t)||"[object Object]"!=r(t))return!1;var e=i(t);if(null===e)return!0;var n=c.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&s.call(n)==f;};},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;){i[n]=e(t[n],n,t);}return i;};},function(t,e,n){var r=n(486),i=n(175),o=n(485);t.exports=function(t){return i(t)?o(t):r(t);};},function(t,e,n){var r,i="function"==typeof Symbol&&"symbol"==o(Symbol.iterator)?function(t){return void 0===t?"undefined":o(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":o(t);};!function(o){function a(t,e){if(t=t||"",e=e||{},t instanceof a)return t;if(!(this instanceof a))return new a(t,e);var n=function(t){var e={r:0,g:0,b:0},n=1,r=null,a=null,u=null,s=!1,c=!1;return"string"==typeof t&&(t=function(t){t=t.replace(T,"").replace(B,"").toLowerCase();var e,n=!1;if(G[t])t=G[t],n=!0;else if("transparent"==t)return{r:0,g:0,b:0,a:0,format:"name"};return(e=X.rgb.exec(t))?{r:e[1],g:e[2],b:e[3]}:(e=X.rgba.exec(t))?{r:e[1],g:e[2],b:e[3],a:e[4]}:(e=X.hsl.exec(t))?{h:e[1],s:e[2],l:e[3]}:(e=X.hsla.exec(t))?{h:e[1],s:e[2],l:e[3],a:e[4]}:(e=X.hsv.exec(t))?{h:e[1],s:e[2],v:e[3]}:(e=X.hsva.exec(t))?{h:e[1],s:e[2],v:e[3],a:e[4]}:(e=X.hex8.exec(t))?{r:P(e[1]),g:P(e[2]),b:P(e[3]),a:k(e[4]),format:n?"name":"hex8"}:(e=X.hex6.exec(t))?{r:P(e[1]),g:P(e[2]),b:P(e[3]),format:n?"name":"hex"}:(e=X.hex4.exec(t))?{r:P(e[1]+""+e[1]),g:P(e[2]+""+e[2]),b:P(e[3]+""+e[3]),a:k(e[4]+""+e[4]),format:n?"name":"hex8"}:!!(e=X.hex3.exec(t))&&{r:P(e[1]+""+e[1]),g:P(e[2]+""+e[2]),b:P(e[3]+""+e[3]),format:n?"name":"hex"};}(t)),"object"==(void 0===t?"undefined":i(t))&&(I(t.r)&&I(t.g)&&I(t.b)?(e=function(t,e,n){return{r:255*A(t,255),g:255*A(e,255),b:255*A(n,255)};}(t.r,t.g,t.b),s=!0,c="%"===String(t.r).substr(-1)?"prgb":"rgb"):I(t.h)&&I(t.s)&&I(t.v)?(r=C(t.s),a=C(t.v),e=function(t,e,n){t=6*A(t,360),e=A(e,100),n=A(n,100);var r=o.floor(t),i=t-r,a=n*(1-e),u=n*(1-i*e),s=n*(1-(1-i)*e),c=r%6;return{r:255*[n,u,a,a,s,n][c],g:255*[s,n,n,u,a,a][c],b:255*[a,a,s,n,n,u][c]};}(t.h,r,a),s=!0,c="hsv"):I(t.h)&&I(t.s)&&I(t.l)&&(r=C(t.s),u=C(t.l),e=function(t,e,n){function r(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t;}var i,o,a;if(t=A(t,360),e=A(e,100),n=A(n,100),0===e)i=o=a=n;else{var u=n<.5?n*(1+e):n+e-n*e,s=2*n-u;i=r(s,u,t+1/3),o=r(s,u,t),a=r(s,u,t-1/3);}return{r:255*i,g:255*o,b:255*a};}(t.h,r,u),s=!0,c="hsl"),t.hasOwnProperty("a")&&(n=t.a)),n=M(n),{ok:s,format:t.format||c,r:F(255,L(e.r,0)),g:F(255,L(e.g,0)),b:F(255,L(e.b,0)),a:n};}(t);this._originalInput=t,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=D(100*this._a)/100,this._format=e.format||n.format,this._gradientType=e.gradientType,this._r<1&&(this._r=D(this._r)),this._g<1&&(this._g=D(this._g)),this._b<1&&(this._b=D(this._b)),this._ok=n.ok,this._tc_id=N++;}function u(t,e,n){t=A(t,255),e=A(e,255),n=A(n,255);var r,i,o=L(t,e,n),a=F(t,e,n),u=(o+a)/2;if(o==a)r=i=0;else{var s=o-a;switch(i=u>.5?s/(2-o-a):s/(o+a),o){case t:r=(e-n)/s+(e<n?6:0);break;case e:r=(n-t)/s+2;break;case n:r=(t-e)/s+4;}r/=6;}return{h:r,s:i,l:u};}function s(t,e,n){t=A(t,255),e=A(e,255),n=A(n,255);var r,i,o=L(t,e,n),a=F(t,e,n),u=o,s=o-a;if(i=0===o?0:s/o,o==a)r=0;else{switch(o){case t:r=(e-n)/s+(e<n?6:0);break;case e:r=(n-t)/s+2;break;case n:r=(t-e)/s+4;}r/=6;}return{h:r,s:i,v:u};}function c(t,e,n,r){var i=[E(D(t).toString(16)),E(D(e).toString(16)),E(D(n).toString(16))];return r&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("");}function f(t,e,n,r){return[E(j(r)),E(D(t).toString(16)),E(D(e).toString(16)),E(D(n).toString(16))].join("");}function l(t,e){e=0===e?0:e||10;var n=a(t).toHsl();return n.s-=e/100,n.s=O(n.s),a(n);}function h(t,e){e=0===e?0:e||10;var n=a(t).toHsl();return n.s+=e/100,n.s=O(n.s),a(n);}function d(t){return a(t).desaturate(100);}function p(t,e){e=0===e?0:e||10;var n=a(t).toHsl();return n.l+=e/100,n.l=O(n.l),a(n);}function g(t,e){e=0===e?0:e||10;var n=a(t).toRgb();return n.r=L(0,F(255,n.r-D(-e/100*255))),n.g=L(0,F(255,n.g-D(-e/100*255))),n.b=L(0,F(255,n.b-D(-e/100*255))),a(n);}function v(t,e){e=0===e?0:e||10;var n=a(t).toHsl();return n.l-=e/100,n.l=O(n.l),a(n);}function m(t,e){var n=a(t).toHsl(),r=(n.h+e)%360;return n.h=r<0?360+r:r,a(n);}function y(t){var e=a(t).toHsl();return e.h=(e.h+180)%360,a(e);}function b(t){var e=a(t).toHsl(),n=e.h;return[a(t),a({h:(n+120)%360,s:e.s,l:e.l}),a({h:(n+240)%360,s:e.s,l:e.l})];}function x(t){var e=a(t).toHsl(),n=e.h;return[a(t),a({h:(n+90)%360,s:e.s,l:e.l}),a({h:(n+180)%360,s:e.s,l:e.l}),a({h:(n+270)%360,s:e.s,l:e.l})];}function _(t){var e=a(t).toHsl(),n=e.h;return[a(t),a({h:(n+72)%360,s:e.s,l:e.l}),a({h:(n+216)%360,s:e.s,l:e.l})];}function w(t,e,n){e=e||6,n=n||30;var r=a(t).toHsl(),i=360/n,o=[a(t)];for(r.h=(r.h-(i*e>>1)+720)%360;--e;){r.h=(r.h+i)%360,o.push(a(r));}return o;}function S(t,e){e=e||6;for(var n=a(t).toHsv(),r=n.h,i=n.s,o=n.v,u=[],s=1/e;e--;){u.push(a({h:r,s:i,v:o})),o=(o+s)%1;}return u;}function M(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t;}function A(t,e){(function(t){return"string"==typeof t&&-1!=t.indexOf(".")&&1===parseFloat(t);})(t)&&(t="100%");var n=function(t){return"string"==typeof t&&-1!=t.indexOf("%");}(t);return t=F(e,L(0,parseFloat(t))),n&&(t=parseInt(t*e,10)/100),o.abs(t-e)<1e-6?1:t%e/parseFloat(e);}function O(t){return F(1,L(0,t));}function P(t){return parseInt(t,16);}function E(t){return 1==t.length?"0"+t:""+t;}function C(t){return t<=1&&(t=100*t+"%"),t;}function j(t){return o.round(255*parseFloat(t)).toString(16);}function k(t){return P(t)/255;}function I(t){return!!X.CSS_UNIT.exec(t);}var T=/^\s+/,B=/\s+$/,N=0,D=o.round,F=o.min,L=o.max,R=o.random;a.prototype={isDark:function isDark(){return this.getBrightness()<128;},isLight:function isLight(){return!this.isDark();},isValid:function isValid(){return this._ok;},getOriginalInput:function getOriginalInput(){return this._originalInput;},getFormat:function getFormat(){return this._format;},getAlpha:function getAlpha(){return this._a;},getBrightness:function getBrightness(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3;},getLuminance:function getLuminance(){var t,e,n,r=this.toRgb();return t=r.r/255,e=r.g/255,n=r.b/255,.2126*(t<=.03928?t/12.92:o.pow((t+.055)/1.055,2.4))+.7152*(e<=.03928?e/12.92:o.pow((e+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:o.pow((n+.055)/1.055,2.4));},setAlpha:function setAlpha(t){return this._a=M(t),this._roundA=D(100*this._a)/100,this;},toHsv:function toHsv(){var t=s(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a};},toHsvString:function toHsvString(){var t=s(this._r,this._g,this._b),e=D(360*t.h),n=D(100*t.s),r=D(100*t.v);return 1==this._a?"hsv("+e+", "+n+"%, "+r+"%)":"hsva("+e+", "+n+"%, "+r+"%, "+this._roundA+")";},toHsl:function toHsl(){var t=u(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a};},toHslString:function toHslString(){var t=u(this._r,this._g,this._b),e=D(360*t.h),n=D(100*t.s),r=D(100*t.l);return 1==this._a?"hsl("+e+", "+n+"%, "+r+"%)":"hsla("+e+", "+n+"%, "+r+"%, "+this._roundA+")";},toHex:function toHex(t){return c(this._r,this._g,this._b,t);},toHexString:function toHexString(t){return"#"+this.toHex(t);},toHex8:function toHex8(t){return function(t,e,n,r,i){var o=[E(D(t).toString(16)),E(D(e).toString(16)),E(D(n).toString(16)),E(j(r))];return i&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)&&o[3].charAt(0)==o[3].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("");}(this._r,this._g,this._b,this._a,t);},toHex8String:function toHex8String(t){return"#"+this.toHex8(t);},toRgb:function toRgb(){return{r:D(this._r),g:D(this._g),b:D(this._b),a:this._a};},toRgbString:function toRgbString(){return 1==this._a?"rgb("+D(this._r)+", "+D(this._g)+", "+D(this._b)+")":"rgba("+D(this._r)+", "+D(this._g)+", "+D(this._b)+", "+this._roundA+")";},toPercentageRgb:function toPercentageRgb(){return{r:D(100*A(this._r,255))+"%",g:D(100*A(this._g,255))+"%",b:D(100*A(this._b,255))+"%",a:this._a};},toPercentageRgbString:function toPercentageRgbString(){return 1==this._a?"rgb("+D(100*A(this._r,255))+"%, "+D(100*A(this._g,255))+"%, "+D(100*A(this._b,255))+"%)":"rgba("+D(100*A(this._r,255))+"%, "+D(100*A(this._g,255))+"%, "+D(100*A(this._b,255))+"%, "+this._roundA+")";},toName:function toName(){return 0===this._a?"transparent":!(this._a<1)&&(Y[c(this._r,this._g,this._b,!0)]||!1);},toFilter:function toFilter(t){var e="#"+f(this._r,this._g,this._b,this._a),n=e,r=this._gradientType?"GradientType = 1, ":"";if(t){var i=a(t);n="#"+f(i._r,i._g,i._b,i._a);}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+e+",endColorstr="+n+")";},toString:function toString(t){var e=!!t;t=t||this._format;var n=!1,r=this._a<1&&this._a>=0;return e||!r||"hex"!==t&&"hex6"!==t&&"hex3"!==t&&"hex4"!==t&&"hex8"!==t&&"name"!==t?("rgb"===t&&(n=this.toRgbString()),"prgb"===t&&(n=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(n=this.toHexString()),"hex3"===t&&(n=this.toHexString(!0)),"hex4"===t&&(n=this.toHex8String(!0)),"hex8"===t&&(n=this.toHex8String()),"name"===t&&(n=this.toName()),"hsl"===t&&(n=this.toHslString()),"hsv"===t&&(n=this.toHsvString()),n||this.toHexString()):"name"===t&&0===this._a?this.toName():this.toRgbString();},clone:function clone(){return a(this.toString());},_applyModification:function _applyModification(t,e){var n=t.apply(null,[this].concat([].slice.call(e)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this;},lighten:function lighten(){return this._applyModification(p,arguments);},brighten:function brighten(){return this._applyModification(g,arguments);},darken:function darken(){return this._applyModification(v,arguments);},desaturate:function desaturate(){return this._applyModification(l,arguments);},saturate:function saturate(){return this._applyModification(h,arguments);},greyscale:function greyscale(){return this._applyModification(d,arguments);},spin:function spin(){return this._applyModification(m,arguments);},_applyCombination:function _applyCombination(t,e){return t.apply(null,[this].concat([].slice.call(e)));},analogous:function analogous(){return this._applyCombination(w,arguments);},complement:function complement(){return this._applyCombination(y,arguments);},monochromatic:function monochromatic(){return this._applyCombination(S,arguments);},splitcomplement:function splitcomplement(){return this._applyCombination(_,arguments);},triad:function triad(){return this._applyCombination(b,arguments);},tetrad:function tetrad(){return this._applyCombination(x,arguments);}},a.fromRatio=function(t,e){if("object"==(void 0===t?"undefined":i(t))){var n={};for(var r in t){t.hasOwnProperty(r)&&(n[r]="a"===r?t[r]:C(t[r]));}t=n;}return a(t,e);},a.equals=function(t,e){return!(!t||!e)&&a(t).toRgbString()==a(e).toRgbString();},a.random=function(){return a.fromRatio({r:R(),g:R(),b:R()});},a.mix=function(t,e,n){n=0===n?0:n||50;var r=a(t).toRgb(),i=a(e).toRgb(),o=n/100;return a({r:(i.r-r.r)*o+r.r,g:(i.g-r.g)*o+r.g,b:(i.b-r.b)*o+r.b,a:(i.a-r.a)*o+r.a});},a.readability=function(t,e){var n=a(t),r=a(e);return(o.max(n.getLuminance(),r.getLuminance())+.05)/(o.min(n.getLuminance(),r.getLuminance())+.05);},a.isReadable=function(t,e,n){var r,i,o=a.readability(t,e);switch(i=!1,(r=function(t){var e,n;return e=((t=t||{level:"AA",size:"small"}).level||"AA").toUpperCase(),n=(t.size||"small").toLowerCase(),"AA"!==e&&"AAA"!==e&&(e="AA"),"small"!==n&&"large"!==n&&(n="small"),{level:e,size:n};}(n)).level+r.size){case"AAsmall":case"AAAlarge":i=o>=4.5;break;case"AAlarge":i=o>=3;break;case"AAAsmall":i=o>=7;}return i;},a.mostReadable=function(t,e,n){var r,i,o,u,s=null,c=0;i=(n=n||{}).includeFallbackColors,o=n.level,u=n.size;for(var f=0;f<e.length;f++){(r=a.readability(t,e[f]))>c&&(c=r,s=a(e[f]));}return a.isReadable(t,s,{level:o,size:u})||!i?s:(n.includeFallbackColors=!1,a.mostReadable(t,["#fff","#000"],n));};var G=a.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Y=a.hexNames=function(t){var e={};for(var n in t){t.hasOwnProperty(n)&&(e[t[n]]=n);}return e;}(G),X=function(){var t="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",e="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",n="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?";return{CSS_UNIT:new RegExp(t),rgb:new RegExp("rgb"+e),rgba:new RegExp("rgba"+n),hsl:new RegExp("hsl"+e),hsla:new RegExp("hsla"+n),hsv:new RegExp("hsv"+e),hsva:new RegExp("hsva"+n),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};}();void 0!==t&&t.exports?t.exports=a:void 0===(r=function(){return a;}.call(e,n,e,t))||(t.exports=r);}(Math);},function(t,e,n){var r=n(491),i=n(68),o=n(340);r.Editor=r,r.Page=n(12),r.Flow=n(311),r.Mind=n(283),r.Util=n(30),r.Minimap=n(268),r.Toolbar=n(266),r.Contextmenu=n(265),r.Itempannel=n(264),r.Detailpannel=n(263),r.Command=n(68),r.registerBehaviour=r.Page.registerBehaviour,r.registerNode=r.Page.registerNode,r.registerEdge=r.Page.registerEdge,r.registerGroup=r.Page.registerGroup,r.registerGuide=r.Page.registerGuide,r.registerCommand=i.registerCommand,r.version=o,t.exports=r;},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e;};}(),i=n(30),a=n(37),u=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(void 0===e?"undefined":o(e))&&"function"!=typeof e?t:e;}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":o(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}(e,a),r(e,[{key:"getDefaultCfg",value:function value(){return{type:"detailpannel",container:null};}},{key:"init",value:function value(){this._initContainer();}},{key:"_initContainer",value:function value(){var t=this.container;if(!t)throw new Error("please set the container for the detailpannel !");i.isString(t)&&(t=document.getElementById(t)),this.containerDom=t,this.switch("canvas-selected");}},{key:"switch",value:function value(t){var e=this.containerDom.getElementsByClassName("pannel");i.each(e,function(e){e.dataset.status===t?e.style.display="block":e.style.display="none";});}},{key:"bindEvent",value:function value(){var t=this.editor,e=this.getItems;i.each(e,function(e){i.addEventListener(e,"mousedown",function(){var n=e.dataset;t.getCurrentPage().beginAdd(n.type,{shape:n.shape});});}),i.addEventListener(window,"mouseup",function(){t.getCurrentPage().cancelAdd();});}}]),e;}();t.exports=u;},function(t,e,n){var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e;};}(),i=n(30),a=n(37),u=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(void 0===e?"undefined":o(e))&&"function"!=typeof e?t:e;}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":o(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}(e,a),r(e,[{key:"getDefaultCfg",value:function value(){return{type:"itempannel",container:null};}},{key:"init",value:function value(){this._initContainer();}},{key:"_initContainer",value:function value(){var t=this.container;if(!t)throw new Error("please set the container for the itempannel !");i.isString(t)&&(t=document.getElementById(t)),this.containerDom=t;}},{key:"bindEvent",value:function value(){var t=this.editor;i.delegateEvent(this.containerDom,"mousedown",".getItem",function(){var e=this.dataset;t.getCurrentPage().beginAdd(e.type,e);}),i.addEventListener(window,"mouseup",function(){t.getCurrentPage().cancelAdd();});}}]),e;}();t.exports=u;},function(t,e,n){var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e;};}(),i=n(30),a=n(37),u=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(void 0===e?"undefined":o(e))&&"function"!=typeof e?t:e;}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":o(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}(e,a),r(e,[{key:"getDefaultCfg",value:function value(){return{type:"contextmenu",container:null};}},{key:"init",value:function value(){this._initContainer();}},{key:"_initContainer",value:function value(){var t=this.container;if(!t)throw new Error("please set the container for the tontextmenu !");i.isString(t)&&(t=document.getElementById(t));var e=t.getElementsByClassName("command");t.style.position="absolute",t.style["z-index"]=2,t.style.top="0px",t.style.left="0px",this.commands=e,this.containerDom=t;}},{key:"bindEvent",value:function value(){var t=this,e=this.commands;i.each(e,function(e){i.addEventListener(e,"click",function(){-1===e.className.indexOf("disable")&&t.hide();});});}},{key:"switch",value:function value(t){var e=this.containerDom.getElementsByClassName("menu");i.each(e,function(e){e.dataset.status===t?e.style.display="block":e.style.display="none";});}},{key:"getCommandDoms",value:function value(){return this.commands;}},{key:"show",value:function value(){var t=this.containerDom;this.editor.getCurrentPage().setSignal("preventWheelPan",!0),t.style.display="block";}},{key:"hide",value:function value(){var t=this.containerDom;this.editor.getCurrentPage().setSignal("preventWheelPan",!1),t.style.display="none";}},{key:"move",value:function value(t,e){var n=this.containerDom,r=i.getBoundingClientRect(n),o=parseFloat(i.getStyle(n,"top")),a=parseFloat(i.getStyle(n,"left"));n.style.left=a+(t-r.left)+"px",n.style.top=o+(e-r.top)+"px";}}]),e;}();t.exports=u;},function(t,e,n){var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e;};}(),i=n(30),a=n(37),u=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(void 0===e?"undefined":o(e))&&"function"!=typeof e?t:e;}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":o(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}(e,a),r(e,[{key:"getDefaultCfg",value:function value(){return{type:"toolbar",container:null};}},{key:"init",value:function value(){this._initContainer();}},{key:"_initContainer",value:function value(){var t=this.container;if(!t)throw new Error("please set the container for the toolbar !");i.isString(t)&&(t=document.getElementById(t));var e=t.getElementsByClassName("command");this.commands=e;}},{key:"getCommandDoms",value:function value(){return this.commands;}}]),e;}();t.exports=u;},function(t,e,n){var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n){Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}}return t;},i=n(34),o=i.Util,a=i.G.canvas.Canvas,u=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,t),o.mix(this,r({type:"minimap",container:null,isMinimap:!0,backgroundCSS:{height:"100%",position:"absolute",margin:"auto",left:0,right:0,"z-index":0},minimapContainerCSS:{background:"#fff",position:"relative",overflow:"hidden"},viewportCSS:{height:"100%",position:"absolute",margin:"auto",left:0,right:0,"z-index":1},controlLayerCSS:{width:"100%",height:"100%",cursor:"move",position:"absolute","z-index":2},viewportWindowStyle:{stroke:"#91D5FF"},viewportBackStyle:{fill:"#EBEEF2",fillOpacity:.65},getGraph:function getGraph(){}},e)),this._initContainer(),this._initMiniMap(),this._bindEvent();}return t.prototype._bindEvent=function(){function t(){r=!1,a=void 0,s=void 0,i=void 0,u=void 0,c=void 0;}var e=this,n=this.controlLayer,r=!1,i=void 0,a=void 0,u=void 0,s=void 0,c=void 0;n.on("mousedown",function(t){e.miniMapMatrix&&(c=e.getGraph(),r=!0,i=o.cloneDeep(c.getMatrix()),a=e.miniMapMatrix[0],u=i[0],s={clientX:t.clientX,clientY:t.clientY});}),n.on("mouseup",function(){t();}),n.on("mouseleave",function(){t();}),n.on("mousemove",function(t){if(r&&c){var e=s.clientX-t.clientX,n=s.clientY-t.clientY,f=o.cloneDeep(i);o.mat3.translate(f,f,[u*e/a,u*n/a]),c.updateMatrix(f);}});},t.prototype._initMiniMap=function(){var t=this.background,e=this.viewPort,n=this.width,i=this.height,o=this.viewportWindowStyle,u=this.viewportBackStyle,s=new a({containerDOM:t,width:n,height:i}),c=new a({containerDOM:e,width:n,height:i}),f=c.addShape("rect",{attrs:r({x:0,y:0,width:n,height:i},o)}),l=c.addShape("path",{attrs:r({path:"M0,0 L1,1"},u)});t.css({width:n+"px",height:i+"px"}),e.css({position:"absolute"}),this.miniMapCanvas=s,this.viewportCanvas=c,this.viewportWindow=f,this.viewportBack=l;},t.prototype._initContainer=function(){var t=this.container,e=this.width,n=this.height;if(!t)throw new Error("please set the container for the minimap !");o.isString(t)&&(t=document.getElementById(t)),e||(e=o.getWidth(t)),n||(n=o.getHeight(t));var r=this.minimapContainerCSS;r.width=e+"px",r.height=n+"px";var i=this.backgroundCSS,a=this.viewportCSS,u=this.controlLayerCSS,s=o.createDOM('<div class="g6-editor-minimap-container"></div>',r),c=o.createDOM('<div class="g6-editor-minimap-background"></div>',i),f=o.createDOM('<div class="g6-editor-minimap-viewport">',a),l=o.createDOM('<div class="g6-editor-minimap-control-layer">',u);t.appendChild(s),s.appendChild(l),s.appendChild(f),s.appendChild(c),this.minimapContainer=s,this.background=c,this.viewPort=f,this.controlLayer=l;},t.prototype.renderBackground=function(t){t||(t=this.getGraph());var e=this.miniMapCanvas,n=this.width,r=this.height;o.graph2Canvas({graph:t,width:n,height:r,canvas:e}),this.miniMapMatrix=e.matrix;},t.prototype.renderViewPort=function(t){if(t||(t=this.getGraph()),0!==t.getItems().length){var e=this.viewportWindow,n=this.viewportCanvas,r=this.viewportBack,i=this.miniMapMatrix,a=t.getWidth(),u=t.getHeight(),s=this.width,c=this.height,f=t.getMatrix();if(i){var l=o.invertMatrix({x:0,y:0},f),h=o.invertMatrix({x:a,y:u},f),d=o.applyMatrix(l,i),p=o.applyMatrix(h,i),g=p.x-d.x,v=p.y-d.y;r.attr({path:[["M",0,0],["L",s,0],["L",s,c],["L",0,c],["L",0,0],["M",d.x,d.y],["L",d.x,p.y],["L",p.x,p.y],["L",p.x,d.y],["L",d.x,d.y]]}),e.attr({x:d.x,y:d.y,width:g,height:v}),n.draw();}}},t.prototype.destroy=function(){this.minimapContainer.destroy();},t;}();t.exports=u;},function(t,e,n){var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e;};}(),i=n(267),a=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(void 0===e?"undefined":o(e))&&"function"!=typeof e?t:e;}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":o(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}(e,i),r(e,[{key:"bindPage",value:function value(t){var e=this,n=t.getGraph();n.on("afterchange",function(){e.renderBackground(n),e.renderViewPort(n);}),n.on("afterlayout",function(){e.renderBackground(n),e.renderViewPort(n);}),n.on("afterviewportchange",function(){e.renderViewPort(n);}),this.renderBackground(n),this.getGraph=function(){return t.editor.getCurrentPage().getGraph();};}}]),e;}();t.exports=a;},function(t,e,n){function r(t,e,n){var r=t.getGraph(),i=e.getModel(),o=t.getFirstChildrenBySide("left"),a=o[0]&&r.find(o[0].id);return r.add("node",{id:n,parent:e.id,label:"新建节点",side:i.children.length>2?"left":"right",nth:a?r.getNth(a):void 0});}var i=n(68),o=n(36);i.registerCommand("append",{enable:function enable(t){var e=t.getCurrentPage(),n=e.getSelected();return e.isMind&&1===n.length;},getItem:function getItem(t){var e=t.getCurrentPage(),n=e.getGraph();return this.selectedItemId?n.find(this.selectedItemId):e.getSelected()[0];},execute:function execute(t){var e=t.getCurrentPage(),n=e.getGraph(),i=e.getRoot(),o=this.getItem(t),a=o.getModel(),u=a.hierarchy,s=o.getParent(),c=void 0;if(o.isRoot)c=r(e,o,this.addItemId);else{var f=n.getNth(o);c=n.add("node",{id:this.addItemId,parent:s.id,side:2===u&&3===i.children.length?"left":a.side,label:"新建节点",nth:"left"===a.side&&2===u?f:f+1});}e.clearSelected(),e.clearActived(),e.setSelected(c,!0),1===this.executeTimes&&(this.selectedItemId=o.id,this.addItemId=c.id,e.beginEditLabel(c));},back:function back(t){var e=t.getCurrentPage();e.getGraph().remove(this.addItemId),e.clearSelected(),e.clearActived(),e.setSelected(this.selectedItemId,!0);},shortcutCodes:["Enter"]}),i.registerCommand("appendChild",{enable:function enable(t){var e=t.getCurrentPage(),n=e.getSelected();return e.isMind&&n.length>0;},getItem:function getItem(t){var e=t.getCurrentPage(),n=e.getGraph();return this.selectedItemId?n.find(this.selectedItemId):e.getSelected()[0];},execute:function execute(t){var e=t.getCurrentPage(),n=e.getGraph(),i=this.getItem(t),o=void 0;o=i.isRoot?r(e,i,this.addItemId):n.add("node",{id:this.addItemId,parent:i.id,label:"新建节点"}),e.clearSelected(),e.clearActived(),e.setSelected(o,!0),1===this.executeTimes&&(this.selectedItemId=i.id,this.addItemId=o.id,e.beginEditLabel(o));},back:function back(t){var e=t.getCurrentPage();e.getGraph().remove(this.addItemId),e.clearSelected(),e.clearActived(),e.setSelected(this.selectedItemId,!0);},shortcutCodes:["Tab"]}),i.registerCommand("moveMindNode",{enable:function enable(t){var e=t.getCurrentPage(),n=e.get("panItems");return e.isMind&&n&&n.length>0;},execute:function execute(t){var e=t.getCurrentPage(),n=e.getGraph(),r=this.newParentId,i=this.newNth,a=this.newSide,u=o.cloneDeep(this.model);delete u.shape,delete u.side,n.remove(u.id),o.mix(u,{parent:r,nth:i,side:a});var s=n.add("node",u);e.clearSelected(),e.setSelected(s,!0);},back:function back(t){var e=t.getCurrentPage(),n=e.getGraph(),r=this.originParentId,i=this.originNth,a=this.originSide,u=o.cloneDeep(this.model);delete u.shape,delete u.side,n.remove(u.id),o.mix(u,{parent:r,nth:i,side:a});var s=n.add("node",u);e.clearSelected(),e.setSelected(s,!0);}});},function(t,e,n){var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n){Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}}return t;};n(33).registerEdge("mind-placeholder-edge",{getOriginShapeObject:function getOriginShapeObject(t){return t.getGraph().getShapeObj("edge",{shape:"mind-edge"});},getPath:function getPath(t){return this.getOriginShapeObject(t).getPath(t);},getStyle:function getStyle(t){var e=this.getOriginShapeObject(t).getStyle(t);return r({},e,{stroke:"#91D5FF"});}});},function(t,e,n){n(33).registerEdge("mind-edge",{getEdetal:function getEdetal(t){return t.children&&t.children.length>0&&!t.collapsed?2===t.hierarchy?24:18:0;},getPath:function getPath(t){var e=t.getPoints(),n=t.getSource(),r=t.getTarget(),i=n.getBBox(),o=r.getBBox(),a=r.getModel(),u=14,s=4;if(2===a.hierarchy&&(u=66,s=30),e[0].y===e[1].y){var c=3===a.hierarchy?24:18,f=this.getEdetal(a);return i.centerX<o.centerX?[["M",e[0].x+c,e[0].y],["L",o.maxX+f,o.maxY]]:[["M",e[0].x+2,e[0].y],["L",o.minX-f,o.maxY]];}if(a.hierarchy>=3){var l=3===a.hierarchy?24:18,h=this.getEdetal(a);if(i.centerX<o.centerX){var d=e[0].x+l;return[["M",e[0].x,e[0].y],["M",d,e[0].y],["C",d+s,e[0].y,o.minX-u,o.maxY,o.minX,o.maxY],["L",o.maxX+h,o.maxY]];}var p=e[0].x-l;return[["M",e[0].x,e[0].y],["M",p,e[0].y],["C",p-s,e[0].y,o.maxX+u,o.maxY,o.maxX,o.maxY],["L",o.minX-h,o.maxY]];}var g=this.getEdetal(a);return i.centerX<o.centerX?[["M",e[0].x,e[0].y],["C",e[0].x+s,e[0].y,o.minX-u,o.maxY,o.minX,o.maxY],["L",o.maxX+g,o.maxY]]:[["M",e[0].x,e[0].y],["C",e[0].x-s,e[0].y,o.maxX+u,o.maxY,o.maxX,o.maxY],["L",o.minX-g,o.maxY]];},getStyle:function getStyle(t){var e=t.getTarget().getModel();return{stroke:"#959EA6",lineWidth:e.hierarchy<=3?3:e.hierarchy<=5?2:1};}});},function(t,e,n){var r=n(33),i=n(36);r.registerNode("mind-placeholder",{afterDraw:function afterDraw(t){t.getKeyShape().isPlaceholder=!0;},getPath:function getPath(t){var e=t.getModel().parentModel,n=this.getStyle(t),r=void 0,o=0;return e.hierarchy<=2?r=28:(r=20,o=4),i.getRectPath(-27.5,-r/2+o,55,r,n.radius);},getStyle:function getStyle(){return{fill:"#91D5FF",radius:4,lineWidth:3};},drawExpandedButton:function drawExpandedButton(){},drawCollapsedButton:function drawCollapsedButton(){},anchor:function anchor(){return[[0,1],[1,1]];}});},function(t,e,n){var r=n(33),i=n(36);r.registerNode("mind-root",{adjustLabelPosition:function adjustLabelPosition(t,e){var n=e.getBBox();e.attr({x:-n.width/2,y:-n.height/2-1});},getPath:function getPath(t){var e=this.getSize(t),n=this.getStyle(t);return i.getRectPath(-e[0]/2,-e[1]/2,e[0],e[1],n.radius);},getButtonPositon:function getButtonPositon(t,e,n){return"right"===n?{x:t.maxX+2,y:(t.maxY+t.minY)/2-(e.maxY-e.minY)/2}:{x:t.minX-(e.maxX-e.minX)-2,y:(t.maxY+t.minY)/2-(e.maxY-e.minY)/2};},getPadding:function getPadding(){return i.toAllPadding([12,24]);},getStyle:function getStyle(){return{fill:"#587EF7",stroke:"#587EF7",fillOpacity:1,radius:4};},getLabelStyle:function getLabelStyle(){return{fontSize:20,fill:"white",lineHeight:28};},drawExpandedButton:function drawExpandedButton(){},drawCollapsedButton:function drawCollapsedButton(){},panAble:!1,anchor:[[.45,.5],[.55,.5]]},"mind-first-sub");},function(t,e,n){n(33).registerNode("mind-second-sub",{dy:0,getPadding:function getPadding(){return[8,4,8,4];},getLabelStyle:function getLabelStyle(){return{fill:"rgba(38,38,38,0.85)",fontSize:12,lineHeight:20};}},"mind-node");},function(t,e,n){n(33).registerNode("mind-first-sub",{dy:0,getPadding:function getPadding(){return[6,12,8,12];},getLabelStyle:function getLabelStyle(){return{fill:"rgba(38,38,38,0.85)",fontWeight:500,fontSize:14,lineHeight:20};}},"mind-node");},function(t,e,n){var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n){Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}}return t;},i=n(33),o=n(36),a={fill:"#000",textAlign:"left",textBaseline:"top"},u={stroke:"#959EA6",strokeOpacity:0,fill:"#959EA6",cursor:"pointer"},s={stroke:"#434B54",fill:"#fff",cursor:"pointer"};i.registerNode("mind-node",{dy:4,afterDraw:function afterDraw(t){var e=t.getModel();e.children&&e.children.length>0&&e.collapsed&&this.drawExpandedButton(t);},debugDrawLayoutPoint:function debugDrawLayoutPoint(t){var e=t.getModel();t.getGraphicGroup().addShape("circle",{attrs:{x:e.x,y:e.y,r:5,fill:"red"}});},drawExpandedButton:function drawExpandedButton(t){var e=t.getKeyShape().getBBox(),n=t.getGraphicGroup().addGroup(),i=n.addShape("path",{attrs:r({path:o.getRectPath(0,0,16,7,3)},u)}),a=i.getBBox(),s=o.getMindNodeSide(t),c=this.getButtonPositon(e,a,s),f={fill:"white",r:1};n.addShape("circle",{attrs:r({},f,{x:4,y:3.5}),capture:!1}),n.addShape("circle",{attrs:r({},f,{x:8,y:3.5}),capture:!1}),n.addShape("circle",{attrs:r({},f,{x:12,y:3.5}),capture:!1}),i.attr("lineAppendWidth",20),n.translate(c.x,c.y),i.isExpandedButton=!0,i.isButton=!0;},drawCollapsedButton:function drawCollapsedButton(t){var e=t.getKeyShape().getBBox(),n=t.getGraphicGroup().addShape("path",{attrs:r({path:o.getCollapsedButtonPath()},s)}),i=n.getBBox(),a=o.getMindNodeSide(t),u=this.getButtonPositon(e,i,a);n.translate(u.x,u.y),n.isCollapsedButton=!0,n.isButton=!0;},getButtonPositon:function getButtonPositon(t,e,n){return"right"===n?{x:t.maxX+2,y:t.maxY-(e.maxY-e.minY)/2}:{x:t.minX-(e.maxX-e.minX)-2,y:t.maxY-(e.maxY-e.minY)/2};},getLabel:function getLabel(t){return t.getModel().label;},getPadding:function getPadding(){return[4,8,4,8];},getSize:function getSize(t){var e=t.getModel(),n=t.getGraphicGroup(),r=e.size;if(e.size){if(o.isArray(r))return r;if(o.isNumber(r))return[r,r];}var i=n.findByClass("label")[0],a=this.getPadding(t),u=i.getBBox();return[u.width+a[1]+a[3],u.height+a[0]+a[2]];},getPath:function getPath(t){var e=this.getSize(t),n=this.getStyle(t);return o.getRectPath(-e[0]/2,-e[1]/2+this.dy,e[0],e[1],n.radius);},drawLabel:function drawLabel(t){var e=t.getGraphicGroup(),n=this.getLabel(t),r=this.getLabelStyle(t);n||(n=" ");var i=o.mix(!0,{},a,r,{x:0,y:0});o.isObject(n)?o.mix(i,n):i.text=n;var u=e.addShape("text",{class:"label",attrs:i});return this.adjustLabelText(u),this.adjustLabelPosition(t,u),u;},adjustLabelText:function adjustLabelText(t){var e=t.attr("text"),n=t.getBBox();if(n.maxX-n.minX>400){var r=t.get("context");r.font=t.attr("font"),e=o.getLabelTextByTextLineWidth(e,r),t.attr("text",e);}},adjustLabelPosition:function adjustLabelPosition(t,e){var n=this.getSize(t),r=this.getPadding(),i=n[0],o=e.getBBox();e.attr({x:-i/2+r[3],y:-o.height/2+this.dy});},getLabelStyle:function getLabelStyle(){return{fill:"rgba(38,38,38,0.85)",lineHeight:18,fontSize:12};},getStyle:function getStyle(){return{fill:"#ccc",fillOpacity:0,radius:4,lineWidth:2};},getActivedStyle:function getActivedStyle(){return{stroke:"#44C0FF",lineWidth:2};},getSelectedStyle:function getSelectedStyle(){return{stroke:"#1AA7EE",lineWidth:2};},anchor:[[0,1],[1,1]]});},function(t,e,n){n(276),n(275),n(274),n(273),n(272),n(271),n(270);},function(t,e,n){n(12).registerBehaviour("keydownEditLabel",function(t){t.getGraph().behaviourOn("keydown",function(e){t.showLabelEditor(e);});});},function(t,e,n){n(12).registerBehaviour("keydownMoveSelection",function(t){t.getGraph().on("keydown",function(e){t._moveItemSelection(e);});});},function(t,e,n){n(12).registerBehaviour("hoverMindExpandButton",function(t){var e=t.getGraph();e.behaviourOn("mouseenter",function(t){var n=t.shape;n&&n.isExpandedButton&&(n.attr("fillOpacity",.8),e.draw());}),e.behaviourOn("mouseleave",function(t){var n=t.shape;n&&n.isExpandedButton&&(n.attr("fillOpacity",1),e.draw());});});},function(t,e,n){var r=n(12),i=n(36);r.registerBehaviour("panMindNode",function(t){function e(){o.nth=a;var e=r.add("node",o);t.setSelected(e,!0),u&&r.remove(u.id);}function n(){r.emit("panitemend"),o=void 0,u=void 0,a=void 0;}var r=t.getGraph(),o=void 0,a=void 0,u=void 0;r.behaviourOn("beforeshowdelegation",function(e){e.items.forEach(function(e){t.clearItemActived(e),t.clearItemSelected(e);});}),r.behaviourOn("node:dragstart",function(t){if(2!==t.button){var e=t.item;!(o=e.getModel()).parent||t.shape.isCollapsedButton||t.shape.isExpandedButton?n():(a=r.getNth(e),r.remove(e));}}),r.behaviourOn("itempanning",function(e){if(!e.shape||!e.shape.isPlaceholder){var n=t.getHotArea(e),i=t.getRoot();if(u&&(n?u.id!==n.id&&r.remove(r.find(u.id)):r.remove(r.find(u.id))),u=n,n){var o=n.parent;if(!r.find(n.id)){var a={id:n.id,parent:o.id,isPlaceholder:!0,parentModel:o,baseline:u.parent.id===i.id?"center":void 0,shape:"mind-placeholder",nth:n.nth};n.side&&(a.side=n.side),r.add("node",a);}}}}),r.behaviourOn("drop",function(){if(o)if(u){var s=i.cloneDeep(o);r.remove(u.id),t.executeCommand("moveMindNode",{model:s,newParentId:u.parent.id,newNth:u.nth,newSide:u.side,originParentId:o.parent,originNth:a,originSide:o.side});}else e();n();}),r.behaviourOn("canvas:mouseleave",function(){o&&(e(),n());});},["startPanItem","processPanItem","endPanItem"]);},function(t,e,n){n(281),n(280),n(279),n(278);},function(t,e,n){var r=n(33),i=n(12),o=n(141);r.Util=n(36),r.Global=o,i.setRegister(r,o.nodeDefaultShape,o.edgeDefaultShape,o.groupDefaultShape),n(282),n(277),n(269),t.exports=r;},function(t,e,n){var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n){Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}}return t;},i=n(12),o=n(15),a=n(14),u=a.getGroupIconPath(),s=a.getCollapsedButtonPath(),c=a.getExpandedButtonPath(),f={fill:"#CED4D9"},l={stroke:"#697B8C",fill:"#fff",fillOpacity:0},h={stroke:"#697B8C",fill:"#fff",fillOpacity:0},d={fill:"#000000",textBaseline:"top",textAlign:"left"},p={stroke:"#CED4D9",fill:"#F2F4F5",radius:4},g=o.groupBackgroundPadding,v=184-g[1]-g[3],m=40-g[0]-g[2];i.registerGroup("flow-group",{draw:function draw(t){var e=t.getModel(),n=t.getGraphicGroup(),i=t.getChildrenBBox(),o=e.collapsed,y=e.padding?e.padding:g;if(i.minX===1/0&&(i.minX=e.x,i.maxX=e.x+v,i.minY=e.y,i.maxY=e.y+m),o&&(i.minX=i.maxX-v,i.maxY=i.minY+m),i.maxX-i.minX<v){var b=v-i.maxX+i.minX;i.minX-=b/2,i.maxX+=b/2;}var x=function(t,e){return t.minX-e[3];}(i,y),_=function(t,e){return t.minY-e[0];}(i,y),w=function(t,e){return t.maxX-t.minX+e[3]+e[1];}(i,y),S=function(t,e){return t.maxY-t.minY+e[0]+e[2];}(i,y),M=function(t){return a.mix(!0,{},p,{fill:t.color,stroke:t.color},t.style);}(e),A=function(t,e,n,i){var o=e.addShape("path",{attrs:r({},i,{path:n})});return o.isGroupKeyShape=!0,o;}(0,n,a.getRectPath(x,_,w,S,M.radius),M);return function(t,e,n,r){var i=a.mix(!0,{},d,{x:n+40,y:r+13});a.isString(t)?i.text=t:a.mix(i,t),e.addShape("text",{attrs:i});}(a.isNil(e.label)?"新建分组":e.label,n,x,_),function(t,e,n,i){var o=e.addShape("path",{attrs:r({path:t},f)}),a=o.getBBox();o.translate(n-a.minX+8,i-a.minY+12);}(a.isNil(e.icon)?u:e.icon,n,x,_),function(t,e,n,i,o){var a=void 0;if(t){var u=(a=e.addShape("path",{attrs:r({path:c},h)})).getBBox(),f=u.maxX-u.minX;a.isExpandedButton=!0,a.translate(n+o-u.minX-f-12,i-u.minY+12);}else{var d=(a=e.addShape("path",{attrs:r({path:s},l)})).getBBox(),p=d.maxX-d.minX;a.isCollapsedButton=!0,a.translate(n+o-d.minX-p-12,i-d.minY+12);}return a.isButton=!0,a;}(o,n,x,_,w).item=t,e.x=i.minX,e.y=i.minY,A;},getActivedStyle:function getActivedStyle(){return o.groupActivedStyle;},getSelectedStyle:function getSelectedStyle(){return o.groupSelectedStyle;},getSelectedOutterStyle:function getSelectedOutterStyle(){return o.groupSelectedOutterStyle;},getActivedOutterStyle:function getActivedOutterStyle(){}});},function(t,e,n){function r(t,e){var n=Math.min(t.minX,e.minX),r=Math.min(t.minY,e.minY),i=Math.max(t.maxX,e.maxX),o=Math.max(t.maxY,e.maxY);return{centerX:(n+i)/2,centerY:(r+o)/2,minX:n,minY:r,maxX:i,maxY:o,height:o-r,width:i-n};}function i(t,e){return 2*Math.abs(t.centerX-e.centerX)<t.width+e.width&&2*Math.abs(t.centerY-e.centerY)<t.height+e.height;}function a(t){var e=t.x,n=t.y;return{centerX:e,centerY:n,minX:e,minY:n,maxX:e,maxY:n,height:0,width:0};}function u(t,e){return 0===t.width&&0===t.height?t:{centerX:t.centerX,centerY:t.centerY,minX:t.minX-e,minY:t.minY-e,maxX:t.maxX+e,maxY:t.maxY+e,height:t.height+2*e,width:t.width+2*e};}function s(t,e){return function(t,e){var n=Math.abs(t.x-e.centerX),r=Math.abs(t.y-e.centerY);return n/e.width>r/e.height;}(e,t)?{x:e.x>t.centerX?t.maxX:t.minX,y:e.y}:{x:e.x,y:e.y>t.centerY?t.maxY:t.minY};}function c(t){var e=t.minX,n=t.minY,r=t.maxX,i=t.maxY;return[{x:e,y:n},{x:r,y:n},{x:r,y:i},{x:e,y:i}];}function f(t,e){var n=t.x,r=t.y;return n<e.minX||n>e.maxX||r<e.minY||r>e.maxY;}function l(t,e,n,r){var i=e.x-t.x,o=e.y-t.y,a=r.x-n.x,u=r.y-n.y,s=(-o*(t.x-n.x)+i*(t.y-n.y))/(-a*o+i*u),c=(a*(t.y-n.y)-u*(t.x-n.x))/(-a*o+i*u);return s>=0&&s<=1&&c>=0&&c<=1;}function h(t,e,n){if(n.width===n.height===0)return!1;var r=c(n),i=w(r,4),o=i[0],a=i[1],u=i[2],s=i[3];return l(t,e,o,a)||l(t,e,o,s)||l(t,e,a,u)||l(t,e,u,s);}function d(t){return t=g(t);}function p(t,e){return[t,{x:t.x,y:e.y},e];}function g(t){var e=[],n={};return t.forEach(function(t){var e=t.id=t.x+"-"+t.y;n[e]=t;}),S.each(n,function(t){e.push(t);}),e;}function v(t,e){return Math.abs(t.x-e.x)+Math.abs(t.y-e.y);}function m(t,e,n,r,i){return v(t,e)+v(t,n)+function(t,e){var n=0;return e.forEach(function(e){e&&(t.x===e.x&&(n+=-2),t.y===e.y&&(n+=-2));}),n;}(t,[e,n,r,i]);}function y(t,e,n,r,i,o,a){var u=[],s=[e],c={},f={},l={};f[e.id]=0,l[e.id]=m(e,n,e);var d={};t.forEach(function(t){d[t.id]=t;});for(;s.length;){var p=function(){var p=void 0,y=1/0;if(s.forEach(function(t){l[t.id]<y&&(y=l[t.id],p=t);}),p===n){var b=[];return function t(e,n,r,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;e.unshift(n[i]),r[i]&&r[i]!==i&&o<=100&&t(e,n,r,r[i],o+1);}(b,d,c,n.id),{v:b};}!function(t,e){var n=t.indexOf(e);n>-1&&t.splice(n,1);}(s,p),u.push(p),function(t,e,n,r){var i=[];return t.forEach(function(t){t!==e&&(t.x!==e.x&&t.y!==e.y||h(t,e,n)||h(t,e,r)||i.push(t));}),g(i);}(t,p,r,i).forEach(function(t){if(-1===u.indexOf(t)){-1===s.indexOf(t)&&s.push(t);var r=l[p.id]+v(p,t);f[t.id]&&r>=f[t.id]||(c[t.id]=p.id,f[t.id]=r,l[t.id]=f[t.id]+m(t,n,e,o,a));}});}();if("object"===(void 0===p?"undefined":_(p)))return p.v;}return console.error("cannot find path: ",t,e,n),[e,n];}function b(t,e,n,o,l){var h=n&&n.bbox?n.bbox:a(t),v=o&&o.bbox?o.bbox:a(e);if(i(h,v))return d(p(t,e));var m=u(h,l),b=u(v,l);if(i(m,b))return d(p(t,e));var x=s(m,t),_=s(b,e),w=function(){var t=[],e=[];(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach(function(n){t.push(n.x),e.push(n.y);});var n=Math.min.apply(Math,t),r=Math.max.apply(Math,t),i=Math.min.apply(Math,e),o=Math.max.apply(Math,e);return{centerX:(n+r)/2,centerY:(i+o)/2,maxX:r,maxY:o,minX:n,minY:i,height:o-i,width:r-n};}([x,_]),S=(r(m,b),r(m,w)),M=r(b,w),A=[];A=(A=A.concat(c(S))).concat(c(M));var O={x:(t.x+e.x)/2,y:(t.y+e.y)/2};[w,S,M].forEach(function(t){A=A.concat(function(t,e){return function(t,e){return e<t.minX||e>t.maxX?[]:[{x:e,y:t.minY},{x:e,y:t.maxY}];}(t,e.x).concat(function(t,e){return e<t.minY||e>t.maxY?[]:[{x:t.minX,y:e},{x:t.maxX,y:e}];}(t,e.y));}(t,O).filter(function(t){return f(t,m)&&f(t,b);}));}),[{x:x.x,y:_.y},{x:_.x,y:x.y}].forEach(function(t){f(t,m)&&f(t,b)&&A.push(t);}),A.unshift(x),A.push(_);var P=y(A=g(A),x,_,h,v,t,e);return P.unshift(t),P.push(e),d(P);}function x(t,e){var n=[],r=t[0];return n.push("M"+r.x+" "+r.y),t.forEach(function(r,i){var o=t[i+1],a=t[i+2];if(o&&a){if(function(t,e,n){return!(t.x===e.x===n.x||t.y===e.y===n.y);}(r,o,a)){var u=function(t,e,n,r){var i=v(t,e),o=v(n,e);return i<r&&(r=i),o<r&&(r=o),[{x:e.x-r/i*(e.x-t.x),y:e.y-r/i*(e.y-t.y)},{x:e.x-r/o*(e.x-n.x),y:e.y-r/o*(e.y-n.y)}];}(r,o,a,e),s=w(u,2),c=s[0],f=s[1];n.push("L"+c.x+" "+c.y),n.push("Q"+o.x+" "+o.y+" "+f.x+" "+f.y),n.push("L"+f.x+" "+f.y);}else n.push("L"+o.x+" "+o.y);}else o&&n.push("L"+o.x+" "+o.y);}),n.join("");}var _="function"==typeof Symbol&&"symbol"==o(Symbol.iterator)?function(t){return void 0===t?"undefined":o(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":o(t);},w=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0){}}catch(t){i=!0,o=t;}finally{try{!r&&u.return&&u.return();}finally{if(i)throw o;}}return n;}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance");};}(),S=n(14),M=n(12),A={offset:10,borderRadius:5};M.registerEdge("flow-polyline",{getPathByPoints:function getPathByPoints(t,e,n){var r=S.merge({},A).offset,i=b(t[0],t[t.length-1],e,n,r);return S.pointsToPolygon(i);}},"flow-edge"),M.registerEdge("flow-polyline-round",{getPathByPoints:function getPathByPoints(t,e,n){var r=S.merge({},A),i=r.offset,o=r.borderRadius;return x(d(b(t[0],t[t.length-1],e,n,i)),o);}},"flow-edge");},function(t,e,n){function r(t,e,n,r){var i=r?r/2:30,o=r;if(t<=e&&e<=n||t>=e&&e>=n){var a=(n-e)/2,u=Math.abs(a);if(0===a)return t===e?0:(e-t)/Math.abs(e-t)*i;if(u>o){var s=a/u*o;return Math.abs(s)<i?a/u*i:s;}return u<i?a/u*i:a;}var c=i;return(c=Math.abs(e-n)<2*Math.abs(e-t)?r*Math.abs(e-n)/(2*Math.abs(e-t)):r)>o&&(c=o),c<i&&(c=i),e>t?c:-c;}function i(t,e,n,i){var o=t.bbox,a=function(t,e){var n=Math.abs(t.x-e.centerX),r=Math.abs(t.y-e.centerY);return n/e.width>r/e.height;}(e,o),u=void 0,s=void 0;u=s=0;var c=Math.min(o.height,o.width);return i&&i.bbox&&(c=Math.min(c,i.bbox.height,i.bbox.width)),a?u=r(o.centerX,e.x,n.x,c):s=r(o.centerY,e.y,n.y,c),{x:e.x+u,y:e.y+s};}function o(t,e){var n=t.x,r=t.y,i=e.x,o=e.y;return{x:n+(i-n)*s,y:r+(o-r)*s};}function a(t,e,n){var r=t[0],a=t[t.length-1],s=["M",r.x,r.y],c=function(t,e,n,r){return[n&&n.bbox?i(n,t,e,r):o(t,e),r&&r.bbox?i(r,e,t,n):o(e,t)];}(r,a,e,n),f=["C"],l=[s];return u.each(c,function(t){f.push(t.x,t.y);}),f.push(a.x,a.y),l.push(f),l;}var u=n(14),s=.1;n(12).registerEdge("flow-smooth",{getPathByPoints:function getPathByPoints(t,e,n){return a(t,e,n);}},"flow-edge");},function(t,e,n){function r(t,e,n){return t.addShape("marker",{attrs:{symbol:function symbol(t,e,r){var i=r/1.6;return[["M",t,e-i],["L",t+n,e],["L",t,e+i],["z"]];},x:0,y:0,radius:n,fill:e.stroke},capture:!1});}var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n){Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}}return t;},o=n(12),a=n(14),u=n(15);o.registerEdge("flow-edge",{draw:function draw(t){var e=t.getModel(),n=t.getGraphicGroup(),o=t.getPoints(),s=function(t,e,n,o,s){var c=void 0,f=void 0;o.endArrow&&(c=!0,delete o.endArrow),o.startArrow&&(f=!0,delete o.startArrow);var l=e.addShape("path",{attrs:i({},o,{path:n})});if(c){var h=l.get("segments"),d=s[s.length-1],p=u.arrowRadius;if(d){var g=h[h.length-1];if(!g||!g.endTangent)return;var v=g.endTangent();if(0===v[0]&&0===v[1])return;var m=a.vec2.normalize([],v),y=p*m[0],b=p*m[1],x=(n=a.parsePathString(n))[n.length-1];x[x.length-2]-=y,x[x.length-1]-=b,l.attr("path",n),d.x-=y,d.y-=b;var _=r(e,o,p);l.endArrow=_,_.isArrow=!0,a.arrowTo(_,d.x,d.y,0,0,v[0],v[1]);}}if(f){var w=l.get("segments"),S=s[0],M=u.arrowRadius;if(S){var A=w[1];if(!A||!A.endTangent)return;var O=A.startTangent();if(0===O[0]&&0===O[1])return;var P=a.vec2.normalize([],O),E=M*P[0],C=M*P[1],j=(n=a.parsePathString(n))[0];j[j.length-2]-=E,j[j.length-1]-=C,l.attr("path",n),S.x-=E,S.y-=C;var k=r(e,o,M);l.startArrow=k,k.isArrow=!0,a.arrowTo(k,S.x,S.y,0,0,O[0],O[1]);}}return l;}(0,n,this.getPath(t),this.getStyle(t),o);if(e.label&&s){var c=function(t,e,n){var r=n.getPoint(.5),i=a.mix(!0,{},u.edgeLabelStyle,r);if(r)return a.isString(t)?i.text=t:a.mix(i,t),e.addShape("text",{attrs:i});}(e.label,n,s);c&&(function(t,e,n){var r=a.toAllPadding(u.edgeLabelRectPadding),o=t.getBBox();n=n||u.edgeLabelRectStyle,e.addShape("rect",{attrs:i({},n,{x:o.minX-r[3],y:o.minY-r[0],width:o.maxX-o.minX+r[1]+r[3],height:o.maxY-o.minY+r[0]+r[2]})});}(c,n,e.labelRectStyle),a.toFront(c,n));}return s;},getPath:function getPath(t){var e=t.getPoints(),n=t.getSource(),r=t.getTarget();return this.getPathByPoints(e,n,r);},getPathByPoints:function getPathByPoints(t){return a.pointsToPolygon(t);},getStyle:function getStyle(t){var e=t.getModel();return a.mix(!0,{},u.edgeStyle,{stroke:e.color},e.style);},getActivedStyle:function getActivedStyle(){return u.edgeActivedStyle;},getSelectedStyle:function getSelectedStyle(){return u.edgeSelectedStyle;},getActivedOutterStyle:function getActivedOutterStyle(){},getSelectedOutterStyle:function getSelectedOutterStyle(){}});},function(t,e,n){var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n){Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}}return t;},i=n(12),o=n(14),a=n(15);i.registerNode("flow-node",{draw:function draw(t){var e=t.getModel(),n=t.getGraphicGroup(),i=o.getNodeSize(e),u=this.getColor(t),s=this.getStyle(e,u),c=function(t,e,n,i){return e.addShape("path",{attrs:r({},i,{path:n})});}(0,n,this.getPath(i,s),s);return e.label&&function(t,e){var n=o.mix(!0,{},a.nodeLabelStyle,{x:0,y:0});o.isString(t)?n.text=t:o.mix(n,t),e.addShape("text",{attrs:n});}(e.label,n),c;},getStyle:function getStyle(t,e){var n=void 0,r=void 0;if(e){var i=o.Palettes.generate(e);n=i[0],r=i[3];}return o.mix(!0,{},a.nodeStyle,{fill:n,stroke:r},t.style);},color:null,getColor:function getColor(t){var e=t.getModel();return e.color?e.color:this.color;},getPath:function getPath(t,e){return o.getRectPath(-t[0]/2,-t[1]/2,t[0],t[1],e.radius);},getActivedOutterStyle:function getActivedOutterStyle(){return a.nodeActivedOutterStyle;},getActivedStyle:function getActivedStyle(t){var e=this.getColor(t);if(e){var n=o.Palettes.generate(e);return{fill:n[0],stroke:n[5]};}return a.nodeActivedStyle;},getSelectedStyle:function getSelectedStyle(t){var e=this.getColor(t);if(e){var n=o.Palettes.generate(e);return{fill:n[2],stroke:n[5]};}return a.nodeSelectedStyle;},getSelectedOutterStyle:function getSelectedOutterStyle(t){var e=this.getColor(t);if(e){var n=o.Palettes.generate(e);return{stroke:n[1],fill:n[1]};}return a.nodeSelectedOutterStyle;},anchor:[[.5,0],[1,.5],[.5,1],[0,.5]]}),i.registerNode("flow-html",{},["flow-node","html"]),i.registerNode("flow-rect",{},"flow-node"),i.registerNode("flow-capsule",{getPath:function getPath(t){return o.getRectPath(-t[0]/2,-t[1]/2,t[0],t[1],t[1]/2);}},"flow-node"),i.registerNode("flow-circle",{getPath:function getPath(t){var e=t[0],n=t[1];return o.getEllipsePath(0,0,e/2,n/2);}},"flow-node"),i.registerNode("flow-rhombus",{getPath:function getPath(t){var e=t[0],n=t[1],r=[{x:0,y:0-n/2},{x:0+e/2,y:0},{x:0,y:0+n/2},{x:0-e/2,y:0},{x:0,y:0-n/2}];return o.pointsToPolygon(r);}},"flow-node");},function(t,e,n){n(288),n(287),n(286),n(285),n(284);},function(t,e,n){var r=n(12),i=n(15),o=n(14);r.registerBehaviour("dragOutFromGroup",function(t){function e(){clearTimeout(u),a&&n.update(a,{padding:void 0,style:void 0}),s=!1,r=void 0,a=void 0;}var n=t.getGraph(),r=void 0,a=void 0,u=void 0,s=!1;n.behaviourOn("drag",function(e){t.getSignal("panningItem")&&!s&&(clearTimeout(u),u=setTimeout(function(){var u=t.get("panItems");if(u){if(r=u[0],a=u[0].getParent(),r&&1===u.length&&a&&!e.shape){var c=t.get("panItemDelegation").getBBox(),f=a.getBBox();o.rectRectCrossAlgorithm(c,f)&&(n.update(a,{padding:i.groupBackgroundPadding.map(function(t){return t-8;}),style:i.dragNodeLeaveFromGroupStyle}),s=!0);}s||(r=void 0,a=void 0);}},i.outFromGroupDelayTime));}),n.behaviourOn("dragenter",function(t){r&&a&&(a===t.item&&n.update(a,{padding:i.groupBackgroundPadding.map(function(t){return t+4;}),style:i.dragNodeHoverToGroupStyle}),s=!1);}),n.on("drop",function(t){a&&r&&!t.shape&&(n.update(r,{parent:void 0}),n.update(a,{style:void 0}),e());}),n.on("dragend",function(){e();}),n.behaviourOn("canvas:mouseleave",function(){e();});});},function(t,e,n){var r=n(12),i=n(15);r.registerBehaviour("dragNodeAddToGroup",function(t){function e(){t.setSignal("dragaddnodetogroup",!1),r=void 0,o=void 0;}var n=t.getGraph(),r=void 0,o=void 0;n.behaviourOn("dragenter",function(e){if(t.getSignal("panningItem")){var a=t.get("panItems");a[0]&&a[0].isNode&&1===a.length&&e.item&&e.item.isGroup&&a[0].getParent()!==e.item&&(r=a[0],o=e.item,n.update(o,{padding:i.groupBackgroundPadding.map(function(t){return t+4;}),style:i.dragNodeHoverToGroupStyle}));}}),n.behaviourOn("dragleave",function(){o&&r&&n.update(o,{padding:void 0,style:void 0});}),n.behaviourOn("drop",function(e){function i(){n.update(a,{parent:u});}if(o&&r&&o===e.item){t.setSignal("dragaddnodetogroup",!0);var a=r.id,u=o.id;n.update(u,{padding:void 0,style:void 0,collapsed:!1});var s=t.editor;s?s.executeCommand(i):i();}}),n.behaviourOn("dragend",function(){e();}),n.behaviourOn("canvas:mouseleave",function(){o&&(n.update(o,{padding:void 0,style:void 0}),e());});});},function(t,e,n){n(12).registerBehaviour("keydownShiftMultiSelected",function(t){var e=t.getGraph();e.behaviourOn("keydown",function(e){e.domEvent.shiftKey&&t.setSignal("shiftKeyDown",!0);}),e.behaviourOn("keyup",function(e){e.domEvent.shiftKey||t.setSignal("shiftKeyDown",!1);});});},function(t,e,n){n(12).registerBehaviour("keydownCmdWheelZoom",function(t){var e=t.getGraph();e.behaviourOn("keydown",function(e){91===e.domEvent.keyCode&&t.setSignal("wheelZoom",!0);}),e.behaviourOn("keyup",function(e){91===e.domEvent.keyCode&&t.setSignal("wheelZoom",!1);});});},function(t,e,n){var r=n(12),i=n(15);r.registerBehaviour("dragMultiSelect",function(t){function e(){t.css({cursor:i.cursor.beforePanCanvas}),a=void 0,u=void 0;}var n=t.getGraph(),r=n.getFrontRootGroup(),o=n.getFrontCanvas(),a=void 0,u=void 0;t.css({cursor:i.cursor.multiSelect}),n.behaviourOn("dragstart",function(t){2!==t.button&&(a={x:t.x,y:t.y},u=r.addShape("rect",{attrs:i.multiSelectRectStyle}));}),n.behaviourOn("drag",function(t){u&&(u.attr({x:Math.min(a.x,t.x),y:Math.min(a.y,t.y),width:Math.abs(t.x-a.x),height:Math.abs(t.y-a.y)}),o.draw());}),n.behaviourOn("dragend",function(){function r(){t.clearSelected(),i.forEach(function(e){var r=n.find(e),i=r.getBBox();i.minX>a.minX&&i.minY>a.minY&&i.maxX<a.maxX&&i.maxY<a.maxY&&t.setSelected(r,!0);});}if(u){var i=n.getNodes().map(function(t){return t.id;}),a=u.getBBox(),s=t.editor;s?s.executeCommand(r):r(),u.remove(),t.changeMode("default"),t.updateStatus(),o.draw(),e();}}),n.behaviourOn("canvas:mouseleave",function(){u&&(u.remove(),o.draw(),e());});});},function(t,e,n){var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n){Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}}return t;},i=n(12),o=n(15),a=n(14);i.registerBehaviour("dragAnchorAddEdge",function(t){function e(){t.setSignal("dragEdge",!1),f=void 0,l=void 0,h=void 0,d=void 0;}var n=t.getGraph(),i=n.getFrontCanvas(),u=n.getFrontRootGroup(),s=t.get("noEndEdge"),c=void 0,f=void 0,l=void 0,h=void 0,d=void 0;n.behaviourOn("anchor:dragstart",function(e){if(2!==e.button){var n=e.shape,i=n.get("freezePoint");h=n.getItem(),c=t.get("addModel"),d=n.getIndex(),c.source=h.id,c.sourceAnchor=d,l={x:i.x,y:i.y},f=u.addShape("path",{attrs:r({},o.edgeDelegationStyle),capture:!1}),t.setSignal("dragEdge",!0),t.dragEdgeBeforeShowAnchor(h,d,"target");}}),n.behaviourOn("anchor:drag",function(t){f&&a.dragingEdgeEndPoint("target",c,n,f,l,t,h);}),n.behaviourOn("anchor:dragend",function(r){function i(){n.add("edge",c);}if(f){if(r.shape){if(r.shape.isAnchor&&r.shape.hasHotspot){var a=r.shape.getItem();c.target=a.id,c.targetAnchor=r.shape.getIndex();var u=t.editor;u?u.executeCommand(i):i();}}else if(s){c.target={x:r.x,y:r.y};var l=t.editor;l?l.executeCommand(i):i();}n.getNodes().forEach(function(e){t.clearAnchor(e);}),t.clearAnchor(h),t.setActived(h,!1),t.setSelected(h,!1),t.css({cursor:o.cursor.beforePanCanvas}),f.remove(),n.draw(),t.endAdd(),e();}else e();}),n.behaviourOn("canvas:mouseleave",function(){f?(n.getNodes().forEach(function(e){t.clearAnchor(e);}),t.setActived(h,!1),t.clearAnchor(h),f.remove(),t.cancelAdd(),i.draw(),e()):e();});},["dragHoverAnchorHotspot","hoverAnchorActived"]);},function(t,e,n){n(12).registerBehaviour("dragHoverAnchorHotspot",function(t){var e=t.getGraph();e.behaviourOn("anchor:dragenter",function(e){if(t.getSignal("dragEdge")){var n=e.shape;t.setHotspotActived(n,!0);}}),e.behaviourOn("anchor:dragleave",function(e){if(t.getSignal("dragEdge")){var n=e.shape;t.setHotspotActived(n,!1);}});});},function(t,e,n){var r=n(12),i=n(14),o=n(15);r.registerBehaviour("dragPanelItemAddNode",function(t){function e(){t.setSignal("panningItem",!1),t.set("panItemDelegation",void 0),t.set("panItemStartBox",void 0),t.set("panItemStartPoint",void 0),c=void 0,f=void 0,l=void 0,h=void 0;}var n=t.getGraph(),r=n.getFrontRootGroup(),a=n.getFrontCanvas(),u=n.getCanvas().get("htmlElementContaniner"),s=void 0,c=void 0,f=void 0,l=void 0,h=void 0;n.behaviourOn("canvas:mouseenter",function(e){if(!c&&(l=t.get("addType"),h=t.get("addModel"),"node"===l)){var n=(f=i.getNodeSize(h,u))[0]/2,a=f[1]/2;s={minX:e.x-n,minY:e.y-a,maxX:e.x+n,maxY:e.y+a,width:f[0],height:f[1]},c=i.getRectByBox(s,r,o.nodeDelegationStyle),t.setSignal("panningItem",!0),t.set("panItemDelegation",c),t.set("panItemStartBox",s),t.set("panItemStartPoint",{x:e.x,y:e.y});}}),n.behaviourOn("mouseup",function(r){function o(){n.add(u,i.cloneDeep(a)),t.clearSelected(),t.setSelected(n.find(a.id),!0),t.focusGraphWrapper();}if(c){var a=i.mix({},h,{x:r.x,y:r.y}),u=l;i.setId(a);var s=t.editor;s?s.executeCommand(o):o(),c.remove(),t.endAdd(),t.clearAlignLine(),e();}}),n.behaviourOn("canvas:mouseleave",function(){c&&(t.clearAlignLine(),c.remove(),a.draw(),t.cancelAdd(),e());});},["processPanItem"]);},function(t,e,n){var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n){Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}}return t;},i=n(12),o=n(15),a=n(14);i.registerBehaviour("dragEdgeControlPoint",function(t){function e(e){function r(){n.update(b,i);}if(f){var i=void 0;if(n.getNodes().forEach(function(e){t.clearAnchor(e);}),t.css({cursor:o.cursor.beforePanCanvas}),f.remove(),e.shape){if(e.shape.isAnchor){var a=e.shape,y=a.getItem();s?i={target:y.id,targetAnchor:a.getIndex()}:c&&(i={source:y.id,sourceAnchor:a.getIndex()});}}else u&&(s?i={target:{x:e.x,y:e.y}}:c&&(i={source:{x:e.x,y:e.y}})),n.show(v);n.show(v);var b=v.id;if(i){var x=t.editor;x?x.executeCommand(r):r();}t.changeMode("default"),t.setSignal("dragEdge",!1),s=void 0,c=void 0,f=void 0,l=void 0,h=void 0,d=void 0,p=void 0,g=void 0,v=void 0,m=void 0;}}var n=t.getGraph(),i=n.getFrontRootGroup(),u=t.get("noEndEdge"),s=void 0,c=void 0,f=void 0,l=void 0,h=void 0,d=void 0,p=void 0,g=void 0,v=void 0,m=void 0;n.behaviourOn("edgeControlPoint:dragstart",function(e){if(2!==e.button){var a=e.shape;a.isTargetEndPoint()?(v=a.getItem(),m=v.getModel(),s=a,l=a.getSourcePoint(),h=v.getSource(),p=m.sourceAnchor):a.isSourceEndPoint()&&(v=a.getItem(),m=v.getModel(),c=a,l=a.getTargetPoint(),d=v.getTarget(),g=m.targetAnchor),v&&(f=i.addShape("path",{attrs:r({path:"M0 0L 1 1"},o.edgeDelegationStyle),capture:!1}),h?t.dragEdgeBeforeShowAnchor(h,p,"target"):d&&t.dragEdgeBeforeShowAnchor(d,g,"source"),n.hide(v),t.setSignal("dragEdge",!0));}}),n.behaviourOn("edgeControlPoint:drag",function(t){f&&a.dragingEdgeEndPoint(h?"target":"source",m,n,f,l,t,h,d);}),n.behaviourOn("edgeControlPoint:mouseleave",function(e){s||c||(t.changeMode("default"),e.toShape||t.css({cursor:o.cursor.beforePanCanvas}));}),n.behaviourOn("edgeControlPoint:dragend",e),n.behaviourOn("canvas:mouseleave",e);},["dragHoverAnchorHotspot"]);},function(t,e,n){var r=n(12),i=n(15);r.registerBehaviour("hoverEdgeControlPoint",function(t){t.getGraph().behaviourOn("edgeControlPoint:mouseenter",function(e){if(!t.getSignal("dragEdge")&&!t.getSignal("panningItem")){var n=e.shape;(n.isTargetEndPoint()||n.isSourceEndPoint())&&(t.css({cursor:i.cursor.hoverEdgeControllPoint}),t.changeMode("resize"));}});});},function(t,e,n){var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n){Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}}return t;},i=n(12),o=n(15);i.registerBehaviour("hoverAnchorActived",function(t){var e=t.getGraph(),n=e.getFrontCanvas();e.behaviourOn("anchor:mouseenter",function(e){if(!t.getSignal("panningItem")&&!t.getSignal("dragEdge")){var i=e.shape,a=i.getItem(),u=a.getModel(),s=t.get("addEdgeModel"),c=r({},s,{source:u.id}),f={anchor:i.getPoint(),item:a};t.emit("hoveranchor:beforeaddedge",f),f.cancel?t.css({cursor:o.cursor.hoverUnEffectiveAnchor}):(t.css({cursor:o.cursor.hoverEffectiveAnchor}),!i.get("destroyed")&&i.setActived(),t.beginAdd("edge",c),n.draw());}}),e.behaviourOn("anchor:mouseleave",function(e){if(!t.getSignal("dragEdge")&&!t.getSignal("panningItem")){var r=e.shape,i=r.getItem();t.css({cursor:o.cursor.beforePanCanvas}),i.isSelected||(t.clearAnchor(i),t.setActived(i,!1)),!r.get("destroyed")&&r.clearActived(),t.cancelAdd(),n.draw();}});});},function(t,e,n){var r=n(12),i=n(14);r.registerBehaviour("panItem",function(t){var e=t.getGraph();e.behaviourOn("drop",function(){function n(){a.forEach(function(t){var n=e.find(t),r=n.getModel();n.isGroup?i.panGroup(n,f,l,e):(e.update(n,{x:r.x+f,y:r.y+l}),e.toFront(n));}),1===a.length&&(t.clearSelected(),t.setSelected(c,!0));}var r=t.get("panItems");if(r){var o=r[0],a=r.map(function(t){return t.id;}),u=t.get("panItemDelegation"),s=t.get("panItemStartBox"),c=o.id,f=u.attr("x")-s.minX,l=u.attr("y")-s.minY;e.emit("afterpanitemdrop",{panItems:r}),t.clearAlignLine();var h=t.editor;!h||t.getSignal("dragaddnodetogroup")?n():h.executeCommand(n),e.emit("panitemend");}});},["startPanItem","processPanItem","endPanItem"]);},function(t,e,n){n(301),n(300),n(299),n(298),n(297),n(296),n(295),n(294),n(293),n(292),n(291),n(290);},function(t,e,n){var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n){Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}}return t;},i=n(14),o={};o.AUGMENT={addOutterShape:function addOutterShape(t,e,n){this.clearOutterShape(t);var o=t.getKeyShape(),a=t.getGraphicGroup(),u=o.get("attrs"),s=o.get("type"),c=o.attr("lineWidth"),f=a.addShape(s,{attrs:r({},u,{lineWidth:e,fill:null},n)});i.toBack(f,a);var l=f.getBBox(),h=l.maxX-l.minX,d=l.maxY-l.minY,p=(l.minX+l.maxX)/2,g=(l.minY+l.maxY)/2;f.transform([["t",-p,-g],["s",(e+h+2*c)/h,(e+d+2*c)/d],["t",p,g]]),f.isOutter=!0,t.outterShape=f;},clearOutterShape:function clearOutterShape(t){t.outterShape&&t.outterShape.remove();}},t.exports=o;},function(t,e,n){function r(t){t.controlPointShapes&&i.each(t.controlPointShapes,function(t){t.remove();}),t.controlPointShapes=[],t.isControlPointShow=!1;}var i=n(14),o=n(15),a={};a.INIT="_initResize",a.CFG={nodeResizeable:!1,edgeResizeable:!0},a.AUGMENT={_initResize:function _initResize(){var t=this,e=this.get("_graph"),n=this.get("nodeResizeable"),o=this.get("edgeResizeable");n&&e.on("afteritemdraw",function(e){"node"===e.item.type&&e.item.isVisible()&&t.drawControlPoints(e.item);}),o&&e.on("afteritemdraw",function(e){"edge"===e.item.type&&e.item.isVisible()&&t.drawControlPoints(e.item);}),e.on("afteritemhide",function(t){t.item.isControlPointShow&&function(t){t.controlPointShapes&&i.each(t.controlPointShapes,function(t){t.hide();}),t.isControlPointShow=!1;}(t.item);}),e.on("afteritemshow",function(t){!t.item.isControlPointShow&&function(t){t.controlPointShapes&&i.each(t.controlPointShapes,function(t){t.show();}),t.isControlPointShow=!0;}(t.item);}),e.on("beforeitemdestroy",function(t){t.item.isControlPointShow&&r(t.item);});},drawControlPoints:function drawControlPoints(t){var e=this.get("_graph").getFrontRootGroup(),n=this.get("nodeResizeable"),a=this.get("edgeResizeable");"node"===t.type?n&&function(t,e){var n=t.getBBox(),a=[{x:n.minX,y:n.minY},{x:n.maxX,y:n.minY},{x:n.minX,y:n.maxY},{x:n.maxX,y:n.maxY}];r(t);var u=e.addShape("rect",{attrs:i.mix({},o.nodeSelectedBoxStyle,{symbol:"square",x:n.minX,y:n.minY,width:n.maxX-n.minX,height:n.maxY-n.minY})});t.controlPointShapes.push(u),i.each(a,function(n){var r=e.addShape("marker",{attrs:i.mix({},o.nodeControlPointStyle,{symbol:"square",x:n.x,y:n.y}),freezePoint:{x:n.x,y:n.y},item:t});t.controlPointShapes.push(r);});}(t,e):"edge"===t.type&&a&&function(t,e){var n=t.getPoints(),a=t.getModel();r(t),i.each(n,function(r,u){var s=e.addShape("marker",{attrs:i.mix({},o.edgeControlPointStyle,{x:r.x,y:r.y}),freezePoint:{x:r.x,y:r.y},item:t});s.eventPreFix="edgeControlPoint",s.getSourcePoint=function(){return n[0];},s.getTargetPoint=function(){return n[n.length-1];},s.getItem=function(){return t;},s.isSourceEndPoint=function(){return a.source&&0===u;},s.isTargetEndPoint=function(){return a.target&&u===n.length-1;},t.controlPointShapes.push(s);});}(t,e),t.isControlPointShow=!0;}},t.exports=a;},function(t,e,n){var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n){Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}}return t;},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e;};}(),a=n(37),u=n(15),s=n(14),c=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(void 0===e?"undefined":o(e))&&"function"!=typeof e?t:e;}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":o(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}(e,a),i(e,[{key:"getDefaultCfg",value:function value(){return{_anchorItemCache:{}};}},{key:"init",value:function value(){var t=this,e=this.graph;e.on("afteritemdraw",function(e){e.item.isAnchorShow&&t.showAnchor(e.item);}),e.on("beforeitemdestroy",function(e){t._clearAnchor(e.item);}),e.on("afteritemhide",function(e){e.item.isNode&&t._clearAnchor(e.item);});}},{key:"_updateAnchor",value:function value(t){var e=this.graph.getFrontCanvas();t.anchorShapes.forEach(function(t){t.updatePosition();}),e.draw();}},{key:"_drawAnchor",value:function value(t,e,n,i){var o=t.getAnchorPoints();this._clearAnchor(t),s.each(o,function(o,a){if(!n||-1!==n.indexOf(a)){var c=void 0,f=e.addShape("marker",{attrs:r({symbol:"circle"},u.anchorPointStyle,{x:o.x,y:o.y}),freezePoint:o,item:t,index:a,eventPreFix:"anchor",isItemChange:function isItemChange(){},zIndex:u.zIndex.anchorPoint});f.eventPreFix="anchor",f.showHotspot=function(){c=e.addShape("marker",{attrs:r({symbol:"circle"},u.anchorHotsoptStyle,{x:o.x,y:o.y}),freezePoint:o,capture:!1,zIndex:u.zIndex.anchorHotsopt}),t.anchorShapes.push(c),f.hasHotspot=!0,s.toBack(c,e);},f.getIndex=function(){return a;},f.getItem=function(){return t;},f.getPoint=function(){return o;},f.updatePosition=function(){var e=t.getAnchorPoints()[a];f.attr(e);},f.setActived=function(){f.attr(u.anchorPointHoverStyle);},f.clearActived=function(){f.attr(u.anchorPointStyle);},f.isAnchor=!0,f.setHotspotActived=function(t){c&&(t?c.attr(u.anchorHotsoptActivedStyle):c.attr(u.anchorHotsoptStyle));},i&&f.showHotspot(),t.anchorShapes.push(f),t.getAllAnchors=function(){return t.anchorShapes.filter(function(t){return t.isAnchor;});},t.getAnchor=function(e){return t.anchorShapes.find(function(t){return t.get("index")===e;});};}});}},{key:"_clearAnchor",value:function value(t){t.anchorShapes&&t.anchorShapes.forEach(function(t){t.remove();}),t.anchorShapes=[];}},{key:"setHotspotActived",value:function value(t,e){var n=this.flow.getGraph().getFrontCanvas();t.setHotspotActived(e),n.draw();}},{key:"showAnchor",value:function value(t,e,n){if(t.isVisible()){var r=this.graph,i=this._anchorItemCache,o=r.getFrontRootGroup(),a=r.getFrontCanvas();this._drawAnchor(t,o,e,n),t.isAnchorShow=!0,i[t.id]=t,a.draw();}}},{key:"clearAnchor",value:function value(t){var e=this,n=this.graph,r=n.getFrontCanvas(),i=n.get("itemCache"),o=this._anchorItemCache,a=t;a=s.isObject(t)?[t]:s.isString(t)?[i[t]]:o,s.each(a,function(t){e._clearAnchor(t),t.isAnchorShow=!1,delete o[t.id];}),r.draw();}}]),e;}();t.exports=c;},function(t,e,n){var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n){Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}}return t;},i=n(305),o=n(14),a={CFG:{anchor:{}},INIT:"_initAnchor"};a.AUGMENT={_initAnchor:function _initAnchor(){var t=this.get("anchor"),e=this.get("_graph");if(t){var n=new i(r({flow:this,graph:e},t));this.setController("anchor",n);}},showAnchor:function showAnchor(t,e,n){this.getController("anchor").showAnchor(t,e,n);},clearAnchor:function clearAnchor(t){this.getController("anchor").clearAnchor(t);},setHotspotActived:function setHotspotActived(t,e){this.getController("anchor").setHotspotActived(t,e);},hoverShowAnchor:function hoverShowAnchor(t){var e=this,n=[];t.getAnchorPoints().forEach(function(r,i){var o={anchor:r,item:t};e.emit("hovernode:beforeshowanchor",o),o.cancel||n.push(i);}),this.showAnchor(t,n);},anchorHasBeenLinked:function anchorHasBeenLinked(t,e){var n=[];return t.getEdges().forEach(function(e){var r=e.getModel();r.source!==t.id||o.isNil(r.sourceAnchor)||n.push(r.sourceAnchor),r.target!==t.id||o.isNil(r.targetAnchor)||n.push(r.targetAnchor);}),o.isObject(e)?-1!==n.indexOf(e.index):-1!==n.indexOf(e);},dragEdgeBeforeShowAnchor:function dragEdgeBeforeShowAnchor(t,e,n){var r=this;this.getGraph().getNodes().forEach(function(i){var o=[],a=i.getAnchorPoints(),u=void 0;if(t.isNode){var s=t.getAnchorPoints();a.forEach(function(a,c){u="target"===n?{source:t,sourceAnchor:s[e],target:i,targetAnchor:a,dragEndPointType:n}:{target:t,targetAnchor:s[e],source:i,sourceAnchor:a,dragEndPointType:n},r.emit("dragedge:beforeshowanchor",u),u.cancel||o.push(c);});}else a.forEach(function(t,e){o.push(e);});i===t&&i.isAnchorShow?o.forEach(function(t){var n=i.getAnchor(t);e!==t&&n&&n.showHotspot();}):r.showAnchor(i,o,!0);});}},t.exports=a;},function(t,e,n){var r={},i=n(14);r.AUGMENT={changeAddEdgeModel:function changeAddEdgeModel(t){this.set("addEdgeModel",t);},cancelAdd:function cancelAdd(){var t=this.get("_graph");this.set("addType",void 0),this.set("addModel",void 0),t.changeMode("default");},beginAdd:function beginAdd(t,e){var n=this.get("_graph");this.set("addType",t),this.set("addModel",e),n.changeMode("add");},endAdd:function endAdd(){var t=this.get("_graph");this.set("addType",void 0),this.set("addModel",void 0),t.changeMode("default");},delete:function _delete(){var t=this.getSelected(),e=this.get("_graph");i.each(t,function(t){e.remove(t);});},toBack:function toBack(){var t=this.getSelected(),e=this.get("_graph");t.sort(function(t,e){var n=t.getGraphicGroup(),r=e.getGraphicGroup();return i.getIndex(r)-i.getIndex(n);}),t.forEach(function(t){e.toBack(t);});},toFront:function toFront(){var t=this.getSelected(),e=this.get("_graph");t.sort(function(t,e){var n=t.getGraphicGroup(),r=e.getGraphicGroup();return i.getIndex(n)-i.getIndex(r);}),t.forEach(function(t){e.toFront(t);});},addGroup:function addGroup(t){var e=this.get("_graph"),n=this.getSelected(),r=!0,o=void 0;if(0!==n.length){t||(t={label:"新建分组"}),i.setId(t),e.add("group",t),e.toFront(t.id);var a=e.find(t.id);if(n.forEach(function(t){var e=t.getParent();e&&(o?o!==e&&(r=!1):o=e);}),r){o&&(t.parent=o.getModel().id),n.forEach(function(n){e.update(n,{parent:t.id});});var u=a.getInnerEdges();a.deepEach(function(t){e.toFront(t);}),u.forEach(function(t){e.toFront(t);});}else console.warn("add group elements must have the same parent");}},unGroup:function unGroup(){var t=this.get("_graph"),e=this.getSelected(),n=e[0];1===e.length&&i.isGroup(n)&&(n.getChildren().forEach(function(e){t.update(e,{parent:void 0});}),t.remove(n));},newGroup:function newGroup(t){this.addGroup(t);}},t.exports=r;},function(t,e){t.exports={rectRectCrossAlgorithm:function rectRectCrossAlgorithm(t,e){var n=Math.max(t.minX,e.minX),r=Math.max(t.minY,e.minY),i=Math.min(t.maxX,e.maxX),o=Math.min(t.maxY,e.maxY);return n>i||r>o;}};},function(t,e,n){var r=n(142);t.exports={dragingEdgeEndPoint:function dragingEdgeEndPoint(t,e,n,r,i,o,a,u){var s=n.getShapeObj("edge",e),c="source"===t?[o,i]:[i,o],f=s.getPathByPoints(c,a,u);r.attr("path",f),n.drawFrontCanvas();},panGroup:function panGroup(t,e,n,i){var o=t.getModel();r.traverseTree(t,function(t){if("node"===t.type){var r=t.getModel();i.update(t,{x:r.x+e,y:r.y+n});}},function(t){return"group"===t.type?t.getChildren():[];}),i.update(t,{x:o.x+e,y:o.y+n});}};},function(t,e,n){var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e;};}(),i=function t(e,n,r){null===e&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,n);if(void 0===i){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,n,r);}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(r):void 0;},a=n(34),u=n(12),s=n(14),c=n(15),f=n(307),l=n(306),h=n(304),d=[f,n(303),h,l],p=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,e);var n={shortcut:{copy:!0,paste:!0,selectAll:!0,addGroup:!0,unGroup:!0},graph:{modes:{default:["panBlank","hoverGroupActived","keydownCmdWheelZoom","clickEdgeSelected","clickNodeSelected","clickCanvasSelected","clickGroupSelected","hoverNodeActived","hoverEdgeActived","hoverAnchorActived","hoverButton","clickCollapsedButton","clickExpandedButton","wheelPanCanvas","keydownShiftMultiSelected","dragNodeAddToGroup","dragOutFromGroup","panItem","hoverEdgeControlPoint"],add:["dragPanelItemAddNode","dragAnchorAddEdge"],resize:["dragEdgeControlPoint","hoverEdgeControlPoint"],readOnly:["panCanvas"],move:["panCanvas"],multiSelect:["dragMultiSelect"]},mode:"default",defaultIntersectBox:"rect",nodeDefaultShape:c.nodeDefaultShape,edgeDefaultShape:c.edgeDefaultShape,groupDefaultShape:c.groupDefaultShape,minZoom:.2,maxZoom:2},graphConstructor:a.Graph,noEndEdge:!0},r={};s.each(d,function(t){s.mix(r,t.CFG);}),s.mix(!0,n,r,t);var i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(void 0===e?"undefined":o(e))&&"function"!=typeof e?t:e;}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n));return i.isFlow=!0,i;}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":o(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}(e,u),r(e,[{key:"_init",value:function value(){var t=this;i(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"_init",this).call(this),s.each(d,function(e){e.INIT&&t[e.INIT]();});}},{key:"getDelegation",value:function value(t,e){var n=s.getTotalBBox(t.map(function(t){return t.getBBox();}));return s.getRectByBox(n,e,c.nodeDelegationStyle);}},{key:"bindEvent",value:function value(){var t=this;i(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"bindEvent",this).call(this),this.on("beforeitemactived",function(e){var n=e.item,r=t.get("_graph").getShapeObj(n).getActivedOutterStyle(n);n.isNode&&(t.addOutterShape(n,c.nodeActivedOutterLineWidth,r),t.hoverShowAnchor(n));}),this.on("beforeitemunactived",function(e){var n=e.item;(n.isNode||n.isGroup)&&(t.clearOutterShape(n),t.clearAnchor(n));}),this.on("beforeitemselected",function(e){var n=e.item,r=t.get("_graph").getShapeObj(n).getSelectedOutterStyle(n);n.isNode?(t.addOutterShape(n,c.nodeSelectedOutterLineWidth,r),t.hoverShowAnchor(n)):n.isGroup&&(t.addOutterShape(n,c.groupSelectedOutterLineWidth,r),t.hoverShowAnchor(n));}),this.on("beforeitemunselected",function(e){var n=e.item;(n.isNode||n.isGroup)&&(t.clearOutterShape(n),t.clearAnchor(n));});}}]),e;}();s.each(d,function(t){s.mix(p.prototype,t.AUGMENT);}),t.exports=p;},function(t,e,n){var r=n(310),i=n(12),o=n(15);r.Util=n(14),r.Global=o,i.setRegister(r,o.nodeDefaultShape,o.edgeDefaultShape,o.groupDefaultShape),n(302),n(289),t.exports=r;},function(t,e,n){n(13).registerBehaviour("hoverEdgeActived",function(t){var e=t.getGraph();e.behaviourOn("edge:mouseenter",function(e){t.getSignal("panningItem")||e.item&&e.item.isSelected||t.setActived(e.item,!0);}),e.behaviourOn("edge:mouseleave",function(e){t.setActived(e.item,!1);});});},function(t,e,n){n(13).registerBehaviour("hoverGroupActived",function(t){var e=t.getGraph();e.behaviourOn("mouseenter",function(e){t.getSignal("panningItem")||e.item&&e.item.isSelected||e.shape&&e.shape.isGroupKeyShape&&(t.css({cursor:"move"}),t.setActived(e.item,!0));}),e.behaviourOn("group:mouseleave",function(e){e.item.isActived&&!e.item.isSelected&&t.setActived(e.item,!1);});});},function(t,e,n){n(13).registerBehaviour("hoverNodeActived",function(t){var e=t.getGraph(),n=void 0;e.behaviourOn("node:mouseenter",function(e){!1!==e.item.getShapeObj().panAble&&t.css({cursor:"move"}),t.getSignal("panningItem")||e.item&&e.item.isSelected||(n=e.item,t.setActived(n,!0));}),e.behaviourOn("node:mouseleave",function(e){var r=e.toShape;n&&(r&&r.isAnchor&&r.getItem()===n||(n.isSelected||t.setActived(n,!1),n=void 0));});});},function(t,e,n){n(13).registerBehaviour("clickNodeSelected",function(t){t.getGraph().behaviourOn("node:click",function(e){t.get("multiSelectable")&&!0===t.getSignal("shiftKeyDown")?t.setSelected(e.item.id,!0):(t.clearActived(),t.clearSelected(),t.setSelected(e.item.id,!0));});});},function(t,e,n){n(13).registerBehaviour("clickGroupSelected",function(t){t.getGraph().behaviourOn("group:click",function(e){t.get("multiSelectable")&&!0===t.getSignal("shiftKeyDown")?t.setSelected(e.item.id,!0):(t.clearActived(),t.clearSelected(),t.setSelected(e.item.id,!0));});});},function(t,e,n){n(13).registerBehaviour("clickExpandedButton",function(t){var e=t.getGraph();e.behaviourOn("click",function(n){var r=n.item,i=n.shape;if(r&&i&&i.isExpandedButton){var o=t.editor;o?o.executeCommand("collapseExpand",{itemId:r.id}):e.update(r,{collapsed:!1});}});});},function(t,e,n){n(13).registerBehaviour("clickEdgeSelected",function(t){t.getGraph().behaviourOn("edge:click",function(e){t.get("multiSelectable")&&!0===t.getSignal("shiftKeyDown")?t.setSelected(e.item.id,!0):(t.clearActived(),t.clearSelected(),t.setSelected(e.item.id,!0));});});},function(t,e,n){n(13).registerBehaviour("clickCollapsedButton",function(t){var e=t.getGraph();e.behaviourOn("click",function(n){var r=n.item,i=n.shape;if(r&&i&&i.isCollapsedButton){var o=t.editor;o?o.executeCommand("collapseExpand",{itemId:r.id}):e.update(r,{collapsed:!0});}});});},function(t,e,n){n(13).registerBehaviour("clickCanvasSelected",function(t){var e=t.getGraph();e.behaviourOn("click",function(e){e.shape||(t.clearSelected(),t.clearActived(),t.updateStatus());}),e.behaviourOn("contextmenu",function(e){e.shape||(t.clearSelected(),t.clearActived(),t.updateStatus());});});},function(t,e,n){n(13).registerBehaviour("dblclickItemEditLabel",function(t){t.getGraph().behaviourOn("node:dblclick",function(e){e.shape&&!e.shape.isButton&&t.beginEditLabel(e.item);});});},function(t,e,n){n(13).registerBehaviour("endPanItem",function(t){var e=t.getGraph(),n=e.getFrontCanvas(),r=e.getFrontRootGroup();e.behaviourOn("panitemend",function(){var e=t.get("panItemDelegation");e&&(e.remove(),n.draw()),r.set("capture",!0),t.setSignal("panningItem",!1),t.set("panItemDelegation",void 0),t.set("panItemStartPoint",void 0),t.set("panItemStartBox",void 0),t.set("panItems",void 0);}),e.behaviourOn("canvas:mouseleave",function(){t.get("panItems")&&(t.clearAlignLine(),e.emit("panitemend"));});});},function(t,e,n){n(13).registerBehaviour("startPanItem",function(t){var e=t.getGraph(),n=e.getFrontCanvas(),r=e.getFrontRootGroup();e.behaviourOn("dragstart",function(i){if(2!==i.button&&i.item&&(i.item.isNode||i.item.isGroup)){var o=i.item,a=void 0;if((a=(a=o.isSelected?t.getSelected():[o]).filter(function(t){return t.isNode||t.isGroup;}))[0]&&!1!==a[0].dragable){e.emit("beforeshowdelegation",{items:a});var u=t.getDelegation(a,r),s=u.getBBox();t.setSignal("panningItem",!0),t.set("panItems",a),t.set("panItemDelegation",u),t.set("panItemStartBox",s),t.set("panItemStartPoint",{x:i.x,y:i.y}),r.set("capture",!1),n.draw();}}});});},function(t,e,n){n(13).registerBehaviour("processPanItem",function(t){var e=t.getGraph(),n=e.getFrontCanvas();e.behaviourOn("mousemove",function(r){var i=t.get("panItemDelegation");if(i){var o=t.get("panItemStartPoint"),a=t.get("panItemStartBox"),u=r.x-o.x,s=r.y-o.y,c=t.align({x:a.minX+u,y:a.minY+s},{width:a.width,height:a.height});i.attr({x:c.x,y:c.y}),e.emit("itempanning",r),n.draw();}});});},function(t,e,n){var r=n(13),i=n(67),o=n(18);r.registerBehaviour("wheelPanCanvas",function(t){var e=t.getGraph(),n=void 0;e.behaviourOn("mousewheel",function(t){t.domEvent.preventDefault();}),e.behaviourOn("mousewheel",o.throttle(function(r){if(!t.getSignal("preventWheelPan")){var a=r.domEvent,u=t.getSignal("wheelZoom");if(n||t.setCapture(!1),u){var s=a.wheelDelta;if(Math.abs(s)>10){var c=e.getMatrix()[0];s>0?e.zoom({x:r.x,y:r.y},1.05*c):e.zoom({x:r.x,y:r.y},c*(1/1.05));}}else{var f=[],l=e.getMatrix();o.mat3.translate(f,l,[a.wheelDeltaX*i.wheelPanRatio,a.wheelDeltaY*i.wheelPanRatio]),t.translateLimt(f)&&e.updateMatrix(f);}n&&clearTimeout(n),n=setTimeout(function(){t.setCapture(!0),n=void 0;},50);}},16));});},function(t,e,n){var r=n(13),i=n(18);r.registerBehaviour("panCanvas",i.getPanCanvasBehaviour());},function(t,e,n){n(13).registerBehaviour("hoverButton",function(t){t.getGraph().behaviourOn("mouseenter",function(e){t.getSignal("panningItem")||e.shape&&e.shape.isButton&&t.css({cursor:"pointer"});});});},function(t,e,n){var r=n(13),i=n(18);r.registerBehaviour("panBlank",i.getPanCanvasBehaviour(!0));},function(t,e,n){n(328),n(327),n(326),n(325),n(324),n(323),n(322),n(321),n(320),n(319),n(318),n(317),n(316),n(315),n(314),n(313),n(312);},function(t,e){var n={AUGMENT:{updateStatus:function updateStatus(){var t=this.getSelected(),e=void 0;0===t.length?e="canvas-selected":1===t.length?t[0].isNode?e="node-selected":t[0].isEdge?e="edge-selected":t[0].isGroup&&(e="group-selected"):e="multi-selected",this.emit("statuschange",{status:e});}}};t.exports=n;},function(t,e,n){var r=n(18),i={CFG:{labelEditable:!1},INIT:"_initLabelEditor"};i.AUGMENT={_initLabelEditor:function _initLabelEditor(){var t=this;if(this.get("labelEditable")){var e=this.getGraph(),n=r.createDOM('<div contenteditable="true" role="textbox" tabindex="1" class="g6-label-editor"></div>',{position:"absolute",visibility:"hidden","z-index":"2",padding:"0px 2px 0px 0px",resize:"none",width:"auto",height:"auto",outline:"none",border:"1px solid #1890FF","transform-origin":"left top","max-width":"320px",background:"white","box-sizing":"content-box"});e.getGraphContainer().appendChild(n),n.on("blur",function(n){n.stopPropagation(),e.getFrontCanvas().get("el")&&t.endEditLabel();}),n.on("keydown",function(e){e.stopPropagation();var n=r.getKeyboradKey(e);(e.metaKey&&"s"===n||e.ctrlKey&&"s"===n)&&e.preventDefault(),"Enter"!==n&&"Escape"!==n||t.endEditLabel();}),this.set("labelTextArea",n),e.on("beforeviewportchange",function(){n.focusItem&&t.setLabelEditorBeginPosition(n.focusItem);});}},_getLabelTextAreaBox:function _getLabelTextAreaBox(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[0,0];e&&t.attr("text",e);var i=this.getGraph().getRootGroup(),o=r.getBBox(t,i);return{minX:o.minX-n[1],minY:o.minY-n[0],maxX:o.maxX+n[1],maxY:o.maxY+n[0]};},setLabelEditorBeginPosition:function setLabelEditorBeginPosition(t){var e=this.get("labelTextArea"),n=t.getLabel();if(n){var i=this._getLabelTextAreaBox(n),o=n.attr("lineHeight"),a=n.attr("fontSize"),u={x:i.minX,y:i.minY-o/4+a/4-1,width:i.maxX-i.minX,height:i.maxY-i.minY};e.css({top:u.y+"px",left:u.x+"px"}),e.labelPoint=u;}else{var s=this.getGraph().getRootGroup(),c=t.getKeyShape(),f=r.getBBox(c,s),l={x:f.minY+(f.maxY-f.minY-e.height())/2,y:(f.minX+f.maxX)/2};e.css({top:l.x+"px",left:l.y+"px"}),e.labelPoint=l;}},beginEditLabel:function beginEditLabel(t){var e=this.get("labelTextArea"),n=this.getGraph();if(r.isString(t)&&(t=n.find(t)),t&&!t.destroyed&&e){this.setSignal("preventWheelPan",!0);var i=t.getModel(),o=t.getLabel(),a=n.getZoom();if(e.focusItem=t,o){var u=o.attr("lineHeight"),s=this._getLabelTextAreaBox(o),c=(s.maxX-s.minX)/a,f=(s.maxY-s.minY+u/4)/a;e.innerHTML=i.label,e.innerHTML=i.label,e.css({"min-width":c+"px","min-height":f+"px",visibility:"visible","font-family":o.attr("fontFamily"),"line-height":u+"px","font-size":o.attr("fontSize")+"px",transform:"scale("+a+")"});}else e.innerHTML="",e.css({"min-width":"auto","min-height":"auto"});this.setLabelEditorBeginPosition(t),e.css({visibility:"visible"}),e.focus(),document.execCommand("selectAll",!1,null);}},endEditLabel:function endEditLabel(){var t=this.get("labelTextArea");if(this.setSignal("preventWheelPan",!1),t){var e=t.focusItem;e&&(e.getModel().label!==t.textContent&&this.executeCommand("update",{action:"updateLabel",itemId:e.id,updateModel:{label:t.textContent}}),t.hide(),t.focusItem=void 0,this.focusGraphWrapper());}}},t.exports=i;},function(t,e,n){function r(t,e){return{line:t,point:e,dis:s.pointLineDistance(t[0],t[1],t[2],t[3],e.x,e.y)};}var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e;};}(),a=n(37),u=n(67),s=n(18),c=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(void 0===e?"undefined":o(e))&&"function"!=typeof e?t:e;}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":o(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}(e,a),i(e,[{key:"getDefaultCfg",value:function value(){return{line:u.alignLineStyle,item:!0,grid:!1,tolerance:5,_horizontalLines:{},_verticalLines:{},_alignLines:[]};}},{key:"init",value:function value(){this.item&&this._cacheBoxLine();}},{key:"_cacheBoxLine",value:function value(){var t=this.graph,e=this._horizontalLines,n=this._verticalLines,r=this.item;t.on("afteritemdraw",function(t){var i=t.item;if(!s.isEdge(i)){var o=i.getBBox();!0===r||"horizontal"===r?(e[i.id+"tltr"]=[o.minX,o.minY,o.maxX,o.minY,i],e[i.id+"lcrc"]=[o.minX,o.centerY,o.maxX,o.centerY,i],e[i.id+"blbr"]=[o.minX,o.maxY,o.maxX,o.maxY,i]):"center"===r&&(e[i.id+"lcrc"]=[o.minX,o.centerY,o.maxX,o.centerY,i]),!0===r||"vertical"===r?(n[i.id+"tlbl"]=[o.minX,o.minY,o.minX,o.maxY,i],n[i.id+"tcbc"]=[o.centerX,o.minY,o.centerX,o.maxY,i],n[i.id+"trbr"]=[o.maxX,o.minY,o.maxX,o.maxY,i]):"center"===r&&(n[i.id+"tcbc"]=[o.centerX,o.minY,o.centerX,o.maxY,i]);}}),t.on("beforeitemdestroy",function(t){var r=t.item;delete e[r.id+"tltr"],delete e[r.id+"lcrc"],delete e[r.id+"blbr"],delete n[r.id+"tlbl"],delete n[r.id+"tcbc"],delete n[r.id+"trbr"];});}},{key:"align",value:function value(t,e){var n=s.mix({},t),r=this.flow.getController("grid");return this.grid&&r&&r.visible&&this._gridAlign(t,e),this.item&&this._itemAlign(t,e,n),t;}},{key:"_gridAlign",value:function value(t,e){var n=this.flow,r=this.grid,i=n.getGridCell();if("cc"===r){var o=Math.round((t.x+e.width/2)/i)*i,a=Math.round((t.y+e.height/2)/i)*i;t.x=o-e.width/2,t.y=a-e.height/2;}else t.x=Math.round(t.x/i)*i,t.y=Math.round(t.y/i)*i;}},{key:"_itemAlign",value:function value(t,e,n){var i=this._horizontalLines,o=this._verticalLines,a=this.tolerance,u={x:n.x+e.width/2,y:n.y},c={x:n.x+e.width/2,y:n.y+e.height/2},f={x:n.x+e.width/2,y:n.y+e.height},l={x:n.x,y:n.y+e.height/2},h={x:n.x+e.width,y:n.y+e.height/2},d=[],p=[],g=null;if(this.clearAlignLine(),s.each(i,function(t){t[4].isVisible()&&(d.push(r(t,u)),d.push(r(t,c)),d.push(r(t,f)));}),s.each(o,function(t){t[4].isVisible()&&(p.push(r(t,l)),p.push(r(t,c)),p.push(r(t,h)));}),d.sort(function(t,e){return t.dis-e.dis;}),p.sort(function(t,e){return t.dis-e.dis;}),0!==d.length&&d[0].dis<a){t.y=d[0].line[1]-d[0].point.y+n.y,g={type:"item",horizontals:[d[0]]};for(var v=1;v<3;v++){d[0].dis===d[v].dis&&g.horizontals.push(d[v]);}}if(0!==p.length&&p[0].dis<a){t.x=p[0].line[0]-p[0].point.x+n.x,g?g.verticals=[p[0]]:g={type:"item",verticals:[p[0]]};for(var m=1;m<3;m++){p[0].dis===p[m].dis&&g.verticals.push(p[m]);}}g&&(g.bbox=e,this._addAlignLine(g));}},{key:"clearAlignLine",value:function value(){var t=this._alignLines;s.each(t,function(t){t.remove();}),this._alignLines=[];}},{key:"_addAlignLine",value:function value(t){var e=t.bbox,n=this.graph.getFrontRootGroup(),r=this.line,i=this._alignLines;"item"===t.type&&(t.horizontals&&s.each(t.horizontals,function(t){var o=t.line,a=t.point,u=(o[0]+o[2])/2,c=void 0,f=void 0;a.x<u?(c=a.x-e.width/2,f=Math.max(o[0],o[2])):(c=a.x+e.width/2,f=Math.min(o[0],o[2]));var l=n.addShape("line",{attrs:s.mix({x1:c,y1:o[1],x2:f,y2:o[1]},r),capture:!1});i.push(l);}),t.verticals&&s.each(t.verticals,function(t){var o=t.line,a=t.point,u=(o[1]+o[3])/2,c=void 0,f=void 0;a.y<u?(c=a.y-e.height/2,f=Math.max(o[1],o[3])):(c=a.y+e.height/2,f=Math.min(o[1],o[3]));var l=n.addShape("line",{attrs:s.mix({x1:o[0],y1:c,x2:o[0],y2:f},r),capture:!1});i.push(l);}));}}]),e;}();t.exports=c;},function(t,e,n){var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n){Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}}return t;},i=n(332),o={CFG:{align:{}},INIT:"_initAlign"};o.AUGMENT={_initAlign:function _initAlign(){var t=this.get("align"),e=this.get("_graph"),n=new i(r({flow:this,graph:e},t));this.setController("align",n);},align:function align(t,e,n){return this.getController("align").align(t,e,n);},clearAlignLine:function clearAlignLine(){return this.getController("align").clearAlignLine();}},t.exports=o;},function(t,e,n){var r=n(18),i={CFG:{activeable:!0,_activedCache:{}},INIT:"_initActived"};i.AUGMENT={_initActived:function _initActived(){var t=this,e=this.get("_graph");e.on("afteritemdraw",function(e){var n=e.item;n.isActived&&t.setItemActived(n);}),e.on("beforeitemdestroy",function(e){t.clearItemActived(e.item);});},setItemActived:function setItemActived(t){var e=this.get("_graph").getShapeObj(t),n=this.get("_activedCache"),r=e.getActivedStyle(t),i=t.getKeyShape();n[t.id]=t,r&&i.attr(r),t.isEdge&&(i.startArrow&&i.startArrow.attr({fill:r.stroke}),i.endArrow&&i.endArrow.attr({fill:r.stroke}));},clearItemActived:function clearItemActived(t){var e=this.get("_graph"),n=t.getKeyShape(),i=e.getShapeObj(t),o=n.get("attrs"),a=this.get("_activedCache"),u=i.getActivedStyle(t),s=r.getContrast(o,u);n.attr(s),t.isEdge&&(n.startArrow&&n.startArrow.attr({fill:s.stroke}),n.endArrow&&n.endArrow.attr({fill:s.stroke})),delete a[t.id];},setActived:function setActived(t,e){var n=this,i=this.get("activeable"),o=this.get("_graph");if(i){var a=void 0;a=r.isArray(t)?t:[t],r.each(a,function(t){r.isString(t)&&(t=o.find(t)),t&&!t.destroyed&&(e?(n.emit("beforeitemactived",{item:t}),n.setItemActived(t),n.emit("afteritemactived",{item:t})):(n.emit("beforeitemunactived",{item:t}),n.clearItemActived(t),n.emit("afteritemunactived",{item:t})),t.isActived=e);}),o.draw();}},getActived:function getActived(){var t=this.get("_activedCache");return r.objectToValues(t);},clearActived:function clearActived(){var t=this,e=this.get("_graph").getFrontCanvas(),n=this.get("_activedCache");r.each(n,function(e){e.isActived&&t.setActived(e,!1);}),e.draw();}},t.exports=i;},function(t,e,n){var r=n(18),i={CFG:{selectable:!0,multiSelectable:!0,_selectedCache:{}},INIT:"_initSelected"};i.AUGMENT={_initSelected:function _initSelected(){var t=this,e=this.get("_graph");e.on("afteritemdraw",function(e){var n=e.item;n.isSelected&&t.setItemSelected(n);}),e.on("beforeitemdestroy",function(e){t.clearItemSelected(e.item);});},setItemSelected:function setItemSelected(t){var e=this.get("_graph").getShapeObj(t).getSelectedStyle(t),n=t.getKeyShape();this.get("_selectedCache")[t.id]=t,e&&n.attr(e),t.isEdge&&(n.startArrow&&n.startArrow.attr({fill:e.stroke}),n.endArrow&&n.endArrow.attr({fill:e.stroke}));},clearItemSelected:function clearItemSelected(t){var e=this.get("_graph"),n=t.getKeyShape(),i=e.getShapeObj(t),o=n.get("attrs"),a=i.getSelectedStyle(t),u=this.get("_selectedCache"),s=r.getContrast(o,a);n.attr(s),t.isEdge&&(n.startArrow&&n.startArrow.attr({fill:s.stroke}),n.endArrow&&n.endArrow.attr({fill:s.stroke})),delete u[t.id];},setSelected:function setSelected(t,e){var n=this,i=this.get("selectable"),o=this.get("_graph");if(i){var a=void 0;a=r.isArray(t)?t:[t],r.each(a,function(t){r.isString(t)&&(t=o.find(t)),t&&!t.destroyed&&(e?(n.emit("beforeitemselected",{item:t}),n.setItemSelected(t),n.emit("afteritemselected",{item:t})):(n.emit("beforeitemunselected",{item:t}),n.clearItemSelected(t),n.emit("afteritemunselected",{item:t})),t.isSelected=e,n.updateStatus(),o.draw());});}},getSelected:function getSelected(){var t=this.get("_selectedCache");return r.objectToValues(t);},clearSelected:function clearSelected(){var t=this,e=this.get("_graph").getFrontCanvas(),n=this.get("_selectedCache");r.each(n,function(e){e.isSelected&&t.setSelected(e,!1);}),e.draw();}},t.exports=i;},function(t,e){function n(t,e,n){t.on(n,function(t){e.emit(n,t);}),t.on("node:"+n,function(t){e.emit("node:"+n,t);}),t.on("edge:"+n,function(t){e.emit("edge:"+n,t);}),t.on("group:"+n,function(t){e.emit("group:"+n,t);}),t.on("anchor:"+n,function(t){e.emit("anchor:"+n,t);});}var r={};r.INIT="_initEvent",r.AUGMENT={_initEvent:function _initEvent(){var t=this,e=this.get("_graph");n(e,this,"click"),n(e,this,"dblclick"),n(e,this,"mouseenter"),n(e,this,"mouseleave"),n(e,this,"mousedown"),n(e,this,"mouseup"),n(e,this,"contextmenu"),e.on("keydown",function(e){t.emit("keydown",e);}),e.on("keyup",function(e){t.emit("keyup",e);}),e.on("beforechange",function(e){t.emit("beforechange",e);}),e.on("afterchange",function(e){t.emit("afterchange",e);}),e.on("afterviewportchange",function(e){t.emit("afterviewportchange",e),e.updateMatrix[0]!==e.originMatrix[0]&&t.emit("afterzoom",e);}),e.on("beforeviewportchange",function(e){t.emit("beforeviewportchange",e),e.updateMatrix[0]!==e.originMatrix[0]&&t.emit("beforezoom",e);});}},t.exports=r;},function(t,e,n){var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e;};}(),i=n(37),a=n(67),u=n(18),s=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(void 0===e?"undefined":o(e))&&"function"!=typeof e?t:e;}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":o(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}(e,i),r(e,[{key:"getDefaultCfg",value:function value(){return{cell:16,line:a.gridStyle,type:"point",visible:!0};}},{key:"init",value:function value(){this._draw(),this._onViewPortChange(),!this.visible&&this.hide();}},{key:"_onViewPortChange",value:function value(){var t=this,e=this.graph;e.on("afterviewportchange",function(){t.update();}),e.on("beforechangesize",function(){t.update();});}},{key:"_draw",value:function value(){var t=this.graph,e=this._getPath(),n=t.getRootGroup(),r=u.mix({},this.line),i=t.getMatrix(),o=this.type,a="line"===o?1/i[0]:2/i[0];"point"===o&&(r.lineDash=null),r.lineWidth=a,r.path=e;var s=n.addShape("path",{attrs:r,capture:!1,zIndex:0});u.toBack(s,n),this.gridEl=s;}},{key:"show",value:function value(){this.gridEl.show(),this.visible=!0;}},{key:"hide",value:function value(){this.gridEl.hide(),this.visible=!1;}},{key:"_getLinePath",value:function value(){for(var t=this.graph,e=t.get("width"),n=t.get("height"),r=t.getPoint({x:0,y:0}),i=t.getPoint({x:e,y:n}),o=this.cell,a=Math.ceil(r.x/o)*o,u=Math.ceil(r.y/o)*o,s=[],c=0;c<=i.x-r.x;c+=o){var f=a+c;s.push(["M",f,r.y]),s.push(["L",f,i.y]);}for(var l=0;l<=i.y-r.y;l+=o){var h=u+l;s.push(["M",r.x,h]),s.push(["L",i.x,h]);}return s;}},{key:"_getPointPath",value:function value(){for(var t=this.graph,e=t.get("width"),n=t.get("height"),r=t.getPoint({x:0,y:0}),i=2/t.getMatrix()[0],o=t.getPoint({x:e,y:n}),a=this.getCell(),u=Math.ceil(r.x/a)*a,s=Math.ceil(r.y/a)*a,c=[],f=0;f<=o.x-r.x;f+=a){for(var l=u+f,h=0;h<=o.y-r.y;h+=a){var d=s+h;c.push(["M",l,d]),c.push(["L",l+i,d]);}}return c;}},{key:"getCell",value:function value(){var t=this.cell,e=this.graph.getMatrix()[0];return t*e<9.6?9.6/e:t;}},{key:"_getPath",value:function value(){var t=this.type;return this["_get"+u.upperFirst(t)+"Path"]();}},{key:"update",value:function value(t){u.mix(this,t);var e=this._getPath(),n=this.gridEl,r=this.graph.getMatrix(),i="line"===this.type?1/r[0]:2/r[0];n.attr("lineWidth",i),n.attr("path",e);}},{key:"destroy",value:function value(){var t=this.gridEl;t&&t.remove();}}]),e;}();t.exports=s;},function(t,e,n){var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n){Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}}return t;},i=n(337),o=n(18),a={CFG:{grid:void 0},INIT:"_initGrid"};a.AUGMENT={_initGrid:function _initGrid(){var t=this.get("grid"),e=this.get("_graph");if(t){var n=new i(r({flow:this,graph:e},t));this.setController("grid",n);}},showGrid:function showGrid(t){var e=this.get("_graph"),n=this.getController("grid");n||(t?o.isObject(t)&&this.set("grid",t):this.set("grid",!0),this._initGrid()),(n=this.getController("grid")).show(),e.draw();},hideGrid:function hideGrid(){var t=this.get("_graph"),e=this.getController("grid");e&&e.hide(),t.draw();},getGridCell:function getGridCell(){return this.getController("grid").getCell();}},t.exports=a;},function(t,e,n){var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n){Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}}return t;},i=n(18),o={INIT:"_initGraph"};o.AUGMENT={_initGraph:function _initGraph(){var t=this.get("graph"),e=new(this.get("graphConstructor"))(r({page:this},t));e.draw(),this.set("_graph",e);},changeMode:function changeMode(t){this.get("_graph").changeMode(t);},updateMatrix:function updateMatrix(t){this.get("_graph").updateMatrix(t);},getMode:function getMode(){return this.get("_graph").get("mode");},getMatrix:function getMatrix(){return this.get("_graph").getMatrix();},getZoom:function getZoom(){return this.get("_graph").getMatrix()[0];},getMaxZoom:function getMaxZoom(){return this.get("_graph").get("maxZoom");},getMinZoom:function getMinZoom(){return this.get("_graph").get("minZoom");},getGraph:function getGraph(){return this.get("_graph");},getItems:function getItems(){return this.get("_graph").getItems();},getNodes:function getNodes(){return this.get("_graph").getNodes();},translate:function translate(t,e){return this.get("_graph").translate(t,e);},getEdges:function getEdges(){return this.get("_graph").getEdges();},getGroups:function getGroups(){return this.get("_graph").getGroups();},render:function render(){return this.get("_graph").render(),this;},add:function add(t,e){return this.get("_graph").add(t,e),this;},focusPointByDom:function focusPointByDom(t){return this.get("_graph").focusPointByDom(t),this;},focusPoint:function focusPoint(t){return this.get("_graph").focusPoint(t),this;},find:function find(t){return this.get("_graph").find(t);},focus:function focus(t){var e=this.get("_graph"),n=e.find(t);if(n){var r=n.getCenter();e.focusPoint(r);}return this;},save:function save(){return this.get("_graph").save();},read:function read(t){this.get("_graph").read(t);},clear:function clear(){this.get("_graph").clear();},remove:function remove(t){return this.get("_graph").remove(t),this;},update:function update(t,e){return this.get("_graph").update(t,e),this;},zoom:function zoom(t,e){return this.get("_graph").zoom(t,e),this;},getDomPoint:function getDomPoint(t){return this.get("_graph").getDomPoint(t);},getPoint:function getPoint(t){return this.get("_graph").getPoint(t);},zoomByDom:function zoomByDom(t,e){var n=this.get("_graph"),r=n.getPoint(t);return n.zoom(r,e),this;},autoZoom:function autoZoom(){return this.get("_graph").autoZoom(),this;},resetZoom:function resetZoom(){var t=this.get("_graph"),e=t.getWidth(),n=t.getHeight();return t.zoomByDom({x:e/2,y:n/2},1),this;},css:function css(t){var e=this.get("_graph").getMouseEventWrapper();i.modifyCSS(e,t);},setCapture:function setCapture(t){this.get("_graph").getRootGroup().set("capture",t);},destroy:function destroy(){this.get("_graph").destroy();},forceDraw:function forceDraw(){var t=this.get("_graph").getCanvas(),e=t.get("context");t.constructor.superclass.draw.call(t,e);},delete:function _delete(){var t=this.getSelected(),e=this.get("_graph");i.each(t,function(t){e.remove(t);});}},t.exports=o;},function(t,e){t.exports="1.0.8";},function(t,e,n){var r=n(96);r.registerCommand("collapseExpand",{getItem:function getItem(t){var e=t.getCurrentPage(),n=e.getGraph();return this.itemId?n.find(this.itemId):e.getSelected()[0];},enable:function enable(t){var e=this.getItem(t);return e&&!1!==e.collapseExpand&&e.getChildren().length>0;},execute:function execute(t){var e=t.getCurrentPage(),n=e.getGraph(),r=this.getItem(t);r.getModel().collapsed?(n.update(r,{collapsed:!1}),this.toCollapsed=!1):(n.update(r,{collapsed:!0}),this.toCollapsed=!0),e.clearSelected(),e.setSelected(r,!0),1===this.executeTimes&&(this.itemId=r.id);},back:function back(t){var e=t.getCurrentPage(),n=e.getGraph(),r=this.getItem(t);this.toCollapsed?n.update(r,{collapsed:!1}):n.update(r,{collapsed:!0}),e.clearSelected(),e.setSelected(r,!0);},shortcutCodes:[["metaKey","/"],["ctrlKey","/"]]}),r.registerCommand("collapse",{enable:function enable(t){var e=this.getItem(t);return e&&!1!==e.collapseExpand&&e.getChildren().length>0&&!e.getModel().collapsed;}},"collapseExpand"),r.registerCommand("expand",{enable:function enable(t){var e=this.getItem(t);return e&&!1!==e.collapseExpand&&e.getChildren().length>0&&e.getModel().collapsed;}},"collapseExpand");},function(t,e,n){function r(t){var e=t.getCurrentPage();this.matrixCache=e.getMatrix().slice(0),this._zoom(t),e.updateStatus();}function i(t){t.getCurrentPage().updateMatrix(this.matrixCache);}var o=n(96);o.registerCommand("zoomTo",{_zoom:function _zoom(t){t.getCurrentPage().zoom(Number(this.zoom));},queue:!1,execute:r,back:i}),o.registerCommand("zoomIn",{enable:function enable(t){var e=t.getCurrentPage(),n=e.getMaxZoom(),r=e.getMinZoom(),i=e.getZoom();return i<n||i===r;},_zoom:function _zoom(t){var e=t.getCurrentPage(),n=t.get("_command"),r=e.getZoom(),i=e.getMaxZoom(),o=r+n.zoomDelta;o>=i&&(o=i),e.zoom(o);},queue:!1,execute:r,back:i,shortcutCodes:[["metaKey","="],["ctrlKey","="]]}),o.registerCommand("zoomOut",{enable:function enable(t){var e=t.getCurrentPage(),n=e.getMaxZoom(),r=e.getMinZoom(),i=e.getZoom();return i>r||i===n;},_zoom:function _zoom(t){var e=t.getCurrentPage(),n=e.getZoom(),r=e.getMinZoom(),i=n-t.get("_command").zoomDelta;i<=r&&(i=r),e.zoom(i);},queue:!1,execute:r,back:i,shortcutCodes:[["metaKey","-"],["ctrlKey","-"]]}),o.registerCommand("autoZoom",{enable:function enable(){return!0;},_zoom:function _zoom(t){t.getCurrentPage().autoZoom();},queue:!1,execute:r,back:i}),o.registerCommand("resetZoom",{enable:function enable(){return!0;},_zoom:function _zoom(t){t.getCurrentPage().resetZoom();},queue:!1,execute:r,back:i,shortcutCodes:[["metaKey","0"],["ctrlKey","0"]]});},function(t,e,n){function r(t,e,n){var r=void 0;return(r=Math.round(t.h)>=60&&Math.round(t.h)<=240?n?Math.round(t.h)-u*e:Math.round(t.h)+u*e:n?Math.round(t.h)+u*e:Math.round(t.h)-u*e)<0?r+=360:r>=360&&(r-=360),r;}function i(t,e,n){var r=void 0;return(r=n?Math.round(100*t.s)-s*e:e===d?Math.round(100*t.s)+s:Math.round(100*t.s)+c*e)>100&&(r=100),n&&e===h&&r>10&&(r=10),r<6&&(r=6),r;}function o(t,e,n){return n?Math.round(100*t.v)+f*e:Math.round(100*t.v)-l*e;}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){for(var e=[],n=(0,a.default)(t),u=h;u>0;u-=1){var s=n.toHsv(),c=(0,a.default)({h:r(s,u,!0),s:i(s,u,!0),v:o(s,u,!0)}).toHexString();e.push(c);}e.push(n.toHexString());for(var f=1;f<=d;f+=1){var l=n.toHsv(),p=(0,a.default)({h:r(l,f),s:i(l,f),v:o(l,f)}).toHexString();e.push(p);}return e;};var a=function(t){return t&&t.__esModule?t:{default:t};}(n(207)),u=2,s=16,c=5,f=5,l=15,h=5,d=4;},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.presetPrimaryColors=e.presetPalettes=e.generate=void 0;var r=function(t){return t&&t.__esModule?t:{default:t};}(n(343)),i={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1890FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96"},o={};Object.keys(i).forEach(function(t){o[t]=(0,r.default)(i[t]);}),e.generate=r.default,e.presetPalettes=o,e.presetPrimaryColors=i;},function(t,e,n){var r=n(34).Util;t.exports={getGroupIconPath:function getGroupIconPath(){return"M9.75,9.60000014 L3.75,9.60000014 C3.33578644,9.60000014 3,9.2865995 3,8.90000022 C3,8.51340093 3.33578644,8.20000029 3.75,8.20000029 L9.75,8.20000029 C10.1642136,8.20000029 10.5,8.51340093 10.5,8.90000022 C10.5,9.2865995 10.1642136,9.60000014 9.75,9.60000014 M3,11.6999999 C3,11.3134006 3.33578644,11 3.75,11 L6.75,11 C7.16421356,11 7.5,11.3134006 7.5,11.6999999 C7.5,12.0865992 7.16421356,12.3999999 6.75,12.3999999 L3.75,12.3999999 C3.33578644,12.3999999 3,12.0865992 3,11.6999999 M3.75,13.7999997 L6.75,13.7999997 C7.16421356,13.7999997 7.5,14.1134004 7.5,14.4999996 C7.5,14.8865989 7.16421356,15.1999996 6.75,15.1999996 L3.75,15.1999996 C3.33578644,15.1999996 3,14.8865989 3,14.4999996 C3,14.1134004 3.33578644,13.7999997 3.75,13.7999997 M16.4985,4.00000072 L1.5015,4.00000072 C0.674533504,3.99922416 0.00289396564,4.6232696 0,5.39510058 L0,16.6048994 C0.00289396564,17.3767304 0.674533504,18.0007758 1.5015,17.9999993 L16.4985,17.9999993 C17.3254665,18.0007758 17.997106,17.3767304 18,16.6048994 L18,5.39510058 C17.997106,4.6232696 17.3254665,3.99922416 16.4985,4.00000072M19,13.9999993 L19,3 L5,3 L5,1.39510058 C5.00289397,0.623269599 5.6745335,-0.00077583787 6.5015,7.23978642e-07 L21.4985,7.23978642e-07 C22.3254665,-0.00077583787 22.997106,0.623269599 23,1.39510058 L23,12.6048994 C22.997106,13.3767304 22.3254665,14.0007758 21.4985,13.9999993 L19,13.9999993 Z";},getCollapsedButtonPath:function getCollapsedButtonPath(){return r.getRectPath(0,0,14,14,2)+"M3,7L11,7";},getExpandedButtonPath:function getExpandedButtonPath(){return r.getRectPath(0,0,14,14,2)+"M3,7L11,7M7,3L7,11";}};},function(t,e,n){var r=n(38),i=n(98);setTimeout(function(){if(r.trackable){var t=new Image(),e={pg:document.URL,r:new Date().getTime(),g6:!0,version:i,page_type:"syslog"},n=encodeURIComponent(JSON.stringify([e]));t.src="https://kcart.alipay.com/web/bi.do?BIProfile=merge&d="+n;}},3e3);},function(t,e,n){var r=n(70),i=function(t){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,e);var i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(void 0===e?"undefined":o(e))&&"function"!=typeof e?t:e;}(this,t.call(this,n));return i.layout=r.mindmap,i;}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":o(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}(e,t),e;}(n(69));t.exports=i;},function(t,e,n){var r=n(70),i=function(t){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,e);var i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(void 0===e?"undefined":o(e))&&"function"!=typeof e?t:e;}(this,t.call(this,n));return i.layout=r.indented,i;}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":o(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}(e,t),e;}(n(69));t.exports=i;},function(t,e,n){var r=n(70),i=function(t){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,e);var i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(void 0===e?"undefined":o(e))&&"function"!=typeof e?t:e;}(this,t.call(this,n));return i.layout=r.dendrogram,i;}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":o(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}(e,t),e;}(n(69));t.exports=i;},function(t,e,n){var r=n(70),i=function(t){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,e);var i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(void 0===e?"undefined":o(e))&&"function"!=typeof e?t:e;}(this,t.call(this,n));return i.layout=r.compactBox,i;}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":o(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}(e,t),e;}(n(69));t.exports=i;},function(t,e,n){var r=n(11),i=n(147),a=n(144),u=function(t){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,e);var i=r.mix({layout:new a.CompactBoxTree({getHGap:function getHGap(){return 10;},getVGap:function getVGap(){return 10;}})},n);return function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(void 0===e?"undefined":o(e))&&"function"!=typeof e?t:e;}(this,t.call(this,i));}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":o(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}(e,t),e.prototype.initEvent=function(){var t=this;this.on("afterdrawinner",function(){t.get("_sourceData").roots.forEach(function(e){var n=t.find(e.id);t._setVisibleByCollapsed(n);});});},e.prototype._executeLayout=function(t){var e=this.get("_sourceData");r.isFunction(t)?t(e.roots,this):r.isObject(t)&&(t.roots=e.roots,t.graph=this,t.execute());},e.prototype.getHierarchy=function(t){t=this.getItem(t);for(var e=this.get("_dataMap"),n=t.getModel().parent,r=1;n;){n=e[n].parent,r++;}return r;},e.prototype.parseSource=function(t){var e=t.roots,n=this.get("_dataMap"),i=[],o=[];return e.forEach(function(t){r.traverseTree(t,function(t,e){t.id||(t.id=r.guid()),e||(e=n[t.parent]),e&&(t.parent=e.id,e.id||(e.id=r.guid()),o.push({source:e.id,target:t.id,id:e.id+"-"+t.id})),i.push(t);},function(t){return t.children;},!0);}),{nodes:i,edges:o};},e.prototype._setVisibleByCollapsed=function(t){t.getModel().collapsed?t.deepEach(function(t){t.hide(),t.getEdges().forEach(function(t){t.hide();});}):t.deepEach(function(t){t.collapsedParent&&(t.hide(),t.getEdges().forEach(function(t){t.hide();}));});},e.prototype.source=function(t){var e=this.parseSource(t);this.emit("beforesource"),this.set("_sourceData",t),this.set("_data",e),this.emit("aftersource");},e.prototype.setNodeNth=function(t,e){var n=t.getModel(),i=t.getParent().getModel().children;r.Array.remove(i,n),i.splice(e,0,n);},e.prototype.getNth=function(t){var e=t.getModel();return t.getParent().getModel().children.indexOf(e);},e.prototype.add=function(t,e){var n=this.get("_dataMap")[e.parent],i={action:"add",model:e},o=void 0;if("node"===t||"guide"===t){if(this.emit("beforechange",i),"node"===t){if(!n)throw new Error("please set available parent Id !");r.isArray(n.children)?n.children.push(e):n.children=[e];var a=this.parseSource({roots:[e]});this.addItems("node",a.nodes),this.addItems("edge",a.edges),o=this.find(e.id),this._setVisibleByCollapsed(o),r.isNil(e.nth)||this.setNodeNth(o,e.nth),this.find(n.id).forceUpdate();}else this.addItems(t,[e]),o=this.find(e.id);return i.item=o,this.emit("afterchange",i),this.draw(),o;}console.warn("Tree do not support add type "+t+"!");},e.prototype.update=function(t,e){var n=this;if(e){var i=(t=this.getItem(t)).getModel(),o=r.mix({},i),a={action:"update",item:t,originModel:o,updateModel:e};if(e&&this.emit("beforechange",a),this.updateItem(t,e),t.isNode){if("collapsed"in e&&(e.collapsed?t.deepEach(function(t){t.hide(),t.getEdges().forEach(function(t){t.hide();});}):t.deepEach(function(t){t.show(),t.getEdges(function(e){return e.getModel().target===t.id;}).forEach(function(t){t.show();});},function(t){return t.model.collapsed?null:t.getChildren();})),e.parent){var u=this.find(o.id).getModel(),s=this.find(e.parent).getModel();r.Array.remove(u.children,i),s.children?s.children.push(i):s.children=[i],this.find(s.id).forceUpdate();}r.isArray(e.children)&&(o.children&&r.each(o.children,function(t){var e=[n.find(t)];t.getEdges().forEach(function(t){e.push(t);}),n.removeItems(e);}),r.each(e.children,function(t){var e=n.parseSource({roots:[t]});n.addItems("node",e.nodes),n.addItems("edge",e.edges);})),r.isNil(e.nth)||this.setNodeNth(t,e.nth);var c=this.find(i.parent);c&&c.forceUpdate();}return this.emit("afterchange",a),this.draw(),this;}},e.prototype.remove=function(t){var e=this.get("_dataMap"),n=[];if((t=this.getItem(t))&&!t.destroyed){var i={action:"remove",item:t};if(this.emit("beforechange",i),n.push(t),t.getEdges().forEach(function(t){n.push(t);}),"node"===t.type){var o=t.getModel(),a=e[o.parent];t.deepEach(function(t){n.push(t),t.getEdges().forEach(function(t){n.push(t);});}),r.Array.remove(a.children,o),this.find(a.id).forceUpdate();}return this.removeItems(r.uniq(n)),this.emit("afterchange",i),this.draw(),this;}},e.prototype.getRoots=function(){var t=this;return this.getSource().roots.map(function(e){return t.find(e.id);});},e.prototype.save=function(){var t={roots:r.cloneDeep(this.getSource().roots),guides:this.getGuides().map(function(t){return t.getModel();})};return 0===t.roots.length&&delete t.roots,0===t.guides.length&&delete t.guides,t;},e;}(i);t.exports=u;},function(t,e,n){var r=n(11),i={INIT:"_initForceFit"};i.AUGMENT={_initForceFit:function _initForceFit(){var t=this.get("width"),e=this.get("height");return t||e?t?e?void 0:(this.forceFit("height"),void this._bindForceEvent("height")):(this.forceFit("width"),void this._bindForceEvent("width")):(this.forceFit(),void this._bindForceEvent());},_bindForceEvent:function _bindForceEvent(t){var e=this,n=this._getTimer("forceFit"),r=function r(){var r=setTimeout(function(){e.forceFit(t);},200);n&&clearTimeout(n),e._setTimer("forceFit",r);};window.addEventListener("resize",r),this.set("_windowForceResizeEvent",r);},forceFit:function forceFit(t){var e=this.get("_containerDOM"),n=this.get("width"),i=this.get("height"),o=r.getHeight(e),a=r.getWidth(e);return"width"===t?(this.changeSize(a,i),this):"height"===t?(this.changeSize(n,o),this):(this.changeSize(a,o),this);}},t.exports=i;},function(t,e,n){var r=n(11),i={CFG:{fitView:void 0,fitViewPadding:10,minZoom:.2,maxZoom:10}};i.AUGMENT={getBBox:function getBBox(){return this.get("_itemGroup").getBBox();},getFitViewPadding:function getFitViewPadding(){return r.toAllPadding(this.get("fitViewPadding"));},setFitView:function setFitView(t){if(!t)return this;if("autoZoom"===t)return this.autoZoom(),this;var e=this.getFitViewPadding(),n=this.get("width"),i=this.get("height"),o=this.getBBox(),a=o.maxX-o.minX,u=o.maxY-o.minY,s={x:0,y:0,width:n,height:i},c=r.getNineBoxPosition(t,s,a,u,e),f=[1,0,0,0,1,0,0,0,1];r.mat3.translate(f,f,[-o.minX+c.x,-o.minY+c.y]),this.updateMatrix(f);},_getZoomRatio:function _getZoomRatio(t){var e=this.get("maxZoom"),n=this.get("minZoom");return t<n&&(t=n),t>e&&(t=e),t;},autoZoom:function autoZoom(t){t||(t=this.getFitViewPadding());var e=[1,0,0,0,1,0,0,0,1],n=this.get("width"),i=this.get("height"),o=this.getBBox(),a=(o.maxX+o.minX)/2,u=(o.maxY+o.minY)/2,s=n-t[1]-t[3],c=i-t[0]-t[2],f=o.maxX-o.minX,l=o.maxY-o.minY,h=Math.min(c/l,s/f);h=this._getZoomRatio(h),r.mat3.translate(e,e,[-a,-u]),r.mat3.scale(e,e,[h,h]),r.mat3.translate(e,e,[n/2,i/2]),this.updateMatrix(e);},getZoom:function getZoom(){return this.getMatrix()[0];},updateMatrix:function updateMatrix(t){var e=this.get("_rootGroup"),n=this.get("_frontRootGroup"),r={updateMatrix:t,originMatrix:this.getMatrix()};return this.emit("beforeviewportchange",r),e.setMatrix(t),n.setMatrix(t),this.emit("afterviewportchange",r),this.draw(),this;},zoom:function zoom(t,e){if(!r.isNumber(t)){e=this._getZoomRatio(e);var n=this.get("_rootGroup"),i=r.clone(n.getMatrix()),o=i[6]+i[0]*t.x-e*t.x,a=i[7]+i[0]*t.y-e*t.y;return i[6]=0,i[7]=0,i[0]=e,i[4]=e,r.mat3.translate(i,i,[o,a]),this.updateMatrix(i),this;}var u=this.get("width"),s=this.get("height");this.zoomByDom({x:u/2,y:s/2},t);},zoomByDom:function zoomByDom(t,e){var n=this.getPoint(t);return this.zoom(n,e),this;},translate:function translate(t,e){var n=this.get("_rootGroup").getMatrix();return r.mat3.translate(n,n,[t,e]),this.updateMatrix(n),this;},translateByDom:function translateByDom(t,e){var n=this.get("_rootGroup").getMatrix()[0];return this.translate(t/n,e/n),this;},getMatrix:function getMatrix(){return this.get("_rootGroup").getMatrix();},getPoint:function getPoint(t){return this.getPointByDom(t);},getPointByDom:function getPointByDom(t){var e=this.get("_rootGroup").getMatrix();return r.invertMatrix(t,e);},getPointByCanvas:function getPointByCanvas(t){var e=this.get("_canvas").get("pixelRatio");return this.getPoint({x:t.x/e,y:t.y/e});},getPointByClient:function getPointByClient(t){var e=this.get("_canvas").getPointByClient(t.x,t.y);return this.getPointByCanvas(e);},getDomPoint:function getDomPoint(t){var e=this.get("_rootGroup").getMatrix();return r.applyMatrix(t,e);},getCanvasPoint:function getCanvasPoint(t){var e=this.get("_canvas").get("pixelRatio"),n=this.getDomPoint(t);return{x:n.x*e,y:n.y*e};},getClientPoint:function getClientPoint(t){var e=this.getCanvasPoint(t),n=this.get("_canvas").getClientByPoint(e.x,e.y);return{x:n.clientX,y:n.clientY};},focus:function focus(t){if(r.isString(t)&&(t=this.find(t)),t){var e=t.getCenter();this.focusPoint(e);}return this;},navigate:function navigate(t){r.isString(t)&&(t=this.find(t));var e=0,n=0,i=this.get("_rootGroup").getMatrix();if(t){var o=t.getCenter(),a=this.get("width")-16,u=this.get("height")-16,s=t.getBBox(),c=(s.maxX-s.minX)/2,f=(s.maxX-s.minX)/2;i[0]*o.x+i[6]<0?e=-i[6]+i[0]*c-i[0]*o.x:i[0]*o.x+i[6]>a&&(e=-i[6]+a-i[0]*c-i[0]*o.x),i[0]*o.y+i[7]<0?n=-i[7]+i[0]*f-i[0]*o.y:i[0]*o.y+i[7]>u&&(n=-i[7]+u-i[0]*f-i[0]*o.y);}return this.translate(e,n),this;},focusPoint:function focusPoint(t){var e=this.get("_rootGroup").getMatrix(),n=this.get("width"),r=this.get("height"),i=-e[6]+n/2-e[0]*t.x,o=-e[7]+r/2-e[0]*t.y;return this.translate(i,o),this;},focusPointByDom:function focusPointByDom(t){var e=this.getPoint(t);return this.focusPoint(e),this;}},t.exports=i;},function(t,e,n){var r=n(71),i=n(11),a=n(38),u=function(t){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(void 0===e?"undefined":o(e))&&"function"!=typeof e?t:e;}(this,t.call(this,n));return r._init(),r;}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":o(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}(e,t),e.prototype._init=function(){var t=this;this.graph.on("afteritemdraw",function(e){t.cacheKeyFrame(e.item);});},e.prototype.cacheKeyFrame=function(t){var e=this.keyFrameCache,n=t.getGraphicGroup();t.isEdge&&n.setMatrix([1,0,0,0,1,0,0,0,1]),n.deepEach(function(n){var r=n.gid,o={matrix:i.clone(n.getMatrix())};n.isItemContainer&&(o.enterAnimate=t.getEnterAnimate(),o.leaveAnimate=t.getLeaveAnimate()),n.isShape&&(o.attrs=n.getAttrs()),o.item=t,e[r]=o;},!0);},e.prototype._compare=function(){var t=this.stash0,e=this.stash1,n=[],r=[],o=[];i.each(e,function(e,r){t[r]?e.element.get("type")===t[r].element.get("type")&&o.push(r):n.push(r);}),i.each(t,function(t,n){e[n]||r.push(n);}),this.enterElements=n,this.leaveElements=r,this.updateElements=o;},e.prototype._addTween=function(){var t=this.enterElements,e=this.leaveElements,n=this.updateElements,r=this.stash0,o=this.stash1,u=this.keyFrameCache;i.each(t,function(t){var e=u[t],n=e.enterAnimate;n&&n(e.item,r.element,o.element);}),i.each(e,function(t){var e=u[t],n=e.leaveAnimate;if(n){var i=r[t].element;i.getParent().add(i),n(e.item,r,o);}}),i.each(n,function(t){var e=u[t],n=o[t],s=r[t],c=n.element,f=s.element;s.attrsStash&&c.attr(s.attrsStash),c.setMatrix(s.matrixStash),function(t,e){t.set("capture",!1),t.animate(e,a.updateDuration,a.updateEasing,function(){t.set("capture",!0);});}(c,i.mix({},e.attrs,{matrix:e.matrix})),f!==c&&f.remove();});},e.prototype.getDefaultCfg=function(){return{graph:null,canvases:null,stash0:null,stash1:null,keyFrameCache:{}};},e.prototype.run=function(){this.graph.destroyed||(this.updateStash(),this.count<5e3&&(this._compare(),this._addTween()),i.each(this.canvases,function(t){t.draw();}));},e.prototype.updateStash=function(){var t=this.canvases,e=this.elementsStash,n={},r=0;e=e||{},i.each(t,function(t){r+=function t(e,n,r){var o=n.get("children");return i.each(o,function(n){r++;var o=n.gid;if(n.isGroup&&(r=t(e,n,r)),!i.isNil(o)){var a={matrixStash:i.clone(n.getMatrix()),element:n};if(n.isShape){var u=n.get("attrs");a.attrsStash={},i.each(u,function(t,e){a.attrsStash[e]=n.attr(e);});}e[o]=a;}}),r;}(n,t,0);}),this.elementsStash=n,this.stash0=e,this.stash1=n,this.count=r;},e;}(r);t.exports=u;},function(t,e,n){var r=n(11),i=n(354),o={INIT:"_initAnimate"};o.CFG={animate:!1,forcePreventAnimate:!1,_enterAnimate:function _enterAnimate(t){var e=t.getGraphicGroup(),n=e.getMatrix(),i=r.getBBox(e,n),o=(i.minX+i.maxX)/2,a=(i.minY+i.maxY)/2;r.scaleIn(e,o,a);},_leaveAnimate:function _leaveAnimate(t){var e=t.getGraphicGroup(),n=e.getMatrix(),i=r.getBBox(e,n),o=(i.minX+i.maxX)/2,a=(i.minY+i.maxY)/2;r.scaleOut(e,o,a);}},o.AUGMENT={_initAnimate:function _initAnimate(){var t=this,e=this.get("_controllers"),n=this.get("animate"),o=this.get("_canvas"),a=this.get("_frontCanvas"),u=void 0;n&&(u=new i({canvases:[o,a],graph:this}),e.animate=u);var s=function s(){o.draw(),a.draw();},c=r.debounce(function(){u.run();},16);if(u){var f=void 0;this.draw=function(){t.get("forcePreventAnimate")?(f&&clearTimeout(f),f=setTimeout(function(){u.updateStash();},16),s()):c();};}else this.draw=s;},drawFrontCanvas:function drawFrontCanvas(){this.get("_frontCanvas").draw();}},t.exports=o;},function(t,e,n){var r=n(11),i={INIT:"_initFilter",CFG:{filters:[]}};i.AUGMENT={_initFilter:function _initFilter(){var t=this,e=this.get("filters");r.isFunction(e)&&this.set("filters",[e]),this.on("afterchange",function(n){var r=n.action;e.length>0&&"changeData"===r&&!t.destroyed&&t.filter();});},addFilter:function addFilter(t){return this.get("filters").push(t),t;},removeFilter:function removeFilter(t){var e=this.get("filters");this.set("filters",r.filter(e,t));},filter:function filter(){var t=this.get("filters"),e=this.getItems(),n=this.getItems();t.forEach(function(t){n=r.filter(n,t);}),e.forEach(function(t){-1===n.indexOf(t)?t.hide():t.show();}),this.draw();}},t.exports=i;},function(t,e,n){var r=n(11),i=n(148),o={CFG:{modes:{},mode:"default"},INIT:"_initModes"};o.AUGMENT={_initModes:function _initModes(){this._eventStash={};var t=this.get("modes"),e=this.get("mode");r.isEmpty(t)&&(t=r.cloneDeep(this.constructor.Modes),this.set("modes",t)),this.changeMode(e);},changeMode:function changeMode(t){var e=this.get("modes");r.isEmpty(e)||r.isEmpty(e[t])||(i.resetMode(e[t],this),this.set("mode",t));},addBehaviour:function addBehaviour(t){var e=this.get("modes"),n=this.get("mode");r.isEmpty(e[n])&&(e[n]=[]);var o=e[n],a=[].concat(t);return r.each(a,function(t){-1===o.indexOf(t)&&o.push(t);}),i.resetMode(e[n],this),this;},removeBehaviour:function removeBehaviour(t){var e=this.get("modes")[this.get("mode")];if(!r.isEmpty(e)){var n=[].concat(t);return e=e.filter(function(t){return-1===n.indexOf(t);}),i.resetMode(e,this),this;}},behaviourOn:function behaviourOn(t,e){var n=this._eventStash;n[t]||(n[t]=[]),n[t].push(e),this.on(t,e);},_off:function _off(){var t=this,e=this._eventStash;r.each(e,function(e,n){r.each(e,function(e){t.off(n,e);});}),this._eventStash={};}},t.exports=o;},function(t,e,n){var r=n(71),i=n(11),a={MOUSEMOVE:"mousemove",MOUSEDOWN:"mousedown",MOUSEUP:"mouseup",MOUSEENTER:"mouseenter",MOUSELEAVE:"mouseleave",CLICK:"click",DBLCLICK:"dblclick",DRAGSTART:"dragstart",DRAG:"drag",DRAGENTER:"dragenter",DRAGLEAVE:"dragleave",DRAGEND:"dragend",DROP:"drop",CONTEXTMENU:"contextmenu",MOUSEWHEEL:"mousewheel",KEYDOWN:"keydown",KEYUP:"keyup",KEYPRESS:"keypress"},u=[a.DBLCLICK,a.MOUSEDOWN,a.MOUSEUP,a.MOUSEENTER,a.MOUSELEAVE,a.MOUSEMOVE,a.CONTEXTMENU,a.MOUSEWHEEL],s=[a.KEYDOWN,a.KEYUP,a.KEYPRESS],c=function(t){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(void 0===e?"undefined":o(e))&&"function"!=typeof e?t:e;}(this,t.call(this,n));return r._domEvents=[],r._initEventStates(),r._registerEvents(),r;}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":o(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}(e,t),e.prototype._initEventStates=function(){this._pressing=!1,this._dragging=!1,this._currentEventObj=null,this._dragEventObj={};},e.prototype._registerEvents=function(){this._registerMouseEvents(),this._registerKeyboardEvents();},e.prototype._registerKeyboardEvents=function(){var t=this.graph,e=t.getKeyboardEventWrapper(),n=this._domEvents,r=t.get("keyboardEnable");i.each(s,function(o){n.push(i.addEventListener(e,o,function(e){var n=!0;i.isFunction(r)&&(n=r()),n&&t.emit(o,{domEvent:e});}));});},e.prototype._registerMouseEvents=function(){var t=this,e=this,n=this.graph.getMouseEventWrapper(),r=this._domEvents;i.each(u,function(o){r.push(i.addEventListener(n,o,function(n){var r=t._currentEventObj;t._oldEventObj=r,t._processEventObj(n);var o=t._currentEventObj;e._simulateEvents(n,r,o),-1!==[a.MOUSELEAVE,a.MOUSEENTER].indexOf(n.type)&&e._triggerEvent("canvas:"+n.type),e._triggerEvent(n.type),n.type===a.MOUSELEAVE&&(t._dragging&&e._triggerEvent(a.DRAGLEAVE,i.mix({},o,{item:null,shape:null,currentItem:t._dragEventObj.item,currentShape:t._dragEventObj.shape})),e._initEventStates());}));});},e.prototype.destroy=function(){var t=this._domEvents;i.each(t,function(t){t&&t.remove();}),this._domEvents=null;},e.prototype._triggerEvent=function(t,e){if(e||(e="mouseleave"===t?this._oldEventObj:this._currentEventObj),"mousedown"===t&&(e.button=this._button),e._type=t,this.emitGraphEvent(t,e),-1===["canvas:"+a.MOUSELEAVE,"canvas:"+a.MOUSEENTER].indexOf(t)){var n=e.shape&&e.shape.eventPreFix;if(-1!==[a.DRAGSTART,a.DRAG,a.DRAGEND].indexOf(t)&&(n=e.currentShape&&e.currentShape.eventPreFix),n){var r=n+":"+t;e._type=r,i.isBoolean(e._isItemChange)?e._isItemChange&&this.emitGraphEvent(r,e):this.emitGraphEvent(r,e);}}},e.prototype.emitGraphEvent=function(t,e){this.graph.emit(t,e);},e.prototype._getDistanceToPress=function(t){return Math.pow(t.clientX-this._pressX,2)+Math.pow(t.clientY-this._pressY,2);},e.prototype._simulateEvents=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=this._dragEventObj.item,o=this._dragEventObj.shape;switch(t.type){case a.MOUSEDOWN:this._pressing=!0,this._button=t.button,this._pressX=t.clientX,this._pressY=t.clientY;break;case a.MOUSEMOVE:if(this._dragging){if(this._triggerEvent(a.DRAG,i.mix({},n,{button:this._button,currentItem:r,currentShape:o})),e.shape!==n.shape){var u=this._isItemChange(e,n);e.shape&&this._triggerEvent(a.DRAGLEAVE,i.mix({},n,{button:this._button,item:e.item,shape:e.shape,toItem:n.item,toShape:n.shape,currentItem:r,currentShape:o,_isItemChange:u})),n.shape&&this._triggerEvent(a.DRAGENTER,i.mix({},n,{button:this._button,currentItem:r,currentShape:o,fromItem:e.item,fromShape:e.shape,_isItemChange:u}));}}else this._pressing&&this._getDistanceToPress(t)>9&&(this._dragging=!0,this._dragEventObj=n,r=this._dragEventObj.item,o=this._dragEventObj.shape,this._triggerEvent(a.DRAGSTART,i.mix({},n,{button:this._button,currentItem:r,currentShape:o})));if(e.shape!==n.shape){var s=this._isItemChange(e,n);e.shape&&this._triggerEvent(a.MOUSELEAVE,i.mix({},n,{item:e.item,shape:e.shape,toItem:n.item,toShape:n.shape,_isItemChange:s})),n.shape&&this._triggerEvent(a.MOUSEENTER,i.mix({},n,{fromtItem:e.item,fromShape:e.shape,_isItemChange:s}));}break;case a.MOUSEUP:!this._dragging&&this._pressing?this._triggerEvent(a.CLICK,i.mix({},n,{button:this._button})):(this._triggerEvent(a.DROP,i.mix({},n,{button:this._button,currentItem:r,currentShape:o})),this._triggerEvent(a.DRAGEND,i.mix({},n,{button:this._button,currentItem:r,currentShape:o}))),this._pressing=!1,this._dragging=!1,this._dragEventObj={};break;default:return;}},e.prototype._isItemChange=function(t,e){var n=t.shape,r=e.shape,o=n&&r&&(n.get("isItemChange")||r.get("isItemChange"));return o?o(r,n):i.isObject(t.item)&&i.isObject(e.item)?t.item.id!==e.item.id:t.item!==e.item;},e.prototype._processEventObj=function(t){var e=this.graph,n=e.get("_canvas"),r=e.get("_frontCanvas"),i=this._getEventObj(t,n),o=this._getEventObj(t,r);o.shape&&(i.shape=o.shape,i.item=o.item),i.frontEvObj=o,this._currentEventObj=i;},e.prototype._parsePoint=function(t,e){return this.graph.getPointByCanvas({x:t,y:e});},e.prototype._getEventObj=function(t,e){var n=this.graph,r=t.clientX,i=t.clientY,o=e.getPointByClient(r,i),a=this._parsePoint(o.x,o.y),u=e.getShape(o.x,o.y),s=n.getItemByShape(u),c=e.get("pixelRatio");return{item:s,shape:u,x:a.x,y:a.y,domX:o.x/c,domY:o.y/c,domEvent:t};},e;}(r);t.exports=c;},function(t,e,n){var r={},i=n(358);r.INIT="_initEvents",r.CFG={keyboardEnable:!0},r.AUGMENT={_initEvents:function _initEvents(){this.get("_controllers").events=new i({graph:this});}},t.exports=r;},function(t,e,n){var r=n(11),i={};i.AUGMENT={find:function find(t){return this.get("_itemMap")[t];},getNodes:function getNodes(){return this.get("_itemMap")._nodes;},getEdges:function getEdges(){return this.get("_itemMap")._edges;},getGroups:function getGroups(){return this.get("_itemMap")._groups;},getGuides:function getGuides(){return this.get("_itemMap")._guides;},getItems:function getItems(){var t=this.get("_itemMap"),e=[];return r.each(t,function(t){t.type&&e.push(t);}),e;},getItemByShape:function getItemByShape(t){return t?this.getItem(t.id):null;},getItem:function getItem(t){var e=this.get("_itemMap");return r.isObject(t)?t.destroyed&&(t=e[t.id]):t=e[t],t;}},t.exports=i;},function(t,e,n){var r=n(71),i=n(11),a=["color","shape","size","label","style"],u=function(t){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(void 0===e?"undefined":o(e))&&"function"!=typeof e?t:e;}(this,t.call(this,n));return r._init(),r;}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":o(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}(e,t),e.prototype._init=function(){var t=this,e={};i.each(a,function(n){e[n]={},t[n]=function(r){return e[n].input=r,t;};}),this.channels=e;},e.prototype.addChannels=function(t){var e=this.channels;i.each(t,function(t,n){e[n]={input:t};});},e.prototype.mapping=function(t){var e=this.channels;i.each(e,function(e,n){i.isNil(t[n])&&(i.isFunction(e.input)?t[n]=e.input(t):e.input&&(t[n]=e.input));});},e;}(r);t.exports=u;},function(t,e,n){var r=n(361),i={INIT:"_initMapper"};i.AUGMENT={_initMapper:function _initMapper(){var t=this.get("_controllers");t.nodeMapper=new r({graph:this}),t.edgeMapper=new r({graph:this}),t.groupMapper=new r({graph:this}),t.guideMapper=new r({graph:this});},node:function node(t){var e=this._getController("nodeMapper");return t&&e.addChannels(t),e;},edge:function edge(t){var e=this._getController("edgeMapper");return t&&e.addChannels(t),e;},group:function group(t){var e=this._getController("groupMapper");return t&&e.addChannels(t),this._getController("groupMapper");},guide:function guide(t){var e=this._getController("guideMapper");return t&&e.addChannels(t),this._getController("guideMapper");}},t.exports=i;},function(t,e,n){var r=function(t){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(void 0===e?"undefined":o(e))&&"function"!=typeof e?t:e;}(this,t.call(this,n));return r._init(),r;}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":o(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}(e,t),e.prototype.getDefaultCfg=function(){return{graph:null,auto:!0,processer:null};},e.prototype._init=function(){var t=this,e=this.graph;e.on("afteritemdraw",function(t){var e=t.item,n=e.getKeyShape(),r=e.getModel();if(e.isEdge)r.lineWidth=n.attr("lineWidth");else if(e.isNode||e.isGroup){var i=e.getBBox();r.width=i.width,r.height=i.height;}}),e.on("afterchange",function(n){var r=n.action;"once"===t.auto?"changeData"===r&&!e.destroyed&&t.layout():t.auto&&!e.destroyed&&t.layout();});},e.prototype.changeLayout=function(t){this.processer=t,this.layout();},e.prototype.layout=function(){var t=this.graph,e=this.processer;t.emit("beforelayout");var n=t.getNodes().filter(function(t){return t.isVisible();}).map(function(t){return t.getModel();}),r=t.getEdges().filter(function(t){return t.isVisible();}).map(function(t){return t.getModel();}),i=t.getGroups().filter(function(t){return t.isVisible();}).map(function(t){return t.getModel();});t._executeLayout(e,n,r,i),t.updateNodePosition(),t.emit("afterlayout");},e.prototype.getLayoutProcesser=function(){return this.processer;},e;}(n(71));t.exports=r;},function(t,e,n){var r=n(11),i=n(363),o={CFG:{layout:void 0},INIT:"_initLayout"};o.AUGMENT={_initLayout:function _initLayout(){var t=this.get("_controllers"),e=this._getLayoutCfg();e&&(t.layout=new i(r.mix({graph:this},e)));},_getLayoutCfg:function _getLayoutCfg(){var t=this.get("layout");return r.isPlainObject(t)?t:r.isFunction(t)||r.isObject(t)?{processer:t}:null;},layout:function layout(){return this._getController("layout").layout(),this;},updateNodePosition:function updateNodePosition(){var t=this.getNodes(),e=this.getGroups(),n=this.getEdges(),r=this.getGuides();return t.forEach(function(t){t.layoutUpdate();}),e.forEach(function(t){t.layoutUpdate();}),n.forEach(function(t){t.layoutUpdate();}),r.forEach(function(t){t.layoutUpdate();}),this.draw(),this;},changeLayout:function changeLayout(t){return this._getController("layout").changeLayout(t),this;},getLayout:function getLayout(){return this._getController("layout").getLayoutProcesser();}},t.exports=o;},function(t,e,n){var r=n(11),i=function(t){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,e);var i={type:"guide",isGuide:!0,zIndex:4};return r.mix(i,n),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(void 0===e?"undefined":o(e))&&"function"!=typeof e?t:e;}(this,t.call(this,i));}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":o(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}(e,t),e;}(n(97));t.exports=i;},function(t,e,n){var r=n(11),i=function(t){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,e);var i={type:"group",isNode:!1,isGroup:!0,zIndex:1};return r.mix(i,n),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(void 0===e?"undefined":o(e))&&"function"!=typeof e?t:e;}(this,t.call(this,i));}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":o(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}(e,t),e.prototype._afterDraw=function(){this.getModel().collapsed&&this.deepEach(function(t){t.hide();}),t.prototype._afterDraw.call(this);},e.prototype.updatePosition=function(){},e.prototype._shouldDraw=function(){return!0;},e.prototype.getCrossEdges=function(){var t=[],e=this.getInnerEdges();this.deepEach(function(e){t.push(e.id);});var n=e.filter(function(e){var n=e.getModel();return-1===t.indexOf(n.source)||-1===t.indexOf(n.target);});return r.uniq(n);},e.prototype.getInnerEdges=function(){var t=[];return this.deepEach(function(e){e.getEdges().forEach(function(e){t.push(e);});}),r.uniq(t);},e.prototype.getChildrenBBox=function(){var t=this.getChildren().map(function(t){return t.getGraphicGroup();});return r.getChildrenBBox(t);},e;}(n(145));t.exports=i;},function(t,e,n){var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n){Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}}return t;},i=n(11),a=function(t){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,e);var r={type:"edge",isEdge:!0,zIndex:2};return i.mix(r,n),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(void 0===e?"undefined":o(e))&&"function"!=typeof e?t:e;}(this,t.call(this,r));}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":o(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}(e,t),e.prototype._beforeDraw=function(){var e=this.model,n=this.itemMap;i.isObject(e.source)?this.source=e.source:this.source=n[e.source],i.isObject(e.target)?this.target=e.target:this.target=n[e.target],t.prototype._beforeDraw.call(this);},e.prototype._afterDraw=function(){this.linkedItemVisible()||this.hide(),this._addArrow(),t.prototype._afterDraw.call(this);},e.prototype._addArrow=function(){var t=this.model,e=this.keyShape,n=this.shapeObj,r=e.attr("endArrow"),i=e.attr("startArrow"),o=t.endArrow||r,a=t.startArrow||i;i&&e.attr("startArrow",!1),r&&e.attr("endArrow",!1),o&&this._drawArrow(n.endArrow,"end"),a&&this._drawArrow(n.startArrow,"start");},e.prototype._drawArrow=function(t,e){var n=t.path,o=t.dindent,a=t.tangent,u=t.ratio,s=t.style;a=a(this),o=o(this),n=n(this),s=s(this),u=u();var c=this.group,f=this.keyShape,l=f.getPoint(u);if(l){var h=i.cloneDeep(f.attr("path")),d=c.addShape("marker",{attrs:r({symbol:function symbol(){return n;}},s)}),p=a[1][0]-a[0][0],g=a[1][1]-a[0][1],v=o/Math.sqrt(p*p+g*g),m=[-p*v,-g*v],y=0,b=Math.atan(p/g);if(0===g&&p<0?y=Math.PI:p>0&&g>0?y=Math.PI/2-b:p<0&&g<0?y=-Math.PI/2-b:p>=0&&g<0?y=-b-Math.PI/2:p<=0&&g>0&&(y=Math.PI/2-b),d.rotate(y),d.translate(l.x,l.y),"end"===e){var x=h[h.length-1];x[x.length-1]=m[1]+l.y,x[x.length-2]=m[0]+l.x;}else{var _=h[0];_[_.length-1]=m[1]+l.y,_[_.length-2]=m[0]+l.x;}f.attr("path",h);}},e.prototype._getControlPoints=function(){var t=this.model.controlPoints;return i.isArray(t)?t:[];},e.prototype._shouldDraw=function(){return t.prototype._shouldDraw.call(this)&&this.linkedItemVisible();},e.prototype._getPoint=function(t){if(t.linkable){var e=t.getBBox();return{x:e.centerX,y:e.centerY};}return{x:t.x,y:t.y};},e.prototype.linkedItemVisible=function(){var t=this.source,e=this.target;return i.isPlainObject(t)||i.isPlainObject(e)||t.isVisible()||e.isVisible()||t.collapsedParent!==e.collapsedParent;},e.prototype.getSource=function(){var t=this.source,e=t.collapsedParent,n=this.itemMap;return e?n[e.id]:t;},e.prototype.getTarget=function(){var t=this.target,e=t.collapsedParent,n=this.itemMap;return e?n[e.id]:t;},e.prototype.getPoints=function(){var t=this.getSource(),e=this.getTarget(),n=this.model,r=this._getControlPoints(),o=this._getPoint(t),a=this._getPoint(e),u=[o].concat(r).concat([a]),s=u.length;if(t.linkable){var c=i.isNumber(this.model.sourceAnchor)&&t.id===n.source?this.model.sourceAnchor:u[1],f=t.getLinkPoints(c);u[0]=f[0];}if(e.linkable){var l=i.isNumber(this.model.targetAnchor)&&e.id===n.target?this.model.targetAnchor:u[s-2],h=e.getLinkPoints(l);u[s-1]=h[0];}return u;},e;}(n(97));t.exports=a;},function(t,e,n){t.exports={Node:n(145),Edge:n(367),Group:n(366),Guide:n(365)};},function(t,e,n){var r=n(11),i=function(t){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,e);var i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(void 0===e?"undefined":o(e))&&"function"!=typeof e?t:e;}(this,t.call(this)),a=i.getDefaultCfg();return i._cfg=r.mix({},a,n),i;}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":o(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}(e,t),e.prototype.getDefaultCfg=function(){return{};},e.prototype.get=function(t){return this._cfg[t];},e.prototype.set=function(t,e){this._cfg[t]=e;},e.prototype.destroy=function(){this._cfg={},this.removeAllListeners(),this.destroyed=!0;},e;}(n(178));t.exports=i;},function(t,e,n){var r=n(21),i=n(11);!function(t,e,n){var o=function t(e){t.superclass.constructor.call(this,e);},a=function t(e){t.superclass.constructor.call(this,e);};i.extend(o,r.canvas[e]),i.extend(a,r.svg[e]),i.augment(o,n),i.augment(a,n),r.canvas[t]=o,r.svg[t]=a;}("RootGroup","Group",{drawInner:function drawInner(t){var e=this;this.deepEach(function(t){var n=t.get("freezePoint"),r=e.get("freezable"),i=e.getMatrix()[0];!1!==r&&t.isShape&&n&&t.get("visible")&&(t.initTransform(),t.transform([["t",-n.x,-n.y],["s",1/i,1/i],["t",n.x,n.y]]));}),this.constructor.superclass.drawInner.call(this,t);}});},function(t,e,n){var r=n(11),i=n(21),o=function o(){};r.augment(o,{getAttrs:function getAttrs(){var t=this,e=this.get("attrs"),n={};return r.each(e,function(e,r){n[r]=t.attr(r);}),n;},hasClass:function hasClass(t){var e=this.get("class");return!(!e||-1===e.indexOf(t));}}),r.mixin(i.canvas.Shape,[o]),r.mixin(i.svg.Shape,[o]),t.exports=o;},function(t,e,n){var r=n(21),i=n(11),o=function o(){};i.augment(o,{findByClass:function findByClass(t){var e=[];return this.deepEach(function(n){n.hasClass(t)&&e.push(n);}),e;},hasClass:function hasClass(t){var e=this.get("class");return!(!e||-1===e.indexOf(t));},deepEach:function deepEach(t,e){i.traverseTree(this,t,function(t){return t.get("children");},e);},sort:function sort(){var t=this.get("children");this.set("children",i.radixSort(t,function(t){return t.get("zIndex");}));},sortBy:function sortBy(t){var e=this.get("children");this.set("children",i.radixSort(e,t));},clear:function clear(t){var e=this.get("children");for(t=!1!==t;0!==e.length;){e[e.length-1].remove(t);}return this;}}),i.mixin(r.canvas.Group,[o]),i.mixin(r.svg.Group,[o]),t.exports=o;},function(t,e,n){var r=n(11),i=n(21),o=function o(){};r.augment(o,{beforeDraw:function beforeDraw(){var t=this.get("context"),e=this.get("el");this.emit("beforedraw"),t&&t.clearRect(0,0,e.width,e.height);}}),r.mixin(i.canvas.Canvas,[o]),r.mixin(i.svg.Canvas,[o]),t.exports=o;},function(t,e,n){n(48).registerGuide("common",{draw:function draw(){console.warn("do not have this guide, please register one");}});},function(t,e,n){t.exports={common:n(374)};},function(t,e,n){var r=n(48),i=n(11),o=n(38);r.registerGroup("common",{draw:function draw(t){return t.getModel().collapsed?this.drawCollapsed(t):this.drawExpanded(t);},getLabel:function getLabel(t){return t.getModel().label;},drawLabel:function drawLabel(t,e,n){var r=this.getLabel(t);if(r){var a=t.getGraphicGroup(),u=[8,8],s=i.mix(!0,{},o.labelStyle,{x:e+u[0],y:n+u[1],textAlign:"left",textBaseline:"top"});i.isObject(r)?i.mix(s,r):s.text=r,a.addShape("text",{attrs:s});}},drawKeyShape:function drawKeyShape(t,e,n,r,a){var u=t.getModel(),s=t.getGraphicGroup(),c=i.mix({},o.groupStyle,u.style),f=i.getRectPath(e,n,r,a,c.radius);return s.addShape("path",{attrs:i.mix({},c,{path:f})});},drawExpanded:function drawExpanded(t){var e=t.getChildrenBBox(),n=e.minX-o.groupBackgroundPadding[3],r=e.minY-o.groupBackgroundPadding[0],i=e.maxX-e.minX+o.groupBackgroundPadding[3]+o.groupBackgroundPadding[1],a=e.maxY-e.minY+o.groupBackgroundPadding[0]+o.groupBackgroundPadding[2],u=this.drawKeyShape(t,n,r,i,a);return this.drawLabel(t,n,r),u;},drawCollapsed:function drawCollapsed(t){var e=t.getChildrenBBox(),n=e.minX-o.groupBackgroundPadding[3],r=e.minY-o.groupBackgroundPadding[0],i=this.drawKeyShape(t,n,r,184,40);return this.drawLabel(t,n,r),i;},anchor:{intersectBox:"rect"}});},function(t,e,n){t.exports={common:n(376)};},function(t,e,n){var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n){Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}}return t;},i=n(48),o=n(11),a=n(38),u={path:function path(t){var e=t.getKeyShape().attr("lineWidth"),n=10*(e=e>3?e:3)/3,r=4*e/3,i=4*e;return[["M",-n,r],["L",0,0],["L",-n,-r],["A",i,i,0,0,1,-n,r],["Z"]];},dindent:function dindent(t){var e=t.getKeyShape().attr("lineWidth");return 3.1*(e>3?e:3);},style:function style(t){var e=t.getKeyShape().get("attrs");return{fillOpacity:e.strokeOpacity,fill:e.stroke};}};i.registerEdge("common",{draw:function draw(t){var e=this.drawKeyShape(t);return this.drawLabel(t,e),e;},drawKeyShape:function drawKeyShape(t){var e=t.getGraphicGroup(),n=this.getStyle(t),r=this.getPath(t);return e.addShape("path",{attrs:o.mix({},n,{path:r})});},getStyle:function getStyle(t){var e=t.getModel();return o.mix(!0,{},{stroke:e.color||"#A3B1BF",strokeOpacity:.92,lineAppendWidth:4,lineWidth:e.size||1},e.style);},getPath:function getPath(t){var e=t.getPoints();return o.pointsToPolygon(e);},getLabel:function getLabel(t){return t.getModel().label;},drawLabel:function drawLabel(t,e){var n=this.getLabel(t),r=t.getGraphicGroup(),i=t.getModel();if(n){var u=e.getPoint(.5),s=o.mix(!0,{},a.labelStyle,u);o.isObject(n)?o.mix(s,n):s.text=n,n=r.addShape("text",{attrs:s});var c=o.toAllPadding([4,8]),f=n.getBBox(),l={fill:"white"},h=i.labelRectStyle?o.mix({},l,i.labelRectStyle):l;r.addShape("rect",{attrs:o.mix({},h,{x:f.minX-c[3],y:f.minY-c[0],width:f.maxX-f.minX+c[1]+c[3],height:f.maxY-f.minY+c[0]+c[2]})}),o.toFront(n);}},startArrow:r({},u,{tangent:function tangent(t){return t.getKeyShape().getStartTangent();},ratio:function ratio(){return 0;}}),endArrow:r({},u,{tangent:function tangent(t){return t.getKeyShape().getEndTangent();},ratio:function ratio(){return 1;}})});},function(t,e,n){t.exports={common:n(378)};},function(t,e,n){var r=n(48),i=n(11);r.registerNode("html",{getHtml:function getHtml(t){return t.getModel().html;},cssSize:!0,draw:function draw(t){var e=i.createDOM('<div class="g6-html-node-container"></div>'),n=t.getGraphicGroup(),r=t.getModel(),o=this.getSize(t),a=this.getStyle(t),u=n.get("canvas").get("htmlElementContaniner"),s=this.cssSize,c=this.getHtml(t);c=c?i.createDOM(c):i.createDOM("<div></div>"),e.css({position:"absolute",padding:"0px",margin:"0px",visibility:"hidden"}),e.appendChild(c),s&&(u.appendChild(e),o[0]=e.width(),o[1]=e.height());var f=-o[0]/2,l=-o[1]/2,h=o[0],d=o[1],p=n.addShape("rect",{attrs:i.mix({},a,{x:f,y:l,width:h,height:d})});return n.addShape("html",{attrs:i.mix({x:f,y:l,width:h,height:d,html:e},r.style)}),p;}});},function(t,e,n){var r=n(48),i=n(11),o=n(38);r.registerNode("common",{draw:function draw(t){var e=t.getGraphicGroup(),n=this.drawLabel(t),r=this.drawKeyShape(t);return n&&i.toFront(n,e),r;},getSize:function getSize(t){var e=t.getModel().size;return i.isArray(e)?e:i.isNumber(e)?[e,e]:[o.defaultNodeSize,o.defaultNodeSize];},getStyle:function getStyle(t){var e=t.getModel();return i.mix(!0,{lineWidth:1,fill:e.color||"#40a9ff",stroke:e.color||"#096dd9",fillOpacity:.92},e.style);},getLabel:function getLabel(t){return t.getModel().label;},drawKeyShape:function drawKeyShape(t){var e=t.getGraphicGroup(),n=this.getStyle(t),r=this.getPath(t);return e.addShape("path",{attrs:i.mix({},n,{path:r})});},drawLabel:function drawLabel(t){var e=t.getGraphicGroup(),n=this.getLabel(t);if(!i.isNil(n)){var r=i.mix(!0,{},o.labelStyle,{x:0,y:0});return i.isObject(n)?i.mix(r,n):r.text=n,e.addShape("text",{class:"label",attrs:r});}},getPath:function getPath(t){var e=this.getSize(t);return i.getEllipsePath(0,0,e[0]/2,e[1]/2);}});},function(t,e,n){t.exports={common:n(381),html:n(380)};},function(t,e,n){var r=n(38);t.exports={scaleIn:function scaleIn(t,e,n,i,o){i=i||e,o=o||n,t.transform([["t",-i,-o],["s",.01,.01],["t",e,n]]),t&&!t.get("destroyed")&&t.animate({transform:[["t",-e,-n],["s",100,100],["t",i,o]]},r.enterDuration,r.enterEasing);},scaleOut:function scaleOut(t,e,n,i,o){i=i||e,o=o||n,t&&!t.get("destroyed")&&t.animate({transform:[["t",-i,-o],["s",.01,.01],["t",e,n]]},r.leaveDuration,r.leaveEasing,function(){t.remove();});}};},function(t,e,n){var r=n(176),i=n(46),o={getNineBoxPosition:function getNineBoxPosition(t,e,n,r,i){var o={};switch(t){case"tl":o.y=e.x+i[0],o.x=e.y+i[3];break;case"lc":o.y=(e.height-r)/2,o.x=i[3];break;case"bl":o.y=e.height-r-i[2],o.x=i[3];break;case"cc":o.y=(e.height-r)/2,o.x=(e.width-n)/2;break;case"tc":o.y=i[0],o.x=(e.width-n)/2;break;case"tr":o.y=i[0],o.x=e.width-n-i[1];break;case"rc":o.y=(e.height-r)/2,o.x=e.width-n-i[1];break;case"br":o.y=e.height-r-i[2],o.x=e.width-n-i[1];break;case"bc":o.y=e.height-r-i[2],o.x=(e.width-n)/2;break;default:o.y=e.x+i[0],o.x=e.y+i[3];}return o.x+=e.x,o.y+=e.y,o;},getTotalBBox:function getTotalBBox(t){var e=1/0,n=-1/0,r=1/0,i=-1/0;return t.forEach(function(t){t.minX<e&&(e=t.minX),t.maxX>n&&(n=t.maxX),t.minY<r&&(r=t.minY),t.maxY>i&&(i=t.maxY);}),{minX:e,minY:r,maxX:n,maxY:i,width:n-e,height:i-r};},getChildrenBBox:function getChildrenBBox(t){var e=1/0,n=-1/0,r=1/0,a=-1/0;i.each(t,function(t){var i=t.isGroup?o.getChildrenBBox(t.get("children")):t.getBBox();if(!i)return!0;var u=[i.minX,i.minY,1],s=[i.minX,i.maxY,1],c=[i.maxX,i.minY,1],f=[i.maxX,i.maxY,1];t.apply(u),t.apply(s),t.apply(c),t.apply(f);var l=Math.min(u[0],s[0],c[0],f[0]),h=Math.max(u[0],s[0],c[0],f[0]),d=Math.min(u[1],s[1],c[1],f[1]),p=Math.max(u[1],s[1],c[1],f[1]);l<e&&(e=l),h>n&&(n=h),d<r&&(r=d),p>a&&(a=p);});var u={minX:e,minY:r,maxX:n,maxY:a};return u.x=u.minX,u.y=u.minY,u.width=u.maxX-u.minX,u.height=u.maxY-u.minY,u.centerX=(u.minX+u.maxX)/2,u.centerY=(u.minY+u.maxY)/2,u;},getBBox:function getBBox(t,e){var n=t.getBBox(),i={x:n.minX,y:n.minY},o={x:n.maxX,y:n.maxY},a=void 0;if(e.isGroup){for(a=t;a!==e;){var u=a.getMatrix();i=r.applyMatrix(i,u),o=r.applyMatrix(o,u),a=a.getParent();}var s=a.getMatrix();i=r.applyMatrix(i,s),o=r.applyMatrix(o,s);}else i=r.applyMatrix(i,e),o=r.applyMatrix(o,e);return{minX:i.x,minY:i.y,maxX:o.x,maxY:o.y};},toBack:function toBack(t,e){!e&&(e=t.getParent());var n=e.get("children");i.Array.remove(n,t),n.unshift(t);},toFront:function toFront(t,e){!e&&(e=t.getParent());var n=e.get("children");i.Array.remove(n,t),n.push(t);}};t.exports=o;},function(t,e,n){var r=n(46),i=n(149);t.exports={isNode:function isNode(t){return t&&r.isObject(t)&&"node"===t.type;},isEdge:function isEdge(t){return t&&r.isObject(t)&&"edge"===t.type;},isGroup:function isGroup(t){return t&&r.isObject(t)&&"group"===t.type;},graph2Canvas:function graph2Canvas(t){var e=t=r.mix({graph:null,width:null,height:null,canvas:null,minMaxZoom:1/0,minMinZoom:0,pixelRatio:2,beforeTransform:function beforeTransform(){},afterTransform:function afterTransform(){}},t),n=e.graph,o=e.width,a=e.height,u=e.canvas,s=e.minMaxZoom,c=e.minMinZoom,f=e.pixelRatio,l=e.beforeTransform,h=e.afterTransform,d=n.getCanvas(),p=void 0;if(!u){var g=i.createDOM("<canvas></canvas>");p=f/d.get("pixelRatio"),d.scale(p,p),u=new(n.getConstructor("Canvas"))({containerDOM:g,width:o*p,height:a*p});}var v=u.get("context"),m=d.get("context"),y=n.get("width"),b=n.get("height"),x=r.cloneDeep(n.getMatrix()),_=n.get("maxZoom"),w=n.get("minZoom"),S=n.getRootGroup(),M=n._events;return S.setSilent("freezable",!1),n.set("maxZoom",s),n.set("minZoom",c),n.set("width",o),n.set("height",a),n._events=[],n.getItems().length>0&&(l(n),d.set("context",v),n.autoZoom(),u.matrix=r.cloneDeep(n.getMatrix())),d.set("context",v),d.beforeDraw(),d.constructor.superclass.draw.call(d,v),S.setSilent("freezable",!0),n.set("width",y),n.set("height",b),n.set("maxZoom",_),n.set("minZoom",w),n.updateMatrix(x),p&&(h(n),d.scale(1/p,1/p)),n._events=M,d.set("context",m),d.draw(),u.get("el");}};},function(t,e,n){var r=n(21),i={};n(46).mix(i,r.PathUtil,{getRectPath:r.PathUtil.rectPath,pointsToPolygon:function pointsToPolygon(t){for(var e=[["M",t[0].x,t[0].y]],n=1;n<t.length;n++){var r=t[n];e.push(["L",r.x,r.y]);}return e;},getEllipsePath:function getEllipsePath(t,e,n,r){return[["M",t,e-r],["a",n,r,0,1,1,0,2*r],["a",n,r,0,1,1,0,-2*r],["z"]];}}),t.exports=i;},function(t,e){t.exports=function(){};},function(t,e,n){var r=n(161),i=n(387),o=n(84),a=r&&1/o(new r([,-0]))[1]==1/0?function(t){return new r(t);}:i;t.exports=a;},function(t,e){t.exports=function(t,e,n){for(var r=-1,i=null==t?0:t.length;++r<i;){if(n(e,t[r]))return!0;}return!1;};},function(t,e,n){var r=n(172);t.exports=function(t,e){return!(null==t||!t.length)&&r(t,e,0)>-1;};},function(t,e,n){var r=n(157),i=n(390),o=n(389),a=n(156),u=n(388),s=n(84);t.exports=function(t,e,n){var c=-1,f=i,l=t.length,h=!0,d=[],p=d;if(n)h=!1,f=o;else if(l>=200){var g=e?null:u(t);if(g)return s(g);h=!1,f=a,p=new r();}else p=e?[]:d;t:for(;++c<l;){var v=t[c],m=e?e(v):v;if(v=n||0!==v?v:0,h&&m==m){for(var y=p.length;y--;){if(p[y]===m)continue t;}e&&p.push(m),d.push(v);}else f(p,m,n)||(p!==d&&p.push(m),d.push(v));}return d;};},function(t,e,n){var r=n(391);t.exports=function(t){return t&&t.length?r(t):[];};},function(t,e,n){var r=n(24);t.exports=function(){return r.Date.now();};},function(t,e,n){var r=n(150),i=n(22);t.exports=function(t,e,n){var o=!0,a=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return i(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),r(t,e,{leading:o,maxWait:e,trailing:a});};},function(t,e,n){var r=n(152);t.exports=function(t){return function(e){return r(e,t);};};},function(t,e){t.exports=function(t){return function(e){return null==e?void 0:e[t];};};},function(t,e,n){var r=n(396),i=n(395),o=n(99),a=n(62);t.exports=function(t){return o(t)?r(a(t)):i(t);};},function(t,e){t.exports=function(t,e){return null!=t&&e in Object(t);};},function(t,e,n){var r=n(398),i=n(197);t.exports=function(t,e){return null!=t&&i(t,e,r);};},function(t,e,n){function r(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(o);var n=function n(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a;};return n.cache=new(r.Cache||i)(),n;}var i=n(108),o="Expected a function";r.Cache=i,t.exports=r;},function(t,e,n){var r=n(400);t.exports=function(t){var e=r(t,function(t){return 500===n.size&&n.clear(),t;}),n=e.cache;return e;};},function(t,e,n){var r=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,o=n(401)(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(r,function(t,n,r,o){e.push(r?o.replace(i,"$1"):n||t);}),e;});t.exports=o;},function(t,e,n){var r=n(159),i=n(153),o=n(399),a=n(99),u=n(155),s=n(154),c=n(62);t.exports=function(t,e){return a(t)&&u(e)?s(c(t),e):function(n){var a=i(n,t);return void 0===a&&a===e?o(n,t):r(e,a,3);};};},function(t,e,n){var r=n(155),i=n(53);t.exports=function(t){for(var e=i(t),n=e.length;n--;){var o=e[n],a=t[o];e[n]=[o,a,r(a)];}return e;};},function(t,e,n){var r=n(163),i=Object.prototype.hasOwnProperty;t.exports=function(t,e,n,o,a,u){var s=1&n,c=r(t),f=c.length;if(f!=r(e).length&&!s)return!1;for(var l=f;l--;){var h=c[l];if(!(s?h in e:i.call(e,h)))return!1;}var d=u.get(t);if(d&&u.get(e))return d==e;var p=!0;u.set(t,e),u.set(e,t);for(var g=s;++l<f;){var v=t[h=c[l]],m=e[h];if(o)var y=s?o(m,v,h,e,t,u):o(v,m,h,t,e,u);if(!(void 0===y?v===m||a(v,m,n,o,u):y)){p=!1;break;}g||(g="constructor"==h);}if(p&&!g){var b=t.constructor,x=e.constructor;b!=x&&"constructor"in t&&"constructor"in e&&!("function"==typeof b&&b instanceof b&&"function"==typeof x&&x instanceof x)&&(p=!1);}return u.delete(t),u.delete(e),p;};},function(t,e,n){var r=n(54),i=n(160),o=n(74),a=n(158),u=n(198),s=n(84),c=r?r.prototype:void 0,f=c?c.valueOf:void 0;t.exports=function(t,e,n,r,c,l,h){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!l(new i(t),new i(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return o(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var d=u;case"[object Set]":var p=1&r;if(d||(d=s),t.size!=e.size&&!p)return!1;var g=h.get(t);if(g)return g==e;r|=2,h.set(t,e);var v=a(d(t),d(e),r,c,l,h);return h.delete(t),v;case"[object Symbol]":if(f)return f.call(t)==f.call(e);}return!1;};},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;){if(e(t[n],n,t))return!0;}return!1;};},function(t,e){t.exports=function(t){return this.__data__.has(t);};},function(t,e){t.exports=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this;};},function(t,e,n){var r=n(86),i=n(158),o=n(406),a=n(405),u=n(63),s=n(23),c=n(85),f=n(126),l="[object Arguments]",h="[object Array]",d="[object Object]",p=Object.prototype.hasOwnProperty;t.exports=function(t,e,n,g,v,m){var y=s(t),b=s(e),x=y?h:u(t),_=b?h:u(e),w=(x=x==l?d:x)==d,S=(_=_==l?d:_)==d,M=x==_;if(M&&c(t)){if(!c(e))return!1;y=!0,w=!1;}if(M&&!w)return m||(m=new r()),y||f(t)?i(t,e,n,g,v,m):o(t,e,x,n,g,v,m);if(!(1&n)){var A=w&&p.call(t,"__wrapped__"),O=S&&p.call(e,"__wrapped__");if(A||O){var P=A?t.value():t,E=O?e.value():e;return m||(m=new r()),v(P,E,n,g,m);}}return!!M&&(m||(m=new r()),a(t,e,n,g,v,m));};},function(t,e,n){var r=n(86),i=n(159);t.exports=function(t,e,n,o){var a=n.length,u=a,s=!o;if(null==t)return!u;for(t=Object(t);a--;){var c=n[a];if(s&&c[2]?c[1]!==t[c[0]]:!(c[0]in t))return!1;}for(;++a<u;){var f=(c=n[a])[0],l=t[f],h=c[1];if(s&&c[2]){if(void 0===l&&!(f in t))return!1;}else{var d=new r();if(o)var p=o(l,h,f,t,e,d);if(!(void 0===p?i(h,l,3,o,d):p))return!1;}}return!0;};},function(t,e,n){var r=n(411),i=n(404),o=n(154);t.exports=function(t){var e=i(t);return 1==e.length&&e[0][2]?o(e[0][0],e[0][1]):function(n){return n===t||r(n,t,e);};};},function(t,e,n){var r="function"==typeof Symbol&&"symbol"==o(Symbol.iterator)?function(t){return void 0===t?"undefined":o(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":o(t);},i=n(412),a=n(403),u=n(151),s=n(23),c=n(397);t.exports=function(t){return"function"==typeof t?t:null==t?u:"object"==(void 0===t?"undefined":r(t))?s(t)?a(t[0],t[1]):i(t):c(t);};},function(t,e,n){var r=n(64);t.exports=function(t,e){return function(n,i){if(null==n)return n;if(!r(n))return t(n,i);for(var o=n.length,a=e?o:-1,u=Object(n);(e?a--:++a<o)&&!1!==i(u[a],a,u);){}return n;};};},function(t,e){t.exports=function(t){return function(e,n,r){for(var i=-1,o=Object(e),a=r(e),u=a.length;u--;){var s=a[t?u:++i];if(!1===n(o[s],s,o))break;}return e;};};},function(t,e,n){var r=n(199),i=n(53);t.exports=function(t,e){return t&&r(t,e,i);};},function(t,e,n){var r=n(416),i=n(414)(r);t.exports=i;},function(t,e,n){var r=n(417);t.exports=function(t,e){var n=[];return r(t,function(t,r,i){e(t,r,i)&&n.push(t);}),n;};},function(t,e,n){var r=n(167),i=n(418),o=n(413),a=n(23);t.exports=function(t,e){return(a(t)?r:i)(t,o(e,3));};},function(t,e,n){var r=n(171),i=n(110),o=n(112),a=Math.min;t.exports=function(t){var e=Math[t];return function(t,n){if(t=i(t),n=null==n?0:a(r(n),292)){var u=(o(t)+"e").split("e"),s=e(u[0]+"e"+(+u[1]+n));return+((u=(o(s)+"e").split("e"))[0]+"e"+(+u[1]-n));}return e(t);};};},function(t,e,n){var r=n(420)("round");t.exports=r;},function(t,e,n){var r=n(63),i=n(29);t.exports=function(t){return i(t)&&"[object Set]"==r(t);};},function(t,e,n){var r=n(422),i=n(105),o=n(104),a=o&&o.isSet,u=a?i(a):r;t.exports=u;},function(t,e,n){var r=n(63),i=n(29);t.exports=function(t){return i(t)&&"[object Map]"==r(t);};},function(t,e,n){var r=n(424),i=n(105),o=n(104),a=o&&o.isMap,u=a?i(a):r;t.exports=u;},function(t,e,n){var r=n(22),i=Object.create,o=function(){function t(){}return function(e){if(!r(e))return{};if(i)return i(e);t.prototype=e;var n=new t();return t.prototype=void 0,n;};}();t.exports=o;},function(t,e,n){var r=n(54),i=r?r.prototype:void 0,o=i?i.valueOf:void 0;t.exports=function(t){return o?Object(o.call(t)):{};};},function(t,e){var n=/\w*$/;t.exports=function(t){var e=new t.constructor(t.source,n.exec(t));return e.lastIndex=t.lastIndex,e;};},function(t,e,n){var r=n(100);t.exports=function(t,e){var n=e?r(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength);};},function(t,e,n){var r=n(100),i=n(429),o=n(428),a=n(427),u=n(201);t.exports=function(t,e,n){var s=t.constructor;switch(e){case"[object ArrayBuffer]":return r(t);case"[object Boolean]":case"[object Date]":return new s(+t);case"[object DataView]":return i(t,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return u(t,n);case"[object Map]":return new s();case"[object Number]":case"[object String]":return new s(t);case"[object RegExp]":return o(t);case"[object Set]":return new s();case"[object Symbol]":return a(t);}};},function(t,e){var n=Object.prototype.hasOwnProperty;t.exports=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&n.call(t,"index")&&(r.index=t.index,r.input=t.input),r;};},function(t,e,n){var r=n(39)(n(24),"WeakMap");t.exports=r;},function(t,e,n){var r=n(39)(n(24),"Promise");t.exports=r;},function(t,e,n){var r=n(39)(n(24),"DataView");t.exports=r;},function(t,e,n){var r=n(162),i=n(165),o=n(102);t.exports=function(t){return r(t,o,i);};},function(t,e,n){var r=n(65),i=n(165);t.exports=function(t,e){return r(t,i(t),e);};},function(t,e,n){var r=n(65),i=n(101);t.exports=function(t,e){return r(t,i(t),e);};},function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t)){e.push(n);}return e;};},function(t,e,n){var r=n(22),i=n(103),o=n(438),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var e=i(t),n=[];for(var u in t){("constructor"!=u||!e&&a.call(t,u))&&n.push(u);}return n;};},function(t,e,n){var r=n(65),i=n(102);t.exports=function(t,e){return t&&r(e,i(e),t);};},function(t,e,n){var r=n(173)(Object.keys,Object);t.exports=r;},function(t,e,n){var r=n(103),i=n(441),o=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return i(t);var e=[];for(var n in Object(t)){o.call(t,n)&&"constructor"!=n&&e.push(n);}return e;};},function(t,e,n){var r=n(44),i=n(106),o=n(29),a={};a["[object Float32Array]"]=a["[object Float64Array]"]=a["[object Int8Array]"]=a["[object Int16Array]"]=a["[object Int32Array]"]=a["[object Uint8Array]"]=a["[object Uint8ClampedArray]"]=a["[object Uint16Array]"]=a["[object Uint32Array]"]=!0,a["[object Arguments]"]=a["[object Array]"]=a["[object ArrayBuffer]"]=a["[object Boolean]"]=a["[object DataView]"]=a["[object Date]"]=a["[object Error]"]=a["[object Function]"]=a["[object Map]"]=a["[object Number]"]=a["[object Object]"]=a["[object RegExp]"]=a["[object Set]"]=a["[object String]"]=a["[object WeakMap]"]=!1,t.exports=function(t){return o(t)&&i(t.length)&&!!a[r(t)];};},function(t,e){t.exports=function(){return!1;};},function(t,e,n){var r=n(44),i=n(29);t.exports=function(t){return i(t)&&"[object Arguments]"==r(t);};},function(t,e){t.exports=function(t,e){for(var n=-1,r=Array(t);++n<t;){r[n]=e(n);}return r;};},function(t,e,n){var r=n(65),i=n(53);t.exports=function(t,e){return t&&r(e,i(e),t);};},function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t);){}return t;};},function(t,e,n){var r=n(72);t.exports=function(t,e){var n=r(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this;};},function(t,e,n){var r=n(72);t.exports=function(t){return r(this,t).has(t);};},function(t,e,n){var r=n(72);t.exports=function(t){return r(this,t).get(t);};},function(t,e){var n="function"==typeof Symbol&&"symbol"==o(Symbol.iterator)?function(t){return void 0===t?"undefined":o(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":o(t);};t.exports=function(t){var e=void 0===t?"undefined":n(t);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t;};},function(t,e,n){var r=n(72);t.exports=function(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e;};},function(t,e,n){var r=n(73);t.exports=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?"__lodash_hash_undefined__":e,this;};},function(t,e,n){var r=n(73),i=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return r?void 0!==e[t]:i.call(e,t);};},function(t,e,n){var r=n(73),i=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(r){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n;}return i.call(e,t)?e[t]:void 0;};},function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e;};},function(t,e,n){var r=n(73);t.exports=function(){this.__data__=r?r(null):{},this.size=0;};},function(t,e,n){function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1]);}}var i=n(458),o=n(457),a=n(456),u=n(455),s=n(454);r.prototype.clear=i,r.prototype.delete=o,r.prototype.get=a,r.prototype.has=u,r.prototype.set=s,t.exports=r;},function(t,e,n){var r=n(459),i=n(76),o=n(109);t.exports=function(){this.size=0,this.__data__={hash:new r(),map:new(o||i)(),string:new r()};};},function(t,e){t.exports=function(t,e){return null==t?void 0:t[e];};},function(t,e,n){var r=n(24)["__core-js_shared__"];t.exports=r;},function(t,e,n){var r=n(462),i=function(){var t=/[^.]+$/.exec(r&&r.keys&&r.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:"";}();t.exports=function(t){return!!i&&i in t;};},function(t,e,n){var r=n(130),i=n(463),o=n(22),a=n(170),u=/^\[object .+?Constructor\]$/,s=Function.prototype,c=Object.prototype,f=s.toString,l=c.hasOwnProperty,h=RegExp("^"+f.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!o(t)||i(t))&&(r(t)?h:u).test(a(t));};},function(t,e,n){var r=n(76),i=n(109),o=n(108);t.exports=function(t,e){var n=this.__data__;if(n instanceof r){var a=n.__data__;if(!i||a.length<199)return a.push([t,e]),this.size=++n.size,this;n=this.__data__=new o(a);}return n.set(t,e),this.size=n.size,this;};},function(t,e){t.exports=function(t){return this.__data__.has(t);};},function(t,e){t.exports=function(t){return this.__data__.get(t);};},function(t,e){t.exports=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n;};},function(t,e,n){var r=n(76);t.exports=function(){this.__data__=new r(),this.size=0;};},function(t,e,n){var r=n(75);t.exports=function(t,e){var n=this.__data__,i=r(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this;};},function(t,e,n){var r=n(75);t.exports=function(t){return r(this.__data__,t)>-1;};},function(t,e,n){var r=n(75);t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1];};},function(t,e,n){var r=n(75),i=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=r(e,t);return!(n<0||(n==e.length-1?e.pop():i.call(e,n,1),--this.size,0));};},function(t,e){t.exports=function(){this.__data__=[],this.size=0;};},function(t,e,n){var r=n(86),i=n(448),o=n(129),a=n(447),u=n(440),s=n(202),c=n(168),f=n(437),l=n(436),h=n(163),d=n(435),p=n(63),g=n(431),v=n(430),m=n(200),y=n(23),b=n(85),x=n(425),_=n(22),w=n(423),S=n(53),M="[object Arguments]",A="[object Function]",O="[object Object]",P={};P[M]=P["[object Array]"]=P["[object ArrayBuffer]"]=P["[object DataView]"]=P["[object Boolean]"]=P["[object Date]"]=P["[object Float32Array]"]=P["[object Float64Array]"]=P["[object Int8Array]"]=P["[object Int16Array]"]=P["[object Int32Array]"]=P["[object Map]"]=P["[object Number]"]=P[O]=P["[object RegExp]"]=P["[object Set]"]=P["[object String]"]=P["[object Symbol]"]=P["[object Uint8Array]"]=P["[object Uint8ClampedArray]"]=P["[object Uint16Array]"]=P["[object Uint32Array]"]=!0,P["[object Error]"]=P[A]=P["[object WeakMap]"]=!1,t.exports=function t(e,n,E,C,j,k){var I,T=1&n,B=2&n,N=4&n;if(E&&(I=j?E(e,C,j,k):E(e)),void 0!==I)return I;if(!_(e))return e;var D=y(e);if(D){if(I=g(e),!T)return c(e,I);}else{var F=p(e),L=F==A||"[object GeneratorFunction]"==F;if(b(e))return s(e,T);if(F==O||F==M||L&&!j){if(I=B||L?{}:m(e),!T)return B?l(e,u(I,e)):f(e,a(I,e));}else{if(!P[F])return j?e:{};I=v(e,F,T);}}k||(k=new r());var R=k.get(e);if(R)return R;if(k.set(e,I),w(e))return e.forEach(function(r){I.add(t(r,n,E,r,e,k));}),I;if(x(e))return e.forEach(function(r,i){I.set(i,t(r,n,E,i,e,k));}),I;var G=N?B?d:h:B?keysIn:S,Y=D?void 0:G(e);return i(Y||e,function(r,i){Y&&(r=e[i=r]),o(I,i,t(r,n,E,i,e,k));}),I;};},function(t,e,n){var r=n(475);t.exports=function(t){return r(t,5);};},function(t,e,n){var r=n(110);t.exports=function(t){return t?(t=r(t))===1/0||t===-1/0?1.7976931348623157e308*(t<0?-1:1):t==t?t:0:0===t?t:0;};},function(t,e){t.exports=function(t,e,n){for(var r=n-1,i=t.length;++r<i;){if(t[r]===e)return r;}return-1;};},function(t,e){t.exports=function(t){return t!=t;};},function(t,e){t.exports=function(t,e,n,r){for(var i=t.length,o=n+(r?1:-1);r?o--:++o<i;){if(e(t[o],o,t))return o;}return-1;};},function(t,e,n){var r=n(172),i=n(171),o=Math.max;t.exports=function(t,e,n){var a=null==t?0:t.length;if(!a)return-1;var u=null==n?0:i(n);return u<0&&(u=o(a+u,0)),r(t,e,u);};},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t);};},function(t,e,n){var r=n(54),i=Object.prototype,o=i.hasOwnProperty,a=i.toString,u=r?r.toStringTag:void 0;t.exports=function(t){var e=o.call(t,u),n=t[u];try{t[u]=void 0;var r=!0;}catch(t){}var i=a.call(t);return r&&(e?t[u]=n:delete t[u]),i;};},function(t,e,n){var r=n(54),i=n(205),o=n(23),a=n(77),u=r?r.prototype:void 0,s=u?u.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(o(e))return i(e,t)+"";if(a(e))return s?s.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n;};},function(t,e){var n="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",r="\\ud83c[\\udffb-\\udfff]",i="[^\\ud800-\\udfff]",o="(?:\\ud83c[\\udde6-\\uddff]){2}",a="[\\ud800-\\udbff][\\udc00-\\udfff]",u="(?:"+n+"|"+r+")?",s="[\\ufe0e\\ufe0f]?"+u+"(?:\\u200d(?:"+[i,o,a].join("|")+")[\\ufe0e\\ufe0f]?"+u+")*",c="(?:"+[i+n+"?",n,o,a,"[\\ud800-\\udfff]"].join("|")+")",f=RegExp(r+"(?="+r+")|"+c+s,"g");t.exports=function(t){return t.match(f)||[];};},function(t,e){t.exports=function(t){return t.split("");};},function(t,e){t.exports=function(t,e,n){var r=-1,i=t.length;e<0&&(e=-e>i?0:i+e),(n=n>i?i:n)<0&&(n+=i),i=e>n?0:n-e>>>0,e>>>=0;for(var o=Array(i);++r<i;){o[r]=t[r+e];}return o;};},function(t,e,n){var r=n(487);t.exports=function(t,e,n){var i=t.length;return n=void 0===n?i:n,!e&&n>=i?t:r(t,e,n);};},function(t,e,n){var r=n(488),i=n(175),o=n(206),a=n(112);t.exports=function(t){return function(e){e=a(e);var n=i(e)?o(e):void 0,u=n?n[0]:e.charAt(0),s=n?r(n,1).join(""):e.slice(1);return u[t]()+s;};};},function(t,e,n){var r=n(489)("toLowerCase");t.exports=r;},function(t,e,n){var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e;};}(),i=n(179),a=n(30),u=n(68),s=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(void 0===e?"undefined":o(e))&&"function"!=typeof e?t:e;}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":o(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}(e,i),r(e,[{key:"getDefaultCfg",value:function value(){return{_components:[],_command:{zoomDelta:.1,queue:[],current:0,clipboard:[]}};}},{key:"_getComponentsBy",value:function value(t){return this.get("_components").filter(t);}},{key:"_bindCommands",value:function value(t){var e=this;a.each(t,function(t){var n=t.dataset,r=n.command;u[r]?a.addEventListener(t,"click",function(){e.getCurrentPage().focusGraphWrapper(),e.executeCommand(r,n);}):console.warn("请设置有效的命令！");});}},{key:"getCommands",value:function value(){return this.get("_command").queue;}},{key:"getCurrentCommand",value:function value(){var t=this.get("_command");return t.queue[t.current-1];}},{key:"executeCommand",value:function value(t,e){a.isString(t)?u.execute(t,this,e):u.execute("common",this,{method:t},e);}},{key:"commandEnable",value:function value(t){return u.enable(t,this);}},{key:"setCommandDOMenable",value:function value(){var t=this,e=this.getComponentsByType("toolbar"),n=this.getComponentsByType("contextmenu"),r=[];e.forEach(function(t){a.each(t.getCommandDoms(),function(t){r.push(t);});}),n.forEach(function(t){a.each(t.getCommandDoms(),function(t){r.push(t);});}),a.each(r,function(e){var n=e.dataset.command;u.enable(n,t)?e.classList.remove("disable"):e.classList.add("disable");});}},{key:"_onPageStatusChange",value:function value(){this.setCommandDOMenable();}},{key:"_beforeAddMinimap",value:function value(t){var e=this.getComponentsByType("page");0!==e.length&&e.forEach(function(e){t.bindPage(e);});}},{key:"_afterAddContextmenu",value:function value(){this.getCurrentPage()&&this.setCommandDOMenable();}},{key:"_afterAddPage",value:function value(t){var e=this,n=this.getComponentsByType("minimap");this.setCommandDOMenable(),n.forEach(function(e){e.bindPage(t);}),t.on("statuschange",function(t){e._onPageStatusChange(t);}),t.on("mousedown",function(){e.getComponentsByType("contextmenu").forEach(function(t){t.hide();});}),t.on("contextmenu",function(n){var r=e.getComponentsByType("contextmenu"),i=t.getGraph().getCanvas().get("el"),o=a.getBoundingClientRect(i),u={x:n.x,y:n.y},s=n.item;s&&!s.isSelected&&(t.clearSelected(),t.setSelected(n.item,!0)),e.set("contextmenuPoint",u),n.domEvent.preventDefault(),r.forEach(function(t){t.show(),t.contextmenuPoint=u,t.move(o.left+n.domX,o.top+n.domY);});}),t.on("statuschange",function(t){var n=e.getComponentsByType("contextmenu"),r=e.getComponentsByType("detailpannel");n.forEach(function(e){e.switch(t.status);}),r.forEach(function(e){e.switch(t.status);});}),this._bindShortcut(t);}},{key:"_beforeAddToolbar",value:function value(t){var e=t.getCommandDoms();this._bindCommands(e);}},{key:"_beforeAddContextmenu",value:function value(t){var e=t.getCommandDoms();t.bindEvent(),this._bindCommands(e);}},{key:"_beforeAddItempannel",value:function value(t){t.bindEvent();}},{key:"getComponentsByType",value:function value(t){return this._getComponentsBy(function(e){return e.type===t;});}},{key:"getCurrentPage",value:function value(){var t=this.getComponentsByType("page"),e=void 0;return t.every(function(t){return!t.isActived||(e=t,!1);}),e||(e=t[0]),e;}},{key:"getComponents",value:function value(){return this.get("_components");}},{key:"_shortcutEnable",value:function value(t,e){for(var n=t.shortcutCodes,r=a.getKeyboradKey(e),i=!1,o=0;o<n.length;o++){var u=n[o];if(a.isArray(u)){for(var s=u.length,c=!0,f=0;f<s-1;f++){if(!e[u[f]]){c=!1;break;}}u[s-1]!==r&&u[s-1]!==a.lowerFirst(r)||!c||(i=!0);}else u===r&&(i=!0);if(i)break;}return i;}},{key:"_bindShortcut",value:function value(t){var e=this,n=t.get("shortcut");t.getGraph().on("keydown",function(t){var r=e.getComponentsByType("contextmenu"),i=t.domEvent;r.forEach(function(t){t.hide();}),i.preventDefault();for(var o=u.list.filter(function(t){return t.shortcutCodes&&n[t.name];}),a=0;a<o.length;a++){var s=o[a];if(e._shortcutEnable(s,i))return e.executeCommand(s.name),!1;}});}},{key:"add",value:function value(t){var e=this.get("_components"),n=a.upperFirst(t.type);t.editor=this,this["_beforeAdd"+n]&&this["_beforeAdd"+n](t),e.push(t),this["_afterAdd"+n]&&this["_afterAdd"+n](t);}},{key:"destroy",value:function value(){this.get("_components").forEach(function(t){t.destroy();});}}]),e;}();t.exports=s;}]);});}).call(e,n(10)(t));},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n){Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}}return t;},i=n(1),o=n(45),a=function(t){return t&&t.__esModule?t:{default:t};}(o),u=a.default.get("versions"),s=function s(t){if(a.default.get("trackable")){var e=window,n=e.location,o=e.navigator,s=new Image(),c=(0,i.toQueryString)(r({pid:"ggeditor",code:"11",msg:"syslog",page:n.protocol+"//"+n.host+n.pathname,hash:n.hash,ua:o.userAgent,rel:Object.keys(u).map(function(t){return t+"@"+u[t];}).join(";")},t));s.src="http://gm.mmstat.com/fsp.1.1?"+c;}};e.default=function(t){return setTimeout(s.bind(void 0,t),1e3);};},function(t,e,n){"use strict";var r=n(52),i=n(91),o=i(function(t,e){return null==t?{}:r(t,e);});t.exports=o;},function(t,e,n){"use strict";function r(t,e){return i(t,e,function(e,n){return o(t,n);});}var i=n(53),o=n(87);t.exports=r;},function(t,e,n){"use strict";function r(t,e,n){for(var r=-1,u=e.length,s={};++r<u;){var c=e[r],f=i(t,c);n(f,c)&&o(s,a(c,t),f);}return s;}var i=n(54),o=n(86),a=n(11);t.exports=r;},function(t,e,n){"use strict";function r(t,e){e=i(e,t);for(var n=0,r=e.length;null!=t&&n<r;){t=t[o(e[n++])];}return n&&n==r?t:void 0;}var i=n(11),o=n(24);t.exports=r;},function(t,e,n){"use strict";function r(t,e){if(o(t))return!1;var n=void 0===t?"undefined":i(t);return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!a(t))||s.test(t)||!u.test(t)||null!=e&&t in Object(e);}var i="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(t){return typeof t==="undefined"?"undefined":_typeof(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t==="undefined"?"undefined":_typeof(t);},o=n(6),a=n(21),u=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,s=/^\w*$/;t.exports=r;},function(t,e,n){"use strict";var r,i="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(t){return typeof t==="undefined"?"undefined":_typeof(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t==="undefined"?"undefined":_typeof(t);};r=function(){return this;}();try{r=r||Function("return this")()||(0,eval)("this");}catch(t){"object"===("undefined"==typeof window?"undefined":i(window))&&(r=window);}t.exports=r;},function(t,e,n){"use strict";function r(t){var e=a.call(t,s),n=t[s];try{t[s]=void 0;var r=!0;}catch(t){}var i=u.call(t);return r&&(e?t[s]=n:delete t[s]),i;}var i=n(12),o=Object.prototype,a=o.hasOwnProperty,u=o.toString,s=i?i.toStringTag:void 0;t.exports=r;},function(t,e,n){"use strict";function r(t){return o.call(t);}var i=Object.prototype,o=i.toString;t.exports=r;},function(t,e,n){"use strict";var r=n(60),i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,a=r(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(i,function(t,n,r,i){e.push(r?i.replace(o,"$1"):n||t);}),e;});t.exports=a;},function(t,e,n){"use strict";function r(t){var e=i(t,function(t){return n.size===o&&n.clear(),t;}),n=e.cache;return e;}var i=n(61),o=500;t.exports=r;},function(t,e,n){"use strict";function r(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(o);var n=function n(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a;};return n.cache=new(r.Cache||i)(),n;}var i=n(29),o="Expected a function";r.Cache=i,t.exports=r;},function(t,e,n){"use strict";function r(){this.size=0,this.__data__={hash:new i(),map:new(a||o)(),string:new i()};}var i=n(63),o=n(14),a=n(30);t.exports=r;},function(t,e,n){"use strict";function r(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1]);}}var i=n(64),o=n(70),a=n(71),u=n(72),s=n(73);r.prototype.clear=i,r.prototype.delete=o,r.prototype.get=a,r.prototype.has=u,r.prototype.set=s,t.exports=r;},function(t,e,n){"use strict";function r(){this.__data__=i?i(null):{},this.size=0;}var i=n(13);t.exports=r;},function(t,e,n){"use strict";function r(t){return!(!a(t)||o(t))&&(i(t)?p:c).test(u(t));}var i=n(23),o=n(66),a=n(4),u=n(68),s=/[\\^$.*+?()[\]{}|]/g,c=/^\[object .+?Constructor\]$/,f=Function.prototype,l=Object.prototype,h=f.toString,d=l.hasOwnProperty,p=RegExp("^"+h.call(d).replace(s,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=r;},function(t,e,n){"use strict";function r(t){return!!o&&o in t;}var i=n(67),o=function(){var t=/[^.]+$/.exec(i&&i.keys&&i.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:"";}();t.exports=r;},function(t,e,n){"use strict";var r=n(7),i=r["__core-js_shared__"];t.exports=i;},function(t,e,n){"use strict";function r(t){if(null!=t){try{return o.call(t);}catch(t){}try{return t+"";}catch(t){}}return"";}var i=Function.prototype,o=i.toString;t.exports=r;},function(t,e,n){"use strict";function r(t,e){return null==t?void 0:t[e];}t.exports=r;},function(t,e,n){"use strict";function r(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e;}t.exports=r;},function(t,e,n){"use strict";function r(t){var e=this.__data__;if(i){var n=e[t];return n===o?void 0:n;}return u.call(e,t)?e[t]:void 0;}var i=n(13),o="__lodash_hash_undefined__",a=Object.prototype,u=a.hasOwnProperty;t.exports=r;},function(t,e,n){"use strict";function r(t){var e=this.__data__;return i?void 0!==e[t]:a.call(e,t);}var i=n(13),o=Object.prototype,a=o.hasOwnProperty;t.exports=r;},function(t,e,n){"use strict";function r(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=i&&void 0===e?o:e,this;}var i=n(13),o="__lodash_hash_undefined__";t.exports=r;},function(t,e,n){"use strict";function r(){this.__data__=[],this.size=0;}t.exports=r;},function(t,e,n){"use strict";function r(t){var e=this.__data__,n=i(e,t);return!(n<0)&&(n==e.length-1?e.pop():a.call(e,n,1),--this.size,!0);}var i=n(15),o=Array.prototype,a=o.splice;t.exports=r;},function(t,e,n){"use strict";function r(t){var e=this.__data__,n=i(e,t);return n<0?void 0:e[n][1];}var i=n(15);t.exports=r;},function(t,e,n){"use strict";function r(t){return i(this.__data__,t)>-1;}var i=n(15);t.exports=r;},function(t,e,n){"use strict";function r(t,e){var n=this.__data__,r=i(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this;}var i=n(15);t.exports=r;},function(t,e,n){"use strict";function r(t){var e=i(this,t).delete(t);return this.size-=e?1:0,e;}var i=n(17);t.exports=r;},function(t,e,n){"use strict";function r(t){var e=void 0===t?"undefined":i(t);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t;}var i="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(t){return typeof t==="undefined"?"undefined":_typeof(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t==="undefined"?"undefined":_typeof(t);};t.exports=r;},function(t,e,n){"use strict";function r(t){return i(this,t).get(t);}var i=n(17);t.exports=r;},function(t,e,n){"use strict";function r(t){return i(this,t).has(t);}var i=n(17);t.exports=r;},function(t,e,n){"use strict";function r(t,e){var n=i(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this;}var i=n(17);t.exports=r;},function(t,e,n){"use strict";function r(t){if("string"==typeof t)return t;if(a(t))return o(t,r)+"";if(u(t))return f?f.call(t):"";var e=t+"";return"0"==e&&1/t==-s?"-0":e;}var i=n(12),o=n(85),a=n(6),u=n(21),s=1/0,c=i?i.prototype:void 0,f=c?c.toString:void 0;t.exports=r;},function(t,e,n){"use strict";function r(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;){i[n]=e(t[n],n,t);}return i;}t.exports=r;},function(t,e,n){"use strict";function r(t,e,n,r){if(!u(t))return t;e=o(e,t);for(var c=-1,f=e.length,l=f-1,h=t;null!=h&&++c<f;){var d=s(e[c]),p=n;if(c!=l){var g=h[d];p=r?r(g,d,h):void 0,void 0===p&&(p=u(g)?g:a(e[c+1])?[]:{});}i(h,d,p),h=h[d];}return t;}var i=n(32),o=n(11),a=n(18),u=n(4),s=n(24);t.exports=r;},function(t,e,n){"use strict";function r(t,e){return null!=t&&o(t,e,i);}var i=n(88),o=n(89);t.exports=r;},function(t,e,n){"use strict";function r(t,e){return null!=t&&e in Object(t);}t.exports=r;},function(t,e,n){"use strict";function r(t,e,n){e=i(e,t);for(var r=-1,f=e.length,l=!1;++r<f;){var h=c(e[r]);if(!(l=null!=t&&n(t,h)))break;t=t[h];}return l||++r!=f?l:!!(f=null==t?0:t.length)&&s(f)&&u(h,f)&&(a(t)||o(t));}var i=n(11),o=n(19),a=n(6),u=n(18),s=n(26),c=n(24);t.exports=r;},function(t,e,n){"use strict";function r(t){return o(t)&&i(t)==a;}var i=n(9),o=n(8),a="[object Arguments]";t.exports=r;},function(t,e,n){"use strict";function r(t){return a(o(t,void 0,i),t+"");}var i=n(92),o=n(34),a=n(35);t.exports=r;},function(t,e,n){"use strict";function r(t){return(null==t?0:t.length)?i(t,1):[];}var i=n(93);t.exports=r;},function(t,e,n){"use strict";function r(t,e,n,a,u){var s=-1,c=t.length;for(n||(n=o),u||(u=[]);++s<c;){var f=t[s];e>0&&n(f)?e>1?r(f,e-1,n,a,u):i(u,f):a||(u[u.length]=f);}return u;}var i=n(94),o=n(95);t.exports=r;},function(t,e,n){"use strict";function r(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;){t[i+n]=e[n];}return t;}t.exports=r;},function(t,e,n){"use strict";function r(t){return a(t)||o(t)||!!(u&&t&&t[u]);}var i=n(12),o=n(19),a=n(6),u=i?i.isConcatSpreadable:void 0;t.exports=r;},function(t,e,n){"use strict";function r(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2]);}return t.apply(e,n);}t.exports=r;},function(t,e,n){"use strict";var r=n(98),i=n(33),o=n(36),a=i?function(t,e){return i(t,"toString",{configurable:!0,enumerable:!1,value:r(e),writable:!0});}:o;t.exports=a;},function(t,e,n){"use strict";function r(t){return function(){return t;};}t.exports=r;},function(t,e,n){"use strict";function r(t){var e=0,n=0;return function(){var r=a(),u=o-(r-n);if(n=r,u>0){if(++e>=i)return arguments[0];}else e=0;return t.apply(void 0,arguments);};}var i=800,o=16,a=Date.now;t.exports=r;},function(t,e,n){"use strict";var r=n(101),i=n(131),o=i(function(t,e,n){r(t,e,n);});t.exports=o;},function(t,e,n){"use strict";function r(t,e,n,l,h){t!==e&&a(e,function(a,c){if(s(a))h||(h=new i()),u(t,e,c,n,r,l,h);else{var d=l?l(f(t,c),a,c+"",t,e,h):void 0;void 0===d&&(d=a),o(t,c,d);}},c);}var i=n(102),o=n(37),a=n(108),u=n(110),s=n(4),c=n(43),f=n(42);t.exports=r;},function(t,e,n){"use strict";function r(t){var e=this.__data__=new i(t);this.size=e.size;}var i=n(14),o=n(103),a=n(104),u=n(105),s=n(106),c=n(107);r.prototype.clear=o,r.prototype.delete=a,r.prototype.get=u,r.prototype.has=s,r.prototype.set=c,t.exports=r;},function(t,e,n){"use strict";function r(){this.__data__=new i(),this.size=0;}var i=n(14);t.exports=r;},function(t,e,n){"use strict";function r(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n;}t.exports=r;},function(t,e,n){"use strict";function r(t){return this.__data__.get(t);}t.exports=r;},function(t,e,n){"use strict";function r(t){return this.__data__.has(t);}t.exports=r;},function(t,e,n){"use strict";function r(t,e){var n=this.__data__;if(n instanceof i){var r=n.__data__;if(!o||r.length<u-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new a(r);}return n.set(t,e),this.size=n.size,this;}var i=n(14),o=n(30),a=n(29),u=200;t.exports=r;},function(t,e,n){"use strict";var r=n(109),i=r();t.exports=i;},function(t,e,n){"use strict";function r(t){return function(e,n,r){for(var i=-1,o=Object(e),a=r(e),u=a.length;u--;){var s=a[t?u:++i];if(!1===n(o[s],s,o))break;}return e;};}t.exports=r;},function(t,e,n){"use strict";function r(t,e,n,r,b,x,_){var w=m(t,n),S=m(e,n),M=_.get(S);if(M)return void i(t,n,M);var A=x?x(w,S,n+"",t,e,_):void 0,O=void 0===A;if(O){var P=f(S),E=!P&&h(S),C=!P&&!E&&v(S);A=S,P||E||C?f(w)?A=w:l(w)?A=u(w):E?(O=!1,A=o(S,!0)):C?(O=!1,A=a(S,!0)):A=[]:g(S)||c(S)?(A=w,c(w)?A=y(w):p(w)&&!d(w)||(A=s(S))):O=!1;}O&&(_.set(S,A),b(A,S,r,x,_),_.delete(S)),i(t,n,A);}var i=n(37),o=n(111),a=n(112),u=n(115),s=n(116),c=n(19),f=n(6),l=n(119),h=n(40),d=n(23),p=n(4),g=n(121),v=n(41),m=n(42),y=n(125);t.exports=r;},function(t,e,n){"use strict";(function(t){function r(t,e){if(e)return t.slice();var n=t.length,r=f?f(n):new t.constructor(n);return t.copy(r),r;}var i="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(t){return typeof t==="undefined"?"undefined":_typeof(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t==="undefined"?"undefined":_typeof(t);},o=n(7),a="object"==i(e)&&e&&!e.nodeType&&e,u=a&&"object"==i(t)&&t&&!t.nodeType&&t,s=u&&u.exports===a,c=s?o.Buffer:void 0,f=c?c.allocUnsafe:void 0;t.exports=r;}).call(e,n(10)(t));},function(t,e,n){"use strict";function r(t,e){var n=e?i(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length);}var i=n(113);t.exports=r;},function(t,e,n){"use strict";function r(t){var e=new t.constructor(t.byteLength);return new i(e).set(new i(t)),e;}var i=n(114);t.exports=r;},function(t,e,n){"use strict";var r=n(7),i=r.Uint8Array;t.exports=i;},function(t,e,n){"use strict";function r(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;){e[n]=t[n];}return e;}t.exports=r;},function(t,e,n){"use strict";function r(t){return"function"!=typeof t.constructor||a(t)?{}:i(o(t));}var i=n(117),o=n(38),a=n(39);t.exports=r;},function(t,e,n){"use strict";var r=n(4),i=Object.create,o=function(){function t(){}return function(e){if(!r(e))return{};if(i)return i(e);t.prototype=e;var n=new t();return t.prototype=void 0,n;};}();t.exports=o;},function(t,e,n){"use strict";function r(t,e){return function(n){return t(e(n));};}t.exports=r;},function(t,e,n){"use strict";function r(t){return o(t)&&i(t);}var i=n(27),o=n(8);t.exports=r;},function(t,e,n){"use strict";function r(){return!1;}t.exports=r;},function(t,e,n){"use strict";function r(t){if(!a(t)||i(t)!=u)return!1;var e=o(t);if(null===e)return!0;var n=l.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&f.call(n)==h;}var i=n(9),o=n(38),a=n(8),u="[object Object]",s=Function.prototype,c=Object.prototype,f=s.toString,l=c.hasOwnProperty,h=f.call(Object);t.exports=r;},function(t,e,n){"use strict";function r(t){return a(t)&&o(t.length)&&!!u[i(t)];}var i=n(9),o=n(26),a=n(8),u={};u["[object Float32Array]"]=u["[object Float64Array]"]=u["[object Int8Array]"]=u["[object Int16Array]"]=u["[object Int32Array]"]=u["[object Uint8Array]"]=u["[object Uint8ClampedArray]"]=u["[object Uint16Array]"]=u["[object Uint32Array]"]=!0,u["[object Arguments]"]=u["[object Array]"]=u["[object ArrayBuffer]"]=u["[object Boolean]"]=u["[object DataView]"]=u["[object Date]"]=u["[object Error]"]=u["[object Function]"]=u["[object Map]"]=u["[object Number]"]=u["[object Object]"]=u["[object RegExp]"]=u["[object Set]"]=u["[object String]"]=u["[object WeakMap]"]=!1,t.exports=r;},function(t,e,n){"use strict";function r(t){return function(e){return t(e);};}t.exports=r;},function(t,e,n){"use strict";(function(t){var r="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(t){return typeof t==="undefined"?"undefined":_typeof(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t==="undefined"?"undefined":_typeof(t);},i=n(28),o="object"==r(e)&&e&&!e.nodeType&&e,a=o&&"object"==r(t)&&t&&!t.nodeType&&t,u=a&&a.exports===o,s=u&&i.process,c=function(){try{var t=a&&a.require&&a.require("util").types;return t||s&&s.binding&&s.binding("util");}catch(t){}}();t.exports=c;}).call(e,n(10)(t));},function(t,e,n){"use strict";function r(t){return i(t,o(t));}var i=n(126),o=n(43);t.exports=r;},function(t,e,n){"use strict";function r(t,e,n,r){var a=!n;n||(n={});for(var u=-1,s=e.length;++u<s;){var c=e[u],f=r?r(n[c],t[c],c,n,t):void 0;void 0===f&&(f=t[c]),a?o(n,c,f):i(n,c,f);}return n;}var i=n(32),o=n(25);t.exports=r;},function(t,e,n){"use strict";function r(t,e){var n=a(t),r=!n&&o(t),f=!n&&!r&&u(t),h=!n&&!r&&!f&&c(t),d=n||r||f||h,p=d?i(t.length,String):[],g=p.length;for(var v in t){!e&&!l.call(t,v)||d&&("length"==v||f&&("offset"==v||"parent"==v)||h&&("buffer"==v||"byteLength"==v||"byteOffset"==v)||s(v,g))||p.push(v);}return p;}var i=n(128),o=n(19),a=n(6),u=n(40),s=n(18),c=n(41),f=Object.prototype,l=f.hasOwnProperty;t.exports=r;},function(t,e,n){"use strict";function r(t,e){for(var n=-1,r=Array(t);++n<t;){r[n]=e(n);}return r;}t.exports=r;},function(t,e,n){"use strict";function r(t){if(!i(t))return a(t);var e=o(t),n=[];for(var r in t){("constructor"!=r||!e&&s.call(t,r))&&n.push(r);}return n;}var i=n(4),o=n(39),a=n(130),u=Object.prototype,s=u.hasOwnProperty;t.exports=r;},function(t,e,n){"use strict";function r(t){var e=[];if(null!=t)for(var n in Object(t)){e.push(n);}return e;}t.exports=r;},function(t,e,n){"use strict";function r(t){return i(function(e,n){var r=-1,i=n.length,a=i>1?n[i-1]:void 0,u=i>2?n[2]:void 0;for(a=t.length>3&&"function"==typeof a?(i--,a):void 0,u&&o(n[0],n[1],u)&&(a=i<3?void 0:a,i=1),e=Object(e);++r<i;){var s=n[r];s&&t(e,s,r,a);}return e;});}var i=n(132),o=n(133);t.exports=r;},function(t,e,n){"use strict";function r(t,e){return a(o(t,e,i),t+"");}var i=n(36),o=n(34),a=n(35);t.exports=r;},function(t,e,n){"use strict";function r(t,e,n){if(!s(n))return!1;var r=void 0===e?"undefined":i(e);return!!("number"==r?a(n)&&u(e,n.length):"string"==r&&e in n)&&o(n[e],t);}var i="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(t){return typeof t==="undefined"?"undefined":_typeof(t);}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t==="undefined"?"undefined":_typeof(t);},o=n(16),a=n(27),u=n(18),s=n(4);t.exports=r;},function(t,e,n){"use strict";var r=n(135),i=r("toUpperCase");t.exports=i;},function(t,e,n){"use strict";function r(t){return function(e){e=u(e);var n=o(e)?a(e):void 0,r=n?n[0]:e.charAt(0),s=n?i(n,1).join(""):e.slice(1);return r[t]()+s;};}var i=n(136),o=n(44),a=n(138),u=n(31);t.exports=r;},function(t,e,n){"use strict";function r(t,e,n){var r=t.length;return n=void 0===n?r:n,!e&&n>=r?t:i(t,e,n);}var i=n(137);t.exports=r;},function(t,e,n){"use strict";function r(t,e,n){var r=-1,i=t.length;e<0&&(e=-e>i?0:i+e),n=n>i?i:n,n<0&&(n+=i),i=e>n?0:n-e>>>0,e>>>=0;for(var o=Array(i);++r<i;){o[r]=t[r+e];}return o;}t.exports=r;},function(t,e,n){"use strict";function r(t){return o(t)?a(t):i(t);}var i=n(139),o=n(44),a=n(140);t.exports=r;},function(t,e,n){"use strict";function r(t){return t.split("");}t.exports=r;},function(t,e,n){"use strict";function r(t){return t.match(h)||[];}var i="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",o="\\ud83c[\\udffb-\\udfff]",a="(?:\\ud83c[\\udde6-\\uddff]){2}",u="[\\ud800-\\udbff][\\udc00-\\udfff]",s="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",c="(?:\\u200d(?:"+["[^\\ud800-\\udfff]",a,u].join("|")+")[\\ufe0e\\ufe0f]?"+s+")*",f="[\\ufe0e\\ufe0f]?"+s+c,l="(?:"+["[^\\ud800-\\udfff]"+i+"?",i,a,u,"[\\ud800-\\udfff]"].join("|")+")",h=RegExp(o+"(?="+o+")|"+l+f,"g");t.exports=r;},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t};}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(typeof e==="undefined"?"undefined":_typeof(e))&&"function"!=typeof e?t:e;}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(typeof e==="undefined"?"undefined":_typeof(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e;};}(),s=function t(e,n,r){null===e&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,n);if(void 0===i){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,n,r);}if("value"in i)return i.value;var a=i.get;if(void 0!==a)return a.call(r);},c=n(5),f=r(c),l=n(3),h=n(46),d=r(h),p=function(t){function e(){return i(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));}return a(e,t),u(e,[{key:"initPage",value:function value(){var t=this.context.editor;t.emit(l.EVENT_BEFORE_ADD_PAGE,{className:l.MIND_CLASS_NAME}),this.page=new f.default.Mind(this.config),t.add(this.page),t.emit(l.EVENT_AFTER_ADD_PAGE,{page:this.page});}},{key:"bindEvent",value:function value(){s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"bindEvent",this).call(this),this.bindKeyUpEditLabel();}},{key:"bindKeyUpEditLabel",value:function value(){var t=this,e=this.page.get("labelTextArea");e.on("keyup",function(n){n.stopPropagation();var r=e.focusItem,i=e.textContent;t.page.emit("keyUpEditLabel",{item:r,text:i});});}},{key:"pageId",get:function get(){var t=this.context.editor;return l.MIND_CONTAINER+"_"+t.id;}}]),e;}(d.default);e.default=p;},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t};}function i(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++){n[e]=t[e];}return n;}return Array.from(t);}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(typeof e==="undefined"?"undefined":_typeof(e))&&"function"!=typeof e?t:e;}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(typeof e==="undefined"?"undefined":_typeof(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}Object.defineProperty(e,"__esModule",{value:!0}),e.RegisterBehaviour=e.RegisterCommand=e.RegisterGuide=e.RegisterGroup=e.RegisterEdge=e.RegisterNode=void 0;var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e;};}(),c=n(5),f=r(c),l=n(1),h=n(2),d=r(h),p=function(t){function e(t,n,r){o(this,e);var i=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.type=r,i.bindEvent({context:n}),i;}return u(e,t),s(e,[{key:"bindEvent",value:function value(t){var e=this,n=t.context,r=this.type;(0,n.onBeforeAddPage)(function(t){var n,o=t.className,a=f.default[o],u=["name","config","extend"];"command"===r&&(a=f.default),"behaviour"===r&&(u=["name","behaviour","dependences"]);var s=u.map(function(t){return e.props[t];});(n=a)["register"+(0,l.upperFirst)(r)].apply(n,i(s));});}}]),e;}(d.default);p.create=function(t){return function(e){function n(e,r){return o(this,n),a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e,r,t));}return u(n,e),n;}(p);};e.RegisterNode=p.create("node"),e.RegisterEdge=p.create("edge"),e.RegisterGroup=p.create("group"),e.RegisterGuide=p.create("guide"),e.RegisterCommand=p.create("command"),e.RegisterBehaviour=p.create("behaviour");e.default=p;},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t};}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(typeof e==="undefined"?"undefined":_typeof(e))&&"function"!=typeof e?t:e;}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(typeof e==="undefined"?"undefined":_typeof(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e;};}(),s=n(0),c=r(s),f=n(2),l=r(f),h=function(t){function e(){return i(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));}return a(e,t),u(e,[{key:"render",value:function value(){var t=this.props,e=t.name,n=t.children;return c.default.createElement("div",{className:"command","data-command":e},n);}}]),e;}(l.default);e.default=h;},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t};}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(typeof e==="undefined"?"undefined":_typeof(e))&&"function"!=typeof e?t:e;}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(typeof e==="undefined"?"undefined":_typeof(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}Object.defineProperty(e,"__esModule",{value:!0});var u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n){Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}}return t;},s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e;};}(),c=n(0),f=r(c),l=n(5),h=r(l),d=n(1),p=n(3),g=n(2),v=r(g),m=function(t){function e(){return i(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));}return a(e,t),s(e,[{key:"componentDidMount",value:function value(){var t=this.context.editor,e=this.props,n=e.container,r=void 0===n?this.containerId:n,i=e.width,o=e.height,a=e.viewportWindowStyle,u=e.viewportBackStyle,s=document.getElementById(r),c=s.clientWidth,f=s.clientHeight;t.add(new h.default.Minimap({container:r,width:i||c,height:o||f,viewportWindowStyle:a,viewportBackStyle:u}));}},{key:"render",value:function value(){return this.props.container?null:f.default.createElement("div",u({id:this.containerId},(0,d.pick)(this.props,["style","className"])));}},{key:"containerId",get:function get(){var t=this.context.editor;return p.MINIMAP_CONTAINER+"_"+t.id;}}]),e;}(v.default);e.default=m;},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t};}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(typeof e==="undefined"?"undefined":_typeof(e))&&"function"!=typeof e?t:e;}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(typeof e==="undefined"?"undefined":_typeof(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}Object.defineProperty(e,"__esModule",{value:!0}),e.CanvasMenu=e.MultiMenu=e.GroupMenu=e.EdgeMenu=e.NodeMenu=void 0;var u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n){Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}}return t;},s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e;};}(),c=n(0),f=r(c),l=n(1),h=n(5),d=r(h),p=n(3),g=n(2),v=r(g),m=n(146),y=r(m),b=function(t){function e(){var t,n,r,a;i(this,e);for(var u=arguments.length,s=Array(u),c=0;c<u;c++){s[c]=arguments[c];}return n=r=o(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(s))),r.contextMenu=null,a=n,o(r,a);}return a(e,t),s(e,[{key:"componentDidMount",value:function value(){var t=this.context.editor;this.contextMenu=new d.default.Contextmenu({container:this.containerId}),t.add(this.contextMenu);}},{key:"render",value:function value(){var t=this.props.children;return f.default.createElement("div",u({id:this.containerId},(0,l.pick)(this.props,["style","className"])),t);}},{key:"containerId",get:function get(){var t=this.context.editor;return p.CONTEXT_MENU_CONTAINER+"_"+t.id;}}]),e;}(v.default);e.NodeMenu=y.default.create("node"),e.EdgeMenu=y.default.create("edge"),e.GroupMenu=y.default.create("group"),e.MultiMenu=y.default.create("multi"),e.CanvasMenu=y.default.create("canvas");e.default=b;},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t};}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(typeof e==="undefined"?"undefined":_typeof(e))&&"function"!=typeof e?t:e;}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(typeof e==="undefined"?"undefined":_typeof(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e;};}(),s=n(0),c=r(s),f=n(2),l=r(f),h=function(t){function e(t,n){i(this,e);var r=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.type=n,r;}return a(e,t),u(e,[{key:"render",value:function value(){var t=this.props.children,e=this.type;return c.default.createElement("div",{className:"menu","data-status":e+"-selected"},t);}}]),e;}(l.default);h.create=function(t){return function(e){function n(e){return i(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e,t));}return a(n,e),n;}(h);},e.default=h;},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t};}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(typeof e==="undefined"?"undefined":_typeof(e))&&"function"!=typeof e?t:e;}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(typeof e==="undefined"?"undefined":_typeof(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}Object.defineProperty(e,"__esModule",{value:!0});var u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n){Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}}return t;},s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e;};}(),c=n(0),f=r(c),l=n(5),h=r(l),d=n(1),p=n(3),g=n(2),v=r(g),m=function(t){function e(){var t,n,r,a;i(this,e);for(var u=arguments.length,s=Array(u),c=0;c<u;c++){s[c]=arguments[c];}return n=r=o(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(s))),r.toolbar=null,a=n,o(r,a);}return a(e,t),s(e,[{key:"componentDidMount",value:function value(){var t=this.context.editor;this.toolbar=new h.default.Toolbar({container:this.containerId}),t.add(this.toolbar);}},{key:"render",value:function value(){var t=this.props.children;return f.default.createElement("div",u({id:this.containerId},(0,d.pick)(this.props,["style","className"])),t);}},{key:"containerId",get:function get(){var t=this.context.editor;return p.TOOLBAR_CONTAINER+"_"+t.id;}}]),e;}(v.default);e.default=m;},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t};}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(typeof e==="undefined"?"undefined":_typeof(e))&&"function"!=typeof e?t:e;}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(typeof e==="undefined"?"undefined":_typeof(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}Object.defineProperty(e,"__esModule",{value:!0}),e.Item=void 0;var u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n){Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}}return t;},s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e;};}(),c=n(0),f=r(c),l=n(1),h=n(2),d=r(h),p=n(149),g=r(p),v=function(t){function e(t,n){i(this,e);var r=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.page=null,r.handleMouseUp=function(){r.page.cancelAdd();},r.bindEvent({context:n}),r;}return a(e,t),s(e,[{key:"bindEvent",value:function value(t){var e=this;(0,t.context.onAfterAddPage)(function(t){var n=t.page;e.page=n,document.addEventListener("mouseup",e.handleMouseUp);});}},{key:"componentWillUnmount",value:function value(){document.removeEventListener("mouseup",this.handleMouseUp);}},{key:"render",value:function value(){var t=this.props.children;return f.default.createElement("div",u({id:this.containerId},(0,l.pick)(this.props,["style","className"])),t);}}]),e;}(d.default);e.Item=g.default,e.default=v;},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t};}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(typeof e==="undefined"?"undefined":_typeof(e))&&"function"!=typeof e?t:e;}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(typeof e==="undefined"?"undefined":_typeof(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}Object.defineProperty(e,"__esModule",{value:!0});var u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n){Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}}return t;},s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e;};}(),c=n(0),f=r(c),l=n(2),h=r(l),d=function(t){function e(t,n){i(this,e);var r=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.handleMouseDown=function(){var t=r.props,e=t.type,n=t.size,i=t.shape,o=t.model;r.page&&r.page.beginAdd(e,u({type:e,size:n,shape:i},o));},r.bindEvent({context:n}),r;}return a(e,t),s(e,[{key:"bindEvent",value:function value(t){var e=this;(0,t.context.onAfterAddPage)(function(t){var n=t.page;e.page=n;});}},{key:"render",value:function value(){var t=this.props,e=t.src,n=t.shape,r=t.children;return f.default.createElement("div",{style:{cursor:"pointer"},onMouseDown:this.handleMouseDown},e?f.default.createElement("img",{src:e,alt:n,draggable:!1}):r);}}]),e;}(h.default);e.default=d;},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t};}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(typeof e==="undefined"?"undefined":_typeof(e))&&"function"!=typeof e?t:e;}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(typeof e==="undefined"?"undefined":_typeof(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}Object.defineProperty(e,"__esModule",{value:!0}),e.CanvasPanel=e.MultiPanel=e.GroupPanel=e.EdgePanel=e.NodePanel=void 0;var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e;};}(),s=n(0),c=r(s),f=n(1),l=n(3),h=n(2),d=r(h),p=n(151),g=r(p),v=function(t){function e(t,n){i(this,e);var r=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.state={status:""},r.bindEvent({context:n}),r;}return a(e,t),u(e,[{key:"bindEvent",value:function value(t){var e=this;(0,t.context.onAfterAddPage)(function(t){var n=t.page;e.setState({status:l.STATUS_CANVAS_SELECTED}),n.on("statuschange",function(t){var n=t.status;e.setState({status:n});});});}},{key:"render",value:function value(){var t=this.props.children,e=this.state.status;return e?c.default.createElement("div",(0,f.pick)(this.props,["style","className"]),c.default.Children.toArray(t).map(function(t){return c.default.cloneElement(t,{status:e});})):null;}}]),e;}(d.default);e.NodePanel=g.default.create("node"),e.EdgePanel=g.default.create("edge"),e.GroupPanel=g.default.create("group"),e.MultiPanel=g.default.create("multi"),e.CanvasPanel=g.default.create("canvas");e.default=v;},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t};}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(typeof e==="undefined"?"undefined":_typeof(e))&&"function"!=typeof e?t:e;}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(typeof e==="undefined"?"undefined":_typeof(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e;};}(),s=n(0),c=r(s),f=n(1),l=n(2),h=r(l),d=function(t){function e(t,n){i(this,e);var r=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.type=n,r;}return a(e,t),u(e,[{key:"render",value:function value(){var t=this.props,e=t.status,n=t.children;return this.type+"-selected"!==e?null:c.default.createElement("div",(0,f.pick)(this.props,["style","className"]),n);}}]),e;}(h.default);d.create=function(t){return function(e){function n(e){return i(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e,t));}return a(n,e),n;}(d);},e.default=d;},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t};}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(typeof e==="undefined"?"undefined":_typeof(e))&&"function"!=typeof e?t:e;}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(typeof e==="undefined"?"undefined":_typeof(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}Object.defineProperty(e,"__esModule",{value:!0});var u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n){Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);}}return t;},s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e;};}();e.default=function(t){var e,n;return n=e=function(e){function n(){return i(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments));}return a(n,e),s(n,[{key:"render",value:function value(){return f.default.createElement(t,u({propsAPI:this.context.propsAPI},this.props));}}]),n;}(f.default.Component),e.contextTypes={propsAPI:h.default.object},n;};var c=n(0),f=r(c),l=n(20),h=r(l);},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t};}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=(typeof e==="undefined"?"undefined":_typeof(e))&&"function"!=typeof e?t:e;}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(typeof e==="undefined"?"undefined":_typeof(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e;};}(),s=n(0),c=r(s),f=n(20),l=r(f),h=n(5),d=r(h),p=n(3),g=n(1),v=n(154),m=r(v),y=n(45),b=r(y),x=function(t){function e(t){i(this,e);var n=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.editor=null,n.addListener=function(t,e,n){"function"==typeof n&&t.on(e,n);},n.handleBeforeAddPage=function(t){n.editor.on(p.EVENT_BEFORE_ADD_PAGE,t);},n.handleAfterAddPage=function(t){var e=n.currentPage;if(e)return void t({page:e});n.editor.on(p.EVENT_AFTER_ADD_PAGE,t);},n.init(),n.bindEvent(),n;}return a(e,t),u(e,[{key:"currentPage",get:function get(){return this.editor.getCurrentPage();}}],[{key:"setTrackable",value:function value(t){b.default.set("trackable",Boolean(t));}}]),u(e,[{key:"getChildContext",value:function value(){return{editor:this.editor,propsAPI:this.propsAPI,onBeforeAddPage:this.handleBeforeAddPage,onAfterAddPage:this.handleAfterAddPage};}},{key:"init",value:function value(){this.editor=new d.default(),this.propsAPI=new m.default(this.editor);}},{key:"bindEvent",value:function value(){var t=this;p.EDITOR_EVENTS.forEach(function(e){t.addListener(t.editor,[e],t.props[p.EDITOR_REACT_EVENTS[e]]);});}},{key:"componentWillUnmount",value:function value(){this.editor.destroy();}},{key:"render",value:function value(){var t=this.props.children;return c.default.createElement("div",(0,g.pick)(this.props,["style","className"]),t);}}]),e;}(c.default.Component);x.childContextTypes={editor:l.default.object,propsAPI:l.default.object,onBeforeAddPage:l.default.func,onAfterAddPage:l.default.func},e.default=x;},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e;};}(),o=function(){function t(e){var n=this;r(this,t),this.editor=null,this.editor=e,["executeCommand"].forEach(function(t){n[t]=function(){var e;return(e=n.editor)[t].apply(e,arguments);};}),["read","save","add","find","update","remove","getSelected"].forEach(function(t){n[t]=function(){var e;return(e=n.currentPage)[t].apply(e,arguments);};});}return i(t,[{key:"currentPage",get:function get(){return this.editor.getCurrentPage();}}]),t;}();e.default=o;}]);});//# sourceMappingURL=bundle.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../_webpack@4.18.0@webpack/buildin/module.js */ "./node_modules/_webpack@4.18.0@webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/_object-assign@4.1.1@object-assign/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/_object-assign@4.1.1@object-assign/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/***/ }),

/***/ "./node_modules/_prop-types@15.6.2@prop-types/checkPropTypes.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_prop-types@15.6.2@prop-types/checkPropTypes.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var printWarning = function printWarning() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/_prop-types@15.6.2@prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};

  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + (typeof error === 'undefined' ? 'undefined' : _typeof(error)) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/***/ }),

/***/ "./node_modules/_prop-types@15.6.2@prop-types/factoryWithTypeCheckers.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_prop-types@15.6.2@prop-types/factoryWithTypeCheckers.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var assign = __webpack_require__(/*! object-assign */ "./node_modules/_object-assign@4.1.1@object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/_prop-types@15.6.2@prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/_prop-types@15.6.2@prop-types/checkPropTypes.js");

var printWarning = function printWarning() {};

if (true) {
  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (!manualPropTypeCallCache[cacheKey] &&
          // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ }),

/***/ "./node_modules/_prop-types@15.6.2@prop-types/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/_prop-types@15.6.2@prop-types/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

  var isValidElement = function isValidElement(object) {
    return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/_prop-types@15.6.2@prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {}

/***/ }),

/***/ "./node_modules/_prop-types@15.6.2@prop-types/lib/ReactPropTypesSecret.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_prop-types@15.6.2@prop-types/lib/ReactPropTypesSecret.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "./node_modules/_style-loader@0.23.0@style-loader/lib/addStyles.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_style-loader@0.23.0@style-loader/lib/addStyles.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/_style-loader@0.23.0@style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/_style-loader@0.23.0@style-loader/lib/urls.js":
/*!********************************************************************!*\
  !*** ./node_modules/_style-loader@0.23.0@style-loader/lib/urls.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),

/***/ "./node_modules/_webpack@4.18.0@webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),

/***/ "./src/components/EdgeDetail/index.js":
/*!********************************************!*\
  !*** ./src/components/EdgeDetail/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(/*! antd */ "antd");

var _ggEditor = __webpack_require__(/*! gg-editor */ "./node_modules/_gg-editor@1.2.1@gg-editor/dist/bundle.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = _antd.Form.Item;
var Option = _antd.Select.Option;


var inlineFormItemLayout = {
  labelCol: {
    sm: { span: 6 }
  },
  wrapperCol: {
    sm: { span: 18 }
  }
};

var EdgeDetail = function (_React$Component) {
  _inherits(EdgeDetail, _React$Component);

  function EdgeDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EdgeDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EdgeDetail.__proto__ || Object.getPrototypeOf(EdgeDetail)).call.apply(_ref, [this].concat(args))), _this), _this.handleSubmit = function (e) {
      if (e && typeof e !== 'string') {
        e.preventDefault();
      }
      var _this$props = _this.props,
          form = _this$props.form,
          propsAPI = _this$props.propsAPI;
      var getSelected = propsAPI.getSelected,
          executeCommand = propsAPI.executeCommand,
          update = propsAPI.update;


      setTimeout(function () {
        form.validateFieldsAndScroll(function (err, values) {
          if (err) {
            return;
          }

          var item = getSelected()[0];
          if (!item) {
            return;
          }

          executeCommand(function () {
            update(item, _extends({}, values));
          });
        });
      }, 0);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EdgeDetail, [{
    key: 'renderShapeSelect',
    value: function renderShapeSelect() {
      return _react2.default.createElement(
        _antd.Select,
        { onChange: this.handleSubmit },
        _react2.default.createElement(
          Option,
          { value: 'flow-smooth' },
          '\u56FE\u66F2\u7EBF'
        ),
        _react2.default.createElement(
          Option,
          { value: 'flow-polyline' },
          '\u56FE\u6298\u7EBF'
        ),
        _react2.default.createElement(
          Option,
          { value: 'flow-polyline-round' },
          '\u5706\u89D2\u6298\u7EBF'
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          form = _props.form,
          propsAPI = _props.propsAPI;
      var getFieldDecorator = form.getFieldDecorator;
      var getSelected = propsAPI.getSelected;


      var item = getSelected()[0];

      if (!item) {
        return null;
      }

      var _item$getModel = item.getModel(),
          _item$getModel$label = _item$getModel.label,
          label = _item$getModel$label === undefined ? '' : _item$getModel$label,
          _item$getModel$shape = _item$getModel.shape,
          shape = _item$getModel$shape === undefined ? 'flow-smooth' : _item$getModel$shape;

      return _react2.default.createElement(
        _antd.Card,
        { type: 'inner', title: '\u8FB9\u7EBF\u5C5E\u6027', bordered: false },
        _react2.default.createElement(
          _antd.Form,
          { onSubmit: this.handleSubmit },
          _react2.default.createElement(
            Item,
            _extends({
              label: '\u6807\u7B7E'
            }, inlineFormItemLayout),
            getFieldDecorator('label', {
              initialValue: label
            })(_react2.default.createElement(_antd.Input, { onBlur: this.handleSubmit }))
          ),
          _react2.default.createElement(
            Item,
            _extends({
              label: '\u56FE\u5F62'
            }, inlineFormItemLayout),
            getFieldDecorator('shape', {
              initialValue: shape
            })(this.renderShapeSelect())
          )
        )
      );
    }
  }]);

  return EdgeDetail;
}(_react2.default.Component);

exports.default = _antd.Form.create()((0, _ggEditor.withPropsAPI)(EdgeDetail));

/***/ }),

/***/ "./src/components/EditorContextMenu/FlowContextMenu.js":
/*!*************************************************************!*\
  !*** ./src/components/EditorContextMenu/FlowContextMenu.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ggEditor = __webpack_require__(/*! gg-editor */ "./node_modules/_gg-editor@1.2.1@gg-editor/dist/bundle.js");

var _index = __webpack_require__(/*! ./index.scss */ "./src/components/EditorContextMenu/index.scss");

var _index2 = _interopRequireDefault(_index);

var _iconfont = __webpack_require__(/*! ../../theme/iconfont.scss */ "./src/theme/iconfont.scss");

var _iconfont2 = _interopRequireDefault(_iconfont);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlowContextMenu = function (_React$Component) {
  _inherits(FlowContextMenu, _React$Component);

  function FlowContextMenu() {
    _classCallCheck(this, FlowContextMenu);

    return _possibleConstructorReturn(this, (FlowContextMenu.__proto__ || Object.getPrototypeOf(FlowContextMenu)).apply(this, arguments));
  }

  _createClass(FlowContextMenu, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _ggEditor.ContextMenu,
        { className: _index2.default.contextMenu },
        _react2.default.createElement(
          _ggEditor.NodeMenu,
          null,
          _react2.default.createElement(
            _ggEditor.Command,
            { name: 'copy' },
            _react2.default.createElement(
              'div',
              { className: _index2.default.item },
              _react2.default.createElement('i', { className: _iconfont2.default.iconfont + ' ' + _iconfont2.default.iconCopyO }),
              _react2.default.createElement(
                'span',
                null,
                '\u590D\u5236'
              )
            )
          ),
          _react2.default.createElement(
            _ggEditor.Command,
            { name: 'delete' },
            _react2.default.createElement(
              'div',
              { className: _index2.default.item },
              _react2.default.createElement('i', { className: _iconfont2.default.iconfont + ' ' + _iconfont2.default.iconDeleteO }),
              _react2.default.createElement(
                'span',
                null,
                '\u5220\u9664'
              )
            )
          )
        ),
        _react2.default.createElement(
          _ggEditor.EdgeMenu,
          null,
          _react2.default.createElement(
            _ggEditor.Command,
            { name: 'delete' },
            _react2.default.createElement(
              'div',
              { className: _index2.default.item },
              _react2.default.createElement('i', { className: _iconfont2.default.iconfont + ' ' + _iconfont2.default.iconDeleteO }),
              _react2.default.createElement(
                'span',
                null,
                '\u5220\u9664'
              )
            )
          )
        ),
        _react2.default.createElement(
          _ggEditor.GroupMenu,
          null,
          _react2.default.createElement(
            _ggEditor.Command,
            { name: 'copy' },
            _react2.default.createElement(
              'div',
              { className: _index2.default.item },
              _react2.default.createElement('i', { className: _iconfont2.default.iconfont + ' ' + _iconfont2.default.iconCopyO }),
              _react2.default.createElement(
                'span',
                null,
                '\u590D\u5236'
              )
            )
          ),
          _react2.default.createElement(
            _ggEditor.Command,
            { name: 'delete' },
            _react2.default.createElement(
              'div',
              { className: _index2.default.item },
              _react2.default.createElement('i', { className: _iconfont2.default.iconfont + ' ' + _iconfont2.default.iconDeleteO }),
              _react2.default.createElement(
                'span',
                null,
                '\u5220\u9664'
              )
            )
          ),
          _react2.default.createElement(
            _ggEditor.Command,
            { name: 'unGroup' },
            _react2.default.createElement(
              'div',
              { className: _index2.default.item },
              _react2.default.createElement('i', { className: _iconfont2.default.iconfont + ' ' + _iconfont2.default.iconUngroup }),
              _react2.default.createElement(
                'span',
                null,
                '\u89E3\u7EC4'
              )
            )
          )
        ),
        _react2.default.createElement(
          _ggEditor.MultiMenu,
          null,
          _react2.default.createElement(
            _ggEditor.Command,
            { name: 'copy' },
            _react2.default.createElement(
              'div',
              { className: _index2.default.item },
              _react2.default.createElement('i', { className: _iconfont2.default.iconfont + ' ' + _iconfont2.default.iconCopyO }),
              _react2.default.createElement(
                'span',
                null,
                '\u590D\u5236'
              )
            )
          ),
          _react2.default.createElement(
            _ggEditor.Command,
            { name: 'paste' },
            _react2.default.createElement(
              'div',
              { className: _index2.default.item },
              _react2.default.createElement('i', { className: _iconfont2.default.iconfont + ' ' + _iconfont2.default.iconPasterO }),
              _react2.default.createElement(
                'span',
                null,
                '\u7C98\u8D34'
              )
            )
          ),
          _react2.default.createElement(
            _ggEditor.Command,
            { name: 'addGroup' },
            _react2.default.createElement(
              'div',
              { className: _index2.default.item },
              _react2.default.createElement('i', { className: _iconfont2.default.iconfont + ' ' + _iconfont2.default.iconGroup }),
              _react2.default.createElement(
                'span',
                null,
                '\u6210\u7EC4'
              )
            )
          ),
          _react2.default.createElement(
            _ggEditor.Command,
            { name: 'delete' },
            _react2.default.createElement(
              'div',
              { className: _index2.default.item },
              _react2.default.createElement('i', { className: _iconfont2.default.iconfont + ' ' + _iconfont2.default.iconDeleteO }),
              _react2.default.createElement(
                'span',
                null,
                '\u5220\u9664'
              )
            )
          )
        ),
        _react2.default.createElement(
          _ggEditor.CanvasMenu,
          null,
          _react2.default.createElement(
            _ggEditor.Command,
            { name: 'undo' },
            _react2.default.createElement(
              'div',
              { className: _index2.default.item },
              _react2.default.createElement('i', { className: _iconfont2.default.iconfont + ' ' + _iconfont2.default.iconUndo }),
              _react2.default.createElement(
                'span',
                null,
                '\u64A4\u9500'
              )
            )
          ),
          _react2.default.createElement(
            _ggEditor.Command,
            { name: 'redo' },
            _react2.default.createElement(
              'div',
              { className: _index2.default.item },
              _react2.default.createElement('i', { className: _iconfont2.default.iconfont + ' ' + _iconfont2.default.iconRedo }),
              _react2.default.createElement(
                'span',
                null,
                '\u91CD\u505A'
              )
            )
          ),
          _react2.default.createElement(
            _ggEditor.Command,
            { name: 'pasteHere' },
            _react2.default.createElement(
              'div',
              { className: _index2.default.item },
              _react2.default.createElement('i', { className: _iconfont2.default.iconfont + ' ' + _iconfont2.default.iconPasterO }),
              _react2.default.createElement(
                'span',
                null,
                '\u7C98\u8D34'
              )
            )
          )
        )
      );
    }
  }]);

  return FlowContextMenu;
}(_react2.default.Component);

exports.default = FlowContextMenu;

/***/ }),

/***/ "./src/components/EditorContextMenu/MindContextMenu.js":
/*!*************************************************************!*\
  !*** ./src/components/EditorContextMenu/MindContextMenu.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _ggEditor = __webpack_require__(/*! gg-editor */ "./node_modules/_gg-editor@1.2.1@gg-editor/dist/bundle.js");

var _index = __webpack_require__(/*! ./index.scss */ "./src/components/EditorContextMenu/index.scss");

var _index2 = _interopRequireDefault(_index);

var _iconfont = __webpack_require__(/*! ../../theme/iconfont.scss */ "./src/theme/iconfont.scss");

var _iconfont2 = _interopRequireDefault(_iconfont);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MindContextMenu = function (_React$Component) {
  _inherits(MindContextMenu, _React$Component);

  function MindContextMenu() {
    _classCallCheck(this, MindContextMenu);

    return _possibleConstructorReturn(this, (MindContextMenu.__proto__ || Object.getPrototypeOf(MindContextMenu)).apply(this, arguments));
  }

  _createClass(MindContextMenu, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _ggEditor.ContextMenu,
        { className: _index2.default.contextMenu },
        _react2.default.createElement(
          _ggEditor.NodeMenu,
          null,
          _react2.default.createElement(
            _ggEditor.Command,
            { name: 'append' },
            _react2.default.createElement(
              'div',
              { className: _index2.default.item },
              _react2.default.createElement('i', { className: _iconfont2.default.biIcon + ' ' + _iconfont2.default.iconInsertSibling }),
              _react2.default.createElement(
                'span',
                null,
                '\u63D2\u5165\u540C\u7EA7'
              )
            )
          ),
          _react2.default.createElement(
            _ggEditor.Command,
            { name: 'appendChild' },
            _react2.default.createElement(
              'div',
              { className: _index2.default.item },
              _react2.default.createElement('i', { className: _iconfont2.default.biIcon + ' ' + _iconfont2.default.iconInsertChild }),
              _react2.default.createElement(
                'span',
                null,
                '\u63D2\u5165\u5B50\u7EA7'
              )
            )
          ),
          _react2.default.createElement(
            _ggEditor.Command,
            { name: 'collapse' },
            _react2.default.createElement(
              'div',
              { className: _index2.default.item },
              _react2.default.createElement('i', { className: _iconfont2.default.biIcon + ' ' + _iconfont2.default.iconCollapseSubtree }),
              _react2.default.createElement(
                'span',
                null,
                '\u6298\u53E0'
              )
            )
          ),
          _react2.default.createElement(
            _ggEditor.Command,
            { name: 'expand' },
            _react2.default.createElement(
              'div',
              { className: _index2.default.item },
              _react2.default.createElement('i', { className: _iconfont2.default.biIcon + ' ' + _iconfont2.default.iconExpandSubtree }),
              _react2.default.createElement(
                'span',
                null,
                '\u5C55\u5F00'
              )
            )
          ),
          _react2.default.createElement(
            _ggEditor.Command,
            { name: 'delete' },
            _react2.default.createElement(
              'div',
              { className: _index2.default.item },
              _react2.default.createElement('i', { className: _iconfont2.default.iconfont + ' ' + _iconfont2.default.iconDeleteO }),
              _react2.default.createElement(
                'span',
                null,
                '\u5220\u9664'
              )
            )
          )
        ),
        _react2.default.createElement(
          _ggEditor.CanvasMenu,
          null,
          _react2.default.createElement(
            _ggEditor.Command,
            { name: 'undo' },
            _react2.default.createElement(
              'div',
              { className: _index2.default.item },
              _react2.default.createElement('i', { className: _iconfont2.default.iconfont + ' ' + _iconfont2.default.iconUndo }),
              _react2.default.createElement(
                'span',
                null,
                '\u64A4\u9500'
              )
            )
          ),
          _react2.default.createElement(
            _ggEditor.Command,
            { name: 'redo' },
            _react2.default.createElement(
              'div',
              { className: _index2.default.item },
              _react2.default.createElement('i', { className: _iconfont2.default.iconfont + ' ' + _iconfont2.default.iconRedo }),
              _react2.default.createElement(
                'span',
                null,
                '\u91CD\u505A'
              )
            )
          )
        )
      );
    }
  }]);

  return MindContextMenu;
}(_react2.default.Component);

exports.default = MindContextMenu;

/***/ }),

/***/ "./src/components/EditorContextMenu/index.js":
/*!***************************************************!*\
  !*** ./src/components/EditorContextMenu/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MindContextMenu = exports.FlowContextMenu = undefined;

var _FlowContextMenu = __webpack_require__(/*! ./FlowContextMenu */ "./src/components/EditorContextMenu/FlowContextMenu.js");

var _FlowContextMenu2 = _interopRequireDefault(_FlowContextMenu);

var _MindContextMenu = __webpack_require__(/*! ./MindContextMenu */ "./src/components/EditorContextMenu/MindContextMenu.js");

var _MindContextMenu2 = _interopRequireDefault(_MindContextMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.FlowContextMenu = _FlowContextMenu2.default;
exports.MindContextMenu = _MindContextMenu2.default;

/***/ }),

/***/ "./src/components/EditorContextMenu/index.scss":
/*!*****************************************************!*\
  !*** ./src/components/EditorContextMenu/index.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/_css-loader@1.0.0@css-loader??ref--5-1!../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--5-2!./index.scss */ "./node_modules/_css-loader@1.0.0@css-loader/index.js?!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./src/components/EditorContextMenu/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/_style-loader@0.23.0@style-loader/lib/addStyles.js */ "./node_modules/_style-loader@0.23.0@style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/EditorDetailPanel/FlowDetailPanel.js":
/*!*************************************************************!*\
  !*** ./src/components/EditorDetailPanel/FlowDetailPanel.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(/*! antd */ "antd");

var _ggEditor = __webpack_require__(/*! gg-editor */ "./node_modules/_gg-editor@1.2.1@gg-editor/dist/bundle.js");

var _NodeDetail = __webpack_require__(/*! ../NodeDetail */ "./src/components/NodeDetail/index.js");

var _NodeDetail2 = _interopRequireDefault(_NodeDetail);

var _EdgeDetail = __webpack_require__(/*! ../EdgeDetail */ "./src/components/EdgeDetail/index.js");

var _EdgeDetail2 = _interopRequireDefault(_EdgeDetail);

var _GroupDetail = __webpack_require__(/*! ../GroupDetail */ "./src/components/GroupDetail/index.js");

var _GroupDetail2 = _interopRequireDefault(_GroupDetail);

var _index = __webpack_require__(/*! ./index.scss */ "./src/components/EditorDetailPanel/index.scss");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlowDetailPanel = function (_React$Component) {
  _inherits(FlowDetailPanel, _React$Component);

  function FlowDetailPanel() {
    _classCallCheck(this, FlowDetailPanel);

    return _possibleConstructorReturn(this, (FlowDetailPanel.__proto__ || Object.getPrototypeOf(FlowDetailPanel)).apply(this, arguments));
  }

  _createClass(FlowDetailPanel, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _ggEditor.DetailPanel,
        { className: _index2.default.detailPanel },
        _react2.default.createElement(
          _ggEditor.NodePanel,
          null,
          _react2.default.createElement(_NodeDetail2.default, null)
        ),
        _react2.default.createElement(
          _ggEditor.EdgePanel,
          null,
          _react2.default.createElement(_EdgeDetail2.default, null)
        ),
        _react2.default.createElement(
          _ggEditor.GroupPanel,
          null,
          _react2.default.createElement(_GroupDetail2.default, null)
        ),
        _react2.default.createElement(
          _ggEditor.MultiPanel,
          null,
          _react2.default.createElement(_antd.Card, { type: 'inner', title: '\u591A\u9009\u5C5E\u6027', bordered: false })
        ),
        _react2.default.createElement(
          _ggEditor.CanvasPanel,
          null,
          _react2.default.createElement(_antd.Card, { type: 'inner', title: '\u753B\u5E03\u5C5E\u6027', bordered: false })
        )
      );
    }
  }]);

  return FlowDetailPanel;
}(_react2.default.Component);

exports.default = FlowDetailPanel;

/***/ }),

/***/ "./src/components/EditorDetailPanel/MindDetailPanel.js":
/*!*************************************************************!*\
  !*** ./src/components/EditorDetailPanel/MindDetailPanel.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(/*! antd */ "antd");

var _ggEditor = __webpack_require__(/*! gg-editor */ "./node_modules/_gg-editor@1.2.1@gg-editor/dist/bundle.js");

var _NodeDetail = __webpack_require__(/*! ../NodeDetail */ "./src/components/NodeDetail/index.js");

var _NodeDetail2 = _interopRequireDefault(_NodeDetail);

var _index = __webpack_require__(/*! ./index.scss */ "./src/components/EditorDetailPanel/index.scss");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MindDetailPanel = function (_React$Component) {
  _inherits(MindDetailPanel, _React$Component);

  function MindDetailPanel() {
    _classCallCheck(this, MindDetailPanel);

    return _possibleConstructorReturn(this, (MindDetailPanel.__proto__ || Object.getPrototypeOf(MindDetailPanel)).apply(this, arguments));
  }

  _createClass(MindDetailPanel, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _ggEditor.DetailPanel,
        { className: _index2.default.detailPanel },
        _react2.default.createElement(
          _ggEditor.NodePanel,
          null,
          _react2.default.createElement(_NodeDetail2.default, null)
        ),
        _react2.default.createElement(
          _ggEditor.CanvasPanel,
          null,
          _react2.default.createElement(_antd.Card, { type: 'inner', title: '\u753B\u5E03\u5C5E\u6027', bordered: false })
        )
      );
    }
  }]);

  return MindDetailPanel;
}(_react2.default.Component);

exports.default = MindDetailPanel;

/***/ }),

/***/ "./src/components/EditorDetailPanel/index.js":
/*!***************************************************!*\
  !*** ./src/components/EditorDetailPanel/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MindDetailPanel = exports.FlowDetailPanel = undefined;

var _FlowDetailPanel = __webpack_require__(/*! ./FlowDetailPanel */ "./src/components/EditorDetailPanel/FlowDetailPanel.js");

var _FlowDetailPanel2 = _interopRequireDefault(_FlowDetailPanel);

var _MindDetailPanel = __webpack_require__(/*! ./MindDetailPanel */ "./src/components/EditorDetailPanel/MindDetailPanel.js");

var _MindDetailPanel2 = _interopRequireDefault(_MindDetailPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.FlowDetailPanel = _FlowDetailPanel2.default;
exports.MindDetailPanel = _MindDetailPanel2.default;

/***/ }),

/***/ "./src/components/EditorDetailPanel/index.scss":
/*!*****************************************************!*\
  !*** ./src/components/EditorDetailPanel/index.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/_css-loader@1.0.0@css-loader??ref--5-1!../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--5-2!./index.scss */ "./node_modules/_css-loader@1.0.0@css-loader/index.js?!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./src/components/EditorDetailPanel/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/_style-loader@0.23.0@style-loader/lib/addStyles.js */ "./node_modules/_style-loader@0.23.0@style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/EditorItemPanel/index.js":
/*!*************************************************!*\
  !*** ./src/components/EditorItemPanel/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(/*! antd */ "antd");

var _ggEditor = __webpack_require__(/*! gg-editor */ "./node_modules/_gg-editor@1.2.1@gg-editor/dist/bundle.js");

var _index = __webpack_require__(/*! ./index.scss */ "./src/components/EditorItemPanel/index.scss");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditorItemPanel = function (_React$Component) {
  _inherits(EditorItemPanel, _React$Component);

  function EditorItemPanel() {
    _classCallCheck(this, EditorItemPanel);

    return _possibleConstructorReturn(this, (EditorItemPanel.__proto__ || Object.getPrototypeOf(EditorItemPanel)).apply(this, arguments));
  }

  _createClass(EditorItemPanel, [{
    key: 'render',
    value: function render() {
      var base64Image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAA6CAYAAABCkyzuAAADpElEQVR4nO2av2viYBjHvz1uF4R0dggceGO1kOG4tXSoQ51uiLNQ5f6CDPkLSi04N0MnHa6DuJYOQmtHAwcZCt0uIDh2unveGDVqYpui6XPwfIZWTfK+yft5nx+W7r28vPyFwI5PH30DQjwihikihikihikihikihikihikihikihikihikihikihikihikihikihikihikihikihikihikihikihikihimfs5hkMrjAFWpoGrmVIx5uzB608yaM/IYBxgNc/GxjiCosC7DtTuxppXprbQ41d+PPMZyKvpj1lwn3q4MTfXWEpLl9HDsneMvp22Ivi/8rm9DD3dLCdk6tpQUK8G5g2oC19uBKmo2Zgqq1WMj1hZ1gcHkF/CDBYzVevLhkSqgnbY75poijGnPf2yETMVPC6LDKeLCTHjTksI7WmYbbIJpqwHUD/lELWl/9JiH55V2sRPX216NFIRGTiBLiopj0YCpi+hqJMLC6rNNFLaP+3MYD7WocRNKhF4mMuEh8J8Gc7Y3bJmR30aLYfY0Za9BOO7DNp+R0kUDOaMIJ0hRQOGoup65+JF11exh8W4z99sVFvNTXRIdRtEt2Lyafg1FxoIHSze8JjJh0E8tqbr83sVChaoID52z2XkWlSTOEtUIJNaLHEiJWRd3onc+1YzLpyhQ6yWkGr5aL+oyG2Z6/nhZ6A021uqGgghVTEyJp8MSh4ynvaeI/0c/i+oGuDbP72tVVHKecLw2ZFf/EAr2hxsyus8NFUu1wjRrvxDQVNA2r4yRHTHIb//FkFDEe3G4J5fOUC0DR0nuuonpI8UXdWHF0AZdqCQVHOOxmqe+603nHFv2Opepc2BHq4byj4tYajjiyEeO56ByW0UpR+IMCf00pLGiTO1ClVq/U4F9SLblfPnM9Db5tfPdxGDQVc9RG6FKKqqg3Ooqnw3ldLB6U0Bh5NDYNrn9HvX+FwThdM5OGTMR4ow5KB610u3rswqdr1CIP5h9SI3HmYFHXU0bMakOhUl9EondHgildzj7S9ksYPrqYGDT+lzJKbRceRYmu7uOoAPPOo8ZmN1GTgZhoGosv/IrorlcEOz8wMNnereTDhiKOIG3WUassFE9l+EG05vIaCvRtyh9TwKgoCaLmlp5I/9+/+QtpkL8uM0XEMEXEMEXEMEXEMEXEMEXEMEXEMEXEMEXEMEXEMEXEMEXEMEXEMEXEMEXEMEXEMEXEMEXEMEXEMEXEMEXEMOUf/P+JUU5omosAAAAASUVORK5CYII=';
      return _react2.default.createElement(
        _ggEditor.ItemPanel,
        { className: _index2.default.itemPanel },
        _react2.default.createElement(
          _antd.Card,
          { bordered: false },
          _react2.default.createElement(_ggEditor.Item, {
            type: 'node'
            // size="72*72"
            , shape: 'flow-circle',
            model: {
              color: '#FA8C16',
              label: '起止节点'
            },
            src: 'https://gw.alipayobjects.com/zos/rmsportal/ZnPxbVjKYADMYxkTQXRi.svg'
          }),
          _react2.default.createElement(_ggEditor.Item, {
            type: 'node'
            // size="80*48"
            , shape: 'flow-rect',
            model: {
              color: '#1890FF',
              label: '常规节点'
            },
            src: 'https://gw.alipayobjects.com/zos/rmsportal/wHcJakkCXDrUUlNkNzSy.svg'
          }),
          _react2.default.createElement(_ggEditor.Item, {
            type: 'node'
            // size="80*72"
            , shape: 'flow-rhombus',
            model: {
              color: '#13C2C2',
              label: '分叉节点'
            },
            src: 'https://gw.alipayobjects.com/zos/rmsportal/SnWIktArriZRWdGCnGfK.svg'
          }),
          _react2.default.createElement(_ggEditor.Item, {
            type: 'node'
            // size="80*48"
            , shape: 'flow-capsule',
            model: {
              color: '#722ED1',
              label: '模型节点'
            },
            src: 'https://gw.alipayobjects.com/zos/rmsportal/rQMUhHHSqwYsPwjXxcfP.svg'
          }),
          _react2.default.createElement(_ggEditor.Item, {
            type: 'node'
            // size="80*48"
            , shape: 'flow-text',
            model: {
              color: '#ffffff',
              label: '注释节点'
            },
            src: base64Image
          })
        )
      );
    }
  }]);

  return EditorItemPanel;
}(_react2.default.Component);

exports.default = EditorItemPanel;

/***/ }),

/***/ "./src/components/EditorItemPanel/index.scss":
/*!***************************************************!*\
  !*** ./src/components/EditorItemPanel/index.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/_css-loader@1.0.0@css-loader??ref--5-1!../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--5-2!./index.scss */ "./node_modules/_css-loader@1.0.0@css-loader/index.js?!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./src/components/EditorItemPanel/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/_style-loader@0.23.0@style-loader/lib/addStyles.js */ "./node_modules/_style-loader@0.23.0@style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/EditorMinimap/index.js":
/*!***********************************************!*\
  !*** ./src/components/EditorMinimap/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(/*! antd */ "antd");

var _ggEditor = __webpack_require__(/*! gg-editor */ "./node_modules/_gg-editor@1.2.1@gg-editor/dist/bundle.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditorMinimap = function (_React$Component) {
  _inherits(EditorMinimap, _React$Component);

  function EditorMinimap() {
    _classCallCheck(this, EditorMinimap);

    return _possibleConstructorReturn(this, (EditorMinimap.__proto__ || Object.getPrototypeOf(EditorMinimap)).apply(this, arguments));
  }

  _createClass(EditorMinimap, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _antd.Card,
        { type: 'inner', title: '\u7F29\u7565\u56FE', bordered: false },
        _react2.default.createElement(_ggEditor.Minimap, { height: 200 })
      );
    }
  }]);

  return EditorMinimap;
}(_react2.default.Component);

exports.default = EditorMinimap;

/***/ }),

/***/ "./src/components/EditorToolbar/FlowToolbar.js":
/*!*****************************************************!*\
  !*** ./src/components/EditorToolbar/FlowToolbar.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(/*! antd */ "antd");

var _ggEditor = __webpack_require__(/*! gg-editor */ "./node_modules/_gg-editor@1.2.1@gg-editor/dist/bundle.js");

var _index = __webpack_require__(/*! ./index.scss */ "./src/components/EditorToolbar/index.scss");

var _index2 = _interopRequireDefault(_index);

var _iconfont = __webpack_require__(/*! ../../theme/iconfont.scss */ "./src/theme/iconfont.scss");

var _iconfont2 = _interopRequireDefault(_iconfont);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlowToolbar = function (_React$Component) {
  _inherits(FlowToolbar, _React$Component);

  function FlowToolbar(props) {
    _classCallCheck(this, FlowToolbar);

    var _this2 = _possibleConstructorReturn(this, (FlowToolbar.__proto__ || Object.getPrototypeOf(FlowToolbar)).call(this, props));

    _this2.saveFlow = function () {
      var content = _this2.props.propsAPI.save();
      var sendData = {
        type: 'saveJSON',
        data: content,
        name: _this2.state.inputValue
      };
      window.top.postMessage(sendData, '*');
    };

    _this2.function_ = function () {
      var canvas = document.getElementsByTagName('canvas');
      var cav = canvas[0];
      _this2.setState({
        content_htmldata: cav.toDataURL("image/png")
      }, function () {
        _antd.message.info('图片保存成功');
      });
      var content = cav.toDataURL("image/png");

      var sendData = {
        type: 'saveImage',
        data: content
      };
      window.top.postMessage(sendData, '*');
    };

    _this2.showImg = function () {
      var canvas = document.getElementsByTagName('canvas');
      var cav = canvas[0];
      _this2.setState({
        visible: true,
        content_htmldata: cav.toDataURL("image/png")
      });
    };

    _this2.handleCancel = function (e) {
      _this2.setState({
        visible: false
      });
    };

    _this2.state = {
      content_htmldata: "",
      visible: false,
      inputValue: ''
    };
    return _this2;
  }

  _createClass(FlowToolbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this = this;
      // 接收父级传过来的回显JSON 
      window.addEventListener('message', function (event) {
        var evenData = event.data;
        if (evenData.type && evenData.type === 'loadJSON') {
          var readData = evenData.data;
          _this.props.propsAPI.read(readData);
          _this.setState({
            inputValue: evenData.name
          });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _ggEditor.Toolbar,
          { className: _index2.default.toolbar },
          _react2.default.createElement(
            _ggEditor.Command,
            { name: 'undo' },
            _react2.default.createElement(
              _antd.Tooltip,
              { title: '\u64A4\u9500', placement: 'bottom', overlayClassName: _index2.default.tooltip },
              _react2.default.createElement('i', { className: _iconfont2.default.iconfont + ' ' + _iconfont2.default.iconUndo })
            )
          ),
          _react2.default.createElement(
            _ggEditor.Command,
            { name: 'redo' },
            _react2.default.createElement(
              _antd.Tooltip,
              { title: '\u91CD\u505A', placement: 'bottom', overlayClassName: _index2.default.tooltip },
              _react2.default.createElement('i', { className: _iconfont2.default.iconfont + ' ' + _iconfont2.default.iconRedo })
            )
          ),
          _react2.default.createElement(_antd.Divider, { type: 'vertical' }),
          _react2.default.createElement(
            _ggEditor.Command,
            { name: 'copy' },
            _react2.default.createElement(
              _antd.Tooltip,
              { title: '\u590D\u5236', placement: 'bottom', overlayClassName: _index2.default.tooltip },
              _react2.default.createElement('i', { className: _iconfont2.default.iconfont + ' ' + _iconfont2.default.iconCopyO })
            )
          ),
          _react2.default.createElement(
            _ggEditor.Command,
            { name: 'paste' },
            _react2.default.createElement(
              _antd.Tooltip,
              { title: '\u7C98\u8D34', placement: 'bottom', overlayClassName: _index2.default.tooltip },
              _react2.default.createElement('i', { className: _iconfont2.default.iconfont + ' ' + _iconfont2.default.iconPasterO })
            )
          ),
          _react2.default.createElement(
            _ggEditor.Command,
            { name: 'delete' },
            _react2.default.createElement(
              _antd.Tooltip,
              { title: '\u5220\u9664', placement: 'bottom', overlayClassName: _index2.default.tooltip },
              _react2.default.createElement('i', { className: _iconfont2.default.iconfont + ' ' + _iconfont2.default.iconDeleteO })
            )
          ),
          _react2.default.createElement(_antd.Divider, { type: 'vertical' }),
          _react2.default.createElement(
            _ggEditor.Command,
            { name: 'zoomIn' },
            _react2.default.createElement(
              _antd.Tooltip,
              { title: '\u653E\u5927', placement: 'bottom', overlayClassName: _index2.default.tooltip },
              _react2.default.createElement('i', { className: _iconfont2.default.iconfont + ' ' + _iconfont2.default.iconZoomInO })
            )
          ),
          _react2.default.createElement(
            _ggEditor.Command,
            { name: 'zoomOut' },
            _react2.default.createElement(
              _antd.Tooltip,
              { title: '\u7F29\u5C0F', placement: 'bottom', overlayClassName: _index2.default.tooltip },
              _react2.default.createElement('i', { className: _iconfont2.default.iconfont + ' ' + _iconfont2.default.iconZoomOutO })
            )
          ),
          _react2.default.createElement(
            _ggEditor.Command,
            { name: 'autoZoom' },
            _react2.default.createElement(
              _antd.Tooltip,
              { title: '\u9002\u5E94\u753B\u5E03', placement: 'bottom', overlayClassName: _index2.default.tooltip },
              _react2.default.createElement('i', { className: _iconfont2.default.iconfont + ' ' + _iconfont2.default.iconFit })
            )
          ),
          _react2.default.createElement(
            _ggEditor.Command,
            { name: 'resetZoom' },
            _react2.default.createElement(
              _antd.Tooltip,
              { title: '\u5B9E\u9645\u5C3A\u5BF8', placement: 'bottom', overlayClassName: _index2.default.tooltip },
              _react2.default.createElement('i', { className: _iconfont2.default.iconfont + ' ' + _iconfont2.default.iconActualSizeO })
            )
          ),
          _react2.default.createElement(_antd.Divider, { type: 'vertical' }),
          _react2.default.createElement(
            _ggEditor.Command,
            { name: 'toBack' },
            _react2.default.createElement(
              _antd.Tooltip,
              { title: '\u5C42\u7EA7\u540E\u7F6E', placement: 'bottom', overlayClassName: _index2.default.tooltip },
              _react2.default.createElement('i', { className: _iconfont2.default.iconfont + ' ' + _iconfont2.default.iconToBack })
            )
          ),
          _react2.default.createElement(
            _ggEditor.Command,
            { name: 'toFront' },
            _react2.default.createElement(
              _antd.Tooltip,
              { title: '\u5C42\u7EA7\u524D\u7F6E', placement: 'bottom', overlayClassName: _index2.default.tooltip },
              _react2.default.createElement('i', { className: _iconfont2.default.iconfont + ' ' + _iconfont2.default.iconToFront })
            )
          ),
          _react2.default.createElement(_antd.Divider, { type: 'vertical' }),
          _react2.default.createElement(
            _ggEditor.Command,
            { name: 'multiSelect' },
            _react2.default.createElement(
              _antd.Tooltip,
              { title: '\u591A\u9009', placement: 'bottom', overlayClassName: _index2.default.tooltip },
              _react2.default.createElement('i', { className: _iconfont2.default.iconfont + ' ' + _iconfont2.default.iconSelect })
            )
          ),
          _react2.default.createElement(
            _ggEditor.Command,
            { name: 'addGroup' },
            _react2.default.createElement(
              _antd.Tooltip,
              { title: '\u6210\u7EC4', placement: 'bottom', overlayClassName: _index2.default.tooltip },
              _react2.default.createElement('i', { className: _iconfont2.default.iconfont + ' ' + _iconfont2.default.iconGroup })
            )
          ),
          _react2.default.createElement(
            _ggEditor.Command,
            { name: 'unGroup' },
            _react2.default.createElement(
              _antd.Tooltip,
              { title: '\u89E3\u7EC4', placement: 'bottom', overlayClassName: _index2.default.tooltip },
              _react2.default.createElement('i', { className: _iconfont2.default.iconfont + ' ' + _iconfont2.default.iconUngroup })
            )
          ),
          _react2.default.createElement(
            _ggEditor.Command,
            { name: 'unGroup' },
            _react2.default.createElement(
              _antd.Tooltip,
              { title: '\u89E3\u7EC4', placement: 'bottom', overlayClassName: _index2.default.tooltip },
              _react2.default.createElement('i', { className: _iconfont2.default.iconfont + ' ' + _iconfont2.default.iconUngroup })
            )
          ),
          _react2.default.createElement(_antd.Divider, { type: 'vertical' }),
          _react2.default.createElement(
            _ggEditor.Command,
            { name: 'unGroup' },
            _react2.default.createElement(
              _antd.Tooltip,
              { title: '\u4FDD\u5B58', placement: 'bottom', overlayClassName: _index2.default.tooltip },
              _react2.default.createElement(
                _antd.Button,
                { onClick: function onClick() {
                    _this3.saveFlow();
                  }, size: 'small', style: { fontSize: '12px' } },
                '\u4FDD\u5B58'
              )
            )
          ),
          _react2.default.createElement(_antd.Divider, { type: 'vertical' }),
          _react2.default.createElement(
            _antd.Tooltip,
            { title: '\u4FDD\u5B58\u56FE\u7247', placement: 'bottom', overlayClassName: _index2.default.tooltip },
            _react2.default.createElement(
              _antd.Button,
              { onClick: function onClick() {
                  _this3.function_();
                }, size: 'small', style: { fontSize: '12px' } },
              '\u4FDD\u5B58\u56FE\u7247'
            )
          ),
          _react2.default.createElement(
            _antd.Tooltip,
            { title: '\u67E5\u770B\u56FE\u7247', placement: 'bottom', overlayClassName: _index2.default.tooltip },
            _react2.default.createElement(
              _antd.Button,
              { onClick: function onClick() {
                  _this3.showImg();
                }, size: 'small', style: { fontSize: '12px', marginLeft: '15px' } },
              '\u67E5\u770B\u56FE\u7247'
            )
          ),
          _react2.default.createElement(_antd.Divider, { type: 'vertical' }),
          _react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u8F93\u5165\u6D41\u7A0B\u56FE\u540D\u79F0', value: this.state.inputValue, onChange: function onChange(e) {
              return _this3.setState({ inputValue: e.target.value });
            }, style: { width: '155px', fontSize: '12px' }, size: 'small' })
        ),
        _react2.default.createElement(
          _antd.Modal,
          {
            title: '\u67E5\u770B\u56FE\u7247',
            visible: this.state.visible,
            onCancel: this.handleCancel,
            width: '80%',
            okText: '\u786E\u5B9A',
            cancelText: '\u53D6\u6D88'
          },
          _react2.default.createElement('img', { src: this.state.content_htmldata ? '' + this.state.content_htmldata : '' })
        )
      );
    }
  }]);

  return FlowToolbar;
}(_react2.default.Component);

exports.default = (0, _ggEditor.withPropsAPI)(FlowToolbar);

/***/ }),

/***/ "./src/components/EditorToolbar/MindToolbar.js":
/*!*****************************************************!*\
  !*** ./src/components/EditorToolbar/MindToolbar.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(/*! antd */ "antd");

var _ggEditor = __webpack_require__(/*! gg-editor */ "./node_modules/_gg-editor@1.2.1@gg-editor/dist/bundle.js");

var _index = __webpack_require__(/*! ./index.scss */ "./src/components/EditorToolbar/index.scss");

var _index2 = _interopRequireDefault(_index);

var _iconfont = __webpack_require__(/*! ../../theme/iconfont.scss */ "./src/theme/iconfont.scss");

var _iconfont2 = _interopRequireDefault(_iconfont);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlowToolbar = function (_React$Component) {
  _inherits(FlowToolbar, _React$Component);

  function FlowToolbar() {
    _classCallCheck(this, FlowToolbar);

    return _possibleConstructorReturn(this, (FlowToolbar.__proto__ || Object.getPrototypeOf(FlowToolbar)).apply(this, arguments));
  }

  _createClass(FlowToolbar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _ggEditor.Toolbar,
        { className: _index2.default.toolbar },
        _react2.default.createElement(
          _ggEditor.Command,
          { name: 'undo' },
          _react2.default.createElement(
            _antd.Tooltip,
            { title: '\u64A4\u9500', placement: 'bottom', overlayClassName: _index2.default.tooltip },
            _react2.default.createElement('i', { className: _iconfont2.default.iconfont + ' ' + _iconfont2.default.iconUndo })
          )
        ),
        _react2.default.createElement(
          _ggEditor.Command,
          { name: 'redo' },
          _react2.default.createElement(
            _antd.Tooltip,
            { title: '\u91CD\u505A', placement: 'bottom', overlayClassName: _index2.default.tooltip },
            _react2.default.createElement('i', { className: _iconfont2.default.iconfont + ' ' + _iconfont2.default.iconRedo })
          )
        ),
        _react2.default.createElement(_antd.Divider, { type: 'vertical' }),
        _react2.default.createElement(
          _ggEditor.Command,
          { name: 'zoomIn' },
          _react2.default.createElement(
            _antd.Tooltip,
            { title: '\u653E\u5927', placement: 'bottom', overlayClassName: _index2.default.tooltip },
            _react2.default.createElement('i', { className: _iconfont2.default.iconfont + ' ' + _iconfont2.default.iconZoomInO })
          )
        ),
        _react2.default.createElement(
          _ggEditor.Command,
          { name: 'zoomOut' },
          _react2.default.createElement(
            _antd.Tooltip,
            { title: '\u7F29\u5C0F', placement: 'bottom', overlayClassName: _index2.default.tooltip },
            _react2.default.createElement('i', { className: _iconfont2.default.iconfont + ' ' + _iconfont2.default.iconZoomOutO })
          )
        ),
        _react2.default.createElement(
          _ggEditor.Command,
          { name: 'autoZoom' },
          _react2.default.createElement(
            _antd.Tooltip,
            { title: '\u9002\u5E94\u753B\u5E03', placement: 'bottom', overlayClassName: _index2.default.tooltip },
            _react2.default.createElement('i', { className: _iconfont2.default.iconfont + ' ' + _iconfont2.default.iconFit })
          )
        ),
        _react2.default.createElement(
          _ggEditor.Command,
          { name: 'resetZoom' },
          _react2.default.createElement(
            _antd.Tooltip,
            { title: '\u5B9E\u9645\u5C3A\u5BF8', placement: 'bottom', overlayClassName: _index2.default.tooltip },
            _react2.default.createElement('i', { className: _iconfont2.default.iconfont + ' ' + _iconfont2.default.iconActualSizeO })
          )
        ),
        _react2.default.createElement(_antd.Divider, { type: 'vertical' }),
        _react2.default.createElement(
          _ggEditor.Command,
          { name: 'append' },
          _react2.default.createElement(
            _antd.Tooltip,
            { title: '\u63D2\u5165\u540C\u7EA7', placement: 'bottom', overlayClassName: _index2.default.tooltip },
            _react2.default.createElement('i', { className: _iconfont2.default.biIcon + ' ' + _iconfont2.default.iconInsertSibling })
          )
        ),
        _react2.default.createElement(
          _ggEditor.Command,
          { name: 'appendChild' },
          _react2.default.createElement(
            _antd.Tooltip,
            { title: '\u63D2\u5165\u5B50\u7EA7', placement: 'bottom', overlayClassName: _index2.default.tooltip },
            _react2.default.createElement('i', { className: _iconfont2.default.biIcon + ' ' + _iconfont2.default.iconInsertChild })
          )
        ),
        _react2.default.createElement(_antd.Divider, { type: 'vertical' }),
        _react2.default.createElement(
          _ggEditor.Command,
          { name: 'collapse' },
          _react2.default.createElement(
            _antd.Tooltip,
            { title: '\u6298\u53E0', placement: 'bottom', overlayClassName: _index2.default.tooltip },
            _react2.default.createElement('i', { className: _iconfont2.default.biIcon + ' ' + _iconfont2.default.iconCollapseSubtree })
          )
        ),
        _react2.default.createElement(
          _ggEditor.Command,
          { name: 'expand' },
          _react2.default.createElement(
            _antd.Tooltip,
            { title: '\u5C55\u5F00', placement: 'bottom', overlayClassName: _index2.default.tooltip },
            _react2.default.createElement('i', { className: _iconfont2.default.biIcon + ' ' + _iconfont2.default.iconExpandSubtree })
          )
        )
      );
    }
  }]);

  return FlowToolbar;
}(_react2.default.Component);

exports.default = FlowToolbar;

/***/ }),

/***/ "./src/components/EditorToolbar/index.js":
/*!***********************************************!*\
  !*** ./src/components/EditorToolbar/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MindToolbar = exports.FlowToolbar = undefined;

var _FlowToolbar = __webpack_require__(/*! ./FlowToolbar */ "./src/components/EditorToolbar/FlowToolbar.js");

var _FlowToolbar2 = _interopRequireDefault(_FlowToolbar);

var _MindToolbar = __webpack_require__(/*! ./MindToolbar */ "./src/components/EditorToolbar/MindToolbar.js");

var _MindToolbar2 = _interopRequireDefault(_MindToolbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.FlowToolbar = _FlowToolbar2.default;
exports.MindToolbar = _MindToolbar2.default;

/***/ }),

/***/ "./src/components/EditorToolbar/index.scss":
/*!*************************************************!*\
  !*** ./src/components/EditorToolbar/index.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/_css-loader@1.0.0@css-loader??ref--5-1!../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--5-2!./index.scss */ "./node_modules/_css-loader@1.0.0@css-loader/index.js?!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./src/components/EditorToolbar/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/_style-loader@0.23.0@style-loader/lib/addStyles.js */ "./node_modules/_style-loader@0.23.0@style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/GroupDetail/index.js":
/*!*********************************************!*\
  !*** ./src/components/GroupDetail/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(/*! antd */ "antd");

var _ggEditor = __webpack_require__(/*! gg-editor */ "./node_modules/_gg-editor@1.2.1@gg-editor/dist/bundle.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = _antd.Form.Item;


var inlineFormItemLayout = {
  labelCol: {
    sm: { span: 6 }
  },
  wrapperCol: {
    sm: { span: 18 }
  }
};

var GroupDetail = function (_React$Component) {
  _inherits(GroupDetail, _React$Component);

  function GroupDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GroupDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GroupDetail.__proto__ || Object.getPrototypeOf(GroupDetail)).call.apply(_ref, [this].concat(args))), _this), _this.handleSubmit = function (e) {
      e.preventDefault();

      var _this$props = _this.props,
          form = _this$props.form,
          propsAPI = _this$props.propsAPI;
      var getSelected = propsAPI.getSelected,
          update = propsAPI.update;


      form.validateFieldsAndScroll(function (err, values) {
        if (err) {
          return;
        }

        var item = getSelected()[0];

        if (!item) {
          return;
        }

        update(item, _extends({}, values));
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GroupDetail, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          form = _props.form,
          propsAPI = _props.propsAPI;
      var getFieldDecorator = form.getFieldDecorator;
      var getSelected = propsAPI.getSelected;


      var item = getSelected()[0];

      if (!item) {
        return null;
      }

      var _item$getModel = item.getModel(),
          _item$getModel$label = _item$getModel.label,
          label = _item$getModel$label === undefined ? '新建分组' : _item$getModel$label;

      return _react2.default.createElement(
        _antd.Card,
        { type: 'inner', title: '\u7FA4\u7EC4\u5C5E\u6027', bordered: false },
        _react2.default.createElement(
          _antd.Form,
          { onSubmit: this.handleSubmit },
          _react2.default.createElement(
            Item,
            _extends({
              label: '\u540D\u79F0'
            }, inlineFormItemLayout),
            getFieldDecorator('label', {
              initialValue: label
            })(_react2.default.createElement(_antd.Input, { onBlur: this.handleSubmit }))
          )
        )
      );
    }
  }]);

  return GroupDetail;
}(_react2.default.Component);

exports.default = _antd.Form.create()((0, _ggEditor.withPropsAPI)(GroupDetail));

/***/ }),

/***/ "./src/components/NodeDetail/index.js":
/*!********************************************!*\
  !*** ./src/components/NodeDetail/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(/*! antd */ "antd");

var _ggEditor = __webpack_require__(/*! gg-editor */ "./node_modules/_gg-editor@1.2.1@gg-editor/dist/bundle.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = _antd.Form.Item;


var inlineFormItemLayout = {
  labelCol: {
    sm: { span: 6 }
  },
  wrapperCol: {
    sm: { span: 18 }
  }
};

var NodeDetail = function (_React$Component) {
  _inherits(NodeDetail, _React$Component);

  function NodeDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NodeDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NodeDetail.__proto__ || Object.getPrototypeOf(NodeDetail)).call.apply(_ref, [this].concat(args))), _this), _this.handleSubmit = function (e) {
      e.preventDefault();

      var _this$props = _this.props,
          form = _this$props.form,
          propsAPI = _this$props.propsAPI;
      var getSelected = propsAPI.getSelected,
          executeCommand = propsAPI.executeCommand,
          update = propsAPI.update;


      form.validateFieldsAndScroll(function (err, values) {
        if (err) {
          return;
        }

        var item = getSelected()[0];

        if (!item) {
          return;
        }

        executeCommand(function () {
          update(item, _extends({}, values));
        });
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NodeDetail, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          form = _props.form,
          propsAPI = _props.propsAPI;
      var getFieldDecorator = form.getFieldDecorator;
      var getSelected = propsAPI.getSelected;


      var item = getSelected()[0];

      if (!item) {
        return null;
      }

      var _item$getModel = item.getModel(),
          label = _item$getModel.label;

      return _react2.default.createElement(
        _antd.Card,
        { type: 'inner', title: '\u8282\u70B9\u5C5E\u6027', bordered: false },
        _react2.default.createElement(
          _antd.Form,
          { onSubmit: this.handleSubmit },
          _react2.default.createElement(
            Item,
            _extends({
              label: '\u6807\u7B7E'
            }, inlineFormItemLayout),
            getFieldDecorator('label', {
              initialValue: label
            })(_react2.default.createElement(_antd.Input, { onBlur: this.handleSubmit }))
          )
        )
      );
    }
  }]);

  return NodeDetail;
}(_react2.default.Component);

exports.default = _antd.Form.create()((0, _ggEditor.withPropsAPI)(NodeDetail));

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Flow = __webpack_require__(/*! ./pages/Flow */ "./src/pages/Flow/index.js");

var _Flow2 = _interopRequireDefault(_Flow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_Flow2.default, null), document.getElementById('root'));

/***/ }),

/***/ "./src/pages/Flow/index.js":
/*!*********************************!*\
  !*** ./src/pages/Flow/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(/*! antd */ "antd");

var _ggEditor = __webpack_require__(/*! gg-editor */ "./node_modules/_gg-editor@1.2.1@gg-editor/dist/bundle.js");

var _ggEditor2 = _interopRequireDefault(_ggEditor);

var _EditorMinimap = __webpack_require__(/*! ../../components/EditorMinimap */ "./src/components/EditorMinimap/index.js");

var _EditorMinimap2 = _interopRequireDefault(_EditorMinimap);

var _EditorContextMenu = __webpack_require__(/*! ../../components/EditorContextMenu */ "./src/components/EditorContextMenu/index.js");

var _EditorToolbar = __webpack_require__(/*! ../../components/EditorToolbar */ "./src/components/EditorToolbar/index.js");

var _EditorItemPanel = __webpack_require__(/*! ../../components/EditorItemPanel */ "./src/components/EditorItemPanel/index.js");

var _EditorItemPanel2 = _interopRequireDefault(_EditorItemPanel);

var _EditorDetailPanel = __webpack_require__(/*! ../../components/EditorDetailPanel */ "./src/components/EditorDetailPanel/index.js");

var _index = __webpack_require__(/*! ./index.scss */ "./src/pages/Flow/index.scss");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlowPage = function (_React$Component) {
  _inherits(FlowPage, _React$Component);

  function FlowPage() {
    _classCallCheck(this, FlowPage);

    return _possibleConstructorReturn(this, (FlowPage.__proto__ || Object.getPrototypeOf(FlowPage)).apply(this, arguments));
  }

  _createClass(FlowPage, [{
    key: 'renderFlow',
    value: function renderFlow() {
      return _react2.default.createElement(_ggEditor.Flow, { className: _index2.default.flow });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _ggEditor2.default,
        { className: _index2.default.editor },
        _react2.default.createElement(
          _antd.Row,
          { type: 'flex', className: _index2.default.editorHd },
          _react2.default.createElement(
            _antd.Col,
            { span: 24 },
            _react2.default.createElement(_EditorToolbar.FlowToolbar, null)
          )
        ),
        _react2.default.createElement(
          _antd.Row,
          { type: 'flex', className: _index2.default.editorBd },
          _react2.default.createElement(
            _antd.Col,
            { span: 4, className: _index2.default.editorSidebar },
            _react2.default.createElement(_EditorItemPanel2.default, null)
          ),
          _react2.default.createElement(
            _antd.Col,
            { span: 16, className: _index2.default.editorContent },
            this.renderFlow()
          ),
          _react2.default.createElement(
            _antd.Col,
            { span: 4, className: _index2.default.editorSidebar },
            _react2.default.createElement(_EditorDetailPanel.FlowDetailPanel, null),
            _react2.default.createElement(_EditorMinimap2.default, null)
          )
        ),
        _react2.default.createElement(_EditorContextMenu.FlowContextMenu, null)
      );
    }
  }]);

  return FlowPage;
}(_react2.default.Component);

exports.default = FlowPage;

/***/ }),

/***/ "./src/pages/Flow/index.scss":
/*!***********************************!*\
  !*** ./src/pages/Flow/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/_css-loader@1.0.0@css-loader??ref--5-1!../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--5-2!./index.scss */ "./node_modules/_css-loader@1.0.0@css-loader/index.js?!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./src/pages/Flow/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/_style-loader@0.23.0@style-loader/lib/addStyles.js */ "./node_modules/_style-loader@0.23.0@style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/theme/iconfont.scss":
/*!*********************************!*\
  !*** ./src/theme/iconfont.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/_css-loader@1.0.0@css-loader??ref--5-1!../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--5-2!./iconfont.scss */ "./node_modules/_css-loader@1.0.0@css-loader/index.js?!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./src/theme/iconfont.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/_style-loader@0.23.0@style-loader/lib/addStyles.js */ "./node_modules/_style-loader@0.23.0@style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "antd":
/*!**********************************************************************************!*\
  !*** external {"root":"antd","commonjs":"antd","commonjs2":"antd","amd":"antd"} ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_antd__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs":"react","commonjs2":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!*****************************************************************************************************!*\
  !*** external {"root":"ReactDOM","commonjs2":"react-dom","commonjs":"react-dom","amd":"react-dom"} ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ })

/******/ });
});
//# sourceMappingURL=reactGGE.js.map