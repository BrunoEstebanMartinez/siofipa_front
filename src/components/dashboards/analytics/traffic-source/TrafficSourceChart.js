import React from 'react';
import dayjs from 'dayjs';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { BarChart } from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { tooltipFormatter } from 'helpers/echart-utils';
import { getPastDates, rgbaColor } from 'helpers/utils';
import { useAppContext } from 'providers/AppProvider';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  CanvasRenderer,
  LegendComponent
]);

const getOptions = getThemeColor => ({
  color: [
    getThemeColor('primary'),
    rgbaColor(getThemeColor('primary'), 0.8),
    rgbaColor(getThemeColor('primary'), 0.6),
    rgbaColor(getThemeColor('primary'), 0.4),
    rgbaColor(getThemeColor('primary'), 0.2)
  ],
  legend: {
    data: ['Display', 'Direct', 'Organic Search', 'Paid Search', 'Other'],
    left: 5,
    itemWidth: 10,
    itemHeight: 10,
    borderRadius: 0,
    icon: 'circle',
    inactiveColor: getThemeColor('gray-400'),
    textStyle: { color: getThemeColor('gray-700') },
    itemGap: 20
  },
  xAxis: {
    type: 'category',
    data: getPastDates(7).map(date => dayjs(date).format('DD MMM, YYYY')),
    axisLine: {
      show: false
    },
    splitLine: {
      lineStyle: {
        color: getThemeColor('gray-200')
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: getThemeColor('gray-600'),
      formatter: value => dayjs(value).format('ddd')
    }
  },
  yAxis: {
    type: 'value',
    position: 'right',
    splitLine: {
      lineStyle: {
        color: getThemeColor('gray-200')
      }
    },
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: true,
      color: getThemeColor('gray-600'),
      margin: 15
    }
  },
  tooltip: {
    trigger: 'axis',
    padding: [7, 10],
    axisPointer: {
      type: 'none'
    },
    backgroundColor: getThemeColor('gray-100'),
    borderColor: getThemeColor('gray-300'),
    textStyle: { color: getThemeColor('gray-700') },
    borderWidth: 1,
    transitionDuration: 0,
    formatter: tooltipFormatter
  },

  series: [
    {
      name: 'Display',
      type: 'bar',
      stack: 'total',
      data: [320, 302, 301, 334, 390, 330, 320]
    },
    {
      name: 'Direct',
      type: 'bar',
      stack: 'total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Organic Search',
      type: 'bar',
      stack: 'total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Paid Search',
      type: 'bar',
      stack: 'total',
      data: [150, 212, 201, 154, 190, 330, 410]
    },
    {
      name: 'Other',
      type: 'bar',
      stack: 'total',
      data: [820, 832, 901, 934, 1290, 1330, 1320],
      itemStyle: {
        borderRadius: [5, 5, 0, 0]
      }
    }
  ],

  grid: {
    containLabel: true,
    right: '5px',
    left: 0,
    bottom: 0,
    top: '15%'
  }
});

const TrafficSourceChart = () => {
  const { getThemeColor } = useAppContext();
  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getOptions(getThemeColor)}
      style={{ height: '21.875rem' }}
    />
  );
};

export default TrafficSourceChart;
