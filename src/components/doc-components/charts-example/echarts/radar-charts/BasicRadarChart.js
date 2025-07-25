import React from 'react';
import FalconComponentCard from 'components/common/FalconComponentCard';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import { RadarChart } from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { rgbaColor } from 'helpers/utils';
import { useAppContext } from 'providers/AppProvider';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  RadarChart,
  CanvasRenderer,
  LegendComponent
]);

const chartCode = `function ChartOptions() {
  const { getThemeColor } = useAppContext();

  const getOption = () => ({
    legend: {
      orient: 'vertical',
      left: 'left',
      textStyle: {
        color: getThemeColor('gray-600')
      }
    },
    tooltip: {
      trigger: 'item',
      padding: [7, 10],
      backgroundColor: getThemeColor('gray-100'),
      borderColor: getThemeColor('gray-300'),
      textStyle: { color: getThemeColor('gray-1100') },
      borderWidth: 1,
      transitionDuration: 0,
      axisPointer: {
        type: 'none'
      }
    },

    radar: {
      indicator: [
        { name: 'Marketing', max: 6500 },
        { name: 'Admin', max: 16000 },
        { name: 'Tech', max: 30000 },
        { name: 'Support', max: 38000 },
        { name: 'Dev ', max: 52000 },
        { name: 'Sales ', max: 25000 }
      ],
      radius: 120,
      splitLine: {
        lineStyle: {
          color: rgbaColor(getThemeColor('gray-700'))
        }
      }
    },

    series: [
      {
        type: 'radar',
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: 'Data A',
            itemStyle: {
              color: getThemeColor('primary')
            }
          },
          {
            value: [5000, 14000, 28000, 26000, 42000, 21000],
            name: 'Data B',
            itemStyle: {
              color: getThemeColor('warning')
            }
          }
        ]
      }
    ]
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

const BasicRadarChart = () => {
  return (
    <FalconComponentCard dir="ltr">
      <FalconComponentCard.Header title="Radar chart" light={false} />
      <FalconComponentCard.Body
        code={chartCode}
        language="jsx"
        scope={{
          ReactEChartsCore,
          echarts,
          useAppContext,
          rgbaColor
        }}
      />
    </FalconComponentCard>
  );
};

export default BasicRadarChart;
