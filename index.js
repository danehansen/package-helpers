"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putClassOnWindow = putClassOnWindow;
exports.putContentsOnWindow = putContentsOnWindow;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function putClassOnWindow(constructor, className) {
  var namespace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'danehansen';

  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== undefined) {
    window[namespace] = window[namespace] || {};
    window[namespace][className] = constructor;
  }
}

function putContentsOnWindow(contents, className) {
  var namespace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'danehansen';

  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== undefined) {
    window[namespace] = window[namespace] || {};
    window[namespace][className] = _objectSpread({}, contents);
  }
}
