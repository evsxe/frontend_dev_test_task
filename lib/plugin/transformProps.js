"use strict";

exports.__esModule = true;
exports.default = transformProps;

var _core = require("@superset-ui/core");

function transformProps(chartProps) {
  var {
    width,
    height,
    formData,
    queriesData
  } = chartProps;
  var data = queriesData[0].data;
  var metricName = (0, _core.getMetricLabel)(formData.metric);
  var shape = formData.shape || 'rect';
  var color = formData.color || 'blue';
  var percentage = data[0][metricName];
  return {
    width,
    height,
    metricName,
    percentage,
    shape,
    color
  };
}