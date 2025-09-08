<template>
  <div class="task-card" :class="{ dark: isDark }">
    <h4>{{ task.title }}</h4>
    <p>{{ task.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'TaskCard',
  props: {
    task: Object,
    isDark: Boolean
  }
}
</script>

<style scoped>
.task-card {
  background-color: #ffffff;
  border: 1px solid #ddd;
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 0.5rem;
}
.task-card.dark {
  background-color: #374151;
  border-color: #4b5563;
  color: #f3f4f6;
}
</style>
