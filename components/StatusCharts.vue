<template>
  <div class="flex flex-col">
    <StatusLineChart v-for="(chart, i) of charts" :key="i" :api="chart.api" :option="chart.options">
      {{ chart.label }}
    </StatusLineChart>
  </div>
</template>

<script setup lang="ts">
const charts = [
  {
    api: 'network',
    label: 'Network Traffic',
    options: {
      yAxisLabelFormatter: (val: number) => `${val / 1000} Mbps`
    }
  },
  {
    api: 'disk_io',
    label: 'Disk I/O',
    options: {
      yAxisLabelFormatter: (val: number) => `${val / 1000} MB/s`
    }
  },
  {
    api: 'disk_space',
    label: 'Disk Space',
    options: {
      yAxisLabelFormatter: (val: number) => `${val / 1000000} TB`
    }
  },
  {
    api: 'cpu',
    label: 'CPU Usage',
    options: {
      yAxisLabelFormatter: (val: number) => `${val}%`
    }
  },
  {
    api: 'ram',
    label: 'RAM Usage',
    options: {
      yAxisLabelFormatter: (val: number) => `${val} MiB`
    }
  }
]
</script>
