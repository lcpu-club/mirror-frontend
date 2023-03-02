<script setup lang="ts">
import { LineChart } from 'echarts/charts'
import {
  DatasetComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent
} from 'echarts/components'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import VChart from 'vue-echarts'
import {
  convertStatusToChart,
  type OptionConvertStatusToChart,
  type StatusResultWithTime
} from '~~/lib/status'

use([
  CanvasRenderer,
  LineChart,
  DatasetComponent,
  GridComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent
])

const props = defineProps<{
  api: string
  option?: OptionConvertStatusToChart
}>()

const respRef = useFetch<StatusResultWithTime>(props.api)
const chartOption = convertStatusToChart(props.option)(respRef.data)
</script>

<template>
  <StatusBaseChart>
    <template #heading>
      <slot></slot>
    </template>
    <template #chart>
      <AsyncData :data="respRef">
        <v-chart :option="chartOption" autoresize />
      </AsyncData>
    </template>
  </StatusBaseChart>
</template>
