<template>
  <div class="task-card">
    <h4>{{ task.title }}</h4>
    <p>{{ task.description }}</p>
    <small>Status: {{ task.status }}</small>
  </div>
</template>

<script>
export default {
  name: 'TaskCard',
  props: {
    task: Object
  }
}
</script>

<style scoped>
.task-card {
  background-color: #ffffff;
  border: 1px solid #ddd;
  padding: 0.75rem;
  border-radius: 6px;
}

body.dark .task-card {
  background-color: #374151;
  border-color: #4b5563;
  color: #f3f4f6;
}
</style>
