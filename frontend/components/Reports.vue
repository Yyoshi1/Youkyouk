<template>
  <div class="reports p-4 space-y-6">
    <h2 class="text-xl font-bold">Reports</h2>
    <div class="grid grid-cols-2 gap-4">
      <div class="report-card p-4 border rounded hover:bg-gray-100 dark:hover:bg-gray-800" v-for="report in reports" :key="report.id">
        <h3 class="font-semibold">{{ report.title }}</h3>
        <p class="text-gray-600 dark:text-gray-300">{{ report.summary }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const reports = ref([
  { id: 1, title: 'Project Alpha Report', summary: 'Progress summary for Project Alpha' },
  { id: 2, title: 'Team B Report', summary: 'Progress summary for Team B' }
])
</script>

<style scoped>
.report-card {
  transition: all 0.2s ease-in-out;
}
</style>
