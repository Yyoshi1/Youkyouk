<template>
  <div class="project-card">
    <h3 class="font-semibold text-lg">{{ project.name }}</h3>
    <p class="text-gray-600 dark:text-gray-300">{{ project.description }}</p>
    <span class="text-sm text-gray-500 dark:text-gray-400">Team: {{ project.teamName }}</span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  project: Object
})
</script>

<style scoped>
.project-card {
  background-color: #ffffff;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 6px;
  transition: all 0.2s ease-in-out;
}
body.dark .project-card {
  background-color: #374151;
  border-color: #4b5563;
  color: #f3f4f6;
}
</style>
