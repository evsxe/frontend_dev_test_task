"use strict";

exports.__esModule = true;
exports.default = Liquid;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@superset-ui/core");

var _plots = require("@ant-design/plots");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var Styles = _core.styled.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  height: ", ";\n  width: ", ";\n"])), _ref => {
  var {
    height
  } = _ref;
  return height;
}, _ref2 => {
  var {
    width
  } = _ref2;
  return width;
});

function Liquid(props) {
  var {
    shape,
    color,
    percentage,
    height,
    width
  } = props;
  var rootElem = /*#__PURE__*/(0, _react.createRef)();
  var config = (0, _react.useMemo)(() => ({
    percent: percentage,
    outline: {
      border: 2,
      distance: 4
    },
    shape,
    color,
    wave: {
      length: 128
    },
    width,
    height,
    autoFit: false
  }), [height, width, percentage, shape, color]);
  return /*#__PURE__*/_react.default.createElement(Styles, {
    ref: rootElem,
    height: height,
    width: width
  }, /*#__PURE__*/_react.default.createElement(_plots.Liquid, config));
}