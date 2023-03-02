import type { EChartsOption } from 'echarts'

export interface StatusResultWithTime {
  result: {
    labels: ['time', ...any]
    data: [number, ...any][]
  }
}

export interface OptionConvertStatusToChart {
  yAxisLabelFormatter?: (value: any) => string
}

function rawConvertStatusToChart<S extends StatusResultWithTime>(
  status: S | undefined,
  option?: OptionConvertStatusToChart
): EChartsOption | undefined {
  return status
    ? {
        textStyle: {
          fontFamily: 'Inter, "Helvetica Neue", Arial, sans-serif'
        },
        legend: {},
        tooltip: {
          trigger: 'axis',
          textStyle: {
            fontSize: 12,
            fontWeight: 'normal'
          }
        },
        dataset: {
          dimensions: status.result.labels,
          source: status.result.data
            .sort(([timeA], [timeB]) => timeA - timeB)
            .map(([time, ...tail]) => [time * 1000, ...tail])
        },
        xAxis: { type: 'time' },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: option?.yAxisLabelFormatter
          }
        },
        series: status.result.labels.slice(1).map((name, idx) => ({
          type: 'line',
          name,
          encode: { x: 0, y: 1 + idx },
          smooth: true,
          symbol: 'none',
          sampling: 'lttb',
          emphasis: {
            focus: 'series'
          },
          animationEasing: 'cubicInOut',
          animationDuration: 750,
          animationDelay: 100 * idx
        }))
      }
    : undefined
}

export const convertStatusToChart =
  (option?: OptionConvertStatusToChart) =>
  <S extends StatusResultWithTime>(rawData: Ref<S | undefined | null>) =>
    computed(() => (rawData.value ? rawConvertStatusToChart(rawData.value, option) : undefined))
