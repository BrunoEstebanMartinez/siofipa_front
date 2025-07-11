import React from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { getPastDates, rgbaColor } from 'helpers/utils';
import { BarChart } from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import dayjs from 'dayjs';
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
    getThemeColor('info'),
    getThemeColor('gray-300')
  ],
  legend: {
    data: [
      'All Received Tickets',
      'New Received Tickets',
      'Total Received Load Tickets'
    ],
    icon: 'circle',
    itemWidth: 10,
    itemHeight: 10,
    padding: [0, 0, 0, 0],
    textStyle: {
      color: getThemeColor('gray-700'),
      fontWeight: '500',
      fontSize: '13px'
    },
    left: 0,
    itemGap: 16
  },
  tooltip: {
    trigger: 'item',
    padding: [7, 10],
    backgroundColor: getThemeColor('gray-100'),
    borderColor: getThemeColor('gray-300'),
    textStyle: { color: getThemeColor('gray-900') },
    borderWidth: 1,
    transitionDuration: 0,
    axisPointer: {
      type: 'none'
    }
  },
  xAxis: {
    data: getPastDates(10).map(date => dayjs(date).format('MMM DD')),
    splitLine: { show: false },
    splitArea: { show: false },

    axisLabel: {
      color: getThemeColor('gray-600')
    },

    axisLine: {
      lineStyle: {
        color: getThemeColor('gray-300'),
        type: 'dashed'
      }
    },
    axisTick: {
      show: false
    }
  },
  yAxis: {
    splitLine: {
      lineStyle: {
        color: getThemeColor('gray-300'),
        type: 'dashed'
      }
    },
    axisLabel: {
      color: getThemeColor('gray-600')
    }
  },
  series: [
    {
      name: 'All Received Tickets',
      type: 'bar',
      stack: 'one',
      emphasis: {
        itemStyle: {
          shadowColor: rgbaColor(getThemeColor('gray-1100'), 0.3)
        }
      },
      data: [28, 35, 28, 25, 21, 32, 25, 30, 23, 37]
    },
    {
      name: 'New Received Tickets',
      type: 'bar',
      stack: 'two',
      emphasis: {
        itemStyle: {
          shadowColor: rgbaColor(getThemeColor('gray-1100'), 0.3)
        }
      },
      data: [20, 27, 21, 15, 17, 22, 18, 20, 15, 27]
    },
    {
      name: 'Total Received Load Tickets',
      type: 'bar',
      stack: 'three',
      emphasis: {
        itemStyle: {
          shadowColor: rgbaColor(getThemeColor('gray-1100'), 0.3)
        }
      },
      data: [15, 21, 23, 21, 12, 14, 13, 15, 10, 19]
    }
  ],
  itemStyle: {
    borderRadius: [3, 3, 0, 0]
  },

  barWidth: '13.03px',
  grid: {
    top: '13%',
    bottom: 0,
    left: 0,
    right: '20px',
    containLabel: true
  }
});

const ReceivedTicketsChart = () => {
  const { getThemeColor } = useAppContext();
  return (
    <ReactEChartsCore
      echarts={echarts}
      option={getOptions(getThemeColor)}
      style={{ height: '23.5rem', minWidth: '52rem' }}
    />
  );
};

export default ReceivedTicketsChart;
