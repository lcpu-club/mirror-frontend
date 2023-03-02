<script setup lang="ts">
const { pending, data: rawData } = useFetch('/api/status/ram')
const option = convertStatusToChart({
  yAxisLabelFormatter: (val: number) => `${val} MiB`
})(rawData)
</script>

<template>
  <StatusBase>
    <template #heading> RAM Usage </template>
    <template #chart>
      <v-chart v-if="!pending" :option="option" autoresize />
      <p v-else>Fetching data...</p>
    </template>
  </StatusBase>
</template>
