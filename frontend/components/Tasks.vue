<template>
  <div class="task-card border p-3 rounded shadow hover:shadow-md transition">
    <h4 class="font-medium">{{ task.title }}</h4>
    <p class="text-gray-600 dark:text-gray-300">{{ task.description }}</p>
    <span class="text-sm text-gray-500 dark:text-gray-400">Status: {{ task.status }}</span>
  </div>
</template>

<script>
export default {
  props: {
    task: Object
  }
}
</script>
