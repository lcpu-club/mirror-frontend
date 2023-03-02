<script setup lang="ts">
const { pending, data: rawData } = useFetch('/api/status/cpu')
const option = convertStatusToChart({
  yAxisLabelFormatter: (val: number) => `${val}%`
})(rawData)
</script>

<template>
  <StatusBase>
    <template #heading> CPU Usage </template>
    <template #chart>
      <v-chart v-if="!pending" :option="option" autoresize />
      <p v-else>Fetching data...</p>
    </template>
  </StatusBase>
</template>
