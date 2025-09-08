<template>
  <div class="task-card">
    <h4 class="font-medium">{{ task.title }}</h4>
    <p class="text-gray-600 dark:text-gray-300">{{ task.description }}</p>
    <span class="text-sm text-gray-500 dark:text-gray-400">Project: {{ task.projectName }}</span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  task: Object
})
</script>

<style scoped>
.task-card {
  background-color: #ffffff;
  border: 1px solid #ddd;
  padding: 0.75rem;
  border-radius: 6px;
  transition: all 0.2s ease-in-out;
}
body.dark .task-card {
  background-color: #374151;
  border-color: #4b5563;
  color: #f3f4f6;
}
</style>
