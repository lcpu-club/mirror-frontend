<script setup lang="ts">
const { pending, data: rawData } = useFetch('/api/status/disk_space')
const option = convertStatusToChart({
  yAxisLabelFormatter: (val: number) => `${val / 1000000} TB`
})(rawData)
</script>

<template>
  <StatusBase>
    <template #heading> Disk Space </template>
    <template #chart>
      <v-chart v-if="!pending" :option="option" autoresize />
      <p v-else>Fetching data...</p>
    </template>
  </StatusBase>
</template>
