"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _inputComp = _interopRequireDefault(require("./comp/inputComp"));
require("./styl.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DefaultSlider = function DefaultSlider(_ref) {
  var sliderList = _ref.sliderList,
    _ref$animDuration = _ref.animDuration,
    animDuration = _ref$animDuration === void 0 ? '15' : _ref$animDuration;
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    slideIndex = _useState2[0],
    setSlideIndex = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    slideTimer = _useState4[0],
    setSlideTimer = _useState4[1];
  var timer = animDuration * 1000; //time is multiplied by a thousand so that the function executes in seconds

  var changeSlide = function changeSlide(index) {
    //function that change slide on click
    setSlideIndex(index);
    clearInterval(slideTimer);
    setSlideTimer(setTimeout(function () {
      setSlideIndex((slideIndex + 1) % sliderList.length); // the value is divided by the length of the array, after reaching the last index the function returned to the first argument
    }, timer) // here you can change slide display time 20000 = 20s
    );
  };

  (0, _react.useEffect)(function () {
    setSlideTimer(setTimeout(function () {
      setSlideIndex((slideIndex + 1) % sliderList.length);
    }, timer) // here you can change slide display time 20000 = 20s
    );

    return function () {
      clearInterval(slideTimer);
    };
  }, [slideIndex]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "slider-wrapper",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "slider",
      style: {
        backgroundImage: "url(".concat(sliderList[slideIndex].img, ")")
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "slider-menu",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "slider-indic-bar",
        children: sliderList.map(function (user, i) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_inputComp["default"], {
            slideId: i,
            anim: slideIndex === i ? true : false,
            handleButtonClick: changeSlide,
            animDuration: animDuration
          }, sliderList[i].id);
        })
      })
    })]
  });
};
var _default = DefaultSlider;
exports["default"] = _default;