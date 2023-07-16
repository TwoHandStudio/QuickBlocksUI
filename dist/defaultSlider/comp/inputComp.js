"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var InputComp = function InputComp(_ref) {
  var slideId = _ref.slideId,
    anim = _ref.anim,
    handleButtonClick = _ref.handleButtonClick,
    animDuration = _ref.animDuration;
  var handleClick = function handleClick() {
    handleButtonClick(slideId);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "slider-indic",
    onClick: handleClick,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "slider-indic-el ".concat(anim ? "animate" : ""),
      style: {
        animationDuration: animDuration + 's'
      }
    })
  });
};
var _default = InputComp;
exports["default"] = _default;