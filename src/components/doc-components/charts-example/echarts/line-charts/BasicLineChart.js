import React from 'react';
import FalconComponentCard from 'components/common/FalconComponentCard';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { LineChart } from 'echarts/charts';
import {
  GridComponent,
  TitleComponent,
  TooltipComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { useAppContext } from 'providers/AppProvider';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LineChart,
  CanvasRenderer
]);

const tooltipFormatter = params => {
  return `
<div>
    <h6 class="fs-10 text-700 mb-0">
    <span class="dot me-1 d-inline-block" style="background-color:${
      params[0].borderColor ? params[0].borderColor : params[0].color
    }"></span>
      ${params[0].name} : ${params[0].value}
    </h6>
</div>
`;
};

const chartCode = `function ChartOptions() {
  const { getThemeColor } = useAppContext();

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const data = [1272, 1301, 1402, 1216, 1086, 1236, 1219, 1330, 1367, 1416, 1297, 1204];

  const getOption = () => ({
    tooltip: {
      trigger: 'axis',
      padding: [7, 10],
      backgroundColor: getThemeColor('gray-100'),
      borderColor: getThemeColor('gray-300'),
      textStyle: getThemeColor('gray-1100'),
      borderWidth: 1,
      formatter: tooltipFormatter,
      transitionDuration: 0,
      axisPointer: {
        type: 'none'
      }
    },
    xAxis: {
      type: 'category',
      data: months,
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          color: getThemeColor('gray-300')
        }
      },
      axisTick: { show: false },
      axisLabel: {
        color: getThemeColor('gray-400'),
        formatter: value => value.substring(0, 3),
        margin: 15
      },
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: getThemeColor('gray-200')
        }
      },
      boundaryGap: false,
      axisLabel: {
        show: true,
        color: getThemeColor('gray-400'),
        margin: 15
      },
      axisTick: { show: false },
      axisLine: { show: false },
      min: 600
    },
    series: [
      {
        type: 'line',
        data,
        itemStyle: {
          color: getThemeColor('white'),
          borderColor: getThemeColor('primary'),
          borderWidth: 2
        },
        lineStyle: {
          color: getThemeColor('primary')
        },
        showSymbol: false,
        symbol: 'circle',
        symbolSize: 10,
        smooth: false,
        emphasis: {
          scale: true
        }
      }
    ],
    grid: { right: '3%', left: '10%', bottom: '10%', top: '5%' }
  });
  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getOption()}
      style={{ height: '18.75rem' }}
    />
  );
}
`;

const BasicLineChart = () => {
  return (
    <FalconComponentCard>
      <FalconComponentCard.Header title="Basic line chart" light={false} />
      <FalconComponentCard.Body
        code={chartCode}
        language="jsx"
        scope={{
          ReactEChartsCore,
          echarts,
          useAppContext,
          tooltipFormatter
        }}
      />
    </FalconComponentCard>
  );
};

export default BasicLineChart;
