"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputComp = exports.BtnOuter = exports.BtnInner = void 0;
var _react = _interopRequireDefault(require("react"));
var _arrow = _interopRequireDefault(require("../img/arrow.png"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var InputComp = function InputComp(_ref) {
  var slideId = _ref.slideId,
    anim = _ref.anim,
    handleButtonClick = _ref.handleButtonClick,
    animDuration = _ref.animDuration,
    theme = _ref.theme;
  var handleClick = function handleClick() {
    handleButtonClick(slideId);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "slider-indic".concat(theme, " ").concat(anim ? 'animate' + theme : ""),
    style: {
      animationDuration: animDuration + 's'
    },
    onClick: handleClick,
    children: theme === 3 && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "slider-indic-el ".concat(anim ? "animate" : ""),
      style: {
        animationDuration: animDuration + 's'
      }
    })
  });
};
exports.InputComp = InputComp;
var BtnInner = function BtnInner(_ref2) {
  var theme = _ref2.theme,
    arrows = _ref2.arrows,
    fun = _ref2.fun;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    className: "btnChange".concat(theme),
    onClick: fun,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
      alt: "arrow",
      src: _arrow["default"]
    })
  });
};
exports.BtnInner = BtnInner;
var BtnOuter = function BtnOuter(_ref3) {
  var theme = _ref3.theme,
    arrows = _ref3.arrows,
    fun = _ref3.fun;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    className: "btnChangeOut".concat(theme),
    onClick: fun,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
      alt: "arrow",
      src: _arrow["default"]
    })
  });
};
exports.BtnOuter = BtnOuter;