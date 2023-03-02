<script setup lang="ts">
const { pending, data: rawData } = useFetch('/api/status/network')
const option = convertStatusToChart({
  yAxisLabelFormatter: (val: number) => `${val / 1000} Mbps`
})(rawData)
</script>

<template>
  <StatusBase>
    <template #heading> Network Traffic </template>
    <template #chart>
      <v-chart v-if="!pending" :option="option" autoresize />
      <p v-else>Fetching data...</p>
    </template>
  </StatusBase>
</template>
