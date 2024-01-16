import { getMetricLabel, ChartProps, DataRecord } from '@superset-ui/core';

export default function transformProps(chartProps: ChartProps) {
  const { width, height, formData, queriesData } = chartProps;
  const data = queriesData[0].data as DataRecord[];
  const metricName = getMetricLabel(formData.metric);
  const shape = formData.shape || 'rect';
  const color = formData.color || 'blue';
  const percentage = data[0][metricName];

  return {
    width,
    height,
    metricName,
    percentage,
    shape,
    color
  };
}
