'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.putClassOnWindow = putClassOnWindow;
exports.putContentsOnWindow = putContentsOnWindow;
function putClassOnWindow(constructor, className) {
  var namespace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'danehansen';

  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== undefined) {
    window[namespace] = window[namespace] || {};
    window[namespace][className] = constructor;
  }
}

function putContentsOnWindow(contents, className) {
  var namespace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'danehansen';

  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== undefined) {
    window[namespace] = window[namespace] || {};
    window[namespace][className] = _extends({}, contents);
  }
}
