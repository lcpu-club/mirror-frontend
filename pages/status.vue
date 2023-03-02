<script setup lang="ts">
const statusLineChartOptions = {
  network: {
    yAxisLabelFormatter: (val: number) => `${val / 1000} Mbps`
  },
  disk_io: {
    yAxisLabelFormatter: (val: number) => `${val / 1000} MB/s`
  },
  disk_space: {
    yAxisLabelFormatter: (val: number) => `${val / 1000000} TB`
  },
  cpu: {
    yAxisLabelFormatter: (val: number) => `${val}%`
  },
  ram: {
    yAxisLabelFormatter: (val: number) => `${val} MiB`
  }
}
</script>

<template>
  <div class="flex justify-center">
    <div class="shadow flex-1 max-w-256 flex flex-col gap-4">
      <div class="flex justify-between items-center p-4 border-b">
        <div class="text-2xl">Mirror Status</div>
      </div>
      <div class="flex flex-col">
        <StatusLineChart api="/api/status/network" :option="statusLineChartOptions.network">
          Network Traffic
        </StatusLineChart>

        <StatusLineChart api="/api/status/disk_io" :option="statusLineChartOptions.disk_io">
          Disk I/O
        </StatusLineChart>

        <StatusLineChart api="/api/status/disk_space" :option="statusLineChartOptions.disk_space">
          Disk Space
        </StatusLineChart>

        <StatusLineChart api="/api/status/cpu" :option="statusLineChartOptions.cpu">
          CPU Usage
        </StatusLineChart>

        <StatusLineChart api="/api/status/ram" :option="statusLineChartOptions.ram">
          RAM Usage
        </StatusLineChart>
      </div>
    </div>
  </div>
</template>
