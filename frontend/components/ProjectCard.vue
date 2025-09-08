<template>
  <div class="project-card border p-4 rounded shadow hover:shadow-md transition">
    <h3 class="font-semibold text-lg">{{ project.name }}</h3>
    <p class="text-gray-600 dark:text-gray-300">{{ project.description }}</p>
    <span class="text-sm text-gray-500 dark:text-gray-400">Team: {{ project.teamName }}</span>
  </div>
</template>

<script>
export default {
  props: {
    project: Object
  }
}
</script>

<style scoped>
.project-card {
  background-color: #fff;
}
</style>
