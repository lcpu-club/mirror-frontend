import { BarChart, LineChart } from 'echarts/charts'
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

export default defineNuxtPlugin((nuxt) => {
  use([
    CanvasRenderer,
    LineChart,
    BarChart,
    DatasetComponent,
    GridComponent,
    TitleComponent,
    TooltipComponent,
    LegendComponent
  ])
  nuxt.vueApp.component('v-chart', VChart)
})
