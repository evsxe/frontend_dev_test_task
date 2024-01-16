"use strict";

exports.__esModule = true;
exports.default = void 0;

var _core = require("@superset-ui/core");

var _buildQuery = _interopRequireDefault(require("./buildQuery"));

var _controlPanel = _interopRequireDefault(require("./controlPanel"));

var _transformProps = _interopRequireDefault(require("./transformProps"));

var _thumbnail = _interopRequireDefault(require("../images/thumbnail.png"));

var _example = _interopRequireDefault(require("../images/example1.png"));

var _example2 = _interopRequireDefault(require("../images/example2.png"));

var _example3 = _interopRequireDefault(require("../images/example3.png"));

var _example4 = _interopRequireDefault(require("../images/example4.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class LiquidChartPlugin extends _core.ChartPlugin {
  constructor() {
    var metadata = new _core.ChartMetadata({
      description: 'A plugin to visualize a percentage metric between 0 % and 100 %',
      name: (0, _core.t)('Liquid'),
      thumbnail: _thumbnail.default,
      exampleGallery: [{
        url: _example.default,
        caption: (0, _core.t)('Circle')
      }, {
        url: _example2.default,
        caption: (0, _core.t)('Diamond')
      }, {
        url: _example3.default,
        caption: (0, _core.t)('Pin')
      }, {
        url: _example4.default,
        caption: (0, _core.t)('Triangle')
      }]
    });
    super({
      buildQuery: _buildQuery.default,
      controlPanel: _controlPanel.default,
      loadChart: () => Promise.resolve().then(() => _interopRequireWildcard(require('../Liquid'))),
      metadata,
      transformProps: _transformProps.default
    });
  }

}

exports.default = LiquidChartPlugin;