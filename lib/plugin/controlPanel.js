"use strict";

exports.__esModule = true;
exports.default = void 0;

var _core = require("@superset-ui/core");

var _chartControls = require("@superset-ui/chart-controls");

var config = {
  controlPanelSections: [_chartControls.sections.legacyRegularTime, {
    label: (0, _core.t)('Query'),
    expanded: true,
    controlSetRows: [['metric'], ['adhoc_filters']]
  }, {
    label: (0, _core.t)('Customize'),
    expanded: true,
    controlSetRows: [[{
      name: 'shape',
      config: {
        type: 'SelectControl',
        label: (0, _core.t)('Shape'),
        default: 'rect',
        choices: [// [value, label]
        ['circle', (0, _core.t)('Circle')], ['diamond', (0, _core.t)('Diamond')], ['triangle', (0, _core.t)('Triangle')], ['pin', (0, _core.t)('Pin')], ['rect', (0, _core.t)('Rectangle')]],
        renderTrigger: true,
        description: (0, _core.t)('What shape does the chart have')
      }
    }]]
  }, {
    label: (0, _core.t)('Customize'),
    expanded: true,
    controlSetRows: [[{
      name: 'color',
      config: {
        type: 'SelectControl',
        label: (0, _core.t)('Color'),
        default: 'blue',
        choices: [// [value, label]
        ['#0000FF', (0, _core.t)('Blue')], ['#FF0000', (0, _core.t)('Red')], ['#00FF00', (0, _core.t)('Green')], ['#FFFF00', (0, _core.t)('Yellow')], ['#FF00FF', (0, _core.t)('Magenta')]],
        renderTrigger: true,
        description: (0, _core.t)('Customize the color of the chart elements')
      }
    }]]
  }]
};
var _default = config;
exports.default = _default;